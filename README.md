# Portfolio — Nguyen Huyen Linh (Concert & Vinyl Record theme)

Website tĩnh (HTML/CSS/JS thuần, không cần server, không cần build tool). Gồm 4 file:

```
index.html
style.css
script.js
favicon.svg
```

Mở `index.html` bằng trình duyệt là xem được ngay trên máy — không cần cài gì thêm.

---

## Đưa lên GitHub Pages (miễn phí, ai cũng xem được)

Hướng dẫn dưới đây dành cho người **chưa có tài khoản GitHub**. Làm theo đúng thứ tự, mất khoảng 10 phút.

### Bước 1 — Tạo tài khoản GitHub

1. Vào **github.com/signup**
2. Nhập email, mật khẩu, chọn username (VD: `huyenlinh198`) — username này sẽ nằm trong link portfolio sau này, nên chọn cẩn thận.
3. Xác nhận email khi GitHub gửi mã.

### Bước 2 — Tạo repository (kho chứa code)

1. Sau khi đăng nhập, bấm dấu **+** ở góc trên bên phải → **New repository**.
2. Đặt tên repo, ví dụ: `portfolio` (link cuối cùng sẽ chứa tên này).
3. Chọn **Public**.
4. **Không** tick "Add a README file" (mình đã có sẵn).
5. Bấm **Create repository**.

### Bước 3 — Upload 4 file lên

1. Ở trang repo vừa tạo, bấm **Add file → Upload files**.
2. Kéo thả (hoặc chọn) cả 4 file: `index.html`, `style.css`, `script.js`, `favicon.svg` vào khung upload — thả cùng lúc, đừng để trong thư mục con.
3. Cuộn xuống, bấm **Commit changes**.

### Bước 4 — Bật GitHub Pages

1. Vào tab **Settings** của repo (trên thanh menu ngang).
2. Menu bên trái chọn **Pages**.
3. Ở mục **Build and deployment → Source**, chọn **Deploy from a branch**.
4. Ở mục **Branch**, chọn `main` và thư mục `/ (root)` → bấm **Save**.
5. Đợi khoảng 1–2 phút, load lại trang Settings → Pages, sẽ thấy dòng:
   > Your site is live at `https://<username>.github.io/<ten-repo>/`

Đây chính là **link công khai, miễn phí, ai cũng vào xem được** — không cần đăng nhập, không giới hạn người xem.

Ví dụ nếu username là `huyenlinh198` và repo tên `portfolio`, link sẽ là:
`https://huyenlinh198.github.io/portfolio/`

### Cập nhật nội dung sau này

Muốn sửa gì (đổi text, thêm dự án...), vào repo → mở file cần sửa → bấm biểu tượng bút chì (Edit) → sửa trực tiếp trên web → Commit changes. Trang sẽ tự cập nhật sau ~1 phút, không cần làm lại từ đầu.

---

## Nội dung đã đưa vào từ CV

Toàn bộ dữ liệu (học vấn, dự án, kinh nghiệm, kỹ năng, liên hệ) được lấy từ file CV `NGUYEN HUYEN LINH BUSINESS ANALYST.pdf` bạn gửi, và nằm trong mảng dữ liệu ở đầu file `script.js` (các biến `sideA`, `sideB`, `skillsBA`, `skillsTools`, `skillsSoft`, `tourStops`). Muốn đổi nội dung, sửa trực tiếp trong các mảng đó — không cần đụng vào HTML/CSS.

## Ghi chú thiết kế

- Bảng màu, layout theo đúng ý tưởng "Concert & Vinyl Record" đã mô tả: Overture (hero đĩa than xoay) → Tracklist (Side A/B) → Backstage Pass (vé VIP có QR code LinkedIn) → World Tour Dates (kinh nghiệm) → Encore (liên hệ).
- Âm thanh (vinyl crackle + pad nhạc lofi) được tạo hoàn toàn bằng Web Audio API — không dùng file nhạc có bản quyền, có nút Mute rõ ràng.
- Ảnh bìa đĩa/avatar là artwork gốc (chữ lồng "HL"), không dùng hình ảnh của Hoàng Dũng hay nghệ sĩ nào khác, để tránh vi phạm bản quyền.
- Responsive đầy đủ cho mobile, có menu hamburger, tự tắt hiệu ứng nếu trình duyệt bật "reduced motion".
