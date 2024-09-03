"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53694],{64399:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>j});var t=a(74848),o=a(28453),r=a(96540);const d={id:"generate-transaction-supporting-document-upload-url-payload",title:"GenerateTransactionSupportingDocumentUploadUrlPayload"},s=void 0,c={id:"unions/generate-transaction-supporting-document-upload-url-payload",title:"GenerateTransactionSupportingDocumentUploadUrlPayload",description:"No description",source:"@site/docs/unions/generate-transaction-supporting-document-upload-url-payload.mdx",sourceDirName:"unions",slug:"/unions/generate-transaction-supporting-document-upload-url-payload",permalink:"/unions/generate-transaction-supporting-document-upload-url-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/generate-transaction-supporting-document-upload-url-payload.mdx",tags:[],version:"current",frontMatter:{id:"generate-transaction-supporting-document-upload-url-payload",title:"GenerateTransactionSupportingDocumentUploadUrlPayload"},sidebar:"schemaSidebar",previous:{title:"GenerateTransactionStatementPayload",permalink:"/unions/generate-transaction-statement-payload"},next:{title:"GrantConsentWithServerSignaturePayload",permalink:"/unions/grant-consent-with-server-signature-payload"}},i={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:a,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,o.R)()},[c,i]=(0,r.useState)(d);return(0,t.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})},j=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>GenerateTransactionSupportingDocumentUploadUrlPayload.<b>GenerateTransactionSupportingDocumentUploadUrlSuccessPayload</b></code> <Badge class="badge badge--secondary"></Badge>',id:"generatetransactionsupportingdocumentuploadurlpayloadgeneratetransactionsupportingdocumentuploadurlsuccesspayload-",level:4},{value:'<code>GenerateTransactionSupportingDocumentUploadUrlPayload.<b>AccountNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"generatetransactionsupportingdocumentuploadurlpayloadaccountnotfoundrejection-",level:4},{value:'<code>GenerateTransactionSupportingDocumentUploadUrlPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"generatetransactionsupportingdocumentuploadurlpayloadforbiddenrejection-",level:4},{value:'<code>GenerateTransactionSupportingDocumentUploadUrlPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"generatetransactionsupportingdocumentuploadurlpayloadinternalerrorrejection-",level:4},{value:'<code>GenerateTransactionSupportingDocumentUploadUrlPayload.<b>TransactionNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"generatetransactionsupportingdocumentuploadurlpayloadtransactionnotfoundrejection-",level:4},{value:'<code>GenerateTransactionSupportingDocumentUploadUrlPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"generatetransactionsupportingdocumentuploadurlpayloadvalidationrejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"union GenerateTransactionSupportingDocumentUploadUrlPayload = GenerateTransactionSupportingDocumentUploadUrlSuccessPayload | AccountNotFoundRejection | ForbiddenRejection | InternalErrorRejection | TransactionNotFoundRejection | ValidationRejection\n"})}),"\n",(0,t.jsx)(n.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,t.jsxs)(n.h4,{id:"generatetransactionsupportingdocumentuploadurlpayloadgeneratetransactionsupportingdocumentuploadurlsuccesspayload-",children:[(0,t.jsx)(n.a,{href:"/objects/generate-transaction-supporting-document-upload-url-success-payload",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["GenerateTransactionSupportingDocumentUploadUrlPayload.",(0,t.jsx)("b",{children:"GenerateTransactionSupportingDocumentUploadUrlSuccessPayload"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.h4,{id:"generatetransactionsupportingdocumentuploadurlpayloadaccountnotfoundrejection-",children:[(0,t.jsx)(n.a,{href:"/objects/account-not-found-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["GenerateTransactionSupportingDocumentUploadUrlPayload.",(0,t.jsx)("b",{children:"AccountNotFoundRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists"}),"\n",(0,t.jsxs)(n.h4,{id:"generatetransactionsupportingdocumentuploadurlpayloadforbiddenrejection-",children:[(0,t.jsx)(n.a,{href:"/objects/forbidden-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["GenerateTransactionSupportingDocumentUploadUrlPayload.",(0,t.jsx)("b",{children:"ForbiddenRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.h4,{id:"generatetransactionsupportingdocumentuploadurlpayloadinternalerrorrejection-",children:[(0,t.jsx)(n.a,{href:"/objects/internal-error-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["GenerateTransactionSupportingDocumentUploadUrlPayload.",(0,t.jsx)("b",{children:"InternalErrorRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Rejection returned on unexpected server error"}),"\n",(0,t.jsxs)(n.h4,{id:"generatetransactionsupportingdocumentuploadurlpayloadtransactionnotfoundrejection-",children:[(0,t.jsx)(n.a,{href:"/objects/transaction-not-found-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["GenerateTransactionSupportingDocumentUploadUrlPayload.",(0,t.jsx)("b",{children:"TransactionNotFoundRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Rejection returned if the transaction was not found"}),"\n",(0,t.jsxs)(n.h4,{id:"generatetransactionsupportingdocumentuploadurlpayloadvalidationrejection-",children:[(0,t.jsx)(n.a,{href:"/objects/validation-rejection",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["GenerateTransactionSupportingDocumentUploadUrlPayload.",(0,t.jsx)("b",{children:"ValidationRejection"})]})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.p,{children:"Rejection returned if an input contains invalid data"}),"\n",(0,t.jsx)(n.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/mutations/generate-transaction-supporting-document-upload-url",children:(0,t.jsx)(n.code,{children:"generateTransactionSupportingDocumentUploadUrl"})}),"  ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>s});var t=a(96540);const o={},r=t.createContext(o);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);