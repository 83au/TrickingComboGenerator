!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=89)}([function(e,n,t){(function(n){var t=function(e){return e&&e.Math==Math&&e};e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof n&&n)||Function("return this")()}).call(this,t(55))},function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,n,t){var r=t(1);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,n){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},function(e,n,t){var r=t(2),i=t(26),o=t(6),s=t(14),a=Object.defineProperty;n.f=r?a:function(e,n,t){if(o(e),n=s(n,!0),o(t),i)try{return a(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},function(e,n,t){var r=t(3);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,n,t){var r=t(0),i=t(31),o=t(4),s=t(33),a=t(42),c=t(66),u=i("wks"),p=r.Symbol,l=c?p:p&&p.withoutSetter||s;e.exports=function(e){return o(u,e)||(a&&o(p,e)?u[e]=p[e]:u[e]=l("Symbol."+e)),u[e]}},function(e,n,t){var r=t(0),i=t(13).f,o=t(11),s=t(18),a=t(19),c=t(59),u=t(37);e.exports=function(e,n){var t,p,l,f,d,h=e.target,g=e.global,v=e.stat;if(t=g?r:v?r[h]||a(h,{}):(r[h]||{}).prototype)for(p in n){if(f=n[p],l=e.noTargetGet?(d=i(t,p))&&d.value:t[p],!u(g?p:h+(v?".":"#")+p,e.forced)&&void 0!==l){if(typeof f==typeof l)continue;c(f,l)}(e.sham||l&&l.sham)&&o(f,"sham",!0),s(t,p,f,e)}}},function(e,n){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},function(e,n,t){var r=t(2),i=t(5),o=t(16);e.exports=r?function(e,n,t){return i.f(e,n,o(1,t))}:function(e,n,t){return e[n]=t,e}},function(e,n,t){var r=t(22),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,n,t){var r=t(2),i=t(56),o=t(16),s=t(17),a=t(14),c=t(4),u=t(26),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(e,n){if(e=s(e),n=a(n,!0),u)try{return p(e,n)}catch(e){}if(c(e,n))return o(!i.f.call(e,n),e[n])}},function(e,n,t){var r=t(3);e.exports=function(e,n){if(!r(e))return e;var t,i;if(n&&"function"==typeof(t=e.toString)&&!r(i=t.call(e)))return i;if("function"==typeof(t=e.valueOf)&&!r(i=t.call(e)))return i;if(!n&&"function"==typeof(t=e.toString)&&!r(i=t.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,n,t){"use strict";var r,i,o=t(78),s=t(79),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,p=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=s.UNSUPPORTED_Y||s.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(p||f||l)&&(u=function(e){var n,t,r,i,s=this,u=l&&s.sticky,d=o.call(s),h=s.source,g=0,v=e;return u&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),v=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),t=new RegExp("^(?:"+h+")",d)),f&&(t=new RegExp("^"+h+"$(?!\\s)",d)),p&&(n=s.lastIndex),r=a.call(u?t:s,v),u?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=s.lastIndex,s.lastIndex+=r[0].length):s.lastIndex=0:p&&r&&(s.lastIndex=s.global?r.index+r[0].length:n),f&&r&&r.length>1&&c.call(r[0],t,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),e.exports=u},function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(e,n,t){var r=t(25),i=t(9);e.exports=function(e){return r(i(e))}},function(e,n,t){var r=t(0),i=t(11),o=t(4),s=t(19),a=t(28),c=t(57),u=c.get,p=c.enforce,l=String(String).split("String");(e.exports=function(e,n,t,a){var c=!!a&&!!a.unsafe,u=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof t&&("string"!=typeof n||o(t,"name")||i(t,"name",n),p(t).source=l.join("string"==typeof n?n:"")),e!==r?(c?!f&&e[n]&&(u=!0):delete e[n],u?e[n]=t:i(e,n,t)):u?e[n]=t:s(n,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},function(e,n,t){var r=t(0),i=t(11);e.exports=function(e,n){try{i(r,e,n)}catch(t){r[e]=n}return n}},function(e,n){e.exports={}},function(e,n,t){var r=t(61),i=t(0),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,n){return arguments.length<2?o(r[e])||o(i[e]):r[e]&&r[e][n]||i[e]&&i[e][n]}},function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},function(e,n){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,n,t){"use strict";var r=t(8),i=t(64).filter,o=t(43),s=t(45),a=o("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,n,t){var r=t(1),i=t(10),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},function(e,n,t){var r=t(2),i=t(1),o=t(27);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(e,n,t){var r=t(0),i=t(3),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},function(e,n,t){var r=t(29),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},function(e,n,t){var r=t(0),i=t(19),o=r["__core-js_shared__"]||i("__core-js_shared__",{});e.exports=o},function(e,n,t){var r=t(31),i=t(33),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,n,t){var r=t(32),i=t(29);(e.exports=function(e,n){return i[e]||(i[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,n){e.exports=!1},function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},function(e,n,t){var r=t(35),i=t(23).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},function(e,n,t){var r=t(4),i=t(17),o=t(36).indexOf,s=t(20);e.exports=function(e,n){var t,a=i(e),c=0,u=[];for(t in a)!r(s,t)&&r(a,t)&&u.push(t);for(;n.length>c;)r(a,t=n[c++])&&(~o(u,t)||u.push(t));return u}},function(e,n,t){var r=t(17),i=t(12),o=t(62),s=function(e){return function(n,t,s){var a,c=r(n),u=i(c.length),p=o(s,u);if(e&&t!=t){for(;u>p;)if((a=c[p++])!=a)return!0}else for(;u>p;p++)if((e||p in c)&&c[p]===t)return e||p||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},function(e,n,t){var r=t(1),i=/#|\.prototype\./,o=function(e,n){var t=a[s(e)];return t==u||t!=c&&("function"==typeof n?r(n):!!n)},s=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,n,t){var r=t(9);e.exports=function(e){return Object(r(e))}},function(e,n,t){var r=t(3),i=t(41),o=t(7)("species");e.exports=function(e,n){var t;return i(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!i(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)}},function(e,n,t){var r=t(10);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,n,t){var r=t(1);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(e,n,t){var r=t(1),i=t(7),o=t(44),s=i("species");e.exports=function(e){return o>=51||!r((function(){var n=[];return(n.constructor={})[s]=function(){return{foo:1}},1!==n[e](Boolean).foo}))}},function(e,n,t){var r,i,o=t(0),s=t(67),a=o.process,c=a&&a.versions,u=c&&c.v8;u?i=(r=u.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(i=r[1]),e.exports=i&&+i},function(e,n,t){var r=t(2),i=t(1),o=t(4),s=Object.defineProperty,a={},c=function(e){throw e};e.exports=function(e,n){if(o(a,e))return a[e];n||(n={});var t=[][e],u=!!o(n,"ACCESSORS")&&n.ACCESSORS,p=o(n,0)?n[0]:c,l=o(n,1)?n[1]:void 0;return a[e]=!!t&&!i((function(){if(u&&!r)return!0;var e={length:-1};u?s(e,1,{enumerable:!0,get:c}):e[1]=1,t.call(e,p,l)}))}},function(e,n,t){"use strict";var r=t(8),i=t(36).includes,o=t(68);r({target:"Array",proto:!0,forced:!t(45)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},function(e,n,t){var r,i=t(6),o=t(69),s=t(23),a=t(20),c=t(71),u=t(27),p=t(30),l=p("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,n;h=r?function(e){e.write(d("")),e.close();var n=e.parentWindow.Object;return e=null,n}(r):((n=u("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F);for(var t=s.length;t--;)delete h.prototype[s[t]];return h()};a[l]=!0,e.exports=Object.create||function(e,n){var t;return null!==e?(f.prototype=i(e),t=new f,f.prototype=null,t[l]=e):t=h(),void 0===n?t:o(t,n)}},function(e,n,t){"use strict";var r=t(8),i=t(15);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},function(e,n,t){"use strict";var r=t(8),i=t(50),o=t(9);r({target:"String",proto:!0,forced:!t(52)("includes")},{includes:function(e){return!!~String(o(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},function(e,n,t){var r=t(51);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},function(e,n,t){var r=t(3),i=t(10),o=t(7)("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[o])?!!n:"RegExp"==i(e))}},function(e,n,t){var r=t(7)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[r]=!1,"/./"[e](n)}catch(e){}}return!1}},function(e,n,t){"use strict";var r=t(8),i=t(1),o=t(41),s=t(3),a=t(39),c=t(12),u=t(87),p=t(40),l=t(43),f=t(7),d=t(44),h=f("isConcatSpreadable"),g=d>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),v=l("concat"),k=function(e){if(!s(e))return!1;var n=e[h];return void 0!==n?!!n:o(e)};r({target:"Array",proto:!0,forced:!g||!v},{concat:function(e){var n,t,r,i,o,s=a(this),l=p(s,0),f=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?s:arguments[n],k(o)){if(f+(i=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<i;t++,f++)t in o&&u(l,f,o[t])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(l,f++,o)}return l.length=f,l}})},function(e,n,t){var r=t(2),i=t(5).f,o=Function.prototype,s=o.toString,a=/^\s*function ([^ (]*)/;!r||"name"in o||i(o,"name",{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(e){return""}}})},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);n.f=o?function(e){var n=i(this,e);return!!n&&n.enumerable}:r},function(e,n,t){var r,i,o,s=t(58),a=t(0),c=t(3),u=t(11),p=t(4),l=t(30),f=t(20),d=a.WeakMap;if(s){var h=new d,g=h.get,v=h.has,k=h.set;r=function(e,n){return k.call(h,e,n),n},i=function(e){return g.call(h,e)||{}},o=function(e){return v.call(h,e)}}else{var m=l("state");f[m]=!0,r=function(e,n){return u(e,m,n),n},i=function(e){return p(e,m)?e[m]:{}},o=function(e){return p(e,m)}}e.exports={set:r,get:i,has:o,enforce:function(e){return o(e)?i(e):r(e,{})},getterFor:function(e){return function(n){var t;if(!c(n)||(t=i(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}}},function(e,n,t){var r=t(0),i=t(28),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},function(e,n,t){var r=t(4),i=t(60),o=t(13),s=t(5);e.exports=function(e,n){for(var t=i(n),a=s.f,c=o.f,u=0;u<t.length;u++){var p=t[u];r(e,p)||a(e,p,c(n,p))}}},function(e,n,t){var r=t(21),i=t(34),o=t(63),s=t(6);e.exports=r("Reflect","ownKeys")||function(e){var n=i.f(s(e)),t=o.f;return t?n.concat(t(e)):n}},function(e,n,t){var r=t(0);e.exports=r},function(e,n,t){var r=t(22),i=Math.max,o=Math.min;e.exports=function(e,n){var t=r(e);return t<0?i(t+n,0):o(t,n)}},function(e,n){n.f=Object.getOwnPropertySymbols},function(e,n,t){var r=t(65),i=t(25),o=t(39),s=t(12),a=t(40),c=[].push,u=function(e){var n=1==e,t=2==e,u=3==e,p=4==e,l=6==e,f=5==e||l;return function(d,h,g,v){for(var k,m,b=o(d),y=i(b),x=r(h,g,3),w=s(y.length),S=0,E=v||a,T=n?E(d,w):t?E(d,0):void 0;w>S;S++)if((f||S in y)&&(m=x(k=y[S],S,b),e))if(n)T[S]=m;else if(m)switch(e){case 3:return!0;case 5:return k;case 6:return S;case 2:c.call(T,k)}else if(p)return!1;return l?-1:u||p?p:T}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(e,n,t){var r=t(38);e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,i){return e.call(n,t,r,i)}}return function(){return e.apply(n,arguments)}}},function(e,n,t){var r=t(42);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,n,t){var r=t(21);e.exports=r("navigator","userAgent")||""},function(e,n,t){var r=t(7),i=t(47),o=t(5),s=r("unscopables"),a=Array.prototype;null==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},function(e,n,t){var r=t(2),i=t(5),o=t(6),s=t(70);e.exports=r?Object.defineProperties:function(e,n){o(e);for(var t,r=s(n),a=r.length,c=0;a>c;)i.f(e,t=r[c++],n[t]);return e}},function(e,n,t){var r=t(35),i=t(23);e.exports=Object.keys||function(e){return r(e,i)}},function(e,n,t){var r=t(21);e.exports=r("document","documentElement")},function(e,n,t){"use strict";var r=t(2),i=t(0),o=t(37),s=t(18),a=t(4),c=t(10),u=t(73),p=t(14),l=t(1),f=t(47),d=t(34).f,h=t(13).f,g=t(5).f,v=t(76).trim,k=i.Number,m=k.prototype,b="Number"==c(f(m)),y=function(e){var n,t,r,i,o,s,a,c,u=p(e,!1);if("string"==typeof u&&u.length>2)if(43===(n=(u=v(u)).charCodeAt(0))||45===n){if(88===(t=u.charCodeAt(2))||120===t)return NaN}else if(48===n){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=(o=u.slice(2)).length,a=0;a<s;a++)if((c=o.charCodeAt(a))<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o("Number",!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var x,w=function(e){var n=arguments.length<1?0:e,t=this;return t instanceof w&&(b?l((function(){m.valueOf.call(t)})):"Number"!=c(t))?u(new k(y(n)),t,w):y(n)},S=r?d(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)a(k,x=S[E])&&!a(w,x)&&g(w,x,h(k,x));w.prototype=m,m.constructor=w,s(i,"Number",w)}},function(e,n,t){var r=t(3),i=t(74);e.exports=function(e,n,t){var o,s;return i&&"function"==typeof(o=n.constructor)&&o!==t&&r(s=o.prototype)&&s!==t.prototype&&i(e,s),e}},function(e,n,t){var r=t(6),i=t(75);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,n=!1,t={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),n=t instanceof Array}catch(e){}return function(t,o){return r(t),i(o),n?e.call(t,o):t.__proto__=o,t}}():void 0)},function(e,n,t){var r=t(3);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},function(e,n,t){var r=t(9),i="["+t(77)+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),a=function(e){return function(n){var t=String(r(n));return 1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(s,"")),t}};e.exports={start:a(1),end:a(2),trim:a(3)}},function(e,n){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,n,t){"use strict";var r=t(6);e.exports=function(){var e=r(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n}},function(e,n,t){"use strict";var r=t(1);function i(e,n){return RegExp(e,n)}n.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),n.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},function(e,n,t){"use strict";var r=t(81),i=t(51),o=t(6),s=t(9),a=t(82),c=t(83),u=t(12),p=t(85),l=t(15),f=t(1),d=[].push,h=Math.min,g=!f((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(s(this)),o=void 0===t?4294967295:t>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return n.call(r,e,o);for(var a,c,u,p=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,f+"g");(a=l.call(g,r))&&!((c=g.lastIndex)>h&&(p.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&d.apply(p,a.slice(1)),u=a[0].length,h=c,p.length>=o));)g.lastIndex===a.index&&g.lastIndex++;return h===r.length?!u&&g.test("")||p.push(""):p.push(r.slice(h)),p.length>o?p.slice(0,o):p}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var i=s(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,i,t):r.call(String(i),n,t)},function(e,i){var s=t(r,e,this,i,r!==n);if(s.done)return s.value;var l=o(e),f=String(this),d=a(l,RegExp),v=l.unicode,k=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),m=new d(g?l:"^(?:"+l.source+")",k),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===f.length)return null===p(m,f)?[f]:[];for(var y=0,x=0,w=[];x<f.length;){m.lastIndex=g?x:0;var S,E=p(m,g?f:f.slice(x));if(null===E||(S=h(u(m.lastIndex+(g?0:x)),f.length))===y)x=c(f,x,v);else{if(w.push(f.slice(y,x)),w.length===b)return w;for(var T=1;T<=E.length-1;T++)if(w.push(E[T]),w.length===b)return w;x=y=S}}return w.push(f.slice(y)),w}]}),!g)},function(e,n,t){"use strict";t(48);var r=t(18),i=t(1),o=t(7),s=t(15),a=t(11),c=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p="$0"==="a".replace(/./,"$0"),l=o("replace"),f=!!/./[l]&&""===/./[l]("a","$0"),d=!i((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,l){var h=o(e),g=!i((function(){var n={};return n[h]=function(){return 7},7!=""[e](n)})),v=g&&!i((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[c]=function(){return t},t.flags="",t[h]=/./[h]),t.exec=function(){return n=!0,null},t[h](""),!n}));if(!g||!v||"replace"===e&&(!u||!p||f)||"split"===e&&!d){var k=/./[h],m=t(h,""[e],(function(e,n,t,r,i){return n.exec===s?g&&!i?{done:!0,value:k.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],y=m[1];r(String.prototype,e,b),r(RegExp.prototype,h,2==n?function(e,n){return y.call(e,this,n)}:function(e){return y.call(e,this)})}l&&a(RegExp.prototype[h],"sham",!0)}},function(e,n,t){var r=t(6),i=t(38),o=t(7)("species");e.exports=function(e,n){var t,s=r(e).constructor;return void 0===s||null==(t=r(s)[o])?n:i(t)}},function(e,n,t){"use strict";var r=t(84).charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},function(e,n,t){var r=t(22),i=t(9),o=function(e){return function(n,t){var o,s,a=String(i(n)),c=r(t),u=a.length;return c<0||c>=u?e?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):o:e?a.slice(c,c+2):s-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},function(e,n,t){var r=t(10),i=t(15);e.exports=function(e,n){var t=e.exec;if("function"==typeof t){var o=t.call(e,n);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,n)}},function(e,n,t){"use strict";var r,i=t(8),o=t(13).f,s=t(12),a=t(50),c=t(9),u=t(52),p=t(32),l="".startsWith,f=Math.min,d=u("startsWith");i({target:"String",proto:!0,forced:!!(p||d||(r=o(String.prototype,"startsWith"),!r||r.writable))&&!d},{startsWith:function(e){var n=String(c(this));a(e);var t=s(f(arguments.length>1?arguments[1]:void 0,n.length)),r=String(e);return l?l.call(n,r,t):n.slice(t,t+r.length)===r}})},function(e,n,t){"use strict";var r=t(14),i=t(5),o=t(16);e.exports=function(e,n,t){var s=r(n);s in e?i.f(e,s,o(0,t)):e[s]=t}},function(e,n,t){var r=t(8),i=t(2);r({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperty:t(5).f})},function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"takeoffs",(function(){return i})),t.d(r,"landingPositions",(function(){return o})),t.d(r,"takeoffModifiers",(function(){return s})),t.d(r,"landingModifiers",(function(){return a})),t.d(r,"transitions",(function(){return c})),t.d(r,"tricks",(function(){return u}));t(24),t(46),t(72),t(48),t(49),t(80),t(86),t(53);var i={swing:["back swing","skip hook","left right redirect","round carry-through"],raiz:["right left redirect","hook carry-through","front swing","semi","hook","turn step","step behind","outside leg reversal","skip invert","vanish"],backFullTwist:["backside pop","invert backside pop","invert backside punch"],insideFullTwist:["invert inside pop"],cartwheel:["reverse vanish","inside leg reversal","hook","turn step","step behind"]},o={eagle:["invert backside pop","missleg","skip invert","vanish","backside","back swing"],round:["backside","inside leg reversal","left right redirect","round carry-through","skip round","vanish","hook","outside pop"],hook:["cheat","right left redirect","reverse vanish","frontside pop","frontside","hook carry-through","outside leg reversal","skip hook","hook to scoot"],complete:["invert backside pop","missleg","skip invert","vanish","backside"],hyper:["reverse vanish","right left redirect","skip hook","cheat"],mega:["vanish","skip round","mega"],semi:["reverse vanish","skip hook","semi"],turbo:["frontside punch","right first reverse pop"],"gyro frontside":["frontside","frontside punch"],"gyro backside":["backside","backside punch"],"half gyro frontside":["frontside","frontside punch"],"half gyro backside":["backside","backside punch"],"rapid round":["backside","inside leg reversal","left right redirect","round carry-through","skip round","vanish","hook"],"rapid hook":["cheat","right left redirect","reverse vanish","frontside pop","frontside","hook carry-through","outside leg reversal","skip hook","hook to scoot"]},s=["turn step","step behind","cheat","frontside pop","invert frontside pop","inside pop","invert inside pop","outside pop","backside pop","invert backside pop","swing","wrap"],a=["complete","hyper","mega","turbo","semi","gyro frontside","gyro backside","half gyro frontside","half gyro backside","rapid round","rapid hook"],c=["hook","hook carry-through","round carry-through","reverse pop","right first reverse pop","frontside pop","inside pop","outside pop","backside pop","invert frontside pop","invert inside pop","invert backside pop","frontside punch","outside punch","backside punch","inside punch","invert frontside punch","invert backside punch","vanish","reverse vanish","wrap","cheat","rapid round","rapid hook","skip round","skip hook","skip invert","outside leg reversal","inside leg reversal","right left redirect","left right redirect","missleg","complete","hyper","mega","turbo","semi","gyro frontside","gyro backside","half gyro frontside","half gyro backside","rapid round","rapid hook"],u={level1:[{name:"360 Crescent Kick",setups:["inside pop","frontside pop","inside punch","frontside punch","cheat","hook"],landings:["frontside","hook","turbo","outside leg reversal","right left redirect","hook carry-through","cheat"]},{name:"540 Kick",setups:["cheat","vanish","frontside pop"],landings:o.hyper},{name:"Auto-Bahn",setups:["reverse pop","hook carry-through","outside leg reversal","right left redirect","hook"],landings:o.hook},{name:"Backside 720 Kick",setups:["backside punch","backside","backside pop"],landings:o.hook},{name:"Back Sweep",notFinisher:!0,setups:["frontside","hook"],landings:["frontside","frontside pop"]},{name:"Butterfly Kick",setups:["turn step","hook","reverse vanish","right first reverse pop"],landings:["reverse vanish","outside leg reversal","inside pop"]},{name:"Compasso (td hook)",notFinisher:!0,setups:["inside","frontside","Tornado Kick","outside leg reversal"],landings:o.hook},{name:"Feilong",setups:["inside pop","frontside pop","frontside punch","inside punch","cheat","reverse pop"],landings:o.round},{name:"Front Sweep",notFinisher:!0,setups:["backside","inside leg reversal"],landings:["backside","backside pop"]},{name:"Narabong",setups:["hook carry-through","outside leg reversal","right left redirect","reverse pop"],landings:o.hook},{name:"Palm Kick",notFinisher:!0,setups:["reverse vanish","missleg","hook","mega"],landings:["inside","inside pop","reverse vanish","outside leg reversal","right left redirect"]},{name:"Round Kick",notFinisher:!0,setups:["backside","inside leg reversal"],landings:o.round},{name:"Tornado",notFinisher:!0,setups:["vanish","hook carry-through","right left redirect","reverse pop","frontside pop","hook","cheat"],landings:o.round},{name:"Tsunami Kick (Skip Hook)",setups:["back swing","round carry-through","inside leg reversal","left right redirect","reverse pop","skip hook"],landings:o.hook},{name:"Blaster Scoot",setups:["reverse vanish","inside"],landings:["back swing","backside","backside pop","invert backside pop","vanish"]},{name:"Cartwheel",setups:i.cartwheel,landings:["inside","invert inside pop"]},{name:"Kaydem",setups:["reverse vanish","inside"],landings:["back swing","backside","backside pop","invert backside pop","vanish"]},{name:"Macaco",setups:["backside"],landings:["frontside","right left redirect","outside leg reversal","reverse vanish"]},{name:"Round Off",setups:i.cartwheel,landings:["invert backside punch"]},{name:"Scoot",setups:["skip round","semi","hook","hook to scoot"],landings:o.eagle.concat(["hyper"])},{name:"Spyder",setups:["backside","frontside","vanish","outside leg reversal","hook carry-through","semi","skip invert"],landings:["backside","frontside","backside pop","frontside pop","vanish","skip round","skip invert"]},{name:"Transformer/Machine",setups:["backside","frontside","vanish","outside leg reversal","hook carry-through","semi","skip invert"],landings:["backside","frontside","backside pop","frontside pop","vanish","skip round","skip invert"]},{name:"Arabian",setups:["invert inside pop","invert backside punch","invert backside pop"],landings:["invert frontside punch","hook"]},{name:"Front Flip",setups:["invert frontside pop","invert frontside punch"],landings:["frontside","invert frontside punch"]},{name:"Webster",setups:["reverse vanish","mega"],landings:["frontside","invert frontside punch"]}],level2:[{name:"360 Crescent Kick",setups:["inside pop","frontside pop","inside punch","frontside punch","cheat","hook"],landings:["mega","complete","half gyro backside"]},{name:"540 Kick",setups:["cheat","vanish","frontside pop"],landings:["wrap"]},{name:"720 Kick",setups:["cheat","vanish","hook carry-through","reverse pop","hook"],landings:o.hook.concat(["rapid round"])},{name:"720 Kick",setups:["frontside pop","hook"],landings:o.hook.concat(["rapid round"])},{name:"720 Double",setups:["cheat","vanish","hook","frontside pop"],landings:o.hook.concat(["turbo"])},{name:"900 Kick",setups:["cheat","vanish","skip round","hook","wrap"],landings:o.round.concat(["rapid hook"])},{name:"Backside 900",setups:["backside punch","backside pop"],landings:o.round.concat(["rapid hook"])},{name:"Crowd Awakener",setups:["cheat","vanish","hook"],landings:["backside punch","hook"]},{name:"E-kick",notFinisher:!0,setups:["frontside","outside leg reversal","semi","hook carry-through","hook"],landings:o.hook},{name:"Feilong",setups:["inside pop","frontside pop","frontside punch","inside punch","cheat","reverse pop"],landings:["complete","half gyro frontside"]},{name:"Hyper Feilong",setups:["frontside pop","frontside punch","cheat","hook"],landings:["reverse vanish","right left redirect","skip hook","wrap","cheat"]},{name:"Parafuso",setups:["vanish","hook","right left redirect"],landings:["backside","backside punch"]},{name:"Swing 360 Crescent Kick",setups:["back swing","round carry-through","inside leg reversal","left right redirect","skip hook","right first reverse pop"],landings:["frontside pop","hook","turbo","right left redirect","outside leg reversal","cheat"]},{name:"Swing 900 Kick",setups:["back swing","round carry-through","inside leg reversal","left right redirect","right first reverse pop"],landings:o.round},{name:"Tai-fighter",setups:["frontside pop","inside pop","frontside punch","inside punch"],landings:o.round},{name:"Tornado Double",setups:["vanish","hook carry-through","right left redirect","reverse pop","frontside pop","hook","cheat"],landings:o.round},{name:"Triple Kick",setups:["j step","back swing","round carry-through","inside leg reversal","left right redirect","right first reverse pop"],landings:o.round},{name:"Wackknife",setups:["cheat","frontside pop","frontside punch"],landings:o.hook.concat(["turbo"])},{name:"Cartwheel Twist",setups:i.cartwheel,landings:["backside punch","invert backside punch","reverse pop"]},{name:"Coin Drop",notStarter:!0,notFinisher:!0,setups:["vanish","reverse pop","hook carry-through","skip round"],landings:["cheat","hook"]},{name:"Gumbi",notFinisher:!0,setups:i.raiz,landings:o.eagle},{name:"Master Scoot",notFinisher:!0,setups:["hook","hook to scoot","skip round","vanish"],landings:o.eagle},{name:"Raiz",notFinisher:!0,setups:i.raiz,landings:o.eagle},{name:"Raiz Scissor",notFinisher:!0,setups:i.raiz,landings:o.round},{name:"Sailor Moon",notFinisher:!0,setups:i.raiz,landings:o.eagle},{name:"Sailor Moon Scissor",notFinisher:!0,setups:i.raiz,landings:o.round},{name:"Sideswipe",setups:i.raiz,landings:["reverse vanish","right left redirect","cheat","skip hook","wrap"]},{name:"Suicide Kip Up",setups:["backside"],landings:["inside punch"]},{name:"Super Monkey Scoot",setups:i.cartwheel,landings:o.eagle},{name:"Touch Down Raiz",notFinisher:!0,setups:i.raiz,landings:o.eagle},{name:"Valdez",notStarter:!0,notFinisher:!0,setups:["invert backside pop","invert backside punch","back swing"],landings:["invert backside pop","invert backside punch","back swing","hyper"]},{name:"Aerial",setups:["inside","reverse vanish","inside leg reversal","hook","mega"],landings:["inside","inside pop","invert inside pop","reverse vanish","right left redirect","cheat","outside leg reversal","hook carry-through"]},{name:"Arabian",setups:["invert inside pop","invert backside punch","invert backside pop"],landings:["mega","semi"]},{name:"Arabian Scissor Swipe",notStarter:!0,setups:["invert backside pop","invert backside punch","Aerial","Cartwheel"],landings:["frontside pop","hook"]},{name:"Back Full Round",setups:i.backFullTwist,landings:o.round},{name:"Back Full Swipe",setups:i.backFullTwist,landings:["reverse vanish","right left redirect","cheat"]},{name:"Back Full Twist",setups:i.backFullTwist,landings:o.eagle},{name:"Butterfly Twist",setups:["hook","reverse vanish","missleg","turn step","mega"],landings:o.eagle},{name:"Butterfly Twist Round",setups:["hook","reverse vanish","turn step","mega"],landings:o.round},{name:"Butterfly Switch",setups:["hook","reverse vanish","missleg","turn step"],landings:["invert backside pop","back swing","missleg","skip invert","vanish","backside"]},{name:"Butter Knife",setups:["hook","reverse vanish","missleg","turn step"],landings:o.hook},{name:"Corkscrew",setups:i.swing,landings:o.eagle},{name:"Corkscrew Round",setups:i.swing,landings:o.round},{name:"Donut Boy",notStarter:!0,setups:["back swing","skip hook","j step","pivot step"],landings:["frontside","frontside punch","hook"]},{name:"Double Leg",setups:["outside pop","outside punch","frontside punch","invert frontside punch"],landings:["backside","backside punch","invert backside punch"]},{name:"Flash Kick",setups:["backside pop","invert backside pop","invert backside punch"],landings:["inside pop","reverse vanish","right left redirect","cheat"]},{name:"Front Flip",setups:["invert frontside pop","invert frontside punch","invert backside punch"],landings:["mega"]},{name:"Full Round",notStarter:!0,setups:i.insideFullTwist,landings:o.round},{name:"Full Swipe",notStarter:!0,setups:i.insideFullTwist,landings:["reverse vanish","right left redirect","cheat"]},{name:"Full Twist",notStarter:!0,setups:i.insideFullTwist,landings:o.eagle},{name:"Gainer Arabian",setups:i.swing,landings:["invert frontside punch","reverse pop","frontside","hook"]},{name:"Gainer Flash Kick",setups:i.swing,landings:["inside pop","invert inside pop","reverse vanish","right left redirect","cheat"]},{name:"Gainer Switch",setups:i.swing,landings:o.eagle},{name:"Illusion Twist",setups:["hook","reverse vanish","hyper"],landings:["frontside","frontside punch","hook"]},{name:"Loser",setups:["Webster","backside","skip invert"],landings:["inside","inside pop","backside","backside pop","hook"]},{name:"Moon Kick",setups:i.swing,landings:o.hook.concat(["turbo"])},{name:"Rocketboii",notStarter:!0,setups:["Round Off"],landings:["backside","invert backside punch"]},{name:"Shuriken Twist",setups:["hook","reverse vanish","turn step","mega"],landings:["frontside","vanish","hook"]},{name:"Terada Grab",notStarter:!0,starter:!1,setups:["invert backside pop","invert backside punch"],landings:["reverse vanish","right left redirect","hook","cheat"]},{name:"Webster",setups:["reverse vanish","mega"],landings:["mega"]},{name:"X-Out",setups:["invert backside pop"],landings:["backside punch","invert backside punch","hook"]}]};function p(e){return Math.floor(Math.random()*e)}function l(e){if(e.length)return e[p(e.length)]}function f(e,n){if(e.length)return l(e.filter((function(e){return r[n].includes(e)})))}function d(e){if(e){if(/^(vanish|missleg|reverse pop|cheat|hook|wrap|complete)$/.test(e))return e;if(/reverse pop$/.test(e))return"reverse pop";if(e.startsWith("skip"))return"skip";if(/(pop|punch|vanish|reversal|redirect|carry-through)$/.test(e))return e.split(" ").pop();if(/^(hyper|mega|turbo|semi|gyro frontside|gyro backside|half gyro frontside|half gyro backside|rapid round|rapid hook)$/.test(e))return e.startsWith("gyro")?"gyro":e.startsWith("half")?"half gyro":e}}function h(e,n){return u[e].filter((function(e){return e.setups.includes(n)}))}t(54),t(88);function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"generateLevel",value:function(e){var n=p(e)+1;this.level="level".concat(n)}},{key:"generateTrick",value:function(e){var n;if(e){var t=function(e,n){var t;return a.includes(e.landing)&&o[e.landing]?(t=l(o[e.landing]),/(semi|mega)/.test(t)?n.transition=null:n.transition=t,t):e.landing}(e,this);(n=h(this.level,t)).length||(console.log("REFILTERING"),n=function e(n,t){if("level3"!==n){var r=n.split(""),i=Number(r.pop()),o=h(n,t);return o.length?o:e("level".concat(i+1),t)}}("level1",t)),this.trickObj=l(n)}else n=u[this.level].filter((function(e){return!e.notStarter})),this.trickObj=l(n)}},{key:"generateLanding",value:function(){this.landing=l(this.trickObj.landings)}},{key:"setName",value:function(){this.name=this.trickObj.name}},{key:"generateTransition",value:function(e){var n=!a.includes(e);this.transition?c.includes(this.transition)||(this.transition=null):this.trickObj.setups.includes(e)&&c.includes(e)&&n?this.transition=e:this.transition=null}},{key:"handleHook",value:function(){if("hook"===this.transition){var e=this.trickObj.setups.filter((function(e){return o.hook.includes(e)}));this.takeoff=f(e,"takeoffModifiers")}}},{key:"handleTakeoff",value:function(){this.takeoff?s.includes(this.takeoff)&&("wrap"!==this.takeoff||this.transition?this.takeoff=d(this.takeoff,this.name):this.takeoff="cheat"):(s.includes(this.transition)&&(this.takeoff=d(this.transition,this.name),this.transition=null),"skip round"===this.transition&&"900 Kick"===this.name&&(this.takeoff="wrap",this.transition="skip"))}},{key:"handleLandingMod",value:function(){a.includes(this.landing)&&(this.landingMod=d(this.landing))}}])&&g(n.prototype,t),r&&g(n,r),e}(),k={comboContainer:document.getElementById("combo"),diffSelection:document.getElementById("difficulty"),numTricksSelection:document.getElementById("numTricks"),generateComboBtn:document.getElementById("generateRandomCombo")};function m(e,n){var t,r=document.createElement("div");r.className="trick",e&&((t=document.createElement("div")).className="connector",t.innerHTML="&darr;",k.comboContainer.append(t)),function(e){if(e.transition&&e.transition!==e.takeoff){var n=document.createElement("div");n.className="transition",n.textContent="- ".concat(e.transition," -"),k.comboContainer.append(n)}}(n),function(e,n){e.takeoff?(n.innerHTML='<span class="takeoff">'.concat(e.takeoff,"</span> ").concat(e.name),k.comboContainer.append(n)):(n.textContent=e.name,k.comboContainer.append(n))}(n,r),function(e,n){if(e){var t=document.createElement("span");t.className="landing",t.innerHTML="&nbsp;".concat(e),n.append(t)}}(n.landingMod,r)}var b={};function y(e,n){var t=new v;t.generateLevel(e),t.generateTrick(n),t.setName(),n?t.generateTransition(n.landing):t.takeoff=f(t.trickObj.setups,"takeoffModifiers"),t.generateLanding(),t.handleHook(),t.handleTakeoff(),t.handleLandingMod(),t.transition&&(t.transition=d(t.transition)),m(n,t),b.currTrick=t}k.generateComboBtn.addEventListener("click",(function(){var e={difficulty:k.diffSelection.value,numTricks:k.numTricksSelection.value};!function(e,n){var t,r;console.clear(),k.comboContainer,k.comboContainer.innerHTML="",b.trickCount=0,b.prevTrick=void 0,b.currTrick=void 0,t="random"===n?p(10)+1:n,r="random"===e?p(2)+1:e;do{b.currTrick&&(b.prevTrick=b.currTrick,b.currTrick=void 0),y(r,b.prevTrick),b.trickCount+=1}while(b.trickCount<t)}(e.difficulty,e.numTricks)}))}]);