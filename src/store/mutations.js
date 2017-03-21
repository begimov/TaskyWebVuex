import * as types from './mutation-types'
import { defaultNoteState } from './default'

let clone = require('lodash/clone')

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
    clearTimeout(state.saveTimeOut)
    state.saveTimeOut = null
  },
  [types.SET_CURRENT_NOTE] (state, note) {
    if (note === null) {
      state.note = clone(defaultNoteState)
      return
    }
    state.note = note
  },
  [types.DELETE_NOTE] (state, id) {
    state.notes = state.notes.filter(note => {
      return note.id !== id
    })
  }
}
