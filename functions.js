let btn = document.getElementById("SubmitForm")
let description = document.getElementById("ShortDescription")
let TaskName = document.getElementById("NewTask")
let PendingTaskDiv = document.getElementById('pending_task')
let DoneTaskDiv = document.getElementById('done_task')
let Task = []
let excuses = ["porque el api en heroku no me ha funcionado a la hora de realizar la prueba", "el perro se comió esta tarea", "mi mamá no me deja seguir jugando", "tengo que irme a trabajar a Vicomtech"]
let Done = []
let content = ''

const TaskForm = document.getElementById('TaskForm');

TaskForm.addEventListener('submit', function(event){
    event.preventDefault();
    let TaskInfo = {'name': TaskName.value, 'description': description.value, 'state': 'pending'}
    Task.push(TaskInfo)
    PendingTaskDiv.innerHTML = ""
    createdivpending()
})

function createdivpending(){
    for(var i = 0; i < Task.length; i++){
        let container = document.createElement('div')
        container.setAttribute('class', 'border')
        let info = document.createElement('p')
        let info_name = document.createTextNode(Task[i].name)
        let btn = document.createElement('button')
        btn.setAttribute('id',`done_${Task[i].name}`)
        btn.setAttribute('onClick', `movetoDone(this.id)`)
        let doneBTN = document.createTextNode('marcar como realizada')
        info.appendChild(info_name)
        btn.appendChild(doneBTN)
        container.append(info)
        container.append(btn)
        PendingTaskDiv.append(container)
    };
}

function movetoDone(TaskId){
    let MyExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    PendingTaskDiv.innerHTML = ""
    //selecciono elemento
    let onlyId = TaskId.split("_")[1]
    const TaskEl = Task.find(element => element.name = onlyId);
    TaskEl.state = 'done'
    //lo envio al array done
    Done.push(TaskEl)
    let pos = Task.indexOf(TaskEl)
    //lo elemino de pending
    Task.splice(pos, 1);
    createdivpending()
    DoneTaskDiv.innerHTML = ""
    for(var i = 0; i < Done.length; i++){
        let container = document.createElement('div')
        container.setAttribute('class', 'border')
        let info = document.createElement('p')
        let info_name = document.createTextNode(Done[i].name)
        info.appendChild(info_name)
        container.append(info)
        DoneTaskDiv.append(container)
    };
    alert("Esta tarea se ha cerrado porque " + MyExcuse);
}