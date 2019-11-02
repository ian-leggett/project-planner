export const signIn = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
      await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
      )
      dispatch({ type: 'LOGIN_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', error })
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
      await firebase.auth().signOut()
      dispatch({ type: 'SIGNED_OUT_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'SIGNED_OUT_OUT_ERROR' })
    }
  }
}