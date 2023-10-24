let isDOBOpen = false;

// Storing DOB
let dateOfBirth;

// Selecting settings cog icon
const settingCogEl = document.getElementById("settingIcon");

// Selecting Setting Content
const settingContentEl = document.getElementById("settingContent");

// Selecting intial text DIV i.e first page text - enter DOB
const intialTextEl = document.getElementById("initialText");

// Selecting Result DIV i.e afterDOBBtnTxt
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");

// Selecting DOB button
const dobButtonEl = document.getElementById("dobButton");

// Selecting DOB Input
const dobButtonEl = document.getElementById("dobButton");

// Toggle date of birth function
const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }

  isDOBOpen = !isDOBOpen;
};


// Date of Birth handler function
const setDOBHandler = () => {
    
};


// setting icon key presse event(toggle)
settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
