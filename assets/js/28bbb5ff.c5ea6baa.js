"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[81342],{3483:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=n(74848),d=n(28453),a=n(96540);const r={id:"enable-received-direct-debit-mandate-input",title:"EnableReceivedDirectDebitMandateInput"},c=void 0,s={id:"inputs/enable-received-direct-debit-mandate-input",title:"EnableReceivedDirectDebitMandateInput",description:"Inputs to enable a received direct debit mandate, i.e. to move its status back from suspended.",source:"@site/docs/inputs/enable-received-direct-debit-mandate-input.mdx",sourceDirName:"inputs",slug:"/inputs/enable-received-direct-debit-mandate-input",permalink:"/inputs/enable-received-direct-debit-mandate-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/enable-received-direct-debit-mandate-input.mdx",tags:[],version:"current",frontMatter:{id:"enable-received-direct-debit-mandate-input",title:"EnableReceivedDirectDebitMandateInput"},sidebar:"schemaSidebar",previous:{title:"DisableMerchantProfileInput",permalink:"/inputs/disable-merchant-profile-input"},next:{title:"ExportFilterInput",permalink:"/inputs/export-filter-input"}},l={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const t={a:"a",...(0,d.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,d.R)()},[s,l]=(0,a.useState)(r);return(0,i.jsxs)(c.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>EnableReceivedDirectDebitMandateInput.<b>receivedDirectDebitMandateId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"enablereceiveddirectdebitmandateinputreceiveddirectdebitmandateidid--",level:4},{value:'<code>EnableReceivedDirectDebitMandateInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"enablereceiveddirectdebitmandateinputconsentredirecturlstring-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Inputs to enable a received direct debit mandate, i.e. to move its status back from suspended."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input EnableReceivedDirectDebitMandateInput {\n  receivedDirectDebitMandateId: ID!\n  consentRedirectUrl: String\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"enablereceiveddirectdebitmandateinputreceiveddirectdebitmandateidid--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["EnableReceivedDirectDebitMandateInput.",(0,i.jsx)("b",{children:"receivedDirectDebitMandateId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/scalars/id",children:(0,i.jsx)(t.code,{children:"ID!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"The received direct debit id to enable"}),"\n",(0,i.jsxs)(t.h4,{id:"enablereceiveddirectdebitmandateinputconsentredirecturlstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["EnableReceivedDirectDebitMandateInput.",(0,i.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.p,{children:"URL the user is redirected to after consent has been given"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/mutations/enable-received-direct-debit-mandate",children:(0,i.jsx)(t.code,{children:"enableReceivedDirectDebitMandate"})}),"  ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const d={},a=i.createContext(d);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);