webpackJsonp([1],{C5HX:function(t,a){},Ems3:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("r2tW")},null,null).exports,o=e("/ocq"),r=e("mtWM"),l=e.n(r),c={name:"index",data:function(){return{dataLoading:!0,datePickerOptions:{disabledDate:function(t){return t>new Date}},activeName:"first",singUpTotal:null,dataList:[],tagList:[],stageList:[{value:1,label:"1 - TodoList"},{value:2,label:"2 - Filter"},{value:3,label:"3 - Admin Order"}],currentPage:1,selectedStage:1,selectedTags:[],dateRange:[],keyword:"",searchForm:{email:""},rules:{email:[{type:"email",required:!0,message:"請輸入正確的email",trigger:"change"}]},profile:[]}},computed:{codeList:function(){var t=10*this.currentPage-10,a=10*this.currentPage-1;return this.filterData.slice(t,a)},filterData:function(){var t=this;if(this.dataList){var a=new RegExp(this.keyword?this.keyword.replace(/\\/g,""):".*","gi"),e=new RegExp(this.selectedTags?this.selectedTags.map(function(t){return"(?=.*"+t+")"}).join("")+".*":".*","gi");return this.dataList.filter(function(s){return s.url.match(a)&&s.tags.join().match(e)&&s.timeStamp>new Date(t.dateRange&&t.dateRange[0]||"2018-01-01").getTime()&&s.timeStamp<new Date(t.dateRange&&t.dateRange[1]||"2019-01-01").getTime()})}},selectedTagsRegexp:function(){return""+this.selectedTags.join("|")}},watch:{selectedStage:function(){this.dataList=[],this.getData()}},methods:{handleCurrentChange:function(t){this.currentPage=t},handleSizeChange:function(t){this.currentPage=t},getStageName:function(t){return this.stageList.find(function(a){return a.value===t}).label},getData:function(){var t=this;return this.dataLoading=!0,l.a.get("https://www.thef2e.com/api/codeList",{params:{stage:this.selectedStage}}).then(function(a){t.dataList=a.data.sort(function(t,a){return t.timeStamp-a.timeStamp}).map(function(t){return{tags:t.tag.split(",").sort(function(t,a){return t.localeCompare(a)}),timeStamp:t.timeStamp,uploadTime:new Date(t.timeStamp).toLocaleString(),url:t.url}}),t.dataLoading=!1}).catch(function(t){return console.log(t)})},getTag:function(){var t=this;return l.a.get("https://www.thef2e.com/api/tagList").then(function(a){t.tagList=a.data.sort(function(t,a){return t.localeCompare(a)})}).catch(function(t){return console.log(t)})},getSingUpTotal:function(){var t=this;return l.a.get("https://www.thef2e.com/api/signUpTotal").then(function(a){t.singUpTotal=a.data.total}).catch(function(t){return console.log(t)})},getProfile:function(){var t=this;return l.a.post("https://www.thef2e.com/api/stageCheck",{email:this.searchForm.email}).then(function(a){t.profile=a.data.length?a.data.map(function(t){return{stage:t.stage,tags:t.tag.split(",").sort(function(t,a){return t.localeCompare(a)}),uploadTime:new Date(t.timeStamp).toLocaleString(),url:t.url}}):"no-data"}).catch(function(t){return console.log(t)})},submitForm:function(t){var a=this;this.$refs[t].validate(function(t){if(!t)return!1;a.profile=null,a.getProfile()})}},mounted:function(){this.getSingUpTotal(),this.getData(),this.getTag()}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",{attrs:{id:"index"}},[e("el-header",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v("六角學院 TheF2E 前端挑戰")]),e("h2",{staticClass:"subtitle"},[t._v("目前參賽人數："+t._s(t.singUpTotal))])]),e("el-main",{staticClass:"main"},[e("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:0===t.tagList.length||t.dataLoading,expression:"tagList.length === 0 || dataLoading"}],attrs:{label:"作品列表",name:"first"}},[e("div",{staticClass:"filter"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{xs:24,md:8}},[t._v("挑戰題目："),e("el-select",{staticClass:"selector",attrs:{placeholder:"選擇挑戰題目"},model:{value:t.selectedStage,callback:function(a){t.selectedStage=a},expression:"selectedStage"}},t._l(t.stageList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),e("el-col",{attrs:{xs:24,md:8}},[t._v("上傳日期："),e("el-date-picker",{staticClass:"date-picker",attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-M-dd","start-placeholder":"起始日期","end-placeholder":"結束日期","picker-options":t.datePickerOptions},model:{value:t.dateRange,callback:function(a){t.dateRange=a},expression:"dateRange"}})],1),e("el-col",{attrs:{xs:24,md:8}},[t._v("網址搜尋："),e("el-input",{staticClass:"keyword",attrs:{placeholder:"輸入關鍵字"},model:{value:t.keyword,callback:function(a){t.keyword=a},expression:"keyword"}})],1)],1),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{xs:24,offset:0}},[e("el-checkbox-group",{model:{value:t.selectedTags,callback:function(a){t.selectedTags=a},expression:"selectedTags"}},t._l(t.tagList,function(t,a){return e("el-checkbox",{key:a,attrs:{label:t}})}))],1)],1)],1),e("div",{staticClass:"codeList"},[e("el-row",{attrs:{gutter:10}},[t._v("共有 "+t._s(t.filterData.length)+" 筆資料"),e("el-col",{attrs:{xs:24}},t._l(t.codeList,function(a,s){return e("el-card",{key:s,staticClass:"card",attrs:{shadow:"hover"}},[e("div",{staticClass:"row"},[e("span",{staticClass:"icon date"},[e("i",{staticClass:"far fa-calendar-alt"}),t._v(t._s(a.uploadTime))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-link"}),e("a",{staticClass:"link",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-tags"}),t._l(a.tags,function(a,s){return e("div",{key:s,staticClass:"tag",class:{acitve:t.selectedTagsRegexp&&a.match(t.selectedTagsRegexp)}},[t._v(t._s(a))])})],2)])])}))],1),e("el-pagination",{attrs:{"current-page":t.currentPage,background:"",layout:"prev, pager, next",total:t.filterData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a}}})],1)]),e("el-tab-pane",{attrs:{label:"參賽查詢",name:"second"}},[e("div",{staticClass:"filter"},[e("el-form",{ref:"searchForm",attrs:{rules:t.rules,model:t.searchForm,inline:!0}},[e("el-form-item",{attrs:{label:"參賽信箱",prop:"email"}},[e("el-input",{staticClass:"email",model:{value:t.searchForm.email,callback:function(a){t.$set(t.searchForm,"email",a)},expression:"searchForm.email"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.submitForm("searchForm")}}},[t._v("查詢")])],1)],1)],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.profile,expression:"!profile"}],staticClass:"codeList"},["no-data"===t.profile?e("el-alert",{attrs:{type:"warning",title:"查無作品提交紀錄，請重新查詢",center:"center","show-icon":"show-icon"}}):t._e(),"no-data"!==t.profile&&t.profile&&t.profile.length?[e("h3",[t._v(t._s(t.searchForm.email))]),t._l(t.profile,function(a,s){return e("el-card",{key:s,staticClass:"card",attrs:{shadow:"hover"}},[e("h3",[t._v(t._s(t.getStageName(a.stage)))]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon date"},[t._v(t._s(a.uploadTime))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("a",{staticClass:"link",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},t._l(a.tags,function(a,s){return e("div",{key:s,staticClass:"tag profile-tag"},[t._v(t._s(a))])}))])])})]:t._e()],2)])],1)],1),e("el-footer",{staticClass:"guahsu"},[t._v("Create By GuaHsu"),e("br"),t._v("("),e("a",{attrs:{href:"https://github.com/guahsu/TheF2E",target:"_blank"}},[t._v("https://github.com/guahsu/TheF2E")]),t._v(")")])],1)},staticRenderFns:[]};var m=e("VU/8")(c,d,!1,function(t){e("w7LS")},null,null).exports,u=e("mvHQ"),v=e.n(u),f=e("woOf"),p=e.n(f),h={name:"todolist",data:function(){var t={editing:!1,completed:!1,started:!1,title:null,titlePlaceholder:"Type Something Here...",date:null,time:null,file:{},comment:null};return{defaultData:t,tab:"myTasks",add:!1,edit:null,addData:p()({},t),todoData:[]}},mounted:function(){this.todoData=JSON.parse(sessionStorage.getItem("todoData"))||[]},computed:{datas:function(){return"myTasks"===this.tab?this.todoData:"inProgress"===this.tab?this.inProgressData:"completed"===this.tab?this.completedData:void 0},inProgressData:function(){return this.todoData.filter(function(t){return!t.completed})},completedData:function(){return this.todoData.filter(function(t){return t.completed})}},methods:{selectTab:function(t){this.tab=t},toggleForm:function(t,a){"add"===t?this.add=a:this.edit=t},toggleCompleted:function(t,a){this.todoData[a].completed=t.target.checked},toggleStared:function(t,a){this.todoData[a].started=t.target.checked,this.todoData.sort(function(t,a){return t.started>a.started?-1:t.started<a.started?1:0})},fileUpdate:function(t,a){var e={fileName:t.target.files[0].name,uploadTime:t.target.files[0].lastModifiedDate.toLocaleString()};void 0===a?this.addData.file=p()({},e):this.todoData[a].file=p()({},e)},addTodo:function(){this.addData.title||(this.addData.titlePlaceholder="unnamed-"+(new Date).toLocaleString()),this.todoData.push(this.addData),this.addData=p()({},this.defaultData),sessionStorage.setItem("todoData",v()(this.todoData)),this.toggleForm("add",!1)},saveEdit:function(t){sessionStorage.setItem("todoData",v()(this.todoData)),this.toggleForm(null,!1)},cancelEdit:function(t){var a=JSON.parse(sessionStorage.getItem("todoData"))[t],e=a.title,s=a.date,i=a.time,n=a.file,o=a.comment;this.todoData[t].title=e,this.todoData[t].date=s,this.todoData[t].time=i,this.todoData[t].file=n,this.todoData[t].comment=o,this.toggleForm(null,!1)}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"header"},[e("div",{staticClass:"header-item",class:{active:"myTasks"===t.tab},on:{click:function(a){t.selectTab("myTasks")}}},[t._v("My Tasks")]),t._v(" "),e("div",{staticClass:"header-item",class:{active:"inProgress"===t.tab},on:{click:function(a){t.selectTab("inProgress")}}},[t._v("In Progress")]),t._v(" "),e("div",{staticClass:"header-item",class:{active:"completed"===t.tab},on:{click:function(a){t.selectTab("completed")}}},[t._v("Completed")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{class:["task-add",{"task-add--open":t.add}]},[t.add?t._e():e("span",{staticClass:"task-add-text",on:{click:function(a){t.toggleForm("add",!0)}}},[t._v("+ Add Task")]),t._v(" "),t.add?e("form",{staticClass:"task-form"},[e("div",{staticClass:"task-form-head",class:{started:t.addData.started}},[e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.completed,expression:"addData.completed"}]},[e("i",{staticClass:"task-form-checkbox--completed fas fa-check-square"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.addData.completed,expression:"!addData.completed"}]},[e("i",{staticClass:"task-form-checkbox--uncompleted fas fa-square"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.completed,expression:"addData.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addData.completed)?t._i(t.addData.completed,null)>-1:t.addData.completed},on:{change:function(a){var e=t.addData.completed,s=a.target,i=!!s.checked;if(Array.isArray(e)){var n=t._i(e,null);s.checked?n<0&&t.$set(t.addData,"completed",e.concat([null])):n>-1&&t.$set(t.addData,"completed",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.addData,"completed",i)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!t.addData.completed,expression:"!addData.completed"},{name:"model",rawName:"v-model",value:t.addData.title,expression:"addData.title"}],staticClass:"task-form-title",class:{completed:t.add.completed},attrs:{type:"text",placeholder:t.addData.titlePlaceholder,readonly:!t.add},domProps:{value:t.addData.title},on:{input:function(a){a.target.composing||t.$set(t.addData,"title",a.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.completed,expression:"addData.completed"}],staticClass:"task-form-title completed"},[t._v(t._s(t.addData.title||"Type Something Here..."))]),t._v(" "),e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.started,expression:"addData.started"}]},[e("i",{staticClass:"task-form-checkbox--started fas fa-star"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.addData.started,expression:"!addData.started"}]},[e("i",{staticClass:"task-form-checkbox--unstarted far fa-star"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.started,expression:"addData.started"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addData.started)?t._i(t.addData.started,null)>-1:t.addData.started},on:{change:function(a){var e=t.addData.started,s=a.target,i=!!s.checked;if(Array.isArray(e)){var n=t._i(e,null);s.checked?n<0&&t.$set(t.addData,"started",e.concat([null])):n>-1&&t.$set(t.addData,"started",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.addData,"started",i)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.add,expression:"add"}],on:{click:function(a){t.toggleForm("add",!1)}}},[e("i",{staticClass:"task-form-edit--editing fas fa-pencil-alt"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.add,expression:"!add"}],on:{click:function(a){t.toggleForm("add",!0)}}},[e("i",{staticClass:"task-form-edit--unediting fas fa-pencil-alt"})])]),t._v(" "),e("div",{staticClass:"task-form-body"},[e("div",{staticClass:"task-form-item"},[t._m(0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.date,expression:"addData.date"}],attrs:{type:"date"},domProps:{value:t.addData.date},on:{input:function(a){a.target.composing||t.$set(t.addData,"date",a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.time,expression:"addData.time"}],attrs:{type:"time"},domProps:{value:t.addData.time},on:{input:function(a){a.target.composing||t.$set(t.addData,"time",a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(1),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-file"},[t.addData.file.fileName?e("div",{staticClass:"task-form-file-info"},[t._v("\n                  "+t._s(t.addData.file.fileName+"\n"+t.addData.file.uploadTime)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"task-form-file-button"},[e("input",{attrs:{type:"file"},on:{change:function(a){t.fileUpdate(a)}}}),t._v(" "),e("i",{staticClass:"task-form-file-icon fas fa-plus-square"})])])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(2),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-comment"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addData.comment,expression:"addData.comment"}],attrs:{placeholder:"Type your memo here..."},domProps:{value:t.addData.comment},on:{input:function(a){a.target.composing||t.$set(t.addData,"comment",a.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"task-form-foot"},[e("div",{staticClass:"task-form-button task-form-button--cancel",on:{click:function(a){t.toggleForm("add",!1)}}},[t._v("x Cancel")]),t._v(" "),e("div",{staticClass:"task-form-button task-form-button--add",on:{click:t.addTodo}},[t._v("+ Add Task")])])]):t._e()]),t._v(" "),t._l(t.datas,function(a,s){return e("div",{key:s,class:["task","task-"+s,{"task--open":a.editing,preview:t.edit!==s}]},[e("form",{staticClass:"task-form"},[e("div",{staticClass:"task-form-head",class:{started:a.started}},[e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.completed,expression:"data.completed"}]},[e("i",{staticClass:"task-form-checkbox--completed fas fa-check-square"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.completed,expression:"!data.completed"}]},[e("i",{staticClass:"task-form-checkbox--uncompleted fas fa-square"})]),t._v(" "),e("input",{attrs:{type:"checkbox"},on:{click:function(a){t.toggleCompleted(a,s)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!a.completed,expression:"!data.completed"},{name:"model",rawName:"v-model",value:a.title,expression:"data.title"}],class:["task-form-title",{completed:t.add.completed}],attrs:{type:"text",readonly:t.edit!==s,placeholder:a.titlePlaceholder},domProps:{value:a.title},on:{input:function(e){e.target.composing||t.$set(a,"title",e.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.completed,expression:"data.completed"}],staticClass:"task-form-title completed"},[t._v(t._s(a.title||a.titlePlaceholder))]),t._v(" "),e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.started,expression:"data.started"}]},[e("i",{staticClass:"task-form-checkbox--started fas fa-star"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.started,expression:"!data.started"}]},[e("i",{staticClass:"task-form-checkbox--unstarted far fa-star"})]),t._v(" "),e("input",{attrs:{type:"checkbox"},on:{click:function(a){t.toggleStared(a,s)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],on:{click:function(a){t.toggleForm(null)}}},[e("i",{staticClass:"task-form-edit--editing fas fa-pencil-alt"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.edit!==s,expression:"edit !== index"}],on:{click:function(a){t.toggleForm(s)}}},[e("i",{staticClass:"task-form-edit--unediting fas fa-pencil-alt"})])]),t._v(" "),t.edit!==s&&(a.date||a.time||a.file||a.comment)?e("div",{class:["preview-info",{started:a.started}]},[a.date||a.time?e("span",[e("i",{staticClass:"far fa-calendar-alt"}),t._v(" "+t._s((a.date||"")+" "+(a.time||"")))]):t._e(),t._v(" "),a.file.fileName?e("span",[e("i",{staticClass:"far fa-file"})]):t._e(),t._v(" "),a.comment?e("span",[e("i",{staticClass:"far fa-comment-dots"})]):t._e()]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],staticClass:"task-form-body"},[e("div",{staticClass:"task-form-item"},[t._m(3,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.date,expression:"data.date"}],attrs:{type:"date"},domProps:{value:a.date},on:{input:function(e){e.target.composing||t.$set(a,"date",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.time,expression:"data.time"}],attrs:{type:"time"},domProps:{value:a.time},on:{input:function(e){e.target.composing||t.$set(a,"time",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(4,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-file"},[a.file.fileName?e("div",{staticClass:"task-form-file-info"},[t._v("\n                  "+t._s(a.file.fileName+"\n"+a.file.uploadTime)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"task-form-file-button"},[e("input",{attrs:{type:"file"},on:{change:function(a){t.fileUpdate(a,s)}}}),t._v(" "),e("i",{staticClass:"task-form-file-icon fas fa-plus-square"})])])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(5,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-comment"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.comment,expression:"data.comment"}],attrs:{placeholder:"Type your memo here..."},domProps:{value:a.comment},on:{input:function(e){e.target.composing||t.$set(a,"comment",e.target.value)}}})])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],staticClass:"task-form-foot"},[e("div",{staticClass:"task-form-button task-form-button--cancel",on:{click:function(a){t.cancelEdit(s)}}},[t._v("x Cancel")]),t._v(" "),e("div",{staticClass:"task-form-button task-form-button--add",on:{click:function(a){t.saveEdit(s)}}},[t._v("+ Save")])])])])}),t._v(" "),e("div",{staticClass:"count"},[t._v(t._s(t.datas.length+" tasks left"))])],2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-calendar-alt"}),this._v(" Deadline\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-file"}),this._v(" File\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-calendar-alt"}),this._v(" Deadline\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-file"}),this._v(" File\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment\n            ")])}]};var k=e("VU/8")(h,g,!1,function(t){e("C5HX")},"data-v-1b41b2bc",null).exports,_={name:"filter",data:function(){return{keyword:"",startDate:"",endDate:"",stage:"",selectedStage:1,stageList:[{name:"1-TodoList",value:1},{name:"2-Filter",value:2}],stageData:[],tagData:[]}},computed:{dataList:function(){var t=this,a=new RegExp(this.keyword?this.keyword.replace(/\\/g,""):".*","gi"),e=new RegExp(this.selectedTags?this.selectedTags.join("")+".*":".*","gi");return this.stageData.filter(function(s){return s.url.match(a)&&s.tags.join().match(e)&&s.timeStamp>new Date(t.startDate||"2018-01-01").getTime()&&s.timeStamp<new Date(t.endDate||"2019-01-01").getTime()})},selectedTags:function(){return this.tagData.filter(function(t){return t.checked}).map(function(t){return"(?=.*"+t.name+")"})}},watch:{selectedStage:function(){this.stageData=[],this.getData()}},methods:{getData:function(){var t=this;return l.a.get("https://www.thef2e.com/api/codeList",{params:{stage:this.selectedStage}}).then(function(a){t.stageData=a.data.sort(function(t,a){return t.timeStamp-a.timeStamp}).map(function(t){return{tags:t.tag.split(",").sort(function(t,a){return t.length-a.length}),timeStamp:t.timeStamp,uploadTime:new Date(t.timeStamp).toLocaleString(),url:t.url}})}).catch(function(t){return console.log(t)})},getTagList:function(){var t=this;return l.a.get("https://www.thef2e.com/api/tagList").then(function(a){t.tagData=a.data.sort(function(t,a){return t.localeCompare(a)}).map(function(t){return{name:t,checked:!1}})}).catch(function(t){return console.log(t)})},removeTag:function(t){this.tagData[t].checked=!1}},mounted:function(){this.getData(),this.getTagList()}},C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:0===t.stageData.length,expression:"stageData.length === 0"}],attrs:{id:"filter"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"logo"},[t._v("HaveFun")]),e("div",{staticClass:"search"},[e("i",{staticClass:"el-icon-search"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"search keyword from url"},domProps:{value:t.keyword},on:{input:function(a){a.target.composing||(t.keyword=a.target.value)}}})])]),e("div",{staticClass:"container"},[e("div",{staticClass:"aside"},[e("div",{staticClass:"filter location"},[e("div",{staticClass:"title"},[t._v("Stage")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStage,expression:"selectedStage"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedStage=a.target.multiple?e:e[0]}}},t._l(t.stageList,function(a,s){return e("option",{key:s,domProps:{value:a.value}},[t._v(t._s(a.name))])}))]),e("div",{staticClass:"filter date"},[e("div",{staticClass:"title"},[t._v("Date")]),e("div",{staticClass:"from"},[t._v("from"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],staticClass:"input",attrs:{type:"date"},domProps:{value:t.startDate},on:{input:function(a){a.target.composing||(t.startDate=a.target.value)}}})]),e("div",{staticClass:"to"},[t._v("to"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],staticClass:"input",attrs:{type:"date"},domProps:{value:t.endDate},on:{input:function(a){a.target.composing||(t.endDate=a.target.value)}}})])]),e("div",{staticClass:"filter tags"},[e("div",{staticClass:"title"},[t._v("Tags")]),t._l(t.tagData,function(a,s){return e("div",{key:s,staticClass:"checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.checked,expression:"tag.checked"}]},[e("i",{staticClass:"checkbox--checked fas fa-check-square"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.checked,expression:"!tag.checked"}]},[e("i",{staticClass:"checkbox--unchecked fas fa-square"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.checked,expression:"tag.checked"}],attrs:{id:a.name,type:"checkbox"},domProps:{checked:Array.isArray(a.checked)?t._i(a.checked,null)>-1:a.checked},on:{change:function(e){var s=a.checked,i=e.target,n=!!i.checked;if(Array.isArray(s)){var o=t._i(s,null);i.checked?o<0&&t.$set(a,"checked",s.concat([null])):o>-1&&t.$set(a,"checked",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(a,"checked",n)}}}),e("label",{attrs:{for:a.name}},[t._v(t._s(a.name))])])})],2),e("a",{staticClass:"guahsu",attrs:{href:"https://github.com/guahsu/TheF2E",target:"_blank"}},[t._v("https://github.com/guahsu/TheF2E")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"info"},[t._v("Showing"),e("span",{staticClass:"resultCnt"},[t._v(t._s(" "+t.dataList.length+" "))]),t._v("results by ...")]),e("div",{staticClass:"tags"},t._l(t.tagData,function(a,s){return a.checked?e("div",{staticClass:"tag"},[t._v(t._s(a.name)),e("i",{staticClass:"remove el-icon-circle-close-outline",on:{click:function(a){t.removeTag(s)}}})]):t._e()})),t._l(t.dataList,function(a,s){return e("div",{key:s,staticClass:"card"},[e("div",{staticClass:"card-info"},[e("div",{staticClass:"row"},[e("a",{staticClass:"title",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"far fa-calendar-alt"}),t._v(t._s(a.uploadTime))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-tags"}),t._l(a.tags,function(a,s){return e("div",{key:s,staticClass:"tag"},[t._v(t._s(a))])})],2)])])])})],2)])])},staticRenderFns:[]};var w=e("VU/8")(_,C,!1,function(t){e("Ems3")},"data-v-61a116a5",null).exports;s.default.use(o.a);var D=new o.a({routes:[{path:"/",name:"Index",component:m},{path:"/1/todolist",name:"TodoList",component:k},{path:"/2/filter",name:"Filter",component:w}]}),x=(e("uMhA"),e("zL8q")),b=e.n(x),y=(e("Xcu2"),e("QxPg")),T=e("KREn"),N=e("1P+R"),S=e("h17U");y.a.library.add(T.a),y.a.library.add(N.a),y.a.library.add(S.a),s.default.use(b.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:D,components:{App:n},template:"<App/>"})},Xcu2:function(t,a){},r2tW:function(t,a){},uMhA:function(t,a){},w7LS:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.05616097cfb339ee2d42.js.map