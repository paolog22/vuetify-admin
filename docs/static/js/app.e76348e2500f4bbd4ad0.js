webpackJsonp([6],{0:function(e,o){},L1UI:function(e,o){},NHnr:function(e,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=s("7+uW"),n={render:function(){var e=this.$createElement,o=this._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("router-view")],1)},staticRenderFns:[]},i=s("VU/8")({name:"app",data:function(){return{}},props:{},components:{},methods:{},mounted:function(){}},n,!1,function(e){s("L1UI")},null,null).exports,a=s("/ocq"),r=s("3EgV"),A=s.n(r),l=(s("MU8w"),s("NYxO")),c=s("mvHQ"),j=s.n(c),u={left_menu:function(e,o){"open"==o?e.left_open=!0:"close"==o?e.left_open=!1:"toggle"==o&&(e.left_open=!e.left_open),e.left_open?document.getElementsByTagName("body")[0].classList.remove("left-hidden"):document.getElementsByTagName("body")[0].classList.add("left-hidden")},right_menu:function(e,o){"open"==o?e.right_open=!0:"close"==o?e.right_open=!1:"toggle"==o&&(e.right_open=!e.left_open),e.right_open?document.getElementsByTagName("body")[0].classList.remove("left-hidden"):document.getElementsByTagName("body")[0].classList.add("left-hidden")},routeChange:function(e,o){"start"==o?e.preloader=!0:"end"==o&&(e.preloader=!1)},addevent:function(e,o){var s=e.cal_events[e.cal_events.length-1]?e.cal_events[e.cal_events.length-1].id+1:0;e.cal_events.push({id:s,title:o.evtname,start:o.date.from,end:o.date.to})},editevent:function(e,o){var s=JSON.parse(j()(o)),t="";e.cal_events.forEach(function(e,o){e.id==s.id&&(t=o)}),e.cal_events[t].title=s.title,e.cal_events[t].start=s.start,e.cal_events[t].end=s.end},removeevent:function(e,o){var s="";e.cal_events.forEach(function(e,t){e.id==o.evtid&&(s=t)}),e.cal_events.splice(s,1)},userData:function(e){e.roles=JSON.parse(localStorage.getItem("roles")),e.permissions=JSON.parse(localStorage.getItem("permissions")),e.user.name=localStorage.getItem("name")}};t.a.use(l.a);var K=new l.a.Store({state:{left_open:!1,right_open:!1,preloader:!0,isMobile:window.innerWidth<=992,app_name:"Vuetify Admin",api:{url:"http://api.example.com",client_id:2,client_secret:"xxxxxxxx"},user:{name:"Ayesha",picture:s("jjek"),job:"Project Manager"},cal_events:[{id:0,title:"Office",start:"2017-04-30",end:"2017-04-30"},{id:1,title:"Holidays",start:"2017-04-01",end:"2017-04-01"}]},mutations:u}),d=s("mtWM"),p=s.n(d),m=(s("QmSG"),s("HSQo"),[{path:"/vuetify-admin/",name:"HelloWorld",component:function(e){return s.e(0).then(function(){var o=[s("cwXR")];e.apply(null,o)}.bind(this)).catch(s.oe)},children:[{path:"",name:"Home",component:function(e){return s.e(4).then(function(){var o=[s("lO7g")];e.apply(null,o)}.bind(this)).catch(s.oe)},meta:{title:"Dashboard",forAuth:!0}}]},{path:"/vuetify-admin/login",name:"Login",component:function(e){return s.e(2).then(function(){var o=[s("xJsL")];e.apply(null,o)}.bind(this)).catch(s.oe)}},{path:"/vuetify-admin/forgot-password",name:"ForgetPassword",component:function(e){return s.e(3).then(function(){var o=[s("qGhM")];e.apply(null,o)}.bind(this)).catch(s.oe)}},{path:"/vuetify-admin/reset-password",name:"ResetPassword",component:function(e){return s.e(1).then(function(){var o=[s("yiqP")];e.apply(null,o)}.bind(this)).catch(s.oe)}}]);s.d(o,"router",function(){return h}),p.a.defaults.baseURL=K.state.api.url,p.a.defaults.headers.common={"X-Requested-With":"XMLHttpRequest",Authorization:"Bearer "+localStorage.getItem("access_token")},t.a.use(A.a),t.a.use(a.a),t.a.use(s("mjDs")),t.a.config.productionTip=!1;var h=new a.a({routes:m,linkActiveClass:"active",mode:"history"});new t.a({el:"#app",router:h,store:K,template:"<App/>",components:{App:i}})},QmSG:function(e,o,s){"use strict";o.a={api:{url:"http://api.example.com",client_id:2,client_secret:"xxxxxxxx"},app:{name:"Your App Name"},build:{root:"/"}}},jjek:function(e,o){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACCAIIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDh6KKK/PD7UKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorWsfCuqajpP9qQ2w/s77bFp32qSRI4xPIrMiEsRj5UYk9AAMkZGb2p/DrxFo9hqN9dacUtLCVIriZZo3UFgjKVKsd6kSRneuV/eJz865vkla9ieaN7XOborWsfCuqajpP8AakNsP7O+2xad9qkkSOMTyKzIhLEY+VGJPQADJGRm9qfw68RaPYajfXWnFLSwlSK4mWaN1BYIylSrHepEkZ3rlf3ic/OuTkla9g5o3tc5uiiioKCiiigAooooAKKKKACiiigAooooAKKKKAOk0fXbCHwdqWh3n2mM3urWF4ZoI1fZDDHdJJwWXL/6QhUcA4OSOM+lXnxw0e4tr+COLU7Z5byFobuCGJGWINpzSSiMPtjcHTVKRKdiiUqCAgz4jRW0asoqy/r+rmUqcZO7PS/GXxE0bxbceKFEd/aWuta1p2oRr5MbG1t4YbmN4lAYA7PPRYxwCqclelafi34xaTrnhfxFplvaXYnvnEdvK8ccaGMjT97sisRGd2nLtjTKqJSoICAHyGin7aevn/wf8w9lHTy/r9AooorA1CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z"},uslO:function(e,o,s){function t(e){return s(n(e))}function n(e){var o=i[e];if(!(o+1))throw new Error("Cannot find module '"+e+"'.");return o}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};t.keys=function(){return Object.keys(i)},t.resolve=n,e.exports=t,t.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.e76348e2500f4bbd4ad0.js.map