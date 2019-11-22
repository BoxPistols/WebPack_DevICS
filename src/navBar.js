export function navBar_Open() {
  // console.log("functionView");
  const target = document.querySelector('.grid-container')
  const btn = document.querySelector('.nav_toggle')

  btn.addEventListener('click', () => {
    if (target.classList.contains('active_navBar')) {
      target.classList.remove('active_navBar');
    } else {
      target.classList.add('active_navBar');
    }
  })
}