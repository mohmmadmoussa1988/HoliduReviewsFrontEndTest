import React from "react";
import ReviewsPage from "./screens/reviews-page/reviews-page";
import { AppWrapper } from "./App.styles";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage.component";
import GlobalStyle from "./assets/fonts/font";
function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <BackgroundImage />
      <ReviewsPage />
    </AppWrapper>
  );
}

export default App;
