PROJECT RULES — LAB 4 EXERCISE 2 (MULTI-ROUTE SPA ARCHITECTURE)

1. Tech Stack

Framework & Build Tool: React 19, Vite.

Routing: React Router v7 — bắt buộc import trực tiếp từ 'react-router' (ví dụ: import { Routes, Route, NavLink, Outlet, useParams } from 'react-router').

Styling: Pure CSS (CSS Grid & Flexbox). Tuyệt đối không sử dụng thư viện UI ngoài (Tailwind, Bootstrap, MUI, v.v.).

2. Coding Standards (Bộ Luật Thép)

Variables: Chỉ dùng const và let. Cấm tuyệt đối var.

DOM Safety: Cấm dùng innerHTML, cấm inline onclick.

Zero Div-Soup: Bắt buộc sử dụng Semantic HTML (<header>, <nav>, <main>, <aside>, <section>, <article>, <dl>, <dt>, <dd>). Hạn chế tối đa thẻ <div> vô nghĩa.

React State (Derived State): Cấm dùng useEffect để đồng bộ hoặc tính toán Derived State. Phải tính toán trực tiếp trong quá trình render (ví dụ: const person = people.find(p => p.id === id)).

Routing (React Router v7):

Thay thế <Switch> bằng <Routes>.

Khai báo route bằng prop element={<Component />}.

Tổ chức Nested Route Layouts dùng chung và render route con qua <Outlet />.

Xử lý trạng thái active của <NavLink> bằng callback: className={({ isActive }) => isActive ? 'active' : ''}.

3. Feature & Architecture Requirements

Exercises 1.2 & 1.2.1 — Declarative Syntax & Layout Architecture

Thiết lập cấu trúc <Routes> lồng nhau với Layout cha tại path="/" và các route con (index, about, v.v.).

Thanh điều hướng <nav> sử dụng <NavLink> để highlight trang hiện tại.

Exercise 1.2.2 — Master-Detail View & CSS Grid

Responsive CSS Grid Layout: Sử dụng cấu trúc lưới grid-template-columns: minmax(280px, 1fr) 2fr;.

Safe URL Param Extraction: Lấy tham số động id từ URL bằng hook useParams().

Robust Fallback & 404 Handling: Tra cứu dữ liệu trực tiếp qua people.find(). Nếu không tìm thấy (!person), hiển thị component <NotFoundState />.

Semantic Definition Lists: Hiển thị chi tiết thông tin nhân vật theo cặp key-value bằng thẻ <dl>, <dt>, và <dd>.

4. Git Discipline

Atomic Commits: Mỗi commit chỉ chứa 1 file logic duy nhất.

Tách biệt CSS & JS: Tuyệt đối không gộp file .css và .jsx/.js vào chung 1 commit.

Commit Message: Rõ ràng, mô tả đúng phạm vi thay đổi của file đó (khuyến khích chuẩn Conventional Commits như f