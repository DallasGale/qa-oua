import{j as t}from"./jsx-runtime.B6Po9dQa.js";import{r as p}from"./index.DzGH6zwW.js";import{u as g}from"./useUtagTracking.Ba3vyx_k.js";const x="_inputWrapper_12kx1_1",_="_fieldset_12kx1_37",k="_form_12kx1_45",f="_customCheckbox_12kx1_51",C="_checkmark_12kx1_76",y="_ctaContainer_12kx1_126",b="_buttonContainer_12kx1_138",j="_icon_12kx1_146",s={inputWrapper:x,fieldset:_,form:k,customCheckbox:f,checkmark:C,ctaContainer:y,buttonContainer:b,icon:j},m=({id:h,label:u,onChange:a,handleKeyDown:c})=>t.jsx("div",{className:s.inputWrapper,children:t.jsxs("label",{htmlFor:h,className:s.customCheckbox,children:[u,t.jsx("input",{type:"checkbox",id:h,name:"quiz",onChange:r=>a(r),onKeyDown:c}),t.jsx("span",{className:s.checkmark})]})}),v={src:"/_astro/arrow_right_alt.DTFzI7YL.svg",width:28,height:21,format:"svg"},z=()=>{const{trackEvent:h,isUtagReady:u}=g(),[a,c]=p.useState([]);function r(e){const{checked:o,id:n}=e.target;c(o?[...a,n]:a.filter(i=>i!==n))}function d(e){e.preventDefault(),console.log("Primary Quiz button clicked");const o=()=>window.location.pathname||"";let n="";if(a.length>0){const i=new URLSearchParams;i.set("studyRationale",a.join("%2C")),n=`/help-me-choose${`${`?${i.toString()}`.split("%252C")}`}`}else n="/help-me-choose?studyRationale";h({ga_event_category:"Help me choose",ga_event_action:"Click - continue to quiz",ga_event_label:o()},()=>{setTimeout(()=>{console.log("Analytics completed, navigating..."),window.location.href=n},1e3)})}const l=e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();const o=e.target,n=!o.checked;o.checked=n,c(n?[...a,o.id]:a.filter(i=>i!==o.id))}};return t.jsxs("form",{onSubmit:e=>d(e),className:s.form,children:[t.jsxs("fieldset",{className:s.fieldset,children:[t.jsx(m,{label:"Start my career",id:"startMyCareer",onChange:e=>r(e),handleKeyDown:l}),t.jsx(m,{label:"Continue my love of learning",id:"continueMyLoveOfLearning",onChange:e=>r(e),handleKeyDown:l}),t.jsx(m,{label:"Change my career",id:"changeMyCareer",onChange:e=>r(e),handleKeyDown:l}),t.jsx(m,{label:"Progress my career",id:"progressInMyCareer",onChange:e=>r(e),handleKeyDown:l}),t.jsx(m,{label:"Not sure yet",id:"notSureYet",onChange:e=>r(e),handleKeyDown:l})]}),t.jsx("div",{className:`cta-container ${s.ctaContainer}`,style:{marginTop:0},children:t.jsx("button",{type:"submit",className:"primary-cta",id:"start-hmc-primary-btn",children:t.jsxs("div",{className:s.buttonContainer,children:[t.jsx("span",{children:"Continue to quiz"}),t.jsx("span",{className:s.icon,style:{marginRight:5,backgroundImage:`url(${v.src})`}})]})})})]})};export{z as default};