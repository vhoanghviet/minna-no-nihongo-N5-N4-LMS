# Minna LMS — Japanese Vocabulary & Grammar Learning Platform

> **Trạng thái:** Đang phát triển  
> **Mục tiêu:** Xây dựng một nền tảng học tiếng Nhật N5–N4, tập trung vào từ vựng, ngữ pháp, ôn tập chủ động và theo dõi tiến độ cá nhân.

Minna LMS là website học tiếng Nhật dành cho người tự học theo lộ trình JLPT N5–N4 và nội dung tham khảo từ *Minna no Nihongo*. Người học có thể học nội dung có sẵn, tự tạo bộ từ vựng, luyện nhớ bằng flashcard, làm bài tập và theo dõi tiến bộ theo thời gian.

Tài liệu này là **nguồn định hướng chính cho thiết kế, kiến trúc và quy tắc phát triển**. Khi triển khai tính năng mới, hãy kiểm tra README trước để giữ trải nghiệm và kiến trúc nhất quán.

---

## 1. Tầm nhìn sản phẩm

### 1.1 Người dùng mục tiêu

- Người mới bắt đầu học tiếng Nhật.
- Người đang học nội dung tương đương JLPT N5 hoặc N4.
- Người muốn tự quản lý từ vựng ngoài giáo trình.
- Người cần một nơi kết hợp từ vựng, ngữ pháp, luyện tập và thống kê tiến độ.

### 1.2 Nguyên tắc sản phẩm

1. **Học chủ động:** ưu tiên nhớ lại đáp án thay vì chỉ đọc lại.
2. **Ôn đúng lúc:** đưa từ cần ôn vào hàng đợi dựa trên lịch sử trả lời và lịch ôn.
3. **Người học làm chủ dữ liệu:** người dùng có thể thêm, sửa, phân loại, nhập và xuất từ vựng của mình.
4. **Một nội dung, nhiều cách học:** từ vựng có thể xuất hiện trong danh sách, flashcard, bài kiểm tra và trang ôn tập.
5. **Tiến độ có ý nghĩa:** hiển thị nội dung đã học, nội dung cần ôn và xu hướng học tập; không tạo áp lực bằng bảng xếp hạng bắt buộc.
6. **Mobile-first:** thao tác học bằng điện thoại phải thuận tiện, đồng thời vẫn tối ưu cho desktop.
7. **Dễ bảo trì:** tách giao diện, logic nghiệp vụ và truy cập dữ liệu.
8. **An toàn và tôn trọng bản quyền:** bảo vệ dữ liệu cá nhân; chỉ đưa vào hệ thống nội dung mà dự án có quyền sử dụng.

---

## 2. Phạm vi tính năng

### 2.1 Tài khoản và hồ sơ

- Đăng ký, đăng nhập, đăng xuất.
- Khôi phục mật khẩu thông qua nhà cung cấp xác thực.
- Hồ sơ người dùng: tên hiển thị, mục tiêu học mỗi ngày, cấp độ đang học.
- Mỗi người dùng chỉ truy cập dữ liệu riêng tư của mình.
- Có thể cho phép khách xem một phần nội dung công khai; thao tác lưu tiến độ yêu cầu đăng nhập.

### 2.2 Dashboard

Dashboard sau khi đăng nhập nên có:

- Lời chào và mục tiêu học trong ngày.
- Nút **Bắt đầu ôn tập** nổi bật, hiển thị số từ đến hạn.
- Nút **Học từ mới**.
- Tiến độ N5/N4 và tiến độ từng bài.
- Số từ đã học, số từ cần ôn, số ngày học liên tiếp (streak).
- Hoạt động gần đây và gợi ý bước tiếp theo.
- Trạng thái rỗng rõ ràng cho tài khoản mới.

Không hiển thị số liệu giả như thể đó là dữ liệu thật. Khi chưa có dữ liệu, hiển thị hướng dẫn bắt đầu học.

### 2.3 Lộ trình và bài học

- Phân cấp nội dung: JLPT N5/N4 → giáo trình/nguồn nội dung → bài học → từ vựng/ngữ pháp/bài tập.
- Trang danh sách bài học có trạng thái: chưa bắt đầu, đang học, hoàn thành.
- Trang chi tiết bài học có mục tiêu, nội dung và liên kết tới phần luyện tập.
- Cho phép đánh dấu hoàn thành khi người học đáp ứng điều kiện được định nghĩa.
- Có tìm kiếm và lọc theo cấp độ, bài học, chủ đề.
- Không mặc định rằng mọi nội dung trong giáo trình đều được phép sao chép lên website.

### 2.4 Từ vựng

Mỗi mục từ vựng có thể lưu:

