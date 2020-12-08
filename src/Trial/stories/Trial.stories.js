import React from "react";
import Tabs from "..";
import "../Tabs.css";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Default = () => (
  <div className="bg">
    <h1>Tabs Demo</h1>
    <Tabs>
      <div label="Steps">
        This is <em>Tab-1-Steps</em>!
      </div>
      <div label="Calls">
        This is <em>Tab-2-Calls</em>!
      </div>
      <div label="Workshops">
        This is <em>Tab-3-Workshops</em>!
      </div>
    </Tabs>
  </div>
);
