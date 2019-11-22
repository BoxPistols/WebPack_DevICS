export function sideBar_Open() {
  // console.log("functionView");
  const target = document.querySelector('.grid-container')
  const btn = document.querySelector('.aside_toggle')

  btn.addEventListener('click', () => {
    if (target.classList.contains('active_sideBar')) {
      // console.log("Yes");
      target.classList.remove('active_sideBar');
    } else {
      target.classList.add('active_sideBar');
      // console.log("non");
    }
  })
}