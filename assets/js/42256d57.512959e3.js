"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[69504],{84516:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var a=t(74848),d=t(28453),n=t(96540);const r={id:"failed-three-ds",title:"FailedThreeDs"},l=void 0,c={id:"objects/failed-three-ds",title:"FailedThreeDs",description:"No description",source:"@site/docs/objects/failed-three-ds.mdx",sourceDirName:"objects",slug:"/objects/failed-three-ds",permalink:"/objects/failed-three-ds",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/failed-three-ds.mdx",tags:[],version:"current",frontMatter:{id:"failed-three-ds",title:"FailedThreeDs"},sidebar:"schemaSidebar",previous:{title:"FacePhotoDocument",permalink:"/objects/face-photo-document"},next:{title:"FailedTransactionStatementStatusInfo",permalink:"/objects/failed-transaction-statement-status-info"}},i={},o=()=>{const e={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,d.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,d.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[c,i]=(0,n.useState)(r);return(0,a.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>FailedThreeDs.<b>status</b></code><Bullet></Bullet><code>ThreeDsStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"failedthreedsstatusthreedsstatus--",level:4},{value:'<code>FailedThreeDs.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"failedthreedsreasonstring--",level:4},{value:'<code>FailedThreeDs.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"failedthreedscodestring--",level:4}];function f(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type FailedThreeDs {\n  status: ThreeDsStatus!\n  reason: String!\n  code: String!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"failedthreedsstatusthreedsstatus--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FailedThreeDs.",(0,a.jsx)("b",{children:"status"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/enums/three-ds-status",children:(0,a.jsx)(s.code,{children:"ThreeDsStatus!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.h4,{id:"failedthreedsreasonstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FailedThreeDs.",(0,a.jsx)("b",{children:"reason"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.h4,{id:"failedthreedscodestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FailedThreeDs.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]})]})}function b(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var a=t(96540);const d={},n=a.createContext(d);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);