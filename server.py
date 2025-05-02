from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return send_file('index.html')

# Dữ liệu kết quả Holland
results = {
    "R": """
        <h3>NGƯỜI THỰC TẾ (Realistic)</h3>
        <p><strong>Bạn là người như thế nào?</strong><br>
        Bạn thích hành động, làm việc cụ thể với máy móc, dụng cụ hoặc thiên nhiên. Bạn thực tế, chăm chỉ, kiên trì và yêu thích những công việc mang lại kết quả rõ ràng. Bạn giỏi tập trung vào chi tiết, kỷ luật và không thích những công việc quá trừu tượng hay giao tiếp phức tạp.</p>
        <p><strong>Nghề nào hợp với bạn?</strong><br>
        - Kỹ thuật viên cơ khí, thợ hàn, công nhân xây dựng.<br>
        - Thợ điện, kỹ thuật viên điện lạnh.<br>
        - Kỹ thuật viên sửa chữa máy tính, mạng.<br>
        - Thợ sửa ô tô, xe máy.<br>
        - Đầu bếp, thợ làm bánh.<br>
        - Kỹ thuật viên lắp ráp, sản xuất thiết bị.<br>
        <i>(Những nghề này rất phổ biến ở Đà Nẵng và bạn có thể học tại TTGDTX2 hoặc các trung tâm nghề liên kết.)</i></p>
        <p><strong>Làm sao để phát triển?</strong><br>
        - Đăng ký các khóa học kỹ thuật như điện tử, cơ khí, ô tô, điện lạnh tại TTGDTX2.<br>
        - Học tin học cơ bản để dùng máy tính và phần mềm kỹ thuật.<br>
        - Thực hành nhiều qua các dự án tự làm hoặc xưởng nghề.<br>
        - Rèn thể lực, học lái xe và xây dựng tinh thần kỷ luật.</p>
    """,
    "I": """
        <h3>NGƯỜI NGHIÊN CỨU (Investigative)</h3>
        <p><strong>Bạn là người như thế nào?</strong><br>
        Bạn tò mò, thích tìm hiểu sâu về khoa học, kỹ thuật. Bạn giỏi phân tích, tư duy logic và yêu thích giải quyết vấn đề. Bạn làm việc độc lập tốt, ham học hỏi và muốn khám phá những điều mới.</p>
        <p><strong>Nghề nào hợp với bạn?</strong><br>
        - Nhà khoa học (vật lý, hóa học, sinh học, môi trường).<br>
        - Kỹ sư công nghệ (CNTT, tự động hóa, môi trường).<br>
        - Kỹ thuật viên xét nghiệm y tế, phòng thí nghiệm.<br>
        - Bác sĩ, dược sĩ (nếu học cao hơn).<br>
        - Giáo viên môn khoa học (Toán, Lý, Hóa, Sinh).<br>
        - Lập trình viên, kỹ sư phần mềm.<br>
        <i>(Đà Nẵng có nhiều cơ hội cho các nghề này, bạn có thể học qua lớp liên kết hoặc tự học.)</i></p>
        <p><strong>Làm sao để phát triển?</strong><br>
        - Tập trung học tốt Toán, Lý, Hóa tại TTGDTX2.<br>
        - Tham gia khóa lập trình cơ bản hoặc tin học nâng cao.<br>
        - Rèn kỹ năng phân tích dữ liệu (Excel, thống kê).<br>
        - Đọc sách khoa học, làm thí nghiệm để phát triển tư duy logic.</p>
    """,
    "A": """
        <h3>NGƯỜI NGHỆ THUẬT (Artistic)</h3>
        <p><strong>Bạn là người như thế nào?</strong><br>
        Bạn sáng tạo, giàu trí tưởng tượng và yêu thích cái đẹp. Bạn nhạy cảm, tự do, không thích làm việc theo khuôn mẫu cứng nhắc. Bạn muốn thể hiện bản thân qua nghệ thuật, thiết kế hoặc văn hóa.</p>
        <p><strong>Nghề nào hợp với bạn?</strong><br>
        - Thiết kế đồ họa, nội thất, họa viên kiến trúc.<br>
        - Họa sĩ, nghệ sĩ thủ công (gốm, thêu, mây tre).<br>
        - Nhà thiết kế thời trang, thợ may sáng tạo.<br>
        - Nhiếp ảnh gia, quay phim.<br>
        - Nhà văn, nhà báo, biên tập viên nội dung.<br>
        - Diễn viên, nhạc sĩ, giáo viên nghệ thuật.<br>
        <i>(Đà Nẵng phát triển du lịch và văn hóa, rất cần các nghề sáng tạo như thiết kế, biểu diễn.)</i></p>
        <p><strong>Làm sao để phát triển?</strong><br>
        - Học các lớp mỹ thuật, thiết kế đồ họa, may mặc tại TTGDTX2 hoặc trung tâm nghề.<br>
        - Tự học phần mềm thiết kế như Photoshop, Illustrator.<br>
        - Tham gia văn nghệ, kịch, âm nhạc để rèn kỹ năng biểu diễn.<br>
        - Đọc sách, đi triển lãm, nghe nhạc để nuôi dưỡng sáng tạo.</p>
    """,
    "S": """
        <h3>NGƯỜI XÃ HỘI (Social)</h3>
        <p><strong>Bạn là người như thế nào?</strong><br>
        Bạn yêu thích giúp đỡ người khác, giỏi giao tiếp và thấu hiểu tâm lý. Bạn hòa đồng, kiên nhẫn, thân thiện và tìm niềm vui khi hỗ trợ cộng đồng. Bạn làm việc nhóm tốt và phù hợp với công việc chăm sóc, giáo dục.</p>
        <p><strong>Nghề nào hợp với bạn?</strong><br>
        - Giáo viên, bảo mẫu, giáo viên mầm non.<br>
        - Nhân viên y tế, điều dưỡng, hộ lý.<br>
        - Tư vấn tâm lý, nhân viên công tác xã hội.<br>
        - Hướng dẫn viên du lịch, tổ chức sự kiện.<br>
        - Nhân viên dịch vụ khách hàng, nhân sự.<br>
        <i>(Đà Nẵng có nhiều khóa đào tạo sư phạm, y tế, du lịch phù hợp.)</i></p>
        <p><strong>Làm sao để phát triển?</strong><br>
        - Học kỹ năng sư phạm hoặc sơ cấp cứu, chăm sóc sức khỏe.<br>
        - Rèn kỹ năng giao tiếp, học ngoại ngữ cơ bản.<br>
        - Tham gia tình nguyện, câu lạc bộ để luyện sự kiên nhẫn.<br>
        - Học tin học văn phòng để hỗ trợ công việc giáo dục, y tế.</p>
    """,
    "E": """
        <h3>NGƯỜI KHỞI XƯỚNG (Enterprising)</h3>
        <p><strong>Bạn là người như thế nào?</strong><br>
        Bạn năng động, tự tin, thích lãnh đạo và kinh doanh. Bạn sáng tạo, dám nghĩ dám làm, giỏi tổ chức và thuyết phục người khác. Bạn phù hợp với công việc quản lý hoặc khởi nghiệp.</p>
        <p><strong>Nghề nào hợp với bạn?</strong><br>
        - Quản lý khách sạn, nhà hàng, công ty du lịch.<br>
        - Nhân viên kinh doanh, môi giới bất động sản, bảo hiểm.<br>
        - Marketing, PR, quảng cáo.<br>
        - Chủ doanh nghiệp nhỏ (quán ăn, cửa hàng).<br>
        - Tổ chức sự kiện, quản lý dự án.<br>
        <i>(Đà Nẵng có nhiều khách sạn, resort, rất cần kỹ năng lãnh đạo, kinh doanh.)</i></p>
        <p><strong>Làm sao để phát triển?</strong><br>
        - Học quản trị kinh doanh, marketing, quản lý khách sạn.<br>
        - Rèn kỹ năng bán hàng, thuyết trình, đàm phán qua thực tế.<br>
        - Học ngoại ngữ (tiếng Anh thương mại) và tin học nâng cao.<br>
        - Tham gia câu lạc bộ, sự kiện để phát triển kỹ năng lãnh đạo.</p>
    """,
    "C": """
        <h3>NGƯỜI SẮP XẾP (Conventional)</h3>
        <p><strong>Bạn là người như thế nào?</strong><br>
        Bạn tỉ mỉ, cẩn thận, thích làm việc theo quy trình rõ ràng. Bạn yêu thích sự ngăn nắp, ổn định và giỏi xử lý dữ liệu, giấy tờ. Bạn phù hợp với công việc văn phòng, hành chính.</p>
        <p><strong>Nghề nào hợp với bạn?</strong><br>
        - Kế toán, kiểm toán viên.<br>
        - Thủ quỹ, giao dịch viên ngân hàng.<br>
        - Nhân viên văn phòng (thư ký, lễ tân, hành chính).<br>
        - Thủ thư, quản lý thư viện.<br>
        - Nhân viên lưu trữ tài liệu, chuyên viên nhân sự.<br>
        <i>(Các nghề này có nhiều cơ hội tại công ty, ngân hàng ở Đà Nẵng.)</i></p>
        <p><strong>Làm sao để phát triển?</strong><br>
        - Học tin học văn phòng (Word, Excel) và kế toán cơ bản.<br>
        - Học nghiệp vụ văn thư, hành chính để xử lý tài liệu.<br>
        - Rèn tính kỷ luật, cẩn thận, kỹ năng tổ chức.<br>
        - Học soạn thảo văn bản, ngoại ngữ hành chính.</p>
    """
}

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    # Tính điểm cho từng nhóm
    scores = {"R": 0, "I": 0, "A": 0, "S": 0, "E": 0, "C": 0}
    for key, value in data.items():
        if value in scores:
            scores[value] += 1
    
    # Lấy nhóm có điểm cao nhất
    max_group = max(scores, key=scores.get)
    html = results.get(max_group, "<p>Không xác định được nhóm!</p>")
    
    return jsonify({"html": html})

if __name__ == '__main__':
    app.run(debug=True)