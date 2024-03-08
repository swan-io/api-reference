"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80498],{95551:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>b});var s=t(85893),i=t(11151),a=t(67294);const r={id:"trusted-beneficiary-consent-pending",title:"TrustedBeneficiaryConsentPending"},c=void 0,d={id:"objects/trusted-beneficiary-consent-pending",title:"TrustedBeneficiaryConsentPending",description:"TrustedBeneficiary status consent pending",source:"@site/docs/objects/trusted-beneficiary-consent-pending.mdx",sourceDirName:"objects",slug:"/objects/trusted-beneficiary-consent-pending",permalink:"/objects/trusted-beneficiary-consent-pending",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/trusted-beneficiary-consent-pending.mdx",tags:[],version:"current",frontMatter:{id:"trusted-beneficiary-consent-pending",title:"TrustedBeneficiaryConsentPending"},sidebar:"schemaSidebar",previous:{title:"TrustedBeneficiaryConnection",permalink:"/objects/trusted-beneficiary-connection"},next:{title:"TrustedBeneficiaryEdge",permalink:"/objects/trusted-beneficiary-edge"}},o={},l=()=>{const e={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,i.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,i.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>TrustedBeneficiaryConsentPending.<b>status</b></code><Bullet></Bullet><code>TrustedBeneficiaryStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryconsentpendingstatustrustedbeneficiarystatus--",level:4},{value:'<code>TrustedBeneficiaryConsentPending.<b>consent</b></code><Bullet></Bullet><code>Consent!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiaryconsentpendingconsentconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TrustedBeneficiaryStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"trustedbeneficiarystatusinfo-",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,i.a)()},[d,o]=(0,a.useState)(r);return(0,s.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"TrustedBeneficiary status consent pending"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type TrustedBeneficiaryConsentPending implements TrustedBeneficiaryStatusInfo {\n  status: TrustedBeneficiaryStatus!\n  consent: Consent!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"trustedbeneficiaryconsentpendingstatustrustedbeneficiarystatus--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryConsentPending.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/enums/trusted-beneficiary-status",children:(0,s.jsx)(n.code,{children:"TrustedBeneficiaryStatus!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["status of the beneficiary  (set to ",(0,s.jsx)(n.code,{children:"ConsentPending"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"trustedbeneficiaryconsentpendingconsentconsent--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["TrustedBeneficiaryConsentPending.",(0,s.jsx)("b",{children:"consent"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/objects/consent",children:(0,s.jsx)(n.code,{children:"Consent!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The consent required to initiate this beneficiary"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"trustedbeneficiarystatusinfo-",children:[(0,s.jsx)(n.a,{href:"/interfaces/trusted-beneficiary-status-info",children:(0,s.jsx)(n.code,{children:"TrustedBeneficiaryStatusInfo"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"TrustedBeneficiary status information"}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);