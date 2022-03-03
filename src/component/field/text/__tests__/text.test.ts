import Text from "../index.svelte";
import { afterEach, expect, it, describe } from "vitest";
import { cleanup, render, screen } from "@testing-library/svelte";

describe("<Text />", () => {
    afterEach(() => cleanup());

    it("placeholder", () => {
        const { container } = render(Text, {
            placeholder: "the tests",
        });
        expect(container).toBeTruthy();
        expect(screen.getByPlaceholderText("the tests")).toBeTruthy();
    });

    it("label", () => {
        const { container } = render(Text, {
            label: "the tests",
        });
        expect(container).toBeTruthy();
        expect(screen.getByText("the tests")).toBeTruthy();
    });

    it("value", () => {
        const { container } = render(Text, {
            value: "the value",
        });
        expect(container).toBeTruthy();
        expect(screen.getByDisplayValue("the value")).toBeTruthy();
    });

    it("readonly", () => {
        const { container } = render(Text, {
            readonly: true,
        });

        expect(container).toBeTruthy();
        expect(container.querySelector("input[readonly]")).toBeTruthy();
    });

    it("name", () => {
        const { container } = render(Text, {
            name: "person",
        });

        expect(container).toBeTruthy();
        expect(container.querySelector("input[name='person']")).toBeTruthy();
    });
});
