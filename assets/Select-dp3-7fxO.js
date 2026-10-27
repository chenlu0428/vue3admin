import{o as ro,bD as Ye,w as Oe,G as bo,d as Pe,q as s,bE as ze,H as po,bF as io,ak as Ze,at as Go,T as mo,L as F,P as z,a1 as j,N as Y,a0 as ke,bh as Co,R as Ve,b8 as Jo,ba as Qo,Q as Xo,bf as Yo,S as Ke,as as ao,U as we,V as Ue,E as B,ae as q,bG as Zo,r as T,aW as Ee,bH as en,ax as wo,b1 as on,Z as V,bI as Te,a9 as to,bJ as nn,a6 as tn,bK as ln,bL as $,bM as rn,aw as ae,$ as so,K as an,bN as sn,bO as co,F as cn,aX as dn,W as un,bP as hn,bQ as vn,bR as fn,bS as gn,b0 as lo,p as bn,J as pn,bT as uo,ar as ho,ap as mn,aq as Cn,bs as wn,bU as xn,bV as yn,bW as Sn,bX as kn,aV as On}from"./index-BmBhVyyc.js";import{V as Pn,F as Rn,N as Fn}from"./Suffix-Bsctk0Ua.js";function xo(e,i){i&&(ro(()=>{const{value:t}=e;t&&Ye.registerHandler(t,i)}),Oe(e,(t,c)=>{c&&Ye.unregisterHandler(c)},{deep:!1}),bo(()=>{const{value:t}=e;t&&Ye.unregisterHandler(t)}))}function vo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function eo(e){const i=e.filter(t=>t!==void 0);if(i.length!==0)return i.length===1?i[0]:t=>{e.forEach(c=>{c&&c(t)})}}const zn=Pe({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),fo=Pe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:t,nodePropsRef:c}=po(io);return{labelField:t,nodeProps:c,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:t,nodeProps:c,tmNode:{rawNode:u}}=this,f=c==null?void 0:c(u),d=i?i(u,!1):ze(u[this.labelField],u,!1),l=s("div",Object.assign({},f,{class:[`${e}-base-select-group-header`,f==null?void 0:f.class]}),d);return u.render?u.render({node:l,option:u}):t?t({node:l,option:u,selected:!1}):l}});function Tn(e,i){return s(mo,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Go,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>s(zn)}):null})}const go=Pe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:t,multipleRef:c,valueSetRef:u,renderLabelRef:f,renderOptionRef:d,labelFieldRef:l,valueFieldRef:k,showCheckmarkRef:M,nodePropsRef:I,handleOptionClick:w,handleOptionMouseEnter:E}=po(io),R=Ze(()=>{const{value:y}=t;return y?e.tmNode.key===y.key:!1});function b(y){const{tmNode:m}=e;m.disabled||w(y,m)}function g(y){const{tmNode:m}=e;m.disabled||E(y,m)}function O(y){const{tmNode:m}=e,{value:D}=R;m.disabled||D||E(y,m)}return{multiple:c,isGrouped:Ze(()=>{const{tmNode:y}=e,{parent:m}=y;return m&&m.rawNode.type==="group"}),showCheckmark:M,nodeProps:I,isPending:R,isSelected:Ze(()=>{const{value:y}=i,{value:m}=c;if(y===null)return!1;const D=e.tmNode.rawNode[k.value];if(m){const{value:K}=u;return K.has(D)}else return y===D}),labelField:l,renderLabel:f,renderOption:d,handleMouseMove:O,handleMouseEnter:g,handleClick:b}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:t,isPending:c,isGrouped:u,showCheckmark:f,nodeProps:d,renderOption:l,renderLabel:k,handleClick:M,handleMouseEnter:I,handleMouseMove:w}=this,E=Tn(t,e),R=k?[k(i,t),f&&E]:[ze(i[this.labelField],i,t),f&&E],b=d==null?void 0:d(i),g=s("div",Object.assign({},b,{class:[`${e}-base-select-option`,i.class,b==null?void 0:b.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:u,[`${e}-base-select-option--pending`]:c,[`${e}-base-select-option--show-checkmark`]:f}],style:[(b==null?void 0:b.style)||"",i.style||""],onClick:eo([M,b==null?void 0:b.onClick]),onMouseenter:eo([I,b==null?void 0:b.onMouseenter]),onMousemove:eo([w,b==null?void 0:b.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},R));return i.render?i.render({node:g,option:i,selected:t}):l?l({node:g,option:i,selected:t}):g}}),Mn=F("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[F("scrollbar",`
 max-height: var(--n-height);
 `),F("virtual-list",`
 max-height: var(--n-height);
 `),F("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),F("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),F("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),F("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[j("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Y("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Y("&:active",`
 color: var(--n-option-text-color-pressed);
 `),j("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),j("pending",[Y("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),j("selected",`
 color: var(--n-option-text-color-active);
 `,[Y("&::before",`
 background-color: var(--n-option-color-active);
 `),j("pending",[Y("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),j("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),j("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Co({enterScale:"0.5"})])])]),In=Pe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},we.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:t,mergedComponentPropsRef:c}=Ke(e),u=ao("InternalSelectMenu",t,i),f=we("InternalSelectMenu","-internal-select-menu",Mn,Zo,e,q(e,"clsPrefix")),d=T(null),l=T(null),k=T(null),M=B(()=>e.treeMate.getFlattenedNodes()),I=B(()=>en(M.value)),w=T(null);function E(){const{treeMate:r}=e;let h=null;const{value:L}=e;L===null?h=r.getFirstAvailableNode():(e.multiple?h=r.getNode((L||[])[(L||[]).length-1]):h=r.getNode(L),(!h||h.disabled)&&(h=r.getFirstAvailableNode())),oe(h||null)}function R(){const{value:r}=w;r&&!e.treeMate.getNode(r.key)&&(w.value=null)}let b;Oe(()=>e.show,r=>{r?b=Oe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?E():R(),wo(le)):R()},{immediate:!0}):b==null||b()},{immediate:!0}),bo(()=>{b==null||b()});const g=B(()=>on(f.value.self[V("optionHeight",e.size)])),O=B(()=>Te(f.value.self[V("padding",e.size)])),y=B(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),m=B(()=>{const r=M.value;return r&&r.length===0}),D=B(()=>{var r,h;return(h=(r=c==null?void 0:c.value)===null||r===void 0?void 0:r.Select)===null||h===void 0?void 0:h.renderEmpty});function K(r){const{onToggle:h}=e;h&&h(r)}function N(r){const{onScroll:h}=e;h&&h(r)}function _(r){var h;(h=k.value)===null||h===void 0||h.sync(),N(r)}function Z(){var r;(r=k.value)===null||r===void 0||r.sync()}function G(){const{value:r}=w;return r||null}function te(r,h){h.disabled||oe(h,!1)}function se(r,h){h.disabled||K(h)}function U(r){var h;Ee(r,"action")||(h=e.onKeyup)===null||h===void 0||h.call(e,r)}function J(r){var h;Ee(r,"action")||(h=e.onKeydown)===null||h===void 0||h.call(e,r)}function A(r){var h;(h=e.onMousedown)===null||h===void 0||h.call(e,r),!e.focusable&&r.preventDefault()}function ve(){const{value:r}=w;r&&oe(r.getNext({loop:!0}),!0)}function pe(){const{value:r}=w;r&&oe(r.getPrev({loop:!0}),!0)}function oe(r,h=!1){w.value=r,h&&le()}function le(){var r,h;const L=w.value;if(!L)return;const ne=I.value(L.key);ne!==null&&(e.virtualScroll?(r=l.value)===null||r===void 0||r.scrollTo({index:ne}):(h=k.value)===null||h===void 0||h.scrollTo({index:ne,elSize:g.value}))}function xe(r){var h,L;!((h=d.value)===null||h===void 0)&&h.contains(r.target)&&((L=e.onFocus)===null||L===void 0||L.call(e,r))}function ce(r){var h,L;!((h=d.value)===null||h===void 0)&&h.contains(r.relatedTarget)||(L=e.onBlur)===null||L===void 0||L.call(e,r)}to(io,{handleOptionMouseEnter:te,handleOptionClick:se,valueSetRef:y,pendingTmNodeRef:w,nodePropsRef:q(e,"nodeProps"),showCheckmarkRef:q(e,"showCheckmark"),multipleRef:q(e,"multiple"),valueRef:q(e,"value"),renderLabelRef:q(e,"renderLabel"),renderOptionRef:q(e,"renderOption"),labelFieldRef:q(e,"labelField"),valueFieldRef:q(e,"valueField")}),to(nn,d),ro(()=>{const{value:r}=k;r&&r.sync()});const fe=B(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:h},self:{height:L,borderRadius:ne,color:be,groupHeaderTextColor:re,actionDividerColor:X,optionTextColorPressed:me,optionTextColor:de,optionTextColorDisabled:ue,optionTextColorActive:Me,optionOpacityDisabled:Ie,optionCheckColor:ye,actionTextColor:Se,optionColorPending:Be,optionColorActive:_e,loadingColor:$e,loadingSize:Re,optionColorActivePending:Fe,[V("optionFontSize",r)]:ie,[V("optionHeight",r)]:n,[V("optionPadding",r)]:v}}=f.value;return{"--n-height":L,"--n-action-divider-color":X,"--n-action-text-color":Se,"--n-bezier":h,"--n-border-radius":ne,"--n-color":be,"--n-option-font-size":ie,"--n-group-header-text-color":re,"--n-option-check-color":ye,"--n-option-color-pending":Be,"--n-option-color-active":_e,"--n-option-color-active-pending":Fe,"--n-option-height":n,"--n-option-opacity-disabled":Ie,"--n-option-text-color":de,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":me,"--n-option-padding":v,"--n-option-padding-left":Te(v,"left"),"--n-option-padding-right":Te(v,"right"),"--n-loading-color":$e,"--n-loading-size":Re}}),{inlineThemeDisabled:Q}=e,ee=Q?Ue("internal-select-menu",B(()=>e.size[0]),fe,e):void 0,ge={selfRef:d,next:ve,prev:pe,getPendingTmNode:G};return xo(d,e.onResize),Object.assign({mergedTheme:f,mergedClsPrefix:i,rtlEnabled:u,virtualListRef:l,scrollbarRef:k,itemSize:g,padding:O,flattenedNodes:M,empty:m,mergedRenderEmpty:D,virtualListContainer(){const{value:r}=l;return r==null?void 0:r.listElRef},virtualListContent(){const{value:r}=l;return r==null?void 0:r.itemsElRef},doScroll:N,handleFocusin:xe,handleFocusout:ce,handleKeyUp:U,handleKeyDown:J,handleMouseDown:A,handleVirtualListResize:Z,handleVirtualListScroll:_,cssVars:Q?void 0:fe,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender},ge)},render(){const{$slots:e,virtualScroll:i,clsPrefix:t,mergedTheme:c,themeClass:u,onRender:f}=this;return f==null||f(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,`${t}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,u,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ve(e.header,d=>d&&s("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},d)),this.loading?s("div",{class:`${t}-base-select-menu__loading`},s(Jo,{clsPrefix:t,strokeWidth:20})):this.empty?s("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Xo(e.empty,()=>{var d;return[((d=this.mergedRenderEmpty)===null||d===void 0?void 0:d.call(this))||s(Yo,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty,size:this.size})]})):s(Qo,Object.assign({ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},this.scrollbarProps),{default:()=>i?s(Pn,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:d})=>d.isGroup?s(fo,{key:d.key,clsPrefix:t,tmNode:d}):d.ignored?null:s(go,{clsPrefix:t,key:d.key,tmNode:d})}):s("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(d=>d.isGroup?s(fo,{key:d.key,clsPrefix:t,tmNode:d}):s(go,{clsPrefix:t,key:d.key,tmNode:d})))}),Ve(e.action,d=>d&&[s("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},d),s(Rn,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function Bn(e){const{textColor2:i,primaryColorHover:t,primaryColorPressed:c,primaryColor:u,infoColor:f,successColor:d,warningColor:l,errorColor:k,baseColor:M,borderColor:I,opacityDisabled:w,tagColor:E,closeIconColor:R,closeIconColorHover:b,closeIconColorPressed:g,borderRadiusSmall:O,fontSizeMini:y,fontSizeTiny:m,fontSizeSmall:D,fontSizeMedium:K,heightMini:N,heightTiny:_,heightSmall:Z,heightMedium:G,closeColorHover:te,closeColorPressed:se,buttonColor2Hover:U,buttonColor2Pressed:J,fontWeightStrong:A}=e;return Object.assign(Object.assign({},ln),{closeBorderRadius:O,heightTiny:N,heightSmall:_,heightMedium:Z,heightLarge:G,borderRadius:O,opacityDisabled:w,fontSizeTiny:y,fontSizeSmall:m,fontSizeMedium:D,fontSizeLarge:K,fontWeightStrong:A,textColorCheckable:i,textColorHoverCheckable:i,textColorPressedCheckable:i,textColorChecked:M,colorCheckable:"#0000",colorHoverCheckable:U,colorPressedCheckable:J,colorChecked:u,colorCheckedHover:t,colorCheckedPressed:c,border:`1px solid ${I}`,textColor:i,color:E,colorBordered:"rgb(250, 250, 252)",closeIconColor:R,closeIconColorHover:b,closeIconColorPressed:g,closeColorHover:te,closeColorPressed:se,borderPrimary:`1px solid ${$(u,{alpha:.3})}`,textColorPrimary:u,colorPrimary:$(u,{alpha:.12}),colorBorderedPrimary:$(u,{alpha:.1}),closeIconColorPrimary:u,closeIconColorHoverPrimary:u,closeIconColorPressedPrimary:u,closeColorHoverPrimary:$(u,{alpha:.12}),closeColorPressedPrimary:$(u,{alpha:.18}),borderInfo:`1px solid ${$(f,{alpha:.3})}`,textColorInfo:f,colorInfo:$(f,{alpha:.12}),colorBorderedInfo:$(f,{alpha:.1}),closeIconColorInfo:f,closeIconColorHoverInfo:f,closeIconColorPressedInfo:f,closeColorHoverInfo:$(f,{alpha:.12}),closeColorPressedInfo:$(f,{alpha:.18}),borderSuccess:`1px solid ${$(d,{alpha:.3})}`,textColorSuccess:d,colorSuccess:$(d,{alpha:.12}),colorBorderedSuccess:$(d,{alpha:.1}),closeIconColorSuccess:d,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:d,closeColorHoverSuccess:$(d,{alpha:.12}),closeColorPressedSuccess:$(d,{alpha:.18}),borderWarning:`1px solid ${$(l,{alpha:.35})}`,textColorWarning:l,colorWarning:$(l,{alpha:.15}),colorBorderedWarning:$(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:$(l,{alpha:.12}),closeColorPressedWarning:$(l,{alpha:.18}),borderError:`1px solid ${$(k,{alpha:.23})}`,textColorError:k,colorError:$(k,{alpha:.1}),colorBorderedError:$(k,{alpha:.08}),closeIconColorError:k,closeIconColorHoverError:k,closeIconColorPressedError:k,closeColorHoverError:$(k,{alpha:.12}),closeColorPressedError:$(k,{alpha:.18})})}const _n={common:tn,self:Bn},$n={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},En=F("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[j("strong",`
 font-weight: var(--n-font-weight-strong);
 `),z("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),z("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),z("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),z("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[z("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),z("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),j("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),j("icon, avatar",[j("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),j("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),j("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[Y("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),Y("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),j("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[Y("&:hover","background-color: var(--n-color-checked-hover);"),Y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Nn=Object.assign(Object.assign(Object.assign({},we.props),$n),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),An=an("n-tag"),oo=Pe({name:"Tag",props:Nn,slots:Object,setup(e){const i=T(null),{mergedBorderedRef:t,mergedClsPrefixRef:c,inlineThemeDisabled:u,mergedRtlRef:f,mergedComponentPropsRef:d}=Ke(e),l=B(()=>{var g,O;return e.size||((O=(g=d==null?void 0:d.value)===null||g===void 0?void 0:g.Tag)===null||O===void 0?void 0:O.size)||"medium"}),k=we("Tag","-tag",En,_n,e,c);to(An,{roundRef:q(e,"round")});function M(){if(!e.disabled&&e.checkable){const{checked:g,onCheckedChange:O,onUpdateChecked:y,"onUpdate:checked":m}=e;y&&y(!g),m&&m(!g),O&&O(!g)}}function I(g){if(e.triggerClickOnClose||g.stopPropagation(),!e.disabled){const{onClose:O}=e;O&&ae(O,g)}}const w={setTextContent(g){const{value:O}=i;O&&(O.textContent=g)}},E=ao("Tag",f,c),R=B(()=>{const{type:g,color:{color:O,textColor:y}={}}=e,m=l.value,{common:{cubicBezierEaseInOut:D},self:{padding:K,closeMargin:N,borderRadius:_,opacityDisabled:Z,textColorCheckable:G,textColorHoverCheckable:te,textColorPressedCheckable:se,textColorChecked:U,colorCheckable:J,colorHoverCheckable:A,colorPressedCheckable:ve,colorChecked:pe,colorCheckedHover:oe,colorCheckedPressed:le,closeBorderRadius:xe,fontWeightStrong:ce,[V("colorBordered",g)]:fe,[V("closeSize",m)]:Q,[V("closeIconSize",m)]:ee,[V("fontSize",m)]:ge,[V("height",m)]:r,[V("color",g)]:h,[V("textColor",g)]:L,[V("border",g)]:ne,[V("closeIconColor",g)]:be,[V("closeIconColorHover",g)]:re,[V("closeIconColorPressed",g)]:X,[V("closeColorHover",g)]:me,[V("closeColorPressed",g)]:de}}=k.value,ue=Te(N);return{"--n-font-weight-strong":ce,"--n-avatar-size-override":`calc(${r} - 8px)`,"--n-bezier":D,"--n-border-radius":_,"--n-border":ne,"--n-close-icon-size":ee,"--n-close-color-pressed":de,"--n-close-color-hover":me,"--n-close-border-radius":xe,"--n-close-icon-color":be,"--n-close-icon-color-hover":re,"--n-close-icon-color-pressed":X,"--n-close-icon-color-disabled":be,"--n-close-margin-top":ue.top,"--n-close-margin-right":ue.right,"--n-close-margin-bottom":ue.bottom,"--n-close-margin-left":ue.left,"--n-close-size":Q,"--n-color":O||(t.value?fe:h),"--n-color-checkable":J,"--n-color-checked":pe,"--n-color-checked-hover":oe,"--n-color-checked-pressed":le,"--n-color-hover-checkable":A,"--n-color-pressed-checkable":ve,"--n-font-size":ge,"--n-height":r,"--n-opacity-disabled":Z,"--n-padding":K,"--n-text-color":y||L,"--n-text-color-checkable":G,"--n-text-color-checked":U,"--n-text-color-hover-checkable":te,"--n-text-color-pressed-checkable":se}}),b=u?Ue("tag",B(()=>{let g="";const{type:O,color:{color:y,textColor:m}={}}=e;return g+=O[0],g+=l.value[0],y&&(g+=`a${so(y)}`),m&&(g+=`b${so(m)}`),t.value&&(g+="c"),g}),R,e):void 0;return Object.assign(Object.assign({},w),{rtlEnabled:E,mergedClsPrefix:c,contentRef:i,mergedBordered:t,handleClick:M,handleCloseClick:I,cssVars:u?void 0:R,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,i;const{mergedClsPrefix:t,rtlEnabled:c,closable:u,color:{borderColor:f}={},round:d,onRender:l,$slots:k}=this;l==null||l();const M=Ve(k.avatar,w=>w&&s("div",{class:`${t}-tag__avatar`},w)),I=Ve(k.icon,w=>w&&s("div",{class:`${t}-tag__icon`},w));return s("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:c,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:d,[`${t}-tag--avatar`]:M,[`${t}-tag--icon`]:I,[`${t}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},I||M,s("span",{class:`${t}-tag__content`,ref:"contentRef"},(i=(e=this.$slots).default)===null||i===void 0?void 0:i.call(e)),!this.checkable&&u?s(rn,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:d,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?s("div",{class:`${t}-tag__border`,style:{borderColor:f}}):null)}}),Dn=Y([F("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[F("base-loading",`
 color: var(--n-loading-color);
 `),F("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),F("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),F("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),F("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),F("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),F("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[F("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[Y("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),j("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),j("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),F("base-selection-label","background-color: var(--n-color-active);"),F("base-selection-tags","background-color: var(--n-color-active);")])]),j("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),F("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[F("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),F("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),F("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),F("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>j(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),ke("disabled",[Y("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),j("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),F("base-selection-label",`background-color: var(--n-color-active-${e});`),F("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),j("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),F("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),F("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Y("&:last-child","padding-right: 0;"),F("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ln=Pe({name:"InternalSelection",props:Object.assign(Object.assign({},we.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:t}=Ke(e),c=ao("InternalSelection",t,i),u=T(null),f=T(null),d=T(null),l=T(null),k=T(null),M=T(null),I=T(null),w=T(null),E=T(null),R=T(null),b=T(!1),g=T(!1),O=T(!1),y=we("InternalSelection","-internal-selection",Dn,hn,e,q(e,"clsPrefix")),m=B(()=>e.clearable&&!e.disabled&&(O.value||e.active)),D=B(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),K=B(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),N=B(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function _(){var n;const{value:v}=u;if(v){const{value:H}=f;H&&(H.style.width=`${v.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=E.value)===null||n===void 0||n.sync({showAllItemsBeforeCalculate:!1})))}}function Z(){const{value:n}=R;n&&(n.style.display="none")}function G(){const{value:n}=R;n&&(n.style.display="inline-block")}Oe(q(e,"active"),n=>{n||Z()}),Oe(q(e,"pattern"),()=>{e.multiple&&wo(_)});function te(n){const{onFocus:v}=e;v&&v(n)}function se(n){const{onBlur:v}=e;v&&v(n)}function U(n){const{onDeleteOption:v}=e;v&&v(n)}function J(n){const{onClear:v}=e;v&&v(n)}function A(n){const{onPatternInput:v}=e;v&&v(n)}function ve(n){var v;(!n.relatedTarget||!(!((v=d.value)===null||v===void 0)&&v.contains(n.relatedTarget)))&&te(n)}function pe(n){var v;!((v=d.value)===null||v===void 0)&&v.contains(n.relatedTarget)||se(n)}function oe(n){J(n)}function le(){O.value=!0}function xe(){O.value=!1}function ce(n){!e.active||!e.filterable||n.target!==f.value&&n.preventDefault()}function fe(n){U(n)}const Q=T(!1);function ee(n){if(n.key==="Backspace"&&!Q.value&&!e.pattern.length){const{selectedOptions:v}=e;v!=null&&v.length&&fe(v[v.length-1])}}let ge=null;function r(n){const{value:v}=u;if(v){const H=n.target.value;v.textContent=H,_()}e.ignoreComposition&&Q.value?ge=n:A(n)}function h(){Q.value=!0}function L(){Q.value=!1,e.ignoreComposition&&A(ge),ge=null}function ne(n){var v;g.value=!0,(v=e.onPatternFocus)===null||v===void 0||v.call(e,n)}function be(n){var v;g.value=!1,(v=e.onPatternBlur)===null||v===void 0||v.call(e,n)}function re(){var n,v;if(e.filterable)g.value=!1,(n=M.value)===null||n===void 0||n.blur(),(v=f.value)===null||v===void 0||v.blur();else if(e.multiple){const{value:H}=l;H==null||H.blur()}else{const{value:H}=k;H==null||H.blur()}}function X(){var n,v,H;e.filterable?(g.value=!1,(n=M.value)===null||n===void 0||n.focus()):e.multiple?(v=l.value)===null||v===void 0||v.focus():(H=k.value)===null||H===void 0||H.focus()}function me(){const{value:n}=f;n&&(G(),n.focus())}function de(){const{value:n}=f;n&&n.blur()}function ue(n){const{value:v}=I;v&&v.setTextContent(`+${n}`)}function Me(){const{value:n}=w;return n}function Ie(){return f.value}let ye=null;function Se(){ye!==null&&window.clearTimeout(ye)}function Be(){e.active||(Se(),ye=window.setTimeout(()=>{N.value&&(b.value=!0)},100))}function _e(){Se()}function $e(n){n||(Se(),b.value=!1)}Oe(N,n=>{n||(b.value=!1)}),ro(()=>{un(()=>{const n=M.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=g.value?-1:0)})}),xo(d,e.onResize);const{inlineThemeDisabled:Re}=e,Fe=B(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:v},self:{fontWeight:H,borderRadius:qe,color:Ge,placeholderColor:Je,textColor:Ne,paddingSingle:Ae,paddingMultiple:De,caretColor:Qe,colorDisabled:Xe,textColorDisabled:Le,placeholderColorDisabled:Ce,colorActive:o,boxShadowFocus:a,boxShadowActive:p,boxShadowHover:S,border:C,borderFocus:x,borderHover:P,borderActive:W,arrowColor:he,arrowColorDisabled:So,loadingColor:ko,colorActiveWarning:Oo,boxShadowFocusWarning:Po,boxShadowActiveWarning:Ro,boxShadowHoverWarning:Fo,borderWarning:zo,borderFocusWarning:To,borderHoverWarning:Mo,borderActiveWarning:Io,colorActiveError:Bo,boxShadowFocusError:_o,boxShadowActiveError:$o,boxShadowHoverError:Eo,borderError:No,borderFocusError:Ao,borderHoverError:Do,borderActiveError:Lo,clearColor:jo,clearColorHover:Ho,clearColorPressed:Vo,clearSize:Wo,arrowSize:Ko,[V("height",n)]:Uo,[V("fontSize",n)]:qo}}=y.value,je=Te(Ae),He=Te(De);return{"--n-bezier":v,"--n-border":C,"--n-border-active":W,"--n-border-focus":x,"--n-border-hover":P,"--n-border-radius":qe,"--n-box-shadow-active":p,"--n-box-shadow-focus":a,"--n-box-shadow-hover":S,"--n-caret-color":Qe,"--n-color":Ge,"--n-color-active":o,"--n-color-disabled":Xe,"--n-font-size":qo,"--n-height":Uo,"--n-padding-single-top":je.top,"--n-padding-multiple-top":He.top,"--n-padding-single-right":je.right,"--n-padding-multiple-right":He.right,"--n-padding-single-left":je.left,"--n-padding-multiple-left":He.left,"--n-padding-single-bottom":je.bottom,"--n-padding-multiple-bottom":He.bottom,"--n-placeholder-color":Je,"--n-placeholder-color-disabled":Ce,"--n-text-color":Ne,"--n-text-color-disabled":Le,"--n-arrow-color":he,"--n-arrow-color-disabled":So,"--n-loading-color":ko,"--n-color-active-warning":Oo,"--n-box-shadow-focus-warning":Po,"--n-box-shadow-active-warning":Ro,"--n-box-shadow-hover-warning":Fo,"--n-border-warning":zo,"--n-border-focus-warning":To,"--n-border-hover-warning":Mo,"--n-border-active-warning":Io,"--n-color-active-error":Bo,"--n-box-shadow-focus-error":_o,"--n-box-shadow-active-error":$o,"--n-box-shadow-hover-error":Eo,"--n-border-error":No,"--n-border-focus-error":Ao,"--n-border-hover-error":Do,"--n-border-active-error":Lo,"--n-clear-size":Wo,"--n-clear-color":jo,"--n-clear-color-hover":Ho,"--n-clear-color-pressed":Vo,"--n-arrow-size":Ko,"--n-font-weight":H}}),ie=Re?Ue("internal-selection",B(()=>e.size[0]),Fe,e):void 0;return{mergedTheme:y,mergedClearable:m,mergedClsPrefix:i,rtlEnabled:c,patternInputFocused:g,filterablePlaceholder:D,label:K,selected:N,showTagsPanel:b,isComposing:Q,counterRef:I,counterWrapperRef:w,patternInputMirrorRef:u,patternInputRef:f,selfRef:d,multipleElRef:l,singleElRef:k,patternInputWrapperRef:M,overflowRef:E,inputTagElRef:R,handleMouseDown:ce,handleFocusin:ve,handleClear:oe,handleMouseEnter:le,handleMouseLeave:xe,handleDeleteOption:fe,handlePatternKeyDown:ee,handlePatternInputInput:r,handlePatternInputBlur:be,handlePatternInputFocus:ne,handleMouseEnterCounter:Be,handleMouseLeaveCounter:_e,handleFocusout:pe,handleCompositionEnd:L,handleCompositionStart:h,onPopoverUpdateShow:$e,focus:X,focusInput:me,blur:re,blurInput:de,updateCounter:ue,getCounter:Me,getTail:Ie,renderLabel:e.renderLabel,cssVars:Re?void 0:Fe,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender}},render(){const{status:e,multiple:i,size:t,disabled:c,filterable:u,maxTagCount:f,bordered:d,clsPrefix:l,ellipsisTagPopoverProps:k,onRender:M,renderTag:I,renderLabel:w}=this;M==null||M();const E=f==="responsive",R=typeof f=="number",b=E||R,g=s(sn,null,{default:()=>s(Fn,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var y,m;return(m=(y=this.$slots).arrow)===null||m===void 0?void 0:m.call(y)}})});let O;if(i){const{labelField:y}=this,m=A=>s("div",{class:`${l}-base-selection-tag-wrapper`,key:A.value},I?I({option:A,handleClose:()=>{this.handleDeleteOption(A)}}):s(oo,{size:t,closable:!A.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(A)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>w?w(A,!0):ze(A[y],A,!0)})),D=()=>(R?this.selectedOptions.slice(0,f):this.selectedOptions).map(m),K=u?s("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,N=E?()=>s("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(oo,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let _;if(R){const A=this.selectedOptions.length-f;A>0&&(_=s("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},s(oo,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${A}`})))}const Z=E?u?s(co,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:D,counter:N,tail:()=>K}):s(co,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:D,counter:N}):R&&_?D().concat(_):D(),G=b?()=>s("div",{class:`${l}-base-selection-popover`},E?D():this.selectedOptions.map(m)):void 0,te=b?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},k):null,U=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},s("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,J=u?s("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},Z,E?null:K,g):s("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:c?void 0:0},Z,g);O=s(cn,null,b?s(dn,Object.assign({},te,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>J,default:G}):J,U)}else if(u){const y=this.pattern||this.isComposing,m=this.active?!y:!this.selected,D=this.active?!1:this.selected;O=s("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:vo(this.label)},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),D?s("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},s("div",{class:`${l}-base-selection-overlay__wrapper`},I?I({option:this.selectedOption,handleClose:()=>{}}):w?w(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,m?s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else O=s("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${l}-base-selection-input`,title:vo(this.label),key:"input"},s("div",{class:`${l}-base-selection-input__content`},I?I({option:this.selectedOption,handleClose:()=>{}}):w?w(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):s("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),g);return s("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,d?s("div",{class:`${l}-base-selection__border`}):null,d?s("div",{class:`${l}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function yo(e){return e.type==="ignored"}function no(e,i){try{return!!(1+i.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function jn(e,i){return{getIsGroup:We,getIgnored:yo,getKey(c){return We(c)?c.name||c.key||"key-required":c[e]},getChildren(c){return c[i]}}}function Hn(e,i,t,c){if(!i)return e;function u(f){if(!Array.isArray(f))return[];const d=[];for(const l of f)if(We(l)){const k=u(l[c]);k.length&&d.push(Object.assign({},l,{[c]:k}))}else{if(yo(l))continue;i(t,l)&&d.push(l)}return d}return u(e)}function Vn(e,i,t){const c=new Map;return e.forEach(u=>{We(u)?u[t].forEach(f=>{c.set(f[i],f)}):c.set(u[i],u)}),c}const Wn=Y([F("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),F("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Co({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Kn=Object.assign(Object.assign({},we.props),{to:lo.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),Gn=Pe({name:"Select",props:Kn,slots:Object,setup(e){const{mergedClsPrefixRef:i,mergedBorderedRef:t,namespaceRef:c,inlineThemeDisabled:u,mergedComponentPropsRef:f}=Ke(e),d=we("Select","-select",Wn,xn,e,i),l=T(e.defaultValue),k=q(e,"value"),M=ho(k,l),I=T(!1),w=T(""),E=kn(e,["items","options"]),R=T([]),b=T([]),g=B(()=>b.value.concat(R.value).concat(E.value)),O=B(()=>{const{filter:o}=e;if(o)return o;const{labelField:a,valueField:p}=e;return(S,C)=>{if(!C)return!1;const x=C[a];if(typeof x=="string")return no(S,x);const P=C[p];return typeof P=="string"?no(S,P):typeof P=="number"?no(S,String(P)):!1}}),y=B(()=>{if(e.remote)return E.value;{const{value:o}=g,{value:a}=w;return!a.length||!e.filterable?o:Hn(o,O.value,a,e.childrenField)}}),m=B(()=>{const{valueField:o,childrenField:a}=e,p=jn(o,a);return On(y.value,p)}),D=B(()=>Vn(g.value,e.valueField,e.childrenField)),K=T(!1),N=ho(q(e,"show"),K),_=T(null),Z=T(null),G=T(null),{localeRef:te}=mn("Select"),se=B(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:te.value.placeholder}),U=[],J=T(new Map),A=B(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:a,valueField:p}=e;return S=>({[a]:String(S),[p]:S})}return o===!1?!1:a=>Object.assign(o(a),{value:a})});function ve(o){const a=e.remote,{value:p}=J,{value:S}=D,{value:C}=A,x=[];return o.forEach(P=>{if(S.has(P))x.push(S.get(P));else if(a&&p.has(P))x.push(p.get(P));else if(C){const W=C(P);W&&x.push(W)}}),x}const pe=B(()=>{if(e.multiple){const{value:o}=M;return Array.isArray(o)?ve(o):[]}return null}),oe=B(()=>{const{value:o}=M;return!e.multiple&&!Array.isArray(o)?o===null?null:ve([o])[0]||null:null}),le=Cn(e,{mergedSize:o=>{var a,p;const{size:S}=e;if(S)return S;const{mergedSize:C}=o||{};if(C!=null&&C.value)return C.value;const x=(p=(a=f==null?void 0:f.value)===null||a===void 0?void 0:a.Select)===null||p===void 0?void 0:p.size;return x||"medium"}}),{mergedSizeRef:xe,mergedDisabledRef:ce,mergedStatusRef:fe}=le;function Q(o,a){const{onChange:p,"onUpdate:value":S,onUpdateValue:C}=e,{nTriggerFormChange:x,nTriggerFormInput:P}=le;p&&ae(p,o,a),C&&ae(C,o,a),S&&ae(S,o,a),l.value=o,x(),P()}function ee(o){const{onBlur:a}=e,{nTriggerFormBlur:p}=le;a&&ae(a,o),p()}function ge(){const{onClear:o}=e;o&&ae(o)}function r(o){const{onFocus:a,showOnFocus:p}=e,{nTriggerFormFocus:S}=le;a&&ae(a,o),S(),p&&re()}function h(o){const{onSearch:a}=e;a&&ae(a,o)}function L(o){const{onScroll:a}=e;a&&ae(a,o)}function ne(){var o;const{remote:a,multiple:p}=e;if(a){const{value:S}=J;if(p){const{valueField:C}=e;(o=pe.value)===null||o===void 0||o.forEach(x=>{S.set(x[C],x)})}else{const C=oe.value;C&&S.set(C[e.valueField],C)}}}function be(o){const{onUpdateShow:a,"onUpdate:show":p}=e;a&&ae(a,o),p&&ae(p,o),K.value=o}function re(){ce.value||(be(!0),K.value=!0,e.filterable&&De())}function X(){be(!1)}function me(){w.value="",b.value=U}const de=T(!1);function ue(){e.filterable&&(de.value=!0)}function Me(){e.filterable&&(de.value=!1,N.value||me())}function Ie(){ce.value||(N.value?e.filterable?De():X():re())}function ye(o){var a,p;!((p=(a=G.value)===null||a===void 0?void 0:a.selfRef)===null||p===void 0)&&p.contains(o.relatedTarget)||(I.value=!1,ee(o),X())}function Se(o){r(o),I.value=!0}function Be(){I.value=!0}function _e(o){var a;!((a=_.value)===null||a===void 0)&&a.$el.contains(o.relatedTarget)||(I.value=!1,ee(o),X())}function $e(){var o;(o=_.value)===null||o===void 0||o.focus(),X()}function Re(o){var a;N.value&&(!((a=_.value)===null||a===void 0)&&a.$el.contains(yn(o))||X())}function Fe(o){if(!Array.isArray(o))return[];if(A.value)return Array.from(o);{const{remote:a}=e,{value:p}=D;if(a){const{value:S}=J;return o.filter(C=>p.has(C)||S.has(C))}else return o.filter(S=>p.has(S))}}function ie(o){n(o.rawNode)}function n(o){if(ce.value)return;const{tag:a,remote:p,clearFilterAfterSelect:S,valueField:C}=e;if(a&&!p){const{value:x}=b,P=x[0]||null;if(P){const W=R.value;W.length?W.push(P):R.value=[P],b.value=U}}if(p&&J.value.set(o[C],o),e.multiple){const x=Fe(M.value),P=x.findIndex(W=>W===o[C]);if(~P){if(x.splice(P,1),a&&!p){const W=v(o[C]);~W&&(R.value.splice(W,1),S&&(w.value=""))}}else x.push(o[C]),S&&(w.value="");Q(x,ve(x))}else{if(a&&!p){const x=v(o[C]);~x?R.value=[R.value[x]]:R.value=U}Ae(),X(),Q(o[C],o)}}function v(o){return R.value.findIndex(p=>p[e.valueField]===o)}function H(o){N.value||re();const{value:a}=o.target;w.value=a;const{tag:p,remote:S}=e;if(h(a),p&&!S){if(!a){b.value=U;return}const{onCreate:C}=e,x=C?C(a):{[e.labelField]:a,[e.valueField]:a},{valueField:P,labelField:W}=e;E.value.some(he=>he[P]===x[P]||he[W]===x[W])||R.value.some(he=>he[P]===x[P]||he[W]===x[W])?b.value=U:b.value=[x]}}function qe(o){o.stopPropagation();const{multiple:a,tag:p,remote:S,clearCreatedOptionsOnClear:C}=e;!a&&e.filterable&&X(),p&&!S&&C&&(R.value=U),ge(),a?Q([],[]):Q(null,null)}function Ge(o){!Ee(o,"action")&&!Ee(o,"empty")&&!Ee(o,"header")&&o.preventDefault()}function Je(o){L(o)}function Ne(o){var a,p,S,C,x;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((a=_.value)===null||a===void 0)&&a.isComposing)){if(N.value){const P=(p=G.value)===null||p===void 0?void 0:p.getPendingTmNode();P?ie(P):e.filterable||(X(),Ae())}else if(re(),e.tag&&de.value){const P=b.value[0];if(P){const W=P[e.valueField],{value:he}=M;e.multiple&&Array.isArray(he)&&he.includes(W)||n(P)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;N.value&&((S=G.value)===null||S===void 0||S.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;N.value?(C=G.value)===null||C===void 0||C.next():re();break;case"Escape":N.value&&(Sn(o),X()),(x=_.value)===null||x===void 0||x.focus();break}}function Ae(){var o;(o=_.value)===null||o===void 0||o.focus()}function De(){var o;(o=_.value)===null||o===void 0||o.focusInput()}function Qe(){var o;N.value&&((o=Z.value)===null||o===void 0||o.syncPosition())}ne(),Oe(q(e,"options"),ne);const Xe={focus:()=>{var o;(o=_.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=_.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=_.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=_.value)===null||o===void 0||o.blurInput()}},Le=B(()=>{const{self:{menuBoxShadow:o}}=d.value;return{"--n-menu-box-shadow":o}}),Ce=u?Ue("select",void 0,Le,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:fe,mergedClsPrefix:i,mergedBordered:t,namespace:c,treeMate:m,isMounted:wn(),triggerRef:_,menuRef:G,pattern:w,uncontrolledShow:K,mergedShow:N,adjustedTo:lo(e),uncontrolledValue:l,mergedValue:M,followerRef:Z,localizedPlaceholder:se,selectedOption:oe,selectedOptions:pe,mergedSize:xe,mergedDisabled:ce,focused:I,activeWithoutMenuOpen:de,inlineThemeDisabled:u,onTriggerInputFocus:ue,onTriggerInputBlur:Me,handleTriggerOrMenuResize:Qe,handleMenuFocus:Be,handleMenuBlur:_e,handleMenuTabOut:$e,handleTriggerClick:Ie,handleToggle:ie,handleDeleteOption:n,handlePatternInput:H,handleClear:qe,handleTriggerBlur:ye,handleTriggerFocus:Se,handleKeydown:Ne,handleMenuAfterLeave:me,handleMenuClickOutside:Re,handleMenuScroll:Je,handleMenuKeydown:Ne,handleMenuMousedown:Ge,mergedTheme:d,cssVars:u?void 0:Le,themeClass:Ce==null?void 0:Ce.themeClass,onRender:Ce==null?void 0:Ce.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(vn,null,{default:()=>[s(fn,null,{default:()=>s(Ln,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,i;return[(i=(e=this.$slots).arrow)===null||i===void 0?void 0:i.call(e)]}})}),s(gn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===lo.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(mo,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,i,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),bn(s(In,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(i=this.menuProps)===null||i===void 0?void 0:i.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var c,u;return[(u=(c=this.$slots).empty)===null||u===void 0?void 0:u.call(c)]},header:()=>{var c,u;return[(u=(c=this.$slots).header)===null||u===void 0?void 0:u.call(c)]},action:()=>{var c,u;return[(u=(c=this.$slots).action)===null||u===void 0?void 0:u.call(c)]}}),this.displayDirective==="show"?[[pn,this.mergedShow],[uo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[uo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Gn as N,oo as a,In as b,jn as c,eo as m,An as t};
