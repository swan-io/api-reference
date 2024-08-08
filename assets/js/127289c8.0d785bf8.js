"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15125],{79320:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>u,Details:()=>h,SpecifiedBy:()=>l,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>p});var a=t(74848),s=t(28453),c=t(96540);const d={id:"add-account-membership",title:"addAccountMembership"},i=void 0,r={id:"mutations/add-account-membership",title:"addAccountMembership",description:"Add a new account membership to an account.",source:"@site/docs/mutations/add-account-membership.mdx",sourceDirName:"mutations",slug:"/mutations/add-account-membership",permalink:"/mutations/add-account-membership",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/add-account-membership.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership",title:"addAccountMembership"},sidebar:"schemaSidebar",previous:{title:"activatePhysicalCard",permalink:"/mutations/activate-physical-card"},next:{title:"addAccountMemberships",permalink:"/mutations/add-account-memberships"}},o={},u=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[r,o]=(0,c.useState)(d);return(0,a.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>addAccountMembership.<b>input</b></code><Bullet></Bullet><code>AddAccountMembershipInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipinputaddaccountmembershipinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddAccountMembershipPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershippayload-",level:4}];function b(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Add a new account membership to an account."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["This mutation is restricted to an User access token (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),") and ask the user to consent to this request."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["The user must have an account membership for this account with the attribute ",(0,a.jsx)(n.code,{children:"canManageAccountMembership=true"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"addAccountMembership(\n  input: AddAccountMembershipInput!\n): AddAccountMembershipPayload!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershipinputaddaccountmembershipinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["addAccountMembership.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(n.a,{href:"/inputs/add-account-membership-input",children:(0,a.jsx)(n.code,{children:"AddAccountMembershipInput!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"addaccountmembershippayload-",children:[(0,a.jsx)(n.a,{href:"/unions/add-account-membership-payload",children:(0,a.jsx)(n.code,{children:"AddAccountMembershipPayload"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var a=t(96540);const s={},c=a.createContext(s);function d(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);