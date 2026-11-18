# NiK Studio (`nikstudiovn.github.io`)

Bộ mã nguồn Astro + Tailwind CSS dựng sẵn cho NiK Studio.

## Cách đưa lên GitHub Pages
1. Giải nén toàn bộ tệp trong gói này vào thư mục gốc của kho lưu trữ `nikstudiovn/nikstudiovn.github.io` và đẩy (push) lên nhánh `main`.
2. Trên GitHub, vào **Settings > Pages**, ở mục **Build and deployment > Source** chọn **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` sẽ tự động build và xuất bản trang web mỗi khi bạn push code mới.

## Cách thay ảnh, âm thanh và link Google Drive
- **Ảnh sản phẩm:** Thay thế trực tiếp các tệp trong `public/assets/` (`hero.jpg`, `vix.jpg`, `niksign.jpg`, `music.jpg`).
- **File demo âm thanh:** Chép file `.mp3` hoặc `.wav` vào `public/audio/` và điền đường dẫn vào `src/data/studio.ts`.
- **Link Google Drive:** Dán URL vào mục `driveLinks` trong `src/data/studio.ts`.
