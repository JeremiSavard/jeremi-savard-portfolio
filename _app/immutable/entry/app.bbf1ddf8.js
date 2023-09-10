import{s as j,a as q,e as p,c as B,i as b,d,b as U,o as W,f as z,g as F,h as G,j as I,k as m,l as H,m as J,p as K,q as O,r as E}from"../chunks/scheduler.bae0eb40.js";import{S as M,i as Q,t as g,c as P,a as w,g as D,b as v,d as T,m as R,e as L}from"../chunks/index.cce7df92.js";const X="modulepreload",Y=function(a){return"/jeremi-savard-portfolio/src/"+a},V={},h=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f),f in V)return;V[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const u=i[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},se={};function Z(a){let e,n,s;var i=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=E(i,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),s=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&i!==(i=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),P()}i?(e=E(i,f(t)),t[12](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&d(n),a[12](null),e&&L(e,t)}}}function $(a){let e,n,s;var i=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return i&&(e=E(i,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),s=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&i!==(i=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),P()}i?(e=E(i,f(t)),t[11](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&d(n),a[11](null),e&&L(e,t)}}}function x(a){let e,n,s;var i=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=E(i,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),b(t,n,r),s=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&i!==(i=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),P()}i?(e=E(i,f(t)),t[10](e),v(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&d(n),a[10](null),e&&L(e,t)}}}function A(a){let e,n=a[6]&&y(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(s){e=F(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=G(e);n&&n.l(i),i.forEach(d),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(s,i){b(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=y(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&d(e),n&&n.d()}}}function y(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,s){b(n,e,s)},p(n,s){s&128&&K(e,n[7])},d(n){n&&d(e)}}}function ee(a){let e,n,s,i,f;const t=[$,Z],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&A(a);return{c(){n.c(),s=q(),o&&o.c(),i=p()},l(l){n.l(l),s=B(l),o&&o.l(l),i=p()},m(l,u){r[e].m(l,u),b(l,s,u),o&&o.m(l,u),b(l,i,u),f=!0},p(l,[u]){let k=e;e=_(l),e===k?r[e].p(l,u):(D(),g(r[k],1,1,()=>{r[k]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(s.parentNode,s)),l[5]?o?o.p(l,u):(o=A(l),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){f||(w(n),f=!0)},o(l){g(n),f=!1},d(l){l&&(d(s),d(i)),r[e].d(l),o&&o.d(l)}}}function te(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;U(s.page.notify);let l=!1,u=!1,k=null;W(()=>{const c=s.page.subscribe(()=>{l&&(n(6,u=!0),n(7,k=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,s=c.stores),"page"in c&&n(9,i=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,f,r,_,o,l,u,k,s,i,N,S,C]}class re extends M{constructor(e){super(),Q(this,e,te,ee,j,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>h(()=>import("../nodes/0.ee2ab75e.js"),["_app/immutable/nodes/0.ee2ab75e.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/each.4f075bc1.js","_app/immutable/chunks/Icon.6cb0aa17.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/assets/Icon.49f27fa9.css","_app/immutable/chunks/stores.9410e85a.js","_app/immutable/chunks/singletons.4a1063f1.js","_app/immutable/chunks/paths.9db016e8.js","_app/immutable/assets/0.229acdde.css"]),()=>h(()=>import("../nodes/1.98c27b59.js"),["_app/immutable/nodes/1.98c27b59.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/stores.9410e85a.js","_app/immutable/chunks/singletons.4a1063f1.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/chunks/paths.9db016e8.js"]),()=>h(()=>import("../nodes/2.98598c25.js"),["_app/immutable/nodes/2.98598c25.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/each.4f075bc1.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/chunks/Icon.6cb0aa17.js","_app/immutable/assets/Icon.49f27fa9.css","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/assets/2.279bbe38.css"]),()=>h(()=>import("../nodes/3.fceaa1e3.js"),["_app/immutable/nodes/3.fceaa1e3.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/each.4f075bc1.js","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/Card.a51583c5.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/assets/Card.7125fb3f.css","_app/immutable/chunks/ChipIcon.e9c2baae.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/assets/ChipIcon.76f42f5c.css","_app/immutable/chunks/Chip.0b21f769.js","_app/immutable/assets/Chip.4a3a55cc.css","_app/immutable/chunks/SearchPage.3d5b6bcd.js","_app/immutable/chunks/CommonPage.d7ee9005.js","_app/immutable/chunks/TabTitle.6e754de2.js","_app/immutable/assets/SearchPage.aa3b5afd.css"]),()=>h(()=>import("../nodes/4.74e75586.js"),["_app/immutable/nodes/4.74e75586.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/each.4f075bc1.js","_app/immutable/chunks/Chip.0b21f769.js","_app/immutable/assets/Chip.4a3a55cc.css","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/Card.a51583c5.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/assets/Card.7125fb3f.css","_app/immutable/chunks/ChipIcon.e9c2baae.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/assets/ChipIcon.76f42f5c.css","_app/immutable/chunks/Icon.6cb0aa17.js","_app/immutable/assets/Icon.49f27fa9.css","_app/immutable/chunks/paths.9db016e8.js","_app/immutable/chunks/SearchPage.3d5b6bcd.js","_app/immutable/chunks/CommonPage.d7ee9005.js","_app/immutable/chunks/TabTitle.6e754de2.js","_app/immutable/assets/SearchPage.aa3b5afd.css","_app/immutable/assets/4.ffa8ec9c.css","_app/immutable/assets/CardDivider.b5e7edbb.css"]),()=>h(()=>import("../nodes/5.42bcfd6d.js"),["_app/immutable/nodes/5.42bcfd6d.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/Chip.0b21f769.js","_app/immutable/assets/Chip.4a3a55cc.css","_app/immutable/chunks/CommonPage.d7ee9005.js","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/TabTitle.6e754de2.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/assets/5.c6b04c59.css"]),()=>h(()=>import("../nodes/6.2af7dd12.js"),["_app/immutable/nodes/6.2af7dd12.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/each.4f075bc1.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/chunks/Icon.6cb0aa17.js","_app/immutable/assets/Icon.49f27fa9.css","_app/immutable/chunks/paths.9db016e8.js","_app/immutable/chunks/SearchPage.3d5b6bcd.js","_app/immutable/chunks/CommonPage.d7ee9005.js","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/TabTitle.6e754de2.js","_app/immutable/assets/SearchPage.aa3b5afd.css"]),()=>h(()=>import("../nodes/7.a3258f99.js"),["_app/immutable/nodes/7.a3258f99.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/each.4f075bc1.js","_app/immutable/chunks/Card.a51583c5.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/assets/Card.7125fb3f.css","_app/immutable/chunks/paths.9db016e8.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/chunks/SearchPage.3d5b6bcd.js","_app/immutable/chunks/CommonPage.d7ee9005.js","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/TabTitle.6e754de2.js","_app/immutable/assets/SearchPage.aa3b5afd.css"]),()=>h(()=>import("../nodes/8.f25a4f86.js"),["_app/immutable/nodes/8.f25a4f86.js","_app/immutable/chunks/params.ccb97527.js","_app/immutable/chunks/index.91de932d.js","_app/immutable/chunks/scheduler.bae0eb40.js","_app/immutable/chunks/index.cce7df92.js","_app/immutable/chunks/MainTitle.c3a4e2db.js","_app/immutable/assets/MainTitle.2c6ff647.css","_app/immutable/chunks/paths.9db016e8.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/chunks/TabTitle.6e754de2.js","_app/immutable/assets/8.9b44e125.css","_app/immutable/assets/CardDivider.b5e7edbb.css"])],ae=[],le={"/":[2],"/experience":[3],"/projects":[4],"/resume":[5],"/search":[6],"/skills":[7],"/skills/[slug]":[8]},fe={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,fe as hooks,se as matchers,oe as nodes,re as root,ae as server_loads};
