import React from 'react';

const PersonDetail = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'sans-serif',
    textAlign: 'left',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: 0,
    flexShrink: 0,
  };

  const headerStyle = {
    margin: 0,
    fontSize: '24px',
    color: '#1f2937',
  };

  const roleStyle = {
    margin: '4px 0 0 0',
    fontSize: '16px',
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
      <figure style={avatarStyle}>NS</figure>

      <header>
        <h2 style={headerStyle}>Nguyễn Đình Sang</h2>
        <p style={roleStyle}>Sinh viên • MSSV: 24521521</p>
      </header>

      <article>
        <p style={descStyle}>
          Chuyên ngành Công nghệ Thông tin. Đang thực hiện bài tập Lab 4 về tối ưu hóa hiệu năng React với Code-Splitting, Suspense Boundaries và chống Layout Shift (CLS = 0).
        </p>
      </article>
    </section>
  );
};

export default PersonDetail;