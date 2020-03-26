
const mainList = document.querySelector('.todo-list')

 function updateList(title, desc) {
  let html = `<div class="todo-list__cart">
          <div class="todo-list__cart-header">
            <h3 class="todo-list__cart-header-title">${title}</h3>
            <p class="todo-list__cart-header-desc">${desc}</p>
            <i class="far fa-times-circle"></i>
          </div>
          <div class="todo-list__cart-task"></div>
           <form class="todo-list__task-form">
            <input
              type="text"
              name="title"
              size="25"
              placeholder="Task-Title"
            />
            <textarea
              name="desc"
              cols="25"
              rows="3"
              placeholder="Task-description"
            ></textarea>
            <input
              size="25"
              type="date"
              name="datepicker"
              placeholder="Choose a end-Date"
            />

            <div>
              <input type="submit" value="Add-Task" />
              <div class="todo-list__task-form-close">X</div>
            </div>
          </form>
          <i class="fas fa-plus todo-list__cart-add">
            Add task
          </i>
        </div>`
  mainList.innerHTML += html
}



 function updateTask(title, desc, datepicker, targetContainer, uid) {
  let html = ` <div class="todo-list__single-task">
              <h4 class="todo-list__single-task-title">${title}</h4>
              <p class="todo-list__single-task-desc">${desc}</p>
              <div class="todo-list__single-task-date">
                <p>End-date</p>
                <p>${datepicker}</p>
              </div>
              <i class="far fa-trash-alt fa-lg"></i>
              <div class="todo-list__single-task-done">
                <label for="${uid}">Done</label>
                <input type="checkbox" name="done" id="${uid}" class='check-done'/>
              </div>
            </div>`

  targetContainer.innerHTML += html
}