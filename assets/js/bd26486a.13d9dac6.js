"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77083],{11393:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var n=s(85893),t=s(11151),a=s(67294);const o={id:"account-membership-binding-user-error-status-info",title:"AccountMembershipBindingUserErrorStatusInfo"},c=void 0,i={id:"objects/account-membership-binding-user-error-status-info",title:"AccountMembershipBindingUserErrorStatusInfo",description:"when a user is binded with the error to the account membership",source:"@site/docs/objects/account-membership-binding-user-error-status-info.mdx",sourceDirName:"objects",slug:"/objects/account-membership-binding-user-error-status-info",permalink:"/objects/account-membership-binding-user-error-status-info",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/account-membership-binding-user-error-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-binding-user-error-status-info",title:"AccountMembershipBindingUserErrorStatusInfo"},sidebar:"schemaSidebar",previous:{title:"AccountHolder",permalink:"/objects/account-holder"},next:{title:"AccountMembershipCannotBeDisabledRejection",permalink:"/objects/account-membership-cannot-be-disabled-rejection"}},d={},l=()=>{const e={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,t.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>status</b></code><Bullet></Bullet><code>AccountMembershipStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinfostatusaccountmembershipstatus--",level:4},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>firstNameMatchError</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinfofirstnamematcherrorboolean--",level:4},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>idVerifiedMatchError</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinfoidverifiedmatcherrorboolean--",level:4},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>lastNameMatchError</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinfolastnamematcherrorboolean--",level:4},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>phoneNumberMatchError</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinfophonenumbermatcherrorboolean--",level:4},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>birthDateMatchError</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinfobirthdatematcherrorboolean--",level:4},{value:'<code>AccountMembershipBindingUserErrorStatusInfo.<b>restrictedTo</b></code><Bullet></Bullet><code>RestrictedTo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipbindingusererrorstatusinforestrictedtorestrictedto--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountMembershipStatusInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"accountmembershipstatusinfo-",level:4}],m=({dataOpen:e,dataClose:r,children:s,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,t.a)()},[i,d]=(0,a.useState)(o);return(0,n.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&s]})};function g(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"when a user is binded with the error to the account membership"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type AccountMembershipBindingUserErrorStatusInfo implements AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n  firstNameMatchError: Boolean!\n  idVerifiedMatchError: Boolean!\n  lastNameMatchError: Boolean!\n  phoneNumberMatchError: Boolean!\n  birthDateMatchError: Boolean!\n  restrictedTo: RestrictedTo!\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinfostatusaccountmembershipstatus--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/enums/account-membership-status",children:(0,n.jsx)(r.code,{children:"AccountMembershipStatus!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"AccountMembership status (always BindingUserError for type AccountMembershipBindingUserErrorStatusInfo)"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinfofirstnamematcherrorboolean--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"firstNameMatchError"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if the first name of the user binded doesn't match with the invitation"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinfoidverifiedmatcherrorboolean--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"idVerifiedMatchError"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if Swan hasn't verified the user's identity"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinfolastnamematcherrorboolean--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"lastNameMatchError"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if the last name of the user binded doesn't match with the invitation"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinfophonenumbermatcherrorboolean--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"phoneNumberMatchError"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if the phone number of the user binded doesn't match with the invitation"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinfobirthdatematcherrorboolean--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"birthDateMatchError"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if the birth date of the user binded doesn't match with the invitation"]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipbindingusererrorstatusinforestrictedtorestrictedto--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccountMembershipBindingUserErrorStatusInfo.",(0,n.jsx)("b",{children:"restrictedTo"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/objects/restricted-to",children:(0,n.jsx)(r.code,{children:"RestrictedTo!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"restricted to a user"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(r.h4,{id:"accountmembershipstatusinfo-",children:[(0,n.jsx)(r.a,{href:"/interfaces/account-membership-status-info",children:(0,n.jsx)(r.code,{children:"AccountMembershipStatusInfo"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"here are the different account membership status:"}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>o});var n=s(67294);const t={},a=n.createContext(t);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);