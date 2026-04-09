import generateNextId from "../utilities/generateNextId";

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
      const newPosts = state.posts.filter(
        (postItem) => postItem.id !== action.payload,
      );

      return {
        ...state,
        posts: newPosts,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        editAbleMode: null,
        confirmModal: {
          ...state.confirmModal,
          showModal: false,
        },
      };
    }

    case "SUBMIT_HANDLER": {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    case "CONFIRM_MODAL": {
      return {
        ...state,
        confirmModal: {
          ...state.confirmModal,
          type: action.payload.type,
          id: action.payload.id,
          showModal: true,
        },
      };
    }

    case "NAME_FILTERD": {
      const filterType = action.payload;

      const sorted = [...state.posts];

      if (filterType === "latest") {
        sorted.sort((a, b) => b.createdId - a.createdId);
      }
      if (filterType === "fname") {
        sorted.sort((a, b) => a.fname.localeCompare(b.fname));
      }
      if (filterType === "lname") {
        sorted.sort((a, b) => a.lname.localeCompare(b.lname));
      }

      if (filterType === "oldest") {
        sorted.sort((a, b) => a.createdId - b.createdId);
      }
      return {
        ...state,
        filterType,
        filteredPosts: sorted,
      };
    }

    default:
      return state;
  }
};
export default contactPageReducer;
