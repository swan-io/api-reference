"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70091],{43216:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>y});var i=a(85893),t=a(11151),r=a(67294);const s={id:"international-beneficiary-dynamic-forms",title:"internationalBeneficiaryDynamicForms"},c=void 0,o={id:"queries/international-beneficiary-dynamic-forms",title:"internationalBeneficiaryDynamicForms",description:"Returns an international beneficiary dynamic forms.",source:"@site/docs/queries/international-beneficiary-dynamic-forms.mdx",sourceDirName:"queries",slug:"/queries/international-beneficiary-dynamic-forms",permalink:"/queries/international-beneficiary-dynamic-forms",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/international-beneficiary-dynamic-forms.mdx",tags:[],version:"current",frontMatter:{id:"international-beneficiary-dynamic-forms",title:"internationalBeneficiaryDynamicForms"},sidebar:"schemaSidebar",previous:{title:"ibanValidation",permalink:"/queries/iban-validation"},next:{title:"internationalCreditTransferQuote",permalink:"/queries/international-credit-transfer-quote"}},l={},d=()=>{const e={span:"span",...(0,t.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,t.a)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,t.a)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},y=[{value:"Arguments",id:"arguments",level:3},{value:'<code>internationalBeneficiaryDynamicForms.<b>amount</b></code><Bullet></Bullet><code>AmountInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalbeneficiarydynamicformsamountamountinput--",level:4},{value:'<code>internationalBeneficiaryDynamicForms.<b>language</b></code><Bullet></Bullet><code>InternationalCreditTransferDisplayLanguage</code> <Badge class="badge badge--secondary"></Badge>',id:"internationalbeneficiarydynamicformslanguageinternationalcredittransferdisplaylanguage-",level:4},{value:'<code>internationalBeneficiaryDynamicForms.<b>dynamicFields</b></code><Bullet></Bullet><code>[InternationalBeneficiaryDetailsInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"internationalbeneficiarydynamicformsdynamicfieldsinternationalbeneficiarydetailsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>InternationalBeneficiaryDynamicForms</code> <Badge class="badge badge--secondary"></Badge>',id:"internationalbeneficiarydynamicforms-",level:4}],f=({dataOpen:e,dataClose:n,children:a,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[o,l]=(0,r.useState)(s);return(0,i.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&a]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Returns an international beneficiary dynamic forms."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"internationalBeneficiaryDynamicForms(\n  amount: AmountInput!\n  language: InternationalCreditTransferDisplayLanguage\n  dynamicFields: [InternationalBeneficiaryDetailsInput!]\n): InternationalBeneficiaryDynamicForms\n"})}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.h4,{id:"internationalbeneficiarydynamicformsamountamountinput--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["internationalBeneficiaryDynamicForms.",(0,i.jsx)("b",{children:"amount"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(n.a,{href:"/inputs/amount-input",children:(0,i.jsx)(n.code,{children:"AmountInput!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"internationalbeneficiarydynamicformslanguageinternationalcredittransferdisplaylanguage-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["internationalBeneficiaryDynamicForms.",(0,i.jsx)("b",{children:"language"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(n.a,{href:"/enums/international-credit-transfer-display-language",children:(0,i.jsx)(n.code,{children:"InternationalCreditTransferDisplayLanguage"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"internationalbeneficiarydynamicformsdynamicfieldsinternationalbeneficiarydetailsinput--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["internationalBeneficiaryDynamicForms.",(0,i.jsx)("b",{children:"dynamicFields"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(n.a,{href:"/inputs/international-beneficiary-details-input",children:(0,i.jsx)(n.code,{children:"[InternationalBeneficiaryDetailsInput!]"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(n.h4,{id:"internationalbeneficiarydynamicforms-",children:[(0,i.jsx)(n.a,{href:"/objects/international-beneficiary-dynamic-forms",children:(0,i.jsx)(n.code,{children:"InternationalBeneficiaryDynamicForms"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"COMING SOON"}),"\nInternational Beneficiary Dynamic Forms"]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var i=a(67294);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);