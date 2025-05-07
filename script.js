// Xử lý form bài test
document.getElementById('holland-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Lấy tất cả các checkbox đã chọn
    const formData = new FormData(e.target);
    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    // Tính điểm cho từng nhóm (R, I, A, S, E, C)
    formData.forEach((value) => {
        if (scores[value] !== undefined) {
            scores[value]++;
        }
    });

    // Tìm nhóm có điểm cao nhất
    const maxScore = Math.max(...Object.values(scores));
    const resultGroups = Object.keys(scores).filter((key) => scores[key] === maxScore);

    // Tạo nội dung kết quả chi tiết theo mẫu
    let resultText = '<h3>Kết quả Holland cho học sinh TTGDTX2</h3>';
    resultGroups.forEach((group) => {
        if (group === 'R') {
            resultText += `
                <h4>Nhóm Kỹ thuật (Người hành động)</h4>
                <h5>1. Đặc điểm</h5>
                <p>Những người thuộc nhóm Kỹ thuật có sở thích và khả năng khám phá, sử dụng máy móc, làm những công việc sử dụng thao tác tay chân như các ngành nghề thuộc về cơ khí, ô tô, điện, tin học hoặc các ngành nghề đòi hỏi sự khéo léo của tay chân như thể thao, nấu nướng, chăm sóc cây xanh, thủ công mỹ nghệ... Khả năng cần có:</p>
                <ul>
                    <li>Thực tế, cụ thể, có suy nghĩ thực dụng.</li>
                    <li>Thể lực tốt, trí nhớ và tư duy tốt.</li>
                    <li>Say mê, nghiêm túc thực hiện các quy trình kỹ thuật.</li>
                    <li>Sáng tạo, khéo tay, tỉ mỉ, có năng lực chú ý tốt.</li>
                    <li>Thị lực tốt, trí tưởng tượng không gian tốt.</li>
                    <li>Phản ứng cảm giác/vận động nhanh, chính xác.</li>
                    <li>Chịu đựng trạng thái căng thẳng, kiên trì, nhạy cảm.</li>
                    <li>Khí chất thần kinh ổn định.</li>
                </ul>
                <h5>2. Môi trường làm việc tương ứng</h5>
                <p>Môi trường làm việc phù hợp với nhóm Kỹ thuật thường liên quan đến điều khiển máy móc, đồ vật hoặc chăm sóc, bảo vệ vật nuôi, cây trồng, bao gồm:</p>
                <ul>
                    <li>Làm việc ngoài trời, đòi hỏi sự khéo léo chân tay khi sử dụng các công cụ, máy móc hoặc trong hoạt động thể thao.</li>
                    <li>Nghề phù hợp điển hình: Trồng trọt, chăn nuôi, trồng rừng, điện - điện tử, cơ khí, điều khiển, sử dụng, sửa chữa máy móc, các nghề thủ công mỹ nghệ, vận động viên, huấn luyện viên, cảnh sát, cứu hỏa…</li>
                </ul>
                <p><strong>Chống chỉ định:</strong> Dị ứng dầu mỡ, hóa chất; Lao, hen, hẹp van tim, viêm thận; Loạn thị, loạn sắc, mù màu; Run tay và mồ hôi quá nhiều; Tâm lý không ổn định.</p>
                <h5>3. Các ngành nghề đào tạo</h5>
                <ul>
                    <li>Vận hành máy, chế tạo máy, cơ khí ứng dụng, tự động, bảo trì và sửa chữa ô tô.</li>
                    <li>Thiết bị điện, lắp đặt điện, bảo hành, sửa chữa điện - điện tử, tin học, xây dựng.</li>
                    <li>Trồng trọt, chăn nuôi, trồng rừng, nuôi trồng thủy sản, mộc dân dụng, mộc mỹ nghệ.</li>
                    <li>Thể thao, nấu ăn, làm vườn và chăm sóc cây xanh, thêu nghệ thuật, đan, móc, làm hoa, cắm hoa, điêu khắc.</li>
                    <li>Nhân viên kỹ thuật phòng thí nghiệm, tài xế, lái tàu, công nghệ thông tin, quản lý cảnh quan và môi trường, trồng hoa, cây cảnh, may dân dụng, may công nghiệp.</li>
                </ul>
                <h5>4. Gợi ý chọn ngành học cho học sinh TTGDTX2</h5>
                <p>Học sinh TTGDTX2 thường có đặc điểm là học tập linh hoạt, nhiều em vừa học vừa làm hoặc có hoàn cảnh đặc biệt. Với kết quả Holland thuộc nhóm Kỹ thuật, các em có thể chọn các ngành học phù hợp với khả năng thực hành và thao tác tay chân, đồng thời dễ tiếp cận trong bối cảnh học tập tại TTGDTX. Dưới đây là các gợi ý cụ thể:</p>
                <ul>
                    <li><strong>Cơ khí hoặc sửa chữa ô tô:</strong> Phù hợp với học sinh thích làm việc với máy móc, có khả năng thực hành tốt. Các em có thể học tại các trung tâm dạy nghề ở Đà Nẵng như Trung tâm Dạy nghề Thanh Khê, với các khóa ngắn hạn về sửa chữa ô tô hoặc cơ khí chế tạo. Các khóa này thường có lịch học linh hoạt, phù hợp với học sinh TTGDTX2.</li>
                    <li><strong>Điện - Điện tử:</strong> Dành cho học sinh yêu thích lắp ráp và sửa chữa thiết bị điện. Các trường trung cấp nghề như Trung cấp Nghề Đà Nẵng có các khóa học về điện công nghiệp hoặc điện dân dụng, nơi các em có thể vừa học vừa thực hành.</li>
                    <li><strong>Nấu ăn hoặc làm vườn:</strong> Phù hợp với học sinh thích công việc khéo léo và sáng tạo. Các trung tâm dạy nghề như Trung tâm Dạy nghề Du lịch Đà Nẵng có các khóa học nấu ăn cơ bản hoặc chăm sóc cây cảnh, rất phù hợp để học sinh TTGDTX2 bắt đầu.</li>
                    <li><strong>Thủ công mỹ nghệ:</strong> Dành cho học sinh có sự tỉ mỉ và sáng tạo, như làm đồ thêu, đan móc, hoặc điêu khắc. Các em có thể tham gia các lớp thủ công tại các trung tâm văn hóa ở Đà Nẵng hoặc tự học qua các khóa trực tuyến.</li>
                </ul>
                <p><strong>Hành động cụ thể:</strong></p>
                <ul>
                    <li>Tìm hiểu ngành học: Tham khảo thông tin về các khóa học tại các trung tâm dạy nghề hoặc trường trung cấp ở Đà Nẵng qua website hoặc đến trực tiếp văn phòng tuyển sinh.</li>
                    <li>Tham gia hoạt động thực tế: Đăng ký các buổi thực hành tại TTGDTX2 hoặc tham gia các lớp học nghề ngắn hạn để trải nghiệm công việc thực tế.</li>
                    <li>Kết nối với cựu học sinh: Tìm hiểu kinh nghiệm từ các anh chị cựu học sinh TTGDTX2 đã học các ngành kỹ thuật qua các nhóm mạng xã hội hoặc sự kiện của trường.</li>
                    <li>Thử sức với công việc bán thời gian: Làm các công việc như phụ giúp tại xưởng cơ khí, tiệm sửa chữa, hoặc làm vườn để trải nghiệm môi trường làm việc thực tế.</li>
                </ul>
                <p><strong>Lưu ý:</strong> Các em nên ưu tiên các chương trình học linh hoạt (học buổi tối, học online) hoặc các khóa ngắn hạn để phù hợp với lịch học tại TTGDTX2. Hãy bắt đầu với những bước nhỏ như tham gia một khóa học nghề hoặc thực hành tại xưởng để khám phá sở thích và khả năng của mình!</p>
            `;
        }
        if (group === 'I') {
            resultText += `
                <h4>Nhóm Nghiên cứu (Người tư duy)</h4>
                <h5>1. Đặc điểm</h5>
                <p>Những người thuộc nhóm Nghiên cứu có sở thích và khả năng làm việc độc lập, nghiên cứu say mê về một lĩnh vực nào đó như công nghệ sinh học, công nghệ thông tin, nghiên cứu về văn hóa xã hội… Có khả năng chuẩn bị làm việc với hệ thống khái niệm khoa học, tìm ra quy luật chung để trình bày dưới dạng hệ thống ký hiệu. Ở mức cao hơn, những người nhóm này có khả năng hoạt động giao tiếp trí tuệ, tư duy trừu tượng, lao động sáng tạo khoa học bậc cao để phát hiện quy luật và thiết kế chiến lược KHKT và KHXH. Khả năng cần có:</p>
                <ul>
                    <li>Khoa học, kiên trì, phát triển mạnh tư duy logic.</li>
                    <li>Làm việc có phương pháp, ham hiểu biết, có óc tò mò, quan sát tinh tế.</li>
                    <li>Nhạy cảm, phán đoán, ứng xử kịp thời, tự đặt ra yêu cầu cao và nghiêm khắc với chính mình.</li>
                    <li>Có tính quyết đoán, thất bại không nản.</li>
                    <li>Có khả năng tưởng tượng không gian và nhận biết tốt hình dạng vật thể.</li>
                    <li>Có năng lực vượt khó, thông minh, có kỹ năng sống thích ứng.</li>
                </ul>
                <h5>2. Môi trường làm việc tương ứng</h5>
                <p>Môi trường làm việc phù hợp với nhóm Nghiên cứu thường liên quan đến các lĩnh vực khoa học, công nghệ, giáo dục, bao gồm:</p>
                <ul>
                    <li>Công nghệ thông tin, công nghệ sinh học, công nghệ môi trường, giáo dục, văn hóa…</li>
                    <li>Nghề phù hợp điển hình: Nghiên cứu khoa học, nghiên cứu trong các lĩnh vực tự nhiên, xã hội, giáo dục, môi trường, bác sĩ, kỹ thuật viên y tế, kỹ thuật viên phòng thí nghiệm…</li>
                </ul>
                <p><strong>Chống chỉ định:</strong> Lao; Thiếu máu; Động kinh; Tim mạch; Tâm thần.</p>
                <h5>3. Các ngành nghề đào tạo</h5>
                <ul>
                    <li>Kỹ sư công nghệ phần mềm, nhân viên các phòng thí nghiệm.</li>
                    <li>Các nhà nghiên cứu trong các lĩnh vực: văn hóa, giáo dục, động vật học, thực vật học.</li>
                    <li>Công nghệ sinh học, môi trường, tâm lý học, lập trình viên, toán học, vật lý, hóa học.</li>
                    <li>Sử học, địa lý, văn học, chuyên viên nghiên cứu thị trường, giảng viên đại học.</li>
                </ul>
                <h5>4. Gợi ý chọn ngành học cho học sinh TTGDTX2</h5>
                <p>Học sinh TTGDTX2 thường có đặc điểm là học tập linh hoạt, nhiều em vừa học vừa làm hoặc có hoàn cảnh đặc biệt. Với kết quả Holland thuộc nhóm Nghiên cứu, các em có thể chọn các ngành học phù hợp với khả năng tư duy và phân tích, đồng thời dễ tiếp cận trong bối cảnh học tập tại TTGDTX. Dưới đây là các gợi ý cụ thể:</p>
                <ul>
                    <li><strong>Công nghệ thông tin:</strong> Phù hợp với học sinh thích tư duy logic và làm việc với máy tính. Các em có thể học các khóa lập trình cơ bản (như Python) tại Trung tâm Dạy nghề Thanh Khê hoặc các lớp tin học tại TTGDTX2.</li>
                    <li><strong>Kỹ thuật viên phòng thí nghiệm:</strong> Dành cho học sinh yêu thích nghiên cứu khoa học. Các trường trung cấp nghề ở Đà Nẵng (như Trung cấp Nghề Đà Nẵng) có các khóa học về kỹ thuật viên hóa học hoặc sinh học, phù hợp với học sinh TTGDTX2.</li>
                    <li><strong>Nghiên cứu thị trường:</strong> Phù hợp với học sinh thích phân tích dữ liệu và làm việc độc lập. Các em có thể học các khóa ngắn hạn về phân tích dữ liệu hoặc tham gia thực tập tại các công ty khảo sát ở Đà Nẵng.</li>
                    <li><strong>Giáo dục hoặc văn hóa:</strong> Dành cho học sinh yêu thích nghiên cứu xã hội. Các em có thể tham gia các lớp bổ trợ về lịch sử, địa lý tại TTGDTX2 để phát triển kỹ năng.</li>
                </ul>
                <p><strong>Hành động cụ thể:</strong></p>
                <ul>
                    <li>Tìm hiểu ngành học: Tham khảo thông tin về các khóa học tại các trung tâm dạy nghề hoặc trường trung cấp ở Đà Nẵng qua website hoặc đến trực tiếp văn phòng tuyển sinh.</li>
                    <li>Tham gia hoạt động thực tế: Đăng ký các dự án nghiên cứu nhỏ tại TTGDTX2 hoặc tham gia các cuộc thi khoa học để rèn luyện kỹ năng.</li>
                    <li>Kết nối với cựu học sinh: Tìm hiểu kinh nghiệm từ các anh chị cựu học sinh TTGDTX2 đã học các ngành nghiên cứu qua các nhóm mạng xã hội hoặc sự kiện của trường.</li>
                    <li>Thử sức với công việc bán thời gian: Làm các công việc như nhập liệu, phân tích dữ liệu đơn giản để trải nghiệm môi trường làm việc thực tế.</li>
                </ul>
                <p><strong>Lưu ý:</strong> Các em nên ưu tiên các chương trình học linh hoạt (học buổi tối, học online) hoặc các khóa ngắn hạn để phù hợp với lịch học tại TTGDTX2. Hãy bắt đầu với những bước nhỏ như tham gia một khóa học lập trình hoặc dự án nghiên cứu để khám phá sở thích và khả năng của mình!</p>
            `;
        }
        if (group === 'A') {
            resultText += `
                <h4>Nhóm Nghệ thuật (Người kiến tạo)</h4>
                <h5>1. Đặc điểm</h5>
                <p>Những người thuộc nhóm Nghệ thuật rất thích và có khả năng làm việc thiên về tính chất nghệ thuật như viết văn, bình thơ, vẽ, thiết kế mỹ thuật, đạo diễn, nghệ sĩ… Đây là dạng nghề đang phát triển mạnh theo nhu cầu xã hội. Cùng trong nhóm này là các nhà văn, các biên kịch, nghệ sĩ, ca sĩ, nhạc sĩ, họa sĩ… Khả năng cần có:</p>
                <ul>
                    <li>Sáng tạo, tự do, linh hoạt và thông minh.</li>
                    <li>Kiên trì, nhạy cảm, có tinh thần phục vụ tự nguyện.</li>
                    <li>Có tính tưởng tượng không gian và nhận biết tốt hình dạng vật thể.</li>
                    <li>Có khả năng sống thích ứng, diễn tả ngôn từ lịch sự, rõ ràng.</li>
                    <li>Hiểu biết về lịch sử, văn hóa, chính trị.</li>
                </ul>
                <h5>2. Môi trường làm việc tương ứng</h5>
                <p>Môi trường làm việc phù hợp với nhóm Nghệ thuật thường liên quan đến sáng tạo và biểu diễn, bao gồm:</p>
                <ul>
                    <li>Sáng tác trong các lĩnh vực văn hóa, nghệ thuật, kiến trúc, hội họa, thủ công mỹ nghệ.</li>
                    <li>Biểu diễn văn hóa, nghệ thuật, dẫn chương trình.</li>
                    <li>Nghề phù hợp điển hình: Sáng tác văn học, thơ ca, nghệ sĩ nhiếp ảnh, nghệ sĩ biểu diễn (nhạc, kịch, hát múa…), họa sĩ, nhạc sĩ, điêu khắc, thiết kế thời trang, thiết kế quảng cáo, giảng viên văn học…</li>
                </ul>
                <p><strong>Chống chỉ định:</strong> Bệnh lao, truyền nhiễm; Dị tật, nói ngọng, điếc.</p>
                <h5>3. Các ngành nghề đào tạo</h5>
                <ul>
                    <li>Sáng tác văn học, thơ ca, nghệ sĩ nhiếp ảnh.</li>
                    <li>Nghệ sĩ biểu diễn (nhạc, kịch, hát múa…), họa sĩ, nhạc sĩ, điêu khắc.</li>
                    <li>Thiết kế thời trang, thiết kế quảng cáo, giảng viên văn học.</li>
                </ul>
                <h5>4. Gợi ý chọn ngành học cho học sinh TTGDTX2</h5>
                <p>Học sinh TTGDTX2 thường có đặc điểm là học tập linh hoạt, nhiều em vừa học vừa làm hoặc có hoàn cảnh đặc biệt. Với kết quả Holland thuộc nhóm Nghệ thuật, các em có thể chọn các ngành học phù hợp với khả năng sáng tạo và biểu đạt, đồng thời dễ tiếp cận trong bối cảnh học tập tại TTGDTX. Dưới đây là các gợi ý cụ thể:</p>
                <ul>
                    <li><strong>Thiết kế đồ họa hoặc quảng cáo:</strong> Phù hợp với học sinh có khả năng sáng tạo và thích làm việc với hình ảnh. Các em có thể học các khóa thiết kế cơ bản (như Canva, Photoshop) tại Trung tâm Dạy nghề Thanh Khê hoặc các lớp trực tuyến miễn phí.</li>
                    <li><strong>Thủ công mỹ nghệ:</strong> Dành cho học sinh yêu thích làm đồ thủ công, như thêu, đan, hoặc điêu khắc. Các trung tâm văn hóa ở Đà Nẵng có các lớp học thêu hoặc làm gốm, phù hợp với học sinh TTGDTX2.</li>
                    <li><strong>Viết lách hoặc sáng tác:</strong> Phù hợp với học sinh có khả năng diễn đạt ngôn từ. Các em có thể tham gia các lớp bổ trợ văn học tại TTGDTX2 hoặc tự học viết lách qua các khóa trực tuyến.</li>
                    <li><strong>Dẫn chương trình hoặc biểu diễn:</strong> Dành cho học sinh có phong thái tự tin và thích biểu diễn. Các em có thể tham gia các lớp kỹ năng mềm hoặc các câu lạc bộ biểu diễn tại TTGDTX2.</li>
                </ul>
                <p><strong>Hành động cụ thể:</strong></p>
                <ul>
                    <li>Tìm hiểu ngành học: Tham khảo thông tin về các khóa học tại các trung tâm văn hóa hoặc trường trung cấp ở Đà Nẵng qua website hoặc đến trực tiếp văn phòng tuyển sinh.</li>
                    <li>Tham gia hoạt động thực tế: Đăng ký các lớp nghệ thuật tại TTGDTX2 hoặc tham gia các cuộc thi sáng tạo để rèn luyện kỹ năng.</li>
                    <li>Kết nối với cựu học sinh: Tìm hiểu kinh nghiệm từ các anh chị cựu học sinh TTGDTX2 đã học các ngành nghệ thuật qua các nhóm mạng xã hội hoặc sự kiện của trường.</li>
                    <li>Thử sức với công việc bán thời gian: Làm các công việc như thiết kế poster, viết nội dung, hoặc tham gia biểu diễn tại các sự kiện nhỏ để trải nghiệm môi trường làm việc thực tế.</li>
                </ul>
                <p><strong>Lưu ý:</strong> Các em nên ưu tiên các chương trình học linh hoạt (học buổi tối, học online) hoặc các khóa ngắn hạn để phù hợp với lịch học tại TTGDTX2. Hãy bắt đầu với những bước nhỏ như tham gia một khóa học thiết kế hoặc một buổi biểu diễn để khám phá sở thích và khả năng của mình!</p>
            `;
        }
        if (group === 'S') {
            resultText += `
                <h4>Nhóm Xã hội (Người giúp đỡ)</h4>
                <h5>1. Đặc điểm</h5>
                <p>Những người thuộc nhóm Xã hội có sở thích và khả năng làm việc, giao tiếp người với người, thích đi đây, đi đó. Trong nhóm này có nghề giáo viên, tư vấn viên, bác sĩ, luật sư… Khả năng cần có:</p>
                <ul>
                    <li>Quảng giao, linh hoạt, có khả năng tổng kết, quy nạp, diễn dịch.</li>
                    <li>Biết lắng nghe, lắng nghe tích cực, có phản hồi, sáng tạo, thông minh.</li>
                    <li>Tuyệt đối tôn trọng ý kiến của thân chủ, có năng lực chú ý tốt.</li>
                    <li>Kiên trì, nhạy cảm, lịch thiệp, thần kinh vững mạnh, tự kiềm chế tốt.</li>
                    <li>Tôn trọng mọi người, sức khỏe tốt, bền bỉ, có tính sáng tạo, tinh thần phục vụ tự nguyện.</li>
                </ul>
                <h5>2. Môi trường làm việc tương ứng</h5>
                <p>Môi trường làm việc phù hợp với nhóm Xã hội thường mang tính xã hội cao, bao gồm:</p>
                <ul>
                    <li>Thường xuyên giao tiếp với người khác hoặc có nhiều cơ hội giúp đỡ, huấn luyện và chỉ dẫn người khác.</li>
                    <li>Nghề phù hợp điển hình: Dạy học, y khoa, dược khoa, luật sư, tư vấn tâm lý, hướng dẫn viên du lịch…</li>
                </ul>
                <p><strong>Chống chỉ định:</strong> Lao; Thiếu máu; Tâm thần không ổn định; Bệnh truyền nhiễm.</p>
                <h5>3. Các ngành nghề đào tạo</h5>
                <ul>
                    <li>Giáo viên các cấp, tư vấn viên, bác sĩ, dược sĩ, y tá, dược tá.</li>
                    <li>Nhân viên các công ty du lịch, hướng dẫn viên du lịch, luật sư, huấn luyện viên.</li>
                    <li>Tư vấn hướng nghiệp, dịch vụ khách hàng, cán bộ xã hội, cán bộ hội phụ nữ, nhân viên khách sạn/Khu nghỉ dưỡng.</li>
                </ul>
                <h5>4. Gợi ý chọn ngành học cho học sinh TTGDTX2</h5>
                <p>Học sinh TTGDTX2 thường có đặc điểm là học tập linh hoạt, nhiều em vừa học vừa làm hoặc có hoàn cảnh đặc biệt. Với kết quả Holland thuộc nhóm Xã hội, các em có thể chọn các ngành học phù hợp với khả năng giao tiếp và giúp đỡ, đồng thời dễ tiếp cận trong bối cảnh học tập tại TTGDTX. Dưới đây là các gợi ý cụ thể:</p>
                <ul>
                    <li><strong>Hướng dẫn viên du lịch:</strong> Phù hợp với học sinh thích giao tiếp và đi đây đi đó. Các em có thể học các khóa ngắn hạn về du lịch tại Trung tâm Dạy nghề Du lịch Đà Nẵng, với lịch học linh hoạt.</li>
                    <li><strong>Tư vấn hướng nghiệp:</strong> Dành cho học sinh yêu thích hỗ trợ người khác. Các em có thể tham gia các lớp kỹ năng mềm hoặc tư vấn tại TTGDTX2 để phát triển kỹ năng lắng nghe và giao tiếp.</li>
                    <li><strong>Nhân viên dịch vụ khách hàng:</strong> Phù hợp với học sinh có phong thái lịch thiệp. Các trung tâm dạy nghề ở Đà Nẵng có các khóa học về lễ tân hoặc dịch vụ khách hàng, rất phù hợp với học sinh TTGDTX2.</li>
                    <li><strong>Cán bộ xã hội:</strong> Dành cho học sinh muốn làm việc cộng đồng. Các em có thể tham gia các hoạt động tình nguyện tại TTGDTX2 hoặc học các khóa ngắn hạn về công tác xã hội.</li>
                </ul>
                <p><strong>Hành động cụ thể:</strong></p>
                <ul>
                    <li>Tìm hiểu ngành học: Tham khảo thông tin về các khóa học tại các trung tâm dạy nghề hoặc trường trung cấp ở Đà Nẵng qua website hoặc đến trực tiếp văn phòng tuyển sinh.</li>
                    <li>Tham gia hoạt động thực tế: Đăng ký các hoạt động tình nguyện hoặc các lớp kỹ năng mềm tại TTGDTX2 để rèn luyện khả năng giao tiếp.</li>
                    <li>Kết nối với cựu học sinh: Tìm hiểu kinh nghiệm từ các anh chị cựu học sinh TTGDTX2 đã học các ngành xã hội qua các nhóm mạng xã hội hoặc sự kiện của trường.</li>
                    <li>Thử sức với công việc bán thời gian: Làm các công việc như lễ tân, hỗ trợ khách hàng, hoặc tổ chức sự kiện nhỏ để trải nghiệm môi trường làm việc thực tế.</li>
                </ul>
                <p><strong>Lưu ý:</strong> Các em nên ưu tiên các chương trình học linh hoạt (học buổi tối, học online) hoặc các khóa ngắn hạn để phù hợp với lịch học tại TTGDTX2. Hãy bắt đầu với những bước nhỏ như tham gia một khóa học giao tiếp hoặc một hoạt động tình nguyện để khám phá sở thích và khả năng của mình!</p>
            `;
        }
        if (group === 'E') {
            resultText += `
                <h4>Nhóm Quản lý (Người thuyết phục)</h4>
                <h5>1. Đặc điểm</h5>
                <p>Những người thuộc nhóm Quản lý có sở thích và khả năng làm việc thiên về lãnh đạo, ra lệnh và quản lý một nhóm hoặc tập thể lớn. Các nghề thuộc nhóm này thường liên quan đến quản lý như công an, sĩ quan, quản trị kinh doanh, kỹ thuật công nghệ, quản lý chuyên nghiệp… Khả năng cần có:</p>
                <ul>
                    <li>Tinh thần trách nhiệm, uy quyền nhưng tránh độc đoán.</li>
                    <li>Trí tuệ sắc bén, tư duy lãnh đạo theo hướng hiện đại.</li>
                    <li>Tính cách cương nghị, phong thái tự tin từ dáng vẻ đến lời nói.</li>
                    <li>Kỹ năng sống tốt: Hài hòa, thích nghi, sáng suốt, bình tĩnh, có trí nhớ tốt và khả năng tập trung bền vững.</li>
                </ul>
                <h5>2. Môi trường làm việc tương ứng</h5>
                <p>Môi trường làm việc phù hợp với nhóm Quản lý thường mang tính chất lãnh đạo, điều hành và ra quyết định, bao gồm các chức năng như:</p>
                <ul>
                    <li>Điều hành hoạt động chung.</li>
                    <li>Chủ trì sản xuất hoặc dự án.</li>
                    <li>Điều phối thông tin, xây dựng chiến lược giao tiếp.</li>
                    <li>Giám sát tiến độ, hỗ trợ đội nhóm.</li>
                    <li>Tạo môi trường hòa hợp và thúc đẩy sự hội nhập.</li>
                    <li>Nghề điển hình: Nhà lãnh đạo, chủ doanh nghiệp, giám đốc điều hành, hiệu trưởng, luật sư…</li>
                </ul>
                <h5>3. Các ngành nghề đào tạo</h5>
                <ul>
                    <li>Công an, sĩ quan quân đội.</li>
                    <li>Quản trị kinh doanh, kỹ thuật công nghệ.</li>
                    <li>Chủ doanh nghiệp, chuyên viên quan hệ công chúng (PR).</li>
                    <li>Quản lý khách sạn, bếp trưởng khách sạn cao cấp.</li>
                    <li>Quản lý giáo dục các cấp.</li>
                </ul>
                <h5>4. Gợi ý chọn ngành học cho học sinh TTGDTX2</h5>
                <p>Học sinh TTGDTX2 thường có đặc điểm là học tập linh hoạt, nhiều em vừa học vừa làm hoặc có hoàn cảnh đặc biệt. Với kết quả Holland thuộc nhóm Quản lý, các em có thể chọn các ngành học phù hợp với khả năng lãnh đạo và điều hành, đồng thời dễ tiếp cận trong bối cảnh học tập tại TTGDTX. Dưới đây là các gợi ý cụ thể:</p>
                <ul>
                    <li><strong>Quản trị kinh doanh:</strong> Phù hợp với học sinh có khả năng tổ chức, lập kế hoạch và giao tiếp tốt. Ngành này có thể học tại các trường trung cấp nghề hoặc cao đẳng ở Đà Nẵng như Cao đẳng Kinh tế - Kế hoạch Đà Nẵng. Các em có thể bắt đầu với các khóa ngắn hạn về quản lý doanh nghiệp nhỏ hoặc kỹ năng bán hàng để tích lũy kinh nghiệm.</li>
                    <li><strong>Kỹ thuật công nghệ:</strong> Dành cho học sinh yêu thích lãnh đạo trong môi trường kỹ thuật, như quản lý dây chuyền sản xuất. Các trường trung cấp nghề (ví dụ: Trung cấp Nghề Đà Nẵng) có các khóa học về công nghệ ô tô, điện công nghiệp, phù hợp với học sinh TTGDTX muốn vừa học vừa làm.</li>
                    <li><strong>Quản lý khách sạn hoặc du lịch:</strong> Ngành này cần kỹ năng quản lý nhóm và giao tiếp, rất phù hợp với học sinh có phong thái tự tin. Các em có thể tham gia các khóa học ngắn hạn về lễ tân, quản lý nhà hàng tại các trung tâm đào tạo nghề ở Đà Nẵng, như Trung tâm Dạy nghề Du lịch Đà Nẵng.</li>
                    <li><strong>Chuyên viên quan hệ công chúng (PR):</strong> Dành cho học sinh có kỹ năng giao tiếp và sáng tạo. Các em có thể học các khóa truyền thông cơ bản hoặc tham gia các chương trình thực tập tại các công ty sự kiện ở Đà Nẵng để phát triển kỹ năng.</li>
                </ul>
                <p><strong>Hành động cụ thể:</strong></p>
                <ul>
                    <li>Tìm hiểu ngành học: Tham khảo thông tin về các khóa học tại các trường trung cấp, cao đẳng hoặc trung tâm dạy nghề ở Đà Nẵng qua website hoặc đến trực tiếp văn phòng tuyển sinh.</li>
                    <li>Tham gia hoạt động thực tế: Đăng ký các câu lạc bộ kỹ năng mềm, đội nhóm tại TTGDTX2 hoặc các cuộc thi khởi nghiệp, quản lý dự án để rèn luyện khả năng lãnh đạo.</li>
                    <li>Kết nối với cựu học sinh: Tìm hiểu kinh nghiệm từ các anh chị cựu học sinh TTGDTX2 đã học các ngành quản lý qua các nhóm mạng xã hội hoặc sự kiện của trường.</li>
                    <li>Thử sức với công việc bán thời gian: Làm các công việc như tổ chức sự kiện, quản lý nhóm nhỏ để trải nghiệm môi trường lãnh đạo thực tế.</li>
                </ul>
                <p><strong>Lưu ý:</strong> Các em nên ưu tiên các chương trình học linh hoạt (học buổi tối, học online) hoặc các khóa ngắn hạn để phù hợp với lịch học tại TTGDTX2. Hãy bắt đầu với những bước nhỏ như tham gia một khóa học ngắn hạn hoặc một cuộc thi để khám phá sở thích và khả năng của mình!</p>
            `;
        }
        if (group === 'C') {
            resultText += `
                <h4>Nhóm Nghiệp vụ (Người sắp xếp)</h4>
                <h5>1. Đặc điểm</h5>
                <p>Những người thuộc nhóm Nghiệp vụ có sở thích và khả năng làm việc ở văn phòng, làm các công việc sổ sách như văn thư, hành chính, tài vụ, bưu điện, tiếp tân… Nhóm nghề này đòi hỏi phải có hoạt động giao tiếp với nhiều người, nhiều công việc, có nghiệp vụ, được huấn luyện từ trung cấp đến đại học trong doanh nghiệp, trong hoạt động phục vụ công cộng… Khả năng cần có:</p>
                <ul>
                    <li>Nền nếp, thận trọng, diễn tả ngôn từ lịch sự, hấp dẫn, rõ ràng.</li>
                    <li>Thận trọng nhưng nhanh nhẹn, ứng xử kịp thời, siêng năng.</li>
                    <li>Hiểu biết về lịch sử, chính trị, văn hóa, nghệ thuật, hiểu rõ người đối thoại.</li>
                    <li>Làm việc ngăn nắp, điều độ, không nhầm lẫn, có trí nhớ tốt.</li>
                    <li>Tự tin, biết điều tiết, kiềm chế, có khả năng hoạt động độc lập.</li>
                    <li>Giỏi ngoại ngữ và ứng xử, xử lý thông tin tốt.</li>
                </ul>
                <h5>2. Môi trường làm việc tương ứng</h5>
                <p>Môi trường làm việc phù hợp với nhóm Nghiệp vụ thường mang tính chất giao tiếp với nhiều người, nhiều công việc, bao gồm:</p>
                <ul>
                    <li>Đòi hỏi có tính nghiệp vụ như lưu trữ văn thư, kế toán, tài chính, tín dụng…</li>
                    <li>Nghề phù hợp điển hình: Nhân viên ngân hàng, kế toán, thư ký văn phòng, biên tập viên, thủ thư…</li>
                </ul>
                <p><strong>Chống chỉ định:</strong> Bệnh lao, bệnh truyền nhiễm; Dị tật, nói ngọng, điếc.</p>
                <h5>3. Các ngành nghề đào tạo</h5>
                <ul>
                    <li>Thư ký, nhân viên lưu trữ, thư viện, nhân viên văn phòng.</li>
                    <li>Chuyên viên thuế, thủ quỹ, kế toán viên, lễ tân, bưu điện.</li>
                    <li>Nhân viên ngân hàng.</li>
                </ul>
                <h5>4. Gợi ý chọn ngành học cho học sinh TTGDTX2</h5>
                <p>Học sinh TTGDTX2 thường có đặc điểm là học tập linh hoạt, nhiều em vừa học vừa làm hoặc có hoàn cảnh đặc biệt. Với kết quả Holland thuộc nhóm Nghiệp vụ, các em có thể chọn các ngành học phù hợp với khả năng tổ chức và làm việc văn phòng, đồng thời dễ tiếp cận trong bối cảnh học tập tại TTGDTX. Dưới đây là các gợi ý cụ thể:</p>
                <ul>
                    <li><strong>Kế toán cơ bản:</strong> Phù hợp với học sinh có khả năng làm việc với số liệu và tổ chức. Các em có thể học các khóa kế toán sơ cấp tại Trung tâm Dạy nghề Thanh Khê hoặc các lớp kế toán tại TTGDTX2.</li>
                    <li><strong>Nhân viên văn phòng:</strong> Dành cho học sinh yêu thích làm việc ngăn nắp. Các trung tâm dạy nghề ở Đà Nẵng có các khóa học tin học văn phòng (Excel, Word), rất phù hợp với học sinh TTGDTX2.</li>
                    <li><strong>Lễ tân hoặc bưu điện:</strong> Phù hợp với học sinh có khả năng giao tiếp và ứng xử. Các em có thể tham gia các khóa học lễ tân tại Trung tâm Dạy nghề Du lịch Đà Nẵng hoặc thực tập tại các công ty bưu điện nhỏ.</li>
                    <li><strong>Thư ký hoặc lưu trữ:</strong> Dành cho học sinh thích làm việc với giấy tờ. Các em có thể học các lớp hành chính cơ bản tại TTGDTX2 để phát triển kỹ năng.</li>
                </ul>
                <p><strong>Hành động cụ thể:</strong></p>
                <ul>
                    <li>Tìm hiểu ngành học: Tham khảo thông tin về các khóa học tại các trung tâm dạy nghề hoặc trường trung cấp ở Đà Nẵng qua website hoặc đến trực tiếp văn phòng tuyển sinh.</li>
                    <li>Tham gia hoạt động thực tế: Đăng ký các lớp tin học hoặc hành chính tại TTGDTX2 để rèn luyện kỹ năng tổ chức.</li>
                    <li>Kết nối với cựu học sinh: Tìm hiểu kinh nghiệm từ các anh chị cựu học sinh TTGDTX2 đã học các ngành nghiệp vụ qua các nhóm mạng xã hội hoặc sự kiện của trường.</li>
                    <li>Thử sức với công việc bán thời gian: Làm các công việc như nhập liệu, lễ tân, hoặc hỗ trợ văn phòng để trải nghiệm môi trường làm việc thực tế.</li>
                </ul>
                <p><strong>Lưu ý:</strong> Các em nên ưu tiên các chương trình học linh hoạt (học buổi tối, học online) hoặc các khóa ngắn hạn để phù hợp với lịch học tại TTGDTX2. Hãy bắt đầu với những bước nhỏ như tham gia một khóa học tin học hoặc thực tập tại văn phòng để khám phá sở thích và khả năng của mình!</p>
            `;
        }
    });

    // Hiển thị kết quả
    document.getElementById('test-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    document.getElementById('result-content').innerHTML = resultText;
});
