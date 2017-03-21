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

export const countWords = state => {
  const body = state.note.body
  if (body) {
    const count = body.trim().split(/\s{1,}/).reduce((acc, elem) => {
      return elem
        ? ++acc
        : acc
    }, 0)
    return count
  }
  return 0
}

export const countChars = state => {
  const body = state.note.body
  if (body) {
    return body.length
  }
  return 0
}
