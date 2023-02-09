
//recipe array of objects
//SPENCE + REDAS
let recipes = [
    {
        name: "🍗🥬Chicken Caesar Salad",
        ingredients: ["Lettuce", "Chicken", "Caesar Dressing", "Parmesan", "Croutons"],
        cookTime: "20-30 minutes",
        nutrition: "Low Calories",
        instruction: "2 cups Romaine Lettuce, 4 oz. Grilled Chicken, 2 oz. Caesar Dressing.  Mix all ingredients in a large bowl and top with croutons and Parmesan Cheese to your liking.",
        photo: "./pics/cesar.jpg"
    },
    {
        name: "🥩Steak with Asparagus and Potatoes",
        ingredients: ["Steak", "Asparagus", "Potatoes"],
        cookTime: "20-30 minutes",
        nutrition: "High Protein",
        instruction: "8 oz. of Steak, 4 oz. of Asparagus, 4 oz. Potatoes.  Grill Steak or Sautee in a pan, Steam the Asparagus until tender and season to liking. Boil potatoes and mash with milk, garlic, salt and pepper.",
        photo: "./pics/steak.jpg"
    },
    {
        name: "🥩Porkchop with Mashed Potatoes and Ranch Beans",
        ingredients: ["Pork Chop", "Potatoes", "Beans", "Butter"],
        cookTime: "20-30 minutes",
        nutrition: "High Carbs",
        instruction: "6 oz. of Pork Chop, 1 can or ranch beans, 2 Potatoes, 3 tbsp of Butter. Bake Pork Chop for 45 minutes in oven set at 475℉, boil Potatoes until tender and mash with butter, milk, salt and pepper.",
        photo: "./pics/porkchops.jpg"
    },
    {
        name: " 🍤Coconut Shrimp Skewers with Grilled Peppers",
        ingredients: ["Shrimp", "Peppers", "Coconut", "Asparagus"],
        cookTime: "20-30 minutes",
        nutrition: "Low Calorie",
        instruction: "10 20/count jumbo prawns, 2 Green Peppers, 2 oz. coconut, Skewer the Prawns and sprinke with coconut before placing them on a medium heat grill for eight minutes",
        photo: "./pics/coconutshrimp.jpg"
    },
    {
        name: "🍝Spaghetti with Meat Sauce",
        ingredients: ["Ground Beef", "Spaghetti", "Spaghetti Sauce", "Parmesan", "Tomatoes"],
        cookTime: "20-30 minutes",
        nutrition: "High Carbs",
        instruction: "1 Jar of Spaghetti Sauce, 1 lbs. Ground Beef, 2 whole Tomatoes, simmer spaghetti sauce and mix in cooked Ground Beef and Tomatoes. While that simmers boil Pasta until tender. Rinse pasta, place it on a plate with sauce and top with Parmesan Cheese",
        photo: "./pics/spaghetti.jpg"
    },
    {
        name: "🍖Grilled Ham and Cheese with Fries",
        ingredients: ["Bread", "Ham", "Cheddar", "Butter", "Potatoes"],
        cookTime: "20-30 minutes",
        nutrition: "High Carbs",
        instruction: "4 pieces of bread, 2 slices of ham, two slices Cheddar Cheese. Butter bread and lay in hot pan, add ham and cheese and top with another piece of buttered bread.  grill until browned and flip",
        photo: "./pics/cheeseburger.jpg"
    },
    {
        name: "🌶Chili with Meat",
        ingredients: ["Beans", "Ground Beef", "Tomatoes"],
        cookTime: "20-30 minutes",
        nutrition: "High Protein",
        instruction: "2 lbs Ground Beef, 3 cans Pinto Beans, Diced Tomatoes, Onions. Sautee Ground Beef, Onions, and Tomatoes in a deep pan, add beans and spice and let simmer for 2 hours",
        photo: "./pics/chili.jpg"
    },
    {
        name: "🍖Shrimp Stirfry",
        ingredients: ["Shrimp", "Rice", "Green Peppers", "Onions"],
        cookTime: "20-30 minutes",
        nutrition: "Keto Friendly",
        instruction: "16 oz. rice, 15 20/count shrimp, 2 Green Peppers, 1 Onion. Sautee onions, peppers, and add rice and water let boil and simmer with shrimp for 29 minutes",
        photo: "./pics/stirfry1.jpg"
    },
    {
        name: "🍔🍟Cheeseburger with French Fries",
        ingredients: ["Lettuce", "Ground Beef", "Bun", "Tomatoes", "Potatoes", "Cheddar"],
        cookTime: "20-30 minutes",
        nutrition: "High Fat",
        instruction: "2 lbs Ground Beef, Lettuce 1 Tomato, 4 Potatoes. Grill burger shaped patties with salt and pepper. Slice the potatoes and fry. Add condiments to your burger and voila!!",
        photo: "./pics/cheeseburger.jpg"
    }, {
        name: "🍗Penne Alfredo With Chicken",
        ingredients: ["Penne", "Chicken", "Broccoli", "Parmesan Cheese", "Alfredo Sauce"],
        cookTime: "20-30 minutes",
        nutrition: "High Carbs",
        instruction: "2 Chicken Breast, 16 oz. penne pasta, 1 jar Alfredo sauce. Grill Chicken Breast and then slice julienne style. Place heated Alfredo over cooked Penne and add the Chicken Breast and Parmesan Cheese",
        photo: "./pics/fettacini.jpg"
    },
    {
        name: "🌵🐟Fish Tacos",
        ingredients: ["Fish", "Tortillas", "Onions", "Cabbage", "Green Peppers"],
        cookTime: "20-30 minutes",
        nutrition: "Low Calorie, High Protein",
        instruction: "2 Fish Filets, Sliced Cabbage, Diced Onions, Diced Green Peppers. Grill or sautee the fish and cut it into small slices, mix the Diced Onions, Green Peppers, Tomatoes and Cabbage. Put ingredients on a small tortilla and add Cheese and Salsa to your liking!",
        photo: "./pics/pics/fishTacos.jpg"
    },
    {
        name: "🐓Chicken and Dumplings",
        ingredients: ["Chicken", "Eggs", "Milk", "Flour", "Vegetable Oil"],
        cookTime: "40-60 minutes",
        nutrition: "High Carbs, High Calories",
        instruction: "Combine Flour, Eggs, Milk, and Vegetable Oil in a medium mixing bowl and knead the dough until ready. Drop spoon size dumplings into your already stewing chicken. Add salt and pepper to liking and serve in individual bowls.",
        photo: "./pics/chickenDumplings.jpg"
    },

]

