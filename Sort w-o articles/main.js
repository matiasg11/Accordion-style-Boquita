const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function strip(band){
    return band.replace(/^(a |the |an )/i, "".trim())    
}

// let sortedBands = bands.sort(function (a,b){
//     if(strip(a)>strip(b)){  
//     //Only using the strip function in the comparison 
//         return 1
//     }else{
//         return -1
//     }
// })

let sortedBands = bands.sort((a,b)=> strip(a)>strip(b) ? 1:-1 )

document.querySelector('#bands').innerHTML = sortedBands.map(band =>`<li>${band}</li>`)

console.log(sortedBands)

