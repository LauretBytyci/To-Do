const toDoList = document.querySelector('#toDoList');
const createToDoForm = document.querySelector('#createToDoForm');
const addTodoBtn = document.querySelector('#addTodoBtn');

const removeTodo = (id) => {
    const formToDelete = document.getElementById(id);
    formToDelete.remove();
};
const addToDoListUI = (childId, markAsDone, title, startDate, endDate, notes) => {
   return `
    <div class="one-task" id="${childId}">
        <div class="line-holder">
            <div class="line"></div>
            <div class="line"></div>
            
        </div>
        <div class="task-collab">
            <h1>${title}</h1>
            <h2>${notes}</h2>
            <div class="task-buttons">
                <button>Backend</button>
                <button>Frontend</button>
            </div>
        </div>
        <div class="icons">
            <img src="assets/icons/exclamation.svg" alt="">
            <img src="assets/icons/star.svg" alt="">
            <img src="assets/icons/trash.svg"  onclick="removeTodo('${childId}')" alt="" style="cursor: pointer">
            
            <img src="assets/icons/menu-dots-vertical.svg" alt="">
        </div>
    </div>
  `;
};

addTodoBtn.addEventListener('click', e => {
    e.preventDefault();
    const inputs = createToDoForm.elements;
    const markAsDone = inputs['mark_as_done'].value;
    const title = inputs['title'].value;
    const startDate = inputs['start_date'].value;
    const endDate = inputs['end_date'].value;
    const notes = inputs['notes'].value;
    const childId = toDoList.lastElementChild ? parseInt(toDoList.lastElementChild.id) + 1 : 1;
    toDoList.innerHTML = toDoList.innerHTML + addToDoListUI(childId, markAsDone, title, startDate, endDate, notes);
})

