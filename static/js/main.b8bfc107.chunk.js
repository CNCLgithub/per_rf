(this.webpackJsonpper_rf=this.webpackJsonpper_rf||[]).push([[0],{18:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(50),r=a(35),i=a(36);function o(t,a){return new Promise((function(o,s){var c=r.stringify({encrypted_metadata:t,data:a}),l={hostname:i.awsLambda.saveTaskData.host,port:443,path:i.awsLambda.saveTaskData.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(c)}},d=n.request(l,(function(e){e.setEncoding("utf8"),e.on("data",(function(){})),e.on("end",o)}));d.on("error",(function(e){i.debug&&(console.log("ERROR:"),console.log(e)),s(e)})),d.write(c),d.end()}))}function s(t){return new Promise((function(a,o){var s=r.stringify({encrypted_metadata:t}),c={hostname:i.awsLambda.fetchLink.host,port:443,path:i.awsLambda.fetchLink.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(s)}},l=n.request(c,(function(e){e.setEncoding("utf8");var t="";e.on("data",(function(e){t+=e})),e.on("end",(function(){return a(t)}))}));l.on("error",(function(e){i.debug&&(console.log("ERROR:"),console.log(e)),o(e)})),l.write(s),l.end()}))}}).call(this,a(6).Buffer)},36:function(e){e.exports=JSON.parse('{"taskVersion":"0.1.0","taskName":"per_rf","debug":false,"awsLambda":{"saveTaskData":{"host":"de8cnjde61.execute-api.us-east-2.amazonaws.com","path":"/default/saveTaskData"},"fetchLink":{"host":"3pnzb6n9vf.execute-api.us-east-2.amazonaws.com","path":"/default/fetchLink"}}}')},42:function(e,t,a){e.exports=a(88)},54:function(e,t){},56:function(e,t){},68:function(e,t,a){},69:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(38),o=a.n(i),s=a(12),c=a(13),l=a(16),d=a(14),u=a(17),p=a(89),f=a(18),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),m=(a(68),a(69),a(36)),v=a(70),b=a(71);a(83);var y=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(l.a)(this,Object(d.a)(t).call(this,e));var n=b.parse(a.props.location.search,{ignoreQueryPrefix:!0});return a.state={encryptedMetadata:n.id,sendingData:!1,link:void 0},a.surveyUrl=n.survey_url,console.log("/per_rf"),v.isUndefined(a.state.encryptedMetadata)||a.addScript("/per_rf/lib/lab.js",(function(){a.addScript("/per_rf/trial_setup/practice_trials.js",(function(){a.addScript("/per_rf/trial_setup/experiment_trials.js",(function(){a.addScript("/per_rf/script.js")}))}))})),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"packageDataForExport",value:function(e){var t={};return t.encrypted_metadata=this.state.encryptedMetadata,t.taskName=m.taskName,t.taskVersion=m.taskVersion,t.data=this.processLabJsData(e),JSON.stringify(t)}},{key:"processLabJsData",value:function(e){var t=[];t.push(e[0]);var a=e[e.length-1].finalData;return t.push(a),t}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("message",(function(t){if("labjs.data"===t.data.type){var a=JSON.parse(t.data.json);if((m.debug||h)&&(console.log(a),console.log(e.packageDataForExport(a))),h)return void(e.surveyUrl&&e.setState({link:e.surveyUrl}));e.setState({sendingData:!0}),Object(f.b)(e.state.encryptedMetadata,e.packageDataForExport(a)).then((function(){e.surveyUrl?e.setState({link:e.surveyUrl}):Object(f.a)(e.state.encryptedMetadata).then((function(t){return e.setState({link:t})}))}))}}))}},{key:"addScript",value:function(e,t){var a=document.createElement("script");a.src=e,a.type="application/javascript",a.onreadystatechange=t,a.onload=t,document.head.appendChild(a)}},{key:"render",value:function(){return v.isUndefined(this.state.encryptedMetadata)?r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong. Please try again.")):(v.isUndefined(this.state.link)||window.location.assign(this.state.link),r.a.createElement("div",null,r.a.createElement("div",{id:"experiment",className:"container fullscreen","data-labjs-section":"main",style:{visibility:this.state.sendingData?"hidden":"visible"}},r.a.createElement("main",{className:"content-vertical-center content-horizontal-center"},r.a.createElement("div",null,r.a.createElement("h2",null,"Loading Experiment"),r.a.createElement("p",null,"The experiment is loading and should start in a few seconds")))),r.a.createElement("div",{className:"center",style:{visibility:this.state.sendingData?"visible":"hidden"}},r.a.createElement("h2",null,"Saving data... do not exit window")),r.a.createElement("footer",{className:"content-vertical-center content-horizontal-center"})))}}]),t}(n.Component),g=function(){return r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:y}))},w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}]),t}(n.Component),k=a(4);a.d(t,"history",(function(){return E}));var E=Object(k.a)();o.a.render(r.a.createElement(p.b,{history:E,basename:"/per_rf"},r.a.createElement(w,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b8bfc107.chunk.js.map