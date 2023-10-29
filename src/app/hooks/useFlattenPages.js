export default function useFlattenPages(pages) {
    if (!pages) return []
    return pages.reduce((acc, page) => {
        acc.push(page)
        if (page.childPages) {
            acc.push(...useFlattenPages(page.childPages))
        }
        return acc
    }, [])
}