export const isElementAtBottom = (element: HTMLElement | null) => {

    if (element) {
        const rect = element.getBoundingClientRect();
        const bottom = rect.bottom;
        const viewportHeight = window.innerHeight;

        return bottom >= viewportHeight;
    }

    return null;
};
