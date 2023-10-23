let data = [
    {id: 1, name: "Juan", email: "juanv@gmail.com", classe: "Healer"},
    {id: 2, name: "seohyun", email: "sohyun@gmail.com", classe: "Wizard"}
]

function readall() {
    localStorage.setItem("object", JSON.stringify(data))
    var tabledata = document.getElementById("data_table")

    var object = localStorage.getItem("object")
    var objectdata = JSON.parse(object)
    var elements = ""

    objectdata.map(record => (
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>${record.classe}</td>
            <td>
                <button type="button" class="editbutton" id="editor" onclick={edit(${record.id})}>Edit</button>
                <button type= "button" class="deletebutton" id="deletar" onclick={deletar(${record.id})}>Delete</button>
            </td>
        </tr>`
    ))


    tabledata.innerHTML = elements    
}

function deletar(id) {
    data = data.filter(rec => rec.id !== id)
    readall()
}

function add(){
    var name = document.querySelector(".name").value
    var email = document.querySelector(".email").value
    var classe = document.querySelector(".classe").value

    var novodado = {id: 3, name: name, email: email, classe: classe}
    data.push(novodado)

    document.getElementById('container').style.display = 'none'
    document.getElementById('container2').style.display = 'block'

    readall()
}


function create() {
    document.getElementById('container').style.display = 'none'
    document.getElementById('container2').style.display = 'block'
}



function voltar(){
    document.getElementById('container').style.display = 'block'
    document.getElementById('container2').style.display = 'none'
}


var slide = document.getElementById("characters_container")
var uparrow = document.getElementById("uparrow")
var downarrow = document.getElementById("downarrow")
var classes = document.getElementById("classe")

let x = 0

uparrow.onclick = function() {
    if(x > "-900"){
    x = x - 410
    slide.style.top = x + "px"
    }
    switch (x) {
        case 0:
            classes.value = "Archer"
            break
        case -410:
            classes.value = "Healer"
            break
        case -820:
            classes.value = "Wizard"
            break
        case -1230:
            classes.value = "Warrior"
            break
    }
}

downarrow.onclick = function() {
    if(x < 0){
    x = x + 410
    slide.style.top = x + "px"
    }
    console.log(x)
    switch (x) {
        case 0:
            classes.value = "Archer"
            break
        case 410:
            classes.value = "Healer"
            break
        case -410:
            classes.value = "Healer"
            break
        case 820:
            classes.value = "Wizard"
            break
        case -820:
            classes.value = "Wizard"
            break
        case 1230:
            classes.value = "Warrior"
            break
    }
}


function edit(id) {
    document.querySelector(".edit_form").style.display = "block"
    var obj = data.find(rec => rec.id === id)
    document.querySelector('.newname').value = obj.name
    document.querySelector('.newemail').value = obj.email
    document.querySelector('.newclasse').value = obj.classe
    document.querySelector('.id').value = obj.id
}

function update() {
    var id = parseInt(document.querySelector('.id').value)
    var name = document.querySelector('.newname').value
    var email = document.querySelector('.newemail').value

    var index = data.findIndex(rec => rec.id === id)
    data[index] = {id, name, email}
    document.querySelector(".edit_form").style.display = 'none'
    readall()
}