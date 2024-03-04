const initialState = {
};

export function SocialReducer(state = initialState, action) {
  if (action.type === "SOCIAL") {
    return {
      ...action.payload,
    };
  }

  return state;
}
