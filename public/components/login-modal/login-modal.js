export const modalUser = () => {
    const mainContainer = document.querySelector(".modal-container");

    const loginPicContainer = document.createElement("div");
    const loginPic = document.createElement("img");
    loginPic.src = "https://remotebnb.s3.us-west-1.amazonaws.com/brain.png";

    loginPicContainer.setAttribute("id","login-pic-container");
    loginPic.setAttribute("id","login-pic");

    loginPicContainer.appendChild(loginPic);
    mainContainer.appendChild(loginPicContainer);
}


export const modalTitle = () => {
    const mainContainer = document.querySelector(".modal-container");

    const titleContainer = document.createElement("div");
    const titleText = document.createElement("p");

    titleContainer.setAttribute("id", "title-container");

    titleText.innerText = "Ask and you shall receive";

    titleContainer.appendChild(titleText);
    mainContainer.appendChild(titleContainer);
}

// Submit button is created in this function
export const modalForm = () => {
    const mainContainer = document.querySelector(".modal-container");

    const formContainer = document.createElement("div");
    const form = document.createElement("form");

    const submitButt = document.createElement("button");

    formContainer.id = "form-container";
    form.id = "login-form";

    formContainer.appendChild(form);
    mainContainer.append(formContainer);

    form.appendChild(submitButt)
}

export const modalFormStudentInputs = () => {
    const form = document.querySelector("#login-form");

    const studentContainer = document.createElement("div");
    studentContainer.id = "student-container"

    const label = document.createElement("label");
    label.for = "student-login";
    label.innerText = "Student Login";

    const studentInput = document.createElement("input");
    studentInput.id = "student-login";
    studentInput.name = "student-login";
    studentInput.placeholder = "unique student id"

    studentContainer.appendChild(label);
    studentContainer.appendChild(studentInput);

    form.appendChild(studentContainer)
}

export const modalFormAdminInputs = () => {
    const form = document.querySelector("#login-form");

    const adminContainer = document.createElement("div");
    adminContainer.id = "admin-container"

    const emailLabel = document.createElement("label");
    emailLabel.for = "admin-email-login";
    emailLabel.innerText = "Admin email";

    const passwordLabel = document.createElement("label");
    passwordLabel.for = "admin-password-login";
    passwordLabel.innerText = "Admin password";

    const adminEmailInput = document.createElement("input");
    adminEmailInput.id = "admin-email-login";
    adminEmailInput.name = "admin-email-login";
    adminEmailInput.placeholder = "e-mail address"

    const adminPasswordInput = document.createElement("input");
    adminPasswordInput.id = "admin-password-login";
    adminPasswordInput.name = "admin-password-login";
    adminPasswordInput.placeholder = "password"

    adminContainer.append(emailLabel, adminEmailInput, passwordLabel, adminPasswordInput)

    form.appendChild(adminContainer);
}
