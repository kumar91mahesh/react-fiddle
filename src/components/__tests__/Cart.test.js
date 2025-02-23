import RestaurantMenu from "../RestaurantMenu";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should load Restaurent Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Love Loaded Desserts (1)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(1);
  const addBtn = screen.getAllByRole("button",{ name: "Add to Cart"});
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument();

});
