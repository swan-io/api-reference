"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2009],{32940:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var d=n(85893),t=n(11151),r=n(67294);const a={id:"address-input",title:"AddressInput"},c=void 0,i={id:"inputs/address-input",title:"AddressInput",description:"Address Information",source:"@site/docs/inputs/address-input.mdx",sourceDirName:"inputs",slug:"/inputs/address-input",permalink:"/inputs/address-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/address-input.mdx",tags:[],version:"current",frontMatter:{id:"address-input",title:"AddressInput"},sidebar:"schemaSidebar",previous:{title:"AddressInformationInput",permalink:"/inputs/address-information-input"},next:{title:"AllowSddInput",permalink:"/inputs/allow-sdd-input"}},l={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,t.a)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.a)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AddressInput.<b>addressLine1</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addressinputaddressline1string-",level:4},{value:'<code>AddressInput.<b>addressLine2</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addressinputaddressline2string-",level:4},{value:'<code>AddressInput.<b>city</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addressinputcitystring-",level:4},{value:'<code>AddressInput.<b>postalCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addressinputpostalcodestring-",level:4},{value:'<code>AddressInput.<b>state</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"addressinputstatestring-",level:4},{value:'<code>AddressInput.<b>country</b></code><Bullet></Bullet><code>CCA3!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addressinputcountrycca3--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[i,l]=(0,r.useState)(a);return(0,d.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&n]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"Address Information"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"input AddressInput {\n  addressLine1: String\n  addressLine2: String\n  city: String\n  postalCode: String\n  state: String\n  country: CCA3!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"addressinputaddressline1string-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddressInput.",(0,d.jsx)("b",{children:"addressLine1"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"address line 1 (max 100 characters)"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"addressinputaddressline2string-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddressInput.",(0,d.jsx)("b",{children:"addressLine2"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"address line 2 (max 100 characters)"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"addressinputcitystring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddressInput.",(0,d.jsx)("b",{children:"city"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"city (max 100 characters)"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"addressinputpostalcodestring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddressInput.",(0,d.jsx)("b",{children:"postalCode"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"postal code (max 10 characters)"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"addressinputstatestring-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddressInput.",(0,d.jsx)("b",{children:"state"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/string",children:(0,d.jsx)(s.code,{children:"String"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"state (max 100 characters)"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"addressinputcountrycca3--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddressInput.",(0,d.jsx)("b",{children:"country"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/scalars/cca3",children:(0,d.jsx)(s.code,{children:"CCA3!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"country code"}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/inputs/create-merchant-payment-link-input",children:(0,d.jsx)(s.code,{children:"CreateMerchantPaymentLinkInput"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/inputs/sepa-beneficiary-input",children:(0,d.jsx)(s.code,{children:"SepaBeneficiaryInput"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"input"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/inputs/sepa-payment-mandate-debtor-input",children:(0,d.jsx)(s.code,{children:"SepaPaymentMandateDebtorInput"})}),"  ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function j(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var d=n(67294);const t={},r=d.createContext(t);function a(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);