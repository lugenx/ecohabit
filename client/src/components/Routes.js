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

import MainLayout from "./MainLayout/MainLayout";
import {
  Homepage,
  ErrorPage,
  RecylingHabits,
  HowRecycle,
  WhatRecycle,
  WhereRecycle,
  WhyRecycle,
  CarbonFootprint,
  EnergyConsumption,
  CommutingHabits,
  EBikeCycling,
  PublicTransport,
  RideSharing,
  EatingHabits,
  Compost,
  FoodWasting,
  MeatIntake,
  DailyUsedMaterials,
} from "../pages";

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
      <Route path="/recycling-habits/recycle-how" element={<HowRecycle />} />
      <Route path="/recycling-habits/recycle-what" element={<WhatRecycle />} />
      <Route
        path="/recycling-habits/recycle-where"
        element={<WhereRecycle />}
      />
      <Route path="/recycling-habits/recycle-why" element={<WhyRecycle />} />
      <Route path="/commuting-habits" element={<CommutingHabits />} />
      <Route
        path="/commuting-habits/e-bike-cycling"
        element={<EBikeCycling />}
      />
      <Route
        path="/commuting-habits/public-transport"
        element={<PublicTransport />}
      />
      <Route path="/commuting-habits/ride-sharing" element={<RideSharing />} />
      <Route path="/eating-habits" element={<EatingHabits />} />
      <Route path="/eating-habits/compost" element={<Compost />} />
      <Route path="/eating-habits/food-wasting" element={<FoodWasting />} />
      <Route path="/eating-habits/meat-intake" element={<MeatIntake />} />
      <Route path="/carbon-footprint" element={<CarbonFootprint />} />
      <Route
        path="/carbon-footprint/energy-consumption"
        element={<EnergyConsumption />}
      />
      <Route path="/daily-used-materials" element={<DailyUsedMaterials />} />
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
