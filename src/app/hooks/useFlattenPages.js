// Helper function
function flattenPages(pages) {
    return pages.reduce((acc, page) => {
        acc.push(page);
        if (page.childPages) {
            acc.push(...flattenPages(page.childPages))
        }
        return acc
    }, [])
}

// Updated hook
export default function useFlattenPages(pages) {
    if (!pages) return []
    return flattenPages(pages);
}