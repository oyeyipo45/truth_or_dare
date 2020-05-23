import { GETQUESTION, ADDPLAYERS } from './../Action-types/actions';


const initialState = {
    playerNames : [
       { 
            id: '',
            playerName: ''
       }
    ],
    questions : [
        {
            id: '',
            questionType: '',
            question: ''
        }
    ]
}


const Reducer = (state = initialState, action) => {
    switch(action.type){
        case ADDPLAYERS: 
            return {
                ...state,
               playerNames:
                    {id: 1, playerName : action.payload}
            }
        
         case GETQUESTION: 
            return {
                ...state,
                questions:
                {id: 1, questionType: "dareq", question: action.payload}
        }
        
        default: 
        return state;
        
    }
}

export default Reducer;