import "./styles/experience.css";
import React, { useState } from "react";
interface CollapsibleButtonProps {
  title: string;
  children: React.ReactNode;
  activeCollapsible: string | null;
  onToggle: (title: string) => void;
}

const CollapsibleButton: React.FC<CollapsibleButtonProps> = ({
  title,
  children,
  activeCollapsible,
  onToggle,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(title);
  };

  React.useEffect(() => {
    setIsCollapsed(activeCollapsible !== title);
  }, [activeCollapsible, title]);

  return (
    <div>
      <button
        type="button"
        className={`collapsible ${isCollapsed ? "" : "collapsible-active"}`}
        onClick={toggleCollapsible}
      >
        {title}
      </button>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};

export default CollapsibleButton;
