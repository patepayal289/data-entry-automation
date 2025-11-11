import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function DataForm({ setEntries, entries }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  // Auto-generate ID
  const generateId = () => {
    setFormData({ ...formData, id: "USR" + Math.floor(Math.random() * 10000) });
  };

  // Auto-fill sample data
  const autoFill = () => {
    setFormData({
      id: "USR" + Math.floor(Math.random() * 10000),
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "9876543210",
      role: "Employee",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setEntries([...entries, formData]);
      setFormData({ id: "", name: "", email: "", phone: "", role: "" });
    }
  };

  return (
    <Card className="p-3 shadow-sm">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" name="id" value={formData.id} readOnly />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select name="role" value={formData.role} onChange={handleChange}>
            <option>Select Role</option>
            <option>Employee</option>
            <option>Student</option>
            <option>Customer</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="secondary" onClick={autoFill}>Auto-Fill</Button>
          <Button variant="info" onClick={generateId}>Generate ID</Button>
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </Card>
  );
}

export default DataForm;
