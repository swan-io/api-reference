"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82170],{58744:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var s=n(85893),r=n(11151),d=n(67294);const a={id:"restricted-to-input",title:"RestrictedToInput"},i=void 0,c={id:"inputs/restricted-to-input",title:"RestrictedToInput",description:"Input when the account membership is restricted to a verified user",source:"@site/docs/inputs/restricted-to-input.mdx",sourceDirName:"inputs",slug:"/inputs/restricted-to-input",permalink:"/inputs/restricted-to-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/restricted-to-input.mdx",tags:[],version:"current",frontMatter:{id:"restricted-to-input",title:"RestrictedToInput"},sidebar:"schemaSidebar",previous:{title:"ResidencyAddressInput",permalink:"/inputs/residency-address-input"},next:{title:"ResumeAccountMembershipInput",permalink:"/inputs/resume-account-membership-input"}},o={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,r.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>RestrictedToInput.<b>firstName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtoinputfirstnamestring--",level:4},{value:'<code>RestrictedToInput.<b>lastName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtoinputlastnamestring--",level:4},{value:'<code>RestrictedToInput.<b>birthDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtoinputbirthdatedate-",level:4},{value:'<code>RestrictedToInput.<b>phoneNumber</b></code><Bullet></Bullet><code>PhoneNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"restrictedtoinputphonenumberphonenumber--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,r.a)()},[c,o]=(0,d.useState)(a);return(0,s.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Input when the account membership is restricted to a verified user"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input RestrictedToInput {\n  firstName: String!\n  lastName: String!\n  birthDate: Date\n  phoneNumber: PhoneNumber!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"restrictedtoinputfirstnamestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedToInput.",(0,s.jsx)("b",{children:"firstName"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Account member first name"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"restrictedtoinputlastnamestring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedToInput.",(0,s.jsx)("b",{children:"lastName"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/scalars/string",children:(0,s.jsx)(t.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Account member last name"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"restrictedtoinputbirthdatedate-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedToInput.",(0,s.jsx)("b",{children:"birthDate"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/scalars/date",children:(0,s.jsx)(t.code,{children:"Date"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Account member birth date"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"restrictedtoinputphonenumberphonenumber--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["RestrictedToInput.",(0,s.jsx)("b",{children:"phoneNumber"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/scalars/phone-number",children:(0,s.jsx)(t.code,{children:"PhoneNumber!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Account member phone number"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/inputs/add-account-membership-input",children:(0,s.jsx)(t.code,{children:"AddAccountMembershipInput"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/inputs/membership-info-input",children:(0,s.jsx)(t.code,{children:"MembershipInfoInput"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(67294);const r={},d=s.createContext(r);function a(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);