export const sortBlockType = (insertData) => {
    return insertData.sort((a, b) => {
        return a.blockOrder - b.blockOrder
    })
}

export const sortABC = (insertData) => {
    return insertData.sort((a, b) => {
        if (a.name < b.name) {return -1}
        if (a.name > b.name) {return 1}
        return 0
    })
}
