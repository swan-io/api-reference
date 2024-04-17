"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70705],{55307:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>p,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var a=n(85893),r=n(11151),t=n(67294);const c={id:"resume-physical-card-input",title:"ResumePhysicalCardInput"},d=void 0,i={id:"inputs/resume-physical-card-input",title:"ResumePhysicalCardInput",description:"Inputs to resume a physical card",source:"@site/docs/inputs/resume-physical-card-input.mdx",sourceDirName:"inputs",slug:"/inputs/resume-physical-card-input",permalink:"/inputs/resume-physical-card-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/resume-physical-card-input.mdx",tags:[],version:"current",frontMatter:{id:"resume-physical-card-input",title:"ResumePhysicalCardInput"},sidebar:"schemaSidebar",previous:{title:"ResumeAccountMembershipInput",permalink:"/inputs/resume-account-membership-input"},next:{title:"ScheduleStandingOrderInput",permalink:"/inputs/schedule-standing-order-input"}},l={},o=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ResumePhysicalCardInput.<b>cardId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resumephysicalcardinputcardidid--",level:4},{value:'<code>ResumePhysicalCardInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resumephysicalcardinputconsentredirecturlstring--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:s,children:n,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,r.a)()},[i,l]=(0,t.useState)(c);return(0,a.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&n]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Inputs to resume a physical card"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"input ResumePhysicalCardInput {\n  cardId: ID!\n  consentRedirectUrl: String!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"resumephysicalcardinputcardidid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ResumePhysicalCardInput.",(0,a.jsx)("b",{children:"cardId"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Unique identifier of a card"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"resumephysicalcardinputconsentredirecturlstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ResumePhysicalCardInput.",(0,a.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"URL the user is redirected to after consent has been given"}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/mutations/resume-physical-card",children:(0,a.jsx)(s.code,{children:"resumePhysicalCard"})}),"  ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function g(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var a=n(67294);const r={},t=a.createContext(r);function c(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);