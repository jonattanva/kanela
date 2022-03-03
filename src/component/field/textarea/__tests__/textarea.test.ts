import TextArea from "../index.svelte";
import { afterEach, expect, it, describe } from "vitest";
import { cleanup, render, screen } from "@testing-library/svelte";

describe("<TextArea />", () => {
    afterEach(() => cleanup());

    it("placeholder", () => {
        const { container } = render(TextArea, {
            placeholder: "the tests",
        });
        expect(container).toBeTruthy();
        expect(screen.getByPlaceholderText("the tests")).toBeTruthy();
    });

    it("label", () => {
        const { container } = render(TextArea, {
            label: "the tests",
        });
        expect(container).toBeTruthy();
        expect(screen.getByText("the tests")).toBeTruthy();
    });

    it("value", () => {
        const { container } = render(TextArea, {
            value: "the value",
        });
        expect(container).toBeTruthy();
        expect(screen.getByDisplayValue("the value")).toBeTruthy();
    });

    it("readonly", () => {
        const { container } = render(TextArea, {
            readonly: true,
        });

        expect(container).toBeTruthy();
        expect(container.querySelector("textarea[readonly]")).toBeTruthy();
    });

    it("name", () => {
        const { container } = render(TextArea, {
            name: "person",
        });

        expect(container).toBeTruthy();
        expect(container.querySelector("textarea[name='person']")).toBeTruthy();
    });
});
