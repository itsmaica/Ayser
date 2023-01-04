// menu bar -> [Ayser - about - login ]
export const menuBar = () => {
    const menuBar = document.createElement("div");
    const aysrH1 = document.createElement("h1");
    const about = document.createElement("p")
    const logIn = document.createElement("p")

    menuBar.setAttribute("id", "menuBar");

    aysrH1.setAttribute("id", "aysrHeading")
    aysrH1.innerText = "AYSR";

    about.setAttribute("id", "about-link")
    about.innerText = "ABOUT";

    logIn.setAttribute("id","logIn-link")
    logIn.innerText = "Log In";

    menuBar.append(aysrH1, about, logIn)
    document.body.appendChild(menuBar);
};




export const pitchSection = () => {
    const pitchContainer = document.createElement("div");

    const pitchTextContainer = document.createElement("div");
    const askYourQ = document.createElement("div");
    const qText = document.createElement("p")
    const getYourA = document.createElement("div");

    const pitchImageContainer = document.createElement("div");
    const pitchImg = document.createElement("img");


    pitchContainer.setAttribute("id", "pitch-container");

    pitchTextContainer.setAttribute("id","pitch-text-container");
    askYourQ.setAttribute("id","ask-your-question");
    getYourA.setAttribute("id","get-your-answer");


    pitchImageContainer.setAttribute("id","pitch-image-container");
    pitchImg.setAttribute("id","pitch-image");

    pitchContainer.append(pitchTextContainer,pitchImageContainer);
    pitchTextContainer.append(askYourQ, getYourA);
    pitchImageContainer.append(pitchImg);
    document.body.appendChild(pitchContainer);
}


export const whyUseOurProduct = () => {
    const section1 = document.createElement("div");
    const section2 = document.createElement("div");
    
}


window.addEventListener("DOMContentLoaded", () => {
    menuBar();
    pitchSection();
})
