import{g as I}from"./Bz7P8nyL.js";import{u as $}from"./RxpDUvxm.js";import{u as z}from"./BnDRGrsR.js";import{C as x,d as V,F as r,G as i,K as c,L as _,M as v,O as d,H as s,P as g,V as w,I as b,R as m,Y as B,Q as P,Z as N}from"./-WkxctKM.js";import{_ as M,V as R}from"./CJGZE0Y2.js";import{V as y}from"./CVV9gpzL.js";import{_ as C}from"./BKKKF4W5.js";import{_ as S}from"./Cg57jLUO.js";function W(){const a=$(),n=[{id:"about",name:"navigation.about",link:a("/about")},{id:"licenses",name:"navigation.licenses",link:"https://creativecommons.org/about/cclicenses/"},{id:"sources",name:"navigation.sources",link:a("/sources")},{id:"search-help",name:"navigation.searchHelp",link:a("/search-help")},{id:"get-involved",name:"navigation.getInvolved",link:"https://make.wordpress.org/openverse/handbook/"},{id:"api",name:"navigation.api",link:"https://api.openverse.org/v1/"},{id:"terms",name:"navigation.terms",link:"https://docs.openverse.org/terms_of_service.html"},{id:"privacy",name:"navigation.privacy",link:a("/privacy")},{id:"feedback",name:"navigation.feedback",link:a("/feedback")}],l=z(),o=x(()=>I(l).split("__")[0]??"");return{all:n,current:o}}const A={class:"flex w-full flex-row justify-between"},E={class:"pe-2"},F={key:1},Z=V({__name:"VPageLinks",props:{mode:{default:"light"},navLinkClasses:{default:""},variant:{default:"links"},isInModal:{type:Boolean,default:!1}},emits:["close"],setup(a,{emit:n}){const l=a,o=n,{all:f,current:u}=W(),p=()=>o("close"),h=t=>!t.link.startsWith("/"),L=x(()=>l.isInModal?6:4);return(t,H)=>t.variant==="itemgroup"?(s(),r(M,{key:0,class:"my-2 min-w-50 gap-y-2",bordered:!1,"show-check":!1},{default:i(()=>[(s(!0),c(_,null,v(d(f),(e,k)=>(s(),r(R,{key:k,as:"VLink","is-first":k===0,selected:d(u)===e.id,href:e.link,class:"w-full",onClick:p},{default:i(()=>[g("div",A,[g("span",E,w(t.$t(e.name)),1),h(e)?(s(),r(y,{key:0,name:"external-link",size:4,class:"self-center","rtl-flip":""})):b("",!0)])]),_:2},1032,["is-first","selected","href"]))),128))]),_:1})):(s(),c("ul",F,[(s(!0),c(_,null,v(d(f),e=>(s(),c("li",{key:e.id},[m(C,{class:P(["flex flex-row rounded-sm hover:underline disabled:text-disabled",[{"font-semibold":d(u)===e.id},{"text-default":t.mode==="light"},t.navLinkClasses]]),href:e.link,onClick:p},{default:i(()=>[B(w(t.$t(e.name)),1),h(e)?(s(),r(y,{key:0,name:"external-link",size:L.value,class:"ms-2 self-center","rtl-flip":""},null,8,["size"])):b("",!0)]),_:2},1032,["class","href"])]))),128))]))}}),q=V({__name:"VWordPressLink",props:{mode:{default:"light"}},setup(a){return(n,l)=>{const o=N("i18n-t");return s(),r(C,{href:"https://wordpress.org","aria-label":n.$t("footer.wordpressAffiliation",{wordpress:"WordPress"}),class:P(["hover:no-underline",n.mode==="dark"?"text-white focus-visible:outline-yellow-3":"text-default"])},{default:i(()=>[m(o,{scope:"global",tag:"p",keypath:"footer.wordpressAffiliation",class:"label-regular flex flex-row items-center gap-1"},{wordpress:i(()=>[m(S,{name:"wordpress",class:"h-6 w-6",width:"24",height:"24"})]),_:1})]),_:1},8,["aria-label","class"])}}});export{Z as _,q as a,W as u};
