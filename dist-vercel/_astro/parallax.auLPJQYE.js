import{j as s}from"./jsx-runtime.7faW4zRM.js";import{r as v}from"./index.DhYZZe0J.js";import{b as o,c as h}from"./index.95d291e9.bfmZAe5j.js";const U={src:"/_astro/quote_mark.CROtkvdD.svg",width:27,height:26,format:"svg"},S=v.forwardRef(({testimonial:e,authorAvatar:r,authorName:n,authorStatus:c,authorAlt:d,order:a,modifier:i},t)=>{const l={1:o["testimonial-1"],2:o["testimonial-2"],3:o["testimonial-3"]};return s.jsx("div",{className:`${o.cardContainer} ${i}`,ref:t,style:{zIndex:a},children:s.jsx("div",{id:a,className:`${o.testimonialCard} ${l[a]}`,"data-order":a,children:s.jsxs("div",{className:o.testimonialCardBackground,children:[s.jsx("span",{className:`${o.quoteMark} ${o.quoteMarkBelowTablet}`,style:{backgroundImage:`url(${U.src})`}}),s.jsx("blockquote",{className:o.blockquote,children:s.jsxs("div",{className:o.content,children:[s.jsx("img",{className:o.avatar,src:r,alt:n,title:d}),s.jsxs("div",{className:o.body,children:[s.jsx("span",{className:`${o.quoteMark} ${o.quoteMarkAboveTablet}`,style:{backgroundImage:`url(${U.src})`}})," ",s.jsx("div",{className:`display-3 ${o.testimonial}`,dangerouslySetInnerHTML:{__html:e}}),s.jsxs("cite",{children:[s.jsx("p",{className:`display-4 ${o.name}`,children:n}),s.jsx("p",{className:`paragraph ${o.status}`,children:c})]})]})]})})]})})})});S.displayName="Testimonial";const T={src:"/_astro/testimonialAvatars.C55Edvw0.png",width:656,height:189,format:"png"},k={src:"/_astro/jason.P5UN66JF.png",width:620,height:776,format:"png"},C={src:"/_astro/mariam.DAqsoAyE.png",width:620,height:776,format:"png"},q={src:"/_astro/sophie.BrWBlW9r.png",width:620,height:776,format:"png"};var A=new Map,y=new WeakMap,R=0,_=void 0;function D(e){return e?(y.has(e)||(R+=1,y.set(e,R.toString())),y.get(e)):"0"}function V(e){return Object.keys(e).sort().filter(r=>e[r]!==void 0).map(r=>`${r}_${r==="root"?D(e.root):e[r]}`).toString()}function B(e){const r=V(e);let n=A.get(r);if(!n){const c=new Map;let d;const a=new IntersectionObserver(i=>{i.forEach(t=>{var l;const u=t.isIntersecting&&d.some(m=>t.intersectionRatio>=m);e.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=u),(l=c.get(t.target))==null||l.forEach(m=>{m(u,t)})})},e);d=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:r,observer:a,elements:c},A.set(r,n)}return n}function O(e,r,n={},c=_){if(typeof window.IntersectionObserver>"u"&&c!==void 0){const l=e.getBoundingClientRect();return r(c,{isIntersecting:c,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:d,observer:a,elements:i}=B(n),t=i.get(e)||[];return i.has(e)||i.set(e,t),t.push(r),a.observe(e),function(){t.splice(t.indexOf(r),1),t.length===0&&(i.delete(e),a.unobserve(e)),i.size===0&&(a.disconnect(),A.delete(d))}}function I({threshold:e,delay:r,trackVisibility:n,rootMargin:c,root:d,triggerOnce:a,skip:i,initialInView:t,fallbackInView:l,onChange:u}={}){var m;const[f,x]=v.useState(null),g=v.useRef(),[b,M]=v.useState({inView:!!t,entry:void 0});g.current=u,v.useEffect(()=>{if(i||!f)return;let w;return w=O(f,(E,N)=>{M({inView:E,entry:N}),g.current&&g.current(E,N),N.isIntersecting&&a&&w&&(w(),w=void 0)},{root:d,rootMargin:c,threshold:e,trackVisibility:n,delay:r},l),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,f,d,c,a,i,n,l,r]);const j=(m=b.entry)==null?void 0:m.target,$=v.useRef();!f&&j&&!a&&!i&&$.current!==j&&($.current=j,M({inView:!!t,entry:void 0}));const p=[x,b.inView,b.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const W=()=>{const[e,r]=v.useState(0),[n,c]=v.useState({card1Scaled:!1,card2Scaled:!1}),[d,a]=I({threshold:.5}),[i,t]=I({threshold:.5}),[l,u]=I({threshold:.5});console.log({inView1:a,inView2:t,inView3:u}),v.useEffect(()=>{const f=()=>{const x=window.scrollY,g=x>e;console.log({scrollingDown:g}),c(b=>({card1Scaled:g?t||u:t,card2Scaled:u})),r(x)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>{window.removeEventListener("scroll",f)}},[e,a,t,u]);const m={1:h["scaleDown-1"],2:h["scaleDown-2"],3:h["scaleDown-3"]};return s.jsxs("section",{className:h.section,children:[s.jsx("img",{className:h.avatars,src:T.src,alt:"Testimonial avatars"}),s.jsxs("h3",{className:"display-2",children:["We’ve helped ",s.jsx("span",{className:h.highlight,children:"500,000+"})," students enrol since 1993"]}),s.jsx("div",{className:h.wrapper,children:s.jsxs("div",{className:h.testimonialsContainer,children:[s.jsx(S,{ref:d,modifier:n.card1Scaled?m[1]:h.scaleUp,order:"1",testimonial:'<p>"I wanted to take the next step in my career. I hadn’t gone to uni before and it’s been a long time since I was at high school. <strong>Open Universities Australia helped me figure out how to get to my longer term goals.</strong>"</p>',authorAvatar:k.src,authorAlt:"Jason, student enrolled at La Trobe University",authorName:"Jason",authorStatus:"Enrolled at La Trobe University"}),s.jsx(S,{ref:i,modifier:n.card2Scaled?m[2]:h.scaleUp,order:"2",testimonial:'<p>"I’d given up on studies and had no idea what I was going to do next. Until I spoke to a student advisor. <strong>She worked out a plan to help me get into what I wanted to do.</strong> I was really lost before that."</p>',authorAvatar:C.src,authorAlt:"Mariam, student enrolled at University of Tasmania",authorName:"Mariam",authorStatus:"Enrolled at University of Tasmania"}),s.jsx(S,{ref:l,modifier:"",order:"3",testimonial:'<p>"I always knew that I liked science, but <strong>Open Universities Australia helped me narrow down what field I wish to study after high school.</strong> And since it was all online it was nice and flexible."</p>',authorAvatar:q.src,authorAlt:"Sophie, student enrolled at Murdoch University & Macquarie University",authorName:"Sophie",authorStatus:"Enrolled at Murdoch University & Macquarie University"})]})})]})};export{W as default};