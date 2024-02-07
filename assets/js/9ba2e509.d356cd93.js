"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44864],{55967:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var c=t(85893),a=t(11151),i=t(67294);const l={id:"check-payment-collection-input",title:"CheckPaymentCollectionInput"},s=void 0,o={id:"inputs/check-payment-collection-input",title:"CheckPaymentCollectionInput",description:"No description",source:"@site/docs/inputs/check-payment-collection-input.mdx",sourceDirName:"inputs",slug:"/inputs/check-payment-collection-input",permalink:"/inputs/check-payment-collection-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/check-payment-collection-input.mdx",tags:[],version:"current",frontMatter:{id:"check-payment-collection-input",title:"CheckPaymentCollectionInput"},sidebar:"schemaSidebar",previous:{title:"Certificate",permalink:"/inputs/certificate"},next:{title:"CheckPaymentMethodInput",permalink:"/inputs/check-payment-method-input"}},r={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,a.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,a.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>CheckPaymentCollectionInput.<b>merchantProfileId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkpaymentcollectioninputmerchantprofileidid--",level:4},{value:'<code>CheckPaymentCollectionInput.<b>cmc7</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkpaymentcollectioninputcmc7string--",level:4},{value:'<code>CheckPaymentCollectionInput.<b>rlmcKey</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkpaymentcollectioninputrlmckeystring--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:n,children:t,startOpen:l=!1})=>{const s={details:"details",summary:"summary",...(0,a.a)()},[o,r]=(0,i.useState)(l);return(0,c.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(s.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"No description"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-graphql",children:"input CheckPaymentCollectionInput {\n  merchantProfileId: ID!\n  cmc7: String!\n  rlmcKey: String!\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(n.h4,{id:"checkpaymentcollectioninputmerchantprofileidid--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckPaymentCollectionInput.",(0,c.jsx)("b",{children:"merchantProfileId"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/scalars/id",children:(0,c.jsx)(n.code,{children:"ID!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"ID of the Merchant profile associated to the Swan creditor account"}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checkpaymentcollectioninputcmc7string--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckPaymentCollectionInput.",(0,c.jsx)("b",{children:"cmc7"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"31-caracter unique identifier located at the bottom of the check.\nCMC7 is composed of 3 sections (check number (7 char.), check issuing bank code (12 char.), check holder account number (12 char.)).\nCombined with RLMC key, it  allows the check traceability."}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"checkpaymentcollectioninputrlmckeystring--",children:[(0,c.jsx)(n.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckPaymentCollectionInput.",(0,c.jsx)("b",{children:"rlmcKey"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(n.a,{href:"/scalars/string",children:(0,c.jsx)(n.code,{children:"String!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"2-digit key used to check the integrity of the CMC7 line, located at the bottom right of the check.\nCombined with CMC7 line, it allows the check traceability."}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/inputs/initiate-merchant-payment-collection-input",children:(0,c.jsx)(n.code,{children:"InitiateMerchantPaymentCollectionInput"})}),"  ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var c=t(67294);const a={},i=c.createContext(a);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);