import { render, unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ComicsGrid from "./ComicsGrid";

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

it("renders without comics", () => {
    act(() => {
        render(<ComicsGrid />, container);
    });
    expect(container.querySelector('div.container')).not.toBe(null);
});

it('', function () {

    const comics = [
        {id: 1},
        {id: 2},
        {id: 3}
    ]

    act(() => {
        render(
            <BrowserRouter>
                <ComicsGrid comics={comics} />
            </BrowserRouter>,
            container
        );
    });

    expect(container.querySelectorAll('a').length).toBe(3);
});
