



//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!.
//  We want you to create a new 'div' Element
//  and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. 
 





// resolve // QUESTION 1 here

const switchFunction = () => {
    // console.log("clicked");
    let changeX = document.getElementsByClassName("square")[0];// For that, assign to the new element the className 'square'!.
    if (changeX.innerHTML === "x") {
        changeX.innerHTML = "o";
    } else {
        changeX.innerHTML = "x";
    }    
};
// Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'
const changeClick = document.getElementsByClassName("square")[0];
changeClick.addEventListener("click", switchFunction);


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.


//you also need to create a button that makes the remove action of the element selected
// Added in the HTML



//resolve // QUESTION 2 here

// const select = document.getElementById("select");
//In order to create the list we are providing you with the array bellow,
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
//those items are the ones you need to add to the dropdown list as the select options
for(var i = 0; i < colors.length; i++)
{
    var option = document.createElement("OPTION"),
        txt = document.createTextNode(colors[i]);
    option.appendChild(txt);
    option.setAttribute("value",colors[i]);
    select.insertBefore(option,select.lastChild);
}

// append the new list as a child of the element with the 'id = a-2'
let newList = document.getElementById("a-2").appendChild(select);
// append the button as a child of the element with the 'id = a-2'
let removeBotton = document.getElementsByClassName("removeItem")[0];
// console.log(removeBotton);
// removeBotton.appendChild(select);

removeBotton.addEventListener('click', () => {
    // var removeElement = newList.getElementsByTagName("OPTION")
    // console.log(document.querySelector("select"));
    let select = document.querySelector('select')
    console.log(select.value) // == => white
    let options = select.children

    // check which option is selected...
    for(let i=0; i < options.length; i++) {
      if(options[i].value == select.value) {
        select.removeChild(options[i])
      }
    }
  })










//------------------------Question 3 ---------------------------





//Now lets mix some maths and programming.
// In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let area = document.getElementById("area");


//resolve // QUESTION 3 here

const calculate_sphere = (event) => {

    event.preventDefault(); 
    //The preventDefault() method cancels the event if it is cancelable,
    // meaning that the default action that belongs to the event will not occur. w3schools
    //hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
    volume = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
    area = 4 * Math.PI * Math.pow(radius.value, 2);
    volume = volume.toFixed(2);
    area = area.toFixed(2);
    //And display the results in the elements with the 'id = volume'
    document.getElementById("volume").value = volume;
    //and 'id = area' respectively
    document.getElementById("area").value = area;
};
window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens


//resolve // QUESTION 4 here
const parentFour = document.getElementById("a-4"); 

//Now in this Exercise we want you to create 3 buttons
for (let i = 0; i < 3; i++) {
  let buttonFour = document.createElement("button"); 
  parentFour.appendChild(buttonFour);
  parentFour.children[i].id = `magic${i + 1}`; 
    //Adding HTML divs
  parentFour.children[i].innerHTML = `Hide or show Question # ${i + 1}`; 
};

//setup of visibility property to the ".question-label"
let questContainer = document.querySelector(".question-container");
questContainer.children[0].style.visibility = "visible";
questContainer.children[1].style.visibility = "visible";
questContainer.children[2].style.visibility = "visible";

//creating of the click event listener on the level of buttons' parent
parentFour.addEventListener("click", (event) => {
  if (event.target.id === "magic1") {
    if (questContainer.children[0].style.visibility === "visible") {
      questContainer.children[0].style.visibility = "hidden";
    } else if (questContainer.children[0].style.visibility == "hidden") {
      questContainer.children[0].style.visibility = "visible";
    }
  } else if (event.target.id == "magic2") {
    if (questContainer.children[1].style.visibility === "visible") {
      questContainer.children[1].style.visibility = "hidden";
    } else if (questContainer.children[1].style.visibility == "hidden") {
      questContainer.children[1].style.visibility = "visible";
    }
  } else if (event.target.id == "magic3") {
    if (questContainer.children[2].style.visibility == "visible") {
      questContainer.children[2].style.visibility = "hidden";
    } else if (questContainer.children[2].style.visibility == "hidden") {
      questContainer.children[2].style.visibility = "visible";
    }
  }
});