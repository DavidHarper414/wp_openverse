import{d,k as o,L as p,Q as c,F as m,H as f,u as h,j as s,D as x,E as y,U as _}from"./DwwldUEF.js";import{u as g}from"./DqyB4W5h.js";import{u as E}from"./CCnNU4Wm.js";import{V as w}from"./Dhs1Or-2.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="6578c67d-33e9-4a8f-91a6-b970432a8f20",e._sentryDebugIdIdentifier="sentry-dbid-6578c67d-33e9-4a8f-91a6-b970432a8f20")}catch{}})();const b={class:"p-4 pt-0 sm:max-w-[25rem] sm:p-6 sm:pt-0","data-testid":"source-list-popover"},v={class:"label-regular px-3 pb-4 text-start !leading-normal"},k=d({__name:"VExternalSourceList",props:{searchTerm:{}},setup(e){const r=e,{externalSources:a,externalSourcesType:i}=E(),{sendCustomEvent:l}=g(),u=t=>{l("SELECT_EXTERNAL_SOURCE",{name:t,mediaType:i.value,query:r.searchTerm,component:"VExternalSourceList"})};return(t,S)=>(s(),o("div",b,[p("p",v,c(t.$t("externalSources.caption",{openverse:"Openverse"})),1),(s(!0),o(m,null,f(h(a),n=>(s(),x(w,{key:n.name,as:"VLink",variant:"transparent-gray",size:"medium",class:"label-regular !w-full justify-between","show-external-icon":"","has-icon-end":"","external-icon-size":6,href:n.url,"send-external-link-click-event":!1,onMousedown:V=>u(n.name)},{default:y(()=>[_(c(n.name),1)]),_:2},1032,["href","onMousedown"]))),128))]))}});k.__docgenInfo={exportName:"default",displayName:"VExternalSourceList",description:"",tags:{},props:[{name:"searchTerm",description:"The search term for which the external sources links are generated.",required:!0,type:{name:"string"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VExternalSearch/VExternalSourceList.vue"]};export{k as _};
