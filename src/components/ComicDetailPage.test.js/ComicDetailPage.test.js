import { render, unmountComponentAtNode } from "react-dom";
import { act } from "@testing-library/react";
import ComicDetailPage from "./ComicDetailPage";
import {BrowserRouter} from "react-router-dom";

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

it("renders comic data", async () => {
    const fakeComic = { results: { name: "Joni Baez" } };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeComic)
        })
    );

    await act(async () => {
        render(
            <BrowserRouter>
                <ComicDetailPage/>
            </BrowserRouter>,
            container
        );
    });

    expect(container.textContent).toBe(fakeComic.results.name);
    global.fetch.mockRestore();
});

it("Shows error message", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.reject("API is down")
    );

    await act(async () => {
        render(
            <BrowserRouter>
                <ComicDetailPage/>
            </BrowserRouter>,
            container
        );
    });

    expect(container.textContent).toBe('An error occurred, please try again.');
    global.fetch.mockRestore();
});
