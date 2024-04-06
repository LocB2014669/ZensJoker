import React from "react";
import { MainLayout } from "../components/MainLayout";
import { Landing } from "../components/Landing";
import { MainHome } from "./container/MainHome";

export const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <Landing />
        <MainHome />
      </div>
    </MainLayout>
  );
};
