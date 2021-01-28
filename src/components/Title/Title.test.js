import React from "react";
import { configure, shallow } from "enzyme";
import CenteredTitle from "./Title";
import toJson from "enzyme-to-json";
describe(`<CenteredTitle />`, () => {
  it("should render CenteredTitle", () => {
    const wrapper = shallow(<CenteredTitle />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
