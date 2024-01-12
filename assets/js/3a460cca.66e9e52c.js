"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72925],{28645:(e,d,t)=>{t.r(d),t.d(d,{Badge:()=>x,Bullet:()=>o,Details:()=>j,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var a=t(85893),c=t(11151),i=t(67294);const n={id:"received-direct-debit-mandate",title:"ReceivedDirectDebitMandate"},s=void 0,r={id:"interfaces/received-direct-debit-mandate",title:"ReceivedDirectDebitMandate",description:"Interface for Received Direct Debit Mandate",source:"@site/docs/interfaces/received-direct-debit-mandate.mdx",sourceDirName:"interfaces",slug:"/interfaces/received-direct-debit-mandate",permalink:"/interfaces/received-direct-debit-mandate",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/interfaces/received-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate",title:"ReceivedDirectDebitMandate"},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateStatusInfo",permalink:"/interfaces/received-direct-debit-mandate-status-info"},next:{title:"Rejection",permalink:"/interfaces/rejection"}},l={},o=()=>{const e={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const d={a:"a",...(0,c.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const d={span:"span",...(0,c.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ReceivedDirectDebitMandate.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandateidid--",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>version</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandateversionstring--",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatecreatedatdatetime--",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandateupdatedatdatetime--",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>signatureDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatesignaturedatedate-",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>executedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandateexecutedatdatetime-",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>expiredAt</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandateexpiredatdate-",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>statusInfo</b></code><Bullet></Bullet><code>ReceivedDirectDebitMandateStatusInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatestatusinforeceiveddirectdebitmandatestatusinfo--",level:4},{value:'<code>ReceivedDirectDebitMandate.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"receiveddirectdebitmandatenamestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],j=({dataOpen:e,dataClose:d,children:t,startOpen:n=!1})=>{const s={details:"details",summary:"summary",...(0,c.a)()},[r,l]=(0,i.useState)(n);return(0,a.jsxs)(s.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:d}),r&&t]})};function g(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"Interface for Received Direct Debit Mandate"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"interface ReceivedDirectDebitMandate {\n  id: ID!\n  version: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  signatureDate: Date\n  executedAt: DateTime\n  expiredAt: Date\n  statusInfo: ReceivedDirectDebitMandateStatusInfo!\n  name: String\n}\n"})}),"\n",(0,a.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandateidid--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/id",children:(0,a.jsx)(d.code,{children:"ID!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Unique identifier of the received direct debit mandate, generated by Swan"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandateversionstring--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"version"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/string",children:(0,a.jsx)(d.code,{children:"String!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Version of the received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandatecreatedatdatetime--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Creation date of the received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandateupdatedatdatetime--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Last Update date of the received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandatesignaturedatedate-",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"signatureDate"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/date",children:(0,a.jsx)(d.code,{children:"Date"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Date of signature of the received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandateexecutedatdatetime-",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"executedAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Date of the last direct debit transaction executed for the concerned received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandateexpiredatdate-",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"expiredAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/date",children:(0,a.jsx)(d.code,{children:"Date"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Expiry date of the received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandatestatusinforeceiveddirectdebitmandatestatusinfo--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"statusInfo"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/interfaces/received-direct-debit-mandate-status-info",children:(0,a.jsx)(d.code,{children:"ReceivedDirectDebitMandateStatusInfo!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Mandate status information of the received direct debit mandate"}),"\n"]}),"\n",(0,a.jsxs)(d.h4,{id:"receiveddirectdebitmandatenamestring-",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReceivedDirectDebitMandate.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/scalars/string",children:(0,a.jsx)(d.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(d.blockquote,{children:["\n",(0,a.jsx)(d.p,{children:"Mandate name"}),"\n"]}),"\n",(0,a.jsx)(d.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/queries/received-direct-debit-mandate",children:(0,a.jsx)(d.code,{children:"receivedDirectDebitMandate"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,a.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/objects/add-received-internal-direct-debit-b2-b-mandate-success-payload",children:(0,a.jsx)(d.code,{children:"AddReceivedInternalDirectDebitB2bMandateSuccessPayload"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload",children:(0,a.jsx)(d.code,{children:"AddReceivedSepaDirectDebitB2bMandateSuccessPayload"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/objects/enable-received-direct-debit-mandate-success-payload",children:(0,a.jsx)(d.code,{children:"EnableReceivedDirectDebitMandateSuccessPayload"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/objects/received-direct-debit-mandate-edge",children:(0,a.jsx)(d.code,{children:"ReceivedDirectDebitMandateEdge"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/objects/suspend-received-direct-debit-mandate-success-payload",children:(0,a.jsx)(d.code,{children:"SuspendReceivedDirectDebitMandateSuccessPayload"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/objects/update-received-sepa-direct-debit-b2-b-mandate-success-payload",children:(0,a.jsx)(d.code,{children:"UpdateReceivedSepaDirectDebitB2bMandateSuccessPayload"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(d.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.a,{href:"/objects/internal-received-direct-debit-mandate",children:(0,a.jsx)(d.code,{children:"InternalReceivedDirectDebitMandate"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/objects/separeceived-direct-debit-mandate",children:(0,a.jsx)(d.code,{children:"SEPAReceivedDirectDebitMandate"})}),"  ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:d}={...(0,c.a)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},11151:(e,d,t)=>{t.d(d,{Z:()=>s,a:()=>n});var a=t(67294);const c={},i=a.createContext(c);function n(e){const d=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function s(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),a.createElement(i.Provider,{value:d},e.children)}}}]);