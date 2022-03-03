<script lang="ts">
    import type { Form } from "./type";
    import Section from "./component/section/index.svelte";

    export let form: Form;
</script>

<div class="main">
    <Section options={form.sections} />
</div>

<style>
    .main {
        margin: 0 auto;
        max-width: 600px;
    }
</style>
