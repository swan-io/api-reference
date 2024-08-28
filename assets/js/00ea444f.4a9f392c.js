"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93139],{211:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>b});var s=t(74848),c=t(28453),o=t(96540);const a={id:"account-membership-not-found-rejection",title:"AccountMembershipNotFoundRejection"},i=void 0,d={id:"objects/account-membership-not-found-rejection",title:"AccountMembershipNotFoundRejection",description:"No description",source:"@site/docs/objects/account-membership-not-found-rejection.mdx",sourceDirName:"objects",slug:"/objects/account-membership-not-found-rejection",permalink:"/objects/account-membership-not-found-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-membership-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-not-found-rejection",title:"AccountMembershipNotFoundRejection"},sidebar:"schemaSidebar",previous:{title:"AccountMembershipNotAllowedRejection",permalink:"/objects/account-membership-not-allowed-rejection"},next:{title:"AccountMembershipNotReadyToBeBoundRejection",permalink:"/objects/account-membership-not-ready-to-be-bound-rejection"}},r={},l=()=>{const e={span:"span",...(0,c.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,c.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,c.R)()},[d,r]=(0,o.useState)(a);return(0,s.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountMembershipNotFoundRejection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipnotfoundrejectionidstring--",level:4},{value:'<code>AccountMembershipNotFoundRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipnotfoundrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function j(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type AccountMembershipNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"accountmembershipnotfoundrejectionidstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipNotFoundRejection.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"accountmembershipnotfoundrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipNotFoundRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/bind-account-membership-payload",children:(0,s.jsx)(n.code,{children:"BindAccountMembershipPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/disable-account-membership-payload",children:(0,s.jsx)(n.code,{children:"DisableAccountMembershipPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/update-account-membership-payload",children:(0,s.jsx)(n.code,{children:"UpdateAccountMembershipPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const c={},o=s.createContext(c);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);