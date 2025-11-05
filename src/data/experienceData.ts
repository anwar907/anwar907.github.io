import { ExperienceData } from '../types';

// Import images
import antmHome from '../assets/img/antm/home-bg.png';
import bookLogin from '../assets/img/bookingninjas/login.png';
import foodHome from '../assets/img/food/home.svg';
import foxHome from '../assets/img/foxlogger/foxhome-bg.png';
import gkHome from '../assets/img/gokampus/home-bg.png';
import lingoDashboard from '../assets/img/lingo/dashboard.svg';
import lompaqHome from '../assets/img/lompaq/category.png';
import sikaProfile from '../assets/img/sika/profile.png';



export const experienceData: ExperienceData[] = [
  {
    id: "lompaq",
    title: "Lompaq ",
    url: "https://lompaq.com",
    tools: "Flutter, Dart, Supabase, Postgres, Clarity, Sentry, Bloc.",
    description: "A financial journal app that helps you track, analyze, and optimize your daily expenses with cutting-edge technology.",
    image: lompaqHome,
  },
  {
    id: "antm",
    title: "Antam Logam Mulia",
    url: "https://play.google.com/store/apps/details?id=com.antam.digitalgold",
    tools: "Flutter, Dart, REST API, Xendit, Cypress, Jira, Sentry, MixPanel, GetX.",
    description: "ANTAM Logam Mulia. Melayani pembelian emas secara online, praktis & aman serta memberikan informasi update grafik harga emas antam terkini. UBPP Logam Mulia berkembang menjadi satu-satunya refinery di Indonesia yang masuk dalam Good Delivery List LBMA (London Bullion Market Association) dengan produk emas batangan sebagai top brand di Indonesia yang memberikan jaminan keaslian dan kemurnian 999.9%.",
    image: antmHome,
  },
  {
    id: "gokampus",
    title: "goKampus",
    url: "https://play.google.com/store/apps/details?id=com.and.gokampus",
    tools: "Flutter, Dart, REST API, Xendit, Cypress, Jira, Sentry, MixPanel, GetX.",
    description: "GoKampus adalah pintu gerbang Anda menuju pembelajaran berkelanjutan dan peningkatan karier. Dengan bermitra dengan institusi terkemuka, baik di Indonesia maupun global, yakni Amazon Web Services (AWS), Merry Riana, Alterra Academy, Tokopedia Academy, dan lainnya.",
    image: gkHome,
  },
  {
    id: "todostaff",
    title: "Bookingninjas",
    url: "https://www.bookingninjas.com/",
    tools: "Flutter, Dart, GetX, Integration Salesforce API.",
    description: "Booking Ninjas Staff App merampingkan manajemen staf, mengoptimalkan operasi, dan meningkatkan layanan tamu. Terhubung dengan mulus ke akun Booking Ninjas utama Anda, aplikasi canggih ini memungkinkan staf Anda mengelola tugas secara efisien.",
    image: bookLogin,
  },
  {
    id: "foxlogger",
    title: "Foxlogger",
    url: "https://play.google.com/store/apps/details?id=com.vneu.foxlogger",
    tools: "Dart, Flutter, Google Maps, Api Testing, Jira, Click up, Google Play Service, App Store Connect, MQTT Client, github, Bloc.",
    description: "Where are all my hundreds operational vehicles now? Find the best answer with Fox Logger. Just log in into your account then you can easily find out where are they now and what they did (car, motorcycle, trucks, ambulance, heavy duty, moving assets, etc).",
    image: foxHome,
  },
  {
    id: "lingo",
    title: "LingoTalk",
    url: "https://lingotalk.org/",
    tools: "Flutter, Dart, Widget Testing, Google Play Service, Apps Store Connect, gitlab, Jira, Trello, GetX.",
    description: "LingoTalk is a language learning platform in Indonesia with a wide selection of languages that you can learn, from English, Mandarin, Korean, Indonesian, Japanese, Thai, Arabic, French, Spanish, to German.",
    image: lingoDashboard,
  },
  {
    id: "food",
    title: "Food Market",
    url: "",
    tools: "Flutter, Dart, REST API, Xendit, Cypress, Jira, Sentry, MixPanel, GetX.",
    description: "In this class I learned how to build iOS and Android applications for online food ordering (such as GrabFood or GoFood). Starting from the design-to-code slicing stage to creating a special API using Laravel version 8.",
    image: foodHome,
  },
  {
    id: "sika",
    title: "Aplikasi SIKA",
    url: "",
    tools: "This application was developed using the Flutter and Firebase framework as a realtime database to store baby nutrition data and the login method using Firebase Auth.",
    description: "The ePosyandu application is to record the development of the nutritional status of infants and toddlers from 0 to 5 years during the ongoing posyandu activities which can display the results of data visualization such as obesity, above normal, normal, below normal and malnutrition",
    image: sikaProfile,
  },
];