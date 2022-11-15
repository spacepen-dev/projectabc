const initalValues = {
    isLoading: true,
    success: false,
    error: false,
    message: '',
    networkError:false
}


const AddDepartment = (state=initalValues, action) => {
    switch (action.type) {
        case 'ADD_DEPARTMENT':
            return {...state,isLoading:false }
        case 'ADD_DEPARTMENT_SUCCESSS': 
            return { ...state, isLoading:false, success:true, message:action.payLoad }
        case 'ADD_DEPARTMENT_ERROR': 
            return { ...state, isLoading:false, error:true, message:action.payLoad }
        case 'ADD_DEPARTMENT_ERR_MESSAGE':
            return {...state, isLoading:false, networkError:true, message:action.payLoad}
        default:
        return state;
    }
}

export default AddDepartment;