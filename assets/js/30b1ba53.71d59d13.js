"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80451],{19535:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>l,Bullet:()=>u,Details:()=>h,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var t=s(85893),a=s(11151),c=s(67294);const r={id:"suspend-account-membership",title:"suspendAccountMembership"},i=void 0,d={id:"mutations/suspend-account-membership",title:"suspendAccountMembership",description:"Suspends an account membership.",source:"@site/docs/mutations/suspend-account-membership.mdx",sourceDirName:"mutations",slug:"/mutations/suspend-account-membership",permalink:"/mutations/suspend-account-membership",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/suspend-account-membership.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-membership",title:"suspendAccountMembership"},sidebar:"schemaSidebar",previous:{title:"scheduleStandingOrder",permalink:"/mutations/schedule-standing-order"},next:{title:"suspendPhysicalCard",permalink:"/mutations/suspend-physical-card"}},o={},u=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},l=e=>{const n={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>suspendAccountMembership.<b>input</b></code><Bullet></Bullet><code>SuspendAccountMembershipInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suspendaccountmembershipinputsuspendaccountmembershipinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SuspendAccountMembershipPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"suspendaccountmembershippayload-",level:4}],h=({dataOpen:e,dataClose:n,children:s,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,a.a)()},[d,o]=(0,c.useState)(r);return(0,t.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&s]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Suspends an account membership."}),"\n",(0,t.jsxs)(n.p,{children:["*This mutation is restricted to an User access token (",(0,t.jsx)(n.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["The user must have an account membership for this account with the attribute ",(0,t.jsx)(n.code,{children:"canManageAccountMembership=true"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"suspendAccountMembership(\n  input: SuspendAccountMembershipInput!\n): SuspendAccountMembershipPayload!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"suspendaccountmembershipinputsuspendaccountmembershipinput--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["suspendAccountMembership.",(0,t.jsx)("b",{children:"input"})]})}),(0,t.jsx)(u,{}),(0,t.jsx)(n.a,{href:"/inputs/suspend-account-membership-input",children:(0,t.jsx)(n.code,{children:"SuspendAccountMembershipInput!"})})," ",(0,t.jsx)(l,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(l,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"suspendaccountmembershippayload-",children:[(0,t.jsx)(n.a,{href:"/unions/suspend-account-membership-payload",children:(0,t.jsx)(n.code,{children:"SuspendAccountMembershipPayload"})})," ",(0,t.jsx)(l,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(67294);const a={},c=t.createContext(a);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);