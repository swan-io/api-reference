"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[16544],{82217:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(85893),r=n(11151),s=n(67294);const i={id:"merchant-payment-link-filters-input",title:"MerchantPaymentLinkFiltersInput"},l=void 0,c={id:"inputs/merchant-payment-link-filters-input",title:"MerchantPaymentLinkFiltersInput",description:"No description",source:"@site/docs/inputs/merchant-payment-link-filters-input.mdx",sourceDirName:"inputs",slug:"/inputs/merchant-payment-link-filters-input",permalink:"/inputs/merchant-payment-link-filters-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/merchant-payment-link-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-link-filters-input",title:"MerchantPaymentLinkFiltersInput"},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentFiltersInput",permalink:"/inputs/merchant-payment-filters-input"},next:{title:"MerchantPaymentLinkOrderByInput",permalink:"/inputs/merchant-payment-link-order-by-input"}},d={},o=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>MerchantPaymentLinkFiltersInput.<b>status</b></code><Bullet></Bullet><code>[MerchantPaymentLinkStatus!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlinkfiltersinputstatusmerchantpaymentlinkstatus--",level:4},{value:'<code>MerchantPaymentLinkFiltersInput.<b>isAfterCreatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlinkfiltersinputisaftercreatedatdatetime-",level:4},{value:'<code>MerchantPaymentLinkFiltersInput.<b>isBeforeCreatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlinkfiltersinputisbeforecreatedatdatetime-",level:4},{value:'<code>MerchantPaymentLinkFiltersInput.<b>search</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlinkfiltersinputsearchstring-",level:4},{value:'<code>MerchantPaymentLinkFiltersInput.<b>amountSmallerThan</b></code><Bullet></Bullet><code>AmountValue</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlinkfiltersinputamountsmallerthanamountvalue-",level:4},{value:'<code>MerchantPaymentLinkFiltersInput.<b>amountGreaterThan</b></code><Bullet></Bullet><code>AmountValue</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantpaymentlinkfiltersinputamountgreaterthanamountvalue-",level:4}],p=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,r.a)()},[c,d]=(0,s.useState)(i);return(0,a.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input MerchantPaymentLinkFiltersInput {\n  status: [MerchantPaymentLinkStatus!]\n  isAfterCreatedAt: DateTime\n  isBeforeCreatedAt: DateTime\n  search: String\n  amountSmallerThan: AmountValue\n  amountGreaterThan: AmountValue\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentlinkfiltersinputstatusmerchantpaymentlinkstatus--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkFiltersInput.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/enums/merchant-payment-link-status",children:(0,a.jsx)(t.code,{children:"[MerchantPaymentLinkStatus!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To filter on some Merchant Payment Link Status (all if empty)"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentlinkfiltersinputisaftercreatedatdatetime-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkFiltersInput.",(0,a.jsx)("b",{children:"isAfterCreatedAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To filter after a createdAt value"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentlinkfiltersinputisbeforecreatedatdatetime-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkFiltersInput.",(0,a.jsx)("b",{children:"isBeforeCreatedAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/scalars/date-time",children:(0,a.jsx)(t.code,{children:"DateTime"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To filter before a createdAt value"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentlinkfiltersinputsearchstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkFiltersInput.",(0,a.jsx)("b",{children:"search"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To filter on some text occurrences (words or ids)"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentlinkfiltersinputamountsmallerthanamountvalue-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkFiltersInput.",(0,a.jsx)("b",{children:"amountSmallerThan"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/scalars/amount-value",children:(0,a.jsx)(t.code,{children:"AmountValue"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To filter payment links having an amount smaller than the given criteria"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"merchantpaymentlinkfiltersinputamountgreaterthanamountvalue-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MerchantPaymentLinkFiltersInput.",(0,a.jsx)("b",{children:"amountGreaterThan"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/scalars/amount-value",children:(0,a.jsx)(t.code,{children:"AmountValue"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To filter payment links having an amount greater than the given criteria"}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);