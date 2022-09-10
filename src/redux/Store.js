
import {createStore} from 'redux';
import TodoReducer from './ToDoReducer';


const Store=createStore(TodoReducer,
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default Store;