export const isElementAtTop = (element: HTMLElement | null) => {
    if (element) {
        const rect = element.getBoundingClientRect();
        const top = rect.top;

        return top <= rect.height;
    }

    return null;
};
