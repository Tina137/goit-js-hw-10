import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as b}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".start-button"),c=document.querySelector("#datetime-picker");function h(t){const e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:n,minutes:l,seconds:m}}function p(t){t.textContent=t.textContent.padStart(2,"0")}let a;const i=new Date,y={enableTime:!0,time_24hr:!0,defaultDate:i,minuteIncrement:1,onClose(t){a=t[0],a<=i?(b.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),o.setAttribute("disabled","")):(o.removeAttribute("disabled"),o.addEventListener("click",u=>{let s=setInterval(()=>{let r=h(a.getTime()-new Date().getTime());document.querySelectorAll(".value").forEach(e=>{for(const n of Object.keys(r))Object.keys(e.dataset)[0]===n&&(o.setAttribute("disabled",""),c.setAttribute("disabled",""),e.textContent=r[n],p(e),e.textContent<0&&(clearInterval(s),o.removeAttribute("disabled"),c.removeAttribute("disabled"),e.textContent="00"))})},1e3)})),console.log(t[0],i)}};f("#datetime-picker",y);
//# sourceMappingURL=1-timer.js.map
