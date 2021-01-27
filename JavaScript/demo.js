function createStore(config){
    const { preState, reducer } = config;
    let state = {
        ...preState
    }
    function getState(){
        return state;
    }
    function dispatch (action){
        state = reducer(state, action)
    }
    return {
        getState,
        dispatch,
    }
}

function connect(mapState, mapDispatch){
    let newState = mapState(state);
    let newDispatch = mapDispatch(dispatch)
    return function(component){
        return <component {...newState} {...newDispatch}  />
    }
}