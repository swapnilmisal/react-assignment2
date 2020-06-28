(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,t,n){e.exports=n(78)},71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),i=(n(71),n(42)),u=n(10),o=n(19),s=n(22),m=n(112),d=n(115),f=Object(m.a)(function(e){return{root:{maxWidth:600},snackbar:{margin:e.spacing(1)}}});var p=Object(o.b)(function(e){return{}},function(e){return{add:function(t){return e(t)}}})(function(e){var t=f(),n=new WebSocket("wss://ws.blockchain.info/inv"),c=Object(a.useState)("Connecting..."),l=Object(s.a)(c,2),i=l[0],u=l[1];return Object(a.useEffect)(function(){var t;return fetch("https://api.cryptonator.com/api/ticker/btc-usd").then(function(e){return e.json()}).then(function(e){return e.ticker.price}).catch(console.log).then(function(e){return t=e}),n.addEventListener("close",function(){return u("Closed")}),n.addEventListener("open",function(){return u("Connected")}),n.onopen=function(){return function(){var e=JSON.stringify({op:"unconfirmed_sub"});n.send(e)}()},n.onmessage=function(n){return function(t,n){var a=JSON.parse(t.data),r=(a=a.x).out.map(function(e){var t=e.value/Math.pow(10,8);return{hash:a.hash,time:a.time,usd:t*n,btc:t}});(r=r.filter(function(e){return e.btc>=1})).length>0&&e.add({data:r,type:"ADD"})}(n,t)},function(){return function(){var e=JSON.stringify({op:"unconfirmed_unsub"});n.send(e)}()}}),r.a.createElement("div",null,r.a.createElement(d.a,{className:t.snackbar,message:"Status: ".concat(i)}))}),h=n(117),v=n(118),b=n(55),g=n.n(b),E=n(56),y=n.n(E),j=Object(m.a)({root:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyItems:"center",backgroundColor:"pink",padding:"1em .5em",margin:"1em .5em"}});function O(){var e=j(),t=r.a.useState(0),n=Object(s.a)(t,2),a=n[0],c=n[1];function l(){return a?r.a.createElement(u.a,{to:"/search"}):r.a.createElement(u.a,{to:"/"})}return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(h.a,{value:a,onChange:function(e,t){c(t)},showLabels:!0,className:e.root},r.a.createElement(v.a,{label:"Chart",icon:r.a.createElement(g.a,null)}),r.a.createElement(v.a,{label:"Search",icon:r.a.createElement(y.a,null)})))}var w=n(25),C=n(57);var k=Object(o.b)(function(e){return{state:e}})(function(e){var t=e.state.map(function(e){return[new Date(e.time),e.usd]});return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(C.a,{chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["y","$"]].concat(Object(w.a)(t)),options:{hAxis:{title:"Time"},vAxis:{title:"Value $"}},rootProps:{"data-testid":"1"}}))}),x=n(120),S=n(119),N=[{value:"usd",label:"$"},{value:"btc",label:"\u0e3f"}],T=Object(m.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(.5),marginRight:e.spacing(.5)},dense:{marginTop:e.spacing(2)},menu:{width:200}}});var D=Object(o.b)(function(e){return{state:e}})(function(e){var t=Object(a.useState)("usd"),n=Object(s.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(0),u=Object(s.a)(i,2),o=u[0],m=u[1],d=Object(a.useState)([]),f=Object(s.a)(d,2),p=f[0],h=f[1],v=T();return Object(a.useEffect)(function(){var t=Object(w.a)(e.state);if(!isNaN(o)&&e.state&&e.state.length){if(t&&t.length>2){for(var n=[],a=function(e){var a=t.map(function(e){return e[c]}).reduce(function(e,t){return Math.abs(t-o)<Math.abs(e-o)?t:e});n.push(t.find(function(e){return e[c]===a})),t=t.filter(function(e){return e[c]!==a})},r=0;r<3;r++)a();h([].concat(n))}}else h(null)},[Object(w.a)(e.state),o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"1em 1em",display:"grid",gridTemplateColumns:"1fr 1fr"}},r.a.createElement(S.a,{id:"outlined-search",label:"Search field",type:"search",className:v.textField,onChange:function(e){return m(e.target.value)},margin:"normal",variant:"outlined"}),r.a.createElement(S.a,{id:"outlined-select-currency",select:!0,label:"Select",className:v.textField,value:c,onChange:function(e){return l(e.target.value)},SelectProps:{MenuProps:{className:v.menu}},helperText:"Please select your currency",margin:"normal",variant:"outlined"},N.map(function(e){return r.a.createElement(x.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement("div",null,p&&p.length>0&&p.map(function(e){return r.a.createElement("div",{key:e.usd,style:{display:"grid",padding:".5em",margin:".20em",gridTemplateColumns:"2fr 1fr 1fr",alignContent:"space-around",backgroundColor:"pink",justifyContent:"space-evenly",alignItems:"flex-start"}},r.a.createElement("div",null,r.a.createElement("h3",null,"Hash:"),r.a.createElement("p",null,e.hash)),r.a.createElement("div",null,r.a.createElement("h3",null,"USD: "),r.a.createElement("p",null,e.usd)),r.a.createElement("div",null,r.a.createElement("h3",null," BTC: "),r.a.createElement("p",null,e.btc)))})))});var L=n(37),J=Object(L.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":var n=Object(w.a)(e),a=t.data.length;return n.length+a<=10?(t.data.forEach(function(e){n.push(e)}),n.sort(function(e,t){return e.time-t.time})):(n=n.slice(a),t.data.forEach(function(e){n.push(e)}),n.sort(function(e,t){return e.time-t.time}));default:return e}});var W=function(){return r.a.createElement(o.a,{store:J},r.a.createElement(i.a,null,r.a.createElement(p,null),r.a.createElement(O,null),r.a.createElement(u.b,{exact:!0,path:"/",component:k}),r.a.createElement(u.b,{path:"/search",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.5665835d.chunk.js.map