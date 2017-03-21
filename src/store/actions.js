import * as mutations from './mutation-types'

export const saveNote = ({commit, dispatch, state}) => {
  commit(mutations.TOUCH_LAST_SAVED)
  if (state.note.id === null) {
    commit(mutations.SET_CURRENT_NOTE_ID, Date.now())
    commit(mutations.PREPEND_TO_NOTES, state.note)
  }
  dispatch('storeNotes')
}

export const storeNotes = ({ state }) => {
  localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const openNote = ({ commit }, note) => {
  commit(mutations.SET_CURRENT_NOTE, note)
}

export const deleteNote = ({ commit, dispatch, state }, id) => {
  if (id === state.note.id) {
    dispatch('newNote')
  }
  commit(mutations.DELETE_NOTE, id)
  dispatch('storeNotes')
}

export const startSaveTimeout = ({commit, dispatch, state}) => {
  if (state.saveTimeOut !== null) {
    return
  }
  commit(mutations.SET_SAVE_TIMEOUT, {
    cb () {
      dispatch('saveNote')
      dispatch('stopSaveTimeout')
    },
    delay: 1000
  })
}

export const stopSaveTimeout = ({commit, dispatch, state}) => {
  commit(mutations.CLEAR_SAVE_TIMEOUT)
}

export const newNote = ({commit, dispatch, state}) => {
  dispatch('stopSaveTimeout')
  commit(mutations.SET_CURRENT_NOTE, null)
}
