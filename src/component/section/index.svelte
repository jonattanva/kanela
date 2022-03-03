<script lang="ts">
    import type { Sections } from "src/type";
    import Field from "../field/index.svelte";
    import Group from "../group/index.svelte";
    import { sort } from "../../lib/collection";

    export let options: Sections = [];
</script>

{#each sort(options) as option (option.id)}
    <Group columns={option.columns}>
        <Field options={option.fields} />
    </Group>
{/each}
