import React, { useState } from "react";

const Controls = ({ addNotification, clearAll, clearByPriority }) => {
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("High");

  const handleAdd = () => {
    if (message) {
      addNotification(message, priority);
      setMessage("");
    }
  };

  return (
    <div className="controls">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter notification"
      />
      <br/>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAdd}>Add Notification</button>
      <button onClick={clearAll}>Clear All</button>
     
    </div>
  );
};

export default Controls;
