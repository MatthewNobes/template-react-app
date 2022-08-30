import { Routes, Route } from "react-router-dom";
import FeatureOne from "./features/FeatureOne";
import FeatureTwo from "./features/FeatureTwo";

export const RoutesBlock = () => (
  <Routes>
    <Route path="/FeatureTwo" element={<FeatureTwo />} />
    <Route path="/" element={<FeatureOne />} />
  </Routes>
);
