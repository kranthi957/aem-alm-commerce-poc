/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as t,jsxs as s}from"@dropins/tools/preact-jsx-runtime.js";/* empty css                             */import{Icon as A,Button as E,Skeleton as y,SkeletonRow as n}from"@dropins/tools/components.js";/* empty css                       */import"@dropins/tools/lib.js";import"@dropins/tools/preact-hooks.js";/* empty css                  */import{H as N}from"../chunks/Heading.js";import*as o from"@dropins/tools/preact-compat.js";import{useState as C,useEffect as b}from"@dropins/tools/preact-compat.js";import{useText as H,Text as v}from"@dropins/tools/i18n.js";import{s as f}from"../chunks/store-config.js";import"../chunks/ServerErrorSignal.js";import"@dropins/tools/event-bus.js";import"../chunks/fetch-graphql.js";import{i as z}from"../chunks/isEmailAvailable.js";import"@dropins/tools/signals.js";import"@dropins/tools/fetch-graphql.js";function p(e){var r;return{region:{region_id:e!=null&&e.regionId?Number(e==null?void 0:e.regionId):null,region:e==null?void 0:e.region},city:e==null?void 0:e.city,company:e==null?void 0:e.company,country_code:e==null?void 0:e.country,firstname:e==null?void 0:e.firstName,lastname:e==null?void 0:e.lastName,middlename:e==null?void 0:e.middleName,postcode:e==null?void 0:e.postCode,street:e==null?void 0:e.street,telephone:e==null?void 0:e.telephone,custom_attributesV2:((r=e==null?void 0:e.customAttributes)==null?void 0:r.map(c=>({attribute_code:c.code,value:c.value})))||[]}}const V=e=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{clipPath:"url(#clip0_4797_15077)"},o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M10.15 20.85L1.5 17.53V6.63L10.15 10V20.85Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M1.5 6.63001L10.15 3.20001L18.8 6.63001L10.15 10L1.5 6.63001Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.17969 4.77002L14.8297 8.15002V11.47",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.7896 12.64V6.63L10.1396 10V20.85L14.8296 19.05",stroke:"currentColor",strokeLinejoin:"round"}),o.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M15.71 17.26C15.71 15.38 17.23 13.86 19.11 13.86C20.99 13.86 22.51 15.38 22.51 17.26C22.51 19.14 20.99 20.66 19.11 20.66C17.23 20.66 15.71 19.14 15.71 17.26Z",stroke:"currentColor"}),o.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M17.4805 17.49L18.5605 18.41L20.7205 16.33",stroke:"currentColor",strokeLinecap:"square",strokeLinejoin:"round"})),o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_4797_15077"},o.createElement("rect",{width:22,height:18.65,fill:"white",transform:"translate(1 2.70001)"})))),w=({customerName:e,isLoading:r,orderNumber:c,onSignUpClick:a})=>{const l=H({title:t(v,{id:"Checkout.OrderConfirmationHeader.title",fields:{name:e}}),defaultTitle:"Checkout.OrderConfirmationHeader.defaultTitle",order:t(v,{id:"Checkout.OrderConfirmationHeader.order",fields:{order:c}}),createAccountMessage:"Checkout.OrderConfirmationHeader.CreateAccount.message",createAccountButton:"Checkout.OrderConfirmationHeader.CreateAccount.button"});return r?t(x,{}):s("div",{className:"order-confirmation-header order-confirmation__card",children:[t(A,{source:V,size:"64",className:"order-confirmation-header__icon"}),t(N,{level:1,className:"order-confirmation-header__title",children:e?l.title:l.defaultTitle}),c&&t("p",{className:"order-confirmation-header__order",children:l.order}),a&&s("div",{className:"order-confirmation-create-account",children:[t("p",{className:"order-confirmation-create-account__message",children:l.createAccountMessage}),t(E,{"data-testid":"create-account-button",className:"order-confirmation-create-account__button",size:"medium",variant:"secondary",type:"submit",onClick:a,children:l.createAccountButton})]})]})},x=()=>s(y,{"data-testid":"order-confirmation-header-skeleton",className:"order-confirmation-header",children:[t(n,{variant:"empty",size:"xlarge",fullWidth:!0}),t(n,{variant:"empty",size:"medium"}),t(n,{variant:"empty",size:"medium"}),t(n,{variant:"empty",size:"medium"}),t(n,{variant:"empty",size:"medium"}),t(n,{variant:"empty",size:"medium"}),t(n,{size:"small",fullWidth:!0}),t(n,{variant:"heading",size:"xsmall",fullWidth:!0})]}),U=({orderData:e,onSignUpClick:r})=>{var g;const[c,a]=C(!f.authenticated),[l,h]=C();b(()=>{f.authenticated||z(e.email).then(m=>h(!m)).catch(()=>h(!0)).finally(()=>a(!1))},[e.email]);const _=r&&!f.authenticated&&l===!1?()=>{const m=e.shippingAddress,i=e.billingAddress,L=[{code:"firstname",defaultValue:(i==null?void 0:i.firstName)||""},{code:"lastname",defaultValue:(i==null?void 0:i.lastName)||""},{code:"email",defaultValue:e.email||""}];let u;if(m){const k={...p(m),default_shipping:!0};u=[{...p(i),default_billing:!0},k]}else u=[{...p(i),default_billing:!0,default_shipping:!0}];r({inputsDefaultValueSet:L,addressesData:u})}:void 0;return t("div",{children:t(w,{customerName:(g=e.billingAddress)==null?void 0:g.firstName,isLoading:c,onSignUpClick:_,orderNumber:e.number})})};export{U as OrderConfirmationHeader,U as default};