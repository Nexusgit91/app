export const initailState = null;

export function reducer(state, action) {
  if (action.type === "user") {
    return action.payload;
  }

  return state;
}
