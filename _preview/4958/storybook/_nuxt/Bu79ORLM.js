import{v as N}from"./C67TMzvP.js";import{a as B}from"./nLTbcOiO.js";import{u as I}from"./BJg5KvtX.js";import{C as O}from"./-TaKdCZx.js";import{V as E}from"./9Q23NzEb.js";import{_ as j}from"./CIPC9817.js";import{V as w}from"./MXhTc5uu.js";import{_ as G}from"./CxW0GE0L.js";import{u as P}from"./2vq21tXV.js";import{u as M}from"./xwskLidM.js";import{s as R}from"./DivIZ7Lb.js";import{_ as H}from"./6cMn6_iE.js";import{a as U}from"./Bnkvtx4f.js";import{_ as q}from"./Cqgd8S0o.js";import{V as J}from"./CerlZzKD.js";import{_ as K}from"./DEhduG0k.js";import{_ as x}from"./5ehHOY6F.js";import{d as L,D as s,I as c,O as C,U as p,J as S,K as A,A as f,C as l,X as T,E as a,R as X,L as $,z as v,M as z,N as V,G as Y}from"./lKNUlTH_.js";import{_ as Q}from"./DuptbwKj.js";import{_ as W}from"./DC6nB-L7.js";import{V as Z,_ as ee}from"./C4yIuh8P.js";import{_ as D}from"./CKwmgxjS.js";import{_ as te}from"./Dxu_tG3J.js";const se={class:"mb-8"},ae={class:"label-bold"},le={class:"text-base font-semibold"},re=L({__name:"VFilterChecklist",props:{options:{},title:{},filterType:{},disabled:{type:Boolean,default:!1}},emits:["toggle-filter"],setup(F,{emit:u}){const n=F,b=u,{t:i}=P({useScope:"global"}),g=e=>["audioProviders","imageProviders"].indexOf(n.filterType)>-1?e.name:i(e.name),_=({value:e})=>{b("toggle-filter",{code:e,filterType:n.filterType})},h=e=>{const o=U(e).filter(m=>m!=="cc").map(m=>i(`browsePage.licenseDescription.${m}`)).join(" "),t=i("modal.closeNamed",{name:i("browsePage.aria.licenseExplanation")});return`${o} - ${t}`},y=e=>B().isFilterDisabled(e,n.filterType)??n.disabled,d=e=>!!e&&n.filterType==="licenses",k=e=>d(e)?i("filters.licenseExplanation.licenseDefinition"):i("filters.licenseExplanation.markDefinition",{mark:e.toUpperCase()});return(e,r)=>{const o=H;return s(),c("fieldset",se,[C("legend",ae,p(e.title),1),(s(!0),c(S,null,A(e.options,t=>(s(),c("div",{key:t.code,class:"mt-4 flex items-center justify-between"},[(s(),f(q,{id:t.code,key:t.code,checked:t.checked,name:e.title,value:t.code,disabled:y(t),onChange:_},{default:l(()=>[d(t.code)?(s(),f(J,{key:0,license:t.code},null,8,["license"])):(s(),c(S,{key:1},[T(p(g(t)),1)],64))]),_:2},1032,["id","checked","name","value","disabled"])),d(t.code)?(s(),f(o,{key:0,id:t.code,variant:"centered","hide-on-click-outside":!0,label:e.$t("browsePage.aria.licenseExplanation")},{trigger:l(({a11yProps:m})=>[a(E,X({ref_for:!0},m,{variant:"transparent-tx",size:"disabled","aria-label":e.$t("browsePage.aria.licenseExplanation"),class:"h-6 w-6"}),{default:l(()=>[a(w,{name:"help"})]),_:2},1040,["aria-label"])]),title:l(()=>[C("h5",le,p(k(t.code)),1)]),"close-button":l(({close:m})=>[a(x,{label:h(t.code),"icon-props":{name:"close"},variant:"transparent-gray",size:"small",onClick:m},null,8,["label","onClick"])]),default:l(()=>[a(K,{license:t.code},null,8,["license"])]),_:2},1032,["id","label"])):$("",!0)]))),128))])}}}),ie={id:"filters","aria-labelledby":"filters-heading",class:"filters"},ne={key:0,class:"relative mb-6 flex items-center justify-between"},oe={id:"filters-heading",class:"caption-bold uppercase"},ce={class:"filters-form"},de=L({__name:"VSearchGridFilter",props:{showFilterHeader:{type:Boolean,default:!0},changeTabOrder:{type:Boolean,default:!0}},setup(F){const u=B(),{t:n}=P({useScope:"global"}),{$sendCustomEvent:b}=M(),{isAnyFilterApplied:i,searchTerm:g,searchType:_,searchFilters:h}=R(u),y=v(()=>Object.keys(h.value)),d=r=>n(`filters.${r}.title`),k=({filterType:r,code:o})=>{const t=u.toggleFilter({filterType:r,code:o});b("APPLY_FILTER",{category:r,key:o,checked:t,searchType:_.value,query:g.value})},e=()=>u.clearFilters();return(r,o)=>(s(),c("section",ie,[r.showFilterHeader?(s(),c("header",ne,[C("h4",oe,p(r.$t("filterList.filterBy")),1),z(a(E,{id:"clear-filter-button",variant:"transparent-gray",size:"small",class:"label-bold absolute end-0 !text-link",onClick:e},{default:l(()=>[T(p(r.$t("filterList.clear")),1)]),_:1},512),[[N,V(i)]])])):$("",!0),C("form",ce,[(s(!0),c(S,null,A(y.value,t=>(s(),f(re,{key:t,options:V(h)[t],title:d(t),"filter-type":t,onToggleFilter:k},null,8,["options","title","filter-type"]))),128))])]))}}),fe={class:"label-regular"},pe={key:1,class:"label-regular relative my-2 me-4 flex h-12 items-center gap-x-2 px-2 after:absolute after:bottom-[-0.625rem] after:right-1/2 after:h-0.5 after:w-full after:translate-x-1/2 after:translate-y-[-50%] after:bg-tertiary"},ue={key:0,class:"mt-auto flex h-20 flex-shrink-0 items-center justify-between border-t border-t-default p-4"},ze=L({__name:"VContentSettingsModalContent",props:{triggerElement:{default:null},variant:{default:"fit-content"},isFetching:{type:Boolean,default:!1},close:{},visible:{type:Boolean,default:!1},showFilters:{type:Boolean,default:!0},useLinks:{type:Boolean,default:!0}},emits:["select"],setup(F){const u=F,n=B(),b=I({component:"VContentSettingsModalContent"}),i=Y("content-settings"),g=e=>{i.value=e},_=v(()=>u.showFilters&&i.value==="filters"),h=v(()=>!n.isAnyFilterApplied),y=v(()=>n.appliedFilterCount),d=v(()=>b.getSearchTypeProps()),k=()=>{n.clearFilters()};return(e,r)=>(s(),f(G,{id:V(O),"aria-label":e.$t("header.aria.menu"),"hide-on-click-outside":!0,hide:e.close,visible:e.visible,variant:e.variant,"trigger-element":e.triggerElement,class:"flex items-center"},{default:l(()=>[a(ee,{"selected-id":i.value,"tablist-style":"ps-4 pe-2",variant:"plain",label:"content-settings",class:"flex min-h-0 flex-col",onChange:g},{tabs:l(()=>[e.showFilters?(s(),f(Z,{key:0,id:"content-settings",size:"medium",class:"me-4 gap-x-2"},{default:l(()=>[a(w,{name:d.value.searchType},null,8,["name"]),C("h2",fe,p(e.$t("searchType.heading")),1)]),_:1})):(s(),c("h2",pe,[a(w,{name:d.value.searchType},null,8,["name"]),T(" "+p(e.$t("searchType.heading")),1)])),e.showFilters?(s(),f(j,{key:2,"applied-filter-count":y.value},null,8,["applied-filter-count"])):$("",!0),a(x,{label:e.$t("modal.closeContentSettings"),"icon-props":{name:"close"},variant:"transparent-gray",size:"large",class:"ms-auto self-center",onClick:e.close},null,8,["label","onClick"])]),default:l(()=>[a(D,{id:"content-settings"},{default:l(()=>[a(Q,{size:"medium","use-links":e.useLinks,onSelect:r[0]||(r[0]=o=>e.$emit("select",o))},null,8,["use-links"])]),_:1}),e.showFilters?(s(),f(D,{key:0,id:"filters",class:"px-0"},{default:l(()=>[a(de,{class:"px-6","show-filter-header":!1,"change-tab-order":!1}),a(te,{class:"border-t border-default px-6 pt-6"})]),_:1})):$("",!0)]),_:1},8,["selected-id"]),e.showFilters?(s(),c("footer",ue,[z(a(E,{variant:"transparent-gray",class:"label-bold !text-link disabled:!text-disabled",disabled:h.value,size:"large",onClick:k},{default:l(()=>[T(p(e.$t("filterList.clear")),1)]),_:1},8,["disabled"]),[[N,_.value]]),a(W,{"is-fetching":e.isFetching,onClick:e.close},null,8,["is-fetching","onClick"])])):$("",!0)]),_:1},8,["id","aria-label","hide","visible","variant","trigger-element"]))}});export{ze as _,de as a};