- Từ tiếng Nhật (kanji/kana).
- Cách đọc kana.
- Nghĩa tiếng Việt.
- Loại từ.
- Câu ví dụ tiếng Nhật và bản dịch.
- Âm thanh phát âm nếu có nguồn hợp pháp.
- Cấp độ JLPT, chủ đề, bài học và ghi chú cá nhân.
- Nguồn nội dung và trạng thái công khai/cá nhân.
- Ngày tạo và ngày cập nhật.

Các thao tác cần hỗ trợ:

- Thêm, xem, sửa, xóa từ do người dùng tạo.
- Tìm kiếm theo từ tiếng Nhật, cách đọc, nghĩa hoặc ghi chú.
- Lọc theo cấp độ, bài học, chủ đề, loại từ và bộ từ.
- Đánh dấu yêu thích hoặc gắn thẻ.
- Thêm từ có sẵn vào danh sách cá nhân mà không sửa bản gốc.
- Nhập/xuất dữ liệu CSV theo mẫu có hướng dẫn và kiểm tra lỗi.
- Kiểm tra dữ liệu bắt buộc, chuẩn hóa khoảng trắng và cảnh báo mục trùng.
- Xác nhận trước khi xóa; không xóa dữ liệu chỉ vì một thao tác nhầm.

### 2.5 Flashcard và ôn tập chủ động

Luồng học tham khảo:

1. Hiển thị mặt trước: từ tiếng Nhật hoặc câu hỏi theo chế độ đã chọn.
2. Người học suy nghĩ và tự trả lời.
3. Người học bấm **Hiện đáp án**.
4. Hiển thị cách đọc, nghĩa, ví dụ và âm thanh nếu có.
5. Người học đánh giá mức độ nhớ, ví dụ: **Quên**, **Khó**, **Tốt**, **Dễ**.
6. Hệ thống lưu kết quả và tính lịch ôn tiếp theo.
7. Chuyển sang thẻ tiếp theo.

Các chế độ có thể hỗ trợ:

- Nhật → nghĩa tiếng Việt.
- Nghĩa tiếng Việt → từ tiếng Nhật.
- Nghe → chọn/nhập từ.
- Điền từ còn thiếu trong câu.
- Chỉ ôn các từ sai, từ yêu thích hoặc một bộ từ cụ thể.

Yêu cầu UX:

- Nút lớn, dễ thao tác bằng chuột và cảm ứng.
- Phím tắt tùy chọn cho người dùng desktop; không được làm mất khả năng sử dụng bằng bàn phím.
- Hiển thị tiến trình phiên học và nút thoát có xác nhận khi có thay đổi chưa lưu.
- Tránh tự động đánh dấu từ là đã thuộc chỉ vì người dùng đã xem đáp án.

### 2.6 Lịch ôn lặp lại ngắt quãng

- Mỗi người dùng có trạng thái ôn riêng cho từng từ.
- Lưu lần ôn gần nhất, lịch ôn tiếp theo, số lần ôn, số lần quên và thông tin thuật toán cần thiết.
- Tạo hàng đợi từ đến hạn, có giới hạn số từ mới mỗi ngày theo cài đặt người dùng.
- Nếu người dùng bỏ lỡ một ngày, đưa các thẻ quá hạn vào hàng đợi hợp lý; không làm mất lịch sử.
- Thuật toán ban đầu có thể dùng phiên bản đơn giản của Leitner hoặc SM-2; tách thuật toán thành module độc lập để thay đổi sau này.
- Không tuyên bố thuật toán đảm bảo người dùng sẽ ghi nhớ từ.

### 2.7 Ngữ pháp

Mỗi điểm ngữ pháp có thể chứa:

- Tên/cấu trúc.
- Cấp độ và bài học.
- Ý nghĩa, cách dùng và lưu ý.
- Công thức theo loại từ hoặc cấu trúc câu.
- Ví dụ tiếng Nhật, cách đọc nếu cần và bản dịch tiếng Việt.
- Lỗi thường gặp và điểm dễ nhầm.
- Các mẫu ngữ pháp liên quan.
- Bài tập kiểm tra hiểu bài.

Tính năng:

- Tìm kiếm theo mẫu ngữ pháp hoặc ý nghĩa.
- Lọc theo N5/N4 và bài học.
- Đánh dấu đã học/yêu thích.
- Tạo bài tập trắc nghiệm, sắp xếp từ, điền chỗ trống hoặc chọn cách diễn đạt phù hợp.
- Lưu kết quả làm bài và gợi ý ôn lại câu trả lời sai.

### 2.8 Quiz và kiểm tra

- Trắc nghiệm nhiều lựa chọn.
- Điền đáp án hoặc điền từ còn thiếu.
- Nối từ với nghĩa.
- Câu hỏi theo bài, theo chủ đề hoặc theo cấp độ.
- Chấm điểm, giải thích đáp án và xem lại câu sai.
- Lưu lịch sử lần làm bài.
- Trộn thứ tự câu hỏi và phương án khi phù hợp.
- Không gửi đáp án đúng trong payload công khai nếu cần bảo vệ bài kiểm tra; việc chấm điểm quan trọng nên được xác minh ở backend.

