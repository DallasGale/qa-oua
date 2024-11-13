import{j as s}from"./jsx-runtime.7faW4zRM.js";import{r as v}from"./index.DhYZZe0J.js";import{a as i,b as h}from"./index.95d291e9.BFrc6fiC.js";const U={src:"/_astro/quote_mark.CROtkvdD.svg",width:27,height:26,format:"svg"},S=v.forwardRef(({testimonial:e,authorAvatar:a,authorName:n,authorStatus:c,authorAlt:d,order:r,modifier:o},t)=>{const l={1:i["testimonial-1"],2:i["testimonial-2"],3:i["testimonial-3"]};return s.jsx("div",{className:`${i.cardContainer} ${o}`,ref:t,style:{zIndex:r},children:s.jsx("div",{id:r,className:`${i.testimonialCard} ${l[r]}`,"data-order":r,children:s.jsxs("div",{className:i.testimonialCardBackground,children:[s.jsx("span",{className:`${i.quoteMark} ${i.quoteMarkBelowTablet}`,style:{backgroundImage:`url(${U.src})`}}),s.jsx("blockquote",{className:i.blockquote,children:s.jsxs("div",{className:i.content,children:[s.jsx("img",{className:i.avatar,src:a,alt:n,title:d}),s.jsxs("div",{className:i.body,children:[s.jsx("span",{className:`${i.quoteMark} ${i.quoteMarkAboveTablet}`,style:{backgroundImage:`url(${U.src})`}})," ",s.jsx("div",{className:`display-3 ${i.testimonial}`,dangerouslySetInnerHTML:{__html:e}}),s.jsxs("cite",{children:[s.jsx("p",{className:`display-4 ${i.name}`,children:n}),s.jsx("p",{className:`paragraph ${i.status}`,children:c})]})]})]})})]})})})});S.displayName="Testimonial";const k={src:"/_astro/testimonialAvatars.C55Edvw0.png",width:656,height:189,format:"png"},C={src:"/_astro/jason.P5UN66JF.png",width:620,height:776,format:"png"},T={src:"/_astro/mariam.DAqsoAyE.png",width:620,height:776,format:"png"},q={src:"/_astro/sophie.BrWBlW9r.png",width:620,height:776,format:"png"};var M=new Map,y=new WeakMap,R=0,_=void 0;function D(e){return e?(y.has(e)||(R+=1,y.set(e,R.toString())),y.get(e)):"0"}function V(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?D(e.root):e[a]}`).toString()}function B(e){const a=V(e);let n=M.get(a);if(!n){const c=new Map;let d;const r=new IntersectionObserver(o=>{o.forEach(t=>{var l;const u=t.isIntersecting&&d.some(m=>t.intersectionRatio>=m);e.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=u),(l=c.get(t.target))==null||l.forEach(m=>{m(u,t)})})},e);d=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:a,observer:r,elements:c},M.set(a,n)}return n}function O(e,a,n={},c=_){if(typeof window.IntersectionObserver>"u"&&c!==void 0){const l=e.getBoundingClientRect();return a(c,{isIntersecting:c,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:d,observer:r,elements:o}=B(n),t=o.get(e)||[];return o.has(e)||o.set(e,t),t.push(a),r.observe(e),function(){t.splice(t.indexOf(a),1),t.length===0&&(o.delete(e),r.unobserve(e)),o.size===0&&(r.disconnect(),M.delete(d))}}function I({threshold:e,delay:a,trackVisibility:n,rootMargin:c,root:d,triggerOnce:r,skip:o,initialInView:t,fallbackInView:l,onChange:u}={}){var m;const[f,b]=v.useState(null),g=v.useRef(),[x,A]=v.useState({inView:!!t,entry:void 0});g.current=u,v.useEffect(()=>{if(o||!f)return;let w;return w=O(f,($,N)=>{A({inView:$,entry:N}),g.current&&g.current($,N),N.isIntersecting&&r&&w&&(w(),w=void 0)},{root:d,rootMargin:c,threshold:e,trackVisibility:n,delay:a},l),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,f,d,c,r,o,n,l,a]);const j=(m=x.entry)==null?void 0:m.target,E=v.useRef();!f&&j&&!r&&!o&&E.current!==j&&(E.current=j,A({inView:!!t,entry:void 0}));const p=[b,x.inView,x.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const W=()=>{const[e,a]=v.useState(0),[n,c]=v.useState({card1Scaled:!1,card2Scaled:!1}),[d,r]=I({threshold:.5}),[o,t]=I({threshold:.5}),[l,u]=I({threshold:.5});console.log({inView1:r,inView2:t,inView3:u}),v.useEffect(()=>{const f=()=>{const b=window.scrollY,g=b>e;console.log({scrollingDown:g}),c(x=>({card1Scaled:g?t||u:t,card2Scaled:u})),a(b)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>{window.removeEventListener("scroll",f)}},[e,r,t,u]);const m={1:h["scaleDown-1"],2:h["scaleDown-2"],3:h["scaleDown-3"]};return s.jsxs("section",{className:h.section,children:[s.jsx("img",{className:h.avatars,src:k.src,alt:"Student advisors Nabila, Matthew, Maria & Eddie",title:"Student advisors Nabila, Matthew, Maria & Eddie"}),s.jsxs("h3",{className:"display-2",children:["We’ve helped ",s.jsx("span",{className:h.highlight,children:"500,000+"})," students enrol since 1993"]}),s.jsx("div",{className:h.wrapper,children:s.jsxs("div",{className:h.testimonialsContainer,children:[s.jsx(S,{ref:d,modifier:n.card1Scaled?m[1]:h.scaleUp,order:"1",testimonial:'<p>"I wanted to take the next step in my career. I hadn’t gone to uni before and it’s been a long time since I was at high school. <strong>Open Universities Australia helped me figure out how to get to my longer term goals.</strong>"</p>',authorAvatar:C.src,authorAlt:"Jason, student enrolled at La Trobe University",authorName:"Jason",authorStatus:"Enrolled at La Trobe University"}),s.jsx(S,{ref:o,modifier:n.card2Scaled?m[2]:h.scaleUp,order:"2",testimonial:'<p>"I’d given up on studies and had no idea what I was going to do next. Until I spoke to a student advisor. <strong>She worked out a plan to help me get into what I wanted to do.</strong> I was really lost before that."</p>',authorAvatar:T.src,authorAlt:"Mariam, student enrolled at University of Tasmania",authorName:"Mariam",authorStatus:"Enrolled at University of Tasmania"}),s.jsx(S,{ref:l,modifier:"",order:"3",testimonial:'<p>"I always knew that I liked science, but <strong>Open Universities Australia helped me narrow down what field I wish to study after high school.</strong> And since it was all online it was nice and flexible."</p>',authorAvatar:q.src,authorAlt:"Sophie, student enrolled at Murdoch University & Macquarie University",authorName:"Sophie",authorStatus:"Enrolled at Murdoch University & Macquarie University"})]})})]})};export{W as default};
