import{n as S,c as _,z as C,o as j,b as N,g,y as A}from"./DLJ6ycII.js";import{w as E,i as v}from"./53SD24Bo.js";import"./RQxsyxdU.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d46ee8c6-a7af-490f-98ee-3ce118a0d609",e._sentryDebugIdIdentifier="sentry-dbid-d46ee8c6-a7af-490f-98ee-3ce118a0d609")}catch{}})();const{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__;var V=["props","events","slots","exposed","expose"],D=e=>{if(!C(e))return null;let t="exposed"in e.__docgenInfo?"vue-component-meta":"vue-docgen-api",a={};return V.forEach(r=>{j(e,r).forEach(n=>{let s;if(t==="vue-docgen-api"){let u=n.docgenInfo;s=T(u,r,n)}else{let u=n.docgenInfo;s=w(u,r)}!s||a[s.name]||(["events","expose","exposed"].includes(r)&&(s.control={disable:!0}),a[s.name]=s)})}),a},T=(e,t,a)=>{var u,l,i;let r,n;if(t==="events"&&(r=(u=e.type)==null?void 0:u.names.join(),n={name:"other",value:r??"",required:!1}),t==="slots"){let o=(l=e.bindings)==null?void 0:l.filter(m=>!!m.name).map(m=>{var p;return`${m.name}: ${((p=m.type)==null?void 0:p.name)??"unknown"}`}).join("; ");r=o?`{ ${o} }`:void 0,n={name:"other",value:r??"",required:!1}}if(t==="props"){let o=e;if(r=(i=o.type)==null?void 0:i.name,n=a?N(a.docgenInfo):{name:"other",value:r},o.type&&"elements"in o.type&&Array.isArray(o.type.elements)&&o.type.elements.length>0){let m=o.type.elements.map(p=>p.name);r==="Array"&&(r=`${m.length===1?m[0]:`(${m.join(" | ")})`}[]`),r==="union"?r=m.join(" | "):r==="intersection"&&(r=m.join(" & "))}}let s="required"in e?e.required??!1:!1;return{name:e.name,description:e.description,type:n?{...n,required:s}:{name:"other",value:r??""},table:{type:r?{summary:r}:void 0,defaultValue:(a==null?void 0:a.propDef.defaultValue)??void 0,jsDocTags:a==null?void 0:a.propDef.jsDocTags,category:t}}},w=(e,t)=>{if("global"in e&&e.global)return;let a={summary:e.type.replace(" | undefined","")};if(t==="props"){let r=e,n=r.default?{summary:r.default}:void 0;return{name:r.name,description:M(r.description,r.tags),defaultValue:n,type:f(r),table:{type:a,defaultValue:n,category:t}}}else return{name:e.name,description:"description"in e?e.description:"",type:{name:"other",value:e.type},table:{type:a,category:t}}},f=e=>{var s,u;let t=e.schema,a=e.required,r={name:"other",value:e.type,required:a},n=["string","number","function","boolean","symbol"];if(typeof t=="string")return n.includes(t)?{name:t,required:a}:r;switch(t.kind){case"enum":{let l=((s=t.schema)==null?void 0:s.filter(i=>i!=="undefined"))??[];return k(l)?{name:"boolean",required:a}:q(l)||F(l)?{name:"enum",value:l.map(i=>i.replace(/"/g,"")),required:a}:l.length===1?f({schema:l[0],type:e.type,required:a}):(l.length>2&&l.includes("true")&&l.includes("false")&&(l=l.filter(i=>i!=="true"&&i!=="false"),l.push("boolean")),{name:"union",value:l.map(i=>f(typeof i=="object"?{schema:i,type:i.type,required:!1}:{schema:i,type:i,required:!1})),required:a})}case"array":{let l=((u=t.schema)==null?void 0:u.filter(i=>i!=="undefined"))??[];return l.length===0?r:l.length===1?{name:"array",value:f({schema:l[0],type:e.type,required:!1}),required:a}:{name:"union",value:l.map(i=>f(typeof i=="object"?{schema:i,type:i.type,required:!1}:{schema:i,type:i,required:!1})),required:a}}case"object":return{name:"object",value:{},required:a};default:return r}},M=(e,t)=>!(t!=null&&t.length)||!e?e??"":`${t.map(a=>`@${a.name}: ${a.text}`).join("<br>")}<br><br>${e}`,q=e=>e.every(t=>typeof t=="string"&&t.startsWith('"')&&t.endsWith('"')),F=e=>e.every(t=>typeof t=="string"&&t.includes(".")),k=e=>e.length===2&&e.includes("true")&&e.includes("false"),I=(e,t)=>{let a=e();if(B(t))return a;let r=O.getChannel();return E(()=>t.args,()=>{let n=W(t);r.emit(A,{id:t.id,args:t.args,source:n,format:"vue"})},{immediate:!0,deep:!0}),a},W=e=>{let t={imports:{},scriptVariables:{}},{displayName:a,slotNames:r,eventNames:n}=R(e.component),s=$(e.args,r,n,t),u=h(e.args,r,t),l=a||e.title.split("/").at(-1),i=u?`<${l} ${s}> ${u} </${l}>`:`<${l} ${s} />`,o=Object.entries(t.scriptVariables).map(([d,y])=>`const ${d} = ${y};`).join(`

`),m=Object.entries(t.imports).map(([d,y])=>`import { ${Array.from(y.values()).sort().join(", ")} } from "${d}";`).join(`
`),p=`<template>
  ${i}
</template>`;return!m&&!o?p:`<script lang="ts" setup>
${m?`${m}

${o}`:o}
<\/script>

${p}`},B=e=>{var r;let t=(r=e==null?void 0:e.parameters.docs)==null?void 0:r.source;if((t==null?void 0:t.type)===g.DYNAMIC)return!1;let a=e==null?void 0:e.parameters.__isArgsStory;return(e==null?void 0:e.viewMode)!=="docs"||!a||(t==null?void 0:t.code)||(t==null?void 0:t.type)===g.CODE},R=e=>{if(!e||!("__docgenInfo"in e)||!e.__docgenInfo||typeof e.__docgenInfo!="object")return{displayName:e==null?void 0:e.__name,eventNames:[],slotNames:[]};let t=e.__docgenInfo,a="displayName"in t&&typeof t.displayName=="string"?t.displayName:void 0,r=n=>!(n in t)||!Array.isArray(t[n])?[]:t[n].map(s=>s&&typeof s=="object"&&"name"in s?s.name:void 0).filter(s=>typeof s=="string");return{displayName:a||e.__name,slotNames:r("slots").sort((n,s)=>n==="default"?-1:s==="default"?1:n.localeCompare(s)),eventNames:r("events")}},$=(e,t,a,r)=>{let n=[];Object.entries(e).forEach(([u,l])=>{if(!t.includes(u)&&l!=null)switch(typeof l){case"string":if(l==="")return;n.push({name:u,value:l.includes('"')?`'${l}'`:`"${l}"`,templateFn:(i,o)=>`${i}=${o}`});break;case"number":n.push({name:u,value:l.toString(),templateFn:(i,o)=>`:${i}="${o}"`});break;case"bigint":n.push({name:u,value:`BigInt(${l.toString()})`,templateFn:(i,o)=>`:${i}="${o}"`});break;case"boolean":n.push({name:u,value:l?"true":"false",templateFn:(i,o)=>o==="true"?i:`:${i}="false"`});break;case"symbol":n.push({name:u,value:`Symbol(${l.description?`'${l.description}'`:""})`,templateFn:(i,o)=>`:${i}="${o}"`});break;case"object":{n.push({name:u,value:Y(l),templateFn:void 0});break}}}),n.sort((u,l)=>u.name.localeCompare(l.name));let s=[];return n.forEach(u=>{let l=a.includes(`update:${u.name}`);if(!l&&u.templateFn){s.push(u.templateFn(u.name,u.value));return}let i=u.name;if(i in r.scriptVariables){let o=1;do i=`${u.name}${o}`,o++;while(i in r.scriptVariables)}if(!l){r.scriptVariables[i]=u.value,s.push(`:${u.name}="${i}"`);return}r.scriptVariables[i]=`ref(${u.value})`,r.imports.vue||(r.imports.vue=new Set),r.imports.vue.add("ref"),u.name==="modelValue"?s.push(`v-model="${i}"`):s.push(`v-model:${u.name}="${i}"`)}),s.join(" ")},h=(e,t,a)=>{let r=[];return t.forEach(n=>{let s=e[n];if(!s)return;let u=c([s],a);if(!u)return;let l=typeof s=="function"?b(s):[];n==="default"&&!l.length?r.push(u):r.push(`<template ${U(n,l)}>${u}</template>`)}),r.join(`

`)},c=(e,t)=>{let a=[],r=n=>{if(v(n))return G(n,t);switch(typeof n){case"string":case"number":case"boolean":return n.toString();case"object":return n===null?"":Array.isArray(n)?n.map(r).filter(s=>s!=="").join(`
`):JSON.stringify(n);case"function":{let s=b(n).filter(o=>!["{","}"].includes(o)),u=s.reduce((o,m)=>(o[m]=`{{ ${m} }}`,o),{}),l=n(u),i=c([l],t);return s.forEach(o=>{i=i.replaceAll(new RegExp(` (\\S+)="{{ ${o} }}"`,"g"),` :$1="${o}"`)}),i}case"bigint":return`{{ BigInt(${n.toString()}) }}`;default:return""}};return e.forEach(n=>{let s=r(n);s!==""&&a.push(s)}),a.join(`
`)},G=(e,t)=>{let a=J(e),r="";typeof e.children=="string"?r=e.children:Array.isArray(e.children)?r=c(e.children,t):e.children&&(r=h(e.children,Object.keys(e.children).filter(s=>s!=="$stable"),t));let n=e.props?$(e.props,[],[],t):"";return r?`<${a}${n?` ${n}`:""}>${r}</${a}>`:`<${a}${n?` ${n}`:""} />`},J=e=>{if(typeof e.type=="string")return e.type;if(typeof e.type=="object"){if("name"in e.type&&e.type.name)return e.type.name;if("__name"in e.type&&e.type.__name)return e.type.__name}return"component"},b=e=>{let t=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,a=/([^\s,]+)/g,r=e.toString().replace(t,""),n=r.slice(r.indexOf("(")+1,r.indexOf(")")).match(a);return n?n.flatMap(s=>{if(["{","}"].includes(s))return s;let u=s.split(":")[0].trim();return u.startsWith("{")?["{",u.substring(1)]:s.endsWith("}")&&!u.endsWith("}")?[u,"}"]:u}):[]},U=(e,t)=>t.length?t.length===1?`#${e}="${t[0]}"`:`#${e}="{ ${t.filter(a=>!["{","}"].includes(a)).join(", ")} }"`:`#${e}`,Y=e=>Object.values(e).every(t=>t==null||typeof t!="object")?JSON.stringify(e):JSON.stringify(e,null,2),Q={docs:{story:{inline:!0},extractArgTypes:D,extractComponentDescription:S}},X=[I],Z=[_];export{Z as argTypesEnhancers,X as decorators,Q as parameters};
