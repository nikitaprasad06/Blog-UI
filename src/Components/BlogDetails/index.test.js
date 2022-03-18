import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";
import { BlogDetails } from "./index";

const blogDetails = [{
  id: 1,
  title: "Travel Guide to Santorini",
  subheader: `Santorini is one of those bucket list destinations we all dream over. So if you’ve recently taken the plunge and booked your ticket to the beautiful island of Santorini, you’re probably wondering how you should spend your time there. Fear not, we’ve got the complete travel guide 
  to Santorini right here for you! From where to stay, play, shop and eat, this is your best guide to visiting Santorini for the first time`,
  details: [
    {
      label: "Santorini travel guide",
      data: `Santorini is the most popular of the Greek Islands. There’s something about the white houses and blue roof tops that travellers just can’t get enough of. The size of the island is just a little larger than Manhattan, with a total population of a little more than 15,000 permanent residents.
    This of course is a drop in the water compared to the amount of tourists who visit per year, estimated at two million annually.`,
    },
  ],
  imgUrl: " ",
  timestamp: "2021-11-06T10:30:00.000Z",
},]

describe("<BlogDetails />", () => {
  const setup = () => {
    const setPageTitle = jest.fn()
    const utils = render(
        <Provider store={configureStore()}>
          <BlogDetails
            blogDetails={blogDetails}
            setPageTitle={setPageTitle}
          />
        </Provider>
    );
    return {
      utils,
    };
  };

  afterEach(cleanup);

  test("should contain BlogDetails component", () => {
    setup();
    const blogDetailsContainer = screen.getByTestId("blogDetailsContainer");
    expect(blogDetailsContainer).toBeInTheDocument();
  });
});
