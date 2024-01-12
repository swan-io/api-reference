"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56860],{37559:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>u,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>t,toc:()=>g});var n=d(85893),s=d(11151),l=d(67294);const r={id:"individual-shareholder",title:"IndividualShareholder"},i=void 0,t={id:"objects/individual-shareholder",title:"IndividualShareholder",description:"Individual shareholder info.",source:"@site/docs/objects/individual-shareholder.mdx",sourceDirName:"objects",slug:"/objects/individual-shareholder",permalink:"/objects/individual-shareholder",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/individual-shareholder.mdx",tags:[],version:"current",frontMatter:{id:"individual-shareholder",title:"IndividualShareholder"},sidebar:"schemaSidebar",previous:{title:"InAppProvisioningData",permalink:"/objects/in-app-provisioning-data"},next:{title:"IndividualUltimateBeneficialOwnerTypeHasCapital",permalink:"/objects/individual-ultimate-beneficial-owner-type-has-capital"}},o={},c=()=>{const e={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,s.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>IndividualShareholder.<b>type</b></code><Bullet></Bullet><code>ShareholderType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"individualshareholdertypeshareholdertype--",level:4},{value:'<code>IndividualShareholder.<b>firstName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"individualshareholderfirstnamestring--",level:4},{value:'<code>IndividualShareholder.<b>lastName</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"individualshareholderlastnamestring--",level:4},{value:'<code>IndividualShareholder.<b>birthDate</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"individualshareholderbirthdatestring--",level:4},{value:'<code>IndividualShareholder.<b>nationality</b></code><Bullet></Bullet><code>CCA3!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"individualshareholdernationalitycca3--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],x=({dataOpen:e,dataClose:a,children:d,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.a)()},[t,o]=(0,l.useState)(r);return(0,n.jsxs)(i.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&d]})};function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Individual shareholder info."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type IndividualShareholder {\n  type: ShareholderType!\n  firstName: String!\n  lastName: String!\n  birthDate: String!\n  nationality: CCA3!\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"individualshareholdertypeshareholdertype--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IndividualShareholder.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/enums/shareholder-type",children:(0,n.jsx)(a.code,{children:"ShareholderType!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Whether the shareholder is an individual or a company."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"individualshareholderfirstnamestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IndividualShareholder.",(0,n.jsx)("b",{children:"firstName"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"First name of the shareholder."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"individualshareholderlastnamestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IndividualShareholder.",(0,n.jsx)("b",{children:"lastName"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Last name of the shareholder."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"individualshareholderbirthdatestring--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IndividualShareholder.",(0,n.jsx)("b",{children:"birthDate"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/scalars/string",children:(0,n.jsx)(a.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Birth date of the shareholder."}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"individualshareholdernationalitycca3--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["IndividualShareholder.",(0,n.jsx)("b",{children:"nationality"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(a.a,{href:"/scalars/cca3",children:(0,n.jsx)(a.code,{children:"CCA3!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"CCA3 code for the country of nationality of the shareholder."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/unions/shareholder-info",children:(0,n.jsx)(a.code,{children:"ShareholderInfo"})}),"  ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"union"})]})]})}function j(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},11151:(e,a,d)=>{d.d(a,{Z:()=>i,a:()=>r});var n=d(67294);const s={},l=n.createContext(s);function r(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);