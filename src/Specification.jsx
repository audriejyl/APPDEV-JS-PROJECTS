import React from 'react';

const Specifications = () => {
  const specs = {
    "Switch Type": "Cherry MX Red (Mechanical)",
    "Key Layout": "Full-size (104 keys)",
    "Backlighting": "RGB with customizable colors",
    "Connectivity": "Wired (USB 2.0)",
    "Dimensions": "440 mm x 135 mm x 35 mm",
    "Weight": "1.2 kg",
    "Cable Length": "1.8 meters",
    "Additional Features": "Anti-ghosting, N-key rollover, dedicated media controls",
  };

  return (
    <div className="specifications">
      <h2>Specifications</h2>
      <ul>
        {Object.entries(specs).map(([key, value], index) => (
          <li key={index}><strong>{key}:</strong> {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Specifications;
