# PROJECT RULES (BỘ LUẬT THÉP)

1. Cấm dùng `var`. Chỉ dùng `const` / `let`.
2. Cấm dùng `innerHTML` cho user data.
3. Cấm inline `onclick=...`. Bắt buộc dùng `addEventListener` hoặc Event Delegation.
4. Zero Div-Soup: Ưu tiên semantic tags (`section`, `article`, `main`, `figure`, `output`...).
5. Cấm `useEffect` cho Derived State.
6. Mỗi Prompt chỉ sinh 1 File duy nhất.
7. Mọi Prompt phải kết thúc bằng việc AI in ra lệnh Git Commit tương ứng.