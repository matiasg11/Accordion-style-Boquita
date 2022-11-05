let panels = document.querySelectorAll('.panel');
    
function toggleOpen(){
  panels.forEach(panel => panel.classList.remove("open"))
    this.classList.toggle('open')
}
function toggleActive(event){
  //2 things are being transitioned: flex and font-size. We want it to trigger only with the flex transition.
  if(event.propertyName.includes('flex')){
    this.classList.toggle('open-active')
  }
  // this.classList.toggle('open-active')
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive))
