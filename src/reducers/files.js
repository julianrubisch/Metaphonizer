export const files = (state = [], action) => {
  switch (action.type) {
    case "ADD_UNPROCESSED_FILES":
      return action.files;
    default:
      return state;
  }
};
