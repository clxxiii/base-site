(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function De(){}function Os(r,t){for(const e in t)r[e]=t[e];return r}function Fa(r){return r()}function ro(){return Object.create(null)}function _i(r){r.forEach(Fa)}function Dl(r){return typeof r=="function"}function Ie(r,t){return r!=r?t==t:r!==t||r&&typeof r=="object"||typeof r=="function"}let Ji;function Lr(r,t){return Ji||(Ji=document.createElement("a")),Ji.href=t,r===Ji.href}function Rl(r){return Object.keys(r).length===0}function ks(r,t,e,n){if(r){const i=za(r,t,e,n);return r[0](i)}}function za(r,t,e,n){return r[1]&&n?Os(e.ctx.slice(),r[1](n(t))):e.ctx}function Bs(r,t,e,n){if(r[2]&&n){const i=r[2](n(e));if(t.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(t.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=t.dirty[a]|i[a];return s}return t.dirty|i}return t.dirty}function Us(r,t,e,n,i,s){if(i){const o=za(t,e,n,s);r.p(o,i)}}function Gs(r){if(r.ctx.length>32){const t=[],e=r.ctx.length/32;for(let n=0;n<e;n++)t[n]=-1;return t}return-1}function Ft(r,t){r.appendChild(t)}function Yt(r,t,e){r.insertBefore(t,e||null)}function Xt(r){r.parentNode.removeChild(r)}function Oa(r,t){for(let e=0;e<r.length;e+=1)r[e]&&r[e].d(t)}function Vt(r){return document.createElement(r)}function $e(r){return document.createTextNode(r)}function Zt(){return $e(" ")}function Ki(r,t,e,n){return r.addEventListener(t,e,n),()=>r.removeEventListener(t,e,n)}function wt(r,t,e){e==null?r.removeAttribute(t):r.getAttribute(t)!==e&&r.setAttribute(t,e)}function Il(r){return Array.from(r.childNodes)}function Di(r,t){t=""+t,r.wholeText!==t&&(r.data=t)}function Pr(r,t,e,n){e===null?r.style.removeProperty(t):r.style.setProperty(t,e,n?"important":"")}let ki;function Ri(r){ki=r}function Nl(){if(!ki)throw new Error("Function called outside component initialization");return ki}function ka(r){Nl().$$.on_mount.push(r)}const Ci=[],ai=[],Tr=[],so=[],Fl=Promise.resolve();let ws=!1;function zl(){ws||(ws=!0,Fl.then(Ba))}function Ts(r){Tr.push(r)}const Vr=new Set;let Qi=0;function Ba(){const r=ki;do{for(;Qi<Ci.length;){const t=Ci[Qi];Qi++,Ri(t),Ol(t.$$)}for(Ri(null),Ci.length=0,Qi=0;ai.length;)ai.pop()();for(let t=0;t<Tr.length;t+=1){const e=Tr[t];Vr.has(e)||(Vr.add(e),e())}Tr.length=0}while(Ci.length);for(;so.length;)so.pop()();ws=!1,Vr.clear(),Ri(r)}function Ol(r){if(r.fragment!==null){r.update(),_i(r.before_update);const t=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,t),r.after_update.forEach(Ts)}}const Er=new Set;let An;function Ua(){An={r:0,c:[],p:An}}function Ga(){An.r||_i(An.c),An=An.p}function Wt(r,t){r&&r.i&&(Er.delete(r),r.i(t))}function $t(r,t,e,n){if(r&&r.o){if(Er.has(r))return;Er.add(r),An.c.push(()=>{Er.delete(r),n&&(e&&r.d(1),n())}),r.o(t)}else n&&n()}function Va(r,t){const e={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=t[s];if(a){for(const c in o)c in a||(n[c]=1);for(const c in a)i[c]||(e[c]=a[c],i[c]=1);r[s]=a}else for(const c in o)i[c]=1}for(const o in n)o in e||(e[o]=void 0);return e}function Ha(r){return typeof r=="object"&&r!==null?r:{}}function ce(r){r&&r.c()}function oe(r,t,e,n){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=r.$$;i&&i.m(t,e),n||Ts(()=>{const c=s.map(Fa).filter(Dl);o?o.push(...c):_i(c),r.$$.on_mount=[]}),a.forEach(Ts)}function ae(r,t){const e=r.$$;e.fragment!==null&&(_i(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function kl(r,t){r.$$.dirty[0]===-1&&(Ci.push(r),zl(),r.$$.dirty.fill(0)),r.$$.dirty[t/31|0]|=1<<t%31}function Ne(r,t,e,n,i,s,o,a=[-1]){const c=ki;Ri(r);const l=r.$$={fragment:null,ctx:null,props:s,update:De,not_equal:i,bound:ro(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ro(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let f=!1;if(l.ctx=e?e(r,t.props||{},(u,h,...m)=>{const g=m.length?m[0]:h;return l.ctx&&i(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),f&&kl(r,u)),h}):[],l.update(),f=!0,_i(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){const u=Il(t.target);l.fragment&&l.fragment.l(u),u.forEach(Xt)}else l.fragment&&l.fragment.c();t.intro&&Wt(r.$$.fragment),oe(r,t.target,t.anchor,t.customElement),Ba()}Ri(c)}class Fe{$destroy(){ae(this,1),this.$destroy=De}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Rl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="143",Bl=0,oo=1,Ul=2,Wa=1,Gl=2,Ai=3,Bi=0,Ge=1,hi=2,Vl=1,_n=0,li=1,ao=2,lo=3,co=4,Hl=5,ii=100,Wl=101,ql=102,uo=103,ho=104,Xl=200,$l=201,jl=202,Yl=203,qa=204,Xa=205,Zl=206,Jl=207,Kl=208,Ql=209,tc=210,ec=0,nc=1,ic=2,Es=3,rc=4,sc=5,oc=6,ac=7,$a=0,lc=1,cc=2,an=0,uc=1,hc=2,fc=3,dc=4,pc=5,ja=300,fi=301,di=302,Cs=303,As=304,Nr=306,Ls=1e3,Ue=1001,Ps=1002,ye=1003,fo=1004,po=1005,Pe=1006,mc=1007,Fr=1008,Fn=1009,gc=1010,_c=1011,Ya=1012,xc=1013,Ln=1014,Pn=1015,Ui=1016,vc=1017,yc=1018,ci=1020,Mc=1021,bc=1022,qe=1023,Sc=1024,wc=1025,Rn=1026,pi=1027,Tc=1028,Ec=1029,Cc=1030,Ac=1031,Lc=1033,Hr=33776,Wr=33777,qr=33778,Xr=33779,mo=35840,go=35841,_o=35842,xo=35843,Pc=36196,vo=37492,yo=37496,Mo=37808,bo=37809,So=37810,wo=37811,To=37812,Eo=37813,Co=37814,Ao=37815,Lo=37816,Po=37817,Do=37818,Ro=37819,Io=37820,No=37821,Fo=36492,zn=3e3,te=3001,Dc=3200,Rc=3201,Za=0,Ic=1,sn="srgb",Dn="srgb-linear",$r=7680,Nc=519,zo=35044,Oo="300 es",Ds=1035;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const Ii=Math.PI/180,Dr=180/Math.PI;function Bn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[r&255]+de[r>>8&255]+de[r>>16&255]+de[r>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function me(r,t,e){return Math.max(t,Math.min(e,r))}function Hs(r,t){return(r%t+t)%t}function Fc(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function zc(r,t,e){return r!==t?(e-r)/(t-r):0}function Ni(r,t,e){return(1-e)*r+e*t}function Oc(r,t,e,n){return Ni(r,t,1-Math.exp(-e*n))}function kc(r,t=1){return t-Math.abs(Hs(r,t*2)-t)}function Bc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Uc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Gc(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Vc(r,t){return r+Math.random()*(t-r)}function Hc(r){return r*(.5-Math.random())}function Wc(r){r!==void 0&&(ko=r);let t=ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qc(r){return r*Ii}function Xc(r){return r*Dr}function Rs(r){return(r&r-1)===0&&r!==0}function $c(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Rr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jc(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),f=o((t+n)/2),u=s((t-n)/2),h=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*f,c*u,c*h,a*l);break;case"YZY":r.set(c*h,a*f,c*u,a*l);break;case"ZXZ":r.set(c*u,c*h,a*f,a*l);break;case"XZX":r.set(a*f,c*g,c*m,a*l);break;case"YXY":r.set(c*m,a*f,c*g,a*l);break;case"ZYZ":r.set(c*g,c*m,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yc(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zc(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Jc=Object.freeze({__proto__:null,DEG2RAD:Ii,RAD2DEG:Dr,generateUUID:Bn,clamp:me,euclideanModulo:Hs,mapLinear:Fc,inverseLerp:zc,lerp:Ni,damp:Oc,pingpong:kc,smoothstep:Bc,smootherstep:Uc,randInt:Gc,randFloat:Vc,randFloatSpread:Hc,seededRandom:Wc,degToRad:qc,radToDeg:Xc,isPowerOfTwo:Rs,ceilPowerOfTwo:$c,floorPowerOfTwo:Rr,setQuaternionFromProperEuler:jc,normalize:Zc,denormalize:Yc});class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,c,l){const f=this.elements;return f[0]=t,f[1]=i,f[2]=a,f[3]=e,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],m=n[5],g=n[8],p=i[0],d=i[3],_=i[6],y=i[1],w=i[4],v=i[7],M=i[2],A=i[5],F=i[8];return s[0]=o*p+a*y+c*M,s[3]=o*d+a*w+c*A,s[6]=o*_+a*v+c*F,s[1]=l*p+f*y+u*M,s[4]=l*d+f*w+u*A,s[7]=l*_+f*v+u*F,s[2]=h*p+m*y+g*M,s[5]=h*d+m*w+g*A,s[8]=h*_+m*v+g*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-n*s*f+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=f*o-a*l,h=a*c-f*s,m=l*s-o*c,g=e*u+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(i*l-f*n)*p,t[2]=(a*n-i*o)*p,t[3]=h*p,t[4]=(f*e-i*c)*p,t[5]=(i*s-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],f=i[7];return i[0]=e*s+n*c,i[3]=e*o+n*l,i[6]=e*a+n*f,i[1]=-n*s+e*c,i[4]=-n*o+e*l,i[7]=-n*a+e*f,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Ja(r){for(let t=r.length-1;t>=0;--t)if(r[t]>65535)return!0;return!1}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function In(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const jr={[sn]:{[Dn]:In},[Dn]:{[sn]:Cr}},ze={legacyMode:!0,get workingColorSpace(){return Dn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(jr[t]&&jr[t][e]!==void 0){const n=jr[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},le={r:0,g:0,b:0},Oe={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Yr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function er(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Dn){return this.r=t,this.g=e,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Dn){if(t=Hs(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Yr(o,s,t+1/3),this.g=Yr(o,s,t),this.b=Yr(o,s,t-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ze.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ze.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,f=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,f,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ze.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ze.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=sn){const n=Ka[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return ze.fromWorkingColorSpace(er(this,le),t),me(le.r*255,0,255)<<16^me(le.g*255,0,255)<<8^me(le.b*255,0,255)<<0}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Dn){ze.fromWorkingColorSpace(er(this,le),e);const n=le.r,i=le.g,s=le.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=Dn){return ze.fromWorkingColorSpace(er(this,le),e),t.r=le.r,t.g=le.g,t.b=le.b,t}getStyle(t=sn){return ze.fromWorkingColorSpace(er(this,le),t),t!==sn?`color(${t} ${le.r} ${le.g} ${le.b})`:`rgb(${le.r*255|0},${le.g*255|0},${le.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Oe),Oe.h+=t,Oe.s+=e,Oe.l+=n,this.setHSL(Oe.h,Oe.s,Oe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oe),t.getHSL(tr);const n=Ni(Oe.h,tr.h,e),i=Ni(Oe.s,tr.s,e),s=Ni(Oe.l,tr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qt.NAMES=Ka;let Hn;class Qa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Ir("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=In(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class tl{constructor(t=null){this.isSource=!0,this.uuid=Bn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Zr(i[o].image)):s.push(Zr(i[o]))}else s=Zr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kc=0;class Ve extends xi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Ue,i=Ue,s=Pe,o=Fr,a=qe,c=Fn,l=1,f=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Bn(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ja)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case Ps:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case Ps:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ja;class jt{constructor(t=0,e=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],f=c[4],u=c[8],h=c[1],m=c[5],g=c[9],p=c[2],d=c[6],_=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+p)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,v=(m+1)/2,M=(_+1)/2,A=(f+h)/4,F=(u+p)/4,x=(g+d)/4;return w>v&&w>M?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=A/n,s=F/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=F/s,i=x/s),this.set(n,i,s,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-p)*(u-p)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-p)/y,this.z=(h-f)/y,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends xi{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class el extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qc extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],f=n[i+2],u=n[i+3];const h=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(u!==p||c!==h||l!==m||f!==g){let d=1-a;const _=c*h+l*m+f*g+u*p,y=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const M=Math.sqrt(w),A=Math.atan2(M,_*y);d=Math.sin(d*A)/M,a=Math.sin(a*A)/M}const v=a*y;if(c=c*d+h*v,l=l*d+m*v,f=f*d+g*v,u=u*d+p*v,d===1-a){const M=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=M,l*=M,f*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],f=n[i+3],u=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+f*u+c*m-l*h,t[e+1]=c*g+f*h+l*u-a*m,t[e+2]=l*g+f*m+a*h-c*u,t[e+3]=f*g-a*u-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(i/2),u=a(s/2),h=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=h*f*u+l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u-h*m*g;break;case"YXZ":this._x=h*f*u+l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u+h*m*g;break;case"ZXY":this._x=h*f*u-l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u-h*m*g;break;case"ZYX":this._x=h*f*u-l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u+h*m*g;break;case"YZX":this._x=h*f*u+l*m*g,this._y=l*m*u+h*f*g,this._z=l*f*g-h*m*u,this._w=l*f*u-h*m*g;break;case"XZY":this._x=h*f*u-l*m*g,this._y=l*m*u-h*f*g,this._z=l*f*g+h*m*u,this._w=l*f*u+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],f=e[6],u=e[10],h=n+a+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(f-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,f=e._w;return this._x=n*f+o*a+i*l-s*c,this._y=i*f+o*c+s*a-n*l,this._z=s*f+o*l+n*c-i*a,this._w=o*f-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-e)*f)/l,h=Math.sin(e*f)/l;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,f=c*n+a*e-s*i,u=c*i+s*n-o*e,h=-s*e-o*n-a*i;return this.x=l*c+h*-s+f*-a-u*-o,this.y=f*c+h*-o+u*-s-l*-a,this.z=u*c+h*-a+l*-o-f*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new O,Bo=new qi;class Xi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const f=t[c],u=t[c+1],h=t[c+2];f<e&&(e=f),u<n&&(n=u),h<i&&(i=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const f=t.getX(c),u=t.getY(c),h=t.getZ(c);f<e&&(e=f),u<n&&(n=u),h<i&&(i=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)yn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(yn)}else n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox),Kr.applyMatrix4(t.matrixWorld),this.union(Kr);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),nr.subVectors(this.max,bi),Wn.subVectors(t.a,bi),qn.subVectors(t.b,bi),Xn.subVectors(t.c,bi),un.subVectors(qn,Wn),hn.subVectors(Xn,qn),Mn.subVectors(Wn,Xn);let e=[0,-un.z,un.y,0,-hn.z,hn.y,0,-Mn.z,Mn.y,un.z,0,-un.x,hn.z,0,-hn.x,Mn.z,0,-Mn.x,-un.y,un.x,0,-hn.y,hn.x,0,-Mn.y,Mn.x,0];return!Qr(e,Wn,qn,Xn,nr)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Wn,qn,Xn,nr))?!1:(ir.crossVectors(un,hn),e=[ir.x,ir.y,ir.z],Qr(e,Wn,qn,Xn,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return yn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new O,new O,new O,new O,new O,new O,new O,new O],yn=new O,Kr=new Xi,Wn=new O,qn=new O,Xn=new O,un=new O,hn=new O,Mn=new O,bi=new O,nr=new O,ir=new O,bn=new O;function Qr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){bn.fromArray(r,s);const a=i.x*Math.abs(bn.x)+i.y*Math.abs(bn.y)+i.z*Math.abs(bn.z),c=t.dot(bn),l=e.dot(bn),f=n.dot(bn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const tu=new Xi,Uo=new O,rr=new O,ts=new O;class Ws{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(ts.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?rr.set(0,0,1).multiplyScalar(t.radius):rr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Uo.copy(t.center).add(rr)),this.expandByPoint(Uo.copy(t.center).sub(rr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qe=new O,es=new O,sr=new O,fn=new O,ns=new O,or=new O,is=new O;class eu{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qe.copy(this.direction).multiplyScalar(e).add(this.origin),Qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){es.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(es);const s=t.distanceTo(e)*.5,o=-this.direction.dot(sr),a=fn.dot(this.direction),c=-fn.dot(sr),l=fn.lengthSq(),f=Math.abs(1-o*o);let u,h,m,g;if(f>0)if(u=o*c-a,h=o*a-c,g=s*f,u>=0)if(h>=-g)if(h<=g){const p=1/f;u*=p,h*=p,m=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(sr).multiplyScalar(h).add(es),m}intersectSphere(t,e){Qe.subVectors(t.center,this.origin);const n=Qe.dot(this.direction),i=Qe.dot(Qe)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),f>=0?(s=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qe)!==null}intersectTriangle(t,e,n,i,s){ns.subVectors(e,t),or.subVectors(n,t),is.crossVectors(ns,or);let o=this.direction.dot(is),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const c=a*this.direction.dot(or.crossVectors(fn,or));if(c<0)return null;const l=a*this.direction.dot(ns.cross(fn));if(l<0||c+l>o)return null;const f=-a*fn.dot(is);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,c,l,f,u,h,m,g,p,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=f,_[10]=u,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$n.setFromMatrixColumn(t,0).length(),s=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=o*f,m=o*u,g=a*f,p=a*u;e[0]=c*f,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=h-p*l,e[9]=-a*c,e[2]=p-h*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*f,m=c*u,g=l*f,p=l*u;e[0]=h+p*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=m*a-g,e[6]=p+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*f,m=c*u,g=l*f,p=l*u;e[0]=h-p*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*f,e[9]=p-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*f,m=o*u,g=a*f,p=a*u;e[0]=c*f,e[4]=g*l-m,e[8]=h*l+p,e[1]=c*u,e[5]=p*l+h,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*f,e[4]=p-h*u,e[8]=g*u+m,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=m*u+g,e[10]=h-p*u}else if(t.order==="XZY"){const h=o*c,m=o*l,g=a*c,p=a*l;e[0]=c*f,e[4]=-u,e[8]=l*f,e[1]=h*u+p,e[5]=o*f,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*f,e[10]=p*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nu,t,iu)}lookAt(t,e,n){const i=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),dn.crossVectors(n,we),dn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),dn.crossVectors(n,we)),dn.normalize(),ar.crossVectors(we,dn),i[0]=dn.x,i[4]=ar.x,i[8]=we.x,i[1]=dn.y,i[5]=ar.y,i[9]=we.y,i[2]=dn.z,i[6]=ar.z,i[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],m=n[13],g=n[2],p=n[6],d=n[10],_=n[14],y=n[3],w=n[7],v=n[11],M=n[15],A=i[0],F=i[4],x=i[8],D=i[12],V=i[1],U=i[5],it=i[9],at=i[13],B=i[2],rt=i[6],J=i[10],q=i[14],k=i[3],W=i[7],Y=i[11],ht=i[15];return s[0]=o*A+a*V+c*B+l*k,s[4]=o*F+a*U+c*rt+l*W,s[8]=o*x+a*it+c*J+l*Y,s[12]=o*D+a*at+c*q+l*ht,s[1]=f*A+u*V+h*B+m*k,s[5]=f*F+u*U+h*rt+m*W,s[9]=f*x+u*it+h*J+m*Y,s[13]=f*D+u*at+h*q+m*ht,s[2]=g*A+p*V+d*B+_*k,s[6]=g*F+p*U+d*rt+_*W,s[10]=g*x+p*it+d*J+_*Y,s[14]=g*D+p*at+d*q+_*ht,s[3]=y*A+w*V+v*B+M*k,s[7]=y*F+w*U+v*rt+M*W,s[11]=y*x+w*it+v*J+M*Y,s[15]=y*D+w*at+v*q+M*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],f=t[2],u=t[6],h=t[10],m=t[14],g=t[3],p=t[7],d=t[11],_=t[15];return g*(+s*c*u-i*l*u-s*a*h+n*l*h+i*a*m-n*c*m)+p*(+e*c*m-e*l*h+s*o*h-i*o*m+i*l*f-s*c*f)+d*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*f-n*l*f)+_*(-i*a*f-e*c*u+e*a*h+i*o*u-n*o*h+n*c*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],f=t[8],u=t[9],h=t[10],m=t[11],g=t[12],p=t[13],d=t[14],_=t[15],y=u*d*l-p*h*l+p*c*m-a*d*m-u*c*_+a*h*_,w=g*h*l-f*d*l-g*c*m+o*d*m+f*c*_-o*h*_,v=f*p*l-g*u*l+g*a*m-o*p*m-f*a*_+o*u*_,M=g*u*c-f*p*c-g*a*h+o*p*h+f*a*d-o*u*d,A=e*y+n*w+i*v+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/A;return t[0]=y*F,t[1]=(p*h*s-u*d*s-p*i*m+n*d*m+u*i*_-n*h*_)*F,t[2]=(a*d*s-p*c*s+p*i*l-n*d*l-a*i*_+n*c*_)*F,t[3]=(u*c*s-a*h*s-u*i*l+n*h*l+a*i*m-n*c*m)*F,t[4]=w*F,t[5]=(f*d*s-g*h*s+g*i*m-e*d*m-f*i*_+e*h*_)*F,t[6]=(g*c*s-o*d*s-g*i*l+e*d*l+o*i*_-e*c*_)*F,t[7]=(o*h*s-f*c*s+f*i*l-e*h*l-o*i*m+e*c*m)*F,t[8]=v*F,t[9]=(g*u*s-f*p*s-g*n*m+e*p*m+f*n*_-e*u*_)*F,t[10]=(o*p*s-g*a*s+g*n*l-e*p*l-o*n*_+e*a*_)*F,t[11]=(f*a*s-o*u*s-f*n*l+e*u*l+o*n*m-e*a*m)*F,t[12]=M*F,t[13]=(f*p*i-g*u*i+g*n*h-e*p*h-f*n*d+e*u*d)*F,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*d-e*a*d)*F,t[15]=(o*u*i-f*a*i+f*n*c-e*u*c-o*n*h+e*a*h)*F,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,f*a+n,f*c-i*o,0,l*c-i*a,f*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,f=o+o,u=a+a,h=s*l,m=s*f,g=s*u,p=o*f,d=o*u,_=a*u,y=c*l,w=c*f,v=c*u,M=n.x,A=n.y,F=n.z;return i[0]=(1-(p+_))*M,i[1]=(m+v)*M,i[2]=(g-w)*M,i[3]=0,i[4]=(m-v)*A,i[5]=(1-(h+_))*A,i[6]=(d+y)*A,i[7]=0,i[8]=(g+w)*F,i[9]=(d-y)*F,i[10]=(1-(h+p))*F,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ke.copy(this);const l=1/s,f=1/o,u=1/a;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=f,ke.elements[5]*=f,ke.elements[6]*=f,ke.elements[8]*=u,ke.elements[9]*=u,ke.elements[10]*=u,e.setFromRotationMatrix(ke),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,c=1/(e-t),l=1/(n-i),f=1/(o-s),u=(e+t)*c,h=(n+i)*l,m=(o+s)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new O,ke=new ie,nu=new O(0,0,0),iu=new O(1,1,1),dn=new O,ar=new O,we=new O,Go=new ie,Vo=new qi;class $i{constructor(t=0,e=0,n=0,i=$i.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],f=i[9],u=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$i.DefaultOrder="XYZ";$i.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ru=0;const Ho=new O,jn=new qi,tn=new ie,lr=new O,Si=new O,su=new O,ou=new qi,Wo=new O(1,0,0),qo=new O(0,1,0),Xo=new O(0,0,1),au={type:"added"},$o={type:"removed"};class Re extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DefaultUp.clone();const t=new O,e=new $i,n=new qi,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new fe}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Re.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis(Xo,t)}translateOnAxis(t,e){return Ho.copy(t).applyQuaternion(this.quaternion),this.position.add(Ho.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis(Xo,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Si,lr,this.up):tn.lookAt(lr,Si,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(tn),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($o)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent($o)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),f=o(t.images),u=o(t.shapes),h=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DefaultUp=new O(0,1,0);Re.DefaultMatrixAutoUpdate=!0;const Be=new O,en=new O,rs=new O,nn=new O,Yn=new O,Zn=new O,jo=new O,ss=new O,os=new O,as=new O;class on{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Be.subVectors(t,e),i.cross(Be);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Be.subVectors(i,e),en.subVectors(n,e),rs.subVectors(t,e);const o=Be.dot(Be),a=Be.dot(en),c=Be.dot(rs),l=en.dot(en),f=en.dot(rs),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const h=1/u,m=(l*c-a*f)*h,g=(o*f-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,nn),c.set(0,0),c.addScaledVector(s,nn.x),c.addScaledVector(o,nn.y),c.addScaledVector(a,nn.z),c}static isFrontFacing(t,e,n,i){return Be.subVectors(n,e),en.subVectors(t,e),Be.cross(en).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Be.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return on.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Yn.subVectors(i,n),Zn.subVectors(s,n),ss.subVectors(t,n);const c=Yn.dot(ss),l=Zn.dot(ss);if(c<=0&&l<=0)return e.copy(n);os.subVectors(t,i);const f=Yn.dot(os),u=Zn.dot(os);if(f>=0&&u<=f)return e.copy(i);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(n).addScaledVector(Yn,o);as.subVectors(t,s);const m=Yn.dot(as),g=Zn.dot(as);if(g>=0&&m<=g)return e.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Zn,a);const d=f*g-m*u;if(d<=0&&u-f>=0&&m-g>=0)return jo.subVectors(s,i),a=(u-f)/(u-f+(m-g)),e.copy(i).addScaledVector(jo,a);const _=1/(d+p+h);return o=p*_,a=h*_,e.copy(n).addScaledVector(Yn,o).addScaledVector(Zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let lu=0;class ji extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=li,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qa,this.blendDst=Xa,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Vl;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qs extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new O,cr=new ct;class je{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new qt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new ct),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new O),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new jt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class il extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rl extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cu=0;const Le=new ie,ls=new Re,Jn=new O,Te=new Xi,wi=new Xi,he=new O;class Ye extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ja(t)?rl:il)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return ls.lookAt(t),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _e(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Te.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(Te.min,wi.min),Te.expandByPoint(he),he.addVectors(Te.max,wi.max),Te.expandByPoint(he)):(Te.expandByPoint(wi.min),Te.expandByPoint(wi.max))}Te.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)he.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(he));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)he.fromBufferAttribute(a,l),c&&(Jn.fromBufferAttribute(t,l),he.add(Jn)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let V=0;V<a;V++)l[V]=new O,f[V]=new O;const u=new O,h=new O,m=new O,g=new ct,p=new ct,d=new ct,_=new O,y=new O;function w(V,U,it){u.fromArray(i,V*3),h.fromArray(i,U*3),m.fromArray(i,it*3),g.fromArray(o,V*2),p.fromArray(o,U*2),d.fromArray(o,it*2),h.sub(u),m.sub(u),p.sub(g),d.sub(g);const at=1/(p.x*d.y-d.x*p.y);!isFinite(at)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(at),y.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(at),l[V].add(_),l[U].add(_),l[it].add(_),f[V].add(y),f[U].add(y),f[it].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let V=0,U=v.length;V<U;++V){const it=v[V],at=it.start,B=it.count;for(let rt=at,J=at+B;rt<J;rt+=3)w(n[rt+0],n[rt+1],n[rt+2])}const M=new O,A=new O,F=new O,x=new O;function D(V){F.fromArray(s,V*3),x.copy(F);const U=l[V];M.copy(U),M.sub(F.multiplyScalar(F.dot(U))).normalize(),A.crossVectors(x,U);const at=A.dot(f[V])<0?-1:1;c[V*4]=M.x,c[V*4+1]=M.y,c[V*4+2]=M.z,c[V*4+3]=at}for(let V=0,U=v.length;V<U;++V){const it=v[V],at=it.start,B=it.count;for(let rt=at,J=at+B;rt<J;rt+=3)D(n[rt+0]),D(n[rt+1]),D(n[rt+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,c=new O,l=new O,f=new O,u=new O;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),p=t.getX(h+1),d=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,d),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(f),c.add(f),l.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],c=a.array,l=a.itemSize*e,f=Math.min(c.length,o.length-l);for(let u=0,h=l;u<f;u++,h++)o[h]=c[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,c){const l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f);let m=0,g=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*f;for(let _=0;_<f;_++)h[g++]=l[m++]}return new je(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,u=l.length;f<u;f++){const h=l[f],m=t(h,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const m=l[u];f.push(m.toJSON(t.data))}f.length>0&&(i[c]=f,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(e))}const s=t.morphAttributes;for(const l in s){const f=[],u=s[l];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new ie,Kn=new eu,cs=new Ws,pn=new O,mn=new O,gn=new O,us=new O,hs=new O,fs=new O,ur=new O,hr=new O,fr=new O,dr=new ct,pr=new ct,mr=new ct,ds=new O,gr=new O;class Xe extends Re{constructor(t=new Ye,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),t.ray.intersectsSphere(cs)===!1)||(Yo.copy(s).invert(),Kn.copy(t.ray).applyMatrix4(Yo),n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,f=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],y=i[_.materialIndex],w=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=w,A=v;M<A;M+=3){const F=a.getX(M),x=a.getX(M+1),D=a.getX(M+2);o=_r(this,y,t,Kn,c,l,f,u,h,F,x,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,y=d;_<y;_+=3){const w=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);o=_r(this,i,t,Kn,c,l,f,u,h,w,v,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const _=m[p],y=i[_.materialIndex],w=Math.max(_.start,g.start),v=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let M=w,A=v;M<A;M+=3){const F=M,x=M+1,D=M+2;o=_r(this,y,t,Kn,c,l,f,u,h,F,x,D),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(c.count,g.start+g.count);for(let _=p,y=d;_<y;_+=3){const w=_,v=_+1,M=_+2;o=_r(this,i,t,Kn,c,l,f,u,h,w,v,M),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function uu(r,t,e,n,i,s,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side!==hi,a),c===null)return null;gr.copy(a),gr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(gr);return l<e.near||l>e.far?null:{distance:l,point:gr.clone(),object:r}}function _r(r,t,e,n,i,s,o,a,c,l,f,u){pn.fromBufferAttribute(i,l),mn.fromBufferAttribute(i,f),gn.fromBufferAttribute(i,u);const h=r.morphTargetInfluences;if(s&&h){ur.set(0,0,0),hr.set(0,0,0),fr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(us.fromBufferAttribute(_,l),hs.fromBufferAttribute(_,f),fs.fromBufferAttribute(_,u),o?(ur.addScaledVector(us,d),hr.addScaledVector(hs,d),fr.addScaledVector(fs,d)):(ur.addScaledVector(us.sub(pn),d),hr.addScaledVector(hs.sub(mn),d),fr.addScaledVector(fs.sub(gn),d)))}pn.add(ur),mn.add(hr),gn.add(fr)}r.isSkinnedMesh&&(r.boneTransform(l,pn),r.boneTransform(f,mn),r.boneTransform(u,gn));const m=uu(r,t,e,n,pn,mn,gn,ds);if(m){a&&(dr.fromBufferAttribute(a,l),pr.fromBufferAttribute(a,f),mr.fromBufferAttribute(a,u),m.uv=on.getUV(ds,pn,mn,gn,dr,pr,mr,new ct)),c&&(dr.fromBufferAttribute(c,l),pr.fromBufferAttribute(c,f),mr.fromBufferAttribute(c,u),m.uv2=on.getUV(ds,pn,mn,gn,dr,pr,mr,new ct));const g={a:l,b:f,c:u,normal:new O,materialIndex:0};on.getNormal(pn,mn,gn,g.normal),m.face=g}return m}class Yi extends Ye{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(u,2));function g(p,d,_,y,w,v,M,A,F,x,D){const V=v/F,U=M/x,it=v/2,at=M/2,B=A/2,rt=F+1,J=x+1;let q=0,k=0;const W=new O;for(let Y=0;Y<J;Y++){const ht=Y*U-at;for(let R=0;R<rt;R++){const P=R*V-it;W[p]=P*y,W[d]=ht*w,W[_]=B,l.push(W.x,W.y,W.z),W[p]=0,W[d]=0,W[_]=A>0?1:-1,f.push(W.x,W.y,W.z),u.push(R/F),u.push(1-Y/x),q+=1}}for(let Y=0;Y<x;Y++)for(let ht=0;ht<F;ht++){const R=h+ht+rt*Y,P=h+ht+rt*(Y+1),S=h+(ht+1)+rt*(Y+1),z=h+(ht+1)+rt*Y;c.push(R,P,z),c.push(P,S,z),k+=6}a.addGroup(m,k,D),m+=k,h+=q}}static fromJSON(t){return new Yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pe(r){const t={};for(let e=0;e<r.length;e++){const n=mi(r[e]);for(const i in n)t[i]=n[i]}return t}function hu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const fu={clone:mi,merge:pe};var du=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=du,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sl extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ee extends sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=90,ti=1;class mu extends Re{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ee(Qn,ti,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);const s=new Ee(Qn,ti,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);const o=new Ee(Qn,ti,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new Ee(Qn,ti,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const c=new Ee(Qn,ti,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,1)),this.add(c);const l=new Ee(Qn,ti,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,f=t.getRenderTarget(),u=t.toneMapping,h=t.xr.enabled;t.toneMapping=an,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(f),t.toneMapping=u,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ol extends Ve{constructor(t,e,n,i,s,o,a,c,l,f){t=t!==void 0?t:[],e=e!==void 0?e:fi,super(t,e,n,i,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gu extends On{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ol(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yi(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:_n});s.uniforms.tEquirect.value=e;const o=new Xe(i,s),a=e.minFilter;return e.minFilter===Fr&&(e.minFilter=Pe),new mu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ps=new O,_u=new O,xu=new fe;class wn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ps.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ps),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xu.getNormalMatrix(t),i=this.coplanarPoint(ps).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Ws,xr=new O;class Xs{constructor(t=new wn,e=new wn,n=new wn,i=new wn,s=new wn,o=new wn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],f=n[6],u=n[7],h=n[8],m=n[9],g=n[10],p=n[11],d=n[12],_=n[13],y=n[14],w=n[15];return e[0].setComponents(a-i,u-c,p-h,w-d).normalize(),e[1].setComponents(a+i,u+c,p+h,w+d).normalize(),e[2].setComponents(a+s,u+l,p+m,w+_).normalize(),e[3].setComponents(a-s,u-l,p-m,w-_).normalize(),e[4].setComponents(a-o,u-f,p-g,w-y).normalize(),e[5].setComponents(a+o,u+f,p+g,w+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(xr.x=i.normal.x>0?t.max.x:t.min.x,xr.y=i.normal.y>0?t.max.y:t.min.y,xr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function al(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function vu(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,f){const u=l.array,h=l.usage,m=r.createBuffer();r.bindBuffer(f,m),r.bufferData(f,u,h),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,u){const h=f.array,m=f.updateRange;r.bindBuffer(u,l),m.count===-1?r.bufferSubData(u,0,h):(e?r.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f&&(r.deleteBuffer(f.buffer),n.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,f)):u.version<l.version&&(s(u.buffer,l,f),u.version=l.version)}return{get:o,remove:a,update:c}}class $s extends Ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,f=c+1,u=t/a,h=e/c,m=[],g=[],p=[],d=[];for(let _=0;_<f;_++){const y=_*h-o;for(let w=0;w<l;w++){const v=w*u-s;g.push(v,-y,0),p.push(0,0,1),d.push(w/a),d.push(1-_/c)}}for(let _=0;_<c;_++)for(let y=0;y<a;y++){const w=y+l*_,v=y+l*(_+1),M=y+1+l*(_+1),A=y+1+l*_;m.push(w,v,A),m.push(v,M,A)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(p,3)),this.setAttribute("uv",new _e(d,2))}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eu="vec3 transformed = vec3( position );",Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",$u=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ih=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,ah=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,hh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,dh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_h=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Th=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ah=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ph=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ih=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ff=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,df=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Of=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zt={alphamap_fragment:yu,alphamap_pars_fragment:Mu,alphatest_fragment:bu,alphatest_pars_fragment:Su,aomap_fragment:wu,aomap_pars_fragment:Tu,begin_vertex:Eu,beginnormal_vertex:Cu,bsdfs:Au,iridescence_fragment:Lu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Iu,clipping_planes_vertex:Nu,color_fragment:Fu,color_pars_fragment:zu,color_pars_vertex:Ou,color_vertex:ku,common:Bu,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Vu,displacementmap_vertex:Hu,emissivemap_fragment:Wu,emissivemap_pars_fragment:qu,encodings_fragment:Xu,encodings_pars_fragment:$u,envmap_fragment:ju,envmap_common_pars_fragment:Yu,envmap_pars_fragment:Zu,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:lh,envmap_vertex:Ku,fog_vertex:Qu,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:nh,gradientmap_pars_fragment:ih,lightmap_fragment:rh,lightmap_pars_fragment:sh,lights_lambert_vertex:oh,lights_pars_begin:ah,lights_toon_fragment:ch,lights_toon_pars_fragment:uh,lights_phong_fragment:hh,lights_phong_pars_fragment:fh,lights_physical_fragment:dh,lights_physical_pars_fragment:ph,lights_fragment_begin:mh,lights_fragment_maps:gh,lights_fragment_end:_h,logdepthbuf_fragment:xh,logdepthbuf_pars_fragment:vh,logdepthbuf_pars_vertex:yh,logdepthbuf_vertex:Mh,map_fragment:bh,map_pars_fragment:Sh,map_particle_fragment:wh,map_particle_pars_fragment:Th,metalnessmap_fragment:Eh,metalnessmap_pars_fragment:Ch,morphcolor_vertex:Ah,morphnormal_vertex:Lh,morphtarget_pars_vertex:Ph,morphtarget_vertex:Dh,normal_fragment_begin:Rh,normal_fragment_maps:Ih,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:zh,normalmap_pars_fragment:Oh,clearcoat_normal_fragment_begin:kh,clearcoat_normal_fragment_maps:Bh,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Gh,output_fragment:Vh,packing:Hh,premultiplied_alpha_fragment:Wh,project_vertex:qh,dithering_fragment:Xh,dithering_pars_fragment:$h,roughnessmap_fragment:jh,roughnessmap_pars_fragment:Yh,shadowmap_pars_fragment:Zh,shadowmap_pars_vertex:Jh,shadowmap_vertex:Kh,shadowmask_pars_fragment:Qh,skinbase_vertex:tf,skinning_pars_vertex:ef,skinning_vertex:nf,skinnormal_vertex:rf,specularmap_fragment:sf,specularmap_pars_fragment:of,tonemapping_fragment:af,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:uf,uv_pars_fragment:hf,uv_pars_vertex:ff,uv_vertex:df,uv2_pars_fragment:pf,uv2_pars_vertex:mf,uv2_vertex:gf,worldpos_vertex:_f,background_vert:xf,background_frag:vf,cube_vert:yf,cube_frag:Mf,depth_vert:bf,depth_frag:Sf,distanceRGBA_vert:wf,distanceRGBA_frag:Tf,equirect_vert:Ef,equirect_frag:Cf,linedashed_vert:Af,linedashed_frag:Lf,meshbasic_vert:Pf,meshbasic_frag:Df,meshlambert_vert:Rf,meshlambert_frag:If,meshmatcap_vert:Nf,meshmatcap_frag:Ff,meshnormal_vert:zf,meshnormal_frag:Of,meshphong_vert:kf,meshphong_frag:Bf,meshphysical_vert:Uf,meshphysical_frag:Gf,meshtoon_vert:Vf,meshtoon_frag:Hf,points_vert:Wf,points_frag:qf,shadow_vert:Xf,shadow_frag:$f,sprite_vert:jf,sprite_frag:Yf},_t={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fe},uv2Transform:{value:new fe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}}},We={basic:{uniforms:pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.fog,_t.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:pe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:pe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:pe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:pe([_t.points,_t.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:pe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:pe([_t.common,_t.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:pe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:pe([_t.sprite,_t.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},cube:{uniforms:pe([_t.envmap,{opacity:{value:1}}]),vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:pe([_t.common,_t.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:pe([_t.lights,_t.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};We.physical={uniforms:pe([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ct(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};function Zf(r,t,e,n,i,s){const o=new qt(0);let a=i===!0?0:1,c,l,f=null,u=0,h=null;function m(p,d){let _=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=t.get(y));const w=r.xr,v=w.getSession&&w.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Nr)?(l===void 0&&(l=new Xe(new Yi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:mi(We.cube.uniforms),vertexShader:We.cube.vertexShader,fragmentShader:We.cube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(f!==y||u!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,h=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Xe(new $s(2,2),new kn({name:"BackgroundMaterial",uniforms:mi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,h=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){e.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function Jf(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,f=!1;function u(B,rt,J,q,k){let W=!1;if(o){const Y=p(q,J,rt);l!==Y&&(l=Y,m(l.object)),W=_(B,q,J,k),W&&y(B,q,J,k)}else{const Y=rt.wireframe===!0;(l.geometry!==q.id||l.program!==J.id||l.wireframe!==Y)&&(l.geometry=q.id,l.program=J.id,l.wireframe=Y,W=!0)}k!==null&&e.update(k,34963),(W||f)&&(f=!1,x(B,rt,J,q),k!==null&&r.bindBuffer(34963,e.get(k).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(B){return n.isWebGL2?r.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?r.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function p(B,rt,J){const q=J.wireframe===!0;let k=a[B.id];k===void 0&&(k={},a[B.id]=k);let W=k[rt.id];W===void 0&&(W={},k[rt.id]=W);let Y=W[q];return Y===void 0&&(Y=d(h()),W[q]=Y),Y}function d(B){const rt=[],J=[],q=[];for(let k=0;k<i;k++)rt[k]=0,J[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rt,enabledAttributes:J,attributeDivisors:q,object:B,attributes:{},index:null}}function _(B,rt,J,q){const k=l.attributes,W=rt.attributes;let Y=0;const ht=J.getAttributes();for(const R in ht)if(ht[R].location>=0){const S=k[R];let z=W[R];if(z===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(z=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(z=B.instanceColor)),S===void 0||S.attribute!==z||z&&S.data!==z.data)return!0;Y++}return l.attributesNum!==Y||l.index!==q}function y(B,rt,J,q){const k={},W=rt.attributes;let Y=0;const ht=J.getAttributes();for(const R in ht)if(ht[R].location>=0){let S=W[R];S===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(S=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(S=B.instanceColor));const z={};z.attribute=S,S&&S.data&&(z.data=S.data),k[R]=z,Y++}l.attributes=k,l.attributesNum=Y,l.index=q}function w(){const B=l.newAttributes;for(let rt=0,J=B.length;rt<J;rt++)B[rt]=0}function v(B){M(B,0)}function M(B,rt){const J=l.newAttributes,q=l.enabledAttributes,k=l.attributeDivisors;J[B]=1,q[B]===0&&(r.enableVertexAttribArray(B),q[B]=1),k[B]!==rt&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,rt),k[B]=rt)}function A(){const B=l.newAttributes,rt=l.enabledAttributes;for(let J=0,q=rt.length;J<q;J++)rt[J]!==B[J]&&(r.disableVertexAttribArray(J),rt[J]=0)}function F(B,rt,J,q,k,W){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(B,rt,J,k,W):r.vertexAttribPointer(B,rt,J,q,k,W)}function x(B,rt,J,q){if(n.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const k=q.attributes,W=J.getAttributes(),Y=rt.defaultAttributeValues;for(const ht in W){const R=W[ht];if(R.location>=0){let P=k[ht];if(P===void 0&&(ht==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),ht==="instanceColor"&&B.instanceColor&&(P=B.instanceColor)),P!==void 0){const S=P.normalized,z=P.itemSize,I=e.get(P);if(I===void 0)continue;const N=I.buffer,K=I.type,ft=I.bytesPerElement;if(P.isInterleavedBufferAttribute){const nt=P.data,pt=nt.stride,H=P.offset;if(nt.isInstancedInterleavedBuffer){for(let j=0;j<R.locationSize;j++)M(R.location+j,nt.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let j=0;j<R.locationSize;j++)v(R.location+j);r.bindBuffer(34962,N);for(let j=0;j<R.locationSize;j++)F(R.location+j,z/R.locationSize,K,S,pt*ft,(H+z/R.locationSize*j)*ft)}else{if(P.isInstancedBufferAttribute){for(let nt=0;nt<R.locationSize;nt++)M(R.location+nt,P.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let nt=0;nt<R.locationSize;nt++)v(R.location+nt);r.bindBuffer(34962,N);for(let nt=0;nt<R.locationSize;nt++)F(R.location+nt,z/R.locationSize,K,S,z*ft,z/R.locationSize*nt*ft)}}else if(Y!==void 0){const S=Y[ht];if(S!==void 0)switch(S.length){case 2:r.vertexAttrib2fv(R.location,S);break;case 3:r.vertexAttrib3fv(R.location,S);break;case 4:r.vertexAttrib4fv(R.location,S);break;default:r.vertexAttrib1fv(R.location,S)}}}}A()}function D(){it();for(const B in a){const rt=a[B];for(const J in rt){const q=rt[J];for(const k in q)g(q[k].object),delete q[k];delete rt[J]}delete a[B]}}function V(B){if(a[B.id]===void 0)return;const rt=a[B.id];for(const J in rt){const q=rt[J];for(const k in q)g(q[k].object),delete q[k];delete rt[J]}delete a[B.id]}function U(B){for(const rt in a){const J=a[rt];if(J[B.id]===void 0)continue;const q=J[B.id];for(const k in q)g(q[k].object),delete q[k];delete J[B.id]}}function it(){at(),f=!0,l!==c&&(l=c,m(l.object))}function at(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:it,resetDefaultState:at,dispose:D,releaseStatesOfGeometry:V,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:v,disableUnusedAttributes:A}}function Kf(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,f){r.drawArrays(s,l,f),e.update(f,s,1)}function c(l,f,u){if(u===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,f,u),e.update(f,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Qf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),_=r.getParameter(36348),y=r.getParameter(36349),w=h>0,v=o||t.has("OES_texture_float"),M=w&&v,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:w,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:A}}function td(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new wn,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,m){const g=u.length!==0||h||n!==0||i;return i=h,e=f(u,m,0),n=u.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,h,m){const g=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,_=r.get(u);if(!i||g===null||g.length===0||s&&!d)s?f(null):l();else{const y=s?0:n,w=y*4;let v=_.clippingState||null;c.value=v,v=f(g,h,w,m);for(let M=0;M!==w;++M)v[M]=e[M];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,m,g){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=c.value,g!==!0||d===null){const _=m+p*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<_)&&(d=new Float32Array(_));for(let w=0,v=m;w!==p;++w,v+=4)o.copy(u[w]).applyMatrix4(y,a),o.normal.toArray(d,v),d[v+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,d}}function ed(r){let t=new WeakMap;function e(o,a){return a===Cs?o.mapping=fi:a===As&&(o.mapping=di),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cs||a===As)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gu(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class nd extends sl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const si=4,Zo=[.125,.215,.35,.446,.526,.582],En=20,ms=new nd,Jo=new qt;let gs=null;const Tn=(1+Math.sqrt(5))/2,ni=1/Tn,Ko=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Tn,ni),new O(0,Tn,-ni),new O(ni,0,Tn),new O(-ni,0,Tn),new O(Tn,ni,0),new O(-Tn,ni,0)];class Qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){gs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gs),t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Ui,format:qe,encoding:zn,depthBuffer:!1},i=ta(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ta(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=id(s)),this._blurMaterial=rd(s,t,e)}return i}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,n,i){const a=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Jo),f.toneMapping=an,f.autoClear=!1;const m=new qs({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Xe(new Yi,m);let p=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,p=!0):(m.color.copy(Jo),p=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):y===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const w=this._cubeSize;vr(i,y*w,_>2?w:0,w,w),f.setRenderTarget(i),p&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===fi||t.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=na()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ko[(i-1)%Ko.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Xe(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*En-1),p=s/g,d=isFinite(s)?1+Math.floor(f*p):En;d>En&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${En}`);const _=[];let y=0;for(let F=0;F<En;++F){const x=F/p,D=Math.exp(-x*x/2);_.push(D),F===0?y+=D:F<d&&(y+=2*D)}for(let F=0;F<_.length;F++)_[F]=_[F]/y;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const v=this._sizeLods[i],M=3*v*(i>w-si?i-w+si:0),A=4*(this._cubeSize-v);vr(e,M,A,3*v,2*v),c.setRenderTarget(e),c.render(u,ms)}}function id(r){const t=[],e=[],n=[];let i=r;const s=r-si+1+Zo.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-si?c=Zo[o-r+si-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,g=6,p=3,d=2,_=1,y=new Float32Array(p*g*m),w=new Float32Array(d*g*m),v=new Float32Array(_*g*m);for(let A=0;A<m;A++){const F=A%3*2/3-1,x=A>2?0:-1,D=[F,x,0,F+2/3,x,0,F+2/3,x+1,0,F,x,0,F+2/3,x+1,0,F,x+1,0];y.set(D,p*g*A),w.set(h,d*g*A);const V=[A,A,A,A,A,A];v.set(V,_*g*A)}const M=new Ye;M.setAttribute("position",new je(y,p)),M.setAttribute("uv",new je(w,d)),M.setAttribute("faceIndex",new je(v,_)),t.push(M),i>si&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ta(r,t,e){const n=new On(r,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function rd(r,t,e){const n=new Float32Array(En),i=new O(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ea(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function na(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sd(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cs||c===As,f=c===fi||c===di;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Qo(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||f&&u&&i(u)){e===null&&(e=new Qo(r));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function od(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ad(r,t,e,n){const i={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const g in h)t.update(h[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)t.update(p[d],34962)}}function l(u){const h=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let w=0,v=y.length;w<v;w+=3){const M=y[w+0],A=y[w+1],F=y[w+2];h.push(M,A,A,F,F,M)}}else{const y=g.array;p=g.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const M=w+0,A=w+1,F=w+2;h.push(M,A,A,F,F,M)}}const d=new(Ja(h)?rl:il)(h,1);d.version=p;const _=s.get(u);_&&t.remove(_),s.set(u,d)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function ld(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function f(h,m){r.drawElements(s,m,a,h*c),e.update(m,s,1)}function u(h,m,g){if(g===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=u}function cd(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ud(r,t){return r[0]-t[0]}function hd(r,t){return Math.abs(t[1])-Math.abs(r[1])}function _s(r,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Uint8Array?e=255:n instanceof Uint16Array?e=65535:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(e)}function fd(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new jt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,f,u,h){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(f);if(_===void 0||_.count!==d){let J=function(){B.dispose(),s.delete(f),f.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,F=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let V=0;v===!0&&(V=1),M===!0&&(V=2),A===!0&&(V=3);let U=f.attributes.position.count*V,it=1;U>t.maxTextureSize&&(it=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const at=new Float32Array(U*it*4*d),B=new el(at,U,it,d);B.type=Pn,B.needsUpdate=!0;const rt=V*4;for(let q=0;q<d;q++){const k=F[q],W=x[q],Y=D[q],ht=U*it*4*q;for(let R=0;R<k.count;R++){const P=R*rt;v===!0&&(o.fromBufferAttribute(k,R),k.normalized===!0&&_s(o,k),at[ht+P+0]=o.x,at[ht+P+1]=o.y,at[ht+P+2]=o.z,at[ht+P+3]=0),M===!0&&(o.fromBufferAttribute(W,R),W.normalized===!0&&_s(o,W),at[ht+P+4]=o.x,at[ht+P+5]=o.y,at[ht+P+6]=o.z,at[ht+P+7]=0),A===!0&&(o.fromBufferAttribute(Y,R),Y.normalized===!0&&_s(o,Y),at[ht+P+8]=o.x,at[ht+P+9]=o.y,at[ht+P+10]=o.z,at[ht+P+11]=Y.itemSize===4?o.w:1)}}_={count:d,texture:B,size:new ct(U,it)},s.set(f,_),f.addEventListener("dispose",J)}let y=0;for(let v=0;v<m.length;v++)y+=m[v];const w=f.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=n[f.id];if(d===void 0||d.length!==p){d=[];for(let M=0;M<p;M++)d[M]=[M,0];n[f.id]=d}for(let M=0;M<p;M++){const A=d[M];A[0]=M,A[1]=m[M]}d.sort(hd);for(let M=0;M<8;M++)M<p&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ud);const _=f.morphAttributes.position,y=f.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const A=a[M],F=A[0],x=A[1];F!==Number.MAX_SAFE_INTEGER&&x?(_&&f.getAttribute("morphTarget"+M)!==_[F]&&f.setAttribute("morphTarget"+M,_[F]),y&&f.getAttribute("morphNormal"+M)!==y[F]&&f.setAttribute("morphNormal"+M,y[F]),i[M]=x,w+=x):(_&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),y&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),i[M]=0)}const v=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function dd(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,u=t.get(c,f);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const ll=new Ve,cl=new el,ul=new Qc,hl=new ol,ia=[],ra=[],sa=new Float32Array(16),oa=new Float32Array(9),aa=new Float32Array(4);function vi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ia[i];if(s===void 0&&(s=new Float32Array(i),ia[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function zr(r,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function pd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function md(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function gd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function _d(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function xd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;aa.set(n),r.uniformMatrix2fv(this.addr,!1,aa),ve(e,n)}}function vd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;oa.set(n),r.uniformMatrix3fv(this.addr,!1,oa),ve(e,n)}}function yd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;sa.set(n),r.uniformMatrix4fv(this.addr,!1,sa),ve(e,n)}}function Md(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function bd(r,t){const e=this.cache;xe(e,t)||(r.uniform2iv(this.addr,t),ve(e,t))}function Sd(r,t){const e=this.cache;xe(e,t)||(r.uniform3iv(this.addr,t),ve(e,t))}function wd(r,t){const e=this.cache;xe(e,t)||(r.uniform4iv(this.addr,t),ve(e,t))}function Td(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ed(r,t){const e=this.cache;xe(e,t)||(r.uniform2uiv(this.addr,t),ve(e,t))}function Cd(r,t){const e=this.cache;xe(e,t)||(r.uniform3uiv(this.addr,t),ve(e,t))}function Ad(r,t){const e=this.cache;xe(e,t)||(r.uniform4uiv(this.addr,t),ve(e,t))}function Ld(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ll,i)}function Pd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ul,i)}function Dd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hl,i)}function Rd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cl,i)}function Id(r){switch(r){case 5126:return pd;case 35664:return md;case 35665:return gd;case 35666:return _d;case 35674:return xd;case 35675:return vd;case 35676:return yd;case 5124:case 35670:return Md;case 35667:case 35671:return bd;case 35668:case 35672:return Sd;case 35669:case 35673:return wd;case 5125:return Td;case 36294:return Ed;case 36295:return Cd;case 36296:return Ad;case 35678:case 36198:case 36298:case 36306:case 35682:return Ld;case 35679:case 36299:case 36307:return Pd;case 35680:case 36300:case 36308:case 36293:return Dd;case 36289:case 36303:case 36311:case 36292:return Rd}}function Nd(r,t){r.uniform1fv(this.addr,t)}function Fd(r,t){const e=vi(t,this.size,2);r.uniform2fv(this.addr,e)}function zd(r,t){const e=vi(t,this.size,3);r.uniform3fv(this.addr,e)}function Od(r,t){const e=vi(t,this.size,4);r.uniform4fv(this.addr,e)}function kd(r,t){const e=vi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bd(r,t){const e=vi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Ud(r,t){const e=vi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Gd(r,t){r.uniform1iv(this.addr,t)}function Vd(r,t){r.uniform2iv(this.addr,t)}function Hd(r,t){r.uniform3iv(this.addr,t)}function Wd(r,t){r.uniform4iv(this.addr,t)}function qd(r,t){r.uniform1uiv(this.addr,t)}function Xd(r,t){r.uniform2uiv(this.addr,t)}function $d(r,t){r.uniform3uiv(this.addr,t)}function jd(r,t){r.uniform4uiv(this.addr,t)}function Yd(r,t,e){const n=t.length,i=zr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||ll,i[s])}function Zd(r,t,e){const n=t.length,i=zr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||ul,i[s])}function Jd(r,t,e){const n=t.length,i=zr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||hl,i[s])}function Kd(r,t,e){const n=t.length,i=zr(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||cl,i[s])}function Qd(r){switch(r){case 5126:return Nd;case 35664:return Fd;case 35665:return zd;case 35666:return Od;case 35674:return kd;case 35675:return Bd;case 35676:return Ud;case 5124:case 35670:return Gd;case 35667:case 35671:return Vd;case 35668:case 35672:return Hd;case 35669:case 35673:return Wd;case 5125:return qd;case 36294:return Xd;case 36295:return $d;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Yd;case 35679:case 36299:case 36307:return Zd;case 35680:case 36300:case 36308:case 36293:return Jd;case 36289:case 36303:case 36311:case 36292:return Kd}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Id(e.type)}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Qd(e.type)}}class np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function la(r,t){r.seq.push(t),r.map[t.id]=t}function ip(r,t,e){const n=r.name,i=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),o=xs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){la(e,l===void 0?new tp(a,r,t):new ep(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new np(a),la(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ip(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ca(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let rp=0;function sp(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function op(r){switch(r){case zn:return["Linear","( value )"];case te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ua(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sp(r.getShaderSource(t),o)}else return i}function ap(r,t){const e=op(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function lp(r,t){let e;switch(t){case uc:e="Linear";break;case hc:e="Reinhard";break;case fc:e="OptimizedCineon";break;case dc:e="ACESFilmic";break;case pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cp(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function up(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hp(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Li(r){return r!==""}function ha(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fa(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(r){return r.replace(fp,dp)}function dp(r,t){const e=zt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Is(e)}const pp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(r){return r.replace(mp,fl).replace(pp,gp)}function gp(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),fl(r,t,e,n)}function fl(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pa(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _p(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wa?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function xp(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fi:case di:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function yp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $a:t="ENVMAP_BLENDING_MULTIPLY";break;case lc:t="ENVMAP_BLENDING_MIX";break;case cc:t="ENVMAP_BLENDING_ADD";break}return t}function Mp(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bp(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=_p(e),l=xp(e),f=vp(e),u=yp(e),h=Mp(e),m=e.isWebGL2?"":cp(e),g=up(s),p=i.createProgram();let d,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Li).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Li).join(`
`),_.length>0&&(_+=`
`)):(d=[pa(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),_=[m,pa(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?zt.tonemapping_pars_fragment:"",e.toneMapping!==an?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.encodings_pars_fragment,ap("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),o=Is(o),o=ha(o,e),o=fa(o,e),a=Is(a),a=ha(a,e),a=fa(a,e),o=da(o),a=da(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=y+d+o,v=y+_+a,M=ca(i,35633,w),A=ca(i,35632,v);if(i.attachShader(p,M),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const D=i.getProgramInfoLog(p).trim(),V=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(A).trim();let it=!0,at=!0;if(i.getProgramParameter(p,35714)===!1){it=!1;const B=ua(i,M,"vertex"),rt=ua(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+D+`
`+B+`
`+rt)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(V===""||U==="")&&(at=!1);at&&(this.diagnostics={runnable:it,programLog:D,vertexShader:{log:V,prefix:d},fragmentShader:{log:U,prefix:_}})}i.deleteShader(M),i.deleteShader(A);let F;this.getUniforms=function(){return F===void 0&&(F=new Ar(i,p)),F};let x;return this.getAttributes=function(){return x===void 0&&(x=hp(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=rp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}let Sp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new Tp(t);e.set(t,n)}return e.get(t)}}class Tp{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Ep(r,t,e,n,i,s,o){const a=new nl,c=new wp,l=[],f=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,D,V,U,it){const at=U.fog,B=it.geometry,rt=x.isMeshStandardMaterial?U.environment:null,J=(x.isMeshStandardMaterial?e:t).get(x.envMap||rt),q=!!J&&J.mapping===Nr?J.image.height:null,k=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const W=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Y=W!==void 0?W.length:0;let ht=0;B.morphAttributes.position!==void 0&&(ht=1),B.morphAttributes.normal!==void 0&&(ht=2),B.morphAttributes.color!==void 0&&(ht=3);let R,P,S,z;if(k){const pt=We[k];R=pt.vertexShader,P=pt.fragmentShader}else R=x.vertexShader,P=x.fragmentShader,c.update(x),S=c.getVertexShaderID(x),z=c.getFragmentShaderID(x);const I=r.getRenderTarget(),N=x.alphaTest>0,K=x.clearcoat>0,ft=x.iridescence>0;return{isWebGL2:f,shaderID:k,shaderName:x.type,vertexShader:R,fragmentShader:P,defines:x.defines,customVertexShaderID:S,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:it.isInstancedMesh===!0,instancingColor:it.isInstancedMesh===!0&&it.instanceColor!==null,supportsVertexTextures:h,outputEncoding:I===null?r.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:zn,map:!!x.map,matcap:!!x.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:q,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ic,tangentSpaceNormalMap:x.normalMapType===Za,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===te,clearcoat:K,clearcoatMap:K&&!!x.clearcoatMap,clearcoatRoughnessMap:K&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:K&&!!x.clearcoatNormalMap,iridescence:ft,iridescenceMap:ft&&!!x.iridescenceMap,iridescenceThicknessMap:ft&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===li,alphaMap:!!x.alphaMap,alphaTest:N,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!B.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!at,useFog:x.fog===!0,fogExp2:at&&at.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ht,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:an,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hi,flipSided:x.side===Ge,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const D=[];if(x.shaderID?D.push(x.shaderID):(D.push(x.customVertexShaderID),D.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)D.push(V),D.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(_(D,x),y(D,x),D.push(r.outputEncoding)),D.push(x.customProgramCacheKey),D.join()}function _(x,D){x.push(D.precision),x.push(D.outputEncoding),x.push(D.envMapMode),x.push(D.envMapCubeUVHeight),x.push(D.combine),x.push(D.vertexUvs),x.push(D.fogExp2),x.push(D.sizeAttenuation),x.push(D.morphTargetsCount),x.push(D.morphAttributeCount),x.push(D.numDirLights),x.push(D.numPointLights),x.push(D.numSpotLights),x.push(D.numHemiLights),x.push(D.numRectAreaLights),x.push(D.numDirLightShadows),x.push(D.numPointLightShadows),x.push(D.numSpotLightShadows),x.push(D.shadowMapType),x.push(D.toneMapping),x.push(D.numClippingPlanes),x.push(D.numClipIntersection),x.push(D.depthPacking)}function y(x,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.map&&a.enable(4),D.matcap&&a.enable(5),D.envMap&&a.enable(6),D.lightMap&&a.enable(7),D.aoMap&&a.enable(8),D.emissiveMap&&a.enable(9),D.bumpMap&&a.enable(10),D.normalMap&&a.enable(11),D.objectSpaceNormalMap&&a.enable(12),D.tangentSpaceNormalMap&&a.enable(13),D.clearcoat&&a.enable(14),D.clearcoatMap&&a.enable(15),D.clearcoatRoughnessMap&&a.enable(16),D.clearcoatNormalMap&&a.enable(17),D.iridescence&&a.enable(18),D.iridescenceMap&&a.enable(19),D.iridescenceThicknessMap&&a.enable(20),D.displacementMap&&a.enable(21),D.specularMap&&a.enable(22),D.roughnessMap&&a.enable(23),D.metalnessMap&&a.enable(24),D.gradientMap&&a.enable(25),D.alphaMap&&a.enable(26),D.alphaTest&&a.enable(27),D.vertexColors&&a.enable(28),D.vertexAlphas&&a.enable(29),D.vertexUvs&&a.enable(30),D.vertexTangents&&a.enable(31),D.uvsVertexOnly&&a.enable(32),D.fog&&a.enable(33),x.push(a.mask),a.disableAll(),D.useFog&&a.enable(0),D.flatShading&&a.enable(1),D.logarithmicDepthBuffer&&a.enable(2),D.skinning&&a.enable(3),D.morphTargets&&a.enable(4),D.morphNormals&&a.enable(5),D.morphColors&&a.enable(6),D.premultipliedAlpha&&a.enable(7),D.shadowMapEnabled&&a.enable(8),D.physicallyCorrectLights&&a.enable(9),D.doubleSided&&a.enable(10),D.flipSided&&a.enable(11),D.useDepthPacking&&a.enable(12),D.dithering&&a.enable(13),D.specularIntensityMap&&a.enable(14),D.specularColorMap&&a.enable(15),D.transmission&&a.enable(16),D.transmissionMap&&a.enable(17),D.thicknessMap&&a.enable(18),D.sheen&&a.enable(19),D.sheenColorMap&&a.enable(20),D.sheenRoughnessMap&&a.enable(21),D.decodeVideoTexture&&a.enable(22),D.opaque&&a.enable(23),x.push(a.mask)}function w(x){const D=g[x.type];let V;if(D){const U=We[D];V=fu.clone(U.uniforms)}else V=x.uniforms;return V}function v(x,D){let V;for(let U=0,it=l.length;U<it;U++){const at=l[U];if(at.cacheKey===D){V=at,++V.usedTimes;break}}return V===void 0&&(V=new bp(r,D,x,s),l.push(V)),V}function M(x){if(--x.usedTimes===0){const D=l.indexOf(x);l[D]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:A,programs:l,dispose:F}}function Cp(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Ap(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ma(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ga(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,h,m,g,p,d){let _=r[t];return _===void 0?(_={id:u.id,object:u,geometry:h,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:d},r[t]=_):(_.id=u.id,_.object=u,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=d),t++,_}function a(u,h,m,g,p,d){const _=o(u,h,m,g,p,d);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(u,h,m,g,p,d){const _=o(u,h,m,g,p,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(u,h){e.length>1&&e.sort(u||Ap),n.length>1&&n.sort(h||ma),i.length>1&&i.sort(h||ma)}function f(){for(let u=t,h=r.length;u<h;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:f,sort:l}}function Lp(){let r=new WeakMap;function t(n,i){let s;return r.has(n)===!1?(s=new ga,r.set(n,[s])):i>=r.get(n).length?(s=new ga,r.get(n).push(s)):s=r.get(n)[i],s}function e(){r=new WeakMap}return{get:t,dispose:e}}function Pp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function Dp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Rp=0;function Ip(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function Np(r,t){const e=new Pp,n=Dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)i.probe.push(new O);const s=new O,o=new ie,a=new ie;function c(f,u){let h=0,m=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let p=0,d=0,_=0,y=0,w=0,v=0,M=0,A=0;f.sort(Ip);const F=u!==!0?Math.PI:1;for(let D=0,V=f.length;D<V;D++){const U=f[D],it=U.color,at=U.intensity,B=U.distance,rt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=it.r*at*F,m+=it.g*at*F,g+=it.b*at*F;else if(U.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(U.sh.coefficients[J],at);else if(U.isDirectionalLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity*F),U.castShadow){const q=U.shadow,k=n.get(U);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=J,p++}else if(U.isSpotLight){const J=e.get(U);if(J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(it).multiplyScalar(at*F),J.distance=B,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,U.castShadow){const q=U.shadow,k=n.get(U);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=rt,i.spotShadowMatrix[_]=U.shadow.matrix,A++}i.spot[_]=J,_++}else if(U.isRectAreaLight){const J=e.get(U);J.color.copy(it).multiplyScalar(at),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=J,y++}else if(U.isPointLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity*F),J.distance=U.distance,J.decay=U.decay,U.castShadow){const q=U.shadow,k=n.get(U);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[d]=k,i.pointShadowMap[d]=rt,i.pointShadowMatrix[d]=U.shadow.matrix,M++}i.point[d]=J,d++}else if(U.isHemisphereLight){const J=e.get(U);J.skyColor.copy(U.color).multiplyScalar(at*F),J.groundColor.copy(U.groundColor).multiplyScalar(at*F),i.hemi[w]=J,w++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==p||x.pointLength!==d||x.spotLength!==_||x.rectAreaLength!==y||x.hemiLength!==w||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=d,i.hemi.length=w,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=A,x.directionalLength=p,x.pointLength=d,x.spotLength=_,x.rectAreaLength=y,x.hemiLength=w,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=A,i.version=Rp++)}function l(f,u){let h=0,m=0,g=0,p=0,d=0;const _=u.matrixWorldInverse;for(let y=0,w=f.length;y<w;y++){const v=f[y];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),d++}}}return{setup:c,setupView:l,state:i}}function _a(r,t){const e=new Np(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Fp(r,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new _a(r,t),e.set(s,[a])):o>=e.get(s).length?(a=new _a(r,t),e.get(s).push(a)):a=e.get(s)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class zp extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Op extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Up(r,t,e){let n=new Xs;const i=new ct,s=new ct,o=new jt,a=new zp({depthPacking:Rc}),c=new Op,l={},f=e.maxTextureSize,u={0:Ge,1:Bi,2:hi},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:kp,fragmentShader:Bp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Xe(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa,this.render=function(v,M,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const F=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),V=r.state;V.setBlending(_n),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);for(let U=0,it=v.length;U<it;U++){const at=v[U],B=at.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const rt=B.getFrameExtents();if(i.multiply(rt),s.copy(B.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/rt.x),i.x=s.x*rt.x,B.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/rt.y),i.y=s.y*rt.y,B.mapSize.y=s.y)),B.map===null){const q=this.type!==Ai?{minFilter:ye,magFilter:ye}:{};B.map=new On(i.x,i.y,q),B.map.texture.name=at.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const J=B.getViewportCount();for(let q=0;q<J;q++){const k=B.getViewport(q);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),V.viewport(o),B.updateMatrices(at,q),n=B.getFrustum(),w(M,A,B.camera,at,this.type)}B.isPointLightShadow!==!0&&this.type===Ai&&_(B,A),B.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(F,x,D)};function _(v,M){const A=t.update(p);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new On(i.x,i.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(M,null,A,h,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(M,null,A,m,p,null)}function y(v,M,A,F,x,D){let V=null;const U=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(U!==void 0?V=U:V=A.isPointLight===!0?c:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const it=V.uuid,at=M.uuid;let B=l[it];B===void 0&&(B={},l[it]=B);let rt=B[at];rt===void 0&&(rt=V.clone(),B[at]=rt),V=rt}return V.visible=M.visible,V.wireframe=M.wireframe,D===Ai?V.side=M.shadowSide!==null?M.shadowSide:M.side:V.side=M.shadowSide!==null?M.shadowSide:u[M.side],V.alphaMap=M.alphaMap,V.alphaTest=M.alphaTest,V.clipShadows=M.clipShadows,V.clippingPlanes=M.clippingPlanes,V.clipIntersection=M.clipIntersection,V.displacementMap=M.displacementMap,V.displacementScale=M.displacementScale,V.displacementBias=M.displacementBias,V.wireframeLinewidth=M.wireframeLinewidth,V.linewidth=M.linewidth,A.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(A.matrixWorld),V.nearDistance=F,V.farDistance=x),V}function w(v,M,A,F,x){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===Ai)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const U=t.update(v),it=v.material;if(Array.isArray(it)){const at=U.groups;for(let B=0,rt=at.length;B<rt;B++){const J=at[B],q=it[J.materialIndex];if(q&&q.visible){const k=y(v,q,F,A.near,A.far,x);r.renderBufferDirect(A,null,U,k,v,J)}}}else if(it.visible){const at=y(v,it,F,A.near,A.far,x);r.renderBufferDirect(A,null,U,at,v,null)}}const V=v.children;for(let U=0,it=V.length;U<it;U++)w(V[U],M,A,F,x)}}function Gp(r,t,e){const n=e.isWebGL2;function i(){let G=!1;const Mt=new jt;let st=null;const yt=new jt(0,0,0,0);return{setMask:function(vt){st!==vt&&!G&&(r.colorMask(vt,vt,vt,vt),st=vt)},setLocked:function(vt){G=vt},setClear:function(vt,kt,ue,ne,ln){ln===!0&&(vt*=ne,kt*=ne,ue*=ne),Mt.set(vt,kt,ue,ne),yt.equals(Mt)===!1&&(r.clearColor(vt,kt,ue,ne),yt.copy(Mt))},reset:function(){G=!1,st=null,yt.set(-1,0,0,0)}}}function s(){let G=!1,Mt=null,st=null,yt=null;return{setTest:function(vt){vt?N(2929):K(2929)},setMask:function(vt){Mt!==vt&&!G&&(r.depthMask(vt),Mt=vt)},setFunc:function(vt){if(st!==vt){if(vt)switch(vt){case ec:r.depthFunc(512);break;case nc:r.depthFunc(519);break;case ic:r.depthFunc(513);break;case Es:r.depthFunc(515);break;case rc:r.depthFunc(514);break;case sc:r.depthFunc(518);break;case oc:r.depthFunc(516);break;case ac:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);st=vt}},setLocked:function(vt){G=vt},setClear:function(vt){yt!==vt&&(r.clearDepth(vt),yt=vt)},reset:function(){G=!1,Mt=null,st=null,yt=null}}}function o(){let G=!1,Mt=null,st=null,yt=null,vt=null,kt=null,ue=null,ne=null,ln=null;return{setTest:function(Kt){G||(Kt?N(2960):K(2960))},setMask:function(Kt){Mt!==Kt&&!G&&(r.stencilMask(Kt),Mt=Kt)},setFunc:function(Kt,Je,Ce){(st!==Kt||yt!==Je||vt!==Ce)&&(r.stencilFunc(Kt,Je,Ce),st=Kt,yt=Je,vt=Ce)},setOp:function(Kt,Je,Ce){(kt!==Kt||ue!==Je||ne!==Ce)&&(r.stencilOp(Kt,Je,Ce),kt=Kt,ue=Je,ne=Ce)},setLocked:function(Kt){G=Kt},setClear:function(Kt){ln!==Kt&&(r.clearStencil(Kt),ln=Kt)},reset:function(){G=!1,Mt=null,st=null,yt=null,vt=null,kt=null,ue=null,ne=null,ln=null}}}const a=new i,c=new s,l=new o,f=new WeakMap,u=new WeakMap;let h={},m={},g=new WeakMap,p=[],d=null,_=!1,y=null,w=null,v=null,M=null,A=null,F=null,x=null,D=!1,V=null,U=null,it=null,at=null,B=null;const rt=r.getParameter(35661);let J=!1,q=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=q>=2);let W=null,Y={};const ht=r.getParameter(3088),R=r.getParameter(2978),P=new jt().fromArray(ht),S=new jt().fromArray(R);function z(G,Mt,st){const yt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(G,vt),r.texParameteri(G,10241,9728),r.texParameteri(G,10240,9728);for(let kt=0;kt<st;kt++)r.texImage2D(Mt+kt,0,6408,1,1,0,6408,5121,yt);return vt}const I={};I[3553]=z(3553,3553,1),I[34067]=z(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),N(2929),c.setFunc(Es),L(!1),E(oo),N(2884),X(_n);function N(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function K(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function ft(G,Mt){return m[G]!==Mt?(r.bindFramebuffer(G,Mt),m[G]=Mt,n&&(G===36009&&(m[36160]=Mt),G===36160&&(m[36009]=Mt)),!0):!1}function nt(G,Mt){let st=p,yt=!1;if(G)if(st=g.get(Mt),st===void 0&&(st=[],g.set(Mt,st)),G.isWebGLMultipleRenderTargets){const vt=G.texture;if(st.length!==vt.length||st[0]!==36064){for(let kt=0,ue=vt.length;kt<ue;kt++)st[kt]=36064+kt;st.length=vt.length,yt=!0}}else st[0]!==36064&&(st[0]=36064,yt=!0);else st[0]!==1029&&(st[0]=1029,yt=!0);yt&&(e.isWebGL2?r.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function pt(G){return d!==G?(r.useProgram(G),d=G,!0):!1}const H={[ii]:32774,[Wl]:32778,[ql]:32779};if(n)H[uo]=32775,H[ho]=32776;else{const G=t.get("EXT_blend_minmax");G!==null&&(H[uo]=G.MIN_EXT,H[ho]=G.MAX_EXT)}const j={[Xl]:0,[$l]:1,[jl]:768,[qa]:770,[tc]:776,[Kl]:774,[Zl]:772,[Yl]:769,[Xa]:771,[Ql]:775,[Jl]:773};function X(G,Mt,st,yt,vt,kt,ue,ne){if(G===_n){_===!0&&(K(3042),_=!1);return}if(_===!1&&(N(3042),_=!0),G!==Hl){if(G!==y||ne!==D){if((w!==ii||A!==ii)&&(r.blendEquation(32774),w=ii,A=ii),ne)switch(G){case li:r.blendFuncSeparate(1,771,1,771);break;case ao:r.blendFunc(1,1);break;case lo:r.blendFuncSeparate(0,769,0,1);break;case co:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case li:r.blendFuncSeparate(770,771,1,771);break;case ao:r.blendFunc(770,1);break;case lo:r.blendFuncSeparate(0,769,0,1);break;case co:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,M=null,F=null,x=null,y=G,D=ne}return}vt=vt||Mt,kt=kt||st,ue=ue||yt,(Mt!==w||vt!==A)&&(r.blendEquationSeparate(H[Mt],H[vt]),w=Mt,A=vt),(st!==v||yt!==M||kt!==F||ue!==x)&&(r.blendFuncSeparate(j[st],j[yt],j[kt],j[ue]),v=st,M=yt,F=kt,x=ue),y=G,D=null}function ot(G,Mt){G.side===hi?K(2884):N(2884);let st=G.side===Ge;Mt&&(st=!st),L(st),G.blending===li&&G.transparent===!1?X(_n):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const yt=G.stencilWrite;l.setTest(yt),yt&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),mt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?N(32926):K(32926)}function L(G){V!==G&&(G?r.frontFace(2304):r.frontFace(2305),V=G)}function E(G){G!==Bl?(N(2884),G!==U&&(G===oo?r.cullFace(1029):G===Ul?r.cullFace(1028):r.cullFace(1032))):K(2884),U=G}function ut(G){G!==it&&(J&&r.lineWidth(G),it=G)}function mt(G,Mt,st){G?(N(32823),(at!==Mt||B!==st)&&(r.polygonOffset(Mt,st),at=Mt,B=st)):K(32823)}function Ct(G){G?N(3089):K(3089)}function Pt(G){G===void 0&&(G=33984+rt-1),W!==G&&(r.activeTexture(G),W=G)}function C(G,Mt){W===null&&Pt();let st=Y[W];st===void 0&&(st={type:void 0,texture:void 0},Y[W]=st),(st.type!==G||st.texture!==Mt)&&(r.bindTexture(G,Mt||I[G]),st.type=G,st.texture=Mt)}function b(){const G=Y[W];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function gt(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(G){P.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),P.copy(G))}function St(G){S.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),S.copy(G))}function Rt(G,Mt){let st=u.get(Mt);st===void 0&&(st=new WeakMap,u.set(Mt,st));let yt=st.get(G);yt===void 0&&(yt=r.getUniformBlockIndex(Mt,G.name),st.set(G,yt))}function Ut(G,Mt){const yt=u.get(Mt).get(G);f.get(G)!==yt&&(r.uniformBlockBinding(Mt,yt,G.__bindingPointIndex),f.set(G,yt))}function ee(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},W=null,Y={},m={},g=new WeakMap,p=[],d=null,_=!1,y=null,w=null,v=null,M=null,A=null,F=null,x=null,D=!1,V=null,U=null,it=null,at=null,B=null,P.set(0,0,r.canvas.width,r.canvas.height),S.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:N,disable:K,bindFramebuffer:ft,drawBuffers:nt,useProgram:pt,setBlending:X,setMaterial:ot,setFlipSided:L,setCullFace:E,setLineWidth:ut,setPolygonOffset:mt,setScissorTest:Ct,activeTexture:Pt,bindTexture:C,unbindTexture:b,compressedTexImage2D:Q,texImage2D:Tt,texImage3D:bt,updateUBOMapping:Rt,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:tt,texSubImage2D:dt,texSubImage3D:gt,compressedTexSubImage2D:xt,scissor:Et,viewport:St,reset:ee}}function Vp(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,u=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return _?new OffscreenCanvas(C,b):Ir("canvas")}function w(C,b,Q,dt){let gt=1;if((C.width>dt||C.height>dt)&&(gt=dt/Math.max(C.width,C.height)),gt<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const xt=b?Rr:Math.floor,At=xt(gt*C.width),tt=xt(gt*C.height);p===void 0&&(p=y(At,tt));const Tt=Q?y(At,tt):p;return Tt.width=At,Tt.height=tt,Tt.getContext("2d").drawImage(C,0,0,At,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+At+"x"+tt+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Rs(C.width)&&Rs(C.height)}function M(C){return a?!1:C.wrapS!==Ue||C.wrapT!==Ue||C.minFilter!==ye&&C.minFilter!==Pe}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==ye&&C.minFilter!==Pe}function F(C){r.generateMipmap(C)}function x(C,b,Q,dt,gt=!1){if(a===!1)return b;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt=b;return b===6403&&(Q===5126&&(xt=33326),Q===5131&&(xt=33325),Q===5121&&(xt=33321)),b===33319&&(Q===5126&&(xt=33328),Q===5131&&(xt=33327),Q===5121&&(xt=33323)),b===6408&&(Q===5126&&(xt=34836),Q===5131&&(xt=34842),Q===5121&&(xt=dt===te&&gt===!1?35907:32856),Q===32819&&(xt=32854),Q===32820&&(xt=32855)),(xt===33325||xt===33326||xt===33327||xt===33328||xt===34842||xt===34836)&&t.get("EXT_color_buffer_float"),xt}function D(C,b,Q){return A(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==ye&&C.minFilter!==Pe?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function V(C){return C===ye||C===fo||C===po?9728:9729}function U(C){const b=C.target;b.removeEventListener("dispose",U),at(b),b.isVideoTexture&&g.delete(b)}function it(C){const b=C.target;b.removeEventListener("dispose",it),rt(b)}function at(C){const b=n.get(C);if(b.__webglInit===void 0)return;const Q=C.source,dt=d.get(Q);if(dt){const gt=dt[b.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&B(C),Object.keys(dt).length===0&&d.delete(Q)}n.remove(C)}function B(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const Q=C.source,dt=d.get(Q);delete dt[b.__cacheKey],o.memory.textures--}function rt(C){const b=C.texture,Q=n.get(C),dt=n.get(b);if(dt.__webglTexture!==void 0&&(r.deleteTexture(dt.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)r.deleteFramebuffer(Q.__webglFramebuffer[gt]),Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[gt]);else{if(r.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let gt=0;gt<Q.__webglColorRenderbuffer.length;gt++)Q.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer[gt]);Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let gt=0,xt=b.length;gt<xt;gt++){const At=n.get(b[gt]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),o.memory.textures--),n.remove(b[gt])}n.remove(b),n.remove(C)}let J=0;function q(){J=0}function k(){const C=J;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),J+=1,C}function W(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function Y(C,b){const Q=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){const dt=C.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,C,b);return}}e.activeTexture(33984+b),e.bindTexture(3553,Q.__webglTexture)}function ht(C,b){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){K(Q,C,b);return}e.activeTexture(33984+b),e.bindTexture(35866,Q.__webglTexture)}function R(C,b){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){K(Q,C,b);return}e.activeTexture(33984+b),e.bindTexture(32879,Q.__webglTexture)}function P(C,b){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){ft(Q,C,b);return}e.activeTexture(33984+b),e.bindTexture(34067,Q.__webglTexture)}const S={[Ls]:10497,[Ue]:33071,[Ps]:33648},z={[ye]:9728,[fo]:9984,[po]:9986,[Pe]:9729,[mc]:9985,[Fr]:9987};function I(C,b,Q){if(Q?(r.texParameteri(C,10242,S[b.wrapS]),r.texParameteri(C,10243,S[b.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,S[b.wrapR]),r.texParameteri(C,10240,z[b.magFilter]),r.texParameteri(C,10241,z[b.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(b.wrapS!==Ue||b.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,V(b.magFilter)),r.texParameteri(C,10241,V(b.minFilter)),b.minFilter!==ye&&b.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const dt=t.get("EXT_texture_filter_anisotropic");if(b.type===Pn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ui&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(C,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function N(C,b){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",U));const dt=b.source;let gt=d.get(dt);gt===void 0&&(gt={},d.set(dt,gt));const xt=W(b);if(xt!==C.__cacheKey){gt[xt]===void 0&&(gt[xt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),gt[xt].usedTimes++;const At=gt[C.__cacheKey];At!==void 0&&(gt[C.__cacheKey].usedTimes--,At.usedTimes===0&&B(b)),C.__cacheKey=xt,C.__webglTexture=gt[xt].texture}return Q}function K(C,b,Q){let dt=3553;b.isDataArrayTexture&&(dt=35866),b.isData3DTexture&&(dt=32879);const gt=N(C,b),xt=b.source;if(e.activeTexture(33984+Q),e.bindTexture(dt,C.__webglTexture),xt.version!==xt.__currentVersion||gt===!0){r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const At=M(b)&&v(b.image)===!1;let tt=w(b.image,At,!1,f);tt=Pt(b,tt);const Tt=v(tt)||a,bt=s.convert(b.format,b.encoding);let Et=s.convert(b.type),St=x(b.internalFormat,bt,Et,b.encoding,b.isVideoTexture);I(dt,b,Tt);let Rt;const Ut=b.mipmaps,ee=a&&b.isVideoTexture!==!0,G=xt.__currentVersion===void 0||gt===!0,Mt=D(b,tt,Tt);if(b.isDepthTexture)St=6402,a?b.type===Pn?St=36012:b.type===Ln?St=33190:b.type===ci?St=35056:St=33189:b.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Rn&&St===6402&&b.type!==Ya&&b.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ln,Et=s.convert(b.type)),b.format===pi&&St===6402&&(St=34041,b.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ci,Et=s.convert(b.type))),G&&(ee?e.texStorage2D(3553,1,St,tt.width,tt.height):e.texImage2D(3553,0,St,tt.width,tt.height,0,bt,Et,null));else if(b.isDataTexture)if(Ut.length>0&&Tt){ee&&G&&e.texStorage2D(3553,Mt,St,Ut[0].width,Ut[0].height);for(let st=0,yt=Ut.length;st<yt;st++)Rt=Ut[st],ee?e.texSubImage2D(3553,st,0,0,Rt.width,Rt.height,bt,Et,Rt.data):e.texImage2D(3553,st,St,Rt.width,Rt.height,0,bt,Et,Rt.data);b.generateMipmaps=!1}else ee?(G&&e.texStorage2D(3553,Mt,St,tt.width,tt.height),e.texSubImage2D(3553,0,0,0,tt.width,tt.height,bt,Et,tt.data)):e.texImage2D(3553,0,St,tt.width,tt.height,0,bt,Et,tt.data);else if(b.isCompressedTexture){ee&&G&&e.texStorage2D(3553,Mt,St,Ut[0].width,Ut[0].height);for(let st=0,yt=Ut.length;st<yt;st++)Rt=Ut[st],b.format!==qe?bt!==null?ee?e.compressedTexSubImage2D(3553,st,0,0,Rt.width,Rt.height,bt,Rt.data):e.compressedTexImage2D(3553,st,St,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(3553,st,0,0,Rt.width,Rt.height,bt,Et,Rt.data):e.texImage2D(3553,st,St,Rt.width,Rt.height,0,bt,Et,Rt.data)}else if(b.isDataArrayTexture)ee?(G&&e.texStorage3D(35866,Mt,St,tt.width,tt.height,tt.depth),e.texSubImage3D(35866,0,0,0,0,tt.width,tt.height,tt.depth,bt,Et,tt.data)):e.texImage3D(35866,0,St,tt.width,tt.height,tt.depth,0,bt,Et,tt.data);else if(b.isData3DTexture)ee?(G&&e.texStorage3D(32879,Mt,St,tt.width,tt.height,tt.depth),e.texSubImage3D(32879,0,0,0,0,tt.width,tt.height,tt.depth,bt,Et,tt.data)):e.texImage3D(32879,0,St,tt.width,tt.height,tt.depth,0,bt,Et,tt.data);else if(b.isFramebufferTexture){if(G)if(ee)e.texStorage2D(3553,Mt,St,tt.width,tt.height);else{let st=tt.width,yt=tt.height;for(let vt=0;vt<Mt;vt++)e.texImage2D(3553,vt,St,st,yt,0,bt,Et,null),st>>=1,yt>>=1}}else if(Ut.length>0&&Tt){ee&&G&&e.texStorage2D(3553,Mt,St,Ut[0].width,Ut[0].height);for(let st=0,yt=Ut.length;st<yt;st++)Rt=Ut[st],ee?e.texSubImage2D(3553,st,0,0,bt,Et,Rt):e.texImage2D(3553,st,St,bt,Et,Rt);b.generateMipmaps=!1}else ee?(G&&e.texStorage2D(3553,Mt,St,tt.width,tt.height),e.texSubImage2D(3553,0,0,0,bt,Et,tt)):e.texImage2D(3553,0,St,bt,Et,tt);A(b,Tt)&&F(dt),xt.__currentVersion=xt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ft(C,b,Q){if(b.image.length!==6)return;const dt=N(C,b),gt=b.source;if(e.activeTexture(33984+Q),e.bindTexture(34067,C.__webglTexture),gt.version!==gt.__currentVersion||dt===!0){r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const xt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let st=0;st<6;st++)!xt&&!At?tt[st]=w(b.image[st],!1,!0,l):tt[st]=At?b.image[st].image:b.image[st],tt[st]=Pt(b,tt[st]);const Tt=tt[0],bt=v(Tt)||a,Et=s.convert(b.format,b.encoding),St=s.convert(b.type),Rt=x(b.internalFormat,Et,St,b.encoding),Ut=a&&b.isVideoTexture!==!0,ee=gt.__currentVersion===void 0||dt===!0;let G=D(b,Tt,bt);I(34067,b,bt);let Mt;if(xt){Ut&&ee&&e.texStorage2D(34067,G,Rt,Tt.width,Tt.height);for(let st=0;st<6;st++){Mt=tt[st].mipmaps;for(let yt=0;yt<Mt.length;yt++){const vt=Mt[yt];b.format!==qe?Et!==null?Ut?e.compressedTexSubImage2D(34069+st,yt,0,0,vt.width,vt.height,Et,vt.data):e.compressedTexImage2D(34069+st,yt,Rt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(34069+st,yt,0,0,vt.width,vt.height,Et,St,vt.data):e.texImage2D(34069+st,yt,Rt,vt.width,vt.height,0,Et,St,vt.data)}}}else{Mt=b.mipmaps,Ut&&ee&&(Mt.length>0&&G++,e.texStorage2D(34067,G,Rt,tt[0].width,tt[0].height));for(let st=0;st<6;st++)if(At){Ut?e.texSubImage2D(34069+st,0,0,0,tt[st].width,tt[st].height,Et,St,tt[st].data):e.texImage2D(34069+st,0,Rt,tt[st].width,tt[st].height,0,Et,St,tt[st].data);for(let yt=0;yt<Mt.length;yt++){const kt=Mt[yt].image[st].image;Ut?e.texSubImage2D(34069+st,yt+1,0,0,kt.width,kt.height,Et,St,kt.data):e.texImage2D(34069+st,yt+1,Rt,kt.width,kt.height,0,Et,St,kt.data)}}else{Ut?e.texSubImage2D(34069+st,0,0,0,Et,St,tt[st]):e.texImage2D(34069+st,0,Rt,Et,St,tt[st]);for(let yt=0;yt<Mt.length;yt++){const vt=Mt[yt];Ut?e.texSubImage2D(34069+st,yt+1,0,0,Et,St,vt.image[st]):e.texImage2D(34069+st,yt+1,Rt,Et,St,vt.image[st])}}}A(b,bt)&&F(34067),gt.__currentVersion=gt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function nt(C,b,Q,dt,gt){const xt=s.convert(Q.format,Q.encoding),At=s.convert(Q.type),tt=x(Q.internalFormat,xt,At,Q.encoding);n.get(b).__hasExternalTextures||(gt===32879||gt===35866?e.texImage3D(gt,0,tt,b.width,b.height,b.depth,0,xt,At,null):e.texImage2D(gt,0,tt,b.width,b.height,0,xt,At,null)),e.bindFramebuffer(36160,C),mt(b)?h.framebufferTexture2DMultisampleEXT(36160,dt,gt,n.get(Q).__webglTexture,0,ut(b)):r.framebufferTexture2D(36160,dt,gt,n.get(Q).__webglTexture,0),e.bindFramebuffer(36160,null)}function pt(C,b,Q){if(r.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let dt=33189;if(Q||mt(b)){const gt=b.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Pn?dt=36012:gt.type===Ln&&(dt=33190));const xt=ut(b);mt(b)?h.renderbufferStorageMultisampleEXT(36161,xt,dt,b.width,b.height):r.renderbufferStorageMultisample(36161,xt,dt,b.width,b.height)}else r.renderbufferStorage(36161,dt,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const dt=ut(b);Q&&mt(b)===!1?r.renderbufferStorageMultisample(36161,dt,35056,b.width,b.height):mt(b)?h.renderbufferStorageMultisampleEXT(36161,dt,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const dt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let gt=0;gt<dt.length;gt++){const xt=dt[gt],At=s.convert(xt.format,xt.encoding),tt=s.convert(xt.type),Tt=x(xt.internalFormat,At,tt,xt.encoding),bt=ut(b);Q&&mt(b)===!1?r.renderbufferStorageMultisample(36161,bt,Tt,b.width,b.height):mt(b)?h.renderbufferStorageMultisampleEXT(36161,bt,Tt,b.width,b.height):r.renderbufferStorage(36161,Tt,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function H(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const dt=n.get(b.depthTexture).__webglTexture,gt=ut(b);if(b.depthTexture.format===Rn)mt(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,dt,0,gt):r.framebufferTexture2D(36160,36096,3553,dt,0);else if(b.depthTexture.format===pi)mt(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,dt,0,gt):r.framebufferTexture2D(36160,33306,3553,dt,0);else throw new Error("Unknown depthTexture format")}function j(C){const b=n.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");H(b.__webglFramebuffer,C)}else if(Q){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(36160,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]=r.createRenderbuffer(),pt(b.__webglDepthbuffer[dt],C,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),pt(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function X(C,b,Q){const dt=n.get(C);b!==void 0&&nt(dt.__webglFramebuffer,C,C.texture,36064,3553),Q!==void 0&&j(C)}function ot(C){const b=C.texture,Q=n.get(C),dt=n.get(b);C.addEventListener("dispose",it),C.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,o.memory.textures++);const gt=C.isWebGLCubeRenderTarget===!0,xt=C.isWebGLMultipleRenderTargets===!0,At=v(C)||a;if(gt){Q.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)Q.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(Q.__webglFramebuffer=r.createFramebuffer(),xt)if(i.drawBuffers){const tt=C.texture;for(let Tt=0,bt=tt.length;Tt<bt;Tt++){const Et=n.get(tt[Tt]);Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&mt(C)===!1){const tt=xt?b:[b];Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer);for(let Tt=0;Tt<tt.length;Tt++){const bt=tt[Tt];Q.__webglColorRenderbuffer[Tt]=r.createRenderbuffer(),r.bindRenderbuffer(36161,Q.__webglColorRenderbuffer[Tt]);const Et=s.convert(bt.format,bt.encoding),St=s.convert(bt.type),Rt=x(bt.internalFormat,Et,St,bt.encoding),Ut=ut(C);r.renderbufferStorageMultisample(36161,Ut,Rt,C.width,C.height),r.framebufferRenderbuffer(36160,36064+Tt,36161,Q.__webglColorRenderbuffer[Tt])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),pt(Q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(gt){e.bindTexture(34067,dt.__webglTexture),I(34067,b,At);for(let tt=0;tt<6;tt++)nt(Q.__webglFramebuffer[tt],C,b,36064,34069+tt);A(b,At)&&F(34067),e.unbindTexture()}else if(xt){const tt=C.texture;for(let Tt=0,bt=tt.length;Tt<bt;Tt++){const Et=tt[Tt],St=n.get(Et);e.bindTexture(3553,St.__webglTexture),I(3553,Et,At),nt(Q.__webglFramebuffer,C,Et,36064+Tt,3553),A(Et,At)&&F(3553)}e.unbindTexture()}else{let tt=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?tt=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(tt,dt.__webglTexture),I(tt,b,At),nt(Q.__webglFramebuffer,C,b,36064,tt),A(b,At)&&F(tt),e.unbindTexture()}C.depthBuffer&&j(C)}function L(C){const b=v(C)||a,Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let dt=0,gt=Q.length;dt<gt;dt++){const xt=Q[dt];if(A(xt,b)){const At=C.isWebGLCubeRenderTarget?34067:3553,tt=n.get(xt).__webglTexture;e.bindTexture(At,tt),F(At),e.unbindTexture()}}}function E(C){if(a&&C.samples>0&&mt(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Q=C.width,dt=C.height;let gt=16384;const xt=[],At=C.stencilBuffer?33306:36096,tt=n.get(C),Tt=C.isWebGLMultipleRenderTargets===!0;if(Tt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(36160,tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+bt,36161,null),e.bindFramebuffer(36160,tt.__webglFramebuffer),r.framebufferTexture2D(36009,36064+bt,3553,null,0);e.bindFramebuffer(36008,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,tt.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){xt.push(36064+bt),C.depthBuffer&&xt.push(At);const Et=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(Et===!1&&(C.depthBuffer&&(gt|=256),C.stencilBuffer&&(gt|=1024)),Tt&&r.framebufferRenderbuffer(36008,36064,36161,tt.__webglColorRenderbuffer[bt]),Et===!0&&(r.invalidateFramebuffer(36008,[At]),r.invalidateFramebuffer(36009,[At])),Tt){const St=n.get(b[bt]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,St,0)}r.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,gt,9728),m&&r.invalidateFramebuffer(36008,xt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Tt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(36160,tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+bt,36161,tt.__webglColorRenderbuffer[bt]);const Et=n.get(b[bt]).__webglTexture;e.bindFramebuffer(36160,tt.__webglFramebuffer),r.framebufferTexture2D(36009,36064+bt,3553,Et,0)}e.bindFramebuffer(36009,tt.__webglMultisampledFramebuffer)}}function ut(C){return Math.min(u,C.samples)}function mt(C){const b=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(C){const b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function Pt(C,b){const Q=C.encoding,dt=C.format,gt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ds||Q!==zn&&(Q===te?a===!1?t.has("EXT_sRGB")===!0&&dt===qe?(C.format=Ds,C.minFilter=Pe,C.generateMipmaps=!1):b=Qa.sRGBToLinear(b):(dt!==qe||gt!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Q)),b}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=ht,this.setTexture3D=R,this.setTextureCube=P,this.rebindTextures=X,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=E,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=mt}function Hp(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===Fn)return 5121;if(s===vc)return 32819;if(s===yc)return 32820;if(s===gc)return 5120;if(s===_c)return 5122;if(s===Ya)return 5123;if(s===xc)return 5124;if(s===Ln)return 5125;if(s===Pn)return 5126;if(s===Ui)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mc)return 6406;if(s===qe)return 6408;if(s===Sc)return 6409;if(s===wc)return 6410;if(s===Rn)return 6402;if(s===pi)return 34041;if(s===Tc)return 6403;if(s===bc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ds)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ec)return 36244;if(s===Cc)return 33319;if(s===Ac)return 33320;if(s===Lc)return 36249;if(s===Hr||s===Wr||s===qr||s===Xr)if(o===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mo||s===go||s===_o||s===xo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===go)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vo||s===yo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vo)return o===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mo||s===bo||s===So||s===wo||s===To||s===Eo||s===Co||s===Ao||s===Lo||s===Po||s===Do||s===Ro||s===Io||s===No)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Mo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===So)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===To)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Co)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ao)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Po)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Do)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ro)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Io)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===No)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Fo)return o===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ci?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Wp extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pi extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qp={type:"move"};class vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const d=e.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const y=new Pi;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[p.jointName]=y,l.add(y)}const _=l.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class Xp extends Ve{constructor(t,e,n,i,s,o,a,c,l,f){if(f=f!==void 0?f:Rn,f!==Rn&&f!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Rn&&(n=Ln),n===void 0&&f===pi&&(n=ci),super(null,i,s,o,a,c,f,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1}}class $p extends xi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,f=null,u=null,h=null,m=null;const g=e.getContextAttributes();let p=null,d=null;const _=[],y=[],w=new Ee;w.layers.enable(1),w.viewport=new jt;const v=new Ee;v.layers.enable(2),v.viewport=new jt;const M=[w,v],A=new Wp;A.layers.enable(1),A.layers.enable(2);let F=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=_[W];return Y===void 0&&(Y=new vs,_[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=_[W];return Y===void 0&&(Y=new vs,_[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=_[W];return Y===void 0&&(Y=new vs,_[W]=Y),Y.getHandSpace()};function D(W){const Y=y.indexOf(W.inputSource);if(Y===-1)return;const ht=_[Y];ht!==void 0&&ht.dispatchEvent({type:W.type,data:W.inputSource})}function V(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",U);for(let W=0;W<_.length;W++){const Y=y[W];Y!==null&&(y[W]=null,_[W].disconnect(Y))}F=null,x=null,t.setRenderTarget(p),h=null,u=null,f=null,i=null,d=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",V),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:h}),d=new On(h.framebufferWidth,h.framebufferHeight,{format:qe,type:Fn,encoding:t.outputEncoding})}else{let Y=null,ht=null,R=null;g.depth&&(R=g.stencil?35056:33190,Y=g.stencil?pi:Rn,ht=g.stencil?ci:Ln);const P={colorFormat:32856,depthFormat:R,scaleFactor:s};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(P),i.updateRenderState({layers:[u]}),d=new On(u.textureWidth,u.textureHeight,{format:qe,type:Fn,depthTexture:new Xp(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const S=t.properties.get(d);S.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(W){for(let Y=0;Y<W.removed.length;Y++){const ht=W.removed[Y],R=y.indexOf(ht);R>=0&&(y[R]=null,_[R].dispatchEvent({type:"disconnected",data:ht}))}for(let Y=0;Y<W.added.length;Y++){const ht=W.added[Y];let R=y.indexOf(ht);if(R===-1){for(let S=0;S<_.length;S++)if(S>=y.length){y.push(ht),R=S;break}else if(y[S]===null){y[S]=ht,R=S;break}if(R===-1)break}const P=_[R];P&&P.dispatchEvent({type:"connected",data:ht})}}const it=new O,at=new O;function B(W,Y,ht){it.setFromMatrixPosition(Y.matrixWorld),at.setFromMatrixPosition(ht.matrixWorld);const R=it.distanceTo(at),P=Y.projectionMatrix.elements,S=ht.projectionMatrix.elements,z=P[14]/(P[10]-1),I=P[14]/(P[10]+1),N=(P[9]+1)/P[5],K=(P[9]-1)/P[5],ft=(P[8]-1)/P[0],nt=(S[8]+1)/S[0],pt=z*ft,H=z*nt,j=R/(-ft+nt),X=j*-ft;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(X),W.translateZ(j),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ot=z+j,L=I+j,E=pt-X,ut=H+(R-X),mt=N*I/L*ot,Ct=K*I/L*ot;W.projectionMatrix.makePerspective(E,ut,mt,Ct,ot,L)}function rt(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;A.near=v.near=w.near=W.near,A.far=v.far=w.far=W.far,(F!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,x=A.far);const Y=W.parent,ht=A.cameras;rt(A,Y);for(let P=0;P<ht.length;P++)rt(ht[P],Y);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),W.position.copy(A.position),W.quaternion.copy(A.quaternion),W.scale.copy(A.scale),W.matrix.copy(A.matrix),W.matrixWorld.copy(A.matrixWorld);const R=W.children;for(let P=0,S=R.length;P<S;P++)R[P].updateMatrixWorld(!0);ht.length===2?B(A,w,v):A.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(W){u!==null&&(u.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)};let J=null;function q(W,Y){if(l=Y.getViewerPose(c||o),m=Y,l!==null){const ht=l.views;h!==null&&(t.setRenderTargetFramebuffer(d,h.framebuffer),t.setRenderTarget(d));let R=!1;ht.length!==A.cameras.length&&(A.cameras.length=0,R=!0);for(let P=0;P<ht.length;P++){const S=ht[P];let z=null;if(h!==null)z=h.getViewport(S);else{const N=f.getViewSubImage(u,S);z=N.viewport,P===0&&(t.setRenderTargetTextures(d,N.colorTexture,u.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(d))}let I=M[P];I===void 0&&(I=new Ee,I.layers.enable(P),I.viewport=new jt,M[P]=I),I.matrix.fromArray(S.transform.matrix),I.projectionMatrix.fromArray(S.projectionMatrix),I.viewport.set(z.x,z.y,z.width,z.height),P===0&&A.matrix.copy(I.matrix),R===!0&&A.cameras.push(I)}}for(let ht=0;ht<_.length;ht++){const R=y[ht],P=_[ht];R!==null&&P!==void 0&&P.update(R,Y,c||o)}J&&J(W,Y),m=null}const k=new al;k.setAnimationLoop(q),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}function jp(r,t){function e(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,_,y,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),f(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),u(p,d),d.isMeshPhysicalMaterial&&h(p,d,w)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),g(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ge&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ge&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=y*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ge&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Yp(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function c(y,w){const v=w.program;n.uniformBlockBinding(y,v)}function l(y,w){let v=i[y.id];v===void 0&&(g(y),v=f(y),i[y.id]=v,y.addEventListener("dispose",d));const M=w.program;n.updateUBOMapping(y,M);const A=t.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function f(y){const w=u();y.__bindingPointIndex=w;const v=r.createBuffer(),M=y.__size,A=y.usage;return r.bindBuffer(35345,v),r.bufferData(35345,M,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(35345,w);for(let A=0,F=v.length;A<F;A++){const x=v[A];if(m(x,A,M)===!0){const D=x.value,V=x.__offset;typeof D=="number"?(x.__data[0]=D,r.bufferSubData(35345,V,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):D.toArray(x.__data),r.bufferSubData(35345,V,x.__data))}}r.bindBuffer(35345,null)}function m(y,w,v){const M=y.value;if(v[w]===void 0)return typeof M=="number"?v[w]=M:v[w]=M.clone(),!0;if(typeof M=="number"){if(v[w]!==M)return v[w]=M,!0}else{const A=v[w];if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(y){const w=y.uniforms;let v=0;const M=16;let A=0;for(let F=0,x=w.length;F<x;F++){const D=w[F],V=p(D);if(D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,F>0){A=v%M;const U=M-A;A!==0&&U-V.boundary<0&&(v+=M-A,D.__offset=v)}v+=V.storage}return A=v%M,A>0&&(v+=M-A),y.__size=v,y.__cache={},this}function p(y){const w=y.value,v={boundary:0,storage:0};return typeof w=="number"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function d(y){const w=y.target;w.removeEventListener("dispose",d);const v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}function Zp(){const r=Ir("canvas");return r.style.display="block",r}function dl(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:Zp(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=r.alpha!==void 0?r.alpha:!1;let u=null,h=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=zn,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,y=0,w=null,v=-1,M=null;const A=new jt,F=new jt;let x=null,D=t.width,V=t.height,U=1,it=null,at=null;const B=new jt(0,0,D,V),rt=new jt(0,0,D,V);let J=!1;const q=new Xs;let k=!1,W=!1,Y=null;const ht=new ie,R=new ct,P=new O,S={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return w===null?U:1}let I=e;function N(T,$){for(let et=0;et<T.length;et++){const Z=T[et],lt=t.getContext(Z,$);if(lt!==null)return lt}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vs}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",ee,!1),I===null){const $=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&$.shift(),I=N($,T),I===null)throw N($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,ft,nt,pt,H,j,X,ot,L,E,ut,mt,Ct,Pt,C,b,Q,dt,gt,xt,At,tt,Tt,bt;function Et(){K=new od(I),ft=new Qf(I,K,r),K.init(ft),tt=new Hp(I,K,ft),nt=new Gp(I,K,ft),pt=new cd,H=new Cp,j=new Vp(I,K,nt,H,ft,tt,pt),X=new ed(p),ot=new sd(p),L=new vu(I,ft),Tt=new Jf(I,K,L,ft),E=new ad(I,L,pt,Tt),ut=new dd(I,E,L,pt),gt=new fd(I,ft,j),b=new td(H),mt=new Ep(p,X,ot,K,ft,Tt,b),Ct=new jp(p,H),Pt=new Lp,C=new Fp(K,ft),dt=new Zf(p,X,nt,ut,f,o),Q=new Up(p,ut,ft),bt=new Yp(I,pt,ft,nt),xt=new Kf(I,K,pt,ft),At=new ld(I,K,pt,ft),pt.programs=mt.programs,p.capabilities=ft,p.extensions=K,p.properties=H,p.renderLists=Pt,p.shadowMap=Q,p.state=nt,p.info=pt}Et();const St=new $p(p,I);this.xr=St,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(D,V,!1))},this.getSize=function(T){return T.set(D,V)},this.setSize=function(T,$,et){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=T,V=$,t.width=Math.floor(T*U),t.height=Math.floor($*U),et!==!1&&(t.style.width=T+"px",t.style.height=$+"px"),this.setViewport(0,0,T,$)},this.getDrawingBufferSize=function(T){return T.set(D*U,V*U).floor()},this.setDrawingBufferSize=function(T,$,et){D=T,V=$,U=et,t.width=Math.floor(T*et),t.height=Math.floor($*et),this.setViewport(0,0,T,$)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,$,et,Z){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,$,et,Z),nt.viewport(A.copy(B).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,$,et,Z){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,$,et,Z),nt.scissor(F.copy(rt).multiplyScalar(U).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){nt.setScissorTest(J=T)},this.setOpaqueSort=function(T){it=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(T=!0,$=!0,et=!0){let Z=0;T&&(Z|=16384),$&&(Z|=256),et&&(Z|=1024),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Pt.dispose(),C.dispose(),H.dispose(),X.dispose(),ot.dispose(),ut.dispose(),Tt.dispose(),bt.dispose(),mt.dispose(),St.dispose(),St.removeEventListener("sessionstart",kt),St.removeEventListener("sessionend",ue),Y&&(Y.dispose(),Y=null),ne.stop()};function Rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=pt.autoReset,$=Q.enabled,et=Q.autoUpdate,Z=Q.needsUpdate,lt=Q.type;Et(),pt.autoReset=T,Q.enabled=$,Q.autoUpdate=et,Q.needsUpdate=Z,Q.type=lt}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function G(T){const $=T.target;$.removeEventListener("dispose",G),Mt($)}function Mt(T){st(T),H.remove(T)}function st(T){const $=H.get(T).programs;$!==void 0&&($.forEach(function(et){mt.releaseProgram(et)}),T.isShaderMaterial&&mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,$,et,Z,lt,Lt){$===null&&($=S);const Dt=lt.isMesh&&lt.matrixWorld.determinant()<0,Nt=Cl(T,$,et,Z,lt);nt.setMaterial(Z,Dt);let It=et.index;const Ht=et.attributes.position;if(It===null){if(Ht===void 0||Ht.count===0)return}else if(It.count===0)return;let Ot=1;Z.wireframe===!0&&(It=E.getWireframeAttribute(et),Ot=2),Tt.setup(lt,Z,Nt,et,It);let Bt,Qt=xt;It!==null&&(Bt=L.get(It),Qt=At,Qt.setIndex(Bt));const vn=It!==null?It.count:Ht.count,Un=et.drawRange.start*Ot,Gn=et.drawRange.count*Ot,He=Lt!==null?Lt.start*Ot:0,Gt=Lt!==null?Lt.count*Ot:1/0,Vn=Math.max(Un,He),re=Math.min(vn,Un+Gn,He+Gt)-1,Ae=Math.max(0,re-Vn+1);if(Ae!==0){if(lt.isMesh)Z.wireframe===!0?(nt.setLineWidth(Z.wireframeLinewidth*z()),Qt.setMode(1)):Qt.setMode(4);else if(lt.isLine){let cn=Z.linewidth;cn===void 0&&(cn=1),nt.setLineWidth(cn*z()),lt.isLineSegments?Qt.setMode(1):lt.isLineLoop?Qt.setMode(2):Qt.setMode(3)}else lt.isPoints?Qt.setMode(0):lt.isSprite&&Qt.setMode(4);if(lt.isInstancedMesh)Qt.renderInstances(Vn,Ae,lt.count);else if(et.isInstancedBufferGeometry){const cn=Math.min(et.instanceCount,et._maxInstanceCount);Qt.renderInstances(Vn,Ae,cn)}else Qt.render(Vn,Ae)}},this.compile=function(T,$){h=C.get(T),h.init(),g.push(h),T.traverseVisible(function(et){et.isLight&&et.layers.test($.layers)&&(h.pushLight(et),et.castShadow&&h.pushShadow(et))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(et){const Z=et.material;if(Z)if(Array.isArray(Z))for(let lt=0;lt<Z.length;lt++){const Lt=Z[lt];kr(Lt,T,et)}else kr(Z,T,et)}),g.pop(),h=null};let yt=null;function vt(T){yt&&yt(T)}function kt(){ne.stop()}function ue(){ne.start()}const ne=new al;ne.setAnimationLoop(vt),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(T){yt=T,St.setAnimationLoop(T),T===null?ne.stop():ne.start()},St.addEventListener("sessionstart",kt),St.addEventListener("sessionend",ue),this.render=function(T,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),$.parent===null&&$.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera($),$=St.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,$,w),h=C.get(T,g.length),h.init(),g.push(h),ht.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),q.setFromProjectionMatrix(ht),W=this.localClippingEnabled,k=b.init(this.clippingPlanes,W,$),u=Pt.get(T,m.length),u.init(),m.push(u),ln(T,$,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(it,at),k===!0&&b.beginShadows();const et=h.state.shadowsArray;if(Q.render(et,T,$),k===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(u,T),h.setupLights(p.physicallyCorrectLights),$.isArrayCamera){const Z=$.cameras;for(let lt=0,Lt=Z.length;lt<Lt;lt++){const Dt=Z[lt];Kt(u,T,Dt,Dt.viewport)}}else Kt(u,T,$);w!==null&&(j.updateMultisampleRenderTarget(w),j.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(p,T,$),Tt.resetDefaultState(),v=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function ln(T,$,et,Z){if(T.visible===!1)return;if(T.layers.test($.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update($);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){Z&&P.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const Dt=ut.update(T),Nt=T.material;Nt.visible&&u.push(T,Dt,Nt,et,P.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==pt.render.frame&&(T.skeleton.update(),T.skeleton.frame=pt.render.frame),!T.frustumCulled||q.intersectsObject(T))){Z&&P.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const Dt=ut.update(T),Nt=T.material;if(Array.isArray(Nt)){const It=Dt.groups;for(let Ht=0,Ot=It.length;Ht<Ot;Ht++){const Bt=It[Ht],Qt=Nt[Bt.materialIndex];Qt&&Qt.visible&&u.push(T,Dt,Qt,et,P.z,Bt)}}else Nt.visible&&u.push(T,Dt,Nt,et,P.z,null)}}const Lt=T.children;for(let Dt=0,Nt=Lt.length;Dt<Nt;Dt++)ln(Lt[Dt],$,et,Z)}function Kt(T,$,et,Z){const lt=T.opaque,Lt=T.transmissive,Dt=T.transparent;h.setupLightsView(et),Lt.length>0&&Je(lt,$,et),Z&&nt.viewport(A.copy(Z)),lt.length>0&&Ce(lt,$,et),Lt.length>0&&Ce(Lt,$,et),Dt.length>0&&Ce(Dt,$,et),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Je(T,$,et){const Z=ft.isWebGL2;Y===null&&(Y=new On(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Ui:Fn,minFilter:Fr,samples:Z&&s===!0?4:0})),p.getDrawingBufferSize(R),Z?Y.setSize(R.x,R.y):Y.setSize(Rr(R.x),Rr(R.y));const lt=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const Lt=p.toneMapping;p.toneMapping=an,Ce(T,$,et),p.toneMapping=Lt,j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y),p.setRenderTarget(lt)}function Ce(T,$,et){const Z=$.isScene===!0?$.overrideMaterial:null;for(let lt=0,Lt=T.length;lt<Lt;lt++){const Dt=T[lt],Nt=Dt.object,It=Dt.geometry,Ht=Z===null?Dt.material:Z,Ot=Dt.group;Nt.layers.test(et.layers)&&El(Nt,$,et,It,Ht,Ot)}}function El(T,$,et,Z,lt,Lt){T.onBeforeRender(p,$,et,Z,lt,Lt),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),lt.onBeforeRender(p,$,et,Z,T,Lt),lt.transparent===!0&&lt.side===hi?(lt.side=Ge,lt.needsUpdate=!0,p.renderBufferDirect(et,$,Z,lt,T,Lt),lt.side=Bi,lt.needsUpdate=!0,p.renderBufferDirect(et,$,Z,lt,T,Lt),lt.side=hi):p.renderBufferDirect(et,$,Z,lt,T,Lt),T.onAfterRender(p,$,et,Z,lt,Lt)}function kr(T,$,et){$.isScene!==!0&&($=S);const Z=H.get(T),lt=h.state.lights,Lt=h.state.shadowsArray,Dt=lt.state.version,Nt=mt.getParameters(T,lt.state,Lt,$,et),It=mt.getProgramCacheKey(Nt);let Ht=Z.programs;Z.environment=T.isMeshStandardMaterial?$.environment:null,Z.fog=$.fog,Z.envMap=(T.isMeshStandardMaterial?ot:X).get(T.envMap||Z.environment),Ht===void 0&&(T.addEventListener("dispose",G),Ht=new Map,Z.programs=Ht);let Ot=Ht.get(It);if(Ot!==void 0){if(Z.currentProgram===Ot&&Z.lightsStateVersion===Dt)return no(T,Nt),Ot}else Nt.uniforms=mt.getUniforms(T),T.onBuild(et,Nt,p),T.onBeforeCompile(Nt,p),Ot=mt.acquireProgram(Nt,It),Ht.set(It,Ot),Z.uniforms=Nt.uniforms;const Bt=Z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=b.uniform),no(T,Nt),Z.needsLights=Ll(T),Z.lightsStateVersion=Dt,Z.needsLights&&(Bt.ambientLightColor.value=lt.state.ambient,Bt.lightProbe.value=lt.state.probe,Bt.directionalLights.value=lt.state.directional,Bt.directionalLightShadows.value=lt.state.directionalShadow,Bt.spotLights.value=lt.state.spot,Bt.spotLightShadows.value=lt.state.spotShadow,Bt.rectAreaLights.value=lt.state.rectArea,Bt.ltc_1.value=lt.state.rectAreaLTC1,Bt.ltc_2.value=lt.state.rectAreaLTC2,Bt.pointLights.value=lt.state.point,Bt.pointLightShadows.value=lt.state.pointShadow,Bt.hemisphereLights.value=lt.state.hemi,Bt.directionalShadowMap.value=lt.state.directionalShadowMap,Bt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,Bt.spotShadowMap.value=lt.state.spotShadowMap,Bt.spotShadowMatrix.value=lt.state.spotShadowMatrix,Bt.pointShadowMap.value=lt.state.pointShadowMap,Bt.pointShadowMatrix.value=lt.state.pointShadowMatrix);const Qt=Ot.getUniforms(),vn=Ar.seqWithValue(Qt.seq,Bt);return Z.currentProgram=Ot,Z.uniformsList=vn,Ot}function no(T,$){const et=H.get(T);et.outputEncoding=$.outputEncoding,et.instancing=$.instancing,et.skinning=$.skinning,et.morphTargets=$.morphTargets,et.morphNormals=$.morphNormals,et.morphColors=$.morphColors,et.morphTargetsCount=$.morphTargetsCount,et.numClippingPlanes=$.numClippingPlanes,et.numIntersection=$.numClipIntersection,et.vertexAlphas=$.vertexAlphas,et.vertexTangents=$.vertexTangents,et.toneMapping=$.toneMapping}function Cl(T,$,et,Z,lt){$.isScene!==!0&&($=S),j.resetTextureUnits();const Lt=$.fog,Dt=Z.isMeshStandardMaterial?$.environment:null,Nt=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:zn,It=(Z.isMeshStandardMaterial?ot:X).get(Z.envMap||Dt),Ht=Z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Ot=!!Z.normalMap&&!!et.attributes.tangent,Bt=!!et.morphAttributes.position,Qt=!!et.morphAttributes.normal,vn=!!et.morphAttributes.color,Un=Z.toneMapped?p.toneMapping:an,Gn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,He=Gn!==void 0?Gn.length:0,Gt=H.get(Z),Vn=h.state.lights;if(k===!0&&(W===!0||T!==M)){const Se=T===M&&Z.id===v;b.setState(Z,T,Se)}let re=!1;Z.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Vn.state.version||Gt.outputEncoding!==Nt||lt.isInstancedMesh&&Gt.instancing===!1||!lt.isInstancedMesh&&Gt.instancing===!0||lt.isSkinnedMesh&&Gt.skinning===!1||!lt.isSkinnedMesh&&Gt.skinning===!0||Gt.envMap!==It||Z.fog===!0&&Gt.fog!==Lt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==b.numPlanes||Gt.numIntersection!==b.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Ot||Gt.morphTargets!==Bt||Gt.morphNormals!==Qt||Gt.morphColors!==vn||Gt.toneMapping!==Un||ft.isWebGL2===!0&&Gt.morphTargetsCount!==He)&&(re=!0):(re=!0,Gt.__version=Z.version);let Ae=Gt.currentProgram;re===!0&&(Ae=kr(Z,$,lt));let cn=!1,yi=!1,Br=!1;const ge=Ae.getUniforms(),Mi=Gt.uniforms;if(nt.useProgram(Ae.program)&&(cn=!0,yi=!0,Br=!0),Z.id!==v&&(v=Z.id,yi=!0),cn||M!==T){if(ge.setValue(I,"projectionMatrix",T.projectionMatrix),ft.logarithmicDepthBuffer&&ge.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,yi=!0,Br=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const Se=ge.map.cameraPosition;Se!==void 0&&Se.setValue(I,P.setFromMatrixPosition(T.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ge.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||lt.isSkinnedMesh)&&ge.setValue(I,"viewMatrix",T.matrixWorldInverse)}if(lt.isSkinnedMesh){ge.setOptional(I,lt,"bindMatrix"),ge.setOptional(I,lt,"bindMatrixInverse");const Se=lt.skeleton;Se&&(ft.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),ge.setValue(I,"boneTexture",Se.boneTexture,j),ge.setValue(I,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ur=et.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0&&ft.isWebGL2===!0)&&gt.update(lt,et,Z,Ae),(yi||Gt.receiveShadow!==lt.receiveShadow)&&(Gt.receiveShadow=lt.receiveShadow,ge.setValue(I,"receiveShadow",lt.receiveShadow)),yi&&(ge.setValue(I,"toneMappingExposure",p.toneMappingExposure),Gt.needsLights&&Al(Mi,Br),Lt&&Z.fog===!0&&Ct.refreshFogUniforms(Mi,Lt),Ct.refreshMaterialUniforms(Mi,Z,U,V,Y),Ar.upload(I,Gt.uniformsList,Mi,j)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ar.upload(I,Gt.uniformsList,Mi,j),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ge.setValue(I,"center",lt.center),ge.setValue(I,"modelViewMatrix",lt.modelViewMatrix),ge.setValue(I,"normalMatrix",lt.normalMatrix),ge.setValue(I,"modelMatrix",lt.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Se=Z.uniformsGroups;for(let Gr=0,Pl=Se.length;Gr<Pl;Gr++)if(ft.isWebGL2){const io=Se[Gr];bt.update(io,Ae),bt.bind(io,Ae)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ae}function Al(T,$){T.ambientLightColor.needsUpdate=$,T.lightProbe.needsUpdate=$,T.directionalLights.needsUpdate=$,T.directionalLightShadows.needsUpdate=$,T.pointLights.needsUpdate=$,T.pointLightShadows.needsUpdate=$,T.spotLights.needsUpdate=$,T.spotLightShadows.needsUpdate=$,T.rectAreaLights.needsUpdate=$,T.hemisphereLights.needsUpdate=$}function Ll(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,$,et){H.get(T.texture).__webglTexture=$,H.get(T.depthTexture).__webglTexture=et;const Z=H.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=et===void 0,Z.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,$){const et=H.get(T);et.__webglFramebuffer=$,et.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(T,$=0,et=0){w=T,_=$,y=et;let Z=!0;if(T){const It=H.get(T);It.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(36160,null),Z=!1):It.__webglFramebuffer===void 0?j.setupRenderTarget(T):It.__hasExternalTextures&&j.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture)}let lt=null,Lt=!1,Dt=!1;if(T){const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture)&&(Dt=!0);const Ht=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(lt=Ht[$],Lt=!0):ft.isWebGL2&&T.samples>0&&j.useMultisampledRTT(T)===!1?lt=H.get(T).__webglMultisampledFramebuffer:lt=Ht,A.copy(T.viewport),F.copy(T.scissor),x=T.scissorTest}else A.copy(B).multiplyScalar(U).floor(),F.copy(rt).multiplyScalar(U).floor(),x=J;if(nt.bindFramebuffer(36160,lt)&&ft.drawBuffers&&Z&&nt.drawBuffers(T,lt),nt.viewport(A),nt.scissor(F),nt.setScissorTest(x),Lt){const It=H.get(T.texture);I.framebufferTexture2D(36160,36064,34069+$,It.__webglTexture,et)}else if(Dt){const It=H.get(T.texture),Ht=$||0;I.framebufferTextureLayer(36160,36064,It.__webglTexture,et||0,Ht)}v=-1},this.readRenderTargetPixels=function(T,$,et,Z,lt,Lt,Dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){nt.bindFramebuffer(36160,Nt);try{const It=T.texture,Ht=It.format,Ot=It.type;if(Ht!==qe&&tt.convert(Ht)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ot===Ui&&(K.has("EXT_color_buffer_half_float")||ft.isWebGL2&&K.has("EXT_color_buffer_float"));if(Ot!==Fn&&tt.convert(Ot)!==I.getParameter(35738)&&!(Ot===Pn&&(ft.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=T.width-Z&&et>=0&&et<=T.height-lt&&I.readPixels($,et,Z,lt,tt.convert(Ht),tt.convert(Ot),Lt)}finally{const It=w!==null?H.get(w).__webglFramebuffer:null;nt.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(T,$,et=0){const Z=Math.pow(2,-et),lt=Math.floor($.image.width*Z),Lt=Math.floor($.image.height*Z);j.setTexture2D($,0),I.copyTexSubImage2D(3553,et,0,0,T.x,T.y,lt,Lt),nt.unbindTexture()},this.copyTextureToTexture=function(T,$,et,Z=0){const lt=$.image.width,Lt=$.image.height,Dt=tt.convert(et.format),Nt=tt.convert(et.type);j.setTexture2D(et,0),I.pixelStorei(37440,et.flipY),I.pixelStorei(37441,et.premultiplyAlpha),I.pixelStorei(3317,et.unpackAlignment),$.isDataTexture?I.texSubImage2D(3553,Z,T.x,T.y,lt,Lt,Dt,Nt,$.image.data):$.isCompressedTexture?I.compressedTexSubImage2D(3553,Z,T.x,T.y,$.mipmaps[0].width,$.mipmaps[0].height,Dt,$.mipmaps[0].data):I.texSubImage2D(3553,Z,T.x,T.y,Dt,Nt,$.image),Z===0&&et.generateMipmaps&&I.generateMipmap(3553),nt.unbindTexture()},this.copyTextureToTexture3D=function(T,$,et,Z,lt=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Lt=T.max.x-T.min.x+1,Dt=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,It=tt.convert(Z.format),Ht=tt.convert(Z.type);let Ot;if(Z.isData3DTexture)j.setTexture3D(Z,0),Ot=32879;else if(Z.isDataArrayTexture)j.setTexture2DArray(Z,0),Ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,Z.flipY),I.pixelStorei(37441,Z.premultiplyAlpha),I.pixelStorei(3317,Z.unpackAlignment);const Bt=I.getParameter(3314),Qt=I.getParameter(32878),vn=I.getParameter(3316),Un=I.getParameter(3315),Gn=I.getParameter(32877),He=et.isCompressedTexture?et.mipmaps[0]:et.image;I.pixelStorei(3314,He.width),I.pixelStorei(32878,He.height),I.pixelStorei(3316,T.min.x),I.pixelStorei(3315,T.min.y),I.pixelStorei(32877,T.min.z),et.isDataTexture||et.isData3DTexture?I.texSubImage3D(Ot,lt,$.x,$.y,$.z,Lt,Dt,Nt,It,Ht,He.data):et.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ot,lt,$.x,$.y,$.z,Lt,Dt,Nt,It,He.data)):I.texSubImage3D(Ot,lt,$.x,$.y,$.z,Lt,Dt,Nt,It,Ht,He),I.pixelStorei(3314,Bt),I.pixelStorei(32878,Qt),I.pixelStorei(3316,vn),I.pixelStorei(3315,Un),I.pixelStorei(32877,Gn),lt===0&&Z.generateMipmaps&&I.generateMipmap(Ot),nt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?j.setTextureCube(T,0):T.isData3DTexture?j.setTexture3D(T,0):T.isDataArrayTexture?j.setTexture2DArray(T,0):j.setTexture2D(T,0),nt.unbindTexture()},this.resetState=function(){_=0,y=0,w=null,nt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Jp extends dl{}Jp.prototype.isWebGL1Renderer=!0;class Kp extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class Ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const f=n[i],h=n[i+1]-f,m=(o-f)/h;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new ct:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],o=[],a=new O,c=new ie;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const f=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);f<=l&&(l=f,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(me(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(me(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ys extends Ze{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ct,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,m=l-this.aY;c=h*f-m*u+this.aX,l=h*u+m*f+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qp extends Ys{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zs(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,f,u){let h=(o-s)/l-(a-s)/(l+f)+(a-o)/f,m=(a-o)/f-(c-o)/(f+u)+(c-a)/u;h*=f,m*=f,i(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const yr=new O,ys=new Zs,Ms=new Zs,bs=new Zs;class tm extends Ze{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,f;this.closed||a>0?l=i[(a-1)%s]:(yr.subVectors(i[0],i[1]).add(i[0]),l=yr);const u=i[a%s],h=i[(a+1)%s];if(this.closed||a+2<s?f=i[(a+2)%s]:(yr.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=yr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(f),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),ys.initNonuniformCatmullRom(l.x,u.x,h.x,f.x,g,p,d),Ms.initNonuniformCatmullRom(l.y,u.y,h.y,f.y,g,p,d),bs.initNonuniformCatmullRom(l.z,u.z,h.z,f.z,g,p,d)}else this.curveType==="catmullrom"&&(ys.initCatmullRom(l.x,u.x,h.x,f.x,this.tension),Ms.initCatmullRom(l.y,u.y,h.y,f.y,this.tension),bs.initCatmullRom(l.z,u.z,h.z,f.z,this.tension));return n.set(ys.calc(c),Ms.calc(c),bs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xa(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function em(r,t){const e=1-r;return e*e*t}function nm(r,t){return 2*(1-r)*r*t}function im(r,t){return r*r*t}function Fi(r,t,e,n){return em(r,t)+nm(r,e)+im(r,n)}function rm(r,t){const e=1-r;return e*e*e*t}function sm(r,t){const e=1-r;return 3*e*e*r*t}function om(r,t){return 3*(1-r)*r*r*t}function am(r,t){return r*r*r*t}function zi(r,t,e,n,i){return rm(r,t)+sm(r,e)+om(r,n)+am(r,i)}class pl extends Ze{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zi(t,i.x,s.x,o.x,a.x),zi(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lm extends Ze{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zi(t,i.x,s.x,o.x,a.x),zi(t,i.y,s.y,o.y,a.y),zi(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Js extends Ze{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ct;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cm extends Ze{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ml extends Ze{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fi(t,i.x,s.x,o.x),Fi(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends Ze{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Fi(t,i.x,s.x,o.x),Fi(t,i.y,s.y,o.y),Fi(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends Ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],f=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xa(a,c.x,l.x,f.x,u.x),xa(a,c.y,l.y,f.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:Qp,CatmullRomCurve3:tm,CubicBezierCurve:pl,CubicBezierCurve3:lm,EllipseCurve:Ys,LineCurve:Js,LineCurve3:cm,QuadraticBezierCurve:ml,QuadraticBezierCurve3:um,SplineCurve:gl});class hm extends Ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Js(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const f=c[l];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new _l[i.type]().fromJSON(i))}return this}}class ui extends hm{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Js(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new ml(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new pl(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+l,e+f,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Ys(t,e,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oi extends ui{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ui().fromJSON(i))}return this}}const fm={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=xl(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,f,u,h,m;if(n&&(s=_m(r,t,s,e)),r.length>80*e){a=l=r[0],c=f=r[1];for(let g=e;g<i;g+=e)u=r[g],h=r[g+1],u<a&&(a=u),h<c&&(c=h),u>l&&(l=u),h>f&&(f=h);m=Math.max(l-a,f-c),m=m!==0?1/m:0}return Gi(s,o,e,a,c,m),o}};function xl(r,t,e,n,i){let s,o;if(i===Am(r,t,e,n)>0)for(s=t;s<e;s+=n)o=va(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=va(s,r[s],r[s+1],o);return o&&Or(o,o.next)&&(Hi(o),o=o.next),o}function xn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Or(e,e.next)||Jt(e.prev,e,e.next)===0)){if(Hi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gi(r,t,e,n,i,s,o){if(!r)return;!o&&s&&bm(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?pm(r,n,i,s):dm(r)){t.push(c.i/e),t.push(r.i/e),t.push(l.i/e),Hi(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=mm(xn(r),t,e),Gi(r,t,e,n,i,s,2)):o===2&&gm(r,t,e,n,i,s):Gi(xn(r),t,e,n,i,s,1);break}}}function dm(r){const t=r.prev,e=r,n=r.next;if(Jt(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(oi(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&Jt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function pm(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Jt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,c=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,l=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,f=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=Ns(a,c,t,e,n),h=Ns(l,f,t,e,n);let m=r.prevZ,g=r.nextZ;for(;m&&m.z>=u&&g&&g.z<=h;){if(m!==r.prev&&m!==r.next&&oi(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Jt(m.prev,m,m.next)>=0||(m=m.prevZ,g!==r.prev&&g!==r.next&&oi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Jt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;m&&m.z>=u;){if(m!==r.prev&&m!==r.next&&oi(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;g&&g.z<=h;){if(g!==r.prev&&g!==r.next&&oi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function mm(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Or(i,s)&&vl(i,n,n.next,s)&&Vi(i,s)&&Vi(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),Hi(n),Hi(n.next),n=r=s),n=n.next}while(n!==r);return xn(n)}function gm(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tm(o,a)){let c=yl(o,a);o=xn(o,o.next),c=xn(c,c.next),Gi(o,t,e,n,i,s),Gi(c,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function _m(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=xl(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(wm(l));for(i.sort(xm),s=0;s<i.length;s++)vm(i[s],e),e=xn(e,e.next);return e}function xm(r,t){return r.x-t.x}function vm(r,t){if(t=ym(r,t),t){const e=yl(t,r);xn(t,t.next),xn(e,e.next)}}function ym(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s){if(s=h,h===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,c=o.x,l=o.y;let f=1/0,u;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&oi(i<l?n:s,i,c,l,i<l?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),Vi(e,r)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&Mm(o,e)))&&(o=e,f=u)),e=e.next;while(e!==a);return o}function Mm(r,t){return Jt(r.prev,r,t.prev)<0&&Jt(t.next,r,r.next)<0}function bm(r,t,e,n){let i=r;do i.z===null&&(i.z=Ns(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Sm(i)}function Sm(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Ns(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function wm(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function oi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function Tm(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Em(r,t)&&(Vi(r,t)&&Vi(t,r)&&Cm(r,t)&&(Jt(r.prev,r,t.prev)||Jt(r,t.prev,t))||Or(r,t)&&Jt(r.prev,r,r.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Or(r,t){return r.x===t.x&&r.y===t.y}function vl(r,t,e,n){const i=br(Jt(r,t,e)),s=br(Jt(r,t,n)),o=br(Jt(e,n,r)),a=br(Jt(e,n,t));return!!(i!==s&&o!==a||i===0&&Mr(r,e,t)||s===0&&Mr(r,n,t)||o===0&&Mr(e,r,n)||a===0&&Mr(e,t,n))}function Mr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function br(r){return r>0?1:r<0?-1:0}function Em(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&vl(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Vi(r,t){return Jt(r.prev,r,r.next)<0?Jt(r,t,r.next)>=0&&Jt(r,r.prev,t)>=0:Jt(r,t,r.prev)<0||Jt(r,r.next,t)<0}function Cm(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function yl(r,t){const e=new Fs(r.i,r.x,r.y),n=new Fs(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function va(r,t,e,n){const i=new Fs(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fs(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Am(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Nn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Nn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ya(t),Ma(n,t);let o=t.length;e.forEach(ya);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Ma(n,e[c]);const a=fm.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ya(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Ma(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ks extends Ye{constructor(t=new Oi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new _e(i,3)),this.setAttribute("uv",new _e(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Lm;let w,v=!1,M,A,F,x;_&&(w=_.getSpacedPoints(f),v=!0,h=!1,M=_.computeFrenetFrames(f,!1),A=new O,F=new O,x=new O),h||(d=0,m=0,g=0,p=0);const D=a.extractPoints(l);let V=D.shape;const U=D.holes;if(!Nn.isClockWise(V)){V=V.reverse();for(let H=0,j=U.length;H<j;H++){const X=U[H];Nn.isClockWise(X)&&(U[H]=X.reverse())}}const at=Nn.triangulateShape(V,U),B=V;for(let H=0,j=U.length;H<j;H++){const X=U[H];V=V.concat(X)}function rt(H,j,X){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(X).add(H)}const J=V.length,q=at.length;function k(H,j,X){let ot,L,E;const ut=H.x-j.x,mt=H.y-j.y,Ct=X.x-H.x,Pt=X.y-H.y,C=ut*ut+mt*mt,b=ut*Pt-mt*Ct;if(Math.abs(b)>Number.EPSILON){const Q=Math.sqrt(C),dt=Math.sqrt(Ct*Ct+Pt*Pt),gt=j.x-mt/Q,xt=j.y+ut/Q,At=X.x-Pt/dt,tt=X.y+Ct/dt,Tt=((At-gt)*Pt-(tt-xt)*Ct)/(ut*Pt-mt*Ct);ot=gt+ut*Tt-H.x,L=xt+mt*Tt-H.y;const bt=ot*ot+L*L;if(bt<=2)return new ct(ot,L);E=Math.sqrt(bt/2)}else{let Q=!1;ut>Number.EPSILON?Ct>Number.EPSILON&&(Q=!0):ut<-Number.EPSILON?Ct<-Number.EPSILON&&(Q=!0):Math.sign(mt)===Math.sign(Pt)&&(Q=!0),Q?(ot=-mt,L=ut,E=Math.sqrt(C)):(ot=ut,L=mt,E=Math.sqrt(C/2))}return new ct(ot/E,L/E)}const W=[];for(let H=0,j=B.length,X=j-1,ot=H+1;H<j;H++,X++,ot++)X===j&&(X=0),ot===j&&(ot=0),W[H]=k(B[H],B[X],B[ot]);const Y=[];let ht,R=W.concat();for(let H=0,j=U.length;H<j;H++){const X=U[H];ht=[];for(let ot=0,L=X.length,E=L-1,ut=ot+1;ot<L;ot++,E++,ut++)E===L&&(E=0),ut===L&&(ut=0),ht[ot]=k(X[ot],X[E],X[ut]);Y.push(ht),R=R.concat(ht)}for(let H=0;H<d;H++){const j=H/d,X=m*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+p;for(let L=0,E=B.length;L<E;L++){const ut=rt(B[L],W[L],ot);N(ut.x,ut.y,-X)}for(let L=0,E=U.length;L<E;L++){const ut=U[L];ht=Y[L];for(let mt=0,Ct=ut.length;mt<Ct;mt++){const Pt=rt(ut[mt],ht[mt],ot);N(Pt.x,Pt.y,-X)}}}const P=g+p;for(let H=0;H<J;H++){const j=h?rt(V[H],R[H],P):V[H];v?(F.copy(M.normals[0]).multiplyScalar(j.x),A.copy(M.binormals[0]).multiplyScalar(j.y),x.copy(w[0]).add(F).add(A),N(x.x,x.y,x.z)):N(j.x,j.y,0)}for(let H=1;H<=f;H++)for(let j=0;j<J;j++){const X=h?rt(V[j],R[j],P):V[j];v?(F.copy(M.normals[H]).multiplyScalar(X.x),A.copy(M.binormals[H]).multiplyScalar(X.y),x.copy(w[H]).add(F).add(A),N(x.x,x.y,x.z)):N(X.x,X.y,u/f*H)}for(let H=d-1;H>=0;H--){const j=H/d,X=m*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+p;for(let L=0,E=B.length;L<E;L++){const ut=rt(B[L],W[L],ot);N(ut.x,ut.y,u+X)}for(let L=0,E=U.length;L<E;L++){const ut=U[L];ht=Y[L];for(let mt=0,Ct=ut.length;mt<Ct;mt++){const Pt=rt(ut[mt],ht[mt],ot);v?N(Pt.x,Pt.y+w[f-1].y,w[f-1].x+X):N(Pt.x,Pt.y,u+X)}}}S(),z();function S(){const H=i.length/3;if(h){let j=0,X=J*j;for(let ot=0;ot<q;ot++){const L=at[ot];K(L[2]+X,L[1]+X,L[0]+X)}j=f+d*2,X=J*j;for(let ot=0;ot<q;ot++){const L=at[ot];K(L[0]+X,L[1]+X,L[2]+X)}}else{for(let j=0;j<q;j++){const X=at[j];K(X[2],X[1],X[0])}for(let j=0;j<q;j++){const X=at[j];K(X[0]+J*f,X[1]+J*f,X[2]+J*f)}}n.addGroup(H,i.length/3-H,0)}function z(){const H=i.length/3;let j=0;I(B,j),j+=B.length;for(let X=0,ot=U.length;X<ot;X++){const L=U[X];I(L,j),j+=L.length}n.addGroup(H,i.length/3-H,1)}function I(H,j){let X=H.length;for(;--X>=0;){const ot=X;let L=X-1;L<0&&(L=H.length-1);for(let E=0,ut=f+d*2;E<ut;E++){const mt=J*E,Ct=J*(E+1),Pt=j+ot+mt,C=j+L+mt,b=j+L+Ct,Q=j+ot+Ct;ft(Pt,C,b,Q)}}}function N(H,j,X){c.push(H),c.push(j),c.push(X)}function K(H,j,X){nt(H),nt(j),nt(X);const ot=i.length/3,L=y.generateTopUV(n,i,ot-3,ot-2,ot-1);pt(L[0]),pt(L[1]),pt(L[2])}function ft(H,j,X,ot){nt(H),nt(j),nt(ot),nt(j),nt(X),nt(ot);const L=i.length/3,E=y.generateSideWallUV(n,i,L-6,L-3,L-2,L-1);pt(E[0]),pt(E[1]),pt(E[3]),pt(E[1]),pt(E[2]),pt(E[3])}function nt(H){i.push(c[H*3+0]),i.push(c[H*3+1]),i.push(c[H*3+2])}function pt(H){s.push(H.x),s.push(H.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Pm(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new _l[i.type]().fromJSON(i)),new Ks(n,t.options)}}const Lm={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],f=t[i*3+1];return[new ct(s,o),new ct(a,c),new ct(l,f)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],f=t[n*3+1],u=t[n*3+2],h=t[i*3],m=t[i*3+1],g=t[i*3+2],p=t[s*3],d=t[s*3+1],_=t[s*3+2];return Math.abs(a-f)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-u),new ct(h,1-g),new ct(p,1-_)]:[new ct(a,1-c),new ct(f,1-u),new ct(m,1-g),new ct(d,1-_)]}};function Pm(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qs extends Ye{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const f=[],u=new O,h=new O,m=[],g=[],p=[],d=[];for(let _=0;_<=n;_++){const y=[],w=_/n;let v=0;_==0&&o==0?v=.5/e:_==n&&c==Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){const A=M/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),p.push(h.x,h.y,h.z),d.push(A+v,1-w),y.push(l++)}f.push(y)}for(let _=0;_<n;_++)for(let y=0;y<e;y++){const w=f[_][y+1],v=f[_][y],M=f[_+1][y],A=f[_+1][y+1];(_!==0||o>0)&&m.push(w,v,A),(_!==n-1||c<Math.PI)&&m.push(v,M,A)}this.setIndex(m),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(p,3)),this.setAttribute("uv",new _e(d,2))}static fromJSON(t){return new Qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dm extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ba={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rm{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null}}}const Im=new Rm;class Ml{constructor(t){this.manager=t!==void 0?t:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const rn={};class Nm extends Error{constructor(t,e){super(t),this.response=e}}class Fm extends Ml{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ba.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(rn[t]!==void 0){rn[t].push({onLoad:e,onProgress:n,onError:i});return}rn[t]=[],rn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=rn[t],u=l.body.getReader(),h=l.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){y();function y(){u.read().then(({done:w,value:v})=>{if(w)_.close();else{p+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let A=0,F=f.length;A<F;A++){const x=f[A];x.onProgress&&x.onProgress(M)}_.enqueue(v),y()}})}}});return new Response(d)}else throw new Nm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{ba.add(t,l);const f=rn[t];delete rn[t];for(let u=0,h=f.length;u<h;u++){const m=f[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const f=rn[t];if(f===void 0)throw this.manager.itemError(t),l;delete rn[t];for(let u=0,h=f.length;u<h;u++){const m=f[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class zm extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Sa=new ie,wa=new O,Ta=new O;class Om{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(wa),Ta.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ta),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ea=new ie,Ti=new O,Ss=new O;class km extends Om{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ti),Ss.copy(n.position),Ss.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ss),n.updateMatrixWorld(),i.makeTranslation(-Ti.x,-Ti.y,-Ti.z),Ea.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea)}}class bl extends zm{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new km}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}const Ca=new ct;class Bm{constructor(t=new ct(1/0,1/0),e=new ct(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ca.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ca.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Sn{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ui,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function n(y){const w=[];for(let v=0,M=y.length;v<M;v++){const A=y[v],F=new Oi;F.curves=A.curves,w.push(F)}return w}function i(y,w){const v=w.length;let M=!1;for(let A=v-1,F=0;F<v;A=F++){let x=w[A],D=w[F],V=D.x-x.x,U=D.y-x.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(x=w[F],V=-V,D=w[A],U=-U),y.y<x.y||y.y>D.y)continue;if(y.y===x.y){if(y.x===x.x)return!0}else{const it=U*(y.x-x.x)-V*(y.y-x.y);if(it===0)return!0;if(it<0)continue;M=!M}}else{if(y.y!==x.y)continue;if(D.x<=y.x&&y.x<=x.x||x.x<=y.x&&y.x<=D.x)return!0}}return M}const s=Nn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(e===!0)return n(o);let a,c,l;const f=[];if(o.length===1)return c=o[0],l=new Oi,l.curves=c.curves,f.push(l),f;let u=!s(o[0].getPoints());u=t?!u:u;const h=[],m=[];let g=[],p=0,d;m[p]=void 0,g[p]=[];for(let y=0,w=o.length;y<w;y++)c=o[y],d=c.getPoints(),a=s(d),a=t?!a:a,a?(!u&&m[p]&&p++,m[p]={s:new Oi,p:d},m[p].s.curves=c.curves,u&&p++,g[p]=[]):g[p].push({h:c,p:d[0]});if(!m[0])return n(o);if(m.length>1){let y=!1,w=0;for(let v=0,M=m.length;v<M;v++)h[v]=[];for(let v=0,M=m.length;v<M;v++){const A=g[v];for(let F=0;F<A.length;F++){const x=A[F];let D=!0;for(let V=0;V<m.length;V++)i(x.p,m[V].p)&&(v!==V&&w++,D?(D=!1,h[V].push(x)):y=!0);D&&h[v].push(x)}}w>0&&y===!1&&(g=h)}let _;for(let y=0,w=m.length;y<w;y++){l=m[y].s,f.push(l),_=g[y];for(let v=0,M=_.length;v<M;v++)l.holes.push(_[v].h)}return f}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);class to extends Ml{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){const s=this,o=new Fm(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t){const e=this;function n(R,P){if(R.nodeType!==1)return;const S=v(R);let z=!1,I=null;switch(R.nodeName){case"svg":P=g(R,P);break;case"style":s(R);break;case"g":P=g(R,P);break;case"path":P=g(R,P),R.hasAttribute("d")&&(I=i(R));break;case"rect":P=g(R,P),I=c(R);break;case"polygon":P=g(R,P),I=l(R);break;case"polyline":P=g(R,P),I=f(R);break;case"circle":P=g(R,P),I=u(R);break;case"ellipse":P=g(R,P),I=h(R);break;case"line":P=g(R,P),I=m(R);break;case"defs":z=!0;break;case"use":P=g(R,P);const ft=(R.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),nt=R.viewportElement.getElementById(ft);nt?n(nt,P):console.warn("SVGLoader: 'use node' references non-existent node id: "+ft);break}I&&(P.fill!==void 0&&P.fill!=="none"&&I.color.setStyle(P.fill),A(I,W),V.push(I),I.userData={node:R,style:P});const N=R.childNodes;for(let K=0;K<N.length;K++){const ft=N[K];z&&ft.nodeName!=="style"&&ft.nodeName!=="defs"||n(ft,P)}S&&(it.pop(),it.length>0?W.copy(it[it.length-1]):W.identity())}function i(R){const P=new Sn,S=new ct,z=new ct,I=new ct;let N=!0,K=!1;const nt=R.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let pt=0,H=nt.length;pt<H;pt++){const j=nt[pt],X=j.charAt(0),ot=j.slice(1).trim();N===!0&&(K=!0,N=!1);let L;switch(X){case"M":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=2)S.x=L[E+0],S.y=L[E+1],z.x=S.x,z.y=S.y,E===0?P.moveTo(S.x,S.y):P.lineTo(S.x,S.y),E===0&&I.copy(S);break;case"H":L=d(ot);for(let E=0,ut=L.length;E<ut;E++)S.x=L[E],z.x=S.x,z.y=S.y,P.lineTo(S.x,S.y),E===0&&K===!0&&I.copy(S);break;case"V":L=d(ot);for(let E=0,ut=L.length;E<ut;E++)S.y=L[E],z.x=S.x,z.y=S.y,P.lineTo(S.x,S.y),E===0&&K===!0&&I.copy(S);break;case"L":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=2)S.x=L[E+0],S.y=L[E+1],z.x=S.x,z.y=S.y,P.lineTo(S.x,S.y),E===0&&K===!0&&I.copy(S);break;case"C":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=6)P.bezierCurveTo(L[E+0],L[E+1],L[E+2],L[E+3],L[E+4],L[E+5]),z.x=L[E+2],z.y=L[E+3],S.x=L[E+4],S.y=L[E+5],E===0&&K===!0&&I.copy(S);break;case"S":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=4)P.bezierCurveTo(p(S.x,z.x),p(S.y,z.y),L[E+0],L[E+1],L[E+2],L[E+3]),z.x=L[E+0],z.y=L[E+1],S.x=L[E+2],S.y=L[E+3],E===0&&K===!0&&I.copy(S);break;case"Q":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=4)P.quadraticCurveTo(L[E+0],L[E+1],L[E+2],L[E+3]),z.x=L[E+0],z.y=L[E+1],S.x=L[E+2],S.y=L[E+3],E===0&&K===!0&&I.copy(S);break;case"T":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=2){const mt=p(S.x,z.x),Ct=p(S.y,z.y);P.quadraticCurveTo(mt,Ct,L[E+0],L[E+1]),z.x=mt,z.y=Ct,S.x=L[E+0],S.y=L[E+1],E===0&&K===!0&&I.copy(S)}break;case"A":L=d(ot,[3,4],7);for(let E=0,ut=L.length;E<ut;E+=7){if(L[E+5]==S.x&&L[E+6]==S.y)continue;const mt=S.clone();S.x=L[E+5],S.y=L[E+6],z.x=S.x,z.y=S.y,o(P,L[E],L[E+1],L[E+2],L[E+3],L[E+4],mt,S),E===0&&K===!0&&I.copy(S)}break;case"m":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=2)S.x+=L[E+0],S.y+=L[E+1],z.x=S.x,z.y=S.y,E===0?P.moveTo(S.x,S.y):P.lineTo(S.x,S.y),E===0&&I.copy(S);break;case"h":L=d(ot);for(let E=0,ut=L.length;E<ut;E++)S.x+=L[E],z.x=S.x,z.y=S.y,P.lineTo(S.x,S.y),E===0&&K===!0&&I.copy(S);break;case"v":L=d(ot);for(let E=0,ut=L.length;E<ut;E++)S.y+=L[E],z.x=S.x,z.y=S.y,P.lineTo(S.x,S.y),E===0&&K===!0&&I.copy(S);break;case"l":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=2)S.x+=L[E+0],S.y+=L[E+1],z.x=S.x,z.y=S.y,P.lineTo(S.x,S.y),E===0&&K===!0&&I.copy(S);break;case"c":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=6)P.bezierCurveTo(S.x+L[E+0],S.y+L[E+1],S.x+L[E+2],S.y+L[E+3],S.x+L[E+4],S.y+L[E+5]),z.x=S.x+L[E+2],z.y=S.y+L[E+3],S.x+=L[E+4],S.y+=L[E+5],E===0&&K===!0&&I.copy(S);break;case"s":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=4)P.bezierCurveTo(p(S.x,z.x),p(S.y,z.y),S.x+L[E+0],S.y+L[E+1],S.x+L[E+2],S.y+L[E+3]),z.x=S.x+L[E+0],z.y=S.y+L[E+1],S.x+=L[E+2],S.y+=L[E+3],E===0&&K===!0&&I.copy(S);break;case"q":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=4)P.quadraticCurveTo(S.x+L[E+0],S.y+L[E+1],S.x+L[E+2],S.y+L[E+3]),z.x=S.x+L[E+0],z.y=S.y+L[E+1],S.x+=L[E+2],S.y+=L[E+3],E===0&&K===!0&&I.copy(S);break;case"t":L=d(ot);for(let E=0,ut=L.length;E<ut;E+=2){const mt=p(S.x,z.x),Ct=p(S.y,z.y);P.quadraticCurveTo(mt,Ct,S.x+L[E+0],S.y+L[E+1]),z.x=mt,z.y=Ct,S.x=S.x+L[E+0],S.y=S.y+L[E+1],E===0&&K===!0&&I.copy(S)}break;case"a":L=d(ot,[3,4],7);for(let E=0,ut=L.length;E<ut;E+=7){if(L[E+5]==0&&L[E+6]==0)continue;const mt=S.clone();S.x+=L[E+5],S.y+=L[E+6],z.x=S.x,z.y=S.y,o(P,L[E],L[E+1],L[E+2],L[E+3],L[E+4],mt,S),E===0&&K===!0&&I.copy(S)}break;case"Z":case"z":P.currentPath.autoClose=!0,P.currentPath.curves.length>0&&(S.copy(I),P.currentPath.currentPoint.copy(S),N=!0);break;default:console.warn(j)}K=!1}return P}function s(R){if(!(!R.sheet||!R.sheet.cssRules||!R.sheet.cssRules.length))for(let P=0;P<R.sheet.cssRules.length;P++){const S=R.sheet.cssRules[P];if(S.type!==1)continue;const z=S.selectorText.split(/,/gm).filter(Boolean).map(I=>I.trim());for(let I=0;I<z.length;I++){const N=Object.fromEntries(Object.entries(S.style).filter(([,K])=>K!==""));U[z[I]]=Object.assign(U[z[I]]||{},N)}}}function o(R,P,S,z,I,N,K,ft){if(P==0||S==0){R.lineTo(ft.x,ft.y);return}z=z*Math.PI/180,P=Math.abs(P),S=Math.abs(S);const nt=(K.x-ft.x)/2,pt=(K.y-ft.y)/2,H=Math.cos(z)*nt+Math.sin(z)*pt,j=-Math.sin(z)*nt+Math.cos(z)*pt;let X=P*P,ot=S*S;const L=H*H,E=j*j,ut=L/X+E/ot;if(ut>1){const At=Math.sqrt(ut);P=At*P,S=At*S,X=P*P,ot=S*S}const mt=X*E+ot*L,Ct=(X*ot-mt)/mt;let Pt=Math.sqrt(Math.max(0,Ct));I===N&&(Pt=-Pt);const C=Pt*P*j/S,b=-Pt*S*H/P,Q=Math.cos(z)*C-Math.sin(z)*b+(K.x+ft.x)/2,dt=Math.sin(z)*C+Math.cos(z)*b+(K.y+ft.y)/2,gt=a(1,0,(H-C)/P,(j-b)/S),xt=a((H-C)/P,(j-b)/S,(-H-C)/P,(-j-b)/S)%(Math.PI*2);R.currentPath.absellipse(Q,dt,P,S,gt,gt+xt,N===0,z)}function a(R,P,S,z){const I=R*S+P*z,N=Math.sqrt(R*R+P*P)*Math.sqrt(S*S+z*z);let K=Math.acos(Math.max(-1,Math.min(1,I/N)));return R*z-P*S<0&&(K=-K),K}function c(R){const P=w(R.getAttribute("x")||0),S=w(R.getAttribute("y")||0),z=w(R.getAttribute("rx")||R.getAttribute("ry")||0),I=w(R.getAttribute("ry")||R.getAttribute("rx")||0),N=w(R.getAttribute("width")),K=w(R.getAttribute("height")),ft=1-.551915024494,nt=new Sn;return nt.moveTo(P+z,S),nt.lineTo(P+N-z,S),(z!==0||I!==0)&&nt.bezierCurveTo(P+N-z*ft,S,P+N,S+I*ft,P+N,S+I),nt.lineTo(P+N,S+K-I),(z!==0||I!==0)&&nt.bezierCurveTo(P+N,S+K-I*ft,P+N-z*ft,S+K,P+N-z,S+K),nt.lineTo(P+z,S+K),(z!==0||I!==0)&&nt.bezierCurveTo(P+z*ft,S+K,P,S+K-I*ft,P,S+K-I),nt.lineTo(P,S+I),(z!==0||I!==0)&&nt.bezierCurveTo(P,S+I*ft,P+z*ft,S,P+z,S),nt}function l(R){function P(N,K,ft){const nt=w(K),pt=w(ft);I===0?z.moveTo(nt,pt):z.lineTo(nt,pt),I++}const S=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,z=new Sn;let I=0;return R.getAttribute("points").replace(S,P),z.currentPath.autoClose=!0,z}function f(R){function P(N,K,ft){const nt=w(K),pt=w(ft);I===0?z.moveTo(nt,pt):z.lineTo(nt,pt),I++}const S=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,z=new Sn;let I=0;return R.getAttribute("points").replace(S,P),z.currentPath.autoClose=!1,z}function u(R){const P=w(R.getAttribute("cx")||0),S=w(R.getAttribute("cy")||0),z=w(R.getAttribute("r")||0),I=new ui;I.absarc(P,S,z,0,Math.PI*2);const N=new Sn;return N.subPaths.push(I),N}function h(R){const P=w(R.getAttribute("cx")||0),S=w(R.getAttribute("cy")||0),z=w(R.getAttribute("rx")||0),I=w(R.getAttribute("ry")||0),N=new ui;N.absellipse(P,S,z,I,0,Math.PI*2);const K=new Sn;return K.subPaths.push(N),K}function m(R){const P=w(R.getAttribute("x1")||0),S=w(R.getAttribute("y1")||0),z=w(R.getAttribute("x2")||0),I=w(R.getAttribute("y2")||0),N=new Sn;return N.moveTo(P,S),N.lineTo(z,I),N.currentPath.autoClose=!1,N}function g(R,P){P=Object.assign({},P);let S={};if(R.hasAttribute("class")){const K=R.getAttribute("class").split(/\s/).filter(Boolean).map(ft=>ft.trim());for(let ft=0;ft<K.length;ft++)S=Object.assign(S,U["."+K[ft]])}R.hasAttribute("id")&&(S=Object.assign(S,U["#"+R.getAttribute("id")]));function z(K,ft,nt){nt===void 0&&(nt=function(H){return H.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),H}),R.hasAttribute(K)&&(P[ft]=nt(R.getAttribute(K))),S[K]&&(P[ft]=nt(S[K])),R.style&&R.style[K]!==""&&(P[ft]=nt(R.style[K]))}function I(K){return Math.max(0,Math.min(1,w(K)))}function N(K){return Math.max(0,w(K))}return z("fill","fill"),z("fill-opacity","fillOpacity",I),z("fill-rule","fillRule"),z("opacity","opacity",I),z("stroke","stroke"),z("stroke-opacity","strokeOpacity",I),z("stroke-width","strokeWidth",N),z("stroke-linejoin","strokeLineJoin"),z("stroke-linecap","strokeLineCap"),z("stroke-miterlimit","strokeMiterLimit",N),z("visibility","visibility"),P}function p(R,P){return R-(P-R)}function d(R,P,S){if(typeof R!="string")throw new TypeError("Invalid input: "+typeof R);const z={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},I=0,N=1,K=2,ft=3;let nt=I,pt=!0,H="",j="";const X=[];function ot(mt,Ct,Pt){const C=new SyntaxError('Unexpected character "'+mt+'" at index '+Ct+".");throw C.partial=Pt,C}function L(){H!==""&&(j===""?X.push(Number(H)):X.push(Number(H)*Math.pow(10,Number(j)))),H="",j=""}let E;const ut=R.length;for(let mt=0;mt<ut;mt++){if(E=R[mt],Array.isArray(P)&&P.includes(X.length%S)&&z.FLAGS.test(E)){nt=N,H=E,L();continue}if(nt===I){if(z.WHITESPACE.test(E))continue;if(z.DIGIT.test(E)||z.SIGN.test(E)){nt=N,H=E;continue}if(z.POINT.test(E)){nt=K,H=E;continue}z.COMMA.test(E)&&(pt&&ot(E,mt,X),pt=!0)}if(nt===N){if(z.DIGIT.test(E)){H+=E;continue}if(z.POINT.test(E)){H+=E,nt=K;continue}if(z.EXP.test(E)){nt=ft;continue}z.SIGN.test(E)&&H.length===1&&z.SIGN.test(H[0])&&ot(E,mt,X)}if(nt===K){if(z.DIGIT.test(E)){H+=E;continue}if(z.EXP.test(E)){nt=ft;continue}z.POINT.test(E)&&H[H.length-1]==="."&&ot(E,mt,X)}if(nt===ft){if(z.DIGIT.test(E)){j+=E;continue}if(z.SIGN.test(E)){if(j===""){j+=E;continue}j.length===1&&z.SIGN.test(j)&&ot(E,mt,X)}}z.WHITESPACE.test(E)?(L(),nt=I,pt=!1):z.COMMA.test(E)?(L(),nt=I,pt=!0):z.SIGN.test(E)?(L(),nt=N,H=E):z.POINT.test(E)?(L(),nt=K,H=E):ot(E,mt,X)}return L(),X}const _=["mm","cm","in","pt","pc","px"],y={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function w(R){let P="px";if(typeof R=="string"||R instanceof String)for(let z=0,I=_.length;z<I;z++){const N=_[z];if(R.endsWith(N)){P=N,R=R.substring(0,R.length-N.length);break}}let S;return P==="px"&&e.defaultUnit!=="px"?S=y.in[e.defaultUnit]/e.defaultDPI:(S=y[P][e.defaultUnit],S<0&&(S=y[P].in*e.defaultDPI)),S*parseFloat(R)}function v(R){if(!(R.hasAttribute("transform")||R.nodeName==="use"&&(R.hasAttribute("x")||R.hasAttribute("y"))))return null;const P=M(R);return it.length>0&&P.premultiply(it[it.length-1]),W.copy(P),it.push(P),P}function M(R){const P=new fe,S=at;if(R.nodeName==="use"&&(R.hasAttribute("x")||R.hasAttribute("y"))){const z=w(R.getAttribute("x")),I=w(R.getAttribute("y"));P.translate(z,I)}if(R.hasAttribute("transform")){const z=R.getAttribute("transform").split(")");for(let I=z.length-1;I>=0;I--){const N=z[I].trim();if(N==="")continue;const K=N.indexOf("("),ft=N.length;if(K>0&&K<ft){const nt=N.slice(0,K),pt=d(N.slice(K+1));switch(S.identity(),nt){case"translate":if(pt.length>=1){const H=pt[0];let j=H;pt.length>=2&&(j=pt[1]),S.translate(H,j)}break;case"rotate":if(pt.length>=1){let H=0,j=0,X=0;H=-pt[0]*Math.PI/180,pt.length>=3&&(j=pt[1],X=pt[2]),B.identity().translate(-j,-X),rt.identity().rotate(H),J.multiplyMatrices(rt,B),B.identity().translate(j,X),S.multiplyMatrices(B,J)}break;case"scale":if(pt.length>=1){const H=pt[0];let j=H;pt.length>=2&&(j=pt[1]),S.scale(H,j)}break;case"skewX":pt.length===1&&S.set(1,Math.tan(pt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":pt.length===1&&S.set(1,0,0,Math.tan(pt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":pt.length===6&&S.set(pt[0],pt[2],pt[4],pt[1],pt[3],pt[5],0,0,1);break}}P.premultiply(S)}}return P}function A(R,P){function S(N){k.set(N.x,N.y,1).applyMatrix3(P),N.set(k.x,k.y)}const z=F(P),I=R.subPaths;for(let N=0,K=I.length;N<K;N++){const nt=I[N].curves;for(let pt=0;pt<nt.length;pt++){const H=nt[pt];H.isLineCurve?(S(H.v1),S(H.v2)):H.isCubicBezierCurve?(S(H.v0),S(H.v1),S(H.v2),S(H.v3)):H.isQuadraticBezierCurve?(S(H.v0),S(H.v1),S(H.v2)):H.isEllipseCurve&&(z&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),q.set(H.aX,H.aY),S(q),H.aX=q.x,H.aY=q.y,H.xRadius*=x(P),H.yRadius*=D(P))}}}function F(R){return R.elements[1]!==0||R.elements[3]!==0}function x(R){const P=R.elements;return Math.sqrt(P[0]*P[0]+P[1]*P[1])}function D(R){const P=R.elements;return Math.sqrt(P[3]*P[3]+P[4]*P[4])}const V=[],U={},it=[],at=new fe,B=new fe,rt=new fe,J=new fe,q=new ct,k=new O,W=new fe,Y=new DOMParser().parseFromString(t,"image/svg+xml");return n(Y.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:V,xml:Y.documentElement}}static createShapes(t){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(d,_,y,w){const v=d.x,M=_.x,A=y.x,F=w.x,x=d.y,D=_.y,V=y.y,U=w.y,it=(F-A)*(x-V)-(U-V)*(v-A),at=(M-v)*(x-V)-(D-x)*(v-A),B=(U-V)*(M-v)-(F-A)*(D-x),rt=it/B,J=at/B;if(B===0&&it!==0||rt<=0||rt>=1||J<0||J>1)return null;if(it===0&&B===0){for(let q=0;q<2;q++)if(o(q===0?y:w,d,_),i.loc==n.ORIGIN){const k=q===0?y:w;return{x:k.x,y:k.y,t:i.t}}else if(i.loc==n.BETWEEN){const k=+(v+i.t*(M-v)).toPrecision(10),W=+(x+i.t*(D-x)).toPrecision(10);return{x:k,y:W,t:i.t}}return null}else{for(let W=0;W<2;W++)if(o(W===0?y:w,d,_),i.loc==n.ORIGIN){const Y=W===0?y:w;return{x:Y.x,y:Y.y,t:i.t}}const q=+(v+rt*(M-v)).toPrecision(10),k=+(x+rt*(D-x)).toPrecision(10);return{x:q,y:k,t:rt}}}function o(d,_,y){const w=y.x-_.x,v=y.y-_.y,M=d.x-_.x,A=d.y-_.y,F=w*A-M*v;if(d.x===_.x&&d.y===_.y){i.loc=n.ORIGIN,i.t=0;return}if(d.x===y.x&&d.y===y.y){i.loc=n.DESTINATION,i.t=1;return}if(F<-Number.EPSILON){i.loc=n.LEFT;return}if(F>Number.EPSILON){i.loc=n.RIGHT;return}if(w*M<0||v*A<0){i.loc=n.BEHIND;return}if(Math.sqrt(w*w+v*v)<Math.sqrt(M*M+A*A)){i.loc=n.BEYOND;return}let x;w!==0?x=M/w:x=A/v,i.loc=n.BETWEEN,i.t=x}function a(d,_){const y=[],w=[];for(let v=1;v<d.length;v++){const M=d[v-1],A=d[v];for(let F=1;F<_.length;F++){const x=_[F-1],D=_[F],V=s(M,A,x,D);V!==null&&y.find(U=>U.t<=V.t+Number.EPSILON&&U.t>=V.t-Number.EPSILON)===void 0&&(y.push(V),w.push(new ct(V.x,V.y)))}}return w}function c(d,_,y){const w=new ct;_.getCenter(w);const v=[];return y.forEach(M=>{M.boundingBox.containsPoint(w)&&a(d,M.points).forEach(F=>{v.push({identifier:M.identifier,isCW:M.isCW,point:F})})}),v.sort((M,A)=>M.point.x-A.point.x),v}function l(d,_,y,w,v){(v==null||v==="")&&(v="nonzero");const M=new ct;d.boundingBox.getCenter(M);const A=[new ct(y,M.y),new ct(w,M.y)],F=c(A,d.boundingBox,_);F.sort((at,B)=>at.point.x-B.point.x);const x=[],D=[];F.forEach(at=>{at.identifier===d.identifier?x.push(at):D.push(at)});const V=x[0].point.x,U=[];let it=0;for(;it<D.length&&D[it].point.x<V;)U.length>0&&U[U.length-1]===D[it].identifier?U.pop():U.push(D[it].identifier),it++;if(U.push(d.identifier),v==="evenodd"){const at=U.length%2===0,B=U[U.length-2];return{identifier:d.identifier,isHole:at,for:B}}else if(v==="nonzero"){let at=!0,B=null,rt=null;for(let J=0;J<U.length;J++){const q=U[J];at?(rt=_[q].isCW,at=!1,B=q):rt!==_[q].isCW&&(rt=_[q].isCW,at=!0)}return{identifier:d.identifier,isHole:at,for:B}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let f=0,u=999999999,h=-999999999,m=t.subPaths.map(d=>{const _=d.getPoints();let y=-999999999,w=999999999,v=-999999999,M=999999999;for(let A=0;A<_.length;A++){const F=_[A];F.y>y&&(y=F.y),F.y<w&&(w=F.y),F.x>v&&(v=F.x),F.x<M&&(M=F.x)}return h<=v&&(h=v+1),u>=M&&(u=M-1),{curves:d.curves,points:_,isCW:Nn.isClockWise(_),identifier:f++,boundingBox:new Bm(new ct(M,w),new ct(v,y))}});m=m.filter(d=>d.points.length>1);const g=m.map(d=>{var _;return l(d,m,u,h,(_=t.userData)==null?void 0:_.style.fillRule)}),p=[];return m.forEach(d=>{if(!g[d.identifier].isHole){const y=new Oi;y.curves=d.curves,g.filter(v=>v.isHole&&v.for===d.identifier).forEach(v=>{const M=m[v.identifier],A=new ui;A.curves=M.curves,y.holes.push(A)}),p.push(y)}}),p}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){const s=[],o=[],a=[];if(to.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;const c=new Ye;return c.setAttribute("position",new _e(s,3)),c.setAttribute("normal",new _e(o,3)),c.setAttribute("uv",new _e(a,2)),c}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,c){const l=new ct,f=new ct,u=new ct,h=new ct,m=new ct,g=new ct,p=new ct,d=new ct,_=new ct,y=new ct,w=new ct,v=new ct,M=new ct,A=new ct,F=new ct,x=new ct,D=new ct;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,t=j(t);const V=t.length;if(V<2)return 0;const U=t[0].equals(t[V-1]);let it,at=t[0],B;const rt=e.strokeWidth/2,J=1/(V-1);let q=0,k,W,Y,ht,R=!1,P=0,S=c*3,z=c*2;I(t[0],t[1],l).multiplyScalar(rt),d.copy(t[0]).sub(l),_.copy(t[0]).add(l),y.copy(d),w.copy(_);for(let X=1;X<V;X++){it=t[X],X===V-1?U?B=t[1]:B=void 0:B=t[X+1];const ot=l;if(I(at,it,ot),u.copy(ot).multiplyScalar(rt),v.copy(it).sub(u),M.copy(it).add(u),k=q+J,W=!1,B!==void 0){I(it,B,f),u.copy(f).multiplyScalar(rt),A.copy(it).sub(u),F.copy(it).add(u),Y=!0,u.subVectors(B,at),ot.dot(u)<0&&(Y=!1),X===1&&(R=Y),u.subVectors(B,it),u.normalize();const L=Math.abs(ot.dot(u));if(L>Number.EPSILON){const E=rt/L;u.multiplyScalar(-E),h.subVectors(it,at),m.copy(h).setLength(E).add(u),x.copy(m).negate();const ut=m.length(),mt=h.length();h.divideScalar(mt),g.subVectors(B,it);const Ct=g.length();switch(g.divideScalar(Ct),h.dot(x)<mt&&g.dot(x)<Ct&&(W=!0),D.copy(m).add(it),x.add(it),ht=!1,W?Y?(F.copy(x),M.copy(x)):(A.copy(x),v.copy(x)):ft(),e.strokeLineJoin){case"bevel":nt(Y,W,k);break;case"round":pt(Y,W),Y?K(it,v,A,k,0):K(it,F,M,k,1);break;case"miter":case"miter-clip":default:const Pt=rt*e.strokeMiterLimit/ut;if(Pt<1)if(e.strokeLineJoin!=="miter-clip"){nt(Y,W,k);break}else pt(Y,W),Y?(g.subVectors(D,v).multiplyScalar(Pt).add(v),p.subVectors(D,A).multiplyScalar(Pt).add(A),N(v,k,0),N(g,k,0),N(it,k,.5),N(it,k,.5),N(g,k,0),N(p,k,0),N(it,k,.5),N(p,k,0),N(A,k,0)):(g.subVectors(D,M).multiplyScalar(Pt).add(M),p.subVectors(D,F).multiplyScalar(Pt).add(F),N(M,k,1),N(g,k,1),N(it,k,.5),N(it,k,.5),N(g,k,1),N(p,k,1),N(it,k,.5),N(p,k,1),N(F,k,1));else W?(Y?(N(_,q,1),N(d,q,0),N(D,k,0),N(_,q,1),N(D,k,0),N(x,k,1)):(N(_,q,1),N(d,q,0),N(D,k,1),N(d,q,0),N(x,k,0),N(D,k,1)),Y?A.copy(D):F.copy(D)):Y?(N(v,k,0),N(D,k,0),N(it,k,.5),N(it,k,.5),N(D,k,0),N(A,k,0)):(N(M,k,1),N(D,k,1),N(it,k,.5),N(it,k,.5),N(D,k,1),N(F,k,1)),ht=!0;break}}else ft()}else ft();!U&&X===V-1&&H(t[0],y,w,Y,!0,q),q=k,at=it,d.copy(A),_.copy(F)}if(!U)H(it,v,M,Y,!1,k);else if(W&&s){let X=D,ot=x;R!==Y&&(X=x,ot=D),Y?(ht||R)&&(ot.toArray(s,0*3),ot.toArray(s,3*3),ht&&X.toArray(s,1*3)):(ht||!R)&&(ot.toArray(s,1*3),ot.toArray(s,3*3),ht&&X.toArray(s,0*3))}return P;function I(X,ot,L){return L.subVectors(ot,X),L.set(-L.y,L.x).normalize()}function N(X,ot,L){s&&(s[S]=X.x,s[S+1]=X.y,s[S+2]=0,o&&(o[S]=0,o[S+1]=0,o[S+2]=1),S+=3,a&&(a[z]=ot,a[z+1]=L,z+=2)),P+=3}function K(X,ot,L,E,ut){l.copy(ot).sub(X).normalize(),f.copy(L).sub(X).normalize();let mt=Math.PI;const Ct=l.dot(f);Math.abs(Ct)<1&&(mt=Math.abs(Math.acos(Ct))),mt/=n,u.copy(ot);for(let Pt=0,C=n-1;Pt<C;Pt++)h.copy(u).rotateAround(X,mt),N(u,E,ut),N(h,E,ut),N(X,E,.5),u.copy(h);N(h,E,ut),N(L,E,ut),N(X,E,.5)}function ft(){N(_,q,1),N(d,q,0),N(v,k,0),N(_,q,1),N(v,k,1),N(M,k,0)}function nt(X,ot,L){ot?X?(N(_,q,1),N(d,q,0),N(v,k,0),N(_,q,1),N(v,k,0),N(x,k,1),N(v,L,0),N(A,L,0),N(x,L,.5)):(N(_,q,1),N(d,q,0),N(M,k,1),N(d,q,0),N(x,k,0),N(M,k,1),N(M,L,1),N(F,L,0),N(x,L,.5)):X?(N(v,L,0),N(A,L,0),N(it,L,.5)):(N(M,L,1),N(F,L,0),N(it,L,.5))}function pt(X,ot){ot&&(X?(N(_,q,1),N(d,q,0),N(v,k,0),N(_,q,1),N(v,k,0),N(x,k,1),N(v,q,0),N(it,k,.5),N(x,k,1),N(it,k,.5),N(A,q,0),N(x,k,1)):(N(_,q,1),N(d,q,0),N(M,k,1),N(d,q,0),N(x,k,0),N(M,k,1),N(M,q,1),N(x,k,0),N(it,k,.5),N(it,k,.5),N(x,k,0),N(F,q,1)))}function H(X,ot,L,E,ut,mt){switch(e.strokeLineCap){case"round":ut?K(X,L,ot,mt,.5):K(X,ot,L,mt,.5);break;case"square":if(ut)l.subVectors(ot,X),f.set(l.y,-l.x),u.addVectors(l,f).add(X),h.subVectors(f,l).add(X),E?(u.toArray(s,1*3),h.toArray(s,0*3),h.toArray(s,3*3)):(u.toArray(s,1*3),u.toArray(s,3*3),h.toArray(s,0*3));else{l.subVectors(L,X),f.set(l.y,-l.x),u.addVectors(l,f).add(X),h.subVectors(f,l).add(X);const Ct=s.length;E?(u.toArray(s,Ct-1*3),h.toArray(s,Ct-2*3),h.toArray(s,Ct-4*3)):(u.toArray(s,Ct-2*3),h.toArray(s,Ct-1*3),h.toArray(s,Ct-4*3))}break}}function j(X){let ot=!1;for(let E=1,ut=X.length-1;E<ut;E++)if(X[E].distanceTo(X[E+1])<i){ot=!0;break}if(!ot)return X;const L=[];L.push(X[0]);for(let E=1,ut=X.length-1;E<ut;E++)X[E].distanceTo(X[E+1])>=i&&L.push(X[E]);return L.push(X[X.length-1]),L}}}const Um="/assets/logo test.c213fe7f.svg",Zi=new Kp,be=new Ee(75,window.innerWidth/window.innerHeight,.1,1e3),Gm=new to,Cn=new Pi,Vm=async()=>{const r=await Gm.loadAsync(Um),t=new Dm({color:16777215});r.paths.forEach(e=>{e.toShapes(!0).forEach(i=>{const s=new Ks(i,{depth:5,bevelEnabled:!1}),o=new Xe(s,t);Cn.add(o)})}),Cn.translateX(-20),Cn.translateY(-20),Cn.translateZ(-5),Zi.add(Cn)};Vm();function Hm(){const r=new Qs(.25,24,24),t=new qs({color:16777215}),e=new Xe(r,t),[n,i,s]=Array(3).fill().map(()=>Jc.randFloatSpread(200));e.position.set(n,i,s),Zi.add(e)}Array(500).fill().forEach(Hm);{const r=new bl(16777215,2,100);r.position.set(0,0,50),Zi.add(r)}{const r=new bl(268435455,.75,100);r.position.set(10,10,5),Zi.add(r)}const Me={x:0,y:0,z:50},Wi={x:Math.atan(Me.z/Me.y)-Math.PI/2,y:-(Math.atan(Me.z/Me.x)-Math.PI/2),z:0};be.position.x=Me.x;be.position.y=Me.y;be.position.z=Me.z;be.rotation.x=Wi.x;be.rotation.y=Wi.y;be.rotation.z=Wi.z;let gi,ri=0,Ei=0;const Wm=r=>{let t=5,{clientX:e,clientY:n}=r;Ei=(window.innerWidth/2-e)/(window.innerWidth/2)*t,ri=(window.innerHeight/2-n)/(window.innerHeight/2)*t;let i,s;Ei>=0?i=Math.atan(Me.z/Ei)-Math.PI/2:i=Math.atan(Me.z/Ei)+Math.PI/2,ri>=0?s=Math.atan(Me.z/ri)-Math.PI/2:s=Math.atan(Me.z/ri)+Math.PI/2,be.position.x=Me.x+-Ei,be.rotation.y=Wi.y+i,be.position.y=zs+Me.y+ri,be.rotation.x=Wi.x+s};let Aa=0;const Sl=()=>{requestAnimationFrame(Sl),Aa+=.02,Cn.rotation.y=Math.sin(Aa)/10,gi.render(Zi,be)},wl=()=>{gi.setSize(window.innerWidth,window.innerHeight),be.aspect=window.innerWidth/window.innerHeight,be.updateProjectionMatrix()};let zs=0;const qm=()=>{zs=window.scrollY/150;let r=2,t=window.scrollY/window.innerHeight>1?1:window.scrollY/window.innerHeight,e=t*r;gi.domElement.style.filter=`blur(${e}px) brightness(${1-t/3})`,gi.domElement.style.transform=`scale(${1+t/10})`,Cn.position.z=-5+window.scrollY/10,be.position.y=zs+Me.y+ri},Xm=r=>{gi=new dl({canvas:r,antialias:!0,alpha:!0}),gi.setClearColor(16777215,0),wl(),Sl()};window.addEventListener("resize",wl);window.addEventListener("mousemove",Wm);window.addEventListener("scroll",qm);function $m(r){let t;return{c(){t=Vt("canvas"),wt(t,"class","svelte-1rzc1pc")},m(e,n){Yt(e,t,n),r[1](t)},p:De,i:De,o:De,d(e){e&&Xt(t),r[1](null)}}}function jm(r,t,e){let n;ka(()=>{Xm(n)});function i(s){ai[s?"unshift":"push"](()=>{n=s,e(0,n)})}return[n,i]}class Ym extends Fe{constructor(t){super(),Ne(this,t,jm,$m,Ie,{})}}function Zm(r){let t,e;const n=r[2].default,i=ks(n,r,r[1],null);return{c(){t=Vt("a"),i&&i.c(),wt(t,"href",r[0]),wt(t,"class","svelte-1cfhf78")},m(s,o){Yt(s,t,o),i&&i.m(t,null),e=!0},p(s,[o]){i&&i.p&&(!e||o&2)&&Us(i,n,s,s[1],e?Bs(n,s[1],o,null):Gs(s[1]),null),(!e||o&1)&&wt(t,"href",s[0])},i(s){e||(Wt(i,s),e=!0)},o(s){$t(i,s),e=!1},d(s){s&&Xt(t),i&&i.d(s)}}}function Jm(r,t,e){let{$$slots:n={},$$scope:i}=t,{href:s}=t;return r.$$set=o=>{"href"in o&&e(0,s=o.href),"$$scope"in o&&e(1,i=o.$$scope)},[s,i,n]}class Sr extends Fe{constructor(t){super(),Ne(this,t,Jm,Zm,Ie,{href:0})}}function Km(r){let t;return{c(){t=$e("Home")},m(e,n){Yt(e,t,n)},d(e){e&&Xt(t)}}}function Qm(r){let t;return{c(){t=$e("About Me")},m(e,n){Yt(e,t,n)},d(e){e&&Xt(t)}}}function tg(r){let t;return{c(){t=$e("Projects")},m(e,n){Yt(e,t,n)},d(e){e&&Xt(t)}}}function eg(r){let t;return{c(){t=$e("Contact")},m(e,n){Yt(e,t,n)},d(e){e&&Xt(t)}}}function ng(r){let t,e,n,i,s,o,a,c,l;return e=new Sr({props:{href:"#home",$$slots:{default:[Km]},$$scope:{ctx:r}}}),i=new Sr({props:{href:"#about-me",$$slots:{default:[Qm]},$$scope:{ctx:r}}}),o=new Sr({props:{href:"#projects",$$slots:{default:[tg]},$$scope:{ctx:r}}}),c=new Sr({props:{href:"#contact",$$slots:{default:[eg]},$$scope:{ctx:r}}}),{c(){t=Vt("div"),ce(e.$$.fragment),n=Zt(),ce(i.$$.fragment),s=Zt(),ce(o.$$.fragment),a=Zt(),ce(c.$$.fragment),wt(t,"class","svelte-15kyeo0")},m(f,u){Yt(f,t,u),oe(e,t,null),Ft(t,n),oe(i,t,null),Ft(t,s),oe(o,t,null),Ft(t,a),oe(c,t,null),l=!0},p(f,[u]){const h={};u&1&&(h.$$scope={dirty:u,ctx:f}),e.$set(h);const m={};u&1&&(m.$$scope={dirty:u,ctx:f}),i.$set(m);const g={};u&1&&(g.$$scope={dirty:u,ctx:f}),o.$set(g);const p={};u&1&&(p.$$scope={dirty:u,ctx:f}),c.$set(p)},i(f){l||(Wt(e.$$.fragment,f),Wt(i.$$.fragment,f),Wt(o.$$.fragment,f),Wt(c.$$.fragment,f),l=!0)},o(f){$t(e.$$.fragment,f),$t(i.$$.fragment,f),$t(o.$$.fragment,f),$t(c.$$.fragment,f),l=!1},d(f){f&&Xt(t),ae(e),ae(i),ae(o),ae(c)}}}class ig extends Fe{constructor(t){super(),Ne(this,t,null,ng,Ie,{})}}function rg(r){let t,e;const n=r[2].default,i=ks(n,r,r[1],null);return{c(){t=Vt("section"),i&&i.c(),wt(t,"id",r[0]),wt(t,"class","svelte-1xfux94")},m(s,o){Yt(s,t,o),i&&i.m(t,null),e=!0},p(s,[o]){i&&i.p&&(!e||o&2)&&Us(i,n,s,s[1],e?Bs(n,s[1],o,null):Gs(s[1]),null),(!e||o&1)&&wt(t,"id",s[0])},i(s){e||(Wt(i,s),e=!0)},o(s){$t(i,s),e=!1},d(s){s&&Xt(t),i&&i.d(s)}}}function sg(r,t,e){let{$$slots:n={},$$scope:i}=t,{id:s}=t;return r.$$set=o=>{"id"in o&&e(0,s=o.id),"$$scope"in o&&e(1,i=o.$$scope)},[s,i,n]}class eo extends Fe{constructor(t){super(),Ne(this,t,sg,rg,Ie,{id:0})}}var og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ag(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tl={exports:{}};/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */(function(r,t){(function(n,i){r.exports=i()})(og,function(){return function(e){var n={};function i(s){if(n[s])return n[s].exports;var o=n[s]={exports:{},id:s,loaded:!1};return e[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}return i.m=e,i.c=n,i.p="",i(0)}([function(e,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function f(u,h){for(var m=0;m<h.length;m++){var g=h[m];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(u,g.key,g)}}return function(u,h,m){return h&&f(u.prototype,h),m&&f(u,m),u}}();function o(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}var a=i(1),c=i(3),l=function(){function f(u,h){o(this,f),a.initializer.load(this,h,u),this.begin()}return s(f,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||!this.pause.status||(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var h=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,h&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var h=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!h.currentElContent||h.currentElContent.length===0?h.typewrite(h.strings[h.sequence[h.arrayPos]],h.strPos):h.backspace(h.currentElContent,h.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function(h,m){var g=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var p=this.humanizer(this.typeSpeed),d=1;if(this.pause.status===!0){this.setPauseStatus(h,m,!0);return}this.timeout=setTimeout(function(){m=c.htmlParser.typeHtmlChars(h,m,g);var _=0,y=h.substr(m);if(y.charAt(0)==="^"&&/^\^\d+/.test(y)){var w=1;y=/\d+/.exec(y)[0],w+=y.length,_=parseInt(y),g.temporaryPause=!0,g.options.onTypingPaused(g.arrayPos,g),h=h.substring(0,m)+h.substring(m+w),g.toggleBlinking(!0)}if(y.charAt(0)==="`"){for(;h.substr(m+d).charAt(0)!=="`"&&(d++,!(m+d>h.length)););var v=h.substring(0,m),M=h.substring(v.length+1,m+d),A=h.substring(m+d+1);h=v+M+A,d--}g.timeout=setTimeout(function(){g.toggleBlinking(!1),m>=h.length?g.doneTyping(h,m):g.keepTyping(h,m,d),g.temporaryPause&&(g.temporaryPause=!1,g.options.onTypingResumed(g.arrayPos,g))},_)},p)}},{key:"keepTyping",value:function(h,m,g){m===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),m+=g;var p=h.substr(0,m);this.replaceText(p),this.typewrite(h,m)}},{key:"doneTyping",value:function(h,m){var g=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),!(this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount))&&(this.timeout=setTimeout(function(){g.backspace(h,m)},this.backDelay))}},{key:"backspace",value:function(h,m){var g=this;if(this.pause.status===!0){this.setPauseStatus(h,m,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var p=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){m=c.htmlParser.backSpaceHtmlChars(h,m,g);var d=h.substr(0,m);if(g.replaceText(d),g.smartBackspace){var _=g.strings[g.arrayPos+1];_&&d===_.substr(0,m)?g.stopNum=m:g.stopNum=0}m>g.stopNum?(m--,g.backspace(h,m)):m<=g.stopNum&&(g.arrayPos++,g.arrayPos===g.strings.length?(g.arrayPos=0,g.options.onLastStringBackspaced(),g.shuffleStringsIfNeeded(),g.begin()):g.typewrite(g.strings[g.sequence[g.arrayPos]],m))},p)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(h,m,g){this.pause.typewrite=g,this.pause.curString=h,this.pause.curStrPos=m}},{key:"toggleBlinking",value:function(h){!this.cursor||this.pause.status||this.cursorBlinking!==h&&(this.cursorBlinking=h,h?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(h){return Math.round(Math.random()*h/2)+h}},{key:"shuffleStringsIfNeeded",value:function(){!this.shuffle||(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var h=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){h.arrayPos++,h.replaceText(""),h.strings.length>h.arrayPos?h.typewrite(h.strings[h.sequence[h.arrayPos]],0):(h.typewrite(h.strings[0],0),h.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(h){this.attr?this.el.setAttribute(this.attr,h):this.isInput?this.el.value=h:this.contentType==="html"?this.el.innerHTML=h:this.el.textContent=h}},{key:"bindFocusEvents",value:function(){var h=this;!this.isInput||(this.el.addEventListener("focus",function(m){h.stop()}),this.el.addEventListener("blur",function(m){h.el.value&&h.el.value.length!==0||h.start()}))}},{key:"insertCursor",value:function(){!this.showCursor||this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),f}();n.default=l,e.exports=n.default},function(e,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(m){for(var g=1;g<arguments.length;g++){var p=arguments[g];for(var d in p)Object.prototype.hasOwnProperty.call(p,d)&&(m[d]=p[d])}return m},o=function(){function m(g,p){for(var d=0;d<p.length;d++){var _=p[d];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(g,_.key,_)}}return function(g,p,d){return p&&m(g.prototype,p),d&&m(g,d),g}}();function a(m){return m&&m.__esModule?m:{default:m}}function c(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}var l=i(2),f=a(l),u=function(){function m(){c(this,m)}return o(m,[{key:"load",value:function(p,d,_){if(typeof _=="string"?p.el=document.querySelector(_):p.el=_,p.options=s({},f.default,d),p.isInput=p.el.tagName.toLowerCase()==="input",p.attr=p.options.attr,p.bindInputFocusEvents=p.options.bindInputFocusEvents,p.showCursor=p.isInput?!1:p.options.showCursor,p.cursorChar=p.options.cursorChar,p.cursorBlinking=!0,p.elContent=p.attr?p.el.getAttribute(p.attr):p.el.textContent,p.contentType=p.options.contentType,p.typeSpeed=p.options.typeSpeed,p.startDelay=p.options.startDelay,p.backSpeed=p.options.backSpeed,p.smartBackspace=p.options.smartBackspace,p.backDelay=p.options.backDelay,p.fadeOut=p.options.fadeOut,p.fadeOutClass=p.options.fadeOutClass,p.fadeOutDelay=p.options.fadeOutDelay,p.isPaused=!1,p.strings=p.options.strings.map(function(A){return A.trim()}),typeof p.options.stringsElement=="string"?p.stringsElement=document.querySelector(p.options.stringsElement):p.stringsElement=p.options.stringsElement,p.stringsElement){p.strings=[],p.stringsElement.style.display="none";var y=Array.prototype.slice.apply(p.stringsElement.children),w=y.length;if(w)for(var v=0;v<w;v+=1){var M=y[v];p.strings.push(M.innerHTML.trim())}}p.strPos=0,p.arrayPos=0,p.stopNum=0,p.loop=p.options.loop,p.loopCount=p.options.loopCount,p.curLoop=0,p.shuffle=p.options.shuffle,p.sequence=[],p.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},p.typingComplete=!1;for(var v in p.strings)p.sequence[v]=v;p.currentElContent=this.getCurrentElContent(p),p.autoInsertCss=p.options.autoInsertCss,this.appendAnimationCss(p)}},{key:"getCurrentElContent",value:function(p){var d="";return p.attr?d=p.el.getAttribute(p.attr):p.isInput?d=p.el.value:p.contentType==="html"?d=p.el.innerHTML:d=p.el.textContent,d}},{key:"appendAnimationCss",value:function(p){var d="data-typed-js-css";if(!!p.autoInsertCss&&!(!p.showCursor&&!p.fadeOut)&&!document.querySelector("["+d+"]")){var _=document.createElement("style");_.type="text/css",_.setAttribute(d,!0);var y="";p.showCursor&&(y+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),p.fadeOut&&(y+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),_.length!==0&&(_.innerHTML=y,document.body.appendChild(_))}}}]),m}();n.default=u;var h=new u;n.initializer=h},function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var i={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(o){},onComplete:function(o){},preStringTyped:function(o,a){},onStringTyped:function(o,a){},onLastStringBackspaced:function(o){},onTypingPaused:function(o,a){},onTypingResumed:function(o,a){},onReset:function(o){},onStop:function(o,a){},onStart:function(o,a){},onDestroy:function(o){}};n.default=i,e.exports=n.default},function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function c(l,f){for(var u=0;u<f.length;u++){var h=f[u];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(l,h.key,h)}}return function(l,f,u){return f&&c(l.prototype,f),u&&c(l,u),l}}();function s(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}var o=function(){function c(){s(this,c)}return i(c,[{key:"typeHtmlChars",value:function(f,u,h){if(h.contentType!=="html")return u;var m=f.substr(u).charAt(0);if(m==="<"||m==="&"){var g="";for(m==="<"?g=">":g=";";f.substr(u+1).charAt(0)!==g&&(u++,!(u+1>f.length)););u++}return u}},{key:"backSpaceHtmlChars",value:function(f,u,h){if(h.contentType!=="html")return u;var m=f.substr(u).charAt(0);if(m===">"||m===";"){var g="";for(m===">"?g="<":g="&";f.substr(u-1).charAt(0)!==g&&(u--,!(u<0)););u--}return u}}]),c}();n.default=o;var a=new o;n.htmlParser=a}])})})(Tl);const lg=ag(Tl.exports);function cg(r){let t;return{c(){t=Vt("div"),t.innerHTML=`<h1 class="svelte-kagsb6">Hi, I&#39;m <span class="typing svelte-kagsb6"></span></h1> 
		<h3 class="svelte-kagsb6">Introduction</h3> 
		<p class="svelte-kagsb6"><b>Hey there!</b> My name is Eli, and welcome to my little corner of
			the internet. It&#39;s pretty small as is, but I&#39;ve got plans to change that.
			I&#39;d go into my interests and hobbies, but that&#39;s what the header is for!</p> 
		<p class="svelte-kagsb6">If you&#39;ve seen me around, you probably recognise me from one of
			three places:</p> 
		<ul class="svelte-kagsb6"><li>A regular in a twitch streamer&#39;s chat community.</li> 
			<li>The host for multiple osu! tournaments</li> 
			<li>Those two videos I did with SunlessKhan</li></ul> 
		<p class="svelte-kagsb6">If you recognise me from somewhere else, Welcome! I&#39;d love to know
			where you know me from!</p> 
		<h3 class="svelte-kagsb6">Why clxxiii?</h3> 
		<p class="svelte-kagsb6">clxxiii is a username I&#39;ve had for nearly a decade now. And the
			reason I&#39;ve stuck with it is because it holds a special relation to
			my real name.</p> 
		<p class="svelte-kagsb6">As you&#39;ve probably already googled by now, clxxiii is roman numerals
			for 173. If you write 173 on a calculator, or a piece of paper, it
			says <span class="upside-down svelte-kagsb6">173</span>. That looks a
			hell-of-a-lot like ELI, which just so happens to be my name!</p> 
		<h3 class="svelte-kagsb6">How can I make a website that looks like yours?</h3> 
		<p class="svelte-kagsb6">I&#39;m glad you like the look of it!</p> 
		<p class="svelte-kagsb6">Basically everything I&#39;ve learned about front-end design I&#39;ve
			learned from YouTube, documentation, or just looking at other
			peoples code. My CS courses took too long to start covering
			front-end, so I decided to learn it myself!</p>`,wt(t,"class","svelte-kagsb6")},m(e,n){Yt(e,t,n)},p:De,d(e){e&&Xt(t)}}}function ug(r){let t,e;return t=new eo({props:{id:"about-me",$$slots:{default:[cg]},$$scope:{ctx:r}}}),{c(){ce(t.$$.fragment)},m(n,i){oe(t,n,i),e=!0},p(n,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:n}),t.$set(s)},i(n){e||(Wt(t.$$.fragment,n),e=!0)},o(n){$t(t.$$.fragment,n),e=!1},d(n){ae(t,n)}}}function hg(r){return ka(()=>{var t={strings:["clxxiii","a CompSci Major","a Rollercoaster Enthusiast","Addicted to Rainbow 6","Top 100k in osu!","a Rubik's Cuber","a Clone Hero Charter","S+ in TETRIO","an osu! Tourney Host","a Twitch Streamer"],typeSpeed:50,backDelay:1e3,backSpeed:20,loop:!0};new lg(".typing",t)}),[]}class fg extends Fe{constructor(t){super(),Ne(this,t,hg,ug,Ie,{})}}const La=[{name:"Yagami",desc:"I'm currently working on a bot to replace the role of referees in blitz tournaments.",link:"https://yagami.clxxiii.dev",icon_url:"https://yagami.clxxiii.dev/icons/logo.png",status:"Ongoing"},{name:"CLXXIII's Draft Cup",desc:"I hosted a tourney for osu! It lasted for about 3 months, taking up the majority of my winter break. I hand-made all of the graphics and sheets, and I made a custom website for it as well!",link:"https://cdc.clxxiii.dev",icon_url:"https://cdc.clxxiii.dev/src/icon.png",status:"Complete"},{name:"Clone Hero Charts",desc:"For 4 years now, I have been taking songs I like and making them playable on Clone Hero.",link:"https://clxxiii.dev/charts",icon_url:"./img/clxxiii_ch.png",status:"Ongoing"},{name:"Expand me! page",desc:`A short userscript that adds an "expand" button on a user's osu profile`,link:"https://github.com/clxxiii/expand-me-page",icon_url:"./img/expandbutton.png",status:"Complete"},{name:"Stats for TETR.IO",desc:"A simple stream overlay for tetrio, an online stacker game, that shows rank information.",link:"https://tetriostats.clxxiii.dev",icon_url:"https://clxxiii.dev/img/icon.png",status:"Complete"},{name:"CHINCHOO.XYZ",desc:"A website and redirect hub I made for twitch streamer, Chinchoo.",link:"https://chinchoo.xyz",icon_url:"https://chinchoo.xyz/src/logo.png",status:"Complete"},{name:"2v2 Tuesday",desc:"A Stream overlay I made for chin's weekly tuesday streams, in which chat can sign up for quickfire, best of 5 2v2s",link:"https://chinchoo.xyz/2v2Tuesday",icon_url:"./img/chingradient.png",status:"Complete"},{name:"Discord Webhook Sender",desc:"I made this for a small community of friends, but I figured that other people could also get some use out of it",link:"https://webhookposter.clxxiii.dev",icon_url:"https://clxxiii.dev/img/icon.png",status:"Complete"},{name:"Team Sheet Template",desc:"The ultimate overkill team spreadsheet! If you want a sheet for your team that is loaded with features you will never need, you are in luck!",link:"https://docs.google.com/spreadsheets/d/1zrCrszu2yKcZ34X4AEcEcVVglfQexk9nb5QxDtFg1YQ/edit#gid=2049358991",icon_url:"https://clxxiii.dev/img/icon.png",status:"Mostly Complete"}];function dg(r){let t,e,n,i,s,o,a,c,l,f,u,h,m,g,p;return{c(){t=Vt("a"),e=Vt("div"),n=$e(r[0]),i=Zt(),s=Vt("img"),c=Zt(),l=Vt("div"),f=$e(r[1]),u=Zt(),h=Vt("div"),m=Vt("b"),m.textContent="Status:",g=Zt(),p=$e(r[4]),wt(e,"class","name svelte-1dd6xt4"),Lr(s.src,o=r[2])||wt(s,"src",o),wt(s,"alt",a=r[0]+" icon"),wt(s,"class","icon svelte-1dd6xt4"),wt(l,"class","desc svelte-1dd6xt4"),wt(h,"class","stat svelte-1dd6xt4"),wt(t,"href",r[3]),wt(t,"class","card svelte-1dd6xt4")},m(d,_){Yt(d,t,_),Ft(t,e),Ft(e,n),Ft(t,i),Ft(t,s),Ft(t,c),Ft(t,l),Ft(l,f),Ft(t,u),Ft(t,h),Ft(h,m),Ft(h,g),Ft(h,p)},p(d,[_]){_&1&&Di(n,d[0]),_&4&&!Lr(s.src,o=d[2])&&wt(s,"src",o),_&1&&a!==(a=d[0]+" icon")&&wt(s,"alt",a),_&2&&Di(f,d[1]),_&16&&Di(p,d[4]),_&8&&wt(t,"href",d[3])},i:De,o:De,d(d){d&&Xt(t)}}}function pg(r,t,e){let{name:n}=t,{desc:i}=t,{icon_url:s}=t,{link:o}=t,{status:a}=t;return r.$$set=c=>{"name"in c&&e(0,n=c.name),"desc"in c&&e(1,i=c.desc),"icon_url"in c&&e(2,s=c.icon_url),"link"in c&&e(3,o=c.link),"status"in c&&e(4,a=c.status)},[n,i,s,o,a]}class mg extends Fe{constructor(t){super(),Ne(this,t,pg,dg,Ie,{name:0,desc:1,icon_url:2,link:3,status:4})}}function Pa(r,t,e){const n=r.slice();return n[0]=t[e],n}function Da(r){let t,e;const n=[r[0]];let i={};for(let s=0;s<n.length;s+=1)i=Os(i,n[s]);return t=new mg({props:i}),{c(){ce(t.$$.fragment)},m(s,o){oe(t,s,o),e=!0},p(s,o){const a=o&0?Va(n,[Ha(s[0])]):{};t.$set(a)},i(s){e||(Wt(t.$$.fragment,s),e=!0)},o(s){$t(t.$$.fragment,s),e=!1},d(s){ae(t,s)}}}function gg(r){let t,e,n,i,s,o=La,a=[];for(let l=0;l<o.length;l+=1)a[l]=Da(Pa(r,o,l));const c=l=>$t(a[l],1,1,()=>{a[l]=null});return{c(){t=Vt("div"),e=Vt("h1"),e.textContent="Projects",n=Zt(),i=Vt("div");for(let l=0;l<a.length;l+=1)a[l].c();wt(e,"class","svelte-1ey21il"),wt(i,"class","projects svelte-1ey21il")},m(l,f){Yt(l,t,f),Ft(t,e),Ft(t,n),Ft(t,i);for(let u=0;u<a.length;u+=1)a[u].m(i,null);s=!0},p(l,f){if(f&0){o=La;let u;for(u=0;u<o.length;u+=1){const h=Pa(l,o,u);a[u]?(a[u].p(h,f),Wt(a[u],1)):(a[u]=Da(h),a[u].c(),Wt(a[u],1),a[u].m(i,null))}for(Ua(),u=o.length;u<a.length;u+=1)c(u);Ga()}},i(l){if(!s){for(let f=0;f<o.length;f+=1)Wt(a[f]);s=!0}},o(l){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)$t(a[f]);s=!1},d(l){l&&Xt(t),Oa(a,l)}}}function _g(r){let t,e;return t=new eo({props:{id:"projects",$$slots:{default:[gg]},$$scope:{ctx:r}}}),{c(){ce(t.$$.fragment)},m(n,i){oe(t,n,i),e=!0},p(n,[i]){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),t.$set(s)},i(n){e||(Wt(t.$$.fragment,n),e=!0)},o(n){$t(t.$$.fragment,n),e=!1},d(n){ae(t,n)}}}class xg extends Fe{constructor(t){super(),Ne(this,t,null,_g,Ie,{})}}const Ra=[{text:"TWITCH",link:"/twitch",colors:{1:"rgb(149, 39, 223)",2:"rgb(112, 30, 167)"},image:"/img/twitch.svg"},{text:"DISCORD",link:"/discord",colors:{1:"#636ff5",2:"#5865f2"},image:"/img/discord.svg"},{text:"TWITTER",link:"/twitter",colors:{1:"rgb(33, 191, 219)",2:"rgb(23, 136, 156)"},image:"/img/twitter.svg"},{text:"YOUTUBE",link:"/youtube",colors:{1:"rgb(230, 26, 26)",2:"rgb(160, 23, 23)"},image:"/img/youtube.svg"},{text:"GITHUB",link:"/github",colors:{1:"#181717",2:"#0d1117"},image:"/img/github.svg"},{text:"OSU!",link:"/osu",colors:{1:"rgb(240, 90, 177)",2:"rgb(190, 73, 141)"},image:"/img/osu.svg"}];function vg(r){let t,e;const n=r[2].default,i=ks(n,r,r[1],null);return{c(){t=Vt("div"),i&&i.c(),wt(t,"class","face svelte-i4xtg6"),Pr(t,"--i",r[0],!1)},m(s,o){Yt(s,t,o),i&&i.m(t,null),e=!0},p(s,[o]){i&&i.p&&(!e||o&2)&&Us(i,n,s,s[1],e?Bs(n,s[1],o,null):Gs(s[1]),null),o&1&&Pr(t,"--i",s[0],!1)},i(s){e||(Wt(i,s),e=!0)},o(s){$t(i,s),e=!1},d(s){s&&Xt(t),i&&i.d(s)}}}function yg(r,t,e){let{$$slots:n={},$$scope:i}=t,{faceNum:s}=t;return r.$$set=o=>{"faceNum"in o&&e(0,s=o.faceNum),"$$scope"in o&&e(1,i=o.$$scope)},[s,i,n]}class wr extends Fe{constructor(t){super(),Ne(this,t,yg,vg,Ie,{faceNum:0})}}function Mg(r){let t;return{c(){t=$e(r[0])},m(e,n){Yt(e,t,n)},p(e,n){n&1&&Di(t,e[0])},d(e){e&&Xt(t)}}}function bg(r){let t,e,n;return{c(){t=Vt("img"),Lr(t.src,e=r[2])||wt(t,"src",e),wt(t,"alt",n=r[0]+" logo"),wt(t,"class","svelte-1cor0yo")},m(i,s){Yt(i,t,s)},p(i,s){s&4&&!Lr(t.src,e=i[2])&&wt(t,"src",e),s&1&&n!==(n=i[0]+" logo")&&wt(t,"alt",n)},d(i){i&&Xt(t)}}}function Sg(r){let t;return{c(){t=$e(r[0])},m(e,n){Yt(e,t,n)},p(e,n){n&1&&Di(t,e[0])},d(e){e&&Xt(t)}}}function wg(r){let t,e,n,i,s,o,a,c,l;return e=new wr({props:{faceNum:2,$$slots:{default:[Mg]},$$scope:{ctx:r}}}),i=new wr({props:{faceNum:1,$$slots:{default:[bg]},$$scope:{ctx:r}}}),o=new wr({props:{faceNum:4,$$slots:{default:[Sg]},$$scope:{ctx:r}}}),c=new wr({props:{faceNum:3}}),{c(){t=Vt("a"),ce(e.$$.fragment),n=Zt(),ce(i.$$.fragment),s=Zt(),ce(o.$$.fragment),a=Zt(),ce(c.$$.fragment),wt(t,"href",r[1]),wt(t,"class","cube svelte-1cor0yo"),Pr(t,"--color1",r[3],!1),Pr(t,"--color2",r[4],!1)},m(f,u){Yt(f,t,u),oe(e,t,null),Ft(t,n),oe(i,t,null),Ft(t,s),oe(o,t,null),Ft(t,a),oe(c,t,null),l=!0},p(f,[u]){const h={};u&65&&(h.$$scope={dirty:u,ctx:f}),e.$set(h);const m={};u&69&&(m.$$scope={dirty:u,ctx:f}),i.$set(m);const g={};u&65&&(g.$$scope={dirty:u,ctx:f}),o.$set(g),(!l||u&2)&&wt(t,"href",f[1])},i(f){l||(Wt(e.$$.fragment,f),Wt(i.$$.fragment,f),Wt(o.$$.fragment,f),Wt(c.$$.fragment,f),l=!0)},o(f){$t(e.$$.fragment,f),$t(i.$$.fragment,f),$t(o.$$.fragment,f),$t(c.$$.fragment,f),l=!1},d(f){f&&Xt(t),ae(e),ae(i),ae(o),ae(c)}}}function Tg(r,t,e){let{text:n}=t,{link:i}=t,{colors:s}=t,{image:o}=t,a=s[1],c=s[2];return r.$$set=l=>{"text"in l&&e(0,n=l.text),"link"in l&&e(1,i=l.link),"colors"in l&&e(5,s=l.colors),"image"in l&&e(2,o=l.image)},[n,i,o,a,c,s]}class Eg extends Fe{constructor(t){super(),Ne(this,t,Tg,wg,Ie,{text:0,link:1,colors:5,image:2})}}function Cg(r){let t,e,n,i,s,o,a,c,l,f,u,h,m,g,p,d;return{c(){t=Vt("div"),e=Vt("h1"),e.textContent="Contact Me!",n=Zt(),i=Vt("div"),i.textContent=`None of the socials suit your fancy? Send me a message directly from\r
		here!`,s=Zt(),o=Vt("input"),a=Zt(),c=Vt("input"),l=Zt(),f=Vt("input"),u=Zt(),h=Vt("textarea"),m=Zt(),g=Vt("button"),g.textContent="Please fill all fields",wt(e,"class","svelte-12jfy7i"),wt(i,"class","tag svelte-12jfy7i"),wt(o,"type","hidden"),wt(o,"name","_template"),o.value="box",wt(o,"class","sending sent svelte-12jfy7i"),wt(c,"type","text"),wt(c,"class","form-field svelte-12jfy7i"),wt(c,"placeholder","What should I call you?"),wt(c,"id","name"),c.required=!0,wt(f,"type","text"),wt(f,"class","form-field svelte-12jfy7i"),wt(f,"placeholder","Email"),wt(f,"id","email"),f.required=!0,wt(h,"class","form-field svelte-12jfy7i"),wt(h,"placeholder",""),wt(h,"id","text"),h.required=!0,wt(g,"class","unfilled svelte-12jfy7i"),wt(g,"id","send"),wt(t,"class","form svelte-12jfy7i")},m(_,y){Yt(_,t,y),Ft(t,e),Ft(t,n),Ft(t,i),Ft(t,s),Ft(t,o),Ft(t,a),Ft(t,c),r[5](c),Ft(t,l),Ft(t,f),r[6](f),Ft(t,u),Ft(t,h),r[7](h),Ft(t,m),Ft(t,g),p||(d=[Ki(c,"keyup",r[3]),Ki(f,"keyup",r[3]),Ki(h,"keyup",r[3]),Ki(g,"click",r[4])],p=!0)},p:De,i:De,o:De,d(_){_&&Xt(t),r[5](null),r[6](null),r[7](null),p=!1,_i(d)}}}function Ag(r,t,e){let n=!1,i,s,o;function a(){let h=document.getElementById("send"),m=i.value,g=s.value,p=o.value;[m,g,p].find(_=>_=="")==null?(h.innerHTML="Submit",n=!0,h.classList.remove("unfilled")):(h.innerHTML="Please fill all fields",n=!1,h.classList.add("unfilled"))}function c(){let h=document.getElementById("send");if(!n){let y=500;h.style.animation=y+"ms shake linear",setTimeout(()=>{h.style.animation=""},y+10);return}n=!1,h.classList.add("sending");let m=i.value,g=s.value,p=o.value,d={name:m,email:g,text:p};console.log(d),fetch("https://formsubmit.co/ajax/1100c5a9e5629a4299535637c75cedab",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)}),setTimeout(_,2e3);function _(){h.innerHTML="\u2714",h.classList.add("sent"),h.classList.remove("pressed"),setTimeout(()=>{window.location.href="/"},3e3)}}document.addEventListener("keydown",h=>{h.ctrlKey&&h.code=="Enter"&&c()});function l(h){ai[h?"unshift":"push"](()=>{i=h,e(0,i)})}function f(h){ai[h?"unshift":"push"](()=>{s=h,e(1,s)})}function u(h){ai[h?"unshift":"push"](()=>{o=h,e(2,o)})}return[i,s,o,a,c,l,f,u]}class Lg extends Fe{constructor(t){super(),Ne(this,t,Ag,Cg,Ie,{})}}function Ia(r,t,e){const n=r.slice();return n[0]=t[e],n}function Na(r){let t,e;const n=[r[0]];let i={};for(let s=0;s<n.length;s+=1)i=Os(i,n[s]);return t=new Eg({props:i}),{c(){ce(t.$$.fragment)},m(s,o){oe(t,s,o),e=!0},p(s,o){const a=o&0?Va(n,[Ha(s[0])]):{};t.$set(a)},i(s){e||(Wt(t.$$.fragment,s),e=!0)},o(s){$t(t.$$.fragment,s),e=!1},d(s){ae(t,s)}}}function Pg(r){let t,e,n,i,s,o,a,c=Ra,l=[];for(let u=0;u<c.length;u+=1)l[u]=Na(Ia(r,c,u));const f=u=>$t(l[u],1,1,()=>{l[u]=null});return o=new Lg({}),{c(){t=Vt("div"),t.innerHTML='<h1 class="svelte-1s3vw4t">Contact</h1>',e=Zt(),n=Vt("div"),i=Vt("div");for(let u=0;u<l.length;u+=1)l[u].c();s=Zt(),ce(o.$$.fragment),wt(t,"class","header"),wt(i,"class","links svelte-1s3vw4t"),wt(n,"class","elements svelte-1s3vw4t")},m(u,h){Yt(u,t,h),Yt(u,e,h),Yt(u,n,h),Ft(n,i);for(let m=0;m<l.length;m+=1)l[m].m(i,null);Ft(n,s),oe(o,n,null),a=!0},p(u,h){if(h&0){c=Ra;let m;for(m=0;m<c.length;m+=1){const g=Ia(u,c,m);l[m]?(l[m].p(g,h),Wt(l[m],1)):(l[m]=Na(g),l[m].c(),Wt(l[m],1),l[m].m(i,null))}for(Ua(),m=c.length;m<l.length;m+=1)f(m);Ga()}},i(u){if(!a){for(let h=0;h<c.length;h+=1)Wt(l[h]);Wt(o.$$.fragment,u),a=!0}},o(u){l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)$t(l[h]);$t(o.$$.fragment,u),a=!1},d(u){u&&Xt(t),u&&Xt(e),u&&Xt(n),Oa(l,u),ae(o)}}}function Dg(r){let t,e;return t=new eo({props:{id:"contact",$$slots:{default:[Pg]},$$scope:{ctx:r}}}),{c(){ce(t.$$.fragment)},m(n,i){oe(t,n,i),e=!0},p(n,[i]){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),t.$set(s)},i(n){e||(Wt(t.$$.fragment,n),e=!0)},o(n){$t(t.$$.fragment,n),e=!1},d(n){ae(t,n)}}}class Rg extends Fe{constructor(t){super(),Ne(this,t,null,Dg,Ie,{})}}function Ig(r){let t,e,n,i,s,o,a,c,l,f,u,h,m;return n=new ig({}),s=new Ym({}),c=new fg({}),f=new xg({}),h=new Rg({}),{c(){t=Vt("section"),e=Zt(),ce(n.$$.fragment),i=Zt(),ce(s.$$.fragment),o=Zt(),a=Vt("main"),ce(c.$$.fragment),l=Zt(),ce(f.$$.fragment),u=Zt(),ce(h.$$.fragment),wt(t,"id","home"),wt(t,"class","svelte-dd8t0i"),wt(a,"class","svelte-dd8t0i")},m(g,p){Yt(g,t,p),Yt(g,e,p),oe(n,g,p),Yt(g,i,p),oe(s,g,p),Yt(g,o,p),Yt(g,a,p),oe(c,a,null),Ft(a,l),oe(f,a,null),Ft(a,u),oe(h,a,null),m=!0},p:De,i(g){m||(Wt(n.$$.fragment,g),Wt(s.$$.fragment,g),Wt(c.$$.fragment,g),Wt(f.$$.fragment,g),Wt(h.$$.fragment,g),m=!0)},o(g){$t(n.$$.fragment,g),$t(s.$$.fragment,g),$t(c.$$.fragment,g),$t(f.$$.fragment,g),$t(h.$$.fragment,g),m=!1},d(g){g&&Xt(t),g&&Xt(e),ae(n,g),g&&Xt(i),ae(s,g),g&&Xt(o),g&&Xt(a),ae(c),ae(f),ae(h)}}}class Ng extends Fe{constructor(t){super(),Ne(this,t,null,Ig,Ie,{})}}new Ng({target:document.getElementById("app")});
