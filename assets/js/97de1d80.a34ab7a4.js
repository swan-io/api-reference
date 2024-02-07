"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33279],{46310:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>b});var t=r(85893),c=r(11151),s=r(67294);const a={id:"fee-in-creditor",title:"FeeInCreditor"},o=void 0,d={id:"objects/fee-in-creditor",title:"FeeInCreditor",description:"Fee creditor for Incoming transaction",source:"@site/docs/objects/fee-in-creditor.mdx",sourceDirName:"objects",slug:"/objects/fee-in-creditor",permalink:"/objects/fee-in-creditor",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/fee-in-creditor.mdx",tags:[],version:"current",frontMatter:{id:"fee-in-creditor",title:"FeeInCreditor"},sidebar:"schemaSidebar",previous:{title:"FacePhotoDocument",permalink:"/objects/face-photo-document"},next:{title:"FeeInDebtor",permalink:"/objects/fee-in-debtor"}},i={},l=()=>{const e={span:"span",...(0,c.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,c.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>FeeInCreditor.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeincreditornamestring--",level:4},{value:'<code>FeeInCreditor.<b>accountNumber</b></code><Bullet></Bullet><code>AccountNumber!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"feeincreditoraccountnumberaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FeeCreditor</code> <Badge class="badge badge--secondary"></Badge>',id:"feecreditor-",level:4}],m=({dataOpen:e,dataClose:n,children:r,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,c.a)()},[d,i]=(0,s.useState)(a);return(0,t.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})};function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Fee creditor for Incoming transaction"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type FeeInCreditor implements FeeCreditor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"feeincreditornamestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeInCreditor.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"full name of the creditor"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"feeincreditoraccountnumberaccountnumber--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FeeInCreditor.",(0,t.jsx)("b",{children:"accountNumber"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/scalars/account-number",children:(0,t.jsx)(n.code,{children:"AccountNumber!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"account number"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"feecreditor-",children:[(0,t.jsx)(n.a,{href:"/interfaces/fee-creditor",children:(0,t.jsx)(n.code,{children:"FeeCreditor"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Fee creditor"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(67294);const c={},s=t.createContext(c);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);