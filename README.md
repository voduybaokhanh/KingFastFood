# KingFastFood - Website Bán Thức Ăn Nhanh

KingFastFood là một trang web bán thức ăn nhanh được phát triển bằng HTML, CSS và JavaScript thuần. Dự án này mô phỏng một cửa hàng thức ăn nhanh trực tuyến với đầy đủ các chức năng cơ bản như xem sản phẩm, đăng ký, đăng nhập, thêm vào giỏ hàng và thanh toán.

![KingFastFood Banner](./assets/img/introduce/b2.jpg)

## Tính năng chính

### 1. Giao diện người dùng

- **Trang chủ**: Hiển thị banner quảng cáo và giới thiệu các sản phẩm nổi bật
- **Trang sản phẩm**: Hiển thị danh sách sản phẩm theo danh mục
- **Giỏ hàng**: Quản lý sản phẩm đã chọn mua
- **Tài khoản**: Đăng nhập, đăng ký và quản lý thông tin người dùng

### 2. Chức năng người dùng

- **Đăng ký tài khoản**: Người dùng có thể tạo tài khoản mới
- **Đăng nhập**: Đăng nhập vào hệ thống để mua hàng
- **Tìm kiếm sản phẩm**: Tìm kiếm sản phẩm theo tên
- **Lọc sản phẩm**: Lọc sản phẩm theo danh mục (Combo, Burger, Gà rán, Nước uống)
- **Xem chi tiết sản phẩm**: Xem thông tin chi tiết về sản phẩm
- **Thêm vào giỏ hàng**: Thêm sản phẩm vào giỏ hàng
- **Thanh toán**: Hoàn tất quá trình mua hàng
- **Xem lịch sử đơn hàng**: Theo dõi trạng thái đơn hàng đã đặt

### 3. Chức năng quản trị

- **Quản lý đơn hàng**: Admin có thể xem và cập nhật trạng thái đơn hàng
- **Quản lý người dùng**: Quản lý thông tin người dùng

## Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Định dạng giao diện người dùng
- **JavaScript**: Xử lý logic phía client
- **LocalStorage**: Lưu trữ dữ liệu người dùng, sản phẩm và giỏ hàng
- **Grid System**: Hệ thống lưới để tạo layout responsive
- **FontAwesome**: Thư viện icon

## Cấu trúc dự án

```
KingFastFood/
├── assets/
│   ├── css/             # Các file CSS
│   ├── font/            # Font chữ
│   ├── img/             # Hình ảnh
│   │   ├── introduce/   # Hình ảnh giới thiệu
│   │   └── Products/    # Hình ảnh sản phẩm
│   └── scripts/         # Các file JavaScript
├── index.html           # Trang chính
└── README.md            # Tài liệu dự án
```

## Cách sử dụng

1. Clone hoặc tải dự án về máy
2. Mở file `index.html` bằng trình duyệt web
3. Trải nghiệm các tính năng của trang web

## Tài khoản mặc định

Dự án đã được cài đặt sẵn một số tài khoản để test:

- **Admin**:

  - Tên đăng nhập: admin
  - Mật khẩu: 987

- **Người dùng**:

  - Tên đăng nhập: user1
  - Mật khẩu: 124

  - Tên đăng nhập: user2
  - Mật khẩu: 125

  - Tên đăng nhập: user3
  - Mật khẩu: 126

## Các chức năng chính

### LocalStorage

Dự án sử dụng LocalStorage để lưu trữ dữ liệu, bao gồm:

- Thông tin người dùng
- Danh sách sản phẩm
- Giỏ hàng
- Lịch sử đơn hàng

### Responsive Design

Trang web được thiết kế để hiển thị tốt trên nhiều thiết bị khác nhau:

- Desktop
- Tablet
- Mobile

### Phân trang

Sản phẩm được hiển thị với tính năng phân trang, mỗi trang hiển thị 8 sản phẩm.

### Thông báo (Toast)

Hệ thống thông báo hiển thị khi:

- Thêm sản phẩm vào giỏ hàng
- Đặt hàng thành công
- Đăng nhập/đăng ký thành công

## Hướng phát triển tương lai

- Thêm phương thức thanh toán trực tuyến
- Tích hợp hệ thống đánh giá sản phẩm
- Thêm tính năng khuyến mãi và mã giảm giá
- Phát triển tính năng theo dõi đơn hàng theo thời gian thực
- Tối ưu hóa hiệu suất và trải nghiệm người dùng

## Tác giả

Võ Duy Bảo Khánh - Dự án website bán thức ăn nhanh
