import types from "../types";

const initialState = {
  Articles: null,
  FullArticle: null,
  Related: null,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES:
      const data = action.payload;
      return { ...state, Articles: data };
    case types.GET_ARTICLE_BY_ID:
      const article = action.payload;
      return { ...state, FullArticle: article };
    case types.GET_RELATED_ARTICLES:
      const related = action.payload;
      return {
        ...state,
        Related: {
          ...state.Related,
          data: state.Related
            ? [...state.Related.data, ...related?.data]
            : [...related?.data],
          page: related.page,
          total_pages: related?.total_pages,
          total_data: related?.total_data,
        },
      };
    default:
      return state;
  }
};
