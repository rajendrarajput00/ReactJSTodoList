import React from 'react'
import * as ActionType from '../actions/TaskType'
const initialState = {
    loading: false,
    error: null,
    response: ''
}


const updateObject = (oldObject,updateProperties)=>{
    return{
        ...oldObject,
        ...updateProperties
    }
}


const addTaskStart = (state,action)=>{

    return updateObject(state,{loading:true,error:null})
}
const addTaskSuccess = (state,action)=>{
    return updateObject(state, { loading: false, error: null, response: action.response });

}
const addTaskFail = (state,action)=>{
    return updateObject(state, { loading: false, error: action.response, response: action.response });

}



const reducers = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.START_ADD_TASK:
            return addTaskStart(state, action);
            break;
        case ActionType.SUCCESS_ADD_TASK:
            return addTaskSuccess(state, action);
            break;
        case ActionType.FAIL_ADD_TASK:
            return addTaskFail(state, action);
            break;

        default:
            return state;
    }

}

export default reducers;
