# TASK DECOMPOSITION — LAB 4: EXERCISE 1.3 (ZERO-EFFECT FORM VALIDATION)

**Mục tiêu:** Tái cấu trúc `SimpleForm` và `InputField` để loại bỏ hoàn toàn 5 `useEffect` anti-pattern (chaining, cascading re-renders, race conditions, infinite loop), chuyển sang kiến trúc Single Source of Truth + Derived State (1 keystroke = 1 render).

## Lộ trình Atomic Commits (1 File / 1 Commit)
1. `docs`: Khởi tạo `TASK_DECOMPOSITION.md`, `project-rules.md`, `README.md`.
2. `feat(validation)`: Tạo `src/utils/validation.js` — Hàm validate thuần (pure functions) cho từng field và toàn form.
3. `feat(ui)`: Tạo `src/components/InputField.jsx` — Controlled input semantic (React 19 `ref` prop, 0 `useEffect`, 0 local state).
4. `feat(form)`: Tạo `src/components/SimpleForm.jsx` — Single Source of Truth, Derived State (`errors`, `isValid`), event-driven `scrollIntoView` khi submit.
5. `feat(app)`: Cập nhật `src/App.jsx` — Semantic page wrapper tích hợp `SimpleForm`.
6. `feat(entry)`: Cập nhật `src/main.jsx` — Mount React 19 với `StrictMode`.
7. `style(css)`: Cập nhật `src/index.css` — Styling form, trạng thái lỗi và responsive (tách riêng commit CSS).