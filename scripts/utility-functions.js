
function formClose(clickEvent, checkClass) {
  if (clickEvent.target.classList.contains(checkClass)) {
    clickEvent.target.parentElement.parentElement.style.display = 'none'
    clickEvent.target.parentElement.parentElement.nextElementSibling.style.display = 'block'

  }
}
function deleteTask(clickEvent, checkClass) {
  if (clickEvent.target.classList.contains(checkClass)) {
    clickEvent.target.parentElement.remove()
  }
}


function makingDoneTask(clickEvent, checkClass) {
  if (clickEvent.target.classList.contains(checkClass)) {
    if (clickEvent.target.checked) {
      clickEvent.target.parentElement.parentElement.style.background = '#41BA1B'
    } else {
      clickEvent.target.parentElement.parentElement.style.background = '#767777f3'
    }
  }
}

function deleteList(clickEvent, checkClass) {
  if (clickEvent.target.classList.contains(checkClass)) {
    clickEvent.target.parentElement.parentElement.remove()
  }
}