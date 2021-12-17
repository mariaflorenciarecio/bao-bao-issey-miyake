export const renderList = (listId, list) => {

    const listContainer = document.getElementById(listId)

    for (const item of list) {
        const itemList = document.createElement("li")

        itemList.innerHTML = `<span><strong>${item.name}</strong></span>`

        listContainer.appendChild(itemList)
    }
}