console.log("page starts")
window.onload = function(){
    console.log("window load")

    let main = document.getElementsByTagName("body")[0]
    let shadowBox = document.getElementsByClassName("shadowBox")[0]
    let restaurant = document.getElementsByClassName("resto")
    let enterName = document.createElement("input")

    //Credits to  Ahmed EL Bir, fucntion found on https://dzone.com/articles/python-class-attributes-vs-instance-attributes//
    function jsUcfirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   

    function checkHoraire(today){
        if (today.getDay() != 1 && today.getDay()!= 2){
            if(today.getHours() < 1 || today.getHours() > 16){
                return true
            } else if(today.getDay() == 1 ){
                if(today.getHours() < 1){
                    return true
                }
                else {if (today.getHours()>16){
                    return true
                } else{
                    return false
                }
            }

        }
        }
    }
    
    console.log(restaurant)

    if(restaurant != null && restaurant != undefined && restaurant.length>0){
        let today = new Date();
        const weekday = new Array(7);
            weekday[0]="Lundi";
            weekday[1]="Mardi";
            weekday[2]="Mercredi";
            weekday[3]="Jeudi";
            weekday[4]="Vendredi";
            weekday[5]="Samedi";
            weekday[6]="Dimanche";
        for(i=0;i<=2;i++){
            let open = document.getElementsByClassName("isOpen")[i];
                if(checkHoraire(today)){
                    open.textContent = "Nous sommes le "+ weekday[today.getDay()] + " à " + today.getHours() + " heure, le restaurant est donc ouvert."
                    console.log("open")
                } else{
                    console.log("close")
                    open.textContent = "Nous sommes le " + weekday[today.getDay()] + " à " + today.getHours() + " heure, le restaurant est donc fermé."
                }
        }
    }

    if(shadowBox){
        let popUp = document.createElement("div")
        let askName = document.createElement("p")
        let confirm = document.createElement("p")
        let welcomeMessage = document.createElement("h2")
        let description = document.getElementById("description")
        //this label is only there to please lighthouse//
        let label = document.createElement("label")

        shadowBox.className="shadowBox"
        popUp.className="popUp"
        askName.className="askName"
        askName.textContent="Please enter your name :"
        confirm.className="confirm"
        confirm.textContent="Confirmer!"
        enterName.type="text"
        enterName.id="enterName"
        enterName.name = "enterName"
        enterName.className="name"
        label.htmlFor="enterName"
        label.textContent="Your name here"
        console.log(label)

        main.appendChild(shadowBox)
        shadowBox.appendChild(popUp)
        popUp.appendChild(askName)
        popUp.appendChild(label)
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
        enterName.focus();
    }
