<script lang="ts">
    export let onClick: (event: MouseEvent) => void;
</script>

<div class="main" on:click={onClick}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
        />
    </svg>
</div>

<style>
    .main {
        align-items: center;
        background: transparent;
        box-sizing: border-box;
        color: var(--color-input-border, rgb(102, 102, 102));
        display: flex;
        height: 38px;
        justify-content: center;
        padding: 8px;
        position: absolute;
        right: 0;
        width: 38px;
    }
</style>
