"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[99687],{77101:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>l,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>c,assets:()=>g,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var i=n(74848),s=n(28453),a=n(96540);const o={id:"funding-limit-settings-change-request-waiting-for-information-status-info",title:"FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo"},r=void 0,u={id:"objects/funding-limit-settings-change-request-waiting-for-information-status-info",title:"FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo",description:"StatusInfo when funding limit settings change request is waiting for more information",source:"@site/docs/objects/funding-limit-settings-change-request-waiting-for-information-status-info.mdx",sourceDirName:"objects",slug:"/objects/funding-limit-settings-change-request-waiting-for-information-status-info",permalink:"/objects/funding-limit-settings-change-request-waiting-for-information-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/funding-limit-settings-change-request-waiting-for-information-status-info.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-waiting-for-information-status-info",title:"FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo"},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettingsChangeRequestRefusedStatusInfo",permalink:"/objects/funding-limit-settings-change-request-refused-status-info"},next:{title:"FundingLimitSettingsChangeRequest",permalink:"/objects/funding-limit-settings-change-request"}},g={},d=()=>{const t={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=t=>{const e={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url,children:"\u2398"})]})},l=t=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{className:t.class,children:t.text})})},f=({dataOpen:t,dataClose:e,children:n,startOpen:o=!1})=>{const r={details:"details",summary:"summary",...(0,s.R)()},[u,g]=(0,a.useState)(o);return(0,i.jsxs)(r.details,{...u?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(r.summary,{onClick:t=>{t.preventDefault(),g((t=>!t))},style:{listStyle:"none"},children:u?t:e}),u&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo.<b>status</b></code><Bullet></Bullet><code>FundingLimitSettingsChangeRequestStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"fundinglimitsettingschangerequestwaitingforinformationstatusinfostatusfundinglimitsettingschangerequeststatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingLimitSettingsChangeRequestStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"fundinglimitsettingschangerequeststatusinfo-",level:4}];function h(t){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"StatusInfo when funding limit settings change request is waiting for more information"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:"type FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo implements FundingLimitSettingsChangeRequestStatusInfo {\n  status: FundingLimitSettingsChangeRequestStatus!\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(e.h4,{id:"fundinglimitsettingschangerequestwaitingforinformationstatusinfostatusfundinglimitsettingschangerequeststatus--",children:[(0,i.jsx)(e.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FundingLimitSettingsChangeRequestWaitingForInformationStatusInfo.",(0,i.jsx)("b",{children:"status"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(e.a,{href:"/enums/funding-limit-settings-change-request-status",children:(0,i.jsx)(e.code,{children:"FundingLimitSettingsChangeRequestStatus!"})})," ",(0,i.jsx)(l,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(l,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(e.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(e.h4,{id:"fundinglimitsettingschangerequeststatusinfo-",children:[(0,i.jsx)(e.a,{href:"/interfaces/funding-limit-settings-change-request-status-info",children:(0,i.jsx)(e.code,{children:"FundingLimitSettingsChangeRequestStatusInfo"})})," ",(0,i.jsx)(l,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,i.jsx)(e.p,{children:"Object containing details about funding limit settings change request status"})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function o(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);