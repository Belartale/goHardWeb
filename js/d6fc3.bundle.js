"use strict";(globalThis.webpackChunkboilerplate_frontend=globalThis.webpackChunkboilerplate_frontend||[]).push([[2],{36:(e,n,t)=>{t.d(n,{ErrorBoundary:()=>a});var r,o=t(0),i=(r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),a=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={error:null},n}return i(n,e),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){var e=this.state.error,n=this.props.children;return e?o.createElement("div",null,"Error component"):n},n}(o.Component)},42:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var r,o,i,a,l=t(0),c=t(57),p=t(53),u=t(25),s=t(36),f=t(54),d=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},m=f.default.section.withConfig({displayName:"Container",componentId:"-bn1dyv"})(r||(r=d(["\n    position: relative;\n    width: 100%;\n"],["\n    position: relative;\n    width: 100%;\n"]))),y=f.default.nav.withConfig({displayName:"Nav",componentId:"-1ito0kk"})(o||(o=d(["\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n"],["\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n"]))),h=f.default.div.withConfig({displayName:"Breadcrumbs",componentId:"-1pk5sl"})(i||(i=d(["\n    display: flex;\n    gap: 12px;\n    align-items: center;\n"],["\n    display: flex;\n    gap: 12px;\n    align-items: center;\n"]))),v=(0,f.default)(c.Link).withConfig({displayName:"Crumb",componentId:"-vnep8v"})(a||(a=d(["\n    \n"],["\n    \n"]))),E=t(56),g=function(){var e=(0,p.useLocation)().pathname;return l.createElement(m,null,l.createElement(y,null,l.createElement(c.Link,{to:"register"},"Registation"),l.createElement(c.Link,{to:"/items"},"Items")),l.createElement(h,null,l.createElement(v,{to:"/"},l.createElement(u.FontAwesomeIcon,{icon:E.faHome,size:"2x"})),e.split("/").map((function(n,t){var r=e.split("/").slice(0,t+1).join("/");return n&&l.createElement(v,{key:r,to:r},n)}))),l.createElement(p.Outlet,null))};const w=function(){return l.createElement(s.ErrorBoundary,null,l.createElement(g,null))}}}]);