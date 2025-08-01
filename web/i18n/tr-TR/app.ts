const translation = {
  createApp: 'UYGULAMA OLUŞTUR',
  types: {
    all: 'Hepsi',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Tamamlama',
    advanced: 'Sohbet akışı',
    basic: 'Temel',
  },
  duplicate: 'Çoğalt',
  duplicateTitle: 'Uygulamayı Çoğalt',
  export: 'DSL Dışa Aktar',
  exportFailed: 'DSL dışa aktarımı başarısız oldu.',
  importDSL: 'DSL dosyasını içe aktar',
  createFromConfigFile: 'DSL dosyasından oluştur',
  importFromDSL: 'DSL içe aktar',
  importFromDSLFile: 'DSL dosyasından',
  importFromDSLUrl: 'URL\'den',
  importFromDSLUrlPlaceholder: 'DSL bağlantısını buraya yapıştır',
  deleteAppConfirmTitle: 'Bu uygulamayı silmek istiyor musunuz?',
  deleteAppConfirmContent: 'Uygulamanın silinmesi geri alınamaz. Kullanıcılar artık uygulamanıza erişemeyecek ve tüm prompt yapılandırmaları ile loglar kalıcı olarak silinecektir.',
  appDeleted: 'Uygulama silindi',
  appDeleteFailed: 'Uygulama silinemedi',
  join: 'Topluluğa katıl',
  communityIntro: 'Farklı kanallarda takım üyeleri, katkıda bulunanlar ve geliştiricilerle tartışın.',
  roadmap: 'Yol haritamızı görün',
  newApp: {
    startFromBlank: 'Boş Oluştur',
    startFromTemplate: 'Şablondan Oluştur',
    captionAppType: 'Ne tür bir uygulama oluşturmak istiyorsunuz?',
    chatbotDescription: 'Sohbete dayalı bir uygulama oluşturun. Bu uygulama, çoklu turlar halinde sürekli konuşmaya izin veren bir soru-cevap formatı kullanır.',
    completionDescription: 'Prompt temelinde yüksek kaliteli metinler üreten bir uygulama oluşturun, örneğin makaleler, özetler, çeviriler ve daha fazlasını oluşturmak için.',
    completionWarning: 'Bu tür bir uygulama artık desteklenmeyecek.',
    agentDescription: 'Görevleri tamamlamak için araçları bağımsız olarak seçebilen bir zeki Agent oluşturun',
    workflowDescription: 'Yüksek derecede özelleştirilebilir bir workflow ile yüksek kaliteli metinler üreten bir uygulama oluşturun. Deneyimli kullanıcılar için uygundur.',
    workflowWarning: 'Şu anda beta aşamasında',
    chatbotType: 'Chatbot düzenleme yöntemi',
    basic: 'Temel',
    basicTip: 'Yeni başlayanlar için, daha sonra Chatflow\'a geçilebilir',
    basicFor: 'YENİ BAŞLAYANLAR İÇİN',
    basicDescription: 'Temel Orkestrasyon, yerleşik promptları değiştirme yeteneği olmadan, basit ayarlarla bir Chatbot uygulamasının orkestrasyonuna olanak tanır. Yeni başlayanlar için uygundur.',
    advanced: 'Chatflow',
    advancedFor: 'Gelişmiş kullanıcılar için',
    advancedDescription: 'Workflow Orkestrasyonu, yerleşik promptları düzenleme yeteneği de dahil olmak üzere yüksek derecede özelleştirme sunarak Chatbotları workflow formunda düzenler. Deneyimli kullanıcılar için uygundur.',
    captionName: 'Uygulama simgesi & ismi',
    appNamePlaceholder: 'Uygulamanıza bir isim verin',
    captionDescription: 'Açıklama',
    appDescriptionPlaceholder: 'Uygulamanın açıklamasını girin',
    useTemplate: 'Bu şablonu kullan',
    previewDemo: 'Önizleme demosu',
    chatApp: 'Asistan',
    chatAppIntro: 'Sohbete dayalı bir uygulama oluşturmak istiyorum. Bu uygulama, çoklu turlar halinde sürekli konuşmaya izin veren bir soru-cevap formatı kullanır.',
    agentAssistant: 'Yeni Agent Asistanı',
    completeApp: 'Metin Üretici',
    completeAppIntro: 'Promptlara dayalı olarak yüksek kaliteli metinler üreten bir uygulama oluşturmak istiyorum, örneğin makaleler, özetler, çeviriler ve daha fazlasını oluşturmak için.',
    showTemplates: 'Bir şablondan seçmek istiyorum',
    hideTemplates: 'Mod seçim ekranına geri dön',
    Create: 'Oluştur',
    Cancel: 'İptal',
    nameNotEmpty: 'İsim boş olamaz',
    appTemplateNotSelected: 'Lütfen bir şablon seçin',
    appTypeRequired: 'Lütfen bir uygulama türü seçin',
    appCreated: 'Uygulama oluşturuldu',
    appCreateFailed: 'Uygulama oluşturulamadı',
    appCreateDSLErrorPart4: 'Sistem tarafından desteklenen DSL sürümü:',
    appCreateDSLErrorPart2: 'Devam etmek istiyor musunuz?',
    appCreateDSLWarning: 'Dikkat: DSL sürüm farkı bazı özellikleri etkileyebilir',
    appCreateDSLErrorPart1: 'DSL sürümlerinde önemli bir fark tespit edildi. İçe aktarmayı zorlamak, uygulamanın hatalı çalışmasına neden olabilir.',
    caution: 'Dikkat',
    appCreateDSLErrorPart3: 'Geçerli uygulama DSL sürümü:',
    appCreateDSLErrorTitle: 'Sürüm Uyumsuzluğu',
    Confirm: 'Onaylamak',
    foundResults: '{{count}} Sonuç -ları',
    noAppsFound: 'Uygulama bulunamadı',
    chatbotUserDescription: 'Basit yapılandırmayla hızlı bir şekilde LLM tabanlı bir sohbet botu oluşturun. Daha sonra Chatflow\'a geçebilirsiniz.',
    optional: 'Opsiyonel',
    foundResult: '{{count}} Sonuç',
    noTemplateFound: 'Şablon bulunamadı',
    workflowUserDescription: 'Sürükle-bırak kolaylığıyla görsel olarak otonom yapay zeka iş akışları oluşturun.',
    advancedUserDescription: 'Ek bellek özellikleri ve sohbet robotu arayüzü ile iş akışı.',
    completionShortDescription: 'Metin oluşturma görevleri için yapay zeka asistanı',
    noTemplateFoundTip: 'Farklı anahtar kelimeler kullanarak arama yapmayı deneyin.',
    learnMore: 'Daha fazla bilgi edinin',
    agentShortDescription: 'Akıl yürütme ve otonom araç kullanımına sahip akıllı ajan',
    forBeginners: 'Daha temel uygulama türleri',
    workflowShortDescription: 'Akıllı otomasyonlar için ajantik akış',
    agentUserDescription: 'Görev hedeflerine ulaşmak için yinelemeli akıl yürütme ve otonom araç kullanımı yeteneğine sahip akıllı bir ajan.',
    chooseAppType: 'Uygulama Türünü Seçin',
    completionUserDescription: 'Basit yapılandırmayla metin oluşturma görevleri için hızlı bir şekilde bir yapay zeka asistanı oluşturun.',
    chatbotShortDescription: 'Basit kurulumlu LLM tabanlı sohbet robotu',
    advancedShortDescription: 'Çok turlu sohbetler için geliştirilmiş iş akışı',
    noIdeaTip: 'Fikriniz yok mu? Şablonlarımıza göz atın',
    forAdvanced: 'İLERI DÜZEY KULLANICILAR IÇIN',
    dropDSLToCreateApp: 'Uygulama oluşturmak için DSL dosyasını buraya bırakın',
  },
  editApp: 'Bilgileri Düzenle',
  editAppTitle: 'Uygulama Bilgilerini Düzenle',
  editDone: 'Uygulama bilgileri güncellendi',
  editFailed: 'Uygulama bilgileri güncellenemedi',
  iconPicker: {
    ok: 'Tamam',
    cancel: 'İptal',
    emoji: 'Emoji',
    image: 'Görsel',
  },
  switch: 'Workflow Orkestrasyonuna Geç',
  switchTipStart: 'Sizin için yeni bir uygulama kopyası oluşturulacak ve yeni kopya Workflow Orkestrasyonuna geçecektir. Yeni kopya ',
  switchTip: 'izin vermeyecek',
  switchTipEnd: ' Temel Orkestrasyona geri dönmek.',
  switchLabel: 'Oluşturulacak uygulama kopyası',
  removeOriginal: 'Orijinal uygulamayı sil',
  switchStart: 'Geçişi Başlat',
  typeSelector: {
    all: 'All Types',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Completion',
    advanced: 'Sohbet akışı',
  },
  tracing: {
    title: 'Uygulama performansını izleme',
    description: 'Üçüncü taraf LLMOps sağlayıcısını yapılandırma ve uygulama performansını izleme.',
    config: 'Yapılandırma',
    collapse: 'Daralt',
    expand: 'Genişlet',
    tracing: 'İzleme',
    disabled: 'Devre Dışı',
    disabledTip: 'Lütfen önce sağlayıcıyı yapılandırın',
    enabled: 'Hizmette',
    tracingDescription: 'Uygulama yürütmesinin tam bağlamını, LLM çağrıları, bağlam, promptlar, HTTP istekleri ve daha fazlası dahil olmak üzere üçüncü taraf izleme platformuna yakalama.',
    configProviderTitle: {
      configured: 'Yapılandırıldı',
      notConfigured: 'İzlemeyi etkinleştirmek için sağlayıcıyı yapılandırın',
      moreProvider: 'Daha Fazla Sağlayıcı',
    },
    arize: {
      title: 'Arize',
      description: 'Kurumsal düzeyde LLM gözlemlenebilirliği, çevrimiçi ve çevrimdışı değerlendirme, izleme ve deneyler — OpenTelemetry ile desteklenmektedir. LLM ve ajan tabanlı uygulamalar için özel olarak tasarlanmıştır.',
    },
    phoenix: {
      title: 'Phoenix',
      description: 'LLM iş akışlarınız ve ajanlarınız için açık kaynaklı ve OpenTelemetry tabanlı gözlemlenebilirlik, değerlendirme, istem mühendisliği ve deney platformu.',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'LLM destekli uygulama yaşam döngüsünün her adımı için her şeyi kapsayan bir geliştirici platformu.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'LLM uygulamanızı hata ayıklamak ve geliştirmek için izlemeler, değerlendirmeler, prompt yönetimi ve metrikler.',
    },
    inUse: 'Kullanımda',
    configProvider: {
      title: 'Yapılandırma',
      placeholder: '{{key}} bilgilerinizi girin',
      project: 'Proje',
      publicKey: 'Genel Anahtar',
      secretKey: 'Gizli Anahtar',
      viewDocsLink: '{{key}} dökümanlarını görüntüle',
      removeConfirmTitle: '{{key}} yapılandırmasını kaldır?',
      removeConfirmContent: 'Mevcut yapılandırma kullanımda, kaldırılması İzleme özelliğini kapatacaktır.',
    },
    view: 'Görünüm',
    opik: {
      title: 'Opik Belediyesi',
      description: 'Opik, LLM uygulamalarını değerlendirmek, test etmek ve izlemek için açık kaynaklı bir platformdur.',
    },
    weave: {
      title: 'Dokuma',
      description: 'Weave, LLM uygulamalarını değerlendirmek, test etmek ve izlemek için açık kaynaklı bir platformdur.',
    },
    aliyun: {
      title: 'Bulut İzleyici',
      description: 'Alibaba Cloud tarafından sağlanan tamamen yönetilen ve bakım gerektirmeyen gözlemleme platformu, Dify uygulamalarının kutudan çıkar çıkmaz izlenmesi, takip edilmesi ve değerlendirilmesine olanak tanır.',
    },
  },
  answerIcon: {
    descriptionInExplore: 'Keşfet\'te değiştirilecek 🤖 web app simgesinin kullanılıp kullanılmayacağı',
    title: 'Değiştirmek 🤖 için web app simgesini kullanın',
    description: 'Paylaşılan uygulamada değiştirmek 🤖 için web app simgesinin kullanılıp kullanılmayacağı',
  },
  mermaid: {
    handDrawn: 'Elle çizilmiş',
    classic: 'Klasik',
  },
  openInExplore: 'Keşfet\'te Aç',
  newAppFromTemplate: {
    sidebar: {
      Programming: 'Programlama',
      Assistant: 'Asistan',
      Writing: 'Yazı',
      Agent: 'Aracı',
      Workflow: 'İş Akışı',
      Recommended: 'Önerilen',
      HR: 'HR',
    },
    searchAllTemplate: 'Tüm şablonlarda ara...',
    byCategories: 'KATEGORILERE GÖRE',
  },
  showMyCreatedAppsOnly: 'Sadece oluşturduğum uygulamaları göster',
  appSelector: {
    noParams: 'Parametre gerekmez',
    label: 'Uygulama',
    placeholder: 'Bir uygulama seçin...',
    params: 'UYGULAMA PARAMETRELERI',
  },
  structOutput: {
    required: 'Gerekli',
    structured: 'Yapılandırılmış',
    LLMResponse: 'LLM Yanıtı',
    notConfiguredTip: 'Yapılandırılmış çıktı henüz yapılandırılmamış.',
    configure: 'Yapılandır',
    modelNotSupported: 'Model desteklenmiyor',
    moreFillTip: 'Maksimum 10 katmanlı iç içe geçişleri gösterme',
    modelNotSupportedTip: 'Mevcut model bu özelliği desteklemiyor ve otomatik olarak prompt enjeksiyonuna düşürülüyor.',
    structuredTip: 'Yapılandırılmış Çıktılar, modelin sağladığınız JSON Şemasına uyacak şekilde her zaman yanıtlar üretmesini sağlayan bir özelliktir.',
  },
  accessItemsDescription: {
    anyone: 'Herkes web uygulamasına erişebilir',
    organization: 'Kuruluşta herkes web uygulamasına erişebilir.',
    specific: 'Sadece belirli gruplar veya üyeler web uygulamasına erişebilir.',
    external: 'Sadece kimliği doğrulanmış dış kullanıcılar Web uygulamasına erişebilir',
  },
  accessControlDialog: {
    accessItems: {
      anyone: 'Bağlantıya sahip olan herkes',
      organization: 'Sadece işletme içindeki üyeler',
      specific: 'Belirli gruplar veya üyeler',
      external: 'Kimliği onaylanmış harici kullanıcılar',
    },
    operateGroupAndMember: {
      searchPlaceholder: 'Grupları ve üyeleri ara',
      expand: 'Genişlet',
      allMembers: 'Tüm üyeler',
      noResult: 'Sonuç yok',
    },
    title: 'Web Uygulaması Erişim Kontrolü',
    description: 'Web uygulaması erişim izinlerini ayarlayın',
    accessLabel: 'Kimin erişimi var',
    groups_other: '{{count}} GRUP',
    members_one: '{{count}} ÜYE',
    members_other: '{{count}} ÜYE',
    noGroupsOrMembers: 'Seçilen grup veya üye yok',
    webAppSSONotEnabledTip: 'Lütfen web uygulaması kimlik doğrulama yöntemini yapılandırmak için kurumsal yöneticinizle iletişime geçin.',
    updateSuccess: 'Başarıyla güncellendi',
    groups_one: '{{count}} GRUP',
  },
  publishApp: {
    title: 'Web uygulamasına kim erişebilir',
    notSet: 'Ayar yapılmamış',
    notSetDesc: 'Şu anda kimse web uygulamasına erişemiyor. Lütfen izinleri ayarlayın.',
  },
  accessControl: 'Web Uygulaması Erişim Kontrolü',
  noAccessPermission: 'Web uygulamasına erişim izni yok',
  maxActiveRequestsPlaceholder: 'Sınırsız için 0 girin',
  maxActiveRequests: 'Maksimum eş zamanlı istekler',
  maxActiveRequestsTip: 'Her uygulama için maksimum eşzamanlı aktif istek sayısı (sınırsız için 0)',
}

export default translation
