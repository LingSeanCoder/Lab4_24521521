import React from 'react';

const Skeleton = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxSizing: 'border-box',
    animation: 'pulse 1.5s infinite ease-in-out',
  };

  const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    margin: 0,
    flexShrink: 0,
  };

  const textLineStyle = {
    height: '20px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    width: '100%',
    display: 'block',
  };

  const shortTextLineStyle = {
    ...textLineStyle,
    width: '60%',
  };

  const metaTextLineStyle = {
    ...textLineStyle,
    height: '16px',
    width: '40%',
  };

  return (
    <section aria-busy="true" aria-live="polite" style={containerStyle}>
      <figure style={avatarStyle} />
      
      <article style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
        <output style={textLineStyle} />
        <output style={shortTextLineStyle} />
        <output style={metaTextLineStyle} />
        <output style={textLineStyle} />
        <output style={shortTextLineStyle} />
      </article>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Skeleton;