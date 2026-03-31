function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ color: "#718096", marginBottom: "1rem" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>

      <a href="/" style={{ color: "#1e40af" }}>
        ← กลับหน้าหลัก
      </a>
    </div>
  );
}

export default NotFoundPage;