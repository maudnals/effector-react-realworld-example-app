(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{O9Nu:function(e,t,n){"use strict";n.r(t),n.d(t,"FeedByTagPage",(function(){return T}));var r=n("mXGw"),o=n.n(r),a=n("dY8W"),c=n("VU9o"),i=n("UYjC"),u=n("SugE"),f=n("lyZd"),l=n("eZyy"),p=n("YzYS"),s=n("rPMT");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=c.e(),O=m.Gate,y=m.favoriteToggled,j=m.$currentPage,v=m.$currentTag,h=m.$pageSize,S=m.setFavoriteArticleFx,w=m.setUnfavoriteArticleFx,P=Object(u.d)(),E=Object(u.c)((function(e){var t=e.tag,n=e.page;return l.a.get("articles?tag=".concat(encodeURIComponent(t),"&").concat(Object(p.a)(10,n))).then((function(e){return e.data}))})),C=Object(f.status)({effect:E}),F=Object(u.e)({}).on(E.done,(function(e,t){var n=t.params,r=t.result;return b(b({},e),{},d({},n.tag,r))})),z=Object(u.b)(F,v,(function(e,t){var n;return null!==(n=e[t])&&void 0!==n?n:{articles:[],articlesCount:0}})).on([S.done,w.done],(function(e,t){var n=t.params,r=t.result;return b(b({},e),{},{articles:e.articles.map((function(e){return e.slug!==n?e:b(b({},e),{},{favorited:r.article.favorited,favoritesCount:r.article.favoritesCount})}))})})),Y=z.map((function(e){return e.articles})),k=z.map((function(e){return e.articlesCount})),D=Object(u.b)(C,Y,(function(e,t){return"done"===e&&0===t.length})),x=Object(u.b)({total:k,loading:E.pending,isEmptyFeed:D,currentPage:j,pageSize:h,totalPages:k});Object(u.f)({from:[O.open,P,Object(u.g)(v,{filter:Boolean})],to:Object(u.a)({source:{tag:v,page:j,pageSize:h},effect:E})}),Object(u.j)({source:{path:s.d.$pathname,tag:v},clock:P,fn:function(e,t){return{path:e.path,page:t,tag:e.tag}}}).watch((function(e){var t=e.path,n=e.page,r=e.tag;s.d.history.replace("".concat(t,"?tag=").concat(r,"&page=").concat(n))}));var T=function(){Object(a.b)(O);var e=Object(a.d)(x),t=e.isEmptyFeed,n=e.currentPage,r=e.pageSize,u=e.totalPages,f=e.loading;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.d,{show:t}),o.a.createElement(c.c,null,Object(a.c)(Y,(function(e){return o.a.createElement("li",null,o.a.createElement(c.b,{data:e,onClick:function(){y(e)}}))}))),o.a.createElement(i.m,{current:n,pageSize:r,total:u,onItemClick:P}),o.a.createElement(i.o,{loading:f}))}},YzYS:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}},lyZd:function(e,t,n){var r=n("YSF1").createStore,o=n("q0Di").readConfig;e.exports={status:function(e){var t=o(e,["sid","name","loc","effect","defaultValue"]),n=t.sid,a=t.name,c=t.loc,i=t.effect,u=t.defaultValue,f=r(void 0===u?"initial":u,{sid:n,loc:c,name:a});return f.on(i,(function(){return"pending"})).on(i.done,(function(){return"done"})).on(i.fail,(function(){return"fail"})),f}}},q0Di:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t,n){n.filter((function(t){return Boolean(e[t])})).forEach((function(n){t[n]=e[n]}))}e.exports={readConfig:function e(t,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return"object"!==n(t)||null===t||(t.config&&e(t.config,o,a),r(t,a,o),t.ɔ&&e(t.ɔ,o,a)),a}}}}]);