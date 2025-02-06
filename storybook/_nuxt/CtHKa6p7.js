import{d as v,r as f,c as y,k as w,Q as k,l as c,u as o,K as O,L as I,N as V,j as h}from"./53SD24Bo.js";import"./RQxsyxdU.js";import{u as B}from"./C37UCF5e.js";import{_ as C}from"./3xs5K9VZ.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="33d54fd1-9d6b-4e70-a504-986d26cc534b",t._sentryDebugIdIdentifier="sentry-dbid-33d54fd1-9d6b-4e70-a504-986d26cc534b")}catch{}})();const q=Object.freeze({auto:"auto",10:"10",20:"20",30:"30",40:"40",50:"50",popover:"50","focus-ring":"10",snackbar:"20","global-audio":"20"}),F=t=>Object.keys(q).includes(t.toString()),T=v({__name:"VPopover",props:{id:{},activateOnHover:{type:Boolean,default:void 0},hideOnEsc:{type:Boolean,default:void 0},hideOnClickOutside:{type:Boolean,default:void 0},autoFocusOnShow:{type:Boolean,default:void 0},autoFocusOnHide:{type:Boolean,default:void 0},placement:{},strategy:{},label:{},labelledBy:{},zIndex:{default:"popover"},clippable:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:void 0}},emits:["open","close"],setup(t,{expose:n,emit:r}){const a=t;if(!F(a.zIndex))throw new Error(`Invalid z-index value in VPopover: ${a.zIndex}`);const m=r,i=f(!1),s=f(null),d=y(()=>{var e;return(e=s.value)!=null&&e.firstElementChild?s.value.firstElementChild:void 0}),{close:l,onTriggerClick:u,triggerA11yProps:g}=B({id:a.id,visibleRef:i,emit:m});return n({close:l}),(e,p)=>(h(),w("div",null,[k("div",{ref_key:"triggerContainerRef",ref:s,class:"flex w-min items-stretch whitespace-nowrap",onClick:p[0]||(p[0]=(...b)=>o(u)&&o(u)(...b))},[c(e.$slots,"trigger",{a11yProps:o(g),visible:i.value})],512),d.value?(h(),O(C,{key:0,id:e.id,"z-index":e.zIndex,visible:i.value,"trigger-element":d.value,placement:e.placement,strategy:e.strategy,clippable:e.clippable,"hide-on-esc":e.hideOnEsc,"hide-on-click-outside":e.hideOnClickOutside,"auto-focus-on-show":e.autoFocusOnShow,"auto-focus-on-hide":e.autoFocusOnHide,"trap-focus":e.trapFocus,hide:o(l),"aria-label":e.label,"aria-labelledby":e.labelledBy},{default:I(()=>[c(e.$slots,"default",{close:o(l)})]),_:3},8,["id","z-index","visible","trigger-element","placement","strategy","clippable","hide-on-esc","hide-on-click-outside","auto-focus-on-show","auto-focus-on-hide","trap-focus","hide","aria-label","aria-labelledby"])):V("",!0)]))}});T.__docgenInfo={exportName:"default",displayName:"VPopover",description:"",tags:{},expose:[{name:"close"}],props:[{name:"id",description:`The id used to keep track of the popover in the open dialog stack, to enable
nested dialogs.`,required:!0,type:{name:"string"}},{name:"activateOnHover",description:"Whether the popover should show when the trigger is hovered on.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnEsc",description:"Whether the popover should hide when the <kbd>Escape</kbd> key is pressed.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"hideOnClickOutside",description:`Whether the popover should hide when a click happens outside the popover content,
excluding the trigger. When the trigger is clicked and the popover is open, nothing
will happen.`,tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"autoFocusOnShow",description:`Whether the popover content should automatically receive focus when the popover
opens.`,tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"autoFocusOnHide",description:"Whether the trigger should automatically receive focus when the popover closes.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"placement",description:"The placement of the popover relative to the trigger. Should be one of the options\nfor `placement` passed to floating-ui.",tags:{see:[{description:"https://floating-ui.com/docs/tutorial#placements",title:"see"}],default:[{description:"'bottom'",title:"default"}]},required:!1,type:{name:"Placement"}},{name:"strategy",description:`The positioning strategy of the popover. If your reference element is in a fixed container
use the fixed strategy; otherwise use the default, absolute strategy.`,tags:{see:[{description:"https://floating-ui.com/docs/computeposition#strategy",title:"see"}],default:[{description:"'absolute'",title:"default"}]},required:!1,type:{name:"Strategy"}},{name:"label",description:"The label of the popover content. Must be provided if `labelledBy` is empty.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"labelledBy",description:"The id of the element labelling the popover content. Must be provided if `label` is empty.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"zIndex",description:"the z-index to apply to the popover content",required:!1,type:{name:"ZIndex"},defaultValue:{func:!1,value:'"popover"'}},{name:"clippable",description:`Whether the popover height should be clipped and made scrollable
if the window height is too small.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trapFocus",description:`Whether the popover should trap focus. This means that when the popover is open,
the user cannot tab out of the popover content. This is useful for ensuring that
the popover content is accessible.`,tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"open",description:"Fires when the popover opens, regardless of reason. There are no extra parameters."},{name:"close",description:"Fires when the popover closes, regardless of reason. There are no extra parameters."}],slots:[{name:"trigger",scoped:!0,description:"The trigger, should be a button 99.99% of the time. If you need custom event handling on the trigger button, ensure bubbling is not prevented or else the popover will not open",bindings:[{name:"a11y-props",title:"binding"},{title:"binding",type:{name:"boolean"},name:"visible"}]},{name:"default",scoped:!0,description:"The content of the popover",bindings:[{title:"binding",type:{name:"function"},name:"close"}]}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VPopover/VPopover.vue"]};export{T as _};
