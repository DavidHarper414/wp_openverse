import{d as _,j as R,K as g,L as r,Q as c,W as p,e as l,r as f,u as s,a4 as C,a5 as v}from"./53SD24Bo.js";import{u as I,W as $,_ as k}from"./DJzaQtkP.js";import{a as w}from"./DukodVLT.js";import{V as h}from"./CxzE6WfI.js";import{V}from"./ByZ6H8Q9.js";import{_ as B}from"./DhTbjJlp.js";import{_ as D}from"./NPo5mu7y.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f57c28a6-9d9c-49dd-916b-e5aa6e0e5e97",e._sentryDebugIdIdentifier="sentry-dbid-f57c28a6-9d9c-49dd-916b-e5aa6e0e5e97")}catch{}})();const b=_({name:"VContentReportButton",components:{VButton:V,VIcon:h}}),N={class:"md:hidden"},F={class:"hidden md:inline"};function T(e,o,n,m,d,u){const a=h,i=V;return R(),g(i,{variant:"transparent-gray",size:"medium","has-icon-end":"",class:"label-bold"},{default:r(()=>[c("span",N,p(e.$t("mediaDetails.contentReport.short")),1),c("span",F,p(e.$t("mediaDetails.contentReport.long")),1),l(a,{name:"flag"})]),_:1})}const x=B(b,[["render",T]]);b.__docgenInfo={displayName:"VContentReportButton",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VContentReport/VContentReportButton.vue"]};const M={class:"heading-6",tabindex:"-1"},P=_({__name:"VContentReportModal",props:{media:{}},setup(e){const o=f(null),n=f(null),{status:m,updateStatus:d,title:u}=I(),a=()=>{var t;(t=n.value)==null||t.resetForm(),d($)},i=()=>{var t;a(),(t=o.value)==null||t.close()};return(t,S)=>(R(),g(D,{id:s(w),ref_key:"modalRef",ref:o,label:t.$t("mediaDetails.contentReport.long"),"hide-on-click-outside":!0,variant:"centered",onClose:a},{trigger:r(({a11yProps:y})=>[l(x,C(v(y)),null,16)]),title:r(()=>[c("h2",M,p(s(u)),1)]),default:r(()=>[l(k,{ref_key:"contentReportFormRef",ref:n,class:"p-7 pt-0 sm:p-9 sm:pt-0",media:t.media,status:s(m),"allow-cancel":!0,onUpdateStatus:s(d),onClose:i},null,8,["media","status","onUpdateStatus"])]),_:1},8,["id","label"]))}});P.__docgenInfo={exportName:"default",displayName:"VContentReportModal",description:"",tags:{},props:[{name:"media",description:"The media item to report. This can either be an audio track or an image.",required:!0,type:{name:"ReportableMedia"}}],sourceFiles:["/home/runner/work/openverse/openverse/frontend/src/components/VContentReport/VContentReportModal.vue"]};export{P as _};
