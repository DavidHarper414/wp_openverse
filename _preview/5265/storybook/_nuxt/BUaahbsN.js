import{I as u,A as r,b as s}from"./CAa63J2U.js";import{u as L}from"./CcNWDV0w.js";import{u as d}from"./VcnMPoS3.js";import"./CWoQmekT.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="caca3348-a445-4155-b191-597a7e8c5083",o._sentryDebugIdIdentifier="sentry-dbid-caca3348-a445-4155-b191-597a7e8c5083")}catch{}})();const C={[s]:{zero:"browsePage.allNoResults",count:"browsePage.allResultCount",countMore:"browsePage.allResultCountMore"},[u]:{zero:"browsePage.contentLink.image.zero",count:"browsePage.contentLink.image.count",countMore:"browsePage.contentLink.image.countMore"},[r]:{zero:"browsePage.contentLink.audio.zero",count:"browsePage.contentLink.audio.count",countMore:"browsePage.contentLink.audio.countMore"}},m={source:{[u]:{zero:"collection.resultCountLabel.source.image.zero",count:"collection.resultCountLabel.source.image.count",countMore:"collection.resultCountLabel.source.image.countMore"},[r]:{zero:"collection.resultCountLabel.source.audio.zero",count:"collection.resultCountLabel.source.audio.count",countMore:"collection.resultCountLabel.source.audio.countMore"}},creator:{[u]:{zero:"collection.resultCountLabel.creator.image.zero",count:"collection.resultCountLabel.creator.image.count",countMore:"collection.resultCountLabel.creator.image.countMore"},[r]:{zero:"collection.resultCountLabel.creator.audio.zero",count:"collection.resultCountLabel.creator.audio.count",countMore:"collection.resultCountLabel.creator.audio.countMore"}},tag:{[u]:{zero:"collection.resultCountLabel.tag.image.zero",count:"collection.resultCountLabel.tag.image.count",countMore:"collection.resultCountLabel.tag.image.countMore"},[r]:{zero:"collection.resultCountLabel.tag.audio.zero",count:"collection.resultCountLabel.tag.audio.count",countMore:"collection.resultCountLabel.tag.audio.countMore"}}};function i(o){return o===0?"zero":o>=240?"countMore":"count"}function p(){const{t:o}=d().$i18n,t=L(),l=()=>o("header.loading"),a=(e,c)=>{const n=i(e);return C[c][n]};return{getI18nCount:e=>o(a(e,s),{count:e,localeCount:t(e)}),getI18nContentLinkLabel:(e,c,n)=>o(a(e,n),{count:e,localeCount:t(e),query:c,mediaType:n}),getI18nCollectionResultCountLabel:(e,c,n,g=void 0)=>{const b=m[n][c][i(e)];return o(b,{count:e,localeCount:t(e),...g})},getLoading:l}}export{i as g,p as u};
