import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DataForm from "./components/DataForm";
import DataTable from "./components/DataTable";
import AutomationPanel from "./components/AutomationPanel";
import EntriesList from "./components/EntriesList"; // ✅ Import EntriesList

import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  // ✅ Load entries from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(saved);
  }, []);

  // ✅ Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div className="app-bg min-vh-100 py-4">
      <Container>
        {/* ✅ Header Card */}
        <Card className="p-3 shadow-lg text-center mb-4 border-0 rounded-4 header-card">
          <h2 className="fw-bold text-primary mb-1">
            📋 Data Entry Automation System
          </h2>
          <p className="text-secondary">
            Automate, Simplify, and Manage Entries Effortlessly
          </p>
        </Card>

        {/* ✅ Main 3-Column Layout */}
        <Row className="g-4">
          <Col md={4}>
            <DataForm setEntries={setEntries} entries={entries} />
          </Col>
          <Col md={5}>
            <DataTable entries={entries} setEntries={setEntries} />
          </Col>
          <Col md={3}>
            <AutomationPanel entries={entries} />
          </Col>
        </Row>

        {/* ✅ Entries List Section at the Bottom */}
        <Card className="mt-5 p-4 shadow-sm border-0 rounded-4">
          <EntriesList entries={entries} setEntries={setEntries} />
        </Card>
      </Container>
    </div>
  );
}

export default App;
