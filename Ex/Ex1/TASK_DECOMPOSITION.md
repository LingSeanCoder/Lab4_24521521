# Exercise 1.1: Performance & Resiliency Architectural Upgrades

## 🎯 Mục tiêu
Tối ưu hóa hiệu năng ứng dụng React thông qua Code-Splitting, cải thiện trải nghiệm người dùng với Skeleton Loading (không gây giật layout) và đảm bảo khả năng truy cập (Accessibility).

## 🏗️ Kiến trúc nổi bật (Key Architectural Highlights)

1. **Code-Splitting (Chia nhỏ mã):** Sử dụng `React.lazy()` kết hợp với Dynamic `import()` để tách nhỏ (chunk) component `PersonDetail`. Component này chỉ được tải về trình duyệt khi người dùng thực sự truy cập vào route tương ứng.
2. **Suspense Boundaries:** Bọc component lazy-load bên trong `<Suspense>`. Cung cấp một UI dự phòng (`fallback`) trong lúc chờ file JavaScript tải xong.
3. **Zero Layout Shift (CLS = 0):** Sử dụng component `Skeleton` được thiết kế với kích thước (dimension) khớp hoàn toàn với nội dung thật của `PersonDetail`. Điều này ngăn chặn hiện tượng trang bị giật/nhảy khi nội dung thật xuất hiện.
4. **Accessibility (A11y):** Tích hợp các thuộc tính ARIA vào Skeleton (`aria-busy="true"` và `aria-live="polite"`) để thông báo cho các công cụ đọc màn hình (Screen Reader) biết rằng dữ liệu đang được tải.

## 🚀 Hướng dẫn chạy
1. Cài đặt dependencies: `npm install` hoặc `yarn install`
2. Chạy môi trường dev: `npm run dev` hoặc `npm start`
3. Mở Network tab trong DevTools, điều chỉnh tốc độ mạng (Slow 3G) và click vào nút điều hướng để xem Skeleton hoạt động.