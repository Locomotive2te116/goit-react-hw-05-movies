"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),a=r(791),s=r(689),i=r(87),u=r(390),c="MovieDetails_butonpos__k2HW4",o="MovieDetails_position__wFw15",p="MovieDetails_pos__-n2At",l="MovieDetails_description__33mrB",f="MovieDetails_poster__yO7gD",v="MovieDetails_title__cUGs9",d=r(184),h=function(){var e,t,r=(0,s.UO)().movieId,h=(0,a.useState)([null]),m=(0,n.Z)(h,2),_=m[0],x=m[1],w=(0,s.TH)(),k=(0,a.useRef)(null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),g=(0,s.s0)();(0,a.useEffect)((function(){(0,u.BG)(r).then((function(e){return x(e)}))}),[r]);return(0,d.jsx)("div",{className:o,children:(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("button",{onClick:function(){g(k.current)},children:"Go back"}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("img",{className:f,src:_.poster_path?"https://image.tmdb.org/t/p/w500".concat(_.poster_path):"",alt:_.media_type}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("p",{className:v,children:_.title}),(0,d.jsx)("p",{children:_.overview}),(0,d.jsxs)("p",{children:["Release_date:",_.release_date]}),(0,d.jsx)("hr",{}),(0,d.jsx)(i.rU,{to:"cast",children:"Cast"}),(0,d.jsx)(i.rU,{to:"reviews",children:"Reviews"}),(0,d.jsx)(s.j3,{})]})]})]})})}},390:function(e,t,r){r.d(t,{BG:function(){return o},E9:function(){return c},Gr:function(){return p},kK:function(){return f},sv:function(){return l}});var n=r(861),a=r(757),s=r.n(a),i=r(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="7b2ac305a76388b1525771ad00b10673",c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day",{params:{api_key:u}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie",{params:{api_key:u,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?language=en-US&page=1"),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?language=en-US&page=1"),{params:{api_key:u}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.4d325f33.chunk.js.map