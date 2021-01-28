import React from "react";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Filters from "./Filters";
import { Provider } from "react-redux";
import store from "../../redux/store";
describe(`<Filters />`, () => {
  it("should render Filters", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Filters />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
