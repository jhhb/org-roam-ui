(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{220:function(e){e.exports=JSON.parse('{"common":{"ok":"OK!","cancel":"Cancel","back":"Back"},"errors":{"invalidEmail":"Invalid email address."},"welcomeScreen":{"poweredBy":"POWERED BY IGNITE","readyForLaunch":"Ready for launch.","continue":"CONTINUE"},"demoScreen":{"howTo":"HOW TO","title":"What\u2019s In This Stack?","tagLine":"Congratulations, you\u2019ve got a very advanced React Native app template here.  Take advantage of this boilerplate!","reactotron":"Demo Reactotron","demoList":"Demo List","androidReactotronHint":"If this doesn\'t work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.","iosReactotronHint":"If this doesn\'t work, ensure the Reactotron desktop app is running and reload app.","macosReactotronHint":"If this doesn\'t work, ensure the Reactotron desktop app is running and reload app.","webReactotronHint":"If this doesn\'t work, ensure the Reactotron desktop app is running and reload app.","windowsReactotronHint":"If this doesn\'t work, ensure the Reactotron desktop app is running and reload app."},"demoListScreen":{"title":"Demo List"},"storybook":{"placeholder":"Placeholder","field":"Field"}}')},221:function(e){e.exports=JSON.parse('{"common":{"ok":"OK \ud83c\uddef\ud83c\uddf5","cancel":"Cancel \ud83c\uddef\ud83c\uddf5","back":"Back \ud83c\uddef\ud83c\uddf5"}}')},262:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"loadString",(function(){return O})),r.d(n,"saveString",(function(){return v})),r.d(n,"load",(function(){return k})),r.d(n,"save",(function(){return E})),r.d(n,"remove",(function(){return w})),r.d(n,"clear",(function(){return x}));var a=r(9),o=r.n(a),i=r(7),c=r.n(i),l=r(264),s=r(97),u=r.n(s),d=r(220),p=r(221);function f(e,t){return e?u.a.t(e,t):null}u.a.fallbacks=!0,u.a.translations={en:d,ja:p},u.a.locale=l.a||"en",r(179).a.ignoreLogs(["Require cycle:"]);var g=r(0),m=r.n(g),h=r(471),b=r(465),y=r(65);function O(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(y.a.getItem(e));case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",null);case 9:case"end":return t.stop()}}),null,null,[[0,6]],Promise)}function v(e,t){return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.awrap(y.a.setItem(e,t));case 3:return r.abrupt("return",!0);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",!1);case 9:case"end":return r.stop()}}),null,null,[[0,6]],Promise)}function k(e){var t;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.awrap(y.a.getItem(e));case 3:return t=r.sent,r.abrupt("return",JSON.parse(t));case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",null);case 10:case"end":return r.stop()}}),null,null,[[0,7]],Promise)}function E(e,t){return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.awrap(y.a.setItem(e,JSON.stringify(t)));case 3:return r.abrupt("return",!0);case 6:return r.prev=6,r.t0=r.catch(0),r.abrupt("return",!1);case 9:case"end":return r.stop()}}),null,null,[[0,6]],Promise)}function w(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.awrap(y.a.removeItem(e));case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),null,null,[[0,5]],Promise)}function x(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.awrap(y.a.clear());case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),null,null,[[0,5]],Promise)}var S=r(466),j=r(6),A=r.n(j),C=r(2),P=r(122),R=r(29),I=r(56),D=r(19),B=r.n(D),z=r(17),L=r.n(z),T=r(54),N={black:"#1d1d1d",white:"#ffffff",offWhite:"#e6e6e6",orange:"#FBA928",orangeDarker:"#EB9918",lightGrey:"#939AA4",lighterGrey:"#CDD4DA",angry:"#dd3333",deepPurple:"#5D2555"},V={palette:N,transparent:"rgba(0, 0, 0, 0)",background:N.white,primary:N.orange,primaryDarker:N.orangeDarker,line:N.offWhite,text:N.white,dim:N.lightGrey,error:N.angry,storybookDarkBg:N.black,storybookTextColor:N.black},W=[0,4,8,12,16,24,32,48,64],H=r(8),F={primary:H.a.select({ios:"Helvetica",android:"normal"}),secondary:H.a.select({ios:"Arial",android:"sans-serif"}),code:H.a.select({ios:"Courier",android:"monospace"})};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G={fontFamily:F.primary,color:V.text,fontSize:15},K={default:G,bold:M(M({},G),{},{fontWeight:"bold"}),header:M(M({},G),{},{fontSize:24,fontWeight:"bold"}),fieldLabel:M(M({},G),{},{fontSize:13,color:V.dim}),secondary:M(M({},G),{},{fontSize:9,color:V.dim})},Q=["preset","tx","txOptions","text","children","style"];function Y(e){var t=e.preset,r=void 0===t?"default":t,n=e.tx,a=e.txOptions,o=e.text,i=e.children,c=e.style,l=L()(e,Q),s=n&&f(n,a)||o||i,u=[K[r]||K.default,c];return g.createElement(T.a,B()({},l,{style:u}),s)}var J=r(37);function X(e){var t=Object(g.useState)({width:0,height:0}),r=o()(t,2),n=r[0],a=r[1];return Object(g.useLayoutEffect)((function(){var t;if(null!=(t=e.source)&&t.uri)J.a.getSize(e.source.uri,(function(e,t){a({width:e,height:t})}));else if("web"===H.a.OS)J.a.getSize(e.source,(function(e,t){a({width:e,height:t})}));else{var r=J.a.resolveAssetSource(e.source),n=r.width,o=r.height;a({width:n,height:o})}}),[]),m.a.createElement(J.a,B()({},e,{style:[n,e.style]}))}var Z={back:r(302),bullet:r(303)},_={resizeMode:"contain"};function q(e){var t=e.style,r=e.icon,n=e.containerStyle;return g.createElement(C.a,{style:n},g.createElement(X,{style:[_,t],source:Z[r]}))}var $={flexDirection:"row",marginTop:W[4],paddingBottom:W[4],borderBottomWidth:1,borderBottomColor:"#3A3048"},ee={marginRight:W[4]-1,marginTop:W[2]},te={width:8,height:8},re={flex:1,fontFamily:F.primary,color:"#BAB6C8",fontSize:15,lineHeight:22};function ne(e){return g.createElement(C.a,{style:$},g.createElement(q,{icon:"bullet",containerStyle:ee,style:te}),g.createElement(Y,{style:re,text:e.text}))}var ae=r(45);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce={paddingVertical:W[2],paddingHorizontal:W[2],borderRadius:4,justifyContent:"center",alignItems:"center"},le={paddingHorizontal:W[3]},se={primary:ie(ie({},ce),{},{backgroundColor:V.palette.orange}),link:ie(ie({},ce),{},{paddingHorizontal:0,paddingVertical:0,alignItems:"flex-start"})},ue={primary:ie(ie({},le),{},{fontSize:9,color:V.palette.white}),link:ie(ie({},le),{},{color:V.text,paddingHorizontal:0,paddingVertical:0})},de=["preset","tx","text","style","textStyle","children"];function pe(e){var t=e.preset,r=void 0===t?"primary":t,n=e.tx,a=e.text,o=e.style,i=e.textStyle,c=e.children,l=L()(e,de),s=[se[r]||se.primary,o],u=[ue[r]||ue.primary,i],d=c||g.createElement(Y,{tx:n,text:a,style:u});return g.createElement(ae.a,B()({style:s},l),d)}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me={width:16,height:16};ge(ge({},me),{},{marginTop:2,justifyContent:"center",alignItems:"center",borderWidth:1,borderColor:V.primaryDarker,borderRadius:1});function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ye={borderWidth:1,borderColor:V.line,padding:W[2]};be(be({},ye),{},{borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomWidth:0}),be(be({},ye),{},{borderBottomWidth:0}),be(be({},ye),{},{borderBottomLeftRadius:8,borderBottomRightRadius:8}),be(be({},ye),{},{borderRadius:8}),be({},ye),be(be({},ye),{},{borderColor:V.transparent});var Oe={flexDirection:"row",paddingHorizontal:W[4],alignItems:"center",paddingTop:W[5],paddingBottom:W[5],justifyContent:"flex-start"},ve={textAlign:"center"},ke={flex:1,justifyContent:"center"},Ee={width:32},we={width:32};function xe(e){var t=e.onLeftPress,r=e.onRightPress,n=e.rightIcon,a=e.leftIcon,o=e.headerText,i=e.headerTx,c=e.style,l=e.titleStyle,s=o||i&&f(i)||"";return m.a.createElement(C.a,{style:[Oe,c]},a?m.a.createElement(pe,{preset:"link",onPress:t},m.a.createElement(q,{icon:a})):m.a.createElement(C.a,{style:Ee}),m.a.createElement(C.a,{style:ke},m.a.createElement(Y,{style:[ve,l],text:s})),n?m.a.createElement(pe,{preset:"link",onPress:r},m.a.createElement(q,{icon:n})):m.a.createElement(C.a,{style:we}))}var Se=r(101),je=r(49),Ae=r(77),Ce={none:0},Pe={fixed:{outer:{backgroundColor:V.background,flex:1,height:"100%"},inner:{justifyContent:"flex-start",alignItems:"stretch",height:"100%",width:"100%"}},scroll:{outer:{backgroundColor:V.background,flex:1,height:"100%"},inner:{justifyContent:"flex-start",alignItems:"stretch"}}};var Re="ios"===H.a.OS;function Ie(e){var t=Object(h.c)(),r=Pe.fixed,n=e.style||{},a=e.backgroundColor?{backgroundColor:e.backgroundColor}:{},o={paddingTop:e.unsafe?0:t.top};return g.createElement(Se.a,{style:[r.outer,a],behavior:Re?"padding":void 0,keyboardVerticalOffset:Ce[e.keyboardOffset||"none"]},g.createElement(Ae.a,{barStyle:e.statusBar||"light-content"}),g.createElement(C.a,{style:[r.inner,n,o]},e.children))}function De(e){var t=Object(h.c)(),r=Pe.scroll,n=e.style||{},a=e.backgroundColor?{backgroundColor:e.backgroundColor}:{},o={paddingTop:e.unsafe?0:t.top};return g.createElement(Se.a,{style:[r.outer,a],behavior:Re?"padding":void 0,keyboardVerticalOffset:Ce[e.keyboardOffset||"none"]},g.createElement(Ae.a,{barStyle:e.statusBar||"light-content"}),g.createElement(C.a,{style:[r.outer,a,o]},g.createElement(je.a,{style:[r.outer,a],contentContainerStyle:[r.inner,n],keyboardShouldPersistTaps:e.keyboardShouldPersistTaps||"handled"},e.children)))}function Be(e){return(t=e.preset)&&Pe[t]&&"fixed"!==t?g.createElement(De,e):g.createElement(Ie,e);var t}r(12),r(14),r(118),V.palette.offWhite;r(57),V.palette.white;function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te={stretch:Le(Le({},{position:"absolute",top:0,left:0,bottom:0,right:0}),{},{resizeMode:"stretch",width:null,height:null})},Ne=r(308);function Ve(e){var t=e.preset,r=void 0===t?"stretch":t,n=e.style,a=e.backgroundImage,o=[Te[r]||Te.stretch,n],i=a||Ne;return m.a.createElement(X,{source:i,style:o})}var We=r(261),He=r(169),Fe=r(469),Ue={justifyContent:"center"},Me=Object(I.a)((function(e){var t=e.style,r=e.physics,n=e.gData,a=(e.nodeIds,Object(We.a)([Ue,t]),Object(g.useRef)());Object(g.useEffect)((function(){var e=a.current;e.d3Force("link").strength(r.linkStrength),e.d3Force("link").iterations(r.linkIts),r.collision?e.d3Force("collide",Fe.a().radius(20)):e.d3Force("collide",null),e.d3Force("charge").strength(r.charge)}));Object(g.useMemo)((function(){var e=Object.fromEntries(n.nodes.map((function(e){return[e.id,e]})));return n.nodes.forEach((function(e){e.collapsed=0!==e.id,e.childLinks=[],e.parentLink=[]})),n.links.forEach((function(t){return e[t.source].childLinks.push(t)})),e}),[n]);return g.createElement(C.a,null,r.threedim?g.createElement(He.b,{ref:a,graphData:n,nodeAutoColorBy:"group",linkColor:"#ffffff",linkWidth:2,linkDirectionalParticles:r.particles,nodeLabel:function(e){return e.title},linkWidth:r.linkWidth,linkOpacity:r.linkOpacity,nodeRelSize:r.nodeRel,linkDirectionalParticleWidth:r.particleWidth,backgroundColor:"#1d1d1d"}):g.createElement(He.a,{ref:a,graphData:n,nodeAutoColorBy:"id",linkAutoColorBy:"target",linkColor:"#ffffff",linkDirectionalParticles:r.particles,nodeLabel:function(e){return e.title},linkWidth:r.linkWidth,linkOpacity:r.linkOpacity,nodeRelSize:r.nodeRel,linkDirectionalParticleWidth:r.particleWidth}))})),Ge=r(91),Ke=r(5),Qe=r(69),Ye=r.n(Qe),Je=r(266),Xe=r(170),Ze=r(171);function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $e=Object(I.a)((function(e){e.style;var t=e.physics,r=e.setPhysics,n=[{title:"Physics",content:g.createElement(C.a,null,g.createElement(Y,{preset:"fieldLabel",text:"Repulsive force: "+t.charge}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:-400,maximumValue:100,onValueChange:function(e){r(qe(qe({},t),{},{charge:e}))},value:t.charge,step:1}),g.createElement(Y,{preset:"fieldLabel",text:"Link Force: "+t.linkStrength}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:-2,maximumValue:2,onValueChange:function(e){r(qe(qe({},t),{},{linkStrength:e}))},value:t.linkStrength,step:.1}),g.createElement(Y,{preset:"fieldLabel",text:"'Link Iterations': "+t.linkIts}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:1,maximumValue:10,onValueChange:function(e){r(qe(qe({},t),{},{linkIts:e}))},value:t.linkIts,step:1}),g.createElement(Y,{preset:"fieldLabel",text:"Collision"}),g.createElement(Ge.a,{style:{width:"5",height:20,marginVertical:10},value:t.collision,onValueChange:function(){r(qe(qe({},t),{},{collision:!t.collision}))}}))},{title:"Visual",content:g.createElement(C.a,null,g.createElement(Y,{preset:"fieldLabel",text:"Line Opacity: "+t.linkOpacity}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:0,maximumValue:1,onValueChange:function(e){r(qe(qe({},t),{},{linkOpacity:e}))},value:t.linkOpacity,step:.01}),g.createElement(Y,{preset:"fieldLabel",text:"Line width: "+t.linkWidth}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:.1,maximumValue:10,onValueChange:function(e){r(qe(qe({},t),{},{linkWidth:e}))},value:t.linkWidth,step:.1}),g.createElement(Y,{preset:"fieldLabel",text:"Node size: "+t.nodeRel}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:1,maximumValue:10,onValueChange:function(e){r(qe(qe({},t),{},{nodeRel:e}))},value:t.nodeRel,step:.01}),g.createElement(Y,{preset:"fieldLabel",text:"Particles: "+t.particles}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:0,maximumValue:10,onValueChange:function(e){r(qe(qe({},t),{},{particles:e}))},value:t.particles,step:1}),g.createElement(Y,{preset:"fieldLabel",text:"Particle Size: "+t.particleWidth}),g.createElement(Ye.a,{style:{height:40,width:"90%"},minimumValue:1,maximumValue:10,onValueChange:function(e){r(qe(qe({},t),{},{particleWidth:e}))},value:t.particleWidth,step:.1}))},{title:"Modes",content:g.createElement(C.a,null,g.createElement(Y,{preset:"fieldLabel",text:"Expandable Graph"}),g.createElement(Ge.a,{style:{width:"5",height:20,marginVertical:10},value:t.collapse,onValueChange:function(){r(qe(qe({},t),{},{collapse:!t.collapse}))}}),g.createElement(Y,{preset:"fieldLabel",text:"3D"}),g.createElement(Ge.a,{style:{width:"5",height:20,marginVertical:10},value:t.threedim,onValueChange:function(){r(qe(qe({},t),{},{threedim:!t.threedim}))}}))}],a=Object(g.useState)([]),i=o()(a,2),c=i[0],l=i[1],s=Object(g.useState)(!0),u=o()(s,2),d=u[0],p=u[1];return d?g.createElement(C.a,{style:et.container},g.createElement(C.a,{style:{height:30,width:"100%",backgroundColor:"rgb(20,20,20)"}},g.createElement(ae.a,{style:{width:30,color:"#ffffff",textAlign:"center",marginLeft:"auto",padding:5},onPress:function(){p(!1)}},g.createElement(Ze.a,{name:"close-circle",color:"#ffffff",size:20}))),g.createElement(je.a,null,g.createElement(Je.a,{activeSections:c,sections:n,touchAbleComponent:ae.a,expandMultiple:!0,renderHeader:function(e,t,r){return g.createElement(Xe.a,{duration:400,style:[et.header,r?et.active:et.inactive],transition:"backgroundColor"},g.createElement(Y,{style:et.headerText},e.title))},renderContent:function(e,t,r){return g.createElement(Xe.a,{duration:400,style:[et.content,r?et.active:et.inactive],transition:"backgroundColor"},e.content)},duration:200,onChange:function(e){l(e.includes(void 0)?[]:e)},renderAsFlatList:!1}))):g.createElement(ae.a,{onPress:function(){p(!0)},style:{position:"absolute",top:50,left:50,width:30,color:"#ffffff",zIndex:100}},g.createElement(Ze.a,{name:"cog",color:"#ffffff",size:30}))})),et=Ke.a.create({container:{flex:1,backgroundColor:"rgb(20,20,20)",position:"absolute",zIndex:100,left:50,top:50,width:250,borderRadius:5,borderStyle:"solid",maxHeight:"70%",paddingBottom:20},title:{textAlign:"left",fontSize:22,fontWeight:"300",marginBottom:20,paddingLeft:20},header:{backgroundColor:"#111111",padding:10,paddingBottom:20,textAlign:"left"},headerText:{textAlign:"left",paddingLeft:30,fontSize:16,fontWeight:"500"},content:{padding:20,paddingLeft:60,backgroundColor:"#000000"},active:{backgroundColor:"rgba(0,0,0,1)"},inactive:{backgroundColor:"rgba(20,20,20,1)"},selectors:{marginBottom:10,flexDirection:"row",justifyContent:"center"},selector:{backgroundColor:"#111111",padding:10},activeSelector:{fontWeight:"bold"},selectTitle:{fontSize:14,fontWeight:"500",padding:10},multipleToggle:{flexDirection:"row",justifyContent:"center",marginVertical:30,alignItems:"center"},multipleToggle__title:{fontSize:16,marginRight:8}});function tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function rt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var nt=r(368),at={flex:1},ot={backgroundColor:V.transparent,paddingHorizontal:W[4]},it={color:V.palette.white,fontFamily:F.primary},ct={fontWeight:"bold"},lt={paddingTop:W[3],paddingBottom:W[4]+W[1],paddingHorizontal:0},st=rt(rt(rt({},it),ct),{},{fontSize:12,lineHeight:15,textAlign:"center",letterSpacing:1.5}),ut=rt(rt({},it),{},{textAlign:"center"}),dt=rt(rt(rt({},it),ct),{},{fontSize:28,lineHeight:38,textAlign:"center"}),pt=rt(rt(rt({},it),ct),{},{fontSize:26,fontStyle:"italic"}),ft={alignSelf:"center",marginVertical:W[5],maxWidth:"100%",width:343,height:230},gt=rt(rt({},it),{},{color:"#BAB6C8",fontSize:15,lineHeight:22,marginBottom:W[5]}),mt={paddingVertical:W[4],paddingHorizontal:W[4],backgroundColor:V.palette.deepPurple},ht=rt(rt(rt({},it),ct),{},{fontSize:13,letterSpacing:2}),bt={backgroundColor:"#20162D"},yt={paddingVertical:W[4],paddingHorizontal:W[4]},Ot=(Object(I.a)((function(){var e=Object(R.useNavigation)();return m.a.createElement(C.a,{testID:"WelcomeScreen",style:at},m.a.createElement(Ve,null),m.a.createElement(Be,{style:ot,preset:"scroll",backgroundColor:V.transparent},m.a.createElement(xe,{headerTx:"welcomeScreen.poweredBy",style:lt,titleStyle:st}),m.a.createElement(Y,{style:ut},m.a.createElement(Y,{style:dt,text:"Your new app, "}),m.a.createElement(Y,{style:pt,text:"almost"}),m.a.createElement(Y,{style:dt,text:"!"})),m.a.createElement(Y,{style:dt,preset:"header",tx:"welcomeScreen.readyForLaunch"}),m.a.createElement(X,{source:nt,style:ft}),m.a.createElement(Y,{style:gt},"This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship."),m.a.createElement(Y,{style:gt},"For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.")),m.a.createElement(P.a,{style:bt},m.a.createElement(C.a,{style:yt},m.a.createElement(pe,{testID:"next-screen-button",style:mt,textStyle:ht,tx:"welcomeScreen.continue",onPress:function(){return e.navigate("demo")}}))))})),r(20)),vt=r.n(Ot),kt=r(23),Et=r.n(kt),wt=r(259);function xt(e){switch(e.problem){case"CONNECTION_ERROR":case"NETWORK_ERROR":return{kind:"cannot-connect",temporary:!0};case"TIMEOUT_ERROR":return{kind:"timeout",temporary:!0};case"SERVER_ERROR":return{kind:"server"};case"UNKNOWN_ERROR":return{kind:"unknown",temporary:!0};case"CLIENT_ERROR":switch(e.status){case 401:return{kind:"unauthorized"};case 403:return{kind:"forbidden"};case 404:return{kind:"not-found"};default:return{kind:"rejected"}}case"CANCEL_ERROR":return null}return null}var St={url:"http://example.com",timeout:1e4},jt=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St;vt()(this,e),this.config=t}return Et()(e,[{key:"setup",value:function(){this.apisauce=Object(wt.create)({baseURL:this.config.url,timeout:this.config.timeout,headers:{Accept:"application/json"}})}},{key:"getUsers",value:function(){var e,t,r,n,a;return c.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,c.a.awrap(this.apisauce.get("/users"));case 2:if((e=o.sent).ok){o.next=7;break}if(!(t=xt(e))){o.next=7;break}return o.abrupt("return",t);case 7:return r=function(e){return{id:e.id,name:e.name}},o.prev=8,n=e.data,a=n.map(r),o.abrupt("return",{kind:"ok",users:a});case 14:return o.prev=14,o.t0=o.catch(8),o.abrupt("return",{kind:"bad-data"});case 17:case"end":return o.stop()}}),null,this,[[8,14]],Promise)}},{key:"getUser",value:function(e){var t,r,n;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(this.apisauce.get("/users/"+e));case 2:if((t=a.sent).ok){a.next=7;break}if(!(r=xt(t))){a.next=7;break}return a.abrupt("return",r);case 7:return a.prev=7,n={id:t.data.id,name:t.data.name},a.abrupt("return",{kind:"ok",user:n});case 12:return a.prev=12,a.t0=a.catch(7),a.abrupt("return",{kind:"bad-data"});case 15:case"end":return a.stop()}}),null,this,[[7,12]],Promise)}}]),e}();function At(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ct(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?At(Object(r),!0).forEach((function(t){A()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):At(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pt=r(435),Rt=r(436),It={flex:1},Dt={backgroundColor:V.transparent,paddingHorizontal:W[4]},Bt={paddingVertical:W[4],paddingHorizontal:W[4],backgroundColor:V.palette.deepPurple},zt={fontWeight:"bold"},Lt=Ct(Ct({},zt),{},{fontSize:13,letterSpacing:2}),Tt={paddingTop:W[3],paddingBottom:W[5]-1,paddingHorizontal:0},Nt=Ct(Ct({},zt),{},{fontSize:12,lineHeight:15,textAlign:"center",letterSpacing:1.5}),Vt=Ct(Ct({},zt),{},{fontSize:28,lineHeight:38,textAlign:"center",marginBottom:W[5]}),Wt={color:"#BAB6C8",fontSize:15,lineHeight:22,marginBottom:W[4]+W[1]},Ht={marginVertical:W[6],alignSelf:"center",width:180,height:100},Ft={flexDirection:"row",alignItems:"center",alignSelf:"center"},Ut={color:"#BAB6C8",fontSize:15,lineHeight:22},Mt={marginHorizontal:W[2],width:10,height:10,resizeMode:"contain"},Gt={color:"#BAB6C8",fontSize:12,lineHeight:15,marginVertical:W[2]},Kt=H.a.select({ios:"Cmd + D",android:"Cmd/Ctrl + M"}),Qt=(Object(I.a)((function(){var e=Object(R.useNavigation)(),t=m.a.useMemo((function(){return function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.tron.log("Your Friendly tron log message"),console.tron.logImportant("I am important"),console.tron.display({name:"DISPLAY",value:{numbers:1,strings:"strings",booleans:!0,arrays:[1,2,3],objects:{deeper:{deeper:{yay:"\ud83d\udc7e"}}},functionNames:function(){}},preview:"More control with display()",important:!0,image:{uri:"https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4"}}),(e=new jt).setup(),e.getUser("1"),t.next=8,c.a.awrap(E("Cool Name","Boaty McBoatface"));case 8:case"end":return t.stop()}}),null,null,null,Promise)}}),[]);return m.a.createElement(C.a,{testID:"DemoScreen",style:It},m.a.createElement(Ve,null),m.a.createElement(Be,{style:Dt,preset:"scroll",backgroundColor:V.transparent},m.a.createElement(xe,{headerTx:"demoScreen.howTo",leftIcon:"back",onLeftPress:function(){return e.goBack()},style:Tt,titleStyle:Nt}),m.a.createElement(Y,{style:Vt,preset:"header",tx:"demoScreen.title"}),m.a.createElement(Y,{style:Wt,tx:"demoScreen.tagLine"}),m.a.createElement(ne,{text:"Integrated here, Navigation with State, TypeScript, Storybook, Solidarity, and i18n."}),m.a.createElement(ne,{text:"To run Storybook, press "+Kt+' or shake the device to show the developer menu, then select "Toggle Storybook"'}),m.a.createElement(ne,{text:"Load up Reactotron!  You can inspect your app, view the events, interact, and so much more!"}),m.a.createElement(C.a,null,m.a.createElement(pe,{style:Bt,textStyle:Lt,tx:"demoScreen.reactotron",onPress:t}),m.a.createElement(Y,{style:Gt,tx:"demoScreen."+H.a.OS+"ReactotronHint"})),m.a.createElement(pe,{style:Bt,textStyle:Lt,tx:"demoScreen.demoList",onPress:function(){return e.navigate("demoList")}}),m.a.createElement(X,{source:Pt,style:Ht}),m.a.createElement(C.a,{style:Ft},m.a.createElement(Y,{style:Ut,text:"Made with"}),m.a.createElement(X,{source:Rt,style:Mt}),m.a.createElement(Y,{style:Ut,text:"by Infinite Red"}))))})),r(22)),Yt=r.n(Qt),Jt=r(71),Xt=r(30),Zt=Xt.d.model("Character").props({id:Xt.d.identifierNumber,name:Xt.d.maybe(Xt.d.string),status:Xt.d.maybe(Xt.d.string),image:Xt.d.maybe(Xt.d.string)}),_t=function(){function e(t){vt()(this,e),this.api=t}return Et()(e,[{key:"getCharacters",value:function(){var e,t,r;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.a.awrap(this.api.apisauce.get("https://raw.githubusercontent.com/infinitered/ignite/master/data/rick-and-morty.json",{amount:50}));case 3:if((e=n.sent).ok){n.next=8;break}if(!(t=xt(e))){n.next=8;break}return n.abrupt("return",t);case 8:return r=e.data.results,n.abrupt("return",{kind:"ok",characters:r});case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",{kind:"bad-data"});case 16:case"end":return n.stop()}}),null,this,[[0,12]],Promise)}}]),e}(),qt=Xt.d.model("CharacterStore").props({characters:Xt.d.optional(Xt.d.array(Zt),[])}).extend((function(e){return{views:{get environment(){return Object(Xt.a)(e)}}}})).actions((function(e){return{saveCharacters:function(t){e.characters.replace(t)}}})).actions((function(e){return{getCharacters:function(){var t,r;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new _t(e.environment.api),n.next=3,c.a.awrap(t.getCharacters());case 3:"ok"===(r=n.sent).kind&&e.saveCharacters(r.characters);case 5:case"end":return n.stop()}}),null,null,null,Promise)}}})),$t=Xt.d.model("RootStore").props({characterStore:Xt.d.optional(qt,{})}),er=Object(g.createContext)({}),tr=er.Provider,rr=function(){function e(){vt()(this,e),this.api=new jt}return Et()(e,[{key:"setup",value:function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:return e.next=5,c.a.awrap(this.api.setup());case 5:case"end":return e.stop()}}),null,this,null,Promise)}}]),e}();function nr(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new rr,t.next=3,c.a.awrap(e.setup());case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),null,null,null,Promise)}function ar(){var e,t,r;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(nr());case 2:return r=n.sent,n.prev=3,n.next=6,c.a.awrap(k("root"));case 6:if(n.t0=n.sent,n.t0){n.next=9;break}n.t0={};case 9:t=n.t0,e=$t.create(t,r),n.next=17;break;case 13:n.prev=13,n.t1=n.catch(3),e=$t.create({},r);case 17:return Object(Xt.c)(e,(function(e){return E("root",e)})),n.abrupt("return",e);case 20:case"end":return n.stop()}}),null,null,[[3,13]],Promise)}var or={flex:1},ir={backgroundColor:V.transparent},cr={paddingBottom:W[5]-1,paddingHorizontal:W[4],paddingTop:W[3]},lr={fontSize:12,fontWeight:"bold",letterSpacing:1.5,lineHeight:15,textAlign:"center"},sr={alignItems:"center",flexDirection:"row",padding:10},ur={borderRadius:35,height:65,width:65},dr={marginLeft:10},pr={paddingHorizontal:W[4]},fr=(Object(I.a)((function(){var e=Object(R.useNavigation)(),t=Object(g.useContext)(er).characterStore,r=t.characters;return Object(g.useEffect)((function(){c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(t.getCharacters());case 2:case"end":return e.stop()}}),null,null,null,Promise)}),[]),m.a.createElement(C.a,{testID:"DemoListScreen",style:or},m.a.createElement(Ve,null),m.a.createElement(Be,{style:ir,preset:"fixed",backgroundColor:V.transparent},m.a.createElement(xe,{headerTx:"demoListScreen.title",leftIcon:"back",onLeftPress:function(){return e.goBack()},style:cr,titleStyle:lr}),m.a.createElement(Jt.a,{contentContainerStyle:pr,data:Yt()(r),keyExtractor:function(e){return String(e.id)},renderItem:function(e){var t=e.item;return m.a.createElement(C.a,{style:sr},m.a.createElement(X,{source:{uri:t.image},style:ur}),m.a.createElement(Y,{style:dr},t.name," (",t.status,")"))}})))})),r(162)),gr=r.n(fr),mr={backgroundColor:V.palette.black,flex:1},hr=Object(I.a)((function(){var e=Object(g.useState)({}),t=o()(e,2),r=t[0],n=t[1],a=Object(g.useState)(),i=o()(a,2),l=i[0],s=i[1],u=Object(g.useState)([]),d=o()(u,2),p=d[0],f=d[1],h={charge:-30,collision:!1,linkStrength:1,linkIts:1,collapse:!1,threedim:!1,particles:2,linkOpacity:1,linkWidth:1,particleWidth:1,nodeRel:1},b=function(){var e,t;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.a.awrap(y.a.getItem("@physics"));case 3:if(null===(e=r.sent)){r.next=14;break}if(t=JSON.parse(e),Object.keys(t).length!==Object.keys(h).length){r.next=10;break}return r.abrupt("return",t);case 10:return r.abrupt("return",h);case 11:r.next=15;break;case 14:return r.abrupt("return",h);case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(0),console.log(r.t0);case 20:case"end":return r.stop()}}),null,null,[[0,17]],Promise)};Object(g.useEffect)((function(){e&&clearTimeout(e);var e=setTimeout((function(){!function(e){var t;c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=JSON.stringify(e),r.next=4,c.a.awrap(y.a.mergeItem("@physics",t));case 4:console.log("Writing "+t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),null,null,[[0,7]],Promise)}(r);var e=b();console.log(e)}),1e3);return function(){return clearTimeout(e)}}),[r]);return Object(g.useEffect)((function(){b().then((function(e){return n(e)})),gr.a.get("http://localhost:35901/graph").then((function(e){var t=function(e){var t=[];return e.nodes.forEach((function(e){return t.push(e.id)})),f(t),t}(e.data);f(t),console.log(p);var r=function(e,t){var r=[];return e.links.forEach((function(e,n){for(n=0;n<=t.length;n++)if(e.target===t[n]){r.push(e);break}})),console.log(r),e.links=r,e}(e.data,t);console.log(r),s(r)})).catch((function(e){console.log(e),console.log("Couldn't get data.")}))}),[]),l?m.a.createElement(Be,{style:mr,preset:"scroll"},m.a.createElement($e,{physics:r,setPhysics:n}),m.a.createElement(Me,{physics:r,gData:l,nodeIds:p})):null})),br=Object(S.a)();function yr(){return m.a.createElement(br.Navigator,{screenOptions:{cardStyle:{backgroundColor:"transparent"},headerShown:!1}},m.a.createElement(br.Screen,{name:"graph",component:hr}))}var Or=["welcome"],vr=function(e){return Or.includes(e)},kr=r(219),Er=Object(S.a)(),wr=function(){return m.a.createElement(Er.Navigator,{screenOptions:{cardStyle:{backgroundColor:V.palette.deepPurple},headerShown:!1}},m.a.createElement(Er.Screen,{name:"mainStack",component:yr,options:{headerShown:!1}}))},xr=m.a.forwardRef((function(e,t){return m.a.createElement(kr.a,B()({},e,{ref:t}),m.a.createElement(wr,null))}));xr.displayName="RootNavigator";var Sr=r(79),jr={navigate:function(e){},goBack:function(){},resetRoot:function(e){},getRootState:function(){return{}}};function Ar(e){var t=e.routes[e.index];return t.state?Ar(t.state):t.name}r(448);var Cr=function(e){var t=Object(g.useState)(null),r=o()(t,2),n=r[0],a=(r[1],Object(g.useState)({})),i=o()(a,2),c=i[0];i[1];return Object(g.useEffect)((function(){0}),[]),Object(g.useEffect)((function(){0}),[window.location.search]),null!=c&&c.storybook?n?m.a.createElement(n,null):null:e.children},Pr=r(163);Object(Pr.enableScreens)();var Rr=function(){var e=Object(g.useRef)(null),t=Object(g.useState)(void 0),r=o()(t,2),a=r[0],i=r[1];!function(e){var t=function(t){jr[t]=function(){var r;if(e.current)return(r=e.current)[t].apply(r,arguments)}};for(var r in jr)t(r)}(e),function(e,t){var r=Object(g.useRef)(t);Object(g.useEffect)((function(){r.current=t}),[t]),Object(g.useEffect)((function(){var t=function(){var t=e.current;if(null==t)return!1;var n=Ar(t.getRootState());return!r.current(n)&&(!!t.canGoBack()&&(t.goBack(),!0))};return Sr.a.addEventListener("hardwareBackPress",t),function(){return Sr.a.removeEventListener("hardwareBackPress",t)}}),[e])}(e,vr);var l=function(e,t){var r=Object(g.useState)(),n=o()(r,2),a=n[0],i=n[1],l=Object(g.useState)(!0),s=o()(l,2),u=s[0],d=s[1],p=Object(g.useRef)(),f=function(){var r;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.a.awrap(e.load(t));case 3:(r=n.sent)&&i(r);case 5:return n.prev=5,d(!1),n.finish(5);case 8:case"end":return n.stop()}}),null,null,[[0,,5,8]],Promise)};return Object(g.useEffect)((function(){u&&f()}),[u]),{onNavigationStateChange:function(r){p.current;var n=Ar(r);p.current=n,e.save(t,r)},restoreState:f,initialNavigationState:a}}(n,"NAVIGATION_STATE"),s=l.initialNavigationState,u=l.onNavigationStateChange;return Object(g.useEffect)((function(){c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),null,null,null,Promise));case 2:ar().then(i);case 3:case"end":return e.stop()}}),null,null,null,Promise)}),[]),a?m.a.createElement(Cr,null,m.a.createElement(tr,{value:a},m.a.createElement(h.b,{initialMetrics:b.a},m.a.createElement(xr,{ref:e,initialState:s,onStateChange:u})))):null},Ir=r(263);Object(Ir.a)(Rr);t.a=Rr},283:function(e,t,r){r(284),e.exports=r(285)},302:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAQNJREFUKBWdk8EOwUAQhme2InFy9yB1cSTReAIOPIeEEyKObs4knkBS2pNbK57A3cETcKBjtmKzJd0mO5fO9p//63Q6BciJ0D83wn3cyZHV7ZLKtISNPUqeawB8EFEVEV+anElF5sSHj5nYDI4AmpnM0pvpQDcjinHTc+eyyBT4FX/NLc+dfjXTNQXYmiUYAz/uAtGGc35nsSOgwPREXeP5RBj60ZUIatzKnQAqekFRzp5biSlL/lQLbqaMCAc2XYqMSkdx/MzAP42IkgkLLxTYb7XrW1VUkKQAWRNaQhTAFpIB2ED+VlkukNxChjmQ0IoH7EhwXvwBZGEKEThAAcOif+ENKNR3psyHynYAAAAASUVORK5CYII="},303:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAIZJREFUGBljZACC/w4OMgy/fnUxMDI6gPgM//8fYGBjK2M8cOAJI1TyIlBYCCyJIN4BFekzgXWCJBkZtwMFZMEYxAaJAU1l/G9t/QxopCRIAmQkyACoqY+Bmp4zIUzEzmICOwgk9/v3LJBOsG4gG6wc6FjCjgTbC3QtUMdykJ1gDGIDxUByAK6uPrQ53B7lAAAAAElFTkSuQmCC"},308:function(e,t,r){e.exports=r.p+"static/media/bg.27c56310.png"},368:function(e,t,r){e.exports=r.p+"static/media/bowser.4ba9aedf.png"},435:function(e,t,r){e.exports=r.p+"static/media/logo-ignite.5c0bc1b0.png"},436:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAIZJREFUGBljYACC////5wHxIyB+AsRFQNwPxG+A+BIQ+4DUgBTFADE+8Bco6QFSeB2fKqjcASagofxgo/ET7CCFq/CrAcsuAVktAMTX8Fi/EyjHAlYOZMgD8X0gRgfHgAK8KDYCBaSBGNnk3UA+N4oiGAcoIQLEZ4F4HRCzw8Sx0kAFzNgkAGi11d75H7oeAAAAAElFTkSuQmCC"}},[[283,1,2]]]);
//# sourceMappingURL=app.767fd55b.chunk.js.map