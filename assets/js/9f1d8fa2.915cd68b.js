"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67406],{69353:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var i=t(74848),s=t(28453),r=t(96540);const a={id:"physical-card-custom-options-for-print-input",title:"PhysicalCardCustomOptionsForPrintInput"},o=void 0,c={id:"inputs/physical-card-custom-options-for-print-input",title:"PhysicalCardCustomOptionsForPrintInput",description:"No description",source:"@site/docs/inputs/physical-card-custom-options-for-print-input.mdx",sourceDirName:"inputs",slug:"/inputs/physical-card-custom-options-for-print-input",permalink:"/inputs/physical-card-custom-options-for-print-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/physical-card-custom-options-for-print-input.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-custom-options-for-print-input",title:"PhysicalCardCustomOptionsForPrintInput"},sidebar:"schemaSidebar",previous:{title:"PhysicalCardCustomOptionsForGroupDeliveryInput",permalink:"/inputs/physical-card-custom-options-for-group-delivery-input"},next:{title:"PhysicalCardCustomOptionsInput",permalink:"/inputs/physical-card-custom-options-input"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[c,d]=(0,r.useState)(a);return(0,i.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>PhysicalCardCustomOptionsForPrintInput.<b>additionalPrintedLine</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardcustomoptionsforprintinputadditionalprintedlinestring-",level:4},{value:'<code>PhysicalCardCustomOptionsForPrintInput.<b>customCardHolderName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardcustomoptionsforprintinputcustomcardholdernamestring-",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"No description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"input PhysicalCardCustomOptionsForPrintInput {\n  additionalPrintedLine: String\n  customCardHolderName: String\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"physicalcardcustomoptionsforprintinputadditionalprintedlinestring-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardCustomOptionsForPrintInput.",(0,i.jsx)("b",{children:"additionalPrintedLine"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(n.a,{href:"/scalars/string",children:(0,i.jsx)(n.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"Additional line to be printed on the card."}),"\n",(0,i.jsxs)(n.p,{children:["This field will only be taken into account for custom card design that include it. (",(0,i.jsx)(n.a,{href:"https://docs.swan.io/guide/issue-cards#order-cards-with-additional-line",children:"Learn More"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"Max length allowed: 26 characters.\nCharacters allowed: alphanumeric\u2019*\u2019 \u2018.\u2019 \u2018-\u2019 \u2018/\u2019 apostrophe"}),"\n",(0,i.jsxs)(n.h4,{id:"physicalcardcustomoptionsforprintinputcustomcardholdernamestring-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardCustomOptionsForPrintInput.",(0,i.jsx)("b",{children:"customCardHolderName"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(n.a,{href:"/scalars/string",children:(0,i.jsx)(n.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"Alternative printed card owner."}),"\n",(0,i.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/inputs/print-physical-card-input",children:(0,i.jsx)(n.code,{children:"PrintPhysicalCardInput"})}),"  ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);