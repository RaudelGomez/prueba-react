import { createStore } from "redux";

const Reloj = {
    hora: 102,
    segundo: 111
};

const reducerReloj = (state = Reloj, action) => {
    console.log(action)
    switch (action.type) {
        case 'CAMBIATE':
        return {
            ...state,
            hora: state.segundo,
            segundo: state.hora,
        };

        default: return state;
    }

};

export default createStore(reducerReloj);


