import"./CWoQmekT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6afa686a-e0f5-4b7c-8819-459bc5338cec",e._sentryDebugIdIdentifier="sentry-dbid-6afa686a-e0f5-4b7c-8819-459bc5338cec")}catch{}})();const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function c(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}let a;const s=new Uint8Array(16);function r(){if(!a){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");a=crypto.getRandomValues.bind(crypto)}return a(s)}const u=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),d={randomUUID:u};function l(e,n,i){if(d.randomUUID&&!n&&!e)return d.randomUUID();e=e||{};const o=e.random||(e.rng||r)();return o[6]=o[6]&15|64,o[8]=o[8]&63|128,c(o)}const p=(e={})=>Object.assign({id:l(),frontendMediaType:"audio",title:"La vie des bêtes",foreign_landing_url:"https://www.jamendo.com/track/11188",creator:"AS-POTIRONT!",creator_url:"https://www.jamendo.com/artist/264/as-potiront",url:"https://mp3d.jamendo.com/download/track/11188/mp32",license:"by-nc-sa",license_version:"2.5",license_url:"https://creativecommons.org/licenses/by-nc-sa/2.5/",provider:"jamendo",providerName:"Jamendo",source:"jamendo",sourceName:"Jamendo",filetype:"mp32",tags:[{name:"vocal"},{name:"male"},{name:"speed_medium"},{name:"party"},{name:"cuivres"}],duration:27e4,alt_files:null,attribution:'"La vie des bêtes" by AS-POTIRONT! is licensed under CC BY-NC-SA 2.5. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/2.5/.',thumbnail:"https://localhost:8000/v1/audio/e19345b8-6937-49f7-a0fd-03bf057efc28/thumb",waveform:"https://localhost:8000/v1/audio/e19345b8-6937-49f7-a0fd-03bf057efc28/waveform",genres:["pop","rock","manouche"],detail_url:"http://localhost:8000/v1/audio/e19345b8-6937-49f7-a0fd-03bf057efc28",related_url:"http://localhost:8000/v1/audio/e19345b8-6937-49f7-a0fd-03bf057efc28/recommendations",peaks:[],unstable__sensitivity:[]},e);export{p as g};
