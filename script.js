const btn = document.getElementById("themeBtn");
const logo = document.getElementById("logo");
const gitlogo = document.getElementById("github-logo");


btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  

  if (document.body.classList.contains("dark")) {
    logo.src = "./assets/logo-dark.png"; 
    gitlogo.src = "./assets/githublogodark.png"; 
    gitlogo.style.width="20px"; 
    gitlogo.style.marginRight="8px"; 
    // Dark mode logo(black)
  } else {
    logo.src = "./assets/logo-bright.png"; 
    gitlogo.src = "./assets/githublogo.png";
    gitlogo.style.width="40px"; 
    // Light mode logo (white)
  }
});


const wBtn = document.getElementById("widthBtn");
const profilelarea = document.getElementById("profileLeftArea");
const profilerarea = document.getElementById("profileRightArea");
// const widthArrow = document.getElementById("widthArrow");
wBtn.addEventListener("click", () => {
    document.body.classList.toggle("profile");
    
  if (document.body.classList.contains("profile")) {
    profilelarea.style.width="10%";
    profilerarea.style.width="100%";
   
  }

  else{
    profilelarea.style.width="260px";
  }

});

const eBtn = document.getElementById("editBTN");
// const editarea = document.getElementById("edit-sectionid");
eBtn.addEventListener("click",()=>{
     document.body.classList.toggle("show");
  // document.editarea.classList.toggle.add("show");

})

const eCross = document.getElementById("edit-cross");
const editarea = document.getElementById("edit-sectionid");
const user = document.querySelectorAll(".profile-section")
eCross.addEventListener("click",()=>{
       document.body.classList.toggle("show");
})




