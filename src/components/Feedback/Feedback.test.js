import React from "react";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Feedback from "./Feedback.component";
describe(`<Feedback />`, () => {
  it("should render Feedback", () => {
    const positiveFeeback = "positive feedback";
    const negativeFeedback = "negative feedback";
    const wrapper = shallow(
      <Feedback
        positiveFeeback={positiveFeeback}
        positiveFeeback={negativeFeedback}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
