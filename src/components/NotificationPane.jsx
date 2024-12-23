import React from "react";
import Notification from "./Notification";

const NotificationPanel = ({ notifications, onRemove }) => {
  const priorities = ["High", "Medium", "Low"];

  return (
    <div className="notification-panel">
      {priorities.map((priority) => (
        <div key={priority} className="priority-group">
          <h3>{priority} Priority</h3>
          {notifications
            .filter((n) => n.priority === priority)
            .map((n) => (
              <Notification key={n.id} notification={n} onRemove={onRemove} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default NotificationPanel;
