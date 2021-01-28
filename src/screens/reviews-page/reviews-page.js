import React from "react";
import { ReviewPageWrapper } from "./reviews-page.styles";
import ReviewsContainer from "../../containers/reviews-container/reviews-container";
import TopHeader from "../../components/TopHeader/TopHeader.component";
const ReviewsPage = () => {
  return (
    <ReviewPageWrapper>
      <TopHeader />
      <ReviewsContainer />
    </ReviewPageWrapper>
  );
};

export default ReviewsPage;
