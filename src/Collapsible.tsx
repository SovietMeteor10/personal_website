import React, { useState } from "react";
import "./styles/experience.css";

interface CollapsibleButtonProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleButton: React.FC<CollapsibleButtonProps> = ({
  title,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button type="button" className="collapsible" onClick={toggleCollapsible}>
        {title}
      </button>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};

export default CollapsibleButton;
