import { GETQUESTION, ADDPLAYERS } from './../Action-types/actions';


export const getQuestion = (payload) => {
    return {
        type: GETQUESTION, payload
    }
}


export const addPlayers = (payload) => {
    return {
        type: ADDPLAYERS, payload
    }
}