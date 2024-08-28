"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43197],{51449:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>y,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>v});var s=t(74848),n=t(28453),d=t(96540);const c={id:"deactivate-user-payload",title:"DeactivateUserPayload"},r=void 0,o={id:"unions/deactivate-user-payload",title:"DeactivateUserPayload",description:"No description",source:"@site/docs/unions/deactivate-user-payload.mdx",sourceDirName:"unions",slug:"/unions/deactivate-user-payload",permalink:"/unions/deactivate-user-payload",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/deactivate-user-payload.mdx",tags:[],version:"current",frontMatter:{id:"deactivate-user-payload",title:"DeactivateUserPayload"},sidebar:"schemaSidebar",previous:{title:"CreateMultiConsentPayload",permalink:"/unions/create-multi-consent-payload"},next:{title:"DeleteExportFilePayload",permalink:"/unions/delete-export-file-payload"}},i={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const a={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,n.R)()},[o,i]=(0,d.useState)(c);return(0,s.jsxs)(r.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&t]})},v=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>DeactivateUserPayload.<b>DeactivateUserSuccess</b></code> <Badge class="badge badge--secondary"></Badge>',id:"deactivateuserpayloaddeactivateusersuccess-",level:4},{value:'<code>DeactivateUserPayload.<b>UserCannotBeDeactivatedRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"deactivateuserpayloadusercannotbedeactivatedrejection-",level:4},{value:'<code>DeactivateUserPayload.<b>UserAlreadyDeactivatedRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"deactivateuserpayloaduseralreadydeactivatedrejection-",level:4},{value:'<code>DeactivateUserPayload.<b>UserNotFoundRejection</b></code> <Badge class="badge badge--secondary"></Badge>',id:"deactivateuserpayloadusernotfoundrejection-",level:4},{value:"Returned By",id:"returned-by",level:3}];function j(e){const a={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"union DeactivateUserPayload = DeactivateUserSuccess | UserCannotBeDeactivatedRejection | UserAlreadyDeactivatedRejection | UserNotFoundRejection\n"})}),"\n",(0,s.jsx)(a.h3,{id:"possible-types",children:"Possible types"}),"\n",(0,s.jsxs)(a.h4,{id:"deactivateuserpayloaddeactivateusersuccess-",children:[(0,s.jsx)(a.a,{href:"/objects/deactivate-user-success",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DeactivateUserPayload.",(0,s.jsx)("b",{children:"DeactivateUserSuccess"})]})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.h4,{id:"deactivateuserpayloadusercannotbedeactivatedrejection-",children:[(0,s.jsx)(a.a,{href:"/objects/user-cannot-be-deactivated-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DeactivateUserPayload.",(0,s.jsx)("b",{children:"UserCannotBeDeactivatedRejection"})]})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.h4,{id:"deactivateuserpayloaduseralreadydeactivatedrejection-",children:[(0,s.jsx)(a.a,{href:"/objects/user-already-deactivated-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DeactivateUserPayload.",(0,s.jsx)("b",{children:"UserAlreadyDeactivatedRejection"})]})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.h4,{id:"deactivateuserpayloadusernotfoundrejection-",children:[(0,s.jsx)(a.a,{href:"/objects/user-not-found-rejection",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["DeactivateUserPayload.",(0,s.jsx)("b",{children:"UserNotFoundRejection"})]})})," ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.h3,{id:"returned-by",children:"Returned By"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/mutations/deactivate-user",children:(0,s.jsx)(a.code,{children:"deactivateUser"})}),"  ",(0,s.jsx)(y,{class:"badge badge--secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>r});var s=t(96540);const n={},d=s.createContext(n);function c(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);