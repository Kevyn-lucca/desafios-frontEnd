//it calls the id for every buttom and img.

let TextOne = document.querySelector("#first-text");
let TextTwo = document.querySelector("#second-text");
let TextThree = document.querySelector("#third-text");
let TextFour = document.querySelector("#last-text");
let TextOneImg = document.querySelector("#Text1-img");
let TextTwoImg = document.querySelector("#Text2-img");
let TextThreeImg = document.querySelector("#Text3-img");
let TextFourImg = document.querySelector("#Text4-img");

//defines wich buttons have been clicked, since none have been clicked, it starts as false!

let ButtonOneclick = false
let ButtonTwoclick = false
let ButtonThreeclick = false
let ButtonFourclick = false

/*
checks the buttom id and if its been clicked, if its "false", it displays the text and changes the img! 
it also changes the value of the buttom to "true".
in case the buttom is clicked, and the value is true, it deletes the text and changes the buttom value to "false"
and changes the img! it does this for every single buttom.
*/

function DisplayText(num){
    
    if (num == "Text1" && ButtonOneclick == false){
        TextOne.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum et perferendis! Molestias eius, perspiciatis nostrum quo tenetur ad qui earum minima distinctio cum, repellat nobis quibusdam aliquid tempora illum?";
        TextOneImg.setAttribute('src', 'assets/images/icon-minus.svg');
        return ButtonOneclick = true
    }
    
    else if (num == "Text1" && ButtonOneclick == true){
        TextOne.innerHTML = " ";
        TextOneImg.setAttribute('src', 'assets/images/icon-plus.svg');
        return ButtonOneclick = false
    }
    if (num == "Text2" && ButtonTwoclick == false){
        TextTwo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum et perferendis! Molestias eius, perspiciatis nostrum quo tenetur ad qui earum minima distinctio cum, repellat nobis quibusdam aliquid tempora illum?";
        TextTwoImg.setAttribute('src', 'assets/images/icon-minus.svg');
        return ButtonTwoclick = true
    }
    else if (num == "Text2" && ButtonTwoclick == true){
        TextTwo.innerHTML = " ";
        TextTwoImg.setAttribute('src', 'assets/images/icon-plus.svg');
        return ButtonTwoclick = false
    }
    if (num == "Text3" && ButtonThreeclick == false){
        TextThree.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum et perferendis! Molestias eius, perspiciatis nostrum quo tenetur ad qui earum minima distinctio cum, repellat nobis quibusdam aliquid tempora illum?";
        TextThreeImg.setAttribute('src', 'assets/images/icon-minus.svg');
        return ButtonThreeclick = true
    }
    else if (num == "Text3" && ButtonThreeclick== true){
        TextThree.innerHTML = " ";
        TextThreeImg.setAttribute('src', 'assets/images/icon-plus.svg');
        return ButtonThreeclick = false
    }
    if (num == "Text4" && ButtonFourclick == false){
        TextFour.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorum et perferendis! Molestias eius, perspiciatis nostrum quo tenetur ad qui earum minima distinctio cum, repellat nobis quibusdam aliquid tempora illum?";
        TextFourImg.setAttribute('src', 'assets/images/icon-minus.svg');
        return ButtonFourclick = true
    }
    else if (num == "Text4" && ButtonFourclick == true){
        TextFour.innerHTML = " ";
        TextFourImg.setAttribute('src', 'assets/images/icon-plus.svg');
        return ButtonFourclick = false
    }


}