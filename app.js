import Vue from 'vue';
var app = new Vue({
  el: '#app',
  data: {
    newTodo: '1',
    todoList: []
  },
  created:function(){
    window.onbeforeunload=()=>{
      let dataString=JSON.stringify(this.todoList)
      window.localStorage.setItem('mytodo',dataString)
      alert(dataString)
    }
    let oldDataString=window.localStorage.getItem('mytodo')
    let oldData=JSON.parse(oldDataString)
    this.todoList=oldData||[];
  },
  methods:{
    addTodo: function(){
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      this.newTodo = '';
    },
    removeTodo(todo){
      let index=this.todoList.indexOf(todo)
      this.todoList.splice(index,1)
    }
  }
})
