(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(r,e,n){"use strict";n.d(e,"a",(function(){return c}));n(112),n(113);var t,o={},u=(t=1,function(){return t++});function c(r,e){return new Promise((function(n,t){var c=function(r){var e=r._worker;return e||((e=r._worker=r()).onmessage=function(r){var e=r.data,n=e.id,t=e.data,u=e.success,c=e.error,i=o[n];i&&(delete o[n],u?i.resolve(t):i.reject(c))}),e}(r),i=u();o[i]={resolve:n,reject:t},c.postMessage({id:i,data:e})}))}},822:function(r,e,n){"use strict";n.r(e),n.d(e,"compileToCode",(function(){return c}));var t=n(116);function o(){return new Worker(n.p+"babel.worker.worker.js")}var u=n(193);function c(r,e){if(!r)return r;var n=(e||{}).console;return Object(u.a)(o,r).then((function(r){return r}),(function(r){return n&&Object(t.h)((function(){n.error(r)})),{code:""}}))}}}]);