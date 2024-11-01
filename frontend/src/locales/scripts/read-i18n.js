/**
 * In `en.json` we use a limited version of JSON5. It is valid JSON5 but only
 * uses a limited set of features and syntax. This package provides functions
 * to read this format and convert it into regular JSON.
 *
 * The JSON5 file is converted to an AST by Babel, treating it as a JavaScript
 * `ObjectExpression` which is then converted into an `Entry` instance, which
 * is capable of emitting regular JSON.
 *
 * @typedef {{ [key: string]: string | SimJson }} SimJson
 */

const fs = require("fs")
const path = require("path")

const babel = require("@babel/parser")

/**
 * An `Entry` refers to one i18n translation definition. It can be one of two
 * types:
 * - string-string: where the value of the key is one string (e.g. 'key' in
 *   the example above)
 * - string-object: where the key contains other nested key value pairs (e.g.
 *   'key-b' in the example above)
 */
class Entry {
  /**
   * Create a new `Entry` instance with the given key, value and comment.
   *
   * @param key {string} the key of the mapping
   * @param comment {string | undefined} the documentation comment, if any
   */
  constructor(key, comment = undefined) {
    this.key = key // set to '' for the JSON top-level object
    this.doc = comment

    this.value = undefined // populated for string-string entries, `undefined` otherwise
    this.children = [] // populated for string-object entries, `[]` otherwise
    this.parent = undefined
  }

  /**
   * Get the path to this entry as a list of path component strings.
   *
   * @return {string[]} the list of all path components up to this entry
   */
  get path() {
    const path = this.parent?.path ?? []
    path.push(this.key)
    return path
  }

  /**
   * Get the fully qualified name of the instance w.r.t. the root `Entry`. The
   * `path` field is sliced to remove the root key '' from the list.
   *
   * @return {string} the dot separated path to this entry
   */
  get lineage() {
    return this.path.slice(1).join(".")
  }

  /**
   * Register the given entry as a child of this one. Adds this entry as the
   * child's parent.
   *
   * @param child {Entry} the child to register
   */
  addChild(child) {
    this.children.push(child)
    child.parent = this
  }

  /**
   * Get the JSON representation of this entry and all its children. This
   * conversion loses information present in comments.
   *
   * @return {SimJson} a POJSO containing the translation mappings
   */
  toJSON() {
    // This is a string-string entry, will be handled by parent.
    if (this.value) {
      return {}
    }

    /** @type {SimJson} */
    const pojo = {}
    for (const child of this.children) {
      if (child.value) {
        pojo[child.key] = child.value
      } else {
        pojo[child.key] = child.toJSON()
      }
    }
    return pojo
  }
}

/**
 * Determine the key for the entry, which will be a string literal if quoted,
 * or an identifier if not quoted.
 *
 * @param keyNode {import('@babel/types').StringLiteral|import('@babel/types').Identifier}
 * @return {string} the text content of the key
 */
const parseKey = (keyNode) => {
  if (keyNode === undefined) {
    return ""
  }
  switch (keyNode.type) {
    case "StringLiteral": {
      return keyNode.value
    }
    case "Identifier": {
      return keyNode.name
    }
  }
}

/**
 * Parse a single or multi-line comment. If the comment is multi-line, newlines
 * and asterisks will be removed from the output.
 *
 * @param commentNode {import('@babel/types').CommentLine|import('@babel/types').CommentBlock}
 * @return {string} the text content of the comment
 */
const parseComment = (commentNode) => {
  switch (commentNode.type) {
    case "CommentLine": {
      return commentNode.value.trim()
    }
    case "CommentBlock": {
      return commentNode.value
        .replace(/\n|\*+/g, "")
        .replace(/\s+/g, " ")
        .trim()
    }
  }
}

/**
 * Populate the value or children of the `Entry` depending on whether the value
 * is a string or an object expression.
 *
 * @param entry {Entry} the entry to populate
 * @param valueNode {import('@babel/types').StringLiteral|import('@babel/types').ObjectExpression}
 */
const parseValue = (entry, valueNode) => {
  switch (valueNode.type) {
    case "StringLiteral": {
      entry.value = valueNode.value
      break
    }
    case "ObjectExpression": {
      valueNode.properties.map(parseObjProperty).forEach((child) => {
        entry.addChild(child)
      })
      break
    }
  }
}

/**
 * Create an `Entry` instance by parsing the AST node from Babel.
 *
 * @param node {import('@babel/types').ObjectProperty}
 * @return {Entry} the entry generated by parsing the node
 */
const parseObjProperty = (node) => {
  const key = parseKey(node.key)
  const comments = node.leadingComments?.map(parseComment).join("")
  const entry = new Entry(key, comments)
  parseValue(entry, node.value)
  return entry
}

/**
 * Parse the given filename into a tree of `Entry` instances.
 * @param filename {string} the name of the JSON file to read
 * @return {Entry} the root `Entry` instance for the top-level JSON object
 */
const parseJson = (filename) =>
  parseObjProperty({
    value: babel.parseExpression(
      fs.readFileSync(path.join(__dirname, filename), "utf-8")
    ),
  })

module.exports = { Entry, parseJson }
