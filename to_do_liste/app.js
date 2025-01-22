// Classe Task
class Task {
    constructor(id, description) {
      this.id = id;
      this.description = description;
      this.completed = false;
    }
  
    switchComplete() {
      this.completed = !this.completed;
    }
  }
  
  // Tableau pour stocker les tâches
  let arrayTasks = [];
  
  // Fonction pour afficher les tâches
  const shwoTasks = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
    
    arrayTasks.forEach(task => {
      const taskItem = document.createElement("li");
      taskItem.classList.toggle("completed", task.completed);
      
      taskItem.innerHTML = `
        ${task.description}
        <button class="complete-btn">Complété</button>
        <button class="delete-btn">Supprimer</button>
      `;
      
      // Ajouter un événement pour marquer la tâche comme complétée
      taskItem.querySelector(".complete-btn").addEventListener("click", () => {
        task.switchComplete();
        shwoTasks();
      });
      
      // Ajouter un événement pour supprimer la tâche
      taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        arrayTasks = arrayTasks.filter(t => t.id !== task.id);
        shwoTasks();
      });
  
      taskList.appendChild(taskItem);
    });
  };
  
  // Fonction pour ajouter une tâche
  const addTask = (description) => {
    if (description.trim() === '') return;
  
    const newTask = new Task(Date.now(), description);
    arrayTasks.push(newTask);
    shwoTasks();
  };
  
  // Écouteur d'événement pour le bouton d'ajout de tâche
  document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = taskInput.value.trim();
    addTask(taskDescription);
    taskInput.value = '';
  });
  
  