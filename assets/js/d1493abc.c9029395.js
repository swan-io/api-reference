"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73735],{75959:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var s=t(85893),a=t(11151),r=t(67294);const d={id:"payments",title:"payments"},l=void 0,c={id:"queries/payments",title:"payments",description:"Returns the list of payments.",source:"@site/docs/queries/payments.mdx",sourceDirName:"queries",slug:"/queries/payments",permalink:"/queries/payments",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/payments.mdx",tags:[],version:"current",frontMatter:{id:"payments",title:"payments"},sidebar:"schemaSidebar",previous:{title:"payment",permalink:"/queries/payment"},next:{title:"projectInfo",permalink:"/queries/project-info"}},i={},o=()=>{const e={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,a.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code>payments.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentsfirstint--",level:4},{value:'<code>payments.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentsafterstring-",level:4},{value:'<code>payments.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentsbeforestring-",level:4},{value:'<code>payments.<b>orderBy</b></code><Bullet></Bullet><code>PaymentOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentsorderbypaymentorderbyinput-",level:4},{value:'<code>payments.<b>filters</b></code><Bullet></Bullet><code>PaymentFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentsfilterspaymentfiltersinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>PaymentConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentconnection-",level:4}],u=({dataOpen:e,dataClose:n,children:t,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,a.a)()},[c,i]=(0,r.useState)(d);return(0,s.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function y(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Returns the list of payments."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"For a Project access token, this is all the payments of the project and for an User access token, these are the payments initiated by the user"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"payments(\n  first: Int! = 50\n  after: String\n  before: String\n  orderBy: PaymentOrderByInput\n  filters: PaymentFiltersInput\n): PaymentConnection!\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.h4,{id:"paymentsfirstint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["payments.",(0,s.jsx)("b",{children:"first"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/int",children:(0,s.jsx)(n.code,{children:"Int!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"number of elements in the list (default value 50)"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"paymentsafterstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["payments.",(0,s.jsx)("b",{children:"after"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the list of elements needs to start after a element"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"paymentsbeforestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["payments.",(0,s.jsx)("b",{children:"before"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the list of elements needs to end before a element"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"paymentsorderbypaymentorderbyinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["payments.",(0,s.jsx)("b",{children:"orderBy"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/inputs/payment-order-by-input",children:(0,s.jsx)(n.code,{children:"PaymentOrderByInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the list of elements needs to be ordered"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"paymentsfilterspaymentfiltersinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["payments.",(0,s.jsx)("b",{children:"filters"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/inputs/payment-filters-input",children:(0,s.jsx)(n.code,{children:"PaymentFiltersInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the list of elements needs to be filtered"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.h4,{id:"paymentconnection-",children:[(0,s.jsx)(n.a,{href:"/objects/payment-connection",children:(0,s.jsx)(n.code,{children:"PaymentConnection"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Please see the Connection interface"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var s=t(67294);const a={},r=s.createContext(a);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);