### 2.9 Bộ từ cá nhân và thư viện cộng đồng

- Người dùng có thể tạo nhiều bộ từ, ví dụ: “N5 Bài 1”, “Từ vựng công việc”, “Từ dễ quên”.
- Một từ có thể thuộc nhiều bộ.
- Có thể sao chép từ thư viện công khai vào bộ cá nhân.
- Chỉ cho phép công khai bộ từ khi người dùng xác nhận họ có quyền chia sẻ nội dung.
- Có thể bổ sung tính năng chia sẻ bằng liên kết sau khi có cơ chế quyền truy cập rõ ràng.

### 2.10 Quản trị nội dung

Dành cho tài khoản có quyền quản trị được xác minh ở backend:

- Tạo/sửa/ẩn bài học, từ vựng, ngữ pháp và câu hỏi.
- Quản lý cấp độ, thứ tự bài và chủ đề.
- Xem trạng thái xuất bản và lịch sử cập nhật nếu được triển khai.
- Kiểm tra dữ liệu trước khi xuất bản.
- Không dựa vào việc ẩn nút trên frontend để bảo vệ chức năng quản trị.

### 2.11 Tính năng mở rộng sau MVP

- Phát âm TTS với nhà cung cấp phù hợp.
- Lịch học theo tuần và nhắc nhở do người dùng chủ động bật.
- Thống kê độ chính xác theo chủ đề.
- Chế độ tối.
- PWA hoặc khả năng dùng ngoại tuyến có đồng bộ.
- Thành tích cá nhân, XP và streak không mang tính ép buộc.
- Gợi ý bài học dựa trên kết quả.
- Hỗ trợ thêm cấp độ sau N4 nếu nội dung và phạm vi dự án cho phép.

---

## 3. Nguyên tắc giao diện và trải nghiệm (UI/UX)

### 3.1 Phong cách hình ảnh

Định hướng: **nền tảng học tập hiện đại, thân thiện, lấy nội dung làm trung tâm**, có cảm hứng từ các ứng dụng học từ vựng nhưng giữ nhận diện riêng.

- Nền sáng, khoảng trắng thoáng, thẻ nội dung bo góc vừa phải.
- Màu chủ đạo đề xuất: xanh lá dịu hoặc xanh ngọc; màu phụ dùng để phân biệt trạng thái.
- Không lạm dụng gradient, bóng đổ, hoạt ảnh hoặc màu bão hòa.
- Font hỗ trợ tốt chữ Latin, tiếng Việt, kana và kanji.
- Dùng icon nhất quán; không dùng emoji thay thế tất cả icon chức năng.
- Không sao chép logo, hình minh họa, âm thanh hoặc bố cục độc quyền của sản phẩm khác.

### 3.2 Bố cục desktop

- **Sidebar trái:** Dashboard, Lộ trình học, Từ vựng, Ngữ pháp, Ôn tập, Bộ từ của tôi, Thống kê.
- **Header:** tên sản phẩm, tìm kiếm, mục tiêu/ngày, menu hồ sơ.
- **Khu vực chính:** nội dung của trang hiện tại.
- **Panel phụ (nếu cần):** tiến độ hoặc gợi ý liên quan; không làm hẹp nội dung học chính.
- **Trang ôn tập:** giảm thành phần gây xao nhãng, tập trung vào flashcard và thao tác trả lời.

### 3.3 Bố cục mobile

- Chuyển sidebar thành menu điều hướng phù hợp với màn hình nhỏ.
- Nút thao tác chính dễ chạm.
- Flashcard chiếm phần lớn vùng nội dung.
- Bảng dữ liệu chuyển thành danh sách/thẻ; không ép người dùng cuộn ngang nếu có thể tránh.
- Form thêm từ vựng có nhãn rõ, bàn phím phù hợp và thông báo lỗi cạnh trường nhập.

### 3.4 Trạng thái giao diện bắt buộc

Mỗi trang có tải dữ liệu phải xử lý:

- Loading/skeleton.
- Không có dữ liệu.
- Lỗi tải dữ liệu và nút thử lại.
- Thành công sau thao tác.
- Lỗi xác thực/quyền truy cập.
- Trạng thái offline hoặc mất kết nối nếu có thể xảy ra.

Không dùng `alert()` cho mọi tương tác. Ưu tiên thông báo rõ ràng, có thể truy cập và không che nội dung quan trọng.

### 3.5 Khả năng tiếp cận

- Điều hướng bằng bàn phím.
- Nhãn form gắn đúng với input.
- Độ tương phản chữ/nền phù hợp.
- Không chỉ dùng màu để phân biệt đúng/sai.
- Hỗ trợ trạng thái focus dễ nhận biết.
- Nút icon có tên truy cập (accessible name).
- Tôn trọng tùy chọn giảm chuyển động của hệ điều hành.

