import{d as n}from"./Z8zkSHZ1.js";import{A as s,I as i,a as c,b as d}from"./CAa63J2U.js";import{c as u}from"./Cyc9srVp.js";import{u as h}from"./VcnMPoS3.js";import"./CWoQmekT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="08b70155-2dc7-42e4-8de3-abf052a3a214",e._sentryDebugIdIdentifier="sentry-dbid-08b70155-2dc7-42e4-8de3-abf052a3a214")}catch{}})();const f=e=>!e.length||!Array.isArray(e)?[]:e.sort((t,r)=>{const a=t.source_name.toUpperCase(),o=r.source_name.toUpperCase();return a.localeCompare(o)}),y=n("provider",{state:()=>({providers:{[s]:[],[i]:[]},fetchState:{isFetching:!1,fetchingError:null},sourceNames:{[s]:[],[i]:[]}}),actions:{_endFetching(e){this.fetchState.fetchingError=e||null,e&&(this.fetchState.isFinished=!0)},_startFetching(){this.fetchState.isFetching=!0},_updateFetchState(e,t){e==="start"?this._startFetching():this._endFetching(t)},_getProvider(e,t){return this.providers[t].find(r=>r.source_name===e)},getProviderName(e,t){var r;return((r=this._getProvider(e,t))==null?void 0:r.display_name)||u(e)},getSourceUrl(e,t){var r;return(r=this._getProvider(e,t))==null?void 0:r.source_url},setMediaTypeProviders(e,t){t.length&&(this.providers[e]=f(t),this.sourceNames[e]=t.map(r=>r.source_name))},async fetchProviders(){this._updateFetchState("start");try{const e=await $fetch("/api/sources/");if(!e)throw new Error("No sources data returned from the API");for(const t of c)this.setMediaTypeProviders(t,e[t]);this._updateFetchState("end")}catch(e){const{$processFetchingError:t}=h(),r=t(e,d,"provider");this._updateFetchState("end",r)}},isSourceNameValid(e,t){return this.sourceNames[e].includes(t)}}});export{y as u};
