"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64918],{32275:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(74848),r=a(28453),s=a(96540);const o={id:"export-user-data",title:"exportUserData"},d=void 0,i={id:"mutations/export-user-data",title:"exportUserData",description:"Export all users of a project (projectId found in context).",source:"@site/docs/mutations/export-user-data.mdx",sourceDirName:"mutations",slug:"/mutations/export-user-data",permalink:"/mutations/export-user-data",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/export-user-data.mdx",tags:[],version:"current",frontMatter:{id:"export-user-data",title:"exportUserData"},sidebar:"schemaSidebar",previous:{title:"exportOnboardingData",permalink:"/mutations/export-onboarding-data"},next:{title:"finalizeOnboarding",permalink:"/mutations/finalize-onboarding"}},c={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:a,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,s.useState)(o);return(0,n.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&a]})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>exportUserData.<b>input</b></code><Bullet></Bullet><code>ExportUserDataInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"exportuserdatainputexportuserdatainput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ExportDataPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"exportdatapayload-",level:4}];function m(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Export all users of a project (",(0,n.jsx)(t.code,{children:"projectId"})," found in context)."]}),"\n",(0,n.jsx)(t.p,{children:"NB: This mutation only starts an asynchronous process and returns its identifier."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"exportUserData(\n  input: ExportUserDataInput!\n): ExportDataPayload\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.h4,{id:"exportuserdatainputexportuserdatainput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["exportUserData.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/inputs/export-user-data-input",children:(0,n.jsx)(t.code,{children:"ExportUserDataInput!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(t.h4,{id:"exportdatapayload-",children:[(0,n.jsx)(t.a,{href:"/unions/export-data-payload",children:(0,n.jsx)(t.code,{children:"ExportDataPayload"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"union"})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>d});var n=a(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);