import {extendObservable} from 'mobx';


/** 
 * my Userstore
*/
class UserStore {
    constructor(){
        extendObservable(this,{
            loading:true,
            isloggedIn:false,
            username:''
        })
    }
}

export default new UserStore();