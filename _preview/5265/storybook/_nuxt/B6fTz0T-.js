import{u as d}from"./Ck0CgHQL.js";import{u as c}from"./I6oWuQE1.js";import{u as i}from"./jkP_3ymO.js";import{c as o}from"./DwwldUEF.js";import"./CWoQmekT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c6ed07ea-e6c7-43fe-a0cf-34e45f9f4f0a",e._sentryDebugIdIdentifier="sentry-dbid-c6ed07ea-e6c7-43fe-a0cf-34e45f9f4f0a")}catch{}})();const g="dark-mode",m="light-mode";function S(){const e=i(),t=c(),s=o(()=>t.isOn("dark_mode_ui_toggle")),r=o(()=>s.value?e.colorMode:"light"),u=o(()=>{const n=d();return n.value==="no-preference"?"light":n.value}),a=o(()=>s.value?r.value==="system"?u.value:r.value:"light"),l=o(()=>!s.value||r.value==="system"?"light":r.value),f=o(()=>({light:m,dark:g,system:""})[r.value]);return{colorMode:r,osColorMode:u,effectiveColorMode:a,serverColorMode:l,cssClass:f}}export{S as u};
