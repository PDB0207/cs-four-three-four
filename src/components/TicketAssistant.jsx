import React, { useState } from 'react';

export default function TicketAssistant({ onInstruction }) {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      onInstruction(query);
      setQuery('');
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="VD: Tôi cần 3 ghế hàng B"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Đặt ghế</button>
    </div>
  );
}
