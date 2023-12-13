"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=l(n),p=r,m=c["".concat(o,".").concat(p)]||c[p]||g[p]||s;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,a[1]=u;for(var l=2;l<s;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84233:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(83117),r=n(67294),s=n(3905);const a={id:"funding-limit-settings-change-request-order-by-input",title:"FundingLimitSettingsChangeRequestOrderByInput",hide_table_of_contents:!1},u=void 0,o={unversionedId:"inputs/funding-limit-settings-change-request-order-by-input",id:"inputs/funding-limit-settings-change-request-order-by-input",title:"FundingLimitSettingsChangeRequestOrderByInput",description:"Order that can be applied when listing funding limit settings change requests",source:"@site/docs/inputs/funding-limit-settings-change-request-order-by-input.mdx",sourceDirName:"inputs",slug:"/inputs/funding-limit-settings-change-request-order-by-input",permalink:"/inputs/funding-limit-settings-change-request-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/api-reference/edit/main/docs/docs/inputs/funding-limit-settings-change-request-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-order-by-input",title:"FundingLimitSettingsChangeRequestOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettingsChangeRequestFiltersInput",permalink:"/inputs/funding-limit-settings-change-request-filters-input"},next:{title:"FundingSourceFiltersInput",permalink:"/inputs/funding-source-filters-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestOrderByInput.<b>field</b></code><Bullet /><code>FundingLimitSettingsChangeRequestOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestorderbyinputbfieldbcodefundinglimitsettingschangerequestorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestorderbyinputbdirectionbcodeorderbydirection-",level:4}],c=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:c,SpecifiedBy:g,Badge:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Order that can be applied when listing funding limit settings change requests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input FundingLimitSettingsChangeRequestOrderByInput {\n  field: FundingLimitSettingsChangeRequestOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestorderbyinputbfieldbcodefundinglimitsettingschangerequestorderbyfieldinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestOrderByInput.",(0,s.kt)("b",null,"field"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/enums/funding-limit-settings-change-request-order-by-field-input"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestOrderByFieldInput"))," ",(0,s.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestorderbyinputbdirectionbcodeorderbydirection-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestOrderByInput.",(0,s.kt)("b",null,"direction"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/enums/order-by-direction"},(0,s.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,s.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}y.isMDXComponent=!0}}]);