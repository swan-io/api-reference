"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73167],{50827:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=s(74848),a=s(28453),i=s(96540);const c={id:"disable-account-membership",title:"disableAccountMembership"},r=void 0,o={id:"mutations/disable-account-membership",title:"disableAccountMembership",description:"Disable an account membership",source:"@site/docs/mutations/disable-account-membership.mdx",sourceDirName:"mutations",slug:"/mutations/disable-account-membership",permalink:"/mutations/disable-account-membership",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/disable-account-membership.mdx",tags:[],version:"current",frontMatter:{id:"disable-account-membership",title:"disableAccountMembership"},sidebar:"schemaSidebar",previous:{title:"denySdd",permalink:"/mutations/deny-sdd"},next:{title:"disableMerchantPaymentMethod",permalink:"/mutations/disable-merchant-payment-method"}},d={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[o,d]=(0,i.useState)(c);return(0,t.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&s]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>disableAccountMembership.<b>input</b></code><Bullet></Bullet><code>DisableAccountMembershipInput</code> <Badge class="badge badge--secondary"></Badge>',id:"disableaccountmembershipinputdisableaccountmembershipinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>DisableAccountMembershipPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"disableaccountmembershippayload-",level:4}];function b(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Disable an account membership"}),"\n",(0,t.jsxs)(n.p,{children:["This mutation is callable with a User access token and a Project access token (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"With a User access token, the user must have the permission to manage account membership of the account"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"disableAccountMembership(\n  input: DisableAccountMembershipInput\n): DisableAccountMembershipPayload!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"disableaccountmembershipinputdisableaccountmembershipinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["disableAccountMembership.",(0,t.jsx)("b",{children:"input"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/disable-account-membership-input",children:(0,t.jsx)(n.code,{children:"DisableAccountMembershipInput"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"disableaccountmembershippayload-",children:[(0,t.jsx)(n.a,{href:"/unions/disable-account-membership-payload",children:(0,t.jsx)(n.code,{children:"DisableAccountMembershipPayload"})})," ",(0,t.jsx)(m,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(96540);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);