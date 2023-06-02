let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            try {
                string = eval(string);
            } catch (error) {
                if(error instanceof SyntaxError){
                    document.querySelector("input").value = "";
                    string = "";
                    alert("Wrong Syntax");
                }
            }
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML=="C"){
            document.querySelector("input").value = "";
            string = "";
        }
        else if(e.target.innerHTML=="M+"){
            let temp = parseInt(string,10)+1;
            string = temp.toString(10);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML=="M-"){
            let temp = parseInt(string,10)-1;
            string = temp.toString(10);
            document.querySelector("input").value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})