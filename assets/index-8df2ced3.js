(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function K(){}function we(t,e){for(const n in e)t[n]=e[n];return t}function de(t){return t()}function ie(){return Object.create(null)}function T(t){t.forEach(de)}function _e(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function be(t){return Object.keys(t).length===0}function V(t,e,n,l){if(t){const r=he(t,e,n,l);return t[0](r)}}function he(t,e,n,l){return t[1]&&l?we(n.ctx.slice(),t[1](l(e))):n.ctx}function W(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],f=Math.max(e.dirty.length,r.length);for(let m=0;m<f;m+=1)s[m]=e.dirty[m]|r[m];return s}return e.dirty|r}return e.dirty}function X(t,e,n,l,r,s){if(r){const f=he(e,n,l,s);t.p(f,r)}}function Y(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function P(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function B(){return h(" ")}function xe(){return h("")}function j(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ve(t){return Array.from(t.childNodes)}let ne;function H(t){ne=t}const G=[],ue=[];let q=[];const ae=[],ke=Promise.resolve();let ee=!1;function Oe(){ee||(ee=!0,ke.then(ye))}function te(t){q.push(t)}const Z=new Set;let D=0;function ye(){if(D!==0)return;const t=ne;do{try{for(;D<G.length;){const e=G[D];D++,H(e),Ee(e.$$)}}catch(e){throw G.length=0,D=0,e}for(H(null),G.length=0,D=0;ue.length;)ue.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];Z.has(n)||(Z.add(n),n())}q.length=0}while(G.length);for(;ae.length;)ae.pop()();ee=!1,Z.clear(),H(t)}function Ee(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}function Ne(t){const e=[],n=[];q.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),q=e}const U=new Set;let M;function je(){M={r:0,c:[],p:M}}function Ie(){M.r||T(M.c),M=M.p}function _(t,e){t&&t.i&&(U.delete(t),t.i(e))}function y(t,e,n,l){if(t&&t.o){if(U.has(t))return;U.add(t),M.c.push(()=>{U.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function N(t){t&&t.c()}function x(t,e,n,l){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),l||te(()=>{const f=t.$$.on_mount.map(de).filter(_e);t.$$.on_destroy?t.$$.on_destroy.push(...f):T(f),t.$$.on_mount=[]}),s.forEach(te)}function v(t,e){const n=t.$$;n.fragment!==null&&(Ne(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(t,e){t.$$.dirty[0]===-1&&(G.push(t),Oe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,l,r,s,f,m=[-1]){const w=ne;H(t);const a=t.$$={fragment:null,ctx:[],props:s,update:K,not_equal:r,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(w?w.$$.context:[])),callbacks:ie(),dirty:m,skip_bound:!1,root:e.target||w.$$.root};f&&f(a.root);let k=!1;if(a.ctx=n?n(t,e.props||{},(g,O,...E)=>{const I=E.length?E[0]:O;return a.ctx&&r(a.ctx[g],a.ctx[g]=I)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](I),k&&Le(t,g)),O}):[],a.update(),k=!0,T(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){const g=ve(e.target);a.fragment&&a.fragment.l(g),g.forEach(c)}else a.fragment&&a.fragment.c();e.intro&&_(t.$$.fragment),x(t,e.target,e.anchor,e.customElement),ye()}H(w)}class J{$destroy(){v(this,1),this.$destroy=K}$on(e,n){if(!_e(n))return K;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Pe(t){let e,n;const l=t[1].default,r=V(l,t,t[0],null);return{c(){e=C("h1"),r&&r.c(),j(e,"class","text-5xl sm:text-6xl md:text-7xl font-bold text-white")},m(s,f){$(s,e,f),r&&r.m(e,null),n=!0},p(s,[f]){r&&r.p&&(!n||f&1)&&X(r,l,s,s[0],n?W(l,s[0],f,null):Y(s[0]),null)},i(s){n||(_(r,s),n=!0)},o(s){y(r,s),n=!1},d(s){s&&c(e),r&&r.d(s)}}}function Ce(t,e,n){let{$$slots:l={},$$scope:r}=e;return t.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,l]}class Se extends J{constructor(e){super(),F(this,e,Ce,Pe,z,{})}}function Ae(t){let e,n;const l=t[2].default,r=V(l,t,t[1],null);return{c(){e=C("a"),r&&r.c(),j(e,"href",t[0]),j(e,"class","text-sky-500 hover:underline")},m(s,f){$(s,e,f),r&&r.m(e,null),n=!0},p(s,[f]){r&&r.p&&(!n||f&2)&&X(r,l,s,s[1],n?W(l,s[1],f,null):Y(s[1]),null),(!n||f&1)&&j(e,"href",s[0])},i(s){n||(_(r,s),n=!0)},o(s){y(r,s),n=!1},d(s){s&&c(e),r&&r.d(s)}}}function Me(t,e,n){let{$$slots:l={},$$scope:r}=e,{href:s="/"}=e;return t.$$set=f=>{"href"in f&&n(0,s=f.href),"$$scope"in f&&n(1,r=f.$$scope)},[s,r,l]}class A extends J{constructor(e){super(),F(this,e,Me,Ae,z,{href:0})}}function Be(t){let e,n;const l=t[1].default,r=V(l,t,t[0],null);return{c(){e=C("p"),r&&r.c(),j(e,"class","text-base sm:text-lg md:text-xl text-white")},m(s,f){$(s,e,f),r&&r.m(e,null),n=!0},p(s,[f]){r&&r.p&&(!n||f&1)&&X(r,l,s,s[0],n?W(l,s[0],f,null):Y(s[0]),null)},i(s){n||(_(r,s),n=!0)},o(s){y(r,s),n=!1},d(s){s&&c(e),r&&r.d(s)}}}function De(t,e,n){let{$$slots:l={},$$scope:r}=e;return t.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,l]}class R extends J{constructor(e){super(),F(this,e,De,Be,z,{})}}function Ge(t){let e,n;const l=t[1].default,r=V(l,t,t[0],null);return{c(){e=C("h2"),r&&r.c(),j(e,"class","text-xl sm:text-2xl md:text-3xl font-semibold text-white")},m(s,f){$(s,e,f),r&&r.m(e,null),n=!0},p(s,[f]){r&&r.p&&(!n||f&1)&&X(r,l,s,s[0],n?W(l,s[0],f,null):Y(s[0]),null)},i(s){n||(_(r,s),n=!0)},o(s){y(r,s),n=!1},d(s){s&&c(e),r&&r.d(s)}}}function qe(t,e,n){let{$$slots:l={},$$scope:r}=e;return t.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,l]}class He extends J{constructor(e){super(),F(this,e,qe,Ge,z,{})}}function ce(t,e,n){const l=t.slice();return l[2]=e[n],l}function $e(t,e,n){const l=t.slice();return l[5]=e[n][0],l[6]=e[n][1],l}function me(t){let e,n=t[5]+"",l;return{c(){e=C("span"),l=h(n),j(e,"class",`inline-block animate-bounce ${t[6]}`)},m(r,s){$(r,e,s),P(e,l)},p:K,d(r){r&&c(e)}}}function Ke(t){let e,n=t[0],l=[];for(let r=0;r<n.length;r+=1)l[r]=me($e(t,n,r));return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=xe()},m(r,s){for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(r,s);$(r,e,s)},p(r,s){if(s&1){n=r[0];let f;for(f=0;f<n.length;f+=1){const m=$e(r,n,f);l[f]?l[f].p(m,s):(l[f]=me(m),l[f].c(),l[f].m(e.parentNode,e))}for(;f<l.length;f+=1)l[f].d(1);l.length=n.length}},d(r){ge(l,r),r&&c(e)}}}function Te(t){let e;return{c(){e=h("I'm Vincent Nguyen, a software developer.")},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function ze(t){let e;return{c(){e=h("Currently, I'm working freelance for Nice One Nails.")},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Fe(t){let e;return{c(){e=h("Magical")},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Je(t){let e;return{c(){e=h(`AWS
      `)},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Qe(t){let e;return{c(){e=h("Kinaxis")},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Re(t){let e;return{c(){e=h(`Creative Layer
      `)},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Ue(t){let e;return{c(){e=h("Carleton University")},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Ve(t){let e,n,l,r,s,f,m,w,a,k,g,O,E,I;return r=new A({props:{href:"https://getmagical.com",$$slots:{default:[Fe]},$$scope:{ctx:t}}}),f=new A({props:{href:"https://aws.amazon.com",$$slots:{default:[Je]},$$scope:{ctx:t}}}),w=new A({props:{href:"https://kinaxis.com",$$slots:{default:[Qe]},$$scope:{ctx:t}}}),k=new A({props:{href:"https://creativelayer.com",$$slots:{default:[Re]},$$scope:{ctx:t}}}),O=new A({props:{href:"https://carleton.ca/",$$slots:{default:[Ue]},$$scope:{ctx:t}}}),{c(){e=h("I strive to build "),n=C("span"),n.textContent="beautiful",l=h(`
      digital experiences, mainly on the world wide web. I've previously completed
      internships at `),N(r.$$.fragment),s=h(", "),N(f.$$.fragment),m=h(", "),N(w.$$.fragment),a=h(", and "),N(k.$$.fragment),g=h(". I've also recently graduated from "),N(O.$$.fragment),E=h(" with a Bachelor's in CS."),j(n,"class","rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 font-semibold")},m(o,u){$(o,e,u),$(o,n,u),$(o,l,u),x(r,o,u),$(o,s,u),x(f,o,u),$(o,m,u),x(w,o,u),$(o,a,u),x(k,o,u),$(o,g,u),x(O,o,u),$(o,E,u),I=!0},p(o,u){const L={};u&512&&(L.$$scope={dirty:u,ctx:o}),r.$set(L);const p={};u&512&&(p.$$scope={dirty:u,ctx:o}),f.$set(p);const Q={};u&512&&(Q.$$scope={dirty:u,ctx:o}),w.$set(Q);const i={};u&512&&(i.$$scope={dirty:u,ctx:o}),k.$set(i);const d={};u&512&&(d.$$scope={dirty:u,ctx:o}),O.$set(d)},i(o){I||(_(r.$$.fragment,o),_(f.$$.fragment,o),_(w.$$.fragment,o),_(k.$$.fragment,o),_(O.$$.fragment,o),I=!0)},o(o){y(r.$$.fragment,o),y(f.$$.fragment,o),y(w.$$.fragment,o),y(k.$$.fragment,o),y(O.$$.fragment,o),I=!1},d(o){o&&c(e),o&&c(n),o&&c(l),v(r,o),o&&c(s),v(f,o),o&&c(m),v(w,o),o&&c(a),v(k,o),o&&c(g),v(O,o),o&&c(E)}}}function We(t){let e;return{c(){e=h("pet tax")},m(n,l){$(n,e,l)},d(n){n&&c(e)}}}function Xe(t){let e,n,l,r;return n=new A({props:{href:"/astro.JPG",$$slots:{default:[We]},$$scope:{ctx:t}}}),{c(){e=h("In my spare time, I enjoy walking my dog, Astro ("),N(n.$$.fragment),l=h("), watching movies, and playing video games with my friends.")},m(s,f){$(s,e,f),x(n,s,f),$(s,l,f),r=!0},p(s,f){const m={};f&512&&(m.$$scope={dirty:f,ctx:s}),n.$set(m)},i(s){r||(_(n.$$.fragment,s),r=!0)},o(s){y(n.$$.fragment,s),r=!1},d(s){s&&c(e),v(n,s),s&&c(l)}}}function Ye(t){let e=t[2].name+"",n;return{c(){n=h(e)},m(l,r){$(l,n,r)},p:K,d(l){l&&c(n)}}}function pe(t){let e,n;return e=new A({props:{href:t[2].url,$$slots:{default:[Ye]},$$scope:{ctx:t}}}),{c(){N(e.$$.fragment)},m(l,r){x(e,l,r),n=!0},p(l,r){const s={};r&512&&(s.$$scope={dirty:r,ctx:l}),e.$set(s)},i(l){n||(_(e.$$.fragment,l),n=!0)},o(l){y(e.$$.fragment,l),n=!1},d(l){v(e,l)}}}function Ze(t){let e,n,l,r,s,f,m,w,a,k,g,O,E,I,o,u;l=new Se({props:{$$slots:{default:[Ke]},$$scope:{ctx:t}}}),s=new He({props:{$$slots:{default:[Te]},$$scope:{ctx:t}}}),m=new R({props:{$$slots:{default:[ze]},$$scope:{ctx:t}}}),a=new R({props:{$$slots:{default:[Ve]},$$scope:{ctx:t}}}),g=new R({props:{$$slots:{default:[Xe]},$$scope:{ctx:t}}}),E=new R({});let L=t[1],p=[];for(let i=0;i<L.length;i+=1)p[i]=pe(ce(t,L,i));const Q=i=>y(p[i],1,1,()=>{p[i]=null});return{c(){e=C("main"),n=C("div"),N(l.$$.fragment),r=B(),N(s.$$.fragment),f=B(),N(m.$$.fragment),w=B(),N(a.$$.fragment),k=B(),N(g.$$.fragment),O=B(),N(E.$$.fragment),I=B(),o=C("div");for(let i=0;i<p.length;i+=1)p[i].c();j(o,"class","flex flex-col space-y-2 text-base sm:flex-row sm:justify-between sm:space-y-0 sm:text-lg md:text-xl"),j(n,"class","flex max-w-screen-md flex-col space-y-4 rounded-2xl bg-gray-900 p-6 py-12 shadow-2xl shadow-gray-800 sm:space-y-6 sm:p-8 sm:py-16 md:space-y-8 md:p-10 md:pt-20"),j(e,"class","flex grow items-center justify-center p-4 sm:p-6")},m(i,d){$(i,e,d),P(e,n),x(l,n,null),P(n,r),x(s,n,null),P(n,f),x(m,n,null),P(n,w),x(a,n,null),P(n,k),x(g,n,null),P(n,O),x(E,n,null),P(n,I),P(n,o);for(let S=0;S<p.length;S+=1)p[S]&&p[S].m(o,null);u=!0},p(i,[d]){const S={};d&512&&(S.$$scope={dirty:d,ctx:i}),l.$set(S);const re={};d&512&&(re.$$scope={dirty:d,ctx:i}),s.$set(re);const le={};d&512&&(le.$$scope={dirty:d,ctx:i}),m.$set(le);const se={};d&512&&(se.$$scope={dirty:d,ctx:i}),a.$set(se);const fe={};if(d&512&&(fe.$$scope={dirty:d,ctx:i}),g.$set(fe),d&2){L=i[1];let b;for(b=0;b<L.length;b+=1){const oe=ce(i,L,b);p[b]?(p[b].p(oe,d),_(p[b],1)):(p[b]=pe(oe),p[b].c(),_(p[b],1),p[b].m(o,null))}for(je(),b=L.length;b<p.length;b+=1)Q(b);Ie()}},i(i){if(!u){_(l.$$.fragment,i),_(s.$$.fragment,i),_(m.$$.fragment,i),_(a.$$.fragment,i),_(g.$$.fragment,i),_(E.$$.fragment,i);for(let d=0;d<L.length;d+=1)_(p[d]);u=!0}},o(i){y(l.$$.fragment,i),y(s.$$.fragment,i),y(m.$$.fragment,i),y(a.$$.fragment,i),y(g.$$.fragment,i),y(E.$$.fragment,i),p=p.filter(Boolean);for(let d=0;d<p.length;d+=1)y(p[d]);u=!1},d(i){i&&c(e),v(l),v(s),v(m),v(a),v(g),v(E),ge(p,i)}}}function et(t){return[[["h","animation-delay-0"],["e","animation-delay-100"],["l","animation-delay-200"],["l","animation-delay-300"],["o","animation-delay-400"],["!","animation-delay-500"]],[{name:"GitHub",url:"https://github.com/vinhvn"},{name:"Spotify",url:"https://open.spotify.com/user/tjplab770o3f0ig61a2n3il5x"},{name:"LinkedIn",url:"https://linkedin.com/in/vinhvn"},{name:"Email",url:"mailto:vincentn337@gmail.com"},{name:"Resume",url:"https://drive.google.com/file/d/1ptjGjLhdewnqNn80cQIEnDsLkb1MxOOm/view?usp=sharing"}]]}class tt extends J{constructor(e){super(),F(this,e,et,Ze,z,{})}}new tt({target:document.getElementById("app")});