---

## 4. Công nghệ và kiến trúc

### 4.1 Stack mặc định

| Phần | Công nghệ | Trách nhiệm |
|---|---|---|
| Frontend | React + TypeScript + Vite | Giao diện và tương tác |
| Routing | React Router | Điều hướng và route bảo vệ |
| Styling | Tailwind CSS hoặc CSS theo component | Responsive UI |
| Icon | Lucide React | Icon nhất quán |
| Backend service | Supabase | Auth, API dữ liệu và dịch vụ backend |
| Database | PostgreSQL qua Supabase | Dữ liệu quan hệ |
| Security | Supabase Auth + RLS | Xác thực và phân quyền hàng dữ liệu |
| Version control | Git + GitHub | Lịch sử thay đổi |
| Testing | Vitest + React Testing Library; công cụ E2E khi cần | Kiểm thử |
| Deployment | Static hosting cho frontend + Supabase | Đưa ứng dụng lên Internet |

Các phiên bản thư viện phải được chọn tương thích và khóa bằng lockfile của npm. Không tự ý nâng cấp hàng loạt dependency mà không chạy kiểm thử.

### 4.2 Sơ đồ kiến trúc

```text
Người dùng
   |
   v
React + TypeScript (Frontend)
   |-- Pages / Routes
   |-- Feature components
   |-- Hooks / UI state
   |-- Service layer
   |
   v
Supabase client
   |-- Supabase Auth
   |-- PostgreSQL + Row Level Security
   |-- Storage (chỉ khi cần)
   |
   v
Database
   |-- profiles
   |-- lessons
   |-- vocabulary
   |-- grammar
   |-- exercises
   |-- user_vocabulary
   |-- user_progress
   |-- quiz_attempts
```

Frontend không được chứa secret key hoặc thông tin đặc quyền. Mọi quyền truy cập dữ liệu phải được xác minh bằng chính sách ở backend/database, không chỉ bằng giao diện.

### 4.3 Trách nhiệm từng lớp

- **Page:** kết hợp layout và feature để tạo thành một trang.
- **Component:** thành phần UI có thể tái sử dụng, hạn chế chứa logic truy cập database.
- **Service:** đóng gói truy vấn và thao tác dữ liệu theo nghiệp vụ.
- **Types:** định nghĩa kiểu dữ liệu dùng chung.
- **Hooks:** đóng gói stateful logic của React khi cần.
- **Database:** ràng buộc dữ liệu, quan hệ, chỉ mục và quyền truy cập.
- **Tests:** xác minh hành vi người dùng và các quy tắc nghiệp vụ quan trọng.

Tránh viết truy vấn Supabase rải rác trong mọi component. Tránh một file khổng lồ chứa toàn bộ ứng dụng.

---

## 5. Quy ước tổ chức thư mục

Cấu trúc mục tiêu:

