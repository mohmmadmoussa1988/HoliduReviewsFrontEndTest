import AppActionTypes from "./app.types";
import { reviewsRequest } from "../../utils/requests";

export const fetchReviewsStart = () => ({
  type: AppActionTypes.FETCH_REVIEWS_START,
});

export const fetchReviewsSuccess = (reviews, page, clear = false) => ({
  type: AppActionTypes.FETCH_REVIEWS_SUCCESS,
  payload: { reviews, page, clear },
});

export const fetchFilteredData = (reviews) => ({
  type: AppActionTypes.FETCH_FILTERED_REVIEWS_SUCCESS,
  payload: { reviews },
});

export const fetchReviewsFailure = () => ({
  type: AppActionTypes.FETCH_REVIEWS_FAILURE,
});

export const noMoreDataRetrieved = () => ({
  type: AppActionTypes.NO_MORE_DATA_RETRIEVED,
});

export const fetchReviewsStartAsync = (page, limit, score, channel, clear) => {
  return async (dispatch) => {
    dispatch(fetchReviewsStart());
    let reviews = await reviewsRequest(page, limit, score, channel);
    if (score !== undefined || channel !== undefined) {
      dispatch(fetchFilteredData(reviews.data));
    } else {
      if (reviews.data) {
        if (reviews.data.length == 0) {
          dispatch(noMoreDataRetrieved());
        } else {
          dispatch(fetchReviewsSuccess(reviews.data, page, clear));
        }
      } else {
        dispatch(fetchReviewsFailure());
      }
    }
  };
};
