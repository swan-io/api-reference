"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9654],{15810:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var i=n(74848),t=n(28453),s=n(96540);const o={id:"physical-card-custom-options-for-group-delivery-input",title:"PhysicalCardCustomOptionsForGroupDeliveryInput"},a=void 0,d={id:"inputs/physical-card-custom-options-for-group-delivery-input",title:"PhysicalCardCustomOptionsForGroupDeliveryInput",description:"No description",source:"@site/docs/inputs/physical-card-custom-options-for-group-delivery-input.mdx",sourceDirName:"inputs",slug:"/inputs/physical-card-custom-options-for-group-delivery-input",permalink:"/inputs/physical-card-custom-options-for-group-delivery-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/physical-card-custom-options-for-group-delivery-input.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-custom-options-for-group-delivery-input",title:"PhysicalCardCustomOptionsForGroupDeliveryInput"},sidebar:"schemaSidebar",previous:{title:"PhysicalCardConfigInput",permalink:"/inputs/physical-card-config-input"},next:{title:"PhysicalCardCustomOptionsForPrintInput",permalink:"/inputs/physical-card-custom-options-for-print-input"}},c={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,t.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:n,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,t.R)()},[d,c]=(0,s.useState)(o);return(0,i.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>PhysicalCardCustomOptionsForGroupDeliveryInput.<b>additionalPrintedLine</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardcustomoptionsforgroupdeliveryinputadditionalprintedlinestring-",level:4},{value:'<code>PhysicalCardCustomOptionsForGroupDeliveryInput.<b>customCardHolderName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"physicalcardcustomoptionsforgroupdeliveryinputcustomcardholdernamestring-",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"No description"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"input PhysicalCardCustomOptionsForGroupDeliveryInput {\n  additionalPrintedLine: String\n  customCardHolderName: String\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"physicalcardcustomoptionsforgroupdeliveryinputadditionalprintedlinestring-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardCustomOptionsForGroupDeliveryInput.",(0,i.jsx)("b",{children:"additionalPrintedLine"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(r.a,{href:"/scalars/string",children:(0,i.jsx)(r.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.p,{children:"Additional line to be embossed on the card."}),"\n",(0,i.jsxs)(r.p,{children:["This field will only be taken into account for custom card design that include it. (",(0,i.jsx)(r.a,{href:"https://docs.swan.io/guide/issue-cards#order-cards-with-additional-line",children:"Learn More"}),")"]}),"\n",(0,i.jsx)(r.p,{children:"Max length allowed: 26 characters.\nCharacters allowed: alphanumeric\u2019*\u2019 \u2018.\u2019 \u2018-\u2019 \u2018/\u2019 apostrophe"}),"\n",(0,i.jsxs)(r.h4,{id:"physicalcardcustomoptionsforgroupdeliveryinputcustomcardholdernamestring-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PhysicalCardCustomOptionsForGroupDeliveryInput.",(0,i.jsx)("b",{children:"customCardHolderName"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(r.a,{href:"/scalars/string",children:(0,i.jsx)(r.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.p,{children:"Alternative printed card owner."}),"\n",(0,i.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/inputs/card-config-with-group-delivery-input",children:(0,i.jsx)(r.code,{children:"CardConfigWithGroupDeliveryInput"})}),"  ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var i=n(96540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);