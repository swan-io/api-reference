"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91835],{83038:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>f,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=n(74848),a=n(28453),d=n(96540);const s={id:"sepacredit-transfer-internal-out-creditor",title:"SEPACreditTransferInternalOutCreditor"},i=void 0,c={id:"objects/sepacredit-transfer-internal-out-creditor",title:"SEPACreditTransferInternalOutCreditor",description:"SOON TO BE DEPRECATED",source:"@site/docs/objects/sepacredit-transfer-internal-out-creditor.mdx",sourceDirName:"objects",slug:"/objects/sepacredit-transfer-internal-out-creditor",permalink:"/objects/sepacredit-transfer-internal-out-creditor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/sepacredit-transfer-internal-out-creditor.mdx",tags:[],version:"current",frontMatter:{id:"sepacredit-transfer-internal-out-creditor",title:"SEPACreditTransferInternalOutCreditor"},sidebar:"schemaSidebar",previous:{title:"SEPACreditTransferInternalInDebtor",permalink:"/objects/sepacredit-transfer-internal-in-debtor"},next:{title:"SEPACreditTransferOutCreditor",permalink:"/objects/sepacredit-transfer-out-creditor"}},l={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const r={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,d.useState)(s);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditornamestring--",level:4},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>maskedIBAN</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditormaskedibanstring--",level:4},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>IBAN</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditoribanstring-",level:4},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>BIC</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditorbicstring-",level:4},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>virtualIBANEntryId</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditorvirtualibanentryidid-",level:4},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditoraccountnumberaccountnumber--",level:4},{value:'<code>SEPACreditTransferInternalOutCreditor.<b>beneficiary</b></code><Bullet></Bullet><code>InternalBeneficiary</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransferinternaloutcreditorbeneficiaryinternalbeneficiary--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPACreditTransferCreditor</code> <Badge class="badge badge--secondary"></Badge>',id:"sepacredittransfercreditor-",level:4}];function g(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"SOON TO BE DEPRECATED"}),"\nSepa Credit Transfer Creditor for internal transaction"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type SEPACreditTransferInternalOutCreditor implements SEPACreditTransferCreditor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n  virtualIBANEntryId: ID\n  accountNumber: AccountNumber!\n  beneficiary: InternalBeneficiary @deprecated\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditornamestring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"full name of the creditor"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditormaskedibanstring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"maskedIBAN"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"maskedIBAN"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditoribanstring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"IBAN"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"IBAN"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditorbicstring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"BIC"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"BIC"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditorvirtualibanentryidid-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"virtualIBANEntryId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/id",children:(0,t.jsx)(r.code,{children:"ID"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"identifier of a Virtual IBAN"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditoraccountnumberaccountnumber--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"accountNumber"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/scalars/account-number",children:(0,t.jsx)(r.code,{children:"AccountNumber!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"account number"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransferinternaloutcreditorbeneficiaryinternalbeneficiary--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SEPACreditTransferInternalOutCreditor.",(0,t.jsx)("b",{children:"beneficiary"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/objects/internal-beneficiary",children:(0,t.jsx)(r.code,{children:"InternalBeneficiary"})})," ",(0,t.jsx)(f,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.admonition,{title:"DEPRECATED",type:"warning",children:(0,t.jsx)(r.p,{children:"this field is always empty. It will be removed soon."})}),"\n",(0,t.jsxs)(r.p,{children:["beneficiary if the beneficiary is already saved\n",(0,t.jsx)(r.em,{children:"SOON TO BE DEPRECATED"}),"\nAlways empty, It will be removed soon."]}),"\n",(0,t.jsx)(r.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(r.h4,{id:"sepacredittransfercreditor-",children:[(0,t.jsx)(r.a,{href:"/interfaces/sepacredit-transfer-creditor",children:(0,t.jsx)(r.code,{children:"SEPACreditTransferCreditor"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(r.p,{children:"Sepa Credit Transfer Creditor"})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(96540);const a={},d=t.createContext(a);function s(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);