
  const addItems = document.querySelector('.add-items'); //Form Element
  const itemsList = document.querySelector('.plates'); //List of plates
  const items = JSON.parse(localStorage.getItem('items')) ||[]; //Storing all the data in an array of objects
//This tries to parse the local storage but if it doesn't find anything it uses an empty array. 

  function addItem(e){
    e.preventDefault(); //Prevents the refreshing of the page. 
    const text = (this.querySelector('[name=item]')).value //This is the form element and selects the field with the name "item"
    const item = {
        text: text,
        done: false
    }
    console.log(item)
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items)); //Only can store strings in key value pairs
    this.reset() //So the form is reset and you can't accidentally submit the same twice. 

  }

  function populateList(items = [], itemsList) {  //The default value is to prevent errors if you forget to pass the items list. It can still map through the elements (none)
        itemsList.innerHTML = items.map((item, i) => {
            return `
                    <li>
                        <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked':''} />
                        <label for="item${i}">${item.text}</label>
                    </li>
                    `
        }).join("")
  }

  addItems.addEventListener('submit', addItem)

  populateList(items, itemsList)