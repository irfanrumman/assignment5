import { createContext, useEffect, useReducer, useState } from "react";
import contactPageReducer from "../reducers/contacPageReducer";
import initialData from "../utilities/contactData";
import generateNextId from "../utilities/generateNextId";

export const Contactctx = createContext();

const ContactPageProvider = ({ children }) => {
  const [contactPosts, dispatch] = useReducer(contactPageReducer, initialData);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://69d9223b0576c938825a9315.mockapi.io/contactData`;
        const res = await fetch(url);
        const data = await res.json();

        const searchData = searchItem
          ? data.filter((item) => {
              const search = searchItem.toLowerCase();
              return (
                item.fname.toLowerCase() === search ||
                item.lname.toLowerCase() === search ||
                item.email.toLowerCase() === search ||
                item.phone.toLowerCase() === search
              );
            })
          : data;
        if (!res.ok) {
          throw new Error("Sorry, failed to fetch data!");
        }

        if (searchItem.trim() && searchData.length == 0) {
          dispatch({
            type: "FETCH_DATA",
            payload: [],
          });
          throw new Error("Ops! No Data Found");
        }

        dispatch({
          type: "FETCH_DATA",
          payload: searchData,
        });
        dispatch({
          type: "SET_ERROR",
          payload: { type: "fetchErr", message: null },
        });
      } catch (err) {
        dispatch({
          type: "SET_ERROR",
          payload: { type: "fetchErr", message: err.message },
        });
      }
    };
    fetchData();
  }, [searchItem]);

  const contactShowHandler = (postId) => {
    dispatch({
      type: "contactEditHandler",
      payload: postId,
    });
  };
  const contactUpdateHandler = async (e, postId, formData) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://69d9223b0576c938825a9315.mockapi.io/contactData/${postId}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

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
  const deleteHandelr = async (postId) => {
    const success = await contactRemoveHandler(postId);
    if (success) {
      dispatch({ type: "CLOSE_MODAL" });
    }
  };
  const closeConfirmModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const confirmModalHandler = (postId) => {
    dispatch({
      type: "CONFIRM_MODAL",
      payload: { type: "DELETE_COFIRM", id: postId },
    });
  };
  const contactRemoveHandler = async (postId) => {
    try {
      const res = await fetch(
        `https://69d9223b0576c938825a9315.mockapi.io/contactData/${postId}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error(`Sorry, It Couldn't Be Deleted!`);

      dispatch({
        type: "contactRemoveHandler",
        payload: postId,
      });
      return true;
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: { type: "deleteErr", message: err.message },
      });
      return false;
    }
  };

  const contactSubmitHanler = async (post) => {
    try {
      const res = await fetch(
        `https://69d9223b0576c938825a9315.mockapi.io/contactData`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        },
      );

      if (!res.ok) {
        throw new Error(`Sorry, Something is wrong!`);
      }

      const newPost = await res.json();

      if (newPost) {
        alert(`Succsessfully Added!`);
      }

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
  const filteringHandel = (postName) => {
    dispatch({
      type: "NAME_FILTERD",
      payload: postName,
    });
  };
  const contactData = {
    contactPosts,
    setSearchItem,
    dispatch,
    contactShowHandler,
    contactUpdateHandler,
    deleteHandelr,
    contactRemoveHandler,
    contactSubmitHanler,
    confirmModalHandler,
    closeConfirmModal,
    filteringHandel,
  };
  return (
    <Contactctx.Provider value={contactData}>{children}</Contactctx.Provider>
  );
};
export default ContactPageProvider;
