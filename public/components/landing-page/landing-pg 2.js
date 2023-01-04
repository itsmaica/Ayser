// export const landingPage = () => {

//     const menuBar = document.createElement("div");
//     menuBar.setAttribute("id", "menuBar");
//     menuBar.innerText="Hello";

//     // const aysrH1 = document.createElement("h1");
//     // aysrText.innerText = "AYSR"

//     // menuBar.appendChild(aysrH1)


//     document.body.appendChild(menuBar);

// };


window.addEventListener("DOMContentLoaded", () => {

    // menu bar -> [Ayser - about - login ]
    const menuBar = document.createElement("div");
    const aysrH1 = document.createElement("h1");
    const about = document.createElement("p")
    const logIn = document.createElement("p")

    menuBar.setAttribute("id", "menuBar");
    // menuBar.innerText="Hello";

    aysrH1.innerText = "AYSR";

    about.innerText = "ABOUT";

    logIn.innerText = "Log In";

    menuBar.append(aysrH1, about, logIn)
    document.body.appendChild(menuBar);

    // pitch-section
    const pContainer = document.createElement("div");

    pContainer.setAttribute("id", "pitch-container");

})
