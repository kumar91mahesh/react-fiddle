import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve(
        {
            json: ()=> Promise.resolve(MOCK_DATA),
        }
    )
})
it("Should Search res card list items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  })

  const resCardBeforeSearch = screen.getAllByTestId("resCard");
expect(resCardBeforeSearch.length).toBe(8);

const searchBtn = screen.getByTestId("search-btn");
const searchInput = screen.getByTestId("search-input");
fireEvent.change(searchInput, { target: { value: "pizza" } });
fireEvent.click(searchBtn);
const resCard = screen.getAllByTestId("resCard");
expect(resCard.length).toBe(2);
 expect(searchBtn).toBeInTheDocument();
});

it("Should Filter Top rated restaurenets", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        );
    })
    
    const resCardBeforeSearch = screen.getAllByTestId("resCard");
    expect(resCardBeforeSearch.length).toBe(8); 
    const topRatedBtn = screen.getByTestId("top-rated-btn");
    fireEvent.click(topRatedBtn);
    const rescardAfterClick = screen.getAllByTestId("resCard");
    expect(rescardAfterClick.length).toBe(4);
});
