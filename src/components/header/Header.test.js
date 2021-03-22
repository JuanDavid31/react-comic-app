import {render, unmountComponentAtNode} from "react-dom";
import {act} from "@testing-library/react";
import Header from "./Header";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("does render", () => {
    act(() => {
        render(<Header />, container);
    });
    expect(container.querySelector('header button').textContent).toBe('Show grid');
    expect(container.querySelector('header button + button').textContent).toBe('Show list');
});

it('does execute onClick when show grid button is clicked', () => {
    const onClick = jest.fn();
    act(() => {
        render(<Header onShowGridClick={onClick} />, container);
    });

    const showGridButton = container.querySelector('header button');

    act(() => {
        showGridButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    });

    expect(onClick).toHaveBeenCalledTimes(1);
});

it('does execute onClick when the show list button is clicked', () => {
    const onClick = jest.fn();
    act(() => {
        render(<Header onShowListClick={onClick} />, container);
    });

    const showListButton = container.querySelector('header button + button');

    act(() => {
        showListButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    });

    expect(onClick).toHaveBeenCalledTimes(1);
});
