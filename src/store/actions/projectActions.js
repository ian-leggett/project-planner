export const createProject = (project) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    try {
      const firestore = getFirestore()
      const profile = getState().firebase.profile
      const authorId = getState().firebase.auth.uid
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      dispatch({ type: 'CREATE_PROJECT', project })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'CREATE_PROJECT_ERROR', error })
    }
  }
}