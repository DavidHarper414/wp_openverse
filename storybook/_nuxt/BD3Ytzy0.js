import{d as C,c as p,j as l,k as _,Q as S,W as T,R as V,r as x,_ as F,e as f,L as h,K as b,u as k,Z as I,N as v,F as M,M as P}from"./53SD24Bo.js";import{a as w,u as L}from"./D6RfD4r0.js";import{u as B}from"./I7NgnUkk.js";import{g as A,u as z}from"./DiDEpn9B.js";import{u as $}from"./DLCnOpdB.js";import{_ as K}from"./DhTbjJlp.js";import{_ as D}from"./CkCFiYGT.js";import{_ as H}from"./jNirCwLK.js";import{s as O}from"./BbcJJQG6.js";import{E as G}from"./DukodVLT.js";import{u as j}from"./DvUUAc5c.js";import{u as U}from"./DdhqXmur.js";import{_ as W}from"./C_J_wRHQ.js";import{V as X}from"./ByZ6H8Q9.js";import{V as Q}from"./CxzE6WfI.js";import{_ as Z}from"./NPo5mu7y.js";import{u as J}from"./BALwooav.js";import{_ as Y}from"./bkmVosP6.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new n.Error().stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="4a189a4f-91c8-443a-b931-65767c9c6c03",n._sentryDebugIdIdentifier="sentry-dbid-4a189a4f-91c8-443a-b931-65767c9c6c03")}catch{}})();const ee={"aria-hidden":"true"},se={class:"sr-only"},N=C({__name:"VSearchResultsTitle",props:{searchTerm:{},searchType:{},resultCounts:{},size:{default:"default"}},setup(n){const a=n,c=B(),{t:o}=$(),u=p(()=>a.resultCounts.reduce((s,[t,r])=>({...s,[t]:{count:r,countKey:A(r),localeCount:c(r)}}),{})),g=()=>{const s=u.value.image,t=o(`browsePage.aria.allResultsHeadingCount.image.${s.countKey}`,{localeCount:s.localeCount}),r=u.value.audio,i=o(`browsePage.aria.allResultsHeadingCount.audio.${r.countKey}`,{localeCount:r.localeCount});return o("browsePage.aria.results.all",{query:a.searchTerm,imageResults:t,audioResults:i})},y=p(()=>{switch(a.searchType){case"image":{const{count:s,countKey:t,localeCount:r}=u.value.image;return o(`browsePage.aria.results.image.${t}`,{count:s,localeCount:r,query:a.searchTerm})}case"audio":{const{count:s,countKey:t,localeCount:r}=u.value.audio;return o(`browsePage.aria.results.audio.${t}`,{count:s,localeCount:r,query:a.searchTerm})}default:case"all":return g()}});return(s,t)=>(l(),_("h1",{class:V(["sr-only break-words md:not-sr-only",[s.size==="large"?"heading-2 lg:heading-1 !leading-none lg:!leading-none":"heading-2 !leading-none"]])},[S("span",ee,T(s.searchTerm),1),S("span",se,T(y.value),1)],2))}}),re=K(N,[["__scopeId","data-v-119a6913"]]);N.__docgenInfo={exportName:"default",displayName:"VSearchResultsTitle",description:"",tags:{},props:[{name:"searchTerm",required:!0,type:{name:"string"}},{name:"searchType",required:!0,type:{name:"SupportedSearchType"}},{name:"resultCounts",required:!0,type:{name:"Array",elements:[{name:"tuple",elements:[{name:"SupportedMediaType"},{name:"number"}]}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"large"'}]},defaultValue:{func:!1,value:'"default"'}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VSearchResultsTitle.vue"]};const ae={class:"heading-6",tabindex:"-1"},E=C({__name:"VExternalSearchForm",props:{searchTerm:{},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,default:!0}},setup(n){const a=x(null),c=w(),o=j(),{$sendCustomEvent:u}=J(),g=L(),{currentPage:y}=O(g),s=()=>{u("VIEW_EXTERNAL_SOURCES",{searchType:c.searchType,query:c.searchTerm,resultPage:y.value||1})},{externalSourcesType:t}=U(),r=p(()=>o.isBreakpoint("md"));return(i,R)=>{const e=F("i18n-t");return l(),_("section",{key:k(t),ref_key:"sectionRef",ref:a,class:"external-sources flex flex-row place-items-center justify-center pb-6 pt-4 lg:pb-10","data-testid":"external-sources-form"},[f(Z,{id:k(G),variant:"centered","hide-on-click-outside":!0,"labelled-by":"external-sources-button",class:"w-full",onOpen:s},{trigger:h(({a11yProps:m})=>[f(X,{id:"external-sources-button",ref:"triggerRef",pressed:m["aria-expanded"],"aria-haspopup":"dialog","aria-controls":"external-sources-modal",variant:"bordered-gray",size:"disabled",class:"label-bold lg:description-bold h-16 w-full gap-x-2 lg:h-18"},{default:h(()=>[r.value?(l(),b(e,{key:0,scope:"global",keypath:"externalSources.form.supportedTitle",tag:"p"})):(l(),b(e,{key:1,scope:"global",keypath:"externalSources.form.supportedTitleSm",tag:"p"})),f(Q,{class:V({"text-over-dark":m["aria-expanded"]}),name:"caret-down"},null,8,["class"])]),_:2},1032,["pressed"])]),title:h(()=>[S("h2",ae,T(i.$t("externalSources.title")),1)]),default:h(()=>[f(W,{class:"flex flex-col","search-term":i.searchTerm},null,8,["search-term"])]),_:1},8,["id"])])}}});E.__docgenInfo={exportName:"default",displayName:"VExternalSearchForm",description:"",tags:{},props:[{name:"searchTerm",required:!0,type:{name:"string"}},{name:"isSupported",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VExternalSearch/VExternalSearchForm.vue"]};const te={key:0,class:"my-0 md:mb-8 md:mt-4"},oe={key:1,class:"mb-4 mt-2 grid grid-cols-2 gap-4 md:mt-0"},ne={class:"mb-6 mt-4 lg:mb-10"},le=C({__name:"VSearchResults",props:{searchTerm:{},results:{},isFetching:{type:Boolean}},emits:["load-more"],setup(n){const a=n,{t:c}=$(),o=L(),u=w(),g=p(()=>c(`browsePage.aria.resultsLabel.${a.results.type}`,{query:a.searchTerm})),y=e=>u.getSearchPath({type:e}),s=p(()=>o.showLoading),{getResultCountLabels:t}=z(s),r=(e,m,d)=>t(e,d,m),i=p(()=>o.resultCountsPerMediaType),R=p(()=>o.canLoadMore);return(e,m)=>(l(),b(D,{"collection-label":g.value,results:e.results,"is-fetching":e.isFetching,"search-term":e.searchTerm,kind:"search"},{header:h(()=>[e.searchTerm?(l(),_("header",te,[f(re,{"search-term":e.searchTerm,size:e.results.type==="all"?"large":"default","search-type":e.results.type,"result-counts":i.value},{default:h(()=>[I(T(e.searchTerm),1)]),_:1},8,["search-term","size","search-type","result-counts"])])):v("",!0),e.results.type==="all"?(l(),_("div",oe,[(l(!0),_(M,null,P(i.value,([d,q])=>(l(),b(Y,{key:d,labels:r(q,e.searchTerm,d),"media-type":d,to:y(d)},null,8,["labels","media-type","to"]))),128))])):v("",!0)]),footer:h(()=>[S("footer",ne,[f(H,{"can-load-more":R.value,"search-type":e.results.type,kind:"search","search-term":e.searchTerm,"is-fetching":e.isFetching,class:"mb-4",onLoadMore:m[0]||(m[0]=d=>e.$emit("load-more"))},null,8,["can-load-more","search-type","search-term","is-fetching"]),e.results.type!=="all"?(l(),b(E,{key:0,"search-term":e.searchTerm,"is-supported":!0,"has-no-results":!1},null,8,["search-term"])):v("",!0)])]),_:1},8,["collection-label","results","is-fetching","search-term"]))}});le.__docgenInfo={exportName:"default",displayName:"VSearchResults",description:"",tags:{},props:[{name:"searchTerm",required:!0,type:{name:"string"}},{name:"results",required:!0,type:{name:"Results"}},{name:"isFetching",required:!0,type:{name:"boolean"}}],events:[{name:"load-more"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VSearchResultsGrid/VSearchResults.vue"]};export{le as _};
