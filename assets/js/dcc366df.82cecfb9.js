"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[23398],{43607:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var s=r(85893),t=r(11151),a=r(67294);const d={id:"view-card-numbers-input",title:"ViewCardNumbersInput"},i=void 0,c={id:"inputs/view-card-numbers-input",title:"ViewCardNumbersInput",description:"No description",source:"@site/docs/inputs/view-card-numbers-input.mdx",sourceDirName:"inputs",slug:"/inputs/view-card-numbers-input",permalink:"/inputs/view-card-numbers-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/view-card-numbers-input.mdx",tags:[],version:"current",frontMatter:{id:"view-card-numbers-input",title:"ViewCardNumbersInput"},sidebar:"schemaSidebar",previous:{title:"UserOrderByInput",permalink:"/inputs/user-order-by-input"},next:{title:"ViewPhysicalCardNumbersInput",permalink:"/inputs/view-physical-card-numbers-input"}},l={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>ViewCardNumbersInput.<b>cardId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewcardnumbersinputcardidid--",level:4},{value:'<code>ViewCardNumbersInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewcardnumbersinputconsentredirecturlstring--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:r,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,t.a)()},[c,l]=(0,a.useState)(d);return(0,s.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&r]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input ViewCardNumbersInput {\n  cardId: ID!\n  consentRedirectUrl: String!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"viewcardnumbersinputcardidid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewCardNumbersInput.",(0,s.jsx)("b",{children:"cardId"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Unique identifier of a card"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"viewcardnumbersinputconsentredirecturlstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ViewCardNumbersInput.",(0,s.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/mutations/view-card-numbers",children:(0,s.jsx)(n.code,{children:"viewCardNumbers"})}),"  ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>d});var s=r(67294);const t={},a=s.createContext(t);function d(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);