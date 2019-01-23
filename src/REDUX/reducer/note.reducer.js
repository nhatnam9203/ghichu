

import * as types from '../action/type'


const data = [
    {
        id: 1,
        title: 'Ghi chú thường',
        content: 'Đây là ghi chú thường',
        updateAt: new Date(),
        type: 'normal'
    },
    {
        id: 2,
        title: 'Chú ý',
        content: 'Đây là ghi chú dùng để nhắc nhở',
        updateAt: new Date(),
        type: 'notice'
    },
    {
        id: 3,
        title: 'Cảnh báo',
        content: 'Đây là ghi chú cảnh báo việc quan trọng ....',
        updateAt: new Date(),
        type: 'danger'
    }
];


const initialState = JSON.parse(localStorage.getItem('note')) ? JSON.parse(localStorage.getItem('note')) : data;

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.getNotes:
            state = JSON.parse(localStorage.getItem('note'));
            return [...state]

        case types.addNote:
            const { title, content,select } = payload;
            const id = state.length + 1;
            state.push({ id, title, content,type:select });
            localStorage.setItem('note', JSON.stringify(state));
            return [...state];

        case types.editNote:
            const pos = findNote(state,payload);
            state[pos] = payload;
            localStorage.setItem('note',JSON.stringify(state));
            return [...state];

        case types.deleteNote:
            const index = findNote(state,payload);
            const arr_delete = state.filter((obj,i)=>{
                return i !== index;
            })
            state = arr_delete;
            localStorage.setItem('note',JSON.stringify(state));
            return [...state];
        
        case types.search:
            
            const key_search = payload;
            if(!key_search){
                state = JSON.parse(localStorage.getItem('note'));
                return [...state];
            }else{
                state = JSON.parse(localStorage.getItem('note'));
                state = state.filter((obj,i)=>{
                    return obj.content.toLowerCase().indexOf(key_search) > -1;
                 });
                 return [...state];
            }
        
        case types.select_search:
        console.log(payload.type);
            if(!payload.type){
                state = JSON.parse(localStorage.getItem('note'));
                return [...state];
            }else{
                let arr_result = [];
                state = JSON.parse(localStorage.getItem('note'));
                for(let i = 0;i<state.length;i++){
                    if(payload.type === state[i].type)
                        arr_result.push(state[i]);
                }         
                return [...arr_result];
            }
            
          
        default:
            return state
    }
}


const findNote=(ListNote,Note)=>{
        for(let i=0;i<ListNote.length;i++){
            if(Note.id === ListNote[i].id)
                return i;
        }
    return -1;
}