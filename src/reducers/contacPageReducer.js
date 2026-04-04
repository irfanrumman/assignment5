const contactPageReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA": {
      return {
        ...state,
        posts: [...action.payload],
        isLoading: false,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.type]: action.payload.message,
        },
        isLoading: false,
      };
    }
    case "contactEditHandler": {
      const [selectPost] = state.posts.filter(
        (postItem) => postItem.id === action.payload,
      );
      return {
        ...state,
        editAbleMode: selectPost,
        editMode: true,
      };
    }
    case "contactUpdateHandler": {
      const updatedPosts = state.posts.map((postItem) =>
        postItem.id == action.payload.id
          ? { ...postItem, ...action.payload }
          : postItem,
      );
      return {
        ...state,
        posts: updatedPosts,
        editAbleMode: null,
        editMode: false,
      };
    }

    case "contactRemoveHandler": {
    }

    default:
      return state;
  }
};
export default contactPageReducer;
