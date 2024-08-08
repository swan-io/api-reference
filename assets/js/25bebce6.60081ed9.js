"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17911],{75258:(e,i,n)=>{n.r(i),n.d(i,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>f,assets:()=>r,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var t=n(74848),l=n(28453),o=n(96540);const s={id:"identification-flow-level",title:"IdentificationFlowLevel"},a=void 0,d={id:"enums/identification-flow-level",title:"IdentificationFlowLevel",description:"If requested by sending the right parameters to the initial oauth2 url,",source:"@site/docs/enums/identification-flow-level.mdx",sourceDirName:"enums",slug:"/enums/identification-flow-level",permalink:"/enums/identification-flow-level",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/identification-flow-level.mdx",tags:[],version:"current",frontMatter:{id:"identification-flow-level",title:"IdentificationFlowLevel"},sidebar:"schemaSidebar",previous:{title:"IBANStatus",permalink:"/enums/ibanstatus"},next:{title:"IdentificationInvalidReason",permalink:"/enums/identification-invalid-reason"}},r={},c=()=>{const e={span:"span",...(0,l.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const i={a:"a",...(0,l.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(i.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const i={span:"span",...(0,l.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:i,children:n,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,l.R)()},[d,r]=(0,o.useState)(s);return(0,t.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:i}),d&&n]})},m=[{value:"Values",id:"values",level:3},{value:"<code>IdentificationFlowLevel.<b>Auto</b></code>",id:"identificationflowlevelauto",level:4},{value:"<code>IdentificationFlowLevel.<b>Expert</b></code>",id:"identificationflowlevelexpert",level:4},{value:"<code>IdentificationFlowLevel.<b>PVID</b></code>",id:"identificationflowlevelpvid",level:4},{value:"<code>IdentificationFlowLevel.<b>QES</b></code>",id:"identificationflowlevelqes",level:4}];function p(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"If requested by sending the right parameters to the initial oauth2 url,\nit contains the identification level that is requested to be fulfilled\nafter the oauth2 consent by starting the right identification."}),"\n",(0,t.jsxs)(i.p,{children:["QES => use the ",(0,t.jsx)(i.code,{children:"startFourthlineExpertIdVerificationIdentification"})," mutation"]}),"\n",(0,t.jsxs)(i.p,{children:["Expert => use the ",(0,t.jsx)(i.code,{children:"startUbbleExpertIdVerificationIdentification"})," mutation"]}),"\n",(0,t.jsxs)(i.p,{children:["PVID => use the ",(0,t.jsx)(i.code,{children:"startUbblePvidIdVerificationIdentification"})," mutation"]}),"\n",(0,t.jsxs)(i.p,{children:["Auto => use query ",(0,t.jsx)(i.code,{children:"recommendedIdentificationFlow"})," to let Swan recommend the best flow and level for a user"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-graphql",children:"enum IdentificationFlowLevel {\n  Auto\n  Expert\n  PVID\n  QES\n}\n"})}),"\n",(0,t.jsx)(i.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(i.h4,{id:"identificationflowlevelauto",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationFlowLevel.",(0,t.jsx)("b",{children:"Auto"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"identificationflowlevelexpert",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationFlowLevel.",(0,t.jsx)("b",{children:"Expert"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"identificationflowlevelpvid",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationFlowLevel.",(0,t.jsx)("b",{children:"PVID"})]})})}),"\n",(0,t.jsx)(i.h4,{id:"identificationflowlevelqes",children:(0,t.jsx)(i.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["IdentificationFlowLevel.",(0,t.jsx)("b",{children:"QES"})]})})})]})}function x(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(96540);const l={},o=t.createContext(l);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);