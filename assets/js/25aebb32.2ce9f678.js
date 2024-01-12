"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24347],{1340:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>r,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var n=a(85893),s=a(11151),c=a(67294);const l={id:"legal-document-active-status-info",title:"LegalDocumentActiveStatusInfo"},o=void 0,d={id:"objects/legal-document-active-status-info",title:"LegalDocumentActiveStatusInfo",description:"No description",source:"@site/docs/objects/legal-document-active-status-info.mdx",sourceDirName:"objects",slug:"/objects/legal-document-active-status-info",permalink:"/objects/legal-document-active-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/legal-document-active-status-info.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-active-status-info",title:"LegalDocumentActiveStatusInfo"},sidebar:"schemaSidebar",previous:{title:"Invoice",permalink:"/objects/invoice"},next:{title:"LegalDocumentConnection",permalink:"/objects/legal-document-connection"}},i={},r=()=>{const e={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>LegalDocumentActiveStatusInfo.<b>status</b></code><Bullet></Bullet><code>LegalDocumentStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentactivestatusinfostatuslegaldocumentstatus--",level:4},{value:'<code>LegalDocumentActiveStatusInfo.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentactivestatusinfocreatedatdatetime--",level:4},{value:'<code>LegalDocumentActiveStatusInfo.<b>activatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentactivestatusinfoactivatedatdatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>LegalDocumentStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"legaldocumentstatusinfo-",level:4}],f=({dataOpen:e,dataClose:t,children:a,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[d,i]=(0,c.useState)(l);return(0,n.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&a]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type LegalDocumentActiveStatusInfo implements LegalDocumentStatusInfo {\n  status: LegalDocumentStatus!\n  createdAt: DateTime!\n  activatedAt: DateTime\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"legaldocumentactivestatusinfostatuslegaldocumentstatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentActiveStatusInfo.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/enums/legal-document-status",children:(0,n.jsx)(t.code,{children:"LegalDocumentStatus!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"LegalDocument status (always Active for type LegalDocumentActiveStatusInfo)"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"legaldocumentactivestatusinfocreatedatdatetime--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentActiveStatusInfo.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/scalars/date-time",children:(0,n.jsx)(t.code,{children:"DateTime!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Creation date"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"legaldocumentactivestatusinfoactivatedatdatetime-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["LegalDocumentActiveStatusInfo.",(0,n.jsx)("b",{children:"activatedAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(t.a,{href:"/scalars/date-time",children:(0,n.jsx)(t.code,{children:"DateTime"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Activation date"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(t.h4,{id:"legaldocumentstatusinfo-",children:[(0,n.jsx)(t.a,{href:"/interfaces/legal-document-status-info",children:(0,n.jsx)(t.code,{children:"LegalDocumentStatusInfo"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(67294);const s={},c=n.createContext(s);function l(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);