import { defaultNoteState } from './default'

let clone = require('lodash/clone')

export default {
  note: clone(defaultNoteState),
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  saveTimeOut: null
}
