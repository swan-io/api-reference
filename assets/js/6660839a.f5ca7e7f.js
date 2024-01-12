"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[42575],{6223:(e,n,i)=>{i.r(n),i.d(n,{Badge:()=>g,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var s=i(85893),t=i(11151),a=i(67294);const d={id:"single-use-virtual-card-config-input",title:"SingleUseVirtualCardConfigInput"},r=void 0,l={id:"inputs/single-use-virtual-card-config-input",title:"SingleUseVirtualCardConfigInput",description:"No description",source:"@site/docs/inputs/single-use-virtual-card-config-input.mdx",sourceDirName:"inputs",slug:"/inputs/single-use-virtual-card-config-input",permalink:"/inputs/single-use-virtual-card-config-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/single-use-virtual-card-config-input.mdx",tags:[],version:"current",frontMatter:{id:"single-use-virtual-card-config-input",title:"SingleUseVirtualCardConfigInput"},sidebar:"schemaSidebar",previous:{title:"SignatureData",permalink:"/inputs/signature-data"},next:{title:"SpendingLimitInput",permalink:"/inputs/spending-limit-input"}},c={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>SingleUseVirtualCardConfigInput.<b>accountMembershipId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"singleusevirtualcardconfiginputaccountmembershipidid--",level:4},{value:'<code>SingleUseVirtualCardConfigInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"singleusevirtualcardconfiginputnamestring-",level:4},{value:'<code>SingleUseVirtualCardConfigInput.<b>spendingLimit</b></code><Bullet></Bullet><code>SpendingLimitInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"singleusevirtualcardconfiginputspendinglimitspendinglimitinput--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:i,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,t.a)()},[l,c]=(0,a.useState)(d);return(0,s.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&i]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input SingleUseVirtualCardConfigInput {\n  accountMembershipId: ID!\n  name: String\n  spendingLimit: SpendingLimitInput!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"singleusevirtualcardconfiginputaccountmembershipidid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SingleUseVirtualCardConfigInput.",(0,s.jsx)("b",{children:"accountMembershipId"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Unique identifier of a given account membership"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"singleusevirtualcardconfiginputnamestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SingleUseVirtualCardConfigInput.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Card name"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"singleusevirtualcardconfiginputspendinglimitspendinglimitinput--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SingleUseVirtualCardConfigInput.",(0,s.jsx)("b",{children:"spendingLimit"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/inputs/spending-limit-input",children:(0,s.jsx)(n.code,{children:"SpendingLimitInput!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Spending limit"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/inputs/add-single-use-virtual-cards-input",children:(0,s.jsx)(n.code,{children:"AddSingleUseVirtualCardsInput"})}),"  ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>d});var s=i(67294);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);