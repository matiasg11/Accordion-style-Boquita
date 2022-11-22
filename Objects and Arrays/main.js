
    // start with strings, numbers and booleans
    
        let age = 100
        let age2 = age
        console.log(age, age2) 
        //100 100
        age = 200
        console.log(age, age2)
        //200 100
        //It happens the same with strings. 
        //It copies the value, not the reference to the data because the type is a primitive.

    // Let's say we have an array
        const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
        const team = players
        console.log(players, team)
        //['Wes', 'Sarah', 'Ryan', 'Poppy'] both times

    // You might think we can just do something like this:
        team[3] = "Mati"
        console.log(team)
        //['Wes', 'Sarah', 'Ryan', 'Mati']
        //It changed the element in position 3

    // however what happens when we update that array?
        console.log(players)
        //['Wes', 'Sarah', 'Ryan', 'Mati']
        //It changed the element in position 3 because it went to the reference. 
        //The array stored in "team" was referencing the array stored in "players"
    
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    // one way to copy with SLICE
        const team2 = players.slice()
        team2[3] = "Mati"
        console.log(team2[3], players[3])
        //"Mati" "Poppy"

    // or create a new array and concat the old one in
        const team3 = [].concat(players)

    // or use the new ES6 Spread
        const team4 = [...players]

    // now when we update it, the original one isn't changed
        const team5 = Array.from(players)

    // The same thing goes for objects, let's say we have a person object  
    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy: CAN'T DO THIS =>
        const otherPerson = person
        otherPerson.age = 100
        console.log(otherPerson.age, person.age)
        //100 100
    
    // how do we take a copy instead? Example with assign
        const anotherPerson = Object.assign({}, person, {age:100, hair:"none"})

    // We will hopefully soon see the object ...spread
        //const person3 = {...person}

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
        const wes = {
            name: 'Wes',
            age: 100,
            social: {
            twitter: '@wesbos',
            facebook: 'wesbos.developer'
            }
        };
    
        console.clear();
        console.log(wes);
    
        const dev = Object.assign({}, wes);
        //It doesn't clone. Just 1 level. The rest are referenced
    
        const dev2 = JSON.parse(JSON.stringify(wes));
        //This does it good, but not elegant.
        //stringify turns it into a string, which passes by value
        //Then JSON.parse converts it back into an object. 