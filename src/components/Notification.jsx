import React from "react";

const Notification = ({ notification, onRemove }) => {
  const { id, message, priority } = notification;

  return (
    <div className={`notification ${priority.toLowerCase()}`}>
      <p>{message}</p>
      <button onClick={() => onRemove(id)}>Dismiss</button>
    </div>
  );
};

export default Notification;
