(function(){"use strict";var e={9160:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[r("a",{staticClass:"navbar-brand",attrs:{href:""},on:{click:function(e){e.preventDefault()}}},[e._v("bezKoder")]),r("div",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[r("font-awesome-icon",{attrs:{icon:"home"}}),e._v("Home ")],1)],1),e.showAdminBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v("Admin Board")])],1):e._e(),e.showModeratorBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[e._v("Moderator Board")])],1):e._e(),r("li",{staticClass:"nav-item"},[e.currentUser?r("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[e._v("User")]):e._e()],1)]),e.currentUser?e._e():r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[r("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v("Sign Up ")],1)],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[r("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v("Login ")],1)],1)]),e.currentUser?r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[r("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.currentUser.username)+" ")],1)],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut.apply(null,arguments)}}},[r("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v("LogOut ")],1)])]):e._e()]),r("div",{staticClass:"container"},[r("router-view")],1)])},a=[],o=(r(6699),r(2023),{computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),i=o,u=r(1001),l=(0,u.Z)(i,s,a,!1,null,null,null),c=l.exports,d=(r(1539),r(8783),r(3948),r(8345)),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",{staticClass:"jumbotron"},[r("h3",[e._v(e._s(e.content))])])])},f=[],v=(r(9714),r(1475)),p={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;v.Z.getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data||t.message||t.toString()}))}},g=p,h=(0,u.Z)(g,m,f,!1,null,null,null),b=h.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},_=[],C=r(2751),k=r(6133),y=(0,C.Z)((function e(t,r,n){(0,k.Z)(this,e),this.username=t,this.email=r,this.password=n})),x={name:"Login",data:function(){return{user:new y("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()})):e.loading=!1}))}}},O=x,Z=(0,u.Z)(O,w,_,!1,null,"eb0a29d8",null),$=Z.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister.apply(null,arguments)}}},[e.successful?e._e():r("div",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?r("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],I={name:"Register",data:function(){return{user:new y("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1}))}))}}},N=I,U=(0,u.Z)(N,P,S,!1,null,"36e99181",null),j=U.exports;n.Z.use(d.Z);var E=[{path:"/",name:"home",component:b},{path:"/home",component:b},{path:"/login",component:$},{path:"/register",component:j},{path:"/profile",name:"profile",component:function(){return r.e(45).then(r.bind(r,8045))}},{path:"/admin",name:"admin",component:function(){return r.e(634).then(r.bind(r,2634))}},{path:"/user",name:"user",component:function(){return r.e(859).then(r.bind(r,4859))}},{path:"/mod",name:"mod",component:function(){return r.e(571).then(r.bind(r,9571))}}],q=new d.Z({mode:"history",base:"",routes:E}),T=q,A=r(629),L=(r(8862),r(9669)),B=r.n(L),M="http://localhost:7777/api/auth/",F=function(){function e(){(0,k.Z)(this,e)}return(0,C.Z)(e,[{key:"login",value:function(e){return B().post(M+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return B().post(M+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}(),D=new F,R=JSON.parse(localStorage.getItem("user")),J=R?{status:{loggedIn:!0},user:R}:{status:{loggedIn:!1},user:null},z={namespaced:!0,state:J,actions:{login:function(e,t){var r=e.commit;return D.login(t).then((function(e){return r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;D.logout(),t("logout")},register:function(e,t){var r=e.commit;return D.register(t).then((function(e){return r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return r("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};n.Z.use(A.ZP);var H=new A.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:z}}),K=(r(7244),r(2954)),G=r(8947),W=r(7810),Y=r(1436);G.vI.add(Y.J9Y,Y.ILF,Y.FKd,Y.$Wj,Y.jLD),n.Z.config.productionTip=!1,n.Z.use(K.ZP),n.Z.component("font-awesome-icon",W.GN),n.Z.config.productionTip=!1,new n.Z({router:T,store:H,render:function(e){return e(c)}}).$mount("#app")},1475:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(6133),s=r(2751),a=r(9669),o=r.n(a);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var u="http://localhost:7777/api/test/",l=function(){function e(){(0,n.Z)(this,e)}return(0,s.Z)(e,[{key:"getPublicContent",value:function(){return o().get(u+"all")}},{key:"getUserBoard",value:function(){return o().get(u+"user",{headers:i()})}},{key:"getModeratorBoard",value:function(){return o().get(u+"mod",{headers:i()})}},{key:"getAdminBoard",value:function(){return o().get(u+"admin",{headers:i()})}}]),e}(),c=new l}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,a){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"-legacy."+{45:"907f7caa",571:"334ae43f",634:"a31a0988",859:"37487dd9"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";r.l=function(n,s,a,o){if(e[n])e[n].push(s);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[s];var m=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var e={143:0};r.f.j=function(t,n){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(r,n){s=e[t]=[r,n]}));n.push(s[2]=a);var o=r.p+r.u(t),i=new Error,u=function(n){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,s[1](i)}};r.l(o,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,o=n[0],i=n[1],u=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(u)var c=u(r)}for(t&&t(n);l<o.length;l++)a=o[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9160)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.b71367ca.js.map