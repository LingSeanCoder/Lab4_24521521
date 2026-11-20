# Lab 4 — Exercise 1.3: Eliminating useEffect Chaining in Form Validation

## Vấn đề (Anti-Pattern)
Kiến trúc cũ nối 5 `useEffect` giữa `InputField` và `SimpleForm` gây ra 5 vòng re-render thừa cho mỗi phím bấm, race condition khi gõ nhanh và nguy cơ `Maximum update depth exceeded`.

## Giải pháp
- **Single Source of Truth:** Quản lý `values` và `touched` duy nhất tại `SimpleForm`.
- **Synchronous Derived State:** Tính `errors` và `isValid` trực tiếp trong render (0 `useEffect`).
- **Event-Driven Scroll:** Cuộn và focus tới field lỗi đầu tiên trực tiếp trong `handleSubmit`.

## Chạy dự án
```bash
npm install
npm run dev