import React from "react";
import { Table, Button } from "react-bootstrap";
import { saveAs } from "file-saver";
import Papa from "papaparse";

function EntriesList({ entries, setEntries }) {
  // ✅ Function to download CSV
  const handleDownload = () => {
    if (entries.length === 0) {
      alert("No entries to download!");
      return;
    }

    const csv = Papa.unparse(entries);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "entries_data.csv");
  };

  // ✅ Optional: Delete entry
  const handleDelete = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  return (
    <div className="mt-3">
      <h5 className="fw-bold text-primary mb-3">📋 Entries List</h5>

      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.length > 0 ? (
            entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.role}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No entries found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* ✅ Download button at the bottom */}
      <div className="text-center mt-4">
        <Button variant="success" onClick={handleDownload}>
          ⬇️ Download Entries (CSV)
        </Button>
      </div>
    </div>
  );
}

export default EntriesList;
