import*as be from"@dropins/tools/preact-compat.js";import{useState as F,Children as de,useRef as Ne,useMemo as ye,useEffect as Q,useCallback as re}from"@dropins/tools/preact-compat.js";import{debounce as xe,classes as O,VComponent as X,toLanguageTag as De,Slot as Z}from"@dropins/tools/lib.js";import{Button as ve,Icon as Pe,Price as ge,Picker as Ue,ColorSwatch as He,ImageSwatch as qe,TextSwatch as je,Incrementer as Xe,Breadcrumbs as Fe,Image as ke}from"@dropins/tools/components.js";import{jsxs as q,jsx as r,Fragment as Se}from"@dropins/tools/preact-jsx-runtime.js";import{useText as G}from"@dropins/tools/i18n.js";import{cloneElement as Ge}from"@dropins/tools/preact.js";import{c as $e,d as Re}from"../chunks/getRefinedProduct.js";import{events as Le}from"@dropins/tools/event-bus.js";import{c as Te}from"../chunks/initialize.js";import"@dropins/tools/fetch-graphql.js";const Ye=t=>be.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},be.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Be=t=>be.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},be.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),be.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),Ke=24,Me=16,fe=2,Ze="32";var We=(t=>(t[t.small=16]="small",t[t.medium=24]="medium",t[t.large=64]="large",t))(We||{});const we=({show:t=1,scrollbar:i=!1,peak:d=!1,arrows:p=!1,controls:s="dots",arrowsOnMainImage:f=!1,loop:h=!1,gap:v=null,direction:l="horizontal",width:Y="100%",height:c="100%",defaultIndex:_=0,className:V,children:R,thumbnails:J=null,isZoomed:oe,...b})=>{const P=G("PDP.Carousel.label").label,n=G("PDP.Carousel.Slide.label").label,y=G("PDP.Carousel.Previous.label").label,k=G("PDP.Carousel.Next.label").label,E=G("PDP.Carousel.Controls.label").label,S=G("PDP.Carousel.Controls.Button.label").label,[A,se]=F(()=>Ee(t)),e=Math.ceil(de.count(R)/A),I=d?Ke:0,g=v?We[v]:0,B=de.count(R)%A,[L,ee]=F(h?_+1:_),x=Ne([]),[te,le]=F(0),[ae,me]=F(0),he=ye(()=>de.toArray(J),[J]),$=ye(()=>{const a=de.toArray(R).reduce((u,D,M)=>M%A===0?[...u,[D]]:[...u.slice(0,-1),[...u[u.length-1],D]],[]);return!h||a.length===1?a:h&&de.count(R)%A===0?[a[e-1]].concat(a).concat([a[0],a[1]]):[de.toArray(R).slice(-A)].concat(a).concat([a[0],a[1]])},[R,A,e,h]),ne=Ne(null),ie=Ne(null),N=s==="thumbnailsRow"||s==="thumbnailsColumn";Q(()=>{const a=document.body,u=xe(()=>{var H,ce;le(((H=ne.current)==null?void 0:H.offsetWidth)??0),me(((ce=ne.current)==null?void 0:ce.offsetHeight)??0);const M=window.innerWidth,j=Ee(t,M);j!==A&&se(j)},50),D=new ResizeObserver(u);return D.observe(a),()=>{D.unobserve(a)}},[A,t]);const K=re(a=>{const u=h?a-1:a,D=x==null?void 0:x.current[0],M=(D==null?void 0:D.offsetWidth)+Me,j=(D==null?void 0:D.offsetHeight)+Me,H=ie.current,ce=s==="thumbnailsRow",Ae=s==="thumbnailsColumn",ue=ce?H==null?void 0:H.offsetWidth:H==null?void 0:H.offsetHeight,C=ce?M:j;(ce||Ae)&&ue&&(C*(u+1)>ue&&(H.style.scrollBehavior="smooth",ce?H.scrollLeft=(u+fe)*C:H.scrollTop=(u+fe)*C),(ce?H.scrollLeft:H.scrollTop)>C*u&&(H.style.scrollBehavior="smooth",ce?H.scrollLeft=(u-fe)*C:H.scrollTop=(u-fe)*C))},[s,h]);Q(()=>{K(L)},[L,K]);const U=re((a,u,D)=>{N&&K(a);const M=ne.current,j=I?M.offsetWidth-I:M.offsetWidth-I+g;if(!Array.from(M.querySelectorAll("[data-index]")).filter(ue=>{const C=Number(ue.getAttribute("data-index"));return!isNaN(C)&&C>-1})[a])return;if(D){const ue=a===0?e:0,C=j*(e+(B||A)/A);if(M.scrollLeft>=0&&M.scrollLeft<j-5){U(1,!0);return}if(M.scrollLeft>C-j&&M.scrollLeft<=C){U(e,!0);return}M.style.scrollBehavior="auto",M.scrollLeft=ue===0?0:C,U(ue===0?1:e,!0);return}const Ae=(M.offsetWidth-g)/A*$[a].length-I;M.style.scrollBehavior=u?"smooth":"auto",M.scrollLeft=$[a].length===A?j*a:j*(a-1)+Ae},[g,e,I,A,B,$,K,s]),pe=re(()=>{if(h){const u=L-1;U(u,!0,L===1);return}const a=L<=0?0:L-1;U(a,!0)},[L,U,h]),o=re(()=>{const a=$.length-1;if(h){const D=L+1;U(D,!0,L===e);return}const u=L>=a?a:L+1;U(u,!0)},[$.length,h,L,U,e]);Q(()=>{const a=u=>{u.key==="ArrowLeft"&&(u.preventDefault(),pe()),u.key==="ArrowRight"&&(u.preventDefault(),o())};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[o,pe]),Q(()=>{U(h?_+1:_,!1)},[_,U,h]);const m=xe(()=>{const a=ne.current,u=I?a.offsetWidth-I:a.offsetWidth-I+g,D=a.scrollLeft/u,M=Math.round(D)-D<1?Math.round(D):Math.ceil(D);if(N&&K(M),h){const j=u*(e+(B||A)/A);if(Math.ceil(a.scrollLeft)>=Math.ceil(j)-5){a.style.scrollBehavior="auto",a.scrollLeft=a.offsetWidth*1+(Math.ceil(a.scrollLeft)-Math.ceil(j)-I);return}if(a.scrollLeft===0){a.style.scrollBehavior="auto",a.scrollLeft=j-a.offsetWidth+I;return}}L!==M&&ee(M)},100);Q(()=>{const a=ne.current;return a==null||a.addEventListener("scroll",m),()=>{a==null||a.removeEventListener("scroll",m)}},[m]);const w=(a,u,D)=>r(ve,{className:O([["pdp-carousel__button",!a],[`pdp-carousel__button--${u}`,!a],[`pdp-carousel__button--${s}`,a]]),style:{"--height":`${ae}px`},variant:"tertiary","aria-label":u==="next"?k:y,onClick:D,disabled:h?!1:u==="next"?L>=$.length-1:L<1,children:r(Pe,{className:O([["pdp-carousel__button__icon",!a],[`pdp-carousel__button__icon--${u}`,!a],[`pdp-carousel__button__icon--${s}--${u}`,a]]),size:Ze,source:Ye})}),T=p&&$.length!=1&&w(N,"prev",pe),z=p&&$.length!=1&&w(N,"next",o),W=p&&$.length!=1&&w(!1,"prev",pe),_e=p&&$.length!=1&&w(!1,"next",o);return q("div",{role:"region","aria-roledescription":P,className:O(["pdp-carousel",["pdp-carousel--main-image-controls",f],["pdp-carousel--arrows",p&&!N],[`pdp-carousel--${s}`,N],V]),style:{"--flex-carousel":s==="thumbnailsColumn"?"row-reverse":"column","--gap":N?"0":"var(--spacing-small)","--width":Y},...b,children:[r("div",{ref:ne,className:O(["pdp-carousel__wrapper",`pdp-carousel__wrapper--${l}`,["pdp-carousel__wrapper--scrollbar",i],["pdp-carousel__wrapper--peak",d]]),style:{"--total-width":s==="thumbnailsColumn"?"81.6%":"100%","--height":s==="thumbnailsColumn"?"auto":c,"--gap":v?`var(--spacing-${v})`:"0px","--per-page":A},tabIndex:0,children:$.map((a,u)=>{const D=a.length<A;return r("div",{role:"group","aria-roledescription":n,"data-index":u,className:O(["pdp-carousel__slide",`pdp-carousel__slide--${l}`,["pdp-carousel__slide--active",L===u],["pdp-carousel__slide--orphan",D]]),style:{"--length":a.length},children:a},u)})}),!N&&q(Se,{children:[T,z]}),N&&f&&q(Se,{children:[W,_e]}),s&&$.length!=1&&q("div",{className:O([[`pdp-carousel__controls__container--${s}`,N],["pdp-carousel__controls__container--no-arrows",!p||f]]),style:{"--width":s==="thumbnailsRow"?`${te}px`:Y,"--height":`${ae}px`,"--nr-thumbnails":he.length},children:[(N||oe)&&!f&&T,r("div",{ref:ie,className:O([[`pdp-carousel__controls__wrapper--${s}`,N],["pdp-carousel__controls__wrapper",N]]),children:r("div",{role:"group","aria-label":E,className:O(["pdp-carousel__controls",[`pdp-carousel__controls--${s}`,N]]),children:(h?$.slice(0,e):$).map((a,u)=>{const D=h?e:$.length,M=h?L-1===u:L===u;return N?q("label",{className:O(["pdp-carousel__thumbnail__container"]),ref:j=>{j&&(x.current[u]=j)},children:[r("input",{type:"radio",name:"carousel-thumbnails","aria-label":S.replace("{key}",String(u+1)).replace("{total}",String(D)),checked:M&&te!==0,onChange:()=>{U(h?u+1:u,!0)},...b,className:O(["pdp-carousel__thumbnail",["pdp-carousel__thumbnail--selected",M&&te!==0]])}),r("span",{className:O(["pdp-carousel__thumbnail__span"]),children:he[u]})]},u):r("button",{"aria-label":S.replace("{key}",String(u+1)).replace("{total}",String(D)),onClick:()=>{U(h?u+1:u,!0)},className:O(["pdp-carousel__controls__button",["pdp-carousel__controls__button--active",M]])},u)})})}),(N||oe)&&!f&&z]})]})};function Ee(t,i=0){if(typeof t=="number")return t;const{small:d,medium:p,large:s}=t,h=[{breakpoint:1024,value:s},{breakpoint:786,value:p},{breakpoint:0,value:d}].find(({breakpoint:v})=>i>v);return h?h.value:d}const Qe=({title:t,breadcrumbs:i,galleryContent:d,infoContent:p,productContent:s,sku:f,outOfStock:h,shortDescription:v,description:l,attributes:Y,images:c,options:_,price:V,specialPrice:R,className:J,children:oe,quantity:b,actions:P,carouselConfig:n,zoomType:y="overlay",closeButton:k=!0,...E})=>{var ee,x,te,le,ae,me,he,$,ne;const S=G("PDP.Product.RegularPrice.label").label,A=G("PDP.Product.SpecialPrice.label").label,se=G("PDP.Product.OutOfStock.label").label,e=G("PDP.Product.Image.label").label,[I,g]=F(null),B=c!=null&&c.length?c.map((ie,N)=>{var U;const K=((U=t==null?void 0:t.props)==null?void 0:U.children)&&(e==null?void 0:e.replace("{product}",t.props.children.toString()).replace("{key}",String(N+1)).replace("{total}",String(c.length)));return y==="zoom"?r(lt,{closeButton:k,children:r(X,{node:ie,loading:N===0?"eager":"lazy",alt:K},N)}):r(X,{node:ie,loading:N===0?"eager":"lazy",alt:K,onClick:()=>g(N)},N)}):r("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0}),L=(ee=n==null?void 0:n.thumbnails)!=null&&ee.length?n.thumbnails.map((ie,N)=>{var K;return r(X,{node:ie,loading:(n==null?void 0:n.thumbnailsLoadingMode)||"lazy",alt:((K=t==null?void 0:t.props)==null?void 0:K.children)&&(e==null?void 0:e.replace("{product}",t.props.children.toString()).replace("{key}",String(N+1)).replace("{total}",String(c.length)))},N)}):r("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",className:"pdp-product__images__placeholder","aria-hidden":!0});return q("div",{...E,className:O(["pdp-product",J]),children:[i&&r(X,{node:i,className:"pdp-product__breadcrumbs"}),q("div",{className:"pdp-product__column-container pdp-product__gallery-column",children:[r("div",{className:"pdp-product__column-body",children:(x=n==null?void 0:n.controls)!=null&&x.desktop?r(we,{className:"pdp-product__overlay__carousel",arrows:(c==null?void 0:c.length)>1,controls:(c==null?void 0:c.length)>1?n.controls.desktop:"dots",arrowsOnMainImage:n==null?void 0:n.arrowsOnMainImage,loop:(n==null?void 0:n.loopable)&&(c==null?void 0:c.length)>1,peak:((te=n==null?void 0:n.thumbnails)==null?void 0:te.length)>1&&((le=n==null?void 0:n.peak)==null?void 0:le.desktop)||!1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"100%",defaultIndex:I||0,thumbnails:L,children:B}):r(Je,{className:"pdp-product__images",gap:"small",children:B})}),d&&r(X,{node:d,className:"pdp-product__gallery-content"})]}),q("div",{className:"pdp-product__column-container pdp-product__content-column",children:[q("div",{className:"pdp-product__column-body",children:[q("div",{className:"pdp-product__header",children:[t&&r(X,{node:t,className:"pdp-product__title"}),f&&r(X,{node:f,className:"pdp-product__sku"})]}),q("div",{className:"pdp-product__prices",children:[R&&r(X,{node:R,className:O(["pdp-product__price-special","pdp-product__price"]),"aria-label":A,role:"text"}),V&&r(X,{node:V,className:O(["pdp-product__price-regular","pdp-product__price--grey"]),"aria-label":S,role:"text"})]}),(ae=n==null?void 0:n.controls)!=null&&ae.mobile&&((me=n==null?void 0:n.controls)==null?void 0:me.mobile)==="thumbnailsRow"?r(we,{className:"pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",width:"100%",height:"auto",arrows:(c==null?void 0:c.length)>1,controls:(c==null?void 0:c.length)>1?"thumbnailsRow":null,loop:(n==null?void 0:n.loopable)&&(c==null?void 0:c.length)>1,peak:((he=n==null?void 0:n.thumbnails)==null?void 0:he.length)>1&&(($=n==null?void 0:n.peak)==null?void 0:$.mobile)||!1,gap:(n==null?void 0:n.gap)||null,thumbnails:L,children:B}):r(we,{className:"pdp-product__images pdp-product__images--carousel",peak:((ne=n==null?void 0:n.peak)==null?void 0:ne.mobile)&&(c==null?void 0:c.length)>1,gap:(n==null?void 0:n.gap)||null,width:"100%",height:"auto",arrows:(c==null?void 0:c.length)>1,controls:(c==null?void 0:c.length)>1?"dots":null,loop:(n==null?void 0:n.loopable)&&(c==null?void 0:c.length)>1,children:B}),q("div",{className:O(["pdp-product__actions",["pdp-product__actions--out-of-stock",h]]),children:[h&&r("div",{className:"pdp-product__out-of-stock__text",children:se}),_&&r(X,{node:_,className:O(["pdp-product__options"])}),b&&r("div",{className:"pdp-product__quantity",children:r(X,{node:b})}),P&&r(X,{node:P,className:O(["pdp-product__buttons"])})]}),v&&r(X,{node:v,className:O(["pdp-product__short_description"])}),l&&r(X,{node:l,className:O(["pdp-product__description"])}),Y?r("div",{className:"pdp-product__attributes",children:Y}):null]}),p&&r(X,{node:p,className:"pdp-product__info-content"})]}),s&&r(X,{node:s,className:"pdp-product__content"}),I===null?null:r(Ce,{className:"pdp-product__overlay",onClose:()=>g(null),centered:!0,children:r(we,{className:"pdp-product__overlay__carousel",arrows:(c==null?void 0:c.length)>1,width:"100%",height:"100%",defaultIndex:I||0,loop:(n==null?void 0:n.loopable)&&(c==null?void 0:c.length)>1,controls:(c==null?void 0:c.length)>1?"dots":null,isZoomed:!0,children:B})})]})},Je=({children:t,gap:i=null,className:d,style:p,...s})=>{const f=de.count(t);return r("div",{...s,className:O(["pdp-gallery-grid",d]),style:{"--gap":i?`var(--spacing-${i})`:"0px",...p},children:de.map(t,(h,v)=>r("div",{className:"pdp-gallery-grid__item",children:r(X,{node:h,loading:v===0?"eager":"lazy"},h.props.src)},f+v))})},Ie=({amount:t,currency:i,locale:d,variant:p,sale:s,minimumAmount:f,maximumAmount:h,className:v,...l})=>r(Se,{children:t||f===h?r("div",{className:"pdp-price-range",...l,children:r(ge,{amount:t||f,currency:i,locale:d,variant:p,sale:s,className:v})}):q("div",{className:"pdp-price-range",...l,children:[r(ge,{amount:f,currency:i,locale:d,className:v}),r("span",{className:"pdp-price-range__label",children:"-"}),r(ge,{amount:h,currency:i,locale:d,className:v})]})}),Ce=({centered:t,onClose:i,className:d,children:p,...s})=>{const f=G("PDP.Overlay.Close.label").label,h=re(()=>{i==null||i()},[i]);return Q(()=>{const v=l=>{l.key==="Escape"&&h()};return document.addEventListener("keydown",v),()=>{document.removeEventListener("keydown",v)}},[h]),Q(()=>{const v=document.scrollingElement,l=v.style.overflow;return v.style.overflow="hidden",()=>{v.style.overflow=l}},[]),q("div",{...s,className:O(["pdp-overlay",["pdp-overlay--centered",t],d]),children:[r("div",{className:"pdp-overlay__content",children:p}),r(ve,{"aria-label":f,variant:"tertiary",className:"pdp-overlay__close-button",onClick:h,icon:r(Be,{})})]})},et=["text","image","color","dropdown"],tt=t=>t.map(i=>({...i,text:i.label,disabled:!i.inStock}));function nt(t,i){return t.reduce((d,p)=>{const s=i==null?void 0:i.find(h=>h.items.find(v=>v.id===p));if(!s)return d;const f=s.items.find(h=>h.id===p);return{...d,[s.id]:{label:f.label,value:f.id}}},{})}const rt=({options:t,hideSelectedValue:i,selectedUIDs:d,onValues:p,onErrors:s,defaultOptions:f,selectionsToUpdate:h,className:v,children:l,...Y})=>{const c=G("PDP.Swatches.Required.label").label,[_,V]=F(()=>t==null?void 0:t.reduce((P,n)=>{const{items:y}=n,k=y==null?void 0:y.find(S=>f==null?void 0:f.includes(S.id)),E=y==null?void 0:y.find(S=>S.selected);return k?{...P,[n.id]:{label:k.label,value:k.id}}:E?{...P,[n.id]:{label:E.label,value:E.id}}:P},{}));Q(()=>{if(d){const b=nt(d,t);if(JSON.stringify(b)===JSON.stringify(_))return;R(Object.keys(b)[0],b[Object.keys(b)[0]].label,d[0])}},[d]),Q(()=>{h==null||h.forEach(b=>{V(P=>{var k;const n=(k=b==null?void 0:b.items)==null?void 0:k.find(E=>E.selected);return n?{...P,[b.id]:{label:n==null?void 0:n.label,value:n==null?void 0:n.id}}:P})})},[h,V]),ye(()=>{const b=t==null?void 0:t.reduce((P,n)=>{var k;let y=!1;return(k=n==null?void 0:n.items)==null||k.forEach(E=>{var A;((A=_[n.id])==null?void 0:A.value)===E.id&&(y=!0)}),n.required&&!y&&(P[n.id]=c),P},{});return s==null||s(b),b},[_]);const R=re((b,P,n)=>{V(y=>{const k={...y,[b]:{label:P,value:n}};return p==null||p(k,n),k})},[p]),J=(b,P)=>{var y;const n=((y=P.selectedOptions[0])==null?void 0:y.label)??"";R(b,n,P.value)},oe=re(({items:b,id:P,required:n,type:y,selected:k,label:E})=>(b==null?void 0:b.length)>0&&r("div",{className:O(["pdp-swatches__options"]),children:(y==null?void 0:y.toLowerCase())==="dropdown"?r(Ue,{"aria-label":E,handleSelect:S=>J(P,S.target),options:tt(b),value:k}):b==null?void 0:b.map(S=>{const A={key:S.id,id:S.id,name:P,value:S.value,label:S.label,groupAriaLabel:E,selected:k===S.id,outOfStock:!S.inStock,required:n===null?!0:n,onValue:()=>{R(P,S.label,S.id)}};switch(y){case"text":return r(je,{...A,label:S.label});case"image":return r(qe,{...A,src:S.value,alt:S.label});case"color":return r(He,{...A,size:"large",color:S.value});default:return console.warn(`Invalid swatch type ${y}`),null}})}),[R]);return r("div",{...Y,className:O(["pdp-swatches",v]),children:t==null?void 0:t.map(({type:b,label:P,id:n,multiple:y,required:k,items:E})=>{var S;return et.includes(b)||console.warn(`Invalid swatch type ${b}`),y&&console.warn("Multiple selection swatches are not currently supported."),q("div",{id:`swatch-item-${n}`,"data-slot-key":`product-swatch--${n}`,className:"pdp-swatches__field",children:[r("div",{className:"pdp-swatches__field__label",children:_[n]?i?`${P}`:`${P}: ${_[n].label}`:P}),r(oe,{id:n,type:b,required:k,items:E,label:P,selected:(S=_[n])==null?void 0:S.value})]},`swatch-item-${n}`)})})},lt=({children:t,scale:i=2,closeButton:d=!0})=>{const[p,s]=F(!1),[f,h]=F("pdp-zoom"),[v,l]=F(!1),[Y,c]=F({x:0,y:0}),[_,V]=F({x:0,y:0}),[R,J]=F({x:0,y:0}),oe=e=>{!p||e.type!=="touchstart"||(c({x:e.touches[0].clientX,y:e.touches[0].clientY}),V({x:R.x,y:R.y}),l(!0))},b=e=>{var ae;if(!v||e.type!=="touchmove")return;const I=(ae=e.currentTarget)==null?void 0:ae.getBoundingClientRect(),g=(100-100/i)/2,B=e.touches[0].clientX-Y.x,L=e.touches[0].clientY-Y.y,ee=B*100/(I.width*i),x=L*100/(I.height*i),te=_.x+ee,le=_.y+x;J({x:Math.max(-g,Math.min(te,g))||0,y:Math.max(-g,Math.min(le,g))||0}),e.preventDefault()},P=e=>{var x;const I=(x=e.currentTarget)==null?void 0:x.getBoundingClientRect(),g=(100-100/i)/2;let B;if("touches"in e)B=e.touches[0];else if(e instanceof MouseEvent)B=e;else return;const L=g-(B.clientX-I.left)/I.width*100,ee=g-(B.clientY-I.top)/I.height*100;J({x:Math.max(-g,Math.min(L,g))||0,y:Math.max(-g,Math.min(ee,g))||0})},n=e=>{if(!v){if(p){if(d&&"touches"in e){oe(e);return}d||s(!1)}else s(!0),P(e);e.preventDefault()}},y=e=>{if(d&&"touches"in e){b(e);return}p&&P(e)},k=()=>{if(d){l(!1);return}s(!1)},E=e=>{s(!1),e.stopPropagation()},S=p?`scale(${i}) translateX(${R.x}%) translateY(${R.y}%)`:"none",A=G("PDP.Zoom.Close.label").label,se=Ge(de.only(t),{draggable:!1,style:{"--transform":S}});return Q(()=>{h(p?`pdp-zoom ${d?"pdp-zoom--no-effects":"pdp-zoom--zoomed"}`:"pdp-zoom")},[p,d]),q("figure",{className:f,onClick:n,onMouseMove:y,onMouseLeave:k,onTouchStart:n,onTouchMove:y,onTouchEnd:k,children:[se,d&&p&&r(ve,{"aria-label":A,variant:"tertiary",className:"pdp-zoom__close-button",icon:r(Be,{}),onClick:E})]})};function at(t,i="en_US"){if(!Ve(t))throw Error("Invalid date string");return t.split(" ")[1]||(t=`${t} 00:00:00`),new Date(t).toLocaleDateString(De(i)).toString()}function Ve(t){if(![/^\d{4}-\d{2}-\d{2}$/,/^\d{1,2}\/\d{1,2}\/\d{4}$/,/^\d{2}\/\d{2}\/\d{4}$/,/^\d{4}\/\d{2}\/\d{2}$/,/^\d{1,2}\.\d{1,2}\.\d{4}$/,/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/].some(p=>p.test(t)))return!1;const d=new Date(t);return!isNaN(d.getTime())}function ct(t){const i=new URLSearchParams(window.location.search);Object.entries(t).forEach(([p,s])=>{s===null?i.delete(p):i.set(p,String(s))});let d=window.location.pathname;d+=`?${i.toString()}`,d+=window.location.hash,window.history.replaceState({},"",d)}function ot(){const t=new URLSearchParams(window.location.search),i={};return t.forEach((d,p)=>{i[p]=d}),i}function it(t){var i,d,p,s,f,h,v,l,Y,c,_,V;return{productId:Number(t==null?void 0:t.externalId),name:t==null?void 0:t.name,sku:t==null?void 0:t.sku,topLevelSku:t==null?void 0:t.externalParentId,specialToDate:void 0,specialFromDate:void 0,newToDate:void 0,newFromDate:void 0,createdAt:void 0,updatedAt:void 0,manufacturer:void 0,countryOfManufacture:void 0,categories:void 0,productType:void 0,pricing:{regularPrice:((d=(i=t==null?void 0:t.prices)==null?void 0:i.regular)==null?void 0:d.amount)||0,minimalPrice:(s=(p=t==null?void 0:t.prices)==null?void 0:p.final)==null?void 0:s.minimumAmount,maximalPrice:(h=(f=t==null?void 0:t.prices)==null?void 0:f.final)==null?void 0:h.maximumAmount,specialPrice:(l=(v=t==null?void 0:t.prices)==null?void 0:v.final)==null?void 0:l.amount,tierPricing:void 0,currencyCode:((c=(Y=t==null?void 0:t.prices)==null?void 0:Y.final)==null?void 0:c.currency)||"USD"},canonicalUrl:t==null?void 0:t.url,mainImageUrl:(V=(_=t==null?void 0:t.images)==null?void 0:_[0])==null?void 0:V.url}}const dt={PRODUCT_CONTEXT:"productContext"},st={PRODUCT_PAGE_VIEW:"product-page-view"};function ze(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function ht(t,i){const d=ze();d.push({[t]:null}),d.push({[t]:i})}function pt(t,i){ze().push(p=>{const s=p.getState?p.getState():{};p.push({event:t,eventInfo:{...s,...i}})})}function Oe(t){const i=it(t);ht(dt.PRODUCT_CONTEXT,i),pt(st.PRODUCT_PAGE_VIEW)}const ut=({sku:t,hideSku:i,hideQuantity:d,hideShortDescription:p,hideDescription:s,hideAttributes:f,hideURLParams:h,hideSelectedOptionValue:v,slots:l,children:Y,initialData:c,carousel:_,optionsConfig:V,useACDL:R,onAddToCart:J,zoomType:oe,closeButton:b=!0,...P})=>{var N,K,U,pe;const n=G("PDP.Product.AddToCart.label").label,y=G("PDP.Product.Incrementer.label").label,k=G("PDP.Product.Details.label").label,[E,S]=F(Te.getConfig().defaultLocale||"en-US"),[A,se]=F(),[e=null,I]=F(c),[g,B]=F(()=>{const o={sku:t,quantity:1};return e!=null&&e.optionUIDs&&(o.optionsUIDs=e.optionUIDs),o}),[L,ee]=F(()=>{var o,m;return!(e!=null&&e.options&&((o=e==null?void 0:e.options)==null?void 0:o.length)>0&&((m=e==null?void 0:e.optionUIDs)==null?void 0:m.length)!==(e==null?void 0:e.options.length))}),x={data:e,values:g,valid:L};function te(o){return o==null?void 0:o.some(m=>(m==null?void 0:m.typename)==="ProductViewOptionValueProduct")}Q(()=>{const o=Le.on("pdp/setValues",m=>{B(w=>({...w,...m}))});return()=>{o==null||o.off()}},[]),Q(()=>{const o=Le.on("locale",m=>{m!==E&&(S(m),$e(t).then(I))});return()=>{o==null||o.off()}},[E,t]),Q(()=>{R&&c&&Object.keys(c).length>0&&Oe(c)},[c]);const le=re(o=>{B(m=>({...m,...o}))},[]);Q(()=>{Le.emit("pdp/values",g)},[JSON.stringify(g)]);const ae=re(o=>{var T,z;let m=Object.keys(o).map(W=>o[W].value).filter(W=>W!==void 0);!h&&(e!=null&&e.options)&&!te(e.options)&&ct({optionsUIDs:m.join(",")}),le({optionsUIDs:m}),ee((m==null?void 0:m.length)===((T=e==null?void 0:e.options)==null?void 0:T.length));const w=(z=e==null?void 0:e.options)==null?void 0:z.some(W=>te([W]));Re(t,m,V==null?void 0:V.anchorOptions,w).then(W=>{var _e;I(W),(_e=V==null?void 0:V.anchorOptions)!=null&&_e.length&&me(W,m),R&&(W==null?void 0:W.variantSku)!==t&&Oe(W)})},[t]),me=re((o,m)=>{var z;const w=(o==null?void 0:o.optionUIDs)??[];m.every(W=>w.includes(W))||(se(o==null?void 0:o.options),le({optionsUIDs:w}),ee((w==null?void 0:w.length)===((z=o==null?void 0:o.options)==null?void 0:z.length)))},[t]),he=re(o=>{Object.keys(o).length!==0&&ee(!1)},[]),$=ye(()=>{var o;return(o=e==null?void 0:e.attributes)==null?void 0:o.map(({label:m,value:w},T)=>{const z=Ve(w)?at(w,E):w.toString();return q("li",{children:[m,": ",r("span",{dangerouslySetInnerHTML:{__html:z}})]},T)})},[e==null?void 0:e.attributes,E]),ne=!d&&(e!=null&&e.inStock)?r(Z,{name:"Quantity",slot:l==null?void 0:l.Quantity,context:{...x},children:r(Xe,{name:"quantity",defaultValue:g.quantity.toString(),value:g.quantity.toString(),min:1,"aria-label":y,className:"pdp-product__quantity",onValue:o=>{le({quantity:Number(o)})}},"quantity")}):void 0,ie=()=>{if(e!=null&&e.options)return r(Z,{name:"Options",slot:l==null?void 0:l.Options,context:{...x},children:r(rt,{selectedUIDs:g.optionsUIDs,options:e.options,defaultOptions:g.optionsUIDs,selectionsToUpdate:A,hideSelectedValue:v,onValues:ae,onErrors:he})})};return r("div",{...P,children:r(Qe,{title:r(Z,{name:"Title",slot:l==null?void 0:l.Title,context:{...x},children:e==null?void 0:e.name}),sku:i?void 0:r(Z,{name:"SKU",slot:l==null?void 0:l.SKU,context:{...x},children:e==null?void 0:e.sku}),options:ie(),breadcrumbs:(l==null?void 0:l.Breadcrumbs)&&r(Z,{name:"Breadcrumbs",slot:l==null?void 0:l.Breadcrumbs,context:{...x,setSeparator(o){this._registerMethod((...m)=>{const w=o(...m),T=w&&r(Pe,{source:w});this._setProps(z=>({...z,separator:T}))})},appendLink(o){this._registerMethod((...m)=>{const{text:w,...T}=o(...m),z=r("a",{...T,children:w});this._setProps(W=>({...W,categories:[...W.categories||[],z]}))})},appendHTMLElement(o){this._registerMethod((...m)=>{const w=o(...m),T=this._htmlElementToVNode(w);this._setProps(z=>({...z,categories:[...z.categories||[],T]}))})}},render:({separator:o,categories:m})=>r(Fe,{separator:o,categories:m})}),quantity:ne,actions:r(Z,{name:"Actions",slot:l==null?void 0:l.Actions,context:{...x,appendButton(o){this._registerMethod((...m)=>{const w=o(...m);if(!w)return;const{text:T,icon:z,...W}=w,_e=r(ve,{type:"button",...W,icon:z&&r(Pe,{source:z}),children:T});this._setProps(a=>({children:[...a.children||[],_e]}))})}},children:!(l!=null&&l.Actions)&&r(ve,{size:"medium",type:"submit",icon:r(Pe,{source:"Cart"}),disabled:!(e!=null&&e.inStock)||!L,"aria-label":n,onClick:()=>J==null?void 0:J(g),children:n})}),shortDescription:p?void 0:r(Z,{name:"ShortDescription",slot:l==null?void 0:l.ShortDescription,context:{...x},children:r("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.shortDescription)??""}})}),description:s?void 0:r(Z,{name:"Description",slot:l==null?void 0:l.Description,context:{...x},children:r("div",{dangerouslySetInnerHTML:{__html:(e==null?void 0:e.description)??""}})}),images:((N=e==null?void 0:e.images)==null?void 0:N.map(({label:o,url:m})=>{var w,T;return r(ke,{title:o,alt:o,src:m,width:((w=_==null?void 0:_.imageParams)==null?void 0:w.width)??960,height:((T=_==null?void 0:_.imageParams)==null?void 0:T.height)??1191,params:(_==null?void 0:_.imageParams)??{width:960}},m)}))??[],specialPrice:(K=e==null?void 0:e.prices)!=null&&K.visible?r(Z,{name:"SpecialPrice",slot:l==null?void 0:l.SpecialPrice,context:{...x},children:r(Ie,{...e.prices.final,locale:De(E)})}):void 0,price:(U=e==null?void 0:e.prices)!=null&&U.visible&&e.prices.regular&&e.prices.final.amount!==(e==null?void 0:e.prices.regular.amount)?r(Z,{name:"RegularPrice",slot:l==null?void 0:l.RegularPrice,context:{...x},children:r(Ie,{...e.prices.regular,locale:De(E)})}):void 0,zoomType:oe,closeButton:b,carouselConfig:{..._,thumbnails:_&&Object.keys(_).length?((pe=e==null?void 0:e.images)==null?void 0:pe.map(({label:o,url:m})=>{var w,T;return r(ke,{title:o,alt:o,src:m,width:((w=_==null?void 0:_.thumbnailParams)==null?void 0:w.width)??200,height:((T=_==null?void 0:_.thumbnailParams)==null?void 0:T.height)??248,params:(_==null?void 0:_.thumbnailParams)??{width:200}},m)}))??[]:[]},outOfStock:!(e!=null&&e.inStock),attributes:f?void 0:r(Z,{name:"Attributes",slot:l==null?void 0:l.Attributes,context:{...x},children:$!=null&&$.length?q(Se,{children:[k,r("ul",{children:$})]}):null}),galleryContent:(l==null?void 0:l.GalleryContent)&&r(Z,{name:"GalleryContent",slot:l.GalleryContent,context:{...x}}),infoContent:(l==null?void 0:l.InfoContent)&&r(Z,{name:"InfoContent",slot:l.InfoContent,context:{...x}}),productContent:(l==null?void 0:l.Content)&&r(Z,{name:"Content",slot:l.Content,context:{...x}})})})};ut.getInitialData=async function({sku:t,optionsConfig:i}){var p,s,f,h,v,l;const d=((p=ot().optionsUIDs)==null?void 0:p.split(","))||((l=(v=(h=(f=(s=Te)==null?void 0:s.getConfig())==null?void 0:f.models)==null?void 0:h.ProductDetails)==null?void 0:v.initialData)==null?void 0:l.optionsUIDs);return d!=null&&d.length?await Re(t,d,i==null?void 0:i.anchorOptions):await $e(t)};export{ut as ProductDetails,ut as default};
