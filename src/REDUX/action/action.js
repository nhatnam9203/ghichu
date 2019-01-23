

import * as types from './type'

export const getNotes = (payload) => ({
    type: types.getNotes,
    payload
});

export const addNote = (note) => ({
    type: types.addNote,
    payload: note
})

export const deleteNote = (note) => ({
    type: types.deleteNote,
    payload: note
})

export const editNote = (note) => ({
    type: types.editNote,
    payload: note
})

export const search = (payload) => ({
  type: types.search,
  payload: payload
})


export const select_search = (payload) => ({
  type: types.select_search,
  payload: payload
})




