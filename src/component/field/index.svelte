<script lang="ts">
    import Row from "./row/index.svelte";
    import type { Fields } from "src/type";
    import Text from "./text/index.svelte";
    import Select from "./select/index.svelte";
    import { sort } from "../../lib/collection";
    import TextArea from "./textarea/index.svelte";
    import DateTime from "./datetime/index.svelte";

    export let options: Fields = [];
</script>

{#each sort(options) as field (field.id)}
    <Row>
        {#if field.type === "text"}
            <Text
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                readonly={field.readonly}
                value={field.value}
            />
        {/if}

        {#if field.type === "textarea"}
            <TextArea
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                readonly={field.readonly}
                value={field.value}
            />
        {/if}

        {#if field.type === "datetime"}
            <DateTime
                name={field.name}
                label={field.label}
                readonly={field.readonly}
                value={field.value}
            />
        {/if}

        {#if field.type === "select"}
            <Select
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                readonly={field.readonly}
                value={field.value}
                options={field.options}
            />
        {/if}
    </Row>
{/each}
