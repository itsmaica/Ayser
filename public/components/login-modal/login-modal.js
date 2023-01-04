export const modal = () => {
    const container = document.querySelector(".modal-container");

    const modal = document.createElement("div")

    modal.id = "modal";

    container.appendChild(modal)
}

export const modalUser = () => {
    const mainContainer = document.querySelector("#modal");

    const loginPicContainer = document.createElement("div");
    const loginPic = document.createElement("img");
    loginPic.src = "https://remotebnb.s3.us-west-1.amazonaws.com/user.svg";

    loginPicContainer.setAttribute("id","login-pic-container");
    loginPic.setAttribute("id","login-pic");

    loginPicContainer.appendChild(loginPic);
    mainContainer.appendChild(loginPicContainer);

    return mainContainer;
}


export const modalTitle = () => {
    const mainContainer = document.querySelector("#modal");

    const titleContainer = document.createElement("div");
    const titleText = document.createElement("p");

    titleContainer.setAttribute("id", "title-container");

    titleText.innerText = "Ask and You Shall Receive";

    titleContainer.appendChild(titleText);
    mainContainer.appendChild(titleContainer);
}


export const modalForm = () => {
    const mainContainer = document.querySelector("#modal");

    const formContainer = document.createElement("div");
    const form = document.createElement("div");


    formContainer.id = "form-container";
    form.id = "login-form";

    const student = modalFormStudentInputs();
    const admin = modalFormAdminInputs();

    form.append(student, admin)

    formContainer.appendChild(form);
    mainContainer.append(formContainer);

    // form.appendChild(submitButt)
}

const modalFormStudentInputs = () => {

    const studentContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const studentText = document.createElement("p");
    const form = document.createElement("form");
    const label = document.createElement("label");
    const submitButt = document.createElement("button");


    studentContainer.id = "student-container";

    textContainer.id="student-text-container";
    studentText.id="student-text";
    studentText.innerText = "Student"

    form.id = "student-form";


    submitButt.id = "student-login-button";
    submitButt.innerText = "Student Login";

    label.for = "student-login";
    label.innerText = "Student";

    const studentInput = document.createElement("input");
    studentInput.id = "student-login";
    studentInput.name = "student-login";
    studentInput.placeholder = "Unique Id Number"

    form.append(label,studentInput,submitButt);
    textContainer.appendChild(studentText)
    studentContainer.append(textContainer,form);
    // studentContainer.appendChild(label);
    // studentContainer.appendChild(studentInput);

    return studentContainer;

    // form.appendChild(studentContainer)
}

const modalFormAdminInputs = () => {
    // const form = document.querySelector("#login-form");

    const adminContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const adminText = document.createElement("p");

    const form = document.createElement("form");
    const emailLabel = document.createElement("label");
    const passwordLabel = document.createElement("label");
    const adminEmailInput = document.createElement("input");
    const adminPasswordInput = document.createElement("input");
    const submitButt = document.createElement("button");

    adminContainer.id = "admin-container";
    form.id = "admin-login-form";

    textContainer.id = "admin-text-container";
    adminText.id = "admin-text";
    adminText.innerText = "Admin";

    submitButt.id = "admin-submit"
    submitButt.innerText = "Admin Login"

    emailLabel.for = "admin-email-login";
    emailLabel.innerText = "email";

    passwordLabel.for = "admin-password-login";
    passwordLabel.innerText = "password";

    adminEmailInput.id = "admin-email-login";
    adminEmailInput.name = "admin-email-login";
    adminEmailInput.placeholder = "e-mail address"

    adminPasswordInput.id = "admin-password-login";
    adminPasswordInput.name = "admin-password-login";
    adminPasswordInput.placeholder = "password"

    form.append(emailLabel, adminEmailInput,passwordLabel,adminPasswordInput,submitButt);

    textContainer.appendChild(adminText);
    adminContainer.append(textContainer,form);

    return adminContainer;

}
