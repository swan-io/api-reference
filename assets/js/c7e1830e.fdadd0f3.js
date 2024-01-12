"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66443],{66079:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>p,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>b});var n=i(85893),c=i(11151),a=i(67294);const d={id:"account-received-direct-debit-mandate-filters-input",title:"AccountReceivedDirectDebitMandateFiltersInput"},s=void 0,r={id:"inputs/account-received-direct-debit-mandate-filters-input",title:"AccountReceivedDirectDebitMandateFiltersInput",description:"Filter that can be passed to get the received direct debit mandate in a specific data range",source:"@site/docs/inputs/account-received-direct-debit-mandate-filters-input.mdx",sourceDirName:"inputs",slug:"/inputs/account-received-direct-debit-mandate-filters-input",permalink:"/inputs/account-received-direct-debit-mandate-filters-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/account-received-direct-debit-mandate-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"account-received-direct-debit-mandate-filters-input",title:"AccountReceivedDirectDebitMandateFiltersInput"},sidebar:"schemaSidebar",previous:{title:"AccountOrderByInput",permalink:"/inputs/account-order-by-input"},next:{title:"AccountReceivedDirectDebitOrderByInput",permalink:"/inputs/account-received-direct-debit-order-by-input"}},l={},o=()=>{const e={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,c.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,c.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountReceivedDirectDebitMandateFiltersInput.<b>status</b></code><Bullet></Bullet><code>[ReceivedDirectDebitMandateStatus!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountreceiveddirectdebitmandatefiltersinputstatusreceiveddirectdebitmandatestatus--",level:4},{value:'<code>AccountReceivedDirectDebitMandateFiltersInput.<b>scheme</b></code><Bullet></Bullet><code>[ReceivedDirectDebitMandateScheme!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountreceiveddirectdebitmandatefiltersinputschemereceiveddirectdebitmandatescheme--",level:4}],m=({dataOpen:e,dataClose:t,children:i,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,c.a)()},[r,l]=(0,a.useState)(d);return(0,n.jsxs)(s.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&i]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Filter that can be passed to get the received direct debit mandate in a specific data range"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input AccountReceivedDirectDebitMandateFiltersInput {\n  status: [ReceivedDirectDebitMandateStatus!]\n  scheme: [ReceivedDirectDebitMandateScheme!]\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"accountreceiveddirectdebitmandatefiltersinputstatusreceiveddirectdebitmandatestatus--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountReceivedDirectDebitMandateFiltersInput.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/enums/received-direct-debit-mandate-status",children:(0,n.jsx)(t.code,{children:"[ReceivedDirectDebitMandateStatus!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"To filter on status values"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"accountreceiveddirectdebitmandatefiltersinputschemereceiveddirectdebitmandatescheme--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountReceivedDirectDebitMandateFiltersInput.",(0,n.jsx)("b",{children:"scheme"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/enums/received-direct-debit-mandate-scheme",children:(0,n.jsx)(t.code,{children:"[ReceivedDirectDebitMandateScheme!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"To filter on scheme values"}),"\n"]})]})}function v(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>d});var n=i(67294);const c={},a=n.createContext(c);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);