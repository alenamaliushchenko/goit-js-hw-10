import{f as y,i as h}from"./vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m=document.getElementById("datetime-picker"),i=document.getElementById("data-start"),d={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r=null,f=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){r=o[0],!r||r<=new Date?(h.warning({icon:"",messageColor:"white",position:"topRight",messageSize:"10px",backgroundColor:"red",message:"Please choose a date in the future"}),i.disabled=!0):i.disabled=!1}};y(m,b);i.addEventListener("click",()=>{if(!r||r<=new Date){h.show({icon:"",messageColor:"white",position:"topRight",messageSize:"10px",backgroundColor:"red",message:"Please choose a date in the future"});return}clearInterval(f),f=setInterval(()=>{const n=r-new Date;if(n<=0){clearInterval(f),i.disabled=!1,m.disabled=!1;return}const{days:c,hours:s,minutes:e,seconds:t}=l(n);d.days.textContent=u(c),d.hours.textContent=u(s),d.minutes.textContent=u(e),d.seconds.textContent=u(t)},1e3),i.disabled=!0,m.disabled=!0});function l(o){const t=Math.floor(o/864e5),a=Math.floor(o%864e5/36e5),g=Math.floor(o%864e5%36e5/6e4),p=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:a,minutes:g,seconds:p}}function u(o){return String(o).padStart(2,"0")}console.log(l(2e3));console.log(l(14e4));console.log(l(2414e4));
//# sourceMappingURL=1-timer-39b54b87.js.map