```text
minna-lms/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── router.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Button.tsx
│   │   └── ProgressBar.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   ├── RegisterPage.tsx
│   │   │   └── authService.ts
│   │   ├── dashboard/
│   │   │   ├── DashboardPage.tsx
│   │   │   └── dashboardService.ts
│   │   ├── vocabulary/
│   │   │   ├── VocabularyPage.tsx
│   │   │   ├── Flashcard.tsx
│   │   │   └── vocabularyService.ts
│   │   ├── grammar/
│   │   │   ├── GrammarPage.tsx
│   │   │   ├── GrammarDetail.tsx
│   │   │   └── grammarService.ts
│   │   ├── lessons/
│   │   │   ├── LessonListPage.tsx
│   │   │   └── LessonDetailPage.tsx
│   │   ├── quiz/
│   │   │   ├── QuizPage.tsx
│   │   │   └── QuizResult.tsx
│   │   ├── review/
│   │   │   ├── ReviewPage.tsx
│   │   │   └── reviewService.ts
│   │   └── admin/
│   │       ├── AdminPage.tsx
│   │       └── ContentEditor.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── lib/
│   │   └── supabase.ts
│   ├── types/
│   │   ├── vocabulary.ts
│   │   ├── grammar.ts
│   │   └── lesson.ts
│   ├── styles/
│   │   └── globals.css
│   └── main.tsx
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── .env.local
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> Đây là cấu trúc mục tiêu, không bắt buộc phải tạo mọi file ngay từ đầu. Tạo file khi tính năng tương ứng bắt đầu được triển khai. Các file cấu hình như `package.json`, `main.tsx`, `index.html` do Vite tạo cần được giữ lại.

Nếu một feature trở nên lớn, có thể mở rộng thành `components/`, `hooks/`, `types/`, `utils/` bên trong chính feature đó. Chỉ tạo thêm lớp khi có nhu cầu thực tế.

---

## 6. Mô hình dữ liệu đề xuất

Tên bảng và trường có thể điều chỉnh qua migration, nhưng phải giữ quan hệ và quyền truy cập rõ ràng.

### 6.1 Các bảng chính

#### `profiles`

- `id`: UUID, trùng với ID người dùng trong hệ thống Auth.
- `display_name`: tên hiển thị.
- `daily_new_word_goal`: mục tiêu từ mới mỗi ngày.
- `preferred_level`: cấp độ đang học.
- `created_at`, `updated_at`.

#### `lessons`

- `id`: UUID.
- `level`: N5 hoặc N4.
- `title`, `description`.
- `lesson_number`, `sort_order`.
- `source_name`: nguồn nội dung.
- `is_published`.
- `created_at`, `updated_at`.

#### `vocabulary`

Dành cho thư viện từ vựng chuẩn được quản trị nội dung quản lý:

- `id`: UUID.
- `japanese`: từ/cụm từ tiếng Nhật.
- `reading`: cách đọc kana.
- `meaning_vi`: nghĩa tiếng Việt.
- `part_of_speech`: loại từ, có thể để trống nếu chưa xác định.
- `example_ja`, `example_vi`.
- `level`, `lesson_id`, `topic`.
- `audio_url`: tùy chọn.
- `is_published`.
- `created_at`, `updated_at`.

#### `user_vocabulary`

Dành cho từ cá nhân do người dùng tự tạo:

- `id`: UUID.
- `user_id`: chủ sở hữu.
- `japanese`, `reading`, `meaning_vi`.
- `part_of_speech`, `example_ja`, `example_vi`.
- `notes`, `tags`.
- `created_at`, `updated_at`.

Dữ liệu cá nhân phải có chính sách RLS để người dùng chỉ đọc/sửa/xóa bản ghi của chính mình.

#### `vocabulary_decks`

- `id`, `user_id`, `name`, `description`, `is_public`.
- `created_at`, `updated_at`.

#### `deck_items`

- `id`, `deck_id`.
- Tham chiếu tới từ thư viện chuẩn hoặc từ cá nhân theo một thiết kế quan hệ rõ ràng.
- `sort_order`, `created_at`.

Không thiết kế tham chiếu đa hình thiếu ràng buộc một cách tùy tiện. Nếu một mục có thể trỏ tới hai nguồn, cần quy định rõ chỉ một nguồn được phép tồn tại trên mỗi bản ghi hoặc dùng mô hình bảng liên kết phù hợp.

#### `grammar`

- `id`, `level`, `lesson_id`.
- `title`, `pattern`, `meaning_vi`, `usage_vi`.
- `formation_notes`, `common_mistakes`.
- `sort_order`, `is_published`.
- `created_at`, `updated_at`.

#### `grammar_examples`

- `id`, `grammar_id`.
- `sentence_ja`, `reading` (tùy chọn), `sentence_vi`.
- `sort_order`.

#### `exercises`

- `id`, `lesson_id`, `grammar_id` (tùy chọn).
- `exercise_type`, `prompt`, `options` (nếu phù hợp).
- `explanation_vi`, `difficulty`, `is_published`.
- Đáp án cần được bảo vệ phù hợp với cách triển khai chấm điểm.

#### `user_vocabulary_progress`

- `id`, `user_id`.
- Tham chiếu tới từ chuẩn hoặc từ cá nhân theo mô hình quan hệ đã chọn.
- `due_at`, `last_reviewed_at`.
- `repetition_count`, `lapse_count`, `interval_days`, `ease_factor` nếu dùng thuật toán tương ứng.
- `status`, `created_at`, `updated_at`.

Nên có ràng buộc duy nhất cho cặp người dùng + nguồn từ để tránh tạo hai trạng thái ôn tập cho cùng một từ.

#### `user_progress`

- `id`, `user_id`, `lesson_id`.
- `status`, `completed_at`, `last_accessed_at`.
- Ràng buộc duy nhất phù hợp cho mỗi người dùng và bài học.

#### `quiz_attempts` và `quiz_answers`

Lưu lần làm bài, điểm số, thời gian hoàn thành và câu trả lời của người dùng. Không lưu nhiều dữ liệu nhạy cảm hơn mức cần thiết.

### 6.2 Quy tắc thiết kế database

- Dùng UUID hoặc kiểu ID nhất quán; không trộn nhiều quy ước vô lý.
- Dùng foreign key và unique constraint để bảo vệ tính toàn vẹn.
- Dùng timestamp có múi giờ cho dữ liệu thời gian.
- Thêm chỉ mục cho cột thường dùng để lọc, nối bảng hoặc sắp xếp khi dữ liệu đủ lớn.
- Dùng migration để thay đổi schema có thể tái tạo và xem lại.
- Không dùng dữ liệu mẫu trong production như thể là dữ liệu thật.
- Cần thống nhất cách lưu từ chuẩn và từ cá nhân trước khi triển khai chức năng ôn tập.

---

## 7. Quy tắc bảo mật

1. **Không commit secret:** `.env.local` phải nằm trong `.gitignore`.
2. Frontend chỉ được dùng thông tin cấu hình công khai được phép đưa lên client, ví dụ Supabase URL và publishable/anon key theo cấu hình hiện hành.
3. Không đưa `service_role` key, database password hoặc secret của nhà cung cấp vào frontend.
4. Bật RLS cho các bảng chứa dữ liệu theo người dùng.
5. Viết policy riêng cho `SELECT`, `INSERT`, `UPDATE`, `DELETE`; kiểm tra cả quyền sở hữu và vai trò.
6. Vai trò admin phải được xác minh ở backend/database bằng nguồn đáng tin cậy, không dựa vào trường người dùng tự sửa trong profile.
7. Kiểm tra dữ liệu đầu vào ở client để UX tốt và ở server/database để bảo vệ hệ thống.
8. Không tin ID, điểm số hoặc trạng thái do client tự gửi nếu chúng ảnh hưởng quyền truy cập hay kết quả quan trọng.
9. Không ghi mật khẩu, token hoặc dữ liệu riêng tư vào log.
10. Không cho phép truy cập dữ liệu riêng tư chỉ bằng cách đoán URL hoặc UUID.
11. Có chính sách xóa tài khoản và xử lý dữ liệu liên quan khi cần.
12. Kiểm tra kỹ quyền truy cập trước khi công khai website.

---

## 8. Quy tắc code

### 8.1 TypeScript và React

- Ưu tiên TypeScript strict mode; tránh `any` nếu không có lý do rõ ràng.
- Component React dùng PascalCase: `Flashcard.tsx`.
- Hàm và biến dùng camelCase: `getDueCards`, `currentLesson`.
- Hằng số dùng camelCase hoặc UPPER_SNAKE_CASE theo phạm vi và quy ước của module; giữ nhất quán.
- Component nên có một trách nhiệm rõ ràng.
- Tách logic nghiệp vụ phức tạp khỏi JSX.
- Không dùng `useEffect` để tính toán lại giá trị có thể suy ra trực tiếp từ props/state.
- Tránh tạo state trùng lặp cho cùng một dữ liệu.
- Xử lý trạng thái loading, error và empty state.
- Không dùng index làm React key cho danh sách có thể thêm/xóa/sắp xếp nếu có ID ổn định.
- Không đưa logic truy cập database vào component UI dùng chung.

### 8.2 Truy cập dữ liệu

- Mọi truy vấn cần xử lý lỗi và trạng thái không có dữ liệu.
- Service trả về kiểu dữ liệu rõ ràng.
- Không giả định truy vấn luôn thành công.
- Phân biệt lỗi mạng, lỗi quyền truy cập, dữ liệu không hợp lệ và lỗi hệ thống.
- Dùng phân trang khi danh sách có thể lớn.
- Tránh gọi API lặp lại không cần thiết.
- Không hiển thị thành công trước khi thao tác lưu được xác nhận.

### 8.3 Cấu hình môi trường

Tạo `.env.local` ở thư mục gốc:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_KEY
```

