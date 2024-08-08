"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97310],{78545:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>j,Bullet:()=>r,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var s=t(74848),o=t(28453),a=t(96540);const c={id:"consents-already-linked-to-multi-consent-rejection",title:"ConsentsAlreadyLinkedToMultiConsentRejection"},i=void 0,d={id:"objects/consents-already-linked-to-multi-consent-rejection",title:"ConsentsAlreadyLinkedToMultiConsentRejection",description:"Rejection returned when a the consent is already linked to another multi consent",source:"@site/docs/objects/consents-already-linked-to-multi-consent-rejection.mdx",sourceDirName:"objects",slug:"/objects/consents-already-linked-to-multi-consent-rejection",permalink:"/objects/consents-already-linked-to-multi-consent-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/consents-already-linked-to-multi-consent-rejection.mdx",tags:[],version:"current",frontMatter:{id:"consents-already-linked-to-multi-consent-rejection",title:"ConsentsAlreadyLinkedToMultiConsentRejection"},sidebar:"schemaSidebar",previous:{title:"Consent",permalink:"/objects/consent"},next:{title:"ConsentsNotAllInCreatedStatusRejection",permalink:"/objects/consents-not-all-in-created-status-rejection"}},l={},r=()=>{const e={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,o.R)()},[d,l]=(0,a.useState)(c);return(0,s.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>ConsentsAlreadyLinkedToMultiConsentRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentsalreadylinkedtomulticonsentrejectionmessagestring--",level:4},{value:'<code>ConsentsAlreadyLinkedToMultiConsentRejection.<b>consentIds</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"consentsalreadylinkedtomulticonsentrejectionconsentidsstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}];function g(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rejection returned when a the consent is already linked to another multi consent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type ConsentsAlreadyLinkedToMultiConsentRejection implements Rejection {\n  message: String!\n  consentIds: [String!]!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"consentsalreadylinkedtomulticonsentrejectionmessagestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ConsentsAlreadyLinkedToMultiConsentRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.h4,{id:"consentsalreadylinkedtomulticonsentrejectionconsentidsstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ConsentsAlreadyLinkedToMultiConsentRejection.",(0,s.jsx)("b",{children:"consentIds"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"[String!]!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.p,{children:"IDs of the consents that are already linked to another multi consent"}),"\n",(0,s.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.h4,{id:"rejection-",children:[(0,s.jsx)(n.a,{href:"/interfaces/rejection",children:(0,s.jsx)(n.code,{children:"Rejection"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/unions/create-multi-consent-payload",children:(0,s.jsx)(n.code,{children:"CreateMultiConsentPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(96540);const o={},a=s.createContext(o);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);