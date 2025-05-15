// Icon.jsx
import React from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

const Icon = ({ type }) => {
  switch (type) {
    case "success":
      return <CheckCircle data-testid="icon-success" />;
    case "error":
      return <AlertCircle data-testid="icon-error" />;
    default:
      return null;
  }
};

export default Icon;

