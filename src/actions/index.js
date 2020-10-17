export const ADD_TO_DISPLAY = "ADD_TO_DISPLAY";
export default function addToDisplay(check) {
  return {
    type: ADD_TO_DISPLAY,
    check,
  };
}
