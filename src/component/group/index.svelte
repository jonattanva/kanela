<script lang="ts">
    export let columns: number = 2;
</script>

<div class="main" style="--max-columns: {columns}">
    <slot />
</div>

<style>
    .main {
        align-items: flex-start;
        column-gap: 16px;
        display: grid;
        width: 100%;
    }

    @media (min-width: 600px) {
        .main {
            grid-template-columns: repeat(var(--max-columns, 2), 1fr);
        }
    }
</style>
