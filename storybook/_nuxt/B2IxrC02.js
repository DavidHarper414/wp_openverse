import"./RQxsyxdU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1087d0a9-c8ab-46ae-a083-0ffd9ae517b9",e._sentryDebugIdIdentifier="sentry-dbid-1087d0a9-c8ab-46ae-a083-0ffd9ae517b9")}catch{}})();const r=e=>Array.isArray(e)?e[0]:e??null;function f(e){const t=r(e);return t?parseInt(t,10):-1}function s(e){return r(e)??""}const u=e=>e?/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(e):!1,i=e=>e==="image"?"images":"audio",d=(e,t)=>{if(!e&&!t)return"";const n=new URLSearchParams;return e&&n.set("q",e),t&&n.set("p",t.toString()),`?${n.toString()}`};export{f as a,r as f,s as g,i as m,d as s,u as v};
