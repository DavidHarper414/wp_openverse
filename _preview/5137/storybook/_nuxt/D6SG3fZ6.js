import{a as Q}from"./HGGXJyB7.js";import{I as P}from"./CRWjC3CT.js";import{s as X}from"./BOX21o1p.js";import{u as Y}from"./BKKKF4W5.js";import{u as Z}from"./CB8vaXoq.js";import{u as ee,_ as te,a as ae,b as ie}from"./BFVoMttG.js";import{u as re,s as x}from"./CzZ80sy2.js";import{u as oe}from"./Wvs2qRi4.js";import{a as A}from"./BX450vXD.js";import{_ as se}from"./D0Inw-95.js";import{u as le}from"./HSkZLNjo.js";import{u as F}from"./DNZ0QEaN.js";import{d as V,D as p,E as ne,H as r,K as d,P as E,O as _,C as g,ah as me,w as ue,F as h,L as D,T as ce,R as c,I as v}from"./-WkxctKM.js";import{_ as pe}from"./COwFAUW2.js";import{a as de,b as fe}from"./Dtz3PEi1.js";import{_ as ge}from"./BcRBA15P.js";import{e as he}from"./CU869mj2.js";import{f as ve,v as _e}from"./Xs_VBmP5.js";import{h as we}from"./DTU7yJca.js";import{u as be}from"./DYbvz0cH.js";import{u as ye}from"./Cb-DsD-y.js";import{u as ke}from"./BnDRGrsR.js";import{_ as Ie}from"./DlAUqK2U.js";import"./D-XGaJuf.js";import"./D0ww02ZN.js";import"./R-F224MX.js";import"./C36Bf8YV.js";import"./8bxaQBfd.js";import"./CFMQYC2y.js";import"./BLIMiQvM.js";import"./CVtkxrq9.js";import"./Dt-H8hG_.js";import"./CVV9gpzL.js";import"./CuPsdpTl.js";import"./BXAcwQ7Y.js";import"./CTdiwjRx.js";import"./BSFIWEmo.js";import"./BOoHbPWX.js";import"./BPwGQkdi.js";import"./DcJiy9Gt.js";import"./DQnMOLSw.js";import"./C0aPY4k7.js";import"./CmiN-34A.js";import"./D7Nvdm8A.js";import"./Chtciqt4.js";import"./CGhfLDww.js";import"./DjzJpTMR.js";import"./Cg57jLUO.js";import"./-TaKdCZx.js";import"./B7pyvAJ7.js";import"./DJuamxAL.js";import"./WINk6Gqn.js";import"./C_4PSVgb.js";import"./RevM6cLn.js";import"./CP1e7QSb.js";import"./RxpDUvxm.js";import"./BSEdKPgk.js";import"./hXBgEdtc.js";import"../sb-preview/runtime.js";import"./03xrtDWI.js";import"./D_T5hC5T.js";import"./Bz7P8nyL.js";import"./CTON8dBl.js";import"./Cpj98o6Y.js";import"./fl49u9nx.js";import"./Box5JfbC.js";import"./Bnkvtx4f.js";import"./Ci7G4jyV.js";import"./DYaXnAuU.js";import"./BxOnwPF8.js";import"./DvUPudwq.js";import"./ksXjMkLb.js";import"./DSfRbglK.js";import"./CJk8lJ1H.js";import"./BWh21zg2.js";import"./BozJNCm9.js";import"./k5PUqNI5.js";import"./BS9R2VWD.js";import"./KPakBTOk.js";import"./zQROjZew.js";import"./CAQ_cRf3.js";import"./BL_Owc9v.js";import"./DC-AD4tD.js";import"./J4MDjhZE.js";const xe=(w="")=>new Promise((l,n)=>{typeof document>"u"&&n();const a=document.createElement("script");a.src=w,a.defer=!0,a.addEventListener("load",l),a.addEventListener("error",n),document.head.appendChild(a)}),Ee={class:"block aspect-[2/1]"},Se=["title","aria-label"],$e="https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js",Ce=V({__name:"VSketchFabViewer",props:{uid:{}},emits:["failure"],setup(w,{emit:l}){const n=w,a=l,{t:f}=le({useScope:"global"}),s=f("sketchfabIframeTitle",{sketchfab:"Sketchfab"}),i=p(),{$sentry:e}=F(),m=async()=>{if(await xe($e),typeof window.Sketchfab>"u"){e.captureMessage("Unable to find window.Sketchfab after loading");return}if(!i.value)return;new window.Sketchfab(i.value).init(n.uid,{error:u=>{e.captureException(u),a("failure")}})};return ne(()=>{m()}),(k,u)=>(r(),d("div",Ee,[E("iframe",{id:"sketchfab-iframe",ref_key:"node",ref:i,src:"",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",title:_(s),"aria-label":_(s),allow:"autoplay; fullscreen; vr",autoplay:!0,class:"h-full w-full"},null,8,Se)]))}}),Le=["id"],Me={class:"relative mb-4 grid grid-cols-1 grid-rows-1 justify-items-center border-b border-default px-6"},Re=["src","alt","width","height"],Te={key:2,class:"col-span-full row-span-full w-full lg:max-w-4xl lg:px-4"},He={class:"grid grid-cols-1 grid-rows-[auto,1fr] sm:grid-cols-[1fr,auto] sm:grid-rows-1 sm:gap-x-6"},Pe=V({name:"ImageDetailPage",__name:"index",async setup(w){var R,T,H;let l,n;oe();const a=re(),f=F(),s=ke(),i=g(()=>ve(s==null?void 0:s.params.id));(!i.value||!_e(i.value))&&x({statusCode:404,message:`Invalid image id: "${i.value}" on ${s==null?void 0:s.fullPath}.`,fatal:!0});const e=p((R=a.image)!=null&&R.id&&i.value&&a.image.id===i.value?a.image:null),m=g(()=>a.fetchState.fetchingError),k=g(()=>!f.isHydrating),u=p(k.value?(T=e.value)==null?void 0:T.thumbnail:(H=e.value)==null?void 0:H.url),S=p(!f.isHydrating),$=g(()=>b.value?!1:S.value),{sendCustomEvent:B}=Y(),U=t=>{B("RIGHT_CLICK_IMAGE",{id:t})},{reveal:N,isHidden:G}=Z(e.value),{pageTitle:j,detailPageMeta:K}=ee(e);ye(()=>({...K,title:j.value}));const C=p(!0),L=p(!1),b=g(()=>{var t;return((t=e.value)==null?void 0:t.source)!=="sketchfab"||L.value?null:e.value.url.split("https://media.sketchfab.com/models/")[1].split("/")[0]}),O=t=>{var o;t.target instanceof HTMLImageElement&&(u.value=t.target.src===((o=e.value)==null?void 0:o.url)?e.value.thumbnail:he)},z=t=>{var o;if(!(!(t.target instanceof HTMLImageElement)||!e.value)&&(S.value=!1,C.value)){const y={width:t.target.naturalWidth,height:t.target.naturalHeight};((o=a.mediaItem)==null?void 0:o.frontendMediaType)===P&&(a.mediaItem.width=y.width,a.mediaItem.height=y.height),e.value.filetype||Q.head(e.value.url).then(q=>{const J=q.headers["content-type"];a.mediaItem&&(a.mediaItem.filetype=J)}).catch(()=>{}),u.value=e.value.url,C.value=!1}},W=async()=>{if(f.isHydrating)return e.value;const t=await a.fetch(P,i.value);if(t)return e.value=t,u.value=t.thumbnail,t;throw new Error(`Could not fetch image with id ${i.value}`)},{error:I}=([l,n]=me(async()=>be("single-image-result",async()=>await W(),{lazy:!0,server:!1})),l=await l,n(),l),M=t=>{["Image not found","Image ID not found"].includes(t.message)&&x({statusCode:404,message:"Image ID not found",fatal:!0}),m.value&&!we(m.value)&&x({...m.value??{},fatal:!0})};return I.value&&M(I.value),ue(I,t=>{t&&M(t)}),(t,o)=>(r(),d("main",{id:_(X),tabindex:"-1",class:"relative flex-grow"},[m.value?(r(),h(ge,{key:0,"fetching-error":m.value,class:"px-6 py-10 lg:px-10"},null,8,["fetching-error"])):e.value?(r(),d(D,{key:1},[_(G)?(r(),h(pe,ce({key:0},e.value,{onReveal:_(N)}),null,16,["onReveal"])):(r(),d(D,{key:1},[c(te,{media:e.value},null,8,["media"]),E("figure",Me,[$.value?(r(),h(A,{key:0,class:"col-span-full row-span-full h-[500px] w-[500px] self-center"})):v("",!0),b.value?v("",!0):(r(),d("img",{key:1,id:"main-image",src:u.value,alt:e.value.title,class:"col-span-full row-span-full h-full max-h-[500px] w-full rounded-se-sm rounded-ss-sm object-contain",width:e.value.width??0,height:e.value.height??0,onLoad:z,onError:O,onContextmenu:o[0]||(o[0]=y=>U(e.value.id))},null,40,Re)),b.value?(r(),d("div",Te,[c(Ce,{uid:b.value,class:"rounded-se-sm rounded-ss-sm",onFailure:o[1]||(o[1]=y=>L.value=!0)},null,8,["uid"])])):v("",!0)]),E("section",He,[c(de,{media:e.value,class:"min-w-0 sm:col-start-1"},null,8,["media"]),c(fe,{media:e.value,"media-type":"image",class:"row-start-1 mb-4 !w-full flex-initial sm:col-start-2 sm:mb-0 sm:mt-1 sm:!w-auto"},null,8,["media"])]),c(se,{media:e.value},null,8,["media"]),c(ae,{media:e.value},null,8,["media"]),e.value?(r(),h(ie,{key:0,"media-type":"image","related-to":e.value.id},null,8,["related-to"])):v("",!0)],64))],64)):$.value?(r(),h(A,{key:2,class:"col-span-full row-span-full mx-auto h-[500px] w-[500px]"})):v("",!0)],8,Le))}}),ca=Ie(Pe,[["__scopeId","data-v-02b61222"]]);export{ca as default};
