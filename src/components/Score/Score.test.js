import React from "react";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Score from "./Score.component";
describe(`<Score />`, () => {
  it("should render Score", () => {
    const wrapper = shallow(<Score></Score>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
