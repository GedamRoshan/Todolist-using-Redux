import {createStore} from "redux"

import Reducerroot from './reducer/index';


const store = createStore(Reducerroot,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;