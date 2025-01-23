const buttonMarkAll = document.getElementById('markAll');
const listNotification = document.querySelectorAll('li');
const numbersOfNotifications = document.getElementById('countNotification');

// when clicked deletes all unread classes

buttonMarkAll.addEventListener('click', () => {
  listNotification.forEach(list => {
    list.classList.remove('unread')
  });
  numbersOfNotifications.innerHTML = 0;
})
