import{d as p,r,c as k,o as M,w as _,K as y,L as g,j as b,e as v}from"./53SD24Bo.js";import{u as w}from"./DvUUAc5c.js";import{u as I}from"./CIa-mw8Z.js";import{V as S}from"./CxzE6WfI.js";import{_ as x}from"./zrJmgcCO.js";import{u as D}from"./DLCnOpdB.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d2feb262-9758-44fa-b29d-05063ac41af2",e._sentryDebugIdIdentifier="sentry-dbid-d2feb262-9758-44fa-b29d-05063ac41af2")}catch{}})();const T=p({__name:"VThemeSelect",setup(e){const o=D({useScope:"global"}),t=w(),c=Object.freeze({light:"sun",dark:"moon",system:"duotone"}),s={light:o.t("theme.choices.light"),dark:o.t("theme.choices.dark"),system:o.t("theme.choices.system")},l=r(t.colorMode),i=n=>{t.setColorMode(n)},h=k(()=>t.isDarkModeSeen),f=()=>{t.setIsDarkModeSeen(!0)},a=I(),d=r(c[a.colorMode.value]),m=r([{key:"light",text:s.light},{key:"dark",text:s.dark},{key:"system",text:s.system}]),u=()=>{l.value=t.colorMode,d.value=c[a.colorMode.value],m.value[2].text=`${s.system} (${s[a.osColorMode.value]})`};return M(u),_([a.colorMode,a.osColorMode],u),(n,V)=>(b(),y(x,{"model-value":l.value,"field-id":"theme",choices:m.value,"blank-text":n.$t("theme.theme"),"label-text":n.$t("theme.theme"),"show-selected":!1,"show-new-highlight":!h.value,onFocus:f,"onUpdate:modelValue":i},{start:g(()=>[v(S,{name:d.value},null,8,["name"])]),_:1},8,["model-value","choices","blank-text","label-text","show-new-highlight"]))}});T.__docgenInfo={exportName:"default",displayName:"VThemeSelect",description:"",tags:{},sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VThemeSelect/VThemeSelect.vue"]};export{T as _};
