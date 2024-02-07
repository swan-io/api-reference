"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20404],{50210:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>u,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(85893),t=n(11151),r=n(67294);const l={id:"virtual-ibanentry",title:"VirtualIBANEntry"},d=void 0,c={id:"objects/virtual-ibanentry",title:"VirtualIBANEntry",description:"Virtual IBAN can be used by the account holder to receive SCT (Sepa Credit Transfer) or to be debited by SDD (Sepa Direct Debit).",source:"@site/docs/objects/virtual-ibanentry.mdx",sourceDirName:"objects",slug:"/objects/virtual-ibanentry",permalink:"/objects/virtual-ibanentry",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/virtual-ibanentry.mdx",tags:[],version:"current",frontMatter:{id:"virtual-ibanentry",title:"VirtualIBANEntry"},sidebar:"schemaSidebar",previous:{title:"VirtualIBANEntryEdge",permalink:"/objects/virtual-ibanentry-edge"},next:{title:"WalletProvider",permalink:"/objects/wallet-provider"}},i={},o=()=>{const e={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,t.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,t.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>VirtualIBANEntry.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryidid--",level:4},{value:'<code>VirtualIBANEntry.<b>IBAN</b></code><Bullet></Bullet><code>IBAN!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryibaniban--",level:4},{value:'<code>VirtualIBANEntry.<b>BIC</b></code><Bullet></Bullet><code>BIC!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentrybicbic--",level:4},{value:'<code>VirtualIBANEntry.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentrylabelstring-",level:4},{value:'<code>VirtualIBANEntry.<b>status</b></code><Bullet></Bullet><code>IBANStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentrystatusibanstatus--",level:4},{value:'<code>VirtualIBANEntry.<b>blockSDD</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"virtualibanentryblocksddboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:a,children:n,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,t.a)()},[c,i]=(0,r.useState)(l);return(0,s.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&n]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Virtual IBAN can be used by the account holder to receive SCT (Sepa Credit Transfer) or to be debited by SDD (Sepa Direct Debit)."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type VirtualIBANEntry {\n  id: ID!\n  IBAN: IBAN!\n  BIC: BIC!\n  label: String\n  status: IBANStatus!\n  blockSDD: Boolean!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"virtualibanentryidid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntry.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Unique identifier of a Virtual IBAN entry"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"virtualibanentryibaniban--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntry.",(0,s.jsx)("b",{children:"IBAN"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/iban",children:(0,s.jsx)(a.code,{children:"IBAN!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"International Bank Account Number"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"virtualibanentrybicbic--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntry.",(0,s.jsx)("b",{children:"BIC"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/bic",children:(0,s.jsx)(a.code,{children:"BIC!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Bank Identifier Code"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"virtualibanentrylabelstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntry.",(0,s.jsx)("b",{children:"label"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Label (could be used to identify)"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"virtualibanentrystatusibanstatus--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntry.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/enums/ibanstatus",children:(0,s.jsx)(a.code,{children:"IBANStatus!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Status of the Iban"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"virtualibanentryblocksddboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["VirtualIBANEntry.",(0,s.jsx)("b",{children:"blockSDD"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"true"})," if the Virtual IBAN refuses all Sepa Direct Debit received"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/objects/add-virtual-iban-entry-success-payload",children:(0,s.jsx)(a.code,{children:"AddVirtualIbanEntrySuccessPayload"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/allow-sdd-virtual-iban-entry-success-payload",children:(0,s.jsx)(a.code,{children:"AllowSddVirtualIbanEntrySuccessPayload"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/cancel-virtual-iban-entry-success-payload",children:(0,s.jsx)(a.code,{children:"CancelVirtualIbanEntrySuccessPayload"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/deny-sdd-virtual-iban-entry-success-payload",children:(0,s.jsx)(a.code,{children:"DenySddVirtualIbanEntrySuccessPayload"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/objects/virtual-ibanentry-edge",children:(0,s.jsx)(a.code,{children:"VirtualIBANEntryEdge"})}),"  ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>d,a:()=>l});var s=n(67294);const t={},r=s.createContext(t);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);