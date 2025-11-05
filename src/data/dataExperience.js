
// Import images will be handled by webpack
const antmHome = "./dist/assets/home-bg.37de688c.png";
const foxHome = "./dist/assets/foxhome-bg.c9aeb155.png";
const bookLogin = "./dist/assets/login.95d4f289.png";
const gkHome = "./dist/assets/home-bg.000c1c2c.png";
const lingoDashboard = "./dist/assets/dashboard.97925852.svg";
const foodHome = "./dist/assets/home.8bee1398.svg";
const sikaProfile = "./dist/assets/profile.d6447e70.png";


const dataExperience = [
  {
    id: "antm",
    title: "Antam Logam Mulia",
    url: "https://play.google.com/store/apps/details?id=com.antam.digitalgold",
    tools:
      "Flutter, Dart, REST API, Xendit, Cypress, Jira, Sentry, MixPanel, GetX.",
    description:
      "ANTAM Logam Mulia. Melayani pembelian emas secara online, praktis & aman serta memberikan informasi update grafik harga emas antam terkini. UBPP Logam Mulia berkembang menjadi satu-satunya refinery di Indonesia yang masuk dalam Good Delivery List LBMA (London Bullion Market Association) dengan produk emas batangan sebagai top brand di Indonesia yang memberikan jaminan keaslian dan kemurnian 999.9%. Produk lainnya meliputi dinar, dirham, customized product, platinum labware, dll.ANTAM Logam Mulia. Melayani pembelian emas secara online, praktis & aman serta memberikan informasi update grafik harga emas antam terkini. UBPP Logam Mulia berkembang menjadi satu-satunya refinery di Indonesia yang masuk dalam Good Delivery List LBMA (London Bullion Market Association) dengan produk emas batangan sebagai top brand di Indonesia yang memberikan jaminan keaslian dan kemurnian 999.9%. Produk lainnya meliputi dinar, dirham, customized product, platinum labware, dll.",
    image: antmHome,
  },
  {
    id: "gokampus",
    title: "goKampus",
    url: "https://play.google.com/store/apps/details?id=com.and.gokampus",
    tools:
      "Flutter, Dart, REST API, Xendit, Cypress, Jira, Sentry, MixPanel, GetX.",
    description:
      "GoKampus adalah pintu gerbang Anda menuju pembelajaran berkelanjutan dan peningkatan karier. Dengan bermita dengan institusi terkemuka, baik di Indonesia maupun global, yakni Amazon Web Services (AWS), Merry Riana, Alterra Academy, Tokopedia Academy, dan lainnya, Anda memiliki akses ke berbagai kursus online bersertifikat. GoKampus menyediakan sumber daya yang Anda butuhkan bagi Anda yang ingin membangun keterampilan baru, meningkatkan prospek karier, atau mencapai tujuan pribadi. Mulailah perjalanan Anda menuju pelajar seumur hidup dan kesuksesan hari ini.",
    image: gkHome,
  },
  {
    id: "todostaff",
    title: "Bookingninjas",
    url: "https://www.bookingninjas.com/",
    tools: "Flutter, Dart, GetX, Integration Salesforce API.",
    description:
      "Booking Ninjas Staff App merampingkan manajemen staf, mengoptimalkan operasi, dan meningkatkan layanan tamu. Terhubung dengan mulus ke akun Booking Ninjas utama Anda, aplikasi canggih ini memungkinkan staf Anda mengelola tugas secara efisien, melacak jam kerja, dan tetap teratur. Dari perawatan pembersihan hingga tugas administratif dan permintaan tamu, ia menawarkan serangkaian fitur yang komprehensif untuk operasi yang disederhanakan. Dengan kemampuan komunikasi yang kuat, berkolaborasi secara lancar dengan rekan kerja dan memastikan kelancaran koordinasi antar departemen. Keamanan data adalah prioritas utama, melindungi informasi sensitif. Tingkatkan pengalaman tamu, tingkatkan efisiensi, dan unduh Aplikasi Booking Ninjas Staff hari ini",
    image: bookLogin,
  },
  {
    id: "foxlogger",
    title: "Foxlogger",
    url: "https://play.google.com/store/apps/details?id=com.vneu.foxlogger",
    tools:
      "Dart, Flutter, Google Maps, Api Testing, Jira, Click up, Google Play Service, App Store Connect, MQTT Client, github, Bloc.",
    description:
      "Where are all my hundreds operational vehicles now?  Find the best answer with Fox Logger. Just log in into your account then you can easily find out where are they now and what they did (car, motorcycle, trucks, ambulance, heavy duty, moving assets, etc).",
    image: foxHome,
  },
  {
    id: "lingo",
    title: "LingoTalk",
    url: "https://lingotalk.org/",
    tools:
      "Flutter, Dart, Widget Testing, Google Play Service, Apps Store Connect, gitlab, Jira, Trello, GetX.",
    description:
      "LingoTalk is a language learning platform in Indonesia with a wide selection of languages that you can learn, from English, Mandarin, Korean, Indonesian, Japanese, Thai, Arabic, French, Spanish, to German.",
    image: lingoDashboard,
  },
  {
    id: "food",
    title: "Food Market",
    url: "",
    tools:
      "Flutter, Dart, REST API, Xendit, Cypress, Jira, Sentry, MixPanel, GetX.",
    description:
      "In this class I learned how to build iOS and Android applications for online food ordering (such as GrabFood or GoFood). Starting from the design-to-code slicing stage to creating a special API using Laravel version 8.",
    image: foodHome,
  },
  {
    id: "sika",
    title: "Aplikasi SIKA",
    url: "",
    tools:
      "This application was developed using the Flutter and Firebase framework as a realtime database to store baby nutrition data and the login method using Firebase Auth.",
    description:
      "The ePosyandu application is to record the development of the nutritional status of infants and toddlers from 0 to 5 years during the ongoing posyandu activities which can display the results of data visualization such as obesity, above normal, normal, below normal and malnutrition",
    image: sikaProfile,
  },
];


export default dataExperience