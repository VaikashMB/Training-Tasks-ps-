document.getElementById("enter").addEventListener("click",enterFunction);

function enterFunction(){
    let enteredName = document.getElementById("name").value;
    if(enteredName===""){
        alert("Please enter your name");
    } else {
        document.getElementById("page2").classList.remove("hidden");
        document.getElementById("page1").classList.add("hidden");

        document.getElementById("entered").innerHTML = `Welcome <strong>${enteredName}!</strong> Nice to see you. <br><br> It's been a while Elisa has done her Maths Homework. Help her to finish her homework as there are rewards for the right answers as well as punishments for the wrong answers. By clicking the below button, you will be lead to a series of questions and answering them correctly rewards Elisa with some sweets and wrong answers lead to some punishments. Are you ready to begin?`
    }
}
document.getElementById("begin").addEventListener("click",beginFunction);

function beginFunction(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.remove("hidden");
}

document.getElementById("submit1").addEventListener("click",submit1Function);

function submit1Function(){
    let enteredAnswer1 = document.getElementById("ans1").value;
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");

    if(enteredAnswer1==="132"){
        document.getElementById("afterSubmit1").innerHTML = `Well done! <br> ${enteredAnswer1} is the correct answer. You helped Elisa to win a Jalebi.`
    } 
    else if (enteredAnswer1===""){
        alert("Enter Answer")
    }else {
        document.getElementById("afterSubmit1").innerHTML = `Oops...${enteredAnswer1} is incorrect. Elisa will have to study the multiplication table of 11. As this is the very first question, there won't be any punishment this time. Be careful with the next questions.`
    }

}
// 
document.getElementById("next1").addEventListener("click",next1Function);

function next1Function(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("que2").classList.remove("hidden");

}

document.getElementById("submit2").addEventListener("click",submit2Function);

function submit2Function(){
    let enteredAnswer2 = document.getElementById("ans2").value;
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("que2").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");

    if(enteredAnswer2==="19"){
        document.getElementById("afterSubmit2").innerHTML = `Well done! <br> ${enteredAnswer2} is the correct answer. You helped Elisa to win a Laddu.`
    } 
    else if (enteredAnswer2===""){
        alert("Enter Answer")
    }else {
        document.getElementById("afterSubmit2").innerHTML = `Oops...${enteredAnswer2} is incorrect. Elisa got an imposition for this wrong answer. Don't worry, you can do better next time`
    }

}

// 

document.getElementById("next2").addEventListener("click",next2Function);

function next2Function(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("que2").classList.add("hidden");
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("que3").classList.remove("hidden");

}

document.getElementById("submit3").addEventListener("click",submit3Function);

function submit3Function(){
    let enteredAnswer3 = document.getElementById("ans3").value;
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("que2").classList.add("hidden");
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("que3").classList.add("hidden");
    document.getElementById("page5").classList.remove("hidden");

    if(enteredAnswer3==="Aryabhatta"){
        document.getElementById("afterSubmit3").innerHTML = `Well done! <br> ${enteredAnswer3} is the correct answer. You helped Elisa to win a Gulab Jamun.`
    } 
    else if (enteredAnswer3===""){
        alert("Enter answer")
    }else {
        document.getElementById("afterSubmit3").innerHTML = `Oops...${enteredAnswer3} is incorrect. Elisa will not be allowed to play with friends for 2 days. It's Okay,you tried your best.`
    }

}
document.getElementById("next3").addEventListener("click",thanksFunction);

function thanksFunction(){
    document.getElementById("page6").classList.remove("hidden");
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("que1").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("que2").classList.add("hidden");
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("que3").classList.add("hidden");
    document.getElementById("page5").classList.add("hidden");
}