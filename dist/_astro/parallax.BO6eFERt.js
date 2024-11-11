import{j as s}from"./jsx-runtime.7faW4zRM.js";import{r as f}from"./index.DhYZZe0J.js";import{b as i,c as h}from"./index.95d291e9.CixfE6oy.js";const S=f.forwardRef(({testimonial:e,authorAvatar:a,authorName:n,authorStatus:c,authorAlt:d,order:r,modifier:o},t)=>{const l={1:i["testimonial-1"],2:i["testimonial-2"],3:i["testimonial-3"]};return s.jsx("div",{className:`${i.cardContainer} ${o}`,ref:t,style:{zIndex:r},children:s.jsx("div",{id:r,className:`${i.testimonialCard} ${l[r]}`,"data-order":r,children:s.jsxs("div",{className:i.testimonialCardBackground,children:[s.jsx("span",{className:`${i.quoteMark} ${i.quoteMarkBelowTablet}`}),s.jsx("blockquote",{className:i.blockquote,children:s.jsxs("div",{className:i.content,children:[s.jsx("img",{className:i.avatar,src:a,alt:n,title:d}),s.jsxs("div",{className:i.body,children:[s.jsx("span",{className:`${i.quoteMark} ${i.quoteMarkAboveTablet}`})," ",s.jsx("div",{className:`display-3 ${i.testimonial}`,dangerouslySetInnerHTML:{__html:e}}),s.jsxs("cite",{children:[s.jsx("p",{className:`display-4 ${i.name}`,children:n}),s.jsx("p",{className:`paragraph ${i.status}`,children:c})]})]})]})})]})})})});S.displayName="Testimonial";const E={src:"/campaign/_astro/testimonialAvatars.DhuTZO8K.png",width:437,height:126,format:"png"},R={src:"/campaign/_astro/jason.P5UN66JF.png",width:620,height:776,format:"png"},C={src:"/campaign/_astro/mariam.DAqsoAyE.png",width:620,height:776,format:"png"},q={src:"/campaign/_astro/sophie.BrWBlW9r.png",width:620,height:776,format:"png"};var I=new Map,y=new WeakMap,$=0,_=void 0;function k(e){return e?(y.has(e)||($+=1,y.set(e,$.toString())),y.get(e)):"0"}function D(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?k(e.root):e[a]}`).toString()}function V(e){const a=D(e);let n=I.get(a);if(!n){const c=new Map;let d;const r=new IntersectionObserver(o=>{o.forEach(t=>{var l;const u=t.isIntersecting&&d.some(m=>t.intersectionRatio>=m);e.trackVisibility&&typeof t.isVisible>"u"&&(t.isVisible=u),(l=c.get(t.target))==null||l.forEach(m=>{m(u,t)})})},e);d=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:a,observer:r,elements:c},I.set(a,n)}return n}function B(e,a,n={},c=_){if(typeof window.IntersectionObserver>"u"&&c!==void 0){const l=e.getBoundingClientRect();return a(c,{isIntersecting:c,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:d,observer:r,elements:o}=V(n),t=o.get(e)||[];return o.has(e)||o.set(e,t),t.push(a),r.observe(e),function(){t.splice(t.indexOf(a),1),t.length===0&&(o.delete(e),r.unobserve(e)),o.size===0&&(r.disconnect(),I.delete(d))}}function A({threshold:e,delay:a,trackVisibility:n,rootMargin:c,root:d,triggerOnce:r,skip:o,initialInView:t,fallbackInView:l,onChange:u}={}){var m;const[v,x]=f.useState(null),g=f.useRef(),[b,M]=f.useState({inView:!!t,entry:void 0});g.current=u,f.useEffect(()=>{if(o||!v)return;let w;return w=B(v,(U,N)=>{M({inView:U,entry:N}),g.current&&g.current(U,N),N.isIntersecting&&r&&w&&(w(),w=void 0)},{root:d,rootMargin:c,threshold:e,trackVisibility:n,delay:a},l),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,v,d,c,r,o,n,l,a]);const j=(m=b.entry)==null?void 0:m.target,T=f.useRef();!v&&j&&!r&&!o&&T.current!==j&&(T.current=j,M({inView:!!t,entry:void 0}));const p=[x,b.inView,b.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const J=()=>{const[e,a]=f.useState(0),[n,c]=f.useState({card1Scaled:!1,card2Scaled:!1}),[d,r]=A({threshold:.5}),[o,t]=A({threshold:.5}),[l,u]=A({threshold:.5});console.log({inView1:r,inView2:t,inView3:u}),f.useEffect(()=>{const v=()=>{const x=window.scrollY,g=x>e;console.log({scrollingDown:g}),c(b=>({card1Scaled:g?t||u:t,card2Scaled:u})),a(x)};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>{window.removeEventListener("scroll",v)}},[e,r,t,u]);const m={1:h["scaleDown-1"],2:h["scaleDown-2"],3:h["scaleDown-3"]};return s.jsxs("section",{className:h.section,children:[s.jsx("img",{className:h.avatars,src:E.src,alt:"Testimonial avatars"}),s.jsxs("h3",{className:"display-2",children:["We’ve helped ",s.jsx("span",{className:h.highlight,children:"500,000+"})," students enrol since 1993"]}),s.jsx("div",{className:h.wrapper,children:s.jsxs("div",{className:h.testimonialsContainer,children:[s.jsx(S,{ref:d,modifier:n.card1Scaled?m[1]:h.scaleUp,order:"1",testimonial:'<p>"I wanted to take the next step in my career. I hadn’t gone to uni before and it’s been a long time since I was at high school. <strong>Open Universities Australia helped me figure out how to get to my longer term goals.</strong>"</p>',authorAvatar:R.src,authorAlt:`Jason, student enrolled at La Trobe University
Activate to edit the task name`,authorName:"Jason",authorStatus:"Enrolled at La Trobe University"}),s.jsx(S,{ref:o,modifier:n.card2Scaled?m[2]:h.scaleUp,order:"2",testimonial:'<p>"I’d given up on studies and had no idea what I was going to do next. Until I spoke to a student advisor. <strong>She worked out a plan to help me get into what I wanted to do.</strong> I was really lost before that."</p>',authorAvatar:C.src,authorAlt:"Mariam, student enrolled at University of Tasmania",authorName:"Mariam",authorStatus:"Enrolled at University of Tasmania"}),s.jsx(S,{ref:l,modifier:"",order:"3",testimonial:'<p>"I always knew that I liked science, but <strong>Open Universities Australia helped me narrow down what field I wish to study after high school.</strong> And since it was all online it was nice and flexible."</p>',authorAvatar:q.src,authorAlt:"Sophie, student enrolled at Murdoch University & Macquarie University",authorName:"Sophie",authorStatus:"Enrolled at Murdoch University & Macquarie University"})]})})]})};export{J as default};
