import{r as m,j as i,i as ae,a as le,p as At,m as Qs,t as Vs,f as ln,c as me,b as Ur,d as Br,e as L,g as Gs,U as Ys,h as Ws,k as Xs,S as Ln,l as Js}from"./api-Clt9UHcG.js";import{S as de,P as cn,a as dn,b as Nt,c as Zs,d as ei,e as ti,f as ni,g as ri,h as si,i as ii,W as oi,j as ai,k as li,l as ci,m as di,n as ui,o as fi,p as hi,q as pi,r as mi,s as gi,t as yi,u as De,T as qr,v as $e}from"./config-wRKgJ-WU.js";import{l as b}from"./logger-C6gXeMnu.js";import{Y as un,i as bi,K as ke,D as Hr}from"./dmBridge-DfkPn0Zq.js";import{r as Dn,a as vi,b as xi,f as $n,L as fn,c as wi,w as Si,d as ki,e as Fn,g as zn,h as Ei,i as ji,j as Ci,k as Ti,l as Ai,m as Ni,n as Oi,o as Mi}from"./spotify-8CrGHF_Z.js";import{M as z,i as Ri,a as Ii,b as Un}from"./ytRemote-BcbPVE8e.js";var Ie=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},_i=class extends Ie{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<"u"&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(t=>{typeof t=="boolean"?this.setFocused(t):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},hn=new _i,Pi={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},Li=class{#e=Pi;#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}},Z=new Li;function Di(e){setTimeout(e,0)}var $i=typeof window>"u"||"Deno"in globalThis;function _(){}function Fi(e,t){return typeof e=="function"?e(t):e}function Ot(e){return typeof e=="number"&&e>=0&&e!==1/0}function Kr(e,t){return Math.max(e+(t||0)-Date.now(),0)}function G(e,t){return typeof e=="function"?e(t):e}function P(e,t){return typeof e=="function"?e(t):e}function Bn(e,t){const{type:n="all",exact:r,fetchStatus:s,predicate:o,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==pn(a,t.options))return!1}else if(!je(t.queryKey,a))return!1}if(n!=="all"){const d=t.isActive();if(n==="active"&&!d||n==="inactive"&&d)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||s&&s!==t.state.fetchStatus||o&&!o(t))}function qn(e,t){const{exact:n,status:r,predicate:s,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(Ee(t.options.mutationKey)!==Ee(o))return!1}else if(!je(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||s&&!s(t))}function pn(e,t){return(t?.queryKeyHashFn||Ee)(e)}function Ee(e){return JSON.stringify(e,(t,n)=>Rt(n)?Object.keys(n).sort().reduce((r,s)=>(r[s]=n[s],r),{}):n)}function je(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>je(e[n],t[n])):!1}var zi=Object.prototype.hasOwnProperty;function Qr(e,t,n=0){if(e===t)return e;if(n>500)return t;const r=Hn(e)&&Hn(t);if(!r&&!(Rt(e)&&Rt(t)))return t;const o=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),l=a.length,d=r?new Array(l):{};let c=0;for(let u=0;u<l;u++){const v=r?u:a[u],h=e[v],g=t[v];if(h===g){d[v]=h,(r?u<o:zi.call(e,v))&&c++;continue}if(h===null||g===null||typeof h!="object"||typeof g!="object"){d[v]=g;continue}const p=Qr(h,g,n+1);d[v]=p,p===h&&c++}return o===l&&c===o?e:d}function Mt(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Hn(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Rt(e){if(!Kn(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Kn(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Kn(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ui(e){return new Promise(t=>{Z.setTimeout(t,e)})}function It(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Qr(e,t):t}function Bi(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function qi(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var mn=Symbol();function Vr(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===mn?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Gr(e,t){return typeof e=="function"?e(...t):!!e}function Hi(e,t,n){let r=!1,s;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(s??=t(),r||(r=!0,s.aborted?n():s.addEventListener("abort",n,{once:!0})),s)}),e}var Ce=(()=>{let e=()=>$i;return{isServer(){return e()},setIsServer(t){e=t}}})();function _t(){let e,t;const n=new Promise((s,o)=>{e=s,t=o});n.status="pending",n.catch(()=>{});function r(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{r({status:"fulfilled",value:s}),e(s)},n.reject=s=>{r({status:"rejected",reason:s}),t(s)},n}var Ki=Di;function Qi(){let e=[],t=0,n=l=>{l()},r=l=>{l()},s=Ki;const o=l=>{t?e.push(l):s(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&s(()=>{r(()=>{l.forEach(d=>{n(d)})})})};return{batch:l=>{let d;t++;try{d=l()}finally{t--,t||a()}return d},batchCalls:l=>(...d)=>{o(()=>{l(...d)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{s=l}}}var O=Qi(),Vi=class extends Ie{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<"u"&&window.addEventListener){const t=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(n=>{n(e)}))}isOnline(){return this.#e}},Ve=new Vi;function Gi(e){return Math.min(1e3*2**e,3e4)}function Yr(e){return(e??"online")==="online"?Ve.isOnline():!0}var Pt=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Wr(e){let t=!1,n=0,r;const s=_t(),o=()=>s.status!=="pending",a=f=>{if(!o()){const w=new Pt(f);h(w),e.onCancel?.(w)}},l=()=>{t=!0},d=()=>{t=!1},c=()=>hn.isFocused()&&(e.networkMode==="always"||Ve.isOnline())&&e.canRun(),u=()=>Yr(e.networkMode)&&e.canRun(),v=f=>{o()||(r?.(),s.resolve(f))},h=f=>{o()||(r?.(),s.reject(f))},g=()=>new Promise(f=>{r=w=>{(o()||c())&&f(w)},e.onPause?.()}).then(()=>{r=void 0,o()||e.onContinue?.()}),p=()=>{if(o())return;let f;const w=n===0?e.initialPromise:void 0;try{f=w??e.fn()}catch(k){f=Promise.reject(k)}Promise.resolve(f).then(v).catch(k=>{if(o())return;const E=e.retry??(Ce.isServer()?0:3),I=e.retryDelay??Gi,D=typeof I=="function"?I(n,k):I,$=E===!0||typeof E=="number"&&n<E||typeof E=="function"&&E(n,k);if(t||!$){h(k);return}n++,e.onFail?.(n,k),Ui(D).then(()=>c()?void 0:g()).then(()=>{t?h(k):p()})})};return{promise:s,status:()=>s.status,cancel:a,continue:()=>(r?.(),s),cancelRetry:l,continueRetry:d,canStart:u,start:()=>(u()?p():g().then(p),s)}}var Xr=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ot(this.gcTime)&&(this.#e=Z.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ce.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(Z.clearTimeout(this.#e),this.#e=void 0)}};function Yi(e){return{onFetch:(t,n)=>{const r=t.options,s=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],a=t.state.data?.pageParams||[];let l={pages:[],pageParams:[]},d=0;const c=async()=>{let u=!1;const v=p=>{Hi(p,()=>t.signal,()=>u=!0)},h=Vr(t.options,t.fetchOptions),g=async(p,f,w)=>{if(u)return Promise.reject(t.signal.reason);if(f==null&&p.pages.length)return Promise.resolve(p);const E=(()=>{const q={client:t.client,queryKey:t.queryKey,pageParam:f,direction:w?"backward":"forward",meta:t.options.meta};return v(q),q})(),I=await h(E),{maxPages:D}=t.options,$=w?qi:Bi;return{pages:$(p.pages,I,D),pageParams:$(p.pageParams,f,D)}};if(s&&o.length){const p=s==="backward",f=p?Wi:Qn,w={pages:o,pageParams:a},k=f(r,w);l=await g(w,k,p)}else{const p=e??o.length;do{const f=d===0?a[0]??r.initialPageParam:Qn(r,l);if(d>0&&f==null)break;l=await g(l,f),d++}while(d<p)}return l};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=c}}}function Qn(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Wi(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var Xi=class extends Xr{#e;#t;#n;#r;#i;#s;#a;#o;constructor(e){super(),this.#o=!1,this.#a=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#i=e.client,this.#r=this.#i.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=Gn(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#s?.promise}setOptions(e){if(this.options={...this.#a,...e},e?._type&&(this.#e=e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const t=Gn(this.options);t.data!==void 0&&(this.setState(Vn(t.data,t.dataUpdatedAt)),this.#t=t)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#r.remove(this)}setData(e,t){const n=It(this.state.data,e,this.options);return this.#l({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#l({type:"setState",state:e})}cancel(e){const t=this.#s?.promise;return this.#s?.cancel(e),t?t.then(_).catch(_):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>P(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===mn||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>G(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!Kr(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(t=>t.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#s?.continue()}onOnline(){this.observers.find(t=>t.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#s?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#s&&(this.#o||this.#d()?this.#s.cancel({revert:!0}):this.#s.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}#d(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"}invalidate(){this.state.isInvalidated||this.#l({type:"invalidate"})}async fetch(e,t){if(this.state.fetchStatus!=="idle"&&this.#s?.status()!=="rejected"){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#s)return this.#s.continueRetry(),this.#s.promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(c=>c.options.queryFn);d&&this.setOptions(d.options)}const n=new AbortController,r=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(this.#o=!0,n.signal)})},s=()=>{const d=Vr(this.options,t),u=(()=>{const v={client:this.#i,queryKey:this.queryKey,meta:this.meta};return r(v),v})();return this.#o=!1,this.options.persister?this.options.persister(d,u,this):d(u)},a=(()=>{const d={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:s};return r(d),d})();(this.#e==="infinite"?Yi(this.options.pages):this.options.behavior)?.onFetch(a,this),this.#n=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:"fetch",meta:a.fetchOptions?.meta}),this.#s=Wr({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:d=>{d instanceof Pt&&d.revert&&this.setState({...this.#n,fetchStatus:"idle"}),n.abort()},onFail:(d,c)=>{this.#l({type:"failed",failureCount:d,error:c})},onPause:()=>{this.#l({type:"pause"})},onContinue:()=>{this.#l({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0});try{const d=await this.#s.start();if(d===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(d),this.#r.config.onSuccess?.(d,this),this.#r.config.onSettled?.(d,this.state.error,this),d}catch(d){if(d instanceof Pt){if(d.silent)return this.#s.promise;if(d.revert){if(this.state.data===void 0)throw d;return this.state.data}}throw this.#l({type:"error",error:d}),this.#r.config.onError?.(d,this),this.#r.config.onSettled?.(this.state.data,d,this),d}finally{this.scheduleGc()}}#l(e){const t=n=>{switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Jr(n.data,this.options),fetchMeta:e.meta??null};case"success":const r={...n,...Vn(e.data,e.dataUpdatedAt),dataUpdateCount:n.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#n=e.manual?r:void 0,r;case"error":const s=e.error;return{...n,error:s,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=t(this.state),O.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}};function Jr(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Yr(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Vn(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Gn(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ji=class extends Ie{constructor(e,t){super(),this.options=t,this.#e=e,this.#o=null,this.#a=_t(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#n=void 0;#r=void 0;#i;#s;#a;#o;#d;#l;#p;#u;#f;#c;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),Yn(this.#t,this.options)?this.#h():this.updateResult(),this.#v())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Lt(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Lt(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#x(),this.#w(),this.#t.removeObserver(this)}setOptions(e){const t=this.options,n=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof P(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#S(),this.#t.setOptions(this.options),t._defaulted&&!Mt(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const r=this.hasListeners();r&&Wn(this.#t,n,this.options,t)&&this.#h(),this.updateResult(),r&&(this.#t!==n||P(this.options.enabled,this.#t)!==P(t.enabled,this.#t)||G(this.options.staleTime,this.#t)!==G(t.staleTime,this.#t))&&this.#g();const s=this.#y();r&&(this.#t!==n||P(this.options.enabled,this.#t)!==P(t.enabled,this.#t)||s!==this.#c)&&this.#b(s)}getOptimisticResult(e){const t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return eo(this,n)&&(this.#r=n,this.#s=this.options,this.#i=this.#t.state),n}getCurrentResult(){return this.#r}trackResult(e,t){return new Proxy(e,{get:(n,r)=>(this.trackProp(r),t?.(r),r==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#a.status==="pending"&&this.#a.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(n,r))})}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#h(e){this.#S();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(_)),t}#g(){this.#x();const e=G(this.options.staleTime,this.#t);if(Ce.isServer()||this.#r.isStale||!Ot(e))return;const n=Kr(this.#r.dataUpdatedAt,e)+1;this.#u=Z.setTimeout(()=>{this.#r.isStale||this.updateResult()},n)}#y(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#b(e){this.#w(),this.#c=e,!(Ce.isServer()||P(this.options.enabled,this.#t)===!1||!Ot(this.#c)||this.#c===0)&&(this.#f=Z.setInterval(()=>{(this.options.refetchIntervalInBackground||hn.isFocused())&&this.#h()},this.#c))}#v(){this.#g(),this.#b(this.#y())}#x(){this.#u!==void 0&&(Z.clearTimeout(this.#u),this.#u=void 0)}#w(){this.#f!==void 0&&(Z.clearInterval(this.#f),this.#f=void 0)}createResult(e,t){const n=this.#t,r=this.options,s=this.#r,o=this.#i,a=this.#s,d=e!==n?e.state:this.#n,{state:c}=e;let u={...c},v=!1,h;if(t._optimisticResults){const S=this.hasListeners(),C=!S&&Yn(e,t),A=S&&Wn(e,n,t,r);(C||A)&&(u={...u,...Jr(c.data,e.options)}),t._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:g,errorUpdatedAt:p,status:f}=u;h=u.data;let w=!1;if(t.placeholderData!==void 0&&h===void 0&&f==="pending"){let S;s?.isPlaceholderData&&t.placeholderData===a?.placeholderData?(S=s.data,w=!0):S=typeof t.placeholderData=="function"?t.placeholderData(this.#p?.state.data,this.#p):t.placeholderData,S!==void 0&&(f="success",h=It(s?.data,S,t),v=!0)}if(t.select&&h!==void 0&&!w)if(s&&h===o?.data&&t.select===this.#d)h=this.#l;else try{this.#d=t.select,h=t.select(h),h=It(s?.data,h,t),this.#l=h,this.#o=null}catch(S){this.#o=S}this.#o&&(g=this.#o,h=this.#l,p=Date.now(),f="error");const k=u.fetchStatus==="fetching",E=f==="pending",I=f==="error",D=E&&k,$=h!==void 0,y={status:f,fetchStatus:u.fetchStatus,isPending:E,isSuccess:f==="success",isError:I,isInitialLoading:D,isLoading:D,data:h,dataUpdatedAt:u.dataUpdatedAt,error:g,errorUpdatedAt:p,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:u.dataUpdateCount>d.dataUpdateCount||u.errorUpdateCount>d.errorUpdateCount,isFetching:k,isRefetching:k&&!E,isLoadingError:I&&!$,isPaused:u.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:I&&$,isStale:gn(e,t),refetch:this.refetch,promise:this.#a,isEnabled:P(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){const S=y.data!==void 0,C=y.status==="error"&&!S,A=Le=>{C?Le.reject(y.error):S&&Le.resolve(y.data)},ye=()=>{const Le=this.#a=y.promise=_t();A(Le)},Pe=this.#a;switch(Pe.status){case"pending":e.queryHash===n.queryHash&&A(Pe);break;case"fulfilled":(C||y.data!==Pe.value)&&ye();break;case"rejected":(!C||y.error!==Pe.reason)&&ye();break}}return y}updateResult(){const e=this.#r,t=this.createResult(this.#t,this.options);if(this.#i=this.#t.state,this.#s=this.options,this.#i.data!==void 0&&(this.#p=this.#t),Mt(t,e))return;this.#r=t;const n=()=>{if(!e)return!0;const{notifyOnChangeProps:r}=this.options,s=typeof r=="function"?r():r;if(s==="all"||!s&&!this.#m.size)return!0;const o=new Set(s??this.#m);return this.options.throwOnError&&o.add("error"),Object.keys(this.#r).some(a=>{const l=a;return this.#r[l]!==e[l]&&o.has(l)})};this.#k({listeners:n()})}#S(){const e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;const t=this.#t;this.#t=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#v()}#k(e){O.batch(()=>{e.listeners&&this.listeners.forEach(t=>{t(this.#r)}),this.#e.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function Zi(e,t){return P(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&P(t.retryOnMount,e)===!1)}function Yn(e,t){return Zi(e,t)||e.state.data!==void 0&&Lt(e,t,t.refetchOnMount)}function Lt(e,t,n){if(P(t.enabled,e)!==!1&&G(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&gn(e,t)}return!1}function Wn(e,t,n,r){return(e!==t||P(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&gn(e,n)}function gn(e,t){return P(t.enabled,e)!==!1&&e.isStaleByTime(G(t.staleTime,e))}function eo(e,t){return!Mt(e.getCurrentResult(),t)}var to=class extends Xr{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||no(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#i({type:"continue"})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=Wr({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(new Error("No mutationFn found")),onFail:(o,a)=>{this.#i({type:"failed",failureCount:o,error:a})},onPause:()=>{this.#i({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});const r=this.state.status==="pending",s=!this.#r.canStart();try{if(r)t();else{this.#i({type:"pending",variables:e,isPaused:s}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);const a=await this.options.onMutate?.(e,n);a!==this.state.context&&this.#i({type:"pending",context:a,variables:e,isPaused:s})}const o=await this.#r.start();return await this.#n.config.onSuccess?.(o,e,this.state.context,this,n),await this.options.onSuccess?.(o,e,this.state.context,n),await this.#n.config.onSettled?.(o,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(o,null,e,this.state.context,n),this.#i({type:"success",data:o}),o}catch(o){try{await this.#n.config.onError?.(o,e,this.state.context,this,n)}catch(a){Promise.reject(a)}try{await this.options.onError?.(o,e,this.state.context,n)}catch(a){Promise.reject(a)}try{await this.#n.config.onSettled?.(void 0,o,this.state.variables,this.state.context,this,n)}catch(a){Promise.reject(a)}try{await this.options.onSettled?.(void 0,o,e,this.state.context,n)}catch(a){Promise.reject(a)}throw this.#i({type:"error",error:o}),o}finally{this.#n.runNext(this)}}#i(e){const t=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=t(this.state),O.batch(()=>{this.#t.forEach(n=>{n.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:"updated",action:e})})}};function no(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ro=class extends Ie{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){const r=new to({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);const t=Fe(e);if(typeof t=="string"){const n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#e.delete(e)){const t=Fe(e);if(typeof t=="string"){const n=this.#t.get(t);if(n)if(n.length>1){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Fe(e);if(typeof t=="string"){const r=this.#t.get(t)?.find(s=>s.state.status==="pending");return!r||r===e}else return!0}runNext(e){const t=Fe(e);return typeof t=="string"?this.#t.get(t)?.find(r=>r!==e&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){O.batch(()=>{this.#e.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){const t={exact:!0,...e};return this.getAll().find(n=>qn(t,n))}findAll(e={}){return this.getAll().filter(t=>qn(e,t))}notify(e){O.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return O.batch(()=>Promise.all(e.map(t=>t.continue().catch(_))))}};function Fe(e){return e.options.scope?.id}var so=class extends Ie{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){const r=t.queryKey,s=t.queryHash??pn(r,t);let o=this.get(s);return o||(o=new Xi({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){O.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(n=>Bn(t,n))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(n=>Bn(e,n)):t}notify(e){O.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){O.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){O.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},io=class{#e;#t;#n;#r;#i;#s;#a;#o;constructor(e={}){this.#e=e.queryCache||new so,this.#t=e.mutationCache||new ro,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#s=0}mount(){this.#s++,this.#s===1&&(this.#a=hn.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#o=Ve.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#s--,this.#s===0&&(this.#a?.(),this.#a=void 0,this.#o?.(),this.#o=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#t.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(G(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=this.#e.get(r.queryHash)?.state.data,a=Fi(t,o);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return O.batch(()=>this.#e.findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){const t=this.#e;O.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=this.#e;return O.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=O.batch(()=>this.#e.findAll(e).map(s=>s.cancel(n)));return Promise.all(r).then(_).catch(_)}invalidateQueries(e,t={}){return O.batch(()=>(this.#e.findAll(e).forEach(n=>{n.invalidate()}),e?.refetchType==="none"?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=O.batch(()=>this.#e.findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let o=s.fetch(void 0,n);return n.throwOnError||(o=o.catch(_)),s.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(_)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=this.#e.build(this,t);return n.isStaleByTime(G(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(_).catch(_)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(_).catch(_)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return Ve.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(Ee(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#r.values()],n={};return t.forEach(r=>{je(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(Ee(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#i.values()],n={};return t.forEach(r=>{je(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=pn(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===mn&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Zr=m.createContext(void 0),oo=e=>{const t=m.useContext(Zr);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},es=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),i.jsx(Zr.Provider,{value:e,children:t})),ts=m.createContext(!1),ao=()=>m.useContext(ts);ts.Provider;function lo(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var co=m.createContext(lo()),uo=()=>m.useContext(co),fo=(e,t,n)=>{const r=n?.state.error&&typeof e.throwOnError=="function"?Gr(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},ho=e=>{m.useEffect(()=>{e.clearReset()},[e])},po=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:s})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(s&&e.data===void 0||Gr(n,[e.error,r])),mo=e=>{if(e.suspense){const n=s=>s==="static"?s:Math.max(s??1e3,1e3),r=e.staleTime;e.staleTime=typeof r=="function"?(...s)=>n(r(...s)):n(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},go=(e,t)=>e.isLoading&&e.isFetching&&!t,yo=(e,t)=>e?.suspense&&t.isPending,Xn=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function bo(e,t,n){const r=ao(),s=uo(),o=oo(),a=o.defaultQueryOptions(e);o.getDefaultOptions().queries?._experimental_beforeQuery?.(a);const l=o.getQueryCache().get(a.queryHash);a._optimisticResults=r?"isRestoring":"optimistic",mo(a),fo(a,s,l),ho(s);const d=!o.getQueryCache().get(a.queryHash),[c]=m.useState(()=>new t(o,a)),u=c.getOptimisticResult(a),v=!r&&e.subscribed!==!1;if(m.useSyncExternalStore(m.useCallback(h=>{const g=v?c.subscribe(O.batchCalls(h)):_;return c.updateResult(),g},[c,v]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),m.useEffect(()=>{c.setOptions(a)},[a,c]),yo(a,u))throw Xn(a,c,s);if(po({result:u,errorResetBoundary:s,throwOnError:a.throwOnError,query:l,suspense:a.suspense}))throw u.error;return o.getDefaultOptions().queries?._experimental_afterQuery?.(a,u),a.experimental_prefetchInRender&&!Ce.isServer()&&go(u,r)&&(d?Xn(a,c,s):l?.promise)?.catch(_).finally(()=>{c.updateResult()}),a.notifyOnChangeProps?u:c.trackResult(u)}function yn(e,t){return bo(e,Ji)}function vo({user:e}){const[t,n]=m.useState(),{data:r}=yn({queryKey:["userInfo",e.id],queryFn:()=>ln(e),retry:!1,staleTime:6e4}),s=r?.clientName||e.name;if(m.useEffect(()=>{let l=!0;const d=(c,u)=>{u==="sync"&&de in c&&n(At(c[de]?.newValue))};return(async()=>{if(!ae(await le()))return;const c=await chrome.storage.sync.get(de);l&&(chrome.storage.onChanged.addListener(d),n(At(c[de])))})().catch(c=>b.warn("auto kick: toggle setup failed",c)),()=>{l=!1;try{chrome.storage.onChanged.removeListener(d)}catch{}}},[]),!t)return null;const o=t.some(l=>Qs(l,e)),a=()=>{try{chrome.storage.sync.set({[de]:Vs(t,{id:e.id,name:s})}).catch(l=>b.warn("auto kick: save failed",l))}catch(l){b.warn("auto kick: save failed",l)}};return i.jsx("div",{className:"f4t-info-kick-row",children:i.jsxs("button",{className:"f4t-info-kick",type:"button","aria-pressed":o,title:"Kick this person whenever they're in a room you own",onClick:a,children:["Auto-kick",o&&i.jsx("span",{"aria-hidden":"true",children:" ✓"})]})})}function ns({user:e}){const t=m.useMemo(()=>e.name||e.id,[e.id,e.name]),{data:n,error:r,isPending:s,refetch:o}=yn({queryKey:["userInfo",e.id],queryFn:()=>ln(e),retry:!1,staleTime:6e4});return i.jsxs("section",{className:"f4t-info-card","aria-label":`Extra information for ${t}`,children:[i.jsx(vo,{user:e}),s&&i.jsx(xo,{}),!s&&r&&i.jsx(wo,{message:r.message,onRetry:()=>o()}),!s&&!r&&n&&i.jsx(So,{data:n})]})}function xo(){return i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"f4t-info-muted",children:"Loading extra profile details..."}),i.jsx("div",{className:"f4t-info-skeleton"}),i.jsx("div",{className:"f4t-info-skeleton short"})]})}function wo({message:e,onRetry:t}){return i.jsxs("div",{className:"f4t-info-error-box",role:"alert","aria-live":"polite",children:[i.jsx("p",{className:"f4t-info-error-title",children:"Could not load extra profile details"}),i.jsx("p",{className:"f4t-info-error",children:e||"Please check your endpoint and try again."}),i.jsx("div",{className:"f4t-info-error-actions",children:i.jsx("button",{className:"f4t-info-retry",type:"button",onClick:t,children:"Retry"})})]})}function So({data:e}){const t=!!e.stats?.length,n=!!e.languages?.length,r=!!e.levels?.length,s=!!e.topics?.length,o=!!e.partners?.length,a=!!e.notes?.length;return i.jsxs(i.Fragment,{children:[t&&i.jsx(ko,{stats:e.stats}),(n||r)&&i.jsxs("div",{className:"f4t-info-two-col",children:[n&&i.jsx(Jn,{title:"Top languages",stats:e.languages}),r&&i.jsx(Jn,{title:"Top levels",stats:Co(e.levels)})]}),s&&i.jsx(Eo,{title:"Top topics",stats:e.topics}),o&&i.jsx(jo,{partners:e.partners}),a&&i.jsx("div",{className:"f4t-info-notes",children:e.notes?.map(l=>i.jsx("p",{className:"f4t-info-note",children:l},l))}),!e.title&&!e.summary&&!t&&!n&&!r&&!s&&!o&&!a&&i.jsx("p",{className:"f4t-info-muted",children:"No extra information returned for this user."})]})}function ko({stats:e}){return i.jsx("div",{className:"inline-stats",children:e.map(t=>i.jsxs("span",{className:"inline-stat",children:[i.jsxs("span",{className:"inline-stat-label",children:[t.label,":"]})," ",i.jsx("span",{className:"inline-stat-value",children:t.value})]},`${t.label}:${t.value}`))})}function Jn({title:e,stats:t}){const n=t.slice(0,5),r=n.reduce((s,o)=>Math.max(s,er(o.value)),0);return i.jsxs("div",{className:"info-section",children:[i.jsx("p",{className:"section-title",children:e}),i.jsx("ul",{className:"bar-list",children:n.map(s=>{const o=er(s.value),a=r>0?Math.max(o/r*100,4):0;return i.jsxs("li",{className:"bar-row",children:[i.jsx("span",{className:"bar-name",children:s.label}),i.jsx("span",{className:"bar-track","aria-hidden":"true",children:i.jsx("span",{className:"bar-fill",style:{width:`${a}%`}})}),i.jsx("span",{className:"bar-value",children:s.value})]},`${e}:${s.label}`)})})]})}function Eo({title:e,stats:t}){const n=t.slice(0,5);return i.jsxs("div",{className:"info-section",children:[i.jsx("p",{className:"section-title",children:e}),i.jsx("ul",{className:"f4t-info-plain-list",children:n.map(r=>i.jsxs("li",{className:"f4t-info-plain-row",title:r.label,children:[i.jsx("span",{className:"f4t-info-plain-name",children:r.label}),i.jsx("span",{className:"f4t-info-plain-leader","aria-hidden":"true"}),i.jsx("span",{className:"bar-value",children:r.value})]},`${e}:${r.label}`))})]})}function jo({partners:e}){const t=e.slice(0,5),n=t.reduce((r,s)=>Math.max(r,s.overlapCount),0);return i.jsxs("div",{className:"info-section",children:[i.jsx("p",{className:"section-title",children:"Top partners"}),i.jsx("ul",{className:"bar-list",children:t.map(r=>{const s=n>0?Math.max(r.overlapCount/n*100,4):0;return i.jsxs("a",{href:`https://www.free4talk.me/tracker/user/${r.id}`,target:"_blank",rel:"noopener noreferrer",className:"bar-row partner",children:[i.jsx("span",{className:"f4t-info-partner-avatar-wrap",children:r.avatarUrl?i.jsx("img",{className:"f4t-info-partner-avatar",src:r.avatarUrl,alt:""}):i.jsx("span",{className:"f4t-info-partner-fallback",children:r.name.slice(0,2).toUpperCase()})}),i.jsx("span",{className:"bar-name",children:r.name}),i.jsx("span",{className:" bar-track","aria-hidden":"true",children:i.jsx("span",{className:"bar-fill",style:{width:`${s}%`}})}),i.jsx("span",{className:"bar-value",children:r.overlapCount})]},r.id)})})]})}const Zn=["any level","beginner","upper beginner","intermediate","upper intermediate","advanced","upper advanced"];function Co(e){return[...e].sort((t,n)=>{const r=Zn.indexOf(t.label.trim().toLowerCase()),s=Zn.indexOf(n.label.trim().toLowerCase());return r===-1&&s===-1?0:r===-1?1:s===-1?-1:r-s})}function er(e){if(typeof e=="number")return e;const t=parseFloat(e);return Number.isFinite(t)?t:0}const xe="f4t-info-modal-expanded",tr="free4talk-info-extension-page-style",Te="free4talk-info-extension-root",we="f4t-tracker-link",ee="f4t-profile-btn",rs="f4t-unverified-avatar",ss="f4t-unverified-badge",To=`
  /* Real avatar swapped in over Free4Talk's UNVERIFIED initials placeholder.
     Absolute fill so it adopts whatever size the host avatar span already has. */
  .${rs} {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  /* Bottom-centred so it stays inside the circle on Free4Talk's round homepage
     avatars (a corner badge gets clipped by the border-radius). */
  .${ss} {
    position: absolute;
    left: 50%;
    bottom: 4%;
    transform: translateX(-50%);
    z-index: 1;
    max-width: 92%;
    padding: 2px 4px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.42);
    color: rgba(255, 255, 255, 0.66);
    font-size: 7px;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
  }

  .ant-modal.${xe} #${Te} {
    display: block;
    width: 100%;
    margin-top: 16px;
  }

  /* The profile modal's wrap is .decos, which Free4Talk sets to overflow: hidden,
     so once our card makes it taller than the window it can't be scrolled. */
  .ant-modal-wrap:has(.ant-modal.${xe}) {
    overflow-y: auto;
  }

  .ant-modal-wrap:has(.ant-modal.${xe})::-webkit-scrollbar { width: 6px; }
  .ant-modal-wrap:has(.ant-modal.${xe})::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.25); border-radius: 3px; }

  .${we} {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 8px;
    font-size: 0.5em;
    line-height: 1;
    color: #33a9ff;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.15s ease;
  }

  .${we}:hover {
    opacity: 1;
  }

  .${we} svg {
    width: 1.3em;
    height: 1.3em;
    fill: currentColor;
  }

  .${ee} {
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 30;
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    cursor: pointer;
    opacity: 0.85;
    transition: opacity 0.15s ease, background 0.15s ease;
  }

  .${ee}:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.65);
  }

  .${ee}:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .${ee} svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
  }

