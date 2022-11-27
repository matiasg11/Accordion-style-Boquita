
  const addItems = document.querySelector('.add-items'); //Form Element
  const itemsList = document.querySelector('.plates'); //List of plates
  const items = []; //Storing all the data in an array of objects

  function addItem(e){
    e.preventDefault(); //Prevents the refreshing of the page. 
    const text = (this.querySelector('[name=item]')).value //This is the form element and selects the field with the name "item"
    const item = {
        text: text,
        done: false
    }
    console.log(item)
    this.reset()
  }

  addItems.addEventListener('submit', addItem)