"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2377],{77553:(e,n,d)=>{d.r(n),d.d(n,{Badge:()=>h,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=d(74848),r=d(28453),a=d(96540);const s={id:"schedule-standing-order-input",title:"ScheduleStandingOrderInput"},i=void 0,c={id:"inputs/schedule-standing-order-input",title:"ScheduleStandingOrderInput",description:"No description",source:"@site/docs/inputs/schedule-standing-order-input.mdx",sourceDirName:"inputs",slug:"/inputs/schedule-standing-order-input",permalink:"/inputs/schedule-standing-order-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/schedule-standing-order-input.mdx",tags:[],version:"current",frontMatter:{id:"schedule-standing-order-input",title:"ScheduleStandingOrderInput"},sidebar:"schemaSidebar",previous:{title:"ReturnTransactionInput",permalink:"/inputs/return-transaction-input"},next:{title:"SepaBeneficiaryInput",permalink:"/inputs/sepa-beneficiary-input"}},l={},o=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:d,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,r.R)()},[c,l]=(0,a.useState)(s);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&d]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>ScheduleStandingOrderInput.<b>amount</b></code><Bullet></Bullet><code>AmountInput</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputamountamountinput-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>targetAvailableBalance</b></code><Bullet></Bullet><code>AmountInput</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputtargetavailablebalanceamountinput-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>period</b></code><Bullet></Bullet><code>StandingOrderPeriod!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputperiodstandingorderperiod--",level:4},{value:'<code>ScheduleStandingOrderInput.<b>firstExecutionDate</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputfirstexecutiondatedatetime-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>lastExecutionDate</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputlastexecutiondatedatetime-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>sepaBeneficiary</b></code><Bullet></Bullet><code>SepaBeneficiaryInput</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputsepabeneficiarysepabeneficiaryinput-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>accountId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputaccountidstring--",level:4},{value:'<code>ScheduleStandingOrderInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputconsentredirecturlstring--",level:4},{value:'<code>ScheduleStandingOrderInput.<b>reference</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputreferencestring-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputlabelstring-",level:4},{value:'<code>ScheduleStandingOrderInput.<b>creditTransferMode</b></code><Bullet></Bullet><code>CreditTransferMode</code> <Badge class="badge badge--secondary"></Badge>',id:"schedulestandingorderinputcredittransfermodecredittransfermode-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input ScheduleStandingOrderInput {\n  amount: AmountInput\n  targetAvailableBalance: AmountInput\n  period: StandingOrderPeriod!\n  firstExecutionDate: DateTime\n  lastExecutionDate: DateTime\n  sepaBeneficiary: SepaBeneficiaryInput\n  accountId: String!\n  consentRedirectUrl: String!\n  reference: String\n  label: String\n  creditTransferMode: CreditTransferMode\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputamountamountinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"amount"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/inputs/amount-input",children:(0,t.jsx)(n.code,{children:"AmountInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.p,{children:["Fix Amount that will be periodically transferred\n",(0,t.jsxs)(n.em,{children:["the value must be empty when ",(0,t.jsx)(n.code,{children:"targetAvailableBalance"})," is defined"]})]}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputtargetavailablebalanceamountinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"targetAvailableBalance"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/inputs/amount-input",children:(0,t.jsx)(n.code,{children:"AmountInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.p,{children:["Target available balance that will be used for periodically clipping the account\n",(0,t.jsxs)(n.em,{children:["the value must be empty when ",(0,t.jsx)(n.code,{children:"amount"})," is defined"]})]}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputperiodstandingorderperiod--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"period"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/enums/standing-order-period",children:(0,t.jsx)(n.code,{children:"StandingOrderPeriod!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(n.p,{children:"Scheduled period of Standing Order"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputfirstexecutiondatedatetime-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"firstExecutionDate"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/date-time",children:(0,t.jsx)(n.code,{children:"DateTime"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Earlier date the Standing Order will be executed"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputlastexecutiondatedatetime-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"lastExecutionDate"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/date-time",children:(0,t.jsx)(n.code,{children:"DateTime"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Latest date the Standing Order will be executed"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputsepabeneficiarysepabeneficiaryinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"sepaBeneficiary"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/inputs/sepa-beneficiary-input",children:(0,t.jsx)(n.code,{children:"SepaBeneficiaryInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(n.p,{children:"SEPA beneficiary of the Standing ORder"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputaccountidstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"accountId"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"Account the Standing Order will be attached to"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputconsentredirecturlstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputreferencestring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"reference"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. (regex [A-Za-z0-9(\\-)(\\_)(\\?)(\\.)(\\+),' ]{1,35})"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputlabelstring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"label"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.p,{children:"label (max 140 characters)"}),"\n",(0,t.jsxs)(n.h4,{id:"schedulestandingorderinputcredittransfermodecredittransfermode-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ScheduleStandingOrderInput.",(0,t.jsx)("b",{children:"creditTransferMode"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/enums/credit-transfer-mode",children:(0,t.jsx)(n.code,{children:"CreditTransferMode"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(n.p,{children:"Transfer mode of the Standing Order"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/mutations/schedule-standing-order",children:(0,t.jsx)(n.code,{children:"scheduleStandingOrder"})}),"  ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"mutation"})]})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>i});var t=d(96540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);