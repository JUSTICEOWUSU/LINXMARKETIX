import{j as h}from"./index-c4946bcb.js";import{r as O}from"./react-43274802.js";import{d as We}from"./index.esm-c31fdebc.js";import{C as Ke}from"./CustomButton-485ac1ba.js";const Ge="_container_7vt6j_1",Xe="_hero_7vt6j_13",Qe="_title_7vt6j_25",Ye="_p_7vt6j_37",Ze="_form_7vt6j_47",et="_custom_7vt6j_55",tt="_requestOutcome_7vt6j_69",nt="_textLabel_7vt6j_87",rt="_submit_7vt6j_107",st="_required_7vt6j_125",x={container:Ge,hero:Xe,title:Qe,p:Ye,form:Ze,custom:et,requestOutcome:tt,textLabel:nt,submit:rt,required:st},ot="_listCont_1cprl_1",it="_label_1cprl_13",Z={listCont:ot,label:it};function B({type:e,value:t,label:n,custom:r,name:s,onchange:o}){return h.jsxs(h.Fragment,{children:[h.jsx("label",{htmlFor:n,className:Z.label,children:n}),h.jsx("input",{className:`${Z.listCont} ${Z[r]}`,type:e,value:t,id:n,onChange:o,name:s})]})}const at="_container_joatt_1",ct="_label_joatt_25",lt="_arrow_joatt_39",ut="_options_joatt_51",ft="_listCont_joatt_71",U={container:at,label:ct,arrow:lt,options:ut,listCont:ft};function me({onInputChange:e,list:t,label:n}){const[r,s]=O.useState(""),[o,i]=O.useState(!1),[l,d]=O.useState(""),c=b=>{s(b.target.value),e&&e(b.target.value)},u=()=>{i(!o)},p=b=>{d(b),s(b),e&&e(b),i(!1)};return h.jsxs("div",{className:U.container,children:[h.jsx("label",{className:U.label,children:n}),h.jsxs("span",{className:"row",children:[h.jsx("input",{className:"col-lg-11 col-10",type:"text",value:r,onChange:c}),h.jsx(We,{onClick:u,className:`col-lg-1 col-2 ${U.arrow}`})]}),o&&h.jsx("div",{style:{position:"absolute",background:"white",color:"black",fontWeight:"500",width:"100%"},className:U.listCont,children:t.map((b,m)=>h.jsx("div",{onClick:()=>p(b),className:U.options,children:b},m))})]})}function Ne(e,t){return function(){return e.apply(t,arguments)}}const{toString:Te}=Object.prototype,{getPrototypeOf:ce}=Object,le=(e=>t=>{const n=Te.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>le(t)===e),W=e=>t=>typeof t===e,{isArray:k}=Array,M=W("undefined");function dt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&j(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=T("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const ht=W("string"),j=W("function"),Ce=W("number"),ue=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,v=e=>{if(le(e)!=="object")return!1;const t=ce(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=T("Date"),bt=T("File"),wt=T("Blob"),Et=T("FileList"),St=e=>ue(e)&&j(e.pipe),gt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Te.call(e)===t||j(e.toString)&&e.toString()===t)},xt=T("URLSearchParams"),Ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function je(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!M(e)&&e!==Pe;function se(){const{caseless:e}=De(this)&&this||{},t={},n=(r,s)=>{const o=e&&je(t,s)||s;v(t[o])&&v(r)?t[o]=se(t[o],r):v(r)?t[o]=se({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&q(arguments[r],n);return t}const Rt=(e,t,n,{allOwnKeys:r}={})=>(q(t,(s,o)=>{n&&j(s)?e[o]=Ne(s,n):e[o]=s},{allOwnKeys:r}),e),At=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Nt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ce(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},_t=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ct=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Ce(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ce(Uint8Array)),Pt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Dt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ft=T("HTMLFormElement"),Bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ye=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=T("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};q(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},kt=e=>{Fe(e,(t,n)=>{if(j(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(j(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ut=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},It=()=>{},Mt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ee="abcdefghijklmnopqrstuvwxyz",be="0123456789",Be={DIGIT:be,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+be},qt=(e=16,t=Be.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ht(e){return!!(e&&j(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vt=e=>{const t=new Array(10),n=(r,s)=>{if(ue(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return q(r,(i,l)=>{const d=n(i,s+1);!M(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:k,isArrayBuffer:_e,isBuffer:dt,isFormData:gt,isArrayBufferView:pt,isString:ht,isNumber:Ce,isBoolean:mt,isObject:ue,isPlainObject:v,isUndefined:M,isDate:yt,isFile:bt,isBlob:wt,isRegExp:Lt,isFunction:j,isStream:St,isURLSearchParams:xt,isTypedArray:jt,isFileList:Et,forEach:q,merge:se,extend:Rt,trim:Ot,stripBOM:At,inherits:Nt,toFlatObject:Tt,kindOf:le,kindOfTest:T,endsWith:_t,toArray:Ct,forEachEntry:Pt,matchAll:Dt,isHTMLForm:Ft,hasOwnProperty:ye,hasOwnProp:ye,reduceDescriptors:Fe,freezeMethods:kt,toObjectSet:Ut,toCamelCase:Bt,noop:It,toFiniteNumber:Mt,findKey:je,global:Pe,isContextDefined:De,ALPHABET:Be,generateString:qt,isSpecCompliantForm:Ht,toJSONObject:vt};function w(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=w.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(w,ke);Object.defineProperty(Le,"isAxiosError",{value:!0});w.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),w.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const zt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function $t(e){return a.isArray(e)&&!e.some(oe)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function K(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,R){return!a.isUndefined(R[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new w("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,y,R){let S=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&$t(f)||(a.isFileList(f)||a.endsWith(y,"[]"))&&(S=a.toArray(f)))return y=Ue(y),S.forEach(function(F,Q){!(a.isUndefined(F)||F===null)&&t.append(i===!0?we([y],Q,o):i===null?y:y+"[]",c(F))}),!1}return oe(f)?!0:(t.append(we(R,y,o),c(f)),!1)}const p=[],b=Object.assign(Jt,{defaultVisitor:u,convertValue:c,isVisitable:oe});function m(f,y){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(f),a.forEach(f,function(S,_){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(_)?_.trim():_,y,b))===!0&&m(S,y?y.concat(_):[_])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fe(e,t){this._pairs=[],e&&K(e,this,t)}const Ie=fe.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||Vt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new fe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Se=Wt,qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kt=typeof URLSearchParams<"u"?URLSearchParams:fe,Gt=typeof FormData<"u"?FormData:null,Xt=typeof Blob<"u"?Blob:null,Qt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Yt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:Kt,FormData:Gt,Blob:Xt},isStandardBrowserEnv:Qt,isStandardBrowserWebWorkerEnv:Yt,protocols:["http","https","file","blob","url","data"]};function Zt(e,t){return K(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=tn(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(en(r),s,n,0)}),n}return null}const nn={"Content-Type":void 0};function rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const G={transitional:qe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Zt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return K(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),rn(t)):t}],transformResponse:[function(t){const n=this.transitional||G.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?w.from(l,w.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){G.headers[t]={}});a.forEach(["post","put","patch"],function(t){G.headers[t]=a.merge(nn)});const de=G,sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),on=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ge=Symbol("internals");function I(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function an(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const cn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function ln(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function un(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,c){const u=I(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=z(l))}const i=(l,d)=>a.forEach(l,(c,u)=>o(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!cn(t)?i(on(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=I(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return an(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=I(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=I(i),i){const l=a.findKey(r,i);l&&(!n||te(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=z(s),delete n[o];return}const l=t?ln(o):String(o).trim();l!==o&&delete n[o],n[l]=z(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ge]=this[ge]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=I(i);r[l]||(un(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(X.prototype);a.freezeMethods(X);const N=X;function ne(e,t){const n=this||de,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){w.call(this,e??"canceled",w.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,w,{__CANCEL__:!0});function fn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const dn=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ze(e,t){return e&&!pn(t)?hn(e,t):t}const mn=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function bn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const m=u&&c-u;return m?Math.round(b*1e3/m):void 0}}function xe(e,t){let n=0;const r=bn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const wn=typeof XMLHttpRequest<"u",En=wn&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+f))}const u=ze(e.baseURL,e.url);c.open(e.method.toUpperCase(),Me(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const m=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};fn(function(S){n(S),d()},function(S){r(S),d()},y),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new w("Request aborted",w.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||qe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new w(f,y.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const m=(e.withCredentials||mn(u))&&e.xsrfCookieName&&dn.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,y){c.setRequestHeader(y,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",xe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",xe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new H(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=yn(u);if(b&&A.protocols.indexOf(b)===-1){r(new w("Unsupported protocol "+b+":",w.ERR_BAD_REQUEST,e));return}c.send(s||null)})},$={http:zt,xhr:En};a.forEach($,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Sn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?$[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp($,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Oe(e){return re(e),e.headers=N.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Sn.getAdapter(e.adapter||de.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return ve(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof N?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(Re(c),Re(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const p=d[u]||s,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const $e="1.3.5",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};pe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+$e+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new w(s(i," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function gn(e,t,n){if(typeof e!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new w("option "+o+" must be "+d,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+o,w.ERR_BAD_OPTION)}}const ie={assertOptions:gn,validators:pe},C=ie.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Se,response:new Se}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ie.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=N.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(d=d&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,p=0,b;if(!d){const f=[Oe.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);p<b;)u=u.then(f[p++],f[p++]);return u}b=l.length;let m=n;for(p=0;p<b;){const f=l[p++],y=l[p++];try{m=f(m)}catch(R){y.call(this,R);break}}try{u=Oe.call(this,m)}catch(f){return Promise.reject(f)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=L(this.defaults,t);const n=ze(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(L(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class he{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new H(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new he(function(s){t=s}),cancel:t}}}const xn=he;function On(e){return function(n){return e.apply(null,n)}}function Rn(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const An=ae;function Je(e){const t=new J(e),n=Ne(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Je(L(e,s))},n}const E=Je(de);E.Axios=J;E.CanceledError=H;E.CancelToken=xn;E.isCancel=ve;E.VERSION=$e;E.toFormData=K;E.AxiosError=w;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=On;E.isAxiosError=Rn;E.mergeConfig=L;E.AxiosHeaders=N;E.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=An;E.default=E;const Nn=E,Tn=["Video Editing","Illustration","3D Animation","Presentation Design","Cartoons & Comics","2D Animation","Video Production","Full Stack Development","Front-End Development","Back-End Development","Mobile App Development","Web Design","Ecommerce Development","UX/UI Design","shopify development","CMS Development","Manual Testing","Scripting & Automation","graphic design","image editing","Ai arts","SEO","Social Media Marketing","Other Digital Marketing","Lead Generation","Sales & Business Development","Telemarketing","Search Engine Marketing","Email Marketing","Marketing Strategy","Marketing Automation","Accounting","Recruiting & Talent Sourcing","Bookkeeping","Financial Analysis & Modeling","Management Consulting","Instructional Design","HR Administration","Business Analysis & Strategy","Tax Preparation","Financial Management/CFO"],_n=Tn.sort((e,t)=>e<t?-1:e>t?1:0);function Fn(){const[e,t]=O.useState(""),[n,r]=O.useState(""),[s,o]=O.useState(""),[i,l]=O.useState(!1),[d,c]=O.useState(null),[u,p]=O.useState(null),b=O.useRef([]),[m,f]=O.useState({name:"",email:"",number:"",location:"",organization:"",website:""}),y=()=>{f({name:"",email:"",number:"",location:"",organization:"",website:""}),t(""),r(""),o("")},R=g=>{o(g.target.value)},S=g=>{f(P=>({...P,[g.target.name]:g.target.value}))},_=g=>{t(g)},F=g=>{r(g)};function Q(g){for(let P in g)if(g[P]==="")return P;return null}const Ve=async()=>{const g={name:m.name,email:m.email,contact:m.contact,approximate_budget:e,service:n,organization_Name:m.organization,summary:s},P=Q(g);if(P){c(`PLEASE ${P.toUpperCase()}* FILLED SHOULD NOT BE BLANK`);const D=setTimeout(()=>{c(null)},5e3);b.current.push(D);return}l(!0),c(null),p(null),Nn.post("/contact",{...m,service:n,budget:e,summary:s}).then(D=>{l(!1),p("Sent successfully!");const Y=setTimeout(()=>{p(null)},5e3);b.current.push(Y),y()}).catch(D=>{l(!1),D.response&&D.response.data&&D.response.data.message?c(D.response.data.message):c("Something went wrong please try again later.");const Y=setTimeout(()=>{c(null)},5e3);b.current.push(Y)})};return O.useEffect(()=>(window.scrollTo(0,0),()=>{b.current.forEach(g=>clearTimeout(g))}),[]),h.jsxs("div",{className:x.container,children:[h.jsx("div",{className:x.hero,children:h.jsxs("span",{children:[h.jsx("h1",{className:x.title,children:" Ready to create progress together?"}),h.jsx("p",{className:x.p,children:"Tell us a little about your project and we’ll connect with you within 24 hours."})]})}),h.jsx("p",{className:x.required,children:"* indicates REQUIRED"}),h.jsxs("div",{className:`row gy-5 ${x.form}`,children:[h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(B,{onchange:S,type:"text",label:"name *",value:m.name,name:"name"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(B,{onchange:S,type:"text",label:"email address *",value:m.email,name:"email"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(B,{onchange:S,type:"tel",label:"contact number *",value:m.number,name:"number"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(B,{onchange:S,type:"text",label:"location",value:m.location,name:"location"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(me,{onInputChange:_,list:["$25 - $30k","$30k - $100k","$100k - $200k","above $200k"],label:"approximate budget *"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(me,{onInputChange:F,list:_n,label:"select services *"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(B,{onchange:S,type:"text",label:"name of your organization *",value:m.organization,name:"organization"})}),h.jsx("span",{className:"col-lg-6 col-12",children:h.jsx(B,{onchange:S,type:"text",label:"website",value:m.website,name:"website"})}),h.jsxs("span",{className:"col-12",children:[h.jsx("label",{htmlFor:"projectSummary",className:x.textLabel,children:"project summary *"}),h.jsx("textarea",{className:x.custom,id:"projectSummary",cols:"30",rows:"10",value:s,onChange:R})]})]}),h.jsxs("span",{className:x.submit,children:[i&&h.jsx("p",{style:{color:"blue"},className:x.requestOutcome,children:"Sending ..."}),d&&h.jsx("p",{style:{color:"red"},className:x.requestOutcome,children:d}),u&&h.jsx("p",{style:{color:"green"},className:x.requestOutcome,children:u}),h.jsx(Ke,{content:"SUBMIT",onclick:Ve,Style:{width:"150px"}})]})]})}export{Fn as default};
