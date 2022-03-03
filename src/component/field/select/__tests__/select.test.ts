import Select from "../index.svelte";
import { afterEach, expect, it, describe } from "vitest";
import { cleanup, render, screen } from "@testing-library/svelte";

describe("<Select />", () => {
    afterEach(() => cleanup());

    it("placeholder", () => {
        const { container } = render(Select, {
            placeholder: "the placeholder",
        });
        expect(container).toBeTruthy();
        expect(screen.getByPlaceholderText("the placeholder")).toBeTruthy();
    });

    it("label", () => {
        const { container } = render(Select, {
            label: "the label",
        });
        expect(container).toBeTruthy();
        expect(screen.getByText("the label")).toBeTruthy();
    });

    it("value", () => {
        const { container } = render(Select, {
            value: "the value",
        });
        expect(container).toBeTruthy();
        expect(screen.getByDisplayValue("the value")).toBeTruthy();
    });

    it("readonly", () => {
        const { container } = render(Select, {
            readonly: true,
        });

        expect(container).toBeTruthy();
        expect(container.querySelector("input[readonly]")).toBeTruthy();
    });

    it("name", () => {
        const { container } = render(Select, {
            name: "state",
        });

        expect(container).toBeTruthy();
        expect(container.querySelector("input[name='state']")).toBeTruthy();
    });
});