`;function bn(){if(document.getElementById(tr))return;const e=document.createElement("style");e.id=tr,e.textContent=To,document.head.append(e)}const is=":host{all:initial;display:block;color:#d3d3d3;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;font-size:15px;line-height:1.5;margin-top:18px;width:100%;interpolate-size:allow-keywords}@keyframes f4t-fade-in{0%{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:none}}*,*:before,*:after{box-sizing:border-box;font-family:inherit}.f4t-info-card{background:transparent;padding:6px 18px 20px;color:#d3d3d3;interpolate-size:allow-keywords;transition:height .28s cubic-bezier(.22,.61,.36,1);overflow:hidden}.f4t-info-card>*{animation:f4t-fade-in .24s ease-out both;animation-delay:80ms}p{margin:0}ul{list-style:none;margin:0;padding:0}.f4t-info-muted,.f4t-info-error{font-size:15px;line-height:1.5;margin:0}.f4t-info-muted{color:#aaa}.f4t-info-skeleton{height:10px;width:100%;margin-top:10px;border-radius:6px;background:#ffffff0f;animation:f4t-pulse 1.6s ease-in-out infinite}.f4t-info-skeleton.short{width:50%;margin-top:8px}@keyframes f4t-pulse{50%{opacity:.5}}.f4t-info-error-box{margin-top:10px;padding:12px;border:1px solid rgba(220,80,80,.4);border-radius:8px;background:#dc505014}.f4t-info-error-title{color:#f1c0c0;font-weight:600}.f4t-info-error{color:#e8b4b4;margin-top:4px;margin-bottom:10px}.f4t-info-error-actions{display:flex;justify-content:flex-end}.f4t-info-retry{cursor:pointer;background:transparent;color:#f1c0c0;border:1px solid rgba(220,80,80,.5);border-radius:6px;padding:6px 12px;font-size:14px;font-weight:600}.f4t-info-retry:hover{background:#dc505026}.f4t-info-kick-row{display:flex;justify-content:flex-end;margin-bottom:8px}.f4t-info-kick{cursor:pointer;background:transparent;color:#aaa;border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:3px 10px;font-size:12px;font-weight:600;line-height:1.4}.f4t-info-kick:hover{color:#d3d3d3;border-color:#ffffff4d}.f4t-info-kick[aria-pressed=true]{color:#f1c0c0;border-color:#dc505080;background:#dc50501f}.f4t-info-kick[aria-pressed=true]:hover{background:#dc505033}.inline-stats{display:flex;flex-wrap:wrap;gap:6px 22px;margin-top:4px;justify-content:space-between;border-bottom:1px solid #353d45;padding-bottom:9px}.inline-stat{font-size:15px;line-height:1.7;white-space:nowrap}.inline-stat-label{color:#aaa;font-size:.8em}.inline-stat-value{color:#d3d3d3;font-size:.8em}.f4t-info-two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 40px;margin-top:-7px}.f4t-info-two-col .f4t-info-section{margin-top:0}@media(max-width:560px){.f4t-info-two-col{grid-template-columns:minmax(0,1fr)}}.info-section{margin-top:22px}.section-title{font-size:.8em;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#aaa;margin:0 0 12px}.bar-list{display:flex;flex-direction:column;gap:10px}.bar-row{display:grid;grid-template-columns:minmax(90px,150px) minmax(60px,1fr) auto;align-items:center;gap:12px;font-size:15px;line-height:1.4}.bar-row.partner{grid-template-columns:28px minmax(90px,150px) minmax(40px,1fr) auto;gap:8px;text-decoration:none;color:inherit}.bar-name{color:#d3d3d3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:.8em;border:none}.bar-track{position:relative;height:5px;border-radius:999px;background:#ffffff0f;overflow:hidden}.bar-fill{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#33a9ff73,#33a9ffd9)}.bar-value{color:#d3d3d3;font-variant-numeric:tabular-nums;font-weight:500;min-width:1.75em;text-align:right;font-size:.78em}.f4t-info-plain-list{display:flex;flex-direction:column;gap:8px}.f4t-info-plain-row{display:flex;align-items:baseline;gap:10px;font-size:15px;line-height:1.4}.f4t-info-plain-name{color:#d3d3d3;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.8em}.f4t-info-plain-leader{flex:1 1 auto;min-width:16px;align-self:center;border-bottom:1px dotted rgba(255,255,255,.18);transform:translateY(-3px)}.partner-avatar-wrap{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;cursor:pointer}.f4t-info-partner-avatar{width:28px;height:28px;border-radius:999px;object-fit:cover}.f4t-info-partner-fallback{width:28px;height:28px;border-radius:999px;background:#ffffff14;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#d3d3d3}.f4t-info-notes{display:flex;flex-direction:column;gap:6px;margin-top:16px}.f4t-info-note{font-size:14px;line-height:1.5;color:#aaa}",Ao=/^\/room\/[^/]+\/?$/;function No(){if(!Ao.test(window.location.pathname))return;const e=new URL(window.location.href);e.searchParams.get("keep-chat")!=="true"&&(e.searchParams.set("keep-chat","true"),window.history.replaceState(window.history.state,"",e.toString()))}const os=new io({defaultOptions:{queries:{retry:!1,refetchOnWindowFocus:!1,staleTime:6e4}}}),Oo=":host{position:static;margin:0!important;width:auto}.f4t-modal-overlay{position:fixed;inset:0;z-index:2147483000;background:#0009;display:flex;align-items:center;justify-content:center;padding:20px;animation:f4t-fade-in .16s ease-out}.f4t-modal{position:relative;width:520px;max-width:100%;max-height:90vh;overflow-y:auto;background:#232a31;border-radius:5px;box-shadow:0 20px 60px #00000080;padding:0 0 12px}.f4t-modal::-webkit-scrollbar{width:6px}.f4t-modal::-webkit-scrollbar-thumb{background:#fff3;border-radius:3px}.f4t-modal-close{position:absolute;top:0;right:0;width:34px;height:31px;display:flex;align-items:center;justify-content:center;border:none;border-radius:0 0 0 35px;background:#f5222d;color:#fff;cursor:pointer;z-index:2}.f4t-modal-close:hover{background:#ff6163}.f4t-modal-close:hover{background:#fff}.f4t-modal-close:hover svg{fill:#f5222d}.f4t-modal-close svg{width:15px;height:15px;fill:#fff;position:relative;left:3px;top:-2px}.f4t-modal-header{display:flex;gap:18px;align-items:center;padding:18px 18px 16px}.f4t-modal-avatar,.f4t-modal-avatar-fallback{width:168px;height:168px;border-radius:6px;flex:0 0 auto}.f4t-modal-avatar-wrap{position:relative;flex:0 0 auto;display:flex}.f4t-modal-unverified-badge{position:absolute;left:0;bottom:0;padding:3px 6px;border-bottom-left-radius:6px;border-top-right-radius:6px;background:#0000006b;color:#ffffffa8;font-size:9px;font-weight:500;letter-spacing:.04em;line-height:1;pointer-events:none}.f4t-modal-avatar{object-fit:cover}.f4t-modal-avatar-fallback{display:flex;align-items:center;justify-content:center;background:#ffffff14;font-size:56px;font-weight:700;color:#d3d3d3}.f4t-modal-headinfo{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:4px;padding-right:40px;align-self:baseline;margin-top:10px}.f4t-modal-muted{color:#8b949e;font-size:11.2px}.f4t-modal-id-row{display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:12px;color:#d3d3d3}.f4t-modal-counts{display:flex;flex-wrap:wrap;gap:4px 16px;font-size:11.3px;color:#d3d3d3}.f4t-modal-name{display:flex;align-items:center;gap:10px;min-width:0;margin-top:2px}.f4t-modal-name-text{font-size:1.4em;font-weight:400;line-height:1.1;color:#d3d3d3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.f4t-modal-copy{border:none;background:transparent;padding:0;font:inherit;font-weight:500;color:#2f9bff;cursor:pointer}.f4t-modal-copy:hover{color:#6cc0ff}.f4t-modal-tracker{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;color:#2f9bff;text-decoration:none}.f4t-modal-tracker:hover{color:#6cc0ff}.f4t-modal-tracker svg{width:.9em;height:.9em;fill:currentColor;opacity:.8}.f4t-modal-tracker svg:hover{fill:currentColor;opacity:1}.f4t-modal-body{margin-top:0}",Mo="free4talk-info-extension-modal";let X=null,ft=null;function Ro(){if(ft&&document.body.contains(ft)&&X)return;X&&(X.unmount(),X=null);const e=document.createElement("div");e.id=Mo,document.body.append(e);const t=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=`${is}
${Oo}`,t.append(n);const r=document.createElement("div");t.append(r),ft=e,X=me.createRoot(r)}function Io(e){Ro(),X.render(i.jsx(es,{client:os,children:i.jsx(Po,{user:e,onClose:_o})}))}function _o(){X?.render(i.jsx(i.Fragment,{}))}function Po({user:e,onClose:t}){return m.useEffect(()=>{const n=r=>{r.key==="Escape"&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t]),i.jsx("div",{className:"f4t-modal-overlay",onClick:t,children:i.jsxs("div",{className:"f4t-modal",role:"dialog","aria-modal":"true",onClick:n=>n.stopPropagation(),children:[i.jsx("button",{className:"f4t-modal-close",type:"button","aria-label":"Close",onClick:t,children:i.jsx("svg",{viewBox:"64 64 896 896","aria-hidden":"true",children:i.jsx("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})})}),i.jsx(Lo,{user:e}),i.jsx("div",{className:"f4t-modal-body",children:i.jsx(ns,{user:e})})]})})}function Lo({user:e}){const{data:t}=yn({queryKey:["userInfo",e.id],queryFn:()=>ln(e),retry:!1,staleTime:6e4}),n=t?.clientName||e.name||e.id,r=t?.avatarUrl||e.avatarUrl,s=t?.followers??e.followers,o=t?.friends??e.friends,a=t?.following??e.following,l=s!==void 0||o!==void 0||a!==void 0,d=`https://www.free4talk.me/tracker/user/${e.id}`;return i.jsxs("div",{className:"f4t-modal-header",children:[i.jsx(Do,{id:e.id,name:n,avatarUrl:r}),i.jsxs("div",{className:"f4t-modal-headinfo",children:[i.jsxs("div",{className:"f4t-modal-id-row",children:[i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"ID:"})," ",e.id]}),i.jsx($o,{id:e.id})]}),l&&i.jsxs("div",{className:"f4t-modal-counts",children:[s!==void 0&&i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"Followers:"})," ",s]}),o!==void 0&&i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"Friends:"})," ",o]}),a!==void 0&&i.jsxs("span",{children:[i.jsx("span",{className:"f4t-modal-muted",children:"Following:"})," ",a]})]}),i.jsxs("div",{className:"f4t-modal-name",children:[i.jsx("span",{className:"f4t-modal-name-text",children:n}),i.jsx("a",{className:"f4t-modal-tracker",href:d,target:"_blank",rel:"noopener noreferrer",title:"View on free4talk.me tracker","aria-label":"View on free4talk.me tracker",children:i.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:i.jsx("path",{d:"M14 3a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 3H14zM5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H5V7h6a1 1 0 1 0 0-2H5z"})})})]})]})]})}function Do({id:e,name:t,avatarUrl:n}){const[r,s]=m.useState(!1),[o,a]=m.useState(null);m.useEffect(()=>{let c=!0;return Ur().then(u=>{c&&s(u)}),()=>{c=!1}},[]);const l=!n&&r&&o!==e,d=n||(l?Br(e):void 0);return d?i.jsxs("span",{className:"f4t-modal-avatar-wrap",children:[i.jsx("img",{className:"f4t-modal-avatar",src:d,alt:"",referrerPolicy:"no-referrer",onError:()=>a(e)}),l&&i.jsx("span",{className:"f4t-modal-unverified-badge",children:"UNVERIFIED"})]}):i.jsx("span",{className:"f4t-modal-avatar-fallback",children:t.slice(0,2).toUpperCase()})}function $o({id:e}){const[t,n]=m.useState(!1);m.useEffect(()=>{if(!t)return;const s=setTimeout(()=>n(!1),1500);return()=>clearTimeout(s)},[t]);const r=async()=>{try{await navigator.clipboard.writeText(e),n(!0)}catch{n(!1)}};return i.jsx("button",{className:"f4t-modal-copy",type:"button",onClick:r,children:t?"Copied":"Copy ID"})}const Fo="button.setting",zo=/\/avatar\/v\d+\/([A-Za-z0-9]+)/,Uo='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z"/></svg>';async function Bo(){try{if(!await L())return}catch(n){b.error("profile icon: failed to read extension state",n);return}bn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1,nr()}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),nr()}function nr(){try{document.querySelectorAll(Fo).forEach(t=>{const n=t.parentElement;n&&(n.querySelector(`.${ee}`)||!n.querySelector(".avatar")||!n.querySelector(".name")||qo(n))})}catch(e){b.error("profile icon: scan failed",e)}}function qo(e){const t=rr(e);window.getComputedStyle(e).position==="static"&&(e.style.position="relative");const n=document.createElement("button");n.type="button",n.className=ee,n.innerHTML=Uo,n.title=t?`View ${t.name??"profile"} info`:"View profile info",n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation();const s=rr(e)??t;if(!s){n.title="Couldn't identify this user";return}Io(s)}),e.append(n)}function rr(e){const t=e.querySelector(".name")?.textContent?.trim()||void 0,n=e.querySelector(".avatar img"),r=n?.currentSrc||n?.src||void 0,s=e.dataset.f4tUid||Ho(r);return s?{id:s,name:t,avatarUrl:r}:null}function Ho(e){if(e)return e.match(zo)?.[1]}const Ko="span.ant-avatar",sr="data-f4t-avatar-done",Qo=/\b(?:User\s+)?ID:\s*([A-Za-z0-9]+)/i;let Dt=!1,$t=!1;async function Vo(){try{if([Dt,$t]=await Promise.all([Ur(),Gs()]),!Dt&&!$t)return}catch(n){b.error("unverified avatars: failed to read settings",n);return}bn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1,ht()}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),ht(),[300,1e3,2500].forEach(n=>setTimeout(ht,n))}function ht(){try{document.querySelectorAll(Ko).forEach(e=>{if(e.hasAttribute(sr)||!Go(e)||!(!!e.closest(".ant-modal-content")?Dt:$t))return;const n=Yo(e);n&&(e.setAttribute(sr,"1"),Wo(e,n))})}catch(e){b.error("unverified avatars: scan failed",e)}}function Go(e){if(e.querySelector("img"))return!1;const t=e.querySelector("svg");return t?/UNVERIFIED/i.test(t.textContent||""):!1}function Yo(e){const t=e.closest("[data-f4t-uid]");if(t?.dataset.f4tUid)return t.dataset.f4tUid;const n=e.closest(".ant-modal-content");if(n)return n.innerText.match(Qo)?.[1]}function Wo(e,t){const n=e.querySelector("svg");if(!n)return;const r=document.createElement("img");r.className=rs,r.alt="",r.referrerPolicy="no-referrer";const s=document.createElement("span");s.className=ss,s.textContent="UNVERIFIED",r.addEventListener("load",()=>{n.style.display="none",s.style.display=""}),r.addEventListener("error",()=>{r.remove(),s.remove()}),s.style.display="none",window.getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.append(r,s),r.src=Br(t)}const Xo="f4t-tools",Jo=3,as="chats",vn="dms";let pt;function Zo(){return pt??=new Promise((e,t)=>{const n=indexedDB.open(Xo,Jo);n.onupgradeneeded=()=>{for(const r of[as,vn])n.result.objectStoreNames.contains(r)||n.result.createObjectStore(r)},n.onsuccess=()=>{const r=n.result;r.onversionchange=()=>{r.close(),pt=void 0},e(r)},n.onerror=()=>{if(n.error?.name==="VersionError"){const f=indexedDB.open(Xo);f.onsuccess=()=>{const r=f.result;r.onversionchange=()=>{r.close(),pt=void 0},e(r)},f.onerror=()=>{pt=void 0,t(f.error)};return}pt=void 0,t(n.error??new Error("indexedDB open failed"))},n.onblocked=()=>b.warn("archive db: upgrade waiting for another Free4Talk tab to reload")})}function se(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error??new Error("indexedDB request failed"))})}async function xn(e,t){return(await Zo()).transaction(e,t).objectStore(e)}function ea({currentRid:e,locked:t,onClose:n}){const[r,s]=m.useState(null),[o,a]=m.useState(),[l,d]=m.useState("");m.useEffect(()=>{const p=async()=>{s(await qt()),a(await gs())};p();const f=window.setInterval(p,5e3);return()=>window.clearInterval(f)},[]);const c=l.trim().toLowerCase(),u=c?(r??[]).filter(p=>ra(p.blob,p.rid,c)):r??[],v=async(p,f)=>{if(p!==o&&(await ha(p,e),a(p)),!c)return;const w=cs(f,c);w&&ma(f.data.map(rt),f.data.indexOf(w))},h=async()=>{await bs(e),a(void 0)},g=async(p,f)=>{window.confirm(`Delete the saved chat for ${f}?`)&&(p===o&&await h(),await ua(p),s(await qt()))};return i.jsxs("div",{className:"sidebar",children:[i.jsx("style",{children:sa}),i.jsxs("div",{className:"header",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"#1890ff","aria-hidden":"true",children:i.jsx("path",{d:"M13 3a9 9 0 0 0-9 9H1l3.9 3.9L8.8 12H6a7 7 0 1 1 2.05 4.95l-1.41 1.41A9 9 0 1 0 13 3zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8H12z"})}),i.jsx("div",{className:"title",children:"Saved Chats"}),i.jsx("button",{type:"button",className:"close",title:"Close",onClick:n,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"})})})]}),t?i.jsxs("div",{className:"lock",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"#1890ff","aria-hidden":"true",children:i.jsx("path",{d:"M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9zm3 4a2 2 0 0 1 1 3.73V19h-2v-1.27A2 2 0 0 1 12 14z"})}),i.jsx("div",{className:"lock-title",children:"Saved Chats is a Pro feature"}),i.jsx("p",{children:"Keep chat history from every room you join, search it, and bring past conversations into your current room."}),i.jsx("p",{children:"Pay once on Buy Me a Coffee with your free4talk.me email."}),i.jsxs("a",{className:"lock-cta",href:dn,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",cn," once"]})]}):r===null?null:r.length===0?i.jsx("div",{className:"empty",children:"No saved chats yet. Chats save automatically while you talk."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"controls",children:i.jsx("input",{type:"text",value:l,placeholder:"Search conversations",onChange:p=>d(p.target.value)})}),i.jsx("div",{className:"status",children:o&&o!==e?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"status-viewing",children:"Viewing another room’s chat"}),i.jsx("button",{type:"button",className:"back",onClick:h,children:"Back to this room"})]}):i.jsx("span",{children:"Viewing this room’s chat"})}),r.length>=ia&&i.jsxs("div",{className:"warn",children:[r.length," of ",fs," saved chats used. When full, the oldest chat is deleted automatically — delete chats you no longer need to free space."]}),i.jsx("div",{className:"list",children:u.length===0?i.jsxs("div",{className:"empty",children:["No conversations match “",l,"”.",i.jsx("button",{type:"button",className:"clear",onClick:()=>d(""),children:"Clear search"})]}):u.map(({rid:p,blob:f})=>i.jsx(ta,{rid:p,blob:f,q:c,isCurrent:p===e,isLoaded:p===o,onSelect:()=>v(p,f),onDelete:w=>g(p,w)},p))}),i.jsx("div",{className:"footer",children:i.jsx("span",{children:c?`${u.length} of ${r.length} conversations`:`${r.length} conversations`})})]})]})}function ta({rid:e,blob:t,q:n,isCurrent:r,isLoaded:s,onSelect:o,onDelete:a}){const l=vs(t)??e,d=n?cs(t,n):void 0,c=d?ls(d):na(t);return i.jsxs("div",{className:`row ${s?"loaded":""}`,onClick:o,children:[i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:l}),s&&i.jsx("span",{className:"tag",children:"viewing"}),r&&!s&&i.jsx("span",{className:"tag muted",children:"this room"})]}),i.jsx("div",{className:"row-sub",children:[e,`${t.data.length} msgs`,t.savedAt?ya(t.savedAt):void 0].filter(Boolean).join(" · ")}),c&&i.jsx("div",{className:"row-preview",children:c})]}),i.jsx("button",{type:"button",className:"row-delete",title:"Delete saved chat",onClick:u=>{u.stopPropagation(),a(l)},children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9zm0 5h2v9H9V8zm4 0h2v9h-2V8z"})})})]})}function rt(e){return Array.isArray(e.texts)?e.texts.map(t=>typeof t?.msg=="string"?t.msg:"").filter(Boolean).join(" ").trim():""}function ls(e){const t=rt(e),n=e.from?.name,r=e.deleted&&t?Ut+t:t;return typeof n=="string"&&n&&t?`${n}: ${r}`:r}function na(e){for(let t=e.data.length-1;t>=0;t--){const n=ls(e.data[t]);if(n)return n}}function cs(e,t){for(let n=e.data.length-1;n>=0;n--){const r=e.data[n];if((typeof r.from?.name=="string"?r.from.name:"").toLowerCase().includes(t)||rt(r).toLowerCase().includes(t))return r}}function ra(e,t,n){return t.toLowerCase().includes(n)||vs(e)?.toLowerCase().includes(n)?!0:e.data.some(r=>(typeof r.from?.name=="string"?r.from.name:"").toLowerCase().includes(n)||rt(r).toLowerCase().includes(n))}const sa=`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .sidebar {
    width: 340px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #232a31;
    color: rgba(255, 255, 255, 0.85);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    box-shadow: -8px 0 24px rgba(0, 0, 0, 0.35);
    border-right: 1px solid rgba(255, 255, 255, 0.06);
    animation: slide-in 0.22s cubic-bezier(0.23, 1, 0.32, 1);
  }
  @keyframes slide-in {
    from { transform: translateX(24px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .sidebar { animation: none; }
  }

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .title { flex: 1; font-size: 14px; font-weight: 600; color: #fff; }
  .close {
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    padding: 4px;
  }
  .close:hover { color: #fff; }

  .controls { padding: 10px 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  input[type="text"] {
    width: 100%;
    appearance: none;
    background: #1b212a;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    padding: 6px 8px;
  }
  input[type="text"]::placeholder { color: rgba(255, 255, 255, 0.35); }
  input:focus-visible, button:focus-visible {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.25);
  }

  /* Always in the layout — only its content swaps, so no layout shift. */
  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 33px;
    padding: 4px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.45);
    font-size: 12px;
  }
  .status-viewing { color: rgba(255, 255, 255, 0.75); }
  .back {
    border: none;
    background: transparent;
    color: #1890ff;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    white-space: nowrap;
  }
  .back:hover { color: #40a9ff; }

  .warn {
    padding: 8px 12px;
    background: rgba(250, 173, 20, 0.12);
    color: #faad14;
    font-size: 12px;
    line-height: 1.4;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .list { flex: 1; overflow-y: auto; padding: 4px 0; }
  .list::-webkit-scrollbar { width: 6px; }
  .list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }

  .row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 8px 8px 10px;
    border-left: 2px solid transparent;
    cursor: pointer;
  }
  .row:hover { background: rgba(255, 255, 255, 0.03); }
  .row.loaded { border-left-color: #1890ff; background: rgba(24, 144, 255, 0.08); }
  .row + .row { border-top: 1px solid rgba(255, 255, 255, 0.05); }
  .row-body { flex: 1; min-width: 0; }
  .row-head { display: flex; align-items: center; gap: 6px; }
  .row-title {
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tag {
    flex: none;
    color: #1890ff;
    border: 1px solid rgba(24, 144, 255, 0.5);
    border-radius: 3px;
    font-size: 10px;
    line-height: 1;
    padding: 2px 4px;
  }
  .tag.muted { color: rgba(255, 255, 255, 0.45); border-color: rgba(255, 255, 255, 0.2); }
  .row-sub {
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-preview {
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-delete {
    flex: none;
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.25);
    cursor: pointer;
    padding: 6px;
    opacity: 0;
    transition: color 0.15s ease, opacity 0.15s ease;
  }
  .row:hover .row-delete { opacity: 1; }
  .row-delete:hover { color: #f5222d; }

  .empty {
    padding: 18px 14px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.5;
  }

  .lock {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    padding: 40px 24px;
  }
  .lock-title { color: #fff; font-size: 14px; font-weight: 600; }
  .lock p { color: rgba(255, 255, 255, 0.55); font-size: 12px; line-height: 1.5; }
  .lock-cta {
    margin-top: 6px;
    background: #1890ff;
    color: #fff;
    border-radius: 4px;
    font-size: 13px;
    padding: 7px 22px;
    text-decoration: none;
  }
  .lock-cta:hover { background: #40a9ff; }
  .clear {
    display: block;
    margin-top: 8px;
    border: none;
    background: transparent;
    color: #1890ff;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
  }
  .clear:hover { color: #40a9ff; }

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
  }
`;function ds(){const t=Array.from(document.querySelectorAll("div.blind")).filter(n=>/^(Emojis|Stickers|GIFs|Upload Images|AI|Notification)/.test(n.textContent??""));for(const n of t.reverse()){const r=n.closest(".ant-col");if(r)return r}return null}function us(e){const t=document.createElement("button");t.id=e.id,t.type="button",t.title=e.title,t.addEventListener("click",e.onClick),t.className="ant-btn no-border ant-btn-link",t.setAttribute("style","padding: 3px 2px 0; height: auto;"),t.innerHTML=`<i class="anticon" style="font-size:20px">${e.iconSvg}</i><div class="blind">${e.title}</div>`;const n=document.createElement("div");return n.className="ant-col f4t-chat-col",n.setAttribute("style","padding-left: 2px; padding-right: 2px;"),n.append(t),n}function st(e,t){let n;for(let r=document.getElementById(t)?.parentElement;r&&r!==document.body;r=r.parentElement){const s=r.getBoundingClientRect();s.width>0&&s.width<=window.innerWidth*.7&&s.height>=window.innerHeight*.5&&(n=s.left)}e.style.right=`${n===void 0?0:Math.max(0,window.innerWidth-n)}px`}const ie="free4talk:messages",ce="f4t-tools:chat:",Ge="f4t-tools:injected",fs=200,ia=180,oa=5e3,aa=/^\/room\/([^/]+)\/?$/,Ye="f4t-chat-archive-btn",wn="f4t-chat-archive-sidebar";let Ft=!0;async function la(){try{if(await L()===!1)return;Ft=!0}catch(n){}Ft=!0;await ca().catch(n=>b.warn("chat archive: migrate failed",n));window.addEventListener("pagehide",()=>{at().catch(()=>{})});window.setInterval(ir,oa);ir();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{va(),ka()}catch(n){b.error("chat archive: sync failed",n)}}))};try{new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0});window.addEventListener("resize",t);t()}catch(n){b.warn("chat archive: observer failed",n)}}function ir(){at().catch(e=>b.error("chat archive: tick failed",e))}function it(e){return xn(as,e)}async function ot(e){return Q(await se((await it("readonly")).get(e)))}async function hs(e){const t=await it("readwrite");await Promise.all([...e].map(([n,r])=>se(t.put(r,n))))}async function ps(e){const t=await it("readwrite");await Promise.all(e.map(n=>se(t.delete(n))))}async function ca(){const e=new Map;for(let r=0;r<localStorage.length;r++){const s=localStorage.key(r);if(!s?.startsWith(ce))continue;const o=Q(localStorage.getItem(s));o&&e.set(s.slice(ce.length),o)}const t=await chrome.storage.local.get(null);for(const[r,s]of Object.entries(t)){if(!r.startsWith(ce))continue;const o=Q(s);if(!o)continue;const a=r.slice(ce.length),l=e.get(a);e.set(a,l?{...o,data:zt(l.data,o.data)}:o)}if(!e.size)return;const n=new Map;for(const[r,s]of e){const o=await ot(r);n.set(r,o?{...s,data:zt(o.data,s.data)}:s)}await hs(n);for(const r of e.keys())localStorage.removeItem(ce+r);await chrome.storage.local.remove(Object.keys(t).filter(r=>r.startsWith(ce)))}function Y(){return aa.exec(window.location.pathname)?.[1]}function Q(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(!Array.isArray(t?.data))return null;const n=t.data.filter(r=>r&&typeof r.id=="string"&&typeof r.rid=="string");return n.length?{...t,data:n}:null}catch{return null}}async function ms(){const e=(await chrome.storage.local.get(Ge))[Ge];if(Array.isArray(e))return{ids:e.filter(t=>typeof t=="string")};if(e&&typeof e=="object"&&Array.isArray(e.ids)){const t=e;return{from:typeof t.from=="string"?t.from:void 0,ids:t.ids.filter(n=>typeof n=="string")}}return{ids:[]}}async function gs(){return(await ms()).from}function zt(e,t){const n=new Map(e.map(r=>[r.id,r]));return t.forEach(r=>{const s=n.get(r.id);s?.deleted&&Bt(s)||n.set(r.id,r.deleted&&s&&!Bt(r)?da(r,s):r)}),[...n.values()].sort((r,s)=>r.time-s.time||r.idx-s.idx).map((r,s)=>({...r,idx:s+1}))}const Ut="🗑 (deleted) ",Bt=e=>Object.values(e).some(t=>Array.isArray(t)&&t.length);function da(e,t){const n={...e};for(const[r,s]of Object.entries(t))Array.isArray(s)&&s.length&&Array.isArray(n[r])&&!n[r].length&&(n[r]=s);return n}function ys(e,t,n){if(!e.deleted||!Bt(e))return{...e,rid:t,idx:n};const{deleted:r,...s}=e,[o,...a]=e.texts??[],l=typeof o?.msg=="string"?[{...o,msg:Ut+o.msg},...a]:[{msg:Ut.trim()},...e.texts??[]];return{...s,rid:t,idx:n,texts:l}}async function at(){try{const e=Q(localStorage.getItem(ie));if(!e)return;const t=new Set((await ms()).ids),n=new Map;if(e.data.forEach(s=>{t.has(s.id)||n.set(s.rid,[...n.get(s.rid)??[],s])}),!n.size)return;const r=new Map;for(const[s,o]of n){const a=await ot(s);r.set(s,{ver:e.ver,data:zt(a?.data??[],o),savedAt:Date.now()})}try{await hs(r)}catch(s){b.error("chat archive: save failed",s)}await fa()}catch(s){b.warn("chat archive: tick failed",s)}}async function qt(){try{const e=await it("readonly"),[t,n]=await Promise.all([se(e.getAllKeys()),se(e.getAll())]),r=[];return t.forEach((s,o)=>{const a=Q(n[o]);typeof s=="string"&&a&&r.push({rid:s,blob:a})}),r.sort((s,o)=>(o.blob.savedAt??0)-(s.blob.savedAt??0))}catch(e){b.warn("chat archive: load failed",e);return[]}}async function ua(e){await ps([e])}async function fa(){const e=(await qt()).slice(fs);e.length&&await ps(e.map(t=>t.rid))}async function ha(e,t){await at();const n=await ot(e);if(!n)return;const r=Q(localStorage.getItem(ie)),s=n.data.map((o,a)=>ys(o,t,a+1));try{const o=Math.max(r?.ver??0,n.ver??0)+1;localStorage.setItem(ie,JSON.stringify({ver:o,data:s})),await chrome.storage.local.set({[Ge]:{from:e,ids:s.map(a=>a.id)}})}catch(o){b.error("chat archive: load failed",o)}}async function bs(e){await at();const t=await ot(e);try{if(t){const n=Q(localStorage.getItem(ie)),r=Math.max(n?.ver??0,t.ver??0)+1,s=t.data.map((o,a)=>ys(o,e,a+1));localStorage.setItem(ie,JSON.stringify({ver:r,data:s}))}await chrome.storage.local.remove(Ge)}catch(n){b.error("chat archive: reset failed",n)}}const pa=".react-container.translate-container";function ma(e,t){const n=e[t];if(t<0||!e.length)return;const r=new Map;e.forEach(u=>r.set(u,(r.get(u)??0)+1));const s=new Map;e.forEach((u,v)=>{u.length>=6&&r.get(u)===1&&s.set(u,v)});const o=!!n&&r.get(n)===1,a=Date.now()+12e3;let l=!1,d;const c=()=>{const u=document.querySelector(pa);if(!u){Date.now()<a&&window.setTimeout(c,300);return}const v=u.scrollHeight/e.length;if(!l){l=!0,u.scrollTop=t*v-u.clientHeight/2,window.setTimeout(c,400);return}const h=ga(u,n);if(h&&(o||d)){h.scrollIntoView({block:"center"}),or(h);return}const g=[...u.children];let p;if(g.forEach(f=>{const w=f.textContent;if(w)for(const[k,E]of s)w.includes(k)&&(!p||Math.abs(E-t)<Math.abs(p.at-t))&&(p={row:f,at:E})}),p){if(Math.abs(p.at-t)<=2&&(d??=Date.now(),Date.now()-d>=2500||Date.now()>=a)){p.row.scrollIntoView({block:"center"}),or(p.row);return}const f=p.row.getBoundingClientRect().top-u.getBoundingClientRect().top+u.scrollTop;u.scrollTop=f+(t-p.at)*v-u.clientHeight/2}Date.now()<a&&window.setTimeout(c,300)};c()}function ga(e,t){if(!t||!e.textContent?.includes(t))return null;for(const n of e.querySelectorAll("*"))if(n.textContent?.includes(t)&&![...n.children].some(r=>r.textContent?.includes(t)))return n;return null}function or(e){const t=e.style.cssText;e.style.transition="background-color 0.4s ease",e.style.backgroundColor="rgba(24, 144, 255, 0.3)",e.style.borderRadius="4px",window.setTimeout(()=>e.style.cssText=t,2e3)}function vs(e){for(const t of e.data){if(!Array.isArray(t.systems))continue;const n=t.systems.find(r=>r?.message==="Room Info"&&typeof r?.children=="string");if(n)return n.children.split(`
`).map(r=>r.replace(/^(Language|Topic):\s*/,"").trim()).filter(Boolean).join(" · ")}}function ya(e){const t=Math.round((Date.now()-e)/6e4);if(t<60)return`${t}m ago`;const n=Math.round(t/60);return n<24?`${n}h ago`:`${Math.round(n/24)}d ago`}const ba='<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M13 3a9 9 0 0 0-9 9H1l3.9 3.9L8.8 12H6a7 7 0 1 1 2.05 4.95l-1.41 1.41A9 9 0 1 0 13 3zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8H12z"/></svg>';function va(){const e=document.getElementById(Ye),t=Y()?ds():null;if(!t){e?.closest(".f4t-chat-col")?.remove(),e?.remove(),lt();return}if(e)return;const n=us({id:Ye,title:"Saved Chats",iconSvg:ba,onClick:xa});t.insertAdjacentElement("afterend",n)}let te=null,Sn;function xa(e){e.stopPropagation(),te?lt():wa()}function wa(){const e=Y();if(!e||te)return;Sn=e;const t=document.createElement("div");t.id=wn,t.style.cssText="position: fixed; top: 0; bottom: 0; z-index: 1030;",st(t,Ye),document.body.append(t);const n=t.attachShadow({mode:"open"}),r=document.createElement("div");r.style.height="100%",n.append(r),te=me.createRoot(r),te.render(m.createElement(ea,{currentRid:e,locked:!1,onClose:lt}))}function lt(){if(!te)return;te.unmount(),te=null,document.getElementById(wn)?.remove();const e=Sn;e&&e===Y()&&Sa(e).catch(t=>b.error("chat archive: reset on close failed",t))}async function Sa(e){const t=await gs();t&&t!==e&&await bs(e)}function ka(){const e=document.getElementById(wn);if(e){if(Y()!==Sn){lt();return}st(e,Ye)}}const ar="f4t:suggestions",H="f4t:yt-remote",Ea=15e3,ja=5,ze=0,mt=1,Ht=2,Ca=25e3,lr=5e3;let Ta=0;const We=new Map;function K(e,t){return new Promise((n,r)=>{const s=++Ta;We.set(s,{resolve:n,reject:r}),window.postMessage({ns:un,dir:"req",id:s,cmd:e,arg:t},window.location.origin),window.setTimeout(()=>{We.delete(s)&&r(new Error("bridge-timeout"))},Ea)})}const x={status:"idle",tracks:[],index:0,skipped:new Set,shuffle:!1,repeat:"off"};let N=[],Ae=0;function xs(e){if(N=x.tracks.map((t,n)=>n),!!x.shuffle){for(let t=N.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[N[t],N[n]]=[N[n],N[t]]}N.splice(N.indexOf(e),1),N.unshift(e)}}function kn(e,t){const n=N.indexOf(e)+t;return n>=0&&n<N.length?N[n]:x.repeat==="all"&&N.length?N[(n+N.length)%N.length]:void 0}function Aa(){x.shuffle=!x.shuffle,xs(x.index),T({})}function Na(){ws(x.repeat==="off"?"all":x.repeat==="all"?"one":"off")}function ws(e){T({repeat:e})}const Kt=new Set;let he,Xe=0,F=0;function T(e){Object.assign(x,e),Kt.forEach(t=>t({...x,skipped:new Set(x.skipped)}))}let ue;function Oa(e,t){const n=ue?.videoId===e?ue:void 0,r={videoId:e,videoUrl:`https://www.youtube.com/watch?v=${e}`,title:n?.title??"",channel:n?.author??"",thumbnail:`https://i.ytimg.com/vi/${e}/mqdefault.jpg`};he=e,Xe=Date.now(),Je=!0,window.clearTimeout(Vt),N=[0],T({status:t===Ht?"paused":"playing",tracks:[{id:`yt:${e}`,name:r.title,artist:r.channel,durationMs:0,image:r.thumbnail,yt:r}],index:0,matched:{videoId:e,title:r.title,channel:r.channel},skipped:new Set,message:void 0})}function cr(){(x.status==="paused-external"||x.status==="error")&&ks()}function En(e){return Kt.add(e),e({...x,skipped:new Set(x.skipped)}),()=>Kt.delete(e)}let oe;async function Ne(e,t,n,r=0,s){F+=1,oe=s,T({status:"idle",playlistId:e,playlistName:t,tracks:n,index:r,matched:void 0,message:void 0,skipped:new Set}),xs(r),Ae=0,await ge(r)}const Ma="Open the room's YouTube panel (apps icon → Youtube), then press play again.";async function Ra(e,t){if(!await K("open-panel"))throw new Error("panel-closed");if(e.yt&&!bi(e.yt.videoId))return null;const r=e.yt??(await K("search",`${e.artist} ${e.name}`.trim()))[0];return F!==t?"stale":r?(await K("play",r),F!==t?"stale":(he=r.videoId,Xe=Date.now(),await K("autoplay",!1)&&(Qt=!0),r)):null}let Qt=!1;function pe(){Qt&&(Qt=!1,K("autoplay",!0).catch(()=>{}))}function Ia(e,t){if(F!==t)return;b.error("spotify player: play failed",e),pe();const n=e instanceof Error?e.message:String(e);T({status:"error",message:n==="panel-closed"?Ma:`Playback failed: ${n}`})}async function ge(e){const t=++F,n=x.tracks[e];if(!n)return _e();T({status:"resolving",index:e,matched:void 0,message:n.yt?`Loading “${n.name}”…`:`Searching YouTube for “${n.name}”…`});try{const r=await Ra(n,t);if(r==="stale")return;if(!r)return x.skipped.add(e),Ae+=1,T({message:n.yt?`“${n.name}” can't be played here — skipped.`:`No YouTube match for “${n.name}” — skipped.`}),jn(e,t);Ae=0,T({status:"playing",matched:{videoId:r.videoId,title:r.title,channel:r.channel},message:void 0}),_a(e,t)}catch(r){Ia(r,t)}}function Ss(e,t,n){if(F!==t||x.index!==e)return;const r=x.tracks[e];x.skipped.add(e),Ae+=1,T({message:`“${r?.name??"Video"}” ${n} — skipped.`}),jn(e,t)}let Vt,Je=!1;function _a(e,t){window.clearTimeout(Vt),Je=!1,Vt=window.setTimeout(()=>{Je||Ss(e,t,"didn't start")},Ca)}function jn(e,t){if(F!==t)return;if(oe)return oe({skipped:x.skipped.has(e)});if(Ae>=ja){pe(),T({status:"error",message:"Too many tracks in a row had no YouTube match — stopped."});return}const n=kn(e,1);if(n===void 0){pe(),T({status:"stopped",message:"Playlist finished."});return}ge(n)}function dr(){if(x.repeat==="one")return void ge(x.index);if(oe)return oe({skipped:!1});jn(x.index,F)}async function Pa(){const e=kn(x.index,1);if(e===void 0)return _e();await ge(e)}async function La(){await ge(kn(x.index,-1)??x.index)}async function _e(){F+=1,he=void 0,pe();try{await K("stop")}catch{}T({status:"stopped",message:void 0})}function Da(e){F+=1,oe=void 0,pe(),T({status:"stopped",message:e})}async function ks(){await ge(x.index)}async function Es(){await K("player-control","pauseVideo")}async function js(){await K("player-control","playVideo")}async function Cs(e){await K("seek",e)}let ur=!1;function Cn(){ur||(ur=!0,window.addEventListener("message",e=>{const t=e.data;if(!(e.source!==window||t?.ns!==un)){if(t.dir==="res"&&typeof t.id=="number"){const n=We.get(t.id);if(!n)return;We.delete(t.id),t.ok?n.resolve(t.result):n.reject(new Error(t.error??"bridge-error"));return}if(t.dir==="event"&&t.event==="player-error"){t.videoId===he&&(x.status==="playing"||x.status==="paused")&&Ss(x.index,F,"can't be played here");return}if(t.dir==="event"&&t.event==="video"&&typeof t.videoId=="string"){ue={videoId:t.videoId,title:t.title??"",author:t.author??""};const n=x.tracks[x.index];if(n?.yt?.videoId===t.videoId&&!n.name&&ue.title){const r={...n.yt,title:ue.title,channel:ue.author};x.tracks[x.index]={...n,name:r.title,artist:r.channel,yt:r},T({matched:{videoId:r.videoId,title:r.title,channel:r.channel}})}return}if(t.dir==="event"&&t.event==="player"){const n=t.videoId===he;n&&t.state===mt&&(Je=!0);const r=x.status==="playing"||x.status==="paused"||x.status==="paused-external";if(!n&&t.source&&t.videoId&&oe&&r&&Date.now()-Xe>=lr){Oa(t.videoId,t.state);return}if(x.status==="paused-external"){n&&t.state===mt?T({status:"playing",message:void 0}):n&&t.state===Ht?T({status:"paused",message:void 0}):n&&t.state===ze?dr():!n&&t.state===ze&&t.videoId&&cr();return}if(!(x.status==="playing"||x.status==="paused")){x.status!=="resolving"&&!n&&t.state===ze&&t.videoId&&cr();return}if(t.videoId&&he&&!n){if(Date.now()-Xe<lr)return;F+=1,pe(),T({status:"paused-external",message:t.source?"You started another video — your playlist continues when it ends.":"Someone else is playing a video — your playlist continues when it ends."});return}if(!n)return;t.state===ze?dr():t.state===mt&&x.status!=="playing"?T({status:"playing"}):t.state===Ht&&x.status==="playing"&&T({status:"paused"})}}}))}const $a="https://developer.spotify.com/dashboard";function Tn(e){return!!(e&&e.status!=="idle"&&e.status!=="stopped")}function Fa({locked:e,onClose:t}){const[n,r]=m.useState({state:"loading"}),[s,o]=m.useState(null),[a,l]=m.useState(null),[d,c]=m.useState(null),[u,v]=m.useState(null),[h,g]=m.useState(!1),[p,f]=m.useState();m.useEffect(()=>En(v),[]);const w=async y=>{try{const S=await wi();o(S),await Si(S)}catch(S){y||f(S instanceof Error?S.message:"Spotify request failed.")}};m.useEffect(()=>{e||(async()=>{const[y,S]=await Promise.all([Dn(),vi()]);if(!S){r({state:"setup",clientId:y});return}r({state:"ready"});const C=await xi();C&&o(C),$n().then(A=>r({state:"ready",name:A.name,id:A.id})).catch(async A=>{r({state:"setup",clientId:y}),f(A instanceof Error?A.message:"Spotify request failed.")}),w(!!C)})()},[e]);const k=async()=>{r({state:"ready"}),f(void 0);try{const y=await $n();r({state:"ready",name:y.name,id:y.id})}catch(y){f(y instanceof Error?y.message:"Spotify request failed.")}w(!1)},E=async()=>{await _e(),await Ei(),o(null),l(null),c(null),r({state:"setup",clientId:await Dn()})},I=async y=>{l(y),f(void 0);const S=await ji(y.id);c(S);try{const C=await Fn(y.id);c(C),await zn(y.id,C)}catch(C){S||f(C instanceof Error?C.message:"Failed to load tracks.")}},D=async()=>{if(!h){g(!0),f(void 0);try{if(a){const y=await Fn(a.id);c(y),await zn(a.id,y)}else await w(!1)}catch(y){f(y instanceof Error?y.message:"Refresh failed.")}finally{g(!1)}}},$=n.state==="ready"?n.id:void 0,q=(s??[]).filter(y=>y.id===fn||$&&y.ownerId===$);return i.jsxs("div",{className:"sidebar",children:[i.jsx("style",{children:Ga}),i.jsxs("div",{className:"header",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"#1db954","aria-hidden":"true",children:i.jsx("path",{d:As})}),i.jsxs("div",{className:"header-text",children:[i.jsx("div",{className:"title",children:"Spotify Player"}),n.state==="ready"&&i.jsx("div",{className:"subtitle",children:n.name?`Connected as ${n.name}`:"Connected"})]}),i.jsx("button",{type:"button",className:"close",title:"Close",onClick:t,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"})})})]}),e?i.jsx(za,{}):n.state==="loading"?null:n.state==="setup"?i.jsx(Ua,{initialClientId:n.clientId,error:p,onConnected:k}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"bar",children:[a?i.jsxs("span",{className:"bar-left",children:[i.jsx("button",{type:"button",className:"link",onClick:()=>{l(null),c(null)},children:"← Playlists"}),i.jsx("span",{className:"crumb-name",children:a.name})]}):i.jsx("span",{className:"bar-left",children:"Playlists"}),i.jsxs("span",{className:"bar-actions",children:[i.jsx("button",{type:"button",className:`icon-btn ${h?"spinning":""}`,title:a?"Refresh tracks":"Refresh playlists",onClick:D,children:i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})}),i.jsx("button",{type:"button",className:"link",onClick:E,children:"Disconnect"})]})]}),p&&i.jsx("div",{className:"warn",children:p}),a?i.jsx(qa,{playlist:a,tracks:d,player:u,addTargets:q}):i.jsx(Ba,{playlists:s,player:u,onOpen:I}),i.jsx(Ka,{player:u,addTargets:q}),i.jsx(Ha,{player:u,addTargets:q})]})]})}function za(){return i.jsxs("div",{className:"lock",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"#1db954","aria-hidden":"true",children:i.jsx("path",{d:As})}),i.jsx("div",{className:"lock-title",children:"Spotify Player is a Pro feature"}),i.jsx("p",{children:"Connect your Spotify, pick a playlist, and the room's YouTube player plays it track by track — automatically."}),i.jsx("p",{children:"Pay once on Buy Me a Coffee with your free4talk.me email."}),i.jsxs("a",{className:"lock-cta",href:dn,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",cn," once"]})]})}function Ua({initialClientId:e,error:t,onConnected:n}){const[r,s]=m.useState(e),[o,a]=m.useState(""),[l,d]=m.useState(!1),[c,u]=m.useState(!1),[v,h]=m.useState();m.useEffect(()=>{ki().then(a)},[]);const g=async()=>{await navigator.clipboard.writeText(o),d(!0),window.setTimeout(()=>d(!1),1500)},p=async()=>{u(!0),h(void 0),await Ti(r);const f=await Ai();u(!1),f.ok?n():h(f.error)};return i.jsxs("div",{className:"wizard",children:[i.jsx("p",{className:"wizard-intro",children:"One-time setup: Spotify requires every user to register their own (free) app."}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-title",children:"1. Create a Spotify app"}),i.jsxs("p",{children:["Open the"," ",i.jsx("a",{href:$a,target:"_blank",rel:"noopener noreferrer",children:"Spotify Developer Dashboard"})," ","→ Create app. Any name works. Under ",i.jsx("b",{children:"Redirect URIs"}),", paste:"]}),i.jsxs("div",{className:"uri-row",children:[i.jsx("code",{children:o||"…"}),i.jsx("button",{type:"button",className:"link",onClick:g,disabled:!o,children:l?"Copied!":"Copy"})]}),i.jsx("p",{className:"hint",children:`Check "Web API", save, and you're done there.`})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-title",children:"2. Paste your Client ID"}),i.jsx("input",{type:"text",value:r,placeholder:"Client ID from your app's settings",onChange:f=>s(f.target.value)})]}),i.jsxs("div",{className:"step",children:[i.jsx("div",{className:"step-title",children:"3. Connect"}),i.jsx("button",{type:"button",className:"cta",disabled:!r.trim()||c,onClick:p,children:c?"Waiting for Spotify…":"Connect Spotify"}),(v??t)&&i.jsx("div",{className:"warn",children:v??t})]})]})}function An({paused:e}){return i.jsxs("span",{className:`waves ${e?"paused":""}`,"aria-label":"playing",children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})}function Ba({playlists:e,player:t,onOpen:n}){return e?e.length?i.jsx("div",{className:"list",children:e.map(r=>{const s=Tn(t)&&t?.playlistId===r.id;return i.jsxs("div",{className:`row ${s?"current":""}`,onClick:()=>n(r),children:[r.image?i.jsx("img",{className:"cover",src:r.image,alt:""}):r.id===fn?i.jsx("div",{className:"cover liked",children:"♥"}):i.jsx("div",{className:"cover placeholder"}),i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:r.name}),s&&i.jsx(An,{paused:t?.status!=="playing"})]}),i.jsxs("div",{className:"row-sub",children:[r.trackCount," tracks",r.owner?` · ${r.owner}`:""]})]})]},r.id)})}):i.jsx("div",{className:"empty",children:"No playlists on this account."}):i.jsx("div",{className:"empty",children:"Loading playlists…"})}function qa({playlist:e,tracks:t,player:n,addTargets:r}){const[s,o]=m.useState(""),a=Tn(n)&&n?.playlistId===e.id,l=s.trim().toLowerCase(),d=(t??[]).map((c,u)=>({track:c,index:u})).filter(({track:c})=>!l||c.name.toLowerCase().includes(l)||c.artist.toLowerCase().includes(l));return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"controls-bar",children:[i.jsx("input",{type:"text",value:s,placeholder:"Search this playlist",onChange:c=>o(c.target.value)}),i.jsxs("button",{type:"button",className:"play-all",disabled:!t?.length,onClick:()=>t&&void Ne(e.id,e.name,t,0),title:"Play all from the top",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M8 5v14l11-7z"})}),"Play all"]})]}),t?d.length?i.jsx("div",{className:"list",children:d.map(({track:c,index:u})=>{const v=a&&n?.index===u,h=a&&n?.skipped.has(u);return i.jsxs("div",{className:`row track ${v?"current":""}`,onClick:()=>{Ne(e.id,e.name,t,u)},title:"Play from here",children:[c.image?i.jsx("img",{className:"art",src:c.image,alt:""}):i.jsx("span",{className:"art num",children:u+1}),i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:c.name}),v&&i.jsx(An,{paused:n?.status!=="playing"})]}),i.jsx("div",{className:"row-sub",children:c.artist})]}),i.jsx("span",{className:"dur",children:h?"skipped":Va(c.durationMs)}),i.jsx(Nn,{track:c,targets:r.filter(g=>g.id!==e.id)})]},`${c.id}-${u}`)})}):i.jsx("div",{className:"empty",children:l?`No tracks match “${s}”.`:"This playlist has no playable tracks."}):i.jsx("div",{className:"empty",children:"Loading tracks…"})]})}function Ha({player:e,addTargets:t}){if(!e||e.status==="idle")return null;const n=e.tracks[e.index],r=()=>{if(e.status==="playing")return void Es();if(e.status==="paused")return void js();ks()};return i.jsxs("div",{className:"now",children:[n&&i.jsxs("div",{className:"now-track",children:[n.image&&i.jsx("img",{className:"art",src:n.image,alt:""}),i.jsxs("div",{className:"row-body",children:[i.jsx("div",{className:"row-title",children:n.name}),i.jsx("div",{className:"row-sub",children:n.artist}),i.jsx("div",{className:"now-matched",title:e.matched?"YouTube video being played":void 0,children:e.matched?`▶ ${e.matched.title} · ${e.matched.channel}`:" "})]}),i.jsx(Nn,{track:n,targets:t})]}),i.jsxs("div",{className:"now-status",children:[e.status==="resolving"&&(e.message??"Searching YouTube…"),e.status==="playing"&&`Playing ${e.index+1} of ${e.tracks.length}`,e.status==="paused"&&`Paused — ${e.index+1} of ${e.tracks.length}`,e.status==="paused-external"&&(e.message??"Paused"),e.status==="stopped"&&(e.message??"Stopped"),e.status==="error"&&(e.message??"Something went wrong.")]}),i.jsxs("div",{className:"controls",children:[i.jsx("button",{type:"button",className:`mode ${e.shuffle?"on":""}`,onClick:Aa,title:e.shuffle?"Shuffle on":"Shuffle off",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"})})}),i.jsx("button",{type:"button",onClick:()=>{La()},title:"Previous track",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"})})}),i.jsx("button",{type:"button",className:"play",onClick:r,disabled:e.status==="resolving",title:e.status==="playing"?"Pause":"Play",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:e.status==="playing"?i.jsx("path",{d:"M6 5h4v14H6zm8 0h4v14h-4z"}):i.jsx("path",{d:"M8 5v14l11-7z"})})}),i.jsx("button",{type:"button",onClick:()=>{Pa()},title:"Next track",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M16 6h2v12h-2zM6 18l8.5-6L6 6z"})})}),i.jsx("button",{type:"button",className:`mode ${e.repeat!=="off"?"on":""}`,onClick:Na,title:e.repeat==="off"?"Repeat off":e.repeat==="all"?"Repeat all":"Repeat one",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:e.repeat==="one"?i.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"}):i.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"})})}),i.jsx("button",{type:"button",className:"stop",onClick:()=>{_e()},title:"Stop playlist",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"13",height:"13",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M6 6h12v12H6z"})})})]})]})}function Ts(e,t){const n=m.useRef(null);return m.useEffect(()=>{if(!e)return;const r=s=>{n.current&&!s.composedPath().includes(n.current)&&t()};return window.addEventListener("pointerdown",r,!0),()=>window.removeEventListener("pointerdown",r,!0)},[e,t]),n}function Ka({player:e,addTargets:t}){const[n,r]=m.useState(!1),[s,o]=m.useState(null),[a,l]=m.useState(null),[d,c]=m.useState(!1),u=e&&Tn(e)?e.tracks[e.index]:void 0,v=e?.playlistId===ar,h=v?s?.seedTrack??u:u,g=h?.id,p=Ts(n,()=>r(!1));if(m.useEffect(()=>{if(!g||!h||s?.seed===g)return;let y=!1;return Ci(h).then(S=>{y||o({seed:g,seedTrack:h,data:S})}).catch(()=>{y||o({seed:g,seedTrack:h,data:null})}),()=>{y=!0}},[g]),!h||h.yt)return null;const f=s&&s.seed===g?s.data:void 0,w=f===void 0,k=f?.source==="artist"?`More from ${h.artist.split(",")[0]}`:"Similar songs",E=a&&a.seed===g?a.tracks:[],I=new Set([h.id,...(f?.tracks??[]).map(y=>y.id),...E.map(y=>y.id)]),D=new Set([h,...f?.tracks??[],...E].map(y=>`${y.name}|${y.artist}`.toLowerCase())),$=!!f?.artistId&&(!a||a.seed!==g||a.hasMore),q=async()=>{if(!(!f?.artistId||!g||d)){c(!0);try{const y=a?.seed===g?a.nextOffset:0,S=await Oi(f.artistId,y),C=S.tracks.filter(A=>{const ye=`${A.name}|${A.artist}`.toLowerCase();return I.has(A.id)||D.has(ye)?!1:(I.add(A.id),D.add(ye),!0)});l({seed:g,tracks:[...E,...C],nextOffset:S.nextOffset,hasMore:S.hasMore})}catch{}finally{c(!1)}}};return i.jsxs("div",{className:"suggest",ref:p,children:[i.jsxs("button",{type:"button",className:"suggest-head",onClick:()=>r(!n),"aria-expanded":n,children:[i.jsx("span",{children:k}),i.jsx("span",{className:`suggest-caret ${n?"open":""}`,children:"▾"})]}),i.jsx("div",{className:`suggest-body ${n?"open":""}`,children:i.jsx("div",{className:"suggest-inner",children:w?i.jsx("div",{className:"suggest-note",children:"Finding songs…"}):f?.tracks.length||E.length?i.jsxs("div",{className:"suggest-list",children:[[...f?.tracks??[],...E].map((y,S,C)=>{const A=v&&u?.id===y.id;return i.jsxs("div",{className:`row track ${A?"current":""}`,onClick:()=>{Ne(ar,k,C,S)},title:"Play from here",children:[y.image?i.jsx("img",{className:"art",src:y.image,alt:""}):i.jsx("span",{className:"art num",children:"♪"}),i.jsxs("div",{className:"row-body",children:[i.jsxs("div",{className:"row-head",children:[i.jsx("span",{className:"row-title",children:y.name}),A&&i.jsx(An,{paused:e?.status!=="playing"})]}),i.jsx("div",{className:"row-sub",children:y.artist})]}),i.jsx(Nn,{track:y,targets:t})]},y.id)}),$&&i.jsx("button",{type:"button",className:"suggest-more",onClick:()=>{q()},disabled:d,children:d?"Loading…":"Load more"})]}):i.jsx("div",{className:"suggest-note",children:"No suggestions found."})})})]})}const fr=190,Qa=244;function Nn({track:e,targets:t}){const[n,r]=m.useState(!1),[s,o]=m.useState({top:0,left:0}),[a,l]=m.useState(),[d,c]=m.useState(!1),u=Ts(n,()=>r(!1));if(m.useEffect(()=>{if(!n)return;const g=()=>r(!1);return window.addEventListener("scroll",g,!0),()=>window.removeEventListener("scroll",g,!0)},[n]),!Ni(e.id)||!t.length)return null;const v=g=>{if(n){r(!1);return}const p=g.currentTarget.getBoundingClientRect(),f=Math.min(t.length*30+34,Qa);let w=p.bottom+4;w+f>window.innerHeight-8&&(w=Math.max(8,p.top-4-f));const k=Math.min(Math.max(8,p.right-fr),window.innerWidth-fr-8);o({top:w,left:k}),r(!0)},h=async g=>{try{await Mi(g,e.id),l(g),window.setTimeout(()=>{l(void 0),r(!1)},1200)}catch{c(!0),window.setTimeout(()=>c(!1),1500)}};return i.jsxs("span",{className:"add-wrap",ref:u,onClick:g=>g.stopPropagation(),children:[i.jsx("button",{type:"button",className:"add-btn",title:"Add to playlist",onClick:v,children:"+"}),n&&i.jsxs("div",{className:"add-menu",style:{top:s.top,left:s.left},children:[i.jsx("div",{className:"add-menu-head",children:"Add to"}),t.map(g=>i.jsxs("button",{type:"button",className:a===g.id?"added":"",onClick:()=>{h(g.id)},children:[g.image?i.jsx("img",{className:"add-cover",src:g.image,alt:""}):g.id===fn?i.jsx("span",{className:"add-cover liked",children:"♥"}):i.jsx("span",{className:"add-cover placeholder"}),i.jsx("span",{className:"add-name",children:a===g.id?"Added ✓":g.name})]},g.id)),d&&i.jsx("div",{className:"add-err",children:"Couldn't add — try again"})]})]})}function Va(e){if(!e)return"";const t=Math.round(e/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const As="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.713 1.115.293.18.386.563.206.857zm1.223-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166A.78.78 0 1 1 6.32 11.3c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .255 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 1 1-.955 1.608z",Ga=`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .sidebar {
    width: 340px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #232a31;
    color: rgba(255, 255, 255, 0.85);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 13px;
    box-shadow: -8px 0 24px rgba(0, 0, 0, 0.35);
    border-right: 1px solid rgba(255, 255, 255, 0.06);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .header-text { flex: 1; min-width: 0; }
  .title { font-size: 13px; font-weight: 600; color: #fff; line-height: 1.25; }
  .subtitle {
    color: rgba(255, 255, 255, 0.45);
    font-size: 10.5px;
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .close {
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    padding: 4px;
  }
  .close:hover { color: #fff; }

  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.55);
    font-size: 12px;
  }
  .bar-left { display: inline-flex; align-items: center; gap: 8px; min-width: 0; }
  .bar-actions { display: inline-flex; align-items: center; gap: 10px; flex: none; }
  .icon-btn {
    display: inline-flex;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.55);
    cursor: pointer;
    padding: 2px;
  }
  .icon-btn:hover { color: #fff; }
  .icon-btn.spinning svg { animation: spin 0.9s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .link {
    border: none;
    background: transparent;
    color: #1db954;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    white-space: nowrap;
  }
  .link:hover { color: #3ddc78; }
  .link:disabled { color: rgba(255, 255, 255, 0.3); cursor: default; }

  .warn {
    padding: 8px 12px;
    background: rgba(250, 173, 20, 0.12);
    color: #faad14;
    font-size: 12px;
    line-height: 1.4;
  }

  .wizard { padding: 12px; overflow-y: auto; }
  .wizard-intro { color: rgba(255, 255, 255, 0.55); font-size: 12px; line-height: 1.5; margin-bottom: 12px; }
  .step { margin-bottom: 16px; }
  .step-title { color: #fff; font-weight: 600; margin-bottom: 6px; }
  .step p { color: rgba(255, 255, 255, 0.65); font-size: 12px; line-height: 1.5; }
  .step a { color: #1db954; }
  .hint { color: rgba(255, 255, 255, 0.4) !important; }
  .uri-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 6px 0;
    padding: 6px 8px;
    background: #1b212a;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
  }
  .uri-row code {
    flex: 1;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.75);
    word-break: break-all;
  }

  input[type="text"] {
    width: 100%;
    appearance: none;
    background: #1b212a;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    padding: 6px 8px;
  }
  input[type="text"]::placeholder { color: rgba(255, 255, 255, 0.35); }
  input:focus-visible, button:focus-visible { outline: none; box-shadow: 0 0 0 2px rgba(29, 185, 84, 0.35); }

  .cta {
    background: #1db954;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    padding: 7px 18px;
  }
  .cta:hover { background: #3ddc78; }
  .cta:disabled { background: rgba(255, 255, 255, 0.15); cursor: default; }

  .crumb-name {
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .controls-bar { display: flex; gap: 8px; padding: 8px 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  .play-all {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
    border: none;
    border-radius: 4px;
    background: #1db954;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 0 10px;
    cursor: pointer;
  }
  .play-all:hover:not(:disabled) { background: #3ddc78; }
  .play-all:disabled { background: rgba(255, 255, 255, 0.12); color: rgba(255, 255, 255, 0.35); cursor: default; }

  .list { flex: 1; overflow-y: auto; padding: 4px 0; }
  .list::-webkit-scrollbar { width: 6px; }
  .list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }

  .row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    cursor: pointer;
  }
  .row:hover { background: rgba(255, 255, 255, 0.03); }
  .row + .row { border-top: 1px solid rgba(255, 255, 255, 0.05); }
  .row.current { background: rgba(29, 185, 84, 0.1); border-left: 2px solid #1db954; }
  .row-body { flex: 1; min-width: 0; }
  .row-head { display: flex; align-items: center; gap: 6px; min-width: 0; }
  .row-title {
    color: #fff;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-sub {
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cover { width: 36px; height: 36px; border-radius: 4px; object-fit: cover; flex: none; }
  .cover.placeholder { background: rgba(255, 255, 255, 0.08); }
  .cover.liked {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #4527a0, #1db954);
    color: #fff;
    font-size: 16px;
  }
  .art {
    width: 28px;
    height: 28px;
    border-radius: 3px;
    object-fit: cover;
    flex: none;
  }
  .art.num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.35);
    font-size: 11px;
  }
  .dur { flex: none; color: rgba(255, 255, 255, 0.35); font-size: 11px; }

  .waves { display: inline-flex; align-items: flex-end; gap: 2px; height: 12px; flex: none; }
  .waves i { width: 2.5px; height: 5px; border-radius: 1px; background: #1db954; animation: wave 1s ease-in-out infinite; }
  .waves i:nth-child(2) { animation-delay: 0.25s; }
  .waves i:nth-child(3) { animation-delay: 0.5s; }
  .waves.paused i { animation-play-state: paused; }
  @keyframes wave { 0%, 100% { height: 4px; } 50% { height: 12px; } }
  @media (prefers-reduced-motion: reduce) { .waves i { animation: none; height: 8px; } }

  /* Suggestions sit on their own tinted layer so the section reads as
     separate from the playlist above and the player below. */
  .suggest {
    flex: none;
    border-top: 1px solid rgba(29, 185, 84, 0.28);
    background: linear-gradient(180deg, rgba(29, 185, 84, 0.07), rgba(29, 185, 84, 0.02) 55%), #1e252c;
  }
  .suggest-head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 9px 12px;
  }
  .suggest-head:hover { color: #fff; }
  .suggest-caret {
    color: #1db954;
    font-size: 12px;
    transform: rotate(-90deg);
    transition: transform 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .suggest-caret.open { transform: rotate(0deg); }
  .suggest-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.28s cubic-bezier(0.22, 0.61, 0.36, 1);
  }
  .suggest-body.open { grid-template-rows: 1fr; }
  .suggest-inner { overflow: hidden; min-height: 0; }
  @media (prefers-reduced-motion: reduce) {
    .suggest-body, .suggest-caret { transition: none; }
  }
  .suggest-list { max-height: 50vh; overflow-y: auto; }
  .suggest-list::-webkit-scrollbar { width: 6px; }
  .suggest-list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }
  .suggest-list .row { padding: 6px 12px; }
  .suggest-note { padding: 0 12px 10px; color: rgba(255, 255, 255, 0.4); font-size: 12px; }
  .suggest-more {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    color: #1db954;
    cursor: pointer;
    font-size: 12px;
    padding: 8px 12px;
    text-align: center;
  }
  .suggest-more:hover { color: #3ddc78; }
  .suggest-more:disabled { color: rgba(255, 255, 255, 0.3); cursor: default; }

  .add-wrap { position: relative; flex: none; }
  .add-btn {
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    font-size: 15px;
    padding: 2px 5px;
  }
  .row .add-btn { opacity: 0; transition: opacity 0.15s ease; }
  .row:hover .add-btn, .now-track .add-btn { opacity: 1; }
  .add-btn:hover { color: #1db954; }
  .add-menu {
    position: fixed;
    z-index: 40;
    width: 190px;
    max-height: 244px;
    overflow-y: auto;
    background: #171c23;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);
    padding: 4px;
  }
  .add-menu::-webkit-scrollbar { width: 5px; }
  .add-menu::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 3px; }
  .add-menu-head {
    color: rgba(255, 255, 255, 0.4);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 5px 8px 4px;
  }
  .add-menu button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    text-align: left;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    font-size: 12px;
    padding: 5px 6px;
  }
  .add-menu button:hover { background: rgba(255, 255, 255, 0.07); color: #fff; }
  .add-menu button.added { color: #1db954; }
  .add-cover { width: 22px; height: 22px; border-radius: 3px; object-fit: cover; flex: none; }
  .add-cover.placeholder { background: rgba(255, 255, 255, 0.08); display: inline-block; }
  .add-cover.liked {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #4527a0, #1db954);
    color: #fff;
    font-size: 11px;
  }
  .add-name { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .add-err { padding: 4px 8px; color: #f5222d; font-size: 11px; }

  .now {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 10px 12px;
    background: #1b212a;
  }
  /* Fixed line heights everywhere so changing song titles never shifts the
     layout — the matched line renders even when empty. */
  .now-track { display: flex; align-items: center; gap: 8px; height: 52px; }
  .now-track .art { width: 36px; height: 36px; }
  .now-track .row-title { line-height: 18px; height: 18px; }
  .now-track .row-sub { line-height: 15px; height: 15px; margin-top: 0; }
  .now-matched {
    color: rgba(255, 255, 255, 0.5);
    font-size: 11px;
    line-height: 15px;
    height: 15px;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .now-status {
    color: rgba(255, 255, 255, 0.45);
    font-size: 11px;
    line-height: 14px;
    height: 14px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .controls { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 10px; }
  .controls button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    padding: 0;
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  .controls button:hover { color: #fff; background: rgba(255, 255, 255, 0.07); }
  .controls button:active { transform: scale(0.94); }
  .controls button:disabled { color: rgba(255, 255, 255, 0.25); background: transparent; cursor: default; }
  .controls .play {
    width: 42px;
    height: 42px;
    background: #1db954;
    color: #fff;
  }
  .controls .play:hover:not(:disabled) { background: #3ddc78; color: #fff; }
  .controls .play:disabled { background: rgba(255, 255, 255, 0.12); }
  .controls .stop { width: 30px; height: 30px; color: rgba(255, 255, 255, 0.45); }
  .controls .mode { width: 30px; height: 30px; color: rgba(255, 255, 255, 0.45); }
  .controls .mode.on { color: #1db954; }
  .controls .mode.on:hover { color: #3ddc78; }

  .empty {
    padding: 18px 14px;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.5;
  }

  .lock {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    padding: 40px 24px;
  }
  .lock-title { color: #fff; font-size: 14px; font-weight: 600; }
  .lock p { color: rgba(255, 255, 255, 0.55); font-size: 12px; line-height: 1.5; }
  .lock-cta {
    margin-top: 6px;
    background: #1db954;
    color: #fff;
    border-radius: 4px;
    font-size: 13px;
    padding: 7px 22px;
    text-decoration: none;
  }
  .lock-cta:hover { background: #3ddc78; }

`,Ze="f4t-spotify-btn",On="f4t-spotify-sidebar",Ya=/^\/room\/([^/]+)\/?$/,Wa='<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.713 1.115.293.18.386.563.206.857zm1.223-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166A.78.78 0 1 1 6.32 11.3c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .255 1.073zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 1 1-.955 1.608z"/></svg>';let Ns=!0;async function Xa(){try{if(await L()===!1)return;Ns=!0}catch(n){}Ns=!0;Cn();let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{Ja(),tl()}catch(n){b.error("spotify: sync failed",n)}}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("resize",t),t()}function Mn(){return Ya.test(window.location.pathname)}function Ja(){const e=document.getElementById(Ze),t=Mn()?ds():null;if(!t){e?.closest(".f4t-chat-col")?.remove(),e?.remove(),ct();return}if(e)return;const n=us({id:Ze,title:"Spotify Player",iconSvg:Wa,onClick:Za});t.insertAdjacentElement("afterend",n)}let ne=null;function Za(e){e.stopPropagation(),ne?ct():el()}function el(){if(!Mn()||ne)return;const e=document.createElement("div");e.id=On,e.style.cssText="position: fixed; top: 0; bottom: 0; z-index: 1030;",st(e,Ze),document.body.append(e);const t=e.attachShadow({mode:"open"}),n=document.createElement("div");n.style.height="100%",t.append(n),ne=me.createRoot(n),ne.render(m.createElement(Fa,{locked:!1,onClose:ct}))}function ct(){ne&&(ne.unmount(),ne=null,document.getElementById(On)?.remove())}function tl(){const e=document.getElementById(On);if(e){if(!Mn()){ct();return}st(e,Ze)}}const nl="YouTube tab",rl=1e3,sl=15e3,Ke=["resolving","playing","paused","paused-external"],W={connected:!1,locked:!1},Gt=new Set;let R=null,Oe=null,fe=0,B,Yt="";function Rn(e){Object.assign(W,e),Gt.forEach(t=>t({...W}))}function il(e){return Gt.add(e),e({...W}),()=>Gt.delete(e)}function dt(e){try{chrome.runtime.sendMessage(e).catch(t=>b.warn("remote: message failed",t))}catch(t){b.warn("remote: extension unavailable",t)}}async function ol(){let e=!1;try{e=ae(await le())}catch(t){b.warn("remote: role check failed",t)}return Rn({locked:!e}),e&&dt({type:z.open}),e}function al(e){return{id:`yt:${e.videoId}`,name:e.title,artist:e.channel,durationMs:0,image:e.thumbnail,yt:e}}function ll(e){window.clearTimeout(B),B=void 0,R?.playlistId&&R.playlistId!==H&&Ke.includes(R.status)&&(Oe={id:R.playlistId,name:R.playlistName??"",tracks:R.tracks,index:R.index}),Ne(H,nl,[al(e)],0,cl)}function cl({skipped:e}){if(fe=e?fe+1:0,Ii({connected:W.connected,skipStreak:fe,hasSaved:!!Oe})==="next"){dt({type:z.ended}),B=window.setTimeout(et,sl),In();return}et(fe>=Un?`Stopped — ${Un} videos in a row couldn't play in the room.`:void 0)}function et(e){if(window.clearTimeout(B),B=void 0,fe=0,R?.playlistId!==H)return;const t=Oe;Oe=null,t?Ne(t.id,t.name,t.tracks,t.index):Da(e)}function dl(e){if(e?.playlistId!==H)return{state:"idle"};const t=e.tracks[0]?.name,n=e.tracks[0]?.yt?.videoId;if(B!==void 0)return{state:"waiting",title:t,videoId:n,note:e.message??"Opening YouTube's next video…"};switch(e.status){case"resolving":return{state:"starting",title:t,videoId:n};case"playing":return{state:"playing",title:t,videoId:n};case"paused":return{state:"paused",title:t,videoId:n};case"paused-external":return{state:"note",title:t,videoId:n,note:"Someone else is playing in the room."};default:return e.message?{state:"note",title:t,videoId:n,note:e.message}:{state:"idle"}}}function In(){if(!W.connected)return;const e=dl(R),t=JSON.stringify(e);t!==Yt&&(Yt=t,dt({type:z.status,status:e}))}function hr(e){if(e!==W.connected){if(Yt="",Rn(e?{connected:!0,locked:!1}:{connected:!1}),e)return In();B!==void 0&&et()}}let pr=!1;async function ul(){if(pr)return;pr=!0;try{if(!await L())return}catch(t){b.error("remote: failed to read extension state",t);return}Cn(),En(t=>{R=t,t.playlistId!==H&&(Oe=null,fe=0,window.clearTimeout(B),B=void 0);const n=t.playlistId===H&&Ke.includes(t.status)?t.tracks[0]?.name:void 0;n!==W.title&&Rn({title:n}),In()}),chrome.runtime.onMessage.addListener((t,n,r)=>{if(t?.type===z.play)Ri(t.item)&&ll(t.item);else if(t?.type===z.control)R?.playlistId===H&&(t.action==="pause"?Es():js()).catch(()=>{});else if(t?.type===z.seek){const s=R?.playlistId===H&&Ke.includes(R.status)?R.tracks[0]?.yt?.videoId:void 0;s&&s===t.videoId&&typeof t.seconds=="number"&&Cs(t.seconds).catch(()=>{})}else if(t?.type===z.noNext)B!==void 0&&et();else if(t?.type===z.state)hr(t.connected===!0);else if(t?.type!==z.ping)return!1;return r({ok:!0}),!1}),document.addEventListener("click",t=>{t.target?.closest?.(".youtube > .actions .ant-btn-danger")&&R?.playlistId===H&&Ke.includes(R.status)&&_e()},!0);let e=Y();window.setInterval(()=>{const t=Y();t!==e&&(e=t,W.connected&&dt({type:z.disconnect}))},rl);try{const t=await chrome.runtime.sendMessage({type:z.roomHello});hr(t?.connected===!0)}catch(t){b.warn("remote: hello failed",t)}}const fl="https://sponsor.ajay.app/api/skipSegments",hl=1,pl=.5;async function ml(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t).slice(0,2)].map(n=>n.toString(16).padStart(2,"0")).join("")}function gl(e){return`${fl}/${e}?categories=${encodeURIComponent('["music_offtopic"]')}`}function yl(e,t){if(!Array.isArray(e))return[];const n=e.find(r=>r?.videoID===t);return(Array.isArray(n?.segments)?n.segments:[]).filter(r=>r?.category==="music_offtopic"&&r.actionType==="skip"&&Array.isArray(r.segment)).map(r=>({start:Number(r.segment[0]),end:Number(r.segment[1])})).filter(r=>Number.isFinite(r.start)&&Number.isFinite(r.end)&&r.end-r.start>=hl).sort((r,s)=>r.start-s.start)}function bl(e,t,n){const r=e.findIndex((s,o)=>!n.has(o)&&t>=s.start&&t<s.end-pl);return r>=0?r:void 0}const tt={enabled:!1},Wt=new Set,mr=new Map;let gt,gr=0,yt=new Set;function Os(e){Object.assign(tt,e),Wt.forEach(t=>t({...tt}))}function vl(e){return Wt.add(e),e({...tt}),()=>Wt.delete(e)}function xl(e){Os({enabled:e});try{chrome.storage.sync.set({[Nt]:e})}catch(t){b.warn("skip: couldn't save the setting",t)}}function wl(e){let t=mr.get(e);return t||(t=(async()=>{try{const n=await fetch(gl(await ml(e)));return n.ok?yl(await n.json(),e):[]}catch(n){return b.warn("skip: SponsorBlock lookup failed",n),[]}})(),mr.set(e,t)),t}async function Sl(e,t){(e!==gt||t<2&&gr>10)&&(gt=e,yt=new Set),gr=t;const n=await wl(e);if(e!==gt)return;const r=bl(n,t,yt);if(r!==void 0){yt.add(r);try{await Cs(n[r].end)}catch(s){b.warn("skip: seek failed",s)}}}let yr=!1;async function kl(){if(!yr){yr=!0;try{if(!await L())return;const e=await chrome.storage.sync.get(Nt);Os({enabled:e[Nt]===!0})}catch(e){b.error("skip: setup failed",e);return}Cn(),window.addEventListener("message",e=>{const t=e.data;e.source!==window||t?.ns!==un||t.dir!=="event"||t.event!=="time"||tt.enabled&&typeof t.time=="number"&&typeof t.videoId=="string"&&Sl(t.videoId,t.time)})}}function El(){const[e,t]=m.useState(null),[n,r]=m.useState(null),[s,o]=m.useState(!1);m.useEffect(()=>il(t),[]),m.useEffect(()=>vl(r),[]),m.useEffect(()=>En(h=>o(h.repeat==="one")),[]);const a=!!e?.connected;let l="Play from YouTube",d="Pick and queue songs on YouTube; they play here";e?.title?l=d=`Playing: ${e.title}`:a&&(l="Your YouTube tab",d="Connected — open a video there to play it here");const c=!!n?.enabled,u=`Skip non-music parts: ${c?"on":"off"} — intros, outros & talk in videos you start (data: SponsorBlock)`,v=`Repeat this song: ${s?"on":"off"} — plays it again when it ends`;return i.jsxs("div",{className:"bar",children:[i.jsx("style",{children:Tl}),i.jsxs("div",{className:"row",children:[i.jsxs("button",{type:"button",className:`remote ${a?"on":""}`,onClick:()=>{ol()},title:`${a?"Switch to your YouTube tab":"Open a YouTube tab connected to this room"}
${d}`,children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.67.13 3.27.4 4.8a2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77c.27-1.53.4-3.13.4-4.8s-.13-3.27-.4-4.8zM10 15V9l5.2 3L10 15z"})}),i.jsx("span",{className:"remote-label",children:l})]}),i.jsx("button",{type:"button",className:`toggle ${c?"on":""}`,"aria-pressed":c,"aria-label":"Skip non-music parts",title:u,onClick:()=>xl(!c),children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"})})}),i.jsx("button",{type:"button",className:`toggle ${s?"on":""}`,"aria-pressed":s,"aria-label":"Repeat this song",title:v,onClick:()=>ws(s?"off":"one"),children:i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"})})})]}),e?.locked&&i.jsxs("div",{className:"note",children:["Playing from your YouTube tab is a Pro feature. Pay once on Buy Me a Coffee with your free4talk.me email."," ",i.jsxs("a",{href:dn,target:"_blank",rel:"noopener noreferrer",children:["Get Pro — ",cn," once"]})]})]})}const be="#1890ff",jl="rgba(255, 255, 255, 0.12)",Cl="rgba(255, 255, 255, 0.14)",Tl=`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  /* 10px sides: the site insets its search box, controls and results by 10px. */
  .bar {
    display: flex; flex-direction: column; gap: 6px; padding: 6px 10px 8px; border-bottom: 1px solid ${jl};
    color: #d3d3d3; font-family: -apple-system, system-ui, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 12px;
  }
  button { font: inherit; color: inherit; background: none; border: none; cursor: pointer; }
  button:focus-visible { outline: 2px solid ${be}; outline-offset: 1px; }
  .row { display: flex; align-items: center; gap: 6px; }
  .remote, .toggle {
    height: 30px; border-radius: 6px; border: 1px solid ${Cl}; transition: border-color 0.2s, background 0.2s, color 0.2s;
  }
  .remote:hover, .toggle:hover { border-color: ${be}; }
  .remote.on, .toggle.on { border-color: ${be}; background: rgba(24, 144, 255, 0.12); }
  .remote { flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; padding: 0 10px; text-align: left; }
  .remote svg { flex: none; color: #ff4e45; }
  .remote-label { min-width: 0; color: #fff; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .toggle { flex: none; width: 30px; display: grid; place-items: center; color: #aaa; }
  .toggle.on { color: ${be}; }
  .note { color: #aaa; }
  .note a { color: ${be}; }
`,br="f4t-yt-bar";let Ue=null;function Al(){const e=document.querySelector(".youtube > .actions")?.parentElement??null,t=document.getElementById(br);if(t&&e||(Ue?.unmount(),Ue=null,t?.remove(),!e))return;const n=e.querySelector(".ant-divider")??e.querySelector(".actions");if(!n)return;const r=document.createElement("div");r.id=br,n.insertAdjacentElement("afterend",r);const s=document.createElement("div");r.attachShadow({mode:"open"}).append(s),Ue=me.createRoot(s),Ue.render(m.createElement(El))}let vr=!1;async function Nl(){if(vr)return;vr=!0;try{if(!await L())return}catch(n){b.error("yt bar: failed to read extension state",n);return}let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{Al()}catch(n){b.error("yt bar: sync failed",n)}}))};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()}const ut=e=>({since:e,seen:new Set,members:new Map});function Ms(e,t,n,r){const s=[];for(const o of e)if(!(o.rid!==t||o.time<n.since||n.seen.has(o.id))){n.seen.add(o.id);for(const a of o.systems??[]){const l=a.client?.id,d=a.client?.name;if(!l||!d||l===o.myselfId)continue;const c=n.members.get(l);if(a.kind==="typography:leave")n.members.set(l,{greetedAt:c?.greetedAt??0,leftAt:o.time});else{if(a.kind!=="typography:join")continue;c?r>0&&o.time-(c.leftAt??c.greetedAt)>=r&&(n.members.set(l,{greetedAt:o.time}),s.push({id:l,name:d,back:!0})):(n.members.set(l,{greetedAt:o.time}),s.push({id:l,name:d,back:!1}))}}}return s}const Rs=(e,t)=>e==="all"||e.split(",").some(t);function Ol(e,t){return Rs(e,n=>n===t)}function Ml(e,t){return Rs(e,n=>n==="friend"&&t?.friend||n==="following"&&t?.following||!1)}function Rl(e,t){const n=t.map(r=>`\`@${r.replace(/`/g,"")}\``).join(" ");return e.includes("{name}")?e.replaceAll("{name}",n):`${n} ${e}`}const Il=1e3,_l=2e3,Pl=2e3,Ll=3e4,Dl=".input-send-box textarea",$l=".input-send-box button",Fl=2e3,Is={enabled:!1,message:ui,delaySeconds:di,againMinutes:ci,againMessage:li,rooms:ai,who:oi},U={...Is},Xt={enabled:ii,message:si,delaySeconds:ri,againMinutes:ni,againMessage:ti,rooms:ei,who:Zs};let Be,xr=ut(0),bt=null,re=[],nt,_n={role:"none",members:[]};async function zl(){try{if(!await L()||!ae(await le()))return;wr(await chrome.storage.sync.get(Object.values(Xt)))}catch(n){b.error("welcome: failed to read settings",n);return}chrome.storage.onChanged.addListener((n,r)=>{r==="sync"&&wr(Object.fromEntries(Object.entries(n).map(([s,o])=>[s,o.newValue])))});let e=!1;window.addEventListener("message",n=>{const r=n.data;n.source!==window||r?.ns!==ke||r.dir!=="event"||r.event!=="room"||!r.state||(e=!0,_n=r.state)});const t=()=>{e||(window.postMessage({ns:ke,dir:"cmd",cmd:"hello"},window.location.origin),window.setTimeout(t,Fl))};t(),window.setInterval(Ul,Il)}function wr(e){for(const t of Object.keys(Xt)){const n=Xt[t];if(!(n in e))continue;const r=e[n],s=Is[t];U[t]=typeof r==typeof s?r:s}}function Ul(){try{const e=Y();if(e!==Be&&(Be=e,xr=ut(Date.now()),re=[],bt=null),!Be)return;const t=localStorage.getItem(ie);if(t===bt)return;bt=t;const n=Q(t);if(!n)return;const r=U.againMessage.trim()?U.againMinutes*6e4:0,s=Ms(n.data,Be,xr,r);if(!U.enabled||!U.message.trim()||!Ol(U.rooms,_n.role))return;for(const o of s)Bl(o)}catch(e){b.error("welcome: tick failed",e)}}function Bl(e){re.push({...e,due:Date.now()+U.delaySeconds*1e3}),Jt()}function Jt(){nt===void 0&&re.length&&(nt=window.setTimeout(_s,re[0].due-Date.now()))}function _s(){nt=void 0;const e=Date.now()+_l,t=re.filter(s=>s.due<=e);if(!t.length)return Jt();const n=document.querySelector(Dl),r=document.querySelector($l);if(!n||!r)b.warn("welcome: chat box not open, greeting skipped",t);else if(n.value.trim()){if(Date.now()-t[0].due<Ll){nt=window.setTimeout(_s,Pl);return}}else{const s=t.filter(o=>{const a=_n.members.find(l=>l.id===o.id);return a!==void 0&&Ml(U.who,a)});for(const o of[!1,!0]){const a=s.filter(l=>l.back===o).map(l=>l.name);a.length&&ql(n,r,Rl(o?U.againMessage:U.message,a))}}re=re.filter(s=>s.due>e),Jt()}function ql(e,t,n){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value")?.set?.call(e,n),e.dispatchEvent(new Event("input",{bubbles:!0})),t.click()}const Hl=50,Sr="🗑 (deleted) ";function Ps(e){const t=e;return!!(t&&typeof t._id=="string"&&typeof t.chatId=="string"&&t.chatId.startsWith("pm:")&&Number.isFinite(t.time))}const kr=e=>!!(e.content&&Object.keys(e.content).length);function Kl(e,t){const n=new Map(e.map(r=>[r._id,r]));for(const r of t){if(r.f4tArchived)continue;const s=n.get(r._id);r.state==="deleted"&&!kr(r)&&s&&kr(s)?n.set(r._id,{...s,state:"deleted",deleted:!0}):n.set(r._id,r)}return[...n.values()].sort((r,s)=>r.time-s.time)}function Ql(e,t,n=Hl){return e.filter(r=>r.time<t).slice(-n)}function Ls(e,t){const n=e.viewers?.includes(t)?e.viewers:[...e.viewers??[],t],r={...e,viewers:n,f4tArchived:!0};if(!e.deleted)return r;const{deleted:s,state:o,...a}=r,l=e.content?.text;return{...a,content:{...e.content,text:typeof l=="string"?Sr+l:Sr.trim()}}}const Vl=1e3,Gl=2e3,Yl=30,Ds=1200,$s=40,Wl=".react-container",Er=".loading-more";let Me;const V=new Map,vt=new Map,Qe=new Set;let Zt;const Fs=new Map,en=new Map,jr=new WeakSet,tn=new Set;async function zs(e){const t=V.get(e);if(t)return t;let n=vt.get(e);n||(n=(async()=>{try{const s=await se((await xn(vn,"readonly")).get(e));return Array.isArray(s?.messages)?s.messages.filter(Ps):[]}catch(s){return b.warn("dm history: read failed",s),[]}})(),vt.set(e,n));const r=await n;return vt.delete(e),V.has(e)||V.set(e,r),V.get(e)}async function Cr(e,t){await zs(e),V.set(e,Kl(V.get(e)??[],t)),Qe.add(e),Zt??=window.setTimeout(()=>{Us()},Vl)}async function Us(){window.clearTimeout(Zt),Zt=void 0;const e=[...Qe];if(Qe.clear(),!!e.length)try{const t=await xn(vn,"readwrite");await Promise.all(e.map(n=>se(t.put({messages:V.get(n)??[],savedAt:Date.now()},n))))}catch(t){b.error("dm history: save failed",t),e.forEach(n=>Qe.add(n))}}function Pn(e,t,n){window.postMessage({ns:Hr,dir:"cmd",cmd:e,chatId:t,messages:n},window.location.origin)}function Xl(e,t){if(!Me)return;const n=V.get(e)??[],r=t.filter(s=>s.state==="deleted"&&!Object.keys(s.content??{}).length).map(s=>n.find(o=>o._id===s._id&&o.deleted)).filter(s=>!!s).map(s=>Ls(s,Me));r.length&&Pn("patch",e,r)}function Jl(e){return e?(document.querySelector(`[data-message-id="${CSS.escape(e)}"]`)??document.getElementById(e))?.closest(Wl)??null:null}const Zl=e=>!!(e.querySelector(Er)??e.parentElement?.querySelector(Er));function Bs(e){window.clearTimeout(en.get(e)),en.set(e,window.setTimeout(()=>{nc(e)},Ds))}function ec(e,t){if(e.dataset.f4tChat=t,jr.has(e))return;jr.add(e);const n=()=>{const r=e.dataset.f4tChat;!r||e.scrollTop>$s||(tn.delete(r),Bs(r))};e.addEventListener("scroll",n,{passive:!0}),e.addEventListener("wheel",r=>r.deltaY<0&&n(),{passive:!0})}function tc(e){const t=e.querySelector("[data-message-id]")?.getAttribute("data-message-id");if(!t)return;const n=()=>e.querySelector(`[data-message-id="${CSS.escape(t)}"]`),r=n()?.getBoundingClientRect().top??0,s=new MutationObserver(()=>{const o=n()?.getBoundingClientRect().top;o===void 0||o===r||(s.disconnect(),e.scrollTop+=o-r)});s.observe(e,{childList:!0,subtree:!0}),window.setTimeout(()=>s.disconnect(),3e3)}async function nc(e){en.delete(e);const t=Fs.get(e);if(!t||!Me)return;const n=Jl(t.newestId);if(n&&ec(n,e),tn.has(e)||Date.now()-t.changedAt<Ds-100||t.total&&(!n||n.scrollTop>$s||Zl(n)))return;const r=Ql(await zs(e),t.oldest);r.length&&(n&&tc(n),tn.add(e),Pn("inject",e,r.map(s=>Ls(s,Me))))}function rc(e){if(typeof e.myId=="string"&&e.myId&&(Me=e.myId),!Array.isArray(e.messages))return;const t=e.messages.filter(Ps);if(e.event==="chat"&&typeof e.chatId=="string"){const n=e.chatId;Fs.set(n,{total:typeof e.total=="number"?e.total:t.length,oldest:typeof e.oldest=="number"?e.oldest:1/0,newestId:typeof e.newestId=="string"?e.newestId:void 0,changedAt:Date.now()}),Cr(n,t).then(()=>Xl(n,t)),Bs(n)}else if(e.event==="last")for(const n of t)Cr(n.chatId,[n])}let Tr=!1,Ar=!1;async function sc(){if(Ar)return;Ar=!0;try{if(!await L()||!ae(await le()))return}catch(n){b.error("dm history: setup failed",n);return}window.addEventListener("message",n=>{const r=n.data;if(!(n.source!==window||r?.ns!==Hr||r.dir!=="event")){Tr=!0;try{rc(r)}catch(s){b.warn("dm history: event failed",s)}}}),window.addEventListener("pagehide",()=>{Us()});let e=0;const t=()=>{Tr||++e>Yl||(Pn("hello"),window.setTimeout(t,Gl))};t()}const ic=2e3,oc=6e4,j={enabled:!1,asCoOwner:!1,remember:!1,unverified:!1,nonSocial:!1,bots:!1,list:[]},M={enabled:yi,asCoOwner:gi,remember:mi,unverified:pi,nonSocial:hi,bots:fi,list:de};let Re=!1,nn=[],qe=0,Se;const qs=new Set;async function ac(){try{if(!await L())return;Re=ae(await le()),Nr(await chrome.storage.sync.get(Object.values(M)))}catch(s){b.error("auto kick: failed to read settings",s);return}let e=!1,t=!1;const n=()=>{e||(window.postMessage({ns:ke,dir:"cmd",cmd:"hello"},window.location.origin),window.setTimeout(n,ic))},r=()=>{t||!(Re||j.bots)||(t=!0,n())};chrome.storage.onChanged.addListener((s,o)=>{o==="sync"&&(Nr(Object.fromEntries(Object.entries(s).map(([a,l])=>[a,l.newValue]))),r(),rn())}),window.addEventListener("message",s=>{const o=s.data;if(!(s.source!==window||o?.ns!==ke||o.dir!=="event")){if(o.event==="kicked"){if(typeof o.id!="string"||!Ys.test(o.id))return;for(const a of Se?.members??[])a.id===o.id&&qs.add(a.pid);lc(o.id,typeof o.name=="string"?o.name:void 0);return}o.event!=="room"||!Array.isArray(o.state?.members)||(e=!0,Se=o.state,rn())}}),r()}function Nr(e){M.enabled in e&&(j.enabled=e[M.enabled]===!0),M.asCoOwner in e&&(j.asCoOwner=e[M.asCoOwner]===!0),M.remember in e&&(j.remember=e[M.remember]===!0),M.unverified in e&&(j.unverified=e[M.unverified]===!0),M.nonSocial in e&&(j.nonSocial=e[M.nonSocial]===!0),M.bots in e&&(j.bots=e[M.bots]===!0),M.list in e&&(j.list=At(e[M.list]))}function rn(){if(!Se)return;j.bots&&Se.role!=="none"&&cc();const e=Re&&j.enabled,t=e?j.list:[],n=j.bots?[...t,...nn]:t,r={asCoOwner:Re&&j.asCoOwner,unverified:e&&j.unverified,nonSocial:e&&j.nonSocial};try{for(const{pid:s,id:o,name:a}of Xs(Se,n,r,qs))window.postMessage({ns:ke,dir:"cmd",cmd:"kick",pid:s,id:o},window.location.origin),b.log(`auto kick: kicked ${a??"(no name)"} (${o})`)}catch(s){b.warn("auto kick: evaluate failed",s)}}function lc(e,t){if(!Re||!j.enabled||!j.remember)return;const n=Ws(j.list,{id:e,name:t});n!==j.list&&(j.list=n,chrome.storage.sync.set({[M.list]:n}).catch(r=>b.warn("auto kick: failed to remember",r)),b.log(`auto kick: remembered ${t??"(no name)"} (${e})`))}function cc(){Date.now()-qe<Ln||(qe=Date.now(),Js().then(e=>{nn=e.bots,qe=e.fetchedAt,b.log(`auto kick: ${nn.length} spam bots on the kick list, fetched ${new Date(e.fetchedAt).toLocaleTimeString()}`),rn()}).catch(e=>{qe=Date.now()-Ln+oc,b.warn("auto kick: couldn't fetch the spam bot list",e)}))}function dc(e){const t=Math.max(0,Math.floor(e/1e3)),n=s=>String(s).padStart(2,"0"),r=Math.floor(t/3600);return r>0?`${r}:${n(Math.floor(t/60)%60)}:${n(t%60)}`:`${Math.floor(t/60)}:${n(t%60)}`}function uc({subscribe:e}){const[t,n]=m.useState(null),[r,s]=m.useState(()=>Date.now());if(m.useEffect(()=>e(n),[e]),m.useEffect(()=>{const a=window.setInterval(()=>s(Date.now()),1e3);return()=>window.clearInterval(a)},[]),!t)return null;const o=t.createdAt===void 0;return i.jsxs("span",{className:"talk-timer",title:o?"Time since you joined":"How long this room has been open",children:[i.jsx("style",{children:fc}),i.jsx("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"currentColor","aria-hidden":"true",children:i.jsx("path",{d:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-13h-2v6l5 3 1-1.73-4-2.37V7z"})}),i.jsx("span",{className:"t",children:dc(r-(t.createdAt??t.joinedAt))})]})}const fc=`
  .talk-timer { display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-sizing: border-box; height: var(--f4t-ctl-h, 40px); padding: 0 12px; border: var(--f4t-ctl-border, 1px solid rgba(255,255,255,0.12)); border-radius: var(--f4t-ctl-radius, 8px); background: var(--f4t-ctl-bg, transparent); color: var(--f4t-ctl-color, #e6e6e6); font-family: inherit; opacity: 0.9; cursor: default; user-select: none; }
  .talk-timer .t { font-variant-numeric: tabular-nums; font-feature-settings: "tnum"; font-size: 13px; letter-spacing: 0.02em; }
`,Or="f4t-talk-btn";let Mr=!1,sn=!0,J=null;const on=new Set;function Rr(){for(const e of on)e(J)}function hc(e){return on.add(e),e(J),()=>{on.delete(e)}}let xt,wt=Date.now();function Ir(e){try{window.postMessage({ns:qr,dir:"cmd",...e},window.location.origin)}catch(t){b.warn("talk time: couldn't message the page",t)}}let Hs=!1;function pc(e){const t=e.data;if(!(e.source!==window||t?.ns!==qr||t.dir!=="event"))if(Hs=!0,t.event==="talk"){const n=typeof t.rid=="string"?t.rid:void 0;n!==xt&&(xt=n,wt=Date.now());const r=typeof t.createdAt=="number"?t.createdAt:void 0;if(J&&J.createdAt===r&&J.joinedAt===wt)return;J={createdAt:r,joinedAt:wt},Rr()}else t.event==="room-left"&&(xt=void 0,J=null,Rr())}let St=null;function mc(){const e=Array.from(document.querySelectorAll(".blind")).find(r=>/hang up this call/i.test(r.textContent||""));if(!e)return null;const t=e.closest("button")?.parentElement?.parentElement;if(t&&t.querySelectorAll(".blind").length>=3)return t;let n=e.parentElement;for(;n&&n!==document.body;){if(n.querySelectorAll(".blind").length>=3)return n;n=n.parentElement}return null}function gc(e,t){try{const n=Array.from(t.querySelectorAll("button")),r=n.find(o=>{const a=getComputedStyle(o).backgroundColor.match(/\d+/g);if(!a)return!0;const[l,d,c]=a.map(Number);return!(c>l+25&&c>d+25)})??n[0];if(!r)return;const s=getComputedStyle(r);e.style.setProperty("--f4t-ctl-h",s.height),e.style.setProperty("--f4t-ctl-radius",s.borderTopLeftRadius),e.style.setProperty("--f4t-ctl-border",`${s.borderTopWidth} ${s.borderTopStyle} ${s.borderTopColor}`),e.style.setProperty("--f4t-ctl-bg",s.backgroundColor),e.style.setProperty("--f4t-ctl-color",s.color)}catch{}}function yc(e,t){const n=document.createElement("div");e.attachShadow({mode:"open"}).append(n);const r=me.createRoot(n);return r.render(t),r}function bc(){const e=sn?mc():null;let t=document.getElementById(Or);if(!e){t&&(St?.unmount(),St=null,t.remove());return}t?t.parentElement!==e&&e.append(t):(t=document.createElement("div"),t.id=Or,t.style.display="inline-flex",t.style.alignItems="center",e.append(t),St=yc(t,m.createElement(uc,{subscribe:hc}))),gc(t,e)}async function vc(){if(Mr)return;Mr=!0;try{if(!await L())return}catch(r){b.error("talk time: failed to read extension state",r);return}try{sn=(await chrome.storage.sync.get(De))[De]!==!1}catch{}window.addEventListener("message",pc),Ir({cmd:"hello"});const e=window.setInterval(()=>{if(Hs)return window.clearInterval(e);Ir({cmd:"hello"})},2e3);let t=!1;const n=()=>{t||(t=!0,requestAnimationFrame(()=>{t=!1;try{bc()}catch(r){b.error("talk time: mount sync failed",r)}}))};chrome.storage.onChanged.addListener((r,s)=>{s!=="sync"||!(De in r)||(sn=r[De].newValue!==!1,n())}),new MutationObserver(n).observe(document.body,{childList:!0,subtree:!0}),n()}const xc=(function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"})(),wc=function(e){return"/"+e},_r={},Sc=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let d=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=d(n.map(c=>{if(c=wc(c),c in _r)return;_r[c]=!0;const u=c.endsWith(".css"),v=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${v}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":xc,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((g,p)=>{h.addEventListener("load",g),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},kc="f4t-game-launcher",Ks='<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="#fff"/></svg>',Ec='<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="38 13"/></svg>';let Pr=!1,an=!0,kt=!1,ve=null;function jc(e){return e?144:16}function Cc(e){return e.querySelector('div.group-list [id^="group-"]')!==null&&e.querySelector(".lang-tag")!==null}function Tc(e=3e3){return new Promise(t=>{const n=Date.now(),r=()=>{if(Cc(document)||Date.now()-n>=e)return t();window.setTimeout(r,100)};r()})}function Ac(){const e=document.createElement("button");return e.id=kc,e.type="button",e.className="scrolling-effect",e.setAttribute("aria-label","Play Lobby Rumble"),e.title="Lobby Rumble",e.style.cssText="position: fixed; right: 16px; bottom: 16px; width: 50px; height: 50px; border-radius: 50%; border: 0; padding: 0; z-index: 10; background: #1890ff; cursor: pointer; display: flex; align-items: center; justify-content: center",e.innerHTML=Ks,e.addEventListener("click",()=>{Nc(e)}),e}async function Nc(e){if(!kt){kt=!0,e.blur(),e.innerHTML=Ec,e.firstElementChild?.animate([{transform:"rotate(0deg)"},{transform:"rotate(360deg)"}],{duration:800,iterations:1/0});try{await Tc();const{startGame:t}=await Sc(async()=>{const{startGame:n}=await import("./main-PWpBs9g2.js");return{startGame:n}},[]);await t()}catch(t){b.error("game: start failed",t)}finally{e.innerHTML=Ks,kt=!1}}}function Oc(){if(!(an&&location.pathname==="/"&&document.querySelector("header.ant-layout-header")!==null)){ve?.remove();return}ve??=Ac(),ve.isConnected||document.body.append(ve),ve.style.bottom=`${jc(document.getElementById("friend-widget")!==null)}px`}async function Mc(){if(Pr)return;Pr=!0;try{if(!await L())return}catch(n){b.error("game: failed to read extension state",n);return}try{an=(await chrome.storage.sync.get($e))[$e]!==!1}catch{}let e=!1;const t=()=>{e||(e=!0,requestAnimationFrame(()=>{e=!1;try{Oc()}catch(n){b.error("game: launcher sync failed",n)}}))};chrome.storage.onChanged.addListener((n,r)=>{r!=="sync"||!($e in n)||(an=n[$e].newValue!==!1,t())}),new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("popstate",t),t()}const Rc=1e3;let He,Lr=ut(0),Et=null,Dr=!1;async function Ic(){if(!Dr){Dr=!0;try{if(!await L())return}catch(e){b.error("room join watch: failed to read state",e);return}window.setInterval(_c,Rc)}}function _c(){try{const e=Y();if(e!==He&&(He=e,Lr=ut(Date.now()),Et=null),!He)return;const t=localStorage.getItem(ie);if(t===Et)return;Et=t;const n=Q(t);n&&Ms(n.data,He,Lr,0).length&&chrome.runtime.sendMessage({type:"f4t:room-joined"}).catch(()=>{})}catch(e){b.error("room join watch: tick failed",e)}}No();const Pc=2e3,Lc=".basic-detail",$r=new WeakMap;function Dc(e,t){e.dataset.f4tResize!=="1"&&(e.dataset.f4tResize="1",e.style.overflow="hidden",e.style.height="0px",e.style.transition="height 320ms cubic-bezier(0.22, 0.61, 0.36, 1)",new ResizeObserver(()=>{e.style.height=`${t.offsetHeight}px`}).observe(t))}function $c(e){bn();const t=e.closest(".ant-modal");t&&t.classList.add(xe)}function Fc(e,t){$c(e);let n=e.querySelector(`#${Te}`);n||(n=document.createElement("div"),n.id=Te,n.dataset.free4talkUserId=t.id,e.append(n));const r=$r.get(n);if(r&&n.dataset.free4talkUserId===t.id)return;n.dataset.free4talkUserId=t.id;const s=n.shadowRoot??n.attachShadow({mode:"open"});if(!s.querySelector("style")){const l=document.createElement("style");l.textContent=is,s.append(l)}let o=s.querySelector("#react-root");o||(o=document.createElement("div"),o.id="react-root",s.append(o)),Dc(n,o);const a=r??me.createRoot(o);$r.set(n,a),a.render(i.jsx(es,{client:os,children:i.jsx(ns,{user:t})}))}const zc="https://www.free4talk.me/tracker/user";function Uc(e,t){const n=Bc(e,t.name);if(!n)return;const r=`${zc}/${t.id}`,s=n.querySelector(`.${we}`);if(s){s.href!==r&&(s.href=r);return}const o=document.createElement("a");o.className=we,o.href=r,o.target="_blank",o.rel="noopener noreferrer",o.title="View profile on free4talk.me tracker",o.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 3H14zM5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H5V7h6a1 1 0 1 0 0-2H5z"/></svg>',n.append(o)}function Bc(e,t){const n=Array.from(e.querySelectorAll(":scope > .notranslate"));if(t){const r=n.find(s=>s.textContent?.trim().startsWith(t));if(r)return r}return n[0]??null}function qc(e){return e.closest(".ant-modal-content")??e}function Fr(){try{const e=Hc();if(e){const t=e.closest(".ant-modal-content, .form-content, .ant-dropdown-menu")??e,n=Kc(t);n&&(Uc(e,n),Fc(qc(e),n))}}catch(e){b.error("scan failed",e)}}function Hc(){return Array.from(document.querySelectorAll(Lc)).find(t=>{if(t.id===Te||t.closest(`#${Te}`))return!1;const n=t.closest(".ant-modal-content")??t,r=t.closest(".ant-modal-wrap"),s=n.innerText;return r&&!Ct(r)?!1:Ct(n)&&Ct(t)&&/\b(?:User\s+)?ID:\s*[A-Z0-9]+/i.test(s)&&/Followers:\s*\d+/i.test(s)})}function Kc(e){const t=e.innerText,n=t.match(/\b(?:User\s+)?ID:\s*([A-Z0-9]+)/i)?.[1];return n?{id:n,name:Qc(t),followers:jt(t,"Followers"),friends:jt(t,"Friends"),following:jt(t,"Following"),avatarUrl:Vc(e)}:null}function Qc(e){const t=e.split(`
`).map(o=>o.trim()).filter(Boolean),n=/^(?:[a-z]+:\s*)?(User ID:|ID:|Copy ID|Followers:|Friends:|Following:|Report|Follow|Profile info|Endpoint not configured)/i,r=t.filter(o=>!n.test(o)),s=t.findIndex(o=>/Followers:\s*\d+/i.test(o));if(s>=0){const o=t.slice(s+1).find(a=>!n.test(a));if(o)return o}return r[0]}function jt(e,t){const n=e.match(new RegExp(`${t}:\\s*(\\d+)`,"i"))?.[1];return n?Number(n):void 0}function Vc(e){const n=Array.from(e.querySelectorAll("img")).filter(r=>r.currentSrc||r.src).sort((r,s)=>zr(s)-zr(r))[0];return n?.currentSrc||n?.src||void 0}function zr(e){const t=e.getBoundingClientRect();return t.width*t.height}function Ct(e){const t=e.getBoundingClientRect(),n=window.getComputedStyle(e);return t.width>0&&t.height>0&&n.display!=="none"&&n.visibility!=="hidden"&&Number(n.opacity)!==0}let Tt;async function Gc(e){try{if(e.target?.closest?.(`.${ee}`)||!await L())return;window.clearInterval(Tt),Fr(),Tt=window.setInterval(Fr,250),setTimeout(()=>{window.clearInterval(Tt)},Pc)}catch(t){b.error("scan burst failed",t)}}document.addEventListener("click",Gc,!0);Bo();Vo();la();Xa();Nl();zl();ul();kl();sc();ac();vc();Mc();Ic();
