import{u as o}from"./CuPsdpTl.js";import{d as r,D as i,w as t,H as l,K as c,P as u,Q as v}from"./-WkxctKM.js";const m=["viewBox"],f=["href"],_=r({__name:"VSvg",props:{name:{},viewBox:{default:"0 0 24 24"}},setup(n){const e=n;if(!e.viewBox.split(" ").every(a=>!isNaN(parseInt(a))))throw new Error(`Invalid viewBox "${e.viewBox}" for icon "${e.name}".`);const s=i({url:"",class:""});return s.value=o(`images/${e.name}`),t(()=>e.name,a=>{s.value=o(a)}),(a,p)=>(l(),c("svg",{viewBox:a.viewBox,focusable:"false",class:v(["v-icon flex-none",s.value.class]),"aria-hidden":"true"},[u("use",{href:s.value.url},null,8,f)],10,m))}});export{_};
