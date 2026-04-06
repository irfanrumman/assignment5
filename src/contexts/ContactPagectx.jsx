import { createContext, useEffect, useReducer } from "react";
import contactPageReducer from "../reducers/contacPageReducer";
import initialData from "../utilities/contactData";
import generateNextId from "../utilities/generateNextId";

export const Contactctx = createContext();

const ContactPageProvider = ({ children }) => {
  const [contactPosts, dispatch] = useReducer(contactPageReducer, initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/contactData`);
        if (!res.ok) {
          throw new Error("Sorry, failed to fetch data!");
        }
        const data = await res.json();
        dispatch({
          type: "FETCH_DATA",
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: { type: "fetchErr", message: err.message },
        });
      }
    };
    fetchData();
  }, []);

  const contactEditHandler = (postId) => {
    dispatch({
      type: "contactEditHandler",
      payload: postId,
    });
  };
  const contactUpdateHandler = async (e, postId, formData) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/contactData/${postId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Sorry, Failed to Update!`);
      }

      const updatedPost = await res.json();

      dispatch({
        type: "contactUpdateHandler",
        payload: updatedPost,
      });

      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: { type: "patchErr", message: err.message },
      });
      return false;
    }
  };
  const contactRemoveHandler = (post) => {
    dispatch({
      type: "contactRemoveHandler",
      payload: post,
    });
  };

  const contactSubmitHanler = async (post) => {
    try {
      const res = await fetch(`http://localhost:3000/contactData`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      if (!res.ok) {
        throw new Error(`Sorry, Something is wrong!`);
      }

      const newPost = await res.json();

      dispatch({
        type: "SUBMIT_HANDLER",
        payload: newPost,
      });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: { type: "submirErr", message: err.message },
      });
      return false;
    }
  };

  const contactData = {
    contactPosts,
    dispatch,
    contactEditHandler,
    contactUpdateHandler,
    contactRemoveHandler,
    contactSubmitHanler,
  };
  return (
    <Contactctx.Provider value={contactData}>{children}</Contactctx.Provider>
  );
};
export default ContactPageProvider;
