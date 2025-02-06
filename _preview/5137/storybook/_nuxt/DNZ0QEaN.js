import{al as A,at as d,ac as T,aa as N,an as S,a5 as E}from"./-WkxctKM.js";function y(o,e={},t){for(const s in o){const n=o[s],i=t?`${t}:${s}`:s;typeof n=="object"&&n!==null?y(n,e,i):typeof n=="function"&&(e[i]=n)}return e}const j={run:o=>o()},W=()=>j,w=typeof console.createTask<"u"?console.createTask:W;function $(o,e){const t=e.shift(),s=w(t);return o.reduce((n,i)=>n.then(()=>s.run(()=>i(...e))),Promise.resolve())}function I(o,e){const t=e.shift(),s=w(t);return Promise.all(o.map(n=>s.run(()=>n(...e))))}function k(o,e){for(const t of[...o])t(e)}class O{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const n=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let r=i.message;r||(r=`${n} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(r)||(console.warn(r),this._deprecatedMessages.add(r))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,n=(...i)=>(typeof s=="function"&&s(),s=void 0,n=void 0,t(...i));return s=this.hook(e,n),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const n of s)this.hook(e,n)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=y(e),s=Object.keys(t).map(n=>this.hook(n,t[n]));return()=>{for(const n of s.splice(0,s.length))n()}}removeHooks(e){const t=y(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith($,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(I,e,...t)}callHookWith(e,t,...s){const n=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&k(this._before,n);const i=e(t in this._hooks?[...this._hooks[t]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&n&&k(this._after,n)}):(this._after&&n&&k(this._after,n),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function D(){return new O}function L(o={}){let e,t=!1;const s=r=>{if(e&&e!==r)throw new Error("Context conflict")};let n;if(o.asyncContext){const r=o.AsyncLocalStorage||globalThis.AsyncLocalStorage;r?n=new r:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(n&&e===void 0){const r=n.getStore();if(r!==void 0)return r}return e};return{use:()=>{const r=i();if(r===void 0)throw new Error("Context is not available");return r},tryUse:()=>i(),set:(r,c)=>{c||s(r),e=r,t=!0},unset:()=>{e=void 0,t=!1},call:(r,c)=>{s(r),e=r;try{return n?n.run(r,c):c()}finally{t||(e=void 0)}},async callAsync(r,c){e=r;const a=()=>{e=r},f=()=>e===r?a:void 0;g.add(f);try{const h=n?n.run(r,c):c();return t||(e=void 0),await h}finally{g.delete(f)}}}}function U(o={}){const e={};return{get(t,s={}){return e[t]||(e[t]=L({...o,...s})),e[t],e[t]}}}const _=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},v="__unctx__",M=_[v]||(_[v]=U()),R=(o,e={})=>M.get(o,e),x="__unctx_async_handlers__",g=_[x]||(_[x]=new Set);function q(o){const e=[];for(const n of g){const i=n();i&&e.push(i)}const t=()=>{for(const n of e)n()};let s=o();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(n=>{throw t(),n})),[s,t]}const J=!1,Q=!1,Y={value:null,errorValue:null,deep:!0},Z=null,H="nuxt-app",ee=36e5,K="vite:preloadError";function C(o=H){return R(o,{asyncContext:!1})}const z="__nuxt_plugin";function te(o){var n;let e=0;const t={_id:o.id||H||"nuxt-app",_scope:A(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.13.2"},get vue(){return t.vueApp.version}},payload:d({...((n=o.ssrContext)==null?void 0:n.payload)||{},data:d({}),state:T({}),once:new Set,_errors:d({})}),static:{data:{}},runWithContext(i){return t._scope.active&&!N()?t._scope.run(()=>b(t,i)):b(t,i)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:d({}),_payloadRevivers:{},...o};{const i=window.__NUXT__;if(i)for(const r in i)switch(r){case"data":case"state":case"_errors":Object.assign(t.payload[r],i[r]);break;default:t.payload[r]=i[r]}}t.hooks=D(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(i,r)=>{const c="$"+i;p(t,c,r),p(t.vueApp.config.globalProperties,c,r)},p(t.vueApp,"$nuxt",t),p(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener(K,r=>{t.callHook("app:chunkError",{error:r.payload}),(t.isHydrating||r.payload.message.includes("Unable to preload CSS"))&&r.preventDefault()}),window.useNuxtApp=window.useNuxtApp||P;const i=t.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});t.hook("app:mounted",i)}const s=t.payload.config;return t.provide("config",s),t}function F(o,e){e.hooks&&o.hooks.addHooks(e.hooks)}async function V(o,e){if(typeof e=="function"){const{provide:t}=await o.runWithContext(()=>e(o))||{};if(t&&typeof t=="object")for(const s in t)o.provide(s,t[s])}}async function oe(o,e){const t=[],s=[],n=[],i=[];let r=0;async function c(a){var h;const f=((h=a.dependsOn)==null?void 0:h.filter(u=>e.some(l=>l._name===u)&&!t.includes(u)))??[];if(f.length>0)s.push([new Set(f),a]);else{const u=V(o,a).then(async()=>{a._name&&(t.push(a._name),await Promise.all(s.map(async([l,m])=>{l.has(a._name)&&(l.delete(a._name),l.size===0&&(r++,await c(m)))})))});a.parallel?n.push(u.catch(l=>i.push(l))):await u}}for(const a of e)F(o,a);for(const a of e)await c(a);if(await Promise.all(n),r)for(let a=0;a<r;a++)await Promise.all(n);if(i.length)throw i[0]}function X(o){if(typeof o=="function")return o;const e=o._name||o.name;return delete o.name,Object.assign(o.setup||(()=>{}),o,{[z]:!0,_name:e})}const se=X;function b(o,e,t){const s=()=>e();return C(o._id).set(o),o.vueApp.runWithContext(s)}function B(o){var t;let e;return S()&&(e=(t=E())==null?void 0:t.appContext.app.$nuxt),e=e||C(o).tryUse(),e||null}function P(o){const e=B(o);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ne(o){return P().$config}function p(o,e,t){Object.defineProperty(o,e,{get:()=>t})}function re(o){return o}export{Y as a,J as b,Q as c,ne as d,D as e,re as f,se as g,X as h,q as i,R as j,te as k,oe as l,Z as n,ee as o,B as t,P as u};
