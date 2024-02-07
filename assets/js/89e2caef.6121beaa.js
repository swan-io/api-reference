"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25278],{47131:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>g});var t=s(85893),a=s(11151),d=s(67294);const o={id:"card-consent-pending-status-info",title:"CardConsentPendingStatusInfo"},c=void 0,r={id:"objects/card-consent-pending-status-info",title:"CardConsentPendingStatusInfo",description:"when the user has to consent to add this card",source:"@site/docs/objects/card-consent-pending-status-info.mdx",sourceDirName:"objects",slug:"/objects/card-consent-pending-status-info",permalink:"/objects/card-consent-pending-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/card-consent-pending-status-info.mdx",tags:[],version:"current",frontMatter:{id:"card-consent-pending-status-info",title:"CardConsentPendingStatusInfo"},sidebar:"schemaSidebar",previous:{title:"CardConnection",permalink:"/objects/card-connection"},next:{title:"CardDesignBackground",permalink:"/objects/card-design-background"}},i={},l=()=>{const e={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,a.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CardConsentPendingStatusInfo.<b>status</b></code><Bullet></Bullet><code>CardStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardconsentpendingstatusinfostatuscardstatus--",level:4},{value:'<code>CardConsentPendingStatusInfo.<b>consent</b></code><Bullet></Bullet><code>Consent!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cardconsentpendingstatusinfoconsentconsent--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>CardStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"cardstatusinfo-",level:4}],f=({dataOpen:e,dataClose:n,children:s,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,a.a)()},[r,i]=(0,d.useState)(o);return(0,t.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&s]})};function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"when the user has to consent to add this card"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type CardConsentPendingStatusInfo implements CardStatusInfo {\n  status: CardStatus!\n  consent: Consent!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"cardconsentpendingstatusinfostatuscardstatus--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardConsentPendingStatusInfo.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/enums/card-status",children:(0,t.jsx)(n.code,{children:"CardStatus!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Card status (always ConsentPending for type CardConsentPendingStatusInfo)"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"cardconsentpendingstatusinfoconsentconsent--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CardConsentPendingStatusInfo.",(0,t.jsx)("b",{children:"consent"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/objects/consent",children:(0,t.jsx)(n.code,{children:"Consent!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The consent required to add this card"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(n.h4,{id:"cardstatusinfo-",children:[(0,t.jsx)(n.a,{href:"/interfaces/card-status-info",children:(0,t.jsx)(n.code,{children:"CardStatusInfo"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Card Status Information"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(67294);const a={},d=t.createContext(a);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);