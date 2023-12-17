import { createStore } from "redux";

const allState = (
  state = {
    currentPage: 1,
    userEmail: "",
    userName: "",
    savedIDs: [],
    error: "",
    genre: "",
  },
  action
) => {
  if (action.type === "genre") {
    return {
      genre: action.genre,
      currentPage: state.currentPage,
      userEmail: state.userEmail,
      userName: state.userName,
      savedIDs: state.savedIDs,
      error: state.error,
    };
  }
  if (action.type === "error") {
    return {
      genre: state.genre,
      currentPage: state.currentPage,
      userEmail: state.userEmail,
      userName: state.userName,
      savedIDs: state.savedIDs,
      error: action.error,
    };
  }

  if (action.type === "user-name") {
    return {
      genre: state.genre,
      currentPage: state.currentPage,
      userEmail: state.userEmail,
      userName: action.userName,
      savedIDs: state.savedIDs,
      error: state.error,
    };
  }
  if (action.type === "saved-ids") {
    return {
      genre: state.genre,
      currentPage: state.currentPage,
      userEmail: state.userEmail,
      userName: state.userName,
      savedIDs: action.savedIDs,
      error: state.error,
    };
  }
  if (action.type === "change-page") {
    return {
      genre: state.genre,
      currentPage: action.page,
      userEmail: state.userEmail,
      userName: state.userName,
      savedIDs: state.savedIDs,
      error: state.error,
    };
  }

  if (action.type === "user-email") {
    return {
      genre: state.genre,
      currentPage: state.currentPage,
      userEmail: action.userEmail,
      userName: state.userName,
      savedIDs: state.savedIDs,
      error: state.error,
    };
  }

  return state;
};
const store = createStore(allState);

export default store;
