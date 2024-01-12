"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98786],{57978:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var t=s(85893),d=s(11151),c=s(67294);const a={id:"add-account-memberships-input",title:"AddAccountMembershipsInput"},i=void 0,r={id:"inputs/add-account-memberships-input",title:"AddAccountMembershipsInput",description:"Inputs to add a new account membership",source:"@site/docs/inputs/add-account-memberships-input.mdx",sourceDirName:"inputs",slug:"/inputs/add-account-memberships-input",permalink:"/inputs/add-account-memberships-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/add-account-memberships-input.mdx",tags:[],version:"current",frontMatter:{id:"add-account-memberships-input",title:"AddAccountMembershipsInput"},sidebar:"schemaSidebar",previous:{title:"AddAccountMembershipInput",permalink:"/inputs/add-account-membership-input"},next:{title:"AddCardInput",permalink:"/inputs/add-card-input"}},o={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,d.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AddAccountMembershipsInput.<b>accountId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipsinputaccountidid--",level:4},{value:'<code>AddAccountMembershipsInput.<b>memberships</b></code><Bullet></Bullet><code>[MembershipInfoInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipsinputmembershipsmembershipinfoinput--",level:4},{value:'<code>AddAccountMembershipsInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addaccountmembershipsinputconsentredirecturlstring--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:n,children:s,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,d.a)()},[r,o]=(0,c.useState)(a);return(0,t.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&s]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Inputs to add a new account membership"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input AddAccountMembershipsInput {\n  accountId: ID!\n  memberships: [MembershipInfoInput!]!\n  consentRedirectUrl: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"addaccountmembershipsinputaccountidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipsInput.",(0,t.jsx)("b",{children:"accountId"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Unique identifier of a given account"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"addaccountmembershipsinputmembershipsmembershipinfoinput--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipsInput.",(0,t.jsx)("b",{children:"memberships"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/inputs/membership-info-input",children:(0,t.jsx)(n.code,{children:"[MembershipInfoInput!]!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Memberships to add to the account"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"addaccountmembershipsinputconsentredirecturlstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AddAccountMembershipsInput.",(0,t.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/mutations/add-account-memberships",children:(0,t.jsx)(n.code,{children:"addAccountMemberships"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(67294);const d={},c=t.createContext(d);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);