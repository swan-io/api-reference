"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,d=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,y=u["".concat(i,".").concat(m)]||u[m]||p[m]||d;return a?n.createElement(y,r(r({ref:t},l),{},{components:a})):n.createElement(y,r({ref:t},l))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=a.length,r=new Array(d);r[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<d;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94559:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(83117),o=a(67294),d=a(3905);const r={id:"add-single-use-virtual-cards-payload",title:"AddSingleUseVirtualCardsPayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"unions/add-single-use-virtual-cards-payload",id:"unions/add-single-use-virtual-cards-payload",title:"AddSingleUseVirtualCardsPayload",description:"No description",source:"@site/docs/unions/add-single-use-virtual-cards-payload.mdx",sourceDirName:"unions",slug:"/unions/add-single-use-virtual-cards-payload",permalink:"/unions/add-single-use-virtual-cards-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/add-single-use-virtual-cards-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-single-use-virtual-cards-payload",title:"AddSingleUseVirtualCardsPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddSingleUseVirtualCardPayload",permalink:"/unions/add-single-use-virtual-card-payload"},next:{title:"AddVirtualIbanEntryPayload",permalink:"/unions/add-virtual-iban-entry-payload"}},s={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddSingleUseVirtualCardsSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addsingleusevirtualcardssuccesspayload-",level:4},{value:'<code>AddingCardsToDifferentAccountsRejection</code> <Badge class="secondary" text="object"/>',id:"addingcardstodifferentaccountsrejection-",level:4},{value:'<code>TooManyItemsRejection</code> <Badge class="secondary" text="object"/>',id:"toomanyitemsrejection-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>AccountMembershipNotAllowedRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipnotallowedrejection-",level:4},{value:'<code>CardProductSuspendedRejection</code> <Badge class="secondary" text="object"/>',id:"cardproductsuspendedrejection-",level:4},{value:'<code>CardProductDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"cardproductdisabledrejection-",level:4},{value:'<code>EnabledCardDesignNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"enabledcarddesignnotfoundrejection-",level:4},{value:'<code>MissingMandatoryFieldRejection</code> <Badge class="secondary" text="object"/>',id:"missingmandatoryfieldrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:l,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function j(e){let{components:t,...a}=e;return(0,d.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddSingleUseVirtualCardsPayload = AddSingleUseVirtualCardsSuccessPayload | AddingCardsToDifferentAccountsRejection | TooManyItemsRejection | BadAccountStatusRejection | AccountMembershipNotAllowedRejection | CardProductSuspendedRejection | CardProductDisabledRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | ValidationRejection\n")),(0,d.kt)("h3",{id:"possible-types"},"Possible types"),(0,d.kt)("h4",{id:"addsingleusevirtualcardssuccesspayload-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/add-single-use-virtual-cards-success-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsSuccessPayload"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"addingcardstodifferentaccountsrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/adding-cards-to-different-accounts-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"AddingCardsToDifferentAccountsRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the attempting to add cards to different accounts.")),(0,d.kt)("h4",{id:"toomanyitemsrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/too-many-items-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"TooManyItemsRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if too many items are given")),(0,d.kt)("h4",{id:"badaccountstatusrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/bad-account-status-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,d.kt)("h4",{id:"accountmembershipnotallowedrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/account-membership-not-allowed-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotAllowedRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Membership is not allowed to use an operation.")),(0,d.kt)("h4",{id:"cardproductsuspendedrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/card-product-suspended-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"CardProductSuspendedRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is suspended.")),(0,d.kt)("h4",{id:"cardproductdisabledrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/card-product-disabled-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"CardProductDisabledRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is disabled.")),(0,d.kt)("h4",{id:"enabledcarddesignnotfoundrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/enabled-card-design-not-found-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"EnabledCardDesignNotFoundRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product don't have a card design enabled")),(0,d.kt)("h4",{id:"missingmandatoryfieldrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/missing-mandatory-field-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"MissingMandatoryFieldRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned when mandatory fields are missing from the call.")),(0,d.kt)("h4",{id:"validationrejection-"},(0,d.kt)("a",{parentName:"h4",href:"/objects/validation-rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/mutations/add-single-use-virtual-cards"},(0,d.kt)("inlineCode",{parentName:"a"},"addSingleUseVirtualCards")),"  ",(0,d.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}j.isMDXComponent=!0}}]);