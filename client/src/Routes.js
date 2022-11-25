/**
 *To avoid bloated App.js component, page routes created at this component.
 */

import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import Homepage from "./pages/Homepage/Homepage";
import ErrorPage from "./pages/Error/ErrorPage";
import RecylingHabits from "./pages/RecyclingHabits/RecylingHabits";
import CarbonFootprint from "./pages/CarbonFootprint/CarbonFootprint";
import CommutingHabits from "./pages/CommutingHabits/CommutingHabits";
import EatingHabits from "./pages/EatingHabits/EatingHabits";
import DailyUsedMaterials from "./pages/DailyUsedMetarials/DailyUsedMaterials";

/*
 * Creating routes via createBrowserRouter method makes project ready for react-router-dom 6.4 data fetching.
 * MainLayout component has common items like navbar and footer.
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Homepage />} />
      <Route path="/homepage" element={<Navigate replace to="/" />} />
      <Route path="/recycling-habits" element={<RecylingHabits />} />
      <Route path="/commuting-habits" element={<CommutingHabits />} />
      <Route path="/eating-habits" element={<EatingHabits />} />
      <Route path="/carbon-footprint" element={<CarbonFootprint />} />
      <Route path="/daily-used-materials" element={<DailyUsedMaterials />} />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
