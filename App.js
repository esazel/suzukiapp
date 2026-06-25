import React, { useState } from 'react';

const SuzukiDashboard = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');
  const [charCount, setCharCount] = useState(0);

  const generateWhatsAppLink = () => {
    const baseUrl = "https://wa.me/";
    const fullLink = `${baseUrl}${phone}?text=${encodeURIComponent(message)}`;
    
    // Validación de la restricción de 255 caracteres
    if (fullLink.length > 255) {
      alert("Error: El enlace excede los 255 caracteres permitidos por Excel.");
    } else {
      setLink(fullLink);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Suzuki Celaya</h1>
      
      {/* Sección de Generador de Enlaces */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Generador de Enlaces WhatsApp (Excel Ready)</h2>
        <input 
          type="text" 
          placeholder="Número de teléfono" 
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea 
          placeholder="Mensaje personalizado" 
          className="w-full p-2 border rounded mb-2"
          onChange={(e) => {
            setMessage(e.target.value);
            setCharCount(e.target.value.length);
          }}
        />
        <p className={`text-sm ${charCount > 255 ? 'text-red-500' : 'text-gray-500'}`}>
          Caracteres: {charCount} / 255
        </p>
        <button 
          onClick={generateWhatsAppLink}
          className="bg-red-600 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
        >
          Generar Link
        </button>
        {link && (
          <div className="mt-4 p-3 bg-gray-100 rounded break-all text-sm">
            {link}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuzukiDashboard;
