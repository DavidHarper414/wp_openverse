import{b as g}from"./BPwGQkdi.js";import{V as y}from"./CVV9gpzL.js";import{d as V,W as k,ad as _,C as l,K as s,I as h,P as i,S,R as x,N as A,V as m,L as N,M as C,T,Q as B,H as o}from"./-WkxctKM.js";const I={key:0,class:"new-highlight pointer-events-none absolute -inset-1.5px animate-new-highlight rounded-sm border-1.5 border-tx group-focus-within/select:hidden group-hover/select:hidden","aria-hidden":"true"},H={class:"pointer-events-none absolute inset-y-0 start-2 my-auto h-fit"},D={class:"pointer-events-none absolute inset-y-0 end-2 my-auto h-fit"},F=["id","name","aria-label"],L={key:0,disabled:"",value:""},E=["value","selected"],W=V({inheritAttrs:!1,__name:"VSelectField",props:{modelValue:{default:""},blankText:{default:""},fieldId:{},labelText:{},choices:{},showSelected:{type:Boolean,default:!0},showNewHighlight:{type:Boolean}},emits:["update:modelValue"],setup(p,{emit:f}){const d=p,b=f,u=k(),n=_(),v=l(()=>u.name??d.fieldId),r=l({get:()=>d.modelValue,set:e=>{b("update:modelValue",e)}}),w=l(()=>n&&n.start&&n.start().length!==0),c=l(()=>{const{class:e,...a}=u;return{classAttrs:e,nonClassAttrs:a}});return(e,a)=>(o(),s("div",{class:B(["group/select relative m-0.5px box-content block w-fit rounded-sm border text-sm focus-within:m-0 focus-within:border-1.5 focus-within:border-focus hover:border-hover focus-within:hover:border-focus",[c.value.classAttrs,e.showNewHighlight?"border-tx":"border-default"]])},[e.showNewHighlight?(o(),s("div",I)):h("",!0),i("div",H,[S(e.$slots,"start")]),i("div",D,[x(y,{name:"caret-down"})]),A(i("select",T({id:e.fieldId,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),class:["outline-style-none flex h-[calc(theme(spacing.10)_-_2_*_theme(borderWidth.DEFAULT))] appearance-none truncate bg-tx pe-10",[e.showSelected?"w-full":"w-0 max-w-0",w.value?"ps-10":"ps-2"]],name:v.value},c.value.nonClassAttrs,{"aria-label":e.labelText}),[e.blankText?(o(),s("option",L,m(e.blankText),1)):h("",!0),(o(!0),s(N,null,C(e.choices,t=>(o(),s("option",{key:t.key,value:t.key,selected:t.key===r.value?!0:void 0},m(t.text),9,E))),128))],16,F),[[g,r.value]])],2))}});export{W as _};
