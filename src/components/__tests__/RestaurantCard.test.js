import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMocks.json";


it("Should render RestaurantCard component", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
});