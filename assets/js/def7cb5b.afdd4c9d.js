"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14225],{94110:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>m,Bullet:()=>u,Details:()=>p,SpecifiedBy:()=>l,assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=s(74848),r=s(28453),c=s(96540);const i={id:"resume-account-membership-input",title:"ResumeAccountMembershipInput"},a=void 0,d={id:"inputs/resume-account-membership-input",title:"ResumeAccountMembershipInput",description:"No description",source:"@site/docs/inputs/resume-account-membership-input.mdx",sourceDirName:"inputs",slug:"/inputs/resume-account-membership-input",permalink:"/inputs/resume-account-membership-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/resume-account-membership-input.mdx",tags:[],version:"current",frontMatter:{id:"resume-account-membership-input",title:"ResumeAccountMembershipInput"},sidebar:"schemaSidebar",previous:{title:"RestrictedToInput",permalink:"/inputs/restricted-to-input"},next:{title:"ResumePhysicalCardInput",permalink:"/inputs/resume-physical-card-input"}},o={},u=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const n={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,r.R)()},[d,o]=(0,c.useState)(i);return(0,t.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ResumeAccountMembershipInput.<b>accountMembershipId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resumeaccountmembershipinputaccountmembershipidid--",level:4},{value:'<code>ResumeAccountMembershipInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resumeaccountmembershipinputconsentredirecturlstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input ResumeAccountMembershipInput {\n  accountMembershipId: ID!\n  consentRedirectUrl: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"resumeaccountmembershipinputaccountmembershipidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ResumeAccountMembershipInput.",(0,t.jsx)("b",{children:"accountMembershipId"})]})}),(0,t.jsx)(u,{}),(0,t.jsx)(n.a,{href:"/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Unique identifier of a given account membership to resume"}),"\n",(0,t.jsxs)(n.h4,{id:"resumeaccountmembershipinputconsentredirecturlstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ResumeAccountMembershipInput.",(0,t.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,t.jsx)(u,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/mutations/resume-account-membership",children:(0,t.jsx)(n.code,{children:"resumeAccountMembership"})}),"  ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);