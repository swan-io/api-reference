"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75446],{30250:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>u,Details:()=>p,SpecifiedBy:()=>o,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var d=s(74848),a=s(28453),t=s(96540);const r={id:"add-single-use-virtual-cards-input",title:"AddSingleUseVirtualCardsInput"},i=void 0,l={id:"inputs/add-single-use-virtual-cards-input",title:"AddSingleUseVirtualCardsInput",description:"Input to add a new single-use virtual cards",source:"@site/docs/inputs/add-single-use-virtual-cards-input.mdx",sourceDirName:"inputs",slug:"/inputs/add-single-use-virtual-cards-input",permalink:"/inputs/add-single-use-virtual-cards-input",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/add-single-use-virtual-cards-input.mdx",tags:[],version:"current",frontMatter:{id:"add-single-use-virtual-cards-input",title:"AddSingleUseVirtualCardsInput"},sidebar:"schemaSidebar",previous:{title:"AddSingleUseVirtualCardInput",permalink:"/inputs/add-single-use-virtual-card-input"},next:{title:"AddTrustedInternationalBeneficiaryInput",permalink:"/inputs/add-trusted-international-beneficiary-input"}},c={},u=()=>{const e={span:"span",...(0,a.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const n={a:"a",...(0,a.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,a.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[l,c]=(0,t.useState)(r);return(0,d.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AddSingleUseVirtualCardsInput.<b>cards</b></code><Bullet></Bullet><code>[SingleUseVirtualCardConfigInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addsingleusevirtualcardsinputcardssingleusevirtualcardconfiginput--",level:4},{value:'<code>AddSingleUseVirtualCardsInput.<b>consentRedirectUrl</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addsingleusevirtualcardsinputconsentredirecturlstring--",level:4},{value:'<code>AddSingleUseVirtualCardsInput.<b>cardProductId</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"addsingleusevirtualcardsinputcardproductidid-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Input to add a new single-use virtual cards"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"input AddSingleUseVirtualCardsInput {\n  cards: [SingleUseVirtualCardConfigInput!]!\n  consentRedirectUrl: String!\n  cardProductId: ID\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"addsingleusevirtualcardsinputcardssingleusevirtualcardconfiginput--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSingleUseVirtualCardsInput.",(0,d.jsx)("b",{children:"cards"})]})}),(0,d.jsx)(u,{}),(0,d.jsx)(n.a,{href:"/inputs/single-use-virtual-card-config-input",children:(0,d.jsx)(n.code,{children:"[SingleUseVirtualCardConfigInput!]!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,d.jsx)(n.p,{children:"The configuration of all the cards you want to add"}),"\n",(0,d.jsxs)(n.h4,{id:"addsingleusevirtualcardsinputconsentredirecturlstring--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSingleUseVirtualCardsInput.",(0,d.jsx)("b",{children:"consentRedirectUrl"})]})}),(0,d.jsx)(u,{}),(0,d.jsx)(n.a,{href:"/scalars/string",children:(0,d.jsx)(n.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(n.p,{children:"URL the user is redirected to after consent has been given"}),"\n",(0,d.jsxs)(n.h4,{id:"addsingleusevirtualcardsinputcardproductidid-",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddSingleUseVirtualCardsInput.",(0,d.jsx)("b",{children:"cardProductId"})]})}),(0,d.jsx)(u,{}),(0,d.jsx)(n.a,{href:"/scalars/id",children:(0,d.jsx)(n.code,{children:"ID"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(n.p,{children:"The id of the card product to use to create the new cards."}),"\n",(0,d.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/mutations/add-single-use-virtual-cards",children:(0,d.jsx)(n.code,{children:"addSingleUseVirtualCards"})}),"  ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"mutation"})]})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var d=s(96540);const a={},t=d.createContext(a);function r(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);