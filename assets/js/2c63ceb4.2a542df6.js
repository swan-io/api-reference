"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(d,".").concat(s)]||u[s]||y[s]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90173:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>y,assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(83117),a=n(67294),i=n(3905);const o={id:"payment-order-by-input",title:"PaymentOrderByInput",hide_table_of_contents:!1},l=void 0,d={unversionedId:"inputs/payment-order-by-input",id:"inputs/payment-order-by-input",title:"PaymentOrderByInput",description:"Order that can be applied when listing payments",source:"@site/docs/inputs/payment-order-by-input.mdx",sourceDirName:"inputs",slug:"/inputs/payment-order-by-input",permalink:"/inputs/payment-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/payment-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-order-by-input",title:"PaymentOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentMandateOrderByInput",permalink:"/inputs/payment-mandate-order-by-input"},next:{title:"PhysicalCardConfigInput",permalink:"/inputs/physical-card-config-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentOrderByInput.<b>field</b></code><Bullet /><code>PaymentOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentorderbyinputbfieldbcodepaymentorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentorderbyinputbdirectionbcodeorderbydirection-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:y,Badge:s},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Order that can be applied when listing payments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PaymentOrderByInput {\n  field: PaymentOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentorderbyinputbfieldbcodepaymentorderbyfieldinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentOrderByInput.",(0,i.kt)("b",null,"field"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/enums/payment-order-by-field-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PaymentOrderByFieldInput"))," ",(0,i.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentorderbyinputbdirectionbcodeorderbydirection-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentOrderByInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/enums/order-by-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,i.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/queries/payments"},(0,i.kt)("inlineCode",{parentName:"a"},"payments")),"  ",(0,i.kt)(s,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);