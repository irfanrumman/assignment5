const initialData = {
  posts: [],
  filteredPosts: [],
  isLoading: true,
  editMode: false,
  editAbleMode: null,
  errors: { fetchErr: null, patchErr: null },
  confirmModal: { showModal: false, type: null, id: null },
  filterType: "fname",
};
export default initialData;
