"use strict";(self["webpackChunktodolist"]=self["webpackChunktodolist"]||[]).push([[127],{859:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"about"},[s("todoAppv1")],1)},n=[],i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("h2",{staticClass:"text-center mt-5"},[t._v("My Vue To Do App")]),s("div",{staticClass:"d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter task"},domProps:{value:t.task},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.submitTask.apply(null,arguments)},input:function(s){s.target.composing||(t.task=s.target.value)}}}),s("button",{staticClass:"btn btn-warning rounded-0",on:{click:t.submitTask}},[t._v(" submit ")])]),s("table",{staticClass:"table table-bordered mt-5"},[t._m(0),s("tbody",t._l(t.tasks,(function(a,e){return s("tr",{key:e,class:a.onfocus},[s("td",[s("span",{class:{finished:"已完成"===a.status}},[t._v(t._s(a.name))])]),s("td",{class:{"text-danger":"待辦"===a.status,"text-warning":"進行中"===a.status,"text-success":"已完成"===a.status},on:{click:function(s){return t.changeStatus(e)}}},[t._v(" "+t._s(a.status)+" ")]),s("td",[s("div",{staticClass:"text-center",on:{click:function(s){return t.editTask(e)}}},[s("span",{staticClass:"fa fa-pen"})])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(s){return t.deleteTask(e)}}},[s("span",{staticClass:"fa fa-trash"})])])])})),0)])])},l=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Task")]),s("th",{attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("修改")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("刪除")])])])}],c={name:"HelloWorld",data(){return{task:"",editedTask:null,availableStatues:["待辦","進行中","已完成"],tasks:[]}},methods:{submitTask(){0!==this.task.length&&(null===this.editedTask?this.tasks.push({name:this.task,status:"待辦",onfocus:""}):(this.tasks[this.editedTask].name=this.task,this.tasks[this.editedTask].onfocus="",this.editedTask=null),this.task="")},deleteTask(t){this.tasks.splice(t,1)},editTask(t){this.task=this.tasks[t].name,this.editedTask=t,this.tasks[t].onfocus="focus"},changeStatus(t){let s=this.availableStatues.indexOf(this.tasks[t].status);++s>2&&(s=0),this.tasks[t].status=this.availableStatues[s]}},mounted:function(){console.log("開始時,沒有預設待辦事項")}},o=c,u=a(1),r=(0,u.Z)(o,i,l,!1,null,"ac9f21aa",null),d=r.exports,k={name:"APP",components:{todoAppv1:d}},h=k,f=(0,u.Z)(h,e,n,!1,null,null,null),p=f.exports}}]);
//# sourceMappingURL=todo2.2f159984.js.map