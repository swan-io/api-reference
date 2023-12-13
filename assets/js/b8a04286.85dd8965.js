"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(a),b=d,y=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=a.length,i=new Array(r);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:d,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},93154:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(83117),d=a(67294),r=a(3905);const i={id:"add-received-sepa-direct-debit-b2-b-mandate-payload",title:"AddReceivedSepaDirectDebitB2bMandatePayload",hide_table_of_contents:!1},o=void 0,c={unversionedId:"unions/add-received-sepa-direct-debit-b2-b-mandate-payload",id:"unions/add-received-sepa-direct-debit-b2-b-mandate-payload",title:"AddReceivedSepaDirectDebitB2bMandatePayload",description:"Union type return by the addReceivedSepaDirectDebitB2bMandate mutation",source:"@site/docs/unions/add-received-sepa-direct-debit-b2-b-mandate-payload.mdx",sourceDirName:"unions",slug:"/unions/add-received-sepa-direct-debit-b2-b-mandate-payload",permalink:"/unions/add-received-sepa-direct-debit-b2-b-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/unions/add-received-sepa-direct-debit-b2-b-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-received-sepa-direct-debit-b2-b-mandate-payload",title:"AddReceivedSepaDirectDebitB2bMandatePayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddReceivedInternalDirectDebitB2bMandatePayload",permalink:"/unions/add-received-internal-direct-debit-b2-b-mandate-payload"},next:{title:"AddSepaDirectDebitPaymentMandatePayload",permalink:"/unions/add-sepa-direct-debit-payment-mandate-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddReceivedSepaDirectDebitB2bMandateSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addreceivedsepadirectdebitb2bmandatesuccesspayload-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>AccountNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountnotfoundrejection-",level:4},{value:'<code>AccountHolderTypeIndividualRejection</code> <Badge class="secondary" text="object"/>',id:"accountholdertypeindividualrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:u,Badge:b},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Union type return by the addReceivedSepaDirectDebitB2bMandate mutation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddReceivedSepaDirectDebitB2bMandatePayload = AddReceivedSepaDirectDebitB2bMandateSuccessPayload | ForbiddenRejection | AccountNotFoundRejection | AccountHolderTypeIndividualRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"addreceivedsepadirectdebitb2bmandatesuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/add-received-sepa-direct-debit-b2-b-mandate-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddReceivedSepaDirectDebitB2bMandateSuccessPayload"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the addReceivedSepaDirectDebitB2bMandate mutation")),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/account-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountNotFoundRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists")),(0,r.kt)("h4",{id:"accountholdertypeindividualrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/objects/account-holder-type-individual-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderTypeIndividualRejection"))," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the account holder type is individual.\nAn individual account holder can't create a b2b received direct debit mandate.")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mutations/add-received-sepa-direct-debit-b2-b-mandate"},(0,r.kt)("inlineCode",{parentName:"a"},"addReceivedSepaDirectDebitB2bMandate")),"  ",(0,r.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);