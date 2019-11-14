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

export const signUp = (newUser) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )
      await firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
      })
      dispatch({ type: 'SIGNUP_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'SIGNUP_ERROR', error })
    }
  }
}