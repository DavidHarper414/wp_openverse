import{d as S,c as l,w as F,j as i,K as w,L as M,Q as v,W as h,N as T,r as $,o as Q,n as q,k as p,F as U,M as X,e as b,Z as C,R as B,l as Y,O as Z,P as J,u as D}from"./53SD24Bo.js";import{f as L}from"./B2IxrC02.js";import{d as ee,a as z}from"./D6RfD4r0.js";import{_ as ae}from"./CkCFiYGT.js";import{u as te}from"./CGdESDy3.js";import{u as I}from"./DLCnOpdB.js";import{I as se}from"./f6gYKWT5.js";import{g as ne,V as oe}from"./Bz0AvHAH.js";import{_ as re}from"./DHaBzuWr.js";import{j as ie,w as le}from"./7RO02bE1.js";import{a as de}from"./CYxeF2X6.js";import{_ as ue}from"./Bha9DXs4.js";import{V as E}from"./ByZ6H8Q9.js";import{V as O}from"./CxzE6WfI.js";import{u as ce}from"./BALwooav.js";import{_ as me}from"./B7ZxQ_gM.js";import{u as pe}from"./UByQ4iSo.js";import{u as fe}from"./Czc_l-ka.js";import{_ as ge}from"./CNJjKMJB.js";import{u as ve}from"./DvUUAc5c.js";import{_ as he}from"./B6C3U6x3.js";import"./RQxsyxdU.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new s.Error().stack;t&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[t]="72f3c923-8d3c-43b7-9b9b-da010d5fd8e1",s._sentryDebugIdIdentifier="sentry-dbid-72f3c923-8d3c-43b7-9b9b-da010d5fd8e1")}catch{}})();const ye={id:"related-heading",class:"heading-6 md:heading-5 mb-6"},_e=S({__name:"VRelatedMedia",props:{mediaType:{},relatedTo:{}},setup(s){const t=s,a=ee(),n=te(),e=l(()=>{const f=a.media??[];return{type:t.mediaType,items:f}});F(n,async f=>{const k=L(f==null?void 0:f.params.id);k&&k!==a.mainMediaId&&await a.fetchMedia(t.mediaType,k)},{immediate:!0});const d=l(()=>a.isFetching),c=l(()=>e.value.items.length>0||d.value),o=l(()=>L(n==null?void 0:n.query.q)??""),{t:g}=I({useScope:"global"}),m=l(()=>{const f=t.mediaType==="audio"?"audioDetails.relatedAudios":"imageDetails.relatedImages";return g(f)});return(f,k)=>c.value?(i(),w(ae,{key:0,results:e.value,"is-fetching":d.value,"collection-label":m.value,kind:"related","related-to":f.relatedTo,"search-term":o.value,"aria-label":m.value},{header:M(()=>[v("h2",ye,h(m.value),1)]),_:1},8,["results","is-fetching","collection-label","related-to","search-term","aria-label"])):T("",!0)}});_e.__docgenInfo={exportName:"default",displayName:"VRelatedMedia",description:"",tags:{},props:[{name:"mediaType",required:!0,type:{name:"SupportedMediaType"}},{name:"relatedTo",required:!0,type:{name:"string"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VMediaInfo/VRelatedMedia.vue"]};const be={class:"-my-1.5px"},Te=3,x=S({__name:"VCollapsibleTagSection",props:{tags:{},mediaType:{}},setup(s){const t=s,a=$(),n=z(),{$sendCustomEvent:e}=ce(),d=r=>n.getCollectionPath({type:t.mediaType,collectionParams:{collection:"tag",tag:r}}),c=l(()=>Array.from(new Set(t.tags.map(r=>r.name)))),o=$(),{localeProperties:g}=I({useScope:"global"}),m=l(()=>g.value.dir);function f(r,u){return m.value==="rtl"?r.offsetLeft<u.offsetLeft:r.offsetLeft>u.offsetLeft}function k(r){const u=Array.from(r.children);if(!u.length)return 0;let _=0;for(let V=0;V<u.length;V++){const R=u[V],A=R.previousElementSibling;if(A?f(A,R)&&_++:_++,_===Te+1)return V}return u.length}const H=l(()=>o.value&&y.value==="show"?c.value.slice(0,o.value):c.value),N=l(()=>o.value&&o.value<c.value.length);Q(()=>{a.value&&(o.value=k(a.value))});const y=$("show"),W=()=>{y.value=y.value==="show"?"hide":"show",e("TOGGLE_TAG_EXPANSION",{toState:y.value==="show"?"collapsed":"expanded"}),y.value==="hide"&&o.value&&q(()=>{var u;if(!o.value)return;const r=(u=a.value)==null?void 0:u.children.item(o.value);de(r==null?void 0:r.querySelector("a"))})},K=l(()=>N.value?y.value==="show"?"max-h-[7.6875rem]":"mah-h-none":"max-h-none"),P=$();return ie(a,r=>{P.value=r[0].contentRect.width}),le(P,(r,u)=>{if(!a.value)return;u&&r&&r>u&&(o.value=c.value.length),q(()=>{a.value&&(o.value=k(a.value))})},{debounce:300}),(r,u)=>(i(),p("div",be,[v("ul",{ref_key:"tagsContainerRef",ref:a,class:B(["flex flex-wrap gap-3 overflow-y-hidden p-1.5px",K.value])},[(i(!0),p(U,null,X(H.value,_=>(i(),p("li",{key:_},[b(ue,{href:d(_)},{default:M(()=>[C(h(_),1)]),_:2},1032,["href"])]))),128))],2),N.value?(i(),w(E,{key:0,size:"small",variant:"transparent-tx","has-icon-end":"",class:"label-bold -ms-2 mt-4 hover:underline","aria-expanded":y.value==="show"?"false":"true",onClick:W},{default:M(()=>[C(h(r.$t(y.value==="show"?"mediaDetails.tags.showMore":"mediaDetails.tags.showLess")),1),b(O,{name:"caret-down",size:4,class:B({"-scale-y-100 transform":y.value==="hide"})},null,8,["class"])]),_:1},8,["aria-expanded"])):T("",!0)]))}});x.__docgenInfo={exportName:"default",displayName:"VCollapsibleTagSection",description:"",tags:{},props:[{name:"tags",required:!0,type:{name:"Array",elements:[{name:"Tag"}]}},{name:"mediaType",required:!0,type:{name:"SupportedMediaType"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VMediaInfo/VCollapsibleTagSection.vue"]};const ke={class:"flex flex-col gap-6 sm:gap-8"},we={key:0},Se={key:0,class:"label-regular mb-2"},$e={key:1,class:"sr-only"},Me={key:1},Ve={class:"label-regular mb-2 flex gap-2"},G=S({__name:"VMediaTags",props:{tags:{},mediaType:{},provider:{}},setup(s){const t=s,a=l(()=>{const o=[],g=[];for(const m of t.tags)m.unstable__provider&&m.unstable__provider!==t.provider?o.push(m):g.push(m);return{generated:o,source:g}}),n=l(()=>a.value.source.length>0),e=l(()=>a.value.generated.length>0),d=pe(),c=l(()=>d("/tags"));return(o,g)=>(i(),p("div",ke,[n.value?(i(),p("div",we,[e.value?(i(),p("h3",Se,h(o.$t("mediaDetails.tags.source.heading")),1)):(i(),p("h3",$e,h(o.$t("mediaDetails.tags.title")),1)),b(x,{"media-type":o.mediaType,tags:a.value.source},null,8,["media-type","tags"])])):T("",!0),e.value?(i(),p("div",Me,[v("div",Ve,[v("h3",null,h(o.$t("mediaDetails.tags.generated.heading")),1),b(me,{href:c.value},{default:M(()=>[C(h(o.$t("mediaDetails.tags.generated.pageTitle")),1)]),_:1},8,["href"])]),b(x,{"media-type":o.mediaType,tags:a.value.generated},null,8,["media-type","tags"])])):T("",!0)]))}});G.__docgenInfo={exportName:"default",displayName:"VMediaTags",description:"",tags:{},props:[{name:"tags",required:!0,type:{name:"Array",elements:[{name:"Tag"}]}},{name:"mediaType",required:!0,type:{name:"SupportedMediaType"}},{name:"provider",required:!0,type:{name:"string"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VMediaInfo/VMediaTags.vue"]};const Ie={class:"flex flex-col gap-y-6 md:gap-y-8"},De={class:"flex flex-row items-center justify-between"},Ce={class:"heading-6 md:heading-5"},xe={class:"flex flex-col items-start gap-6 md:flex-row"},Ne={class:"flex flex-col gap-6 md:gap-8"},Pe={class:"flex w-full flex-grow flex-col items-start gap-6 md:flex-row"},Re={key:0},Ae=S({__name:"VMediaDetails",props:{media:{}},setup(s){const t=s,{t:a}=I({useScope:"global"}),n=l(()=>{if(!t.media)return null;const e=t.media.frontendMediaType===se?{width:t.media.width,height:t.media.height,type:t.media.filetype}:{};return ne(t.media,a,e)});return(e,d)=>(i(),p("section",Ie,[v("header",De,[v("h2",Ce,h(e.$t(`mediaDetails.${e.media.frontendMediaType}Info`)),1),b(re,{media:e.media},null,8,["media"])]),v("div",xe,[Y(e.$slots,"thumbnail"),v("div",Ne,[v("div",Pe,[e.media.description?(i(),p("p",Re,h(e.media.description),1)):T("",!0),n.value?(i(),w(oe,{key:1,metadata:n.value},null,8,["metadata"])):T("",!0)]),b(G,{tags:e.media.tags,"media-type":e.media.frontendMediaType,provider:e.media.provider},null,8,["tags","media-type","provider"])])])]))}});Ae.__docgenInfo={exportName:"default",displayName:"VMediaDetails",description:"",tags:{},props:[{name:"media",required:!0,type:{name:"union",elements:[{name:"AudioDetail"},{name:"ImageDetail"}]}}],slots:[{name:"thumbnail"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VMediaInfo/VMediaDetails.vue"]};const qe={class:"hidden md:block"},j=S({__name:"VHideButton",emits:["click"],setup(s){const t=ve(),a=l(()=>t.isBreakpoint("md"));return(n,e)=>(i(),p("div",null,[a.value?(i(),w(E,{key:0,variant:"transparent-gray",class:"label-bold",size:"small","has-icon-end":"",onClick:e[0]||(e[0]=d=>n.$emit("click"))},{default:M(()=>[v("span",qe,h(n.$t("sensitiveContent.singleResult.hide")),1),b(O,{name:"eye-closed"})]),_:1})):(i(),w(he,{key:1,variant:"transparent-gray","icon-props":{name:"eye-closed"},size:"small",label:n.$t("sensitiveContent.singleResult.hide"),onClick:e[1]||(e[1]=d=>n.$emit("click"))},null,8,["label"]))]))}});j.__docgenInfo={exportName:"default",displayName:"VHideButton",description:"",tags:{},events:[{name:"click"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VHideButton.vue"]};const Be={class:"flex w-full justify-between px-4 pb-4 md:px-8"},Le=S({__name:"VSingleResultControls",props:{media:{}},setup(s){const t=s,a=z(),n=l(()=>a.backToSearchPath),{hide:e,canBeHidden:d}=fe(t.media);return(c,o)=>Z((i(),p("div",Be,[n.value?(i(),w(ge,{key:0,id:c.media.id,href:n.value},null,8,["id","href"])):T("",!0),D(d)?(i(),w(j,{key:1,class:"ml-auto",onClick:D(e)},null,8,["onClick"])):T("",!0)],512)),[[J,D(d)||n.value]])}});Le.__docgenInfo={exportName:"default",displayName:"VSingleResultControls",description:"",tags:{},props:[{name:"media",required:!0,type:{name:"union",elements:[{name:"AudioDetail"},{name:"ImageDetail"}]}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VSingleResultControls.vue"]};const Fe=({title:s,thumbnail:t,isSensitive:a})=>{const n={meta:[]},e=[];return s&&e.push({key:"og:title",property:"og:title",content:s}),t&&!a&&e.push({key:"og:image",property:"og:image",content:t}),n.meta=e,n},la=s=>{var g;const{t}=I({useScope:"global"}),a=()=>s.value?{genericTitle:`${t(`mediaDetails.reuse.${s.value.frontendMediaType}`)}`,sensitiveTitle:`${t(`sensitiveContent.title.${s.value.frontendMediaType}`)}`}:{genericTitle:"",sensitiveTitle:""},n=l(()=>{var m;return((m=s.value)==null?void 0:m.isSensitive)??!1}),e=()=>s.value?n.value?a().sensitiveTitle:s.value.title??a().genericTitle:"",d=()=>`${e()} | Openverse`,c=$(d()),o=Fe({title:e(),thumbnail:(g=s.value)==null?void 0:g.thumbnail,isSensitive:n.value});return F(s,()=>{c.value=d()}),{pageTitle:c,detailPageMeta:o}};export{Le as _,Ae as a,_e as b,la as u};
