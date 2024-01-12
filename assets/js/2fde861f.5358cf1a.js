"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2232],{95692:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var t=s(85893),n=s(11151),r=s(67294);const c={id:"partnership-canceled-status-info",title:"PartnershipCanceledStatusInfo"},d=void 0,i={id:"objects/partnership-canceled-status-info",title:"PartnershipCanceledStatusInfo",description:"Partnership Status canceled",source:"@site/docs/objects/partnership-canceled-status-info.mdx",sourceDirName:"objects",slug:"/objects/partnership-canceled-status-info",permalink:"/objects/partnership-canceled-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/partnership-canceled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"partnership-canceled-status-info",title:"PartnershipCanceledStatusInfo"},sidebar:"schemaSidebar",previous:{title:"PartnershipAcceptedStatusInfo",permalink:"/objects/partnership-accepted-status-info"},next:{title:"PartnershipCancelingStatusInfo",permalink:"/objects/partnership-canceling-status-info"}},l={},o=()=>{const e={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,n.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>PartnershipCanceledStatusInfo.<b>status</b></code><Bullet></Bullet><code>PartnershipStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnershipcanceledstatusinfostatuspartnershipstatus--",level:4},{value:'<code>PartnershipCanceledStatusInfo.<b>acceptedDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnershipcanceledstatusinfoaccepteddatedatetime--",level:4},{value:'<code>PartnershipCanceledStatusInfo.<b>canceledDate</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnershipcanceledstatusinfocanceleddatedatetime--",level:4},{value:'<code>PartnershipCanceledStatusInfo.<b>reason</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnershipcanceledstatusinforeasonstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PartnershipStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"partnershipstatusinfo-",level:4}],f=({dataOpen:e,dataClose:a,children:s,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,n.a)()},[i,l]=(0,r.useState)(c);return(0,t.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&s]})};function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Partnership Status canceled"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type PartnershipCanceledStatusInfo implements PartnershipStatusInfo {\n  status: PartnershipStatus!\n  acceptedDate: DateTime!\n  canceledDate: DateTime!\n  reason: String!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"partnershipcanceledstatusinfostatuspartnershipstatus--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnershipCanceledStatusInfo.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/enums/partnership-status",children:(0,t.jsx)(a.code,{children:"PartnershipStatus!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Partnership status (always Canceled for type PartnershipCanceledStatusInfo)"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"partnershipcanceledstatusinfoaccepteddatedatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnershipCanceledStatusInfo.",(0,t.jsx)("b",{children:"acceptedDate"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Accepted date of the partnership for this account"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"partnershipcanceledstatusinfocanceleddatedatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnershipCanceledStatusInfo.",(0,t.jsx)("b",{children:"canceledDate"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Canceled date of the partnership for this account"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"partnershipcanceledstatusinforeasonstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnershipCanceledStatusInfo.",(0,t.jsx)("b",{children:"reason"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Reason of the cancelation"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(a.h4,{id:"partnershipstatusinfo-",children:[(0,t.jsx)(a.a,{href:"/interfaces/partnership-status-info",children:(0,t.jsx)(a.code,{children:"PartnershipStatusInfo"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Partnership Status information"}),"\n"]})]})}function g(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>d,a:()=>c});var t=s(67294);const n={},r=t.createContext(n);function c(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);