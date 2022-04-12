import React from "react";
import { cleanup, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axios from "axios";
import App from "../App";
import fakePrefectureList from "./fakeData/fakePrefectureList";

jest.mock("axios");
jest.mock(
  "./../components/PopulationChart",
  () =>
    function DummyPopulationChart() {
      return <div />;
    }
);

afterEach(cleanup);

it("renders 47 prefecture checkbox", async () => {
  axios.get.mockResolvedValue(fakePrefectureList);
  await act(async () => {
    render(<App />);
  });
  expect(document.getElementsByClassName("PrefectureCheckbox").length).toBe(47);
});
