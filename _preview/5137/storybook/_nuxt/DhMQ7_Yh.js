const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p5AL06nU.js","./BXAcwQ7Y.js","./D-XGaJuf.js","./-WkxctKM.js","./BLIMiQvM.js","./CVtkxrq9.js","./BKKKF4W5.js","./BnDRGrsR.js","./CFMQYC2y.js","./DNZ0QEaN.js","./CVV9gpzL.js","./CuPsdpTl.js","./DlAUqK2U.js","./VIcon.Dp3bi4FO.css","./BLSEvJ0r.js","./C0aPY4k7.js","./CmiN-34A.js","./8bxaQBfd.js","./BOX21o1p.js","./VButton.DdgmI_ko.css","./HSkZLNjo.js","./BSEdKPgk.js","./D1a_y_au.js","./RxpDUvxm.js","./hXBgEdtc.js"])))=>i.map(i=>d[i]);
import{c as V}from"./C36Bf8YV.js";import{u as y}from"./BXAcwQ7Y.js";import{_ as v}from"./hXBgEdtc.js";import{v as P}from"./BPwGQkdi.js";import{u as $}from"./3trsRzmo.js";import{u as x}from"./DNZ0QEaN.js";import{d as w,C as e,H as t,K as g,N as A,P as E,F as m,O as h,I as B,X as b,D as N,w as D,R,Q as k,ai as T}from"./-WkxctKM.js";import{_ as H}from"./DLcmW9-b.js";import{_ as I}from"./CSgdRNb6.js";import{_ as O}from"./FptrohcI.js";const z={class:"flex flex-col gap-2 p-2 pb-0"},L=w({__name:"VBanners",setup(d){const n=b(()=>v(()=>import("./p5AL06nU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url)),s=b(()=>v(()=>import("./D1a_y_au.js"),__vite__mapDeps([22,6,7,8,9,3,10,11,12,13,14,15,16,17,18,19,23,21,24,4,5]),import.meta.url)),o=y(),l=x().$i18n.localeProperties,i=e(()=>o.shouldShowTranslationBanner(l.value)),r=e(()=>o.shouldShowAnalyticsBanner),a=e(()=>`translation-${l.value.code}`),{current:p}=$(),_=e(()=>["","index"].includes(p.value)?"dark":"regular"),f=u=>{o.dismissBanner(u)},S=e(()=>[i,r].some(u=>u.value));return(u,c)=>(t(),g("div",null,[A(E("div",z,[r.value?(t(),m(h(s),{key:0,variant:_.value,onClose:c[0]||(c[0]=C=>f("analytics"))},null,8,["variant"])):B("",!0),i.value?(t(),m(h(n),{key:1,variant:_.value,"banner-key":a.value,onClose:c[1]||(c[1]=C=>f(a.value))},null,8,["variant","banner-key"])):B("",!0)],512),[[P,S.value]])]))}}),W=w({__name:"VHeader",props:{showBottomBorder:{type:Boolean,default:!1},kind:{},color:{default:"default"}},setup(d){const n=d,s=N(null),o=y(),{height:l}=V(s);D(l,a=>{o.setHeaderHeight(a)});const i=e(()=>({internal:H,"search-desktop":I,"search-mobile":O})[n.kind]),r=e(()=>n.color==="default"?"bg-default":"bg-complementary dark:bg-default");return(a,p)=>(t(),g("div",{ref_key:"headerRef",ref:s,class:k(["header-el",r.value])},[R(L),(t(),m(T(i.value),{class:k(["h-20 border-b",[a.showBottomBorder?"border-b-default":"border-b-tx",r.value]])},null,8,["class"]))],2))}});export{W as _};
