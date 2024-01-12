"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30032],{58522:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>b,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=s(85893),r=s(11151),c=s(67294);const a={id:"restricted-to",title:"RestrictedTo"},d=void 0,o={id:"objects/restricted-to",title:"RestrictedTo",description:"Account membership restricted to",source:"@site/docs/objects/restricted-to.mdx",sourceDirName:"objects",slug:"/objects/restricted-to",permalink:"/objects/restricted-to",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/restricted-to.mdx",tags:[],version:"current",frontMatter:{id:"restricted-to",title:"RestrictedTo"},sidebar:"schemaSidebar",previous:{title:"RestrictedToUserRejection",permalink:"/objects/restricted-to-user-rejection"},next:{title:"ResumeAccountMembershipSuccessPayload",permalink:"/objects/resume-account-membership-success-payload"}},i={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,r.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const t={span:"span",...(0,r.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>RestrictedTo.<b>firstName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtofirstnamestring--",level:4},{value:'<code>RestrictedTo.<b>lastName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtolastnamestring--",level:4},{value:'<code>RestrictedTo.<b>birthDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtobirthdatedate-",level:4},{value:'<code>RestrictedTo.<b>phoneNumber</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtophonenumberstring--",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:t,children:s,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,r.a)()},[o,i]=(0,c.useState)(a);return(0,n.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Account membership restricted to"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type RestrictedTo {\n  firstName: String!\n  lastName: String!\n  birthDate: Date\n  phoneNumber: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"restrictedtofirstnamestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedTo.",(0,n.jsx)("b",{children:"firstName"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"first name"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"restrictedtolastnamestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedTo.",(0,n.jsx)("b",{children:"lastName"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"last name"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"restrictedtobirthdatedate-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedTo.",(0,n.jsx)("b",{children:"birthDate"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/date",children:(0,n.jsx)(t.code,{children:"Date"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"birth date"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"restrictedtophonenumberstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedTo.",(0,n.jsx)("b",{children:"phoneNumber"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"phone number"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/objects/account-membership-binding-user-error-status-info",children:(0,n.jsx)(t.code,{children:"AccountMembershipBindingUserErrorStatusInfo"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/account-membership-consent-pending-status-info",children:(0,n.jsx)(t.code,{children:"AccountMembershipConsentPendingStatusInfo"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/objects/account-membership-invitation-sent-status-info",children:(0,n.jsx)(t.code,{children:"AccountMembershipInvitationSentStatusInfo"})}),"  ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>a});var n=s(67294);const r={},c=n.createContext(r);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);