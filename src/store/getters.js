import moment from 'moment'

export const note = state => state.note

export const notes = state => state.notes.sort((a, b) => {
  return a['lastSaved'] < b['lastSaved']
})

export const lastSaved = state => {
  if (!state.note.lastSaved) {
    return 'None'
  }
  return moment(state.note.lastSaved).calendar()
}
