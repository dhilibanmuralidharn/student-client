import React, { useState, useEffect } from 'react';

const Modal = ({ show, onClose, onSubmit, student }) => {
  const [formData, setFormData] = useState({ name: '', age: '', email: '', address: '' });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', age: '', email: '', address: '' });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
          <span className="close cursor-pointer float-right text-red-500" onClick={onClose}>&times;</span>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input className="w-full p-2 border rounded" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div className="mb-4">
              <input className="w-full p-2 border rounded" type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
            </div>
            <div className="mb-4">
              <input className="w-full p-2 border rounded" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="mb-4">
              <input className="w-full p-2 border rounded" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
