"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[398],{30319:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>j,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var s=t(85893),a=t(11151),i=t(67294);const r={id:"invalid-phone-number-rejection",title:"InvalidPhoneNumberRejection"},o=void 0,c={id:"objects/invalid-phone-number-rejection",title:"InvalidPhoneNumberRejection",description:"Rejection returned if phone number is not well formatted",source:"@site/docs/objects/invalid-phone-number-rejection.mdx",sourceDirName:"objects",slug:"/objects/invalid-phone-number-rejection",permalink:"/objects/invalid-phone-number-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/invalid-phone-number-rejection.mdx",tags:[],version:"current",frontMatter:{id:"invalid-phone-number-rejection",title:"InvalidPhoneNumberRejection"},sidebar:"schemaSidebar",previous:{title:"InvalidPaymentMethodRequestRejection",permalink:"/objects/invalid-payment-method-request-rejection"},next:{title:"InvalidSirenNumberRejection",permalink:"/objects/invalid-siren-number-rejection"}},d={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>InvalidPhoneNumberRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invalidphonenumberrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],j=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,a.a)()},[c,d]=(0,i.useState)(r);return(0,s.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned if phone number is not well formatted"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type InvalidPhoneNumberRejection implements Rejection {\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"invalidphonenumberrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InvalidPhoneNumberRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/add-account-membership-payload",children:(0,s.jsx)(n.code,{children:"AddAccountMembershipPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/add-account-memberships-payload",children:(0,s.jsx)(n.code,{children:"AddAccountMembershipsPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/unions/update-account-membership-payload",children:(0,s.jsx)(n.code,{children:"UpdateAccountMembershipPayload"})}),"  ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);