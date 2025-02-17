import React from "react";
import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us page test case",  ()=> {
    it("Should load contact us component", ()=> {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside component", ()=> {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })

    it("Should load input name inside component", ()=> {
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    })
});