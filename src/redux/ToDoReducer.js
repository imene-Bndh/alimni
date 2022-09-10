// Initialise the state
import crs from "../data.json"

const initialState = {courses: crs};

const TodoReducer = (state = initialState, action) =>{
    // Used to update the state each time the action change
    let newState ;
    // Change the state  according to the action CAPITAL LETTRES
    switch (action.type){
        // Add to the list the new todo
        case "ADD":
            return { courses: [...state.courses, action.payload] };
        case "EDIT":
            newState = [...state.courses];
            // Find the index of the item to edit
            const index = newState.findIndex((elem) => elem.id === action.payload.id);
            newState[index].stoppedAt = action.payload.stoppedAt;
            return{courses: newState}
        case "START":
            newState = [...state.courses];
            // Find the index of the item to edit
            const i = newState.findIndex((elem) => elem.id === action.payload.id);
            newState[i ].started = true;
            return{courses: newState}
        default:
            return state;
    }
}
export default TodoReducer;