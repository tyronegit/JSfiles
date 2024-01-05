let animalImg = document.querySelector("#fav-animal")

console.log(animalImg)

function pickCat(element) {
    // element.style.backgroundColor = "goldenrod"
    console.log(element.classList)
    element.classList.add("btn1")
    animalImg.src = "cat.jpg"    
}

function pickDog(element) {
    console.log(element.classList)
    element.classList.add("btn")
    // element.classList.add("button")
    animalImg.src = "dog.jpg"
}