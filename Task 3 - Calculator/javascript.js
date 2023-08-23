// Calling the screen
const screen = document.querySelector(".screen");
// Calling all the buttons
const buttons = document.querySelectorAll(".btn");

// Giving functionality to the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const clickbutton = button.textContent;

        // Remove everything on the screen when clicking AC
        if(button.id == "AC"){
            screen.textContent = "0";
            return; // the code finishes here and doesn't continue downward
        }

        // Delete the last number
        if(button.id == "delete"){ 
            //when deleting the first number entered, 0 must appear in the screen
            if(screen.textContent.length == 1 || screen.textContent == "Error"){
                screen.textContent = "0";
            }
            else{
            screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
            
        }

        // solve the function when clicking the equal button
        if(button.id == "equal"){
           try{
            screen.textContent = eval(screen.textContent);
           } catch{
             screen.textContent = "Error";
           }
           return;
        }
        
        //  Remove when clicking the default 0 and the Error that is appearing on the screen 
        if(screen.textContent == "0" || screen.textContent == "Error"){
            screen.textContent = clickbutton;
        }
        else{
             // Multiple Clicked buttons appear on the screen
            screen.textContent += clickbutton;
        }

    })
})