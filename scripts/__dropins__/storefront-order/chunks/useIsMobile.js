/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as c,Fragment as b}from"@dropins/tools/preact-jsx-runtime.js";import{useMemo as x,useState as P,useCallback as T,useEffect as K}from"@dropins/tools/preact-hooks.js";import{classes as q,Slot as I,debounce as R}from"@dropins/tools/lib.js";import{IllustratedMessage as D,Icon as E,Card as j,ContentGrid as r1,Image as e1,Header as F,Pagination as n1}from"@dropins/tools/components.js";import*as o from"@dropins/tools/preact-compat.js";import{useMemo as t1}from"@dropins/tools/preact-compat.js";import"./OrderCancelReasonsForm.js";import{f as L1}from"./returnOrdersHelper.js";import{Text as G}from"@dropins/tools/i18n.js";const W=t=>o.createElement("svg",{id:"Icon_Chevron_right_Base","data-name":"Icon \\u2013 Chevron right \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...t},o.createElement("g",{id:"Large"},o.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),o.createElement("g",{id:"Chevron_right_icon","data-name":"Chevron right icon"},o.createElement("path",{vectorEffect:"non-scaling-stroke",id:"chevron",d:"M199.75,367.5l4.255,-4.255-4.255,-4.255",transform:"translate(-189.25 -351.0)",fill:"none",stroke:"currentColor"})))),a1=t=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M12.002 21L11.8275 21.4686C11.981 21.5257 12.1528 21.5041 12.2873 21.4106C12.4218 21.3172 12.502 21.1638 12.502 21H12.002ZM3.89502 17.9823H3.39502C3.39502 18.1912 3.52485 18.378 3.72059 18.4509L3.89502 17.9823ZM3.89502 8.06421L4.07193 7.59655C3.91831 7.53844 3.74595 7.55948 3.61082 7.65284C3.47568 7.74619 3.39502 7.89997 3.39502 8.06421H3.89502ZM12.0007 21H11.5007C11.5007 21.1638 11.5809 21.3172 11.7154 21.4106C11.8499 21.5041 12.0216 21.5257 12.1751 21.4686L12.0007 21ZM20.1076 17.9823L20.282 18.4509C20.4778 18.378 20.6076 18.1912 20.6076 17.9823H20.1076ZM20.1076 8.06421H20.6076C20.6076 7.89997 20.527 7.74619 20.3918 7.65284C20.2567 7.55948 20.0843 7.53844 19.9307 7.59655L20.1076 8.06421ZM12.0007 11.1311L11.8238 10.6634C11.6293 10.737 11.5007 10.9232 11.5007 11.1311H12.0007ZM20.2858 8.53191C20.5441 8.43421 20.6743 8.14562 20.5766 7.88734C20.4789 7.62906 20.1903 7.49889 19.932 7.5966L20.2858 8.53191ZM12.002 4.94826L12.1775 4.48008C12.0605 4.43623 11.9314 4.43775 11.8154 4.48436L12.002 4.94826ZM5.87955 6.87106C5.62334 6.97407 5.49915 7.26528 5.60217 7.52149C5.70518 7.77769 5.99639 7.90188 6.2526 7.79887L5.87955 6.87106ZM18.1932 7.80315C18.4518 7.90008 18.74 7.76904 18.8369 7.51047C18.9338 7.2519 18.8028 6.96371 18.5442 6.86678L18.1932 7.80315ZM12 4.94827L11.5879 5.23148C11.6812 5.36719 11.8353 5.44827 12 5.44827C12.1647 5.44827 12.3188 5.36719 12.4121 5.23148L12 4.94827ZM14.0263 2L14.2028 1.53218C13.9875 1.45097 13.7446 1.52717 13.6143 1.71679L14.0263 2ZM21.8421 4.94827L22.2673 5.2113C22.3459 5.08422 22.3636 4.92863 22.3154 4.78717C22.2673 4.64571 22.1584 4.53319 22.0186 4.48045L21.8421 4.94827ZM9.97368 2L10.3857 1.71679C10.2554 1.52717 10.0125 1.45097 9.79721 1.53218L9.97368 2ZM2.15789 4.94827L1.98142 4.48045C1.84161 4.53319 1.73271 4.64571 1.68456 4.78717C1.63641 4.92863 1.65406 5.08422 1.73267 5.2113L2.15789 4.94827ZM12 11.1256L11.6702 11.5014C11.8589 11.667 12.1411 11.667 12.3298 11.5014L12 11.1256ZM15.0395 8.45812L14.8732 7.98659C14.8131 8.00779 14.7576 8.04028 14.7097 8.08232L15.0395 8.45812ZM23 5.65024L23.3288 6.0269C23.5095 5.86916 23.5527 5.60532 23.4318 5.39817C23.3109 5.19102 23.0599 5.09893 22.8337 5.17871L23 5.65024ZM8.96053 8.45812L9.29034 8.08232C9.24244 8.04028 9.18695 8.00779 9.12685 7.98659L8.96053 8.45812ZM1 5.65024L1.16632 5.17871C0.940115 5.09893 0.689119 5.19102 0.568192 5.39817C0.447264 5.60532 0.49048 5.86916 0.671176 6.0269L1 5.65024ZM12.1764 20.5314L4.06945 17.5137L3.72059 18.4509L11.8275 21.4686L12.1764 20.5314ZM4.39502 17.9823V8.06421H3.39502V17.9823H4.39502ZM3.71811 8.53187L11.8251 11.5987L12.1789 10.6634L4.07193 7.59655L3.71811 8.53187ZM11.502 11.1311V21H12.502V11.1311H11.502ZM12.1751 21.4686L20.282 18.4509L19.9332 17.5137L11.8262 20.5314L12.1751 21.4686ZM20.6076 17.9823V8.06421H19.6076V17.9823H20.6076ZM19.9307 7.59655L11.8238 10.6634L12.1776 11.5987L20.2845 8.53187L19.9307 7.59655ZM11.5007 11.1311V21H12.5007V11.1311H11.5007ZM19.932 7.5966L11.8251 10.6634L12.1789 11.5987L20.2858 8.53191L19.932 7.5966ZM11.8154 4.48436L5.87955 6.87106L6.2526 7.79887L12.1885 5.41217L11.8154 4.48436ZM11.8265 5.41645L18.1932 7.80315L18.5442 6.86678L12.1775 4.48008L11.8265 5.41645ZM11.502 4.94826V11.1311H12.502V4.94826H11.502ZM12.4121 5.23148L14.4384 2.28321L13.6143 1.71679L11.5879 4.66507L12.4121 5.23148ZM13.8498 2.46782L21.6656 5.4161L22.0186 4.48045L14.2028 1.53218L13.8498 2.46782ZM21.4169 4.68525L20.5485 6.08919L21.3989 6.61524L22.2673 5.2113L21.4169 4.68525ZM12.4121 4.66507L10.3857 1.71679L9.56162 2.28321L11.5879 5.23148L12.4121 4.66507ZM9.79721 1.53218L1.98142 4.48045L2.33437 5.4161L10.1502 2.46782L9.79721 1.53218ZM1.73267 5.2113L2.60109 6.61524L3.45154 6.08919L2.58312 4.68525L1.73267 5.2113ZM12.3298 11.5014L15.3693 8.83392L14.7097 8.08232L11.6702 10.7498L12.3298 11.5014ZM15.2058 8.92965L23.1663 6.12177L22.8337 5.17871L14.8732 7.98659L15.2058 8.92965ZM22.6712 5.27358L19.7764 7.80067L20.4341 8.554L23.3288 6.0269L22.6712 5.27358ZM12.3298 10.7498L9.29034 8.08232L8.63072 8.83392L11.6702 11.5014L12.3298 10.7498ZM9.12685 7.98659L1.16632 5.17871L0.83368 6.12177L8.79421 8.92965L9.12685 7.98659ZM0.671176 6.0269L3.56591 8.554L4.22356 7.80067L1.32882 5.27358L0.671176 6.0269Z",fill:"#D6D6D6"})),O=({typeList:t,isEmpty:h,minifiedView:i,message:n})=>{const L=t1(()=>{switch(t){case"orders":return{icon:a1,text:r("p",{children:n}),className:"order-empty-list--empty-box"};default:return{icon:"",text:"",className:""}}},[t,n]);return!h||!t||!L.text?null:r(D,{className:q(["order-empty-list",L.className,i?"order-empty-list--minified":""]),message:L.text,icon:r(E,{source:L.icon}),"data-testid":"emptyList"})},U={size:"32",stroke:"2"},M1=({minifiedViewKey:t,withReturnNumber:h=!1,withOrderNumber:i=!1,slots:n,pageInfo:L,withReturnsListButton:w=!0,isMobile:f=!1,returnsInMinifiedView:J=1,translations:a={},orderReturns:d=[],minifiedView:M=!1,withHeader:C=!0,withThumbnails:H=!0,selectedPage:y=1,handleSetSelectPage:$,routeReturnDetails:m,routeOrderDetails:Z,routeTracking:g,routeReturnsList:p,routeProductDetails:l})=>{const V=M?J:d.length,S=l!=null&&l()?"a":"span",_=x(()=>d.slice(0,V).map((e,Y)=>{var z,A;return r(j,{variant:"secondary",className:"order-returns-list-content__cards-list",children:c("div",{className:"order-returns-list-content__cards-grid",children:[c("div",{className:"order-returns-list-content__descriptions",children:[r("p",{className:"order-returns-list-content__return-status",children:r(G,{id:`Order.Returns.${t}.returnsList.resturnStatus.${L1(e.returnStatus)}`})}),h?c("p",{children:[a.returnNumber," ",r("a",{href:(m==null?void 0:m({returnNumber:e.returnNumber,orderNumber:e.orderNumber,token:e.token}))??"#",target:"_blank",rel:"noreferrer",children:e.returnNumber})]}):null,i?c("p",{children:[a.orderNumber," ",r("a",{href:(Z==null?void 0:Z({orderNumber:e.orderNumber,token:e.token}))??"#",target:"_blank",rel:"noreferrer",children:e.orderNumber})]}):null,(z=e==null?void 0:e.tracking)==null?void 0:z.map((s,v)=>{var u,N;return c("p",{children:[`${a.carrier} ${(N=(u=s==null?void 0:s.carrier)==null?void 0:u.label)==null?void 0:N.toLocaleUpperCase()}: `,r("a",{href:`${(g==null?void 0:g(s))||"#"}`,target:"_blank",rel:"noreferrer",children:s.trackingNumber})]},`${s.trackingNumber}_${v}`)}),n!=null&&n.ReturnItemsDetails?r(I,{"data-testid":"returnItemsDetails",name:"ReturnItemsDetails",slot:n==null?void 0:n.ReturnItemsDetails,context:{items:e.items}}):e.items.length?c("p",{children:[e.items.length," ",r(G,{id:`Order.Returns.${t}.returnsList.itemText`,plural:e.items.length,fields:{count:e.items.length}})]}):null]}),H?r(r1,{maxColumns:f?3:9,emptyGridContent:r(b,{}),className:q(["order-returns-list-content__images",["order-returns-list-content__images-3",f]]),children:(A=e==null?void 0:e.items)==null?void 0:A.map((s,v)=>{var B,k;const u=(B=s.thumbnail)==null?void 0:B.label,N=(k=s.thumbnail)==null?void 0:k.url;return r(S,{href:(l==null?void 0:l(s))??"#",children:r(e1,{alt:u,src:N,width:85,height:114})},v+s.uid)})}):null,n!=null&&n.DetailsActionParams?r(I,{className:"order-returns-list-content__actions","data-testid":"detailsActionParams",name:"DetailsActionParams",slot:n==null?void 0:n.DetailsActionParams,context:{returnOrderItem:e}}):r("a",{href:(m==null?void 0:m({returnNumber:e.returnNumber,token:e.token,orderNumber:e.orderNumber}))??"#",className:"order-returns-list-content__actions",children:r(E,{source:W,...U})})]})},Y)}),[d,V,t,h,a,m,i,Z,n,H,f,g,S,l]),Q=x(()=>c(b,{children:[C?r(F,{title:a.minifiedViewTitle,divider:!1}):null,_,r(O,{minifiedView:M,typeList:"orders",isEmpty:!d.length,message:a.emptyOrdersListMessage}),w?r("a",{className:"order-returns-list-content__actions",href:(p==null?void 0:p())??"#",children:r(j,{variant:"secondary",className:"order-returns-list-content__card",children:c("div",{className:"order-returns-list-content__card-wrapper",children:[r("p",{children:a.viewAllOrdersButton}),r(E,{source:W,...U})]})})}):null]}),[p,w,C,a,_,M,d.length]),X=x(()=>c(b,{children:[C?r(F,{title:a.minifiedViewTitle,divider:!1}):null,r(O,{minifiedView:M,typeList:"orders",isEmpty:!d.length,message:a.emptyOrdersListMessage}),_,(L==null?void 0:L.totalPages)>1?r(n1,{totalPages:L==null?void 0:L.totalPages,currentPage:y,onChange:$}):null]}),[_,M,d,a,L,y,$,C]);return r("div",{className:"order-returns-list-content",children:M?Q:X})},C1=()=>{const[t,h]=P(window.innerWidth<768),i=T(R(()=>{h(window.innerWidth<768)},1e3),[]);return K(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[i]),t};export{M1 as R,C1 as u};