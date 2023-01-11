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
import { handleLogin } from "../events/index.js";

export const loadLandingPageComponents = () => {
  menuBar();
  pitchSection();
  whyUseOurProduct();
  footer();

  handleLogin();
};
