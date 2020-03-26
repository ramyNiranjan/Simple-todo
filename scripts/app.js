// import { updateList, updateTask} from './template'

const listModal = document.querySelector('.list-modal')
const listAdd = document.querySelector('.create-list')
const formModal = document.querySelector('.list-modal__popup')
const close = document.querySelector('.list-modal__close')
const taskContainer = document.querySelector('.todo-list__cart-task')



//adding list
listAdd.addEventListener('click',e=>{
  listModal.classList.toggle("modal-display")
})
close.addEventListener('click',e=>{
  listModal.classList.toggle("modal-display")
})
formModal.addEventListener('submit',e=>{
  e.preventDefault()
  const title = formModal.title.value
  const desc = formModal.desc.value
  listModal.classList.toggle("modal-display")
  updateList(title,desc)
  formModal.reset()

})



//using event bubling

  mainList.addEventListener('click', clickEvent => {
    
    if (clickEvent.target.classList.contains('todo-list__cart-add')) {
      //toggling the the task form
      clickEvent.target.previousElementSibling.style.display = 'flex'
      clickEvent.target.style.display = 'none'
      clickEvent.target.previousElementSibling.addEventListener('submit', submitEvent => {
        submitEvent.preventDefault()
        const title = submitEvent.target.children[0].value
        const desc = submitEvent.target.children[1].value
        const date = submitEvent.target.children[2].value
        const targetElement = submitEvent.target.previousElementSibling


        submitEvent.target.nextElementSibling.style.display = 'block'
        if (submitEvent.target.style.display == 'flex') {
          let uid = Date.now()
          updateTask(title, desc, date, targetElement, uid)//adding task
          submitEvent.target.style.display = 'none'
        }
        submitEvent.target.reset()
      })

    }
 
    //closing task function form
   
    formClose(clickEvent,'todo-list__task-form-close')
    //deleting individual task
    deleteTask(clickEvent,'fa-trash-alt')
     //marking if a task done also can toggle the state
    makingDoneTask(clickEvent,'check-done')
    //deleting singel list
    deleteList(clickEvent,'fa-times-circle')
    
    



  })

