(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{10:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},32:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),c=i(18),a=i.n(c),l=(i(24),i(25),i(0));var o=function(e){return Object(l.jsx)("div",{children:" This is a contact body "})},s=(i(10),i(7));var d=function(e){var t=e.avatarStyle,i=e.imgStyle,n=e.avatarSrc;return Object(l.jsx)("div",{style:t,children:Object(l.jsx)(s.b,{to:"/homepage",children:Object(l.jsx)("img",{alt:"avatar",src:n,style:i})})})},j=i.p+"static/media/harry-avatar.b1ddbe4d.jpeg";i(16);var x=function(e){var t=e.type;if("image"===t){var i=e.iconSrc,n=e.iconStyle,r=e.imgStyle,c=e.children;return Object(l.jsxs)("div",{style:n,children:[Object(l.jsx)("img",{style:r,src:i,alt:"footer-img"}),c]})}if("button"===t){var a=e.buttonStyle,o=e.iconStyle,d=e.title,j=e.redirect;return Object(l.jsx)("div",{style:o,children:Object(l.jsx)(s.b,{to:j,children:Object(l.jsx)("button",{className:"button",style:a,children:d})})})}if("text"===t){var x=e.textStyle,p=e.iconStyle,b=e.title;return Object(l.jsx)("div",{style:p,children:Object(l.jsx)("button",{style:x,disabled:!0,children:b})})}return Object(l.jsx)("div",{children:"Error"})};var p=function(e){var t={height:"130px",width:"130px",borderRadius:"50%",border:"none",marginRight:"20px",color:"white",fontSize:"15px"},i=[{key:0,title:"MY RESUME",redirect:"/resume",bgColor:"#ec3454"},{key:1,title:"MY WORK",redirect:"/resume",bgColor:"#64ccd4"},{key:2,title:"MY SKILLS",redirect:"/projects",bgColor:"#d2c925"}].map((function(e){return Object(l.jsx)(x,{type:"button",title:e.title,redirect:e.redirect,iconStyle:null,buttonStyle:Object.assign({},t,{backgroundColor:e.bgColor})},e.key)}));return Object(l.jsx)("div",{style:{display:"flex",flexDireciton:"row",justifyContent:"flex-start",marginBottom:"20px"},children:i})};var b=function(e){return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:"5%",marginRight:"5%"},children:[Object(l.jsx)(d,{avatarStyle:{margin:"40px 80px 80px 0px"},imgStyle:{borderRadius:"50%",height:"380px",marginTop:"16px"},avatarSrc:j}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"50px"},children:[Object(l.jsx)("p",{style:{fontFamily:"Noticia Text",color:"#4d4d4d",margin:"10px",fontSize:"80px",alignSelf:"flex-start",fontWeight:"bold"},children:" Hello, "}),Object(l.jsx)("p",{style:{fontFamily:"Noticia Text",color:"#4d4d4d",marginTop:"-10px",marginBottom:"20px",fontSize:"46px",alignSelf:"flex-start"},children:" a bit about me: "}),Object(l.jsx)(p,{}),Object(l.jsxs)("p",{style:{maxWidth:"450px",fontSize:"13px"},children:[" ","I am a Full Stack Developer recently graduated from the University of Waterloo in Canada.I am a Full Stack Developer recently graduated from the University of Waterloo in Canada.I am a Full Stack Developer recently graduated from the University of Waterloo in Canada.I am a Full Stack Developer recently graduated from the University of Waterloo in Canada."," "]})]})]})};var m=function(e){var t=e.title,i=e.content;return Object(l.jsx)("div",{style:{width:"325px"},children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h3",{style:{textAlign:"initial"},children:t}),Object(l.jsxs)("p",{style:{fontSize:"13px",fontFamily:"Open Sans",textAlign:"initial"},children:[" ",i," "]})]})})};var h={display:"flex",flexDireciton:"row"},u={width:"510px",height:"287px",marginRight:"40px"},g={height:"100px",width:"100px",borderRadius:"50%",border:"none",marginRight:"20px",color:"white",fontSize:"15px",fontFamily:"Noticia Text",fontWeight:"bold",backgroundColor:"#64ccd4"},y={textAlign:"initial"},f={marginTop:"20px",marginBottom:"20px"},O=function(e){var t=e.id,i=e.title,n=e.content,r=e.imgSrc,c="Project | "+t;return Object(l.jsxs)("div",{style:h,children:[Object(l.jsx)("img",{style:u,src:r,alt:"banner-img"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(x,{type:"text",title:c,textStyle:g,iconStyle:y}),Object(l.jsx)("hr",{style:f}),Object(l.jsx)(m,{title:i,content:n}),Object(l.jsx)("div",{children:e.children})]})]})},v=[{id:1,title:"The Chamber Crawler 3000K",imgsrc:i.p+"static/media/cc3k.07f8e08d.png",content:"This is a Text-Based 2D RPG game written in C++. We programmed it in a group of 3 within 2 weeks. Object Oriented Programming concepts were applied."},{id:2,title:"MineSweeper 1.0",imgsrc:i.p+"static/media/minesweep.9c1ef7a7.png",content:"This is a simple mine sweeper written in Swift. Various design patterns were applied."},{id:3,title:"OpenGL Maze",imgsrc:i.p+"static/media/maze.21f49515.png",content:"A Maze game created using the basics of programming real-time 3D graphics using OpenGL."}];var S=function(e){var t={width:"100%",marginTop:"50px",marginBottom:"50px"},i=v.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{id:e.id,title:e.title,content:e.content,imgSrc:e.imgsrc}),Object(l.jsx)("hr",{style:t})]})}));return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"5%",marginRight:"5%"},children:[Object(l.jsxs)("p",{style:{fontSize:"80px",fontFamily:"Noticia Text",color:"#4d4d4d",textAlign:"initial",marginTop:"50px",marginBottom:"10px"},children:[" ","LATEST PROJECTS ",Object(l.jsx)("hr",{style:t})]}),i]})};var k=function(e){return Object(l.jsx)("div",{children:" This is a skill banner "})};var C=function(e){var t=e.title,i=e.timePeriod,n=e.content;return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[" ",t," "]}),Object(l.jsxs)("p",{children:[" ",i," "]})]}),Object(l.jsxs)("p",{children:[" ",n," "]})]})},w=[{id:0,title:"Full Stack Developer",company:"Wish Corporation",time:"2020.1 - 2020.5",content:"As a full stack developer in the Marketplace Engineering Team, I was responsible for..."}],T=[{id:0,school:"University of Waterloo",time:"2016.9 - 2021.1",content:"For 4 and half year I have been studied in the University of Waterloo."}];function N(e){var t=e.title,i=e.data.map((function(e){return Object(l.jsx)(C,{title:e.title,timePeriod:e.time,content:e.content},e.id)}));return Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)(x,{type:"text",textStyle:F,iconStyle:z,title:t}),i]})}var F={height:"120px",width:"120px",borderRadius:"50%",border:"none",marginRight:"20px",color:"white",fontSize:"17px",fontFamily:"Noticia Text",fontWeight:"bold",backgroundColor:"#ec3454"},z={},D=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(N,{title:"Work Experience",data:w}),Object(l.jsx)(N,{title:"Education",data:T})]})};var R={display:"flex",flexDirection:"column"},W={display:"flex"},E={fontSize:"80px",fontFamily:"Noticia Text",color:"#4d4d4d",textAlign:"initial",marginTop:"50px",marginBottom:"10px"},A=function(e){return Object(l.jsxs)("div",{style:R,children:[Object(l.jsx)("p",{style:E,children:" Resume"}),Object(l.jsxs)("div",{style:W,children:[Object(l.jsx)(D,{}),Object(l.jsx)(k,{})]})]})},M=function(e){var t=Object(l.jsx)("p",{children:" Fatal Error "});return"homepage"===e.displayContent?t=Object(l.jsx)(b,{}):"resume"===e.displayContent?t=Object(l.jsx)(A,{}):"project"===e.displayContent?t=Object(l.jsx)(S,{}):"contact"===e.displayContent&&(t=Object(l.jsx)(o,{})),Object(l.jsxs)("div",{className:"component-mainbody",children:[" ",t," "]})};var I=function(e){return Object(l.jsxs)("div",{className:"component-navbar-nametag",children:[Object(l.jsxs)("div",{className:"name",children:[e.givenName," ",e.familyName]}),Object(l.jsx)("div",{className:"title",children:e.jobTitle})]})};var B=function(e){var t=e.pages.map((function(e){return Object(l.jsx)(s.b,{className:"link",to:e.link,style:{textDecoration:"none"},children:e.name},e.key)}));return Object(l.jsx)("div",{className:"component-navbar-navigates",children:t})};var L=function(e){return Object(l.jsxs)("div",{className:"component-navbar",children:[Object(l.jsx)(I,{familyName:"Zhu",givenName:"Jack",jobTitle:"Full Stack Developer"}),Object(l.jsx)(B,{pages:e.navItems})]})},P=i.p+"static/media/phone.fc761822.svg",U=i.p+"static/media/email.ed58def5.svg",G=i.p+"static/media/github.99e8d8bd.svg",J=i.p+"static/media/social.1242a639.svg";i(17);var H=function(e){var t=e.title,i=e.content,n=e.titleStyle,r=e.contentStyle;return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{style:n,children:t}),Object(l.jsx)("p",{style:r,children:i})]})};var K=function(){var e={fontSize:"13px",lineHeight:"1.2em",color:"white",fontWeight:"bold",marginBottom:"-5px",textAlign:"initial"},t={fontSize:"13px",lineHeight:"1.2em",color:"white",textAlign:"initial"},i={display:"flex",flexDirection:"row",margin:"10px",fill:"#66ccff"},n={width:"45px",height:"45px",margin:"10px"},r=[{key:0,children:Object(l.jsx)(H,{titleStyle:e,contentStyle:t,title:"Call",content:"CN: 18915974830"}),iconSrc:P},{key:1,children:Object(l.jsx)(H,{titleStyle:e,contentStyle:t,title:"Email",content:"Gmail: jackzyc1997@gmail.com"}),iconSrc:U},{key:2,children:Object(l.jsx)(H,{titleStyle:e,contentStyle:t,title:"Github",content:"Username: github.com/j97zhu"}),iconSrc:G},{key:3,children:Object(l.jsx)(H,{titleStyle:e,contentStyle:t,title:"Social Media",content:"Wechat: zyc1220594953"}),iconSrc:J}].map((function(e){return Object(l.jsx)(x,{type:"image",iconSrc:e.iconSrc,children:e.children,iconStyle:i,imgStyle:n},e.key)}));return Object(l.jsx)("div",{className:"component-footer",children:r})},Y=i(2);var V=function(){var e=[{key:0,name:"HOMES",link:"/homepage"},{key:1,name:"RESUME",link:"/resume"},{key:2,name:"PROJECTS",link:"/projects"},{key:3,name:"CONTACT",link:"/contact"}];return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(s.a,{basename:"/main",children:[Object(l.jsx)(Y.b,{render:function(){return Object(l.jsx)(L,{navItems:e})}}),Object(l.jsxs)(Y.d,{children:[Object(l.jsx)(Y.b,{exact:!0,path:"/",render:function(){return Object(l.jsx)(Y.a,{to:"/homepage"})}}),Object(l.jsx)(Y.b,{path:"/resume",render:function(){return Object(l.jsx)(M,{displayContent:"resume"})}}),Object(l.jsx)(Y.b,{path:"/projects",render:function(){return Object(l.jsx)(M,{displayContent:"project"})}}),Object(l.jsx)(Y.b,{path:"/contact",render:function(){return Object(l.jsx)(M,{displayContent:"contact"})}}),Object(l.jsx)(Y.b,{render:function(){return Object(l.jsx)(M,{displayContent:"homepage"})}})]}),Object(l.jsx)(Y.b,{render:function(){return Object(l.jsx)(K,{})}})]})})},Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,33)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),r(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root")),Z()}},[[32,1,2]]]);
//# sourceMappingURL=main.8a16bdcd.chunk.js.map