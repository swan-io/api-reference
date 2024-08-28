"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15080],{20137:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>j,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var r=s(74848),n=s(28453),a=s(96540);const d={id:"project-card-status",title:"ProjectCardStatus"},c=void 0,i={id:"enums/project-card-status",title:"ProjectCardStatus",description:"Card Status",source:"@site/docs/enums/project-card-status.mdx",sourceDirName:"enums",slug:"/enums/project-card-status",permalink:"/enums/project-card-status",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/enums/project-card-status.mdx",tags:[],version:"current",frontMatter:{id:"project-card-status",title:"ProjectCardStatus"},sidebar:"schemaSidebar",previous:{title:"ProjectCardSettingsBackgroundType",permalink:"/enums/project-card-settings-background-type"},next:{title:"ProjectStatus",permalink:"/enums/project-status"}},o={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,n.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const t={span:"span",...(0,n.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[i,o]=(0,a.useState)(d);return(0,r.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&s]})},p=[{value:"Values",id:"values",level:3},{value:"<code>ProjectCardStatus.<b>Initiated</b></code>",id:"projectcardstatusinitiated",level:4},{value:"<code>ProjectCardStatus.<b>Enabled</b></code>",id:"projectcardstatusenabled",level:4},{value:"<code>ProjectCardStatus.<b>Disabled</b></code>",id:"projectcardstatusdisabled",level:4},{value:"<code>ProjectCardStatus.<b>ToReview</b></code>",id:"projectcardstatustoreview",level:4},{value:"<code>ProjectCardStatus.<b>Suspended</b></code>",id:"projectcardstatussuspended",level:4},{value:"<code>ProjectCardStatus.<b>Rejected</b></code>",id:"projectcardstatusrejected",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Card Status"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"enum ProjectCardStatus {\n  Initiated\n  Enabled\n  Disabled\n  ToReview\n  Suspended\n  Rejected\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(t.h4,{id:"projectcardstatusinitiated",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProjectCardStatus.",(0,r.jsx)("b",{children:"Initiated"})]})})}),"\n",(0,r.jsx)(t.p,{children:"when project's card settings are Initiated"}),"\n",(0,r.jsx)(t.h4,{id:"projectcardstatusenabled",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProjectCardStatus.",(0,r.jsx)("b",{children:"Enabled"})]})})}),"\n",(0,r.jsx)(t.p,{children:"when project's card settings are Enabled"}),"\n",(0,r.jsx)(t.h4,{id:"projectcardstatusdisabled",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProjectCardStatus.",(0,r.jsx)("b",{children:"Disabled"})]})})}),"\n",(0,r.jsx)(t.p,{children:"when project's card settings are Disabled"}),"\n",(0,r.jsx)(t.h4,{id:"projectcardstatustoreview",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProjectCardStatus.",(0,r.jsx)("b",{children:"ToReview"})]})})}),"\n",(0,r.jsx)(t.p,{children:"when project's card settings are ToReview"}),"\n",(0,r.jsx)(t.h4,{id:"projectcardstatussuspended",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProjectCardStatus.",(0,r.jsx)("b",{children:"Suspended"})]})})}),"\n",(0,r.jsx)(t.p,{children:"when project's card settings are Suspended"}),"\n",(0,r.jsx)(t.h4,{id:"projectcardstatusrejected",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProjectCardStatus.",(0,r.jsx)("b",{children:"Rejected"})]})})}),"\n",(0,r.jsx)(t.p,{children:"when project's card settings are Rejected"}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/objects/card-settings",children:(0,r.jsx)(t.code,{children:"CardSettings"})}),"  ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var r=s(96540);const n={},a=r.createContext(n);function d(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);