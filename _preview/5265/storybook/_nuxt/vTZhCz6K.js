import{d as B,c as o,k as c,L as n,Q as r,e as l,E as d,F as k,H as F,V as E,j as f,U as I,M as V}from"./DwwldUEF.js";import{u as N,O as $,a as C}from"./I6oWuQE1.js";import{u as x}from"./jkP_3ymO.js";import{_ as D}from"./ChZpVpQj.js";import{_ as L}from"./DqyB4W5h.js";import{u as O}from"./DEUi6v0t.js";import{u as T}from"./VcnMPoS3.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new a.Error().stack;i&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[i]="5ef95983-35d4-4ef0-ad9c-78d3b9740ab2",a._sentryDebugIdIdentifier="sentry-dbid-5ef95983-35d4-4ef0-ad9c-78d3b9740ab2")}catch{}})();const G={id:"safe-browsing","aria-labelledby":"safe-browsing-heading"},j={class:"relative mb-6 flex items-center justify-between"},P={id:"safe-browsing-heading",class:"caption-bold uppercase"},U={class:"safe-browsing-form"},H={class:"mb-10 mt-8 flex flex-col gap-8"},z={class:"label-bold"},A=B({__name:"VSafeBrowsing",setup(a){const i=O(),u=o(()=>i("/sensitive-content")),m=N(),{$sendCustomEvent:_}=T(),h=o(()=>m.isOn("fetch_sensitive")),w=e=>{const t=e.checked??!1;m.toggleFeature("fetch_sensitive",t?$:C),_("TOGGLE_FETCH_SENSITIVE",{checked:t}),t||b({checked:!0})},p=x(),g=o(()=>p.shouldBlurSensitive),b=e=>{const t=e.checked??!1;p.setShouldBlurSensitive(t),_("TOGGLE_BLUR_SENSITIVE",{checked:t})},S=o(()=>[{name:"fetchSensitive",state:h.value,switchFn:w},{name:"blurSensitive",state:g.value,switchFn:b}]),v=e=>e==="blurSensitive"&&!h.value;return(e,t)=>{const y=E("i18n-t");return f(),c("section",G,[n("header",j,[n("h4",P,r(e.$t("filters.safeBrowsing.title")),1)]),l(y,{scope:"global",tag:"p",keypath:"filters.safeBrowsing.desc",class:"label-regular"},{sensitive:d(()=>[l(L,{href:u.value},{default:d(()=>[I(r(e.$t("filters.safeBrowsing.sensitive")),1)]),_:1},8,["href"])]),_:1}),n("form",U,[n("fieldset",H,[(f(!0),c(k,null,F(S.value,s=>(f(),c("div",{key:s.name},[l(D,{id:s.name,class:"flex-row-reverse justify-between",value:s.name,checked:s.state,disabled:v(s.name),"is-switch":"",onChange:s.switchFn},{default:d(()=>[n("span",z,r(e.$t(`filters.safeBrowsing.toggles.${s.name}.title`)),1)]),_:2},1032,["id","value","checked","disabled","onChange"]),n("p",{class:V(["label-regular mt-2",{"text-disabled":v(s.name)}])},r(e.$t(`filters.safeBrowsing.toggles.${s.name}.desc`)),3)]))),128))])])])}}});A.__docgenInfo={exportName:"default",displayName:"VSafeBrowsing",description:"",tags:{},sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VSafeBrowsing/VSafeBrowsing.vue"]};export{A as _};
