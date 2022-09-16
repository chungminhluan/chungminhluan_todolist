document.querySelector("#addItem").onclick = () => {
    let nameToDo = document.querySelector('#newTask');

    if (!nameToDo.value) {
        alert('Vui lòng nhập tên công việc')
        return true;
    }
    // Lưu localStorage
    let tasks = localStorageTasks()

    // thêm công việc
    tasks.push({
        name: nameToDo.value

    });
    nameToDo.value = '';
    // đổi sang string
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks(tasks);
}

function renderTasks(tasks = []) {
    let content = tasks.reduce((html, toDoJob, index) => {

        return html += `
<li >
    <div class="task-name">
        <p>${toDoJob.name}</p>
        </div>
        <div class="task-icon">
        <button class="del" onclick="delTasks(${index})" href="#"><i class="fa-solid fa-trash"></i></button>
        <button class="fix"  href="#"><i class="fa-solid fa-circle-check"></i></button>
    </div>
</li>`

    }, '');
    document.querySelector(".todo").innerHTML = content;
}







function localStorageTasks() {
    return (localStorage.getItem('tasks')) ?
        JSON.parse(localStorage.getItem('tasks')) : [];
}