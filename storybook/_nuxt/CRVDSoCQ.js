import{c,r as v}from"./53SD24Bo.js";import{c as h,b as p,A as u,I as l,V as y,M as f,d as g}from"./f6gYKWT5.js";import{a as i}from"./D6RfD4r0.js";import{u as S}from"./CxEt8vcx.js";import{u as I}from"./BALwooav.js";import"./RQxsyxdU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="57d35990-be60-45a8-9525-50b16b2de20c",e._sentryDebugIdIdentifier="sentry-dbid-57d35990-be60-45a8-9525-50b16b2de20c")}catch{}})();const _={[p]:"all",[u]:"audio",[l]:"image",[y]:"video",[f]:"model-3d"},d={[p]:"searchType.all",[l]:"searchType.image",[u]:"searchType.audio",[y]:"searchType.video",[f]:"searchType.model3d"};function C({component:e="Unknown"}={}){const{$i18n:{t},$sendCustomEvent:o}=I(),a=c(()=>i().searchType),r=v(a.value),T=S(),m=c(()=>T.isOn("additional_search_types")?g:[]),b=[...h];return{setActiveType:s=>{r.value!==s&&(o("CHANGE_CONTENT_TYPE",{previous:r.value,next:s,component:e}),a.value!==s&&(i().setSearchType(s),r.value=s))},activeType:a,getSearchTypeProps:s=>{const n=s??a.value;return{label:t(d[n]),searchType:n}},types:b,icons:_,labels:d,additionalTypes:m}}export{C as u};
