import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    leadsCalled: '',
    leadsEmailed: '',
    tasksCompleted: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for Supabase Edge Function call
    console.log('Form submitted:', formData);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="form-container">
      <h1>Task Tracker</h1>
      <p className="date">{currentDate}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="leadsCalled">Leads Called:</label>
          <input
            type="number"
            id="leadsCalled"
            name="leadsCalled"
            value={formData.leadsCalled}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="leadsEmailed">Leads Emailed:</label>
          <input
            type="number"
            id="leadsEmailed"
            name="leadsEmailed"
            value={formData.leadsEmailed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tasksCompleted">Tasks Completed:</label>
          <input
            type="number"
            id="tasksCompleted"
            name="tasksCompleted"
            value={formData.tasksCompleted}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
