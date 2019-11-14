const initialState = {
  authError: null,
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      console.log('sign out success')
      return {
        ...state,
      }
    case 'SIGNUP_SUCCESS':
      console.log('sign up success')
      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      console.log('sign up success')
      return {
        ...state,
        authError: action.error.message,
      }
    default:
      return state
  }
}

export default authReducer