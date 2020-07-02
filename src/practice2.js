const inject = (items, sections) => {
    sections.forEach((s, idx) => {
        items.splice(s.index+idx, 0, s.content);
    });
    return items;
}
export { inject };
