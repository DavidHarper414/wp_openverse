(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="916fdfc8-043b-499e-b581-1b9c3492b6ae",e._sentryDebugIdIdentifier="sentry-dbid-916fdfc8-043b-499e-b581-1b9c3492b6ae")}catch{}})();var w=Object.create,p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,A=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,x=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),I=(e,r,u,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of j(r))!m.call(e,a)&&a!==u&&p(e,a,{get:()=>r[a],enumerable:!(i=h(r,a))||i.enumerable});return e},P=(e,r,u)=>(u=e!=null?w(A(e)):{},I(!e||!e.__esModule?p(u,"default",{value:e,enumerable:!0}):u,e)),S=x(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isEqual=function(){var r=Object.prototype.toString,u=Object.getPrototypeOf,i=Object.getOwnPropertySymbols?function(a){return Object.keys(a).concat(Object.getOwnPropertySymbols(a))}:Object.keys;return function(a,f){return function c(t,n,o){var y,s,l,b=r.call(t),v=r.call(n);if(t===n)return!0;if(t==null||n==null)return!1;if(o.indexOf(t)>-1&&o.indexOf(n)>-1)return!0;if(o.push(t,n),b!=v||(y=i(t),s=i(n),y.length!=s.length||y.some(function(d){return!c(t[d],n[d],o)})))return!1;switch(b.slice(8,-1)){case"Symbol":return t.valueOf()==n.valueOf();case"Date":case"Number":return+t==+n||+t!=+t&&+n!=+n;case"RegExp":case"Function":case"String":case"Boolean":return""+t==""+n;case"Set":case"Map":y=t.entries(),s=n.entries();do if(!c((l=y.next()).value,s.next().value,o))return!1;while(!l.done);return!0;case"ArrayBuffer":t=new Uint8Array(t),n=new Uint8Array(n);case"DataView":t=new Uint8Array(t.buffer),n=new Uint8Array(n.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(t.length!=n.length)return!1;for(l=0;l<t.length;l++)if((l in t||l in n)&&(l in t!=l in n||!c(t[l],n[l],o)))return!1;return!0;case"Object":return c(u(t),u(n),o);default:return!1}}(a,f,[])}}()}),g=P(S()),O=e=>e.map(r=>typeof r<"u").filter(Boolean).length,_=(e,r)=>{let{exists:u,eq:i,neq:a,truthy:f}=e;if(O([u,i,a,f])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:u,eq:i,neq:a})}`);if(typeof i<"u")return(0,g.isEqual)(r,i);if(typeof a<"u")return!(0,g.isEqual)(r,a);if(typeof u<"u"){let c=typeof r<"u";return u?c:!c}return typeof f>"u"||f?!!r:!r},E=(e,r,u)=>{if(!e.if)return!0;let{arg:i,global:a}=e.if;if(O([i,a])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:i,global:a})}`);let f=i?r[i]:u[a];return _(e.if,f)},U=e=>e.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");export{U as O,E as P};
