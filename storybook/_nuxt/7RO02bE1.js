import{u as se,w as R,o as Z,n as ee,B as le,z as ue,y as ae,g as te,r as _,J as ce,c as L,G as Q,m as fe,s as de}from"./53SD24Bo.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a5a55339-9653-4a49-b532-44bbfdb3e38f",e._sentryDebugIdIdentifier="sentry-dbid-a5a55339-9653-4a49-b532-44bbfdb3e38f")}catch{}})();function k(e){return ue()?(ae(e),!0):!1}function T(e){return typeof e=="function"?e():se(e)}const ne=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const me=e=>e!=null,pe=Object.prototype.toString,he=e=>pe.call(e)==="[object Object]",I=()=>{},we=ve();function ve(){var e,t;return ne&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Y(e,t){function n(...o){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(l)})}return n}const oe=e=>e();function re(e,t={}){let n,o,r=I;const l=s=>{clearTimeout(s),r(),r=I};return s=>{const d=T(e),a=T(t.maxWait);return n&&l(n),d<=0||a!==void 0&&a<=0?(o&&(l(o),o=null),Promise.resolve(s())):new Promise((p,i)=>{r=t.rejectOnCancel?i:p,a&&!o&&(o=setTimeout(()=>{n&&l(n),o=null,p(s())},a)),n=setTimeout(()=>{o&&l(o),o=null,p(s())},d)})}}function ge(...e){let t=0,n,o=!0,r=I,l,c,s,d,a;!le(e[0])&&typeof e[0]=="object"?{delay:c,trailing:s=!0,leading:d=!0,rejectOnCancel:a=!1}=e[0]:[c,s=!0,d=!0,a=!1]=e;const p=()=>{n&&(clearTimeout(n),n=void 0,r(),r=I)};return h=>{const g=T(c),b=Date.now()-t,u=()=>l=h();return p(),g<=0?(t=Date.now(),u()):(b>g&&(d||!o)?(t=Date.now(),u()):s&&(l=new Promise((f,v)=>{r=a?v:f,n=setTimeout(()=>{t=Date.now(),o=!0,f(u()),p()},Math.max(0,g-b))})),!d&&!n&&(n=setTimeout(()=>o=!0,g)),o=!1,l)}}function be(e=oe){const t=_(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:ce(t),pause:n,resume:o,eventFilter:r}}function ye(e){return te()}function Se(e,t=200,n={}){return Y(re(t,n),e)}function Ee(e,t=200,n=!1,o=!0,r=!1){return Y(ge(t,n,o,r),e)}function ie(e,t,n={}){const{eventFilter:o=oe,...r}=n;return R(e,Y(o,t),r)}function Te(e,t,n={}){const{eventFilter:o,...r}=n,{eventFilter:l,pause:c,resume:s,isActive:d}=be(o);return{stop:ie(e,t,{...r,eventFilter:l}),pause:c,resume:s,isActive:d}}function B(e,t=!0,n){ye()?Z(e,n):t?e():ee(e)}function Fe(e,t,n={}){const{debounce:o=0,maxWait:r=void 0,...l}=n;return ie(e,t,{...l,eventFilter:re(o,{maxWait:r})})}const W=ne?window:void 0;function A(e){var t;const n=T(e);return(t=n==null?void 0:n.$el)!=null?t:n}function M(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=W):[t,n,o,r]=e,!t)return I;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const l=[],c=()=>{l.forEach(p=>p()),l.length=0},s=(p,i,h,g)=>(p.addEventListener(i,h,g),()=>p.removeEventListener(i,h,g)),d=R(()=>[A(t),T(r)],([p,i])=>{if(c(),!p)return;const h=he(i)?{...i}:i;l.push(...n.flatMap(g=>o.map(b=>s(p,g,b,h))))},{immediate:!0,flush:"post"}),a=()=>{d(),c()};return k(a),a}let q=!1;function Pe(e,t,n={}){const{window:o=W,ignore:r=[],capture:l=!0,detectIframe:c=!1}=n;if(!o)return I;we&&!q&&(q=!0,Array.from(o.document.body.children).forEach(u=>u.addEventListener("click",I)),o.document.documentElement.addEventListener("click",I));let s=!0;const d=u=>T(r).some(f=>{if(typeof f=="string")return Array.from(o.document.querySelectorAll(f)).some(v=>v===u.target||u.composedPath().includes(v));{const v=A(f);return v&&(u.target===v||u.composedPath().includes(v))}});function a(u){const f=T(u);return f&&f.$.subTree.shapeFlag===16}function p(u,f){const v=T(u),E=v.$.subTree&&v.$.subTree.children;return E==null||!Array.isArray(E)?!1:E.some(F=>F.el===f.target||f.composedPath().includes(F.el))}const i=u=>{const f=A(e);if(u.target!=null&&!(!(f instanceof Element)&&a(e)&&p(e,u))&&!(!f||f===u.target||u.composedPath().includes(f))){if(u.detail===0&&(s=!d(u)),!s){s=!0;return}t(u)}};let h=!1;const g=[M(o,"click",u=>{h||(h=!0,setTimeout(()=>{h=!1},0),i(u))},{passive:!0,capture:l}),M(o,"pointerdown",u=>{const f=A(e);s=!d(u)&&!!(f&&!u.composedPath().includes(f))},{passive:!0}),c&&M(o,"blur",u=>{setTimeout(()=>{var f;const v=A(e);((f=o.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(v!=null&&v.contains(o.document.activeElement))&&t(u)},0)})].filter(Boolean);return()=>g.forEach(u=>u())}function _e(){const e=_(!1),t=te();return t&&Z(()=>{e.value=!0},t),e}function X(e){const t=_e();return L(()=>(t.value,!!e()))}function J(e,t={}){const{window:n=W}=t,o=X(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const l=_(!1),c=a=>{l.value=a.matches},s=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},d=fe(()=>{o.value&&(s(),r=n.matchMedia(T(e)),"addEventListener"in r?r.addEventListener("change",c):r.addListener(c),l.value=r.matches)});return k(()=>{d(),s(),r=void 0}),l}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__",Ae=Oe();function Oe(){return V in z||(z[V]=z[V]||{}),z[V]}function Ie(e,t){return Ae[e]||t}function xe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const We={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},K="vueuse-storage";function Ne(e,t,n,o={}){var r;const{flush:l="pre",deep:c=!0,listenToStorageChanges:s=!0,writeDefaults:d=!0,mergeDefaults:a=!1,shallow:p,window:i=W,eventFilter:h,onError:g=m=>{console.error(m)},initOnMounted:b}=o,u=(p?de:_)(typeof t=="function"?t():t);if(!n)try{n=Ie("getDefaultStorage",()=>{var m;return(m=W)==null?void 0:m.localStorage})()}catch(m){g(m)}if(!n)return u;const f=T(t),v=xe(f),E=(r=o.serializer)!=null?r:We[v],{pause:F,resume:j}=Te(u,()=>H(u.value),{flush:l,deep:c,eventFilter:h});i&&s&&B(()=>{n instanceof Storage?M(i,"storage",x):M(i,K,O),b&&x()}),b||x();function N(m,y){if(i){const S={key:e,oldValue:m,newValue:y,storageArea:n};i.dispatchEvent(n instanceof Storage?new StorageEvent("storage",S):new CustomEvent(K,{detail:S}))}}function H(m){try{const y=n.getItem(e);if(m==null)N(y,null),n.removeItem(e);else{const S=E.write(m);y!==S&&(n.setItem(e,S),N(y,S))}}catch(y){g(y)}}function w(m){const y=m?m.newValue:n.getItem(e);if(y==null)return d&&f!=null&&n.setItem(e,E.write(f)),f;if(!m&&a){const S=E.read(y);return typeof a=="function"?a(S,f):v==="object"&&!Array.isArray(S)?{...f,...S}:S}else return typeof y!="string"?y:E.read(y)}function x(m){if(!(m&&m.storageArea!==n)){if(m&&m.key==null){u.value=f;return}if(!(m&&m.key!==e)){F();try{(m==null?void 0:m.newValue)!==E.write(u.value)&&(u.value=w(m))}catch(y){g(y)}finally{m?ee(j):j()}}}}function O(m){x(m.detail)}return u}function De(e,t,n={}){const{window:o=W,...r}=n;let l;const c=X(()=>o&&"ResizeObserver"in o),s=()=>{l&&(l.disconnect(),l=void 0)},d=L(()=>{const i=T(e);return Array.isArray(i)?i.map(h=>A(h)):[A(i)]}),a=R(d,i=>{if(s(),c.value&&o){l=new ResizeObserver(t);for(const h of i)h&&l.observe(h,r)}},{immediate:!0,flush:"post"}),p=()=>{s(),a()};return k(p),{isSupported:c,stop:p}}function Re(e,t={width:0,height:0},n={}){const{window:o=W,box:r="content-box"}=n,l=L(()=>{var i,h;return(h=(i=A(e))==null?void 0:i.namespaceURI)==null?void 0:h.includes("svg")}),c=_(t.width),s=_(t.height),{stop:d}=De(e,([i])=>{const h=r==="border-box"?i.borderBoxSize:r==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(o&&l.value){const g=A(e);if(g){const b=g.getBoundingClientRect();c.value=b.width,s.value=b.height}}else if(h){const g=Array.isArray(h)?h:[h];c.value=g.reduce((b,{inlineSize:u})=>b+u,0),s.value=g.reduce((b,{blockSize:u})=>b+u,0)}else c.value=i.contentRect.width,s.value=i.contentRect.height},n);B(()=>{const i=A(e);i&&(c.value="offsetWidth"in i?i.offsetWidth:t.width,s.value="offsetHeight"in i?i.offsetHeight:t.height)});const a=R(()=>A(e),i=>{c.value=i?t.width:0,s.value=i?t.height:0});function p(){d(),a()}return{width:c,height:s,stop:p}}function Me(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:l=0,window:c=W,immediate:s=!0}=n,d=X(()=>c&&"IntersectionObserver"in c),a=L(()=>{const b=T(e);return(Array.isArray(b)?b:[b]).map(A).filter(me)});let p=I;const i=_(s),h=d.value?R(()=>[a.value,A(o),i.value],([b,u])=>{if(p(),!i.value||!b.length)return;const f=new IntersectionObserver(t,{root:A(u),rootMargin:r,threshold:l});b.forEach(v=>v&&f.observe(v)),p=()=>{f.disconnect(),p=I}},{immediate:s,flush:"post"}):I,g=()=>{p(),h(),i.value=!1};return k(g),{isSupported:d,isActive:i,pause(){p(),i.value=!1},resume(){i.value=!0},stop:g}}function Ce(e,t={}){const{window:n=W,scrollTarget:o,threshold:r=0}=t,l=_(!1);return Me(e,c=>{let s=l.value,d=0;for(const a of c)a.time>=d&&(d=a.time,s=a.isIntersecting);l.value=s},{root:o,window:n,threshold:r}),l}const U=1;function je(e,t={}){const{throttle:n=0,idle:o=200,onStop:r=I,onScroll:l=I,offset:c={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:d="auto",window:a=W,onError:p=w=>{console.error(w)}}=t,i=_(0),h=_(0),g=L({get(){return i.value},set(w){u(w,void 0)}}),b=L({get(){return h.value},set(w){u(void 0,w)}});function u(w,x){var O,m,y,S;if(!a)return;const D=T(e);if(!D)return;(y=D instanceof Document?a.document.body:D)==null||y.scrollTo({top:(O=T(x))!=null?O:b.value,left:(m=T(w))!=null?m:g.value,behavior:T(d)});const C=((S=D==null?void 0:D.document)==null?void 0:S.documentElement)||(D==null?void 0:D.documentElement)||D;g!=null&&(i.value=C.scrollLeft),b!=null&&(h.value=C.scrollTop)}const f=_(!1),v=Q({left:!0,right:!1,top:!0,bottom:!1}),E=Q({left:!1,right:!1,top:!1,bottom:!1}),F=w=>{f.value&&(f.value=!1,E.left=!1,E.right=!1,E.top=!1,E.bottom=!1,r(w))},j=Se(F,n+o),N=w=>{var x;if(!a)return;const O=((x=w==null?void 0:w.document)==null?void 0:x.documentElement)||(w==null?void 0:w.documentElement)||A(w),{display:m,flexDirection:y}=getComputedStyle(O),S=O.scrollLeft;E.left=S<i.value,E.right=S>i.value;const D=Math.abs(S)<=(c.left||0),C=Math.abs(S)+O.clientWidth>=O.scrollWidth-(c.right||0)-U;m==="flex"&&y==="row-reverse"?(v.left=C,v.right=D):(v.left=D,v.right=C),i.value=S;let P=O.scrollTop;w===a.document&&!P&&(P=a.document.body.scrollTop),E.top=P<h.value,E.bottom=P>h.value;const $=Math.abs(P)<=(c.top||0),G=Math.abs(P)+O.clientHeight>=O.scrollHeight-(c.bottom||0)-U;m==="flex"&&y==="column-reverse"?(v.top=G,v.bottom=$):(v.top=$,v.bottom=G),h.value=P},H=w=>{var x;if(!a)return;const O=(x=w.target.documentElement)!=null?x:w.target;N(O),f.value=!0,j(w),l(w)};return M(e,"scroll",n?Ee(H,n,!0,!1):H,s),B(()=>{try{const w=T(e);if(!w)return;N(w)}catch(w){p(w)}}),M(e,"scrollend",F,s),{x:g,y:b,isScrolling:f,arrivedState:v,directions:E,measure(){const w=T(e);a&&w&&N(w)}}}function He(e){const t=J("(prefers-color-scheme: light)",e),n=J("(prefers-color-scheme: dark)",e);return L(()=>n.value?"dark":t.value?"light":"no-preference")}function ze(e={}){const{window:t=W,behavior:n="auto"}=e;if(!t)return{x:_(0),y:_(0)};const o=_(t.scrollX),r=_(t.scrollY),l=L({get(){return o.value},set(s){scrollTo({left:s,behavior:n})}}),c=L({get(){return r.value},set(s){scrollTo({top:s,behavior:n})}});return M(t,"scroll",()=>{o.value=t.scrollX,r.value=t.scrollY},{capture:!1,passive:!0}),{x:l,y:c}}function Ve(e={}){const{window:t=W,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:l=!0,type:c="inner"}=e,s=_(n),d=_(o),a=()=>{t&&(c==="outer"?(s.value=t.outerWidth,d.value=t.outerHeight):l?(s.value=t.innerWidth,d.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,d.value=t.document.documentElement.clientHeight))};if(a(),B(a),M("resize",a,{passive:!0}),r){const p=J("(orientation: portrait)");R(p,()=>a())}return{width:s,height:d}}export{J as a,Ce as b,Re as c,ze as d,je as e,Ne as f,Ve as g,A as h,k as i,De as j,Pe as o,T as t,He as u,Fe as w};
