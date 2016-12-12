import { createAction } from 'core/utils'

export const closeSnackBar = () => {
  const action = {
    key: 'snackbar',
    payload: {
      active: false
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}
