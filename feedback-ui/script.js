const ratingElements = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn")
const containerEl = document.getElementById("container")

let selectedRating = "";

ratingElements.forEach((ratingElement)=> {
    ratingElement.addEventListener("click", (event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    /* console.log(event.target.innerText || event.target.parentNode.innerText);
/* tout ce qu'il y a après le ou (||) c pour pouvoir afficher le texte dans la console mm quand on clique sur l'emoji et pas le texte */
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
    /* the background color of the hover stays   */
    });
} );

btnEl.addEventListener("click", () =>{
    if(selectedRating !== "" ){
        containerEl.innerHtml = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
    
    `}

} )

function removeActive(){
    ratingElements.forEach((ratingElement)=> {
        ratingElement.classList.remove("active"); /* Si je selectionne un emoji, alors qu'il y en a un déjà selectionner, the latter will be deactivated  */
    }); /* cette fonction permet d'avoir qu'un seul emoji active càd que l'on puisse selectionner qu'un seul élément */
};
