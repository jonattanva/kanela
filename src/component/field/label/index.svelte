<script lang="ts">
    export let name = "";
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
    <div class="main">{name}</div>
    <slot />
</label>

<style>
    .main {
        color: var(--color-text-primary, #24292e);
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4px;
    }
</style>
