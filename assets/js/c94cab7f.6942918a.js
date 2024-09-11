"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44486],{16714:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>j,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var o=t(74848),s=t(28453),c=t(96540);const i={id:"document-extension-not-allowed-rejection",title:"DocumentExtensionNotAllowedRejection"},d=void 0,a={id:"objects/document-extension-not-allowed-rejection",title:"DocumentExtensionNotAllowedRejection",description:"Rejection returned if the document extension is not allowed",source:"@site/docs/objects/document-extension-not-allowed-rejection.mdx",sourceDirName:"objects",slug:"/objects/document-extension-not-allowed-rejection",permalink:"/objects/document-extension-not-allowed-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/document-extension-not-allowed-rejection.mdx",tags:[],version:"current",frontMatter:{id:"document-extension-not-allowed-rejection",title:"DocumentExtensionNotAllowedRejection"},sidebar:"schemaSidebar",previous:{title:"DocumentCanNotBeRejectedRejection",permalink:"/objects/document-can-not-be-rejected-rejection"},next:{title:"DocumentParentLinkMissingRejection",permalink:"/objects/document-parent-link-missing-rejection"}},l={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[a,l]=(0,c.useState)(i);return(0,o.jsxs)(d.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>DocumentExtensionNotAllowedRejection.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"documentextensionnotallowedrejectionidstring--",level:4},{value:'<code>DocumentExtensionNotAllowedRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"documentextensionnotallowedrejectionmessagestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary"></Badge>',id:"rejection-",level:4}];function g(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Rejection returned if the document extension is not allowed"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type DocumentExtensionNotAllowedRejection implements Rejection {\n  id: String!\n  message: String!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"documentextensionnotallowedrejectionidstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentExtensionNotAllowedRejection.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.h4,{id:"documentextensionnotallowedrejectionmessagestring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["DocumentExtensionNotAllowedRejection.",(0,o.jsx)("b",{children:"message"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsxs)(n.h4,{id:"rejection-",children:[(0,o.jsx)(n.a,{href:"/interfaces/rejection",children:(0,o.jsx)(n.code,{children:"Rejection"})})," ",(0,o.jsx)(j,{class:"badge badge--secondary",text:"interface"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var o=t(96540);const s={},c=o.createContext(s);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);