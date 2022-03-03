declare namespace svelte.JSX {
    interface HTMLProps<T> {
        onclick_outside?: (event: MouseEvent) => void;
    }
}
