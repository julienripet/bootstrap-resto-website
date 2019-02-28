window.onload = function(){
    let main = document.getElementsByTagName("body")[0]
    let shadowBox = document.getElementsByClassName("shadowBox")[0]
    let popUp = document.createElement("div")
    let askName = document.createElement("p")
    let confirm = document.createElement("p")
    let enterName = document.createElement("input")
    let welcomeMessage = document.createElement("h2")
    let description = document.getElementById("description")

    //Credits to  Ahmed EL Bir, fucntion found on https://dzone.com/articles/python-class-attributes-vs-instance-attributes//
    function jsUcfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   
    if(shadowBox){
        shadowBox.className="shadowBox"
        popUp.className="popUp"
        askName.className="askName"
        askName.textContent="Please enter your name :"
        confirm.className="confirm"
        confirm.textContent="Confirmer!"
        enterName.type="text"
        enterName.autofocus=true
        enterName.className="name"

        main.appendChild(shadowBox)
        shadowBox.appendChild(popUp)
        popUp.appendChild(askName)
        popUp.appendChild(enterName)
        popUp.appendChild(confirm)

        let clearShadowBox = function(){
                if(enterName.value){
                    shadowBox.parentElement.removeChild(shadowBox);
                    welcomeMessage.textContent="Bienvenue " +  jsUcfirst(enterName.value) + "!"
                    description.prepend(welcomeMessage)

                } else {
                    askName.textContent = "PLEASE ENTER YOUR NAME!!!"
                    askName.style.color = "red";

                }
        } 


        enterName.addEventListener("keydown",function(event){
            const key = event.key;
            console.log(key)
            if(key == "Enter"){
                if(enterName.value){
                    shadowBox.parentElement.removeChild(shadowBox);
                    welcomeMessage.textContent="Bienvenue " +  jsUcfirst(enterName.value) + "!"
                    description.prepend(welcomeMessage)

                } else {
                    askName.textContent = "PLEASE ENTER YOUR NAME!!!"
                    askName.style.color = "red";

                }
            }
        })
        confirm.addEventListener("click",clearShadowBox)}
    }