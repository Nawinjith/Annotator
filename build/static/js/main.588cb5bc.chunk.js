(this["webpackJsonpfrontend-ioneglobe"]=this["webpackJsonpfrontend-ioneglobe"]||[]).push([[0],{122:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(58),i=c.n(s),l=c(13),r=(c(68),c(2)),o=c(19),d=c.n(o),j=c(29),b=c(59),u=c.n(b),h="http://localhost:4000/api/",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){return!0};return u()({baseURL:h,method:t,url:e,params:n,headers:a,data:c,validateStatus:s})},f=c(60),x=c(61),v=c(62),m=function(){function e(){Object(x.a)(this,e),this.label=[{name:"Real",value:"0"},{name:"Fake",value:"1"},{name:"Not_Assigned",value:"-1"}]}return Object(v.a)(e,[{key:"getNews",value:function(e,t){O("news/getnews","GET").then((function(c){if(c&&c.data&&c.data.data&&c.data.data.length>0){var n,a={Tweetid:"",label:"",ID:""},s=[],i=Object(f.a)(c.data.data);try{for(i.s();!(n=i.n()).done;){n.value;s.push(a)}}catch(l){i.e(l)}finally{i.f()}e(c.data.data.map((function(e){return{text:e.Text,DateTime:e.Datetime,tweetID:e.Tweet_Id,label:e.label,id:e._id}}))),t(s)}})).catch((function(){}))}},{key:"getLabels",value:function(e){e(this.label.map((function(e){return{name:e.name,value:e.value}})))}},{key:"addLabels",value:function(e){O("news/addlabels","POST",e).then((function(e){e.data.status?console.log("Labelling Successful"):console.log("Labelling Unsuccessful")})).catch((function(){console.log("Something Went Wrong")}))}}]),e}(),p=c(1),g=function(){Object(n.useEffect)((function(){O("".concat(h,"count"))}),[]);var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),o=r[0],b=r[1],u=Object(n.useState)(void 0),f=Object(l.a)(u,2),x=f[0],v=f[1],g=Object(n.useState)([]),N=Object(l.a)(g,2),w=(N[0],N[1]),y=Object(n.useState)({Tweetid:"",label:""}),S=Object(l.a)(y,2);S[0],S[1];Object(n.useEffect)((function(){v(new m)}),[]),Object(n.useEffect)((function(){x&&x.getNews(s,w)}),[x]),Object(n.useEffect)((function(){}),[c]),Object(n.useEffect)((function(){x&&x.getLabels(b)}),[x]);var T=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.getNews(s);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(d.a.mark((function e(t,c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={id:c,label:t},x.addLabels(n);case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)("div",{className:"container-fluid home-division-1",children:Object(p.jsx)("div",{className:"row ",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("div",{className:"row justify-content-center heading",children:Object(p.jsx)("h3",{children:" NEWS ANNOTATOR"})}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsx)("div",{className:"card card1",children:Object(p.jsxs)("table",{className:"table table-hover table1",children:[Object(p.jsx)("thead",{className:"thead-dark justify-content-center",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-col",children:"News Text"}),Object(p.jsx)("th",{className:"date-col",children:"Posted Date"}),Object(p.jsx)("th",{children:"Label"})]})}),Object(p.jsx)("tbody",{children:c.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{align:"right",children:e.text}),Object(p.jsx)("td",{align:"right",children:e.DateTime}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{id:"select-box",onChange:function(t){return k(t.target.value,e.id)},className:"form-control",children:[Object(p.jsx)("option",{className:"select-option",value:"",children:"Select Label"},t),o.map((function(e,t){return Object(p.jsx)("option",{className:"select-option",value:e.value,children:e.name},t)}))]})})]},e.id)}))})]})})}),Object(p.jsx)("div",{className:"col-md-4 ",children:Object(p.jsxs)("div",{className:"intro",children:[Object(p.jsx)("div",{className:"row ",children:Object(p.jsx)("button",{type:"button",className:"btn1",onClick:T,children:"Load More"})}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"card card2",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"intro-head",children:"INSTRUCTIONS"})}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsxs)("div",{className:"intro-content",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("p",{children:"Select the most appropriate label for the news text given using the dropdown"})}),Object(p.jsx)("li",{children:Object(p.jsx)("p",{children:"Take the Posted date into consideration when deciding your selection"})}),Object(p.jsx)("li",{children:Object(p.jsx)("p",{children:'Mark "Not Assigned" in case of content is not a news or undecidable'})})]})]})})]})})})]})})]})]})})})})},N=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(r.c,{children:Object(p.jsx)(r.a,{exact:!0,path:"/",component:g})})})},w=(c(92),function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2);t[0],t[1],Object(r.f)();return console.warn=function(){},Object(p.jsx)(N,{})}),y=c(28);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(y.a,{children:Object(p.jsx)(w,{})})}),document.getElementById("root"))},68:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.588cb5bc.chunk.js.map