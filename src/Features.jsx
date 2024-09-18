import React from 'react';

const Features = () => {
  const features = [
    "Customizable RGB Backlighting",
    "Mechanical Switches: Cherry MX Red",
    "Programmable Keys",
    "Anti-Ghosting & N-Key Rollover",
    "Dedicated Media Controls",
  ];

  return (
    <div className="features">
      <h2>Key Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
