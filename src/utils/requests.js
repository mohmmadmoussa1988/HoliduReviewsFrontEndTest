import axios from "axios";
import { serverUrl } from "../constants/index";

export const reviewsRequest = async (page, limit, score, channel) => {
  if (score == 0) {
    score = null;
  }
  return await axios.get(
    serverUrl + "reviews",
    {
      params: {
        _page: page,
        _limit: limit,
        score: score,
        channel: channel,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
