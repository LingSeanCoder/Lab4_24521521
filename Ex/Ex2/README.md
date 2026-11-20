Lab 4 — Exercise 2: Multi-Route SPA Architecture

Dự án thực hành xây dựng ứng dụng Single Page Application (SPA) đa tuyến (Multi-Route) sử dụng React 19, Vite, React Router v7 và Pure CSS, áp dụng kiến trúc Master-Detail và chuẩn Semantic HTML.

1. Tech Stack

Framework: React 19

Build Tool: Vite

Routing: React Router v7 (react-router)

Styling: Pure CSS (CSS Grid & Flexbox, không sử dụng thư viện UI ngoài)

2. Nội dung bài tập

Exercises 1.2 & 1.2.1 — Declarative Syntax & Layout Architecture

Cập nhật cú pháp khai báo mới của React Router v7: thay <Switch> bằng <Routes> và truyền JSX trực tiếp qua prop element={<Component />}.

Xây dựng cấu trúc Nested Route Layouts dùng chung và hiển thị các route con động thông qua <Outlet />.

Xử lý trạng thái active cho thanh điều hướng bằng callback của <NavLink>:

className={({ isActive }) => (isActive ? 'active' : '')}


Exercise 1.2.2 — Master-Detail View & CSS Grid

Responsive CSS Grid Layout: Bố cục Master-Detail với grid-template-columns: minmax(280px, 1fr) 2fr;.

Safe URL Param Extraction: Lấy tham số động id từ URL thông qua hook useParams().

Robust Fallback & 404 Handling: Tra cứu dữ liệu trực tiếp bằng people.find(); hiển thị <NotFoundState /> khi không tìm thấy dữ liệu hợp lệ.

Semantic Definition Lists: Trình bày cặp thông tin chi tiết bằng thẻ ngữ nghĩa <dl>, <dt>, và <dd>.

3. Coding Standards (Bộ Luật Thép)

Variables: Chỉ dùng const và let, cấm tuyệt đối var.

DOM Safety: Không sử dụng innerHTML và inline onclick.

Zero Div-Soup: Bắt buộc dùng Semantic HTML (<header>, <nav>, <main>, <aside>, <section>, <article>, <dl>, <dt>, <dd>).

Derived State: Không sử dụng useEffect để tính toán dữ liệu phái sinh; tính trực tiếp trong quá trình render.

4. Cài đặt và Chạy dự án

Cài đặt các gói phụ thuộc:

npm install


Chạy môi trường phát triển (Development):

npm run dev


Build bản Production:

npm run build


5. Git Discipline

Atomic Commits: Mỗi commit chỉ chứa duy nhất 1 file logic.

Tách biệt CSS & JS: Không gộp file .css và .jsx/.js vào chung một commit.

Khuyến khích viết commit message theo chuẩn Conventional Commits (feat:, style:, refactor:, docs:).