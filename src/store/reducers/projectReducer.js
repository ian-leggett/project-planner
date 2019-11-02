const initialState = {
  projects: [
    { id: 1, title: 'Help me find peach', content: 'blah blah blah' },
    { id: 2, title: 'Collect all the stars', content: 'blah blah blah' },
    { id: 3, title: 'Egg hunt with Yoshi', content: 'blah blah blah' },
  ]
}
const projectReducer = (state = initialState, action) => {
  switch (action) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('error created', action.error)
      return state
    default:
      return state
  }
}

export default projectReducer