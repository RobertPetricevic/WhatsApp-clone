export const initialState = {
  user: null,
  searchRooms: "",
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SEARCH_ROOMS: "SEARCH_ROOMS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SEARCH_ROOMS:
      return {
        ...state,
        searchRooms: action.searchText,
      };
    default:
      break;
  }
};

export default reducer;
