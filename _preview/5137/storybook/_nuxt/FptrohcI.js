import{_ as pe}from"./BecnK7b_.js";import{_ as me}from"./WINk6Gqn.js";import{v as m,w as I,a as b}from"./BPwGQkdi.js";import{o as ve}from"./C36Bf8YV.js";import{e as M,g as he,a as be}from"./DQnMOLSw.js";import{u as ge}from"./DJuamxAL.js";import{u as Se}from"./ZwMfgceM.js";import{u as we}from"./BxOnwPF8.js";import{u as xe}from"./Cy2Oj-z2.js";import{u as _e,a as Ce}from"./DTU7yJca.js";import{C as ye,R as ke}from"./-TaKdCZx.js";import{s as Re}from"./BOX21o1p.js";import{_ as Ie}from"./2rn3yr8r.js";import{_ as Te}from"./CqzC9m7X.js";import{_ as Be}from"./BZhKRcfk.js";import{_ as $e}from"./4nnA4bBz.js";import{V as P}from"./CiUfQdtK.js";import{f as Ee}from"./Xs_VBmP5.js";import{f as Fe}from"./C_4PSVgb.js";import{u as Ve}from"./DNZ0QEaN.js";import{u as Ne,a as Oe}from"./BnDRGrsR.js";import{d as Ke,D as s,C as g,w as H,K as Ae,P as T,S as De,O as t,N as v,R as u,V as Me,T as Pe,Q as He,F as Ge,G,I as Le,H as L,n as qe}from"./-WkxctKM.js";const ze=["placeholder","value","aria-label","aria-expanded","aria-activedescendant"],ht=Ke({__name:"VHeaderMobile",emits:["open","close"],setup(Qe,{emit:q}){const f=s(null),S=s(null),w=s(null),B=s(null),z=g(()=>{var e;return((e=B.value)==null?void 0:e.$el)??void 0}),Q=s(null),j=_e(),J=Ce(),d=s(!1),r=s(!1),x=s(!1),U=g(()=>J.appliedFilterCount),$=g(()=>j.fetchState.isFetching),_=s({start:0,end:0}),{$sendCustomEvent:W}=Ve(),{updateSearchState:X,searchTerm:p,searchStatus:E}=Se(W),o=s(p.value),F=()=>{const e=f.value;M(e),e.selectionStart=_.value.start,e.selectionEnd=_.value.end},Y=()=>{o.value&&o.value!==p.value&&(p.value=o.value),C(),V()},V=()=>{window.scrollTo({top:0,left:0,behavior:"auto"}),X()},N=()=>{r.value=!0,d.value=!0,n.value||oe()},h=()=>{r.value=!1,d.value=!1},O=()=>{const e=f.value,a=e.value.length>0?e.value.length-1:0;_.value={start:e.selectionStart??a,end:e.selectionEnd??a}},Z=()=>{o.value=f.value.value,O(),r.value&&!d.value&&N()},ee=()=>{o.value="",F()},{handleKeydown:K,handleSelect:te,handleClear:ae,recent:{isVisible:n,show:oe,hide:C,entries:ne,selectedIdx:y}}=xe({focusInput:F,term:o,isMobile:!0,isInputFocused:r});H(n,e=>{e||(h(),o.value!==p.value&&(p.value=o.value,V()))});const se=()=>r.value=!0,le=()=>{!n.value&&r.value&&h()};ve(S,e=>{var l,i;((i=(l=w.value)==null?void 0:l.$el)==null?void 0:i.contains(e.target))||(r.value=!1)});const re=()=>{d.value||(O(),N())},k=e=>{C(),qe().then(()=>{const a=e==="forward"?document.getElementById(Re):he(document.body)[1];M(a??be(document.body))})},ie=q,{close:A,onTriggerClick:ce,triggerA11yProps:ue}=ge({id:ye,visibleRef:x,nodeRef:S,lockBodyScroll:!0,emit:ie}),R=Ne(),de=g(()=>Ee(R==null?void 0:R.query.q));H(de,e=>{o.value=e??""});const{doneHydrating:fe}=we();Oe().beforeEach((e,a,l)=>{e.path!==a.path&&(A(),h()),l()});const D=(e,a)=>{var l;if(n.value){e.preventDefault();const i=(l=w.value)==null?void 0:l.$el;i&&Fe(i,1)}else a==="content-settings"&&k("forward")};return(e,a)=>{const l=pe,i=me;return L(),Ae("header",{ref_key:"headerRef",ref:S,class:"main-header z-30 flex w-full items-center px-6 py-4"},[T("form",{action:"/search",class:He(["search-bar group flex h-12 w-full flex-row items-center overflow-hidden rounded-sm",d.value||r.value?"bg-default ring ring-focus":"bg-surface"]),onSubmit:b(Y,["prevent"])},[De(e.$slots,"start",{},()=>[v(u(Ie,{"is-fetching":$.value,class:"focus-visible:me-1.5px focus-visible:ms-1.5px focus-visible:!h-[45px] focus-visible:max-w-[45px]"},null,8,["is-fetching"]),[[m,!t(n)]]),v(u(P,{icon:"chevron-back",label:e.$t("header.backButton"),"rtl-flip":!0,variant:"filled-gray",onClick:t(C),onKeydown:a[0]||(a[0]=I(b(c=>k("backward"),["shift"]),["tab"]))},null,8,["label","onClick"]),[[m,t(n)]])]),T("input",{id:"search-bar",ref_key:"searchInputRef",ref:f,name:"q",placeholder:e.$t("hero.search.placeholder"),type:"search",class:"search-field ms-1 h-full w-full flex-grow appearance-none rounded-none border-tx bg-tx text-2xl text-secondary placeholder-default hover:text-default focus-visible:outline-none",value:o.value,"aria-label":e.$t("search.searchBarLabel",{openverse:"Openverse"}),autocomplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":t(n)?"true":"false","aria-controls":"recent-searches-list","aria-haspopup":"listbox","aria-activedescendant":t(y)===void 0?void 0:`option-${t(y)}`,onInput:Z,onKeydown:a[1]||(a[1]=(...c)=>t(K)&&t(K)(...c)),onFocus:se,onFocusout:le,onClick:re},null,40,ze),v(u(P,{ref_key:"clearButtonRef",ref:Q,icon:"close-small",label:e.$t("browsePage.searchForm.clear"),onClick:ee,onKeydown:a[2]||(a[2]=I(b(c=>D(c,"clear-input"),["exact"]),["tab"]))},null,8,["label"]),[[m,t(n)&&o.value]]),v(T("span",{class:"info mx-4 hidden whitespace-nowrap text-xs group-hover:text-default group-focus:text-default md:flex"},Me(t(E)),513),[[m,!d.value&&t(E)]]),v(u(Be,Pe({ref_key:"contentSettingsButtonRef",ref:B,"is-pressed":x.value,"applied-filter-count":U.value},t(ue),{disabled:!t(fe),onClick:t(ce),onKeydown:a[3]||(a[3]=I(b(c=>D(c,"content-settings"),["exact"]),["tab"]))}),null,16,["is-pressed","applied-filter-count","disabled","onClick"]),[[m,!t(n)]]),u(Te,{variant:"two-thirds",visible:x.value,"is-fetching":$.value,close:t(A),"trigger-element":z.value,labelledby:"content-settings-button"},null,8,["visible","is-fetching","close","trigger-element"])],34),t(n)?(L(),Ge(i,{key:0,id:t(ke),visible:!0,hide:h,"trigger-element":f.value,"trap-focus":!1,"auto-focus-on-show":!1,"auto-focus-on-hide":!1,"content-classes":"px-3","aria-label":e.$t("recentSearches.heading"),variant:"mobile-input"},{default:G(()=>[u(l,null,{default:G(()=>[u($e,{ref_key:"recentSearchesRef",ref:w,class:"w-[100dvw] px-3","selected-idx":t(y),entries:t(ne),bordered:!1,onSelect:t(te),onClear:t(ae),onLastTab:a[4]||(a[4]=c=>k("forward"))},null,8,["selected-idx","entries","onSelect","onClear"])]),_:1})]),_:1},8,["id","trigger-element","aria-label"])):Le("",!0)],512)}}});export{ht as _};