Tên biến cần khớp với cách khởi tạo client trong `src/lib/supabase.ts`. Không điền secret vào biến có tiền tố `VITE_`, vì các biến này có thể được đưa vào bundle frontend.

Thêm các file môi trường chứa bí mật vào `.gitignore`. Có thể cung cấp `.env.example` chỉ chứa tên biến và placeholder để người khác biết cần cấu hình gì.

---

## 9. Luồng nghiệp vụ quan trọng

### 9.1 Thêm từ vựng cá nhân

1. Người dùng mở **Từ vựng của tôi**.
2. Chọn **Thêm từ**.
3. Nhập từ tiếng Nhật và nghĩa; các trường bắt buộc được ghi rõ.
4. Có thể bổ sung cách đọc, ví dụ, ghi chú, tag và bộ từ.
5. Client kiểm tra dữ liệu để đưa ra thông báo sớm.
6. Service gửi dữ liệu tới Supabase.
7. Database/RLS xác minh quyền và lưu dữ liệu.
8. UI hiển thị kết quả thành công và cập nhật danh sách.
9. Nếu thất bại, giữ nội dung đã nhập và giải thích cách xử lý.

### 9.2 Một phiên ôn tập

1. Lấy các thẻ đến hạn của người dùng hiện tại.
2. Áp dụng giới hạn phiên và chế độ học đã chọn.
3. Hiển thị mặt trước.
4. Người dùng tự nhớ đáp án rồi chủ động mở đáp án.
5. Người dùng đánh giá mức độ nhớ.
6. Service tính lịch ôn tiếp theo bằng thuật toán đã chọn.
7. Lưu kết quả ôn và cập nhật tiến độ.
8. Hiển thị tóm tắt phiên: số thẻ đã học, kết quả và các thẻ cần chú ý.

