import{u as p}from"./R-F224MX.js";import{a as h}from"./DTU7yJca.js";import{M as n,i as l,e as d,I as q}from"./CRWjC3CT.js";import{C as i}from"./-WkxctKM.js";const y=e=>({q:e.q??""}),f=[{name:"Centre For Ageing Better",image:e=>({url:"https://ageingbetter.resourcespace.com/pages/search.php",queryParams:{search:e.q}})},{name:"EDU images",image:e=>({url:"https://images.all4ed.org",queryParams:{s:e.q}})},{name:"Google Images",image:e=>({url:"https://www.google.com/search",queryParams:{q:e.q,udm:"2",tbs:"sur:cl"}})},{name:"Images of Empowerment",image:e=>({url:"https://www.imagesofempowerment.org/",queryParams:{s:e.q}})},{name:"Open Clip Art Library",image:e=>({url:"http://www.openclipart.org/search/",queryParams:{query:e.q}})},{name:"Nappy",image:e=>({url:"https://www.nappy.co/",queryParams:{s:e.q}})},{name:"The Greats",image:e=>({url:"https://www.thegreats.co/artworks/",queryParams:{theme:"0",search:e.q}})},{name:"ccMixter",audio:e=>({url:"http://dig.ccmixter.org/search",queryParams:{lic:"open",searchp:e.q}})},{name:"SoundCloud",audio:e=>({url:"https://soundcloud.com/search/sounds",queryParams:{q:e.q,"filter.license":"to_share"}})},{name:"Europeana",audio:e=>({url:"https://www.europeana.eu/en/search",queryParams:{page:"1",qf:'TYPE:"SOUND"',query:`${e.q} AND RIGHTS:*creative*`}}),video(e){return{url:"https://www.europeana.eu/en/search",queryParams:{page:"1",qf:'TYPE:"VIDEO"',query:`${e.q} AND RIGHTS:*creative*`}}}},{name:"Vimeo",video:e=>({url:"https://vimeo.com/search",queryParams:{license:"by",q:e.q}})},{name:"Wikimedia Commons",video:e=>({url:"https://commons.wikimedia.org/w/index.php",queryParams:{search:`${e.q}`,title:"Special:MediaSearch",type:"video"}})},{name:"YouTube",video:e=>({url:"https://www.youtube.com/results",queryParams:{search_query:e.q,sp:"EgIwAQ%3D%3D"}})},{name:"Sketchfab",[n](e){const r=["322a749bcfa841b29dff1e8a1bb74b0b","b9ddc40b93e34cdca1fc152f39b9f375","72360ff1740d419791934298b8b6d270","bbfe3f7dbcdd4122b966b85b9786a989","2628dbe5140a4e9592126c8df566c0b7","34b725081a6a4184957efaec2cb84ed3","7c23a1ba438d4306920229c12afcb5f9"];return{url:"https://sketchfab.com/search",queryParams:{q:e.q,licenses:r}}}},{name:"Thingiverse",[n](e){return{url:"https://www.thingiverse.com/search",queryParams:{type:"things",q:e.q}}}},{name:"Free Music Archive",audio:e=>({url:"https://freemusicarchive.org/search",queryParams:{quicksearch:e.q}})}],g=e=>f.filter(r=>r[e]),w=(e,r)=>g(e).map(s=>{const o=s[e];if(!o)throw new Error(`Invalid media type ${e} for additional source ${s.name}`);const a=o(y(r)),t=new URL(a.url);for(const[u,c]of Object.entries(a.queryParams))if(Array.isArray(c))for(const m of c)t.searchParams.append(u,m);else t.searchParams.set(u,c);return{url:t.href,name:s.name}}),A=()=>{const e=p(),r=h(),s=i(()=>{const a=r.searchType;return l(a)||e.isOn("additional_search_types")&&d(a)?a:q});return{externalSources:i(()=>{const a=r.apiSearchQueryParams,t=s.value;return w(t,a)}),externalSourcesType:s}};export{A as u};
