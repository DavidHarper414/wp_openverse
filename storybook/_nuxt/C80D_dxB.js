(function(){try{var e=typeof window<"u"?window:typeof u<"u"?u:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1261db4f-a84d-4761-bfc1-f2228f39bc67",e._sentryDebugIdIdentifier="sentry-dbid-1261db4f-a84d-4761-bfc1-f2228f39bc67")}catch{}})();var j="Invariant failed";function S(e,t){if(!e)throw new Error(j)}const{useEffect:T}=__STORYBOOK_MODULE_PREVIEW_API__,{global:u}=__STORYBOOK_MODULE_GLOBAL__;var K="measureEnabled";function Y(){let e=u.document.documentElement,t=Math.max(e.scrollHeight,e.offsetHeight);return{width:Math.max(e.scrollWidth,e.offsetWidth),height:t}}function G(){let e=u.document.createElement("canvas");e.id="storybook-addon-measure";let t=e.getContext("2d");S(t!=null);let{width:o,height:l}=Y();return _(e,t,{width:o,height:l}),e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.zIndex="2147483647",e.style.pointerEvents="none",u.document.body.appendChild(e),{canvas:e,context:t,width:o,height:l}}function _(e,t,{width:o,height:l}){e.style.width=`${o}px`,e.style.height=`${l}px`;let i=u.window.devicePixelRatio;e.width=Math.floor(o*i),e.height=Math.floor(l*i),t.scale(i,i)}var h={};function U(){h.canvas||(h=G())}function H(){h.context&&h.context.clearRect(0,0,h.width??0,h.height??0)}function V(e){H(),e(h.context)}function Z(){S(h.canvas),S(h.context),_(h.canvas,h.context,{width:0,height:0});let{width:e,height:t}=Y();_(h.canvas,h.context,{width:e,height:t}),h.width=e,h.height=t}function J(){var e;h.canvas&&(H(),(e=h.canvas.parentNode)==null||e.removeChild(h.canvas),h={})}var w={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},p=6;function W(e,{x:t,y:o,w:l,h:i,r:n}){t=t-l/2,o=o-i/2,l<2*n&&(n=l/2),i<2*n&&(n=i/2),e.beginPath(),e.moveTo(t+n,o),e.arcTo(t+l,o,t+l,o+i,n),e.arcTo(t+l,o+i,t,o+i,n),e.arcTo(t,o+i,t,o,n),e.arcTo(t,o,t+l,o,n),e.closePath()}function Q(e,{padding:t,border:o,width:l,height:i,top:n,left:r}){let f=l-o.left-o.right-t.left-t.right,a=i-t.top-t.bottom-o.top-o.bottom,s=r+o.left+t.left,d=n+o.top+t.top;return e==="top"?s+=f/2:e==="right"?(s+=f,d+=a/2):e==="bottom"?(s+=f/2,d+=a):e==="left"?d+=a/2:e==="center"&&(s+=f/2,d+=a/2),{x:s,y:d}}function x(e,t,{margin:o,border:l,padding:i},n,r){let f=g=>0,a=0,s=0,d=r?1:.5,m=r?n*2:0;return e==="padding"?f=g=>i[g]*d+m:e==="border"?f=g=>i[g]+l[g]*d+m:e==="margin"&&(f=g=>i[g]+l[g]+o[g]*d+m),t==="top"?s=-f("top"):t==="right"?a=f("right"):t==="bottom"?s=f("bottom"):t==="left"&&(a=-f("left")),{offsetX:a,offsetY:s}}function tt(e,t){return Math.abs(e.x-t.x)<Math.abs(e.w+t.w)/2&&Math.abs(e.y-t.y)<Math.abs(e.h+t.h)/2}function et(e,t,o){return e==="top"?t.y=o.y-o.h-p:e==="right"?t.x=o.x+o.w/2+p+t.w/2:e==="bottom"?t.y=o.y+o.h+p:e==="left"&&(t.x=o.x-o.w/2-p-t.w/2),{x:t.x,y:t.y}}function I(e,t,{x:o,y:l,w:i,h:n},r){return W(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${w[t]}dd`,e.fill(),e.strokeStyle=w[t],e.stroke(),e.fillStyle=w.text,e.fillText(r,o,l),W(e,{x:o,y:l,w:i,h:n,r:3}),e.fillStyle=`${w[t]}dd`,e.fill(),e.strokeStyle=w[t],e.stroke(),e.fillStyle=w.text,e.fillText(r,o,l),{x:o,y:l,w:i,h:n}}function D(e,t){e.font="600 12px monospace",e.textBaseline="middle",e.textAlign="center";let o=e.measureText(t),l=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,i=o.width+p*2,n=l+p*2;return{w:i,h:n}}function ot(e,t,{type:o,position:l="center",text:i},n,r=!1){let{x:f,y:a}=Q(l,t),{offsetX:s,offsetY:d}=x(o,l,t,p+1,r);f+=s,a+=d;let{w:m,h:g}=D(e,i);if(n&&tt({x:f,y:a,w:m,h:g},n)){let v=et(l,{x:f,y:a,w:m,h:g},n);f=v.x,a=v.y}return I(e,o,{x:f,y:a,w:m,h:g},i)}function it(e,{w:t,h:o}){let l=t*.5+p,i=o*.5+p;return{offsetX:(e.x==="left"?-1:1)*l,offsetY:(e.y==="top"?-1:1)*i}}function lt(e,t,{type:o,text:l}){let{floatingAlignment:i,extremities:n}=t,r=n[i.x],f=n[i.y],{w:a,h:s}=D(e,l),{offsetX:d,offsetY:m}=it(i,{w:a,h:s});return r+=d,f+=m,I(e,o,{x:r,y:f,w:a,h:s},l)}function E(e,t,o,l){let i=[];o.forEach((n,r)=>{let f=l&&n.position==="center"?lt(e,t,n):ot(e,t,n,i[r-1],l);i[r]=f})}function nt(e,t,o,l){let i=o.reduce((n,r)=>{var f;return Object.prototype.hasOwnProperty.call(n,r.position)||(n[r.position]=[]),(f=n[r.position])==null||f.push(r),n},{});i.top&&E(e,t,i.top,l),i.right&&E(e,t,i.right,l),i.bottom&&E(e,t,i.bottom,l),i.left&&E(e,t,i.left,l),i.center&&E(e,t,i.center,l)}var L={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},B=30;function c(e){return parseInt(e.replace("px",""),10)}function b(e){return Number.isInteger(e)?e:e.toFixed(2)}function A(e){return e.filter(t=>t.text!==0&&t.text!=="0")}function ft(e){let t={top:u.window.scrollY,bottom:u.window.scrollY+u.window.innerHeight,left:u.window.scrollX,right:u.window.scrollX+u.window.innerWidth},o={top:Math.abs(t.top-e.top),bottom:Math.abs(t.bottom-e.bottom),left:Math.abs(t.left-e.left),right:Math.abs(t.right-e.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}function rt(e){let t=u.getComputedStyle(e),{top:o,left:l,right:i,bottom:n,width:r,height:f}=e.getBoundingClientRect(),{marginTop:a,marginBottom:s,marginLeft:d,marginRight:m,paddingTop:g,paddingBottom:v,paddingLeft:X,paddingRight:k,borderBottomWidth:C,borderTopWidth:F,borderLeftWidth:$,borderRightWidth:N}=t;o=o+u.window.scrollY,l=l+u.window.scrollX,n=n+u.window.scrollY,i=i+u.window.scrollX;let y={top:c(a),bottom:c(s),left:c(d),right:c(m)},q={top:c(g),bottom:c(v),left:c(X),right:c(k)},z={top:c(F),bottom:c(C),left:c($),right:c(N)},P={top:o-y.top,bottom:n+y.bottom,left:l-y.left,right:i+y.right};return{margin:y,padding:q,border:z,top:o,left:l,bottom:n,right:i,width:r,height:f,extremities:P,floatingAlignment:ft(P)}}function at(e,{margin:t,width:o,height:l,top:i,left:n,bottom:r,right:f}){let a=l+t.bottom+t.top;e.fillStyle=L.margin,e.fillRect(n,i-t.top,o,t.top),e.fillRect(f,i-t.top,t.right,a),e.fillRect(n,r,o,t.bottom),e.fillRect(n-t.left,i-t.top,t.left,a);let s=[{type:"margin",text:b(t.top),position:"top"},{type:"margin",text:b(t.right),position:"right"},{type:"margin",text:b(t.bottom),position:"bottom"},{type:"margin",text:b(t.left),position:"left"}];return A(s)}function st(e,{padding:t,border:o,width:l,height:i,top:n,left:r,bottom:f,right:a}){let s=l-o.left-o.right,d=i-t.top-t.bottom-o.top-o.bottom;e.fillStyle=L.padding,e.fillRect(r+o.left,n+o.top,s,t.top),e.fillRect(a-t.right-o.right,n+t.top+o.top,t.right,d),e.fillRect(r+o.left,f-t.bottom-o.bottom,s,t.bottom),e.fillRect(r+o.left,n+t.top+o.top,t.left,d);let m=[{type:"padding",text:t.top,position:"top"},{type:"padding",text:t.right,position:"right"},{type:"padding",text:t.bottom,position:"bottom"},{type:"padding",text:t.left,position:"left"}];return A(m)}function ht(e,{border:t,width:o,height:l,top:i,left:n,bottom:r,right:f}){let a=l-t.top-t.bottom;e.fillStyle=L.border,e.fillRect(n,i,o,t.top),e.fillRect(n,r-t.bottom,o,t.bottom),e.fillRect(n,i+t.top,t.left,a),e.fillRect(f-t.right,i+t.top,t.right,a);let s=[{type:"border",text:t.top,position:"top"},{type:"border",text:t.right,position:"right"},{type:"border",text:t.bottom,position:"bottom"},{type:"border",text:t.left,position:"left"}];return A(s)}function dt(e,{padding:t,border:o,width:l,height:i,top:n,left:r}){let f=l-o.left-o.right-t.left-t.right,a=i-t.top-t.bottom-o.top-o.bottom;return e.fillStyle=L.content,e.fillRect(r+o.left+t.left,n+o.top+t.top,f,a),[{type:"content",position:"center",text:`${b(f)} x ${b(a)}`}]}function ut(e){return t=>{if(e&&t){let o=rt(e),l=at(t,o),i=st(t,o),n=ht(t,o),r=dt(t,o),f=o.width<=B*3||o.height<=B;nt(t,o,[...r,...i,...n,...l],f)}}}function gt(e){V(ut(e))}var mt=(e,t)=>{let o=u.document.elementFromPoint(e,t),l=i=>{if(i&&i.shadowRoot){let n=i.shadowRoot.elementFromPoint(e,t);return i.isEqualNode(n)?i:n.shadowRoot?l(n):n}return i};return l(o)||o},O,M={x:0,y:0};function R(e,t){O=mt(e,t),gt(O)}var ct=(e,t)=>{let{measureEnabled:o}=t.globals;return T(()=>{let l=i=>{window.requestAnimationFrame(()=>{i.stopPropagation(),M.x=i.clientX,M.y=i.clientY})};return document.addEventListener("pointermove",l),()=>{document.removeEventListener("pointermove",l)}},[]),T(()=>{let l=n=>{window.requestAnimationFrame(()=>{n.stopPropagation(),R(n.clientX,n.clientY)})},i=()=>{window.requestAnimationFrame(()=>{Z()})};return t.viewMode==="story"&&o&&(document.addEventListener("pointerover",l),U(),window.addEventListener("resize",i),R(M.x,M.y)),()=>{window.removeEventListener("resize",i),J()}},[o,t.viewMode]),e()},pt=[ct],wt={[K]:!1};export{pt as decorators,wt as initialGlobals};
