import React from "react";
import { Table, Button } from "react-bootstrap";

function DataTable({ entries, setEntries }) {
  const deleteEntry = (id) => {
    const updated = entries.filter((item) => item.id !== id);
    setEntries(updated);
  };

  return (
    <div className="mt-3">
      <h5>📊 Entries List</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Role</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phone}</td>
              <td>{entry.role}</td>
              <td><Button variant="danger" size="sm" onClick={() => deleteEntry(entry.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DataTable;
