# Service Object trong Kubernetes

## I. Vấn đề với Pod IP

Mỗi Pod trong Kubernetes có một internal IP address mặc định, nhưng có hai vấn đề lớn với địa chỉ IP này:

1. **Không thể truy cập từ bên ngoài cluster**: 
   - IP nội bộ chỉ có thể được sử dụng trong phạm vi cluster
   - Không thể truy cập từ bên ngoài

2. **Địa chỉ IP thay đổi khi Pod bị thay thế**:
   - Nếu Pod bị thay thế (do lỗi hoặc scaling)
   - IP của Pod sẽ thay đổi
   - Khiến việc giao tiếp với Pod trở nên khó khăn

## II . Giới thiệu về Service

Service trong Kubernetes là một đối tượng giúp:
- Mở rộng khả năng giao tiếp giữa các Pods và từ bên ngoài cluster
- Group các Pods lại với nhau
- Cung cấp một địa chỉ IP chung mà sẽ không thay đổi
- Giúp dễ dàng giao tiếp với Pods
- Có thể được cấu hình để expose IP ra ngoài cluster
- Giúp bạn truy cập ứng dụng trong Pod từ bên ngoài

## Vì sao cần Service

1. **Tính ổn định trong giao tiếp**:
   - Không có Service, Pods sẽ rất khó tiếp cận
   - IP của Pods thay đổi liên tục
   - Service đảm bảo tính ổn định trong việc giao tiếp với Pods
   - Hoạt động ngay cả khi Pods bị thay thế hoặc mở rộng

2. **IP cố định**:
   - Service cung cấp một IP không đổi
   - Có thể sử dụng để giao tiếp với Pods
   - Expose Pod ra ngoài cluster
   - Mọi người có thể truy cập ứng dụng containerized

## III. Expose ứng dụng  trên Kubernetes

*** Tiếp tục cho phần Node.js (bài lab deployment-handson.md)***

### 1. Kubernetes Service
- Để truy cập Pod và container từ bên ngoài cluster, cần tạo Service
- Service tạo địa chỉ IP ổn định
- Giúp expose Pod ra bên ngoài
- Cho phép người dùng hoặc hệ thống khác truy cập ứng dụng

### 2. Sử dụng kubectl expose
- Lệnh `kubectl expose` dùng để expose Pod hoặc Deployment
- Cần chỉ định:
  - Deployment cần expose
  - Port muốn expose (ví dụ: Port 8080 cho Node.js)
  - Loại service muốn tạo

### 3. Các loại Service
1. **ClusterIP**:
   - Chỉ truy cập được trong cluster
   - Loại mặc định

2. **NodePort**:
   - Cho phép truy cập từ bên ngoài
   - Thông qua IP của worker node

3. **LoadBalancer**:
   - Tạo IP công cộng
   - Phân phối tải vào các Pods

### 4. Tạo Service với LoadBalancer
- LoadBalancer tạo IP công cộng cho Service
- Có thể truy cập từ ngoài cluster
- Minikube hỗ trợ tính năng này
- Trên cloud (AWS, Azure) tự động sinh IP công cộng

### 5. Truy cập ứng dụng qua Minikube
- Minikube chạy trên máy ảo
- Không có IP công cộng
- Sử dụng `minikube service` để ánh xạ port:
```bash
minikube service first-app
```
- Cung cấp địa chỉ để truy cập ứng dụng Node.js

### 6. Kiểm tra Service
- Dùng lệnh `kubectl get services`
- Xem các dịch vụ đang chạy
- Kiểm tra IP và loại dịch vụ

## Kết luận

1. **Truy cập từ bên ngoài**:
   - Pod không thể truy cập từ bên ngoài cluster nếu không có Service

2. **Lợi ích của Service**:
   - Cung cấp địa chỉ IP ổn định cho Pods
   - Có thể expose ứng dụng từ bên trong ra bên ngoài cluster
   - Giúp dễ dàng truy cập và quản lý các ứng dụng containerized

3. **Tính năng quan trọng**:
   - Service là công cụ quan trọng trong Kubernetes
   - Giúp expose ứng dụng container ra ngoài cluster
   - `kubectl expose` và LoadBalancer giúp dễ dàng truy cập ứng dụng
   - Hoạt động trên cả môi trường local (Minikube) và cloud 