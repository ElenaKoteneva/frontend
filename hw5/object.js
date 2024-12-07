//hw5
let taskList = []; // Массив для хранения списка задач
let task = {
    name: "",
    completed: false
}

/**
 * showTaskList
 */
 function showTaskList()
 {
     if (taskList.length === 0)
     {
         alert("У вас нет задач");
     }
     else
     {
         const result = taskList.reduce
         (
             (acc, item, index) => acc + `${index + 1}. ${item.name} ${item.completed} \n`,
             "Ваши задачи: \n"
         );
         alert(result);
     }
 }

/**
 * addTask
 * @returns true if task was added or false else
 */
function addTask()
{
    const newTaskName = prompt("Введите задачу");/*JSON.parse(JSON.stringify(task));*/
    if (newTaskName)
    {
        newTask.name = newTaskName; 
        newTask.completed = false;
        taskList.push(newTask);
        showTaskList();
        return true;
    } 
    else
    {
        alert("Задание не может быть пустым");
        return false;
    }
}

/**
 * removeTask
 * @returns true if successfull or false else
 */
function removeTask()
{
    showTaskList();
    const taskName = prompt("Введите название задачи для удаления");
    if (taskName === 0)
    {
        alert("Задание не может быть пустым");
        return false;
    }
    const deletedIndex = taskList.indexOf(taskName);
    if (deletedIndex === -1)
    {
        alert("Задание не найдено");
        return false;
    }
    const deletedTask = taskList.splice(deletedIndex, 1); // Удаляет элемент
    alert(`Вы удалили задачу ${taskName}`);
    showTaskList();
    return true;
}

/**
 * checkedTask
 * @returns true if successfull or false else
 */
 function checkedTask()
 {
    if (taskList.length === 0)
    {
        alert("У вас нет задач.");
        return false;
    }

    showTaskList();
    const taskName = prompt("Введите название выполненной задачи");

    if (taskName === 0)
    {
        alert("Задание не может быть пустым");
        return false;
    }

    const deletedIndex = taskList.indexOf(taskName);

    if (deletedIndex === -1)
    {
        alert("Задание не найдено");
        return false;
    }
    
    taskList[deletedIndex].completed = true;
    showTaskList();
    return true;
 }

 function changeTask()
 {
    const newTask = 

 }


 function main()
 {
    let choice = null;

    do
    {
        choice = +prompt("Выберите действие/n 1: Показать задачи/n 2: Добавить задачу /n 3: Пометить выполненную задачу /n 4: Удалить задачу /n 0: Выход")
        switch (choice) {
            case 0:
                alert("Выход из программы");
                break;
            case 1:
                showTaskList();
                break;
            case 2:
                addTask();
                break;
            case 3:
                checkedTask();
                break;
            case 4:
                removeTask();
                break;
            default:
                alert("Некорректный выбор");
                break;
        }
    } while (choice !== 0);
 }
