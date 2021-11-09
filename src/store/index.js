import { createStore } from "redux";

const initialState = {
  repository: [
    "knoxpo/firefunctions",
    "nbhakar/Food-deilvery",
    "nbhakar/Drum-Kit",
  ]
};

const storeReducer = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      repository: state.repository.push(action.info),
    };

  }
  return state;
};

const store = createStore(storeReducer,initialState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
