import{u as p,A as h,V as v}from"./BXAcwQ7Y.js";import{g as b,w as E}from"./C36Bf8YV.js";import{D as f,E as u,h as r,ac as g,w as n}from"./-WkxctKM.js";import{u as _}from"./HSkZLNjo.js";import{u as k}from"./CJk8lJ1H.js";import{_ as L}from"./B1NG0bYt.js";import"./D-XGaJuf.js";import"./BLIMiQvM.js";import"./CVtkxrq9.js";import"./BSEdKPgk.js";import"./R-F224MX.js";import"./8bxaQBfd.js";import"./DNZ0QEaN.js";import"./CFMQYC2y.js";import"./CVV9gpzL.js";import"./CuPsdpTl.js";import"./DlAUqK2U.js";import"./CiUCKZk_.js";import"./BPwGQkdi.js";const c=e=>(Object.entries(h).find(([,o])=>e>=o)??["xs",0])[0];function T(){const e=p(),{width:t}=b(),o=()=>{e.updateBreakpoint(c(t.value))};return E(t,i=>{const a=c(i);e.updateBreakpoint(a)},{debounce:100}),{updateBreakpoint:o}}const S=e=>({components:{story:e},setup(){const t=f(),{updateBreakpoint:o}=T();return u(()=>{o()}),()=>r("div",{ref:t},[r(e())])}}),{useEffect:w}=__STORYBOOK_MODULE_PREVIEW_API__,d=g({value:"ltr"}),D=(e,t)=>(w(()=>{d.value=t.globals.languageDirection},[t.globals.languageDirection]),{components:{story:e},setup(){const o=f(),i=_({useScope:"global"});return u(()=>{n(d,async a=>{await i.setLocale(a.value==="rtl"?"ar":"en"),o.value&&o.value.ownerDocument.documentElement.setAttribute("dir",(a==null?void 0:a.value)??"ltr")},{immediate:!0})}),()=>r("div",{ref:o},[r(e())])}}),{useEffect:R,useGlobals:y}=__STORYBOOK_MODULE_PREVIEW_API__,O=e=>e==null?void 0:e.split("-")[0],B=e=>["light","dark"].includes(e),I=(e,t)=>{t==="dark-mode"?(e.classList.add("dark-mode"),e.classList.remove("light-mode"),document.documentElement.style.setProperty("--color-bg-curr-page","#0d0d0d")):(e.classList.add("light-mode"),e.classList.remove("dark-mode"),document.documentElement.style.setProperty("--color-bg-curr-page","#ffffff"))},s=g({value:"light"}),P=e=>{const[t,o]=y();return s.value=t.theme,R(()=>{s.value=t.theme},[t.theme]),{components:{story:e},setup(){const{cssClass:i}=k(),a=p();return n(s,l=>{B(l.value)&&a.setColorMode(l.value)},{immediate:!0}),n(i,l=>{I(document.body,l);const m=O(l);m&&o({theme:m})},{immediate:!0}),u(()=>{document.body.classList.add("bg-default")}),()=>r("div",{class:"relative",style:"height: calc(100dvh - 32px);"},[r(e()),r("div",{class:"absolute bottom-0",id:"storybook-theme-switcher"},[r(L)])])}}},Q={decorators:[D,S,P],globalTypes:{theme:{name:"Theme",description:"Color theme",table:{defaultValue:{summary:"light"}},toolbar:{icon:"circlehollow",items:[{value:"light",title:"Light"},{value:"dark",title:"Dark"}]}},languageDirection:{name:"RTL",description:"Simulate an RTL language.",table:{defaultValue:{summary:"ltr"}},toolbar:{icon:"globe",items:[{value:"ltr",title:"LTR"},{value:"rtl",title:"RTL"}]}}},parameters:{backgrounds:{values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#0d0d0d"}]},viewport:{viewports:{...v}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},initialGlobals:{theme:"light",languageDirection:"ltr",backgrounds:{value:"light"}}};export{Q as default};
