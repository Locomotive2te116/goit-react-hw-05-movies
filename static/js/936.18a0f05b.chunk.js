"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{936:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(439),a=r(791),u=r(390),c="Home_card__+O6lb",s="Home_ul__iITVb",i="Home_poster__GFYjc",o="Home_title__L087v",p=r(689),f=r(87),m=r(184),d=function(){var t=(0,a.useState)([]),e=(0,n.Z)(t,2),r=e[0],d=e[1];(0,a.useEffect)((function(){(0,u.E9)().then((function(t){return d(t.results)}))}),[]);var l=(0,p.TH)();return(0,m.jsx)("div",{children:(0,m.jsx)("ul",{className:s,children:r.map((function(t){return(0,m.jsx)("li",{className:c,children:(0,m.jsxs)(f.rU,{state:{from:l},to:"/movies/".concat(t.id.toString()),children:[(0,m.jsx)("img",{className:i,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),width:"120",alt:t.media_type}),(0,m.jsx)("p",{className:o,children:t.title})]})},t.id)}))})})}},390:function(t,e,r){r.d(e,{BG:function(){return o},E9:function(){return i},Gr:function(){return p},kK:function(){return m},sv:function(){return f}});var n=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="7b2ac305a76388b1525771ad00b10673",i=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",{params:{api_key:s}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e),{params:{api_key:s}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie",{params:{api_key:s,query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?language=en-US&page=1"),{params:{api_key:s}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US&page=1"),{params:{api_key:s}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.18a0f05b.chunk.js.map