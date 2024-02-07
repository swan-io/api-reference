"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93082],{86829:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>h,Bullet:()=>o,Details:()=>j,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var n=s(85893),t=s(11151),r=s(67294);const i={id:"reachability",title:"Reachability"},d=void 0,c={id:"objects/reachability",title:"Reachability",description:"Information that can be used to determine where the iban can be used",source:"@site/docs/objects/reachability.mdx",sourceDirName:"objects",slug:"/objects/reachability",permalink:"/objects/reachability",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/reachability.mdx",tags:[],version:"current",frontMatter:{id:"reachability",title:"Reachability"},sidebar:"schemaSidebar",previous:{title:"RadioField",permalink:"/objects/radio-field"},next:{title:"ReceivedDirectDebitMandateAlreadyExistRejection",permalink:"/objects/received-direct-debit-mandate-already-exist-rejection"}},l={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,t.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Reachability.<b>sepaCreditTransferInst</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reachabilitysepacredittransferinstboolean--",level:4},{value:'<code>Reachability.<b>sepaDirectDebitCore</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reachabilitysepadirectdebitcoreboolean--",level:4},{value:'<code>Reachability.<b>sepaDirectDebitB2b</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reachabilitysepadirectdebitb2bboolean--",level:4},{value:'<code>Reachability.<b>sepaCreditTransfer</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reachabilitysepacredittransferboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:a,children:s,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,t.a)()},[c,l]=(0,r.useState)(i);return(0,n.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&s]})};function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Information that can be used to determine where the iban can be used"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type Reachability {\n  sepaCreditTransferInst: Boolean!\n  sepaDirectDebitCore: Boolean!\n  sepaDirectDebitB2b: Boolean!\n  sepaCreditTransfer: Boolean!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"reachabilitysepacredittransferinstboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Reachability.",(0,n.jsx)("b",{children:"sepaCreditTransferInst"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Can be used for instant transfer over SEPA"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"reachabilitysepadirectdebitcoreboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Reachability.",(0,n.jsx)("b",{children:"sepaDirectDebitCore"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Can be used for direct debit over SEPA"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"reachabilitysepadirectdebitb2bboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Reachability.",(0,n.jsx)("b",{children:"sepaDirectDebitB2b"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Can be used for B2B direct debit over SEPA"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"reachabilitysepacredittransferboolean--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Reachability.",(0,n.jsx)("b",{children:"sepaCreditTransfer"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(a.a,{href:"/scalars/boolean",children:(0,n.jsx)(a.code,{children:"Boolean!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Can be used for transfer over SEPA (can be used in initiateCreditTransfer mutation)"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/objects/valid-iban",children:(0,n.jsx)(a.code,{children:"ValidIban"})}),"  ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>d,a:()=>i});var n=s(67294);const t={},r=n.createContext(t);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);