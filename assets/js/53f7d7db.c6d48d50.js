"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[76185],{39361:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var c=n(85893),t=n(11151),s=n(67294);const l={id:"balance",title:"Balance"},r=void 0,o={id:"objects/balance",title:"Balance",description:"Balance Information",source:"@site/docs/objects/balance.mdx",sourceDirName:"objects",slug:"/objects/balance",permalink:"/objects/balance",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/balance.mdx",tags:[],version:"current",frontMatter:{id:"balance",title:"Balance"},sidebar:"schemaSidebar",previous:{title:"BadRequestRejection",permalink:"/objects/bad-request-rejection"},next:{title:"Bank",permalink:"/objects/bank"}},d={},i=()=>{const e={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,t.a)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.a)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Balance.<b>account</b></code><Bullet></Bullet><code>Account!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"balanceaccountaccount--",level:4},{value:'<code>Balance.<b>balances</b></code><Bullet></Bullet><code>AccountBalances</code> <Badge class="badge badge--secondary"></Badge>',id:"balancebalancesaccountbalances-",level:4},{value:'<code>Balance.<b>lastSctOut</b></code><Bullet></Bullet><code>SEPACreditTransferTransaction</code> <Badge class="badge badge--secondary"></Badge>',id:"balancelastsctoutsepacredittransfertransaction-",level:4},{value:'<code>Balance.<b>lastSctIn</b></code><Bullet></Bullet><code>SEPACreditTransferTransaction</code> <Badge class="badge badge--secondary"></Badge>',id:"balancelastsctinsepacredittransfertransaction-",level:4}],j=({dataOpen:e,dataClose:a,children:n,startOpen:l=!1})=>{const r={details:"details",summary:"summary",...(0,t.a)()},[o,d]=(0,s.useState)(l);return(0,c.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&n]})};function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"Balance Information"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type Balance {\n  account: Account!\n  balances: AccountBalances\n  lastSctOut: SEPACreditTransferTransaction\n  lastSctIn: SEPACreditTransferTransaction\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"balanceaccountaccount--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Balance.",(0,c.jsx)("b",{children:"account"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/objects/account",children:(0,c.jsx)(a.code,{children:"Account!"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Matching account for this balance"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"balancebalancesaccountbalances-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Balance.",(0,c.jsx)("b",{children:"balances"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/objects/account-balances",children:(0,c.jsx)(a.code,{children:"AccountBalances"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"A list of balances regarding an account."}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"balancelastsctoutsepacredittransfertransaction-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Balance.",(0,c.jsx)("b",{children:"lastSctOut"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/objects/sepacredit-transfer-transaction",children:(0,c.jsx)(a.code,{children:"SEPACreditTransferTransaction"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Last SCT OUT transaction"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"balancelastsctinsepacredittransfertransaction-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Balance.",(0,c.jsx)("b",{children:"lastSctIn"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/objects/sepacredit-transfer-transaction",children:(0,c.jsx)(a.code,{children:"SEPACreditTransferTransaction"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Last SCT IN transaction"}),"\n"]})]})}function f(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>l});var c=n(67294);const t={},s=c.createContext(t);function l(e){const a=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),c.createElement(s.Provider,{value:a},e.children)}}}]);