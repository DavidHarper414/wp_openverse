import{d as l,r as i,o as b,b as u,c as s,k as f,l as c,R as p,a as m,j as y}from"./53SD24Bo.js";import{t as v}from"./CYxeF2X6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="2fb5a575-c1b9-4bde-b08b-4b55513f4502",e._sentryDebugIdIdentifier="sentry-dbid-2fb5a575-c1b9-4bde-b08b-4b55513f4502")}catch{}})();const _=["id","aria-labelledby","tabindex"],g=l({__name:"VTabPanel",props:{id:{}},setup(e){const a=e,n=m(v);if(!n)throw new Error("Could not resolve tabContext in VTabPanel");const t=i(null);b(()=>{n.registerPanel(t)}),u(()=>n.unregisterPanel(t));const r=s(()=>a.id===n.selectedId.value),d=s(()=>n.variant.value==="bordered"?"border rounded-sm first:rounded-ss-none":"border-t");return(o,h)=>(y(),f("div",{id:`panel-${o.id}`,ref_key:"internalPanelRef",ref:t,"aria-labelledby":`tab-${o.id}`,role:"tabpanel",tabindex:r.value?0:-1,class:p(["min-h-0 overflow-y-auto border-default p-6",[d.value,{hidden:!r.value}]])},[c(o.$slots,"default")],10,_))}});g.__docgenInfo={exportName:"default",displayName:"VTabPanel",description:"",tags:{},props:[{name:"id",description:"Tabpanel id should be the same as the controlling tab id.\nThe id of the HTML element will be `panel-${id}`",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VTabs/VTabPanel.vue"]};export{g as _};
