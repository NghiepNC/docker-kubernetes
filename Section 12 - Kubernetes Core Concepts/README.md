# Section 12: Thực Hành với Kubernetes

## Mục tiêu của Section

### 1. Làm quen với Kubernetes
- Thực hành và làm việc trực tiếp với Kubernetes
- Áp dụng kiến thức lý thuyết vào thực tế
- Hiểu sâu hơn về cách Kubernetes hoạt động

### 2. Thiết lập môi trường thử nghiệm
- Cài đặt và cấu hình Kubernetes
- Thiết lập môi trường thử nghiệm trên máy tính cá nhân
- Chuẩn bị môi trường phát triển

### 3. Tạo Kubernetes Deployments
- Tìm hiểu về Kubernetes objects
- Học cách tạo và quản lý deployments
- Khám phá các loại objects được Kubernetes hỗ trợ

### 4. Ứng dụng thực tế
- Triển khai ứng dụng cơ bản đầu tiên
- Thực hành với các ví dụ cụ thể
- Hiểu quy trình triển khai ứng dụng trên Kubernetes

### 5. Áp dụng trên quy mô lớn
- Chuẩn bị kiến thức cho triển khai production
- Hiểu cách áp dụng trên các nhà cung cấp đám mây
- Sẵn sàng cho các dự án quy mô lớn

## Phân Biệt Công Việc của Bạn và Kubernetes

### Vai trò của Kubernetes
- Quản lý containers (tạo pod, giám sát, thay thế pod bị lỗi)
- Mở rộng (scaling) các pod
- **Không** tạo cluster và node
- **Không** quản lý cơ sở hạ tầng

### Công việc của bạn
1. **Tạo và quản lý máy chủ**
   - Cài đặt phần mềm Kubernetes trên các máy chủ
   - Thiết lập worker nodes và master node
   - Quản lý trên các nền tảng khác nhau:
     - Máy chủ vật lý
     - EC2 instances
     - Máy chủ từ xa

2. **Quản lý cơ sở hạ tầng**
   - Bảo trì hệ thống
   - Cập nhật phần mềm
   - Đảm bảo bảo mật
   - Quản lý tài nguyên

### Vai trò của Kubernetes trong quản lý containers
- Tạo và quản lý containers trong pod
- Giám sát trạng thái containers
- Tự động thay thế containers bị lỗi
- Sử dụng tài nguyên do bạn cung cấp
- **Không** tạo máy chủ hoặc phần mềm

### Giải pháp bổ sung
Để giảm bớt công việc quản lý cơ sở hạ tầng, bạn có thể sử dụng:
- **Kubermatic**: Công cụ tự động hóa quản lý Kubernetes
- **EKS (Elastic Kubernetes Service)**: Dịch vụ quản lý Kubernetes của AWS
- **AKS (Azure Kubernetes Service)**: Dịch vụ quản lý Kubernetes của Azure
- Các dịch vụ quản lý Kubernetes khác

### Tóm tắt
- Kubernetes là hệ thống quản lý containers, không phải công cụ tạo hạ tầng
- Bạn cần tự tạo và quản lý máy chủ
- Kubernetes sẽ quản lý ứng dụng container của bạn
- Có thể sử dụng các dịch vụ quản lý để giảm bớt công việc

## Cấu trúc thư mục
```
Section 12 - Kubernetes Core Concepts/
├── 01-setup-environment/
│   ├── README.md
│   └── setup-guide.md
├── 02-kubernetes-objects/
│   ├── README.md
│   └── objects-guide.md
├── 03-first-deployment/
│   ├── README.md
│   └── deployment-example.md
├── 04-scaling-applications/
│   ├── README.md
│   └── scaling-guide.md
└── 05-production-preparation/
    ├── README.md
    └── production-guide.md
```

## Tóm tắt
Section này sẽ giúp bạn:
- Thực hành trực tiếp với Kubernetes
- Thiết lập môi trường phát triển
- Triển khai ứng dụng cơ bản
- Chuẩn bị cho triển khai production

## Các bước tiếp theo
1. Thiết lập môi trường Kubernetes
2. Tìm hiểu về Kubernetes objects
3. Triển khai ứng dụng đầu tiên
4. Học cách mở rộng ứng dụng
5. Chuẩn bị cho môi trường production