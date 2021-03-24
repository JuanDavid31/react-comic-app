import { render, unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import ComicsPage from "./ComicsPage";

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

it("does render ComicsList by default", async () => {
    const fakeComic = { results: [{ id: 1, name: "Joni Baez" }] };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeComic)
        })
    );

    await act(async () => {
        render(
            <BrowserRouter>
                <ComicsPage/>
            </BrowserRouter>,
            container
        );
    });

    expect(container.querySelector('ul')).not.toBe(null);
    global.fetch.mockRestore();
});

it("Shows error message", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.reject("API is down")
    );

    await act(async () => {
        render(
            <BrowserRouter>
                <ComicsPage/>
            </BrowserRouter>,
            container
        );
    });

    expect(container.querySelector('h4').textContent).toBe('An error occurred, please try again.');
    global.fetch.mockRestore();
});

it('does render Comicslist when there are no comics to show', () => {
    act(() => {
        render(
            <BrowserRouter>
                <ComicsPage/>
            </BrowserRouter>,
            container);
    });

    expect(container.querySelector('ul')).not.toBe(null);
});

it('does render Comicslist or ComicsGrid when buttons are pressed', () => {
    act(() => {
        render(
            <BrowserRouter>
                <ComicsPage/>
            </BrowserRouter>,
            container);
    });

    const showGridButton = container.querySelector('header button');

    act(() => {
        showGridButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    });

    expect(container.querySelector('div.container')).not.toBe(null);

    const showListButton = container.querySelector('header button + button');

    act(() => {
        showListButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    });

    expect(container.querySelector('ul')).not.toBe(null);

    act(() => {
        showGridButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    });

    expect(container.querySelector('div.container')).not.toBe(null);
});

it('does render ComicsGrid when type=grid query params is passed in url', () => {
    act(() => {
        render(
            <BrowserRouter basename={'/?type=grid'} >
                <ComicsPage/>
            </BrowserRouter>,
            container);
    });

    expect(container.querySelector('div.container')).not.toBe(null);
});

it('does render ComicsList when type=list query params is passed in url', () => {
    act(() => {
        render(
            <BrowserRouter basename={'/?type=list'} >
                <ComicsPage/>
            </BrowserRouter>,
            container);
    });

    expect(container.querySelector('ul')).not.toBe(null);
});
