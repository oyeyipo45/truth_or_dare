import {createStore} from "redux";
import Reducer from "../Reducer/Reducer"
import { addPlayers, getQuestion } from './../Actions/index';


const store = createStore(Reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addPlayers("damilola"))
store.dispatch(addPlayers("oeyipo"))
store.dispatch(getQuestion("dcdcdcd"))

export default store;