"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36426],{20585:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>b});var t=n(85893),d=n(11151),i=n(67294);const a={id:"user",title:"User"},r=void 0,c={id:"objects/user",title:"User",description:"The User is the unique user, natural person, of the Swan app.",source:"@site/docs/objects/user.mdx",sourceDirName:"objects",slug:"/objects/user",permalink:"/objects/user",draft:!1,unlisted:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/objects/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"User"},sidebar:"schemaSidebar",previous:{title:"UserNotFoundRejection",permalink:"/objects/user-not-found-rejection"},next:{title:"ValidIban",permalink:"/objects/valid-iban"}},l={},o=()=>{const e={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,d.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,d.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>User.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useridid--",level:4},{value:'<code>User.<b>accountMemberships</b></code><Bullet></Bullet><code>AccountMembershipConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraccountmembershipsaccountmembershipconnection--",level:4},{value:'<code>User.accountMemberships.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useraccountmembershipsfirstint--",level:5},{value:'<code>User.accountMemberships.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"useraccountmembershipsbeforestring-",level:5},{value:'<code>User.accountMemberships.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"useraccountmembershipsafterstring-",level:5},{value:'<code>User.accountMemberships.<b>filters</b></code><Bullet></Bullet><code>AccountMembershipsFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"useraccountmembershipsfiltersaccountmembershipsfilterinput-",level:5},{value:'<code>User.<b>mobilePhoneNumber</b></code><Bullet></Bullet><code>PhoneNumber</code> <Badge class="badge badge--secondary"></Badge>',id:"usermobilephonenumberphonenumber-",level:4},{value:'<code>User.<b>firstName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userfirstnamestring-",level:4},{value:'<code>User.<b>lastName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userlastnamestring-",level:4},{value:'<code>User.<b>allFirstNames</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userallfirstnamesstring--",level:4},{value:'<code>User.<b>birthDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"userbirthdatedate-",level:4},{value:'<code>User.<b>nationalityCCA3</b></code><Bullet></Bullet><code>CCA3</code> <Badge class="badge badge--secondary"></Badge>',id:"usernationalitycca3cca3-",level:4},{value:'<code>User.<b>birthCity</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userbirthcitystring-",level:4},{value:'<code>User.<b>idVerified</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useridverifiedboolean--",level:4},{value:'<code>User.<b>authenticators</b></code><Bullet></Bullet><code>[Authenticator!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userauthenticatorsauthenticator--",level:4},{value:'<code>User.<b>identificationStatus</b></code><Bullet></Bullet><code>IdentificationStatus</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationstatusidentificationstatus--",level:4},{value:'<code>User.<b>identificationLevels</b></code><Bullet></Bullet><code>IdentificationLevels</code> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationlevelsidentificationlevels-",level:4},{value:'<code>User.<b>preferredNotificationChannel</b></code><Bullet></Bullet><code>PreferredNotificationChannel</code> <Badge class="badge badge--secondary"></Badge>',id:"userpreferrednotificationchannelpreferrednotificationchannel-",level:4},{value:'<code>User.<b>status</b></code><Bullet></Bullet><code>UserStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"userstatususerstatus-",level:4},{value:'<code>User.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"usercreatedatdatetime--",level:4},{value:'<code>User.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userupdatedatdatetime--",level:4},{value:'<code>User.<b>joinedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userjoinedatdatetime--",level:4},{value:'<code>User.<b>identifications</b></code><Bullet></Bullet><code>IdentificationConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationsidentificationconnection-",level:4},{value:'<code>User.identifications.<b>first</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationsfirstint--",level:5},{value:'<code>User.identifications.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationsafterstring-",level:5},{value:'<code>User.identifications.<b>filters</b></code><Bullet></Bullet><code>IdentificationFiltersInput</code> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationsfiltersidentificationfiltersinput-",level:5},{value:'<code>User.identifications.<b>orderBy</b></code><Bullet></Bullet><code>IdentificationsOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"useridentificationsorderbyidentificationsorderbyinput-",level:5},{value:"Returned by",id:"returned-by",level:3},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:n,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,d.a)()},[c,l]=(0,i.useState)(a);return(0,t.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&n]})};function j(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The User is the unique user, natural person, of the Swan app."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type User {\n  id: ID!\n  accountMemberships(\n    first: Int! = 50\n    before: String\n    after: String\n    filters: AccountMembershipsFilterInput\n  ): AccountMembershipConnection!\n  mobilePhoneNumber: PhoneNumber\n  firstName: String\n  lastName: String\n  allFirstNames: [String!]\n  birthDate: Date\n  nationalityCCA3: CCA3\n  birthCity: String\n  idVerified: Boolean!\n  authenticators: [Authenticator!]\n  identificationStatus: IdentificationStatus @deprecated\n  identificationLevels: IdentificationLevels\n  preferredNotificationChannel: PreferredNotificationChannel\n  status: UserStatus\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  joinedAt: DateTime!\n  identifications(\n    first: Int! = 50\n    after: String\n    filters: IdentificationFiltersInput\n    orderBy: IdentificationsOrderByInput\n  ): IdentificationConnection\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"useridid--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/id",children:(0,t.jsx)(s.code,{children:"ID!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"unique identifier of the user"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"useraccountmembershipsaccountmembershipconnection--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"accountMemberships"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/account-membership-connection",children:(0,t.jsx)(s.code,{children:"AccountMembershipConnection!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"The list of account memberships"}),"\n",(0,t.jsxs)(s.p,{children:["Implements the Relay Connection interface, used to paginate list of element (",(0,t.jsx)(s.a,{href:"https://docs.swan.io/api/pagination",children:"Learn More"}),")"]}),"\n",(0,t.jsxs)(s.h5,{id:"useraccountmembershipsfirstint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.accountMemberships.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"the number of elements to load (maximum: 100)"}),"\n"]}),"\n",(0,t.jsxs)(s.h5,{id:"useraccountmembershipsbeforestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.accountMemberships.",(0,t.jsx)("b",{children:"before"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"the index (a unique reference in string form) from which you will load the preceding elements"}),"\n"]}),"\n",(0,t.jsxs)(s.h5,{id:"useraccountmembershipsafterstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.accountMemberships.",(0,t.jsx)("b",{children:"after"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"the index (a unique reference in string form) from which you will load the following elements"}),"\n"]}),"\n",(0,t.jsxs)(s.h5,{id:"useraccountmembershipsfiltersaccountmembershipsfilterinput-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.accountMemberships.",(0,t.jsx)("b",{children:"filters"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/inputs/account-memberships-filter-input",children:(0,t.jsx)(s.code,{children:"AccountMembershipsFilterInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"a filtering table you can apply to your list of connections"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"usermobilephonenumberphonenumber-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"mobilePhoneNumber"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/phone-number",children:(0,t.jsx)(s.code,{children:"PhoneNumber"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"mobile phone number with the international format (Example: +33689788967)"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userfirstnamestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"firstName"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"first name"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userlastnamestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"lastName"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"last name"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userallfirstnamesstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"allFirstNames"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"[String!]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"list of first names"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userbirthdatedate-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"birthDate"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/date",children:(0,t.jsx)(s.code,{children:"Date"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"birth date"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"usernationalitycca3cca3-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"nationalityCCA3"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/cca3",children:(0,t.jsx)(s.code,{children:"CCA3"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"nationality"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userbirthcitystring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"birthCity"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"birth city"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"useridverifiedboolean--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"idVerified"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"true"})," if Swan has verified the user's identity"]}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userauthenticatorsauthenticator--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"authenticators"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/authenticator",children:(0,t.jsx)(s.code,{children:"[Authenticator!]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"the methods used to authenticate this user"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"useridentificationstatusidentificationstatus--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"identificationStatus"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/enums/identification-status",children:(0,t.jsx)(s.code,{children:"IdentificationStatus"})})," ",(0,t.jsx)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,t.jsxs)(s.p,{children:["either use ",(0,t.jsx)(s.code,{children:"Identification.status"})," or use ",(0,t.jsx)(s.code,{children:"identificationLevels"})," instead to know if user's identity has been validated or not"]})}),"\n",(0,t.jsxs)(s.p,{children:["@deprecated either use ",(0,t.jsx)(s.code,{children:"Identification.status"})," or use ",(0,t.jsx)(s.code,{children:"identificationLevels"})," instead to know if user's identity has been validated or not"]}),"\n",(0,t.jsx)(s.p,{children:"Identification status"}),"\n",(0,t.jsx)(s.p,{children:"Each attempt to go through our identity verification process will update this value."}),"\n",(0,t.jsx)(s.p,{children:"This field is only available for the current user."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"useridentificationlevelsidentificationlevels-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"identificationLevels"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/identification-levels",children:(0,t.jsx)(s.code,{children:"IdentificationLevels"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"List of identification levels available for the user."}),"\n",(0,t.jsx)(s.p,{children:"Whenever TRUE, it means the identification was successful for the associated level."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userpreferrednotificationchannelpreferrednotificationchannel-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"preferredNotificationChannel"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/enums/preferred-notification-channel",children:(0,t.jsx)(s.code,{children:"PreferredNotificationChannel"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Preferred notification channel"}),"\n",(0,t.jsx)(s.p,{children:'When it is "null" it means that the preferences have not been updated. Default SMS in use'}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userstatususerstatus-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"status"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/enums/user-status",children:(0,t.jsx)(s.code,{children:"UserStatus"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Status of the user"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"usercreatedatdatetime--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Creation date of the user"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userupdatedatdatetime--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Last update date of the user"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"userjoinedatdatetime--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"joinedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Date on which the user joined the project. Joining the project is done after the first accepted OAuth login."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"useridentificationsidentificationconnection-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.",(0,t.jsx)("b",{children:"identifications"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/identification-connection",children:(0,t.jsx)(s.code,{children:"IdentificationConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.h5,{id:"useridentificationsfirstint--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.identifications.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/int",children:(0,t.jsx)(s.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.p,{children:"Maximum number of elements in the list (default value 50)"}),"\n"]}),"\n",(0,t.jsxs)(s.h5,{id:"useridentificationsafterstring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.identifications.",(0,t.jsx)("b",{children:"after"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"When the list of elements needs to start after an element"}),"\n"]}),"\n",(0,t.jsxs)(s.h5,{id:"useridentificationsfiltersidentificationfiltersinput-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.identifications.",(0,t.jsx)("b",{children:"filters"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/inputs/identification-filters-input",children:(0,t.jsx)(s.code,{children:"IdentificationFiltersInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"When the list of identifications needs to be filtered"}),"\n"]}),"\n",(0,t.jsxs)(s.h5,{id:"useridentificationsorderbyidentificationsorderbyinput-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["User.identifications.",(0,t.jsx)("b",{children:"orderBy"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/inputs/identifications-order-by-input",children:(0,t.jsx)(s.code,{children:"IdentificationsOrderByInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"When the list of identifications needs to be ordered, by default the list will be ordered by the latest identification (valid or not)"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/queries/user",children:(0,t.jsx)(s.code,{children:"user"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"query"})]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/objects/account-holder-individual-info",children:(0,t.jsx)(s.code,{children:"AccountHolderIndividualInfo"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/account-membership",children:(0,t.jsx)(s.code,{children:"AccountMembership"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/complete-user-creation-success-payload",children:(0,t.jsx)(s.code,{children:"CompleteUserCreationSuccessPayload"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/consent",children:(0,t.jsx)(s.code,{children:"Consent"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/deactivate-user-success",children:(0,t.jsx)(s.code,{children:"DeactivateUserSuccess"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/standing-order",children:(0,t.jsx)(s.code,{children:"StandingOrder"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(s.a,{href:"/objects/user-edge",children:(0,t.jsx)(s.code,{children:"UserEdge"})}),"  ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var t=n(67294);const d={},i=t.createContext(d);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);