export const note = state => state.note

export const notes = state => state.notes.sort((a, b) => {
  return a['lastSaved'] < b['lastSaved']
})
