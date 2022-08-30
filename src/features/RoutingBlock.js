import { Routes, Route } from "react-router-dom";

/** Page imports go here */
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";

export const RoutesBlock = () => (
  <Routes>
    <Route path="/FeatureTwo" element={<FeatureTwo />} />
    <Route path="/" element={<FeatureOne />} />
  </Routes>
);
