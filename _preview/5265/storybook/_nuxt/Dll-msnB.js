import{d as h,c as m,r as p,w as v,o as g,p as l,j as u,k as f,e,I as w,L as S,l as I,J as k,K as x,M as D}from"./DwwldUEF.js";import{e as B}from"./Ck0CgHQL.js";import{a as L,I as V,S as $}from"./cfTPNM7V.js";import{u as N}from"./jkP_3ymO.js";import{a as E,i as K}from"./Ds_kB4O7.js";import{_ as C}from"./BaLH0huz.js";import{a as j}from"./uHU1XEUv.js";import{_ as z}from"./vTZhCz6K.js";import{_ as F}from"./B5NzKPg1.js";import{_ as H}from"./Bx9my-EP.js";import{_ as M}from"./DhTbjJlp.js";import"./CWoQmekT.js";import"../sb-preview/runtime.js";import"./Z8zkSHZ1.js";import"./C8BbUAkk.js";import"./DzAq6MI-.js";import"./CAa63J2U.js";import"./BAdCBbtP.js";import"./Dl1S6mqo.js";import"./TLA9Fm80.js";import"./aHnQ5-ra.js";import"./ghAvikQd.js";import"./Bkc2CSET.js";import"./D8qJDlnG.js";import"./Cyc9srVp.js";import"./VcnMPoS3.js";import"./I6oWuQE1.js";import"./DEnXpTnD.js";import"./EYNRPfqu.js";import"./DEUi6v0t.js";import"./DNI0JtzU.js";import"./tAHCZdDM.js";import"./BCWuNC2L.js";import"./BtS8wA1z.js";import"./DHuvU6af.js";import"./CzJ3cZ9I.js";import"./DZP0BHtF.js";import"./Dhs1Or-2.js";import"./CUvT7aun.js";import"./DqyB4W5h.js";import"./DoSYsHAz.js";import"./aezMCrU2.js";import"./9C_OvWUG.js";import"./6EtbFbqO.js";import"./CDLDLBfB.js";import"./gRQEeVrp.js";import"./Dm_OpIlv.js";import"./D93TPuWH.js";import"./CU-snwr6.js";import"./axgLztSI.js";import"./B6fTz0T-.js";import"./DpnpvZCo.js";import"./W77m2Y03.js";import"./yZh5K4qq.js";import"./g9Fv9Qqu.js";import"./Co6bLswe.js";import"./DKDb4atL.js";import"./CUuqYMuc.js";import"./CUCjtGpu.js";import"./B46r_P4O.js";import"./DOn4i9uW.js";import"./ChZpVpQj.js";import"./DJXVTcEq.js";import"./DJyfWqgd.js";import"./sG2vOutt.js";import"./BrBSbq_x.js";import"./C5bxlBmD.js";import"./DCFDTHLM.js";import"./R5vfKv1c.js";import"./p3yRY0a3.js";import"./CCyBuvoU.js";import"./CEvcS2ii.js";import"./Bt7nfPFr.js";import"./8zTACUTo.js";import"./PhiECvvt.js";import"./Bq7tJILY.js";import"./O68K-DQz.js";import"./BUaahbsN.js";import"./CcNWDV0w.js";import"./B8gBvgeW.js";import"./DPVVA9PQ.js";import"./Db7wXxWF.js";import"./DXIOb9i7.js";import"./CYeZhaSj.js";import"./D6RkRnWy.js";import"./DKrssSK2.js";import"./B06y-RTa.js";import"./BHjeR4Hq.js";import"./CQSVRgMH.js";import"./vC38j2GR.js";import"./Cm6DYusB.js";import"./DM9lyHMg.js";import"./e6VNOm_X.js";import"./DQR6Jndg.js";import"./utwa6LXJ.js";import"./C3HtXTXt.js";import"./CBxfnFhK.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="1d5c79b7-0a8d-4b35-92cd-20a82e60c1a2",o._sentryDebugIdIdentifier="sentry-dbid-1d5c79b7-0a8d-4b35-92cd-20a82e60c1a2")}catch{}})();const P={key:0,class:"sidebar end-0 z-10 h-full overflow-y-auto border-s border-default bg-surface"},T={id:"main-page",class:"main-page flex h-full w-full min-w-0 flex-col justify-between overflow-y-auto"},b=h({name:"SearchLayout",__name:"search-layout",setup(o){const r=N(),d=E(),n=m(()=>r.isDesktopLayout),_=m(()=>K(d.searchType)),t=m(()=>_.value&&r.isFilterVisible&&n.value),a=p(!1),s=p(!1),c=p(null),{y}=B(c);return v(y,i=>{a.value=i>0,s.value=i>70}),g(()=>{c.value=document.getElementById("main-page")}),l(L,a),l(V,t),l($,s),(i,J)=>(u(),f("div",{class:D(["app h-dyn-screen min-h-dyn-screen grid grid-rows-[auto,1fr] bg-default",[t.value?"has-sidebar grid-cols-[1fr_var(--filter-sidebar-width)]":"grid-cols-1"]])},[e(F,{class:"header-el",kind:n.value?"search-desktop":"search-mobile","show-bottom-border":a.value||t.value},null,8,["kind","show-bottom-border"]),t.value?(u(),f("aside",P,[e(j,{class:"px-10 py-8"}),e(z,{class:"border-t border-default px-10 py-8"})])):w("",!0),S("div",T,[I(i.$slots,"default",{},void 0,!0),e(C,{mode:"content",class:"border-t border-default bg-default"})]),k(e(H,{"is-filter-sidebar-visible":t.value,"data-testid":"scroll-button"},null,8,["is-filter-sidebar-visible"]),[[x,s.value]])],2))}}),Kr=M(b,[["__scopeId","data-v-44023944"]]);b.__docgenInfo={name:"SearchLayout",exportName:"default",displayName:"search-layout",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/layouts/search-layout.vue"]};export{Kr as default};
