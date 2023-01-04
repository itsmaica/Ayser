// import { modalContainer } from "../components/login-modal/login-modal.js";
import { modalTitle } from "../components/login-modal/login-modal.js";
import { modalUser } from "../components/login-modal/login-modal.js";
import { modalForm } from "../components/login-modal/login-modal.js";
// import { modalFormStudentInputs } from "../components/login-modal/login-modal.js";
// import { modalFormAdminInputs } from "../components/login-modal/login-modal.js";
import { modal } from "../components/login-modal/login-modal.js";


const initializeLoginModal = () => {
    const container = document.createElement("div");
    container.setAttribute("class", "modal-container")
    document.body.appendChild(container)
}

export const loadLoginModalComponents = () => {
    initializeLoginModal();
    modal();
    modalUser();
    modalTitle();
    modalForm();
    // modalFormStudentInputs();
    // modalFormAdminInputs();
}
