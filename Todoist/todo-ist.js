const taskInput = document.getElementById("add");
const prioritySelect = document.getElementById("categorias");
const container = document.querySelector(".container");

// Crear lista de tareas dinámicamente
const taskList = document.createElement("ul");
container.appendChild(taskList);

// Limpiar texto y prioridad
function clean() {
    taskInput.value = "";
    prioritySelect.selectedIndex = 0;
    prioritySelect.classList.remove("select-alta", "select-media", "select-baja");
}

// Agregar tarea
function addTask() {
    const taskText = taskInput.value.trim();
    const priorityValue = prioritySelect.value;

    // Validaciones
    if (taskText === "") {
        alert("Por favor, ingrese una tarea");
        return;
    }

    if (priorityValue === "") {
        alert("Por favor, ingrese la prioridad");
        return;
    }

    // Crear elementos
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = `${taskText} (${getPriorityText(priorityValue)})`;

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Armar tarea
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpiar campos
    clean();

    // Asignar color según prioridad
if (priorityValue === "1") {
    li.classList.add("priority-alta");
} else if (priorityValue === "2") {
    li.classList.add("priority-media");
} else if (priorityValue === "3") {
    li.classList.add("priority-baja");
}

}

// Convertir prioridad numérica a texto
function getPriorityText(value) {
    switch (value) {
        case "1":
            return "Alta";
        case "2":
            return "Media";
        case "3":
            return "Baja";
        default:
            return "";
    }
}

prioritySelect.addEventListener("change", () => {
    prioritySelect.classList.remove("select-alta", "select-media", "select-baja");

    if (prioritySelect.value === "1") {
        prioritySelect.classList.add("select-alta");
    } else if (prioritySelect.value === "2") {
        prioritySelect.classList.add("select-media");
    } else if (prioritySelect.value === "3") {
        prioritySelect.classList.add("select-baja");
    }
});
