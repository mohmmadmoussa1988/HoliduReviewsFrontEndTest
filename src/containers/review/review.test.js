import React from "react";
import { configure, shallow } from "enzyme";
import ReviewContainer from "./review";
import toJson from "enzyme-to-json";
describe(`<ReviewContainer />`, () => {
  it("should render ReviewContainer", () => {
    const wrapper = shallow(
      <ReviewContainer
        review={[
          {
            headline: "Amazing Pool!",
            comment:
              "Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.",
            author: "Alissa Stacey",
            positiveFeedback: "The location is perfect",
            negativeFeedback: null,
            score: 4.1,
            channel: "AIRBNB",
            publishedAt: "2020-08-11T12:20:02.340Z",
          },
        ]}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
