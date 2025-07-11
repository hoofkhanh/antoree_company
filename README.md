# 🚀 Antoree Company - Sàn giáo dục thương mại điện tử tích hợp AI

## 📹 Demo sản phẩm

🌐 **Xem bản demo online:** [https://antoree-company.vercel.app/](https://antoree-company.vercel.app/)

[![Xem video demo](https://img.youtube.com/vi/K_z2nUwvTB0/maxresdefault.jpg)](https://youtu.be/K_z2nUwvTB0 "Xem video demo trên YouTube")

---

## ⚙️ Hướng dẫn cài đặt & chạy dự án

### 1. 🖥️ Yêu cầu môi trường
- **Node.js >= 18**
- **npm >= 9** (hoặc yarn/pnpm)

### 2. 📦 Cài đặt
```bash
# Clone project
git clone https://github.com/hoofkhanh/antoree_company.git
cd antoree_company

# Cài dependencies
npm install
# hoặc: yarn install / pnpm install
```

### 3. 🏃‍♂️ Chạy ở chế độ phát triển
```bash
npm run dev
# hoặc: yarn dev / pnpm dev
```
- Truy cập: http://localhost:3000

### 4. 🏗️ Build production & chạy
```bash
npm run build
npm start
# hoặc: yarn build && yarn start / pnpm build && pnpm start
```
- Mặc định chạy ở port 3000. Có thể đổi port qua biến môi trường `PORT`.

---

## 🛠️ Công nghệ sử dụng
- ⚡️ **Next.js** (App Router, API routes)
- ⚛️ **React 19**
- 🛒 **Redux Toolkit** (quản lý state, đồng bộ localStorage)
- 🎨 **Tailwind CSS** (UI hiện đại, responsive)
- 🧩 **Shadcn UI** (component UI)
- 🔡 **TypeScript**

---

## 🌟 Tính năng nổi bật
- 🔍 **Tìm kiếm, lọc, xem chi tiết sản phẩm/khoá học** (modal chi tiết, lọc, tìm kiếm có đầy đủ trong tất cả trang liên quan tới sản phẩm)
- ❤️ **Yêu thích sản phẩm** (toast thông báo, trang riêng quản lý)
- 🕑 **Lịch sử xem** (tự động lưu khi xem chi tiết sản phẩm, trang riêng)
- 🤖 **Gợi ý thông minh (AI)** (nút "Gợi ý sản phẩm phù hợp" => gọi API giả lập)
- 💬 **Chatbot AI tư vấn sản phẩm** (giao diện chat, trả lời mock theo từ khoá)
- ⏳ **Loading, error UX mượt mà** (skeleton, toast, disable button, input của Chatbot khi loading)
- ⚠️ **Xử lý lỗi API**: Thông báo khi fetch lỗi
- 📱 **Responsive UI** (desktop, tablet, mobile), hiệu ứng hover, transition đồng bộ
- 🧩 **Cấu trúc code rõ ràng, dễ mở rộng, dễ bảo trì**

---

## 📢 Ghi chú
- 🗂️ API sản phẩm: `/api/products` (mock data)
- 🧠 API gợi ý: `/api/suggestions`