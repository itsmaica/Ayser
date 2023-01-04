// import students from "./images/students"
// menu bar -> [Ayser - about - login ]
export const menuBar = () => {
    const menuBar = document.createElement("div");
    const aysrH1 = document.createElement("h1");
    const about = document.createElement("p");
    const logIn = document.createElement("p");

    menuBar.setAttribute("id", "menu-bar");

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
    const getYourA = document.createElement("div");
    const qText = document.createElement("p");
    const aText = document.createElement("p");

    const pitchImageContainer = document.createElement("div");
    const pitchImg = document.createElement("img");

    pitchContainer.setAttribute("id", "pitch-container");

    pitchTextContainer.setAttribute("id","pitch-text-container");
    askYourQ.setAttribute("id","ask-your-question");
    qText.innerText = "Ask your questions in real-time"
    getYourA.setAttribute("id","get-your-answer");
    aText.innerText = "Get answers from a trusted Admin"

    pitchImageContainer.setAttribute("id","pitch-image-container");
    pitchImg.setAttribute("id","pitch-image");
    pitchImg.src = "https://remotebnb.s3.us-west-1.amazonaws.com/students.jpeg"

    askYourQ.appendChild(qText);
    getYourA.appendChild(aText);
    pitchContainer.append(pitchTextContainer,pitchImageContainer);
    pitchTextContainer.append(askYourQ, getYourA);
    pitchImageContainer.append(pitchImg);
    document.body.appendChild(pitchContainer);
}


export const whyUseOurProduct = () => {
    const sectionContainer = document.createElement("div")
    const section1 = document.createElement("div");
    const section2 = document.createElement("div");
    const section3 = document.createElement("div");

    const useOurProductHeading = document.createElement("p"); // "Why use our platform"

    const prosGrid = document.createElement("div");
    const pro1Text = document.createElement("p");
    const pro2Text = document.createElement("p");
    const pro1Img = document.createElement("img");
    const pro2Img = document.createElement("img");

    const readyToStart = document.createElement("div");
    const startText = document.createElement("p");
    const logInContainer = document.createElement("div");
    const logInButton = document.createElement("button");

    startText.innerText = "Ready to Get Started?"

    // attributes
    sectionContainer.setAttribute("id","sectionContainer");

    section1.setAttribute("id", "section1");
    section2.setAttribute("id", "section2");
    section3.setAttribute("id", "section3");

    useOurProductHeading.innerText = "Why Use Our Platform"

    prosGrid.setAttribute("id", "prosGrid");
    pro1Text.setAttribute("id", "pro1Text");
    pro2Text.setAttribute("id", "pro2Text");
    pro1Img.setAttribute("id", "pro1Img");
    pro2Img.setAttribute("id", "pro2Img");
    pro1Text.setAttribute("className", "proText");
    pro2Text.setAttribute("className", "proText");
    pro1Img.setAttribute("className", "proImg");
    pro2Img.setAttribute("className", "proImg");

    pro1Text.innerText = "Your privacy is protected. Sharing your name is optional."
    pro2Text.innerText = "Know the answer? Collaborate with your fellow students and deepen your own understanding."

    pro1Img.src = "https://remotebnb.s3.us-west-1.amazonaws.com/moon.png"
    pro2Img.src = "https://remotebnb.s3.us-west-1.amazonaws.com/atom.png"

    readyToStart.setAttribute("id","start-container");
    logInContainer.setAttribute("id","logInContainer");
    logInButton.setAttribute("id","logInButton");

    logInButton.innerText = "Log In";

    // appending
    section1.appendChild(useOurProductHeading);
    section2.appendChild(prosGrid);
    section3.append(readyToStart, logInContainer);
    prosGrid.append(pro1Text, pro2Text, pro1Img, pro2Img);

    readyToStart.appendChild(startText);
    logInContainer.appendChild(logInButton);
    sectionContainer.append(section1, section2, section3);
    document.body.appendChild(sectionContainer);
}

export const footer = () => {
    const container = document.createElement("div");
    const aysrDiv = document.createElement("div");
    const ariDiv = document.createElement("div");
    const geoDiv = document.createElement("div");
    const maicaDiv = document.createElement("div");
    const tannerDiv = document.createElement("div");

    const aysrFooterText = document.createElement("p");

    const ariLink = document.createElement("a");
    const geoLink = document.createElement("a");
    const maicaLink = document.createElement("a");
    const tannerLink = document.createElement("a");

    container.setAttribute("id","footerContainer");

    aysrDiv.setAttribute("id","aysrDiv");
    ariDiv.setAttribute("id","ariDiv");
    geoDiv.setAttribute("id","geoDiv");
    maicaDiv.setAttribute("id","maicaDiv");
    tannerDiv.setAttribute("id","tannerDiv");

    aysrFooterText.innerText = "©Ayser"

    ariLink.innerText = "Ari Robinson";
    ariLink.href = "https://github.com/AriannaNRobinson";
    ariLink.target = "_blank";

    geoLink.innerText = "Geoff Ottieno";
    geoLink.href = "https://github.com/gootieno";
    geoLink.target = "_blank";

    maicaLink.innerText = "Maica Santos";
    maicaLink.href = "https://github.com/itsmaica";
    maicaLink.target = "_blank";

    tannerLink.innerText = "Tanner Shaw";
    tannerLink.href = "https://github.com/JTannerShaw";
    tannerLink.target = "_blank";

    container.append(aysrDiv, ariDiv, geoDiv, maicaDiv, tannerDiv);
    aysrDiv.appendChild(aysrFooterText);
    ariDiv.appendChild(ariLink);
    geoDiv.appendChild(geoLink);
    maicaDiv.appendChild(maicaLink);
    tannerDiv.appendChild(tannerLink);

    document.body.appendChild(container)
}


// window.addEventListener("DOMContentLoaded", () => {
//     menuBar();
//     pitchSection();
//     whyUseOurProduct();
//     footer();
// })
