webpackJsonp([1],{BfxL:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({name:"App"},i,!1,function(t){e("t4bi")},null,null).exports,o=e("/ocq"),n=e("mtWM"),c=e.n(n),r={name:"index",data:function(){return{dataLoading:!0,datePickerOptions:{disabledDate:function(t){return t>new Date}},activeName:"first",singUpTotal:null,dataList:[],tagList:[],stageList:[{value:1,label:"1 - TodoList"},{value:2,label:"2 - Filter"},{value:3,label:"3 - Admin Order"}],currentPage:1,selectedStage:1,selectedTags:[],dateRange:[],keyword:"",searchForm:{email:""},rules:{email:[{type:"email",required:!0,message:"請輸入正確的email",trigger:"change"}]},profile:[]}},computed:{codeList:function(){var t=10*this.currentPage-10,a=10*this.currentPage-1;return this.filterData.slice(t,a)},filterData:function(){var t=this;if(this.dataList){var a=new RegExp(this.keyword?this.keyword.replace(/\\/g,""):".*","gi"),e=new RegExp(this.selectedTags?this.selectedTags.map(function(t){return"(?=.*"+t+")"}).join("")+".*":".*","gi");return this.dataList.filter(function(s){return s.url.match(a)&&s.tags.join().match(e)&&s.timeStamp>new Date(t.dateRange&&t.dateRange[0]||"2018-01-01").getTime()&&s.timeStamp<new Date(t.dateRange&&t.dateRange[1]||"2019-01-01").getTime()})}},selectedTagsRegexp:function(){return""+this.selectedTags.join("|")}},watch:{selectedStage:function(){this.dataList=[],this.getData()}},methods:{handleCurrentChange:function(t){this.currentPage=t},handleSizeChange:function(t){this.currentPage=t},getStageName:function(t){return this.stageList.find(function(a){return a.value===t}).label},getData:function(){var t=this;return this.dataLoading=!0,c.a.get("https://www.thef2e.com/api/codeList",{params:{stage:this.selectedStage}}).then(function(a){t.dataList=a.data.sort(function(t,a){return t.timeStamp-a.timeStamp}).map(function(t){return{tags:t.tag.split(",").sort(function(t,a){return t.localeCompare(a)}),timeStamp:t.timeStamp,uploadTime:new Date(t.timeStamp).toLocaleString(),url:t.url}}),t.dataLoading=!1}).catch(function(t){return console.log(t)})},getTag:function(){var t=this;return c.a.get("https://www.thef2e.com/api/tagList").then(function(a){t.tagList=a.data.sort(function(t,a){return t.localeCompare(a)})}).catch(function(t){return console.log(t)})},getSingUpTotal:function(){var t=this;return c.a.get("https://www.thef2e.com/api/signUpTotal").then(function(a){t.singUpTotal=a.data.total}).catch(function(t){return console.log(t)})},getProfile:function(){var t=this;return c.a.post("https://www.thef2e.com/api/stageCheck",{email:this.searchForm.email}).then(function(a){t.profile=a.data.length?a.data.map(function(t){return{stage:t.stage,tags:t.tag.split(",").sort(function(t,a){return t.localeCompare(a)}),uploadTime:new Date(t.timeStamp).toLocaleString(),url:t.url}}):"no-data"}).catch(function(t){return console.log(t)})},checkImage:function(t){return t.match(/(?=.*codepen\.io)(.*\/pen|.*\/full|.*\/details)/gi)},getImage:function(t){return t.replace(/\?editor.*/gi,"").replace(/\/full|\/details/gi,"/pen")+"/image/small.png"},submitForm:function(t){var a=this;this.$refs[t].validate(function(t){if(!t)return!1;a.profile=null,a.getProfile()})}},mounted:function(){this.getSingUpTotal(),this.getData(),this.getTag()}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",{attrs:{id:"Index"}},[e("el-header",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v("六角學院 TheF2E 前端挑戰")]),e("h2",{staticClass:"subtitle"},[t._v("目前參賽人數："+t._s(t.singUpTotal))])]),e("el-main",{staticClass:"main"},[e("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{directives:[{name:"loading",rawName:"v-loading",value:0===t.tagList.length||t.dataLoading,expression:"tagList.length === 0 || dataLoading"}],attrs:{label:"作品列表",name:"first"}},[e("div",{staticClass:"filter"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{xs:24,md:8}},[t._v("挑戰題目："),e("el-select",{staticClass:"selector",attrs:{placeholder:"選擇挑戰題目"},model:{value:t.selectedStage,callback:function(a){t.selectedStage=a},expression:"selectedStage"}},t._l(t.stageList,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),e("el-col",{attrs:{xs:24,md:8}},[t._v("上傳日期："),e("el-date-picker",{staticClass:"date-picker",attrs:{type:"daterange","range-separator":"-","value-format":"yyyy-M-dd","start-placeholder":"起始日期","end-placeholder":"結束日期","picker-options":t.datePickerOptions},model:{value:t.dateRange,callback:function(a){t.dateRange=a},expression:"dateRange"}})],1),e("el-col",{attrs:{xs:24,md:8}},[t._v("網址搜尋："),e("el-input",{staticClass:"keyword",attrs:{placeholder:"輸入關鍵字"},model:{value:t.keyword,callback:function(a){t.keyword=a},expression:"keyword"}})],1)],1),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{xs:24,offset:0}},[e("el-checkbox-group",{model:{value:t.selectedTags,callback:function(a){t.selectedTags=a},expression:"selectedTags"}},t._l(t.tagList,function(t,a){return e("el-checkbox",{key:a,attrs:{label:t}})}))],1)],1)],1),e("div",{staticClass:"codeList"},[e("el-row",{attrs:{gutter:10}},[t._v("共有 "+t._s(t.filterData.length)+" 筆資料"),e("el-col",{attrs:{xs:24}},t._l(t.codeList,function(a,s){return e("el-card",{key:s,staticClass:"card",attrs:{shadow:"hover"}},[t.checkImage(a.url)?e("div",{staticClass:"img"},[e("i",{staticClass:"el-icon-loading"}),e("img",{attrs:{src:t.getImage(a.url),onerror:"this.onerror=null;this.src='https://s3-us-west-2.amazonaws.com/m.cdpn.io/default-project-screenshot-small.png'"}})]):t._e(),e("div",{staticClass:"info"},[e("div",{staticClass:"row"},[e("span",{staticClass:"icon date"},[e("i",{staticClass:"far fa-calendar-alt"}),t._v(t._s(a.uploadTime))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-link"}),e("a",{staticClass:"link",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-tags"}),t._l(a.tags,function(a,s){return e("div",{key:s,staticClass:"tag",class:{acitve:t.selectedTagsRegexp&&a.match(t.selectedTagsRegexp)}},[t._v(t._s(a))])})],2)])])])}))],1),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","current-page":t.currentPage,"pager-count":4,total:t.filterData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a}}})],1)]),e("el-tab-pane",{attrs:{label:"參賽查詢",name:"second"}},[e("div",{staticClass:"filter"},[e("el-form",{ref:"searchForm",attrs:{rules:t.rules,model:t.searchForm,inline:!0},on:{submit:function(a){return a.preventDefault(),t.onSubmit(a)}}},[e("el-form-item",{attrs:{label:"參賽信箱",prop:"email"}},[e("el-input",{staticClass:"email",model:{value:t.searchForm.email,callback:function(a){t.$set(t.searchForm,"email",a)},expression:"searchForm.email"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.submitForm("searchForm")}}},[t._v("查詢")])],1)],1)],1),e("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.profile,expression:"!profile"}],staticClass:"profileList"},["no-data"===t.profile?e("el-alert",{attrs:{type:"warning",title:"查無作品提交紀錄，請重新查詢",center:"center","show-icon":"show-icon"}}):t._e(),"no-data"!==t.profile&&t.profile&&t.profile.length?[e("h3",[t._v(t._s(t.searchForm.email))]),t._l(t.profile,function(a,s){return e("el-card",{key:s,staticClass:"card",attrs:{shadow:"hover"}},[e("h3",[t._v(t._s(t.getStageName(a.stage)))]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon date"},[t._v(t._s(a.uploadTime))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},[e("a",{staticClass:"link",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])])]),e("div",{staticClass:"row"},[e("span",{staticClass:"icon"},t._l(a.tags,function(a,s){return e("div",{key:s,staticClass:"tag profile-tag"},[t._v(t._s(a))])}))])])})]:t._e()],2)])],1)],1),e("el-footer",{staticClass:"guahsu"},[t._v("Create By GuaHsu"),e("br"),t._v("("),e("a",{attrs:{href:"https://github.com/guahsu/TheF2E",target:"_blank"}},[t._v("https://github.com/guahsu/TheF2E")]),t._v(")")])],1)},staticRenderFns:[]};var m=e("VU/8")(r,d,!1,function(t){e("goLY")},null,null).exports,u=e("mvHQ"),v=e.n(u),f=e("woOf"),p=e.n(f),h={name:"todolist",data:function(){var t={editing:!1,completed:!1,started:!1,title:null,titlePlaceholder:"Type Something Here...",date:null,time:null,file:{},comment:null};return{defaultData:t,tab:"myTasks",add:!1,edit:null,addData:p()({},t),todoData:[]}},mounted:function(){this.todoData=JSON.parse(sessionStorage.getItem("todoData"))||[]},computed:{datas:function(){return"myTasks"===this.tab?this.todoData:"inProgress"===this.tab?this.inProgressData:"completed"===this.tab?this.completedData:void 0},inProgressData:function(){return this.todoData.filter(function(t){return!t.completed})},completedData:function(){return this.todoData.filter(function(t){return t.completed})}},methods:{selectTab:function(t){this.tab=t},toggleForm:function(t,a){"add"===t?this.add=a:this.edit=t},toggleCompleted:function(t,a){this.todoData[a].completed=t.target.checked},toggleStared:function(t,a){this.todoData[a].started=t.target.checked,this.todoData.sort(function(t,a){return t.started>a.started?-1:t.started<a.started?1:0})},fileUpdate:function(t,a){var e={fileName:t.target.files[0].name,uploadTime:t.target.files[0].lastModifiedDate.toLocaleString()};void 0===a?this.addData.file=p()({},e):this.todoData[a].file=p()({},e)},addTodo:function(){this.addData.title||(this.addData.titlePlaceholder="unnamed-"+(new Date).toLocaleString()),this.todoData.push(this.addData),this.addData=p()({},this.defaultData),sessionStorage.setItem("todoData",v()(this.todoData)),this.toggleForm("add",!1)},saveEdit:function(t){sessionStorage.setItem("todoData",v()(this.todoData)),this.toggleForm(null,!1)},cancelEdit:function(t){var a=JSON.parse(sessionStorage.getItem("todoData"))[t],e=a.title,s=a.date,i=a.time,l=a.file,o=a.comment;this.todoData[t].title=e,this.todoData[t].date=s,this.todoData[t].time=i,this.todoData[t].file=l,this.todoData[t].comment=o,this.toggleForm(null,!1)}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"TodoList"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-item",class:{active:"myTasks"===t.tab},on:{click:function(a){t.selectTab("myTasks")}}},[t._v("My Tasks")]),t._v(" "),e("div",{staticClass:"header-item",class:{active:"inProgress"===t.tab},on:{click:function(a){t.selectTab("inProgress")}}},[t._v("In Progress")]),t._v(" "),e("div",{staticClass:"header-item",class:{active:"completed"===t.tab},on:{click:function(a){t.selectTab("completed")}}},[t._v("Completed")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{class:["task-add",{"task-add--open":t.add}]},[t.add?t._e():e("span",{staticClass:"task-add-text",on:{click:function(a){t.toggleForm("add",!0)}}},[t._v("+ Add Task")]),t._v(" "),t.add?e("form",{staticClass:"task-form"},[e("div",{staticClass:"task-form-head",class:{started:t.addData.started}},[e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.completed,expression:"addData.completed"}]},[e("i",{staticClass:"task-form-checkbox--completed fas fa-check-square"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.addData.completed,expression:"!addData.completed"}]},[e("i",{staticClass:"task-form-checkbox--uncompleted fas fa-square"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.completed,expression:"addData.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addData.completed)?t._i(t.addData.completed,null)>-1:t.addData.completed},on:{change:function(a){var e=t.addData.completed,s=a.target,i=!!s.checked;if(Array.isArray(e)){var l=t._i(e,null);s.checked?l<0&&t.$set(t.addData,"completed",e.concat([null])):l>-1&&t.$set(t.addData,"completed",e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.addData,"completed",i)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!t.addData.completed,expression:"!addData.completed"},{name:"model",rawName:"v-model",value:t.addData.title,expression:"addData.title"}],staticClass:"task-form-title",class:{completed:t.add.completed},attrs:{type:"text",placeholder:t.addData.titlePlaceholder,readonly:!t.add},domProps:{value:t.addData.title},on:{input:function(a){a.target.composing||t.$set(t.addData,"title",a.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.completed,expression:"addData.completed"}],staticClass:"task-form-title completed"},[t._v(t._s(t.addData.title||"Type Something Here..."))]),t._v(" "),e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.addData.started,expression:"addData.started"}]},[e("i",{staticClass:"task-form-checkbox--started fas fa-star"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.addData.started,expression:"!addData.started"}]},[e("i",{staticClass:"task-form-checkbox--unstarted far fa-star"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.started,expression:"addData.started"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addData.started)?t._i(t.addData.started,null)>-1:t.addData.started},on:{change:function(a){var e=t.addData.started,s=a.target,i=!!s.checked;if(Array.isArray(e)){var l=t._i(e,null);s.checked?l<0&&t.$set(t.addData,"started",e.concat([null])):l>-1&&t.$set(t.addData,"started",e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.addData,"started",i)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.add,expression:"add"}],on:{click:function(a){t.toggleForm("add",!1)}}},[e("i",{staticClass:"task-form-edit--editing fas fa-pencil-alt"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.add,expression:"!add"}],on:{click:function(a){t.toggleForm("add",!0)}}},[e("i",{staticClass:"task-form-edit--unediting fas fa-pencil-alt"})])]),t._v(" "),e("div",{staticClass:"task-form-body"},[e("div",{staticClass:"task-form-item"},[t._m(0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.date,expression:"addData.date"}],attrs:{type:"date"},domProps:{value:t.addData.date},on:{input:function(a){a.target.composing||t.$set(t.addData,"date",a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.time,expression:"addData.time"}],attrs:{type:"time"},domProps:{value:t.addData.time},on:{input:function(a){a.target.composing||t.$set(t.addData,"time",a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(1),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-file"},[t.addData.file.fileName?e("div",{staticClass:"task-form-file-info"},[t._v("\n                  "+t._s(t.addData.file.fileName+"\n"+t.addData.file.uploadTime)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"task-form-file-button"},[e("input",{attrs:{type:"file"},on:{change:function(a){t.fileUpdate(a)}}}),t._v(" "),e("i",{staticClass:"task-form-file-icon fas fa-plus-square"})])])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(2),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-comment"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addData.comment,expression:"addData.comment"}],attrs:{placeholder:"Type your memo here..."},domProps:{value:t.addData.comment},on:{input:function(a){a.target.composing||t.$set(t.addData,"comment",a.target.value)}}})])])])]),t._v(" "),e("div",{staticClass:"task-form-foot"},[e("div",{staticClass:"task-form-button task-form-button--cancel",on:{click:function(a){t.toggleForm("add",!1)}}},[t._v("x Cancel")]),t._v(" "),e("div",{staticClass:"task-form-button task-form-button--add",on:{click:t.addTodo}},[t._v("+ Add Task")])])]):t._e()]),t._v(" "),t._l(t.datas,function(a,s){return e("div",{key:s,class:["task","task-"+s,{"task--open":a.editing,preview:t.edit!==s}]},[e("form",{staticClass:"task-form"},[e("div",{staticClass:"task-form-head",class:{started:a.started}},[e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.completed,expression:"data.completed"}]},[e("i",{staticClass:"task-form-checkbox--completed fas fa-check-square"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.completed,expression:"!data.completed"}]},[e("i",{staticClass:"task-form-checkbox--uncompleted fas fa-square"})]),t._v(" "),e("input",{attrs:{type:"checkbox"},on:{click:function(a){t.toggleCompleted(a,s)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!a.completed,expression:"!data.completed"},{name:"model",rawName:"v-model",value:a.title,expression:"data.title"}],class:["task-form-title",{completed:t.add.completed}],attrs:{type:"text",readonly:t.edit!==s,placeholder:a.titlePlaceholder},domProps:{value:a.title},on:{input:function(e){e.target.composing||t.$set(a,"title",e.target.value)}}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:a.completed,expression:"data.completed"}],staticClass:"task-form-title completed"},[t._v(t._s(a.title||a.titlePlaceholder))]),t._v(" "),e("label",{staticClass:"task-form-checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.started,expression:"data.started"}]},[e("i",{staticClass:"task-form-checkbox--started fas fa-star"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.started,expression:"!data.started"}]},[e("i",{staticClass:"task-form-checkbox--unstarted far fa-star"})]),t._v(" "),e("input",{attrs:{type:"checkbox"},on:{click:function(a){t.toggleStared(a,s)}}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],on:{click:function(a){t.toggleForm(null)}}},[e("i",{staticClass:"task-form-edit--editing fas fa-pencil-alt"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.edit!==s,expression:"edit !== index"}],on:{click:function(a){t.toggleForm(s)}}},[e("i",{staticClass:"task-form-edit--unediting fas fa-pencil-alt"})])]),t._v(" "),t.edit!==s&&(a.date||a.time||a.file||a.comment)?e("div",{class:["preview-info",{started:a.started}]},[a.date||a.time?e("span",[e("i",{staticClass:"far fa-calendar-alt"}),t._v(" "+t._s((a.date||"")+" "+(a.time||"")))]):t._e(),t._v(" "),a.file.fileName?e("span",[e("i",{staticClass:"far fa-file"})]):t._e(),t._v(" "),a.comment?e("span",[e("i",{staticClass:"far fa-comment-dots"})]):t._e()]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],staticClass:"task-form-body"},[e("div",{staticClass:"task-form-item"},[t._m(3,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.date,expression:"data.date"}],attrs:{type:"date"},domProps:{value:a.date},on:{input:function(e){e.target.composing||t.$set(a,"date",e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.time,expression:"data.time"}],attrs:{type:"time"},domProps:{value:a.time},on:{input:function(e){e.target.composing||t.$set(a,"time",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(4,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-file"},[a.file.fileName?e("div",{staticClass:"task-form-file-info"},[t._v("\n                  "+t._s(a.file.fileName+"\n"+a.file.uploadTime)+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"task-form-file-button"},[e("input",{attrs:{type:"file"},on:{change:function(a){t.fileUpdate(a,s)}}}),t._v(" "),e("i",{staticClass:"task-form-file-icon fas fa-plus-square"})])])])]),t._v(" "),e("div",{staticClass:"task-form-item"},[t._m(5,!0),t._v(" "),e("div",{staticClass:"task-form-item-content"},[e("div",{staticClass:"task-form-comment"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.comment,expression:"data.comment"}],attrs:{placeholder:"Type your memo here..."},domProps:{value:a.comment},on:{input:function(e){e.target.composing||t.$set(a,"comment",e.target.value)}}})])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.edit===s,expression:"edit === index"}],staticClass:"task-form-foot"},[e("div",{staticClass:"task-form-button task-form-button--cancel",on:{click:function(a){t.cancelEdit(s)}}},[t._v("x Cancel")]),t._v(" "),e("div",{staticClass:"task-form-button task-form-button--add",on:{click:function(a){t.saveEdit(s)}}},[t._v("+ Save")])])])])}),t._v(" "),e("div",{staticClass:"count"},[t._v(t._s(t.datas.length+" tasks left"))])],2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-calendar-alt"}),this._v(" Deadline\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-file"}),this._v(" File\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-calendar-alt"}),this._v(" Deadline\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-file"}),this._v(" File\n            ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"task-form-item-title"},[a("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment\n            ")])}]};var C=e("VU/8")(h,g,!1,function(t){e("BfxL")},null,null).exports,_={name:"filter",data:function(){return{dataList:[],keyword:"",options:[{name:"location1",value:1},{name:"location2",value:2},{name:"location3",value:3}],categories:[{name:"All",checked:!1},{name:"Entertainment",checked:!1},{name:"Food",checked:!1},{name:"Learning",checked:!1},{name:"Outdoors",checked:!1}]}},watch:{keyword:function(){this.getData()}},methods:{getData:function(){var t=this;return c.a.get("https://data.kcg.gov.tw/api/action/datastore_search",{params:{resource_id:"92290ee5-6e61-456f-80c0-249eae2fcc97",q:this.keyword,limit:5}}).then(function(a){t.dataList=a.data.result.records}).catch(function(t){return console.log(t)})}},mounted:function(){this.getData()}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Filter"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"logo"},[t._v("HaveFun")]),e("div",{staticClass:"search"},[e("i",{staticClass:"el-icon-search"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"Explore your own activites"},domProps:{value:t.keyword},on:{input:function(a){a.target.composing||(t.keyword=a.target.value)}}})])]),e("div",{staticClass:"container"},[e("div",{staticClass:"aside"},[e("div",{staticClass:"filter location"},[e("div",{staticClass:"title"},[t._v("Location")]),e("select",t._l(t.options,function(a,s){return e("option",{key:s,domProps:{value:a.value}},[t._v(t._s(a.name))])}))]),t._m(0),e("div",{staticClass:"filter categories"},[e("div",{staticClass:"title"},[t._v("Categories")]),t._l(t.categories,function(a,s){return e("div",{key:s,staticClass:"checkbox"},[e("span",{directives:[{name:"show",rawName:"v-show",value:a.checked,expression:"category.checked"}]},[e("i",{staticClass:"checkbox--checked fas fa-check-square"})]),e("span",{directives:[{name:"show",rawName:"v-show",value:!a.checked,expression:"!category.checked"}]},[e("i",{staticClass:"checkbox--unchecked fas fa-square"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.checked,expression:"category.checked"}],attrs:{id:a.name,type:"checkbox"},domProps:{checked:Array.isArray(a.checked)?t._i(a.checked,null)>-1:a.checked},on:{change:function(e){var s=a.checked,i=e.target,l=!!i.checked;if(Array.isArray(s)){var o=t._i(s,null);i.checked?o<0&&t.$set(a,"checked",s.concat([null])):o>-1&&t.$set(a,"checked",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(a,"checked",l)}}}),e("label",{attrs:{for:a.name}},[t._v(t._s(a.name))])])})],2),e("a",{staticClass:"guahsu",attrs:{href:"https://github.com/guahsu/TheF2E",target:"_blank"}},[t._v("https://github.com/guahsu/TheF2E")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"info"},[t._v("Showing"),e("span",{staticClass:"resultCnt"},[t._v(t._s(" "+t.dataList.length+" "))]),t._v("results by ...")]),e("div",{staticClass:"tags"},t._l(t.categories,function(a,s){return e("div",{staticClass:"tag"},[t._v(t._s(a.name)),e("i",{staticClass:"remove el-icon-circle-close-outline"})])})),t._l(t.dataList,function(a,s){return e("div",{key:s,staticClass:"card"},[e("img",{staticClass:"card-img",attrs:{src:a.Picture1}}),e("div",{staticClass:"card-info"},[e("div",{staticClass:"row title"},[t._v(t._s(a.Name))]),e("div",{staticClass:"row desc"},[t._v(t._s(a.Description))]),e("div",{staticClass:"row"},[e("span",{staticClass:"phone"},[e("i",{staticClass:"fas fa-phone"}),t._v(t._s(a.Tel))]),e("span",{staticClass:"location"},[e("i",{staticClass:"fas fa-map-marker-alt"}),t._v(t._s(a.Add))])]),e("div",{staticClass:"row"},[e("span",{staticClass:"date"},[e("i",{staticClass:"far fa-calendar-alt"}),t._v(t._s(a.Opentime))])])])])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"filter date"},[a("div",{staticClass:"title"},[this._v("Date")]),a("div",{staticClass:"from"},[this._v("from"),a("input",{staticClass:"input",attrs:{type:"date"}})]),a("div",{staticClass:"to"},[this._v("to"),a("input",{staticClass:"input",attrs:{type:"date"}})])])}]};var w=e("VU/8")(_,k,!1,function(t){e("Yysp")},null,null).exports,b=e("504h"),D=e.n(b),x={name:"adminOrder",data:function(){return{activeName:"home"}},mounted:function(){this.buildChart()},methods:{buildChart:function(){D.a.chart("lineChart",{chart:{height:400},title:{text:"Activity"},yAxis:{title:" "},series:[{data:[4393,5250,5717,6965,9703,11993,13713,15417]},{data:[2491,2406,2974,11993,13713,15417,17417,19417]},{data:[1174,3444,5678,9873,8654,6533,4255,3938]}],colors:["#7ED321","#4A90E2","#D0021B"],credits:{enabled:!1}})}}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"AdminOrder"}},[e("el-tabs",{staticClass:"container",model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"HOME",name:"home"}},[e("el-row",{staticClass:"title",attrs:{gutter:10}},[e("el-col",{attrs:{sm:18}},[e("h2",[t._v("OVERVIEW")])]),e("el-col",{attrs:{sm:6}},[t._v("2016/06/06")])],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{sm:8}},[e("el-card",{staticClass:"card",attrs:{shadow:"never"}},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"fas fa-hand-holding-usd"}),t._v("TOTAL REVENUE")]),e("div",{staticClass:"card-value card-value--revenue"},[t._v("54,540")])])],1),e("el-col",{attrs:{sm:8}},[e("el-card",{staticClass:"card",attrs:{shadow:"never"}},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"fas fa-boxes"}),t._v("TOTAL COST")]),e("div",{staticClass:"card-value card-value--cost"},[t._v("12,660")])])],1),e("el-col",{attrs:{sm:8}},[e("el-card",{staticClass:"card",attrs:{shadow:"never"}},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"fas fa-money-bill-alt"}),t._v("TOTAL NET INCOME")]),e("div",{staticClass:"card-value card-value--income"},[t._v("41,880")])])],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",[e("el-card",{staticClass:"card",attrs:{shadow:"never"}},[e("div",{attrs:{id:"lineChart"}})])],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{sm:12}},[e("el-card",{staticClass:"card",attrs:{shadow:"never"}},[e("h2",[t._v("Transaction Website")]),e("div",{staticClass:"card-website"},[e("span",[e("i",{staticClass:"fab fa-facebook"})]),e("span",{staticClass:"name"},[t._v("Facebook.com")]),e("span",{staticClass:"value"},[t._v("45,836")]),e("span",{staticClass:"up"},[e("i",{staticClass:"fas fa-arrow-up"}),t._v("20%")])]),e("div",{staticClass:"card-website"},[e("span",[e("i",{staticClass:"fab fa-google"})]),e("span",{staticClass:"name"},[t._v("Google.com")]),e("span",{staticClass:"value"},[t._v("23,582")]),e("span",{staticClass:"up"},[e("i",{staticClass:"fas fa-arrow-up"}),t._v("12%")])]),e("div",{staticClass:"card-website"},[e("span",[e("i",{staticClass:"fab fa-reddit"})]),e("span",{staticClass:"name"},[t._v("Reddit.com")]),e("span",{staticClass:"value"},[t._v("2,489")]),e("span",{staticClass:"down"},[e("i",{staticClass:"fas fa-arrow-down"}),t._v("15%")])]),e("div",{staticClass:"card-website"},[e("span",[e("i",{staticClass:"fab fa-wordpress"})]),e("span",{staticClass:"name"},[t._v("Wordpress.com")]),e("span",{staticClass:"value"},[t._v("1,057")]),e("span",{staticClass:"down"},[e("i",{staticClass:"fas fa-arrow-down"}),t._v("30%")])])])],1),e("el-col",{attrs:{sm:12}},[e("el-card",{staticClass:"card",attrs:{shadow:"never"}},[e("h2",[t._v("Latest Orders")]),e("div",{staticClass:"card-latestOrder"},[e("img",{staticClass:"img"}),e("div",{staticClass:"info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"name"},[t._v("VinTage T-shirt")])]),e("div",{staticClass:"row"},[e("span",{staticClass:"time"},[e("i",{staticClass:"fas fa-clock"}),t._v("2018/6/13  13:42")]),e("span",{staticClass:"total"},[t._v("Total")])]),e("div",{staticClass:"row"},[e("span",{staticClass:"user"},[e("i",{staticClass:"fas fa-male"}),t._v("Belle Willis")]),e("span",{staticClass:"amount"},[t._v("3,200")])])])]),e("div",{staticClass:"card-latestOrder"},[e("img",{staticClass:"img"}),e("div",{staticClass:"info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"name"},[t._v("VinTage T-shirt")])]),e("div",{staticClass:"row"},[e("span",{staticClass:"time"},[e("i",{staticClass:"fas fa-clock"}),t._v("2018/6/13  13:42")]),e("span",{staticClass:"total"},[t._v("Total")])]),e("div",{staticClass:"row"},[e("span",{staticClass:"user"},[e("i",{staticClass:"fas fa-male"}),t._v("Belle Willis")]),e("span",{staticClass:"amount"},[t._v("3,200")])])])]),e("div",{staticClass:"card-latestOrder"},[e("img",{staticClass:"img"}),e("div",{staticClass:"info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"name"},[t._v("VinTage T-shirt")])]),e("div",{staticClass:"row"},[e("span",{staticClass:"time"},[e("i",{staticClass:"fas fa-clock"}),t._v("2018/6/13  13:42")]),e("span",{staticClass:"total"},[t._v("Total")])]),e("div",{staticClass:"row"},[e("span",{staticClass:"user"},[e("i",{staticClass:"fas fa-male"}),t._v("Belle Willis")]),e("span",{staticClass:"amount"},[t._v("3,200")])])])])])],1)],1)],1),e("el-tab-pane",{attrs:{label:"ORDERS",name:"orders"}}),e("el-tab-pane",{attrs:{label:"PRODUCT",name:"produce"}})],1)],1)},staticRenderFns:[]};var T=e("VU/8")(x,y,!1,function(t){e("Sflm")},null,null).exports;s.default.use(o.a);var N=new o.a({routes:[{path:"/",name:"Index",component:m},{path:"/1/todolist",name:"TodoList",component:C},{path:"/2/filter",name:"Filter",component:w},{path:"/3/admin_order",name:"AdminOrder",component:T}]}),L=(e("uMhA"),e("Xcu2"),e("zL8q")),P=e.n(L),S=e("QxPg"),F=e("KREn"),E=e("1P+R"),$=e("h17U");S.a.library.add(F.a),S.a.library.add(E.a),S.a.library.add($.a),s.default.use(P.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:N,components:{App:l},template:"<App/>"})},Sflm:function(t,a){},Xcu2:function(t,a){},Yysp:function(t,a){},goLY:function(t,a){},t4bi:function(t,a){},uMhA:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.46947332e17c7e385f5c.js.map