"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[45],{45:function(e,r,s){s.r(r),s.d(r,{default:function(){return l}});var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"container"},[s("header",{staticClass:"jumbotron"},[s("h3",[s("strong",[e._v(e._s(e.currentUser.username))]),e._v(" Profile ")])]),s("p",[s("strong",[e._v("Token:")]),e._v(" "+e._s(e.currentUser.accessToken.substring(0,20))+" ... "+e._s(e.currentUser.accessToken.substr(e.currentUser.accessToken.length-20))+" ")]),s("p",[s("strong",[e._v("Id:")]),e._v(" "+e._s(e.currentUser.id)+" ")]),s("p",[s("strong",[e._v("Email:")]),e._v(" "+e._s(e.currentUser.email)+" ")]),s("strong",[e._v("Authorities:")]),s("ul",e._l(e.currentUser.roles,(function(r,t){return s("li",{key:t},[e._v(e._s(r))])})),0)])},n=[],u={name:"Profile",computed:{currentUser(){return this.$store.state.auth.user}},mounted(){this.currentUser||this.$router.push("/login")}},c=u,o=s(1),i=(0,o.Z)(c,t,n,!1,null,null,null),l=i.exports}}]);
//# sourceMappingURL=45.f1247f8c.js.map