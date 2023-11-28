import { loginStart, loginSuccess, loginFailure } from "./authReducer";

export const logiUser = () => async (dispatch) => {
  try {
    dispatch(loginStart());
    const res = await api.auth.login(data);
    dispatch(loginSuccess(res.data.accessToken));
    // dispatch(getProfile)
  } catch (e) {
    console.error(e);
    dispatch(loginFailure(e.message));
  }
};