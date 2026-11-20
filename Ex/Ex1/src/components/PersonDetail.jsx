import React from 'react';

const PersonDetail = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '24px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  const headerStyle = {
    margin: 0,
    fontSize: '24px',
    color: '#1f2937',
  };

  const roleStyle = {
    margin: '4px 0 0 0',
    fontSize: '18px',
    color: '#4f46e5',
    fontWeight: '500',
  };

  const descStyle = {
    margin: 0,
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.6',
  };

  return (
    <section style={containerStyle}>
      <header>
        <h2 style={headerStyle}>Nguyễn Đình Sang</h2>
        <p style={roleStyle}>Sinh viên</p>
      </header>
      
      <article>
        <p style={descStyle}>
          Đây là đoạn text mô tả ngắn về Nguyễn Đình Sang. Component này được thiết kế với kích thước cố định 
          (width: 100%, height: 400px) để đảm bảo không xảy ra Layout Shift khi kết hợp với Skeleton Loading.
        </p>
      </article>
    </section>
  );
};

export default PersonDetail;