const buttonMarkAll = document.getElementById('markAll');
const listNotification = document.querySelectorAll('li');
const numbersOfNotifications = document.getElementById('countNotification');
const textUnread = document.querySelectorAll('.unread')

// when clicked deletes all "unread" classes

buttonMarkAll.addEventListener('click', () => {
  listNotification.forEach(list => {
    list.classList.remove('active')
  });

  textUnread.forEach(item => {
    item.classList.remove('unread')
  })

  numbersOfNotifications.innerHTML = 0;
})
