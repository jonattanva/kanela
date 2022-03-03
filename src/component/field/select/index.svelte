<script lang="ts">
    import Icon from "./icon.svelte";
    import Label from "../label/index.svelte";
    import type { Option, Options } from "../../../type";
    import clickOutside from "../../../action/clickOutside";

    export let name: string = "";
    export let label: string = "";
    export let placeholder: string = "";
    export let readonly: boolean = false;
    export let value: string = "";
    export let options: Options = [];

    let open: boolean = false;
    const onClick = () => {
        if (!readonly) {
            open = !open;
        }
    };

    let option: Option = null;
    const onSelected = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        option = {
            value: target.dataset.value,
            label: target.innerText,
        };

        open = false;
        value = option.label;
    };

    const onOutside = () => {
        open = false;
    };

    // incluir virtual scroll
    // incluir el componente de busqueda
    // incluir la posibilidad de agregar un nuevo elemento
    // incluir la posibilidad de eliminar un elemento seleccionado
</script>

<Label name={label}>
    <div
        class="main"
        use:clickOutside
        on:click={onClick}
        on:click_outside={onOutside}
    >
        {#if !readonly}
            <Icon {onClick} />
        {/if}

        <input
            class="input"
            type="text"
            {name}
            {placeholder}
            {readonly}
            {value}
        />

        {#if open}
            <div class="body">
                {#each options as option (option.value)}
                    <div
                        class="option"
                        on:click={onSelected}
                        data-value={option.value}
                    >
                        {option.label}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</Label>

<style>
    .main {
        cursor: default;
        position: relative;
        width: 100%;
    }

    .input {
        background: var(--color-input-background, transparent);
        border-radius: 4px;
        border: 1px solid var(--color-input-border, rgba(153, 153, 153, 0.4));
        box-sizing: border-box;
        color: var(--color-text-primary, #24292e);
        cursor: default;
        font-family: var(--font-family, Roboto, sans-serif);
        font-size: 14px;
        height: 38px;
        padding: 6px 12px;
        width: 100%;
    }

    .input[readonly] {
        background: var(--color-input-disabled-background, #fafafa);
        border-color: var(--color-input-disabled-border, #d1d5da);
        cursor: default;
    }

    .body {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid var(--color-input-border, rgba(153, 153, 153, 0.4));
        max-height: 114px;
        position: absolute;
        top: 46px;
        width: 100%;
    }

    .option {
        align-items: center;
        box-sizing: border-box;
        color: var(--color-text-primary, #24292e);
        cursor: default;
        display: flex;
        font-family: var(--font-family, Roboto, sans-serif);
        font-size: 14px;
        height: 38px;
        justify-content: flex-start;
        padding: 0 16px;
        width: 100%;
    }

    .option:hover {
        background-color: #f1f1f1;
    }
</style>
