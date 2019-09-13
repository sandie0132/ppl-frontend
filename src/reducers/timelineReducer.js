const initState = {
    setUpload: false,
    picture: []
}










const timelineReducer = (state = initState, action) => {

    switch (action.type) {
        case "DROP_UPLOAD":
            console.log(">>>state>>", state)
            state = { ...state, setUpload: !state.setUpload };
            console.log(state)
            return state;
        case "IMAGE_UPLOADED":
            return { message: "IMAGE SUCCESSFULLY UPLOADED" };
        default:
            return state
    }
}

export default timelineReducer 