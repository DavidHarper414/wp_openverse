import{g as m}from"./Box5JfbC.js";import{u as l}from"./HSkZLNjo.js";import{d as p,C as d,H as g,K as u,P as o}from"./-WkxctKM.js";import{_}from"./DlAUqK2U.js";import"./Bnkvtx4f.js";import"./Ci7G4jyV.js";import"./D0ww02ZN.js";import"./DYaXnAuU.js";import"./BSEdKPgk.js";const f=[{error:"NO_RESULT",image:{id:"depressedMusician",file:"depressed_musician",title:"Depressed musician vintage drawing",foreign_landing_url:"https://www.rawpixel.com/image/573060/depressed-musician-vintage-drawing",creator:"The British Library",license:"cc0",license_version:"1.0",license_url:"https://creativecommons.org/publicdomain/zero/1.0/",frontendMediaType:"image",attribution:'"Depressed musician vintage drawing" by The British Library is marked with CC0 1.0. To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse.'}},{error:"SERVER_TIMEOUT",image:{id:"waitingForABite",file:"waiting_for_a_bite",title:"Waiting for a Bite, from Harper's Weekly, August 22, 1874, p. 693",foreign_landing_url:"https://collection.cooperhewitt.org/view/objects/asitem/id/105053",creator:"Edward Lagarde, American, 19th century",license:"cc0",license_version:"1.0",license_url:"https://creativecommons.org/publicdomain/zero/1.0/",frontendMediaType:"image",attribution:'"Depressed musician vintage drawing" by The British Library is marked with CC0 1.0. To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/?ref=openverse.'}}],v={errors:f},h={class:"error-image"},b=["src","alt","title"],w=["innerHTML"],T=p({__name:"VErrorImage",props:{errorCode:{}},setup(s){const a=s,n=l({useScope:"global"}),c=Object.fromEntries(v.errors.map(i=>{const e=i.image,t={...e,originalTitle:e.title,src:`/error_images/${e.file}.jpg`,alt:`errorImages.${e.id}`,license:e.license,license_version:e.license_version,frontendMediaType:"image"};return t.attribution=m(t,n),[i.error,t]})),r=d(()=>c[a.errorCode]);return(i,e)=>(g(),u("figure",h,[o("img",{src:r.value.src,alt:i.$t(r.value.alt),title:i.$t(r.value.alt)},null,8,b),o("figcaption",{class:"attribution",innerHTML:r.value.attribution},null,8,w)]))}}),A=_(T,[["__scopeId","data-v-2d498c61"]]);export{A as default};
