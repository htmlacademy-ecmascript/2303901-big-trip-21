(()=>{var e={287:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}\n"],sourceRoot:""}]);const c=r},766:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}\n"],sourceRoot:""}]);const c=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);i&&r[f[0]]||(void 0!==n&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=n),s&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=s):f[2]=s),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],s=e[3];if(!s)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),n="/*# ".concat(a," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,s="millisecond",i="second",a="minute",n="hour",r="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||t[0])+"]"}},m=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},v={s:m,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),a=s%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(a,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),a=t.clone().add(i,o),n=s-a<0,r=t.clone().add(i+(n?-1:1),o);return+(-(i+(s-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:r,D:l,h:n,m:a,s:i,ms:s,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=h;var g=function(e){return e instanceof T},$=function e(t,s,i){var a;if(!t)return _;if("string"==typeof t){var n=t.toLowerCase();y[n]&&(a=n),s&&(y[n]=s,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;y[c]=t,a=c}return!i&&a&&(_=a),a||!i&&_},w=function(e,t){if(g(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new T(s)},S=v;S.l=$,S.i=g,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var s=w(e);return this.startOf(t)<=s&&s<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,s){return S.u(e)?this[t]:this.set(s,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var s=this,d=!!S.u(t)||t,u=S.p(e),p=function(e,t){var i=S.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return d?i:i.endOf(r)},b=function(e,t){return S.w(s.toDate()[e].apply(s.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},h=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(h<y?h+7:h)-y;return p(d?v-g:v+(6-g),m);case r:case l:return b(_+"Hours",0);case n:return b(_+"Minutes",1);case a:return b(_+"Seconds",2);case i:return b(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=S.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[r]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[n]=u+"Hours",c[a]=u+"Minutes",c[i]=u+"Seconds",c[s]=u+"Milliseconds",c)[d],b=d===r?this.$D+(t-this.$W):t;if(d===o||d===f){var h=this.clone().set(l,1);h.$d[p](b),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](b);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(s,d){var l,u=this;s=Number(s);var p=S.p(d),b=function(e){var t=w(u);return S.w(t.date(t.date()+Math.round(e*s)),u)};if(p===o)return this.set(o,this.$M+s);if(p===f)return this.set(f,this.$y+s);if(p===r)return b(1);if(p===c)return b(7);var h=(l={},l[a]=e,l[n]=t,l[i]=1e3,l)[p]||1,m=this.$d.getTime()+s*h;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),n=this.$H,r=this.$m,c=this.$M,o=s.weekdays,d=s.months,f=function(e,s,a,n){return e&&(e[s]||e(t,i))||a[s].slice(0,n)},l=function(e){return S.s(n%12||12,e,"0")},p=s.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:S.s(c+1,2,"0"),MMM:f(s.monthsShort,c,d,3),MMMM:f(d,c),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(s.weekdaysMin,this.$W,o,2),ddd:f(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:S.s(n,2,"0"),h:l(1),hh:l(2),a:p(n,r,!0),A:p(n,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return i.replace(b,(function(e,t){return t||h[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(s,l,u){var p,b=S.p(l),h=w(s),m=(h.utcOffset()-this.utcOffset())*e,v=this-h,_=S.m(this,h);return _=(p={},p[f]=_/12,p[o]=_,p[d]=_/3,p[c]=(v-m)/6048e5,p[r]=(v-m)/864e5,p[n]=v/t,p[a]=v/e,p[i]=v/1e3,p)[b]||v,u?_:S.a(_)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=$(e,t,!0);return i&&(s.$L=i),s},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),M=T.prototype;return w.prototype=M,[["$ms",s],["$s",i],["$m",a],["$H",n],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,T,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,s=1e3,i=6e4,a=36e5,n=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:n,hours:a,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,s){return new _(e,s,t.$l)},p=function(e){return t.p(e)+"s"},b=function(e){return e<0},h=function(e){return b(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?b(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function b(e,t,s){var i=this;if(this.$d={},this.$l=s,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var n=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var m=b.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,s){return t+(e.$d[s]||0)*f[s]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=h(e/c),e%=c,this.$d.months=h(e/o),e%=o,this.$d.days=h(e/n),e%=n,this.$d.hours=h(e/a),e%=a,this.$d.minutes=h(e/i),e%=i,this.$d.seconds=h(e/s),e%=s,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var i=v(s,"D"),a=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=v(r,"S"),o=e.negative||t.negative||i.negative||a.negative||n.negative||c.negative,d=a.format||n.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+i.format+d+a.format+n.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var s=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return s.replace(r,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,s=p(e);return"milliseconds"===s?t%=1e3:t="weeks"===s?h(t/f[s]):this.$d[s],0===t?0:t},m.add=function(e,t,s){var i;return i=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+i*(s?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},b}();return function(s,i,a){e=a,t=a().$utils(),a.duration=function(e,t){var s=a.locale();return u(e,{$l:s},t)},a.isDuration=l;var n=i.prototype.add,r=i.prototype.subtract;i.prototype.add=function(e,t){return l(e)&&(e=e.asMilliseconds()),n.bind(this)(e,t)},i.prototype.subtract=function(e,t){return l(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var n={},r=[],c=0;c<e.length;c++){var o=e[c],d=i.base?o[0]+i.base:o[0],f=n[d]||0,l="".concat(d," ").concat(f);n[d]=f+1;var u=s(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var b=a(p,i);i.byIndex=c,t.splice(c,0,{identifier:l,updater:b,references:1})}r.push(l)}return r}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var n=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var c=s(n[r]);t[c].references--}for(var o=i(e,a),d=0;d<n.length;d++){var f=s(n[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}n=o}}},569:e=>{"use strict";var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{"use strict";e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,a&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var n=s.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={id:i,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(e,t=null){const s=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return this.dispatchEvent(s)}}const t=e;var i=s(484),a=s.n(i),n=s(646),r=s.n(n);function c(e){return a()(e).format("HH:mm")}function o(e,...t){return e.reduce(((e,s,i)=>{const a=t[i-1];return void 0===a?e+s:Array.isArray(a)?e+a.join("")+s:e+a+s}))}a().extend(r());customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return o`
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

      <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
    </div>

    <p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
    `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return o`
      ${this.state.items.map((e=>o`
        <div class="trip-filters__filter">
          <input
            id="filter-${e.value}"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="${e.value}"
            ${e.isSelected?"checked":""}
            ${e.isDisabled?"disabled":""}
            >
          <label
            class="trip-filters__filter-label"
            for="filter-${e.value}">
            ${e.value}
          </label>
        </div>
      `))}
    `}});customElements.define("add-button-view",class extends t{createHtml(){return o`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return o`
      ${this.state.items.map((e=>o`
        <div class="trip-sort__item  trip-sort__item--${e.value}">
          <input
            id="sort-${e.value}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="${e.value}"
            ${e.isSelected?"checked":""}
            ${e.isDisabled?"disabled":""}>
          <label
            class="trip-sort__btn"
            for="sort-${e.value}">
            ${e.value}
          </label>
        </div>
      `))}
    `}});var d=s(379),f=s.n(d),l=s(795),u=s.n(l),p=s(569),b=s.n(p),h=s(565),m=s.n(h),v=s(216),_=s.n(v),y=s(589),g=s.n(y),$=s(766),w={};w.styleTagTransform=g(),w.setAttributes=m(),w.insert=b().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=_(),f()($.Z,w),$.Z&&$.Z.locals&&$.Z.locals;class S extends t{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return o`
    <div class="event">
      ${this.createStartDateHtml()}
      ${this.createTypeIconHtml()}
      ${this.createDestinationHtml()}
      ${this.createScheduleHtml()}
      ${this.createPriceHtml()}
      ${this.createOffersListHtml()}
      ${this.createFavoriteButtonHtml()}
      ${this.createOpenButtonHtml()}
    </div >
    `}createStartDateHtml(){const{dateFrom:e}=this.state;return o`
      <time class="event__date" datetime="${e}">${t=e,a()(t).format("MMM D")}</time>
    `;var t}createTypeIconHtml(){const{types:e}=this.state;return o`
      <div class="event__type">
        <img
          class="event__type-icon"
          width="42" height="42"
          src="img/icons/${e.find((e=>e.isSelected)).value}.png"
          alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state;return o`
      <h3 class="event__title">${e.find((e=>e.isSelected)).value} ${t.find((e=>e.isSelected)).name}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return o`
      <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${e}">${c(e)}</time>
          —
        <time class="event__end-time" datetime="${t}">${c(t)}</time>
      </p>
      <p class="event__duration">${function(e,t){const s=a()(t).diff(e),i=a().duration(s,"ms");return i.days()?i.format("D[d] HH[h] mm[m]"):i.hours()?i.format("HH[h] mm[m]"):i.format("mm[m]")}(e,t)}</p>
    </div>
    `}createPriceHtml(){const{basePrice:e}=this.state;return o`
      <p class="event__price">€&nbsp;<span class="event__price-value">${t=e,t.toLocaleString("en")}</span></p>
    `;var t}createOffersListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t.length?o`
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${t.map((e=>o`
        <li class="event__offer">
          <span class="event__offer-title">${e.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${e.price}</span>
        </li>
      `))}
    </ul>
    `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return o`
      <button class="event__favorite-btn${e?" event__favorite-btn--active":""}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return o`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}onClick(e){e.target.closest(".event__rollup-btn")?this.dispatch("open"):e.target.closest(".event__favorite-btn")&&this.dispatch("favorite")}}customElements.define("card-view",S);const T=S;var M=s(287),H={};H.styleTagTransform=g(),H.setAttributes=m(),H.insert=b().bind(null,"head"),H.domAPI=u(),H.insertStyleElement=_(),f()(M.Z,H),M.Z&&M.Z.locals&&M.Z.locals;class k extends t{constructor(){super(),this.addEventListener("click",this.onClick)}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return o`
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${this.createTypeFieldHtml()}
          ${this.createDestinationFieldHtml()}
          ${this.createScheduleFieldHtml()}
          ${this.createPriceFieldHtml()}
          ${this.createSubmitButtonHtml()}
          ${this.createResetButtonHtml()}
          ${this.createCloseButtonHtml()}
        </header>

        <section class="event__details">
          ${this.createOfferListFieldHtml()}
          ${this.createDestinationHtml()}
        </section>
      </form>
    `}createTypeFieldHtml(){const{types:e}=this.state;return o`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img
            class="event__type-icon"
            width="17"
            height="17"
            src="img/icons/${e.find((e=>e.isSelected)).value}.png"
            alt="Event type icon">
        </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          ${e.map((e=>o`
            <div class="event__type-item">
              <input
                id="event-type-${e.value}-1"
                class="event__type-input  visually-hidden"
                type="radio"
                name="event-type"
                value="${e.value}"
                ${e.isSelected?"checked":""}>
              <label
                class="event__type-label  event__type-label--${e.value}"
                for="event-type-${e.value}-1">
                ${e.value}
              </label>
            </div>
          `))}
        </fieldset>
      </div>
    </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return o`
      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${e.find((e=>e.isSelected)).value}
        </label>

        <input
          class="event__input  event__input--destination"
          id="event-destination-1"
          type="text"
          name="event-destination"
          value="${t.find((e=>e?.isSelected))?.name}"
          list="destination-list-1"
        >

        <datalist id="destination-list-1">
          ${t.map((e=>o`
            <option value="${e.name}"></option>
          `))}

        </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return o`
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input
        class="event__input  event__input--time"
        id="event-start-time-1"
        type="text"
        name="event-start-time"
        value="${e}">
       —
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input
        class="event__input  event__input--time"
        id="event-end-time-1"
        type="text"
        name="event-end-time"
        value="${t}">
    </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return o`
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        €
      </label>
      <input
      class="event__input  event__input--price"
      id="event-price-1"
      type="text"
      name="event-price"
      value="${e}">
    </div>
    `}createSubmitButtonHtml(){return o`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return o`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return o`
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Close event</span>
    </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?o`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${e.map((e=>o`

            <div class="event__offer-selector">

              <input
                class="event__offer-checkbox  visually-hidden"
                id="${e.id}"
                type="checkbox"
                name="event-offer"
                value = ${e.id}
                ${e.isSelected?"checked":""}
              >

              <label class="event__offer-label" for="${e.id}">
                <span class="event__offer-title">${e.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${e.price}</span>
              </label>
            </div>
          `))}
        </div>
      </section>
     `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?o`
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${t.description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">

          ${t.pictures.map((e=>o`
            <img class="event__photo" src="${e.src}" alt="${e.description}">
          `))}

        </div>
      </div>
    </section>
    `:""}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(e){e.key?.startsWith("Esc")&&this.dispatch("close")}}customElements.define("editor-view",k);const C=k;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new C:new T;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const D=class{},x=class extends D{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}get dateFromInMs(){return Date.parse(this.dateFrom)}get dateToInMs(){return Date.parse(this.dateTo)}get durationInMs(){return this.dateToInMs-this.dateFromInMs}toJSON(){return{id:this.id,base_price:this.basePrice,date_from:this.dateFrom,date_to:this.dateTo,destination:this.destinationId,is_favorite:this.isFavorite,offers:structuredClone(this.offerIds),type:this.type}}},A=JSON.parse('[{"id":"a3a6421a-d869-44df-877e-f3ef398349a4","base_price":2826,"date_from":"2023-10-12T17:53:46.219Z","date_to":"2023-10-13T20:07:46.219Z","destination":"6800abca-2783-4958-a8ec-c9cd0d03c963","is_favorite":false,"offers":["5bc3c4f6-a6ec-4c59-962e-775a30dfb3da"],"type":"train"},{"id":"2efba849-0c15-456f-8a97-c53094e601ca","base_price":8245,"date_from":"2023-10-15T03:55:46.219Z","date_to":"2023-10-16T02:08:46.219Z","destination":"475d8024-a42e-4c08-8097-3418582e0c92","is_favorite":true,"type":"train"},{"id":"af1ce826-9c09-4d38-99dd-94d0dc02f0f3","base_price":5255,"date_from":"2023-10-16T16:11:46.219Z","date_to":"2023-10-17T14:29:46.219Z","destination":"48e0c8cf-8160-4b75-921b-c63e84cab2b0","is_favorite":false,"offers":["fdd0411b-b990-44be-b2ae-2bb59012c6f8","38ee3051-2cb6-40f7-84e6-87fd82f6c819","84ce2a2c-42d6-488d-97b0-12ca27f102ee","90d84597-0f1b-441d-9ed5-6ad9e47c4c27"],"type":"taxi"},{"id":"9e9e22a1-30b6-4864-a040-0e284c241d37","base_price":3512,"date_from":"2023-10-18T22:12:46.219Z","date_to":"2023-10-20T22:40:46.219Z","destination":"48e0c8cf-8160-4b75-921b-c63e84cab2b0","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"aac43898-d301-49b9-bef4-df6c5b144878","base_price":2537,"date_from":"2023-10-22T02:47:46.219Z","date_to":"2023-10-22T19:53:46.219Z","destination":"ebf990a3-0dc9-487c-beb3-abc102987513","is_favorite":false,"offers":["fbd482c6-5f3a-40f1-af3b-efec84f5b6e8","da9c8399-d1f0-43e2-beba-d93d1f7d43d3","046f7c12-c8be-4b02-86a6-b495c3604ac1","70fcb5ed-ec63-40b4-ade5-8495a6fa76e7","4e5da8b4-77d6-4a0e-8e58-76ec661e0e1d","632b14df-deef-4b0b-bcbc-c01f1c3c9bbf"],"type":"flight"},{"id":"cabb6ae7-aff4-4e24-b4a9-d7a58ab23402","base_price":9888,"date_from":"2023-10-23T08:51:46.219Z","date_to":"2023-10-24T08:05:46.219Z","destination":"475d8024-a42e-4c08-8097-3418582e0c92","is_favorite":false,"offers":["3b04209a-b8bb-42a0-9799-5006b1ebc35d"],"type":"bus"},{"id":"f4b9e1d2-0f97-4c12-bc19-f8849f90b163","base_price":7675,"date_from":"2023-10-25T23:12:46.219Z","date_to":"2023-10-27T01:01:46.219Z","destination":"db980a76-5370-4a01-9c13-2e8a223a0233","is_favorite":true,"offers":[],"type":"flight"},{"id":"a37da937-d1f8-4d59-96d8-c98807f08fb4","base_price":1258,"date_from":"2023-10-27T19:32:46.219Z","date_to":"2023-10-28T18:45:46.219Z","destination":"ae164b95-3fb6-4b62-a199-1f4667bdccfe","is_favorite":true,"offers":["632b14df-deef-4b0b-bcbc-c01f1c3c9bbf"],"type":"flight"},{"id":"9397396c-e923-4f1e-8fc4-08928e6ee0cc","base_price":3678,"date_from":"2023-10-29T06:47:46.219Z","date_to":"2023-10-29T19:36:46.219Z","destination":"61c5c1a6-c21b-4cb4-8b84-ee3e9ac6e0ba","is_favorite":true,"offers":["5bc3c4f6-a6ec-4c59-962e-775a30dfb3da"],"type":"train"},{"id":"3448c8ac-6643-4259-bb35-b5ff28b9a587","base_price":8026,"date_from":"2023-10-30T07:29:46.219Z","date_to":"2023-10-30T19:17:46.219Z","destination":"4cd4a6ee-6bbf-4066-b90f-749ce7bd958b","is_favorite":true,"offers":["f5fa09a1-f105-410c-b0c1-5b1d65cef4f8"],"type":"restaurant"},{"id":"8a93c879-c1c1-48a7-8789-c50c17edc29a","base_price":9650,"date_from":"2023-10-31T06:34:46.219Z","date_to":"2023-11-01T11:06:46.219Z","destination":"6a91bc45-57e5-4df3-8f96-344fc86c5db1","is_favorite":true,"offers":["8ed81622-a2f6-4a08-bf2b-09e6997479d8","2403fb9a-9cef-4c9f-a897-8ba9a24c61d1","5bc3c4f6-a6ec-4c59-962e-775a30dfb3da"],"type":"train"},{"id":"6b9e173f-29d1-4b60-8312-98dff6160b17","base_price":1344,"date_from":"2023-11-03T06:45:46.219Z","date_to":"2023-11-05T05:22:46.219Z","destination":"355b973f-9646-444d-9d4c-7a16652f7d63","is_favorite":false,"offers":["4e5da8b4-77d6-4a0e-8e58-76ec661e0e1d","632b14df-deef-4b0b-bcbc-c01f1c3c9bbf"],"type":"flight"},{"id":"8073324f-6ae7-4229-805b-baedb6549729","base_price":8631,"date_from":"2023-11-06T13:19:46.219Z","date_to":"2023-11-07T18:24:46.219Z","destination":"db980a76-5370-4a01-9c13-2e8a223a0233","is_favorite":true,"offers":["38ee3051-2cb6-40f7-84e6-87fd82f6c819","84ce2a2c-42d6-488d-97b0-12ca27f102ee","90d84597-0f1b-441d-9ed5-6ad9e47c4c27"],"type":"taxi"},{"id":"273ab9bc-4b1f-487c-8295-04e6abd74fac","base_price":7647,"date_from":"2023-11-09T04:27:46.219Z","date_to":"2023-11-10T06:15:46.219Z","destination":"48e0c8cf-8160-4b75-921b-c63e84cab2b0","is_favorite":true,"offers":["94dd5c00-4c10-47e4-8828-1679e7702742","c8552dae-a71d-44c9-86ee-0ccd7f38b838","f9fd572c-f464-4482-bd66-8f41f366a20b"],"type":"check-in"},{"id":"323a8156-1b69-47a6-bb45-865e2b9e0032","base_price":3513,"date_from":"2023-11-12T02:25:46.219Z","date_to":"2023-11-13T11:22:46.219Z","destination":"355b973f-9646-444d-9d4c-7a16652f7d63","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"c1bad3d3-71af-44aa-9152-3cd341efd1be","base_price":4857,"date_from":"2023-11-14T11:50:46.219Z","date_to":"2023-11-15T11:37:46.219Z","destination":"6a91bc45-57e5-4df3-8f96-344fc86c5db1","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"85c01067-e33c-4805-a86e-ad074ddb4e34","base_price":9913,"date_from":"2023-11-17T08:48:46.219Z","date_to":"2023-11-19T00:50:46.219Z","destination":"48e0c8cf-8160-4b75-921b-c63e84cab2b0","is_favorite":false,"offers":[],"type":"flight"},{"id":"d6c76cff-983a-4ed2-a25d-4f738129c227","base_price":6152,"date_from":"2023-11-19T22:29:46.219Z","date_to":"2023-11-20T04:39:46.219Z","destination":"355b973f-9646-444d-9d4c-7a16652f7d63","is_favorite":true,"offers":["38ee3051-2cb6-40f7-84e6-87fd82f6c819","84ce2a2c-42d6-488d-97b0-12ca27f102ee","90d84597-0f1b-441d-9ed5-6ad9e47c4c27"],"type":"taxi"},{"id":"85daaea7-ba28-4301-afd8-06b941404069","base_price":8108,"date_from":"2023-11-22T04:51:46.219Z","date_to":"2023-11-23T01:00:46.219Z","destination":"61c5c1a6-c21b-4cb4-8b84-ee3e9ac6e0ba","is_favorite":false,"offers":["046f7c12-c8be-4b02-86a6-b495c3604ac1","70fcb5ed-ec63-40b4-ade5-8495a6fa76e7","4e5da8b4-77d6-4a0e-8e58-76ec661e0e1d","632b14df-deef-4b0b-bcbc-c01f1c3c9bbf"],"type":"flight"},{"id":"fa78d188-78f4-4740-b25a-b0df2bef536e","base_price":7422,"date_from":"2023-11-24T04:21:46.219Z","date_to":"2023-11-25T16:40:46.219Z","destination":"475d8024-a42e-4c08-8097-3418582e0c92","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"d2596c1b-0ac2-44cc-b28b-6dfe33eb5b30","base_price":7996,"date_from":"2023-11-26T16:59:46.219Z","date_to":"2023-11-27T20:06:46.219Z","destination":"ae164b95-3fb6-4b62-a199-1f4667bdccfe","is_favorite":true,"offers":["fbd482c6-5f3a-40f1-af3b-efec84f5b6e8","da9c8399-d1f0-43e2-beba-d93d1f7d43d3","046f7c12-c8be-4b02-86a6-b495c3604ac1","70fcb5ed-ec63-40b4-ade5-8495a6fa76e7","4e5da8b4-77d6-4a0e-8e58-76ec661e0e1d","632b14df-deef-4b0b-bcbc-c01f1c3c9bbf"],"type":"flight"},{"id":"608f09d1-5ea0-48d9-9f67-bdc692dfe4c8","base_price":3984,"date_from":"2023-11-28T13:26:46.219Z","date_to":"2023-11-29T03:53:46.219Z","destination":"ebf990a3-0dc9-487c-beb3-abc102987513","is_favorite":true,"offers":["2fbd340c-a1de-4154-a034-a25b13f7c922","fdd0411b-b990-44be-b2ae-2bb59012c6f8","38ee3051-2cb6-40f7-84e6-87fd82f6c819","84ce2a2c-42d6-488d-97b0-12ca27f102ee","90d84597-0f1b-441d-9ed5-6ad9e47c4c27"],"type":"taxi"},{"id":"f0dcba00-4167-43a2-83dc-258b103addab","base_price":6700,"date_from":"2023-11-29T11:28:46.219Z","date_to":"2023-11-30T16:49:46.219Z","destination":"db980a76-5370-4a01-9c13-2e8a223a0233","is_favorite":false,"offers":["2fbd340c-a1de-4154-a034-a25b13f7c922","fdd0411b-b990-44be-b2ae-2bb59012c6f8","38ee3051-2cb6-40f7-84e6-87fd82f6c819","84ce2a2c-42d6-488d-97b0-12ca27f102ee","90d84597-0f1b-441d-9ed5-6ad9e47c4c27"],"type":"taxi"},{"id":"5e79da91-caa3-4567-baf3-dfa51b2e5b81","base_price":1391,"date_from":"2023-12-02T13:25:46.219Z","date_to":"2023-12-03T08:59:46.219Z","destination":"6800abca-2783-4958-a8ec-c9cd0d03c963","is_favorite":false,"offers":["af03fe60-94c0-400c-a9f5-d1388be9fdaa","7fcbf528-05ad-4490-b349-c04b0bcb60ca","94dd5c00-4c10-47e4-8828-1679e7702742","c8552dae-a71d-44c9-86ee-0ccd7f38b838","f9fd572c-f464-4482-bd66-8f41f366a20b"],"type":"check-in"},{"id":"2b22319e-4d2b-4109-a93a-e62b5c5866ec","base_price":8152,"date_from":"2023-12-04T02:23:46.219Z","date_to":"2023-12-05T22:57:46.219Z","destination":"ae164b95-3fb6-4b62-a199-1f4667bdccfe","is_favorite":false,"offers":["d54dfeed-a504-423e-bbb0-676265ef908b","2f3e7751-a364-471b-b347-94ad20cf41d6"],"type":"drive"}]'),Z=JSON.parse('[{"id":"ebf990a3-0dc9-487c-beb3-abc102987513","description":"Oslo - with an embankment of a mighty river as a centre of attraction","name":"Oslo","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Oslo in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Oslo in a middle of Europe"}]},{"id":"4cd4a6ee-6bbf-4066-b90f-749ce7bd958b","description":"Nagasaki - with crowded streets","name":"Nagasaki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Nagasaki in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Nagasaki full of of cozy canteens where you can try the best coffee in the Middle East"},{"src":"https://21.objects.pages.academy/static/destinations/10.jpg","description":"Nagasaki with a beautiful old town"}]},{"id":"61c5c1a6-c21b-4cb4-8b84-ee3e9ac6e0ba","description":"Berlin - with a beautiful old town","name":"Berlin","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/16.jpg","description":"Berlin middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Berlin for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Berlin with an embankment of a mighty river as a centre of attraction"}]},{"id":"db980a76-5370-4a01-9c13-2e8a223a0233","description":"Rotterdam - with crowded streets","name":"Rotterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Rotterdam a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Rotterdam in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Rotterdam famous for its crowded street markets with the best street food in Asia"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Rotterdam with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Rotterdam in a middle of Europe"}]},{"id":"48e0c8cf-8160-4b75-921b-c63e84cab2b0","description":"Chamonix - a true asian pearl","name":"Chamonix","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Chamonix for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Chamonix a perfect place to stay with a family"}]},{"id":"6a91bc45-57e5-4df3-8f96-344fc86c5db1","description":"","name":"Geneva","pictures":[]},{"id":"ae164b95-3fb6-4b62-a199-1f4667bdccfe","description":"Vien - a true asian pearl","name":"Vien","pictures":[]},{"id":"355b973f-9646-444d-9d4c-7a16652f7d63","description":"","name":"Naples","pictures":[]},{"id":"6800abca-2783-4958-a8ec-c9cd0d03c963","description":"Venice - a perfect place to stay with a family","name":"Venice","pictures":[]},{"id":"475d8024-a42e-4c08-8097-3418582e0c92","description":"Tokio - with a beautiful old town","name":"Tokio","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Tokio in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Tokio for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Tokio is a beautiful city"}]}]'),O=JSON.parse('[{"type":"taxi","offers":[{"id":"2fbd340c-a1de-4154-a034-a25b13f7c922","title":"Upgrade to a business class","price":128},{"id":"fdd0411b-b990-44be-b2ae-2bb59012c6f8","title":"Choose the radio station","price":46},{"id":"38ee3051-2cb6-40f7-84e6-87fd82f6c819","title":"Choose temperature","price":155},{"id":"84ce2a2c-42d6-488d-97b0-12ca27f102ee","title":"Drive quickly, I\'m in a hurry","price":107},{"id":"90d84597-0f1b-441d-9ed5-6ad9e47c4c27","title":"Drive slowly","price":52}]},{"type":"bus","offers":[{"id":"e0bbc9f9-f2ff-401a-984d-f7a9b761e25e","title":"Infotainment system","price":34},{"id":"47442923-5af9-4be4-bf4b-62f7fbbde4b9","title":"Order meal","price":199},{"id":"3b04209a-b8bb-42a0-9799-5006b1ebc35d","title":"Choose seats","price":98}]},{"type":"train","offers":[{"id":"8ed81622-a2f6-4a08-bf2b-09e6997479d8","title":"Book a taxi at the arrival point","price":155},{"id":"2403fb9a-9cef-4c9f-a897-8ba9a24c61d1","title":"Order a breakfast","price":35},{"id":"5bc3c4f6-a6ec-4c59-962e-775a30dfb3da","title":"Wake up at a certain time","price":113}]},{"type":"flight","offers":[{"id":"fbd482c6-5f3a-40f1-af3b-efec84f5b6e8","title":"Choose meal","price":178},{"id":"da9c8399-d1f0-43e2-beba-d93d1f7d43d3","title":"Choose seats","price":137},{"id":"046f7c12-c8be-4b02-86a6-b495c3604ac1","title":"Upgrade to comfort class","price":151},{"id":"70fcb5ed-ec63-40b4-ade5-8495a6fa76e7","title":"Upgrade to business class","price":54},{"id":"4e5da8b4-77d6-4a0e-8e58-76ec661e0e1d","title":"Add luggage","price":104},{"id":"632b14df-deef-4b0b-bcbc-c01f1c3c9bbf","title":"Business lounge","price":68}]},{"type":"check-in","offers":[{"id":"af03fe60-94c0-400c-a9f5-d1388be9fdaa","title":"Choose the time of check-in","price":168},{"id":"7fcbf528-05ad-4490-b349-c04b0bcb60ca","title":"Choose the time of check-out","price":78},{"id":"94dd5c00-4c10-47e4-8828-1679e7702742","title":"Add breakfast","price":173},{"id":"c8552dae-a71d-44c9-86ee-0ccd7f38b838","title":"Laundry","price":93},{"id":"f9fd572c-f464-4482-bd66-8f41f366a20b","title":"Order a meal from the restaurant","price":92}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"08378345-1665-422f-aca7-23306c109b66","title":"Choose meal","price":118},{"id":"a348542c-eb10-4a9f-abb1-8c45f2ccd51f","title":"Choose seats","price":193},{"id":"bf1631a3-a582-41a7-b3d9-80e07e201e5b","title":"Upgrade to comfort class","price":145},{"id":"e5715d31-8aca-432b-af1f-8b27f9d7d5a1","title":"Upgrade to business class","price":151},{"id":"7fdb884e-46c5-4f44-8cb2-db13e39960b0","title":"Add luggage","price":42},{"id":"9690669e-2f9b-4e8b-84c2-ae638ac159ad","title":"Business lounge","price":168}]},{"type":"drive","offers":[{"id":"d54dfeed-a504-423e-bbb0-676265ef908b","title":"With automatic transmission","price":32},{"id":"2f3e7751-a364-471b-b347-94ad20cf41d6","title":"With air conditioning","price":116}]},{"type":"restaurant","offers":[{"id":"0518b428-9a65-4e8c-9902-0e30793d15b0","title":"Choose live music","price":179},{"id":"f5fa09a1-f105-410c-b0c1-5b1d65cef4f8","title":"Choose VIP area","price":200}]}]');class E extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(e){const t=this.getUrl();t.search="",Object.keys(e).forEach((s=>{t.searchParams.set(s,e[s])})),window.history.pushState(null,"",t.href),this.dispatchEvent(new Event("change"))}getParams(){const e=this.getUrl();return Object.fromEntries(e.searchParams)}getUrl(){return new URL(window.location.href)}}const j=new E,P=class{constructor(e,t){this.view=e,this.model=t,this.navigation=j,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){this.updateView()}},F=class extends P{constructor(...e){super(...e)}updateView(){this.view.render()}},I=class extends P{constructor(...e){super(...e)}updateView(){const e=["everything","future","present","past"].map((e=>({value:e,isSelected:"everything"===e,isDisabled:"future"===e})));this.view.setState({items:e})}},L=class extends P{constructor(...e){super(...e)}updateView(){this.view.render()}},B=class extends P{constructor(...e){super(...e),this.view.addEventListener("change",this.onViewChange.bind(this))}updateView(){const{sort:e="day"}=this.navigation.getParams(),t=["day","event","time","price","offers"].map((t=>({value:t,isSelected:t===e,isDisabled:"event"===t||"offers"===t})));this.view.setState({items:t})}onViewChange(e){const t=this.navigation.getParams();t.sort=e.target.value,delete t.edit,this.navigation.setParams(t)}},Y=class extends P{constructor(...e){super(...e),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this)),this.view.addEventListener("favorite",this.onViewFavorite.bind(this))}updateView(){const e=this.navigation.getParams(),t=this.model.getPoints(e),s=this.model.getDestinations(),i=this.model.getOfferGroups(),a=t.map((t=>{const{offers:a}=i.find((e=>e.type===t.type));return{id:t.id,types:i.map((e=>({value:e.type,isSelected:e.type===t.type}))),destinations:s.map((e=>({...e,isSelected:e.id===t.destinationId}))),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offers:a.map((e=>({...e,isSelected:t.offerIds?.includes(e.id)}))),isFavorite:t.isFavorite,isEditable:e.edit===t.id}}));this.view.setState({items:a})}createPoint(e){const t=this.model.createPoint();return Object.assign(t,{id:e.id,type:e.types.find((e=>e.isSelected)).value,destinationId:e.destinations.find((e=>e.isSelected))?.id,dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:e.basePrice,offerIds:e.offers.filter((e=>e.isSelected)).map((e=>e.id)),isFavorite:e.isFavorite}),t}onViewOpen(e){const t=this.navigation.getParams();t.edit=e.target.state.id,this.navigation.setParams(t)}onViewClose(){const e=this.navigation.getParams();delete e.edit,this.navigation.setParams(e)}async onViewFavorite(e){const t=e.target;t.state.isFavorite=!t.state.isFavorite,await this.model.updatePoint(this.createPoint(t.state)),t.render()}},N=new class extends D{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[],this.sortCallbacks={day:(e,t)=>e.dateFromInMs-t.dateFromInMs,event:()=>0,time:(e,t)=>t.durationInMs-e.durationInMs,price:(e,t)=>t.basePrice-e.basePrice,offers:()=>0}}async ready(){this.points=A,this.destinations=Z,this.offerGroups=O}getPoints(e={}){const t=this.sortCallbacks.day,s=this.sortCallbacks[e.sort]??t;return this.points.map(this.createPoint).sort(s)}createPoint(e=Object.create(null)){return new x(e)}async updatePoint(e){const t=e.toJSON(),s=this.points.findIndex((e=>e.id===t.id));this.points.splice(s,1,t)}getDestinations(){return structuredClone(this.destinations)}getOfferGroups(){return structuredClone(this.offerGroups)}};N.ready().then((()=>{new F(document.querySelector("brief-view"),N),new I(document.querySelector("filter-view"),N),new L(document.querySelector("add-button-view"),N),new B(document.querySelector("sort-view"),N),new Y(document.querySelector("list-view"),N)}))})()})();
//# sourceMappingURL=bundle.c9fef6809a88e61c1797.js.map