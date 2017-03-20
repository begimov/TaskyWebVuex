import * as types from './mutation-types'

export default {
  [types.SET_CURRENT_NOTE_ID] (state, id) {
    state.note.id = id
  },
  [types.PREPEND_TO_NOTES] (state, note) {
    state.notes.unshift(note)
  },
  [types.TOUCH_LAST_SAVED] (state) {
    state.note.lastSaved = Date.now()
  },
  [types.SET_SAVE_TIMEOUT] (state, { cb, delay }) {
    state.saveTimeOut = setTimeout(cb, delay)
  },
  [types.CLEAR_SAVE_TIMEOUT] (state) {
    state.saveTimeOut = null
  }
}
