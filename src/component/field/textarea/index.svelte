<script lang="ts">
    import Label from "../label/index.svelte";

    export let name: string = "";
    export let label: string = "";
    export let placeholder: string = "";
    export let readonly: boolean = false;
    export let value: string = "";
</script>

<Label name={label}>
    <textarea class="input" {name} {placeholder} {readonly}>
        {value}
    </textarea>
</Label>

<style>
    .input {
        background: var(--color-input-background, transparent);
        border-radius: 4px;
        border: 1px solid var(--color-input-border, rgba(153, 153, 153, 0.4));
        box-sizing: border-box;
        color: var(--color-text-primary, #24292e);
        font-family: var(--font-family, Roboto, sans-serif);
        font-size: 14px;
        min-height: 76px;
        padding: 6px 12px;
        resize: vertical;
        width: 100%;
    }

    .input[readonly] {
        background: var(--color-input-disabled-background, #fafafa);
        border-color: var(--color-input-disabled-border, #d1d5da);
        cursor: default;
    }
</style>
