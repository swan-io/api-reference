"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[88088],{30073:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>f,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=n(74848),s=n(28453),a=n(96540);const i={id:"merchant-profiles",title:"merchantProfiles"},l=void 0,c={id:"queries/merchant-profiles",title:"merchantProfiles",description:"Returns merchant profiles.",source:"@site/docs/queries/merchant-profiles.mdx",sourceDirName:"queries",slug:"/queries/merchant-profiles",permalink:"/queries/merchant-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/queries/merchant-profiles.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profiles",title:"merchantProfiles"},sidebar:"schemaSidebar",previous:{title:"merchantProfile",permalink:"/queries/merchant-profile"},next:{title:"onboarding",permalink:"/queries/onboarding"}},o={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const r={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:r,children:n,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[c,o]=(0,a.useState)(i);return(0,t.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code>merchantProfiles.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofilesfirstint--",level:4},{value:'<code>merchantProfiles.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofilesafterstring-",level:4},{value:'<code>merchantProfiles.<b>orderBy</b></code><Bullet></Bullet><code>MerchantProfileOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofilesorderbymerchantprofileorderbyinput-",level:4},{value:'<code>merchantProfiles.<b>filters</b></code><Bullet></Bullet><code>MerchantProfileFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofilesfiltersmerchantprofilefiltersinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>MerchantProfileConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"merchantprofileconnection-",level:4}];function m(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Returns merchant profiles."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"merchantProfiles(\n  first: Int! = 50\n  after: String\n  orderBy: MerchantProfileOrderByInput\n  filters: MerchantProfileFiltersInput\n): MerchantProfileConnection!\n"})}),"\n",(0,t.jsx)(r.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(r.h4,{id:"merchantprofilesfirstint--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["merchantProfiles.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/scalars/int",children:(0,t.jsx)(r.code,{children:"Int!"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"the number of elements to load (default value 50, maximum: 100)"}),"\n",(0,t.jsxs)(r.h4,{id:"merchantprofilesafterstring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["merchantProfiles.",(0,t.jsx)("b",{children:"after"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n",(0,t.jsxs)(r.h4,{id:"merchantprofilesorderbymerchantprofileorderbyinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["merchantProfiles.",(0,t.jsx)("b",{children:"orderBy"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/inputs/merchant-profile-order-by-input",children:(0,t.jsx)(r.code,{children:"MerchantProfileOrderByInput"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.p,{children:"an order you can apply to your list of connections (default value UpdatedAt desc)"}),"\n",(0,t.jsxs)(r.h4,{id:"merchantprofilesfiltersmerchantprofilefiltersinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["merchantProfiles.",(0,t.jsx)("b",{children:"filters"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/inputs/merchant-profile-filters-input",children:(0,t.jsx)(r.code,{children:"MerchantProfileFiltersInput"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.p,{children:"a filtering table you can apply to your list of connections"}),"\n",(0,t.jsx)(r.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(r.h4,{id:"merchantprofileconnection-",children:[(0,t.jsx)(r.a,{href:"/objects/merchant-profile-connection",children:(0,t.jsx)(r.code,{children:"MerchantProfileConnection"})})," ",(0,t.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(96540);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);