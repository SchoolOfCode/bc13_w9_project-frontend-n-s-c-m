import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import CreateCard from "./CreateCard.js";

const dummieData = {
	week: 1,
	day: "Test day",
	image: "http test image address",
	topic: ["Array", "of", "tests"],
	ref: ["Array", "of", "tests"]
}

test("should contain input", () => {
    render(<CreateCard cards={dummieData} setCards={ jest.fn()}/>)
    const dayInput = screen.getByPlaceholderText("Day")
    //fireEvent.change(dayInput, {target:{value:"Monday"}})
    userEvent.type(dayInput, "Monday")
    expect(dayInput.value).toBe("Monday"); 
})

