# 12.2 Kubernetes Objects

## 1. Giới thiệu về Kubernetes Objects

### 1.1 Khái niệm cơ bản
- Kubernetes sử dụng các objects để mô tả:
  - Yêu cầu triển khai
  - Hành vi của ứng dụng container
- Có thể tạo objects theo hai cách:
  - Imperatively (mệnh lệnh trực tiếp)
  - Declaratively (mô tả trạng thái mong muốn)

### 1.2 Các loại Objects phổ biến
- Pods
- Deployments
- Services
- Volumes
- ConfigMaps
- Secrets
- Namespaces

## 2. Pods

### 2.1 Khái niệm
- Đơn vị cơ bản trong Kubernetes
- Chứa containers và tài nguyên cần thiết
- Thông thường mỗi pod chứa một container
- Có thể chia sẻ tài nguyên giữa các containers

### 2.2 Đặc điểm
- Có thể chứa nhiều containers
- Chia sẻ tài nguyên chung (volumes)
- Được quản lý tự động bởi Kubernetes
- Có thể được tạo thủ công hoặc tự động

### 2.3 Pod Networking
- Mỗi pod có địa chỉ IP nội bộ
- Containers trong cùng pod giao tiếp qua localhost
- Tương tự như task trong AWS ECS
- Dễ dàng giao tiếp giữa các containers

### 2.4 Tính chất Ephemeral
- Pods là tạm thời
- Dữ liệu bị mất khi pod bị thay thế/xóa
- Tương tự như containers Docker
- Cần cơ chế lưu trữ dữ liệu ngoài pod

## 3. Quản lý Pods

### 3.1 Tự động hóa
- Kubernetes quản lý pods tự động
- Tự động thay thế pods lỗi
- Đảm bảo ứng dụng luôn hoạt động
- Giảm công việc quản lý thủ công

### 3.2 Controller Objects
- Deployment là controller phổ biến
- Quản lý việc tạo pods
- Tự động thay thế pods lỗi
- Mở rộng số lượng pods khi cần

### 3.3 Lợi ích
- Giảm công việc quản lý
- Tăng độ tin cậy
- Tự động hóa quy trình
- Dễ dàng mở rộng

## 4. Deployments

### 4.1 Khái niệm
- Controller object mạnh mẽ
- Quản lý tập hợp pods
- Đảm bảo số lượng pods mong muốn
- Hỗ trợ rolling updates

### 4.2 Chức năng
- Tạo và quản lý pods
- Thay thế pods lỗi
- Mở rộng số lượng pods
- Quản lý phiên bản ứng dụng

### 4.3 Lợi ích
- Tự động hóa quản lý
- Đảm bảo tính sẵn sàng
- Dễ dàng cập nhật
- Hỗ trợ rollback

## 5. Tóm tắt

### 5.1 Điểm chính
- Pods là đơn vị cơ bản
- Có tính chất ephemeral
- Được quản lý tự động
- Deployment là công cụ quản lý mạnh mẽ

### 5.2 Lợi ích
- Tự động hóa quản lý
- Tăng độ tin cậy
- Dễ dàng mở rộng
- Hỗ trợ nhiều tính năng

### 5.3 Kết luận
- Kubernetes cung cấp nhiều công cụ quản lý
- Tự động hóa quy trình triển khai
- Đảm bảo ứng dụng hoạt động ổn định
- Giảm công việc quản lý thủ công

## 6. Tài liệu tham khảo
Để tìm hiểu chi tiết về Deployment Object, vui lòng tham khảo file [deployment-object.md](./deployment-object.md). 