//global variables
let greedyients = document.getElementsByClassName('greedyients')
let userIngredients = []
let newRecipe = [];
let recipeButton = document.getElementById('recipeButton')


//for loop for event listeners
//GARCIA H
for (let i = 0; i < greedyients.length; i++) {

 
    let myList = document.getElementById('myList')


    greedyients[i].addEventListener('click', () => {
        if (greedyients[i].checked === true) {
            userIngredients.push(greedyients[i].value)
        }
        if (greedyients[i].checked === false && userIngredients.includes(greedyients[i].value)) {
            let index = userIngredients.indexOf(greedyients[i].value)
            let start = userIngredients.slice(0, index)
            let end = userIngredients.slice(index + 1)
            userIngredients = start.concat(end)
        }
        let list = userIngredients.map(item => `<li>${item}</li>`)
        myList.innerHTML = list.join("")


        theRecipe(userIngredients, recipes)
       
        })
        
        recipeButton.addEventListener('click', () => {
            greedyients[i].checked = false
            myList.innerHTML = ''
            userIngredients = []
            resultContainer.innerHTML = []

    })
  
}


//callback function for recipe matches
//SPENCE

const theRecipe = (arr1, arr2) => {
 

    let result = arr2.filter(obj => {
        let counter = 0
  
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < obj.ingredients.length; j++) {
               
                if (arr1[i] === obj.ingredients[j]) {
                    counter = counter + 1
                
                }
                if (counter >= 2) {
               
                    counter = 0
                    return obj
                }
            }
        }

    })

    newRecipe = result

//callback function for dynamically creating result container info
//SPENCE
    const displayMaker = (arr) => {
        console.log(arr)
        let container = document.getElementById('resultContainer')
        container.innerHTML = ''

        arr.map((obj) => {
            console.log(obj)
            let src = obj.photo
            let title = obj.name

            let mainDiv = document.createElement('div')
            mainDiv.setAttribute("class", "card mb-3")
            mainDiv.setAttribute("style", "max-width: 450px")
            mainDiv.setAttribute("style", "float: left")

            let div2 = document.createElement('div')
            div2.setAttribute("class", "row no-gutters")
            let div3 = document.createElement('div')
            div3.setAttribute("class", "col-md-4")
            let image = document.createElement('img')
            image.setAttribute('src', src)
            image.setAttribute('class', "card-img")
            image.setAttribute('alt', title)
            image.setAttribute('title', title)//accessiblity by putting name of object on hover
            div3.appendChild(image)
            let div4 = document.createElement('div')
            div4.setAttribute('class', 'col-md-8')
            let div5 = document.createElement('div')
            div5.setAttribute('class', 'card-body')
            let h5 = document.createElement('h5')
            h5.setAttribute('class', 'card-title')
            let content = document.createTextNode(`${obj.name}`)
            div5.appendChild(h5)
            h5.appendChild(content)

            let instructions = document.createElement('p')
            instructions.setAttribute('class', 'card-text')
            let content2 = document.createTextNode(`${obj.instruction}`)
            div5.appendChild(instructions)
            instructions.appendChild(content2)
            let prep = document.createElement('p')
            prep.setAttribute('class', 'card-text')
            let content3 = document.createTextNode(`${obj.cookTime}`)
            div5.appendChild(prep)
            prep.appendChild(content3)
            let nutrition = document.createElement('p')
            nutrition.setAttribute('class', 'card-text')
            let content4 =document.createTextNode(`${obj.nutrition}`)
            div5.appendChild(nutrition)
            nutrition.append(content4)

            div4.appendChild(div5)
            div2.appendChild(div3)
            div2.appendChild(div4)
            mainDiv.appendChild(div2)
            container.appendChild(mainDiv)

        
        })
    }
    displayMaker(newRecipe)


  

}

let dropDown = document.getElementsByName('dropDown')
console.log(dropDown)

dropDown.addEventLister('clicked', function(){
console.log('clicked')

})





