import {observable, action} from 'mobx'

class Store {

 @observable time

 constructor() {
this.time = 1

this.interval= setInterval(()=>{
    this.time = this.time+1

},100)
 }
     
        
  
  
 
}

const store =new Store()
export default store