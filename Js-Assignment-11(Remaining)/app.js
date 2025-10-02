// 19. Search and Highlight  
// Search through an array of paragraph texts, highlight matches using DOM manipulation. 

// const inputText = document.querySelector("#textInput");
// const searchInput = document.querySelector("#search");
// const check = () => {
//     const InputArray = inputText.value.split(" ")
//     console.log(InputArray);
//     const valueInclude = InputArray.filter(item => item.includes(searchInput.value));
//     console.log(valueInclude);




const inputText = document.getElementById("inputText");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

const check = () => {
  const InputArray = inputText.value.split(" ");
  const search = searchInput.value;

  // Map through words and wrap the matching ones in <span>
  const highlighted = InputArray.map(item => {
    if (item.includes(search) && search !== "") {
      return `<span style="background: yellow">${item}</span>`;
    } else {
      return item;
    }
  });

  // Join them back and show in the result div
  result.innerHTML = highlighted.join(" ");
};

      
    
    // const searchValue = InputArray[0].includes(searchInput.value);
    // console.log(searchValue);
    // console.log(searchInput.value);