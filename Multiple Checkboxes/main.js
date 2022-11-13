//What I need to to is to select one checkbox, hold shift and click another one
//Then all the checkboxes in between should get checked

//let items = document.querySelectorAll(".item")
let items = document.querySelectorAll('.inbox input[type="checkbox"]')
items.forEach(item => item.addEventListener('click', checker))

let lastChecked 

function checker(e){
    //Check if the shift is the key is down and some checkbox is checked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //Loop over the checkboxes and see which are in between the 2 checked ones
        items.forEach(item => {
            console.log(item)
            if (item === this || item === lastChecked){
                inBetween = !inBetween
            }

            if (inBetween) {
                item.checked = true;
            }
        })
    }

    lastChecked = this
}