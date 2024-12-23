import React, { useState, useEffect } from "react";
import NotificationPane from "./components/NotificationPane";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, priority) => {
    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, priority },
    ]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearByPriority = (priority) => {
    setNotifications((prev) => prev.filter((n) => n.priority !== priority));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setNotifications((prev) =>
        prev.filter((n) => Date.now() - n.id < 5000) // Auto-dismiss after 5 seconds
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <h1 align="center">Notification System with Priorities</h1>
      <Controls
        addNotification={addNotification}
        clearAll={clearAll}
        clearByPriority={clearByPriority}
      />
      <NotificationPane
        notifications={notifications}
        onRemove={removeNotification}
      />
    </div>
  );
};

export default App;
