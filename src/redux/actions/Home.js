import types from "../types";
import store from "../store";
import { apiGet } from "../../services/api";
import {
  GET_ARTICLES,
  GET_ARTICLE_BY_ID,
  GET_RELATED_ARTICLES,
} from "../../services/urls";

const { dispatch } = store;

export async function getArticles() {
  const res = await fetch(GET_ARTICLES);
  const responseJson = await res.json();
  console.log(responseJson);
  dispatch({
    type: types.GET_ARTICLES,
    payload: responseJson,
  });
}

export async function getArticleById(id) {
  const res = await fetch(`${GET_ARTICLE_BY_ID}/${id}`);
  const responseJson = await res.json();
  console.log(responseJson);
  dispatch({
    type: types.GET_ARTICLE_BY_ID,
    payload: responseJson,
  });
  return responseJson;
}

export async function getRelatedArticle(id, page = 1, pageSize = 9) {
  console.log('PAGE DATA', page, pageSize);
  const res = await fetch(
    `${GET_RELATED_ARTICLES}/${id}?page=${page}&pageSize=${pageSize}`
  );
  const responseJson = await res.json();
  console.log("get related artclies", responseJson);
  dispatch({
    type: types.GET_RELATED_ARTICLES,
    payload: responseJson,
  });
}
