import{D as u,E as h,U as v}from"./-WkxctKM.js";function c(e,t={}){const a={width:t.initialWidth||0,height:t.initialHeight||0},n=u(a),s=()=>{var r,o;n.value={width:((r=e.value)==null?void 0:r.clientWidth)||0,height:((o=e.value)==null?void 0:o.clientHeight)||0}};let i;return h(()=>{window.ResizeObserver&&e.value&&(i=new ResizeObserver(s),i.observe(e.value)),s()}),v(()=>{i&&i.disconnect()}),{dimens:n}}export{c as u};
