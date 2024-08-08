"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49144],{87621:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>p,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>r,toc:()=>x});var i=d(74848),n=d(28453),t=d(96540);const s={id:"pending-digital-card",title:"PendingDigitalCard"},l=void 0,r={id:"objects/pending-digital-card",title:"PendingDigitalCard",description:"Pending Digital Card used for ApplePay or GooglePay",source:"@site/docs/objects/pending-digital-card.mdx",sourceDirName:"objects",slug:"/objects/pending-digital-card",permalink:"/objects/pending-digital-card",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/pending-digital-card.mdx",tags:[],version:"current",frontMatter:{id:"pending-digital-card",title:"PendingDigitalCard"},sidebar:"schemaSidebar",previous:{title:"PendingConsentAccountMembershipUpdate",permalink:"/objects/pending-consent-account-membership-update"},next:{title:"PendingFundingSourceStatusInfo",permalink:"/objects/pending-funding-source-status-info"}},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,n.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,n.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:d,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[r,c]=(0,t.useState)(s);return(0,i.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&d]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PendingDigitalCard.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardidid--",level:4},{value:'<code>PendingDigitalCard.<b>type</b></code><Bullet></Bullet><code>DigitalizationType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardtypedigitalizationtype--",level:4},{value:'<code>PendingDigitalCard.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardcreatedatdatetime--",level:4},{value:'<code>PendingDigitalCard.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardupdatedatdatetime--",level:4},{value:'<code>PendingDigitalCard.<b>walletProvider</b></code><Bullet></Bullet><code>WalletProvider!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardwalletproviderwalletprovider--",level:4},{value:'<code>PendingDigitalCard.<b>statusInfo</b></code><Bullet></Bullet><code>PendingDigitalCardStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardstatusinfopendingdigitalcardstatusinfo--",level:4},{value:'<code>PendingDigitalCard.<b>inAppProvisioningData</b></code><Bullet></Bullet><code>InAppProvisioningData</code> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardinappprovisioningdatainappprovisioningdata-",level:4},{value:'<code>PendingDigitalCard.inAppProvisioningData.<b>signatureData</b></code><Bullet></Bullet><code>SignatureData</code> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardinappprovisioningdatasignaturedatasignaturedata-",level:5},{value:'<code>PendingDigitalCard.<b>projectId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardprojectidid--",level:4},{value:'<code>PendingDigitalCard.<b>cardContractId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pendingdigitalcardcardcontractidid--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>DigitalCard</code> <Badge class="badge badge--secondary"></Badge>',id:"digitalcard-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Pending Digital Card used for ApplePay or GooglePay"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:"type PendingDigitalCard implements DigitalCard {\n  id: ID!\n  type: DigitalizationType!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  walletProvider: WalletProvider!\n  statusInfo: PendingDigitalCardStatusInfo!\n  inAppProvisioningData(\n    signatureData: SignatureData\n  ): InAppProvisioningData\n  projectId: ID!\n  cardContractId: ID!\n}\n"})}),"\n",(0,i.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardidid--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"id"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/scalars/id",children:(0,i.jsx)(a.code,{children:"ID!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"Unique identifier of a digital card"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardtypedigitalizationtype--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"type"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/enums/digitalization-type",children:(0,i.jsx)(a.code,{children:"DigitalizationType!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(a.p,{children:"The type of digitalization that created this digital card."}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardcreatedatdatetime--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/scalars/date-time",children:(0,i.jsx)(a.code,{children:"DateTime!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"Created date"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardupdatedatdatetime--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"updatedAt"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/scalars/date-time",children:(0,i.jsx)(a.code,{children:"DateTime!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"Updated date"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardwalletproviderwalletprovider--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"walletProvider"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/objects/wallet-provider",children:(0,i.jsx)(a.code,{children:"WalletProvider!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(a.p,{children:"Wallet Provider (ApplePay, GooglePay ...)"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardstatusinfopendingdigitalcardstatusinfo--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"statusInfo"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/interfaces/pending-digital-card-status-info",children:(0,i.jsx)(a.code,{children:"PendingDigitalCardStatusInfo!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsx)(a.p,{children:"Digital Card status information"}),"\n",(0,i.jsx)(a.p,{children:"In this type the status will be either ConsentPending or Pending"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardinappprovisioningdatainappprovisioningdata-",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"inAppProvisioningData"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/objects/in-app-provisioning-data",children:(0,i.jsx)(a.code,{children:"InAppProvisioningData"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(a.p,{children:"Data to provide to the wallet during InApp Provisioning"}),"\n",(0,i.jsx)(a.p,{children:"Signature Data is mandatory for ApplePay"}),"\n",(0,i.jsx)(a.p,{children:"This data is only available for a digital card in"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"status: Pending"}),"\n",(0,i.jsx)(a.li,{children:"type: InApp"}),"\n"]}),"\n",(0,i.jsxs)(a.h5,{id:"pendingdigitalcardinappprovisioningdatasignaturedatasignaturedata-",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.inAppProvisioningData.",(0,i.jsx)("b",{children:"signatureData"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/inputs/signature-data",children:(0,i.jsx)(a.code,{children:"SignatureData"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardprojectidid--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"projectId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/scalars/id",children:(0,i.jsx)(a.code,{children:"ID!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"The project ID"}),"\n",(0,i.jsxs)(a.h4,{id:"pendingdigitalcardcardcontractidid--",children:[(0,i.jsx)(a.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["PendingDigitalCard.",(0,i.jsx)("b",{children:"cardContractId"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(a.a,{href:"/scalars/id",children:(0,i.jsx)(a.code,{children:"ID!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(a.p,{children:"The card contract ID"}),"\n",(0,i.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(a.h4,{id:"digitalcard-",children:[(0,i.jsx)(a.a,{href:"/interfaces/digital-card",children:(0,i.jsx)(a.code,{children:"DigitalCard"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsx)(a.p,{children:"Digital Card used for ApplePay or GooglePay"}),"\n",(0,i.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"/objects/add-digital-card-success-payload",children:(0,i.jsx)(a.code,{children:"AddDigitalCardSuccessPayload"})}),"  ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},28453:(e,a,d)=>{d.d(a,{R:()=>s,x:()=>l});var i=d(96540);const n={},t=i.createContext(n);function s(e){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);