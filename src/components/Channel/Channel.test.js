import React from "react";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Channel from "./Channel.component";

describe(`<Channel />`, () => {
  it("should render Channel image", () => {
    const wrapper = shallow(<Channel />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
