import { render, unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ComicList from "./ComicsList";

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

it("renders with or without comics", () => {
    act(() => {
        render(<ComicList />, container);
    });
    expect(container.querySelector('ul')).not.toBe(null);
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
                <ComicList comics={comics} />
            </BrowserRouter>,
            container
        );
    });

    expect(container.querySelectorAll('a').length).toBe(3);
});
