import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Property App</h1>

      {/* Reusable Card components */}
      <Card />
      <Card />
      <Card />

      {/* Reusable Button components with all required shapes */}
      <div className="space-y-4 mt-6">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-md rounded-md" />
        <Button title="Large Fully Rounded" styles="text-lg rounded-full" />
        <Button title="Large LG Rounded" styles="text-lg rounded-lg" />
      </div>
    </div>
  );
};

export default LandingPage;