Cần tránh ghi nhận hai lần nếu người dùng bấm nút nhiều lần hoặc mạng gửi lại yêu cầu. Thiết kế thao tác lưu theo cách có thể chống gửi lặp khi phù hợp.

### 9.3 Hoàn thành bài học

- Quy định rõ điều kiện hoàn thành.
- Lưu trạng thái theo người dùng.
- Không đánh dấu hoàn thành chỉ vì người dùng mở trang.
- Khi cập nhật tiến độ, giữ lịch sử bài kiểm tra nếu đó là dữ liệu có ý nghĩa.

---

## 10. Kiểm thử và tiêu chuẩn chất lượng

### 10.1 Kiểm thử tối thiểu

- Component hiển thị đúng với dữ liệu hợp lệ và dữ liệu rỗng.
- Form thêm/sửa từ có kiểm tra trường bắt buộc.
- Người dùng không thể sửa/xóa từ của người khác.
- Ôn tập lấy đúng các thẻ đến hạn.
- Đánh giá thẻ cập nhật lịch ôn theo quy tắc.
- Quiz chấm điểm chính xác.
- Lỗi mạng không làm mất dữ liệu form chưa gửi.
- Route không tồn tại hiển thị trang 404.
- Layout dùng được trên desktop và mobile.
- Các trang có thể thao tác bằng bàn phím.

### 10.2 Trước khi merge hoặc triển khai

- Chạy lint nếu đã cấu hình.
- Chạy TypeScript check.
- Chạy unit/component tests.
- Chạy build production.
- Kiểm tra migration và RLS.
- Kiểm tra không có secret trong diff.
- Thử các luồng đăng nhập, thêm từ, ôn tập và đăng xuất.

Không bỏ qua lỗi TypeScript hoặc lỗi bảo mật chỉ để build thành công.

---

## 11. Cài đặt và chạy dự án

### Yêu cầu

- Node.js phiên bản tương thích với phiên bản Vite đang sử dụng.
- npm.
- VS Code.
- Tài khoản Supabase nếu triển khai backend thực tế.

### Cài dependencies

```bash
npm install
```

### Chạy môi trường phát triển

```bash
npm run dev
```

Mở URL local được hiển thị trong terminal.

### Kiểm tra build

```bash
npm run build
```

### Xem bản build local

```bash
npm run preview
```

Các lệnh `lint`, `test` hoặc `typecheck` chỉ dùng được sau khi đã thêm script tương ứng trong `package.json`.

### Cấu hình Supabase

1. Tạo project Supabase.
2. Lấy URL và public/publishable key theo hướng dẫn hiện hành của Supabase.
3. Điền giá trị vào `.env.local`.
4. Tạo migration cho schema.
5. Bật và kiểm tra RLS trước khi đưa dữ liệu người dùng lên.
6. Chạy seed dữ liệu học mẫu đã được phép sử dụng.
7. Kiểm thử quyền bằng ít nhất hai tài khoản khác nhau.

---

## 12. Kế hoạch phát triển theo giai đoạn

### Phase 0 — Nền tảng dự án

- [ ] Khởi tạo React + TypeScript + Vite.
- [ ] Thiết lập router và layout chung.
- [ ] Thiết lập CSS/design tokens và responsive.
- [ ] Thiết lập lint, typecheck và Git.
- [ ] Tạo README, `.gitignore` và `.env.example`.

### Phase 1 — MVP frontend

- [ ] Trang chủ và dashboard với dữ liệu mẫu.
- [ ] Danh sách bài học N5/N4.
- [ ] Danh sách từ vựng và trang chi tiết.
- [ ] Form thêm/sửa/xóa từ cá nhân.
- [ ] Flashcard cơ bản.
- [ ] Trang ngữ pháp và ví dụ.
- [ ] Quiz đơn giản và trang kết quả.
- [ ] Loading, error và empty states.

### Phase 2 — Backend và tài khoản

- [ ] Thiết lập Supabase Auth.
- [ ] Tạo migration database.
- [ ] Bật RLS và kiểm thử quyền.
- [ ] Lưu từ vựng cá nhân trên database.
- [ ] Lưu tiến độ bài học.
- [ ] Lưu lịch sử quiz.
- [ ] Xử lý lỗi mạng và xác thực.

### Phase 3 — Ôn tập thông minh

- [ ] Hàng đợi từ đến hạn.
- [ ] Thuật toán lặp lại ngắt quãng.
- [ ] Lưu lịch sử ôn tập.
- [ ] Bộ từ cá nhân.
- [ ] Nhập/xuất CSV.
- [ ] Thống kê tiến độ.

### Phase 4 — Nội dung và quản trị

- [ ] Công cụ biên tập bài học.
- [ ] Quản lý từ vựng và ngữ pháp chuẩn.
- [ ] Quản lý câu hỏi.
- [ ] Kiểm tra nội dung trước xuất bản.
- [ ] Phân quyền admin an toàn.

