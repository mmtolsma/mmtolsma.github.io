import{s as j,n as z,c as te,o as le,q as se,u as U,v as F,w as J,x as K}from"../chunks/scheduler.C5382k6v.js";import{S as L,i as S,e as v,c as p,f as $,d as u,p as m,b as w,s as E,g as T,a as C,j as b,z as Q,A as X,t as Y,h as Z,k as ee,o as I,m as V,v as q,w as N,x as O,y as W}from"../chunks/index.DfyCXqTW.js";import{r as ne}from"../chunks/index.DEHmf1tf.js";function M(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const ae=!0,ye=Object.freeze(Object.defineProperty({__proto__:null,prerender:ae},Symbol.toStringTag,{value:"Module"})),re=ne([{name:"Home",url:"/"},{name:"About",url:"/about"},{name:"Resume",url:"/resume"},{name:"Portfolio",url:"/portfolio"},{name:"Contact",url:"/contact"}]);function B(r,e,s){const l=r.slice();return l[6]=e[s],l}function P(r,e,s){const l=r.slice();return l[6]=e[s],l}function oe(r){let e,s,l,t="Michael Marinus Tolsma",a,n,o,_,d;function k(i,f){return i[1]?fe:ce}let x=k(r),g=x(r),h=r[1]&&G(r);return{c(){e=v("div"),s=v("div"),l=v("div"),l.textContent=t,a=E(),n=v("button"),g.c(),o=E(),h&&h.c(),this.h()},l(i){e=p(i,"DIV",{class:!0});var f=$(e);s=p(f,"DIV",{class:!0});var y=$(s);l=p(y,"DIV",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-1pp8nk8"&&(l.textContent=t),a=C(y),n=p(y,"BUTTON",{class:!0});var c=$(n);g.l(c),c.forEach(u),y.forEach(u),o=C(f),h&&h.l(f),f.forEach(u),this.h()},h(){m(l,"class","font-bold"),m(n,"class","flex justify-end items-center"),m(s,"class","px-2 flex justify-between items-center"),m(e,"class","nav-bar flex flex-col")},m(i,f){w(i,e,f),b(e,s),b(s,l),b(s,a),b(s,n),g.m(n,null),b(e,o),h&&h.m(e,null),_||(d=Q(n,"click",r[3]),_=!0)},p(i,f){x!==(x=k(i))&&(g.d(1),g=x(i),g&&(g.c(),g.m(n,null))),i[1]?h?h.p(i,f):(h=G(i),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},d(i){i&&u(e),g.d(),h&&h.d(),_=!1,d()}}}function ie(r){let e,s,l,t,a,n,o="Michael Marinus Tolsma",_,d,k="Software Developer",x,g,h=M(r[2]),i=[];for(let f=0;f<h.length;f+=1)i[f]=R(P(r,h,f));return{c(){e=v("div"),s=v("div"),l=v("img"),a=E(),n=v("div"),n.textContent=o,_=E(),d=v("div"),d.textContent=k,x=E(),g=v("nav");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=p(f,"DIV",{class:!0});var y=$(e);s=p(y,"DIV",{class:!0});var c=$(s);l=p(c,"IMG",{src:!0,class:!0,alt:!0}),a=C(c),n=p(c,"DIV",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-1sksone"&&(n.textContent=o),_=C(c),d=p(c,"DIV",{class:!0,"data-svelte-h":!0}),T(d)!=="svelte-pxy6gp"&&(d.textContent=k),x=C(c),g=p(c,"NAV",{class:!0});var D=$(g);for(let A=0;A<i.length;A+=1)i[A].l(D);D.forEach(u),c.forEach(u),y.forEach(u),this.h()},h(){se(l.src,t="/profile-pic.png")||m(l,"src",t),m(l,"class","mt-12 mb-5 rounded w-32 h-32"),m(l,"alt","Michael Tolsma smiling"),m(n,"class","font-bold mb-2"),m(d,"class","py-1 px-2 mb-5 text-sm rounded-lg bg-gray-700"),m(g,"class","grid grid-cols-1 gap-1"),m(s,"class","flex flex-col items-center"),m(e,"class","nav-card")},m(f,y){w(f,e,y),b(e,s),b(s,l),b(s,a),b(s,n),b(s,_),b(s,d),b(s,x),b(s,g);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(g,null)},p(f,y){if(y&4){h=M(f[2]);let c;for(c=0;c<h.length;c+=1){const D=P(f,h,c);i[c]?i[c].p(D,y):(i[c]=R(D),i[c].c(),i[c].m(g,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=h.length}},d(f){f&&u(e),X(i,f)}}}function ce(r){let e;return{c(){e=v("div"),this.h()},l(s){e=p(s,"DIV",{class:!0}),$(e).forEach(u),this.h()},h(){m(e,"class","p-3 fa fa-bars text-2xl hover:bg-gray-700")},m(s,l){w(s,e,l)},d(s){s&&u(e)}}}function fe(r){let e;return{c(){e=v("div"),this.h()},l(s){e=p(s,"DIV",{class:!0}),$(e).forEach(u),this.h()},h(){m(e,"class","p-3 fa fa-xmark text-2xl hover:bg-gray-700")},m(s,l){w(s,e,l)},d(s){s&&u(e)}}}function G(r){let e,s=M(r[2]),l=[];for(let t=0;t<s.length;t+=1)l[t]=H(B(r,s,t));return{c(){e=v("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var a=$(e);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(u),this.h()},h(){m(e,"class","absolute right-0 mt-14 mr-3 w-48 bg-info-card space-y-1 py-2 px-2")},m(t,a){w(t,e,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(t,a){if(a&20){s=M(t[2]);let n;for(n=0;n<s.length;n+=1){const o=B(t,s,n);l[n]?l[n].p(o,a):(l[n]=H(o),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(t){t&&u(e),X(l,t)}}}function H(r){let e,s=r[6].name+"",l,t,a,n;return{c(){e=v("a"),l=Y(s),this.h()},l(o){e=p(o,"A",{href:!0,class:!0});var _=$(e);l=Z(_,s),_.forEach(u),this.h()},h(){m(e,"href",t=r[6].url),m(e,"class","text-white hover:bg-gray-700 block px-3 py-2 text-base font-medium")},m(o,_){w(o,e,_),b(e,l),a||(n=Q(e,"click",r[4]),a=!0)},p(o,_){_&4&&s!==(s=o[6].name+"")&&ee(l,s),_&4&&t!==(t=o[6].url)&&m(e,"href",t)},d(o){o&&u(e),a=!1,n()}}}function R(r){let e,s=r[6].name+"",l,t,a;return{c(){e=v("a"),l=Y(s),t=E(),this.h()},l(n){e=p(n,"A",{href:!0,class:!0});var o=$(e);l=Z(o,s),t=C(o),o.forEach(u),this.h()},h(){m(e,"href",a=r[6].url),m(e,"class","button mb-2 text-center bg-gray-700 hover:bg-gray-300 hover:text-gray-700 py-2 px-12 rounded-md w-full")},m(n,o){w(n,e,o),b(e,l),b(e,t)},p(n,o){o&4&&s!==(s=n[6].name+"")&&ee(l,s),o&4&&a!==(a=n[6].url)&&m(e,"href",a)},d(n){n&&u(e)}}}function ue(r){let e;function s(a,n){return a[0]>=768?ie:oe}let l=s(r),t=l(r);return{c(){e=v("div"),t.c(),this.h()},l(a){e=p(a,"DIV",{class:!0});var n=$(e);t.l(n),n.forEach(u),this.h()},h(){m(e,"class","bg-base-card rounded-lg md:min-w-[250px] md:h-full")},m(a,n){w(a,e,n),t.m(e,null)},p(a,[n]){l===(l=s(a))&&t?t.p(a,n):(t.d(1),t=l(a),t&&(t.c(),t.m(e,null)))},i:z,o:z,d(a){a&&u(e),t.d()}}}function de(r,e,s){let l;te(r,re,d=>s(2,l=d));let t,a=!1;function n(){s(0,t=window.innerWidth)}return le(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)})),[t,a,l,()=>{s(1,a=!a)},()=>{s(1,a=!1)}]}class he extends L{constructor(e){super(),S(this,e,de,ue,j,{})}}function me(r){let e,s;const l=r[1].default,t=U(l,r,r[0],null);return{c(){e=v("div"),t&&t.c(),this.h()},l(a){e=p(a,"DIV",{class:!0});var n=$(e);t&&t.l(n),n.forEach(u),this.h()},h(){m(e,"class","bg-base-card bg-marine-green rounded-lg flex flex-col h-full")},m(a,n){w(a,e,n),t&&t.m(e,null),s=!0},p(a,[n]){t&&t.p&&(!s||n&1)&&F(t,l,a,a[0],s?K(l,a[0],n,null):J(a[0]),null)},i(a){s||(I(t,a),s=!0)},o(a){V(t,a),s=!1},d(a){a&&u(e),t&&t.d(a)}}}function _e(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&s(0,t=a.$$scope)},[t,l]}class ve extends L{constructor(e){super(),S(this,e,_e,me,j,{})}}function pe(r){let e;const s=r[0].default,l=U(s,r,r[1],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&2)&&F(l,s,t,t[1],e?K(s,t[1],a,null):J(t[1]),null)},i(t){e||(I(l,t),e=!0)},o(t){V(l,t),e=!1},d(t){l&&l.d(t)}}}function ge(r){let e,s,l,t,a,n,o,_;return t=new he({}),o=new ve({props:{$$slots:{default:[pe]},$$scope:{ctx:r}}}),{c(){e=v("div"),s=v("div"),l=v("div"),q(t.$$.fragment),a=E(),n=v("div"),q(o.$$.fragment),this.h()},l(d){e=p(d,"DIV",{class:!0});var k=$(e);s=p(k,"DIV",{class:!0});var x=$(s);l=p(x,"DIV",{});var g=$(l);N(t.$$.fragment,g),g.forEach(u),a=C(x),n=p(x,"DIV",{class:!0});var h=$(n);N(o.$$.fragment,h),h.forEach(u),x.forEach(u),k.forEach(u),this.h()},h(){m(n,"class","flex-1"),m(s,"class","flex flex-col flex-1 gap-5 md:flex-row md:flex-1 md:gap-5"),m(e,"class","flex min-h-screen md:container md:py-10 md:mx-auto transition-all")},m(d,k){w(d,e,k),b(e,s),b(s,l),O(t,l,null),b(s,a),b(s,n),O(o,n,null),_=!0},p(d,[k]){const x={};k&2&&(x.$$scope={dirty:k,ctx:d}),o.$set(x)},i(d){_||(I(t.$$.fragment,d),I(o.$$.fragment,d),_=!0)},o(d){V(t.$$.fragment,d),V(o.$$.fragment,d),_=!1},d(d){d&&u(e),W(t),W(o)}}}function be(r,e,s){let{$$slots:l={},$$scope:t}=e;return r.$$set=a=>{"$$scope"in a&&s(1,t=a.$$scope)},[l,t]}class we extends L{constructor(e){super(),S(this,e,be,ge,j,{})}}export{we as component,ye as universal};
