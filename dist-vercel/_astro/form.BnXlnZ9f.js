import{j as t}from"./jsx-runtime.7faW4zRM.js";import{r as u}from"./index.DhYZZe0J.js";const d="_inputWrapper_12kx1_1",p="_fieldset_12kx1_37",x="_form_12kx1_45",k="_customCheckbox_12kx1_51",f="_checkmark_12kx1_76",g="_ctaContainer_12kx1_126",C="_buttonContainer_12kx1_138",_="_icon_12kx1_146",r={inputWrapper:d,fieldset:p,form:x,customCheckbox:k,checkmark:f,ctaContainer:g,buttonContainer:C,icon:_},m=({id:n,label:c,onChange:a,handleKeyDown:h})=>t.jsx("div",{className:r.inputWrapper,children:t.jsxs("label",{htmlFor:n,className:r.customCheckbox,children:[c,t.jsx("input",{type:"checkbox",id:n,name:"quiz",onChange:o=>a(o),onKeyDown:h}),t.jsx("span",{className:r.checkmark})]})}),b={src:"/_astro/arrow_right_alt.DTFzI7YL.svg",width:28,height:21,format:"svg"},S=()=>{const[n,c]=u.useState([]);function a(e){const{checked:s,id:i}=e.target;c(s?[...n,i]:n.filter(l=>l!==i))}function h(e){if(e.preventDefault(),n.length>0){const s=new URLSearchParams;s.set("studyRationale",n.join("%2C"));const l=`${`?${s.toString()}`.split("%252C")}`;console.log({parsedUrl:l}),window.location.href=`/help-me-choose${l}`}}const o=e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();const s=e.target,i=!s.checked;s.checked=i,c(i?[...n,s.id]:n.filter(l=>l!==s.id))}};return t.jsxs("form",{onSubmit:e=>h(e),className:r.form,children:[t.jsxs("fieldset",{className:r.fieldset,children:[t.jsx(m,{label:"Start my career",id:"startMyCareer",onChange:e=>a(e),handleKeyDown:o}),t.jsx(m,{label:"Continue my love of learning",id:"continueMyLoveOfLearning",onChange:e=>a(e),handleKeyDown:o}),t.jsx(m,{label:"Change my career",id:"changeMyCareer",onChange:e=>a(e),handleKeyDown:o}),t.jsx(m,{label:"Improve a specific skill",id:"improveASpecificSkill",onChange:e=>a(e),handleKeyDown:o}),t.jsx(m,{label:"Progress my career",id:"progressInMyCareer",onChange:e=>a(e),handleKeyDown:o}),t.jsx(m,{label:"Not sure yet",id:"notSureYet",onChange:e=>a(e),handleKeyDown:o})]}),t.jsx("div",{className:`cta-container ${r.ctaContainer}`,style:{marginTop:0},children:t.jsx("button",{type:"submit",className:"primary-cta",children:t.jsx("div",{className:r.buttonContainer,children:n.length?t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Continue to quiz"}),t.jsx("span",{className:r.icon,style:{marginRight:5,backgroundImage:`url(${b.src})`}})]}):"Select an answer to continue to quiz"})})})]})};export{S as default};