### Phase 5 — Hoàn thiện

- [ ] Kiểm thử end-to-end.
- [ ] Kiểm tra accessibility.
- [ ] Tối ưu hiệu năng và tải dữ liệu.
- [ ] Thiết lập logging phù hợp, không lộ dữ liệu cá nhân.
- [ ] Triển khai frontend.
- [ ] Kiểm tra bảo mật trước khi public.

---

## 13. Quy trình làm việc với AI coding assistant

Khi yêu cầu AI viết code cho dự án này:

1. Đọc README và kiểm tra cấu trúc file thực tế trước khi sửa.
2. Xác định tính năng, dữ liệu đầu vào/đầu ra và các trường hợp lỗi.
3. Nêu rõ file nào sẽ tạo hoặc chỉnh sửa.
4. Không tự ý đổi stack hoặc tái cấu trúc toàn bộ dự án khi chưa cần.
5. Viết code hoàn chỉnh, thống nhất với TypeScript và kiến trúc hiện có.
6. Không tạo API, bảng database hoặc hàm chưa được định nghĩa rồi giả định chúng đã tồn tại.
7. Nếu cần thay đổi schema, tạo migration và cập nhật type/service liên quan.
8. Với tính năng có dữ liệu riêng tư, phải đề cập RLS và quyền truy cập.
9. Sau khi sửa, chạy hoặc hướng dẫn lệnh kiểm tra phù hợp.
10. Nêu rõ phần nào đã hoàn thành, phần nào vẫn là placeholder và biến môi trường nào cần cấu hình.

AI không được tuyên bố tính năng đã chạy thành công nếu chưa kiểm tra hoặc chưa có bằng chứng.

---

## 14. Quy tắc nội dung và bản quyền

- Nội dung do dự án tự biên soạn nên được ưu tiên.
- Chỉ nhập dữ liệu giáo trình, hình ảnh, âm thanh hoặc ví dụ khi có quyền sử dụng phù hợp.
- Ghi nguồn và điều kiện giấy phép của tài nguyên bên ngoài.
- Không sao chép logo, hình ảnh, âm thanh, văn bản hoặc thiết kế độc quyền của MochiVocab hay dịch vụ khác.
- Dữ liệu người dùng tạo thuộc phạm vi quyền và điều khoản được công bố rõ ràng.
- Không công khai bộ từ cá nhân mặc định.
- Cần có cơ chế báo lỗi nội dung và sửa lỗi dịch/ngữ pháp.

---

## 15. Định nghĩa “hoàn thành” (Definition of Done)

Một tính năng chỉ được coi là hoàn thành khi:

- [ ] Đúng yêu cầu nghiệp vụ.
- [ ] Giao diện có loading, error, empty và success state phù hợp.
- [ ] Responsive trên kích thước màn hình chính.
- [ ] TypeScript không có lỗi liên quan.
- [ ] Có kiểm thử cho logic quan trọng.
- [ ] Quyền truy cập dữ liệu được xác minh.
- [ ] Không làm lộ secret hoặc dữ liệu cá nhân.
- [ ] Không phá vỡ tính năng hiện có.
- [ ] Có hướng dẫn cấu hình nếu cần.
- [ ] Đã xác minh bằng test/build hoặc ghi rõ phần chưa thể kiểm chứng.

---

## 16. Quyết định thiết kế hiện tại

- Frontend: React + TypeScript + Vite.
- Routing: React Router.
- Backend ban đầu: Supabase Auth + PostgreSQL + RLS.
- Nội dung: tách dữ liệu khỏi component giao diện.
- Từ vựng: hỗ trợ thư viện chuẩn và từ cá nhân.
- Ôn tập: thiết kế theo thuật toán module hóa, có thể thay đổi.
- Giao diện: responsive, tối giản, tập trung vào học tập.
- Phát triển: theo từng phase, ưu tiên MVP trước khi mở rộng.
- Bảo mật: quyền được thực thi ở backend/database, không chỉ ở frontend.

Các quyết định trên là mặc định của dự án. Khi thay đổi, cập nhật README để tránh tài liệu và code lệch nhau.

---

## 17. Tài liệu tham khảo chính thức

- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/
- Vite: https://vite.dev/guide/
- React Router: https://reactrouter.com/
- Supabase: https://supabase.com/docs
- PostgreSQL: https://www.postgresql.org/docs/
- Tailwind CSS: https://tailwindcss.com/docs
- Vitest: https://vitest.dev/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/

---

**Nguyên tắc cuối cùng:** Xây dựng một tính năng nhỏ nhưng chạy đúng, có kiểm thử và bảo mật tốt còn giá trị hơn tạo nhiều file với code placeholder. README này là định hướng phát triển; cập nhật nó khi quyết định kỹ thuật hoặc phạm vi sản phẩm thay đổi.
