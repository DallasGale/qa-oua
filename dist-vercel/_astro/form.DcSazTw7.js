import{j as t}from"./jsx-runtime.7faW4zRM.js";import{r as d}from"./index.DhYZZe0J.js";const p="_inputWrapper_1bkta_1",g="_fieldset_1bkta_37",k="_form_1bkta_45",b="_customCheckbox_1bkta_51",f="_checkmark_1bkta_76",C="_ctaContainer_1bkta_126",x="_buttonContainer_1bkta_138",_="_icon_1bkta_146",r={inputWrapper:p,fieldset:g,form:k,customCheckbox:b,checkmark:f,ctaContainer:C,buttonContainer:x,icon:_},l=({id:n,label:c,onChange:s,handleKeyDown:h})=>t.jsx("div",{className:r.inputWrapper,children:t.jsxs("label",{htmlFor:n,className:r.customCheckbox,children:[c,t.jsx("input",{type:"checkbox",id:n,name:"quiz",onChange:o=>s(o),onKeyDown:h}),t.jsx("span",{className:r.checkmark})]})}),j={src:"/_astro/arrow_right_alt.DTFzI7YL.svg",width:28,height:21,format:"svg"},S=()=>{const[n,c]=d.useState([]);function s(e){const{checked:a,id:i}=e.target;c(a?[...n,i]:n.filter(m=>m!==i))}function h(e){if(e.preventDefault(),n.length>0){const a=new URLSearchParams;a.set("studyRationale",n.join("%2C")),console.log({params:a});const u=`${`${window.location.pathname}?${a.toString()}`.split("%252C")}`;console.log({parsedUrl:u}),window.location.replace(u)}}const o=e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();const a=e.target,i=!a.checked;a.checked=i,c(i?[...n,a.id]:n.filter(m=>m!==a.id))}};return t.jsxs("form",{onSubmit:e=>h(e),className:r.form,children:[t.jsxs("fieldset",{className:r.fieldset,children:[t.jsx(l,{label:"Start my career",id:"startMyCareer",onChange:e=>s(e),handleKeyDown:o}),t.jsx(l,{label:"Continue my love of learning",id:"continueMyLoveOfLearning",onChange:e=>s(e),handleKeyDown:o}),t.jsx(l,{label:"Change my career",id:"changeMyCareer",onChange:e=>s(e),handleKeyDown:o}),t.jsx(l,{label:"Improve a specific skill",id:"improveASpecificSkill",onChange:e=>s(e),handleKeyDown:o}),t.jsx(l,{label:"Progress my career",id:"progressInMyCareer",onChange:e=>s(e),handleKeyDown:o}),t.jsx(l,{label:"Not sure yet",id:"notSureYet",onChange:e=>s(e),handleKeyDown:o})]}),t.jsx("div",{className:`cta-container ${r.ctaContainer}`,style:{marginTop:0},children:t.jsx("button",{type:"submit",className:"primary-cta",children:t.jsx("div",{className:r.buttonContainer,children:n.length?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Continue to quiz"}),t.jsx("span",{className:r.icon,style:{marginRight:5,backgroundImage:`url(${j.src})`}})]}):"Select an answer to continue to quiz"})})})]})};export{S as default};