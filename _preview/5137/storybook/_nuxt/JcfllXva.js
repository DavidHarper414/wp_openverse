import{v as g}from"./BPwGQkdi.js";import{u as y}from"./DcJiy9Gt.js";import{a as O}from"./DJuamxAL.js";import{D as h,C as b,d as v,W as w,J as B,N as C,K as F,S as E,Q as R,ag as k,O as t,_ as S,H as x}from"./-WkxctKM.js";import{V as H}from"./fl49u9nx.js";function z({popoverRef:n,popoverPropsRefs:e,emit:u,attrs:d}){const{onKeyDown:f,onBlur:m}=O({visibleRef:e.visible,hideRef:e.hide,dialogElements:{dialogRef:n,triggerElementRef:e.triggerElement,initialFocusElementRef:h(null)},dialogOptions:{autoFocusOnShowRef:e.autoFocusOnShow,autoFocusOnHideRef:e.autoFocusOnHide,hideOnClickOutsideRef:e.hideOnClickOutside,hideOnEscRef:e.hideOnEsc,trapFocusRef:e.trapFocus},emit:u,attrs:d}),{style:i,maxHeightRef:a}=y({floatingElRef:n,floatingPropsRefs:e}),l=b(()=>{const s=a.value;return s&&e.clippable?{"--popover-height":`${s}px`}:{}});return{onKeyDown:f,onBlur:m,style:i,heightProperties:l}}const D=["id","aria-hidden"],A=v({__name:"VPopoverContent",props:{id:{},visible:{type:Boolean},hide:{},hideOnEsc:{type:Boolean,default:!0},hideOnClickOutside:{type:Boolean,default:!0},autoFocusOnShow:{type:Boolean,default:!0},autoFocusOnHide:{type:Boolean,default:!0},triggerElement:{},placement:{default:"bottom-end"},strategy:{default:"absolute"},zIndex:{},clippable:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:!0}},emits:["keydown","blur"],setup(n,{emit:e}){const u=n,d=e,f=w();S(H,!0);const m=B(u),i=h(null),{onKeyDown:a,onBlur:l,heightProperties:s,style:p}=z({popoverRef:i,popoverPropsRefs:m,emit:d,attrs:f});return(o,r)=>C((x(),F("div",{id:o.id,ref_key:"popoverRef",ref:i,role:"dialog","aria-modal":"true",class:R(["popover-content w-max-content absolute left-0 top-0 overflow-y-auto overflow-x-hidden rounded-sm border border-overlay bg-overlay shadow",`z-${o.zIndex}`]),style:k({...t(s),...t(p)}),tabindex:-1,"aria-hidden":!o.visible,onBlur:r[0]||(r[0]=(...c)=>t(l)&&t(l)(...c)),onKeydown:r[1]||(r[1]=(...c)=>t(a)&&t(a)(...c))},[E(o.$slots,"default")],46,D)),[[g,o.visible]])}});export{A as _};
