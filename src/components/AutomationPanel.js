import React, { useState, useEffect } from "react";
import { Card, Button, ProgressBar, Form } from "react-bootstrap";
import { FaCogs, FaSyncAlt, FaSun, FaMoon } from "react-icons/fa";

function AutomationPanel({ entries }) {
  const [autoSave, setAutoSave] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [lastEntry, setLastEntry] = useState(null);

  useEffect(() => {
    if (entries.length > 0) {
      setLastEntry(entries[entries.length - 1]);
    }
  }, [entries]);

  const toggleAutoSave = () => setAutoSave(!autoSave);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };

  const refreshPanel = () => window.location.reload();

  return (
    <Card className="automation-card shadow p-3 border-0 rounded-4">
      <h5 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2">
        <FaCogs /> Automation Panel
      </h5>

      {/* Auto Save */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Auto-Save:</span>
        <Form.Check
          type="switch"
          id="auto-save"
          checked={autoSave}
          onChange={toggleAutoSave}
          label={autoSave ? "ON" : "OFF"}
        />
      </div>

      {/* Dark Mode */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Dark Mode:</span>
        <Form.Check
          type="switch"
          id="dark-mode"
          checked={darkMode}
          onChange={toggleDarkMode}
          label={darkMode ? "ON" : "OFF"}
        />
      </div>

      {/* Progress */}
      <div className="mb-3">
        <small className="text-muted">Entries Progress</small>
        <ProgressBar
          now={(entries.length % 10) * 10}
          label={`${entries.length} entries`}
          className="mt-1"
        />
      </div>

      {/* Last Entry */}
      {lastEntry ? (
        <div className="p-3 rounded-3 bg-light border mt-3">
          <h6 className="fw-bold mb-2">Last Entry Summary:</h6>
          <div><strong>ID:</strong> {lastEntry.id}</div>
          <div><strong>Name:</strong> {lastEntry.name}</div>
          <div><strong>Role:</strong> {lastEntry.role}</div>
        </div>
      ) : (
        <p className="text-muted small">No entries yet.</p>
      )}

      <div className="text-center mt-4">
        <Button variant="outline-primary" size="sm" onClick={refreshPanel}>
          <FaSyncAlt className="me-1" /> Refresh Panel
        </Button>
      </div>
    </Card>
  );
}

export default AutomationPanel;
