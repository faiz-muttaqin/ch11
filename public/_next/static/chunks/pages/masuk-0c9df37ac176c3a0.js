(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{1941:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/masuk",function(){return r(6453)}])},6453:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var a=r(7568),s=r(655),l=r(5893),n=r(7294),o=r(4184),i=r.n(o),c=r(5697),u=r.n(c);let f={type:u().string,tooltip:u().bool,as:u().elementType},d=n.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:a=!1,...s},n)=>(0,l.jsx)(e,{...s,ref:n,className:i()(t,`${r}-${a?"tooltip":"feedback"}`)}));d.displayName="Feedback",d.propTypes=f;let p=n.createContext({});var m=r(6792);let h=n.forwardRef(({id:e,bsPrefix:t,className:r,type:a="checkbox",isValid:s=!1,isInvalid:o=!1,as:c="input",...u},f)=>{let{controlId:d}=(0,n.useContext)(p);return t=(0,m.vE)(t,"form-check-input"),(0,l.jsx)(c,{...u,ref:f,type:a,id:e||d,className:i()(r,t,s&&"is-valid",o&&"is-invalid")})});h.displayName="FormCheckInput";let v=n.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...a},s)=>{let{controlId:o}=(0,n.useContext)(p);return e=(0,m.vE)(e,"form-check-label"),(0,l.jsx)("label",{...a,ref:s,htmlFor:r||o,className:i()(t,e)})});v.displayName="FormCheckLabel";let y=n.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:a=!1,reverse:s=!1,disabled:o=!1,isValid:c=!1,isInvalid:u=!1,feedbackTooltip:f=!1,feedback:y,feedbackType:x,className:b,style:N,title:j="",type:g="checkbox",label:w,children:C,as:$="input",...E},k)=>{var _,R;t=(0,m.vE)(t,"form-check"),r=(0,m.vE)(r,"form-switch");let{controlId:F}=(0,n.useContext)(p),T=(0,n.useMemo)(()=>({controlId:e||F}),[F,e]),O=!C&&null!=w&&!1!==w||n.Children.toArray(C).some(e=>n.isValidElement(e)&&e.type===v),P=(0,l.jsx)(h,{...E,type:"switch"===g?"checkbox":g,ref:k,isValid:c,isInvalid:u,disabled:o,as:$});return(0,l.jsx)(p.Provider,{value:T,children:(0,l.jsx)("div",{style:N,className:i()(b,O&&t,a&&`${t}-inline`,s&&`${t}-reverse`,"switch"===g&&r),children:C||(0,l.jsxs)(l.Fragment,{children:[P,O&&(0,l.jsx)(v,{title:j,children:w}),y&&(0,l.jsx)(d,{type:x,tooltip:f,children:y})]})})})});y.displayName="FormCheck";var x=Object.assign(y,{Input:h,Label:v});r(2473);let b=n.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:a,id:s,className:o,isValid:c=!1,isInvalid:u=!1,plaintext:f,readOnly:d,as:h="input",...v},y)=>{let{controlId:x}=(0,n.useContext)(p);e=(0,m.vE)(e,"form-control");let b;return b=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,l.jsx)(h,{...v,type:t,size:a,ref:y,readOnly:d,id:s||x,className:i()(o,b,c&&"is-valid",u&&"is-invalid","color"===t&&`${e}-color`)})});b.displayName="FormControl";var N=Object.assign(b,{Feedback:d}),j=(0,r(6611).Z)("form-floating");let g=n.forwardRef(({controlId:e,as:t="div",...r},a)=>{let s=(0,n.useMemo)(()=>({controlId:e}),[e]);return(0,l.jsx)(p.Provider,{value:s,children:(0,l.jsx)(t,{...r,ref:a})})});g.displayName="FormGroup";let w=n.forwardRef((e,t)=>{let[{className:r,...a},{as:s="div",bsPrefix:n,spans:o}]=function({as:e,bsPrefix:t,className:r,...a}){t=(0,m.vE)(t,"col");let s=(0,m.pi)(),l=(0,m.zG)(),n=[],o=[];return s.forEach(e=>{let r=a[e];delete a[e];let s,i,c;"object"==typeof r&&null!=r?{span:s,offset:i,order:c}=r:s=r;let u=e!==l?`-${e}`:"";s&&n.push(!0===s?`${t}${u}`:`${t}${u}-${s}`),null!=c&&o.push(`order${u}-${c}`),null!=i&&o.push(`offset${u}-${i}`)}),[{...a,className:i()(r,...n,...o)},{as:e,bsPrefix:t,spans:n}]}(e);return(0,l.jsx)(s,{...a,ref:t,className:i()(r,!o.length&&n)})});w.displayName="Col";let C=n.forwardRef(({as:e="label",bsPrefix:t,column:r,visuallyHidden:a,className:s,htmlFor:o,...c},u)=>{let{controlId:f}=(0,n.useContext)(p);t=(0,m.vE)(t,"form-label");let d="col-form-label";"string"==typeof r&&(d=`${d} ${d}-${r}`);let h=i()(s,t,a&&"visually-hidden",r&&d);return(o=o||f,r)?(0,l.jsx)(w,{ref:u,as:"label",className:h,htmlFor:o,...c}):(0,l.jsx)(e,{ref:u,className:h,htmlFor:o,...c})});C.displayName="FormLabel",C.defaultProps={column:!1,visuallyHidden:!1};let $=n.forwardRef(({bsPrefix:e,className:t,id:r,...a},s)=>{let{controlId:o}=(0,n.useContext)(p);return e=(0,m.vE)(e,"form-range"),(0,l.jsx)("input",{...a,type:"range",ref:s,className:i()(t,e),id:r||o})});$.displayName="FormRange";let E=n.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:a,isValid:s=!1,isInvalid:o=!1,id:c,...u},f)=>{let{controlId:d}=(0,n.useContext)(p);return e=(0,m.vE)(e,"form-select"),(0,l.jsx)("select",{...u,size:r,ref:f,className:i()(a,e,t&&`${e}-${t}`,s&&"is-valid",o&&"is-invalid"),id:c||d})});E.displayName="FormSelect";let k=n.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:a,...s},n)=>(e=(0,m.vE)(e,"form-text"),(0,l.jsx)(r,{...s,ref:n,className:i()(t,e,a&&"text-muted")})));k.displayName="FormText";let _=n.forwardRef((e,t)=>(0,l.jsx)(x,{...e,ref:t,type:"switch"}));_.displayName="Switch";var R=Object.assign(_,{Input:x.Input,Label:x.Label});let F=n.forwardRef(({bsPrefix:e,className:t,children:r,controlId:a,label:s,...n},o)=>(e=(0,m.vE)(e,"form-floating"),(0,l.jsxs)(g,{ref:o,className:i()(t,e),controlId:a,...n,children:[r,(0,l.jsx)("label",{htmlFor:a,children:s})]})));F.displayName="FloatingLabel";let T={_ref:u().any,validated:u().bool,as:u().elementType},O=n.forwardRef(({className:e,validated:t,as:r="form",...a},s)=>(0,l.jsx)(r,{...a,ref:s,className:i()(e,t&&"was-validated")}));O.displayName="Form",O.propTypes=T;var P=Object.assign(O,{Group:g,Control:N,Floating:j,Check:x,Switch:R,Label:C,Text:k,Range:$,Select:E,FloatingLabel:F}),I=r(5005),S=r(196);function L(){var e,t=(0,n.useState)(""),r=t[0],o=t[1],i=(0,n.useState)(""),c=i[0],u=i[1],f=(e=(0,a.Z)(function(e){var t,a;return(0,s.__generator)(this,function(e){switch(e.label){case 0:console.log("aaa"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,S.ZP.post("http://localhost:7070/api/login",{username:r,password:c},{headers:{"Content-Type":"application/json"},withCredentials:!0})];case 2:return t=e.sent(),console.log("Ini data",t.data),[3,4];case 3:return a=e.sent(),console.log(a),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)});return(0,l.jsx)("div",{children:(0,l.jsxs)(P,{onSubmit:f,children:[(0,l.jsx)("input",{type:"text",value:r,onChange:function(e){return o(e.target.value)}}),(0,l.jsx)("input",{type:"password",value:c,onChange:function(e){return u(e.target.value)}}),(0,l.jsx)(I.Z,{onClick:f,children:"Masuk"})]})})}},2703:function(e,t,r){"use strict";var a=r(414);function s(){}function l(){}l.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,l,n){if(n!==a){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:s};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5005:function(e,t,r){"use strict";var a=r(4184),s=r.n(a),l=r(7294),n=r(861),o=r(6792),i=r(5893);let c=l.forwardRef(({as:e,bsPrefix:t,variant:r,size:a,active:l,className:c,...u},f)=>{let d=(0,o.vE)(t,"btn"),[p,{tagName:m}]=(0,n.FT)({tagName:e,...u});return(0,i.jsx)(m,{...p,...u,ref:f,className:s()(c,d,l&&"active",r&&`${d}-${r}`,a&&`${d}-${a}`,u.href&&u.disabled&&"disabled")})});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(4184),s=r.n(a),l=/-(.)/g,n=r(7294),o=r(6792),i=r(5893);let c=e=>{var t;return e[0].toUpperCase()+e.replace(l,function(e,t){return t.toUpperCase()}).slice(1)};function u(e,{displayName:t=c(e),Component:r,defaultProps:a}={}){let l=n.forwardRef(({className:t,bsPrefix:a,as:l=r||"div",...n},c)=>{let u=(0,o.vE)(a,e);return(0,i.jsx)(l,{ref:c,className:s()(t,u),...n})});return l.defaultProps=a,l.displayName=t,l}},2473:function(e){"use strict";var t=function(){};e.exports=t}},function(e){e.O(0,[183,991,774,888,179],function(){return e(e.s=1941)}),_N_E=e.O()}]);