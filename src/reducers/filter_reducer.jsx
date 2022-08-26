
const filter_reducer = (state, action) => {

    if(action.type === "SET_TO_GRID"){
        return {...state, grid_view: true}
    }

    if(action.type === "SET_TO_LIST"){
        return { ...state, grid_view: false };
    }
    throw new Error(`Invalid action ${action.type}`);
}

export default filter_reducer
