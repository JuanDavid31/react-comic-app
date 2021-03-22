import { render, unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Comic from "./Comic";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<BrowserRouter><Comic /></BrowserRouter>, container);
    });
    expect(container.textContent).toBe('');

    act(() => {
        render(<BrowserRouter> <Comic name='Jenny' /> </BrowserRouter>, container);
    });
    expect(container.textContent).toContain('Jenny');

    act(() => {
        render(<BrowserRouter> <Comic name="Margaret" image='' /> </BrowserRouter>, container);
    });
    expect(container.textContent).toContain("Margaret");
});
