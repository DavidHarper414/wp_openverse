import{d as G,r as v,B as k,k as F,l as z,M as y,p as C,j as V,R as N,w as T,c as x,e as P,E as R,N as K,u as r,a as g,L,D as S,I as j}from"./DwwldUEF.js";import{k as n}from"./CzJ3cZ9I.js";import{e as w}from"./DZP0BHtF.js";import{u as W}from"./VcnMPoS3.js";import"./CWoQmekT.js";import{V as _}from"./cfTPNM7V.js";import{w as A}from"./TLA9Fm80.js";import{V as E}from"./Dhs1Or-2.js";import{V as U}from"./DoSYsHAz.js";import{_ as M}from"./DhTbjJlp.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l=new a.Error().stack;l&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[l]="560157e4-70e4-4d94-833e-544205f50945",a._sentryDebugIdIdentifier="sentry-dbid-560157e4-70e4-4d94-833e-544205f50945")}catch{}})();const ne=["vertical","horizontal","columns"],B=Symbol("VItemGroupContext"),$=Symbol("VItemGroupFocusContext"),H=["role"],J=G({__name:"VItemGroup",props:{direction:{default:"vertical"},bordered:{type:Boolean,default:!0},type:{default:"menu"},size:{default:"small"},showCheck:{type:Boolean,default:!0}},setup(a){const l=[n.ArrowUp,n.ArrowDown,n.ArrowLeft,n.ArrowRight],d=a,c=v(null),u=v(!1);C(B,d);const p=W().$i18n,m=(e,o)=>p.localeProperties.value.dir==="rtl"&&d.direction==="horizontal"?o:e,t=e=>{var I;if(!l.includes(e.key)||!c.value)return;e.preventDefault();const o=e.target,s=Array.from((I=c.value)==null?void 0:I.querySelectorAll("[data-item-group-item]")),h=s.findIndex(q=>q===o);switch(e.key){case n.ArrowUp:case m(n.ArrowLeft,n.ArrowRight):return h===0?w(s[s.length-1]):w(s[h-1]);case n.ArrowDown:case m(n.ArrowRight,n.ArrowLeft):return h===s.length-1?w(s[0]):w(s[h+1]);default:return}},i=v(0),b=(e,o)=>{o&&!e&&(i.value-=1),!o&&e&&(i.value+=1)},f={isGroupFocused:k(u),onItemKeyPress:t,selectedCount:k(i),setSelected:b};return C($,f),(e,o)=>(V(),F("div",{ref_key:"nodeRef",ref:c,class:y(["flex w-full",{"flex-col":e.direction==="vertical","flex-row":e.direction!=="vertical","flex-wrap":e.direction==="columns"}]),role:e.type,onFocusin:o[0]||(o[0]=s=>u.value=!0),onFocusout:o[1]||(o[1]=s=>u.value=!1)},[z(e.$slots,"default")],42,H))}});J.__docgenInfo={exportName:"default",displayName:"VItemGroup",description:"",tags:{},props:[{name:"direction",description:"The direction to render the items in.",tags:{default:[{description:"'vertical'",title:"default"}]},required:!1,type:{name:"ItemGroupDirection"},defaultValue:{func:!1,value:'"vertical"'}},{name:"bordered",description:`Whether to render a bordered, separated list of items. When false each
item will have whitespace separating them instead of borders.`,tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"type",description:"The type of item group and item to render. This directly affects the `role` attribute\nof the container and the items themselves.\n\n`menu` should be used when providing a menu of independent options.",tags:{see:[{description:"https://www.w3.org/TR/wai-aria-1.1/#menu\n\n`radiogroup` should be used when providing a menu of options where only one can be selected at a time.",title:"see"},{description:"https://www.w3.org/TR/wai-aria-1.1/#radiogroup",title:"see"}]},required:!1,type:{name:"ItemGroupType"},defaultValue:{func:!1,value:'"menu"'}},{name:"size",description:"Size of the item group corresponds to the size of the component.",required:!1,type:{name:"ItemGroupSize"},defaultValue:{func:!1,value:'"small"'}},{name:"showCheck",description:"Whether to show a checkmark when an item is selected.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default",description:"The items in the item group. Must include some `VItem`s but can"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VItemGroup/VItemGroup.vue"]};const D=G({inheritAttrs:!1,__name:"VItem",props:{selected:{type:Boolean},isFirst:{type:Boolean},as:{default:"button"}},emits:["click"],setup(a){const l=a,d=N(),c=g($),u=v(!1),p=g(_,!1),m=g(B);if(!m||!c)throw new Error("Do not use `VItem` outside of a `VItemGroup`. Use `VButton` instead.");const t=m,i=c;p&&t.bordered&&A("Bordered popover items are not supported"),d.size&&A("The `size` prop should be passed to the parent `VItemGroup` component."),T(()=>l.selected,(e,o)=>i.setSelected(e,o));const b=x(()=>t.type!=="radiogroup"||i.selectedCount.value===0&&l.isFirst&&!i.isGroupFocused.value||u.value||!i.isGroupFocused.value&&l.selected?0:-1),f=x(()=>{const{class:e,...o}=d;return{class:e,vButtonAttrs:o}});return(e,o)=>(V(),F("div",{class:y(["flex",[r(t).direction,f.value.class,{[`${r(t).direction}-bordered`]:r(t).bordered,[`${r(t).direction}-popover-item`]:r(p),"border border-overlay":r(t).bordered,"has-check":r(t).showCheck,"font-semibold":e.selected&&!r(t).showCheck,"bg-transparent":e.selected&&r(t).bordered&&r(t).showCheck},r(p)?"px-2":""]])},[P(E,K({"data-item-group-item":"",as:e.as,class:["relative min-w-full justify-between border-0 hover:bg-transparent-hover focus-visible:z-10",{"w-max":r(t).direction==="horizontal","!p-3":r(t).size==="small","!p-5 !ps-6":r(t).size==="medium","bg-transparent-hover ring-offset-gray-2":e.selected&&r(t).showCheck,"text-default":e.as==="VLink","!px-2":!r(t).showCheck}],variant:"transparent-tx",size:"disabled",pressed:e.selected,role:r(t).type==="radiogroup"?"radio":"menuitemcheckbox","aria-checked":e.selected,tabindex:b.value},f.value.vButtonAttrs,{onFocus:o[0]||(o[0]=s=>u.value=!0),onBlur:o[1]||(o[1]=s=>u.value=!1),onKeydown:r(i).onItemKeyPress,onClick:o[2]||(o[2]=s=>e.$emit("click"))}),{default:R(()=>[L("div",{class:y(["flex w-full flex-grow gap-x-2 whitespace-nowrap rounded-sm",[`${r(t).direction}-content`]])},[z(e.$slots,"default",{},void 0,!0)],2),e.selected&&r(t).direction==="vertical"&&r(t).showCheck?(V(),S(U,{key:0,class:y(["absolute",r(t).size==="small"?"end-3":"end-5"]),name:"item-indicator"},null,8,["class"])):j("",!0)]),_:3},16,["as","class","pressed","role","aria-checked","tabindex","onKeydown"])],2))}}),ae=M(D,[["__scopeId","data-v-d7b39dd7"]]);D.__docgenInfo={exportName:"default",displayName:"VItem",description:"",tags:{},props:[{name:"selected",description:"Whether the item is selected/checked.",required:!0,type:{name:"boolean"}},{name:"isFirst",description:"Whether the item is the first in the group.",required:!0,type:{name:"boolean"}},{name:"as",description:"To change the underlying component for the VButton,\npass `as` prop.",tags:{variants:[{description:"'button', 'VLink'",title:"variants"}]},required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"VLink"'}]},defaultValue:{func:!1,value:'"button"'}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VItemGroup/VItem.vue"]};export{ae as V,J as _,ne as i};
