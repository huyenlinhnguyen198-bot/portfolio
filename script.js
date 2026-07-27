/* =========================================================
   Nguyen Huyen Linh — Concert & Vinyl Record Portfolio
   ========================================================= */
(function () {
  "use strict";

  /* -------------------- LANGUAGE: EN / VI -------------------- */
  const LANG_KEY = "hlinh-lang";
  let currentLang = "en";

  /* Every piece of static copy on the page, in both languages.
     Dynamic data (project cards, tour stops, skills) is translated
     separately, right alongside its source data below. */
  const I18N = {
    en: {
      "meta.title": "Nguyen Huyen Linh — Business Analyst | Live at the Console",
      "gate.skip": "Skip intro →",
      "gate.eyebrow": "Soundtrack for this portfolio",
      "gate.welcome": "Welcome to Huyen Linh's Music Concert",
      "gate.cta": "Discover the Concert",
      "nav.overture": "Overture",
      "nav.tracklist": "Tracklist",
      "nav.backstage": "Backstage",
      "nav.tour": "Tour Dates",
      "nav.encore": "Encore",
      "nav.backAria": "Back to the La Bàn intro",
      "nav.menuAria": "Open menu",
      "hero.eyebrow": "Now Staging",
      "hero.role": "Business&nbsp;Analyst <span class=\"dot\">·</span> Ha&nbsp;Noi, Vietnam",
      "hero.tagline": "A 3rd-year International Economics student at Foreign Trade University, composing seamlessly functional software as a Business Analyst. Acting as a \"Product Director\" bridging business needs and tech solutions — BPMN, BRD/SRS documentation, API testing. Seeking a BA Intern/Fresher role to help orchestrate high-impact digital products.",
      "hero.playAlbum": "Play Album",
      "hero.viewTracklist": "View Tracklist",
      "hero.meta": "Side&nbsp;A · Side&nbsp;B — 6 tracks · Est. 2023 · Foreign Trade University",
      "hero.scrollAria": "Scroll to tracklist",
      "tracklist.eyebrow": "Track 02",
      "tracklist.h2": "The Tracklist",
      "tracklist.sub": "Case work and real-world cuts, played track by track. Tap any track to open the liner notes.",
      "tracklist.stageDefault": "Hover or tap a track",
      "tracklist.sideA": "Side A <span>— Case Work</span>",
      "tracklist.sideB": "Side B <span>— Real-World Cuts</span>",
      "backstage.eyebrow": "Track 03",
      "backstage.h2": "Backstage Pass",
      "backstage.sub": "All-access details on the person behind the specs.",
      "backstage.genre": "Genre: Business Analysis",
      "backstage.factStatus": "Status",
      "backstage.factStatusValue": "BA Intern / Fresher",
      "backstage.factResidency": "Next residency",
      "backstage.factResidencyValue": "Senior BA (3–4 yr tour)",
      "backstage.factVenue": "Home venue",
      "backstage.factVenueValue": "Ha Noi, Vietnam",
      "backstage.factLabel": "Label",
      "backstage.factLabelValue": "Foreign Trade University",
      "backstage.bio": "3rd-year International Economics student at Foreign Trade University (GPA 3.27/4.0, IELTS 6.5), acting as a \"Product Director\" bridging business needs and tech solutions. Trained hands-on in BPMN, BRD/FRD/SRS, user flows, and API testing — booking her first full-time gig as a BA Intern/Fresher.",
      "backstage.qr": "Scan for<br>LinkedIn",
      "backstage.lineupBA": "Line-up <span>— Business Analysis</span>",
      "backstage.lineupTools": "Equipment <span>— Tools &amp; Data</span>",
      "backstage.lineupSoft": "Crew <span>— Interpersonal</span>",
      "tour.eyebrow": "Track 04",
      "tour.h2": "World Tour Dates",
      "tour.sub": "Education, training and work — mapped like a tour poster.",
      "encore.eyebrow": "Final Track",
      "encore.h2": "Want an Encore?",
      "encore.sub": "Let's put your project on the set list.",
      "encore.sheetTitle": "Song Request Sheet",
      "encore.labelName": "Your name",
      "encore.labelEmail": "Your email",
      "encore.labelMsg": "Request (what do you need help with?)",
      "encore.send": "Send Request",
      "encore.note": "Opens your email app — nothing is stored or sent anywhere else.",
      "encore.stubEmail": "Email",
      "encore.stubPhone": "Phone",
      "encore.stubLinkedin": "LinkedIn",
      "encore.stubVenue": "Venue",
      "encore.venueValue": "Ha Noi, Vietnam",
      "footer.thanks": "🎙 Thanks for coming to the show. No refunds, only feedback.",
      "footer.fineprint": "Designed &amp; coded independently — powered by vinyl and coffee. © {year} Nguyen Huyen Linh.",
      "modal.close": "Close booklet",
      "modal.liner": "Liner Notes",
      "nowplaying.mute": "Mute music",
      "nowplaying.unmute": "Unmute music",
      "nowplaying.defaultLabel": "🎧 Now Playing — Bức Tranh Và Cánh Chim",
      "nowplaying.letmegoLabel": "🎧 Now Playing — Let Me Go (KIMLONG)",
      "lang.toEn": "Switch site language to English",
      "lang.toVi": "Chuyển ngôn ngữ trang sang tiếng Việt"
    },
    vi: {
      "meta.title": "Nguyen Huyen Linh — Business Analyst | Trực Tiếp Tại Sân Khấu",
      "gate.skip": "Bỏ qua phần giới thiệu →",
      "gate.eyebrow": "Nhạc nền của portfolio này",
      "gate.welcome": "Chào Mừng Đến Với Đêm Nhạc Của Huyền Linh",
      "gate.cta": "Khám Phá Concert Này",
      "nav.overture": "Mở Màn",
      "nav.tracklist": "Tracklist",
      "nav.backstage": "Hậu Trường",
      "nav.tour": "Lịch Lưu Diễn",
      "nav.encore": "Encore",
      "nav.backAria": "Quay lại phần giới thiệu La Bàn",
      "nav.menuAria": "Mở menu",
      "hero.eyebrow": "Đang Trình Diễn",
      "hero.role": "Business&nbsp;Analyst <span class=\"dot\">·</span> Hà&nbsp;Nội, Việt Nam",
      "hero.tagline": "Sinh viên năm 3 ngành Kinh tế Quốc tế tại Đại học Ngoại thương, xây dựng những sản phẩm phần mềm vận hành trơn tru trong vai trò Business Analyst. Đóng vai \"Product Director\" kết nối nhu cầu kinh doanh với giải pháp công nghệ — thành thạo BPMN, tài liệu BRD/SRS, kiểm thử API. Đang tìm kiếm vị trí BA Intern/Fresher để cùng kiến tạo những sản phẩm số có tầm ảnh hưởng.",
      "hero.playAlbum": "Phát Album",
      "hero.viewTracklist": "Xem Tracklist",
      "hero.meta": "Side&nbsp;A · Side&nbsp;B — 6 track · Thành lập 2023 · Đại học Ngoại thương",
      "hero.scrollAria": "Cuộn xuống phần tracklist",
      "tracklist.eyebrow": "Track 02",
      "tracklist.h2": "Tracklist",
      "tracklist.sub": "Các case study và dự án thực tế, trình bày lần lượt như từng track nhạc. Chạm vào một track để xem chi tiết.",
      "tracklist.stageDefault": "Di chuột hoặc chạm vào một track",
      "tracklist.sideA": "Side A <span>— Case Study</span>",
      "tracklist.sideB": "Side B <span>— Dự Án Thực Tế</span>",
      "backstage.eyebrow": "Track 03",
      "backstage.h2": "Vé Hậu Trường",
      "backstage.sub": "Toàn bộ thông tin về người đứng sau những bản đặc tả này.",
      "backstage.genre": "Thể loại: Business Analysis",
      "backstage.factStatus": "Trạng thái",
      "backstage.factStatusValue": "BA Intern / Fresher",
      "backstage.factResidency": "Chặng lưu diễn tiếp theo",
      "backstage.factResidencyValue": "Senior BA (tour 3–4 năm)",
      "backstage.factVenue": "Sân nhà",
      "backstage.factVenueValue": "Hà Nội, Việt Nam",
      "backstage.factLabel": "Hãng đĩa",
      "backstage.factLabelValue": "Đại học Ngoại thương",
      "backstage.bio": "Sinh viên năm 3 ngành Kinh tế Quốc tế tại Đại học Ngoại thương (GPA 3.27/4.0, IELTS 6.5), đóng vai \"Product Director\" kết nối nhu cầu kinh doanh với giải pháp công nghệ. Được rèn luyện thực chiến với BPMN, BRD/FRD/SRS, user flow và kiểm thử API — sẵn sàng cho công việc toàn thời gian đầu tiên ở vị trí BA Intern/Fresher.",
      "backstage.qr": "Quét để xem<br>LinkedIn",
      "backstage.lineupBA": "Đội Hình <span>— Business Analysis</span>",
      "backstage.lineupTools": "Trang Thiết Bị <span>— Công cụ &amp; Dữ liệu</span>",
      "backstage.lineupSoft": "Ê-kíp <span>— Kỹ Năng Mềm</span>",
      "tour.eyebrow": "Track 04",
      "tour.h2": "Lịch Lưu Diễn",
      "tour.sub": "Học vấn, đào tạo và công việc — trình bày như một poster lịch lưu diễn.",
      "encore.eyebrow": "Track Cuối",
      "encore.h2": "Muốn Nghe Thêm Encore?",
      "encore.sub": "Cùng đưa dự án của bạn vào set list nhé.",
      "encore.sheetTitle": "Phiếu Yêu Cầu Bài Hát",
      "encore.labelName": "Tên của bạn",
      "encore.labelEmail": "Email của bạn",
      "encore.labelMsg": "Yêu cầu (bạn cần hỗ trợ gì?)",
      "encore.send": "Gửi Yêu Cầu",
      "encore.note": "Sẽ mở ứng dụng email của bạn — không lưu trữ hay gửi đi bất kỳ đâu khác.",
      "encore.stubEmail": "Email",
      "encore.stubPhone": "Điện thoại",
      "encore.stubLinkedin": "LinkedIn",
      "encore.stubVenue": "Địa điểm",
      "encore.venueValue": "Hà Nội, Việt Nam",
      "footer.thanks": "🎙 Cảm ơn bạn đã đến xem show. Không hoàn vé, chỉ nhận góp ý.",
      "footer.fineprint": "Tự thiết kế &amp; tự code — chạy bằng đĩa than và cà phê. © {year} Nguyen Huyen Linh.",
      "modal.close": "Đóng booklet",
      "modal.liner": "Ghi Chú Chi Tiết",
      "nowplaying.mute": "Tắt tiếng nhạc",
      "nowplaying.unmute": "Bật tiếng nhạc",
      "nowplaying.defaultLabel": "🎧 Đang Phát — Bức Tranh Và Cánh Chim",
      "nowplaying.letmegoLabel": "🎧 Đang Phát — Let Me Go (KIMLONG)",
      "lang.toEn": "Switch site language to English",
      "lang.toVi": "Chuyển ngôn ngữ trang sang tiếng Việt"
    }
  };

  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    if (dict[key] !== undefined) return dict[key];
    return I18N.en[key] !== undefined ? I18N.en[key] : key;
  }

  /* -------------------- DATA (from CV) — bilingual -------------------- */
  const sideA = [
    {
      track: "01",
      date: "Jun 2026",
      en: {
        title: "Forgot Password Flow",
        subtitle: "Mobile Banking Application · BA Mock Project",
        tags: ["User Flow", "Wireframe", "Validation"],
        details: [
          "Designed the end-to-end user flow and wireframes for the Forgot Password journey.",
          "Defined business rules, validation logic and error-handling states for edge cases.",
          "Mapped screen navigation so engineering had an unambiguous build target."
        ]
      },
      vi: {
        title: "Luồng Quên Mật Khẩu",
        subtitle: "Ứng dụng Ngân hàng Di động · Dự án BA Mô phỏng",
        tags: ["User Flow", "Wireframe", "Validation"],
        details: [
          "Thiết kế luồng người dùng (user flow) và wireframe toàn trình cho hành trình Quên mật khẩu.",
          "Xác định business rule, logic validate và các trạng thái xử lý lỗi cho từng edge case.",
          "Vẽ sơ đồ điều hướng màn hình để đội kỹ thuật có mục tiêu xây dựng rõ ràng, không mập mờ."
        ]
      }
    },
    {
      track: "02",
      date: "Jun 2026",
      en: {
        title: "Customer Appointment Booking",
        subtitle: "Mobile Banking Application · BA Mock Project",
        tags: ["BPMN", "Screen Spec", "Error Handling"],
        details: [
          "Designed end-to-end flows and wireframes for the appointment booking journey.",
          "Modeled the underlying system process using BPMN before handoff.",
          "Covered business rules, validations and error handling across every screen."
        ]
      },
      vi: {
        title: "Đặt Lịch Hẹn Khách Hàng",
        subtitle: "Ứng dụng Ngân hàng Di động · Dự án BA Mô phỏng",
        tags: ["BPMN", "Screen Spec", "Error Handling"],
        details: [
          "Thiết kế luồng và wireframe toàn trình cho hành trình đặt lịch hẹn.",
          "Mô hình hóa quy trình hệ thống bằng BPMN trước khi bàn giao.",
          "Bao quát business rule, validate và xử lý lỗi trên từng màn hình."
        ]
      }
    },
    {
      track: "03",
      date: "Jun 2026",
      en: {
        title: "BRD · FRD · SRS Playbook",
        subtitle: "Requirements &amp; API Documentation",
        tags: ["Requirements Doc", "API Logic", "Postman", "DBeaver"],
        details: [
          "Documented functional requirements, API logic and integration points across BRD, FRD and SRS.",
          "Validated APIs using Postman to confirm behaviour matched the written spec.",
          "Reviewed database structures in DBeaver to sanity-check data models against requirements."
        ]
      },
      vi: {
        title: "Bộ Tài Liệu BRD · FRD · SRS",
        subtitle: "Tài liệu Yêu cầu &amp; API",
        tags: ["Requirements Doc", "API Logic", "Postman", "DBeaver"],
        details: [
          "Xây dựng tài liệu functional requirement, logic API và các điểm tích hợp trong BRD, FRD và SRS.",
          "Kiểm thử API bằng Postman để đảm bảo hành vi hệ thống khớp với spec đã viết.",
          "Rà soát cấu trúc database trong DBeaver để đối chiếu data model với yêu cầu nghiệp vụ."
        ]
      }
    }
  ];

  const sideB = [
    {
      track: "04",
      date: "Aug 2025 – Aug 2026",
      en: {
        title: "130K Conversations",
        subtitle: "Everred Group (“Godmother”) · Customer Service Staff",
        tags: ["TikTok", "Shopee", "Conversion"],
        details: [
          "Managed 130,000+ quarterly customer conversations across TikTok and Shopee.",
          "Supported conversion rates of 37.45% and 24.11% respectively across the two channels.",
          "Contributed to approximately VND 13.8 billion in quarterly chat-assisted revenue.",
          "Maintained an average customer satisfaction rate of 80.41% throughout."
        ]
      },
      vi: {
        title: "130K Cuộc Trò Chuyện",
        subtitle: "Everred Group (“Godmother”) · Nhân viên Chăm sóc Khách hàng",
        tags: ["TikTok", "Shopee", "Conversion"],
        details: [
          "Xử lý hơn 130.000 cuộc trò chuyện với khách hàng mỗi quý trên TikTok và Shopee.",
          "Đóng góp vào tỷ lệ chuyển đổi 37,45% và 24,11% tương ứng trên hai kênh.",
          "Góp phần tạo ra khoảng 13,8 tỷ đồng doanh thu hỗ trợ qua chat mỗi quý.",
          "Duy trì tỷ lệ hài lòng khách hàng trung bình 80,41% xuyên suốt."
        ]
      }
    },
    {
      track: "05",
      date: "Sep 2025",
      en: {
        title: "Chart-Topping Research",
        subtitle: "Economic Research Champion 2025 · YES Scientific Research Club",
        tags: ["Research", "Top 20 / 120"],
        details: [
          "Placed in the Top 20 out of 120 competing teams nationwide.",
          "Organized by the YES Scientific Research Club, National Economics University."
        ]
      },
      vi: {
        title: "Nghiên Cứu Đạt Giải Cao",
        subtitle: "Quán quân Nghiên cứu Kinh tế 2025 · CLB Nghiên cứu Khoa học YES",
        tags: ["Nghiên cứu", "Top 20 / 120"],
        details: [
          "Lọt Top 20 trong số 120 đội thi trên toàn quốc.",
          "Do CLB Nghiên cứu Khoa học YES, Đại học Kinh tế Quốc dân tổ chức."
        ]
      }
    },
    {
      track: "06",
      date: "Jul 2026",
      en: {
        title: "Published Track",
        subtitle: "Journal of Economics and Business Administration",
        tags: ["Publication", "Consumer Behaviour"],
        details: [
          "“Factors Affecting Students’ Willingness to Pay for Eco-friendly Tote Bags at Foreign Trade University.”",
          "Accepted for publication in the Journal of Economics and Business Administration."
        ]
      },
      vi: {
        title: "Bài Nghiên Cứu Được Xuất Bản",
        subtitle: "Tạp chí Kinh tế và Quản trị Kinh doanh",
        tags: ["Xuất bản", "Hành vi Người tiêu dùng"],
        details: [
          "“Các yếu tố ảnh hưởng đến sự sẵn lòng chi trả của sinh viên cho túi tote thân thiện môi trường tại Đại học Ngoại thương.”",
          "Được chấp nhận đăng trên Tạp chí Kinh tế và Quản trị Kinh doanh."
        ]
      }
    }
  ];

  const skillsBA = [
    { en: "Requirements Elicitation & Analysis", vi: "Thu thập & Phân tích Yêu cầu" },
    { en: "BPMN", vi: "BPMN" },
    { en: "BRD / FRD / SRS", vi: "BRD / FRD / SRS" },
    { en: "User Flow Design", vi: "Thiết kế User Flow" },
    { en: "Screen Specification", vi: "Đặc tả Màn hình" },
    { en: "API Documentation", vi: "Tài liệu hóa API" }
  ];
  const skillsTools = [
    { en: "Figma", vi: "Figma" },
    { en: "Draw.io", vi: "Draw.io" },
    { en: "Postman", vi: "Postman" },
    { en: "DBeaver", vi: "DBeaver" },
    { en: "Excel", vi: "Excel" },
    { en: "Basic Python", vi: "Python cơ bản" },
    { en: "Data Analysis", vi: "Phân tích Dữ liệu" }
  ];
  const skillsSoft = [
    { en: "Stakeholder Communication", vi: "Giao tiếp với Stakeholder" },
    { en: "Analytical Thinking", vi: "Tư duy Phân tích" },
    { en: "Cross-functional Collaboration", vi: "Phối hợp Liên phòng ban" },
    { en: "Presentation", vi: "Thuyết trình" },
    { en: "Problem Solving", vi: "Giải quyết Vấn đề" }
  ];

  const tourStops = [
    { date: "2021 – 2023",
      en: { venue: "Live at CLEEN Project — Season 4", role: "Head of Organizing Committee · Led a recycling initiative turning plastic waste into study desks for underprivileged schools in Sapa; ran a 15,000-follower community page and coordinated fundraising, production and distribution." },
      vi: { venue: "Biểu diễn tại CLEEN Project — Mùa 4", role: "Trưởng Ban Tổ chức · Dẫn dắt dự án tái chế rác thải nhựa thành bàn học cho các trường vùng khó khăn tại Sa Pa; quản lý trang cộng đồng 15.000 người theo dõi và điều phối gây quỹ, sản xuất, phân phối." } },
    { date: "Jun 2023 – Jul 2025",
      en: { venue: "Live at Blossom Grapeseed Kim Dong", role: "English Teaching Assistant" },
      vi: { venue: "Biểu diễn tại Blossom Grapeseed Kim Đồng", role: "Trợ giảng Tiếng Anh" } },
    { date: "2023 — Expected 2027",
      en: { venue: "Foreign Trade University", role: "International Economics · GPA 3.27/4.0 · IELTS 6.5" },
      vi: { venue: "Đại học Ngoại thương", role: "Kinh tế Quốc tế · GPA 3.27/4.0 · IELTS 6.5" } },
    { date: "Nov 2023 – Jun 2024",
      en: { venue: "Live at FTU Dynamic Club", role: "Member, Project Management Department · Coordinated logistics and cross-team execution for a competition with 1,000+ participants" },
      vi: { venue: "Biểu diễn tại FTU Dynamic Club", role: "Thành viên Ban Quản lý Dự án · Điều phối hậu cần và triển khai liên phòng ban cho cuộc thi hơn 1.000 người tham gia" } },
    { date: "Aug 2025 – Aug 2026",
      en: { venue: "Live at Everred Group — “Godmother”", role: "Customer Service Staff" },
      vi: { venue: "Biểu diễn tại Everred Group — “Godmother”", role: "Nhân viên Chăm sóc Khách hàng" } },
    { date: "Sep 2025",
      en: { venue: "Special Guest — YES Scientific Research Club", role: "Top 20/120, Economic Research Champion 2025" },
      vi: { venue: "Khách mời Đặc biệt — CLB Nghiên cứu Khoa học YES", role: "Top 20/120, Quán quân Nghiên cứu Kinh tế 2025" } },
    { date: "Jun 2026",
      en: { venue: "Live at SmartSotek Company", role: "Hands-on Business Analysis Training (with Ms. Thu, BA Trainer)" },
      vi: { venue: "Biểu diễn tại Công ty SmartSotek", role: "Đào tạo thực chiến Business Analysis (cùng Chị Thu, BA Trainer)" } },
    { date: "Jun 2026",
      en: { venue: "Live at Mobile Banking Application", role: "Business Analyst Mock Project" },
      vi: { venue: "Biểu diễn tại Ứng dụng Mobile Banking", role: "Dự án Mô phỏng Business Analyst" } },
    { date: "Jul 2026",
      en: { venue: "Track Released — Journal of Economics and Business Administration", role: "Publication Accepted" },
      vi: { venue: "Phát hành Track — Tạp chí Kinh tế và Quản trị Kinh doanh", role: "Bài viết được chấp nhận đăng" } }
  ];

  /* -------------------- ALBUM GATE DATA -------------------- */
  /* Track titles + producer credits for "Xoay Tron" by Hoang Dung (2025) —
     used purely as decorative flavour text on the intro screen and the
     spinning discs; titles/credits only, no lyrics. */
  const xoayTronTracks = [
    { n: "01", title: "Cities (Intro)", artist: "Pixel Neko" },
    { n: "02", title: "La Bàn", artist: "Pixel Neko" },
    { n: "03", title: "Sao Giờ Em Mới Tới", artist: "Pixel Neko" },
    { n: "04", title: "Cuối Tuần (1825)", artist: "Lelarec" },
    { n: "05", title: "Conversations (Interlude)", artist: "Lelarec" },
    { n: "06", title: "Tách", artist: "Lelarec" },
    { n: "07", title: "Em Trồng Cây", artist: "Lelarec" },
    { n: "08", title: "Không Quan Trọng", artist: "Pixel Neko" },
    { n: "09", title: "Khiêu Vũ Trong Đêm", artist: "Pixel Neko, Nân" },
    { n: "10", title: "Morality (Interlude)", artist: "Pixel Neko" },
    { n: "11", title: "Ba Mươi Cái Chớp Mắt", artist: "Pixel Neko" },
    { n: "12", title: "Sâm-panh", artist: "Lelarec" },
    { n: "13", title: "Bức Tranh Và Cánh Chim", artist: "Lelarec" },
    { n: "14", title: "Giữ Anh Cho Ngày Hôm Qua", artist: "Rhymastic, Lelarec" },
    { n: "15", title: "Đừng Giữ Chỗ", artist: "Hoàng Dũng" }
  ];

  const orbitGradients = [
    ["#F6C947", "#F0801E", "#E23B2E"],
    ["#EAF2FF", "#3568A6", "#7B2C55"],
    ["#EAFBE9", "#74B04C", "#1F5C3A"],
    ["#FDEFF6", "#E85B96", "#7B2C55"],
    ["#F6C947", "#74B04C", "#1F5C3A"],
    ["#FFF3E9", "#E85B96", "#E23B2E"]
  ];

  /* which tracks spin in which section, and where */
  const orbitLayout = {
    orbitHero: [
      { track: 0, style: "top:-42px;left:-64px;width:220px;", duration: 26 },
      { track: 1, style: "top:6%;right:-74px;width:190px;", duration: 32, reverse: true },
      { track: 2, style: "bottom:-52px;left:5%;width:200px;", duration: 22 },
      { track: 3, style: "bottom:-34px;right:3%;width:230px;", duration: 30, reverse: true },
      { track: 4, style: "top:38%;left:-92px;width:150px;", duration: 18 },
      { track: 5, style: "top:60%;right:-82px;width:160px;", duration: 20, reverse: true },
      { track: 6, style: "top:14%;left:38%;width:90px;", duration: 15 },
      { track: 9, style: "bottom:8%;right:20%;width:100px;", duration: 23, reverse: true },
      { track: 12, style: "top:2%;left:16%;width:80px;", duration: 17, reverse: true }
    ],
    orbitTracklist: [
      { track: 6, style: "top:-30px;right:-40px;width:130px;", duration: 24 },
      { track: 7, style: "bottom:-30px;left:-30px;width:120px;", duration: 19, reverse: true },
      { track: 1, style: "top:18%;left:-24px;width:95px;", duration: 21, reverse: true },
      { track: 13, style: "bottom:12%;right:-22px;width:90px;", duration: 26 }
    ],
    orbitBackstage: [
      { track: 8, style: "top:-20px;left:-50px;width:140px;", duration: 28, reverse: true },
      { track: 9, style: "bottom:-20px;right:-40px;width:130px;", duration: 21 },
      { track: 2, style: "top:32%;right:-26px;width:100px;", duration: 19 },
      { track: 5, style: "bottom:4%;left:-26px;width:105px;", duration: 25, reverse: true }
    ],
    orbitTour: [
      { track: 10, style: "top:-20px;right:-30px;width:120px;", duration: 23 },
      { track: 11, style: "bottom:-20px;left:-40px;width:130px;", duration: 27, reverse: true },
      { track: 4, style: "top:6%;left:-22px;width:95px;", duration: 18, reverse: true },
      { track: 8, style: "bottom:2%;right:-24px;width:100px;", duration: 20 }
    ],
    orbitEncore: [
      { track: 12, style: "top:-20px;left:-40px;width:140px;", duration: 25, reverse: true },
      { track: 13, style: "top:-10px;right:-40px;width:130px;", duration: 20 },
      { track: 14, style: "bottom:-40px;left:38%;width:150px;", duration: 30, reverse: true },
      { track: 1, style: "top:30%;right:-30px;width:100px;", duration: 19, reverse: true },
      { track: 5, style: "bottom:6%;right:22%;width:80px;", duration: 16 }
    ],
    orbitGate: [
      { track: 0, style: "top:8%;left:-70px;width:170px;", duration: 24 },
      { track: 3, style: "top:4%;right:-60px;width:150px;", duration: 30, reverse: true },
      { track: 7, style: "top:44%;left:2%;width:110px;", duration: 20, reverse: true },
      { track: 11, style: "top:40%;right:4%;width:120px;", duration: 26 },
      { track: 14, style: "top:78%;left:20%;width:100px;", duration: 18, reverse: true },
      { track: 9, style: "top:64%;right:18%;width:90px;", duration: 22, reverse: true },
      { track: 5, style: "top:12%;left:42%;width:80px;", duration: 15 }
    ]
  };

  let orbitIdCounter = 0;

  function buildOrbitDisc(track, gradientStops, style, duration, reverse) {
    orbitIdCounter++;
    const gid = "og" + orbitIdCounter;
    const pid = "op" + orbitIdCounter;
    const label = (track.title + " • " + (track.artist || "Xoay Tròn") + " • ").toUpperCase();
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "orbit-disc");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("style", style + "animation-duration:" + duration + "s;" + (reverse ? "animation-direction:reverse;" : ""));
    svg.innerHTML =
      '<defs>' +
        '<radialGradient id="' + gid + '" cx="50%" cy="50%" r="50%">' +
          '<stop offset="0%" stop-color="' + gradientStops[0] + '"/>' +
          '<stop offset="45%" stop-color="' + gradientStops[1] + '"/>' +
          '<stop offset="100%" stop-color="' + gradientStops[2] + '"/>' +
        '</radialGradient>' +
        '<path id="' + pid + '" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"/>' +
      '</defs>' +
      '<circle cx="100" cy="100" r="98" fill="#F7F4EC"/>' +
      '<circle cx="100" cy="100" r="79" fill="url(#' + gid + ')"/>' +
      '<text font-size="9.2" letter-spacing="2" fill="#15130F" font-family="\'Space Mono\', monospace">' +
        '<textPath href="#' + pid + '">' + label + label + '</textPath>' +
      '</text>';
    return svg;
  }

  function renderOrbitFields() {
    Object.keys(orbitLayout).forEach((containerId) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      orbitLayout[containerId].forEach((cfg, i) => {
        const track = xoayTronTracks[cfg.track];
        if (!track) return;
        const gradient = orbitGradients[cfg.track % orbitGradients.length];
        container.appendChild(buildOrbitDisc(track, gradient, cfg.style, cfg.duration, cfg.reverse));
      });
    });
  }

  /* -------------------- ALBUM GATE -------------------- */
  function initAlbumGate() {
    const gate = document.getElementById("albumGate");
    if (!gate) return;
    const startBtn = document.getElementById("startListenBtn");
    const skipLink = document.getElementById("gateSkip");
    const backBtn = document.getElementById("backToGateBtn");

    function enter(startAudio) {
      gate.hidden = false; // in case we're re-entering after a "back to gate"
      gate.classList.remove("closing");
      gate.offsetHeight; // force reflow so the closing transition can replay cleanly
      gate.classList.add("closing");
      document.body.classList.remove("gate-active");
      setTimeout(() => { gate.hidden = true; }, 500);
      if (startAudio) {
        // load + attempt autoplay right on this click — the strongest signal
        // a browser will accept for "the user asked for sound". Entering the
        // portfolio now starts "Let Me Go" straight away.
        revealLetMeGo(true);
      }
    }

    /* "back to gate" — return to the La Bàn intro screen from anywhere
       in the portfolio. Stops the persistent track and any Play Album
       auto-scroll so nothing overlaps with the gate's own La Bàn embed. */
    function backToGate() {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.body.classList.add("gate-active");
      gate.hidden = false;
      gate.classList.remove("closing");
      if (typeof stopAutoScroll === "function") stopAutoScroll();
      if (nowPlayingFrame) nowPlayingFrame.src = "";
      nowPlayingLoaded = false;
      if (nowPlaying) nowPlaying.classList.add("collapsed");
      activeTrackKey = "nowplaying.defaultLabel";
      if (typeof updateNowPlayingLabel === "function") updateNowPlayingLabel();
    }

    startBtn.addEventListener("click", (e) => {
      burstGateNotes(e.clientX, e.clientY);
      enter(true);
    });
    skipLink.addEventListener("click", (e) => { e.preventDefault(); enter(false); });
    if (backBtn) backBtn.addEventListener("click", backToGate);
  }

  /* -------------------- GATE FX: flying notes -------------------- */
  const NOTE_GLYPHS = ["𝄞", "♪", "♫"];

  function spawnGateNote(x, y) {
    const el = document.createElement("span");
    el.className = "note-spawn";
    el.textContent = NOTE_GLYPHS[Math.floor(Math.random() * NOTE_GLYPHS.length)];
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.fontSize = (1 + Math.random() * 1.2) + "rem";
    el.style.setProperty("--drift", (Math.random() * 70 - 35) + "px");
    document.body.appendChild(el);
    el.addEventListener("animationend", () => el.remove());
    setTimeout(() => { if (el.isConnected) el.remove(); }, 2200);
  }

  /* a little cascading burst of notes — plays when "Discover the Concert" is clicked */
  function burstGateNotes(x, y) {
    for (let i = 0; i < 14; i++) {
      setTimeout(() => {
        spawnGateNote(x + (Math.random() * 140 - 70), y + (Math.random() * 70 - 35));
      }, i * 35);
    }
  }

  /* -------------------- RENDER -------------------- */
  function resolveTrack(item, lang) {
    const t2 = item[lang] || item.en;
    return { track: item.track, date: item.date, title: t2.title, subtitle: t2.subtitle, tags: t2.tags, details: t2.details };
  }

  function trackRow(item, index) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "track-row";
    btn.type = "button";
    btn.setAttribute("data-index", String(index));
    btn.innerHTML =
      '<span class="track-num">' + item.track + '</span>' +
      '<span class="track-info">' +
        '<span class="track-title">' + item.title + '</span>' +
        '<span class="track-subtitle">' + item.subtitle + '</span>' +
      '</span>' +
      '<span class="track-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>';
    li.appendChild(btn);
    return li;
  }

  function renderTracklist() {
    const $a = document.getElementById("sideA");
    const $b = document.getElementById("sideB");
    $a.innerHTML = "";
    $b.innerHTML = "";
    const resolvedA = sideA.map((item) => resolveTrack(item, currentLang));
    const resolvedB = sideB.map((item) => resolveTrack(item, currentLang));
    const allTracks = resolvedA.concat(resolvedB);
    resolvedA.forEach((tr, i) => $a.appendChild(trackRow(tr, i)));
    resolvedB.forEach((tr, i) => $b.appendChild(trackRow(tr, resolvedA.length + i)));

    const stageTrack = document.getElementById("stageVinylTrack");
    const stageCaption = document.getElementById("stageCaption");

    function setStage(item) {
      stageTrack.textContent = item.track;
      stageCaption.textContent = item.title + " — " + item.subtitle;
    }

    document.querySelectorAll("#sideA .track-row, #sideB .track-row").forEach((row) => {
      const idx = Number(row.getAttribute("data-index"));
      const item = allTracks[idx];
      row.addEventListener("mouseenter", () => setStage(item));
      row.addEventListener("focus", () => setStage(item));
      row.addEventListener("click", () => openModal(item));
    });
  }

  function tagLi(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  function renderSkills() {
    const ba = document.getElementById("skillsBA");
    const tools = document.getElementById("skillsTools");
    const soft = document.getElementById("skillsSoft");
    ba.innerHTML = "";
    tools.innerHTML = "";
    soft.innerHTML = "";
    skillsBA.forEach((s) => ba.appendChild(tagLi(s[currentLang] || s.en)));
    skillsTools.forEach((s) => tools.appendChild(tagLi(s[currentLang] || s.en)));
    skillsSoft.forEach((s) => soft.appendChild(tagLi(s[currentLang] || s.en)));
  }

  function renderTour() {
    const list = document.getElementById("tourList");
    list.innerHTML = "";
    tourStops.forEach((stop) => {
      const tr = stop[currentLang] || stop.en;
      const li = document.createElement("li");
      li.className = "tour-item";
      li.innerHTML =
        '<span class="tour-date">' + stop.date + '</span>' +
        '<span>' +
          '<span class="tour-venue">' + tr.venue + '</span>' +
          '<span class="tour-role">' + tr.role + '</span>' +
        '</span>';
      list.appendChild(li);
    });
  }

  /* -------------------- MODAL -------------------- */
  const backdrop = document.getElementById("modalBackdrop");
  const booklet = document.getElementById("modalBooklet");
  let lastFocused = null;

  function openModal(item) {
    document.getElementById("modalTrackNo").textContent = "Track " + item.track;
    document.getElementById("modalTitle").innerHTML = item.title;
    document.getElementById("modalSubtitle").innerHTML = item.subtitle;
    document.getElementById("modalDate").textContent = item.date;

    const tagsEl = document.getElementById("modalTags");
    tagsEl.innerHTML = "";
    item.tags.forEach((tg) => tagsEl.appendChild(tagLi(tg)));

    const detailsEl = document.getElementById("modalDetails");
    detailsEl.innerHTML = "";
    item.details.forEach((d) => {
      const li = document.createElement("li");
      li.innerHTML = d;
      detailsEl.appendChild(li);
    });

    lastFocused = document.activeElement;
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("show"));
    document.getElementById("modalClose").focus();
    document.body.style.overflow = "hidden";
    audio.click();
  }

  function closeModal() {
    backdrop.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => { backdrop.hidden = true; }, 300);
    if (lastFocused) lastFocused.focus();
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  /* -------------------- NAV: mobile menu -------------------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
    hamburger.setAttribute("aria-expanded", "false");
  }));

  /* -------------------- LANGUAGE: apply + toggle button -------------------- */
  const langBtn = document.getElementById("langToggle");
  const langCode = document.getElementById("langCode");

  function applyLanguage(lang) {
    currentLang = lang === "vi" ? "vi" : "en";
    document.documentElement.lang = currentLang;
    localStorage.setItem(LANG_KEY, currentLang);
    document.title = t("meta.title");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    const finePrint = document.querySelector(".fine-print");
    if (finePrint) finePrint.innerHTML = t("footer.fineprint").replace("{year}", String(new Date().getFullYear()));

    if (langCode) langCode.textContent = currentLang === "vi" ? "VI" : "EN";
    if (langBtn) {
      langBtn.setAttribute("aria-pressed", String(currentLang === "vi"));
      langBtn.setAttribute("aria-label", currentLang === "vi" ? t("lang.toEn") : t("lang.toVi"));
    }

    renderTracklist();
    renderSkills();
    renderTour();
    if (typeof reflectMuteState === "function") reflectMuteState();
    if (typeof updateNowPlayingLabel === "function") updateNowPlayingLabel();
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "vi" : "en");
    });
  }

  /* -------------------- CURSOR: spotlight + pick (+ gate vinyl) -------------------- */
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const gateCursorVinyl = document.getElementById("gateCursorVinyl");
  if (supportsHover) {
    const dot = document.querySelector(".cursor-dot");
    const glow = document.querySelector(".cursor-glow");
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    let lastGateNote = 0;
    document.addEventListener("mousemove", (e) => {
      document.body.classList.add("cursor-ready");
      dot.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px) translate(-50%,-50%)";
      gx = e.clientX; gy = e.clientY;
      // while the gate is up, the cursor trails little musical notes as it moves
      if (document.body.classList.contains("gate-active")) {
        const now = performance.now();
        if (now - lastGateNote > 150) {
          lastGateNote = now;
          spawnGateNote(gx, gy);
        }
      }
    });
    (function loop() {
      glow.style.transform = "translate(" + gx + "px," + gy + "px) translate(-50%,-50%)";
      if (gateCursorVinyl) gateCursorVinyl.style.transform = "translate(" + gx + "px," + gy + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  }

  // touch devices: a tap on the gate spawns a note at the touch point
  document.addEventListener("touchstart", (e) => {
    if (!document.body.classList.contains("gate-active")) return;
    const touch = e.touches[0];
    if (touch) spawnGateNote(touch.clientX, touch.clientY);
  }, { passive: true });

  /* -------------------- SCROLL: vinyl speed + tonearm -------------------- */
  const vinyl = document.getElementById("ttVinyl");
  const tonearm = document.getElementById("ttTonearm");
  const overture = document.getElementById("overture");
  let scrollTimer = null;

  window.addEventListener("scroll", () => {
    vinyl.classList.add("fast");
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => vinyl.classList.remove("fast"), 500);
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        tonearm.classList.toggle("playing", entry.intersectionRatio < 0.6);
      });
    }, { threshold: [0, 0.6, 1] });
    heroObserver.observe(overture);
  }

  /* -------------------- REVEAL on scroll -------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* -------------------- AUDIO: only the real Hoang Dung / KIMLONG tracks
     play — no synthesized vinyl-crackle or lofi pad. "audio" is kept as a
     harmless stub so existing call sites (button clicks) don't break. */
  const audio = {
    startAmbience: function () {},
    stopAmbience: function () {},
    click: function () {},
    setMuted: function () {},
    isMuted: function () { return true; },
    isPlaying: function () { return false; }
  };

  const playIntroBtn = document.getElementById("playIntroBtn");
  const playIntroLabel = document.getElementById("playIntroLabel");
  playIntroBtn.addEventListener("click", () => {
    playAlbumTrack();
  });

  /* -------------------- ENCORE: mailto form -------------------- */
  const requestForm = document.getElementById("requestForm");
  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reqName").value.trim();
    const email = document.getElementById("reqEmail").value.trim();
    const msg = document.getElementById("reqMsg").value.trim();
    const subject = encodeURIComponent("Song Request from " + name);
    const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:huyenlinhnguyen198@gmail.com?subject=" + subject + "&body=" + body;
  });

  /* -------------------- NOW PLAYING widget -------------------- */
  const nowPlaying = document.getElementById("nowPlaying");
  const nowPlayingToggle = document.getElementById("nowPlayingToggle");
  const nowPlayingFrame = document.getElementById("nowPlayingFrame");
  const nowPlayingMute = document.getElementById("nowPlayingMute");
  const muteIconOn = nowPlayingMute ? nowPlayingMute.querySelector(".icon-sound-on") : null;
  const muteIconOff = nowPlayingMute ? nowPlayingMute.querySelector(".icon-sound-off") : null;
  const SPOTIFY_TRACK_SRC = "https://open.spotify.com/embed/track/2q6qZMPd4lNMCkvc06s7zs?utm_source=generator&theme=0&autoplay=1";
  let nowPlayingLoaded = false;
  let nowPlayingMuted = false;
  let activeTrackKey = "nowplaying.defaultLabel";

  function updateNowPlayingLabel() {
    if (!nowPlaying) return;
    const label = nowPlaying.querySelector(".now-playing-label");
    if (label) label.textContent = t(activeTrackKey);
  }

  /* which Spotify src belongs to the currently-active track, so a resume
     (e.g. after unmuting) always continues the right song */
  function trackSrcForActiveKey() {
    return activeTrackKey === "nowplaying.letmegoLabel" ? PLAY_ALBUM_TRACK_SRC : SPOTIFY_TRACK_SRC;
  }

  function loadNowPlaying() {
    if (nowPlayingLoaded || !nowPlayingFrame) return;
    nowPlayingLoaded = true;
    nowPlayingFrame.src = trackSrcForActiveKey();
  }

  /* every default "play" trigger in the site funnels through here — if the
     user has muted via the single speaker icon on the widget, respect that
     and stay silent */
  function revealNowPlaying(pulse) {
    if (!nowPlaying || nowPlayingMuted) return;
    loadNowPlaying();
    nowPlaying.classList.remove("collapsed");
    if (nowPlayingToggle) nowPlayingToggle.setAttribute("aria-expanded", "true");
    if (pulse) {
      nowPlaying.classList.add("pulse");
      setTimeout(() => nowPlaying.classList.remove("pulse"), 2400);
    }
  }

  /* switch the widget to "Let Me Go" (KIMLONG) and play it — used by both
     the gate's "Enter the Portfolio" button and the hero's "Play Album" */
  function revealLetMeGo(pulse) {
    activeTrackKey = "nowplaying.letmegoLabel";
    updateNowPlayingLabel();
    nowPlayingLoaded = false; // force the iframe to switch src even if something else was already loaded
    revealNowPlaying(pulse);
  }

  if (nowPlaying && nowPlayingToggle) {
    nowPlayingToggle.addEventListener("click", () => {
      const collapsed = nowPlaying.classList.toggle("collapsed");
      nowPlayingToggle.setAttribute("aria-expanded", String(!collapsed));
    });
  }

  /* single speaker icon = mute control. Click it to stop the track
     (unloads the Spotify embed entirely); click again to resume. */
  function reflectMuteState() {
    if (!nowPlayingMute) return;
    nowPlayingMute.setAttribute("aria-pressed", String(nowPlayingMuted));
    nowPlayingMute.setAttribute("aria-label", t(nowPlayingMuted ? "nowplaying.unmute" : "nowplaying.mute"));
    if (muteIconOn) muteIconOn.hidden = nowPlayingMuted;
    if (muteIconOff) muteIconOff.hidden = !nowPlayingMuted;
  }
  reflectMuteState();

  if (nowPlayingMute) {
    nowPlayingMute.addEventListener("click", () => {
      nowPlayingMuted = !nowPlayingMuted;
      reflectMuteState();
      if (nowPlayingMuted) {
        if (nowPlayingFrame) nowPlayingFrame.src = "";
        nowPlayingLoaded = false;
        if (nowPlaying) nowPlaying.classList.add("collapsed");
        if (nowPlayingToggle) nowPlayingToggle.setAttribute("aria-expanded", "false");
        stopAutoScroll();
      } else {
        loadNowPlaying();
        if (nowPlaying) nowPlaying.classList.remove("collapsed");
        if (nowPlayingToggle) nowPlayingToggle.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* -------------------- PLAY ALBUM: "Let Me Go" (KIMLONG) + a slow
     auto-scroll timed to finish exactly when the track ends -------------------- */
  const PLAY_ALBUM_TRACK_SRC = "https://open.spotify.com/embed/track/4jZgqPV3l6PHoYgE2S5wLi?utm_source=generator&theme=0&autoplay=1";
  const PLAY_ALBUM_DURATION_MS = 176000; // "let me go" — KIMLONG, 2:56

  let autoScrollRaf = null;
  function cancelAutoScrollOnInput() { stopAutoScroll(); }
  function stopAutoScroll() {
    if (autoScrollRaf !== null) {
      cancelAnimationFrame(autoScrollRaf);
      autoScrollRaf = null;
    }
    window.removeEventListener("wheel", cancelAutoScrollOnInput);
    window.removeEventListener("touchstart", cancelAutoScrollOnInput);
    window.removeEventListener("keydown", cancelAutoScrollOnInput);
  }
  function startAutoScroll(durationMs) {
    stopAutoScroll();
    const startY = window.scrollY;
    const endY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min(1, (now - startTime) / durationMs);
      window.scrollTo(0, startY + (endY - startY) * progress);
      autoScrollRaf = progress < 1 ? requestAnimationFrame(step) : null;
    }
    autoScrollRaf = requestAnimationFrame(step);
    // a genuine scroll/tap/key from the visitor should hand control back to them
    window.addEventListener("wheel", cancelAutoScrollOnInput, { passive: true, once: true });
    window.addEventListener("touchstart", cancelAutoScrollOnInput, { passive: true, once: true });
    window.addEventListener("keydown", cancelAutoScrollOnInput, { once: true });
  }

  function playAlbumTrack() {
    revealLetMeGo(true);
    startAutoScroll(PLAY_ALBUM_DURATION_MS);
  }

  /* -------------------- GALAXY DEPTH: scroll parallax -------------------- */
  const galaxyFar = document.querySelector(".galaxy-depth-far");
  const galaxyNear = document.querySelector(".galaxy-depth-near");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (galaxyFar && galaxyNear && !reduceMotion) {
    let parallaxFrame = null;
    const updateParallax = () => {
      const y = window.scrollY;
      galaxyFar.style.transform = "translateY(" + (y * 0.03) + "px)";
      galaxyNear.style.transform = "translateY(" + (y * 0.08) + "px)";
      parallaxFrame = null;
    };
    window.addEventListener("scroll", () => {
      if (parallaxFrame === null) parallaxFrame = requestAnimationFrame(updateParallax);
    }, { passive: true });
  }

  /* -------------------- init -------------------- */
  renderOrbitFields();
  initAlbumGate();
  const savedLang = localStorage.getItem(LANG_KEY);
  applyLanguage(savedLang === "vi" ? "vi" : "en");
})();
