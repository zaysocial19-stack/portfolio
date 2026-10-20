// ==================== BILINGUAL TRANSLATIONS (EN / JA) ====================
const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.request_docs": "Request Documents",
    "nav.lang_toggle": "JA",
    "nav.lang_label": "Switch to Japanese",

    // Hero
    "hero.eyebrow": "Hello, I'm ",
    "hero.tagline": "I'm building my path as a software engineer.",
    "hero.text": "Based in Japan, focused on Java, Python, JavaScript, databases, and cloud technologies.",
    "hero.btn_projects": "View My Work",
    "hero.btn_contact": "Get In Touch",
    "hero.btn_docs": "Request Documents",

    // About
    "about.heading_num": "01.",
    "about.heading_title": "About Me",
    "about.p1": "I'm a developer based in Japan, currently building my skills toward a career in software engineering.",
    "about.p2": "My background is in International Relations, but over time I became increasingly interested in technology and software development. I started learning web technologies such as HTML, CSS, and JavaScript, and that interest eventually grew into a deeper focus on programming and software engineering.",
    "about.p3": "I'm currently studying AI programming and strengthening my foundation in Java, Python, JavaScript, SQL, databases, APIs, Git, and cloud technologies. I enjoy learning by building projects and solving problems rather than only studying theory.",
    "about.p4": "My goal is to become a well-rounded software engineer who can build reliable, useful applications and continue growing with new technologies.",
    "about.tech_heading": "Technologies I'm learning and working with",

    // Experience
    "exp.heading_num": "02.",
    "exp.heading_title": "Experience",
    "exp.item1_date": "JAN 2020 — JUL 2024",
    "exp.item1_title": "Reception & Administrative Assistant",
    "exp.item1_company": "Family-run Dental Clinic · Myanmar",
    "exp.item1_li1": "Assisted patients with reception and general inquiries.",
    "exp.item1_li2": "Handled phone calls and appointment scheduling.",
    "exp.item1_li3": "Processed payments and issued receipts.",
    "exp.item1_li4": "Organized patient information and performed data entry.",
    "exp.item1_li5": "Assisted with basic computer tasks and inventory management.",

    "exp.item2_date": "MAR 2025 — PRESENT",
    "exp.item2_title": "Café Staff — Customer Service / Cashier",
    "exp.item2_company": "Saint Marc Café · Japan",
    "exp.item2_li1": "Handled customer orders and cashier operations.",
    "exp.item2_li2": "Prepared drinks according to customer orders.",
    "exp.item2_li3": "Provided customer service in a busy café environment.",
    "exp.item2_li4": "Supported store cleaning and opening/closing operations.",

    // Education
    "edu.heading_num": "03.",
    "edu.heading_title": "Education",
    "edu.item1_date": "2015 — 2019",
    "edu.item1_title": "Bachelor of Arts in International Relations",
    "edu.item1_school": "East Yangon University · Myanmar",
    "edu.item1_desc": "Studied international relations and related social sciences.",

    "edu.item2_date": "2026 — PRESENT",
    "edu.item2_title": "AI Programming Course",
    "edu.item2_school": "TOKYO MIRAI AI & IT Vocational School · Japan",
    "edu.item2_desc": "Currently studying programming and information technology with a focus on software development, databases, and AI-related technologies.",

    // Skills
    "skills.heading_num": "04.",
    "skills.heading_title": "Skills & Tools",
    "skills.cat_programming": "Programming",
    "skills.cat_dev": "Development & Engineering",
    "skills.cat_web": "Web",
    "skills.cat_languages": "Languages",
    "skills.cat_tools": "Tools & Technologies",
    "skills.cat_learning": "Currently Learning",
    "skills.lang_myanmar": "Myanmar (Native)",
    "skills.lang_english": "English (Professional Working)",
    "skills.lang_japanese": "Japanese (JLPT N2)",

    // Projects
    "projects.heading_num": "05.",
    "projects.heading_title": "Projects",
    "projects.comming_soon": "Project coming soon.",

    // Contact
    "contact.heading_num": "06.",
    "contact.heading_title": "Contact",
    "contact.eyebrow": "GET IN TOUCH",
    "contact.title": "Let's connect.",
    "contact.desc": "I'm currently building my career in software engineering and am open to relevant opportunities and conversations. Feel free to send me a message.",
    "contact.name_label": "Name",
    "contact.name_placeholder": "Your name",
    "contact.email_label": "Email",
    "contact.email_placeholder": "you@example.com",
    "contact.subject_label": "Subject",
    "contact.subject_placeholder": "What would you like to discuss?",
    "contact.message_label": "Message",
    "contact.message_placeholder": "Write your message...",
    "contact.note": "I'll get back to you by email.",
    "contact.submit_btn": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Your message has been sent successfully.",

    // Footer
    "footer.built_with": "Built with HTML, CSS & JavaScript.",

    // Modal
    "modal.eyebrow": "Direct Inquiry",
    "modal.title": "Request Documents",
    "modal.desc": "To protect personal privacy, my full CV, Japanese 履歴書, and 自己PR are provided upon request. Please select what you need and I will reply directly to your email.",
    "modal.name_label": "Your Name",
    "modal.name_placeholder": "e.g. Jane Doe / 田中 太郎",
    "modal.email_label": "Work / Direct Email",
    "modal.email_placeholder": "name@company.com",
    "modal.company_label": "Company / Organization",
    "modal.company_placeholder": "Company, agency, school, or organization",
    "modal.docs_label": "Documents Needed",
    "modal.doc1": "English CV / Resume",
    "modal.doc2": "履歴書・職務経歴書 (Japanese)",
    "modal.doc3": "自己PR / Jiko PR",
    "modal.doc4": "Other / Project Details",
    "modal.note_label": "Note / Message",
    "modal.note_placeholder": "Tell me briefly about the role, project, or timeline...",
    "modal.footer_note": "I usually respond within 24-48 hours.",
    "modal.submit_btn": "Send Request",
    "modal.sending": "Sending...",
    "modal.success": "Thank you! Your request has been sent. I'll review and reply to your email shortly."
  },

  ja: {
    // Nav
    "nav.about": "自己紹介",
    "nav.experience": "職歴",
    "nav.education": "学歴",
    "nav.skills": "スキル",
    "nav.projects": "開発実績",
    "nav.contact": "お問い合わせ",
    "nav.request_docs": "書類請求",
    "nav.lang_toggle": "EN",
    "nav.lang_label": "英語に切り替え / Switch to English",

    // Hero
    "hero.eyebrow": "初めまして、私は",
    "hero.tagline": "ソフトウェアエンジニアを目指して日々学習中。",
    "hero.text": "日本（東京）在住。Java、Python、JavaScript、データベース、クラウド技術を中心に学習・開発に取り組んでいます。",
    "hero.btn_projects": "開発実績を見る",
    "hero.btn_contact": "お問い合わせ",
    "hero.btn_docs": "書類請求",

    // About
    "about.heading_num": "01.",
    "about.heading_title": "自己紹介",
    "about.p1": "現在、日本（東京）を拠点にソフトウェアエンジニアを目指して技術の習得に励んでいる開発者です。",
    "about.p2": "大学では国際関係学を専攻していましたが、次第にテクノロジーやソフトウェア開発の持つ可能性に強く惹かれるようになりました。独学でHTML、CSS、JavaScriptなどのWebフロントエンドから学習を始め、より深くシステムやプログラミングを学びたいという思いから、本格的にエンジニアへの道を進むことを決意しました。",
    "about.p3": "現在はAI・IT系専門学校でプログラミングを学びながら、Java、Python、JavaScript、SQL、データベース設計、REST API、Git、AWSクラウドなどの基礎を固めています。単に座学で理論を学ぶだけでなく、実際に手を動かしてアプリケーションを作り、課題を解決しながら実践力を身につけることを大切にしています。",
    "about.p4": "将来は、信頼性の高い実用的なシステムを構築できる、技術の変化に柔軟なエンジニアとして社会に貢献したいと考えています。",
    "about.tech_heading": "学習・使用している主な技術",

    // Experience
    "exp.heading_num": "02.",
    "exp.heading_title": "職歴",
    "exp.item1_date": "2020年1月 — 2024年7月",
    "exp.item1_title": "受付・一般事務アシスタント",
    "exp.item1_company": "歯科医院（個人経営） · ミャンマー",
    "exp.item1_li1": "患者様の受付対応および一般的な問い合わせ対応。",
    "exp.item1_li2": "電話応対および診療予約スケジュールの管理・調整。",
    "exp.item1_li3": "診療費の会計精算および領収書の発行業務。",
    "exp.item1_li4": "患者情報のデータ入力およびカルテ・書類の整理保管。",
    "exp.item1_li5": "院内PCの基本保守および医療消耗品・備品の在庫管理支援。",

    "exp.item2_date": "2025年3月 — 現在",
    "exp.item2_title": "カフェスタッフ（接客・レジ・ドリンク作成）",
    "exp.item2_company": "サンマルクカフェ · 日本",
    "exp.item2_li1": "お客様からのオーダー受付およびレジ精算業務。",
    "exp.item2_li2": "マニュアルに沿った各種ドリンクおよび軽食の調理・提供。",
    "exp.item2_li3": "混雑時における迅速かつ丁寧な接客サービスの提供。",
    "exp.item2_li4": "店舗の衛生管理・清掃、および開店・閉店準備作業のサポート。",

    // Education
    "edu.heading_num": "03.",
    "edu.heading_title": "学歴",
    "edu.item1_date": "2015年 — 2019年",
    "edu.item1_title": "学士（国際関係学）",
    "edu.item1_school": "イーストヤンゴン大学 · ミャンマー",
    "edu.item1_desc": "国際関係論および関連社会科学の基礎を履修・修得。",

    "edu.item2_date": "2026年 — 現在",
    "edu.item2_title": "AIプログラミングコース",
    "edu.item2_school": "東京未来AI&IT専門学校 · 日本",
    "edu.item2_desc": "ソフトウェア開発、データベース、AI技術を中心に、ITおよびプログラミングの実践的なカリキュラムを受講中。",

    // Skills
    "skills.heading_num": "04.",
    "skills.heading_title": "保有スキル・開発環境",
    "skills.cat_programming": "プログラミング言語",
    "skills.cat_dev": "開発手法・エンジニアリング",
    "skills.cat_web": "Web技術",
    "skills.cat_languages": "語学力",
    "skills.cat_tools": "ツール・インフラ",
    "skills.cat_learning": "現在学習中",
    "skills.lang_myanmar": "ミャンマー語（母国語）",
    "skills.lang_english": "英語（ビジネスレベル）",
    "skills.lang_japanese": "日本語（日本語能力試験 N2取得）",

    // Projects
    "projects.heading_num": "05.",
    "projects.heading_title": "開発実績・ポートフォリオ",
    "projects.comming_soon": "現在制作中です。近日公開予定。",

    // Contact
    "contact.heading_num": "06.",
    "contact.heading_title": "お問い合わせ",
    "contact.eyebrow": "CONTACT",
    "contact.title": "お気軽にご連絡ください。",
    "contact.desc": "現在ソフトウェアエンジニアとしてのキャリアを築いており、求人情報、カジュアル面談、開発に関するお話など幅広く歓迎しております。ぜひお気軽にご連絡ください。",
    "contact.name_label": "お名前",
    "contact.name_placeholder": "山田 太郎",
    "contact.email_label": "メールアドレス",
    "contact.email_placeholder": "example@company.co.jp",
    "contact.subject_label": "件名",
    "contact.subject_placeholder": "お問い合わせの件名をご入力ください",
    "contact.message_label": "メッセージ本文",
    "contact.message_placeholder": "メッセージ内容をご記入ください...",
    "contact.note": "メールにて返信いたします。",
    "contact.submit_btn": "メッセージを送信",
    "contact.sending": "送信中...",
    "contact.success": "メッセージが正常に送信されました。確認次第ご連絡いたします。",

    // Footer
    "footer.built_with": "HTML、CSS、JavaScriptで制作。",

    // Modal
    "modal.eyebrow": "直接のお問い合わせ",
    "modal.title": "応募書類の請求",
    "modal.desc": "個人情報保護のため、英文履歴書（CV）、日本語履歴書・職務経歴書、自己PR書はご請求いただいた方に直接送付しております。ご希望の書類を選択の上ご送信ください。確認後、直接メールにてお送りいたします。",
    "modal.name_label": "お名前",
    "modal.name_placeholder": "山田 太郎",
    "modal.email_label": "メールアドレス（会社・直通）",
    "modal.email_placeholder": "yamada@company.co.jp",
    "modal.company_label": "貴社名・組織名（任意）",
    "modal.company_placeholder": "株式会社〇〇、採用担当など",
    "modal.docs_label": "ご希望の書類",
    "modal.doc1": "英文履歴書 (English CV / Resume)",
    "modal.doc2": "履歴書・職務経歴書 (日本語)",
    "modal.doc3": "自己PR書 / ポートフォリオ概要",
    "modal.doc4": "その他・プロジェクト情報",
    "modal.note_label": "補足・メッセージ（任意）",
    "modal.note_placeholder": "採用ポジション、プロジェクト、期限などがあればご記入ください...",
    "modal.footer_note": "通常24〜48時間以内にメールにてご返信いたします。",
    "modal.submit_btn": "書類を請求する",
    "modal.sending": "送信中...",
    "modal.success": "リクエストを送信しました。内容を確認次第、速やかにメールにて書類をお送りいたします。"
  }
};

if (typeof window !== "undefined") {
  window.translations = translations;
}
