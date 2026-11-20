# PROJECT RULES — LAB 4 EXERCISE 1.3

## 1. Tech Stack
- React 19, Vite, Pure CSS.

## 2. Coding Standards (Bộ Luật Thép)
- **Zero `useEffect` for Form/Derived State:** Tuyệt đối không dùng `useEffect` để sync state, validate, tính `isValid`, hay scroll lỗi.
- **Variables:** Chỉ dùng `const`/`let`. Cấm `var`.
- **DOM Safety:** Cấm `innerHTML`, cấm inline `onclick`.
- **Zero Div-Soup:** Dùng Semantic HTML (`<main>`, `<section>`, `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<output>`).
- **Accessibility:** Gắn `htmlFor`/`id`, `aria-invalid`, `aria-describedby`, `role="alert"` cho thông báo lỗi.

## 3. Git Discipline
- **Atomic Commits:** 1 file / 1 commit.
- **Tách biệt CSS & JS:** Không gộp `.css` và `.jsx`/`.js` vào chung 1 commit.