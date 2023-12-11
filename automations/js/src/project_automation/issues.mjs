import { getBoard } from '../utils/projects.mjs'

/**
 * Set the "Priority" custom field based on the issue's labels. Also move
 * the card for critical issues directly to the "📅 To Do" column.
 *
 * @param issue {import('@octokit/rest')}
 * @param board {import('../utils/projects.mjs').Project}
 * @param card {import('../utils/projects.mjs').Card}
 * @param core {import('@actions/core')} for logging
 */
async function syncPriority(issue, board, card, core) {
  core.debug(`Syncing priority for issue "${issue.number}".`)
  const priority = issue.labels.find((label) =>
    label.name.includes('priority')
  )?.name

  if (priority) {
    await board.setCustomChoiceField(card.id, 'Priority', priority, core)
  }
  if (priority === '🟥 priority: critical') {
    await board.moveCard(card.id, board.columns.ToDo)
  }
}

/**
 * This is the entrypoint of the script.
 *
 * @param octokit {import('@octokit/rest').Octokit} the Octokit instance to use
 * @param core {import('@actions/core')} GitHub Actions toolkit, for logging
 * @param context {import('@actions/github').context} info about the current event
 */
export const main = async (octokit, core, context) => {
  const { EVENT_ACTION: eventAction } = process.env

  core.debug(`Event action received: ${eventAction}`)

  const issue = context.payload.issue
  const label = context.payload.label
  core.info('Issue details:', issue)

  if (issue.labels.some((label) => label.name === '🧭 project: thread')) {
    core.warning('Issue is a project thread. Exiting.')
    process.exit(0)
  }

  await core.group('Processing Issue or PR', async () => {
    core.debug('Getting instance for the project')
    const backlogBoard = await getBoard(octokit, core, 'Backlog')

    core.debug('Adding the issue or PR to the project')
    const card = await backlogBoard.addCard(issue.node_id)

    switch (eventAction) {
      case 'opened':
      case 'reopened': {
        if (issue.labels.some((label) => label.name === '⛔ status: blocked')) {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.Blocked)
        } else {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.Backlog)
        }
        await syncPriority(issue, backlogBoard, card, core)
        break
      }

      case 'closed': {
        if (issue.state_reason === 'completed') {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.Done)
        } else {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.Discarded)
        }
        break
      }

      case 'assigned': {
        if (card.status === backlogBoard.columns.Backlog) {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.ToDo)
        }
        break
      }

      case 'labeled': {
        if (label.name === '⛔ status: blocked') {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.Blocked)
        }
        await syncPriority(issue, backlogBoard, card, core)
        break
      }

      case 'unlabeled': {
        if (label.name === '⛔ status: blocked') {
          await backlogBoard.moveCard(card.id, backlogBoard.columns.Backlog)
        }
        await syncPriority(issue, backlogBoard, card, core)
        break
      }
    }
  })
}
