import{d as c,o as u,j as s,k as m,Q as n,W as a,F as f,M as h,K as _,L as g,Z as y,u as b}from"./53SD24Bo.js";import{u as w}from"./DvUUAc5c.js";import{u as x}from"./B7ZxQ_gM.js";import{u as k}from"./DdhqXmur.js";import{V as v}from"./ByZ6H8Q9.js";import"./BbcJJQG6.js";import"./RQxsyxdU.js";import"../sb-preview/runtime.js";import"./BnJv8bNI.js";import"./okj3qyDJ.js";import"./CGdESDy3.js";import"./C4QhmNcb.js";import"./BALwooav.js";import"./CxzE6WfI.js";import"./BsOxdBIg.js";import"./DhTbjJlp.js";import"./f6gYKWT5.js";import"./CxEt8vcx.js";import"./7RO02bE1.js";import"./Cai0IfA4.js";import"./D6RfD4r0.js";import"./BW6nfHgy.js";import"./BjsSTAr7.js";import"./CGjrUY8T.js";import"./DXnxRZFx.js";import"./B2IxrC02.js";import"./CLVl6rL5.js";import"./C-ucudUc.js";import"./oAL5f6fw.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="ae0ff2bc-e728-42db-ad1c-aa3d20c32db0",e._sentryDebugIdIdentifier="sentry-dbid-ae0ff2bc-e728-42db-ad1c-aa3d20c32db0")}catch{}})();const S={class:"no-results text-center md:text-left"},E={class:"heading-4 md:heading-2 break-words"},T={class:"description-regular md:heading-5 mt-4"},V={class:"mt-10 flex flex-col flex-wrap gap-4 sm:flex-row"},N=c({__name:"VNoResults",props:{searchTerm:{}},setup(e){const r=e,{externalSources:i,externalSourcesType:d}=k(),{sendCustomEvent:l}=x(),p=t=>{l("SELECT_EXTERNAL_SOURCE",{name:t,mediaType:d.value,query:r.searchTerm,component:"VNoResults"})};return u(()=>{w().setFiltersState(!1)}),(t,R)=>(s(),m("div",S,[n("h1",E,a(t.$t("noResults.heading",{query:t.searchTerm})),1),n("h2",T,a(t.$t("noResults.alternatives")),1),n("div",V,[(s(!0),m(f,null,h(b(i),o=>(s(),_(v,{key:o.name,as:"VLink",href:o.url,variant:"bordered-gray",size:"medium",class:"label-bold !w-full text-default sm:!w-auto","show-external-icon":"","has-icon-end":"","external-icon-size":6,onMousedown:C=>p(o.name)},{default:g(()=>[y(a(o.name),1)]),_:2},1032,["href","onMousedown"]))),128))])]))}});N.__docgenInfo={exportName:"default",displayName:"VNoResults",description:"",tags:{},props:[{name:"searchTerm",description:"The search term for which the external sources links are generated.",required:!0,type:{name:"string"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VErrorSection/VNoResults.vue"]};export{N as default};
