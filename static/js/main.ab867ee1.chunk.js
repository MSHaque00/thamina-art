(this["webpackJsonpthamina-app"]=this["webpackJsonpthamina-app"]||[]).push([[0],{50:function(n,t,e){},51:function(n,t,e){},80:function(n,t,e){"use strict";e.r(t);var i=e(1),r=e(0),a=e(38),c=e.n(a),o=(e(50),e(51),e(2)),d=e(3);function s(){var n=Object(o.a)(["\n  flex: 1;\n  width: 100%;\n  max-width: ",";\n  /*min-height Need more testing*/\n  min-height: 70vh;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  \n"]);return s=function(){return n},n}function l(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return l=function(){return n},n}var u=d.a.div(l());function x(n){return Object(i.jsx)(u,{children:n.children})}var f=d.a.div(s(),(function(n){var t=n.maxWidth;return t||"auto"})),j=e.p+"static/media/logo_transparent_cropped.773aeb1f.png";function h(){var n=Object(o.a)(["\n    margin: 0;\n    font-size: ",";\n    color: #ffff;\n    font-weight: 600;\n    \n"]);return h=function(){return n},n}function b(){var n=Object(o.a)(["\n    width: ",";  \n    height: ",";  \n    \n    img{\n        width: 100%;\n        height: 100%;\n    }\n    @media screen and (max-width: 380px) {\n        width:15em;\n        height:10em;\n    \n  }\n\n"]);return b=function(){return n},n}function p(){var n=Object(o.a)(["\n    display: flex;\n    align-items: flex-start ;\n    \n"]);return p=function(){return n},n}var m=d.a.div(p()),g=d.a.div(b(),(function(n){var t=n.size;return t?t+"px":"23em"}),(function(n){var t=n.size;return t?t+"px":"14em"}));d.a.h2(h(),(function(n){var t=n.size;return t?t+"px":"10px"}));function O(n){var t=n.logoSize;n.textSize;return Object(i.jsx)(m,{children:Object(i.jsx)(g,{size:t,children:Object(i.jsx)("img",{src:j,alt:"Thamina Art Logo"})})})}var v=e(5);function w(){var n=Object(o.a)(["\n  display: flex;\n  height: ",";\n"]);return w=function(){return n},n}function y(){var n=Object(o.a)(["\n  display: flex;\n  width: ",";\n"]);return y=function(){return n},n}var z=d.a.span(y(),(function(n){var t=n.margin;return"string"===typeof t?t:"".concat(t,"px")})),k=d.a.span(w(),(function(n){var t=n.margin;return"string"===typeof t?t:"".concat(t,"px")}));function F(n){return"horizontal"===n.direction?Object(i.jsx)(z,Object(v.a)({},n)):Object(i.jsx)(k,Object(v.a)({},n))}F.defaultProps={direction:"horizontal"};var P=e(12),A=768,M=e.p+"static/media/landing-page2.9bf4ddd1.jpg";function L(){var n=Object(o.a)(["\n    margin: 0;\n    line-height: 1.3;\n    color: #ffffff;\n    font-weight: 500;\n    font-size: 90px;\n    text-shadow: 0px 0px 15px rgb(0, 0, 0);\n\n    @media screen and (max-width: ","px) {\n        font-size: 60px;\n    \n  }\n  @media screen and (max-width: 370px) {\n        font-size: 40px;\n    \n  }\n   \n"]);return L=function(){return n},n}function S(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    @media screen and (max-width: ","px) {\n    align-items: center;\n  }\n  \n"]);return S=function(){return n},n}function T(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n"]);return T=function(){return n},n}function C(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n\n"]);return C=function(){return n},n}function N(){var n=Object(o.a)(["\n    width: 100%;\n    height: 753px;\n    background-image: url(",");\n    background-position: 0px -50px;\n    background-size: cover;\n    @media screen and (max-width: ","px) {\n        height: 700px;\n        background-position: 0px 0px ;\n  }\n    @media screen and (max-width: ","px) {\n        height: 700px;\n        background-position: -310px 0px ;\n  }\n"]);return N=function(){return n},n}var I=d.a.div(N(),M,1217,767),W=d.a.div(C()),H=d.a.div(T()),X=d.a.div(S(),A),B=d.a.h1(L(),A);function E(n){var t=n.children;Object(P.useMediaQuery)({maxWidth:A});return Object(i.jsx)(I,{children:Object(i.jsxs)(W,{children:[t,Object(i.jsx)(H,{children:Object(i.jsxs)(X,{children:[Object(i.jsx)(O,{}),Object(i.jsx)(B,{style:{fontFamily:"vivaldi"},children:" Welcome to My "}),Object(i.jsx)(B,{style:{fontFamily:"vivaldi"},children:" Portfolio... "}),Object(i.jsx)(F,{direction:"vertical",margin:80})]})})]})})}var q=e(13),D=e(24),Q=e(15);function J(){var n=Object(o.a)(["\n  z-index: 99;\n  cursor: pointer;\n"]);return J=function(){return n},n}var R=d.a.div(J()),_=function(n){return Object(i.jsx)(Q.a.path,Object(v.a)({fill:"transparent",strokeLinecap:"round",strokeWidth:"3"},n))},G={duration:.3};function U(n){var t=n.toggle,e=n.isOpen;return Object(i.jsx)(R,{onClick:t,children:Object(i.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[Object(i.jsx)(_,{animate:e?"open":"closed",initial:!1,variants:{closed:{d:"M 2 2.5 L 20 2.5",stroke:"hsl(0, 0%, 100%)"},open:{d:"M 3 16.5 L 17 2.5",stroke:"hsl(0, 0%, 18%)"}},transition:G}),Object(i.jsx)(_,{d:"M 2 9.423 L 20 9.423",stroke:"hsl(0, 0%, 100%)",animate:e?"open":"closed",initial:!1,variants:{closed:{opacity:1},open:{opacity:0}},transition:G}),Object(i.jsx)(_,{animate:e?"open":"closed",initial:!1,variants:{closed:{d:"M 2 16.346 L 20 16.346",stroke:"hsl(0, 0%, 100%)"},open:{d:"M 3 2.5 L 17 16.346",stroke:"hsl(0, 0%, 18%)"}},transition:G})]})})}function K(){var n=Object(o.a)(["\n  font-weight: 600;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  a {\n    text-decoration: none;\n    color: #444;\n    font-size: 20px;\n    transition: all 200ms ease-in-out;\n  }\n  &:hover {\n    a {\n      color: #555;\n    }\n  }\n"]);return K=function(){return n},n}function V(){var n=Object(o.a)(["\n  padding: 0 0.8em;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return n},n}function Y(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return Y=function(){return n},n}var Z=d.a.div(Y()),$=d.a.ul(V()),nn=Object(d.a)(Q.a.li)(K()),tn={transform:"translateX(0em)",opacity:1},en={transform:"translateX(5em)",opacity:0};function rn(n){var t=n.isOpen;return Object(i.jsx)(Z,{children:Object(i.jsxs)($,{children:[Object(i.jsx)(nn,{initial:!1,animate:t?"show":"hide",variants:{show:Object(v.a)(Object(v.a)({},tn),{},{transition:{delay:.3,duration:.2}}),hide:Object(v.a)(Object(v.a)({},en),{},{transition:{delay:.05,duration:.05}})},children:Object(i.jsx)("a",{href:"/",children:"Home"})}),Object(i.jsx)(nn,{initial:!1,animate:t?"show":"hide",variants:{show:Object(v.a)(Object(v.a)({},tn),{},{transition:{delay:.4,duration:.2}}),hide:Object(v.a)(Object(v.a)({},en),{},{transition:{delay:.1,duration:.05}})},children:Object(i.jsx)("a",{href:"/portfolio",children:"Portfoilio"})}),Object(i.jsx)(nn,{initial:!1,animate:t?"show":"hide",variants:{show:Object(v.a)(Object(v.a)({},tn),{},{transition:{delay:.5,duration:.2}}),hide:Object(v.a)(Object(v.a)({},en),{},{transition:{delay:.15,duration:.05}})},children:Object(i.jsx)("a",{href:"/about",children:"About"})}),Object(i.jsx)(nn,{initial:!1,animate:t?"show":"hide",variants:{show:Object(v.a)(Object(v.a)({},tn),{},{transition:{delay:.6,duration:.2}}),hide:Object(v.a)(Object(v.a)({},en),{},{transition:{delay:.2,duration:.05}})},children:Object(i.jsx)("a",{href:"/contact",children:"Contact"})}),Object(i.jsx)(nn,{initial:!1,animate:t?"show":"hide",variants:{show:Object(v.a)(Object(v.a)({},tn),{},{transition:{delay:.7,duration:.2}}),hide:Object(v.a)(Object(v.a)({},en),{},{transition:{delay:.25,duration:.05}})}})]})})}function an(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n"]);return an=function(){return n},n}function cn(){var n=Object(o.a)(["\n  min-width: 300px;\n  width: 100%;\n  max-width: 44%;\n  height: 100%;\n  background-color: #f0bbbb;\n  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);\n  z-index: 90;\n  position: fixed;\n  top: 0;\n  right: 0;\n  transform: translateX(4em);\n  user-select: none;\n  padding: 1em 2.5em;\n"]);return cn=function(){return n},n}function on(){var n=Object(o.a)(["\n  color: ",";\n  cursor: pointer;\n  z-index: 99;\n  transition: all 250ms ease-in-out;\n"]);return on=function(){return n},n}function dn(){var n=Object(o.a)(["\n  display: flex;\n"]);return dn=function(){return n},n}var sn=d.a.div(dn()),ln=(d.a.div(on(),(function(n){return n.reverseColor?"#000":"#fff"})),Object(d.a)(Q.a.div)(cn())),un=d.a.div(an()),xn={open:{transform:"translateX(3%)"},closed:{transform:"translateX(103%)"}},fn={type:"spring",duration:1,stiffness:33,delay:.1};function jn(n){var t=Object(r.useState)(!1),e=Object(q.a)(t,2),a=e[0],c=e[1];return Object(i.jsxs)(sn,{children:[Object(i.jsx)(U,{toggle:function(){c(!a)},isOpen:a}),Object(i.jsx)(ln,{initial:!1,animate:a?"open":"closed",variants:xn,transition:fn,children:Object(i.jsx)(un,{children:Object(i.jsx)(rn,{isOpen:a})})})]})}function hn(){var n=Object(o.a)(["\n    height: 90%;\n    width: 1px;\n    background-color: #ffff;\n"]);return hn=function(){return n},n}function bn(){var n=Object(o.a)(["\n    font-size: 17px;\n    color: #6C3232;\n    cursor: pointer;\n    text-decoration:solid;\n    outline: none;\n    transition: all 200ms ease-in-out;\n    padding-right: 0px;\n\n    &:hover{\n        filter:contrast(0.1);\n\n    }\n\n"]);return bn=function(){return n},n}function pn(){var n=Object(o.a)(["\n    display:flex;\n    align-items: center;\n"]);return pn=function(){return n},n}function mn(){var n=Object(o.a)(["\n    width: 100%;\n    height: 60px;\n    background-color: rgba(255, 200, 200, 0.70);\n    display: flex;\n    justify-content: flex-end;\n    padding : 17px;\n    \n    @media screen and (max-width: ","px) {\n    align-items: flex-start;\n  }\n\n"]);return mn=function(){return n},n}var gn=d.a.div(mn(),A),On=d.a.div(pn()),vn=d.a.a(bn());d.a.div(hn());function wn(n){var t=Object(P.useMediaQuery)({maxWidth:A});return Object(i.jsxs)(gn,{children:[!t&&Object(i.jsxs)(On,{children:[Object(i.jsx)(vn,{href:"/",children:"Home "}),Object(i.jsx)(F,{direction:"horizontal",margin:10}),Object(i.jsx)(vn,{href:"/#about",children:" About "}),Object(i.jsx)(F,{direction:"horizontal",margin:10}),Object(i.jsx)(vn,{href:"/#portfolio",children:" Portfolio "}),Object(i.jsx)(F,{direction:"horizontal",margin:10}),Object(i.jsx)(vn,{href:"/#contact",children:" Contact "}),Object(i.jsx)(F,{direction:"horizontal",margin:20})]}),t&&Object(i.jsx)(jn,{})]})}var yn=e.p+"static/media/blackNwhite.071e57a0.jpg",zn=e(42);function kn(){var n=Object(o.a)(["  \n    display: flex;\n    flex-direction: row;        \n    color: #5c5b5b;\n    font-size: 20px;\n    cursor: pointer;\n    transition: all 200ms ease-in-out;\n\n    &:not(:last-of-type){\n        margin-right:10px;\n    }\n\n    &:hover{\n        color:#f78484;\n     }\n"]);return kn=function(){return n},n}function Fn(){var n=Object(o.a)(["\n    color: rgba(122, 122, 122, 0.637);\n    font-size: 11px;\n    margin:auto;\n    margin-left: 85px;\n    display: flex;\n    align-items: center;\n    margin-top: 9px;\n\n    @media screen and (max-width: 769px) {\n        font-size: 8px;\n        margin-right: 20px;\n        \n  }\n"]);return Fn=function(){return n},n}function Pn(){var n=Object(o.a)(["\n    color: rgba(122, 122, 122, 0.637);\n    font-size: 11px;\n    margin:auto;\n    margin-left: 10px;\n    display: flex;\n    align-items: center;\n    margin-top: 9px;\n\n    @media screen and (max-width: ","px) {\n        font-size: 7px;\n        margin-left: 0px;\n        \n  }\n"]);return Pn=function(){return n},n}function An(){var n=Object(o.a)(["\n    text-decoration: none;\n    font-style:italic;\n    color: #000;\n    font-weight: 500; \n    margin-left: 10px;\n\n    @media screen and (max-width: ","px) {\n        margin-left:0;\n        margin-top: 2px;\n        \n  }\n    \n"]);return An=function(){return n},n}function Mn(){var n=Object(o.a)(["\n    margin: 0;\n    margin-bottom: 8px;\n    color: #5c5b5b;\n    font-weight: 400;\n    font-size:24; \n    font-style:italic;\n\n    @media screen and (max-width: ","px) {\n        font-size:10;\n        font-weight: 200;\n        margin-top:4px;\n        margin-left: 20px;\n  }\n\n    \n"]);return Mn=function(){return n},n}function Ln(){var n=Object(o.a)(["\n    display: flex;\n   \n"]);return Ln=function(){return n},n}function Sn(){var n=Object(o.a)([" \n    display: flex;\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(o.a)(["\n    display: flex;\n   \n"]);return Tn=function(){return n},n}function Cn(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction:column;\n\n"]);return Cn=function(){return n},n}function Nn(){var n=Object(o.a)(["\n    width: 100%;\n    min-height: 50px;\n    display: flex;\n    justify-content: space-between;\n    background-color: rgba(239, 191, 189, 0.61);\n    padding: 10px 3em;\n    border-top: 3px solid #979696;\n\n    @media screen and (max-width: 769px) {\n        padding: 0;\n        min-height: 40px;\n        \n  }\n    \n"]);return Nn=function(){return n},n}var In=d.a.div(Nn()),Wn=(d.a.div(Cn()),d.a.div(Tn())),Hn=d.a.div(Sn()),Xn=d.a.div(Ln()),Bn=d.a.h5(Mn(),A),En=d.a.a(An(),A),qn=d.a.h6(Pn(),A),Dn=d.a.h6(Fn()),Qn=d.a.div(kn());function Jn(n){return Object(i.jsxs)(In,{children:[Object(i.jsxs)(Hn,{children:[Object(i.jsx)(Bn,{children:"Thamina Art"}),Object(i.jsx)(qn,{children:" \xa9 All Rights Reserved, 2021 "})]}),Object(i.jsx)(Wn,{children:Object(i.jsx)(En,{href:"https://instagram.com/thamina.h?igshid=z9z69jeo76wg",children:Object(i.jsxs)(Qn,{children:[Object(i.jsx)(F,{direction:"horizontal",margin:15}),Object(i.jsx)(D.a,{icon:zn.a})]})})}),Object(i.jsx)(Xn,{children:Object(i.jsx)(Dn,{children:"Designed and Developed by MS Haque"})})]})}var Rn=[{image:e.p+"static/media/PictureOne.a2f4e3ef.jpg"},{image:e.p+"static/media/PictureThree.3f318012.jpg"},{image:e.p+"static/media/PictureFive.84bb1ba6.jpg"},{image:e.p+"static/media/PictureSeven.cf05d69f.jpg"}],_n=e(29),Gn=function(n){var t=n.slides,e=Object(r.useState)(0),a=Object(q.a)(e,2),c=a[0],o=a[1],d=t.length;return console.log(c),!Array.isArray(t)||t.length<=0?null:Object(i.jsxs)("section",{className:"slider",children:[Object(i.jsx)(_n.a,{className:"left-arrow",onClick:function(){o(0===c?d-1:c-1)}}),Object(i.jsx)(_n.b,{className:"right-arrow",onClick:function(){o(c===d-1?0:c+1)}}),Rn.map((function(n,t){return Object(i.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(i.jsx)("img",{src:n.image,alt:"Fav Pics",className:"image"})},t)}))]})};function Un(){var n=Object(o.a)(["\n    width: 100%;\n    height: 700px;\n    background-image: url(",");\n    background-position: 0px -120px;\n    background-size: cover;\n    \n\n    @media screen and (max-width: ","px) {\n        background-position: 0px 0px;\n        \n  }\n"]);return Un=function(){return n},n}function Kn(){var n=Object(o.a)(["\n    width: 100% ;\n    height: 100% ;\n    background-color: rgba(239, 191, 189, 0.61);\n    display: flex;\n    flex-direction: column;\n\n"]);return Kn=function(){return n},n}function Vn(){var n=Object(o.a)(["\n    font-weight: 300;\n    font-size: 45px;\n    font-style: italic;\n    color: #ffffff;\n    align-items: center;\n    text-shadow: 0px 0px 4px #e41f1f;\n\n"]);return Vn=function(){return n},n}function Yn(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    \n    \n"]);return Yn=function(){return n},n}d.a.div(Yn());var Zn=d.a.h1(Vn()),$n=d.a.div(Kn()),nt=d.a.div(Un(),yn,1672);function tt(n){return Object(i.jsxs)(x,{children:[Object(i.jsx)(E,{children:Object(i.jsx)(wn,{})}),Object(i.jsx)(F,{direction:"vertical",margin:.9}),Object(i.jsx)(nt,{children:Object(i.jsxs)($n,{children:[Object(i.jsx)(Zn,{style:{fontFamily:"vivaldi"},children:"Personal Favourites x"}),Object(i.jsx)(Gn,{slides:Rn})]})}),Object(i.jsx)(F,{direction:"vertical",margin:2}),Object(i.jsx)(Jn,{})]})}var et=e.p+"static/media/Thani.c01c5a9d.jpg",it=e.p+"static/media/quoteBack.40ca4fbe.jpg";function rt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: 0px 0px;\n    background-size: cover;\n\n    @media screen and (max-width: ","px) {\n        background-position: -450px 0px;\n  }\n\n\n"]);return rt=function(){return n},n}function at(){var n=Object(o.a)(["\n    width: 100%;\n    height: 30em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n"]);return at=function(){return n},n}function ct(){var n=Object(o.a)(["\n    display:flex;\n    width: 20%;\n    margin-left: 30px;\n    box-shadow: 0px 0px 15px rgb(0,0,0);\n    outline-style:double;\n    outline-width: 10px;\n    outline-color: #f5baba;\n\n\n    @media screen and (max-width: ","px) {\n        width: 50%;\n\n  }\n    \n"]);return ct=function(){return n},n}function ot(){var n=Object(o.a)(["\n    margin: 1px;\n    line-height: 1.3;\n    color: #ffffff;\n    box-shadow: 0 0 1 rgb(255, 255, 255);\n    font-weight: 500;\n    font-size: 40px;\n    font-style: normal;\n    text-shadow: 0px 0px 3px #da2020;\n\n    @media screen and (max-width: ","px) {\n        font-size: 20px;\n\n  }\n    \n    \n   \n"]);return ot=function(){return n},n}function dt(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-right: 20px;\n\n    @media screen and (max-width: ","px) {\n        margin-right: 0;\n  }\n  \n"]);return dt=function(){return n},n}function st(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content:space-between;\n  \n"]);return st=function(){return n},n}function lt(){var n=Object(o.a)(["\n    width: 100%;\n    min-height: 700px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around; \n    \n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n  }\n    \n\n"]);return lt=function(){return n},n}var ut=d.a.div(lt(),A),xt=d.a.div(st()),ft=d.a.div(dt(),A),jt=d.a.h4(ot(),A),ht=d.a.div(ct(),A),bt=d.a.div(at()),pt=d.a.div(rt(),it,A);function mt(n){var t=Object(P.useMediaQuery)({maxWidth:A});return Object(i.jsxs)(x,{children:[Object(i.jsxs)(pt,{children:[Object(i.jsx)(wn,{}),Object(i.jsxs)(ut,{children:[Object(i.jsx)(ht,{children:Object(i.jsx)(bt,{children:Object(i.jsx)("img",{src:et,alt:"Thamina Art Logo"})})}),Object(i.jsxs)(ft,{children:[Object(i.jsx)(F,{direction:"horizontal",margin:20}),Object(i.jsx)(jt,{style:{fontFamily:"rageIta"},children:" Thamina Haque "}),t&&Object(i.jsx)(F,{direction:"vertical",margin:10}),Object(i.jsx)(jt,{style:{fontFamily:"rageIta"},children:" Sixth Form student studying Media,"}),Object(i.jsx)(jt,{style:{fontFamily:"rageIta"},children:" Sociology & Fine Art x"})]})]}),Object(i.jsxs)(xt,{children:[Object(i.jsx)(jt,{style:{fontFamily:"rageIta"},children:' " An Ordinary Girl with an everyday life, '}),Object(i.jsx)(jt,{style:{fontFamily:"rageIta"},children:'  drawing her way through it x " '}),Object(i.jsx)(jt,{children:" ~ TH "}),Object(i.jsx)(F,{direction:"vertical",margin:20})]}),Object(i.jsx)(F,{direction:"vertical",margin:70})]}),Object(i.jsx)(Jn,{})]})}var gt=e.p+"static/media/logo.7588fb51.png";function Ot(){var n=Object(o.a)(["\n    width: 100%;\n    height: 20em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n"]);return Ot=function(){return n},n}function vt(){var n=Object(o.a)(["\n    display:flex;\n    width: 20%;\n    margin-left: 30px;\n    box-shadow: 0px 0px 15px rgb(0,0,0);\n    \n    outline-width: 10px;\n    outline-color: #f5baba;\n\n    @media screen and (max-width: ","px) {\n        width: 58%;\n        margin-bottom:35px;\n  }\n    \n"]);return vt=function(){return n},n}function wt(){var n=Object(o.a)(["\n    margin: 1px;\n    line-height: 1.3;\n    color: #000000;\n    box-shadow: 0 0 1 rgb(255, 255, 255);\n    font-weight: 600;\n    font-size: 25px;\n    font-style: normal;\n    text-shadow: 0px 10px 30px #ffffff;\n\n    @media screen and (max-width: ","px) {\n        font-size: 20px;\n        margin-top: 10px;\n  }\n   \n"]);return wt=function(){return n},n}function yt(){var n=Object(o.a)(["\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    margin-right: 0px;\n  \n"]);return yt=function(){return n},n}function zt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 91.5%;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n\n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n  }\n"]);return zt=function(){return n},n}function kt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 700px;\n    background-position: 0px;\n    background-size: cover;\n    background-color: #f8dfdf;\n    align-items: center;\n    justify-content: center; \n\n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n  }\n    \n"]);return kt=function(){return n},n}var Ft=d.a.div(kt(),A),Pt=d.a.div(zt(),A),At=d.a.div(yt()),Mt=d.a.h3(wt(),A),Lt=d.a.div(vt(),A),St=d.a.div(Ot());function Tt(n){return Object(i.jsxs)(Ft,{children:[Object(i.jsx)(wn,{}),Object(i.jsxs)(Pt,{children:[Object(i.jsx)(Lt,{children:Object(i.jsx)(St,{children:Object(i.jsx)("img",{src:gt,alt:"Thamina Art Logo"})})}),Object(i.jsx)(F,{direction:"horizontal",margin:40}),Object(i.jsxs)(At,{children:[Object(i.jsx)(Mt,{children:" \u25c8 E-Mail: Thamina1042@hotmail.com"}),Object(i.jsx)(Mt,{children:" \u25c8 Instagram: Thamina.h "})]})]}),Object(i.jsx)(Jn,{})]})}var Ct=e(19),Nt=e(6),It=e(26),Wt=e.n(It),Ht=e(43),Xt=e(44),Bt=e.n(Xt);function Et(){var n=Object(o.a)(["\n    width: 100% ;\n    height: 100% ;\n    background-color:rgba(248, 231, 229, 0.952);\n    display: flex;\n    flex-direction: column;\n\n\n"]);return Et=function(){return n},n}function qt(){var n=Object(o.a)(["\n    font-size: 15px;\n    margin: 2px;\n    font-weight: 600;\n    color: #000000;\n\n    @media screen and (max-width: ","px) {\n        font-size: 13px;\n    }\n"]);return qt=function(){return n},n}function Dt(){var n=Object(o.a)(["\n    font-size: 15px;\n    margin: 2px;\n    font-weight: 500;\n    color: #000000;\n\n    @media screen and (max-width: ","px) {\n        font-size: 13px;\n    }\n\n"]);return Dt=function(){return n},n}function Qt(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n    padding: 10px 20px;\n    border-top: 3px ridge  #ffb8b8;\n \n"]);return Qt=function(){return n},n}function Jt(){var n=Object(o.a)(["\n    width: 100%;\n    height: 35em;\n    \n\n    img{\n        width: 100%;\n        height: 100%;\n    }\n\n    @media screen and (max-width: ","px) {\n    height: 25em;\n    }\n \n"]);return Jt=function(){return n},n}function Rt(){var n=Object(o.a)(["\n    width: 100%;\n"]);return Rt=function(){return n},n}function _t(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    width: 330px;\n    min-height: 250px;\n    background-color: #ffffff;\n    box-shadow: 0px 0px 16px rgb(0, 0, 0);\n    margin: 2em;\n    margin-bottom: 1.3em;\n    margin-left: 8em;\n    outline-style:ridge;\n    outline-width: 5px;\n    outline-color: #ffb8b8;\n\n    @media screen and (max-width: ","px) {\n        margin-left: 2.5em;\n    }\n  @media screen and (max-width: ","px) {\n    width: 230px;\n\n    }\n\n"]);return _t=function(){return n},n}var Gt=d.a.div(_t(),A,281),Ut=d.a.div(Rt()),Kt=d.a.div(Jt(),281),Vt=d.a.div(Qt()),Yt=d.a.h2(Dt(),281),Zt=d.a.h2(qt(),281),$t=d.a.div(Et());function ne(n){var t=n.thumbnailUrl,e=n.size,r=(n.id,n.title),a=n.desc,c=n.media;return Object(i.jsxs)(Gt,{children:[Object(i.jsx)(Ut,{children:Object(i.jsx)(Kt,{children:Object(i.jsx)("img",{src:t,alt:r})})}),Object(i.jsx)($t,{children:Object(i.jsxs)(Vt,{children:[Object(i.jsxs)(Zt,{children:[" ",e," "]}),Object(i.jsxs)(Yt,{children:[" ",r," "]}),Object(i.jsxs)(Yt,{children:[" ",a," "]}),Object(i.jsxs)(Yt,{children:[" ",c," "]})]})})]})}function te(){var n=Object(o.a)(["\n    color: rgb(0, 0, 0);\n    font-weight: 500;\n\n"]);return te=function(){return n},n}function ee(){var n=Object(o.a)(["\n    display: flex;\n    flex-wrap:wrap;\n    flex-direction: row;\n    @media screen and (max-width: ","px) {\n        display: block;\n       flex-direction: column;\n       justify-content: center;\n    }\n"]);return ee=function(){return n},n}function ie(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    background-color:#f8dfdf;\n    flex-direction:row;\n    align-items: center;\n    justify-content: space-evenly;\n"]);return ie=function(){return n},n}var re=d.a.div(ie()),ae=d.a.div(ee(),980),ce=d.a.h3(te());function oe(n){var t=Object(r.useState)([]),e=Object(q.a)(t,2),a=e[0],c=e[1],o=Object(r.useState)(!1),d=Object(q.a)(o,2),s=d[0],l=d[1],u=!a||a&&0===a.length,x=function(){var n=Object(Ht.a)(Wt.a.mark((function n(){var t;return Wt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.next=3,Bt.a.get("http://localhost:9000/FavPics").catch((function(n){console.log("Error: ",n)}));case 3:(t=n.sent)&&c(t.data),l(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),Object(i.jsx)(re,{children:Object(i.jsxs)(ae,{children:[u&&!s&&Object(i.jsx)(ce,{children:"No Pictures have been posted yet...Coming Soon! x "}),s&&Object(i.jsx)(ce,{children:"Art is Loading..."}),!u&&!s&&a.map((function(n,t){return Object(i.jsx)(ne,Object(v.a)({},n),t)}))]})})}function de(){var n=Object(o.a)(["\n    width: 100% ;\n    height: 100% ;\n    background-color: #ffd7d7;\n    display: flex;\n    flex-direction: column;\n\n    @media screen and (max-width: ","px) {\n        width: 100%;\n    }\n    \n\n"]);return de=function(){return n},n}function se(){var n=Object(o.a)(["\n    margin: 0;\n    line-height: 0.8;\n    color: #000000;\n    font-weight: 500;\n    font-size: 55px;\n    font-style: normal;\n    text-decoration:none;\n    text-shadow: 0px 0px 2px #e45454;\n\n    @media screen and (max-width: ","px) {\n        margin:5px;\n        font-size:43px;\n       \n  }\n    \n   \n"]);return se=function(){return n},n}var le=d.a.h1(se(),A),ue=d.a.div(de(),281);function xe(n){return Object(i.jsxs)(x,{children:[Object(i.jsxs)(ue,{children:[Object(i.jsx)(wn,{}),Object(i.jsx)(F,{direction:"vertical",margin:13}),Object(i.jsx)(le,{style:{fontFamily:"vivaldi"},children:"My Portfolio"}),Object(i.jsx)(f,{children:Object(i.jsx)(oe,{})})]}),Object(i.jsx)(Jn,{})]})}var fe=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(Ct.a,{children:Object(i.jsxs)(Nt.c,{children:[Object(i.jsx)(Nt.a,{path:"/",exact:!0,component:tt}),Object(i.jsx)(Nt.a,{path:"/portfolio",exact:!0,component:xe}),Object(i.jsx)(Nt.a,{path:"/contact",exact:!0,component:Tt}),Object(i.jsx)(Nt.a,{path:"/about",exact:!0,component:mt})]})})})},je=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,82)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),i(n),r(n),a(n),c(n)}))};c.a.render(Object(i.jsx)(Ct.a,{children:Object(i.jsx)(fe,{})}),document.getElementById("root")),je()}},[[80,1,2]]]);
//# sourceMappingURL=main.ab867ee1.chunk.js.map