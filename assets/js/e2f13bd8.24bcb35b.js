"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89187],{93967:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>m,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=s(85893),r=s(11151),t=s(67294);const i={id:"view-card-numbers",title:"viewCardNumbers"},d=void 0,c={id:"mutations/view-card-numbers",title:"viewCardNumbers",description:"Reveal the card numbers in the consent page once consent has been given by the cardholder",source:"@site/docs/mutations/view-card-numbers.mdx",sourceDirName:"mutations",slug:"/mutations/view-card-numbers",permalink:"/mutations/view-card-numbers",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/view-card-numbers.mdx",tags:[],version:"current",frontMatter:{id:"view-card-numbers",title:"viewCardNumbers"},sidebar:"schemaSidebar",previous:{title:"updateWebhookSubscription",permalink:"/mutations/update-webhook-subscription"},next:{title:"viewPhysicalCardNumbers",permalink:"/mutations/view-physical-card-numbers"}},o={},l=()=>{const e={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,r.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>viewCardNumbers.<b>input</b></code><Bullet></Bullet><code>ViewCardNumbersInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewcardnumbersinputviewcardnumbersinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ViewCardNumbersPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"viewcardnumberspayload-",level:4}],p=({dataOpen:e,dataClose:n,children:s,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,r.a)()},[c,o]=(0,t.useState)(i);return(0,a.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&s]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Reveal the card numbers in the consent page once consent has been given by the cardholder"}),"\n",(0,a.jsxs)(n.p,{children:["This mutation is restricted to an User access token (",(0,a.jsx)(n.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),") and ask the user to consent to this request."]}),"\n",(0,a.jsx)(n.p,{children:"The user must have the account membership for this card"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"viewCardNumbers(\n  input: ViewCardNumbersInput!\n): ViewCardNumbersPayload!\n"})}),"\n",(0,a.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.h4,{id:"viewcardnumbersinputviewcardnumbersinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["viewCardNumbers.",(0,a.jsx)("b",{children:"input"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/inputs/view-card-numbers-input",children:(0,a.jsx)(n.code,{children:"ViewCardNumbersInput!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(n.h4,{id:"viewcardnumberspayload-",children:[(0,a.jsx)(n.a,{href:"/unions/view-card-numbers-payload",children:(0,a.jsx)(n.code,{children:"ViewCardNumbersPayload"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"})]})}function v(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var a=s(67294);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);