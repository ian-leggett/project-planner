export const createProject = (project) => {
  return async (dispatch, getState, {getFirestore}) => {
    try {
      const firestore = getFirestore()
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        authorId: 123445,
        createdAt: new Date(),
      })
      dispatch({ type: 'CREATE_PROJECT', project })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'CREATE_PROJECT_ERROR', error })
    }
  }
}