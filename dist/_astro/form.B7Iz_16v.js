import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as u}from"./index.DhYZZe0J.js";import{s as n}from"./index.95d291e9.C25tmnWl.js";const r=({id:t,label:l,onChange:a})=>e.jsx("div",{className:n.inputWrapper,children:e.jsxs("label",{htmlFor:t,className:n.customCheckbox,children:[l,e.jsx("input",{type:"checkbox",id:t,name:"quiz",onChange:i=>a(i)}),e.jsx("span",{className:n.checkmark})]})}),x=()=>{const[t,l]=u.useState([]);function a(s){const{checked:c,id:o}=s.target;l(c?[...t,o]:t.filter(m=>m!==o))}function i(s){s.preventDefault(),console.log({selectedValues:t})}return e.jsxs("form",{onSubmit:s=>i(s),className:n.form,children:[e.jsxs("fieldset",{className:n.fieldset,children:[e.jsx(r,{label:"Start my career",id:"start_my_career",onChange:s=>a(s)}),e.jsx(r,{label:"Continue my love of learning",id:"continue_my_love_of_learning",onChange:s=>a(s)}),e.jsx(r,{label:"Change my career",id:"change_my_career",onChange:s=>a(s)}),e.jsx(r,{label:"Improve a specific skill",id:"improve_a_specific_skill",onChange:s=>a(s)}),e.jsx(r,{label:"Progress my career",id:"progress_my_career",onChange:s=>a(s)}),e.jsx(r,{label:"Not sure yet",id:"not_sure_yet",onChange:s=>a(s)})]}),e.jsx("div",{className:`cta-container ${n.ctaContainer}`,style:{marginTop:0},children:e.jsx("button",{type:"submit",className:"primary-cta",children:e.jsx("div",{className:n.buttonContainer,children:t.length?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Continue to quiz"}),e.jsx("span",{className:n.icon,style:{marginRight:5}})]}):"Select an answer to continue to quiz"})})})]})};export{x as default};
