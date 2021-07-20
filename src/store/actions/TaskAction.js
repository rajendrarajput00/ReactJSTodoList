import { reject, resolve } from 'q'
import * as  ActionType from './TaskType'




export const addTaskStart =()=>{
    return{
        type:ActionType.START_ADD_TASK
    }
}

export const addTaskSuccess = (data)=>{
    return{
        type:ActionType.SUCCESS_ADD_TASK,
        response:data
    }
}

export const addTaskFail = (data)=>{
    return{
        type:ActionType.FAIL_ADD_TASK,
        response:data
    }
}




export const addTask = () => {

return dispatch =>{
    dispatch(addTaskStart());
    return new Promise((resolve,reject)=>{
        /* axios.post(url,{
            firstName:'rajendra'
        }).then(response=>{
            dispatch(addTaskSuccess(response.data));
            return resolve(response.data)
        }).catch(error=>{
            dispatch(addTaskFail(error.response.data))
            return reject(error.response.data)
        }) */
        dispatch(addTaskSuccess('hellooo'));
        dispatch(addTaskFail(''))
    })


}

}