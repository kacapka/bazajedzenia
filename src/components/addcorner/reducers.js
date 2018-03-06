import { combineReducers } from 'redux';
import TYPES from 'actions/action_types';

export const step = (state = 0, action) => {
    switch(action.type) {
        case TYPES.SET_STEP:
            return action.payload;
        default:
            return state;
    }
}

const initialData = {
    0: {
        name: 'informacje',
        data: {
            corner: {label: 'nazwa lokalu', placeholder: 'Amrit Kebab', value: ''},
            kitchen: {label: 'rodzaje kuchni', placeholder: 'arabska, kebab, turecka', value: ''},
            phone: {label: 'telefon', placeholder: '22-454-343, 501-500-400', value: ''},
            email: {label: 'email', placeholder: 'kebabamrit@warszawa.pl', value: ''},
            www: {label: 'strona domowa', placeholder: 'amrtikebab.pl', value: ''},
            fb: {label: 'facebook', placeholder: 'facebook.pl/amritwwa', value: ''},
            insta: {label: 'instagram', placeholder: '@amritkebabWarszawa', value: ''}
        }
    },
    1: {
        name: 'lokalizacja',
        data: {
            address: {label: 'adres', placeholder: 'Al. Prymasa Tysiąclecia 38', value: ''},
            locationInfo: {label: 'opis lokalizacji', placeholder: 'róg ul. Połczyńskiej/Tysiąclecia', value: ''},
            coords: {value: [ 52.2276985, 21.0131939 ]}
        }
    },
    2: {
        name: 'godziny otwarcia',
        data: {
            monday: {label: 'pon', value: ['1', '']},
            tuesday: {label: 'wt', value: ['', '']},
            wednesday: {label: 'śr', value: ['', '']},
            thursday: {label: 'czw', value: ['', '']},
            friday: {label: 'pt', value: ['', '']},
            saturday: {label: 'so', value: ['', '']},
            sunday: {label: 'nd', value: ['', '']}
        }
    },
    3: {
        name: 'potwierdz',
        data: {
            owner: {label: 'pracownik restauracji', value: true },    
            user: {label: 'gość', value: false },   
            email: {label: 'kontakt', placeholder: 'telefon / mail', value: ''}   
        }
    }
}

export const data = (state = initialData, action) => {
    
    switch(action.type) {
        case TYPES.UPDATE_STEP:
            let step = action.payload.step;
            let update = action.payload.update;
            return {
                ...state,
                [step]: {
                    ...state[step],
                    data: update
                }
            }
        default:
            return state;
    }
}

const addCorner = combineReducers({
    step,
    data
}); 

export default addCorner;
