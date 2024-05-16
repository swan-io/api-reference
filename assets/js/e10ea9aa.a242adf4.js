"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84150],{77866:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>j,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=t(85893),n=t(11151),d=t(67294);const r={id:"user-already-deactivated-rejection",title:"UserAlreadyDeactivatedRejection"},c=void 0,i={id:"objects/user-already-deactivated-rejection",title:"UserAlreadyDeactivatedRejection",description:"No description",source:"@site/docs/objects/user-already-deactivated-rejection.mdx",sourceDirName:"objects",slug:"/objects/user-already-deactivated-rejection",permalink:"/objects/user-already-deactivated-rejection",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/user-already-deactivated-rejection.mdx",tags:[],version:"current",frontMatter:{id:"user-already-deactivated-rejection",title:"UserAlreadyDeactivatedRejection"},sidebar:"schemaSidebar",previous:{title:"UpdateUserConsentSettingsTokenRejection",permalink:"/objects/update-user-consent-settings-token-rejection"},next:{title:"UserCannotBeDeactivatedRejection",permalink:"/objects/user-cannot-be-deactivated-rejection"}},l={},o=()=>{const e={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,n.a)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const a={span:"span",...(0,n.a)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>UserAlreadyDeactivatedRejection.<b>userId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useralreadydeactivatedrejectionuseridid--",level:4},{value:'<code>UserAlreadyDeactivatedRejection.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useralreadydeactivatedrejectionmessagestring--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],g=({dataOpen:e,dataClose:a,children:t,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,n.a)()},[i,l]=(0,d.useState)(r);return(0,s.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&t]})};function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type UserAlreadyDeactivatedRejection {\n  userId: ID!\n  message: String!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"useralreadydeactivatedrejectionuseridid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAlreadyDeactivatedRejection.",(0,s.jsx)("b",{children:"userId"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"User id"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"useralreadydeactivatedrejectionmessagestring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserAlreadyDeactivatedRejection.",(0,s.jsx)("b",{children:"message"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Message"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/unions/deactivate-user-payload",children:(0,s.jsx)(a.code,{children:"DeactivateUserPayload"})}),"  ",(0,s.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>r});var s=t(67294);const n={},d=s.createContext(n);function r(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);