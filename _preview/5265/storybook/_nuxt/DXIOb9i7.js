import{d as f,r as u,o as i,p as b,k as s}from"./DwwldUEF.js";import"./CWoQmekT.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new a.Error().stack;e&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[e]="d0ac461e-e33e-4539-9241-0a1630e2c0a5",a._sentryDebugIdIdentifier="sentry-dbid-d0ac461e-e33e-4539-9241-0a1630e2c0a5")}catch{}})();const y=Symbol.for("nuxt:client-only"),k=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:e,attrs:l}){const t=u(!1);return i(()=>{t.value=!0}),b(y,!0),n=>{var c;if(t.value)return(c=e.default)==null?void 0:c.call(e);const r=e.fallback||e.placeholder;if(r)return r();const o=n.fallback||n.placeholder||"",d=n.fallbackTag||n.placeholderTag||"span";return s(d,l,o)}}});export{k as _};
