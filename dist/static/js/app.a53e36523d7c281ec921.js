webpackJsonp([1],{"1uuo":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},i,!1,function(t){e("s347")},null,null).exports,d=e("/ocq"),n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var r=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){e("1uuo")},"data-v-d8ec41bc",null).exports,l=e("mvHQ"),c=e.n(l),m=e("woOf"),v=e.n(m),f={name:"todolist",data:function(){var t={editing:!1,completed:!1,started:!1,title:null,date:null,time:null,file:{},comment:null};return{defaultData:t,tab:"myTasks",add:!1,edit:null,addData:v()({},t),todoData:[]}},mounted:function(){this.todoData=JSON.parse(sessionStorage.getItem("todoData"))||[]},computed:{datas:function(){return"myTasks"===this.tab?this.todoData:"inProgress"===this.tab?this.inProgressData:"completed"===this.tab?this.completedData:void 0},inProgressData:function(){return this.todoData.filter(function(t){return!t.completed})},completedData:function(){return this.todoData.filter(function(t){return t.completed})}},methods:{selectTab:function(t){this.tab=t},toggleForm:function(t,a){"add"===t?this.add=a:this.edit=t},toggleCompleted:function(t,a){this.todoData[a].completed=t.target.checked},toggleStared:function(t,a){this.todoData[a].started=t.target.checked,this.todoData.sort(function(t,a){return t.started>a.started?-1:t.started<a.started?1:0})},fileUpdate:function(t,a){var e={fileName:t.target.files[0].name,uploadTime:t.target.files[0].lastModifiedDate.toISOString().slice(0,10)};void 0===a?this.addData.file=v()({},e):this.todoData[a].file=v()({},e)},addTodo:function(){this.todoData.push(this.addData),this.addData=v()({},this.defaultData),sessionStorage.setItem("todoData",c()(this.todoData)),this.toggleForm("add",!1)},saveEdit:function(t){sessionStorage.setItem("todoData",c()(this.todoData)),this.toggleForm(null,!1)},cancelEdit:function(t){var a=JSON.parse(sessionStorage.getItem("todoData"))[t],e=a.title,s=a.date,i=a.time,o=a.file,d=a.comment;this.todoData[t].title=e,this.todoData[t].date=s,this.todoData[t].time=i,this.todoData[t].file=o,this.todoData[t].comment=d,this.toggleForm(null,!1)}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"header-item",class:{active:"myTasks"===t.tab},on:{click:function(a){t.selectTab("myTasks")}}},[t._v("My Tasks")]),t._v(" "),e("div",{staticClass:"header-item",class:{active:"inProgress"===t.tab},on:{click:function(a){t.selectTab("inProgress")}}},[t._v("In Progress")]),t._v(" "),e("div",{staticClass:"header-item",class:{active:"completed"===t.tab},on:{click:function(a){t.selectTab("completed")}}},[t._v("Completed")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{class:["task-add",{"task-add--open":t.add}]},[t.add?t._e():e("span",{staticClass:"task-add-text",on:{click:function(a){t.toggleForm("add",!0)}}},[t._v("+ Add Task")]),t._v(" "),t.add?e("form",{staticClass:"task-form"},[e("div",{staticClass:"task-form-head",class:{started:t.addData.started}},[e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.completed,expression:"addData.completed"}]},[e("i",{staticClass:"task-form-checkbox--completed fas fa-check-square"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.addData.completed,expression:"!addData.completed"}]},[e("i",{staticClass:"task-form-checkbox--uncompleted fas fa-square"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.completed,expression:"addData.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addData.completed)?t._i(t.addData.completed,null)>-1:t.addData.completed},on:{change:function(a){var e=t.addData.completed,s=a.target,i=!!s.checked;if(Array.isArray(e)){var o=t._i(e,null);s.checked?o<0&&t.$set(t.addData,"completed",e.concat([null])):o>-1&&t.$set(t.addData,"completed",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.addData,"completed",i)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!t.addData.completed,expression:"!addData.completed"},{name:"model",rawName:"v-model",value:t.addData.title,expression:"addData.title"}],staticClass:"task-form-title",class:{completed:t.add.completed},attrs:{type:"text",placeholder:"Type Something Here...",readonly:!t.add},domProps:{value:t.addData.title},on:{input:function(a){a.target.composing||t.$set(t.addData,"title",a.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.completed,expression:"addData.completed"}],staticClass:"task-form-title completed"},[t._v(t._s(t.addData.title||"Type Something Here..."))]),t._v(" "),e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.started,expression:"addData.started"}]},[e("i",{staticClass:"task-form-checkbox--started fas fa-star"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.addData.started,expression:"!addData.started"}]},[e("i",{staticClass:"task-form-checkbox--unstarted far fa-star"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.started,expression:"addData.started"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addData.started)?t._i(t.addData.started,null)>-1:t.addData.started},on:{change:function(a){var e=t.addData.started,s=a.target,i=!!s.checked;if(Array.isArray(e)){var o=t._i(e,null);s.checked?o<0&&t.$set(t.addData,"started",e.concat([null])):o>-1&&t.$set(t.addData,"started",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.addData,"started",i)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.add,expression:"add"}],on:{click:function(a){t.toggleForm("add",!1)}}},[e("i",{staticClass:"task-form-edit--editing fas fa-pencil-alt"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.add,expression:"!add"}],on:{click:function(a){t.toggleForm("add",!0)}}},[e("i",{staticClass:"task-form-edit--unediting fas fa-pencil-alt"})])]),t._v(" "),e("div",{staticClass:"task-form-body"},[e("div",{staticClass:"task-form-item"},[t._m(0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.date,expression:"addData.date"}],attrs:{type:"date"},domProps:{value:t.addData.date},on:{input:function(a){a.target.composing||t.$set(t.addData,"date",a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.time,expression:"addData.time"}],attrs:{type:"time"},domProps:{value:t.addData.time},on:{input:function(a){a.target.composing||t.$set(t.addData,"time",a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(1),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-file"},[t.addData.file.fileName?e("div",{staticClass:"task-form-file-info"},[t._v("\n                  "+t._s(t.addData.file.fileName+"\n"+t.addData.file.uploadTime)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"task-form-file-button"},[e("input",{attrs:{type:"file"},on:{change:function(a){t.fileUpdate(a,t.index)}}}),t._v(" "),e("i",{staticClass:"task-form-file-icon fas fa-plus-square"})])])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(2),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-comment"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addData.comment,expression:"addData.comment"}],attrs:{placeholder:"Type your memo here..."},domProps:{value:t.addData.comment},on:{input:function(a){a.target.composing||t.$set(t.addData,"comment",a.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"task-form-foot"},[e("div",{staticClass:"task-form-button task-form-button--cancel",on:{click:function(a){t.toggleForm("add",!1)}}},[t._v("x Cancel")]),t._v(" "),e("div",{staticClass:"task-form-button task-form-button--add",on:{click:t.addTodo}},[t._v("+ Add Task")])])]):t._e()]),t._v(" "),t._l(t.datas,function(a,s){return e("div",{key:s,class:["task","task-"+s,{"task--open":a.editing,preview:t.edit!==s}]},[e("form",{staticClass:"task-form"},[e("div",{staticClass:"task-form-head",class:{started:a.started}},[e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.completed,expression:"data.completed"}]},[e("i",{staticClass:"task-form-checkbox--completed fas fa-check-square"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.completed,expression:"!data.completed"}]},[e("i",{staticClass:"task-form-checkbox--uncompleted fas fa-square"})]),t._v(" "),e("input",{attrs:{type:"checkbox"},on:{click:function(a){t.toggleCompleted(a,s)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!a.completed,expression:"!data.completed"},{name:"model",rawName:"v-model",value:a.title,expression:"data.title"}],class:["task-form-title",{completed:t.add.completed}],attrs:{type:"text",readonly:t.edit!==s,placeholder:"Type Something Here..."},domProps:{value:a.title},on:{input:function(e){e.target.composing||t.$set(a,"title",e.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.completed,expression:"data.completed"}],staticClass:"task-form-title completed"},[t._v(t._s(a.title||"Type Something Here..."))]),t._v(" "),e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.started,expression:"data.started"}]},[e("i",{staticClass:"task-form-checkbox--started fas fa-star"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.started,expression:"!data.started"}]},[e("i",{staticClass:"task-form-checkbox--unstarted far fa-star"})]),t._v(" "),e("input",{attrs:{type:"checkbox"},on:{click:function(a){t.toggleStared(a,s)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],on:{click:function(a){t.toggleForm(null)}}},[e("i",{staticClass:"task-form-edit--editing fas fa-pencil-alt"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.edit!==s,expression:"edit !== index"}],on:{click:function(a){t.toggleForm(s)}}},[e("i",{staticClass:"task-form-edit--unediting fas fa-pencil-alt"})])]),t._v(" "),t.edit!==s&&(a.date||a.time||a.file||a.comment)?e("div",{class:["preview-info",{started:a.started}]},[a.date||a.time?e("span",[e("i",{staticClass:"far fa-calendar-alt"}),t._v(" "+t._s((a.date||"")+" "+(a.time||"")))]):t._e(),t._v(" "),a.file.fileName?e("span",[e("i",{staticClass:"far fa-file"})]):t._e(),t._v(" "),a.comment?e("span",[e("i",{staticClass:"far fa-comment-dots"})]):t._e()]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],staticClass:"task-form-body"},[e("div",{staticClass:"task-form-item"},[t._m(3,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.date,expression:"data.date"}],attrs:{type:"date"},domProps:{value:a.date},on:{input:function(e){e.target.composing||t.$set(a,"date",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.time,expression:"data.time"}],attrs:{type:"time"},domProps:{value:a.time},on:{input:function(e){e.target.composing||t.$set(a,"time",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(4,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-file"},[a.file.fileName?e("div",{staticClass:"task-form-file-info"},[t._v("\n                  "+t._s(a.file.fileName+"\n"+a.file.uploadTime)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"task-form-file-button"},[e("input",{attrs:{type:"file"},on:{change:function(a){t.fileUpdate(a,s)}}}),t._v(" "),e("i",{staticClass:"task-form-file-icon fas fa-plus-square"})])])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(5,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-comment"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.comment,expression:"data.comment"}],attrs:{placeholder:"Type your memo here..."},domProps:{value:a.comment},on:{input:function(e){e.target.composing||t.$set(a,"comment",e.target.value)}}})])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],staticClass:"task-form-foot"},[e("div",{staticClass:"task-form-button task-form-button--cancel",on:{click:function(a){t.cancelEdit(s)}}},[t._v("x Cancel")]),t._v(" "),e("div",{staticClass:"task-form-button task-form-button--add",on:{click:function(a){t.saveEdit(s)}}},[t._v("+ Save")])])])])}),t._v(" "),e("div",{staticClass:"count"},[t._v(t._s(t.datas.length+" tasks left"))])],2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-calendar-alt"}),this._v(" Deadline\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-file"}),this._v(" File\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-calendar-alt"}),this._v(" Deadline\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-file"}),this._v(" File\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment\n            ")])}]};var p=e("VU/8")(f,u,!1,function(t){e("zKTe")},null,null).exports;s.a.use(d.a);var h=new d.a({routes:[{path:"/",name:"HelloWorld",component:r},{path:"/1/todolist",name:"TodoList",component:p}]}),_=(e("uMhA"),e("QxPg")),k=e("KREn"),g=e("1P+R"),C=e("h17U");_.a.library.add(k.a),_.a.library.add(g.a),_.a.library.add(C.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:h,components:{App:o},template:"<App/>"})},s347:function(t,a){},uMhA:function(t,a){},zKTe:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.a53e36523d7c281ec921.js.map