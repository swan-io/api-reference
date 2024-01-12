"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17903],{51548:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(85893),s=n(11151),c=n(67294);const r={id:"generate-account-statement",title:"generateAccountStatement"},o=void 0,i={id:"mutations/generate-account-statement",title:"generateAccountStatement",description:"Generate an account statement",source:"@site/docs/mutations/generate-account-statement.mdx",sourceDirName:"mutations",slug:"/mutations/generate-account-statement",permalink:"/mutations/generate-account-statement",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/generate-account-statement.mdx",tags:[],version:"current",frontMatter:{id:"generate-account-statement",title:"generateAccountStatement"},sidebar:"schemaSidebar",previous:{title:"finalizeOnboarding",permalink:"/mutations/finalize-onboarding"},next:{title:"generateCapitalDepositDocumentUploadUrl",permalink:"/mutations/generate-capital-deposit-document-upload-url"}},d={},l=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>generateAccountStatement.<b>input</b></code><Bullet></Bullet><code>GenerateAccountStatementInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"generateaccountstatementinputgenerateaccountstatementinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Statement</code> <Badge class="badge badge--secondary"></Badge>',id:"statement-",level:4}],g=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[i,d]=(0,c.useState)(r);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Generate an account statement"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"generateAccountStatement(\n  input: GenerateAccountStatementInput!\n): Statement!\n"})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"generateaccountstatementinputgenerateaccountstatementinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["generateAccountStatement.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/inputs/generate-account-statement-input",children:(0,a.jsx)(t.code,{children:"GenerateAccountStatementInput!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(t.h4,{id:"statement-",children:[(0,a.jsx)(t.a,{href:"/objects/statement",children:(0,a.jsx)(t.code,{children:"Statement"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"A statement represent metadata around a banking document that list all of the BOOKED banking transactions that have happened between startDate and endDate"}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const s={},c=a.createContext(s);function r(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);