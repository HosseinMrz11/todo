import { observable ,action } from "mobx";
import TodoItem from "./todoitem";

 class todostore {
    
    @observable todos =[]
    lastid=1
    @observable nnn=0

    @observable showsts=1

    @action
    addtodo(title){
        if (title !== '') {
            this.todos.push(new TodoItem(this,title,false,this.lastid ++))
            this.nnn=this.nnn+1

        }

        
    }
    
    @action
    redtodo(td){

        console.log('hazf')
   
 this.todos = this.todos.filter(wo => wo !== td );
 console.log(this.todos)
   
this.nnn=this.nnn-1
    }
}

const Todostore = new todostore

export default Todostore;

