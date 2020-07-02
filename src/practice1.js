const parseData = (input) => {
    const data = input.data;
    const column = input.column;

    let result = [];
    data.forEach(d => {
        const obj = {};
        column.forEach((c, idx) =>{
            obj[c.name] = d[idx];
        });

        result.push(obj);
    });
    return result;
};

export { parseData };
