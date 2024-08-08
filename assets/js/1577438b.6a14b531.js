"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[48382],{99078:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var i=t(74848),a=t(28453),r=t(96540);const s={id:"initiate-international-credit-transfer-input",title:"InitiateInternationalCreditTransferInput"},d=void 0,l={id:"inputs/initiate-international-credit-transfer-input",title:"InitiateInternationalCreditTransferInput",description:"Input to create a quote and an international beneficiary",source:"@site/docs/inputs/initiate-international-credit-transfer-input.mdx",sourceDirName:"inputs",slug:"/inputs/initiate-international-credit-transfer-input",permalink:"/inputs/initiate-international-credit-transfer-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/initiate-international-credit-transfer-input.mdx",tags:[],version:"current",frontMatter:{id:"initiate-international-credit-transfer-input",title:"InitiateInternationalCreditTransferInput"},sidebar:"schemaSidebar",previous:{title:"InitiateFundingRequestInput",permalink:"/inputs/initiate-funding-request-input"},next:{title:"InitiateMerchantPaymentCollectionInput",permalink:"/inputs/initiate-merchant-payment-collection-input"}},c={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,a.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[l,c]=(0,r.useState)(s);return(0,i.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InitiateInternationalCreditTransferInput.<b>accountId</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputaccountidid-",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber</code> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputaccountnumberaccountnumber-",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>targetAmount</b></code><Bullet></Bullet><code>AmountInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputtargetamountamountinput--",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>internationalBeneficiary</b></code><Bullet></Bullet><code>InternationalBeneficiaryInput</code> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputinternationalbeneficiaryinternationalbeneficiaryinput-",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>trustedBeneficiaryId</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputtrustedbeneficiaryidid-",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>internationalCreditTransferDetails</b></code><Bullet></Bullet><code>[InternationalCreditTransferDetailsInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputinternationalcredittransferdetailsinternationalcredittransferdetailsinput--",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputconsentredirecturlstring--",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>externalReference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputexternalreferencestring-",level:4},{value:'<code>InitiateInternationalCreditTransferInput.<b>language</b></code><Bullet></Bullet><code>InternationalCreditTransferDisplayLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"initiateinternationalcredittransferinputlanguageinternationalcredittransferdisplaylanguage-",level:4},{value:"Member Of",id:"member-of",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Input to create a quote and an international beneficiary"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"input InitiateInternationalCreditTransferInput {\n  accountId: ID\n  accountNumber: AccountNumber\n  targetAmount: AmountInput!\n  internationalBeneficiary: InternationalBeneficiaryInput\n  trustedBeneficiaryId: ID\n  internationalCreditTransferDetails: [InternationalCreditTransferDetailsInput!]!\n  consentRedirectUrl: String!\n  externalReference: String\n  language: InternationalCreditTransferDisplayLanguage\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputaccountidid-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"accountId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/scalars/id",children:(0,i.jsx)(n.code,{children:"ID"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"Account ID of the originator of the international credit transfer"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputaccountnumberaccountnumber-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"accountNumber"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/scalars/account-number",children:(0,i.jsx)(n.code,{children:"AccountNumber"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"Account number if the beneficiary is a swan account"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputtargetamountamountinput--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"targetAmount"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/inputs/amount-input",children:(0,i.jsx)(n.code,{children:"AmountInput!"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.p,{children:"Target amount of the international credit transfer"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputinternationalbeneficiaryinternationalbeneficiaryinput-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"internationalBeneficiary"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/inputs/international-beneficiary-input",children:(0,i.jsx)(n.code,{children:"InternationalBeneficiaryInput"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.p,{children:"if the transfer will credit a new international beneficiary"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputtrustedbeneficiaryidid-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"trustedBeneficiaryId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/scalars/id",children:(0,i.jsx)(n.code,{children:"ID"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"COMING SOON *\nif the transfer will credit an existing international beneficiary"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputinternationalcredittransferdetailsinternationalcredittransferdetailsinput--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"internationalCreditTransferDetails"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/inputs/international-credit-transfer-details-input",children:(0,i.jsx)(n.code,{children:"[InternationalCreditTransferDetailsInput!]!"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.p,{children:"Transfer details"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputconsentredirecturlstring--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/scalars/string",children:(0,i.jsx)(n.code,{children:"String!"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"When the consent flow is finished the user is redirected to this URL"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputexternalreferencestring-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"externalReference"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/scalars/string",children:(0,i.jsx)(n.code,{children:"String"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(n.p,{children:"External reference"}),"\n",(0,i.jsxs)(n.h4,{id:"initiateinternationalcredittransferinputlanguageinternationalcredittransferdisplaylanguage-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InitiateInternationalCreditTransferInput.",(0,i.jsx)("b",{children:"language"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(n.a,{href:"/enums/international-credit-transfer-display-language",children:(0,i.jsx)(n.code,{children:"InternationalCreditTransferDisplayLanguage"})})," ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(n.p,{children:"Language used to output errors"}),"\n",(0,i.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/mutations/initiate-international-credit-transfer",children:(0,i.jsx)(n.code,{children:"initiateInternationalCreditTransfer"})}),"  ",(0,i.jsx)(f,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);