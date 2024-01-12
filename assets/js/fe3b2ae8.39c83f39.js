"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92783],{53623:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=a(85893),s=a(11151),i=a(67294);const r={id:"signature-data",title:"SignatureData"},d=void 0,c={id:"inputs/signature-data",title:"SignatureData",description:"Signature data used during apple pay inApp provisioning",source:"@site/docs/inputs/signature-data.mdx",sourceDirName:"inputs",slug:"/inputs/signature-data",permalink:"/inputs/signature-data",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/signature-data.mdx",tags:[],version:"current",frontMatter:{id:"signature-data",title:"SignatureData"},sidebar:"schemaSidebar",previous:{title:"SepaPaymentMandateDebtorInput",permalink:"/inputs/sepa-payment-mandate-debtor-input"},next:{title:"SingleUseVirtualCardConfigInput",permalink:"/inputs/single-use-virtual-card-config-input"}},l={},o=()=>{const e={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>SignatureData.<b>nonce</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signaturedatanoncestring--",level:4},{value:'<code>SignatureData.<b>nonceSignature</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signaturedatanoncesignaturestring--",level:4},{value:'<code>SignatureData.<b>certificates</b></code><Bullet></Bullet><code>[Certificate!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"signaturedatacertificatescertificate--",level:4}],h=({dataOpen:e,dataClose:n,children:a,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,s.a)()},[c,l]=(0,i.useState)(r);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Signature data used during apple pay inApp provisioning"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input SignatureData {\n  nonce: String!\n  nonceSignature: String!\n  certificates: [Certificate!]!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"signaturedatanoncestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SignatureData.",(0,t.jsx)("b",{children:"nonce"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"nonce"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"signaturedatanoncesignaturestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SignatureData.",(0,t.jsx)("b",{children:"nonceSignature"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"nonce signed by the secure element"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"signaturedatacertificatescertificate--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SignatureData.",(0,t.jsx)("b",{children:"certificates"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/inputs/certificate",children:(0,t.jsx)(n.code,{children:"[Certificate!]!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"list of apple generated certificates"}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>r});var t=a(67294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);