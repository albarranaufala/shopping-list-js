let inputItem = document.getElementById('input-item')
let tbody = document.getElementById('tbody')
let list = [{
    name: 'Pisang',
    qty: 3,
}]
renderList(list)

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()

    let newItem = inputItem.value
    if(newItem){
        list.push({
            name: newItem,
            qty: 1
        })
        renderList(list)
        inputItem.blur()
        inputItem.value = ''
    }
})

function renderList(list){
    let script = ''
    list.forEach((item,index) => {
        script += createRow(item, index)
    });
    if(!list.length){
        script = '<tr><td colspan="3" class="text-center">Kosong</td></tr>'
    }
    tbody.innerHTML = script
}

function createRow(item, index){
    let script = '<tr><td>'+item.name+'</td><td class="text-center"><i onclick="decreaseQty('+index+')" class="fas fa-minus p-3 minus"></i>'+item.qty+'<i onclick="increaseQty('+index+')" class="fas fa-plus p-3 plus"></i></td><td class="text-center"><i onclick="deleteItem('+index+')" class="fas fa-trash delete p-3"></i></td></tr>'

    return script
}

function increaseQty(index){
    list[index].qty += 1
    renderList(list)
}

function decreaseQty(index){
    list[index].qty -= list[index].qty ? 1 : 0
    renderList(list)
}

function deleteItem(index){
    list.splice(index, 1)
    renderList(list)
}

