import $ from"jquery";const Util=(e=>{let t=!1;const n={TRANSITION_END:"bsTransitionEnd",getUID(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement(t){let n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||""),"#"===n.charAt(0)&&(n=function(t){return"function"==typeof e.escapeSelector?e.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(n));try{return e(document).find(n).length>0?n:null}catch(e){return null}},reflow:e=>e.offsetHeight,triggerTransitionEnd(n){e(n).trigger(t.end)},supportsTransitionEnd:()=>Boolean(t),isElement:e=>(e[0]||e).nodeType,typeCheckConfig(e,t,r){for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o)){const s=r[o],a=t[o],l=a&&n.isElement(a)?"element":(i=a,{}.toString.call(i).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(s).test(l))throw new Error(e.toUpperCase()+": "+`Option "${o}" provided type "${l}" `+`but expected type "${s}".`)}var i}};return t=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},e.fn.emulateTransitionEnd=function(t){let r=!1;return e(this).one(n.TRANSITION_END,(()=>{r=!0})),setTimeout((()=>{r||n.triggerTransitionEnd(this)}),t),this},n.supportsTransitionEnd()&&(e.event.special[n.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),n})($);export default Util;
