export default function (node: Node) {
    function handleClick(event: MouseEvent) {
        if (
            node &&
            !event.defaultPrevented &&
            !node.contains(event.target as Node)
        ) {
            node.dispatchEvent(
                new CustomEvent("click_outside", {
                    detail: node,
                })
            );
        }
    }

    document.addEventListener("click", handleClick, true);
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        },
    };
}
