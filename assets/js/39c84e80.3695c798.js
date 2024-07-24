"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39607],{67896:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>r,Details:()=>j,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(85893),c=t(11151),s=t(67294);const a={id:"supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection"},i=void 0,l={id:"objects/supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/objects/supporting-document-collection-connection.mdx",sourceDirName:"objects",slug:"/objects/supporting-document-collection-connection",permalink:"/objects/supporting-document-collection-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/supporting-document-collection-connection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-connection",title:"SupportingDocumentCollectionConnection"},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionCanceledStatusInfo",permalink:"/objects/supporting-document-collection-canceled-status-info"},next:{title:"SupportingDocumentCollectionEdge",permalink:"/objects/supporting-document-collection-edge"}},d={},r=()=>{const e={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.a)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,c.a)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>SupportingDocumentCollectionConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionconnectiontotalcountint--",level:4},{value:'<code>SupportingDocumentCollectionConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionconnectionpageinfopageinfo--",level:4},{value:'<code>SupportingDocumentCollectionConnection.<b>edges</b></code><Bullet></Bullet><code>[SupportingDocumentCollectionEdge!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supportingdocumentcollectionconnectionedgessupportingdocumentcollectionedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connection-",level:4},{value:"Member Of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,c.a)()},[l,d]=(0,s.useState)(a);return(0,o.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,o.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type SupportingDocumentCollectionConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [SupportingDocumentCollectionEdge!]!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"supportingdocumentcollectionconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Total number of element in the list"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"supportingdocumentcollectionconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Information about the current, the previous and the next page"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"supportingdocumentcollectionconnectionedgessupportingdocumentcollectionedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SupportingDocumentCollectionConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/supporting-document-collection-edge",children:(0,o.jsx)(n.code,{children:"[SupportingDocumentCollectionEdge!]!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"SupportingDocumentCollectionEdge list"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(n.h4,{id:"connection-",children:[(0,o.jsx)(n.a,{href:"/interfaces/connection",children:(0,o.jsx)(n.code,{children:"Connection"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Relay Connection type, used to paginate list of element (",(0,o.jsx)(n.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/objects/account-holder",children:(0,o.jsx)(n.code,{children:"AccountHolder"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/card-transaction",children:(0,o.jsx)(n.code,{children:"CardTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/check-transaction",children:(0,o.jsx)(n.code,{children:"CheckTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/fee-transaction",children:(0,o.jsx)(n.code,{children:"FeeTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/internal-credit-transfer",children:(0,o.jsx)(n.code,{children:"InternalCreditTransfer"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/internal-direct-debit-transaction",children:(0,o.jsx)(n.code,{children:"InternalDirectDebitTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/international-credit-transfer-transaction",children:(0,o.jsx)(n.code,{children:"InternationalCreditTransferTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/sepacredit-transfer-transaction",children:(0,o.jsx)(n.code,{children:"SEPACreditTransferTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/objects/sepadirect-debit-transaction",children:(0,o.jsx)(n.code,{children:"SEPADirectDebitTransaction"})}),"  ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const c={},s=o.createContext(c);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);