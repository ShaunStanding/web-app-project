function stateCheck() {
  
    let element = document.body;
    let button = document.getElementsByTagName("button");
    let title = document.getElementById("h1");
    let state = localStorage.getItem("state")
    let navbar = document.getElementById("nav-color")
    if (state !== 'dark') {
        element.className = "light-mode";
        title.style.backgroundColor = "#797979";
        navbar.style.backgroundColor = "#595959"
        button.className = "light-mode";

        console.log(state)
    } else if (state === "dark") {
        element.className = "dark-mode";
        title.style.backgroundColor = "#797979";
        navbar.style.backgroundColor = "#595959"
        button.className = "dark-mode";
        console.log(state)
    }
}

function darkMode() {
    let state = localStorage.getItem("state")
    let element = document.body
    let button = document.getElementsByTagName("button");
    let title = document.getElementById("h1");
    let navbar = document.getElementById("nav-color")
    if (state !== 'dark') {
        element.className = "dark-mode";
        title.style.backgroundColor = "black";
        navbar.style.backgroundColor = "black"
        button.className = "dark-mode";
        localStorage.setItem("state", "dark")
        console.log(state)
    } else if (state === 'dark') {
        element.className = "light-mode";
        title.style.backgroundColor = "#797979";
        button.className = "light-mode";
        navbar.style.backgroundColor = "#595959";
        localStorage.setItem("state", "light")
        console.log(state)
    }
}