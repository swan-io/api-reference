"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[231],{20810:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>y});var n=t(85893),d=t(11151),s=t(67294);const r={id:"add-trusted-sepa-beneficiary",title:"addTrustedSepaBeneficiary"},i=void 0,c={id:"mutations/add-trusted-sepa-beneficiary",title:"addTrustedSepaBeneficiary",description:"Add a trusted SEPA beneficiary to an account",source:"@site/docs/mutations/add-trusted-sepa-beneficiary.mdx",sourceDirName:"mutations",slug:"/mutations/add-trusted-sepa-beneficiary",permalink:"/mutations/add-trusted-sepa-beneficiary",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/mutations/add-trusted-sepa-beneficiary.mdx",tags:[],version:"current",frontMatter:{id:"add-trusted-sepa-beneficiary",title:"addTrustedSepaBeneficiary"},sidebar:"schemaSidebar",previous:{title:"addSingleUseVirtualCards",permalink:"/mutations/add-single-use-virtual-cards"},next:{title:"addVirtualIbanEntry",permalink:"/mutations/add-virtual-iban-entry"}},o={},l=()=>{const e={span:"span",...(0,d.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,d.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,d.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},y=[{value:"Arguments",id:"arguments",level:3},{value:'<code>addTrustedSepaBeneficiary.<b>input</b></code><Bullet></Bullet><code>AddTrustedSepaBeneficiaryInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addtrustedsepabeneficiaryinputaddtrustedsepabeneficiaryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddTrustedSepaBeneficiaryPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"addtrustedsepabeneficiarypayload-",level:4}],f=({dataOpen:e,dataClose:a,children:t,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,d.a)()},[c,o]=(0,s.useState)(r);return(0,n.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&t]})};function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Add a trusted SEPA beneficiary to an account"}),"\n",(0,n.jsxs)(a.p,{children:["This mutation is restricted to an User access token (",(0,n.jsx)(a.a,{href:"https://docs.swan.io/api/authentication",children:"Learn More"}),") and ask the user to consent to this request."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"addTrustedSepaBeneficiary(\n  input: AddTrustedSepaBeneficiaryInput!\n): AddTrustedSepaBeneficiaryPayload\n"})}),"\n",(0,n.jsx)(a.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(a.h4,{id:"addtrustedsepabeneficiaryinputaddtrustedsepabeneficiaryinput--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["addTrustedSepaBeneficiary.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/inputs/add-trusted-sepa-beneficiary-input",children:(0,n.jsx)(a.code,{children:"AddTrustedSepaBeneficiaryInput!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(a.h4,{id:"addtrustedsepabeneficiarypayload-",children:[(0,n.jsx)(a.a,{href:"/unions/add-trusted-sepa-beneficiary-payload",children:(0,n.jsx)(a.code,{children:"AddTrustedSepaBeneficiaryPayload"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"union"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Add sepa trusted beneficiary payload"}),"\n"]})]})}function b(e={}){const{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>r});var n=t(67294);const d={},s=n.createContext(d);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);