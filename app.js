// function addNumberClosure(num) {
//     function addNum(n) {
//       return n + num;
//     }
//     return addNum;
//   }
//   const addFive = addNumberClosure(5);
//   const result = addFive(10);
//   console.log(result); // Output: 15

  

//   function searchArray(arr, val) {    
//     if (arr.length === 0) {
//       return false;
//     } else if (arr[0] === val) {
//       return true;
//     }
    
//     return searchArray(arr.slice(1), val);
//   }
//   const arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 3));
//   console.log(searchArray(arr, 6));
    




//   function addParagraph(text) {
//     const newParagraph = document.createElement('p');
    
//     newParagraph.textContent = text;
    
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph('This is a new paragraph.');







// function addListItem(text) {
//     const list = document.querySelector('ul');
    
//     const newItem = document.createElement('li');
    
//     newItem.textContent = text;
    
//     list.appendChild(newItem);
//   }
//   console.log('This is a new list item.');
  





// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myDiv = document.getElementById("myDiv");
//   changeBackgroundColor(myDiv, "blue");
    



// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   const myObject = { name: "John", age: 30 };
//   saveObjectToLocalStorage("myObject", myObject);
    



// function getObjectFromLocalStorage(key) {
//     const object = localStorage.getItem(key);
//     return JSON.parse(object);
//   }
//   const myObject = getObjectFromLocalStorage("myObject");
  




function saveObjectPropertiesToLocalStorage(object) {
    for (const property in object) {
      localStorage.setItem(property, JSON.stringify(object[property]));
    }
    
    const retrievedObject = {};
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      
      retrievedObject[key] = JSON.parse(localStorage.getItem(key));
    }
    
    return retrievedObject;
  }
  const myObject = { name: "John", age: 30 };
const retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
console.log(retrievedObject);

  