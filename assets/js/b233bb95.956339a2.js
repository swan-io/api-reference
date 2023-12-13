"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,d=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(a),b=o,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||d;return a?n.createElement(m,r(r({ref:t},s),{},{components:a})):n.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=a.length,r=new Array(d);r[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<d;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},68399:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(83117),o=a(67294),d=a(3905);const r={id:"add-card-payload",title:"AddCardPayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"unions/add-card-payload",id:"unions/add-card-payload",title:"AddCardPayload",description:"No description",source:"@site/docs/unions/add-card-payload.mdx",sourceDirName:"unions",slug:"/unions/add-card-payload",permalink:"/unions/add-card-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/add-card-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-card-payload",title:"AddCardPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddAccountMembershipsPayload",permalink:"/unions/add-account-memberships-payload"},next:{title:"AddCardsPayload",permalink:"/unions/add-cards-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddCardSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addcardsuccesspayload-",level:4},{value:'<code>AccountMembershipNotAllowedRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipnotallowedrejection-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>CardProductDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"cardproductdisabledrejection-",level:4},{value:'<code>CardProductSuspendedRejection</code> <Badge class="secondary" text="object"/>',id:"cardproductsuspendedrejection-",level:4},{value:'<code>EnabledCardDesignNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"enabledcarddesignnotfoundrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>MissingMandatoryFieldRejection</code> <Badge class="secondary" text="object"/>',id:"missingmandatoryfieldrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:b},y="wrapper";function j(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddCardPayload = AddCardSuccessPayload | AccountMembershipNotAllowedRejection | BadAccountStatusRejection | CardProductDisabledRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | ForbiddenRejection | MissingMandatoryFieldRejection | ValidationRejection\n")),(0,d.kt)("h3",{id:"possible-types"},"Possible types"),(0,d.kt)("h4",{id:"addcardsuccesspayload-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/add-card-success-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardSuccessPayload"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"accountmembershipnotallowedrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/account-membership-not-allowed-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotAllowedRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Membership is not allowed to use an operation.")),(0,d.kt)("h4",{id:"badaccountstatusrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/bad-account-status-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,d.kt)("h4",{id:"cardproductdisabledrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/card-product-disabled-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"CardProductDisabledRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is disabled.")),(0,d.kt)("h4",{id:"cardproductsuspendedrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/card-product-suspended-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"CardProductSuspendedRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is suspended.")),(0,d.kt)("h4",{id:"enabledcarddesignnotfoundrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/enabled-card-design-not-found-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"EnabledCardDesignNotFoundRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product don't have a card design enabled")),(0,d.kt)("h4",{id:"forbiddenrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/forbidden-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"missingmandatoryfieldrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/missing-mandatory-field-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"MissingMandatoryFieldRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned when mandatory fields are missing from the call.")),(0,d.kt)("h4",{id:"validationrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/validation-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,d.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/mutations/add-card"},(0,d.kt)("inlineCode",{parentName:"a"},"addCard")),"  ",(0,d.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})))}j.isMDXComponent=!0}}]);