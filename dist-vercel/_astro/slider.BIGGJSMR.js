import{j as s}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";import{a as l}from"./index.95d291e9.LoGSc8I9.js";const h=({logos:a})=>{const o=n.useRef(null),e=r=>{const t=o.current,c=200;if(t){const i=t.scrollLeft+(r==="right"?c:-c);t.scrollTo({left:i,behavior:"smooth"})}};return s.jsxs("div",{className:l.logosContainer,children:[s.jsx("div",{className:l.logos,ref:o,children:s.jsx("div",{className:l.logoSlider,children:a.map((r,t)=>s.jsx("picture",{className:l.picture,children:s.jsx("img",{className:l.logo,src:r.src,alt:r.alt,title:r.alt})},t))})}),s.jsxs("div",{className:l.scrollButtons,children:[s.jsx("button",{onClick:()=>e("left"),className:`${l.scrollButton} ${l.scrollLeft}`,"aria-label":"Scroll left",children:"left"}),s.jsx("button",{onClick:()=>e("right"),className:`${l.scrollButton} ${l.scrollRight}`,"aria-label":"Scroll right",children:"right"})]})]})};export{h as default};
