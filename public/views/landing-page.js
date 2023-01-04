// had issues with multiple import. Worked after switching to individual imports - ms
// import {
//     menuBar,
//     pitchSection,
//     whyUseOurProduct,
//     footer }
// from "../components/landing-page.js";

import { menuBar } from "../components/landing-page/landing-pg.js";
import { pitchSection } from "../components/landing-page/landing-pg.js";
import { whyUseOurProduct } from "../components/landing-page/landing-pg.js";
import { footer } from "../components/landing-page/landing-pg.js";

// const landingContainer = () => {
//     const container = document.createElement("div")
//     container.innerText="WHAT IS GOING ON MAICA"
//     container.setAttribute("id", "landingPageContainer");
//     document.body.appendChild(container);
// }

export const loadLandingPageComponents = () => {
    menuBar();
    pitchSection();
    whyUseOurProduct();
    footer();
};
