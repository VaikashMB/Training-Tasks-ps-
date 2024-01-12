document.getElementById("page1Btn").addEventListener("click",clickFunction);

function clickFunction(){
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("page1").classList.add("hidden");
}

document.getElementById("page2Btn1").addEventListener("click",gardenFunction);
function gardenFunction(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}
document.getElementById("appleBtn").addEventListener("click",appleFunction);
function appleFunction(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("apple").classList.remove("hidden");
    
}
document.getElementById("bananaBtn").addEventListener("click",bananaFunction);
function bananaFunction(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("apple").classList.add("hidden");
    document.getElementById("banana").classList.remove("hidden");
    
}
document.getElementById("page2Btn2").addEventListener("click",kitchenFunction);
function kitchenFunction(){
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("apple").classList.add("hidden");
    document.getElementById("banana").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");

    
}
