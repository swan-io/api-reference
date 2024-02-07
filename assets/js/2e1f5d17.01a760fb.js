"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89973],{68046:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>t,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>x});var a=s(85893),r=s(11151),d=s(67294);const l={id:"released-reason",title:"ReleasedReason"},t=void 0,o={id:"enums/released-reason",title:"ReleasedReason",description:"No description",source:"@site/docs/enums/released-reason.mdx",sourceDirName:"enums",slug:"/enums/released-reason",permalink:"/enums/released-reason",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/released-reason.mdx",tags:[],version:"current",frontMatter:{id:"released-reason",title:"ReleasedReason"},sidebar:"schemaSidebar",previous:{title:"RejectedVerificationReason",permalink:"/enums/rejected-verification-reason"},next:{title:"RequestMerchantProfileUpdateStatus",permalink:"/enums/request-merchant-profile-update-status"}},i={},c=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Values",id:"values",level:3},{value:"<code>ReleasedReason.<b>Captured</b></code>",id:"releasedreasoncaptured",level:4},{value:"<code>ReleasedReason.<b>Expired</b></code>",id:"releasedreasonexpired",level:4},{value:"<code>ReleasedReason.<b>AdviceReceived</b></code>",id:"releasedreasonadvicereceived",level:4},{value:"<code>ReleasedReason.<b>MerchantReleased</b></code>",id:"releasedreasonmerchantreleased",level:4},{value:"<code>ReleasedReason.<b>ManuallyReleased</b></code>",id:"releasedreasonmanuallyreleased",level:4},{value:"<code>ReleasedReason.<b>Other</b></code>",id:"releasedreasonother",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:s,startOpen:l=!1})=>{const t={details:"details",summary:"summary",...(0,r.a)()},[o,i]=(0,d.useState)(l);return(0,a.jsxs)(t.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(t.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&s]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"enum ReleasedReason {\n  Captured\n  Expired\n  AdviceReceived\n  MerchantReleased\n  ManuallyReleased\n  Other\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(n.h4,{id:"releasedreasoncaptured",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedReason.",(0,a.jsx)("b",{children:"Captured"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Authorization fully captured by one or more debits"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"releasedreasonexpired",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedReason.",(0,a.jsx)("b",{children:"Expired"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Authorization expired"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"releasedreasonadvicereceived",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedReason.",(0,a.jsx)("b",{children:"AdviceReceived"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Authorization has been superseded by an advice"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"releasedreasonmerchantreleased",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedReason.",(0,a.jsx)("b",{children:"MerchantReleased"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Authorization released by the merchant"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"releasedreasonmanuallyreleased",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedReason.",(0,a.jsx)("b",{children:"ManuallyReleased"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Authorization manually released by Swan"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"releasedreasonother",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ReleasedReason.",(0,a.jsx)("b",{children:"Other"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Authorization released for other/undefined reasons"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/objects/released-transaction-status-info",children:(0,a.jsx)(n.code,{children:"ReleasedTransactionStatusInfo"})}),"  ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var a=s(67294);const r={},d=a.createContext(r);function l(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);