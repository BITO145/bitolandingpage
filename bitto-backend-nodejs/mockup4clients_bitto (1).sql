-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 25, 2025 at 10:47 AM
-- Server version: 8.0.43
-- PHP Version: 8.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mockup4clients_bitto`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutnew`
--

CREATE TABLE `aboutnew` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_description` text COLLATE utf8mb4_unicode_ci,
  `point_1_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_icon1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_heading1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_description1` text COLLATE utf8mb4_unicode_ci,
  `point_1_icon2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_heading2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_description2` text COLLATE utf8mb4_unicode_ci,
  `point_1_icon3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_heading3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_1_description3` text COLLATE utf8mb4_unicode_ci,
  `point_2_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_description` text COLLATE utf8mb4_unicode_ci,
  `point_2_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_icon1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_heading1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_description1` text COLLATE utf8mb4_unicode_ci,
  `point_2_icon2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_heading2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_description2` text COLLATE utf8mb4_unicode_ci,
  `point_2_icon3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_heading3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_2_description3` text COLLATE utf8mb4_unicode_ci,
  `point_2_caption` text COLLATE utf8mb4_unicode_ci,
  `point_3_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_3_description` text COLLATE utf8mb4_unicode_ci,
  `point_3_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `point_3_caption` text COLLATE utf8mb4_unicode_ci,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aboutnew`
--

INSERT INTO `aboutnew` (`id`, `title`, `slug`, `point_1_title`, `point_1_description`, `point_1_image`, `point_1_icon1`, `point_1_heading1`, `point_1_description1`, `point_1_icon2`, `point_1_heading2`, `point_1_description2`, `point_1_icon3`, `point_1_heading3`, `point_1_description3`, `point_2_title`, `point_2_subtitle`, `point_2_description`, `point_2_image`, `point_2_icon1`, `point_2_heading1`, `point_2_description1`, `point_2_icon2`, `point_2_heading2`, `point_2_description2`, `point_2_icon3`, `point_2_heading3`, `point_2_description3`, `point_2_caption`, `point_3_title`, `point_3_description`, `point_3_image`, `point_3_caption`, `created_at`, `updated_at`) VALUES
(1, 'Our Journey & Social Impact', 'our-journey-social-impact', 'Lachhuar: A Story of Revival and Pride', 'Under the visionary leadership of Shri Chirag Paswan, Lachhuar—birthplace of Bhagwan Mahavir—has emerged as a symbol of transformation.', 'uploads/about/lachhuar.jpg', 'fa-university', 'Infrastructure Upgrades', 'A Jain temple, a 108-bed hospital, and a state-of-the-art guesthouse.', 'fa-praying-hands', 'Spiritual Tourism Boom', 'Lachhuar integrated into the Jain Circuit, attracting over 10 lakh visitors annually.', 'fa-chart-line', 'Economic Growth', '₹1000 crore investment turned Jamui into one of Bihar’s fastest-developing districts.', 'Bihar Skill University: Shaping Futures', 'Empowering Youth Through Education', 'BITO supports Bihar Skill University to equip students with future-ready skills and industry knowledge.', 'uploads/about/bsu.jpg', 'fa-lightbulb', 'Modern Curriculum', 'Emphasis on innovation and entrepreneurship.', 'fa-cogs', 'Practical Training', 'Hands-on training with top industries.', 'fa-star', 'A Bright Future', 'Thousands of students empowered for a better tomorrow.', '“This is more than just a university—it’s a promise to our youth that no dream is too big, no goal too far.”', 'BITO Multi-Specialty Hospital: A Lifeline for Bihar', 'BITO’s 108-bed hospital in Lachhuar serves countless families with accessible, specialized healthcare.', 'uploads/about/hospital.jpg', '“For every mother who worried about her child’s health—this hospital stands as a symbol of compassion and care.”', '2025-07-04 12:29:10', '2025-07-04 12:29:10');

-- --------------------------------------------------------

--
-- Table structure for table `actionpoints`
--

CREATE TABLE `actionpoints` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_home` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `actionpoints`
--

INSERT INTO `actionpoints` (`id`, `name`, `slug`, `title`, `icon`, `description`, `status`, `deleted_at`, `created_at`, `updated_at`, `is_home`) VALUES
(1, 'Business Connect and Stakeholder Engagement', 'business-connect', 'Business Connect and Stakeholder Engagement', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877801_desktop.png', 'Facilitating connections with key stakeholders, industry associations, and government bodies. Organizing networking events to foster collaboration and partnerships.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:43:21', 0),
(2, 'Helpline For NRI and Biharis', 'helpline-nri-biharis', 'Helpline For NRI and Biharis', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877835_desktop.png', 'Helping with local authorities for utility connections and other essential services.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:43:55', 0),
(3, 'Bihari Voice', 'bihari-voice', 'Bihari Voice', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877845_desktop.png', 'Collaborating with legal experts to navigate complex legal frameworks. Providing tax advisory services to optimize fiscal strategies and reduce potential liabilities.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:44:05', 0),
(4, 'Customized Business Solutions For Start Up', 'customized-business', 'Customized Business Solutions For Start Up', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751878546_desktop.png', 'Tailoring solutions based on the specific needs of the foreign company. Assisting in establishing local partnerships and building a network within the Indian business ecosystem.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:55:46', 0),
(5, 'Human Resources Support', 'human-resources-support', 'Human Resources Support', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877880_desktop.png', 'Offering assistance in recruiting local talent and understanding labor laws. Providing guidance on cultural integration and workforce management.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:44:40', 0),
(6, 'Infrastructure and Location', 'infrastructure-location', 'Infrastructure and Location', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877892_desktop.png', 'Identifying suitable office locations and assisting in setting up necessary infrastructure.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:44:52', 0),
(7, 'Regulatory and Compliance Advisory', 'regulatory-compliance-advisory', 'Regulatory and Compliance Advisory', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877908_desktop.png', 'Offering insights into India\'s regulatory landscape to ensure compliance with local laws and regulations. Facilitating the necessary permits and approvals required for smooth operations.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:45:08', 0),
(8, 'Feasibility Study and Market Entry Assistance', 'feasibility-study-market-entry', 'Feasibility Study and Market Entry Assistance', 'https://admin.mockup4clients.com/public/uploads/actionpoints/1751877922_desktop.png', 'Conducting market research to identify potential opportunities and challenges. Providing guidance on suitable entry strategies, such as joint ventures, wholly-owned subsidiaries, or partnerships.', 1, NULL, '2025-07-07 08:39:36', '2025-07-07 08:45:22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `role_id` int UNSIGNED NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `mobile`, `image`, `password`, `role_id`, `remember_token`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'rahul@digitalxplode.com', '1234567890', 'public/uploads/images/1646225150.png', '$2a$12$hxEmMMuLgG2vpJKyPZvOceknqtpQdraQHwjHK/FAi88pdQnMBjm4W', 1, 'UxQ6dASFpQwP95Oi3ggTGV4RnGb5Inzp705ClftQAXVTrVBlMWrKPzFPwFBo', 1, NULL, '2022-02-27 23:54:38', '2024-11-11 06:26:04');

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` bigint UNSIGNED NOT NULL,
  `event_id` int NOT NULL,
  `name` varchar(250) NOT NULL,
  `sort_order` int NOT NULL,
  `status` tinyint NOT NULL COMMENT '1 = Active , 2 = InActive',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Table structure for table `album_images`
--

CREATE TABLE `album_images` (
  `id` bigint UNSIGNED NOT NULL,
  `event_id` int NOT NULL,
  `image` varchar(250) NOT NULL,
  `sort_order` int NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `album_images`
--

INSERT INTO `album_images` (`id`, `event_id`, `image`, `sort_order`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'public/uploads/event/20231124055016_14.jpg', 1, NULL, '2023-11-24 05:50:16', '2023-11-24 05:50:16'),
(2, 1, 'public/uploads/event/20231124055115_61.jpg', 2, NULL, '2023-11-24 05:51:15', '2023-11-24 05:51:15'),
(3, 1, 'public/uploads/event/20231124055115_94.jpg', 3, NULL, '2023-11-24 05:51:15', '2023-11-24 05:51:15'),
(4, 1, 'public/uploads/event/20231124055115_39.jpg', 4, NULL, '2023-11-24 05:51:15', '2023-11-24 05:51:15'),
(5, 2, 'public/uploads/event/20231124055402_34.jpg', 1, NULL, '2023-11-24 05:54:02', '2023-11-24 05:54:02'),
(6, 2, 'public/uploads/event/20231124055402_17.jpg', 2, NULL, '2023-11-24 05:54:02', '2023-11-24 05:54:02'),
(7, 2, 'public/uploads/event/20231124055402_73.jpg', 3, NULL, '2023-11-24 05:54:02', '2023-11-24 05:54:02');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `image` varchar(250) NOT NULL,
  `sort_order` int NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `name`, `title`, `url`, `image`, `sort_order`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(8, 'First Banner', 'First Banner', '/membership', 'public/uploads/banners/1751276005.jpg', 1, 1, NULL, '2024-06-24 07:19:36', '2025-06-30 09:48:37');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `sort_description` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `post_by` varchar(250) NOT NULL,
  `description` longtext NOT NULL,
  `sort_order` int NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `slug`, `title`, `sort_description`, `image`, `post_by`, `description`, `sort_order`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'it-s-all-a-one-big-story-it-s-all-namaha', 'IT’S ALL A ONE BIG STORY,  IT’S ALL “NAMAHA”', '-', 'public/uploads/blog/1718623686.jpg', 'Blog Writer', '“Am I the finite body I am given or the infinite mind in it?” asked sage Atri\r\n\r\nNamaha: Stories from the Land of Gods and Goddesses  by Abhishek Singh brings together a collection of short stories inspired by the ancient wisdom literature of India. Stories that Singh believes to have traveled to us from a time where illuminated minds learnt from the forest and stars. Through richly illustrated visuals, Singh re-imagines Vedantic, Puranic, and Upanishadic texts, intending to take the reader right into the center of the conversation unfolding between the seeker and the source. \r\n\r\n“Who am I in this great design?” asked sage Atri. Transcending conventional storytelling, these stories illuminate the reader to the realization that “You are all of it and nothing at all.” \r\n\r\n“OM” is the sound of the universe, the Birth. ‘Shivay’ is the point of dissolution, where creation blends into the silence of nothingness, the End. “Namaha” is everything in between. The bridge between the mysterious origins of the beginning and the inevitable end. A place where all the beginnings one is born with, bleeds into a palpable substance called “Life”. \r\n\r\nJust as eyes cannot see the intricate systems that sustain the miracle of life within us, there is a wealth of subtle and symbolic essence woven into these stories, only revealed when examined closely.\r\n\r\nGrab your copy today for a closer look!', 1, 1, NULL, '2023-07-06 23:30:10', '2024-09-19 09:41:41'),
(2, 'about-blog', 'About Blog', 'About Us Blog', 'public/uploads/blog/1690883420.png', 'The Big Writer', 'Wonder House Books is more than just a publishing programme, it is a philosophy.\r\n\r\nWe understand that a child\'s early years are the most important and this is when they learn the most about the world around them. Books play a vital role in building the foundations for learning, and exposure to quality books from an early age helps to develop an enquiring mind and a lifelong love of reading.\r\n\r\nWonder House Books an award-winning publisher has a history of creating innovative, for children from 0-7 years that promote learning through play. Books that fully reflect our diverse society in terms of heritage, disability, gender and family.\\\r\n\r\nWonder House Books are loved by parents, teachers and, most importantly, children all over the world.', 2, 0, '2023-11-16 06:16:04', '2023-07-19 04:33:03', '2023-11-16 06:16:04'),
(3, 'a-prayer-uniting-all-purnam', '“A prayer uniting all”- Purnam', 'Purnam', 'public/uploads/blog/1706607298.jpg', 'Wonder House Books', '“Mother, what was there in the beginning?”  asked Jiva from the Devi. \r\n\r\nPurnam- Stories & Wisdom of the Feminine Divine encapsulating stories older than their own beginning, is a tribute to the ancient philosophies of the Goddess. It serves as a poignant reminder of the importance of honoring and embracing the feminine principle. From fierce warriors to nurturing mothers, from creative muses to wise sages, each story serves as a mirror reflecting different facets of the feminine divine. Through richly illustrated visuals, Singh breathes life into the age-old tales providing deep insights into the essence of existence and the interconnectedness that binds all aspects of life. \r\n\r\n“What would this energy become in the coming time, O Adinath?” asked Parvati. Transcending conventional storytelling, Purnam illuminates the path towards deeper self-discovery, compassion, and spiritual enlightenment.\r\n\r\n“When humanity will meet the sun within, it’s then that the Kundalini will be truly awakened” answered Mahesh.\r\n\r\nGet your copy of Purnam to witness the beginning, the end, and all that remained.', 1, 1, NULL, '2024-01-30 09:20:41', '2024-09-19 09:41:43');

-- --------------------------------------------------------

--
-- Table structure for table `bodies`
--

CREATE TABLE `bodies` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `mubtitle` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_keyword` text,
  `meta_description` text,
  `slug` varchar(255) NOT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `simage` varchar(255) DEFAULT NULL,
  `mimage` varchar(255) DEFAULT NULL,
  `eimage` varchar(255) DEFAULT NULL,
  `timage` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `nubtitle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bodies`
--

INSERT INTO `bodies` (`id`, `name`, `subtitle`, `mubtitle`, `title`, `description`, `meta_title`, `meta_keyword`, `meta_description`, `slug`, `is_home`, `status`, `simage`, `mimage`, `eimage`, `timage`, `created_at`, `updated_at`, `deleted_at`, `nubtitle`) VALUES
(1, 'BITO Bodies', 'BITO Startup & Incubation Centre (BSIC)', 'BITO Bihar Asmita Foundation', 'BITO Bodies', '<p>BITO Arms are specialized divisions within the Bihar International Trade Organization that focus on different aspects of its mission</p>', 'Mission Statement Meta Title', 'mission, empowerment, communities, development', 'This mission aims to empower communities, preserve cultures, and promote global collaboration.', 'old-site/about.php', 1, 1, 'https://example.com/images/mission-simage.jpg', 'https://admin.mockup4clients.com/public/uploads/bodies/1751440920_mobile.png', 'https://admin.mockup4clients.com/public/uploads/bodies/1751367199_desktop.png', 'https://admin.mockup4clients.com/public/uploads/bodies/1751367199_mobile.png', '2025-07-01 08:00:00', '2025-07-04 10:12:30', NULL, 'BITO Industries Association (BIA)');

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `interest` varchar(255) NOT NULL,
  `employment` varchar(255) NOT NULL,
  `resume` varchar(255) NOT NULL,
  `letter` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `name`, `phone`, `email`, `interest`, `employment`, `resume`, `letter`, `comments`, `deleted_at`, `created_at`, `updated_at`) VALUES
(2, 'Sem', '9785869100', 'ayt1@gmail.com', 'Copyeditor / Proofreader', '2', 'public/uploads/career/1692421337_80.pdf', 'public/uploads/career/1692421337_15.pdf', 'sdfsdfsdfsdafafd', NULL, '2023-08-18 23:32:17', '2023-08-18 23:32:17'),
(3, 'Php', '9785869101', 'ayeeet1@gmail.com', 'Graphic Designer', '2', 'public/uploads/career/1692431842_19.pdf', 'public/uploads/career/1692431842_29.pdf', 'ergwergewrgwrg', NULL, '2023-08-19 02:27:22', '2023-08-19 02:27:22'),
(6, 'tarun', '9423463638', 'admin@admin.com', 'sports', '1', 'public/uploads/career/1692951204_73.pdf', 'public/uploads/career/1692951204_50.pdf', 'dsfds', NULL, '2023-08-25 02:43:24', '2023-08-25 02:43:24'),
(7, 'Seema fareen', '8076494946', 'sfareen874@gmail.com', 'Back office', '2', 'public/uploads/career/1701815919_72.pdf', 'public/uploads/career/1701815919_64.pdf', 'Please update', NULL, '2023-12-05 22:38:39', '2023-12-05 22:38:39'),
(8, 'Seema fareen', '8076494946', 'sfareen874@gmail.com', 'Back office', '2', 'public/uploads/career/1701815935_27.pdf', 'public/uploads/career/1701815935_87.pdf', 'Please update', NULL, '2023-12-05 22:38:55', '2023-12-05 22:38:55'),
(9, 'Balasubramanian', '9148977113', 'dbala007@yahoo.com', 'editor role', '1', 'public/uploads/career/1706606281_24.pdf', 'public/uploads/career/1706606281_11.pdf', 'na na \r\n\r\nna\r\n\r\nna', NULL, '2024-01-30 09:18:01', '2024-01-30 09:18:01'),
(10, 'Shivanshie Garg', '7888432582', 'shivanshie1999@yahoo.in', 'Editorial department', '2', 'public/uploads/career/1707105424_76.pdf', 'public/uploads/career/1707105424_10.pdf', 'If there are no vacancies in the departmnent as of now, I am also open to internships.', NULL, '2024-02-05 03:57:04', '2024-02-05 03:57:04'),
(11, 'nitish kumar', '7780066594', 'roynitishkumar32@gmail.com', 'e-commerce specialist', '2', 'public/uploads/career/1707231376_67.pdf', 'public/uploads/career/1707231376_83.pdf', 'I would like to join your organization , kindly consider our resume and let me know if i am fit for your organization.', NULL, '2024-02-06 14:56:16', '2024-02-06 14:56:16'),
(12, 'Esha Shukla', '9810943344', 'jseshashukla777@gmail.com', 'Copywriter', '1', 'public/uploads/career/1708528579_79.pdf', 'public/uploads/career/1708528579_32.pdf', 'It would be my honour to get a chance to work with Wonder House Books and create magic for the world. I want to learn and expand my skillset and I am confident that I will be an asset to your company.\r\nKindly consider me.\r\nThank you\r\nEsha Shukla', NULL, '2024-02-21 15:16:19', '2024-02-21 15:16:19'),
(13, 'Anitta Yoppan', '7034767276', 'anittayoppanpanicker@gmail.com', 'Marketing', '2', 'public/uploads/career/1708864316_66.pdf', 'public/uploads/career/1708864316_35.pdf', 'Please let me know if you would like need to see my previous works. If there is anything please give me a shout.', NULL, '2024-02-25 12:31:56', '2024-02-25 12:31:56'),
(14, 'khalid fazal', '9990425335', 'khalidfazal25@gmail.com', 'book designing', '2', 'public/uploads/career/1710314000_55.pdf', 'public/uploads/career/1710314000_22.pdf', 'hello this is khalid i am applying for graphic desiginer', NULL, '2024-03-13 07:13:20', '2024-03-13 07:13:20'),
(15, 'khalid fazal', '9990425335', 'khalidfazal25@gmail.com', 'book designing', '2', 'public/uploads/career/1710314101_44.pdf', 'public/uploads/career/1710314101_71.pdf', 'hello this is khalid i am applying for graphic desiginer', NULL, '2024-03-13 07:15:01', '2024-03-13 07:15:01'),
(16, 'Careers', '7060421033', 'rahul@digitalxplode.com', 'Careers', '2', 'public/uploads/career/1711974468_51.pdf', 'public/uploads/career/1711974468_47.pdf', '', NULL, '2024-04-01 12:27:48', '2024-04-01 12:27:48'),
(17, 'Rahul Singh', '7060421033', 'rahul@digitalxplode.com', 'Careers', '2', 'public/uploads/career/1712036961_48.pdf', 'public/uploads/career/1712036961_38.pdf', 'careers', NULL, '2024-04-02 05:49:21', '2024-04-02 05:49:21'),
(18, 'Himanshu Goyal', '9555585252', 'harshita.shubhamgoyal@gmail.com', 'Customer service', '2', 'public/uploads/career/1712569841_92.pdf', 'public/uploads/career/1712569841_58.pdf', 'Resume', NULL, '2024-04-08 09:50:41', '2024-04-08 09:50:41'),
(19, 'Riddhi Chaudhry', '9971666783', 'riddhi.chaudhry@nift.ac.in', 'Illustration Internship', '2', 'public/uploads/career/1714648396_87.pdf', 'public/uploads/career/1714648396_98.pdf', '', NULL, '2024-05-02 11:13:16', '2024-05-02 11:13:16'),
(32, 'Rahul Singh', '7060421033', 'rahul@digitalxplode.com', 'new task', '1', 'public/uploads/career/1716536104_98.pdf', 'public/uploads/career/1716536104_20.pdf', 'fsas', NULL, '2024-05-24 07:35:04', '2024-05-24 07:35:04'),
(33, 'Testing', '9999999999', 'test@gmail.com', 'Sales & Marketing', '2', 'public/uploads/career/1716615380_10.pdf', 'public/uploads/career/1716615380_74.pdf', '', NULL, '2024-05-25 05:36:20', '2024-05-25 05:36:20'),
(34, 'Muralidar S.', '8818954234', 'muralidar.work@gmail.com', 'Mid-senior/Senior positions', '2', 'public/uploads/career/1716832511_24.pdf', 'public/uploads/career/1716832511_30.pdf', '', NULL, '2024-05-27 17:55:11', '2024-05-27 17:55:11'),
(35, 'Rahul Singh', '7060421033', 'rahul@digitalxplode.com', 'Careers', '2', 'public/uploads/career/1716969313_54.pdf', 'public/uploads/career/1716969313_100.pdf', 'dff', NULL, '2024-05-29 07:55:13', '2024-05-29 07:55:13'),
(36, 'Pritam', '9711480444', 'pritam.ahluwalia@rediffmail.com', 'Public Speech and product presentation', '1', 'public/uploads/career/1717049851_64.pdf', 'public/uploads/career/1717049851_32.pdf', 'Files are not uploading.', NULL, '2024-05-30 06:17:31', '2024-05-30 06:17:31'),
(37, 'Nishita Shah', '9699701411', 'ns.nshah95@gmail.com', 'Content design & graphic design', '2', 'public/uploads/career/1717160315_36.pdf', 'public/uploads/career/1717160315_61.pdf', '', NULL, '2024-05-31 12:58:35', '2024-05-31 12:58:35'),
(38, 'deepak makwana', '9711983802', 'deepgauridivu@gmail.com', 'freelance colouring artist', '1', 'public/uploads/career/1717380007_41.pdf', 'public/uploads/career/1717380007_64.pdf', 'hi me deepak freelance artist is there any work for me kindly let me know.', NULL, '2024-06-03 02:00:07', '2024-06-03 02:00:07'),
(39, 'Asif Sohail', '8108925542', 'asifsohail14@gmail.com', 'DTP', '2', 'public/uploads/career/1718141642_93.pdf', 'public/uploads/career/1718141642_76.pdf', '', NULL, '2024-06-11 21:34:02', '2024-06-11 21:34:02'),
(40, 'Tay Khan', '7500752799', 'tayabah19@gmail.com', 'Freelance editorial', '2', 'public/uploads/career/1718280554_60.pdf', 'public/uploads/career/1718280554_84.pdf', '', NULL, '2024-06-13 12:09:14', '2024-06-13 12:09:14'),
(41, 'Himanshu', '9355488410', 'Himanshu56789kumar@gmail.com', 'Editor, Content Writer', '2', 'public/uploads/career/1718644406_41.pdf', 'public/uploads/career/1718644406_75.pdf', '', NULL, '2024-06-17 17:13:26', '2024-06-17 17:13:26'),
(42, 'Neha Jain', '7428224339', 'shani94mas@gmail.com', 'Health and wellness, food and nutrition, science', '1', 'public/uploads/career/1719035819_41.pdf', 'public/uploads/career/1719035819_20.pdf', '', NULL, '2024-06-22 05:56:59', '2024-06-22 05:56:59'),
(43, 'Karyna', '0667335943', 'gulfmell@gmail.com', 'Intenship in illustration', '1', 'public/uploads/career/1719131682_73.pdf', 'public/uploads/career/1719131682_40.pdf', '', NULL, '2024-06-23 08:34:42', '2024-06-23 08:34:42'),
(44, 'Shrey Gagneja', '8512839101', 'shreygagneja@gmail.com', 'Graphic Designing', '2', 'public/uploads/career/1719293692_14.pdf', 'public/uploads/career/1719293692_69.pdf', '', NULL, '2024-06-25 05:34:52', '2024-06-25 05:34:52'),
(45, 'Vivek Kumar Sharma', '8587820384', 'theone23arjun@gmail.com', 'Marketing Excutive', '2', 'public/uploads/career/1720078458_28.pdf', 'public/uploads/career/1720078458_21.pdf', '', NULL, '2024-07-04 07:34:18', '2024-07-04 07:34:18'),
(46, 'LAKSHMI', '7827752217', 'lakshmiarya0018@gmail.com', 'Account', '2', 'public/uploads/career/1720613164_45.pdf', 'public/uploads/career/1720613164_76.pdf', 'good knowlege account', NULL, '2024-07-10 12:06:04', '2024-07-10 12:06:04'),
(47, 'LAKSHMI', '7827752217', 'lakshmiarya0018@gmail.com', 'Account', '2', 'public/uploads/career/1720613179_98.pdf', 'public/uploads/career/1720613179_26.pdf', 'good knowlege account', NULL, '2024-07-10 12:06:19', '2024-07-10 12:06:19'),
(48, 'LAKSHMI', '7827752217', 'lakshmiarya0018@gmail.com', 'Account', '2', 'public/uploads/career/1720613180_36.pdf', 'public/uploads/career/1720613180_30.pdf', 'good knowlege account', NULL, '2024-07-10 12:06:20', '2024-07-10 12:06:20'),
(49, 'Keshav Kumar', '8650401501', 'keshavk8650@gmail.com', 'Assistant Manager - Administration', '2', 'public/uploads/career/1720613674_59.pdf', 'public/uploads/career/1720613674_98.pdf', 'Dear Sir/Ma\'am,\r\nPlease find attached my resume for the above mentioned position. I am having 13 years of work experience in the administration. If you have any relevant opening, please consider my profile for the same.\r\nThanking you', NULL, '2024-07-10 12:14:34', '2024-07-10 12:14:34'),
(50, 'Keshav Kumar', '8650401501', 'keshavk8650@gmail.com', 'Assistant Manager - Administration', '2', 'public/uploads/career/1720613716_19.pdf', 'public/uploads/career/1720613716_21.pdf', 'Dear Sir/Ma\'am,\r\nPlease find attached my resume for the above mentioned position. I am having 13 years of work experience in the administration. If you have any relevant opening, please consider my profile for the same.\r\nThanking you', NULL, '2024-07-10 12:15:16', '2024-07-10 12:15:16'),
(51, 'Akhil Madan', '9711352788', 'akhil_madan1@rediffmail.com', 'Back office, Customer Support', '2', 'public/uploads/career/1721560270_33.pdf', 'public/uploads/career/1721560270_26.pdf', 'Dear Sir\r\n\r\nPlease check my attached resume and kindly let me know if there is any opening.\r\n\r\nThanks & Regards\r\nAkhil Madan\r\n9711352788', NULL, '2024-07-21 11:11:10', '2024-07-21 11:11:10'),
(52, 'Delilah Fernandes', '9769792597', 'fernandesdelilah@hotmail.com', 'Children\'s Picture Book Illustration', '2', 'public/uploads/career/1722669619_61.pdf', 'public/uploads/career/1722669619_12.pdf', '', NULL, '2024-08-03 07:20:19', '2024-08-03 07:20:19'),
(53, 'ARUNDHATI G', '9650610704', 'myresearchlab.arundhati@gmail.com', 'Book cover design, Editing, content writing, business development', '1', 'public/uploads/career/1722938388_66.pdf', 'public/uploads/career/1722938388_71.pdf', '', NULL, '2024-08-06 09:59:48', '2024-08-06 09:59:48'),
(54, 'POONAM SHARMA', '9911923823', 'poonam.gautam088@gmail.com', 'Operations, Backend, Customer Care & Front Desk', '2', 'public/uploads/career/1722961172_82.pdf', 'public/uploads/career/1722961172_24.pdf', '', NULL, '2024-08-06 16:19:32', '2024-08-06 16:19:32'),
(55, 'Jai Sudha', '8147300329', 'ss1132662@gmail.com', 'Book store admin', '2', 'public/uploads/career/1723113723_70.pdf', 'public/uploads/career/1723113723_22.pdf', '', NULL, '2024-08-08 10:42:03', '2024-08-08 10:42:03'),
(56, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Administrator', '2', 'public/uploads/career/1723299136_60.pdf', 'public/uploads/career/1723299136_45.pdf', '', NULL, '2024-08-10 14:12:16', '2024-08-10 14:12:16'),
(57, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Administrator', '2', 'public/uploads/career/1723558439_13.pdf', 'public/uploads/career/1723558439_65.pdf', '', NULL, '2024-08-13 14:13:59', '2024-08-13 14:13:59'),
(58, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Administrator', '2', 'public/uploads/career/1723906066_100.pdf', 'public/uploads/career/1723906066_23.pdf', '', NULL, '2024-08-17 14:47:46', '2024-08-17 14:47:46'),
(59, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Administrator', '2', 'public/uploads/career/1723906069_10.pdf', 'public/uploads/career/1723906069_17.pdf', '', NULL, '2024-08-17 14:47:49', '2024-08-17 14:47:49'),
(60, 'Simran Jaiswal', '8240965684', 'simranjais4d@gmail.com', 'Coloring Pages development', '1', 'public/uploads/career/1723973061_16.pdf', 'public/uploads/career/1723973061_10.pdf', '', NULL, '2024-08-18 09:24:21', '2024-08-18 09:24:21'),
(61, 'Monica Sharma', '9505389811', 'ms.bioacademy@gmail.com', 'Graphic design (story book creator)', '1', 'public/uploads/career/1724042022_31.pdf', 'public/uploads/career/1724042022_18.pdf', '', NULL, '2024-08-19 04:33:42', '2024-08-19 04:33:42'),
(62, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Executive administrator', '2', 'public/uploads/career/1724271154_11.pdf', 'public/uploads/career/1724271154_75.pdf', '', NULL, '2024-08-21 20:12:34', '2024-08-21 20:12:34'),
(63, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Executive administrator', '2', 'public/uploads/career/1724271155_63.pdf', 'public/uploads/career/1724271155_10.pdf', '', NULL, '2024-08-21 20:12:35', '2024-08-21 20:12:35'),
(64, 'Utkarsha', '8800966766', 'utkarsharai882@gmail.com', 'Editorial roles', '2', 'public/uploads/career/1724492285_90.pdf', 'public/uploads/career/1724492285_19.pdf', '', NULL, '2024-08-24 09:38:05', '2024-08-24 09:38:05'),
(65, 'Moinak Chatterjee', '8586052220', 'moinak.chatterjee@gmail.com', 'Content Writer', '2', 'public/uploads/career/1724758321_90.pdf', 'public/uploads/career/1724758321_51.pdf', '', NULL, '2024-08-27 11:32:01', '2024-08-27 11:32:01'),
(66, 'Moinak Chatterjee', '8586052220', 'moinak.chatterjee@gmail.com', 'Content Writer', '2', 'public/uploads/career/1724758325_82.pdf', 'public/uploads/career/1724758325_91.pdf', '', NULL, '2024-08-27 11:32:05', '2024-08-27 11:32:05'),
(67, 'Utkarsha', '8800966766', 'utkarsharai882@gmail.com', 'Editorial roles', '2', 'public/uploads/career/1724848150_12.pdf', 'public/uploads/career/1724848150_75.pdf', '', NULL, '2024-08-28 12:29:10', '2024-08-28 12:29:10'),
(68, 'Priyanka', '9987935837', 'priyanka.dhruv696@gmail.com', 'Illustrator, Graphic designer', '1', 'public/uploads/career/1724915862_35.pdf', 'public/uploads/career/1724915862_74.pdf', 'Hello, I am exploring illustrator and designing opportunities. I have experience in designing picture books and textbooks. Looking forward to connect with you soon!', NULL, '2024-08-29 07:17:42', '2024-08-29 07:17:42'),
(69, 'Rishi Ballabh', '9717273482', 'dobriyalrishi15@gmail.com', 'Graphic Designer', '2', 'public/uploads/career/1725205202_54.pdf', 'public/uploads/career/1725205202_36.pdf', 'For Graphic Designer', NULL, '2024-09-01 15:40:02', '2024-09-01 15:40:02'),
(70, 'FAGUNI KAPOOR', '7454889742', 'fagunijjm@gmail.com', 'Editorial', '2', 'public/uploads/career/1726240443_99.pdf', 'public/uploads/career/1726240443_87.pdf', '', NULL, '2024-09-13 15:14:03', '2024-09-13 15:14:03'),
(71, 'Sachin Vaishampayan', '9450430955', 'sachinvshmpn@gmail.com', 'Operations and Partnerships', '2', 'public/uploads/career/1726916821_93.pdf', 'public/uploads/career/1726916821_38.pdf', '', NULL, '2024-09-21 11:07:01', '2024-09-21 11:07:01'),
(72, 'Sachin Vaishampayan', '9450430955', 'sachinvshmpn@gmail.com', 'Operations and Partnerships', '2', 'public/uploads/career/1726916822_21.pdf', 'public/uploads/career/1726916822_63.pdf', '', NULL, '2024-09-21 11:07:02', '2024-09-21 11:07:02'),
(73, 'Neer Tanwar', '7011709962', 'neer.tnwr@gmail.com', 'English, Social Science, Art, Psychology', '1', 'public/uploads/career/1727155995_51.pdf', 'public/uploads/career/1727155995_63.pdf', '', NULL, '2024-09-24 05:33:15', '2024-09-24 05:33:15'),
(74, 'Vandana Likhmania', '9205071183', 'vandanalikhmania@gmail.com', 'Social sciences and gender politics', '2', 'public/uploads/career/1727955986_95.pdf', 'public/uploads/career/1727955986_48.pdf', '', NULL, '2024-10-03 11:46:26', '2024-10-03 11:46:26'),
(75, 'Tanya Marina Brooks', '8822357572', 'brookstanyamarina@gmail.com', 'Language Development, Activity Designing, Training, Soft Skills Development, Personality Development', '2', 'public/uploads/career/1728747717_89.pdf', 'public/uploads/career/1728747717_48.pdf', '', NULL, '2024-10-12 15:41:57', '2024-10-12 15:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `cityone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `is_home` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `simage` varchar(255) DEFAULT NULL,
  `mimage` varchar(255) DEFAULT NULL,
  `nimage` varchar(255) DEFAULT NULL,
  `eimage` varchar(255) DEFAULT NULL,
  `timage` varchar(255) DEFAULT NULL,
  `pimage` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `citytwo` varchar(255) NOT NULL,
  `citythree` varchar(255) NOT NULL,
  `cityfour` varchar(255) NOT NULL,
  `cityfive` varchar(255) NOT NULL,
  `citysix` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`id`, `name`, `cityone`, `title`, `slug`, `is_home`, `status`, `simage`, `mimage`, `nimage`, `eimage`, `timage`, `pimage`, `created_at`, `updated_at`, `deleted_at`, `citytwo`, `citythree`, `cityfour`, `cityfive`, `citysix`) VALUES
(1, 'Our Global Chapters', 'SINGAPORE', 'Our Global Chapters', 'intro-to-programming', 1, 1, 'https://admin.mockup4clients.com/public/uploads/chapter/1751448586_desktop.jpeg', 'https://admin.mockup4clients.com/public/uploads/chapter/1751448642_mobile.jpeg', 'https://admin.mockup4clients.com/public/uploads/chapter/1751448469_desktop.jpg', 'https://admin.mockup4clients.com/public/uploads/chapter/1751448662_desktop.jpg', 'https://admin.mockup4clients.com/public/uploads/chapter/1751448680_mobile.jpg', 'https://admin.mockup4clients.com/public/uploads/chapter/1751448574_desktop.jpeg', '2025-07-01 13:03:24', '2025-07-02 09:53:48', NULL, 'DUBAI', 'SYDNEY', 'TOKYO', 'NEW YORK', 'LONDON');

-- --------------------------------------------------------

--
-- Table structure for table `cms`
--

CREATE TABLE `cms` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `cms_title` varchar(250) NOT NULL,
  `meta_title` varchar(250) NOT NULL,
  `meta_keyword` varchar(250) NOT NULL,
  `meta_description` varchar(250) NOT NULL,
  `cms_contant` mediumtext NOT NULL,
  `image` varchar(250) NOT NULL,
  `is_home` tinyint NOT NULL DEFAULT '0' COMMENT '0=cms, 1=home cms',
  `status` tinyint NOT NULL DEFAULT '1' COMMENT '0=Active, 1=InActive',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `cms_description` mediumtext CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `cms_subtitle` varchar(250) CHARACTER SET ucs2 COLLATE ucs2_general_ci NOT NULL,
  `image_desktop` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `image_mobile` varchar(250) CHARACTER SET ucs2 COLLATE ucs2_general_ci NOT NULL,
  `cms_sub_title` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `cms_new_description` mediumtext CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `cms_name_title` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `cms`
--

INSERT INTO `cms` (`id`, `slug`, `name`, `cms_title`, `meta_title`, `meta_keyword`, `meta_description`, `cms_contant`, `image`, `is_home`, `status`, `deleted_at`, `created_at`, `updated_at`, `cms_description`, `cms_subtitle`, `image_desktop`, `image_mobile`, `cms_sub_title`, `cms_new_description`, `cms_name_title`) VALUES
(1, 'meet', 'home page', 'Transform Bihar Together, We Can', 'meet', 'meet', 'home page', '<p>Dear All,<br />\r\n<br />\r\nI extend a warm welcome to you on behalf of Bihar International Trade Organization (BITO), a platform committed to advancing economic prosperity and cultural heritage in Bihar. At BITO, our mission revolves around shaping an &quot;Atma Nirbhar Bihar&quot; and fostering positive change through collaborative efforts.<br />\r\n<br />\r\nEmpowering Innovation with BITO Startup Incubator<br />\r\n<br />\r\nWe are excited to share our latest endeavor, the BITO Startup Incubator, a pivotal initiative fostering innovation and entrepreneurship. This initiative positions Bihar as a hub for creative ventures, contributing to the state&#39;s self-reliance.<br />\r\n<br />\r\nGlobal Collaboration for Economic Growth<br />\r\n<br />\r\nBITO has established chapters in 21 countries, strategically positioned to facilitate investments in Bihar. Our global presence is dedicated to accelerating economic growth and creating opportunities for both local and international investors.<br />\r\nCelebrating Bihar&#39;s Rich Cultural Heritage<br />\r\n<br />\r\nBihar is the cradle of cultural luminaries such as Mother Sita, Lord Buddha, Lord Mahavir, Guru Govind Singh, and many others. BITO is dedicated to promoting Bihar&#39;s rich cultural heritage globally, recognizing its potential for tourism and religious pilgrimage.<br />\r\n<br />\r\nEmbracing &quot;Bihari Asmita&quot;<br />\r\nJoin us in celebrating &quot;Bihari Asmita,&quot; where we take pride in declaring, &quot;Yes, I am Bihari.&quot; This affirmation encapsulates the essence of Bihar&#39;s cultural richness and the significant contributions of its people on the global stage.<br />\r\nTransform Bihar: Together We Can<br />\r\nWe invite you to embark on a transformative journey with BITO. &quot;Transform Bihar: Together We Can&quot; is not just a motto; it&#39;s an invitation to unite, share expertise, and collectively drive economic growth. Your involvement can make a significant impact, contributing to a brighter and more prosperous Bihar. Thank you for joining us on this exciting journey. Together, let&#39;s shape a future where Bihar thrives economically and culturally.<br />\r\n<br />\r\nWarm regards,<br />\r\nShri Chirag Paswan</p>', 'https://admin.mockup4clients.com/public/uploads/cms/1751281385.png', 0, 1, NULL, NULL, '2025-06-30 11:03:05', '<p>Dear All,<br />\r\n<br />\r\nI extend a warm welcome to you on behalf of Bihar International Trade Organization (BITO), a platform committed to advancing economic prosperity and cultural heritage in Bihar. At BITO, our mission revolves around shaping an &quot;Atma Nirbhar Bihar&quot; and fostering positive change through collaborative efforts.<br />\r\n<br />\r\nEmpowering Innovation with BITO Startup</p>', 'Chairman', 'https://admin.mockup4clients.com/public/uploads/cms/1751278978_desktop.png', 'https://admin.mockup4clients.com/public/uploads/cms/1751279041_mobile.jpg', 'Fostering Entrepreneurship, Innovation, and Global Connections', '<p>The Bihar International Trade Organization (BITO) is a key force for progress and unity for people, both in India and worldwide. Through a series of well-structured initiatives, BITO is dedicated to building a vibrant, cohesive, and prosperous community that transcends borders and generations.</p>\r\n\r\n<p>By focusing on economic growth, cultural preservation, and global engagement, BITO ensures that Bihar&rsquo;s contributions are not only recognized but celebrated worldwide.</p>', 'Shri Chirag Paswan');

-- --------------------------------------------------------

--
-- Table structure for table `cmsheader`
--

CREATE TABLE `cmsheader` (
  `id` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  `cmsheader_title` varchar(255) NOT NULL,
  `cmsheader_contant` varchar(255) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `cmsheader`
--

INSERT INTO `cmsheader` (`id`, `name`, `cmsheader_title`, `cmsheader_contant`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Contact Us Page Header', 'Contact Us', 'Contact us The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 07:31:03', '2023-08-19 02:14:15'),
(2, 'Authors List Page Header', 'Authors', 'Authors The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 07:51:08', NULL),
(3, 'About Us Page Header', 'About Us', 'About us The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English. ', 1, NULL, '2023-08-19 07:51:08', '2023-08-19 06:59:07'),
(4, 'Submission Page Header', 'Submission', 'Submission The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English. ', 1, NULL, '2023-08-19 07:55:08', NULL),
(5, 'Careers Page Header', 'Careers', 'Cateers The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 07:55:08', NULL),
(6, 'Blog Page Header ', 'Blog', 'Blogs The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 10:28:28', NULL),
(7, 'Books Page Header', 'Books', 'Books The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 12:30:24', NULL),
(8, 'New Releases Header', 'New Releases', 'New Release The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 12:30:24', NULL),
(9, 'Best Sellers Page Header', 'Best Sellers', 'Besr Sellers The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, '2023-08-19 12:32:21', NULL),
(10, 'Events Page Header', 'Events', 'Events The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. \'content here\', making it look like readable English.', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contactuses`
--

CREATE TABLE `contactuses` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `contactuses`
--

INSERT INTO `contactuses` (`id`, `name`, `phone`, `email`, `subject`, `message`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Ajit Sharma', '', 'kailasdhvishnoi@gmail.com', '7855246789', 'sdfsddsf', NULL, '2023-07-18 07:01:09', '2023-07-18 07:01:09'),
(2, 'Ravindra', '', 'ravindra@gmail.com', 'sdf', 'dfdsdsf', NULL, '2023-07-19 00:54:39', '2023-07-19 00:54:39'),
(3, 'kailash', '', 'kailashvishnoi@gmail.com', 'abc', 'sdfds', NULL, '2023-07-19 00:56:23', '2023-07-19 00:56:23'),
(4, 'kailash', '', 'kailashvishnoi7@gmail.com', '7855246789', 'sdfsd', NULL, '2023-07-21 23:40:24', '2023-07-21 23:40:24'),
(5, 'Dilpreet Kaur', '', 'dilpreetkaur@gmail.com', 'hello books', 'Books Please', NULL, '2023-07-31 00:50:19', '2023-07-31 00:50:19'),
(6, 'Amit Garg', '9414668678', 'emmanuelschooldholpur1988@gmail.com', 'Requesting Books Sample for School', 'We are a school in dholpur district of rajathan, we saw your book at amazon and find it interesting, we want to recommend parents of children at our school some children books, can you provide us the specimen books set', NULL, '2023-11-20 16:29:50', '2023-11-20 16:29:50'),
(7, 'Archana', '9710914586', 'archanadr14@gmail.com', 'Dealer details in chennai', 'Hi - I would like to purchase flag book with quantity of about 100. Can you let me know the dealer and best price per book ? I would like to get it by tomorrow', NULL, '2023-11-23 04:15:30', '2023-11-23 04:15:30'),
(8, 'Steve Richard', 'Ehdvvlvjxt', 'steve82991@gmail.com', 'question', 'am i ever going to get any support here? i\'m going to just file a chargeback if you can\'t get back to me... you guys are listed as support on this amazon listing https://amzn.to/46pmr71 - please get back to me asap... -Steve', NULL, '2023-11-23 05:04:44', '2023-11-23 05:04:44'),
(9, 'Anil', '9849121201', 'anil@reem.co.in', 'Our interest to sell your books/product', 'Kindly mail us your list books/products and the discounts, credit and other support \r\n\r\nThank you\r\n\r\nAnil', NULL, '2023-11-23 11:47:36', '2023-11-23 11:47:36'),
(10, 'Pranay Oswal', '9860276999', 'pranayoswal@iqube.org.in', 'Keen on collaboration', 'Kindly help me get in touch with someone from Head of Sales and Collaboration. \r\n\r\nThanks.\r\n\r\n\r\nPranay Oswal\r\nFounder & MD\r\nI Qube', NULL, '2023-11-23 23:53:42', '2023-11-23 23:53:42'),
(11, 'Anu Abraham', '8527880394', 'anu.abraham@prakashbooks.com', 'Other branches of the publication', 'I want to know if there are any other branch of the publication in India.', NULL, '2023-11-24 04:58:56', '2023-11-24 04:58:56'),
(12, 'Vineet', '0470609997', 'vineetsethia@gmail.com', 'Buying multiple books in kolkata', 'Hi ,\r\n\r\nDo you have a distributor in kolkata, I am looking to buy 120 books at one go and looking for competetive prices.\r\nThanks\r\nVineet', NULL, '2023-11-27 21:58:40', '2023-11-27 21:58:40'),
(13, 'surendra', '8767272997', 'surendra@pappytech.com', 'Want to buy books in bulk', 'Please do contact', NULL, '2023-11-28 10:44:39', '2023-11-28 10:44:39'),
(14, 'lIumFVPoqsOZaL', '9705117238', 'zorcelaqop@outlook.com', 'ILtQZAErxMqG', 'dFWpwjxMCnfXbyAr', NULL, '2023-11-28 18:43:43', '2023-11-28 18:43:43'),
(15, 'jHSzvVbp', '8323141544', 'zorcelaqop@outlook.com', 'ibOWnczgJCyeRl', 'ECbNjSqBA', NULL, '2023-11-28 18:43:44', '2023-11-28 18:43:44'),
(16, 'lIumFVPoqsOZaL', '9705117238', 'zorcelaqop@outlook.com', 'ILtQZAErxMqG', 'dFWpwjxMCnfXbyAr', NULL, '2023-11-28 18:43:45', '2023-11-28 18:43:45'),
(17, 'IvmfklSKoucZBWR', '3036953453', 'zorcelaqop@outlook.com', 'YIobyKhd', 'iaOfSQjeI', NULL, '2023-11-28 18:43:52', '2023-11-28 18:43:52'),
(18, 'TidAcCZBJezDwE', '6600181407', 'zorcelaqop@outlook.com', 'ENvIMxJDPwHfhCZF', 'ZIbrXNKPTF', NULL, '2023-11-28 18:43:53', '2023-11-28 18:43:53'),
(19, 'IvmfklSKoucZBWR', '3036953453', 'zorcelaqop@outlook.com', 'YIobyKhd', 'iaOfSQjeI', NULL, '2023-11-28 18:43:55', '2023-11-28 18:43:55'),
(20, 'Nais yadav', '8433458795', 'naisargika05@gmail.com', 'Workbook to publish.', 'Respected sir/mam/team, \r\nI have designed a workbook on \"colour therapy for chakra balancing\".\r\nI am willing to collaborate with you for its publication.\r\nThanking You\r\nYours sincerely\r\nNaisargika.', NULL, '2023-11-29 07:49:26', '2023-11-29 07:49:26'),
(21, 'Cheryl James', '9737552886', 'cheryl3bshopify@gmail.com', 'Wholesale Inquiry', 'Hey,\r\n\r\nThis is Cheryl James from 3B capital Group LLC. I have just gone through your website and I\'m interested in buying your products in bulk.\r\n\r\nLooking forward to hearing from you soon.\r\n\r\nCheryl James\r\nProcurement Manager\r\n\r\n9737552886\r\n\r\nhttps://3bshopify.com/', NULL, '2023-11-29 18:59:10', '2023-11-29 18:59:10'),
(22, 'Cheryl James', '9737552886', 'cheryl3bshopify@gmail.com', 'Wholesale Inquiry', 'Hey,\r\n\r\nThis is Cheryl James from 3B capital Group LLC. I have just gone through your website and I\'m interested in buying your products in bulk.\r\n\r\nLooking forward to hearing from you soon.\r\n\r\nCheryl James\r\nProcurement Manager\r\n\r\n9737552886\r\n\r\nhttps://3bshopify.com/', NULL, '2023-11-29 19:00:16', '2023-11-29 19:00:16'),
(23, 'Cheryl James', '9737552886', 'cheryl3bshopify@gmail.com', 'Wholesale Inquiry', 'Hey,\r\n\r\nThis is Cheryl James from 3B capital Group LLC. I have just gone through your website and I\'m interested in buying your products in bulk.\r\n\r\nLooking forward to hearing from you soon.\r\n\r\nCheryl James\r\nProcurement Manager\r\n\r\n9737552886\r\n\r\nhttps://3bshopify.com/', NULL, '2023-11-29 19:01:26', '2023-11-29 19:01:26'),
(24, 'Cheryl James', '9737552886', 'cheryl3bshopify@gmail.com', 'Wholesale Inquiry', 'Hey,\r\n\r\nThis is Cheryl James from 3B capital Group LLC. I have just gone through your website and I\'m interested in buying your products in bulk.\r\n\r\nLooking forward to hearing from you soon.\r\n\r\nCheryl James\r\nProcurement Manager\r\n\r\n9737552886\r\n\r\nhttps://3bshopify.com/', NULL, '2023-11-29 19:01:41', '2023-11-29 19:01:41'),
(25, 'Pooja', '9967099444', 'nagpalpooja85@gmail.com', '70 books', 'Hi. I want to order the mythology book set..need around 70pcs. What’s the best price I can get.', NULL, '2023-11-30 14:15:01', '2023-11-30 14:15:01'),
(26, 'Krishtina', '8133987550', 'dimpleb189@gmail.com', 'Storybook', 'Good', NULL, '2023-12-03 02:53:30', '2023-12-03 02:53:30'),
(27, 'Krishtina', '8133987550', 'dimpleb189@gmail.com', 'Storybook', 'Good', NULL, '2023-12-03 02:53:30', '2023-12-03 02:53:30'),
(28, 'Krishtina', '8133987550', 'dimpleb189@gmail.com', 'Storybook', 'Good', NULL, '2023-12-03 02:53:30', '2023-12-03 02:53:30'),
(29, 'Krishtina', '8133987550', 'dimpleb189@gmail.com', 'Storybook', 'Good', NULL, '2023-12-03 02:53:30', '2023-12-03 02:53:30'),
(30, 'Dr.Shuchi Bhatt', '7201015175', 'shuchimollusca@gmail.com', 'Book related', 'Hello\r\nI  Dr.shuchi from Gujarat.\r\nI am working on the Ocean science.\r\nI have published book on the oceanograpy.\r\nI would like to know about the process of the children book in ur publication house.y', NULL, '2023-12-03 13:00:40', '2023-12-03 13:00:40'),
(31, 'MOhamed Mahathir', '7871662279', 'mahathirgalaxya@outlook.com', 'Discount for bulk order', 'Hi i would like to place a bulk order. can i check any discounts given?\r\n\r\nBooks interested\r\n1. 1800+ reward stickers\r\n2. Writing fun - set of 4 books\r\n3. Colouring book for kids (set of 12 books)\r\n\r\n50 pcs each. total 150 pcs\r\n\r\n how much will it be including shipping to Tanjore Tamil Nadu? \r\n\r\nPls contact me Mahathir at 7871662279\r\nThank you', NULL, '2023-12-05 10:08:14', '2023-12-05 10:08:14'),
(32, 'VAISHALI JAIN', '9999511508', 'vaishali.jfirst@gmail.com', 'Issues in book printing', 'I purchased sticker books from First Cry, however the stickers in the book are all in reverse direction vis-a-vis image where it is to be pasted. My child is unable to do the activity and all my money is waste as I bought 6 books.', NULL, '2023-12-05 13:34:39', '2023-12-05 13:34:39'),
(33, 'VAISHALI JAIN', '9999511508', 'vaishali.jfirst@gmail.com', 'Issues in book printing', 'I purchased sticker books from First Cry, however the stickers in the book are all in reverse direction vis-a-vis image where it is to be pasted. My child is unable to do the activity and all my money is waste as I bought 6 books.', NULL, '2023-12-05 13:34:47', '2023-12-05 13:34:47'),
(34, 'ChZewilF', '9312420388', 'muleme_limon1742@yahoo.com', 'ghzkeQMyrqSPD', 'vPjlMamOkWCSdq', NULL, '2023-12-05 22:11:17', '2023-12-05 22:11:17'),
(35, 'FztmqRJfW', '2610625733', 'muleme_limon1742@yahoo.com', 'xqYUICTuFLrlk', 'LqTRZxYeWBU', NULL, '2023-12-05 22:11:19', '2023-12-05 22:11:19'),
(36, 'ChZewilF', '9312420388', 'muleme_limon1742@yahoo.com', 'ghzkeQMyrqSPD', 'vPjlMamOkWCSdq', NULL, '2023-12-05 22:11:20', '2023-12-05 22:11:20'),
(37, 'tnAKUwBsFa', '9970800236', 'muleme_limon1742@yahoo.com', 'ewKfjMCqEJL', 'xPDjpbvU', NULL, '2023-12-05 22:11:35', '2023-12-05 22:11:35'),
(38, 'iHRuUIgMY', '6799967752', 'muleme_limon1742@yahoo.com', 'kvPFzHWuB', 'mTxHjbrgCoYANfP', NULL, '2023-12-05 22:11:36', '2023-12-05 22:11:36'),
(39, 'tnAKUwBsFa', '9970800236', 'muleme_limon1742@yahoo.com', 'ewKfjMCqEJL', 'xPDjpbvU', NULL, '2023-12-05 22:11:38', '2023-12-05 22:11:38'),
(40, 'Janani', '9342711246', 'bookieezone@gmail.com', 'unique books for re-selling', 'Hello! Im looking for unique board books for reselling. Please do let me know details regarding the same.', NULL, '2023-12-06 08:19:53', '2023-12-06 08:19:53'),
(41, 'Nandita Chakraverti', '9833197843', 'NanditaChakraverti@yahoo.co.in', 'Submission', 'Hi, my name is Nandita Chakraverti and I have authored a children\'s picture book, Coco: A Cat\'s Magical Journey.\r\n\r\nI am trying to submit my picture book for your consideration and to work with Wonderhouse but am unable to submit this via the submissions link on the website, is there any other way I can share the book and discuss if this is of interest?\r\n\r\nMany thanks,\r\nNandita', NULL, '2023-12-06 14:37:23', '2023-12-06 14:37:23'),
(42, 'Sophea', '0000000000', 'sophea.kay@footprintsschool.edu.kh', 'Author / Editor names', 'Our library recently purchased some of your books and we want to know the author names for our catalog so that we can make them searchable to our patrons. Can you please share the names for your World\'s Greatest series. (box set of 8 books).', NULL, '2023-12-08 03:33:18', '2023-12-08 03:33:18'),
(43, 'Rajesab A Shaikh', '9343239559', 'Rajesabshaikh23@gmail.com', 'amazon Fba', 'feel free to ask any anything Rajesabshaikh23@gmail.com', NULL, '2023-12-08 07:26:16', '2023-12-08 07:26:16'),
(44, 'VISHAL', '6284821937', 'vishalsaab404@gmail.com', 'Seller', 'my name is vishal. am just started a new business Name Vishals Enterprises. it\'s working for product  and I am very glade with your products. would you like me to sale your products if yes please contact me', NULL, '2023-12-09 16:42:41', '2023-12-09 16:42:41'),
(45, 'Athiyya', '9443526254', 'athiyyazahir03@gmail.com', 'Request for bulk order', 'Hi, I would like to place a bulk order. Can I check is there any discounts?\r\n\r\nBooks interested:\r\n1. 1800+ REWARD STICKER BOOK IDEAL FOR TEACHERS AND PARENTS\r\n2. ⁠WRITING FUN A SET OF 4 BOOKS: \r\nWrite And Practice Capital Letters, Small Letters, Numbers and Patterns\r\n\r\n50pcs each. Total 100pcs\r\n\r\nDelivery to Tamil Nadu. Pls contact me Atthiya at +91 94435 26254\r\n\r\nCan I request for your book catalogue and pricing for bulk order reference \r\n\r\nThank you', NULL, '2023-12-10 17:51:01', '2023-12-10 17:51:01'),
(46, 'Srividhya Silambarasan', '9159591169', 'ssvidhya01@gmail.com', 'Reselling kids books', 'Hi I am interested in reselling your kids books.Do you accept reselling?I would like to see your kids books resellers catalogue as well.Do you have sound books and cloth books?', NULL, '2023-12-11 07:17:54', '2023-12-11 07:17:54'),
(47, 'MOHD NAGEEN RATHER', '7889771233', 'rathernageen7@gmail.com', 'Want to know', 'Greetings, \r\nI hope you are doing well.\r\nI have written a story book for children that consists of 5 stories set in Kashmir valley depicting the socio-cultural ethos of the heavenly valley. The stories are tinged with the style and subject of the local folk tales.\r\n\r\nWould you be interested to have a look.\r\n\r\n\r\nHope to hear from you.\r\n\r\nRegards,\r\nNageen Rather \r\nAsst.Professor \r\nDepartment of English \r\nIUST University, Kashmir\r\nIndia', NULL, '2023-12-12 10:19:36', '2023-12-12 10:19:36'),
(48, 'Srividhya Silambarasan', '9159591169', 'ssvidhya01@gmail.com', 'Reselling kids books', 'Hi I am interested in reselling your kids books.I would like to know the procuring procedure.', NULL, '2023-12-13 09:35:02', '2023-12-13 09:35:02'),
(49, 'fZlaCgRjMOWi', '6945880286', 'kristens56p@hotmail.com', 'nXNRVGrYZvqUt', 'aUbsdIxScMpE', NULL, '2023-12-13 10:35:21', '2023-12-13 10:35:21'),
(50, 'nNJrgwsvWQxUqFy', '6172285652', 'kristens56p@hotmail.com', 'hjEaTMGcnX', 'avLJdpXqofSTZ', NULL, '2023-12-13 10:35:25', '2023-12-13 10:35:25'),
(51, 'fZlaCgRjMOWi', '6945880286', 'kristens56p@hotmail.com', 'nXNRVGrYZvqUt', 'aUbsdIxScMpE', NULL, '2023-12-13 10:35:29', '2023-12-13 10:35:29'),
(52, 'ngAFZElbQqj', '2121843096', 'kristens56p@hotmail.com', 'AcJGMmUKvq', 'IfWraDtCmH', NULL, '2023-12-13 10:35:54', '2023-12-13 10:35:54'),
(53, 'DlfBgyYasxmeJXZ', '3965093121', 'kristens56p@hotmail.com', 'xKGDrYpk', 'tloZRxHIScNDsb', NULL, '2023-12-13 10:35:58', '2023-12-13 10:35:58'),
(54, 'ngAFZElbQqj', '2121843096', 'kristens56p@hotmail.com', 'AcJGMmUKvq', 'IfWraDtCmH', NULL, '2023-12-13 10:36:02', '2023-12-13 10:36:02'),
(55, 'Pallavi Verma', '8447953731', 'pallavi9889@gmail.com', 'lots of words and pictures alphabet book', 'Hi \r\nI have create an alphabet book for nursery kids. It has pictures and words from A to Z. Such kind of book is not available presently in market so I thought I should make one. I have talked to nursery teachers also in this regard, they are also very excited about it.', NULL, '2023-12-14 05:24:59', '2023-12-14 05:24:59'),
(56, 'Subashree', '7824977477', 'sweetsuba056@gmail.com', 'Enquiry on Ordered books', 'Hi sir /mam \r\nI ordered wonder house shape books 7 books in Amazon website.\r\nDolphin, Dino,lion, Aeroplane, train,sheep, and cat \r\nIn the name of Gautham Sundararajan.\r\nCan u please deliver it before Saturday or on Saturday. We will be travelling outstation for month so I kindly request u to deliver it quickly as soon as possible please.\r\nThank u', NULL, '2023-12-14 06:45:30', '2023-12-14 06:45:30'),
(57, 'Nichole Culotta', '9179151237', 'nichole@914cares.org', 'Bulk Purchasing/Donation', 'Good Morning! I hope this email finds you well.\r\nWe are a non-profit organization 501C3 in Westchester County, NY called 914Cares.\r\nWe have a full literacy library that has all new and gently used donated books. We give out approximately 20,000 books a year to children in need. We have a large population of bi-lingual readers. We are looking for option to bulk purchase or receive donations of My First 1,000 English-Espanol Words. Please let us know if would consider our organization. Please let me know if there is someone who can discuss further. Thank you so much for your time and your consideration.\r\nThank you!\r\nNichole Culotta\r\nDirector of Programming\r\n914Cares', NULL, '2023-12-18 16:20:10', '2023-12-18 16:20:10'),
(58, 'MAHENDRA SINGH RANA', '9415000668', 'mahendra.rana32@gmail.com', 'Catalogue', 'Dear Sir,\r\nI am running a stationary shop. And I want to purchase some kids books. So please I want to know that what discount I will get from your side and what are the terms and conditions for online purchases the books.', NULL, '2023-12-18 17:25:55', '2023-12-18 17:25:55'),
(59, 'Roopsi', '8510089555', 'rdavra126@gmail.com', 'My first shape book', 'Hello I need all the shape books for my library can you provide me the catalogue and want to buy directly \r\nThank you\r\nWaiting for your reply', NULL, '2023-12-18 21:54:57', '2023-12-18 21:54:57'),
(60, 'oWuNpBwZAtv', '2648348735', 'AlisonYoung60857@outlook.com', 'JbQhVRqYGWZt', 'dXgtaqWVhHuiEIFL', NULL, '2023-12-19 17:19:22', '2023-12-19 17:19:22'),
(61, 'ZrqYbTNsoByenuwA', '6400518054', 'AlisonYoung60857@outlook.com', 'fwIegqMECrDo', 'uPehzONDRKGanC', NULL, '2023-12-19 17:19:23', '2023-12-19 17:19:23'),
(62, 'oWuNpBwZAtv', '2648348735', 'AlisonYoung60857@outlook.com', 'JbQhVRqYGWZt', 'dXgtaqWVhHuiEIFL', NULL, '2023-12-19 17:19:24', '2023-12-19 17:19:24'),
(63, 'mHsrauxnSfFBklj', '5109933820', 'AlisonYoung60857@outlook.com', 'wWvshQKEn', 'YPebjxMXaAkmIvhO', NULL, '2023-12-19 17:19:39', '2023-12-19 17:19:39'),
(64, 'oASYIlCfTGRDLpNk', '3598478900', 'AlisonYoung60857@outlook.com', 'IXtCcKDmNneRurOb', 'wNMgJlaZUf', NULL, '2023-12-19 17:19:40', '2023-12-19 17:19:40'),
(65, 'mHsrauxnSfFBklj', '5109933820', 'AlisonYoung60857@outlook.com', 'wWvshQKEn', 'YPebjxMXaAkmIvhO', NULL, '2023-12-19 17:19:41', '2023-12-19 17:19:41'),
(66, 'Dr Arup Giri', '9501059476', 'arupsatadal@gmail.com', 'RE: Query for Book Publication_Dr. Arup Giri', 'Dear Sir/Ma\'am,\r\nGreetings of the day.\r\nI am Dr. Arup Giri working in Baba Mastnath University. I want to publish some children\'s book and postgraduate student level books.\r\nCould you please tell me about the procedure for this process?\r\nEagerly waiting to hear from you.\r\nBest regards,\r\n Arup', NULL, '2023-12-21 08:45:26', '2023-12-21 08:45:26'),
(67, 'Unna', '9742756677', 'unna.an@gmail.com', 'Cartoon Board Book', 'Have an idea for a cartoon board book for kids of age 4-7. Would like to know how the process works to create the same. Thanks.', NULL, '2023-12-21 09:04:25', '2023-12-21 09:04:25'),
(68, 'Ankita Tomar', '9990535221', 'nonutomar2013@gmail.com', 'English', 'asking two can write book together by two other phone', NULL, '2023-12-21 11:58:18', '2023-12-21 11:58:18'),
(69, 'Adishi Sharma', '8368086514', '17064_16.adishi@bvbmvmehtavidyalay.org', 'Asking 2 persons can write book together', 'Two persons can write book together online from two other classes', NULL, '2023-12-21 13:57:58', '2023-12-21 13:57:58'),
(70, 'Mohana Gill', '0122055250', 'mohanagill@gmail.com', 'Childrens Books', 'I am an author ofchildrens book Would like total to someone from your organisation I am from Malaysia and my contact in Malaysia is 60122055250 I would also like to send some information so please can I have a contact  website www.mohanagill.info  Greatly appreciated Merry Christmas and a happy new year mohana', NULL, '2023-12-23 05:04:46', '2023-12-23 05:04:46'),
(71, 'Mo', '0752109426', 'moloemiles@gmail.com', 'Illustrator/Artist', 'Hello,\r\nI hope this message finds you well. I\'m illustrator with a strong background in Art and Illustration, holding both a bachelor\'s and master\'s degree. \r\nI am looking for new projects to work on, is there a position available in your team?', NULL, '2023-12-24 14:08:44', '2023-12-24 14:08:44'),
(72, 'EteyxgWconz', '4881079800', 'lvloisxcevzupkn@hotmail.com', 'WgEtKdfFxlqe', 'AxQGIzoMPSC', NULL, '2023-12-25 20:41:43', '2023-12-25 20:41:43'),
(73, 'pBaNZtGQc', '9871737907', 'lvloisxcevzupkn@hotmail.com', 'XcZbTSMYj', 'jOKCFnMJDbI', NULL, '2023-12-25 20:41:45', '2023-12-25 20:41:45'),
(74, 'EteyxgWconz', '4881079800', 'lvloisxcevzupkn@hotmail.com', 'WgEtKdfFxlqe', 'AxQGIzoMPSC', NULL, '2023-12-25 20:41:46', '2023-12-25 20:41:46'),
(75, 'EnuLdXZYfwiS', '5074136047', 'lvloisxcevzupkn@hotmail.com', 'jcLbuozeUxA', 'sFYwNWxqdQRP', NULL, '2023-12-25 20:42:03', '2023-12-25 20:42:03'),
(76, 'hacBIJWwu', '7383910213', 'lvloisxcevzupkn@hotmail.com', 'sVlGnMow', 'qAKvYTtMjDumG', NULL, '2023-12-25 20:42:04', '2023-12-25 20:42:04'),
(77, 'EnuLdXZYfwiS', '5074136047', 'lvloisxcevzupkn@hotmail.com', 'jcLbuozeUxA', 'sFYwNWxqdQRP', NULL, '2023-12-25 20:42:05', '2023-12-25 20:42:05'),
(78, 'vicky', '9643182205', 'vickychauhanpatla@gmail.com', 'book', 'i want 100 books isbn number 978-9387779266My First Library: Boxset of 10 Board Books for Kids Bo', NULL, '2023-12-26 20:25:31', '2023-12-26 20:25:31'),
(79, 'Manpreet kaur', '9988761872', 'manpreetkr73@gmail.com', 'Didn\'t open the catalog', 'Error while opening catalog', NULL, '2023-12-27 08:26:04', '2023-12-27 08:26:04'),
(80, 'samdup', '8082010648', 'samdup68648@gmail.com', 'Search for RC books', 'Super fun reading comprehension level 3 and above', NULL, '2023-12-28 15:25:10', '2023-12-28 15:25:10'),
(81, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', 'Catalogue and trade terms', NULL, '2023-12-30 13:37:58', '2023-12-30 13:37:58'),
(82, 'Swastin sahoo', '8280861209', 'swastin95.sahoo@gmail.com', 'need catalog with wholsell price/discount price', 'need catalog with wholsell price/discount price', NULL, '2023-12-31 17:31:33', '2023-12-31 17:31:33'),
(83, 'Basavaraj', '8867109144', 'basavarajbandiwad@gmail.com', 'Kannada language', 'Hi, You have very good  books collection for kinds, why don\'t have kannada language books for kids.\r\nAny reasons not having kannda books. I was searching for kannada english my first learningcombo books for MY 2 year child.', NULL, '2024-01-02 16:47:43', '2024-01-02 16:47:43'),
(84, 'Mohana Gill', '0122055250', 'mohanagill@gmail.com', 'Childrens books', 'I am an author from Malaysia I would like to talk to someone and also send some information. My mobile is 60122055250  Please can I. have a contact. Have written many times', NULL, '2024-01-02 19:26:50', '2024-01-02 19:26:50'),
(85, 'Vrinda', '9667878324', 'sparkvrinda@gmail.com', 'Pop up books', 'Please let me know if you have any pop up books', NULL, '2024-01-04 09:23:00', '2024-01-04 09:23:00'),
(86, 'Gaganendranath Bhattacharyya', '9845860764', 'GNB077722@gmail.com', 'Libery', 'This book is amazing', NULL, '2024-01-07 04:28:33', '2024-01-07 04:28:33'),
(87, 'Shraddha Rane', '9167107654', 'shraddhak50@gmail.com', 'Need Ram mythology shaped book 40 quantity', 'I want Ram mythology shaped book 40 quantity for my son birthday return gift.', NULL, '2024-01-07 05:26:35', '2024-01-07 05:26:35'),
(88, 'Gaganendranath Bhattacharyya', '9845860764', 'GNB077722@gmail.com', 'Libery', 'This book is so cool.', NULL, '2024-01-07 06:22:27', '2024-01-07 06:22:27'),
(89, 'Dr Prachi VS', '7985057451', 'prachivs@bhu.ac.in', 'Regarding an issue in ur book', 'Dear publisher\r\nThis is to bring to your kind attention that in your   “ mighy  little bheem best pals” coloring book, there are characters from the little bheem program.\r\nIn the coloring book,  only the sister of little bheem is shown holding a broom for cleaning as if this chore is meant for girls only. No where kaliya or little bheem is shown doing anything remotely associated with house hold work.\r\n\r\nSince its a book meant for children, it shouldnt be stereotyping broom with a girl only. You could have shown her with toys or on a swing or any other activity.\r\n\r\n\r\nLittle details matter. And more so for the young malleable minds. \r\nPlz take this into notice.\r\n\r\nThank you\r\nDr Prachi VS', NULL, '2024-01-08 07:38:58', '2024-01-08 07:38:58'),
(90, 'MAMATHA ALUGUBELLY', '8374907289', 'mamatha104@gmail.com', 'books to gift', 'I am looking to order a set of 40 books under rupees 100 for the kids aged 5 to 6. Do you have any discount on bulk orders?', NULL, '2024-01-08 16:37:25', '2024-01-08 16:37:25'),
(91, 'Meghna Agrawal', '7772822208', 'm6goyal@gmail.com', 'query for flags book', 'to whomsoever it may concern. I have been trying to contact wonder house for telling me the last price which can be offered for the book on flags which is priced at 199 on amazon if i want to order in bulk.', NULL, '2024-01-10 11:12:58', '2024-01-10 11:12:58'),
(92, 'Athira  Mohan', '8849153501', 'aadira98mohan@gmail.com', 'Bulk Book Purchase', 'Hello,\r\n\r\nReaching out to enquire about bulk Book Purchase process with your publishing house. Please do get in touch. \r\n\r\nThankyou', NULL, '2024-01-12 18:13:44', '2024-01-12 18:13:44'),
(93, 'Subi Sheikh', '9935059007', 'abd_prayags@yahoo.co.uk', 'query related to preschool books', 'Dear Sir/Madam,\r\nWe are opening a new school and we would like to know about your books. I request you to provide the details of your series.\r\nRegards', NULL, '2024-01-13 16:27:33', '2024-01-13 16:27:33'),
(94, 'Fathima Noureen', '9605266889', 'fanoureen24@gmail.com', 'BABY RECORD BOOK ENQUIRY', 'Hi,I would like to get the pics & video of the Baby Record Book\'s pages inside for reference at the earliest.Couldn\'t find any in your site or Amazon or other sites.\r\n\r\nRegards,\r\nFathima Noureen', NULL, '2024-01-15 03:05:33', '2024-01-15 03:05:33'),
(95, 'Neha Tiwari', '7838327720', 'nehatiwari250989@gmail.com', 'Want to Publish an exciting new ABC book', 'Good morning ,\r\nI could not send the details in the submission section.. It was showing error.. so i have mailed directly on the email address available in the contact details.. \r\nThank you..', NULL, '2024-01-15 04:52:20', '2024-01-15 04:52:20'),
(96, 'Deepanshi Sharma', '8630195010', 'shreeradha1997@gmail.com', 'Story book', 'Find prep section book', NULL, '2024-01-16 13:27:41', '2024-01-16 13:27:41'),
(97, 'Subalakshmi C', '9894066404', 'subusree5@gmail.com', 'Board books', 'Good afternoon ma\'am.  I need animatied board books set (story books). I need all the story books. Kindly share me the price and number of books. Thank you.', NULL, '2024-01-18 07:46:34', '2024-01-18 07:46:34'),
(98, 'Deborah Day', '5105202742', 'ashaybythebayceo@gmail.com', 'Bulk Order / Bookseller / Urgent', 'My company is Ashay By The Bay.  I need to order 24 of ISBN 978-9388369882 and \r\n24 of 978-9389567656 of the My First Learning Libraries.  I need them asap for a client who is giving books to pediatric centers.  Where can I get them at the best price.  I can  pay with CC.  My phone number is 510-520-2742.', NULL, '2024-01-18 21:07:41', '2024-01-18 21:07:41'),
(99, 'Jameel', '8801822764', 'jameelak471986@gmail.com', 'Requesting for the books lists', 'Good Morning Wonder House.\r\nI request you to send me the books list which your House can provide us for my library. Please do mail me the list.', NULL, '2024-01-20 06:03:23', '2024-01-20 06:03:23'),
(100, 'Srujana Guggila', '8341418080', 'srujanaguggila11@gmail.com', 'Requirement of shloka book', 'Hi I want 50 shloka books', NULL, '2024-01-20 09:55:02', '2024-01-20 09:55:02'),
(101, 'Anthony M. Grimaldi', '7187539321', 'amg@journeymandesigns.com', 'Illustrator & Graphic Designer', 'To Wonder House Books,\r\nMy name is Anthony M. Grimaldi of JourneyManDesigns: Illustrator + Graphic Designer from New York City. I respectfully request if you may review and consider my portfolio link to be a creative collaborator with the company. My portfolio will assure Wonder House Books of my skill and sincerity and can be visited at https://journeymandesigns.artstation.com.\r\n\r\nIf you may ever be interested in collaborating, I may be contacted at amg@journeymandesigns.com and 718-753-9321.\r\n\r\nThank you for your time and consideration.\r\n\r\nSincerely,\r\nAnthony M. Grimaldi\r\nJourneyManDesigns', NULL, '2024-01-23 16:30:20', '2024-01-23 16:30:20'),
(102, 'Priyanka Sharma', '9425543091', 'ppriyanka.ps@gmail.com', 'Careers', 'I tried to fill up careers form but it gave some error. I would like to work with you. I like the books sets you have created for kids. I would like to work with more content.', NULL, '2024-01-25 00:57:37', '2024-01-25 00:57:37'),
(103, 'Stephanie May', '5408336916', 'smay@rockingham.k12.va.us', 'Illustrated Classics- The Jungle Book', 'We are in need of ordering 17 copies of The Jungle Book. ISBN: 9789390093045. This is for a school and we would need them by February 9. Could we please purchased these directly from your company. Thanks!', NULL, '2024-01-25 15:49:47', '2024-01-25 15:49:47'),
(104, 'Amruta Urkude', '9975722470', 'amruta@greatplaceitservices.com', 'needs set of books', 'need 5-6 set of books like great scientists, inventions, on earth, space, etc under Rs. 100 for birthday return gift for 9 & above kids', NULL, '2024-01-25 16:36:25', '2024-01-25 16:36:25'),
(105, 'Priyanka Sharma', '8827343874', 'drpriyanka740@gmail.com', 'My first book', 'I am placing complaint regarding my first book vegetable.it contain wrong information of showing turkey and hen in vegetables. \r\nIt\'s really disappointing .I am regular customer of your books and it\'s a big mistake.', NULL, '2024-01-26 12:31:52', '2024-01-26 12:31:52'),
(106, 'Ankur Chandak', '8329502295', 'ankurchandak45@gmail.com', 'Want in bulk for wholesale', 'Hello myself Ankur Chandak form Madhuri stationers nagpur(Maharashtra) want', NULL, '2024-01-27 06:23:21', '2024-01-27 06:23:21'),
(107, 'Blessing', '0245877027', 'blessingadusarkodie@gmail.com', 'Future science and technology', 'I love your books so I want you to keep me updated on other titles in your books series.', NULL, '2024-01-27 09:47:25', '2024-01-27 09:47:25'),
(108, 'Blessing', '0245877027', 'blessingadusarkodie@gmail.com', 'Future science and technology', 'I want to know more about AI, robotics, cloning and genetic engineering', NULL, '2024-01-27 09:50:40', '2024-01-27 09:50:40'),
(109, 'Blessing', '0245877027', 'blessingadusarkodie@gmail.com', 'Future science and technology', 'I want to know more about AI, robotics, cloning and genetic engineering', NULL, '2024-01-27 09:50:41', '2024-01-27 09:50:41'),
(110, 'Himanshu Sharma', '8109434303', 'sharmah146@gmail.com', 'All', 'I am a coaching institute owner, want to be a partner', NULL, '2024-01-27 19:39:33', '2024-01-27 19:39:33'),
(111, 'PARMITA PAL', '7547915026', 'pari.30april@gmail.com', 'WRITER, EDITOR, PROOF READER, TRANSLATOR JOB', 'Hi, I am looking for Editor, content writer, proof reader and translator job in your firm. I have done B.tech in Agricultural Engineering from Central Agricultural University, Imphal, and M.tech in Hydro-Informatics Engineering, from National Institute of Technology, Agartala, I have 7 years working experience in Canara bank as Asst. Manager, and I have also written a fantasy fiction book which is currently under publication process through a reputed publishing house. I am confident my skills and experience could make a great contribution in your firm. Hope to hear from you soon.', NULL, '2024-01-28 10:32:17', '2024-01-28 10:32:17'),
(112, 'Vijay Akshit Paul', '9801490870', 'vap.paul@gmail.com', 'Requirement for Pre-school books', 'I am opening a new Pre-Primary school (Pre-Nursery to KG-II) in Durgapur, West Bengal. Recently I have bought two books of your publication from Amazon. \r\n\r\nI like the quality and content of your books and feel like giving your books in my school kit. \r\n\r\nSo I have the following queries related to this matter:\r\n1. Since I am just starting my school so the books will be ordered in small quantities and as per the admissions I will re-order, keeping 2 sets of each class in buffer. Will this be okay for you?\r\n\r\n2. How much discount on the MRP will be given to me?\r\n\r\nKindly contact me soon as I am on the verge of finalizing the books.\r\n\r\nThank you.', NULL, '2024-01-29 09:06:34', '2024-01-29 09:06:34'),
(114, 'Aparna Gavalee', '7414999439', 'duniyakart@gmail.com', 'Inquiry regarding Books in wholesale price', 'I would like to purchase early learning books in wholesale price for my E-commerce Business .', NULL, '2024-01-31 06:03:46', '2024-01-31 06:03:46'),
(115, 'Kate Lees', '1234567890', 'hello@wonderbooks.com.cy', 'Children\'s Books', 'Hello, I am the owner of an online children\'s bookshop in Cyprus. I\'m very interested in a trade account with you for english language children\'s books - I would be grateful if you could send me further information? Thanks', NULL, '2024-01-31 18:58:05', '2024-01-31 18:58:05'),
(116, 'A.MALLIKARJUNA RAO', '9492923927', 'mallikarjunaallada@gmail.com', 'Shloks and Mantras - Activity book for kids', 'I need the above books.  Where can I get in Hyderabad', NULL, '2024-02-01 01:16:01', '2024-02-01 01:16:01'),
(117, 'santosh kumar', '7645057447', 'santosh.vviet@gmail.com', 'book printing', 'Hi,\r\n do you print others book? i have requirement for my own book printing. please contact me.', NULL, '2024-02-01 08:36:28', '2024-02-01 08:36:28'),
(118, 'Deepti Gupta', '9699084694', 'thebabyfirstbox@gmail.com', 'Looking for Baby Record Books for Bulk Purchase', 'I am looking to buy Baby Record Book for Bulk Purchase, Kindly get in touch', NULL, '2024-02-01 10:20:37', '2024-02-01 10:20:37'),
(121, 'yilNhHrxULjEcC', '9393480014', 'burnettzellays16@gmail.com', 'XwgKhLnJliFfWj', 'YkxHKTvlFXyW', NULL, '2024-02-03 00:07:23', '2024-02-03 00:07:23'),
(122, 'yilNhHrxULjEcC', '9393480014', 'burnettzellays16@gmail.com', 'XwgKhLnJliFfWj', 'YkxHKTvlFXyW', NULL, '2024-02-03 00:07:25', '2024-02-03 00:07:25'),
(123, 'yilNhHrxULjEcC', '9393480014', 'burnettzellays16@gmail.com', 'XwgKhLnJliFfWj', 'YkxHKTvlFXyW', NULL, '2024-02-03 00:07:28', '2024-02-03 00:07:28'),
(124, 'GHmAdbhFYanzKw', '4299003413', 'burnettzellays16@gmail.com', 'OKgerFLiHf', 'ysLnowtHmSBEh', NULL, '2024-02-03 00:07:40', '2024-02-03 00:07:40'),
(125, 'GHmAdbhFYanzKw', '4299003413', 'burnettzellays16@gmail.com', 'OKgerFLiHf', 'ysLnowtHmSBEh', NULL, '2024-02-03 00:07:42', '2024-02-03 00:07:42'),
(126, 'GHmAdbhFYanzKw', '4299003413', 'burnettzellays16@gmail.com', 'OKgerFLiHf', 'ysLnowtHmSBEh', NULL, '2024-02-03 00:07:44', '2024-02-03 00:07:44'),
(127, 'A.MALLIKARJUNA RAO', '9492923927', 'mallikarjunaallada@gmail.com', 'Shloks and Mantras books for kids', 'Where can I get Shloks and Mantras books for kids in Hyderabad', NULL, '2024-02-06 12:47:53', '2024-02-06 12:47:53'),
(128, 'SANA KHALIL', '6302294566', 'sana_ziadeh@yahoo.com', 'Publish a book', 'I tried to submit a my book for you to yay a look at it but I wasn’t able \r\nI have new books for Ramadan and as a set of 12 mini books for ages 3-10 I am a teacher in public schools in United States and many teachers reached out to me asking me about books for Ramadan as a set but we couldn’t find any even on Amazon so we wrote the book', NULL, '2024-02-07 04:16:13', '2024-02-07 04:16:13'),
(129, 'SANA KHALIL', '6302294566', 'sana_ziadeh@yahoo.com', 'Publish a book', 'I tried to submit a my book for you to yay a look at it but I wasn’t able \r\nI have new books for Ramadan and as a set of 12 mini books for ages 3-10 I am a teacher in public schools in United States and many teachers reached out to me asking me about books for Ramadan as a set but we couldn’t find any even on Amazon so we wrote the book', NULL, '2024-02-07 04:16:14', '2024-02-07 04:16:14'),
(130, 'Firoj', '7486853326', 'umadiyafiroj@83gmail.com', 'Meesho Any Start Planing', 'Please Contact Me', NULL, '2024-02-07 08:43:51', '2024-02-07 08:43:51'),
(131, 'Ruchi Bamrara', '7838747662', 'ruchi.bamrara26@gmail.com', 'Math', 'I like the books', NULL, '2024-02-07 11:42:48', '2024-02-07 11:42:48'),
(132, 'Shweta', '9860544827', 'malpure.shweta@gmail.com', 'Box - I love you series', 'I wanted to buy all the titles in the series of I love you… can u share the cost of the entire box', NULL, '2024-02-07 20:35:31', '2024-02-07 20:35:31'),
(133, 'Preetesh Bansal', '6363333734', 'happyday.preetesh@gmail.com', 'Kids books', 'I want to order books for kids aged between 2-6 years for preschool library purpose.\r\nSomething like Pop-up books and options like it.', NULL, '2024-02-09 18:38:28', '2024-02-09 18:38:28'),
(134, 'Rohan mahajan', '9756378042', 'rohanamahajan1975@gmail.com', 'Mix', 'For trading', NULL, '2024-02-09 20:37:18', '2024-02-09 20:37:18'),
(135, 'Rishika Chaurasia', '7769932419', 'rrishikacchaurasia@gmail.com', 'Book Publishing', 'Hi there .... My daughter had wrote a book about adoption of a dog . Would like to publish that book. Let us know the process', NULL, '2024-02-10 04:25:28', '2024-02-10 04:25:28'),
(136, 'pooja chaturvedi', '7597141484', 'mpck.83@gmail.com', 'regarding sudoku', 'there are so many misprint or mistakes in your sudoku books', NULL, '2024-02-10 06:26:38', '2024-02-10 06:26:38'),
(137, 'Annie', '8220178810', 'annietweety4@gmail.com', 'Need books in wholesale', 'Wanted to purchase books in wholesale.. children\'s books..please share catalog and price details', NULL, '2024-02-10 07:51:45', '2024-02-10 07:51:45'),
(138, 'zAOXHJuCxtvUIN', '3238731416', 'deveneverettuj5119@gmail.com', 'eRxJDScEnmG', 'BLrTCFnqg', NULL, '2024-02-10 15:08:38', '2024-02-10 15:08:38'),
(139, 'zAOXHJuCxtvUIN', '3238731416', 'deveneverettuj5119@gmail.com', 'eRxJDScEnmG', 'BLrTCFnqg', NULL, '2024-02-10 15:08:51', '2024-02-10 15:08:51'),
(140, 'zAOXHJuCxtvUIN', '3238731416', 'deveneverettuj5119@gmail.com', 'eRxJDScEnmG', 'BLrTCFnqg', NULL, '2024-02-10 15:08:56', '2024-02-10 15:08:56'),
(141, 'CZyvAudcbaLh', '9125314560', 'deveneverettuj5119@gmail.com', 'Gcayonpk', 'pYRAVzfsEHDK', NULL, '2024-02-10 15:09:45', '2024-02-10 15:09:45'),
(142, 'CZyvAudcbaLh', '9125314560', 'deveneverettuj5119@gmail.com', 'Gcayonpk', 'pYRAVzfsEHDK', NULL, '2024-02-10 15:09:48', '2024-02-10 15:09:48'),
(143, 'Dharitri', '9124009368', 'beheradharitri411@gmail.com', 'A request', 'It would have been great if there were flash cards of Mahabharata, Ramayana, our culture, tradition, God and Goddess.', NULL, '2024-02-10 18:22:31', '2024-02-10 18:22:31'),
(144, 'Cathie Pelletier', '2073983206', 'cathpell@aol.com', 'The Illustrated Stories of Tenali Raman Raman', 'Hello, I am an American author who is starting a little KIDS READ BOOKS! show on YouTube in which we ask children from around the world what they are reading. They also hold up the book to show the cover. Two girls in India chose The Illustrated Stories of Tenali Raman (Classic Tales From India). They live in India. While I think it’s silly to ask this, my producer insists. Do we have your permission to show the book cover? We will also list at the end the titles of books and how to order them. While I can’t imagine a book publisher saying no, I’m asking to make my producer happy!  The first show will be coming in April,\r\nThank you,\r\nCathie Pelletier', NULL, '2024-02-11 15:38:10', '2024-02-11 15:38:10'),
(145, 'Mohan Singh', '9867234287', 'SavitaRao1990@gmail.com', 'Wholesale purchase', 'Want to have talk regarding wholesale purchase of books', NULL, '2024-02-12 06:48:46', '2024-02-12 06:48:46'),
(146, 'Scott Lebowitz', '7322375961', 'Contact@SmartGoodsDirect.com', 'Introduction to a Wholesale Business Partnership', 'Hi, I\'m Scott Lebowitz from Smart Goods Direct, looking to be your authorized Amazon distributor. Let\'s discuss product details and partnership needs. With a decade in online sales, we\'re the ideal partner. Can we set up a quick call? Thanks', NULL, '2024-02-12 22:27:32', '2024-02-12 22:27:32'),
(147, 'Poonam Kathuria', '9898095778', 'poonamkathuria9898@gmail.com', 'Order of books', 'Supply of books\r\nOxford English School Patan', NULL, '2024-02-13 06:46:03', '2024-02-13 06:46:03'),
(148, 'Mahalakshmi Jayaprakash', '9884779006', 'pallavaram@littleelly.com', 'Need books', 'I want to buy books in bulk for gifts. Need them in next 5 days. Contact immediately.', NULL, '2024-02-13 17:19:35', '2024-02-13 17:19:35'),
(149, 'Mahalakshmi Jayaprakash', '9884779006', 'pallavaram@littleelly.com', 'Need books', 'Want books for gift in bulk in a weekk. Contact immediately', NULL, '2024-02-13 17:21:18', '2024-02-13 17:21:18'),
(150, 'Kaviyarasu A S', '9786695777', 'kavigaya2000@gmail.com', 'G', 'Ssrxff ggded', NULL, '2024-02-13 19:40:41', '2024-02-13 19:40:41'),
(151, 'Patricia Clarke', '9044499765', 'pacdevilwoman@gmail.com', 'Spelling Error in a book', 'I purchased Early Learning Library Book Set of 10 Books. In the book of colors,  the word violet is spelled incorrectly.  It is spelled voilet in the book. I took a photo of the page but am unable to attach it to this email.', NULL, '2024-02-13 21:20:18', '2024-02-13 21:20:18'),
(152, 'Monika Garg', '9888161314', 'garg93131@gmail.com', 'I want classics books', 'I want to purchase classic books for kids', NULL, '2024-02-17 07:35:25', '2024-02-17 07:35:25'),
(153, 'Monika Garg', '9888161314', 'garg93131@gmail.com', 'I want classics books', 'I want to purchase classic books for kids', NULL, '2024-02-17 07:35:26', '2024-02-17 07:35:26'),
(154, 'Konchok', '6006051638', 'redcliffadventure@gmail.com', 'Wholesale rate of color filling book for children.', 'Hello, Sir/ Madam! \r\nI wanted to know the wholesale price per book of color filling book for children and what time it takes to deliver the product. \r\nPlease help me out in this regard!', NULL, '2024-02-18 15:30:02', '2024-02-18 15:30:02'),
(155, 'Bharti Sanganeria', '9864800900', 'bharti.kanoria@gmail.com', 'Procurement of books for reselling', 'Hello, we own a kids store and are very much interested in your books.', NULL, '2024-02-18 16:28:33', '2024-02-18 16:28:33'),
(156, 'Kaavya Malhotra', '9811419220', 'kaavya.malhotra@gmail.com', 'Internship', 'Hello, My Name is Kaavya and I am currently a second year student at Amsterdam University College. I focus largely on Literature and Culture and would like to explore internship opportunities at WonderHouse if possible. I will be in India for the months of August 2024 and January 2025 and would love to know about potential internships at either of those times. Please let me know if there are any openings, or if there is anything else you would like to know about me.  Thank you for your time,  Kaavya', NULL, '2024-02-20 17:37:10', '2024-02-20 17:37:10'),
(157, 'Amreen', '9148593123', 'amreenkhana803@gmail.com', 'Bulk ordering', 'Hi\r\nWe are interested in bulk purchase please call me on my  number', NULL, '2024-02-21 10:33:23', '2024-02-21 10:33:23'),
(158, 'Mallika Ravikumar', '9820623842', 'mallikaravikumariyer@gmail.com', 'Manuscript Submissions', 'Hi! I am an award-winning children\'s author, published by Penguin, Hachette, Speaking Tiger amongst others. My books have won awards at the Bangalore Literature Festival and the Tata Lit Live, Mumbai.  I wish to submit a manuscript for a picture book to your publishing house. Kindly let me know if you are accepting manuscripts and how I may do that. Thank you and regards,', NULL, '2024-02-21 20:03:54', '2024-02-21 20:03:54'),
(159, 'Rey', '4352380665', 'rey@delsolbooks.com', 'My First 1000 English-Espanol Words for Kids', 'I would like to purchase 50 of My First 1000 English-Espanol Words for Kids 978-9354403910.  What would be the discount if I purchased them on a Non-Returnable Basis with a Credit Card up front?  Thanks, and all the best, Rey, delsolbooks.com', NULL, '2024-02-22 21:01:19', '2024-02-22 21:01:19'),
(160, 'Hema Sai', '7981385195', 'hemasaisvis@gmail.com', 'Downloading Catalog', 'Downloading Catalog', NULL, '2024-02-23 12:02:36', '2024-02-23 12:02:36'),
(161, 'Aiman Tasleem', '7053428801', 'amysheikh06@gmail.com', 'Job Application For Operations and Activation', 'Hi Ma\'am/Sir,\r\n\r\nI hope this email finds you well. I\'m looking for a job change in operations and activation specifically in publishing industry as I have 6 years of experience into it. If there is anything kindly feel free to contact me. I\'m looking forward to hearing from you. Please find attached my resume for your reference.\r\n\r\nThanks and Regards\r\nAiman Tasleem\r\n7053428801', NULL, '2024-02-24 08:56:38', '2024-02-24 08:56:38'),
(162, 'Chandan Tripathy', '9884401459', 'tripathy.chandan@gmail.com', 'Typing Error in Ramayan by Shubha Vilas', 'Hi WH publications,\r\nWe bought a hardbound cover of the book Ramayan, by Dr. Shubha Vilas, printed by your Wonderhouse publications.\r\nOn Page no.20, the word \'thrm\' is repeated twice, instead it should be \'them\' followed by \'then\'.\r\nThis was identified by my duaghter, Ashleshaa Tripathy, 6yrs to my surprise. And, therefore, I wanted to bring it to your notice for  correction in further revision. \r\nChandan', NULL, '2024-02-24 11:10:49', '2024-02-24 11:10:49'),
(163, 'unnati bhatnagar', '7757958875', 'bhatnagarrudrakshi@gmail.com', 'showing error while attaching sample file', 'could you guide me to upload my submission', NULL, '2024-02-24 12:13:48', '2024-02-24 12:13:48'),
(164, 'Anna Iacovetta', '2165434667', 'annashakar@gmail.com', 'Work for hire?', 'I am writing to see if have any work for hire opportunities in children’s fiction or nonfiction.  I’m more than happy to share my qualifications.', NULL, '2024-02-25 03:52:30', '2024-02-25 03:52:30'),
(165, 'SK RAHUL', '8848839756', 'ra.skrahul@gmail.com', 'Enquiry for Submission process', 'Hi Wonder house team,\r\nI hope this message finds you well.\r\nI wanted to enquiry about the process of submitting a book. Can you please share the detailed process of submission along with any documents available.   Your prompt attention to this matter would be much appreciated. \r\nThank you', NULL, '2024-02-25 07:05:21', '2024-02-25 07:05:21'),
(166, 'Kalai', '8056117729', 'kalaipappu09@gmail.com', 'Books', 'Need books', NULL, '2024-02-26 14:28:58', '2024-02-26 14:28:58'),
(167, 'Mangal', '9594990594', 'mangal@procter.in', 'Bulk Requirement', 'I need Mandala Coloring book in bulk for 300 pcs\r\nPlease connect', NULL, '2024-02-28 02:53:47', '2024-02-28 02:53:47'),
(168, 'Jhansi rani', '9398323667', 'jhansilibrary123@gmail.com', 'Request for information about books delivery', 'To know details about delivery of books for pre school students', NULL, '2024-02-28 06:57:52', '2024-02-28 06:57:52'),
(169, 'Siddhant', '8878802781', 'siddhantarela19@gmail.com', 'Job', 'Hello,\r\nI am Siddhant this side. Working in Oswaal books as in influencer marketing head early learning category. Want yo consult regarding sale profile in wonder House .\r\nThankyou', NULL, '2024-02-28 16:22:37', '2024-02-28 16:22:37'),
(170, 'VqYQyPiHS', '4759901482', 'philip30cross4ot@outlook.com', 'GhOKvoeARQ', 'mkjsvJurObnQ', NULL, '2024-02-29 00:19:34', '2024-02-29 00:19:34'),
(171, 'VqYQyPiHS', '4759901482', 'philip30cross4ot@outlook.com', 'GhOKvoeARQ', 'mkjsvJurObnQ', NULL, '2024-02-29 00:19:38', '2024-02-29 00:19:38'),
(172, 'VqYQyPiHS', '4759901482', 'philip30cross4ot@outlook.com', 'GhOKvoeARQ', 'mkjsvJurObnQ', NULL, '2024-02-29 00:19:41', '2024-02-29 00:19:41'),
(173, 'JRFfUuHWnTzska', '8844019937', 'philip30cross4ot@outlook.com', 'RQIbLgJlzUSytq', 'TlgSdQjKHiZVIqmb', NULL, '2024-02-29 00:20:13', '2024-02-29 00:20:13'),
(174, 'JRFfUuHWnTzska', '8844019937', 'philip30cross4ot@outlook.com', 'RQIbLgJlzUSytq', 'TlgSdQjKHiZVIqmb', NULL, '2024-02-29 00:20:16', '2024-02-29 00:20:16'),
(175, 'JRFfUuHWnTzska', '8844019937', 'philip30cross4ot@outlook.com', 'RQIbLgJlzUSytq', 'TlgSdQjKHiZVIqmb', NULL, '2024-02-29 00:20:19', '2024-02-29 00:20:19'),
(176, 'Mehraj', '8801237766', 'md.mehraj.hasan@gmail.com', 'Bulk book purchase', 'I hope this email finds you well. I am writing to inquire about purchasing books in bulk from your esteemed publishing company.\r\n\r\nAllow me to introduce ourselves - we are a reputable bookseller based in Hyderabad, catering to a wide range of readers and book enthusiasts. We have recently expanded our operations and are keen on offering an extensive collection of books to our customers.\r\n\r\nAfter conducting thorough research, we were impressed by the quality and variety of books published by your company. We believe that collaborating with your publishing house would be mutually beneficial for both parties involved.\r\n\r\nTo that end, we kindly request you to provide us with a quotation. (Kids books)\r\nPlease include any available discounts or special rates for bulk orders, as well as any terms and conditions that apply.\r\n\r\nAdditionally, we would appreciate it if you could provide us with information on the availability and estimated delivery time for the requested quantity.\r\n\r\nWe value promptness and efficiency in our business dealings, so we kindly request that you respond to this email. \r\nShould you require any further details or have any questions regarding our request, please do not hesitate to reach out to us at. We are more than happy to discuss any aspects further or provide any additional information required.\r\n\r\nThank you very much for considering our request. We look forward to establishing a fruitful business relationship with your esteemed publishing house', NULL, '2024-03-01 20:50:58', '2024-03-01 20:50:58'),
(177, 'Sudip Bhawal', '9748205061', 'gangaramsk@hotmail.com', 'ENQUIRY FOR PICTORIAL BOOK', 'We have a requirement of 4000 copies of PICTORIAL BOOK (ALL-IN-ONE BOOK ENGLISH-HINDI).', NULL, '2024-03-02 11:49:55', '2024-03-02 11:49:55'),
(178, 'RekhaSalin', '9182945847', 'rekhasalin06@gmail.com', 'Illustrator Submission', 'Hi,\r\nHoping this email finds you well. \r\nI am Rekha, a children illustrator who loves to tell stories with bright colors and and storytelling. \r\nWould love to connect and work with you. \r\n\r\nBelow are my details\r\nPortfolio- www.rekhasalin.com\r\nbest\r\nRekha', NULL, '2024-03-03 04:28:53', '2024-03-03 04:28:53'),
(179, 'Girija Nair', '9847102717', 'eyc@cochins.org', 'Patterns and lines books', 'Would like to.see sample books for patterns for kindergarten', NULL, '2024-03-03 22:51:42', '2024-03-03 22:51:42'),
(180, 'Alefiya S. Tikiwala', '7000335367', 'saifeealef@gmail.com', 'Bulk order for 50 board books', 'Hi Team\r\nI want to order books for toddlers for birthday party return gift. I am looking for per book under 50/-. Also only board books informative or story for kids aged 2-3.', NULL, '2024-03-05 10:55:52', '2024-03-05 10:55:52'),
(181, 'Aidoo Kingsford Blessing', '0243277201', 'oforig491@gmail.com', 'Inventory scientist', 'I need', NULL, '2024-03-05 20:17:06', '2024-03-05 20:17:06'),
(182, 'Chantarat', '6686644011', 'littleexplorerstore@gmail.com', 'Distributors in Thailand', 'Dear Wonder House team,\r\nWe are Little Explorer Bookstore; an online bookstore in Thailand. We are interested in your children’s books. We would like to add your books selling in our store. Do you have any distributors or sellers in Thailand? \r\n\r\nRegards,\r\nChantarat \r\nLittle Explorer owner', NULL, '2024-03-06 06:29:51', '2024-03-06 06:29:51'),
(183, 'Pooja', '9797856531', 'poojamahajan1531@gmail.com', 'All', 'Preschool books', NULL, '2024-03-07 13:26:17', '2024-03-07 13:26:17'),
(184, 'Aasif Husain', '7869450808', 'aasifhusainanta@gmail.com', 'For Selling Purpose', 'For Selling Purpose', NULL, '2024-03-07 17:22:25', '2024-03-07 17:22:25');
INSERT INTO `contactuses` (`id`, `name`, `phone`, `email`, `subject`, `message`, `deleted_at`, `created_at`, `updated_at`) VALUES
(185, 'Sai rohith', '7416541522', 'sairohith.ca@gmail.com', 'We want to place an order for our store.', 'Dear Publisher, I am writing to place an order for books for our store. We are interested in purchasing a variety of titles in both fiction and non-fiction genres, and we believe that your publishing company has a number of titles that would be a good fit for our customers\r\nPlease send me the catalogue with price list\r\nPlease contact me back at your earliest convenience\r\nMobile number -7416541522\r\nSrinivasa stationery and general,jangaon, Telangana -506167', NULL, '2024-03-09 04:48:22', '2024-03-09 04:48:22'),
(186, 'Shalini Agrawal', '9810521117', 'blissplayschool@gmail.com', 'Pre School Books', 'Looking for Pre school Books, pl call back', NULL, '2024-03-09 11:53:37', '2024-03-09 11:53:37'),
(187, 'Chander', '9414790822', 'chanderpensiya@gmail.com', 'All', 'For new school', NULL, '2024-03-09 14:59:25', '2024-03-09 14:59:25'),
(188, 'Emily Jones', 'Ydo qjerxf', 'emilyjones2250@gmail.com', 'Youtube Promotion: 700 new subscribers each month', 'Hi there,\r\n\r\nWe run a YouTube growth service, which increases your number of subscribers both safely and practically. \r\n\r\n- We guarantee to gain you 700-1500+ subscribers per month.\r\n- People subscribe because they are interested in your channel/videos, increasing likes, comments and interaction.\r\n- All actions are made manually by our team. We do not use any \'bots\'.\r\n\r\nThe price is just $60 (USD) per month, and we can start immediately.\r\n\r\nIf you have any questions, let me know, and we can discuss further.\r\n\r\nKind Regards,\r\nEmily', NULL, '2024-03-09 20:28:34', '2024-03-09 20:28:34'),
(189, 'Pinki Pal', '8697028941', 'pinki.pal2008@gmail.com', 'Information about sponsorship program', 'Sir/Madam, \r\nI have a youtube channel on kids education. The link of my channel is  https://youtube.com/@MomsMagicalTips?si=Xy6XE3wMlSJSxe9- Have you any sponsorship program for books?', NULL, '2024-03-10 03:54:01', '2024-03-10 03:54:01'),
(190, 'Pushpalatha G S', '9880964111', 'contact.pushpalathags@gmail.com', 'Request for publication policy', 'Dear sir/madam, \r\nI have developed an innovative activity book , titled \'Binary Coding Activities\', an activity based learning of coding concepts using binary numbers, for children above 7years . I am looking for publishing this work. So I kindly request you to share more details about your publication policy. \r\nThank you', NULL, '2024-03-10 05:02:59', '2024-03-10 05:02:59'),
(191, 'Sarda Maibam', '9737490094', 'sarda.1331@gmail.com', 'Nursery', 'Want same samples for pre nursery and nursery', NULL, '2024-03-10 06:42:14', '2024-03-10 06:42:14'),
(192, 'zyRlrMpqEceQ', '2727297839', 'freda37meckesshk@outlook.com', 'QGnTmkaAXZfuF', 'TcdHuGaIwWJrgvf', NULL, '2024-03-11 04:37:31', '2024-03-11 04:37:31'),
(193, 'zyRlrMpqEceQ', '2727297839', 'freda37meckesshk@outlook.com', 'QGnTmkaAXZfuF', 'TcdHuGaIwWJrgvf', NULL, '2024-03-11 04:37:35', '2024-03-11 04:37:35'),
(194, 'Dr Anant Patil', '8600511444', 'anantbds@gmail.com', 'Full set', 'Need full set of space for mychild where should I get it .', NULL, '2024-03-11 11:02:20', '2024-03-11 11:02:20'),
(195, 'Sukhbir Singh', '9810800732', 'sukhbirsrohil@gmail.com', 'Regarding vacancy of Warehouse manager', 'Regarding vacancy of Warehouse manager', NULL, '2024-03-11 11:14:15', '2024-03-11 11:14:15'),
(196, 'Aman Soni', '7999501631', 'amansoni885@gmail.com', 'Books for our school', 'Please send me your catlouge', NULL, '2024-03-12 14:05:39', '2024-03-12 14:05:39'),
(197, 'Aryan Agrawal', '7999824055', 'Aryan@youthrobe.com', 'Read description', 'Dear ,\r\n\r\nI hope this email finds you well. My name is Aryan Agrawal, Founder and CEO of Youth Robe, a dynamic platform dedicated to promoting literature and connecting readers with captivating content. I am reaching out to discuss a potential partnership opportunity that I believe could greatly benefit both of our organizations.\r\n\r\nAt Youth Robe, we are committed to curating an exceptional selection of books that resonate with readers of all ages and interests. We have been following your publishing endeavors with great admiration and are impressed by the quality and diversity of your titles.\r\n\r\nRecognizing the immense potential of online marketplaces such as Amazon and Flipkart, we are eager to expand our reach and offer your esteemed publications to a broader audience. These platforms provide unparalleled exposure and accessibility, allowing us to connect with readers worldwide and amplify the impact of your work.\r\n\r\nBy leveraging the advanced marketing tools and distribution networks available on Amazon and Flipkart, we can strategically position your books for maximum visibility and engagement. Our team at Youth Robe is experienced in navigating these platforms and optimizing product listings to drive sales and enhance discoverability.\r\n\r\nWe firmly believe that a partnership between Youth Robe and your esteemed publishing house would be mutually beneficial. By joining forces, we can elevate the visibility of your titles, increase sales, and foster deeper connections with readers who are eager to explore your literary offerings.\r\n\r\nI am eager to discuss this opportunity further and explore how we can collaborate to bring your books to new heights of success. Please let me know if you would be interested in exploring this partnership, and I would be delighted to provide more information or address any questions you may have.\r\n\r\nThank you for considering this proposal. I am genuinely excited about the possibility of working together and contributing to the continued success of your publishing endeavors.\r\n\r\nWarm regards,\r\n\r\nAryan Agrawal\r\nFounder and CEO\r\nYouth Robe\r\n+917999824055', NULL, '2024-03-12 19:59:03', '2024-03-12 19:59:03'),
(198, 'Monika Garg', '9888161314', 'garg93131@gmail.com', 'Library books', 'I want to purchase books for students', NULL, '2024-03-13 09:39:56', '2024-03-13 09:39:56'),
(199, 'Hemamalini', '9442644803', 'hema671@gmail.com', 'Books for play school', 'Require term books for pre Kg', NULL, '2024-03-13 23:52:19', '2024-03-13 23:52:19'),
(200, 'Grace', '7010082755', 'gracedivya18@gmail.com', 'Retail purchase eRetailer', 'Want details', NULL, '2024-03-14 14:38:46', '2024-03-14 14:38:46'),
(201, 'Vijender', '9818995081', 'info@valeobooks.com', 'Looking for Distribution Partnership - Valeo Books', 'Dear Publisher,\r\n\r\nI hope this email finds you well.\r\n\r\nMy name is Vijender, I am representing Valeo Books - A Books Distributor & Wholesaler based in india. We are offering a wide range of books that includes diverse categories like Fiction, Non-Fiction, Biographies, History, Religious, Politics, Children, Competitive examinations, Management, Computer Science, Engineering, Medical, College and school text reference books etc. We currently have thousands of B2B and B2C customers, ranging from Individuals, small education hubs, Institutes, colleges, universities and many more…\r\n\r\nI am writing to express our interest in establishing a distribution partnership with your esteemed publishing house. With Our expertise and established distribution channels, we believe that we can work together to sell your books.\r\n\r\n\r\nThank you for your time and consideration. I look forward to hearing from you soon.\r\n\r\n\r\nThanks & Regards,\r\nVijender\r\n+91 9818995081', NULL, '2024-03-15 10:35:47', '2024-03-15 10:35:47'),
(202, 'xzyelirwHdXVNDIn', '8953592094', 'arogersic1983@gmail.com', 'eVSlTCXMbgLWkJ', 'PBTnRjfoIsSOw', NULL, '2024-03-15 13:46:07', '2024-03-15 13:46:07'),
(203, 'xzyelirwHdXVNDIn', '8953592094', 'arogersic1983@gmail.com', 'eVSlTCXMbgLWkJ', 'PBTnRjfoIsSOw', NULL, '2024-03-15 13:46:11', '2024-03-15 13:46:11'),
(204, 'xzyelirwHdXVNDIn', '8953592094', 'arogersic1983@gmail.com', 'eVSlTCXMbgLWkJ', 'PBTnRjfoIsSOw', NULL, '2024-03-15 13:46:16', '2024-03-15 13:46:16'),
(205, 'MoWjeFrAwtJ', '4393565499', 'arogersic1983@gmail.com', 'mgsCdnHEvL', 'mPOFIQaW', NULL, '2024-03-15 13:46:45', '2024-03-15 13:46:45'),
(206, 'MoWjeFrAwtJ', '4393565499', 'arogersic1983@gmail.com', 'mgsCdnHEvL', 'mPOFIQaW', NULL, '2024-03-15 13:46:52', '2024-03-15 13:46:52'),
(207, 'MoWjeFrAwtJ', '4393565499', 'arogersic1983@gmail.com', 'mgsCdnHEvL', 'mPOFIQaW', NULL, '2024-03-15 13:46:56', '2024-03-15 13:46:56'),
(208, 'Abi', 'Cqmkjl Dyk', 'contentwriting011994@outlook.com', 'Content Writing Service Provider', 'Hello,\r\n\r\nI\'m Abi, an English SEO copywriter and content writer. I excel in crafting blogs, articles, e-commerce product descriptions, SEO content, website content, business service descriptions, newsletter content, brochures, proofreading, social media captions, LinkedIn content, and SOPs.\r\n\r\nMy rate is USD 40 for every 1000 words of content. If you don\'t have time to plan out your content, we can help you with that. \r\n\r\nFeel free to email me at Contentwriting011994@outlook.com with any current requirements.\r\n\r\nThanks,\r\n\r\nAbi', NULL, '2024-03-15 20:56:03', '2024-03-15 20:56:03'),
(209, 'Quinton Banuelos', 'L Enf pb y', 'banuelos.quinton@outlook.com', 'Hello wonderhousebooks.com Admin.', 'Did you hear about the SETC (sick leave and family leave tax credit) program that the IRS is closing after April 15th, 2024? \r\nThis is the same CARE program as the stimulus check that was mailed to your house during COVID. \r\nYou can receive up to $511 per person per day (up to $32,220) that you couldn’t work during the pandemic. \r\n\r\nDon’t miss your COVID tax credit: \r\nCall Kerry at 480-790-9186\r\nEmail Kerry at duc@directfunder.com\r\nOr watch the explanation here: https://taxcreditfunder.com/en/', NULL, '2024-03-16 06:36:55', '2024-03-16 06:36:55'),
(210, 'SHALINI MODI', '9910496845', 'shalinimodi71@gmail.com', 'submissions', 'not sure if my submission was successful', NULL, '2024-03-16 09:11:18', '2024-03-16 09:11:18'),
(211, 'Mehta stationers', '9549995961', 'mehtastationers01@gmail.com', 'distributor in jaipur', 'does you have any distributor in jaipur ?', NULL, '2024-03-16 11:49:26', '2024-03-16 11:49:26'),
(212, 'Rajesh', '9274950050', 'rajesh.parmar6@gmail.com', 'alphabet phonics', 'need below books', NULL, '2024-03-20 06:41:13', '2024-03-20 06:41:13'),
(213, 'Komal', '9582598698', 'kbakhitianee@yahoo.co.in', 'Know about books', 'Want to know about the book pencil control', NULL, '2024-03-20 06:43:29', '2024-03-20 06:43:29'),
(214, 'nBsZqFvgkTN', '9652093553', 'kristen5d_harrisontn@outlook.com', 'YmgsepaSKV', 'LIXjNgwnq', NULL, '2024-03-20 12:59:22', '2024-03-20 12:59:22'),
(215, 'nBsZqFvgkTN', '9652093553', 'kristen5d_harrisontn@outlook.com', 'YmgsepaSKV', 'LIXjNgwnq', NULL, '2024-03-20 12:59:26', '2024-03-20 12:59:26'),
(216, 'nBsZqFvgkTN', '9652093553', 'kristen5d_harrisontn@outlook.com', 'YmgsepaSKV', 'LIXjNgwnq', NULL, '2024-03-20 12:59:29', '2024-03-20 12:59:29'),
(217, 'lfsLMJduixFAhcPm', '7741535336', 'kristen5d_harrisontn@outlook.com', 'iTNgUtJRHnVZQz', 'qRXyrQzbIMemOZ', NULL, '2024-03-20 13:00:10', '2024-03-20 13:00:10'),
(218, 'lfsLMJduixFAhcPm', '7741535336', 'kristen5d_harrisontn@outlook.com', 'iTNgUtJRHnVZQz', 'qRXyrQzbIMemOZ', NULL, '2024-03-20 13:00:14', '2024-03-20 13:00:14'),
(219, 'lfsLMJduixFAhcPm', '7741535336', 'kristen5d_harrisontn@outlook.com', 'iTNgUtJRHnVZQz', 'qRXyrQzbIMemOZ', NULL, '2024-03-20 13:00:18', '2024-03-20 13:00:18'),
(220, 'Monica Delaunay', 'Upvkpbh Fz', 'crisisrelief@un.org', 'The People Of Gaza Currently Need Humanitarian Aid', 'Civilians are paying a horrific price for the ongoing war.\r\n\r\nOver 3 million people in the Gaza Strip and the West Bank need urgent humanitarian aid and protection.\r\n\r\nYou can help families caught up in this catastrophic situation.\r\n\r\nPlease donate to support the Internally Displaced People of Gaza.\r\n\r\nThey need your humanitarian support at the moment. \r\n\r\nAny donation amount is welcome. Please send your donations to any of the Wallets below;\r\n\r\n\r\nUSDT (TRC20)\r\nTJaWSdAwLFvmAL2pfY4EEDfC4X8cB9LkPc\r\n\r\nBTC\r\n14PtgSwcrGD3vwrZM8MaF5YfHG6ZPMD5fY\r\n\r\nBTC\r\n38cT8cSFXwm7ofL3sBy4woCjxwon6wmcqy\r\n\r\nBTC\r\nbc1q7kq6ffew005s6wugh5yl5thexky2sxff6yplm3\r\n\r\nFor credit card payment, visit https://crisisrelief.un.org/opt-crisis\r\n\r\nYour donation will go to the Occupied Palestinian Territory Humanitarian Fund – one of the quickest and most effective ways to support urgent relief on the ground.\r\n\r\nThe Fund collects contributions continuously so it can directly support a wide range of partners to address the highest priority humanitarian activities.\r\n\r\nThe Fund is managed by the United Office for the Coordination of Humanitarian Affairs on behalf of the Humanitarian Coordinator.\r\n\r\nTogether, We Can Make The World A Better Place.', NULL, '2024-03-22 13:31:55', '2024-03-22 13:31:55'),
(221, 'Crystal Murakami', '3106194633', 'crystal@eastwestdiscovery.com', 'Wholesale Trade Account Inquiry', 'Hello,\r\n\r\nGood Morning. I\'d to introduce our company, East West Discovery Press, to potentially set up a trade account. We are an independent book distributor based in California specializing in bilingual books to educational institutional customers. Our website is www.eastwestdiscovery.com.\r\n\r\nWe are interested in reviewing and potentially carrying some of your popular Hindi Children’s books. Do you have a distributor in the United States? We like your Hindi Learning Library Set among a few other titles. \r\n\r\nIf you have a distributor or are able to ship to us, what is your wholesale non-returnable discount, payment terms, minimum qty requirements, and shipping fees? \r\n\r\nWe look forward to hearing from you. Thank you!\r\n\r\nThank you,\r\n\r\nCrystal Murakami\r\nDirector | East West Discovery Press\r\nP 310-545-3730\r\nF 310-545-3731\r\nE crystal@eastwestdiscovery.com\r\nW www.eastwestdiscovery.com', NULL, '2024-03-22 13:40:05', '2024-03-22 13:40:05'),
(222, 'Jasmeen Wahn', '9011758181', 'jasmeen.wahn@gmail.com', 'Meet regarding publishing a board book', 'Hi,\r\n\r\nI am Jasmeen from Nagpur. And have drafted a picture book on positive affirmations for toddlers (3-6 years) and have a theme of extending it as a series. I will be in Delhi on 8th April and wanted to know if we can meet for it.\r\n\r\nThanks.\r\n\r\nWarm Regards,\r\nJasmeen Wahn', NULL, '2024-03-22 16:38:01', '2024-03-22 16:38:01'),
(223, 'Peer', '9597668881', 'sales@southpoletradelink.com', 'Bulk order for Export', 'We would like to place order for export, please send us your product list', NULL, '2024-03-24 10:08:59', '2024-03-24 10:08:59'),
(224, 'Mohamed nazim', '9607778116', 'nurserybookshop1004@gmail.com', 'Interested to purchase books', 'Kindly pls. share your catalog', NULL, '2024-03-25 05:09:12', '2024-03-25 05:09:12'),
(225, 'Jeganathan', '6380243712', 'jegant88@gmail.com', 'Christian books', 'Hi Team, \r\n\r\nI have seen many Christian books in Amazon, do give wholesale for us to sell it retail? \r\n\r\nRegards, \r\nJegan', NULL, '2024-03-25 12:37:15', '2024-03-25 12:37:15'),
(226, 'Deepak', '8800549949', 'deepaksta@gmail.com', 'tthellow testing', 'This this is tsting from Dx', NULL, '2024-03-26 04:51:16', '2024-03-26 04:51:16'),
(227, 'Deepak', '8800549949', 'deepaksta@gmail.com', 'tthellow testing', 'This this is tsting from Dx', NULL, '2024-03-26 04:51:16', '2024-03-26 04:51:16'),
(228, 'sahithi', '8106418570', 'swasaenterprises@gmail.com', 'Looking for Indian themed books for young children', 'Looking for Indian themed books for young children - atleast 50-100 books. Could you do a bulk order & pricing as we are planning on promoting these books in Canada and offering them at a temple for young indian kids to understand our culture and stories', NULL, '2024-03-26 08:57:50', '2024-03-26 08:57:50'),
(229, 'Divya', '9949204440', 'divyaghattamaneni@gmail.com', '30 books of my first travel', 'I would like to order 30 books of My First Travel as return gifts for my son\'s bday. Would like check if you can mail me books.', NULL, '2024-03-27 09:31:51', '2024-03-27 09:31:51'),
(230, 'Angel Custer', 'Kmfht Acrq', 'angel.custer@hotmail.com', 'Venture Sales - We\'ve got you covered', 'Hi\r\n\r\nWe are a venture sales agency that works with you to uncover the best leads for your industry.\r\n\r\nAfter finding targeted leads for you, warm intros are sent to them ensuring a steady steam of viable clients to your website.\r\n\r\nThere are no subscriptions and we only take a small commision on sales that we are able to generate for you.\r\n\r\nFind out more at: https://wonderhousebooks.leadsmax.biz', NULL, '2024-03-28 23:50:42', '2024-03-28 23:50:42'),
(231, 'Danielle Simpson', 'Y Infco oo', 'simpsondanielle800@gmail.com', 'Explainer Video for your website?', 'Hi,\r\n\r\nWe\'d like to introduce to you our explainer video service, which we feel can benefit your site wonderhousebooks.com.\r\n\r\nCheck out some of our existing videos here:\r\nhttps://www.youtube.com/watch?v=bWz-ELfJVEI\r\nhttps://www.youtube.com/watch?v=Y46aNG-Y3rM\r\nhttps://www.youtube.com/watch?v=hJCFX1AjHKk\r\n\r\nAll of our videos are in a similar animated format as the above examples, and we have voice over artists with US/UK/Australian accents. We can also produce voice overs in languages other than English.\r\n\r\nThey can show a solution to a problem or simply promote one of your products or services. They are concise, can be uploaded to video sites such as YouTube, and can be embedded into your website or featured on landing pages.\r\n\r\nOur prices are as follows depending on video length:\r\nUp to 1 minute = $259\r\n1-2 minutes = $379\r\n2-3 minutes = $489\r\n\r\n*All prices above are in USD and include a full script, voice-over and video.\r\n\r\nIf this is something you would like to discuss further, don\'t hesitate to reply.\r\n\r\nKind Regards,\r\nDanielle', NULL, '2024-03-29 04:39:36', '2024-03-29 04:39:36'),
(232, 'Ayesha Dokania', '7549088767', 'ayeshadokania1991@gmail.com', 'Books not available on Amazon USA', 'I m looking for\' My first shaped Animal books\" for kids. And it\'s showing temporarily out of stock. I want few in New Jersey,USA. Asap', NULL, '2024-03-29 04:40:10', '2024-03-29 04:40:10'),
(233, 'Deepak', '9999999999', 'deepaksta@gmail.com', 'tthellow testing', 'testte', NULL, '2024-03-29 10:45:38', '2024-03-29 10:45:38'),
(234, 'Deepak', '9999999999', 'deepak@digitalxplode.com', 'tthellow testing', 'test', NULL, '2024-03-29 10:45:53', '2024-03-29 10:45:53'),
(235, 'Karan', '9321566606', 'karan@pappytech.com', 'Bulk Purchase for resale', 'We are based out of Mumbai and interested in buying in bulk for resale. Kindly connect me to the concerned team', NULL, '2024-03-29 13:04:17', '2024-03-29 13:04:17'),
(236, 'arhaan', '9456606679', 'arhaanm35@gmail.com', 'Order of 10 qty of book for reselling on amazon', 'Dear Sir/Mam\r\nI want to purchase 10 quantity of  The Golden Touch of Midas book for reselling on amazon.\r\nKindly provide me the wholesale price and invoice in my billing address mentioned below.\r\n\r\nBOOKSLARY\r\nF-845, 8th Floor, Gaur Atulyam, 130 Meter Road, Omicron 1, Greater Noida, 201310.\r\n+91-8899405354\r\n\r\nI will make advance payment.\r\n\r\n\r\nRegards', NULL, '2024-03-29 19:02:15', '2024-03-29 19:02:15'),
(237, 'Preston Jones', 'Zrdt Ynzyx', 'dfysuite@truevaule.xyz', 'DONE-for-YOU authority links', 'Can you imagine how powerful it would be if you had someone that can handle ALL your social syndication for your videos, niche sites and client sites etc?\r\n\r\nWouldn’t that take A TON off of your plate and allow you to focus on more IMPORTANT things..\r\n\r\nWe all know that social syndication is the #1 way to skyrocket your content to the first page of Google, right?\r\n\r\nHowever, it can sometimes be a BIG pain in the butt..\r\n\r\nYou’re either having to do it MANUALLY (which I wouldn’t wish on my WORSE enemy lol)\r\n\r\nYou have to buy software that does it for you (which some are VERY complicated to learn and you still have to manually create ALL your accounts)\r\n\r\nAnd then there’s OPTION 3!!\r\n\r\nTap into a PROVEN system that does it ALL for YOU!\r\n\r\nA couple of genius SEO marketers have created a system that does EXACTLY that: https://www.truevaule.xyz/dfysuite .\r\n \r\nThey’ve SIMPLIFIED the ENTIRE social syndication process so that ANYONE can tap into the power of Page 1 rankings – EVEN if they SUCK at SEO or are BRAND new to the subject. (LIKE me)\r\n\r\nPLUS they have just opened the doors to their updated and GREATLY improved 5.0 version!\r\n\r\nIntroducing DFY Suite 5.0!\r\n\r\nDFY Suite will allow you to Get FREE, Targeted BUYER-Traffic In 48 Hours Or Less By Leveraging The Power Of High-Quality Social Syndication With their NEW, Done-For-YOU System!\r\n\r\nYup, you can now leverage the POWER of Page 1 Rankings Via Social Syndication for ANY location and/or ANY language with:\r\n\r\n– NO Software To Install\r\n– No Software Training To Learn\r\n– No previous SEO knowledge or experience\r\n– No Social Account Creation Needed\r\n– No Content Needed Besides their URL\r\n– No Proxies or Captchas Needed\r\n– NONE of that stuff..\r\n\r\nHeck, you don’t even need to KNOW what social syndication IS lol\r\n\r\nAll you need to do is:\r\n\r\n1. Login to the web-based portal\r\n2. Submit your Keywords and URL you want traffic for\r\n3. Hit “Submit”\r\n\r\nYup, That’s IT!\r\n\r\nFrom There their System Will Get To Work And Build You HUNDREDS of High-Quality Syndication Links To Your Content to skyrocket it to page 1 of Google!\r\n\r\nPLUS, if you’re 100% NEW to SEO, they’re also including a quick CRASH course on Keyword Research AND Content optimization that should take you no more than 20-30 minutes to go through.\r\n\r\nWith DFY Suite PLUS the Keyword Research and Content Optimization crash course, you’ll be able to start getting traffic from Google without EVER having to spend HOURS upon HOURS doing the HEAVY-LIFTING yourself.\r\n\r\nCheck out DFY Suite Here: https://www.truevaule.xyz/dfysuite \r\n\r\n“But wait, did you say they’ve just opened 5.0?”\r\n\r\nYup, and with their 5.0 updates they have made their platform BETTER, FASTER and MORE powerful to Deliver you even MORE rankings, Traffic & sales.\r\n\r\nIn version 5.0 they have:\r\n\r\n– 5x’d their sites, 5x’d the authority, 5x’d the ranking power! Now instead of being able to get up to 200 different syndication links to your content, you can get up to 1,000! And the domains they’ve added are ALL packing A LOT more authority\r\n\r\n– Done for you GLOBAL Rankings. Yup, WORLDWIDE Rankings are finally HERE via their multi-language support. Yes, you read that correctly! They now cover EVERY LANGUAGE you can think of, so you can get page 1 rankings REGARDLESS of where you are in the world!\r\n\r\n– Totally revamped their server set up to now Include IP’s from ALL over the world to SUPERCHARGE their new WORLDWIDE ranking power!\r\n\r\n– Totally revamped their content generation system Which is now powered by REAL Artificial intelligence With Creaite being the engine to that! REAl A.I means QUALITY, unique content being written for EVERY campaign You submit. And we ALL know how much Google loves quality content.\r\n\r\n– and much much more… (they have a WHOLE section And video covering what’s new in 5.0 – there’s 7 MAJOR updates total)\r\n\r\nThis is EASILY their MOST powerful update To date and you can get access to it at an INSANE discount.\r\n\r\nCheck out how it works here:  https://www.truevaule.xyz/dfysuite\r\n\r\nThis is the GO-TO platform for DFY, page 1 rankings!\r\n\r\nPreston Jones\r\n\r\n\r\nP.S. Getting page 1 rankings has NEVER been easier.\r\n\r\nWith DFY Suite You’ll be able to:\r\n\r\n– rank your videos on page 1\r\n– rank your niche sites on page 1\r\n– rank your e-commerce sites on page 1\r\n– rank your Amazon listings\r\n– rank your CLIENT’s sites\r\n– rank ANY URL you’d like to get traffic for..\r\n\r\nIt’s really the PERFECT solution for us “lazy” seo marketers hahah\r\n\r\nAnd their 5.0 updates have REALLY taken things to the NEXT level!\r\n\r\ncheck it out here: https://www.truevaule.xyz/dfysuite \r\n\r\nUNSUBSCRIBE: https://www.truevaule.xyz/unsubscribe\r\n\r\nAddress: 3509 B Street, Farmington, MN 55024', NULL, '2024-03-30 04:10:41', '2024-03-30 04:10:41'),
(241, 'Rahul Singh', '7060421033', 'rahul@digitalxplode.com', 's', 'd', NULL, '2024-03-30 07:27:09', '2024-03-30 07:27:09'),
(242, 'anil kumar dua', '9931125359', 'akdua_60@hotmail.com', 'Charts for school', 'Would like to discuss about requirement of charts and accessories for a good run school', NULL, '2024-03-30 10:23:51', '2024-03-30 10:23:51'),
(243, 'anil kumar dua', '9931125359', 'akdua_60@hotmail.com', 'Charts for school', 'Would like to discuss about requirement of charts and accessories for a good run school', NULL, '2024-03-30 10:23:59', '2024-03-30 10:23:59'),
(244, 'gargi kundu', '8597723289', 'gargikundu13@gmail.com', 'want to buy books', 'I want to buy around 30 books directly from your publishing house.', NULL, '2024-03-30 14:34:25', '2024-03-30 14:34:25'),
(245, 'Neil', 'Muohj auup', 'brandbuildingassistance@outlook.com', 'Backlink Creation', 'Hi there,\r\n\r\nThis is Neil, and I\'m here to boost your brand\'s visibility and credibility by sharing your articles on other high-quality websites. This will establish your authority and enhance SEO. \r\nYour articles need to be at least 600 words, or I can write one for you at an extra cost.\r\n\r\nReady to elevate your brand? Reply at Brandbuildingassistance@outlook.com to begin.', NULL, '2024-03-30 14:35:04', '2024-03-30 14:35:04'),
(246, 'Garrett Curtain', 'Li Ni fciu', 'garrett.curtain@gmail.com', 'To the wonderhousebooks.com Owner!', 'Are rising business expenses and the cash flow roller coaster causing you stress? I can fix that, let me show you how. Send me an email below now.\r\n\r\nElizabeth Miller\r\nWorking Capital Loan Specialist\r\n295 Seven Farms Drive\r\nSuite C- 201\r\nCharleston, SC 29492\r\nwww.HelloRatesFastFunding.com\r\nelizabeth.miller@helloratesfastfunding.com', NULL, '2024-03-31 10:05:46', '2024-03-31 10:05:46'),
(247, 'ARPIT YADAV', '7404880813', 'arpityadav0719@gmail.com', 'Graphic Designer', 'Hi wonder house books  publications,\r\n\r\nI am a huge fan of your color book collections for kids. I have personally bought a few books for my nephew and he loves it. But I noticed that you have not publishes new color book in the past few months, which is a little disappointing for me.\r\n\r\nHow about I help you work on your upcoming color books at the prices you will decide , literally?\r\n\r\n\r\nI am a graphic designer based in Haryana and I love designing/curating designs that kids would love to color. I am super fast and amazing at what I do . how about you ask me for a single-page sample to test my work ? \r\n\r\nLooking forward to start working with you.\r\n\r\nThanks,\r\nArpit Yadav', NULL, '2024-04-01 07:46:18', '2024-04-01 07:46:18'),
(248, 'Rahul Singh', '7060421033', 'rahul@digitalxplode.com', 'domin dns', '?? \'\'', NULL, '2024-04-01 11:51:21', '2024-04-01 11:51:21'),
(249, 'Contact Us', '7060421033', 'rahul@digitalxplode.com', 'df', 'Contact Us', NULL, '2024-04-01 11:56:34', '2024-04-01 11:56:34'),
(250, 'Contact Us', '7060421033', 'rahul@digitalxplode.com', 'Contact Us', 'Contact Us', NULL, '2024-04-01 12:13:08', '2024-04-01 12:13:08'),
(251, 'message validation remove', '7060421033', 'rahul@digitalxplode.com', 'ddd', 'message validation remove', NULL, '2024-04-01 12:17:13', '2024-04-01 12:17:13'),
(252, 'Contact Us', '7060421033', 'rahul@digitalxplode.com', 'df', 'Contact Us', NULL, '2024-04-01 12:18:31', '2024-04-01 12:18:31'),
(253, 'Contact Us', '7060421033', 'rahul@digitalxplode.com', 'Contact Us', '', NULL, '2024-04-01 12:21:19', '2024-04-01 12:21:19'),
(254, 'MilanSeram', '9862825545', 'easternagencyseram@gmail.com', 'Enquiry', 'Dear sir, \r\nI\"ll love to know the trade discount of your products. \r\nThanks\r\nMilan Seram\r\nEastern Agency\r\nImphal, Manipur', NULL, '2024-04-02 07:20:28', '2024-04-02 07:20:28'),
(255, 'Thriveni G', '7305736612', 'nehar1511@gmail.com', 'Colouring books', 'I am a reseller running a shop at Chennai, I  wd be obliged if the books are been issued at wholesale price', NULL, '2024-04-02 15:25:25', '2024-04-02 15:25:25'),
(256, 'sOeqlLxc', '7569756544', 'charles43mayeriwe@outlook.com', 'goAKUNORCXxFcSIi', 'kyFuBDwiILxv', NULL, '2024-04-02 22:02:40', '2024-04-02 22:02:40'),
(257, 'sOeqlLxc', '7569756544', 'charles43mayeriwe@outlook.com', 'goAKUNORCXxFcSIi', 'kyFuBDwiILxv', NULL, '2024-04-02 22:02:43', '2024-04-02 22:02:43'),
(258, 'wAjsUaeucNMoVgh', '3642096604', 'charles43mayeriwe@outlook.com', 'FpyJngDdlLCRvHx', 'ABNdfMkiHFTpnyxL', NULL, '2024-04-02 22:02:45', '2024-04-02 22:02:45'),
(259, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'Book Proposal - VARISTAVIT AND VISITORS FROM SEA', 'Thank you for successfully accepting my manuscript for submission', NULL, '2024-04-03 05:52:02', '2024-04-03 05:52:02'),
(260, 'Michael Walker', 'O Ynqjmbji', 'coursemateai@nowbusiness.info', 'Like Udemy, but you own it and its profit!', 'Hi,\r\n\r\nEver wondered, \"What if Udemy and ChatGPT had a baby?\"     Well, ponder no more!\r\n\r\nMeet CourseMateAi, the revolutionary eLearning platform that\'s about to change the game: https://www.nowbusiness.info/coursemateai \r\n\r\nImagine owning your very own academy.     That\'s right, YOUR academy.     With CourseMateAi, it\'s not just a dream;     it\'s your new reality.\r\n\r\nBut wait, it gets even better.     CourseMateAi harnesses the power of AI technology to create courses on literally any topic you can think of.     Yes, ANY topic.     The possibilities?     Endless.\r\n\r\nThe best thing is, you get to keep 100% of the profits!\r\n\r\nWith CourseMateAi, you\'re not just an instructor;     you\'re a pioneer and leader in the world of eLearning.\r\n\r\nYou can now harness the power of AI to build your own academy with courses in any niche，and make a lot of dollars.\r\n\r\nYes, the AI creates the courses too.     Check out the demo here and join today: https://www.nowbusiness.info/coursemateai \r\n\r\nRight now, it\'s super affordable during the launch special, but due to high demand they plan to increase the price to a monthly subscription for those who join later.     So don\'t wait, check it out now!\r\n\r\nTo your success,\r\n\r\nMichael Walker\r\n\r\n\r\nUNSUBSCRIBE: https://www.nowbusiness.info/unsubscribe \r\nAddress: 1264 Prospect Street\r\nHaddonfield, NJ 08033', NULL, '2024-04-04 07:47:55', '2024-04-04 07:47:55'),
(261, 'Asem', '7003037114', 'turganbaevaa47@gmail.com', 'Ordering books from Kazakhstan', 'Hello, dear Madame or Sir\r\nMy name is Asem and I\'m an English teacher. I\'m writing this letter from capital city of Kazakhstan. I\'m interested in promoting your books here in Astana city. I would like to order Wonder House books officially and directly from publish house. Please give me feedback if it\' s possible.\r\nWith great respect to you, Asem', NULL, '2024-04-04 07:48:34', '2024-04-04 07:48:34'),
(262, 'Meir Khaperwal', '9899769089', 'meir.khaperwal@gmail.com', 'MANUSCRIPT SUBMISSION QUERY', 'Hello\r\nI would like to submit a manuscript for your consideration but I am unable to upload the illustrated sample chapters that I wish to share for you to review. Please contact me through my e-mail address so that I can provide you with the pdf file.', NULL, '2024-04-04 17:37:42', '2024-04-04 17:37:42'),
(263, 'Khushbu Patel', '8141381973', 'myschoolstore.mss@gmail.com', 'Shlokas and Mantras Books', 'Need 150 Nos. of Shlokas and Mantras Book', NULL, '2024-04-05 04:45:54', '2024-04-05 04:45:54'),
(264, 'Maire Kwok', '6263543277', 'mairekfogarty@gmail.com', 'Book misprint', 'Hi, I purchased the 20 book My First Library book set and the sea animals book has a misprint. Instead of sea animals on the 3rd and 4th page, it\'s pizza and pasta.  Could I get a replacement book? Thank you.', NULL, '2024-04-05 13:13:25', '2024-04-05 13:13:25'),
(265, 'Laura Mellor-Bachman', '2673372400', 'lauramb1213@gmail.com', 'ISBN Availability', 'Hi there, I am contacting you on behalf of a client in which we are curating a collection of books. Can you share with the the list price (USD) for the book and the quantity that you have in stock? \r\n978-9387779013 - Animal ABC: Playful Animals Teach A to Z by Wonder House Books.\r\nThank you!', NULL, '2024-04-05 15:30:27', '2024-04-05 15:30:27'),
(266, 'sarvamitra', '9686117700', 'mitrasarva@gmail.com', 'How do I submit my manuscript?', 'The submissions page seems to have a glitch and I am unable to upload my work. Is there a submission email ID to which I can send my work to? Kindly let me know. Looking forward to working with you.', NULL, '2024-04-06 11:29:49', '2024-04-06 11:29:49'),
(267, 'Jesenia Suggs', 'Yhz Ypazrw', 'jesenia.suggs@gmail.com', 'Hello wonderhousebooks.com Owner.', 'Are you ready to Save Thousands\r\n\r\nImagine the possibilities of saving thousands annually while providing essential health benefits to your team at no extra cost. Our program will help you save $500 per W2 employee each year, empowering your business to thrive financially. Don\'t let this opportunity slip away  Call 1-800-683-1978 or go to www.profits2024.com', NULL, '2024-04-07 08:41:05', '2024-04-07 08:41:05'),
(268, 'Maithri Arunkumar', '9940597582', 'maithri.doc29@gmail.com', 'Technical issue with submission', 'Hello, I am trying to submit a picture book but I am not able to upload the sample chapters on the submissions page. Kindly let me know if there is an email ID for submissions. Thank you and warm regards, Maithri', NULL, '2024-04-07 14:10:18', '2024-04-07 14:10:18'),
(269, 'test', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'hello doggo', NULL, '2024-04-08 04:29:13', '2024-04-08 04:29:13'),
(270, 'Chrissy', '8305340462', 'chrissyhuth@yahoo.com', 'Table of Contents', 'I am selecting books for parents to purchase as a co-op science class. Could I please get the table of contents for Knowledge Encyclopedia - Our Planet Earth, the most recent edition?', NULL, '2024-04-09 21:49:19', '2024-04-09 21:49:19'),
(271, 'Sapna Verma', '7065511680', 'sapnaverma25mar@gmail.com', 'Applying for the position of Catalogue Librarian', 'Dear Sir , \r\nI have inquiry regarding vacancy at your organisation. I\'m not able to connect with you on your career site . Please let me know if there any vacancy at your esteemed organisation related to Catalogue Librarian', NULL, '2024-04-11 04:21:47', '2024-04-11 04:21:47'),
(272, 'GYXrDoVSLjTF', '4454903667', 'barbipadillaqf1981@gmail.com', 'rYkwIpxAiKXvt', 'ILwUoJstkPKb', NULL, '2024-04-11 06:31:45', '2024-04-11 06:31:45'),
(273, 'GYXrDoVSLjTF', '4454903667', 'barbipadillaqf1981@gmail.com', 'rYkwIpxAiKXvt', 'ILwUoJstkPKb', NULL, '2024-04-11 06:31:47', '2024-04-11 06:31:47'),
(274, 'GYXrDoVSLjTF', '4454903667', 'barbipadillaqf1981@gmail.com', 'rYkwIpxAiKXvt', 'ILwUoJstkPKb', NULL, '2024-04-11 06:31:49', '2024-04-11 06:31:49'),
(275, 'surendra', '8767272997', 'surendra@pappytech.com', 'want to buy the books from you', 'I want to buy the books from you directly', NULL, '2024-04-11 12:06:06', '2024-04-11 12:06:06'),
(276, 'Dinesh Nisang', '9850047933', 'dineshnisang@gmail.com', 'Bulk purchase of books', 'Please call', NULL, '2024-04-12 14:43:09', '2024-04-12 14:43:09'),
(277, 'Pinaki sarkat', '9101926526', 'shiningstarsagchia@gmail.com', 'Hindi barnamala', 'Hindi books needed for school', NULL, '2024-04-13 08:25:35', '2024-04-13 08:25:35'),
(278, 'Mandeep Singh', '5143460232', 'sandhu_089@yahoo.com', 'To get the Punjabi version of My first library', 'Hi Team can you please help me launch the my first library in punjabi. You may publish it.', NULL, '2024-04-13 16:12:43', '2024-04-13 16:12:43'),
(279, 'Mandeep Singh', '5143460232', 'sandhu_089@yahoo.com', 'To get the Punjabi version of My first library', 'Hi Team can you please help me launch the my first library in punjabi. You may publish it.', NULL, '2024-04-13 16:13:38', '2024-04-13 16:13:38'),
(280, 'azMSZpklRtJjN', '6357154946', 'lopezkelly1527@yahoo.com', 'QBzZLOyA', 'GdYOXnCi', NULL, '2024-04-15 07:47:38', '2024-04-15 07:47:38'),
(281, 'azMSZpklRtJjN', '6357154946', 'lopezkelly1527@yahoo.com', 'QBzZLOyA', 'GdYOXnCi', NULL, '2024-04-15 07:47:43', '2024-04-15 07:47:43'),
(282, 'azMSZpklRtJjN', '6357154946', 'lopezkelly1527@yahoo.com', 'QBzZLOyA', 'GdYOXnCi', NULL, '2024-04-15 07:47:47', '2024-04-15 07:47:47'),
(283, 'QHqRvAan', '9250158651', 'lopezkelly1527@yahoo.com', 'JAsPgmKdBicpb', 'BVGOwWKfQArC', NULL, '2024-04-15 07:48:07', '2024-04-15 07:48:07'),
(284, 'QHqRvAan', '9250158651', 'lopezkelly1527@yahoo.com', 'JAsPgmKdBicpb', 'BVGOwWKfQArC', NULL, '2024-04-15 07:48:11', '2024-04-15 07:48:11'),
(285, 'QHqRvAan', '9250158651', 'lopezkelly1527@yahoo.com', 'JAsPgmKdBicpb', 'BVGOwWKfQArC', NULL, '2024-04-15 07:48:15', '2024-04-15 07:48:15'),
(286, 'Rajveer Sanghvi', '9881242178', 'Shwetagothi@gmail.com', 'Author.', 'I wish to publish my first book on vedic stories. Am 10 years old', NULL, '2024-04-15 08:24:42', '2024-04-15 08:24:42'),
(287, 'Sadia', '8178394148', 'sadia.mazda@gmail.com', 'Looking for an illustrator role', 'Hello, Sadia this side. I am an imaginative and versatile illustrator, graphic designer and a multidisciplinary artist fueled by a passion for translating stories, ideas, and emotions into captivating visual artworks.\r\nIf you are seeking an illustrator who is not only skilled but also deeply passionate about adding visual magic to your projects, I would be thrilled to collaborate with you.\r\nThankyou', NULL, '2024-04-15 18:38:16', '2024-04-15 18:38:16'),
(288, 'Shalini', '7048295195', 'vikgc347@gmail.com', 'Need books n flash cards for reselling', 'Business purpose', NULL, '2024-04-17 01:03:06', '2024-04-17 01:03:06'),
(289, 'EVswHgYWiTteO', '6776353408', 'lopezkelly1527@yahoo.com', 'eRZEYGjq', 'hOCKJDTG', NULL, '2024-04-17 04:48:14', '2024-04-17 04:48:14'),
(290, 'EVswHgYWiTteO', '6776353408', 'lopezkelly1527@yahoo.com', 'eRZEYGjq', 'hOCKJDTG', NULL, '2024-04-17 04:48:16', '2024-04-17 04:48:16'),
(291, 'EVswHgYWiTteO', '6776353408', 'lopezkelly1527@yahoo.com', 'eRZEYGjq', 'hOCKJDTG', NULL, '2024-04-17 04:48:19', '2024-04-17 04:48:19'),
(292, 'lufPJBzsOXR', '9735373587', 'lopezkelly1527@yahoo.com', 'jIobmLfCBGe', 'XJPnFSUOzjue', NULL, '2024-04-17 04:48:30', '2024-04-17 04:48:30'),
(293, 'lufPJBzsOXR', '9735373587', 'lopezkelly1527@yahoo.com', 'jIobmLfCBGe', 'XJPnFSUOzjue', NULL, '2024-04-17 04:48:32', '2024-04-17 04:48:32'),
(294, 'lufPJBzsOXR', '9735373587', 'lopezkelly1527@yahoo.com', 'jIobmLfCBGe', 'XJPnFSUOzjue', NULL, '2024-04-17 04:48:34', '2024-04-17 04:48:34'),
(295, 'Harshvardhan', '8623005938', 'harshwalhe969@gmail.com', 'i will make designs for your books cover', 'hey this is harshvardhan and please i need a job i can create designs for your book coversi can work for you at any cost i will make designs for your books cover.', NULL, '2024-04-17 11:18:50', '2024-04-17 11:18:50'),
(296, 'Yash', '7439908235', 'yashkingop297@gmail.com', 'For business purposes', 'Hi there I am big fan of your colour book\r\nBut i want to tell you that some temples are not so well but i appreciate but i can provide you a service I will provide 20 templets for 3500', NULL, '2024-04-17 13:29:50', '2024-04-17 13:29:50'),
(297, 'Lavisha', '8076011332', 'work.lavisha@gmail.com', 'Understanding the process of publication', 'Hii, I\'m a child psychologist who is currently working in Delhi NCR schools to build mental health skills with children from 6th to 12th. I have also worked with neurodiverse kids where in I worked as a language communication therapist and group therapist. I am currently working on creating series of mental health creative series books. Hence, I am looking forward to know the process of publishing books for kids in creative manner to build their skills.', NULL, '2024-04-17 14:00:03', '2024-04-17 14:00:03'),
(298, 'Himshikha', '9068000051', 'himshikha.singhi@gmail.com', 'Book club collaboration', 'Hi \r\nI m opening a book club in Kurukshetra . I have a page by the name of the tranquil tales . I m doing a story telling video on my page to promote my brand on Hanuman jayanti . Came across your book on Amazon . I was wondering if I can collaborate with your brand and benefit mutually .  I understand I m at a very nascent stage but I m gods number of profile visits on my reels . You can check yourself from no of views. I m very passionate to inculcate the habit of reading in children . Story telling from your book on hanuman jayanti will definitely be good collaboration . Plz do share your thoughts and reach out on 9068000051 as hanuman Jayanti isn’t very far . \r\nRegards', NULL, '2024-04-18 07:46:11', '2024-04-18 07:46:11'),
(299, 'Himshikha', '9068000051', 'himshikha.singhi@gmail.com', 'Book club collaboration', 'Hi \r\nI m opening a book club in Kurukshetra . I have a page by the name of the tranquil tales . I m doing a story telling video on my page to promote my brand on Hanuman jayanti . Came across your book on Amazon . I was wondering if I can collaborate with your brand and benefit mutually .  I understand I m at a very nascent stage but I m gods number of profile visits on my reels . You can check yourself from no of views. I m very passionate to inculcate the habit of reading in children . Story telling from your book on hanuman jayanti will definitely be good collaboration . Plz do share your thoughts and reach out on 9068000051 as hanuman Jayanti isn’t very far . \r\nRegards', NULL, '2024-04-18 07:46:13', '2024-04-18 07:46:13'),
(300, 'Anu Sethi', '8876755815', 'sethi28_anu@yahoo.co.in', 'Publication process', 'Dear Publisher,\r\n\r\nCan you share your publication process. I am an author of children\'s stories and want to know the process after sharing my submission as per the form on your website. How much time you take to respond back and when will I get to know if my work will be published by you? Also, I want to know about costing and other agreement terms like copyright, etc.\r\n\r\nThanks,\r\nAnu', NULL, '2024-04-18 15:56:57', '2024-04-18 15:56:57'),
(301, 'Mahesh Sharma', '8474311590', 'bookbarn2020@yahoo.com', 'Export of Books to USA', 'We are Dealing in Books published in India and sell on different market places like amazon ,ebay and other plateforms .  We want to buy books from you on regular basis  . Please let us know your terms and conditions .', NULL, '2024-04-18 16:34:17', '2024-04-18 16:34:17'),
(302, 'Emgovqtb', '4435666762', 'fairfield_mark1992@yahoo.com', 'gzQbVhUASCLj', 'KsrJEDOWe', NULL, '2024-04-19 14:24:50', '2024-04-19 14:24:50'),
(303, 'Emgovqtb', '4435666762', 'fairfield_mark1992@yahoo.com', 'gzQbVhUASCLj', 'KsrJEDOWe', NULL, '2024-04-19 14:24:54', '2024-04-19 14:24:54'),
(304, 'Emgovqtb', '4435666762', 'fairfield_mark1992@yahoo.com', 'gzQbVhUASCLj', 'KsrJEDOWe', NULL, '2024-04-19 14:24:58', '2024-04-19 14:24:58'),
(305, 'sDcjwKlB', '3152715595', 'fairfield_mark1992@yahoo.com', 'udLTNwEVKFrXWp', 'hNCXQMBo', NULL, '2024-04-19 14:25:15', '2024-04-19 14:25:15'),
(306, 'sDcjwKlB', '3152715595', 'fairfield_mark1992@yahoo.com', 'udLTNwEVKFrXWp', 'hNCXQMBo', NULL, '2024-04-19 14:25:19', '2024-04-19 14:25:19'),
(307, 'sDcjwKlB', '3152715595', 'fairfield_mark1992@yahoo.com', 'udLTNwEVKFrXWp', 'hNCXQMBo', NULL, '2024-04-19 14:25:23', '2024-04-19 14:25:23'),
(308, 'Anu', '0000000000', 'dranushya@gmail.com', 'Suggestion for Content Improvement in Pop-Up Books', 'Dear Wonder House Books,\r\n\r\nI hope this letter finds you well. I am writing to share a concern regarding the language used in some of your pop-up books, particularly \"Snow White and the Seven Dwarfs\" and \"The Three Little Pigs.\"\r\n\r\nAs a parent and avid supporter of children\'s literature, I have always appreciated the creativity and imagination that your books bring to young readers. However, upon recently exploring some of your titles with my young children, I noticed that certain words such as \"kill\" and \"die\" were used within the narratives. While I understand the importance of staying true to the original stories, I believe that the inclusion of such language may be too harsh for children who are under the age of seven.\r\n\r\nFor example, in \"The Three Little Pigs,\" instead of using the word \"died,\" perhaps consider using a less explicit term like \"hurt\" or \"got hurt.\" This subtle change can still convey the seriousness of the situation while being more age-appropriate and less distressing for young readers.\r\n\r\nSimilarly, in \"Snow White and the Seven Dwarfs,\" the use of words like \"kill\" may inadvertently introduce complex and potentially unsettling ideas to children. Exploring alternative language choices that maintain the essence of the story while minimizing the use of harsh terms could help ensure a more positive reading experience for young audiences.\r\n\r\nIt is essential to recognize that children are highly impressionable, and the language they encounter in books can significantly impact their understanding of the world around them. By choosing words that are age-appropriate and sensitive to the developmental stage of young readers, we can help foster a positive and nurturing environment for their growth and learning.\r\n\r\nI understand that adapting classic stories can be a delicate balance between preserving their integrity and ensuring their suitability for contemporary audiences. However, I urge you to consider the potential effects of the language used in your books and explore alternatives that maintain the essence of the stories while being mindful of the young audience for whom they are intended.\r\n\r\nThank you for taking the time to consider my suggestion. I look forward to seeing Wonder House Books continue to inspire and delight young readers with your imaginative and engaging storytelling.\r\n\r\nWarm regards, \r\nAnu Arun', NULL, '2024-04-19 17:00:36', '2024-04-19 17:00:36'),
(309, 'Papri Saha', '7406341000', 'paprisaha1991@gmail.com', 'Illustrator Submission', 'Hello,\r\n\r\nMy name is Papri Saha and I am a Children\'s Book Illustrator from Bangalore. I’ve been a long time fan of the beautiful children\'s books you create at Wonder House and this is something I would love to be a part of.\r\n\r\nCould you let me know what kind of artwork you are looking for at the moment? I would love to submit some art samples to you based on your specific needs.\r\n\r\nThank you for your time and have a nice week!\r\n\r\nYou can also browse my portfolio here: https://paprisahachildrensbookillustrator.mystrikingly.com/\r\n\r\nBest,\r\nPapri Saha\r\nChildren\'s Book Illustrator', NULL, '2024-04-22 10:30:11', '2024-04-22 10:30:11'),
(310, 'Dhruva Sonar', '8820237670', 'dhruvism@gmail.com', 'Information Redgarding Publishing Coloring Book', 'Hi! I saw your coloring books on Amazon at a very reasonable price. They look great! I\'m currently planning to publish my own drawing book and I\'d be interested in learning more about your publishing process and printing costs.', NULL, '2024-04-23 02:38:41', '2024-04-23 02:38:41'),
(311, 'Charles Funk', 'Jjhypkecxr', 'admin@charterunionfin.com', 'To the wonderhousebooks.com Administrator!', 'Do not stay out of business, or close down due to lack of Funding and finance. Your projects, businesses and financial needs is completely possible.\r\n\r\nYou can now fund your projects, businesses without worries of repayment as you can have ample amount of time to execute your projects and businesses and build up, grow financially, to achieve your complete set goals.\r\n\r\nAre you also a broker/consultant? Make life easy for various of your clients globlly to help provide funding for their various Businesses and Projects, edging them towards a better buiness and financial goals.\r\n\r\nChu Yeung\r\nCustomer Care Department\r\ninfo@charterunionfin.com\r\n+852 8199 9324', NULL, '2024-04-24 01:41:02', '2024-04-24 01:41:02'),
(312, 'Soumitra Jana', '9831140849', 'Janasomitro@gmail.com', 'Need Books', 'I have one direct marketing organisation based on North East of India... Please contact me ....', NULL, '2024-04-24 03:29:08', '2024-04-24 03:29:08'),
(313, 'Sheila Kelly', '3155755998', 'sheila6k@yahoo.com', 'Error in child’s book', 'We have the early learning book of “Birds”. The book incorrectly labels a dark blue bird as a Robin.', NULL, '2024-04-24 12:33:16', '2024-04-24 12:33:16'),
(314, 'Padmaja', '8754468240', 'catchpadhu@gmail.com', 'Nursery', 'We require nursery and Lkg books for our school in chennai', NULL, '2024-04-25 09:55:53', '2024-04-25 09:55:53'),
(315, 'clARtGZCfhV', '5557072903', 'mikesostilio1984@yahoo.com', 'uJcmZUsGfMNKBI', 'eobLGUOM', NULL, '2024-04-25 17:59:12', '2024-04-25 17:59:12'),
(316, 'clARtGZCfhV', '5557072903', 'mikesostilio1984@yahoo.com', 'uJcmZUsGfMNKBI', 'eobLGUOM', NULL, '2024-04-25 17:59:18', '2024-04-25 17:59:18'),
(317, 'clARtGZCfhV', '5557072903', 'mikesostilio1984@yahoo.com', 'uJcmZUsGfMNKBI', 'eobLGUOM', NULL, '2024-04-25 17:59:23', '2024-04-25 17:59:23'),
(318, 'iIUZltYG', '2605828390', 'mikesostilio1984@yahoo.com', 'AaNKiGfyRdMe', 'WdyhaTEJbiHjxOo', NULL, '2024-04-25 17:59:48', '2024-04-25 17:59:48'),
(319, 'iIUZltYG', '2605828390', 'mikesostilio1984@yahoo.com', 'AaNKiGfyRdMe', 'WdyhaTEJbiHjxOo', NULL, '2024-04-25 17:59:53', '2024-04-25 17:59:53'),
(320, 'iIUZltYG', '2605828390', 'mikesostilio1984@yahoo.com', 'AaNKiGfyRdMe', 'WdyhaTEJbiHjxOo', NULL, '2024-04-25 17:59:59', '2024-04-25 17:59:59'),
(321, 'Ubair Mukhtyar', '9797291927', 'ubairmukhtyar1@gmail.com', 'All', 'Need stock', NULL, '2024-04-26 17:41:01', '2024-04-26 17:41:01'),
(322, 'Gaauri Adlakha', '7011810825', 'Sani8prince@gmail.com', 'Kids book', 'Bulk order for reseller', NULL, '2024-04-27 17:06:45', '2024-04-27 17:06:45');
INSERT INTO `contactuses` (`id`, `name`, `phone`, `email`, `subject`, `message`, `deleted_at`, `created_at`, `updated_at`) VALUES
(323, 'slade simkins', '8013587767', 'uvbooks@gmail.com', 'USA contact', 'I am wondering what your USA contact information is as you are selling books on the United States amazon.com website. Mohammad Mehraj Asharaf has made a false allegation that is interfering in our contact with amazon.com. This is a serious matter and could lead to litigation freezing any united states bank accounts you use with amazon.com. Please contact me immediately as Mohammad Mehraj Asharaf is not responding. This matter will not go away unless you contact amazon to remove this false complaint of a \"counterfeit without a test buy\".', NULL, '2024-04-27 17:30:18', '2024-04-27 17:30:18'),
(324, 'BPQxMIGq', '2194347640', 'richmondkendrart1999@gmail.com', 'CaIUqAMHXLucz', 'SykDRPlXgHr', NULL, '2024-04-29 00:45:54', '2024-04-29 00:45:54'),
(325, 'BPQxMIGq', '2194347640', 'richmondkendrart1999@gmail.com', 'CaIUqAMHXLucz', 'SykDRPlXgHr', NULL, '2024-04-29 00:45:57', '2024-04-29 00:45:57'),
(326, 'BPQxMIGq', '2194347640', 'richmondkendrart1999@gmail.com', 'CaIUqAMHXLucz', 'SykDRPlXgHr', NULL, '2024-04-29 00:46:00', '2024-04-29 00:46:00'),
(327, 'Sri Charan reddy', '8885694686', 'sricharanreddyyellareddy@gmail.com', 'Request', ': Iam Y.Sri Charan Reddy , I have written a book\"Artagan in the magical world I want it to be published in wonder house, I request to you accept it and send a replying mail. Thank you', NULL, '2024-04-29 04:25:58', '2024-04-29 04:25:58'),
(328, 'Sri Charan reddy', '8885694686', 'sricharanreddyyellareddy@gmail.com', 'Request', ': Iam Y.Sri Charan Reddy , I have written a book\"Artagan in the magical world I want it to be published in wonder house, I request to you accept it and send a replying mail. Thank you', NULL, '2024-04-29 04:28:48', '2024-04-29 04:28:48'),
(329, 'Meghna Roy', '9051619059', 'meghna.roy.274@gmail.com', 'Order for 25-30 books', 'Hi , I wanted to place an order for 25-30 books, wanted to enquire if you deliver directly and will there be any discounts', NULL, '2024-04-29 08:51:46', '2024-04-29 08:51:46'),
(330, 'Meghna Roy', '9051619059', 'meghna.roy.274@gmail.com', 'Order for 25-30 books', 'Hi , I wanted to place an order for 25-30 books, wanted to enquire if you deliver directly and will there be any discounts', NULL, '2024-04-29 08:51:47', '2024-04-29 08:51:47'),
(331, 'Tejender Kumar Deswal', '7011238958', 'tejideswal@gmail.com', 'Become Reseller Partner', 'I am Tejender kumar deswal, i want to be your reseller partner. what is the process and what are the requirements to become your reseller partner. please lets us know the process so that we can follow the process.', NULL, '2024-04-29 12:42:55', '2024-04-29 12:42:55'),
(332, 'Priyanka Desai', '9860150632', 'pri12sep@gmail.com', 'Collaboration to work', 'Hi Team Wonder House,\r\n\r\nYour collection of books for children have inspired me to write to you. \r\n\r\nI am a German professional working in academic publishing for a decade now. I have worked with Springer Nature and currently with Wiley. \r\nI have taught children in an International Baccalaureate (IB) School for 3 years which gave me an insight to their inclination towards meaningful content.\r\n\r\nThe purpose of this mail is to collaborate with you. \r\nI am interested to invest my time and effort to look into your system (proof reading, editing, connecting with authors/ editors) or even write content in German/ English.\r\n\r\nI look forward to your positive response and an opportunity to collaborate ahead.\r\n\r\nRegards,\r\nPriyanka Desai', NULL, '2024-04-30 09:24:16', '2024-04-30 09:24:16'),
(333, 'Soumitra Jana', '9831140849', 'janasomitro@yahoo.com', 'Bible story', 'I have five direct marketing office in North East of India... So I want to work with your company... Please call me wheather we can talk in details...', NULL, '2024-05-01 15:03:30', '2024-05-01 15:03:30'),
(334, 'JTKImDtfwM', '4716034943', 'fraziodrib43@gmail.com', 'LigRuHXVpw', 'zSsTnlHfrcjQyd', NULL, '2024-05-02 09:54:46', '2024-05-02 09:54:46'),
(335, 'JTKImDtfwM', '4716034943', 'fraziodrib43@gmail.com', 'LigRuHXVpw', 'zSsTnlHfrcjQyd', NULL, '2024-05-02 09:54:49', '2024-05-02 09:54:49'),
(336, 'JTKImDtfwM', '4716034943', 'fraziodrib43@gmail.com', 'LigRuHXVpw', 'zSsTnlHfrcjQyd', NULL, '2024-05-02 09:54:52', '2024-05-02 09:54:52'),
(337, 'BcSXRDpJvmlMtus', '4343172344', 'fraziodrib43@gmail.com', 'pOUDlbSvHKVWnIh', 'iABMsdFYN', NULL, '2024-05-02 09:55:06', '2024-05-02 09:55:06'),
(338, 'BcSXRDpJvmlMtus', '4343172344', 'fraziodrib43@gmail.com', 'pOUDlbSvHKVWnIh', 'iABMsdFYN', NULL, '2024-05-02 09:55:09', '2024-05-02 09:55:09'),
(339, 'BcSXRDpJvmlMtus', '4343172344', 'fraziodrib43@gmail.com', 'pOUDlbSvHKVWnIh', 'iABMsdFYN', NULL, '2024-05-02 09:55:11', '2024-05-02 09:55:11'),
(340, 'Ashwini Jaywant Sonawane', '8788113978', 'asonawane41024@gmail.com', 'Want books', '', NULL, '2024-05-02 16:23:21', '2024-05-02 16:23:21'),
(341, 'Brooke Morris', 'Nbg unqlwk', 'rivers.glenna@gmail.com', 'Act Now for Big Discounts!', 'Don\'t Miss Out on Our Exclusive CBD Gummy Promotion!\r\n\r\nIndulge in the exceptional quality of MYONATURAL CBD Gummies at an unbeatable price!\r\n\r\nFor a limited time, we\'re offering our premium 25mg CBD Gummies at a whopping 50% off — just $17.48 per 30-count bottle.\r\n\r\nClick the links and save : Tap the link and save: https://bit.ly/4aZIZyn ( https://myonatural.com ) - Use promo code \"50off25cbd\"\r\n\r\nEach gummy is intricately infused with CBD, ensuring uniformity and potency that make us stand out from the crowd.\r\n\r\nOur CBD is integrated directly into each gummy, bypassing any external spray-on process, for maximum effectiveness.\r\n\r\nBut that\'s not all — with every purchase, receive a FREE sample of the award-winning MYONATURAL Pain Cream, perfect for enhancing your wellness routine.\r\n\r\nOur CBD Gummies are:\r\n\r\n- All-natural, non-GMO, and gluten-free\r\n- Pesticide-free\r\n- THC-free and lab-tested\r\n- Manufactured and grown proudly in the USA\r\n\r\n\r\nThis offer is limited, so seize the opportunity now to enjoy this amazing deal and discover why we claim these could be the most delicious CBD gummies in the world!\r\n\r\n\r\n\r\n\r\nUnsubscribe here if you don\'t want to get these awesome offers: https://docs.google.com/forms/d/e/1FAIpQLSdx-LI-ETiB-g37_ijIRHfBNhu__c-Go1dyOyZ_zU_pgeYTEg/viewform?usp=sf_link\r\nHertug Guttorms Gate 164, Massena, NY, US, 3111', NULL, '2024-05-03 01:47:49', '2024-05-03 01:47:49'),
(342, 'Kavita', '9819804881', 'jainkavita21@gmail.com', 'Bulk books order', 'Hi.. I would like to inquire abt my first library of Hindu god and goddess set..\r\nI need total 70 books that’s almost 6-7 sets. How much will it cost me. \r\n\r\n\r\nAlso, I would like to know if u have any other books in the same costing?', NULL, '2024-05-03 07:19:47', '2024-05-03 07:19:47'),
(343, 'Tejender Kumar Deswal', '7011238958', 'tejideswal@gmail.com', 'Become Reseller Partner', 'hello \r\n\r\nActually I had mailed you some time back regarding Reseller but no response came from your side, how long will I have to wait for your reply? \r\n\r\nAnd can we talk on call.\r\n\r\n\r\nRegards \r\nTejender Kumar Deswal', NULL, '2024-05-03 12:27:55', '2024-05-03 12:27:55'),
(344, 'Paul', 'Q wwxjbzcl', 'projectsexpert222@outlook.com', 'Back Office Support', 'Hi,\r\n\r\nAre you looking for someone who can follow your complex business SOPs and work on them accordingly? \r\n\r\nI specialize in Back-office work and I can help you in the following ways:\r\n\r\n1. Data Management Services: Data Entry, Data Processing, Data Cleansing, Data Conversion to different formats, Data Extraction, Data Verification and extraction\r\n\r\n2. Financial Accounting Services: Account Payable, Receivables, Reconciliations, Invoice Factoring, Financial Statements, Creating Invoices.\r\n\r\n3. E-Commerce Management: Order Processing, Product Add/Delete/Modify, Cart and Shop Management.\r\n\r\n4. Custom Process Follow: Understanding your SOP, Software Data Entry, Medical Bill Entry, Form filling\r\n\r\nMy Cost is USD 10/hr for these back-office tasks.\r\nPing me on projectsexpert222@outlook.com if you have any requirements right now.  \r\n\r\n\r\nRegards,\r\nPaul', NULL, '2024-05-03 16:47:48', '2024-05-03 16:47:48'),
(345, 'Namrata Choudhary', '9654477534', 'namratac0709@gmail.com', 'Story books information', 'Needs information on story books like little red riding, goldilocks and three bears etc. for my school.', NULL, '2024-05-04 12:22:32', '2024-05-04 12:22:32'),
(346, 'siJcClyrvqoTEF', '3351294757', 'olson.nathan9580@aol.com', 'NwsnBTrah', 'qYrMptRhZiLPCj', NULL, '2024-05-05 13:56:54', '2024-05-05 13:56:54'),
(347, 'siJcClyrvqoTEF', '3351294757', 'olson.nathan9580@aol.com', 'NwsnBTrah', 'qYrMptRhZiLPCj', NULL, '2024-05-05 13:57:03', '2024-05-05 13:57:03'),
(348, 'siJcClyrvqoTEF', '3351294757', 'olson.nathan9580@aol.com', 'NwsnBTrah', 'qYrMptRhZiLPCj', NULL, '2024-05-05 13:57:18', '2024-05-05 13:57:18'),
(349, 'Chrissy', '8305340462', 'chrissyhuth@yahoo.com', 'Blurred Photos', 'I had great hopes of using Our Planet Earth for our homeschool science class. The 2023 version includes far too many out of focus and pixilated photos. Otherwise, the information is fantastic! Will there be an improved printing within the next 3 months?', NULL, '2024-05-05 18:35:42', '2024-05-05 18:35:42'),
(350, 'Shayna Trundle', 'N sweiq je', 'shayna.trundle@gmail.com', 'Pksiirxz P', 'Boost leads generation & Spark conversations: Feeling stuck with stagnant lead generation? Contact Form Leads—your game-changer. Our secure website contact form bulk submission service bypasses spam filters as we are Can Spam compliant, landing your message directly in potential customers\' inboxes. Spark conversations, ignite interest, and watch your sales climb! \r\n\r\nAll for a budget-friendly price of just 9$. Get started today and unlock a flood of new leads! https://contactformleads.com\r\n\r\n\r\nUnsubscribe here if you don\'t want to get these amazing emails: https://docs.google.com/forms/d/1WTJlKGHRfTQBtIJd8YKhGXtGs2VRtKUEOlOwVQKeR8c/viewform?usp=sf_link\r\nEinsteinweg 117, Ijsselstein, UT, United States, 3404 Lk', NULL, '2024-05-06 05:52:05', '2024-05-06 05:52:05'),
(351, 'Raveena Baskaran', '9688170871', 'studio@raveenabaskaran.com', 'Book Submission', 'Hello! I\'m Raveena Baskaran from India. I\'m an author/illustrator of various books. Your website\'s submission page was not working so I thought to send you an email. \r\n I\'ve already self-published a few coloring books on Amazon and now I\'m looking to collaborate with a reputable publisher to expand its distribution and reach a broader audience. I believe partnering with an established publisher like Wonder House Books will help bring my book to more readers and enhance its availability in various markets. If you\'re interested in discussing potential publishing opportunities or distribution expansions, I\'d love to explore how we can work together to further promote this coloring book. Thank you for considering this exciting opportunity!', NULL, '2024-05-06 07:15:59', '2024-05-06 07:15:59'),
(352, 'Ishmeet dheer Kamra', '9910477333', 'ishmeetdheer@gmail.com', 'Bulk buying', 'Hello,\r\n\r\nIt\'s my daughter bday and she is find of books and activities. So wanna know if you can help with bulk buying of activities set.', NULL, '2024-05-06 17:23:47', '2024-05-06 17:23:47'),
(353, 'Benny Ong', '0097480136', 'benny.ong@geco.asia', 'Re: Ai-powered Text-to-Video', 'Dear Wonder House,\r\n\r\nI\'m excited to introduce a new technology that can significantly enhance reader engagement and potentially boost sales: AI-powered text-to-video.\r\n\r\nMy AI tool can transform your existing book descriptions or sample chapters (from Word documents or PDFs) into captivating one-minute video trailers. These trailers can be displayed on your website and social media platforms to:\r\n\r\nShowcase compelling summaries and key points of your vast collection.\r\nVisually engage readers and spark their interest in specific titles.\r\nDrive traffic to individual book pages, leading to more purchases.\r\nImagine short, engaging video trailers automatically generated for your diverse selection! This would allow you to showcase a wider variety of books and capture the attention of potential readers who might otherwise miss hidden gems.\r\n\r\nI\'d be happy to schedule a quick demo to showcase how my AI tool can work with Wonder House\'s specific needs. To save you time, I\'ve included a link to my Calendly page where you can easily book a convenient time for us to chat: https://calendly.com/benny_ong \r\n\r\nThank you for your time and consideration. - Benny\r\nHead of Growth, Talent & Partnerships', NULL, '2024-05-07 03:59:48', '2024-05-07 03:59:48'),
(354, 'David Snider', 'F rbq dnqy', 'snider.summer@gmail.com', 'To the wonderhousebooks.com Admin.', 'Have you heard of Se-REM? (Self effective - Rapid Eye Movement). Many people don\'t know that REM brain activity dramatically improves the processing of traumatic emotion. It creates peace and empowers the listener. Se-REM is an advanced version of EMDR therapy. It is more powerful because it combines elements of 6 different therapies, EMDR, hypnosis, mindfulness, Gestalt child within work, music therapy, and Awe therapy,(connecting profoundly with nature).\r\n\r\nIt has helped thousands of people overcome PTSD, and anxiety. But it is also helpful in a great many situations, loss of any kind, grief, and even marital counseling. It\'s mission statement is \"Trauma relief at as close to free as possible\". This not-for-profit program downloads to a smart phone or computer and can be used in an office or at home. Read about it, hear samples, and download at: Se-REM.com. Once you own the program, you are encouraged to give it away to others who will benefit. I provide free consultation to all who use the program. Write questions to: davidb@se-rem.com.\r\n\r\nSe-REM.com has a 95% rating on Trustpilot and is in use in 32 countries.\r\n\r\nWant to unsubscribe? please email \"no more emails\" to davidb@se-rem.com.', NULL, '2024-05-07 06:30:18', '2024-05-07 06:30:18'),
(355, 'Renu', '9586806019', 'renuhitesh@gmail.com', 'all', 'We are K12 group of school and want to buy books for library.', NULL, '2024-05-07 07:31:08', '2024-05-07 07:31:08'),
(356, 'Cleritha M Sangma', '8415885836', 'sangmacleritha@gmail.com', 'Prayer for supply of books', 'Sir kindly supply 37 (thirty seven) no of Writing Fun set of 4 books by Wonder House', NULL, '2024-05-07 11:19:49', '2024-05-07 11:19:49'),
(357, 'Matthew Nartey', '0244686114', 'matthewknartey@gmail.com', 'Science', 'Good', NULL, '2024-05-07 11:27:50', '2024-05-07 11:27:50'),
(358, 'Eric Sterling', 'Zpufxv j C', 'aichildrens@actionnow.xyz', 'Profit from children\'s books + AI', 'Dear wonderhousebooks.com,\r\n\r\nWant a creative way to generate a new stream for your business?\r\n\r\nEver considered publishing children\'s books?   With the A.I. Children\'s Book Maker, it\'s not just possible - it\'s easy!\r\n\r\nCheck this out:\r\n\r\nhttps://www.actionnow.xyz/aichildrens \r\n\r\nThis state-of-the-art web app allows you to create captivating children\'s books using advanced AI technology.   It takes care of both the writing and illustration, and all you need to do is input your ideas (or let the app come up with the idea too, LOL).   No writing or illustration skills needed!\r\n\r\nConsider this: the children\'s book market is thriving and is valued at over $4 Billion, so there\'s plenty of pie for everyone who wants a piece.\r\n\r\nWith the A.I. Children\'s Book Maker, you can tap into this lucrative industry without the traditional overhead costs associated with book publishing.\r\n\r\nThis AI tool creates high-quality books that captivate both children and adults, making your book a likely favorite.   Just imagine the potential!\r\n\r\nI encourage you to check it out before the launch special ends:\r\n\r\nhttps://www.actionnow.xyz/aichildrens \r\n\r\nTry the A.I. Children\'s Book Maker today.   Embark on a thrilling venture, leverage the power of AI, and unlock a new stream of business.\r\n\r\nTo new successes,\r\n\r\nEric Sterling\r\n\r\n\r\nUNSUBSCRIBE: https://www.actionnow.xyz/unsubscribe \r\nAddress: 3897 Scheuvront Drive\r\nGreenwood Village, CO 80111', NULL, '2024-05-09 02:31:24', '2024-05-09 02:31:24'),
(359, 'Lei Nguyen', '0976660485', 'copyright.vizi@gmail.con', 'Rights request', 'Dear Wonderhouse books,\r\nI am Lei from Vizibooks, a publishing company in Vietnam.\r\nI want to know the rights status of this title called \" \"101 Brain Booster Activity Book: Fun Activity Book For Children\".\r\nIf the rights are available, could you please send me the low res file to review the contents of the book?\r\nPlease connect with me via email.\r\nThanks', NULL, '2024-05-09 06:37:36', '2024-05-09 06:37:36'),
(360, 'Prashasti kothia', '8445700993', 'Kprashasti@gmail.com', 'Regarding  reviews on books', 'My name is Prashasti kothia, and I am reaching out to express my interest in providing reviews for your books. I have been actively reviewing books for the past two years and currently i am running 25 Active Amazon accounts.\r\n\r\nI am writing to offer my services in providing both verified and unverified reviews for your publications. Please let me know if there are any specific procedures or guidelines I should follow when providing reviews for your company', NULL, '2024-05-11 02:49:00', '2024-05-11 02:49:00'),
(361, 'Parmjeet kaur', '9780314315', 'singhgulshan2764@gmail.com', 'Book colour', 'No', NULL, '2024-05-12 11:07:26', '2024-05-12 11:07:26'),
(369, 'Ravi Kaul', '9832478418', 'ravikaulkpg@gmail.com', 'Need some books for sale.', 'I am from Prakash Book store. Kalimpong\r\nI need some books.', NULL, '2024-05-13 08:40:10', '2024-05-13 08:40:10'),
(370, 'Sai Rachitha', '9629689740', 'arskrish@gmail.com', 'Enligh', 'Lear', NULL, '2024-05-14 04:42:42', '2024-05-14 04:42:42'),
(371, 'SYHCjrvVMWp', '9859325407', 'sonb6_evansp2@outlook.com', 'TIZsmKQj', 'cVuwqNLQaxZbSh', NULL, '2024-05-15 16:54:24', '2024-05-15 16:54:24'),
(372, 'SYHCjrvVMWp', '9859325407', 'sonb6_evansp2@outlook.com', 'TIZsmKQj', 'cVuwqNLQaxZbSh', NULL, '2024-05-15 16:54:28', '2024-05-15 16:54:28'),
(373, 'kXqTHRnVWyNGtwvm', '3982412398', 'sonb6_evansp2@outlook.com', 'asVHYURtDezp', 'vzBKVlyTFbgAMx', NULL, '2024-05-15 16:54:41', '2024-05-15 16:54:41'),
(374, 'kXqTHRnVWyNGtwvm', '3982412398', 'sonb6_evansp2@outlook.com', 'asVHYURtDezp', 'vzBKVlyTFbgAMx', NULL, '2024-05-15 16:54:45', '2024-05-15 16:54:45'),
(375, 'Sunitha', '9994596651', 'counselor.adya@gmail.com', 'Preschool Books Catalogue', 'I wanted some series of book for kids aged 2-5', NULL, '2024-05-16 05:53:35', '2024-05-16 05:53:35'),
(376, 'OEmdGXZeLTSz', '7441990547', 'djoroy569@gmail.com', 'YUbqVTldWHFAraS', 'FlwIKQpEoMtnf', NULL, '2024-05-19 04:24:17', '2024-05-19 04:24:17'),
(377, 'OEmdGXZeLTSz', '7441990547', 'djoroy569@gmail.com', 'YUbqVTldWHFAraS', 'FlwIKQpEoMtnf', NULL, '2024-05-19 04:24:20', '2024-05-19 04:24:20'),
(378, 'XdDZVRpWjNHbIPUc', '9599108447', 'djoroy569@gmail.com', 'RVfbXjpA', 'rsbdGnwypCDqf', NULL, '2024-05-19 04:24:56', '2024-05-19 04:24:56'),
(379, 'XdDZVRpWjNHbIPUc', '9599108447', 'djoroy569@gmail.com', 'RVfbXjpA', 'rsbdGnwypCDqf', NULL, '2024-05-19 04:24:59', '2024-05-19 04:24:59'),
(380, 'Anurag Maurya', '8750051512', 'anuragimaurya@gmail.com', 'For', 'Hi sir/madam  I am Anurag Maurya I designed kid\'s children I am good freelancer our price of 10 pages ₹875. If you interested  please contact on WhatsApp  -8750051512', NULL, '2024-05-19 05:23:46', '2024-05-19 05:23:46'),
(381, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-05-20 05:54:54', '2024-05-20 05:54:54'),
(382, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-05-20 05:58:46', '2024-05-20 05:58:46'),
(383, 'test email only', '9999999999', 'test@gmail.com', 'test email only', 'test email only', NULL, '2024-05-20 05:59:05', '2024-05-20 05:59:05'),
(384, 'test', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test test test.', NULL, '2024-05-20 06:05:05', '2024-05-20 06:05:05'),
(385, 'test', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-05-20 06:05:40', '2024-05-20 06:05:40'),
(386, 'Lei Nguyen', '0976660485', 'copyright.vizi@gmail.con', 'Rights request', 'Dear Wonder House Books,\r\nI am Lei, rights assistant of Vizibooks, Vietnam.\r\nI want to ask the rights status of this title called \"101 Brain Booster Activity Book: Fun Activity Book For Children\".\r\nIf the rights are available, could you please send me the low res file to review the contents of the book?\r\nThank you\r\nBest regards,\r\nLei from Vizi., JSC', NULL, '2024-05-20 08:44:21', '2024-05-20 08:44:21'),
(387, 'Sandhya Ambati', '7674849648', 'sandyambati09@gmail.com', 'Mandal art books for adult', 'Looking for pocket size mandal art books', NULL, '2024-05-20 13:05:08', '2024-05-20 13:05:08'),
(388, 'Taman Singh', '6005764953', 'permila0509@gmail.com', 'Space', 'Please', NULL, '2024-05-20 16:57:49', '2024-05-20 16:57:49'),
(389, 'Prerna Asthana', '8957604706', 'prernaasthana45@gmail.com', 'Books Procurement for Bookstore', 'Hello Concerns, \r\n\r\nI am looking to procure books for my store. Kindly advise and guide in same regards.\r\n\r\nThanks,\r\nPrerna Asthana', NULL, '2024-05-21 12:16:38', '2024-05-21 12:16:38'),
(390, 'Loveleena', '8427915725', 'loveleena3104@gmail.com', 'Inquiry about Coloring Book Publication', 'I want to inquire about the possibility of publishing a coloring book through your publishing company.', NULL, '2024-05-22 06:16:00', '2024-05-22 06:16:00'),
(391, 'Pavica Tubic', '3036694347', 'ptubic@inquisicorp.com', 'Sample books', 'Good morning,\r\nSonlight Curriculum is a Christian homeschooling company that specializes in literature-based homeschooling programs. We provide complete homeschool programs and individual homeschool materials\r\nSonlight Curriculum is based in Littleton, Colorado, serving customers in over 150 countries.\r\n\r\nMay we have a review copy of the books below? We want to determine if the titles below might be added to our curriculum. \r\nSpace - Solar System: Knowledge Encyclopedia For Children	978-9-390391424\r\nSpace - Stars and Galaxies: Knowledge Encyclopedia For Children	978-9-390391349\r\nSpace - Astronomy: Knowledge Encyclopedia For Children	978-9-390391585\r\n\r\n\r\nThanks,\r\n \r\nPavica Tubic\r\nPurchasing Agent\r\nInquisiCorp Corporation\r\nptubic@inquisicorp.com\r\n(303) 225-8160 x119\r\nfax: (303) 730-6509\r\n8042 S. Grant Way\r\nLittleton, CO 80122', NULL, '2024-05-22 14:34:43', '2024-05-22 14:34:43'),
(392, 'colHPeqEQ', '3948585058', 'hlyviniya495@gmail.com', 'VKZDmhuM', 'dHxSCNjcV', NULL, '2024-05-22 15:36:45', '2024-05-22 15:36:45'),
(393, 'colHPeqEQ', '3948585058', 'hlyviniya495@gmail.com', 'VKZDmhuM', 'dHxSCNjcV', NULL, '2024-05-22 15:36:47', '2024-05-22 15:36:47'),
(394, 'LucMBUVhekRtPp', '4005936359', 'hlyviniya495@gmail.com', 'kMOIWJZnbA', 'wocTkRfIiYuL', NULL, '2024-05-22 15:36:57', '2024-05-22 15:36:57'),
(395, 'LucMBUVhekRtPp', '4005936359', 'hlyviniya495@gmail.com', 'kMOIWJZnbA', 'wocTkRfIiYuL', NULL, '2024-05-22 15:36:59', '2024-05-22 15:36:59'),
(396, 'ContactFormTesting', '9999999999', 'TEST@GMAIL.COM', 'ContactFormTesting', 'ContactFormTesting', NULL, '2024-05-24 07:25:37', '2024-05-24 07:25:37'),
(397, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-05-24 11:19:23', '2024-05-24 11:19:23'),
(398, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-05-24 11:23:55', '2024-05-24 11:23:55'),
(399, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-05-24 11:24:15', '2024-05-24 11:24:15'),
(400, 'Shobhit Singh', '8756690987', 'shobhit3478@gmail.com', 'Please connect me with your sales team', 'Hi Team, I am an online kids brand and reseller based in Bangalore, looking to source kids books from Wonder House Publishing, can you connect me with your sales team.\r\n\r\nThanks,\r\nShobhit', NULL, '2024-05-24 15:59:25', '2024-05-24 15:59:25'),
(401, 'harsha lankalapalli', '9392710364', 'harshalankalapalli09@gmail.com', 'romance fiction', 'i recently published a book in KDP and I would like to publish a paperback.\r\nI would like to know the process and details of publishing the book.\r\n\r\nThank you', NULL, '2024-05-25 18:10:37', '2024-05-25 18:10:37'),
(402, 'Sharanya', '9384296004', 'sharu.ece27@gmail.com', 'Wholesale purchase', 'Looking for wholesale purchase of books.pls share ur catalogue', NULL, '2024-05-26 09:17:37', '2024-05-26 09:17:37'),
(403, 'Krishma', '7006767708', 'aaradhyasuri@gmail.con', 'Inquire about my learning books', 'First Complete Learning Library: Boxset of 20 Board Books Gift Set for Kids \r\nNeed bulk order', NULL, '2024-05-28 11:38:19', '2024-05-28 11:38:19'),
(404, 'Dr.Sivaharanee Varatharajah', '0756518695', 'haranivarathan@gmail.com', 'Re : Purchasing books', 'I would like to know whether books can be delivered to srilanka \r\n0094756518695 \r\nThis is my WhatsApp number/ contact number \r\nPlease kindly let me know \r\nThanks', NULL, '2024-05-31 09:37:49', '2024-05-31 09:37:49'),
(405, 'Contact us', '7060421033', 'rahul@digitalxplode.com', 'Contact Us', 'Contact Us', NULL, '2024-06-06 12:16:36', '2024-06-06 12:16:36'),
(406, 'Deepak', '8800549949', 'TEST@GMAIL.COM', 'ContactFormTesting', 'ContactFormTesting', NULL, '2024-06-06 12:17:31', '2024-06-06 12:17:31'),
(407, 'Sateesh Raghuwanshi', '8103311255', 'aasra.sateesh@gmail.com', 'Testing', 'Testing', NULL, '2024-06-06 12:18:09', '2024-06-06 12:18:09'),
(408, 'Deepak Arora', '9999999999', 'TEST@GMAIL.COM', 'ContactFormTesting', 'ContactFormTesting', NULL, '2024-06-06 12:20:09', '2024-06-06 12:20:09'),
(409, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-06-07 04:12:28', '2024-06-07 04:12:28'),
(410, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'test', 'test', NULL, '2024-06-07 05:19:32', '2024-06-07 05:19:32'),
(411, 'sHTxkOFy', '8124208572', 'gabrielwright4620@yahoo.com', 'GWwgNZmI', 'mkGRJrwqSh', NULL, '2024-06-07 11:03:48', '2024-06-07 11:03:48'),
(412, 'sHTxkOFy', '8124208572', 'gabrielwright4620@yahoo.com', 'GWwgNZmI', 'mkGRJrwqSh', NULL, '2024-06-07 11:03:56', '2024-06-07 11:03:56'),
(413, 'Christella Duverseau', '2396925681', 'christelladuverseau@gmail.com', 'Haitian Kreyol Books', 'Hello,\r\n\r\nI am writing to introduce myself as Christella, a dedicated second-grade teacher with nearly 10 years of experience in education. As a proud mother of a newborn daughter, I am eager to raise her to be bilingual, just like myself. I have been searching for resources to support her language development in Haitian Creole and English.\r\n\r\nI am impressed by the quality of books published by your company and believe they would be an excellent addition to our bilingual journey. However, I noticed that none of your books are currently available in Haitian Creole. I would like to propose a collaboration to address this gap and cater to the growing demand for bilingual resources in my community.\r\n\r\nI would be delighted to discuss the possibility of working together to create Haitian Creole versions of your books. Please kindly outline the necessary steps and requirements for us to move forward with this project.\r\n\r\nThank you for considering my proposal. I look forward to hearing from you soon.\r\n\r\nSincerely,\r\nChristella\r\n\r\nFeel free to adjust and personalize as needed!', NULL, '2024-06-07 22:21:17', '2024-06-07 22:21:17'),
(414, 'Christella Duverseau', '2396925681', 'christelladuverseau@gmail.com', 'Haitian Kreyol Books', 'Hello,\r\n\r\nI am writing to introduce myself as Christella, a dedicated second-grade teacher with nearly 10 years of experience in education. As a proud mother of a newborn daughter, I am eager to raise her to be bilingual, just like myself. I have been searching for resources to support her language development in Haitian Creole and English.\r\n\r\nI am impressed by the quality of books published by your company and believe they would be an excellent addition to our bilingual journey. However, I noticed that none of your books are currently available in Haitian Creole. I would like to propose a collaboration to address this gap and cater to the growing demand for bilingual resources in my community.\r\n\r\nI would be delighted to discuss the possibility of working together to create Haitian Creole versions of your books. Please kindly outline the necessary steps and requirements for us to move forward with this project.\r\n\r\nThank you for considering my proposal. I look forward to hearing from you soon.\r\n\r\nSincerely,\r\nChristella\r\n\r\nFeel free to adjust and personalize as needed!', NULL, '2024-06-07 22:21:19', '2024-06-07 22:21:19'),
(415, 'Michelle  Marcotte', '3528882308', 'marcotteconsulting@gmail.com', 'Query exception message received', 'Hello Wonderhouse, I tried to submit my query today for my MG novel The Bakery Kids - Neighborhood Guardians. But I received a query exception error message with a stack trace coding as well. Consequently I do not think you received my query.', NULL, '2024-06-08 21:06:35', '2024-06-08 21:06:35'),
(416, 'CptzogGXPswekunh', '4723133170', 'luinvelazquezsq169@gmail.com', 'brxdKZPGfJ', 'eVZmCtqiF', NULL, '2024-06-10 13:04:30', '2024-06-10 13:04:30'),
(417, 'CptzogGXPswekunh', '4723133170', 'luinvelazquezsq169@gmail.com', 'brxdKZPGfJ', 'eVZmCtqiF', NULL, '2024-06-10 13:04:37', '2024-06-10 13:04:37'),
(418, 'Akash Agarwal', '9766999442', 'sunshineenterprises2610@gmail.com', 'Business', 'I\'m looking forward to buy books from you for business.', NULL, '2024-06-10 16:26:31', '2024-06-10 16:26:31'),
(419, 'Dinesh', '8883182999', 'dinesh1421992@gmail.com', 'Wholesale Order', 'My First Library of Hindu Gods and Goddesses (Boxed Set) - Set of 12 Books (Wholesale Order)', NULL, '2024-06-11 12:21:03', '2024-06-11 12:21:03'),
(420, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', '', NULL, '2024-06-11 13:05:19', '2024-06-11 13:05:19'),
(421, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', 'by e-mail and hardcopy', NULL, '2024-06-11 13:05:51', '2024-06-11 13:05:51'),
(422, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', 'by e-mail and hardcopy', NULL, '2024-06-11 13:05:54', '2024-06-11 13:05:54'),
(423, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', 'by e-mail and hardcopy', NULL, '2024-06-11 13:05:56', '2024-06-11 13:05:56'),
(424, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', 'by e-mail and hardcopy', NULL, '2024-06-11 13:05:58', '2024-06-11 13:05:58'),
(425, 'M/S Omprakash Agrawal', '8338035635', 'agrawalbooks@rediffmail.com', 'Catalogue and trade terms', 'By e-mail or hardcopy', NULL, '2024-06-11 13:09:24', '2024-06-11 13:09:24'),
(426, 'Tarek Kandil', '1003303340', 'eabcenter@yahoo.com', 'international sales rep contact', 'we are the Egyptian American Book Center  Alex / Egypt \r\nwe would like someone from your sales dept ... to contact us .. as we are looking to do some business', NULL, '2024-06-11 18:24:24', '2024-06-11 18:24:24'),
(427, 'Pradeep Gaikwad', '9850098064', 'pgexp57@gmail.com', 'Publishing a book', 'Need details of the process to publish a children\'s story book. Kindly email details. Thanks you', NULL, '2024-06-12 09:34:53', '2024-06-12 09:34:53'),
(428, 'Danielle Robertson', '2283277533', 'daniellerobertson90@gmail.com', 'Submission form issue', 'Hello,\r\n\r\nI am attempting to submit a manuscript using the submission form, but it will not allow me to upload a document. Can you please see if there is an issue with the link?\r\n\r\nThank you for your time,\r\nDanielle Robertson', NULL, '2024-06-12 11:44:11', '2024-06-12 11:44:11'),
(429, 'TANUSHREE MALLYA', '9880922740', 'tanushreeshenoy@gmail.com', 'Bulk Order of Vikram & Betal', 'Hi, \r\nI was wondering if a bulk order of 45 Books of Vikram & Betal could be ordered directly from you for a discounted price. \r\nI am planning to give this book as a return gift in my kids Bday.\r\nLooking forward for your response. \r\nThanks,\r\nTanushree Mallya', NULL, '2024-06-12 12:04:19', '2024-06-12 12:04:19'),
(430, 'TANUSHREE MALLYA', '9880922740', 'tanushreeshenoy@gmail.com', 'Bulk Order of Vikram & Betal', 'Hi, \r\nI was wondering if a bulk order of 45 Books of Vikram & Betal could be ordered directly from you for a discounted price. \r\nI am planning to give this book as a return gift in my kids Bday.\r\nLooking forward for your response. \r\nThanks,\r\nTanushree Mallya', NULL, '2024-06-12 12:04:21', '2024-06-12 12:04:21'),
(431, 'JAVED HUSSAIN', '9331228420', 'JAVEDHUSSAIN747@GMAIL.COM', 'Books required for my School', 'Would like to know the cost of books for my PG, LN, UN & KG, if purchase in bulk. Min quantities for getting at very low cost.', NULL, '2024-06-12 18:48:25', '2024-06-12 18:48:25'),
(432, 'Vishal Gupta', '7015785354', 'me.vishal09@gmail.com', 'Publish my boom', 'I want to publish my book for kid. How can I connect with you?', NULL, '2024-06-13 07:08:01', '2024-06-13 07:08:01'),
(433, 'Vishal Gupta', '7015785354', 'me.vishal09@gmail.com', 'Publish my boom', 'I want to publish my book for kid. How can I connect with you?', NULL, '2024-06-13 07:08:04', '2024-06-13 07:08:04'),
(434, 'Pramod Kumar Rout', '9958918382', 'pramod.rout2008@gmail.com', 'DTP operater job', 'Good afternoon sir/madam\r\n\r\nSub\r\nRegarding for requirement DTP operater job.\r\n\r\nRegards \r\nPramod', NULL, '2024-06-14 07:58:11', '2024-06-14 07:58:11'),
(435, 'Little hearts', '9850694926', 'marlinviegas30@gmail.com', 'Books to sell', 'Hi look out for distributor where I can get ur book to sell on our shop', NULL, '2024-06-14 13:25:10', '2024-06-14 13:25:10'),
(436, 'Om Wadhwani', '8883182999', 'wadhwaniom8@gmail.com', 'Kindly WhatsApp- Bulk Query', 'Kindly WhatsApp on 88831 82999 - Bulk Query', NULL, '2024-06-15 09:51:55', '2024-06-15 09:51:55'),
(437, 'BWPZTQJyIgUExi', '4266341489', 'knightlilithh1985@gmail.com', 'MekFCOQDauIwtnfy', 'LWQioXGwd', NULL, '2024-06-16 23:51:12', '2024-06-16 23:51:12'),
(438, 'BWPZTQJyIgUExi', '4266341489', 'knightlilithh1985@gmail.com', 'MekFCOQDauIwtnfy', 'LWQioXGwd', NULL, '2024-06-16 23:51:18', '2024-06-16 23:51:18'),
(439, 'MANAV RAGHUWANSHI', '9898989898', 'lockedsandbox@gmail.com', 'test', 'This istesting', NULL, '2024-06-17 14:39:03', '2024-06-17 14:39:03'),
(440, 'MANAV RAGHUWANSHI', '9898989898', 'lockedsandbox@gmail.com', 'test', 'This istesting', NULL, '2024-06-17 14:39:05', '2024-06-17 14:39:05'),
(441, 'MANAV RAGHUWANSHI', '9898989898', 'lockedsandbox@gmail.com', 'test', 'This istesting', NULL, '2024-06-17 14:39:08', '2024-06-17 14:39:08'),
(442, 'Prakhar Test', '9999999999', 'er.prakhar108@gmail.com', 'Test Test', 'fsdfsdfdsfsd df sdf sdf', NULL, '2024-06-17 15:37:14', '2024-06-17 15:37:14'),
(443, 'Prakhar Test', '9999999999', 'er.prakhar108@gmail.com', 'test test test', 'sdfs dsf sdfsdfdsfdsf sdfdsf sdfdsfdsf. sdfsfsd', NULL, '2024-06-17 15:39:00', '2024-06-17 15:39:00'),
(444, 'prakhar test', '9999999999', 'er.prakhar108@gmail.com', 'tesdfs fdsf', 'sdfsdfs dfsd fs df sdf', NULL, '2024-06-17 15:42:14', '2024-06-17 15:42:14'),
(445, 'Prasha Sooful', '0488478947', 'psauthor80@gmail.com', 'Website submission', 'Hi there, I am trying to submit through your website however the link for uploading the sample manuscript does not appear to attach the file. I have tried several browsers and wondering if there is another way to submit? Many thanks, Prasha', NULL, '2024-06-18 05:44:29', '2024-06-18 05:44:29'),
(446, 'Reena. S', '6382614402', 'reena.s@tradesala.com', 'Welcome to Tradesala', 'Hello Sir\\ Madam,  \r\n  \r\n\r\nI hope you are doing well!   \r\n\r\n\r\n\r\nWe are from Tradesala an Indian B2BC E-commerce Platform. We aim to empower Indian Products and become the \"House of Indian Brands\", a one-stop solution for all the business needs of suppliers and customers. \r\n\r\n\r\n\r\nWe are inclined towards the procurement of suppliers from various streams and providing them with a better and easier platform to conduct their business online effectively with their customers.     \r\n\r\n\r\n\r\nWe have seen your company profile, which is quite impressive. I’ve attached a brochure for reference. \r\n\r\n\r\n\r\nCan we schedule 5 minutes meeting to take it further? \r\n\r\n \r\n\r\n Kindly visit the following link to onboard on our platform:  \r\n\r\n\r\nhttps://vendor.tradesala.com  \r\n\r\nTradesala - Vendor Login/Signup | Sell your Products Online with us\r\nAre you an SME then you should be a part of Tradesala - Tradesala is India’s finest B2BC online marketplace and a one-stop solution for all the business needs of suppliers and customers.\r\nvendor.tradesala.com\r\n  \r\n\r\nBest Regards,', NULL, '2024-06-18 09:39:00', '2024-06-18 09:39:00'),
(447, 'JP Sahu', '9937016228', 'jp.sahu@outlook.com', 'Simultaneous submission in UK & India', 'HI, \r\nI have a couple of questions.\r\n1) Are you ok with simultaneous submission? I would like to submit a story I just submitted to a UK-based publisher simultaneously to Wonder House too. Are you ok to consider that?\r\n2) I write children\'s stories typically for 7 to 10 years of age group,  between 1000 - 1800 words. Even for such short stories, do you want only the manuscript of first three chapters (which will essentially by 3 paragraphs) or do you expect the complete manuscript?\r\n\r\nThank you\r\n\r\nAbout myself:\r\nI live in the UK and have never published before, even though three of my books are in different stages in the process, with a couple of other publishers. I write stories that help children deal with emotions, and learn life skills for a more fulfilling life – all based on evidence-based research in emotional resilience and positive psychology. \r\nThank you', NULL, '2024-06-18 12:42:30', '2024-06-18 12:42:30'),
(448, 'test', '9898989898', 'lockedsandbox@gmail.com', 'test', 'This is for testing', NULL, '2024-06-18 12:48:02', '2024-06-18 12:48:02'),
(449, 'Akshay Hudlikar', '9092898144', 'anhudlikar@hotmail.com', 'Childrens picture book', 'Dear Editor,\r\nMy name is Akshay Hudlikar, and I\'m a writer passionate about creating engaging stories for young minds. I\'ve always been fascinated by Indian Spirituality and its ability to impart valuable life lessons.\r\nI\'m excited to introduce you to my children\'s picture book concept, \"Krishna\'s Playful Victories,\"(Title yet to be finalized) which brings to life the captivating tales of Lord Krishna\'s childhood pastimes. This delightful story is aimed at children between the ages of 6 to 8 years and follows Krishna\'s adventures as he encounters mischievous demons who disrupt the peace in his idyllic world.\r\nThrough these playful encounters, Krishna teaches valuable lessons about courage, kindness, and overcoming challenges. With vibrant illustrations (to be secured by the publisher), the book will capture children\'s imaginations and leave them with a sense of wonder and inspiration.\r\nCould you please inform me about the submission guidelines and the costs associated along with all the services included. I\'m confident that \"Krishna\'s Playful Victories\" aligns perfectly with your publishing house\'s commitment to high-quality children\'s literature that entertains and educates.\r\nThank you for your time and consideration. I\'m truly enthusiastic about the potential of this book and the positive impact it can have on young readers. I eagerly await your response and the opportunity to discuss this project further.\r\nSincerely,\r\nDr. Akshay N. Hudlikar', NULL, '2024-06-18 19:20:53', '2024-06-18 19:20:53'),
(450, 'Rebecca Perry', '2147636752', 'rebecca.rabke.perry@gmail.com', 'typographical/grammatical error', 'Hello!\r\n\r\nPerhaps you have already noticed this published error in \"My First Padded Board Book of Nursery Rhymes,\" but I feel compelled to draw it to your attention. In \"Mary Had a Little Lamb,\" the printed text says, \"It\'s fleece was white as snow.\" This should read, \"Its ...\" \r\n\r\nI have worked as a freelance writer and editor for many years, with recent clients across the United States and in Australia. I have experience both editing and ghostwriting books, in addition to writing and editing magazine, newspaper, and web content. I would be delighted to help you avoid these sorts of embarrassing mistakes in the future! Please feel free to forward my contact information to your editorial division.\r\n\r\nBest wishes,\r\nRebecca Perry', NULL, '2024-06-19 00:01:39', '2024-06-19 00:01:39'),
(451, 'Lauren Azevedo', '0547806460', 'info@things4kidz.ae', 'Distributor in UAE Query', 'Are you able to advise who your distributor is in the UAE. I am looking for your activity books for our business that does travel packs.', NULL, '2024-06-19 04:35:46', '2024-06-19 04:35:46'),
(452, 'Lauren Azevedo', '0547806460', 'info@things4kidz.ae', 'Distributor in UAE Query', 'Are you able to advise who your distributor is in the UAE. I am looking for your activity books for our business that does travel packs.', NULL, '2024-06-19 04:35:48', '2024-06-19 04:35:48'),
(453, 'Lauren Azevedo', '0547806460', 'info@things4kidz.ae', 'Distributor in UAE Query', 'Are you able to advise who your distributor is in the UAE. I am looking for your activity books for our business that does travel packs.', NULL, '2024-06-19 04:35:50', '2024-06-19 04:35:50'),
(454, 'Lauren Azevedo', '0547806460', 'info@things4kidz.ae', 'Distributor in UAE Query', 'Are you able to advise who your distributor is in the UAE. I am looking for your activity books for our business that does travel packs.', NULL, '2024-06-19 04:35:52', '2024-06-19 04:35:52'),
(455, 'Lauren Azevedo', '0547806460', 'info@things4kidz.ae', 'Distributor in UAE Query', 'Are you able to advise who your distributor is in the UAE. I am looking for your activity books for our business that does travel packs.', NULL, '2024-06-19 04:35:55', '2024-06-19 04:35:55'),
(456, 'Jignesh', '9099937494', 'Jignesh_patel.micro@yahoo.co.in', 'Book availability', 'Need Book \" Fun With cursive IV\" pl help to get this book.', NULL, '2024-06-19 07:52:41', '2024-06-19 07:52:41'),
(457, 'Prakhar test', '9999999999', 'er.prakhar108@gmail.com', 'sdfsdfdsfsdf', 'sdfsd fs dsf dsf', NULL, '2024-06-19 17:42:05', '2024-06-19 17:42:05'),
(458, 'Major Roshini', '6238072963', 'roshinikochachan@gmail.com', 'Lkg and ukg', 'Required wipe and clean books for school purpose in wholesale rate.\r\nAlso story books \r\nPl contact, do share ur catalogue with best price', NULL, '2024-06-20 09:12:30', '2024-06-20 09:12:30'),
(459, 'FAYjJOXQGk', '3611952028', 'wallbroyk22@gmail.com', 'ZKgjsacHurqWJBfU', 'KsjrXxReIahfpV', NULL, '2024-06-20 10:14:36', '2024-06-20 10:14:36'),
(460, 'FAYjJOXQGk', '3611952028', 'wallbroyk22@gmail.com', 'ZKgjsacHurqWJBfU', 'KsjrXxReIahfpV', NULL, '2024-06-20 10:14:42', '2024-06-20 10:14:42'),
(461, 'Sarah Levine', '9173841330', 'sarah.levine@nettyawards.com', 'Netty Award Nomination', 'Hello team! I’m reaching out because wonderhouse  has been nominated for a Netty Award in the Apps & Software category. Could you please have whoever is best suited to handle awards and press send me an email so we can finalize the nomination/press coverage? We’d love to get this wrapped up over the next week or so to meet our June deadline. Thanks so much!', NULL, '2024-06-20 21:09:25', '2024-06-20 21:09:25'),
(462, 'Priyadharshni', '9385966875', 'priyavendhan231123@gmail.com', 'About book enquiry', 'Hai iam priya..I wish to reselling the kids books online platform...so wanted more details about purchasing from you for bulk orders', NULL, '2024-06-21 05:30:26', '2024-06-21 05:30:26'),
(463, 'Michelle', '7338975092', 'mic_alm_17@hotmail.com', 'Is WonderHouse accepting submissions?', '', NULL, '2024-06-23 18:54:59', '2024-06-23 18:54:59'),
(464, 'tDfqwOsyFhxmIop', '7152733526', 'jasrocl192@gmail.com', 'cUBLxuZyl', 'ASQImuRNU', NULL, '2024-06-23 22:43:54', '2024-06-23 22:43:54'),
(465, 'tDfqwOsyFhxmIop', '7152733526', 'jasrocl192@gmail.com', 'cUBLxuZyl', 'ASQImuRNU', NULL, '2024-06-23 22:43:57', '2024-06-23 22:43:57'),
(466, 'tDfqwOsyFhxmIop', '7152733526', 'jasrocl192@gmail.com', 'cUBLxuZyl', 'ASQImuRNU', NULL, '2024-06-23 22:44:02', '2024-06-23 22:44:02'),
(467, 'Deborah Hunt', '7184274815', 'deborahdh0125@gmail.com', 'Previously Published Books', 'Greetings,\r\n\r\nI have several books where the rights have reverted back to me. One is a picture book entitled Same Inside Different Outside which is about diversity and the human body.  If accepted it would require a new cover and new illustrations. https://www.amazon.com/dp/1945175702\r\n\r\nAwarded first place in the 2017 Royal Dragonfly Book Awards Program Awarded the Silver Award from Literary Titan Received 5-star reviews from Good Reads and Reader\'s Favorites Review', NULL, '2024-06-24 01:56:26', '2024-06-24 01:56:26'),
(468, 'Dr Hannah L Khiangte', '7005887350', 'hannahkhiangte@gmail.com', 'Printing Childrens books', 'Hi, I have compiled a few Mizo tribe (Mizo people from the state of Mizoram, India) folk stories in Mizo language and got an illustrator to illustrate it. I would like it printed with padded cover and in board book style for children to read. Would you be able to print? Let me know', NULL, '2024-06-24 10:39:18', '2024-06-24 10:39:18'),
(469, 'sulochna jain', '9929206394', 'librarian@srpublicschool.edu.in', 'stories and general knowledge, self help books', 'we want to purchased books for school library .', NULL, '2024-06-27 06:19:14', '2024-06-27 06:19:14'),
(470, 'Jimy Trujillo', '8448319487', 'jtrujillo@embassyperuindia.in', 'Interest in Publishing by Peruvian Author', 'Dear Wonder House Books Editorial Team,\r\nI hope this message finds you well.\r\nMy name is Jimy Trujillo, and I am in charge of cultural affairs at the Embassy of Peru in India. I am writing to you today to convey the interest of a renowned Peruvian author, Hernán Garrido Lecca, in publishing his children\'s books through your esteemed publishing house in India, with editions in Hindi and Bengali.\r\nMr. Garrido Lecca has written dozens of children\'s books, and his works have been translated into several languages, including English and Russian. He is eager to expand his reach to the young readers of India and believes that Wonder House Books would be the perfect partner for this endeavor.\r\nCould you kindly provide information on the steps required to publish books with your editorial house? Mr. Garrido Lecca is very enthusiastic about this opportunity, and we would appreciate any guidance or details you could offer.\r\nFor more information about Mr. Garrido Lecca, you can visit the following links:\r\n\r\nhttps://hernangarridolecca.pe/biografia/\r\nhttps://en.wikipedia.org/wiki/Hern%C3%A1n_Garrido_Lecca\r\nhttps://hernangarridolecca.pe/\r\n\r\nPlease note that the Embassy of Peru is merely transmitting Mr. Garrido Lecca\'s interest and is not directly involved in the publishing process.\r\nThank you for your attention to this matter. I look forward to your response.\r\n\r\nWarm regards,\r\nJimy Trujillo\r\nCultural Affairs\r\nEmbassy of Peru in India', NULL, '2024-06-27 09:50:21', '2024-06-27 09:50:21'),
(471, 'Jimy Trujillo', '8448319487', 'jtrujillo@embassyperuindia.in', 'Interest in Publishing by Peruvian Author', 'Dear Wonder House Books Editorial Team,\r\nI hope this message finds you well.\r\nMy name is Jimy Trujillo, and I am in charge of cultural affairs at the Embassy of Peru in India. I am writing to you today to convey the interest of a renowned Peruvian author, Hernán Garrido Lecca, in publishing his children\'s books through your esteemed publishing house in India, with editions in Hindi and Bengali.\r\nMr. Garrido Lecca has written dozens of children\'s books, and his works have been translated into several languages, including English and Russian. He is eager to expand his reach to the young readers of India and believes that Wonder House Books would be the perfect partner for this endeavor.\r\nCould you kindly provide information on the steps required to publish books with your editorial house? Mr. Garrido Lecca is very enthusiastic about this opportunity, and we would appreciate any guidance or details you could offer.\r\nFor more information about Mr. Garrido Lecca, you can visit the following links:\r\n\r\nhttps://hernangarridolecca.pe/biografia/\r\nhttps://en.wikipedia.org/wiki/Hern%C3%A1n_Garrido_Lecca\r\nhttps://hernangarridolecca.pe/\r\n\r\nPlease note that the Embassy of Peru is merely transmitting Mr. Garrido Lecca\'s interest and is not directly involved in the publishing process.\r\nThank you for your attention to this matter. I look forward to your response.\r\n\r\nWarm regards,\r\nJimy Trujillo\r\nCultural Affairs\r\nEmbassy of Peru in India', NULL, '2024-06-27 09:50:22', '2024-06-27 09:50:22');
INSERT INTO `contactuses` (`id`, `name`, `phone`, `email`, `subject`, `message`, `deleted_at`, `created_at`, `updated_at`) VALUES
(472, 'Jimy Trujillo', '8448319487', 'jtrujillo@embassyperuindia.in', 'Interest in Publishing by Peruvian Author', 'Dear Wonder House Books Editorial Team,\r\nI hope this message finds you well.\r\nMy name is Jimy Trujillo, and I am in charge of cultural affairs at the Embassy of Peru in India. I am writing to you today to convey the interest of a renowned Peruvian author, Hernán Garrido Lecca, in publishing his children\'s books through your esteemed publishing house in India, with editions in Hindi and Bengali.\r\nMr. Garrido Lecca has written dozens of children\'s books, and his works have been translated into several languages, including English and Russian. He is eager to expand his reach to the young readers of India and believes that Wonder House Books would be the perfect partner for this endeavor.\r\nCould you kindly provide information on the steps required to publish books with your editorial house? Mr. Garrido Lecca is very enthusiastic about this opportunity, and we would appreciate any guidance or details you could offer.\r\nFor more information about Mr. Garrido Lecca, you can visit the following links:\r\n\r\nhttps://hernangarridolecca.pe/biografia/\r\nhttps://en.wikipedia.org/wiki/Hern%C3%A1n_Garrido_Lecca\r\nhttps://hernangarridolecca.pe/\r\n\r\nPlease note that the Embassy of Peru is merely transmitting Mr. Garrido Lecca\'s interest and is not directly involved in the publishing process.\r\nThank you for your attention to this matter. I look forward to your response.\r\n\r\nWarm regards,\r\nJimy Trujillo\r\nCultural Affairs\r\nEmbassy of Peru in India', NULL, '2024-06-27 09:50:23', '2024-06-27 09:50:23'),
(473, 'Ruhi', '7718999517', 'ruhimqazi@gmail.com', 'To place book order', 'We need playgroup set that we have seen online', NULL, '2024-06-28 05:45:18', '2024-06-28 05:45:18'),
(474, 'Ruhi', '7718999517', 'ruhimqazi@gmail.com', 'To place book order', 'We need playgroup set that we have seen online', NULL, '2024-06-28 05:45:43', '2024-06-28 05:45:43'),
(475, 'Contact us numer data', '9999999999', 'test@gmail.com', 'Our Information', 'Our Information', NULL, '2024-07-08 09:35:44', '2024-07-08 09:35:44'),
(476, 'Test Enquiry', '9999999999', 'deepaksta@gmail.com', 'Test Enquiry', '', NULL, '2024-07-08 09:38:31', '2024-07-08 09:38:31'),
(477, 'Nailah', '0057678600', 'nafeesah.hamode@gmail.com', 'Quotation', 'Helllo.\r\nCan i know the shipping cost to Mauritius plz?', NULL, '2024-07-13 08:23:31', '2024-07-13 08:23:31'),
(478, 'Zahra Azeez', '0761948852', 'zawker96@gmail.com', 'Shipping to other countries', 'Hi. Do you ship to SriLankan? I need some books', NULL, '2024-07-14 08:15:09', '2024-07-14 08:15:09'),
(479, 'Husna Khan', '8849548405', 'husnap@rbi.edu.in', 'Library', 'Required books for library Nursery to 5', NULL, '2024-07-15 01:54:33', '2024-07-15 01:54:33'),
(480, 'Husna Khan', '8849548405', 'husnap@rbi.edu.in', 'Library', 'Required books for library Nursery to 5', NULL, '2024-07-15 01:54:35', '2024-07-15 01:54:35'),
(481, 'Deepak Arora', '8800549949', 'deepaksta@gmail.com', 'This is for testing purpose.', '', NULL, '2024-07-18 06:52:13', '2024-07-18 06:52:13'),
(482, 'Prasha', '0488478947', 'psauthor80@gmail.com', 'Submission error', 'Hi there, I\'ve tried several times to submit via the submissions page of your website but keep getting a server / string error. Please advise if there is another way to submit it? many thanks, Prasha', NULL, '2024-07-19 01:15:04', '2024-07-19 01:15:04'),
(483, 'adbHlmZcxzUWj', '2456547465', 'lillianfl_brooksvs@outlook.com', 'vjXfGaDOnl', 'CVUzLacJ', NULL, '2024-07-19 05:43:34', '2024-07-19 05:43:34'),
(484, 'adbHlmZcxzUWj', '2456547465', 'lillianfl_brooksvs@outlook.com', 'vjXfGaDOnl', 'CVUzLacJ', NULL, '2024-07-19 05:43:40', '2024-07-19 05:43:40'),
(485, 'Abhijit Paymal', '8380000619', 'abhijitpaymal@gmail.com', 'Re: meri pratham Hindi Sulekh book purchase', 'Dear sir,\r\nI have purchased meri pratham Hindi Sulekh book from cross word exibition but i found shabh 2 sets instead of matra dyan is missing \r\n\r\nKindly check at your end and send one set at below address \r\n\r\nAbhijit Paymal \r\nC504,Park Royal, Western Avenue,wakad Pune -411 057\r\n(M) 8380000619', NULL, '2024-07-20 07:28:14', '2024-07-20 07:28:14'),
(486, 'Prasanta Dass', '9831334915', 'pradass57@gmail.com', 'Reselling your books', 'I am a man of 67 years old person who sells digital product  of all types of ebooks and books.Your books has interested me to work with you to grow my digital business.Will you please help me to grow up my business by providing terms and conditions of reselling your products.', NULL, '2024-07-21 13:11:52', '2024-07-21 13:11:52'),
(487, 'zXxNpkATwBFaoLhi', '3510530205', 'essie94karpzkm@outlook.com', 'IBTPLoSVUMzbt', 'pRSPOvKnM', NULL, '2024-07-21 20:35:41', '2024-07-21 20:35:41'),
(488, 'zXxNpkATwBFaoLhi', '3510530205', 'essie94karpzkm@outlook.com', 'IBTPLoSVUMzbt', 'pRSPOvKnM', NULL, '2024-07-21 20:35:46', '2024-07-21 20:35:46'),
(489, 'AVANTIKA KHANDELIA', '7705824062', 'uniqueavantika@gmail.com', 'looking for books', 'i am looking to set my school library.', NULL, '2024-07-22 03:56:58', '2024-07-22 03:56:58'),
(490, 'book House', '8900735455', 'bookhouse1981@gmail.com', 'b2b purchase', 'it we be our utter pleasure to do business with you. i want to know the discount structure', NULL, '2024-07-22 06:06:12', '2024-07-22 06:06:12'),
(491, 'Dikshit Akbari', '9016285937', 'dikshitnakbari@gmail.com', 'Careers', 'Hello Sir/Mam,\r\n My name is Dikshit from India and I am interested in joining remotely.\r\n I can do translation, Copy Typing, Retyping, Transcription, Proofreading and many more.\r\n I am ready to join Immediately and negotiate my salary package.\r\n I hope to expect a positive answer.  \r\n Thank you. Regards', NULL, '2024-07-22 06:44:26', '2024-07-22 06:44:26'),
(492, 'Maitreyee Kadoo', '9620944222', 'maitreyeek@gmail.com', 'Error on submission page', 'Dear Team, \r\n\r\nI tried to submit using the submission tab that you have provided, and keep getting an html page error. I am not sure if my manuscript was submitted or not. I have received no auto generated response. Please do let me know if there\'s an alternate way to submit.\r\n\r\nRegards,\r\nMaitreyee', NULL, '2024-07-23 06:43:23', '2024-07-23 06:43:23'),
(493, 'Rathinaraj', '8754379696', 'ratnaraj85@gmail.com', 'Request for Quotation of Bulk Order', 'Dear sir,\r\n\r\nWe are the wholesale supplier of Competitive books.  We have the requirement for the below book in bulk quantities.\r\n\r\n1. Gulliver\'s  Travels, Jonathan Swift - Quantity 152 Nos.\r\n\r\nCould you please provide the discount rate, unit price and delivery time (Deliver to Chennai)\r\n\r\nWe are expecting your favorable reply', NULL, '2024-07-23 17:13:28', '2024-07-23 17:13:28'),
(494, 'Anshulika Nigam', '9769954030', 'anshulikanigam@yahoo.in', 'Writing children books', 'I have few ideas and proposals for writing children books. Age Group - 0 to 5 years.', NULL, '2024-07-23 19:48:04', '2024-07-23 19:48:04'),
(495, 'zxdtLITRNX', '7561541006', 'kellyrichter2002@yahoo.com', 'ntTmlcGVW', 'vaBrIUkWxAg', NULL, '2024-07-24 13:23:04', '2024-07-24 13:23:04'),
(496, 'zxdtLITRNX', '7561541006', 'kellyrichter2002@yahoo.com', 'ntTmlcGVW', 'vaBrIUkWxAg', NULL, '2024-07-24 13:23:08', '2024-07-24 13:23:08'),
(497, 'Vartika Dalmia', '6295019689', 'Kanahu@1234', 'Horror story book English', '', NULL, '2024-07-24 15:35:09', '2024-07-24 15:35:09'),
(498, 'Jenny Wise', '7196683609', 'jenny@specialhomeeducator.com', 'Will you look into this for me?', 'Hi, I hope you\'re doing well!\r\n\r\nIt\'s essential for entrepreneurs to continuously seek out new business strategies to maintain a competitive edge and foster growth and success. Interestingly, one frequently underestimated resource for valuable business information is your nearby library.\r\n\r\nI would love to craft an article for your website on this subject. I\'ll explore the advantages of visiting your local library and discuss how its array of books and resources can aid entrepreneurs in acquiring and applying new business strategies.\r\n\r\nWould you be interested in reviewing my article for potential publication on your website? Let me know what you think!\r\n\r\nWishing you a wonderful day,\r\nJenny Wise\r\nSpecialHomeEducator.com\r\n\r\n\r\nP.S. By the way, if you don’t like the suggested topic, do reach out to me with a topic that’s a better fit for your website. If you don’t want to hear from me again, please let me know.', NULL, '2024-07-25 01:50:05', '2024-07-25 01:50:05'),
(499, 'Jenny Wise', '7196683609', 'jenny@specialhomeeducator.com', 'Will you look into this for me?', 'Hi, I hope you\'re doing well!\r\n\r\nIt\'s essential for entrepreneurs to continuously seek out new business strategies to maintain a competitive edge and foster growth and success. Interestingly, one frequently underestimated resource for valuable business information is your nearby library.\r\n\r\nI would love to craft an article for your website on this subject. I\'ll explore the advantages of visiting your local library and discuss how its array of books and resources can aid entrepreneurs in acquiring and applying new business strategies.\r\n\r\nWould you be interested in reviewing my article for potential publication on your website? Let me know what you think!\r\n\r\nWishing you a wonderful day,\r\nJenny Wise\r\nSpecialHomeEducator.com\r\n\r\n\r\nP.S. By the way, if you don’t like the suggested topic, do reach out to me with a topic that’s a better fit for your website. If you don’t want to hear from me again, please let me know.', NULL, '2024-07-25 01:50:07', '2024-07-25 01:50:07'),
(500, 'Jenny Wise', '7196683609', 'jenny@specialhomeeducator.com', 'Will you look into this for me?', 'Hi, I hope you\'re doing well!\r\n\r\nIt\'s essential for entrepreneurs to continuously seek out new business strategies to maintain a competitive edge and foster growth and success. Interestingly, one frequently underestimated resource for valuable business information is your nearby library.\r\n\r\nI would love to craft an article for your website on this subject. I\'ll explore the advantages of visiting your local library and discuss how its array of books and resources can aid entrepreneurs in acquiring and applying new business strategies.\r\n\r\nWould you be interested in reviewing my article for potential publication on your website? Let me know what you think!\r\n\r\nWishing you a wonderful day,\r\nJenny Wise\r\nSpecialHomeEducator.com\r\n\r\n\r\nP.S. By the way, if you don’t like the suggested topic, do reach out to me with a topic that’s a better fit for your website. If you don’t want to hear from me again, please let me know.', NULL, '2024-07-25 01:50:09', '2024-07-25 01:50:09'),
(501, 'Jenny Wise', '7196683609', 'jenny@specialhomeeducator.com', 'Will you look into this for me?', 'Hi, I hope you\'re doing well!\r\n\r\nIt\'s essential for entrepreneurs to continuously seek out new business strategies to maintain a competitive edge and foster growth and success. Interestingly, one frequently underestimated resource for valuable business information is your nearby library.\r\n\r\nI would love to craft an article for your website on this subject. I\'ll explore the advantages of visiting your local library and discuss how its array of books and resources can aid entrepreneurs in acquiring and applying new business strategies.\r\n\r\nWould you be interested in reviewing my article for potential publication on your website? Let me know what you think!\r\n\r\nWishing you a wonderful day,\r\nJenny Wise\r\nSpecialHomeEducator.com\r\n\r\n\r\nP.S. By the way, if you don’t like the suggested topic, do reach out to me with a topic that’s a better fit for your website. If you don’t want to hear from me again, please let me know.', NULL, '2024-07-25 01:50:10', '2024-07-25 01:50:10'),
(502, 'Archana K R', '9886185388', 'krarchana85@gmail.com', 'Facing errors while submitting the manuscript', 'Unable to submit my manuscript under the submissions tab of your website. when i click on submit its throwing an exception.', NULL, '2024-07-26 07:23:35', '2024-07-26 07:23:35'),
(503, 'Archana K R', '9886185388', 'krarchana85@gmail.com', 'Facing errors while submitting the manuscript', 'Unable to submit my manuscript under the submissions tab of your website. when i click on submit its throwing an exception.', NULL, '2024-07-26 07:23:45', '2024-07-26 07:23:45'),
(504, 'Archana K R', '9886185388', 'krarchana85@gmail.com', 'Facing errors while submitting the manuscript', 'Unable to submit my manuscript under the submissions tab of your website. when i click on submit its throwing an exception.', NULL, '2024-07-26 07:23:49', '2024-07-26 07:23:49'),
(505, 'Archana K R', '9886185388', 'krarchana85@gmail.com', 'Facing errors while submitting the manuscript', 'Unable to submit my manuscript under the submissions tab of your website. when i click on submit its throwing an exception.', NULL, '2024-07-26 07:23:52', '2024-07-26 07:23:52'),
(506, 'Archana K R', '9886185388', 'krarchana85@gmail.com', 'Facing errors while submitting the manuscript', 'Unable to submit my manuscript under the submissions tab of your website. when i click on submit its throwing an exception.', NULL, '2024-07-26 07:23:53', '2024-07-26 07:23:53'),
(507, 'Prithvi Kapadia', '7738394931', '22prithvi@gmail.com', 'Distribution of my children\'s story book', 'I have written and published a children\'s story book for kids of 5+ yrs, named, Princess and the Peacock Dress. Its colored hardbound and full of illustrations. I want to distribute the book across India in stores', NULL, '2024-07-26 10:06:00', '2024-07-26 10:06:00'),
(508, 'Paul Abruzzi', '9784659359', 'jabberwockybooks@gmail.com', '9789388144209', 'Hi Folks,\r\nChecking on price & availability of the above ISBN (Nursery Rhymes Bord Book). I\'m a bookstore in Massachusetts in US...anybody distribut your books here?\r\nThanks,\r\nPaul', NULL, '2024-07-26 15:00:51', '2024-07-26 15:00:51'),
(509, 'DEEPAK CHAND NAUTIYAL', '9891821623', 'vcpslibrarian@gmail.com', 'Catalog of yours published books', 'Pl sent the catalog of your published books\r\nThanks\r\nLibrarian\r\nSeth M.R.Jaipuria school \r\nKnowledge park-V\r\nGreaternoida west-201306\r\n9891821623', NULL, '2024-07-27 04:49:10', '2024-07-27 04:49:10'),
(510, 'Gavya', '9971118488', 'neha9312garg@gmail.com', 'English', 'Want book for my child \r\nAgr 7 year', NULL, '2024-07-28 04:22:39', '2024-07-28 04:22:39'),
(511, 'Teena Thomas', '8807845641', 'teenathomas77@gmail.com', 'Enquiry', 'Do you have practice books for short hand writing', NULL, '2024-07-28 12:23:17', '2024-07-28 12:23:17'),
(512, 'RASHMI KANT PARIKH', '7013999013', 'hrp.toursandtravels@gmail.com', 'ABOUT KIDS BOOKS', 'I AM FROM HYDERABAD. WANT SOME KIDS BOOKS. AND OTHER ITEMS.\r\nIF POSSIBLE SEND YOUR CATALOG AND BUSINESS TERMS AND CONDITIONS.', NULL, '2024-07-29 07:15:03', '2024-07-29 07:15:03'),
(513, 'P A Gouri Sankar', '9539908673', 'pagourisankar1996@gmail.com', 'Business : Children\'s Rhymes Book Submission', 'Dear Wonder House Books Team,\r\n\r\nI hope this message finds you well. My name is P A Gouri Sankar, and I have completed a charming collection of children\'s rhymes. I believe it has great potential and would love the opportunity to have it published through your esteemed house.\r\n\r\nI am open to any terms and conditions, including royalty arrangements on the first book. My main goal is to get published and establish my name.\r\n\r\nPlease contact me if interested, and I will gladly send a sample of my draft.\r\n\r\nThank you for your consideration.\r\n\r\nBest regards,\r\n\r\nP A Gouri Sankar\r\nPhone number - 9539908673', NULL, '2024-07-31 06:21:18', '2024-07-31 06:21:18'),
(514, 'Tarana Fazal', '9096218901', 'taranafazal247@gmail.com', 'Unable to make a submission', 'I am a children’s book author and wanted to make a submission for my next children’s book with your esteemed organisation. I am trying through your website, and unable to do so. Can you please guide on this?\r\n\r\nThanks and regards,\r\nTarana Fazal', NULL, '2024-08-01 11:11:51', '2024-08-01 11:11:51'),
(515, 'Aishwarya', '8310295751', 'aishwarya.kamakshidasan@gmail.com', 'Publishing book', 'Hi, I am a jewellery designer with 3 years of experience. I wanted to create a book and was worndering how to go about with it. Love to have a chat.', NULL, '2024-08-02 17:57:45', '2024-08-02 17:57:45'),
(516, 'Aishwarya', '8310295751', 'aishwarya.kamakshidasan@gmail.com', 'Publishing book', 'Hi, I am a jewellery designer with 3 years of experience. I wanted to create a book and was worndering how to go about with it. Love to have a chat.', NULL, '2024-08-02 17:57:47', '2024-08-02 17:57:47'),
(517, 'John Smith', '6544342331', 'esebemluej@solid-hamster.skin', 'Djk9 jaqsd9 0qawdm qw90dxm dqw9xcmnqaw09w dnqaw09', 'Djk9 jaqsd9 0qawdm qw90dxm dqw9xcmnqaw09w dnqaw09', NULL, '2024-08-03 18:38:04', '2024-08-03 18:38:04'),
(518, 'Tiny Little Canvas', '9437954802', 'canvas.tinylittle@gmail.com', 'Planner printables', 'Hello there, \r\nI want to contact you for publishing my planners, to-do list printables, colouring books and many other products. \r\nPlease contact if you are intrested.', NULL, '2024-08-03 22:11:37', '2024-08-03 22:11:37'),
(519, 'JdIhmolq', '8635705176', 'canady.liz1983@yahoo.com', 'yAxnoObGc', 'CticSOhqwFjeIrUM', NULL, '2024-08-04 02:05:55', '2024-08-04 02:05:55'),
(520, 'JdIhmolq', '8635705176', 'canady.liz1983@yahoo.com', 'yAxnoObGc', 'CticSOhqwFjeIrUM', NULL, '2024-08-04 02:05:59', '2024-08-04 02:05:59'),
(521, 'Monica Sharma', '9505389811', 'ms.bioacademy@gmail.com', 'Printing and publishing Kids Story Books', 'Hi,\r\nI have tries submitting under SUBMISSION section of your webpage but there is some error with the page. I am writing to express an interest in publishing my story books under your publication house. \r\nKindly contact\r\nRegards\r\nMonica', NULL, '2024-08-05 07:00:56', '2024-08-05 07:00:56'),
(522, 'oNUzTBynjvc', '8622726143', 'munozkair1998@gmail.com', 'AHWODKJZvP', 'HXInAFpL', NULL, '2024-08-07 09:25:24', '2024-08-07 09:25:24'),
(523, 'oNUzTBynjvc', '8622726143', 'munozkair1998@gmail.com', 'AHWODKJZvP', 'HXInAFpL', NULL, '2024-08-07 09:25:31', '2024-08-07 09:25:31'),
(524, 'PANIMA BOOK DISTRIBUTORS', '9810444755', 'panimabooks@gmail.com', 'PRICE/AVAILABILTY/DISCOUNT.  PLEASE SEND PROFORMA', 'INDIA - Fun Activity Book for Children\r\nWorld\'s Greatest Artists : Biographies of Inspirational Personalities For Kids\r\nWorld\'s Greatest Entrepreneurs: Biographies of Inspirational Personalities For Kids\r\nWorld\'s Greatest Leaders: Biographies of Inspirational Personalities For Kids\r\nWorld\'s Greatest Leaders: Biographies of Inspirational Personalities For Kids\r\nWorld\'s Greatest Musicians : Biographies of Inspirational Personalities For Kids\r\nWorld\'s Greatest Scientists & Inventors : Biographies of Inspirational Personalities For Kids\r\nWorld\'s Greatest Writers : Biographies of Inspirational Personalities For Kids', NULL, '2024-08-09 08:59:54', '2024-08-09 08:59:54'),
(525, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Administrator', '', NULL, '2024-08-09 15:16:43', '2024-08-09 15:16:43'),
(526, 'Deepshikha Talwar', '9958728864', 'deepshitalwar@gmail.com', 'Administrator', '', NULL, '2024-08-09 15:16:44', '2024-08-09 15:16:44'),
(527, 'Anita', '9899658449', 'anitarana@deepalaya.org', 'Request for catalogue', 'Please provide the latest book catalogue for the community library. For more details, please visit our website, www.deepalaya.org', NULL, '2024-08-10 06:02:53', '2024-08-10 06:02:53'),
(528, 'Anil gautam', '8285030902', 'info.gaddward@gmail.com', 'Supply the art material items for kids book', 'We are manufacturing the kids art material wr are also manufactured white board marker pen for yours book attachment we are developed brush marker pen at economical price.', NULL, '2024-08-10 10:04:26', '2024-08-10 10:04:26'),
(529, 'PQbImprkZOKtoCB', '8022376933', 'koltena6014@gmail.com', 'EfzmuGZjkoM', 'vnIxtzXrfdMbOal', NULL, '2024-08-10 12:09:28', '2024-08-10 12:09:28'),
(530, 'PQbImprkZOKtoCB', '8022376933', 'koltena6014@gmail.com', 'EfzmuGZjkoM', 'vnIxtzXrfdMbOal', NULL, '2024-08-10 12:09:34', '2024-08-10 12:09:34'),
(531, 'Erin Middleton', '1111111111', 'erinm@wccls.org', 'Sanskrit or Hindi?', 'Hello,\r\nI am a cataloger at a Library in the United States of America, I am trying to identify the language in one of your books. I could not find it on your website and there is no information on the book itself, so I am writing you for help. It is a bilingual book titled Shlokas and Mantras for kids. It is in English and either Hindi or Sanskrit?\r\nThe ISBN is 9789354405167 I would greatly appreciate your assistance in this matter. Thank you, Erin Middleton', NULL, '2024-08-10 19:14:01', '2024-08-10 19:14:01'),
(532, 'Ashima', '9136362056', 'ashimakanwaria3131898@gmail.com', 'I want to publish my book', 'I want to publish my book\r\nKids book', NULL, '2024-08-11 07:07:31', '2024-08-11 07:07:31'),
(533, 'Ashima', '9136362056', 'ashimakanwaria3131898@gmail.com', 'I want to publish my book', 'I want to publish my book\r\nKids book', NULL, '2024-08-11 07:07:31', '2024-08-11 07:07:31'),
(534, 'Nasrulla', '8590583588', 'naswrullah@gmail.com', 'Resale Opportunities', 'Dear Wonderhouse Books Team,\r\n\r\nI hope this email finds you well.. . I\'m from Kerala.We are interested in exploring opportunities to resale your classical story works and activity books for kids in our region.\r\n\r\nI had previously attempted to contact your team via phone, but unfortunately, my calls went unanswered. I wanted to follow up with this email to express our interest in your titles and inquire about the possibility of resale  these books  in Kerala.\r\n\r\nI have had the opportunity to review your catalogue and was impressed by the range and quality of your publications. We believe that your titles would resonate well with our audience, and we would like to discuss the possibility of partnering with you to make these books available in Kerala. Could you please provide us with information on the following:\r\n\r\n- Availability of your titles for resale in Kerala \r\n- Wholesale pricing and discount structures.\r\n\r\nThank you for considering our inquiry. We look forward to hearing from you soon.\r\n\r\nBest regards.', NULL, '2024-08-11 08:13:39', '2024-08-11 08:13:39'),
(535, 'zdLnPGrqNbwDJ', '2221206233', 'whatley_geoffrey7403@yahoo.com', 'cUELlVruj', 'PInYFZidqXbWABj', NULL, '2024-08-13 03:18:52', '2024-08-13 03:18:52'),
(536, 'zdLnPGrqNbwDJ', '2221206233', 'whatley_geoffrey7403@yahoo.com', 'cUELlVruj', 'PInYFZidqXbWABj', NULL, '2024-08-13 03:18:58', '2024-08-13 03:18:58'),
(537, 'Vishesh', '8147008247', 'chandrabhraman@gmail.com', 'Issues in submission', 'I got the following error while trying to submit a book sample:\r\n\r\nIlluminate\\Database\\QueryException\r\nSQLSTATE[22001]: String data, right truncated: 1406 Data too long for column \'synopsis\' at row 1 (SQL: insert into `submissions` (`name`, `phone`, `email`, `country`, `language`, `genre`, `work`, `synopsis`, `chapters`, `comments`, `updated_at`, `created_at`) values (Vishesh Vatsal, 8147008247, vishesh.vatsal20@gmail.com, Select a country, Select a language, Select a Category, Title of Work, Visually attractive colouring book to cultivate a sense of wonder and imagination. Today’s kids may be the first generation of space-faring humans. The pictures in this book contain creative, space-themed artwork with black-and-white outlines. Both fine colour pencils or waterpaint go well for colouring., public/uploads/submission/1723532983_72.pdf, , 2024-08-13 07:09:43, 2024-08-13 07:09:43))', NULL, '2024-08-13 07:13:04', '2024-08-13 07:13:04'),
(538, 'Emma Quinn', '6892673581', 'support@bulksocialfanshops.com', 'Business Enquiry Wonderhousebooks!', 'Hi, Wonderhousebooks!\r\n\r\nWe see that your Instagram account (instagram.com/wonderhousebooks) and other social media accounts are not getting many followers, likes, comments, or views. This could be affecting your sales, personal reputation, and ability to attract new audiences.\r\nMy name is Emma Quinn (https://instagram.com/shiny_arts_emma) from BulkSocialFanShop® Advertising Solutions, a social media marketing company celebrating our 10th anniversary with a special combo offer designed to enhance your social media presence.\r\n\r\nInstagram Combo Offer:\r\n100% Real Profiles - 12K Followers + 8K Likes + 100K Views + 500 Comments + 1K Shares + 20 Bluetick profile engagements + Free 1 Million Instagram users database + Free 100k Email database - (Can be split into multiple links - Full details on our website)\r\nAll for just $xx! (Coupon code BSFS10) Get it here: https://www.bulksocialfanshops.com/instagram-combo-offer\r\nWe also have combo offers for Facebook, Twitter, LinkedIn, Pinterest, YouTube, and more. We can provide up to 2 million followers.\r\n\r\nOur Advantages: Free trial, Instant delivery, Accepts paypal, cards and cryptos, Lifetime guarantee, No password needed, 100% safe from bans, 100% refund guarantee, 10+ years of experience, 24/7 live support, 100% privacy, and more.\r\n\r\nAll for just $xx! (Coupon code BSFS10) Get it here: https://www.bulksocialfanshops.com/instagram-combo-offer\r\n\r\nBest wishes,\r\nEmma Quinn (https://instagram.com/shiny_arts_emma)\r\nBulkSocialFanShop® Account Manager\r\nMobile (WhatsApp): +1 (689) 267-3581\r\nRegistered USA address: BulkSocialFanShop® Advertising Solutions, 31463 Stoneybrook Road, Orlando, Florida, 32810, USA.', NULL, '2024-08-14 09:19:02', '2024-08-14 09:19:02'),
(539, 'Mee Yee', '6584488644', 'limmeeyee@hotmail.com', 'Interest for Bulk Order', 'Hi Sir, please advise minimum order for export to Singapore.', NULL, '2024-08-15 04:34:31', '2024-08-15 04:34:31'),
(540, 'Sidharth Meht', '9819133179', 'athen79@gmail.com', 'Bhagavad Gita', 'Dear Publisher,\r\n\r\nI have read atleast two versions of BhagvadGita from various publication and trust me I could not read beyond 25 pages. Difficult to understand, biased and lot more. Whereas the version that you have come out is probably the best version that I have read. Many thanks.\r\n\r\nI am an Atheist by heart as I have lots of question that remain unanswered especially that are related to Karma.\r\n\r\nWe have two versions of Karma\r\n1 - Lord Krishna’s version of Karma as described in Bhagvad Gita\r\n2 - Lord Mahaveera’s version Karma as described in Jainism\r\n\r\nYou have done a fabulous job with Lord Krishna’s version of Karma as explained in Bhagvad Gita.\r\n\r\nRequest you to come out with two more books\r\n1 - Lord Mahaveera’s version of Karma\r\n2 - An unbiased and neutral view comparing Lord Mahaveer’s version and Lord Krishna’s version of Karma.\r\n\r\nI know I am asking a lot. But trust me there are many atheists like me who wants answers to the questions they have in their mind. Also, in today’s world, children too need to understand what Karma is and understand the difference. We somehow need to educate the community. Majority of these versions are available in local language and hence difficult for them to read and understand\r\n\r\nI spoke to someone on few versions and see his response . This might be a starting point for you to do some ground work.\r\n\r\nThis is from a person who understands both versions of Karma\r\n\r\n1.\r\nKarma is Action or Deed as per Bhagavad Gita.\r\nLike I donated Rs1000 to charity is the Action of Deed\r\n\r\nKarma is fruits of Action (which we call Paap & Punya) as per Jainism.\r\nLike I donated Rs1000 to charity and I earned Puny is fruit of the Action\r\n\r\nSo the meanings of both schools of thoughts is slightly different\r\n\r\n2.\r\nThere is something which precedes all the shloks shared by you i.e. Lord Krishna is working on Arjun\'s delusion before he can fight.\r\n\r\nVerse 32-35-Lord Krishna is asking to remove his attachment towards his relatives so that he can fight. Removing attachment means no ego, no anger, no ill thoughts, no craving of senses, only after that he can fight.\r\n\r\nIn short, Fight as per Lord Krishna is possible only if Arjun has no negativities.\r\n\r\nHumble request to come up with my suggestion.\r\n\r\nSincere thanks.', NULL, '2024-08-15 08:28:07', '2024-08-15 08:28:07'),
(541, 'Julia Lemeshko', '0661424775', 'yuliia.lemeshko@ranok-school.com', 'Ranok-Wonder House Books - Frankfurt 2024 meeting', 'Dear Сollegues,\r\n\r\n\r\n\r\nMy name is Julia, I work for Ranok Publishing House, Ukraine.\r\n\r\n \r\n\r\nWe will be attending the Frankfurt book fair this year and would be happy to meet with you and have a look at your new books (children\'s titles).\r\n\r\nCould you kindly advise your available slots and the hall and stand number?\r\n\r\nLooking forward to hearing from you!\r\n\r\nBest regards,\r\nJulia', NULL, '2024-08-16 11:12:21', '2024-08-16 11:12:21'),
(542, 'Navin Rohira', '9818114500', 'navinco@yahoo.com', 'Want ur wonder book set for kids', 'Want ur set of book pack of 20 books for kids want 20nos to 30nos of the set plz call back wid the pricing', NULL, '2024-08-16 15:35:23', '2024-08-16 15:35:23'),
(543, 'Dharmesh', '0766620330', 'dharmeshmaash701@gmail.com', 'Wholesale purchase srilanka my shop awesome kids', 'Price list', NULL, '2024-08-18 04:15:49', '2024-08-18 04:15:49'),
(544, 'Christine Ellul', '7026068446', 'christinesissom@gmail.com', 'Missing page', 'Hi! I have the ‘My First Library’ set and love it. However, I just started wanting to work on letters with my little one and noticed the ‘abc’ book is missing the first two pages. The pages with A and B. Can I possibly receive a new one? If you need a picture or video with proof I would be more than happy.', NULL, '2024-08-18 23:59:05', '2024-08-18 23:59:05'),
(545, 'Christine Ellul', '7026068446', 'christinesissom@gmail.com', 'Missing page', 'Hi! I have the ‘My First Library’ set and love it. However, I just started wanting to work on letters with my little one and noticed the ‘abc’ book is missing the first two pages. The pages with A and B. Can I possibly receive a new one? If you need a picture or video with proof I would be more than happy.', NULL, '2024-08-18 23:59:06', '2024-08-18 23:59:06'),
(546, 'NzqHgcoVtBxXmJiD', '9537723511', 'blambertk4962@gmail.com', 'tVJEXSejGpz', 'WLPgXJpKwYI', NULL, '2024-08-19 02:16:57', '2024-08-19 02:16:57'),
(547, 'NzqHgcoVtBxXmJiD', '9537723511', 'blambertk4962@gmail.com', 'tVJEXSejGpz', 'WLPgXJpKwYI', NULL, '2024-08-19 02:17:02', '2024-08-19 02:17:02'),
(548, 'vinay narayan', '9820442649', 'vinaynarayanawriter@gmail.com', 'book to be published', 'I wish to publish my 4th book in English and Marathi through a good publisher who is connected to Publishers like IBD, Prakash etc', NULL, '2024-08-22 07:50:27', '2024-08-22 07:50:27'),
(549, 'Prasanta Das', '9831334915', 'pradass57@gmail.com', 'Reselling your books', 'I am anEx Macnillan Managerresiding at Kolkata,West Bengal.\r\nI have retired from PSU Bank.I was working as Marketing Manager\r\nin Bank of India. Apart from it I have also experience in working at Operation and HR Department in Branch.\r\nI would like to be associated with your company as I have previous experience in publishing Industry.', NULL, '2024-08-23 06:54:23', '2024-08-23 06:54:23'),
(550, 'sahiba soni', '9996768307', 'jain.sahiba34@gmail.com', 'Pop-up book', 'Hello sir, I need a minimum 40 pieces of pop-up books suitable for 4-year-old children, kindly provide a general estimate of each book so that i can order', NULL, '2024-08-23 14:25:42', '2024-08-23 14:25:42'),
(551, 'Si Luo', '6318802648', 'nju07luosi@gmail.com', 'Mistakes in periodic table', 'Hi, my 5 year old son found there’s a little mistake in the periodic table on page 18 of the book Electricity & Electronics. The Element Pa has an atomic number of 91. However on this page it showed 90. My son could find out this error because he found there were two element labeled 90 and the 91 is missing. I just want to let you know so that my son would get cheered up by reading a  booked so carefully. Thanks!', NULL, '2024-08-24 13:50:47', '2024-08-24 13:50:47'),
(552, 'gZzHudWjU', '4924359705', 'turner.william7717@yahoo.com', 'yALqtnCSDTOeRx', 'sONALktKrCUZDWnE', NULL, '2024-08-25 00:46:17', '2024-08-25 00:46:17'),
(553, 'gZzHudWjU', '4924359705', 'turner.william7717@yahoo.com', 'yALqtnCSDTOeRx', 'sONALktKrCUZDWnE', NULL, '2024-08-25 00:46:22', '2024-08-25 00:46:22'),
(554, 'Varun Sharma', '8285984620', 'illustratorvarun@gmail.com', 'I\'m interested in working with you', 'Hello,\r\n\r\nI’m Varun Sharma, a full-time freelance illustrator with 12 years of experience helping creators bring their visions to life with stunning, vibrant colors. I specialize in enhancing storytelling through color, ensuring that each project I touch resonates emotionally and visually with its audience.\r\n\r\nOver the years, I’ve had the privilege of working on a wide range of projects—from children\'s books, mid-grade books, and graphic novels to animations and advertising campaigns. My goal is to amplify the impact of your work, making sure that every shade and hue contributes to the overall narrative and aesthetic you aim to achieve.\r\n\r\nI’m passionate about collaborating closely with my clients to understand their unique needs and delivering high-quality results on time. Whether you’re looking to enhance the mood of a scene, bring out the subtle details in your characters, or create a consistent color palette across a series, I’m here to make it happen. I want to work with you on a long-term, regular work basis.\r\n\r\nLet’s discuss how we can make your project visually unforgettable.\r\n\r\nHere is my website link. You can see my work here.\r\n\r\nhttps://illustratorvarunsharma.com/\r\n\r\nhttps://www.behance.net/varunsharma1331\r\n\r\nLooking forward to the possibility of working together!\r\n\r\n--\r\nKind regards,\r\nVarun Sharma\r\nIllustrator\r\n\r\nillustratorvarunsharma.com', NULL, '2024-08-25 18:09:06', '2024-08-25 18:09:06'),
(555, 'MAGADH BOOK STORE', '9717386899', 'info@magadhbookstore.com', 'book inquiry', 'Dear sir\r\nPlease confirm the price, availability and Book Weight of  below the title.\r\n\r\n9789354405235	Knowledge Encyclopedia - Boxset of 8 Books for Children	Wonder House Books	Wonder House Books	Box Set	ENGLISH', NULL, '2024-08-26 07:30:51', '2024-08-26 07:30:51'),
(556, 'anchal', '9643144065', 'anchal.dawar@gmail.com', 'Bulk purchase catalog', 'We are resellers of children\'s toys. We are looking for suppliers of board books and interactive books for kids. Please share your catalog and MOQ', NULL, '2024-08-26 13:31:15', '2024-08-26 13:31:15'),
(557, 'percy zhao', '9176229890', 'Percy.Zhao@gpchildrensbookprinting.com', 'Children\'s Book Printing Services', 'Good Morning!\r\n\r\nI am Percy, a business coordinator at Golden Prosperity Company. We are the printing supplier for renowned publishers Penguin Random House and Macmillan Learning, holding international certifications including FSC and G7 Master. Our production of children\'s books meets world-class standards.\r\n\r\nIf you have printing needs, please feel free to contact us at any time. We can provide you with high-quality and cost-effective printing services. \r\n\r\nLooking forward to your prompt response!', NULL, '2024-08-28 02:38:56', '2024-08-28 02:38:56'),
(558, 'kamla book agency', '9413763031', 'kamlabookagencey@ymail.com', 'Clothing', 'Books', NULL, '2024-08-28 05:12:22', '2024-08-28 05:12:22'),
(559, 'Anjali bhutada', '9518524739', 'anjalifkart@gmail.com', 'Want to oder books', 'Hello, \r\nI am a wholesaler in pune. I am interested to sell your books. Can you share your catalog and their discount rates. \r\n\r\n Thanku', NULL, '2024-08-28 16:37:14', '2024-08-28 16:37:14'),
(560, 'Tulsi', '8866288980', 'tulsivirda51@gmail.com', 'Nursery books', 'Purchase a quality and quantity one', NULL, '2024-08-28 17:51:39', '2024-08-28 17:51:39'),
(561, 'Uzair Ahmed', '9985429113', 'uzairmdl@yahoo.com', 'Books for shop', 'Want for my store in secunderabad Telangana', NULL, '2024-09-01 06:29:20', '2024-09-01 06:29:20'),
(562, 'Mayura', '7358548750', 'mayurasaranathan@gmail.com', 'Request for 15 books of my first tables.', 'I would like to enquire for an. order of 15 books of my first tables as to whether any discount is possible .thanks .', NULL, '2024-09-01 10:45:11', '2024-09-01 10:45:11'),
(563, 'ExDUPQrzZFS', '5279527088', 'nybiyaclarke55@gmail.com', 'AJWguMYmPFOtrscI', 'yzYDVKEuRTG', NULL, '2024-09-01 17:28:41', '2024-09-01 17:28:41'),
(564, 'ExDUPQrzZFS', '5279527088', 'nybiyaclarke55@gmail.com', 'AJWguMYmPFOtrscI', 'yzYDVKEuRTG', NULL, '2024-09-01 17:28:46', '2024-09-01 17:28:46'),
(565, 'Sagar', '9821163911', 'sagar.gaikwad@raisingsuperstars.in', 'shlokas and mantras for kids', 'Want to order 46 books of shlokas and mantras for kids at mumbai', NULL, '2024-09-02 10:02:52', '2024-09-02 10:02:52'),
(566, 'Shalley', '8054177267', 'Sharmashelly94@yahoo.com', 'About illustrated books', 'Do you publish new authors?', NULL, '2024-09-02 16:04:17', '2024-09-02 16:04:17'),
(567, 'hawk lu', '2150215723', 'sales1@cycpack.com', 'Cloth Books & Bath Books', 'I\'m hawk . The CYCPACK company \'s sales manager .\r\n\r\nThe CYCPACK Industries Shanghai Co., Ltd is a children\'s book printing company. \r\n\r\nThe company started work on bath books production in 2008, already 16 years. We focus on and specialize in  cloth book and bath book .\r\n\r\nWe have a number of notable advantages over our potential competitors:\r\n1: As a factory, we have the advantage of price and quality .  All our products passed REACH , EN71 . \r\n2: We are very reliable in order fulfillment: efficient lead times and tight sub-supplier controls, leading to reliable quality and on-time delivery\r\n\r\nIf you are interested in our products, welcome to inquiry , more information can visit the company\'s website :  https://cycpack.com/', NULL, '2024-09-03 03:01:13', '2024-09-03 03:01:13'),
(568, 'Angela', '2989840970', 'lironglin@cnpiecxa.com', 'Children Book-My First Library', 'Dear Wonder House, \r\nGlad to contact you!  We are the international business center of China National Publications IMP. & EXP. CORP. LTD.  XI’AN Branch.  We are mainly engaged in the product development, agency, distribution and import & export trade of retail publications.  We have established a team of product selection planning, video shooting, promotion and operation, and have independent market analysis and market planning capabilities.  At present, we have set up book franchise stores on more than 10 online platforms ( Tmall store is in the top 5 sales of children’s imported books on the whole platform), and we have successfully laid out four new media promotion platforms, including Tiktok, XiaoHongshu, Kuaishou and WeChat video, establishing a media matrix with related parties, which shows we have a strong ability to link media production and release.\r\nAs your main categories of books are highly consistent with our business direction, we hope to get in touch with you or your agents in China.  We want to know more about your publication agency and authorization methods, introduce and promote high-quality children’s picture book resources for domestic sales, and achieve further in-depth cooperation.\r\nWe look forward to your reply, thank you!\r\n ', NULL, '2024-09-03 08:02:14', '2024-09-03 08:02:14'),
(569, 'Angela', '2989840970', 'lironglin@cnpiecxa.com', 'Children Book-My First Library', 'Dear Wonder House, \r\nGlad to contact you!  We are the international business center of China National Publications IMP. & EXP. CORP. LTD.  XI’AN Branch.  We are mainly engaged in the product development, agency, distribution and import & export trade of retail publications.  We have established a team of product selection planning, video shooting, promotion and operation, and have independent market analysis and market planning capabilities.  At present, we have set up book franchise stores on more than 10 online platforms ( Tmall store is in the top 5 sales of children’s imported books on the whole platform), and we have successfully laid out four new media promotion platforms, including Tiktok, XiaoHongshu, Kuaishou and WeChat video, establishing a media matrix with related parties, which shows we have a strong ability to link media production and release.\r\nAs your main categories of books are highly consistent with our business direction, we hope to get in touch with you or your agents in China.  We want to know more about your publication agency and authorization methods, introduce and promote high-quality children’s picture book resources for domestic sales, and achieve further in-depth cooperation.\r\nWe look forward to your reply, thank you!\r\n ', NULL, '2024-09-03 08:02:15', '2024-09-03 08:02:15'),
(570, 'Angela', '2989840970', 'lironglin@cnpiecxa.com', 'Children Book-My First Library', 'Dear Wonder House, \r\nGlad to contact you!  We are the international business center of China National Publications IMP. & EXP. CORP. LTD.  XI’AN Branch.  We are mainly engaged in the product development, agency, distribution and import & export trade of retail publications.  We have established a team of product selection planning, video shooting, promotion and operation, and have independent market analysis and market planning capabilities.  At present, we have set up book franchise stores on more than 10 online platforms ( Tmall store is in the top 5 sales of children’s imported books on the whole platform), and we have successfully laid out four new media promotion platforms, including Tiktok, XiaoHongshu, Kuaishou and WeChat video, establishing a media matrix with related parties, which shows we have a strong ability to link media production and release.\r\nAs your main categories of books are highly consistent with our business direction, we hope to get in touch with you or your agents in China.  We want to know more about your publication agency and authorization methods, introduce and promote high-quality children’s picture book resources for domestic sales, and achieve further in-depth cooperation.\r\nWe look forward to your reply, thank you!\r\n ', NULL, '2024-09-03 08:02:16', '2024-09-03 08:02:16'),
(571, 'Angela', '2989840970', 'lironglin@cnpiecxa.com', 'Children Book-My First Library', 'Dear Wonder House, \r\nGlad to contact you!  We are the international business center of China National Publications IMP. & EXP. CORP. LTD.  XI’AN Branch.  We are mainly engaged in the product development, agency, distribution and import & export trade of retail publications.  We have established a team of product selection planning, video shooting, promotion and operation, and have independent market analysis and market planning capabilities.  At present, we have set up book franchise stores on more than 10 online platforms ( Tmall store is in the top 5 sales of children’s imported books on the whole platform), and we have successfully laid out four new media promotion platforms, including Tiktok, XiaoHongshu, Kuaishou and WeChat video, establishing a media matrix with related parties, which shows we have a strong ability to link media production and release.\r\nAs your main categories of books are highly consistent with our business direction, we hope to get in touch with you or your agents in China.  We want to know more about your publication agency and authorization methods, introduce and promote high-quality children’s picture book resources for domestic sales, and achieve further in-depth cooperation.\r\nWe look forward to your reply, thank you!\r\n ', NULL, '2024-09-03 08:02:21', '2024-09-03 08:02:21'),
(572, 'Jeetesh', '9769202506', 'jeeteshhpcl@gmail.com', 'Want to purchase books in wholesale', 'We are seller on e-commerce site hence we want to purchase books published by wonder house book. Please provide the details how to proceed further and also let us know how I will get authorisation letter to sell wonder house book on e-commerce website.\r\n\r\nThank you in advance.\r\n\r\nRegards \r\nJeetesh \r\n9769202506', NULL, '2024-09-03 17:04:44', '2024-09-03 17:04:44'),
(573, 'Akiko Tanabe', '8094021860', 'akiko.tanabe@tinytales.co.jp', 'Request for Permission to Use English Books', 'I hope this message finds you well.\r\n\r\nWe are a company based in Japan that offers subscription-based rental services of English picture books for early childhood English education. We aim to provide young learners with access to quality English picture books to support their language development.\r\n\r\nWe are writing to seek permission to use your English picture books in our subscription service. Specifically, we would like to inquire about the following:\r\n\r\n- **Usage Permission**: We would like to confirm if we can obtain permission to use your copyrighted English picture books in our educational service.\r\n- **Usage Fees**: Could you please provide details regarding the usage fees associated with the use of your books in our subscription service?\r\n- **Payment Terms and Details**: We would also appreciate it if you could inform us about the payment deadlines and the designated payment method or recipient.\r\n\r\nWe believe that incorporating your esteemed publications will greatly enhance the quality of our service and benefit the young learners in Japan.\r\n\r\nWe look forward to your positive response and are eager to discuss this further at your earliest convenience.\r\n\r\nThank you for your attention to this matter.\r\n\r\nBest regards,\r\n\r\nTiny Tales Co. Akiko Tanabe', NULL, '2024-09-04 01:19:10', '2024-09-04 01:19:10'),
(574, 'Jazmine', '6172839577', 'jlgreenlaw@gmail.com', 'Polish', 'Hello Wonder House!\r\n\r\nI am wondering if you have the My First English-Polish Learning Library set of 10 board books?? I see many other languages but am having a hard time searching for Polish. Thank you!\r\n\r\nKindly,\r\nJazmine', NULL, '2024-09-04 13:29:12', '2024-09-04 13:29:12'),
(575, 'Pujitha', '7702135242', 'peekaaboopartyshop@gmail.com', 'Books for Retail', 'I’m looking to buy stuff for my store', NULL, '2024-09-05 00:59:08', '2024-09-05 00:59:08'),
(576, 'BOOK CENTRE', '9474388700', 'bookcentre2010@gmail.com', 'All', 'PLEASE MAIL US YOUR COMPLETE PRICE LIST E REQUEST YOU PLEASE UPDATE REGULARLY YOUR LATEST ARRIVAL , PRICE CHANGES ETC.\r\nTHANK', NULL, '2024-09-05 10:23:02', '2024-09-05 10:23:02'),
(577, 'BOOK CENTRE', '9474388700', 'bookcentre2010@gmail.com', 'All', 'PLEASE MAIL US YOUR COMPLETE PRICE LIST E REQUEST YOU PLEASE UPDATE REGULARLY YOUR LATEST ARRIVAL , PRICE CHANGES ETC.\r\nTHANK', NULL, '2024-09-05 10:23:10', '2024-09-05 10:23:10'),
(578, 'S nayek', '9474388700', 'bookcentre2010@gmail.com', 'All.', 'Send catalogues price list also', NULL, '2024-09-05 10:26:05', '2024-09-05 10:26:05'),
(579, 'xQkFLrlcW', '5747487282', 'rose37mceacherncji@outlook.com', 'ANuvGCItY', 'MQrTBCgXhi', NULL, '2024-09-05 16:37:45', '2024-09-05 16:37:45'),
(580, 'xQkFLrlcW', '5747487282', 'rose37mceacherncji@outlook.com', 'ANuvGCItY', 'MQrTBCgXhi', NULL, '2024-09-05 16:37:51', '2024-09-05 16:37:51'),
(581, 'Mahera Ejaz', '7045668514', 'mahera1304@gmail.com', 'Bulk order', 'I am looking for toddler books in bulk quantity.', NULL, '2024-09-08 03:36:14', '2024-09-08 03:36:14'),
(582, 'etEbzIVhXKnw', '3759581099', 'camachojohn7315@yahoo.com', 'QnOfzasvCkl', 'bMRNWtQP', NULL, '2024-09-09 13:33:20', '2024-09-09 13:33:20'),
(583, 'etEbzIVhXKnw', '3759581099', 'camachojohn7315@yahoo.com', 'QnOfzasvCkl', 'bMRNWtQP', NULL, '2024-09-09 13:33:25', '2024-09-09 13:33:25'),
(584, 'ASHA MBUGUYU', '0755546331', 'wanyangasupplies@gmail.com', 'WANT TO MAKE AN ORDER', 'I AM FROM TANZANIA; I WANT TO ORDER DIFFERENTS BOOKS. DO YOU SHIP TO TANZANIA?', NULL, '2024-09-10 10:39:15', '2024-09-10 10:39:15'),
(585, 'Deepika', '7734034232', 'artistdeepika24may@gmail.com', 'Kids colouring books', 'I want to publish my coloring book', NULL, '2024-09-14 14:09:24', '2024-09-14 14:09:24'),
(586, 'Deepika', '7734034232', 'artistdeepika24may@gmail.com', 'Kids colouring books', 'I want to publish my coloring book', NULL, '2024-09-14 14:09:24', '2024-09-14 14:09:24'),
(587, 'BISWAJIT PAL', '8335964620', 'deepsea31.bp@gmail.com', 'Enquiry for retailing', '', NULL, '2024-09-15 08:25:36', '2024-09-15 08:25:36'),
(588, 'Monalisa Sanjivini Parida', '9871619824', 'routmona1@gmail.com', 'Querry  for work from home jobs', 'Hello Sir,wanted to know if any work from home job is available at your company. By profession I am a teacher.Teaching students in online and offline mode from last 15yrs.MSc in Environmental Science and BEd.', NULL, '2024-09-15 12:42:30', '2024-09-15 12:42:30'),
(589, 'LOKESH', '9828660126', 'toptechgadgets99@gmail.com', 'Coloring Book Designs for Consideration', 'Hello,\r\n\r\nMy name is Lokesh from LKP Designs. I create coloring book designs and would love to send some samples for your consideration. Could you please let me know the best way to share them with your team?\r\n\r\nLooking forward to your response.\r\n\r\nBest regards,\r\nLokesh\r\nLKP Designs', NULL, '2024-09-16 11:23:57', '2024-09-16 11:23:57'),
(590, 'FQYtYXuLGeaIFu', '5939698822', 'doris_nugentmeds@outlook.com', 'MgruLlzszmrnOm', '', NULL, '2024-09-17 02:23:01', '2024-09-17 02:23:01'),
(591, 'Harpreet Singh', '9417017110', 'apzaildar@gmail.com', 'BOOKS FOR KINDERGARTEN', 'I\'m from Apple International School. I need to books. Kindly contact me', NULL, '2024-09-21 12:19:21', '2024-09-21 12:19:21'),
(592, 'Harpreet Singh', '9417017110', 'apzaildar@gmail.com', 'BOOKS FOR KINDERGARTEN', 'I\'m from Apple International School. I need to books. Kindly contact me', NULL, '2024-09-21 12:19:23', '2024-09-21 12:19:23'),
(593, 'Divya', '9700040000', 'divyaboorugu@gmail.com', 'Paw patrol books', 'Hello team !\r\n\r\nLooking for 80pc paw patrol books. Plz let me know if you have any in stock', NULL, '2024-09-23 15:37:30', '2024-09-23 15:37:30');
INSERT INTO `contactuses` (`id`, `name`, `phone`, `email`, `subject`, `message`, `deleted_at`, `created_at`, `updated_at`) VALUES
(594, 'Mrs. Jennifer Moody', '4049329300', 'jennifer.moody@clayton.k12.ga.us', '1000 Fry\'s Sight Word', 'Do you have an answer guide for this book?', NULL, '2024-09-23 16:01:11', '2024-09-23 16:01:11'),
(595, 'Eva Cohen', '9173841330', 'eva.cohen@nettyawards.com', 'Netty Award Nomination', 'Hello team! I’m reaching out because wonderhouse has been nominated for a Netty Award in the Tech category. Could you please have whoever is best suited to handle awards and press send me an email so we can finalize the nomination/press coverage? We’d love to get this wrapped up over the next week or so to meet our September deadline. Thanks so much!', NULL, '2024-09-24 15:22:13', '2024-09-24 15:22:13'),
(596, 'Trooper Cashman', '8608815606', 'matthew.cashman@ct.gov', 'Attempt to locate', 'I\'m attempting to locate a author named Farzana Sarup who left her passports at Bradley International Airport in Windsor Locks Connecticut. \r\n\r\nThe state police are is possession of them and she can retrieve them by calling (860) 292-7400  she can either pick them up in person of make arrangements to have them mailed. \r\n\r\nThank you\r\nTrooper Cashman #974\r\nConnecticut State Police', NULL, '2024-09-24 20:05:28', '2024-09-24 20:05:28'),
(597, 'sagnik', '9986588162', 'Sagnik.Chowdhury@gmail.com', 'For a publisher to help me publish my book', 'Hello wonder house publishers I want one of your publishers help me publish my book on endangered birds. I like all your publishments especially the three musketeers. thank you', NULL, '2024-09-25 07:00:20', '2024-09-25 07:00:20'),
(598, 'sagnik', '9986588162', 'Sagnik.Chowdhury@gmail.com', 'For a publisher to help me publish my book', 'Hello wonder house publishers I want one of your publishers help me publish my book on endangered birds. I like all your publishments especially the three musketeers. thank you', NULL, '2024-09-25 07:00:22', '2024-09-25 07:00:22'),
(599, 'sagnik', '9986588162', 'Sagnik.Chowdhury@gmail.com', 'For a publisher to help me publish my book', 'Hello wonder house publishers I want one of your publishers help me publish my book on endangered birds. I like all your publishments especially the three musketeers. thank you', NULL, '2024-09-25 07:00:23', '2024-09-25 07:00:23'),
(600, 'sagnik', '9986588162', 'Sagnik.Chowdhury@gmail.com', 'For a publisher to help me publish my book', 'Hello wonder house publishers I want one of your publishers help me publish my book on endangered birds. I like all your publishments especially the three musketeers. thank you', NULL, '2024-09-25 07:00:24', '2024-09-25 07:00:24'),
(601, 'sagnik', '9986588162', 'Sagnik.Chowdhury@gmail.com', 'For a publisher to help me publish my book', 'Hello wonder house publishers I want one of your publishers help me publish my book on endangered birds. I like all your publishments especially the three musketeers. thank you', NULL, '2024-09-25 07:00:25', '2024-09-25 07:00:25'),
(602, 'sagnik', '9986588162', 'Sagnik.Chowdhury@gmail.com', 'For a publisher to help me publish my book', 'Hello wonder house publishers I want one of your publishers help me publish my book on endangered birds. I like all your publishments especially the three musketeers. thank you', NULL, '2024-09-25 07:00:28', '2024-09-25 07:00:28'),
(603, 'Hiral Gurjar', '0706221790', 'hiralgurjar97@gmail.com', 'Enquiry', 'Hi, I came across your website and checked on your catalogue. I wanted to find out if you sell your books in wholesale.', NULL, '2024-09-28 10:23:01', '2024-09-28 10:23:01'),
(604, 'Snehal Ingle', '9272122214', 'sdingle024@gmail.com', 'B2B sales enquiry', 'I\'m interested for B2B SALES ENQUIRY', NULL, '2024-09-28 16:05:23', '2024-09-28 16:05:23'),
(605, 'Snehal Ingle', '9272122214', 'sdingle024@gmail.com', 'B2B sales enquiry', 'I\'m interested for B2B SALES ENQUIRY', NULL, '2024-09-28 16:05:26', '2024-09-28 16:05:26'),
(606, 'Kidus Terefe', '3126678122', 'kidusy87@gmail.com', 'Collaboration Inquiry: Children\'s Book Author', 'Dear Wonder House Books Team,\r\n\r\nI hope this message finds you well. I am reaching out to express my admiration for the incredible work you do in creating engaging and imaginative children\'s books. Your dedication to bringing stories to life and inspiring young readers is truly inspiring.\r\n\r\nI am an author with four children\'s books published, and I would be honored to explore the possibility of working with your team. I believe my experience and passion for storytelling align with your mission of sparking curiosity and joy in young readers. \r\n\r\nCould you please let me know if there are any opportunities available for collaboration, or if there is a specific process I should follow to submit my work for consideration?\r\n\r\nThank you for your time, and I look forward to the possibility of working together.', NULL, '2024-09-28 16:47:48', '2024-09-28 16:47:48'),
(607, 'Lucy Amily', '2435464564', 'qingminzhu4@gmail.com', 'Children\'s Book Cooperation', 'Hello Wonder House Books,\r\n\r\nI am Lucy, a business coordinator at Golden Prosperity Company.\r\n\r\nWe are the printing supplier for renowned publishers Penguin Random House and Macmillan Learning, holding international certifications including FSC and G7 Master. Our production of children\'s books meets world-class standards.\r\n\r\nWe can provide you with high-quality and cost-effective printing services. We\'re keen on establishing a long-term cooperative relationship.\r\n\r\nOur official website is: https://www.gpchildrensbookprinting.com/\r\n\r\nIf you have printing needs, please feel free to contact us at any time.\r\n\r\nLooking forward to your early reply.\r\n\r\nBest regards,\r\n\r\nLucy Amily', NULL, '2024-09-30 10:24:54', '2024-09-30 10:24:54'),
(608, 'yJAfnSqA', '9836709626', 'bradley74toadvineets@outlook.com', 'ZjBHwDGx', '', NULL, '2024-10-01 09:53:23', '2024-10-01 09:53:23'),
(609, 'yJAfnSqA', '9836709626', 'bradley74toadvineets@outlook.com', 'ZjBHwDGx', '', NULL, '2024-10-01 09:53:27', '2024-10-01 09:53:27'),
(610, 'Pratik', '9898961221', 'mevadapratik@gmail.com', 'Regd shloka book for kids', 'I would to buy ~40 copies of shlokas book. Please let me know whether u have store in ahmedabad or any direct way to do.', NULL, '2024-10-01 18:20:38', '2024-10-01 18:20:38'),
(611, 'Sarita', '9811940756', 'sarita_mahindru@yahoo.com', 'Regarding Job- Senior Graphic Designer', 'Hi,\r\nI have 15 years experience in books designing. Currently working with Goyal Brothers. If you have any opening related to my profile please let me know.', NULL, '2024-10-02 18:30:37', '2024-10-02 18:30:37'),
(612, 'cMcEVvMbaiyDM', '7114110928', 'glenn_kowalewski3587@yahoo.com', 'ZHdzjYEwROEpy', '', NULL, '2024-10-03 05:34:45', '2024-10-03 05:34:45'),
(613, 'cMcEVvMbaiyDM', '7114110928', 'glenn_kowalewski3587@yahoo.com', 'ZHdzjYEwROEpy', '', NULL, '2024-10-03 05:34:50', '2024-10-03 05:34:50'),
(614, 'Rachana', '9841722577', 'rachanamahima@gmail.com', 'price for bulk purchase', 'Hello, I came across the \"My First Illustrated Bible Stories from Old Testament [Boxed Set of 10] – English\" I would like to know the best price that you can offer for the bookstore. \r\nThanks', NULL, '2024-10-04 05:52:48', '2024-10-04 05:52:48'),
(615, 'Apeksha David', '9013734865', 'sparklingbookshelfpreloved@gmail.com', 'Catalog of  children’s books for resellers', 'Hello, can you please provide a catalog for children books( popup, touch and feel, lift the flap books) for sellers. Also provide the details of MOQ . You can share on WhatsApp number 9013734865\r\nRegards', NULL, '2024-10-04 08:31:47', '2024-10-04 08:31:47'),
(616, 'Suhasini Srinivasan', '5145604827', 'hasini.8201@gmail.com', 'Publishing first board book', 'Hello, I would like to know the requirements or steps to publish my first board book for 0-2 years age group.  Could you please let me know the details, please do share a catalog if you have any.\r\nThank you!', NULL, '2024-10-06 03:25:20', '2024-10-06 03:25:20'),
(617, 'Akash Maity', '6296037566', 'akash@thebiggerminds.com', 'Inquiry to Resell Your Kids Bible', 'My name is Akash Maity, and I’m the founder of Holy Haven, an e-commerce platform dedicated to offering high-quality Christian products to believers nationwide. We share your passion for spreading the Word and enriching lives through faith, and we believe there is an incredible opportunity for us to collaborate.\r\n\r\nAt Holy Haven, we aim to bring spiritually enriching products to customers seeking faith-based items, from Bible study tools to home decor. We would be honored to partner with the Bible Society of India to offer your products on our website, bringing them to an even wider audience who may not have easy access otherwise.\r\n\r\nOur proposal is to work with you to resell select products, particularly Bibles, on our platform, with the goal of increasing visibility and accessibility. We’d love to discuss ways we could support your mission by promoting and distributing these cherished resources.\r\n\r\nIf this sounds of interest, I would be delighted to schedule a meeting at your convenience to discuss potential terms and how we can make this partnership successful for both parties.\r\n\r\nThank you for considering this opportunity. I look forward to the possibility of working together to spread the Word.\r\n\r\nWarm regards,\r\nAkash\r\nChairman, Holy Haven\r\nContact: +91 6296037566', NULL, '2024-10-06 17:26:52', '2024-10-06 17:26:52'),
(618, 'Andrea M. Chenoweth', '2282299908', 'andreachenoweth@rocketmail.com', 'I am having difficulty emailing and phoning WHB', 'Hello... I tried sending an email around 4 pm India time from CST USA. It came back to me twice. I tried phoning with no connection. Please send me a current email address and phone number. I am hoping for feedback on my book idea for 13+. Thanking you in advance... Andrea', NULL, '2024-10-07 11:47:55', '2024-10-07 11:47:55'),
(619, 'Andrea M. Chenoweth', '2282299908', 'andreachenoweth@rocketmail.com', 'Finally my message is on the way to WHB', 'Luckily I am persistent!   Take care!', NULL, '2024-10-07 11:50:17', '2024-10-07 11:50:17'),
(620, 'Andrea M. Chenoweth', '2282299908', 'andreachenoweth@rocketmail.com', 'Book idea', 'The title of my book is \"The Glee of Knowledge\" about the branches of science, especially for young students searching for their career paths. I would like to be able to send you the cover I have designed thus far.\r\nIt tells a lot about the project. This project I cannot do alone. It needs a team...', NULL, '2024-10-07 11:56:24', '2024-10-07 11:56:24'),
(621, 'Elena', '9198855788', 'lenchez@list.ru', 'FRANKFURTER BUCHMESSE', 'Hello!\r\n \r\nMy name is Lena and I represent Phoenix Publishing House. We are currently exploring the possibilities of co-operation on the international market and we are very pleased to introduce our company to you as a potential international partner.\r\n \r\nWe will be exhibiting in Frankfurt and would like to meet you to discuss possible co-operation, is it possible?\r\n \r\nI will provide brief information about our company so that you can tell your colleagues about it and refer it to the appropriate department.\r\n \r\nPhoenix Publishing House is one of the leading publishing houses in Russia, ranking in the top five. We offer a wide range of literature, including adult and children\'s books, educational literature, fiction and non-fiction, books for children and parents, entertainment literature, psychology, graphic novels and encyclopaedias.\r\n \r\nWe are currently focused on expanding sales of our products in foreign markets, localised in the language of the target country. We are open to various co-operation models such as:\r\n \r\n1. Selling products: We can create products and offer them to you for sale with deferred payment. The products will be published under ... x Phoenix\r\n2. Distribution Partnership: You can act as a sales representative to distribute our products and manage inventory. You have the option to distribute products through retail shops and marketplaces.\r\n3 Licensing rights: We are also willing to discuss selling the rights to our products and purchasing your rights.\r\n \r\nWe welcome the opportunity to work together and look forward to learning how we can partner with you.', NULL, '2024-10-07 12:09:21', '2024-10-07 12:09:21'),
(622, 'Elena', '9198855788', 'lenchez@list.ru', 'FRANKFURTER BUCHMESSE', 'Hello!\r\n \r\nMy name is Lena and I represent Phoenix Publishing House. We are currently exploring the possibilities of co-operation on the international market and we are very pleased to introduce our company to you as a potential international partner.\r\n \r\nWe will be exhibiting in Frankfurt and would like to meet you to discuss possible co-operation, is it possible?\r\n \r\nI will provide brief information about our company so that you can tell your colleagues about it and refer it to the appropriate department.\r\n \r\nPhoenix Publishing House is one of the leading publishing houses in Russia, ranking in the top five. We offer a wide range of literature, including adult and children\'s books, educational literature, fiction and non-fiction, books for children and parents, entertainment literature, psychology, graphic novels and encyclopaedias.\r\n \r\nWe are currently focused on expanding sales of our products in foreign markets, localised in the language of the target country. We are open to various co-operation models such as:\r\n \r\n1. Selling products: We can create products and offer them to you for sale with deferred payment. The products will be published under ... x Phoenix\r\n2. Distribution Partnership: You can act as a sales representative to distribute our products and manage inventory. You have the option to distribute products through retail shops and marketplaces.\r\n3 Licensing rights: We are also willing to discuss selling the rights to our products and purchasing your rights.\r\n \r\nWe welcome the opportunity to work together and look forward to learning how we can partner with you.', NULL, '2024-10-07 12:09:23', '2024-10-07 12:09:23'),
(623, 'GiantBooks', '0683661030', 'giantbooks@outlook.fr', 'Books ordering', 'Hello\r\n\r\nI\'m allow myself to write to you because i would like to order two books from your publishing house. \r\n\r\nI\'m manage a french bookstore that is specialized in japanese and chinese artbooks but i always look for books in other country like indonesian or India and i am really glad i found your publishing house.\r\n\r\nThe two books of Abhishek Singh are absolutely wonderful and i want to propose them in the bookstore in order to let the european public know about this author and these books.\r\n\r\nSo i would like to know if is it possible to buy these books with you.\r\n\r\nWhat discount offers you to the bookstore  and have you an idea about the cost of the shipping for, let say, 3 Namaha - Stories From The Land of Gods And Goddesses: Illustrated Stories Hardcover Edition Special Print and 3 Purnam - Stories & Wisdom of the Feminine Divine ?\r\n\r\nCan you make an invoice so i can see the total cost of this order ?\r\n\r\nThanks for your understanding and i\'m looking forward to work with you. \r\n\r\n\r\n\r\n \r\n\r\nCHAPIRON KEVIN \r\n\r\nGiantbooks’s Manager \r\n\r\n \r\n\r\nhttps://giant-books.fr \r\n\r\n \r\n\r\nhttps://linktr.ee/giantbooks\r\n\r\n\r\n\r\nLibrairie et Maison d’édition GiantBooks \r\n\r\nSiret : 902 131 770 000 15 \r\n\r\n06.83.66.10.30 \r\n\r\n14 Rue Dolomieu \r\n\r\n38000 Grenoble', NULL, '2024-10-08 10:28:50', '2024-10-08 10:28:50'),
(624, 'Neha Khanna', '9811277680', 'neha.k.khanna@gmail.com', 'A book project with the Embassy of France', 'Dear Wonderhouse team,\r\n\r\nI would like to discuss a manuscript with you that aligns with your approach towards books. I thoroughly enjoy your books available on amzon.in and I wish to take this book project forward with you. please call me back or write to me at neha.k.khanna@gmail.com. Your email address is bouncing back emails.Thank you. Warm regards,Neha', NULL, '2024-10-09 09:32:27', '2024-10-09 09:32:27'),
(625, 'Shishir', '6194047234', 'rajaani.shishir@gmail.com', 'Bulk order inquiry', 'Hi,\r\n\r\nMy name is Shishir. I\'m a book reseller based in South California. I would like to get information on bulk orders for multiple children books.\r\n\r\nCould you please share detailed catalogue.\r\n\r\n\r\nWarm regards,\r\nShishir', NULL, '2024-10-10 07:46:55', '2024-10-10 07:46:55'),
(626, 'Noel Malekar', '9811869486', 'noel.drummer@gmail.com', 'Western Music Theory Children\'s Book', 'Hello,\r\n\r\nI am Noel Malekar, a music teacher based in India. I am writing to you in context regarding my book on \"Western Music Theory Children\'s Book.\".   \r\n\r\nBelow is a synopsis of my book in brief. Happy to share more if needed and request your feedback on the synopsis.\r\n\r\nI want to introduce you to a captivating educational book about \"Music Theory for Children,\" authored by me (Noel Malekar) and my student Mohit Rathor. This book is designed to introduce Western music theory to children in an engaging and interactive manner.\r\n\r\nThe book comprises step-by-step chapters that cover various aspects of music theory, starting from the fundamentals of music to note values/rests, beat, scales, intervals, clefs, tempo, time signatures, pitch, chords. Etc. Through a combination of games, word puzzles, quizzes, and analytical questions, children are not only introduced to music theory but also encouraged to enhance their cognitive and critical thinking abilities.\r\n\r\nWith 76 pages filled with enriching content, \"Music Theory for Children\" is a comprehensive guide that aims to make learning music theory a fun and enjoyable experience for young learners. While the primary target audience is children, the book is also suitable for adults who wish to delve into the world of music theory in a simplified and engaging manner. I look forward to hearing from you. Thank you once again\r\n\r\nWarm regards,\r\nNoel Malekar', NULL, '2024-10-11 11:54:29', '2024-10-11 11:54:29'),
(627, 'Joyce', '4109379430', 'joyceford041@gmail.com', 'My books', 'Someone is giving you my wrighing and ideas for books. I wote Supper simple and other works on paper and my \r\nwrighings disappeared years ago  my work is all over the place now I had lyrics,movie ideas as well as designs for cars bikes and other investments i wanted to make with the money from my wrighings. My spelling and grammar and not vary good and shows in my wrighings. I did not get a chance to seek out a publisher for my works.', NULL, '2024-10-11 22:02:51', '2024-10-11 22:02:51'),
(628, 'yDkJfEqGdFzUh', '7546286844', 'nashlittles9463@gmail.com', 'IlUCXgSVqq', '', NULL, '2024-10-12 15:02:01', '2024-10-12 15:02:01'),
(629, 'yDkJfEqGdFzUh', '7546286844', 'nashlittles9463@gmail.com', 'IlUCXgSVqq', '', NULL, '2024-10-12 15:02:06', '2024-10-12 15:02:06'),
(630, 'Gary Charles', '8054002077', 'gary-charles@dominatingkeywords.com', 'How to get more visitors', 'Get thousands of clicks per month from Google, Bing and other search engines with less than $10 per day ad budget.\r\nNo SEO and no PPC.\r\nFlat fee per keyword.\r\nAll I need from you is a list of desired keywords and I\'ll send you traffic quotes and details within 24 hours.\r\nYou can get more information and do online demo on our website.', NULL, '2024-10-12 16:00:13', '2024-10-12 16:00:13'),
(631, 'pranamya pallavi nilesh purkar', '8380054891', 'nspurkar@gmail.com', 'i am a 10 year old kid and i want to be an author', 'i have written a story of Hare and Tortoise in different perspective. In first part both compete. Hared bullies tortoise but tortoise wins the race. \r\nin second part, both collaborate and their friendship wins.', NULL, '2024-10-14 16:29:46', '2024-10-14 16:29:46'),
(632, 'Lilly Line', '9991865969', 'vauseart@gmail.com', 'Illustration portfolio by Lilly Line', 'Hello, how are you?\r\nMy name is Lilly Line and I\'m a freelance illustrator specializing in children\'s and young adult illustration.\r\nI\'m available for work and I think Wonder House Books might be interested in my style.\r\nI want to invite you to see my work, I think you might like it and if I could have the opportunity to collaborate with you one day it would be an honor. Access here:  https://www.behance.net/lillyline\r\nI mainly use watercolor in the execution of my work, which gives it a simpler and more personal look that can be very captivating. I have a characteristic style for cute, expressive characters and detailed, narrative-filled scenarios.\r\nI hope you like it. I am at your disposal.\r\n\r\nHugs', NULL, '2024-10-15 01:09:32', '2024-10-15 01:09:32'),
(633, 'JAIS RAJ YADAV', '9718862820', 'jaisrajyadav74@gmail.com', 'Vacancy inquiry', 'Looking for a vacancy in production and co-ordination  department.', NULL, '2024-10-16 04:11:58', '2024-10-16 04:11:58'),
(634, 'Annette Schottenfeld', '5166805125', 'annetteschottenfeld@gmail.com', 'Author Submission', 'Hello,\r\nI submitted a picture book manuscript on your online submissions form. I\'m not sure that the manuscript file uploaded. Please let me know if it did not and how I can send it to your attention. \r\nThank you in advance.\r\nBest regards,\r\nAnnette Schottenfeld', NULL, '2024-10-16 18:23:31', '2024-10-16 18:23:31'),
(635, 'Fathimath Shuau', '9607827236', 'shukko123@gmail.com', 'Book Printing & Shipping Service', 'Hi,\r\nI would like to if you print and ship customized items to Maldives?\r\n\r\nPlease kindly contact me on Whatsapp or Gmail.\r\nLooking forward to your response.\r\nThank you', NULL, '2024-10-17 13:33:25', '2024-10-17 13:33:25'),
(636, 'Deborah Hunt', '7184274815', 'deborahdh0125@gmail.com', 'Submission website', 'Greetings,\r\n\r\nI am trying to submit a picture book for consideration, but it is not working. Are you still open for submissions? Is there a particular format for the sample chapters.  Do you accept the full manuscript for a picture book? Best, Deborah', NULL, '2024-10-17 15:21:15', '2024-10-17 15:21:15'),
(637, 'Deborah Hunt', '7184274815', 'deborahdh0125@gmail.com', 'Submission website', 'Greetings,\r\n\r\nI am trying to submit a picture book for consideration, but it is not working. Are you still open for submissions? Is there a particular format for the sample chapters.  Do you accept the full manuscript for a picture book? Best, Deborah', NULL, '2024-10-17 15:21:16', '2024-10-17 15:21:16'),
(638, 'Sabrina Nazario', '8495170808', 'michelledenovo@gmail.com', 'Books', 'Good Afternoon, my name is Sabrina Nazario, I own a bookstore in the Dominican Republic and I am amazed by the quality of your books, because of this, I am interested in buying yours books to sell them in my country. I want to know the process, if it has to be personal, videocall or by email.\r\n\r\nI will love to know more about your books.', NULL, '2024-10-17 15:59:28', '2024-10-17 15:59:28'),
(639, 'Sabrina Nazario', '8495170808', 'michelledenovo@gmail.com', 'Books', 'Good Afternoon, my name is Sabrina Nazario, I own a bookstore in the Dominican Republic and I am amazed by the quality of your books, because of this, I am interested in buying yours books to sell them in my country. I want to know the process, if it has to be personal, videocall or by email.\r\n\r\nI will love to know more about your books.', NULL, '2024-10-17 15:59:30', '2024-10-17 15:59:30'),
(640, 'anil gautam', '8285030902', 'info.gaddward@gmail.com', 'brush marker pen for kid books for drawing', 'Siddhartha productions grater Noida we are manufacturing the kids stationery items. Like White board marker pen with eraser and pencils and brush marker pen at economical price. Send us your address there I will send some sample for you. We are also working with exporter they export kids\' educational items as well as books. Contact hassle free with me Anil Gautam 8285030902', NULL, '2024-10-18 09:26:38', '2024-10-18 09:26:38'),
(641, 'CwrZcBFUaV', '7366557097', 'robersondarki1986@gmail.com', 'qfraQZxYcvqhVB', '', NULL, '2024-10-18 10:14:41', '2024-10-18 10:14:41'),
(642, 'CwrZcBFUaV', '7366557097', 'robersondarki1986@gmail.com', 'qfraQZxYcvqhVB', '', NULL, '2024-10-18 10:14:50', '2024-10-18 10:14:50'),
(643, 'Aman Kumar', '8709612190', 'ftaman02@gmail.com', 'Encyclopedia', 'We have book shop in Bihar namely Tiwari and Co. we want to deal with you for your encyclopedia book', NULL, '2024-10-19 10:11:44', '2024-10-19 10:11:44'),
(644, 'Ritika Patidar', '6370030409', 'support@ngnlearning.com', 'Inquiry for White-Labeled Printed Flash-Cards', 'Hello,\r\n\r\nI hope this message finds you well. My name is Ritika Patidar, and I am the Customer-Relation Coordinator at Sanjeev Tanna Education Private Limited, a leading organization focused on preventive mental healthcare for children and teens.\r\n\r\nWe are reaching out to request a bulk order for printed flash cards with the following specifications:\r\n\r\n1. Quantities: 1,000 units or more.\r\n2. Requirements: The cards should be shrink-wrapped and free from any branding, logos, or additional labeling. We require only the designed content.\r\n3. Purpose: The cards will be white-labeled and used for our educational and therapeutic initiatives.\r\n\r\nPlease provide us with a quotation for the requested quantities and share any details regarding production timelines and shipping logistics. If you have any questions or require additional information, feel free to contact me.\r\n\r\nWe look forward to your response and hope to establish a long-term collaboration.\r\n\r\nWarm regards,\r\nTeam NGN', NULL, '2024-10-21 05:15:55', '2024-10-21 05:15:55'),
(645, 'Sarvesh Tripathi', '9979976569', 'sarveshtripathimaxscience@gmail.com', 'science books & encyclopedias', 'We are science centre for kids based in ahmedabad,gujarat \"Sarvesh Tripathi Max Science\" now we are a opening a\r\nscience store for kids, so we are having a requirement of books for the same.Do revert asap\r\nThank you', NULL, '2024-10-21 12:00:18', '2024-10-21 12:00:18'),
(646, 'Sarvesh Tripathi', '9979976569', 'sarveshtripathimaxscience@gmail.com', 'science books & encyclopedias', 'We are science centre for kids based in ahmedabad,gujarat \"Sarvesh Tripathi Max Science\" now we are a opening a\r\nscience store for kids, so we are having a requirement of books for the same.Do revert asap\r\nThank you', NULL, '2024-10-21 12:00:20', '2024-10-21 12:00:20'),
(647, 'ucmDdaMQWyrbnY', '2792386359', 'debibrenjy8551@gmail.com', 'GQNkcOMpIT', '', NULL, '2024-10-21 19:00:35', '2024-10-21 19:00:35'),
(648, 'ucmDdaMQWyrbnY', '2792386359', 'debibrenjy8551@gmail.com', 'GQNkcOMpIT', '', NULL, '2024-10-21 19:00:41', '2024-10-21 19:00:41'),
(649, 'Dr. Swati Pramod Mane', '9545453930', 'sarhadswatimane@gmail.com', 'Regarding book publication', 'Dear sir/madam,\r\nMy son Master Avaneesh Pramod Mane who has set record in India Book of Records and OMG book of records for identifying 111 animals in 3 minutes wants to write a book under category animals. May I know the procedure of the same ? Thanks .', NULL, '2024-10-22 05:33:27', '2024-10-22 05:33:27'),
(650, 'Kaan Gul', '2017826081', 'kaan@youparcel.com', 'US Shipping & Return Service For Books', 'Dear Sir/Madam,\r\n\r\nMy name is Kaan, and I am with the Product Team of YouParcel. We are a technology-oriented logistics company and provide last-mile shipping to our customers.\r\n\r\nWe are based in Totowa, NJ, and have 2 other US locations for last-mile shipping. We are working with USPS, UPS, FedEx, and DHL for shipping and provide the labels from our in-house generated API.\r\n\r\nWe are providing services specifically designed for books and printed materials. On top of this we are also providing omnichannel fulfillment services for our customers. Our WMS is capable of receiving and pushing thousands of orders from various markeplaces.  \r\n\r\nI would like to have the chance to talk with you over a call and provide more insight into what we can bring for you. Our goal is to provide a substantial price saving on the last mile and return service for your books from a single point.\r\n\r\nI look forward to hearing back from you soon and wish you a great day!', NULL, '2024-10-22 14:43:57', '2024-10-22 14:43:57'),
(651, 'Malak salah', '1222858806', 'malaksalah14@gmail.com', 'Illustrated Classics The Time Machine H.G.Wells', 'Hello, \r\nThis is Malak from Oakland College and i need 8 copies from this book could you please advice from where can I get them in Cairo, Egypt Illustrated Classics The Time Machine H.G.Wells  \r\nThank you', NULL, '2024-10-23 09:40:27', '2024-10-23 09:40:27'),
(652, 'NknIBoPKN', '2926842074', 'dzuniganb172@gmail.com', 'VCHupKwbXnczdzv', '', NULL, '2024-10-26 01:50:26', '2024-10-26 01:50:26'),
(653, 'NknIBoPKN', '2926842074', 'dzuniganb172@gmail.com', 'VCHupKwbXnczdzv', '', NULL, '2024-10-26 01:50:31', '2024-10-26 01:50:31'),
(654, 'Sumer Singh Shergill', '6763949367', 'sumershergill@outlook.com', 'Children\'s book publication', 'Hi,\r\nI would like to talk regarding a publication of children Hard Cover fully hand illustrated book by my wife Boglarka Shergill.\r\n\r\nBest Regards,\r\nSumer Singh Shergill', NULL, '2024-10-26 21:25:45', '2024-10-26 21:25:45'),
(655, 'RIZWANA KHATUN', '9110175435', 'rizwanakhatun@rediffmail.com', 'Publishing a new book', 'Can you send a quote. Or contact me', NULL, '2024-10-28 10:41:39', '2024-10-28 10:41:39'),
(656, 'Shanya Rehman Alam', '0503386591', 'shanyaalam@gmail.com', 'Manuscript Submission', 'Dear editors,\r\nI tried submitting sample chapters of a proposed book through your online submission form but there seems to be some bug or glitch on the page as documents attached didnt show and the the page expired. Twice. Kindly let me know how else i can share the sample chapters.', NULL, '2024-10-28 15:25:40', '2024-10-28 15:25:40'),
(657, 'KVQIeZiHcFgxY', '6653156655', 'tepozdopazou@hotmail.com', 'qCQwaWCxulbCve', '', NULL, '2024-10-30 02:55:47', '2024-10-30 02:55:47'),
(658, 'KVQIeZiHcFgxY', '6653156655', 'tepozdopazou@hotmail.com', 'qCQwaWCxulbCve', '', NULL, '2024-10-30 02:55:53', '2024-10-30 02:55:53'),
(659, 'SHREYA.J.S', '9994066144', 'shreyajs2006@gmail.com', 'Publish copyrighted context', 'Hereby i would like to inform the publisher that i have copyrighted a anatomy portrait which can be used as an interactive pictorial representation of anatomy in kids anatomy or human body  books. If intresested please do contact me.', NULL, '2024-10-30 04:15:23', '2024-10-30 04:15:23'),
(660, 'Mariyam', '3237302069', 'mariyam1822khan@gmail.com', 'Query', 'Can you please deliver it to Pakistan', NULL, '2024-10-30 16:25:17', '2024-10-30 16:25:17'),
(661, 'Shyam Sundar', '9600485582', 'shyamsundar54@gmail.com', 'Incorrect puzzle on the \"Sudoku Level 1\" Book', 'Hi Team,\r\n\r\nRecently I bought the book \"Sudoku - Brain Games For Smart Minds Level 1 Simple\", in that I went through the sudoku puzzles till puzzle#21.\r\n\r\nSo far I identified two puzzles(Puzzle#12 and Puzzle#20) are having more than 1 solution and we can\'t able to solve it without guessing. \r\n\r\nFor Puzzle#20 it contains almost 12 solutions and Puzzle#12 contains more than 50 solution. I verified it through the online sudoku verifier. Hence please validate the puzzle before including it in the book.\r\n\r\nThanks,\r\nShyam', NULL, '2024-11-03 14:35:13', '2024-11-03 14:35:13');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint UNSIGNED NOT NULL,
  `country_code` int DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1' COMMENT '0=Active, 1=InActive',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_code`, `name`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Afghanistan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(2, NULL, 'Albania', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(3, NULL, 'Algeria', 1, NULL, '2022-05-21 08:29:11', '2023-08-24 00:26:18'),
(4, NULL, 'American Samoa', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(5, NULL, 'Andorra', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(6, NULL, 'Angola', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(7, NULL, 'Anguilla', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(8, NULL, 'Antarctica', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(9, NULL, 'Antigua and Barbuda', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(10, NULL, 'Argentina', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(11, NULL, 'Armenia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(12, NULL, 'Aruba', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(13, NULL, 'Australia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(14, NULL, 'Austria', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(15, NULL, 'Azerbaijan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(16, NULL, 'Bahamas', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(17, NULL, 'Bahrain', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(18, NULL, 'Bangladesh', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(19, NULL, 'Barbados', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(20, NULL, 'Belarus', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(21, NULL, 'Belgium', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(22, NULL, 'Belize', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(23, NULL, 'Benin', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(24, NULL, 'Bermuda', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(25, NULL, 'Bhutan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(26, NULL, 'Bolivia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(27, NULL, 'Bosnia and Herzegovina', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(28, NULL, 'Botswana', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(29, NULL, 'Bouvet Island', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(30, NULL, 'Brazil', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(31, NULL, 'British Indian Ocean Territory', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(32, NULL, 'Brunei Darussalam', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(33, NULL, 'Bulgaria', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(34, NULL, 'Burkina Faso', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(35, NULL, 'Burundi', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(36, NULL, 'Cambodia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(37, NULL, 'Cameroon', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(38, NULL, 'Canada', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(39, NULL, 'Cape Verde', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(40, NULL, 'Cayman Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(41, NULL, 'Central African Republic', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(42, NULL, 'Chad', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(43, NULL, 'Chile', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(44, NULL, 'China', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(45, NULL, 'Christmas Island', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(46, NULL, 'Cocos (Keeling) Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(47, NULL, 'Colombia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(48, NULL, 'Comoros', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(49, NULL, 'Congo', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(50, NULL, 'Cook Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(51, NULL, 'Costa Rica', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(52, NULL, 'Cote D\'Ivoire', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(53, NULL, 'Croatia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(54, NULL, 'Cuba', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(55, NULL, 'Cyprus', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(56, NULL, 'Czech Republic', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(57, NULL, 'Denmark', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(58, NULL, 'Djibouti', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(59, NULL, 'Dominica', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(60, NULL, 'Dominican Republic', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(61, NULL, 'East Timor', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(62, NULL, 'Ecuador', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(63, NULL, 'Egypt', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(64, NULL, 'El Salvador', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(65, NULL, 'Equatorial Guinea', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(66, NULL, 'Eritrea', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(67, NULL, 'Estonia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(68, NULL, 'Ethiopia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(69, NULL, 'Falkland Islands (Malvinas)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(70, NULL, 'Faroe Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(71, NULL, 'Fiji', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(72, NULL, 'Finland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(74, NULL, 'France, Metropolitan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(75, NULL, 'French Guiana', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(76, NULL, 'French Polynesia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(77, NULL, 'French Southern Territories', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(78, NULL, 'Gabon', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(79, NULL, 'Gambia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(80, NULL, 'Georgia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(81, NULL, 'Germany', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(82, NULL, 'Ghana', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(83, NULL, 'Gibraltar', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(84, NULL, 'Greece', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(85, NULL, 'Greenland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(86, NULL, 'Grenada', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(87, NULL, 'Guadeloupe', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(88, NULL, 'Guam', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(89, NULL, 'Guatemala', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(90, NULL, 'Guinea', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(91, NULL, 'Guinea-Bissau', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(92, NULL, 'Guyana', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(93, NULL, 'Haiti', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(94, NULL, 'Heard and Mc Donald Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(95, NULL, 'Honduras', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(96, NULL, 'Hong Kong', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(97, NULL, 'Hungary', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(98, NULL, 'Iceland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(99, NULL, 'India', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(100, NULL, 'Indonesia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(101, NULL, 'Iran (Islamic Republic of)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(102, NULL, 'Iraq', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(103, NULL, 'Ireland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(104, NULL, 'Israel', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(105, NULL, 'Italy', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(106, NULL, 'Jamaica', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(107, NULL, 'Japan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(108, NULL, 'Jordan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(109, NULL, 'Kazakhstan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(110, NULL, 'Kenya', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(111, NULL, 'Kiribati', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(112, NULL, 'North Korea', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(113, NULL, 'South Korea', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(114, NULL, 'Kuwait', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(115, NULL, 'Kyrgyzstan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(116, NULL, 'Lao People\'s Democratic Republic', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(117, NULL, 'Latvia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(118, NULL, 'Lebanon', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(119, NULL, 'Lesotho', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(120, NULL, 'Liberia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(121, NULL, 'Libyan Arab Jamahiriya', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(122, NULL, 'Liechtenstein', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(123, NULL, 'Lithuania', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(124, NULL, 'Luxembourg', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(125, NULL, 'Macau', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(126, NULL, 'FYROM', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(127, NULL, 'Madagascar', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(128, NULL, 'Malawi', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(129, NULL, 'Malaysia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(130, NULL, 'Maldives', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(131, NULL, 'Mali', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(132, NULL, 'Malta', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(133, NULL, 'Marshall Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(134, NULL, 'Martinique', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(135, NULL, 'Mauritania', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(136, NULL, 'Mauritius', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(137, NULL, 'Mayotte', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(138, NULL, 'Mexico', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(139, NULL, 'Micronesia, Federated States of', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(140, NULL, 'Moldova, Republic of', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(141, NULL, 'Monaco', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(142, NULL, 'Mongolia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(143, NULL, 'Montserrat', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(144, NULL, 'Morocco', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(145, NULL, 'Mozambique', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(146, NULL, 'Myanmar', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(147, NULL, 'Namibia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(148, NULL, 'Nauru', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(149, NULL, 'Nepal', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(150, NULL, 'Netherlands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(151, NULL, 'Netherlands Antilles', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(152, NULL, 'New Caledonia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(153, NULL, 'New Zealand', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(154, NULL, 'Nicaragua', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(155, NULL, 'Niger', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(156, NULL, 'Nigeria', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(157, NULL, 'Niue', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(158, NULL, 'Norfolk Island', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(159, NULL, 'Northern Mariana Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(160, NULL, 'Norway', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(161, NULL, 'Oman', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(162, NULL, 'Pakistan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(163, NULL, 'Palau', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(164, NULL, 'Panama', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(165, NULL, 'Papua New Guinea', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(166, NULL, 'Paraguay', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(167, NULL, 'Peru', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(168, NULL, 'Philippines', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(169, NULL, 'Pitcairn', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(170, NULL, 'Poland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(171, NULL, 'Portugal', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(172, NULL, 'Puerto Rico', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(173, NULL, 'Qatar', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(174, NULL, 'Reunion', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(175, NULL, 'Romania', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(176, NULL, 'Russian Federation', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(177, NULL, 'Rwanda', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(178, NULL, 'Saint Kitts and Nevis', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(179, NULL, 'Saint Lucia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(180, NULL, 'Saint Vincent and the Grenadines', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(181, NULL, 'Samoa', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(182, NULL, 'San Marino', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(183, NULL, 'Sao Tome and Principe', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(184, NULL, 'Saudi Arabia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(185, NULL, 'Senegal', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(186, NULL, 'Seychelles', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(187, NULL, 'Sierra Leone', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(188, NULL, 'Singapore', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(189, NULL, 'Slovak Republic', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(190, NULL, 'Slovenia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(191, NULL, 'Solomon Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(192, NULL, 'Somalia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(193, NULL, 'South Africa', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(194, NULL, 'South Georgia &amp; South Sandwich Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(195, NULL, 'Spain', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(196, NULL, 'Sri Lanka', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(197, NULL, 'St. Helena', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(198, NULL, 'St. Pierre and Miquelon', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(199, NULL, 'Sudan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(200, NULL, 'Suriname', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(201, NULL, 'Svalbard and Jan Mayen Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(202, NULL, 'Swaziland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(203, NULL, 'Sweden', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(204, NULL, 'Switzerland', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(205, NULL, 'Syrian Arab Republic', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(206, NULL, 'Taiwan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(207, NULL, 'Tajikistan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(208, NULL, 'Tanzania, United Republic of', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(209, NULL, 'Thailand', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(210, NULL, 'Togo', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(211, NULL, 'Tokelau', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(212, NULL, 'Tonga', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(213, NULL, 'Trinidad and Tobago', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(214, NULL, 'Tunisia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(215, NULL, 'Turkey', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(216, NULL, 'Turkmenistan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(217, NULL, 'Turks and Caicos Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(218, NULL, 'Tuvalu', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(219, NULL, 'Uganda', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(220, NULL, 'Ukraine', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(221, NULL, 'United Arab Emirates', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(222, NULL, 'United Kingdom', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(223, NULL, 'United States', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(224, NULL, 'United States Minor Outlying Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(225, NULL, 'Uruguay', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(226, NULL, 'Uzbekistan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(227, NULL, 'Vanuatu', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(228, NULL, 'Vatican City State (Holy See)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(229, NULL, 'Venezuela', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(230, NULL, 'Viet Nam', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(231, NULL, 'Virgin Islands (British)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(232, NULL, 'Virgin Islands (U.S.)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(233, NULL, 'Wallis and Futuna Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(234, NULL, 'Western Sahara', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(235, NULL, 'Yemen', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(237, NULL, 'Democratic Republic of Congo', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(238, NULL, 'Zambia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(239, NULL, 'Zimbabwe', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(242, NULL, 'Montenegro', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(243, NULL, 'Serbia', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(244, 1, 'Aaland Islands', 1, NULL, '2022-05-21 08:29:11', '2023-08-21 04:49:25'),
(245, NULL, 'Bonaire, Sint Eustatius and Saba', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(246, NULL, 'Curacao', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(247, NULL, 'Palestinian Territory, Occupied', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(248, NULL, 'South Sudan', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(249, NULL, 'St. Barthelemy', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(250, NULL, 'St. Martin (French part)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(251, NULL, 'Canary Islands', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(252, NULL, 'Ascension Island (British)', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(253, NULL, 'Kosovo, Republic of', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(254, NULL, 'Isle of Man', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(255, NULL, 'Tristan da Cunha', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(256, NULL, 'Guernsey', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11'),
(257, NULL, 'Jersey', 1, NULL, '2022-05-21 08:29:11', '2022-05-21 08:29:11');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `cover_image` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `name`, `slug`, `title`, `is_home`, `cover_image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Bihar Ashmita Diwas', 'bihar-ashmita-diwas', 'Bihar Ashmita Diwas', 0, 'public/uploads/galleries/1751866256_cover.jpeg', 1, '2025-07-05 18:35:16', '2025-07-07 05:30:56'),
(2, 'BITO UAE CHAPTER', 'bitto-uae-chapter', 'BITO UAE CHAPTER', 1, 'public/uploads/galleries/1751865884_cover.jpg', 1, '2025-07-05 18:35:16', '2025-07-07 05:25:32'),
(3, 'BITO Singapore Inauguration', 'bito-singapore-inauguration', 'BITO Singapore Inauguration', 0, 'public/uploads/galleries/1751866492_cover.png', 1, '2025-07-05 18:35:16', '2025-07-07 05:34:52'),
(4, 'Bihar Gaurav Award 2024', 'bihar-gaurav-award-2024', 'Bihar Gaurav Award 2024', 0, 'public/uploads/galleries/1751866352_cover.jpeg', 1, '2025-07-05 18:50:58', '2025-07-07 05:32:32'),
(5, 'BITO Inauguration', 'bito-inauguration', 'BITO Inauguration', 0, 'public/uploads/galleries/1751866169_cover.jpg', 1, '2025-07-05 18:50:58', '2025-07-07 05:29:29');

-- --------------------------------------------------------

--
-- Table structure for table `gallery_images`
--

CREATE TABLE `gallery_images` (
  `id` int NOT NULL,
  `gallery_id` int DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `gallery_images`
--

INSERT INTO `gallery_images` (`id`, `gallery_id`, `image_path`, `status`, `created_at`, `updated_at`) VALUES
(26, 2, 'public/uploads/galleries/images/1751871970_686b71e2a96f5.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(27, 2, 'public/uploads/galleries/images/1751871970_686b71e2aa4ad.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(28, 2, 'public/uploads/galleries/images/1751871970_686b71e2aaec3.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(29, 2, 'public/uploads/galleries/images/1751871970_686b71e2ab915.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(30, 2, 'public/uploads/galleries/images/1751871970_686b71e2ac436.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(31, 2, 'public/uploads/galleries/images/1751871970_686b71e2acb8c.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(32, 2, 'public/uploads/galleries/images/1751871970_686b71e2ad445.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(33, 2, 'public/uploads/galleries/images/1751871970_686b71e2ae077.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(34, 2, 'public/uploads/galleries/images/1751871970_686b71e2aeb2d.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(35, 2, 'public/uploads/galleries/images/1751871970_686b71e2af3f9.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(36, 2, 'public/uploads/galleries/images/1751871970_686b71e2afc9e.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(37, 2, 'public/uploads/galleries/images/1751871970_686b71e2b065c.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(38, 2, 'public/uploads/galleries/images/1751871970_686b71e2b0f7c.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(39, 2, 'public/uploads/galleries/images/1751871970_686b71e2b1929.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(40, 2, 'public/uploads/galleries/images/1751871970_686b71e2b22ab.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(41, 2, 'public/uploads/galleries/images/1751871970_686b71e2b2cd6.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(42, 2, 'public/uploads/galleries/images/1751871970_686b71e2b377a.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(43, 2, 'public/uploads/galleries/images/1751871970_686b71e2b406a.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(44, 2, 'public/uploads/galleries/images/1751871970_686b71e2b492e.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(45, 2, 'public/uploads/galleries/images/1751871970_686b71e2b517f.webp', 1, '2025-07-07 07:06:10', '2025-07-07 07:06:10'),
(46, 5, 'public/uploads/galleries/images/1751872101_686b7265b7889.webp', 1, '2025-07-07 07:08:21', '2025-07-07 07:08:21'),
(47, 5, 'public/uploads/galleries/images/1751872101_686b7265b86ef.webp', 1, '2025-07-07 07:08:21', '2025-07-07 07:08:21'),
(48, 5, 'public/uploads/galleries/images/1751872101_686b7265b927b.webp', 1, '2025-07-07 07:08:21', '2025-07-07 07:08:21'),
(49, 1, 'public/uploads/galleries/images/1751872216_686b72d87d27e.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(50, 1, 'public/uploads/galleries/images/1751872216_686b72d87e563.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(51, 1, 'public/uploads/galleries/images/1751872216_686b72d87f726.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(52, 1, 'public/uploads/galleries/images/1751872216_686b72d880446.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(53, 1, 'public/uploads/galleries/images/1751872216_686b72d881749.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(54, 1, 'public/uploads/galleries/images/1751872216_686b72d882647.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(55, 1, 'public/uploads/galleries/images/1751872216_686b72d88305a.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(56, 1, 'public/uploads/galleries/images/1751872216_686b72d883ba3.jpeg', 1, '2025-07-07 07:10:16', '2025-07-07 07:10:16'),
(57, 4, 'public/uploads/galleries/images/1751872743_686b74e7b28cd.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(58, 4, 'public/uploads/galleries/images/1751872743_686b74e7b3bad.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(59, 4, 'public/uploads/galleries/images/1751872743_686b74e7b4978.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(60, 4, 'public/uploads/galleries/images/1751872743_686b74e7b57e1.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(61, 4, 'public/uploads/galleries/images/1751872743_686b74e7b6912.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(62, 4, 'public/uploads/galleries/images/1751872743_686b74e7b7a2b.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(63, 4, 'public/uploads/galleries/images/1751872743_686b74e7b8b58.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(64, 4, 'public/uploads/galleries/images/1751872743_686b74e7b9df0.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(65, 4, 'public/uploads/galleries/images/1751872743_686b74e7bac64.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(66, 4, 'public/uploads/galleries/images/1751872743_686b74e7bb9a0.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(67, 4, 'public/uploads/galleries/images/1751872743_686b74e7bc699.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(68, 4, 'public/uploads/galleries/images/1751872743_686b74e7bd4a2.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(69, 4, 'public/uploads/galleries/images/1751872743_686b74e7be497.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(70, 4, 'public/uploads/galleries/images/1751872743_686b74e7bf1ad.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(71, 4, 'public/uploads/galleries/images/1751872743_686b74e7bfdd7.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(72, 4, 'public/uploads/galleries/images/1751872743_686b74e7c089a.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(73, 4, 'public/uploads/galleries/images/1751872743_686b74e7c127e.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(74, 4, 'public/uploads/galleries/images/1751872743_686b74e7c1cfd.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(75, 4, 'public/uploads/galleries/images/1751872743_686b74e7c27b3.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(76, 4, 'public/uploads/galleries/images/1751872743_686b74e7c3351.jpeg', 1, '2025-07-07 07:19:03', '2025-07-07 07:19:03'),
(77, 3, 'public/uploads/galleries/images/1751872785_686b75119b11f.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(78, 3, 'public/uploads/galleries/images/1751872785_686b75119fbdb.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(79, 3, 'public/uploads/galleries/images/1751872785_686b7511a26a1.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(80, 3, 'public/uploads/galleries/images/1751872785_686b7511a30ba.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(81, 3, 'public/uploads/galleries/images/1751872785_686b7511a39d1.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(82, 3, 'public/uploads/galleries/images/1751872785_686b7511a4255.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(83, 3, 'public/uploads/galleries/images/1751872785_686b7511a4e57.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45'),
(84, 3, 'public/uploads/galleries/images/1751872785_686b7511a58cb.jpeg', 1, '2025-07-07 07:19:45', '2025-07-07 07:19:45');

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `setting_type` tinyint NOT NULL,
  `setting_name` varchar(250) NOT NULL,
  `filed_label` varchar(250) NOT NULL,
  `filed_name` varchar(250) NOT NULL,
  `filed_type` varchar(250) NOT NULL,
  `filed_value` mediumtext NOT NULL,
  `field_options` varchar(250) NOT NULL,
  `is_require` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `setting_type`, `setting_name`, `filed_label`, `filed_name`, `filed_type`, `filed_value`, `field_options`, `is_require`, `created_at`, `updated_at`) VALUES
(1, 1, 'favicon', 'Favicon (25*25)', 'favicon', 'file', 'public/uploads/setting/1751266994.png', '', 1, NULL, '2025-06-30 07:03:14'),
(2, 1, 'logo', 'Logo', 'logo', 'file', 'public/uploads/setting/1751266994.png', '', 1, NULL, '2025-06-30 07:03:14'),
(3, 1, 'application_name', 'Application Name', 'application_name', 'text', 'Bitto World', '', 1, NULL, '2025-07-02 07:38:03'),
(6, 1, 'copyright', 'Copyright', 'copyright', 'text', 'Copyright © 2025 Bihar International Trade Organization (BITO)', '', 1, NULL, '2025-07-02 07:38:03'),
(7, 1, 'meta_title', 'Site Meta Title', 'meta_title', 'text', 'Bitto World', '', 1, NULL, '2025-07-02 07:38:03'),
(8, 1, 'meta_keyword', 'Site Meta Keyword', 'meta_keyword', 'text', 'Bitto World', '', 1, NULL, '2025-07-02 07:38:03'),
(9, 1, 'meta_description', 'Site Meta Description', 'meta_description', 'textarea', 'Welcome to BITO, your partner in discovering the vibrant history and promising future of Bihar. Our organization is dedicated to preserving Bihar\'s cultural heritage while simultaneously creating new opportunities for education, employment, and economic growth.\r\n\r\nBihar International Trade Organization (BITO) Preserving Heritage, Creating Opportunities Explore the rich tapestry of Bihar\'s history and culture, where the past meets the future. BITO is your gateway to a rejuvenated Bihar, dedicated to preserving its heritage while paving the way for progress.', '', 1, NULL, '2025-07-02 07:38:03'),
(10, 1, 'address', 'Address', 'address', 'text', '173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic City Metro Station, Noida-201309 Phone: 0120-4914498', '', 1, NULL, '2025-07-02 07:38:03'),
(11, 1, 'email', 'Email', 'email', 'text', 'office@bitoworld.in', '', 1, NULL, '2025-07-02 07:38:03'),
(12, 1, 'phone', 'Phone', 'phone', 'text', '999 999 9999', '', 1, NULL, '2025-07-02 07:38:03'),
(14, 2, 'email_from', 'Email From/ Reply to', 'email_from', 'text', 'info@adiyogitechnosoft.com', '', 1, NULL, '2025-07-02 07:38:03'),
(15, 2, 'smtp_host', 'SMTP Host', 'smtp_host', 'text', 'smtp-relay.brevo.com', '', 1, NULL, '2025-07-02 07:38:03'),
(16, 2, 'smtp_port', 'SMTP Port', 'smtp_port', 'text', '587', '', 1, NULL, '2025-07-02 07:38:03'),
(17, 2, 'smtp_user', 'SMTP User', 'smtp_user', 'text', '770235001@smtp-brevo.com', '', 1, NULL, '2025-07-02 07:38:03'),
(18, 2, 'smtp_pass', 'SMTP Password', 'smtp_pass', 'text', '08EdW3DMNLY7VxRX', '', 1, NULL, '2025-07-02 07:38:03'),
(19, 3, 'facebook_link', 'Facebook', 'facebook_link', 'text', '#', '', 1, NULL, '2025-07-02 07:38:03'),
(20, 3, 'twitter_link', 'Twitter', 'twitter_link', 'text', '#', '', 1, NULL, '2025-07-02 07:38:03'),
(21, 3, 'youtube_link', 'Youtube', 'youtube_link', 'text', '#', '', 1, NULL, '2025-07-02 07:38:03'),
(22, 3, 'linkedin_link', 'LinkedIn', 'linkedin_link', 'text', '#', '', 1, NULL, '2025-07-02 07:38:03'),
(23, 3, 'instagram_link', 'Instagram', 'instagram_link', 'text', '#', '', 1, NULL, '2025-07-02 07:38:03'),
(27, 5, 'google_iframe', 'Google Iframe', 'google_iframe', 'textarea', '', '', 1, NULL, '2025-07-02 07:38:03'),
(29, 5, 'whatsapp_button', 'WhatsApp Button', 'whatsapp_button', 'textarea', '', '', 1, NULL, '2025-07-02 07:38:03'),
(30, 5, 'google_analytics', 'Google Analytics', 'google_analytics', 'textarea', '', '', 1, NULL, '2025-07-02 07:38:03'),
(37, 1, 'catalogue', 'Download catalogue', 'catalogue', 'pdf', 'public/uploads/setting/1718091717.pdf', '', 1, NULL, '2024-06-11 07:41:57');

-- --------------------------------------------------------

--
-- Table structure for table `homepage`
--

CREATE TABLE `homepage` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `homepage_title` varchar(250) NOT NULL,
  `meta_title` varchar(250) NOT NULL,
  `meta_keyword` varchar(250) NOT NULL,
  `meta_description` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `homepage_contant` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `image` varchar(250) NOT NULL,
  `is_home` tinyint NOT NULL DEFAULT '0' COMMENT '0=homepage, 1=home homepage',
  `status` tinyint NOT NULL DEFAULT '1' COMMENT '0=Active, 1=InActive',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `home_description` varchar(500) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `name_title` varchar(250) CHARACTER SET ucs2 COLLATE ucs2_general_ci NOT NULL,
  `name_sub_title` varchar(250) CHARACTER SET ucs2 COLLATE ucs2_general_ci NOT NULL,
  `sub_title` varchar(250) CHARACTER SET ucs2 COLLATE ucs2_general_ci NOT NULL,
  `objectives_title` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_desc` varchar(500) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_suba` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_subb` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_subc` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_subd` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_imga` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_imgb` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_imgc` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_imgd` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_url` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `objectives_main_img` varchar(250) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `homepage`
--

INSERT INTO `homepage` (`id`, `slug`, `name`, `homepage_title`, `meta_title`, `meta_keyword`, `meta_description`, `homepage_contant`, `image`, `is_home`, `status`, `deleted_at`, `created_at`, `updated_at`, `home_description`, `name_title`, `name_sub_title`, `sub_title`, `objectives_title`, `objectives_desc`, `objectives_suba`, `objectives_subb`, `objectives_subc`, `objectives_subd`, `objectives_imga`, `objectives_imgb`, `objectives_imgc`, `objectives_imgd`, `objectives_url`, `objectives_main_img`) VALUES
(1, 'vission', 'Home Page', 'Vision & Mission', 'Home Page', 'Home Page ghg', 'Home Page', 'uploads/homepage/1731664819.png', 'uploads/homepage/1731664810.png', 0, 1, NULL, NULL, '2024-11-15 10:42:07', 'To spearhead a revolution in sustainable development, drive transformative change across bihar and beyond, and create a lasting legacy of pride, progress, and enduring strength for future generations.', 'Vision', 'Mission sdas', 'An Atmanirbhar Bihar—A Glorious Bihar Asmita—A Prosperous, Proud, And Cohesive Bihari Community Leading Globally.', 'Objectives', 'BITO operates with a clear set of objectives that guide its activities and initiatives. These objectives are designed to address the diverse needs of the Bihari community, from economic empowerment to cultural preservation', 'Economic Empowerment', 'Cultural Preservation & Promotion', 'Global Collaboration', 'Inclusitivity & Sustainability', 'uploads/homepage/1731666448.png', 'uploads/homepage/1731666734.png', 'uploads/homepage/1731666795.png', 'uploads/homepage/1731666748.png', 'https://bitoworld.in/', 'uploads/homepage/1731660737.png');

-- --------------------------------------------------------

--
-- Table structure for table `initiatives`
--

CREATE TABLE `initiatives` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `mubtitle` varchar(255) NOT NULL,
  `eubtitle` varchar(255) NOT NULL,
  `nubtitle` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_keyword` text,
  `meta_description` text,
  `slug` varchar(255) NOT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `simage` varchar(255) DEFAULT NULL,
  `mimage` varchar(255) DEFAULT NULL,
  `eimage` varchar(255) DEFAULT NULL,
  `nimage` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `initiatives`
--

INSERT INTO `initiatives` (`id`, `name`, `subtitle`, `mubtitle`, `eubtitle`, `nubtitle`, `title`, `description`, `meta_title`, `meta_keyword`, `meta_description`, `slug`, `is_home`, `status`, `simage`, `mimage`, `eimage`, `nimage`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Key Programs and Initiatives', 'Bihar University', 'Business Connect & Collaboration', 'Global Bihar Heritage Initiative', 'BITO Multi Specialty Hospital', 'Key Programs and Initiatives', '<p>BITO has launched several impactful programs and initiatives that are designed to address the needs of the Bihari community across various domains</p>', 'BITO Initiatives - Meta Title', 'initiatives, empowerment, community, sustainability', 'BITO Initiatives focuses on community empowerment, economic development, and cultural preservation.', 'old-site/about.php', 1, 1, 'https://admin.mockup4clients.com/public/uploads/initiatives/1751373669_desktop.png', 'https://admin.mockup4clients.com/public/uploads/initiatives/1751371051_mobile.png', 'https://admin.mockup4clients.com/public/uploads/initiatives/1751371051_desktop.png', 'https://admin.mockup4clients.com/public/uploads/initiatives/1751373681_desktop.png', '2025-07-01 11:52:24', '2025-07-01 12:41:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(28, '2014_10_12_000000_create_admins_table', 1),
(29, '2014_10_12_000000_create_general_settings_table', 1),
(30, '2014_10_12_000000_create_roles_table', 1),
(31, '2014_10_12_000000_create_users_table', 1),
(32, '2014_10_12_100000_create_password_resets_table', 1),
(33, '2019_08_19_000000_create_failed_jobs_table', 1),
(34, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(35, '2022_02_15_073419_create_banners_table', 1),
(36, '2022_02_16_101115_create_categories_table', 1),
(37, '2022_02_17_093316_create_cms_table', 1),
(38, '2022_02_18_063010_create_countries_table', 1),
(39, '2022_02_18_070522_create_states_table', 1),
(40, '2022_02_18_100125_create_cities_table', 1),
(41, '2022_02_19_080618_create_faqs_table', 1),
(42, '2022_02_19_103335_create_testimonials_table', 1),
(43, '2022_02_21_073742_create_galleries_table', 1),
(44, '2022_02_21_073756_create_gallery_details_table', 1),
(45, '2022_02_21_095929_create_newsletters_table', 1),
(46, '2022_02_21_104858_create_message_recivers_table', 1),
(47, '2022_02_22_102616_create_messages_table', 1),
(48, '2022_02_24_061858_create_products_table', 1),
(49, '2022_02_24_104449_create_faq_types_table', 1),
(50, '2022_02_24_104536_create_product_images_table', 1),
(51, '2022_02_24_104602_create_product_videos_table', 1),
(52, '2022_02_24_104637_create_product_to_categories_table', 1),
(53, '2022_02_24_104725_create_gst_masters_table', 1),
(54, '2022_02_26_043855_create_notifications_table', 1),
(55, '2024_06_11_142158_create_download_catalog_table', 2),
(56, '2024_11_13_071440_create_bannerms_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

CREATE TABLE `mission` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vmissiontitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `missiondescription` text COLLATE utf8mb4_unicode_ci,
  `visiondescription` text COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keyword` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `visionimage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `missionimage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mission`
--

INSERT INTO `mission` (`id`, `name`, `vmissiontitle`, `title`, `missiondescription`, `visiondescription`, `meta_title`, `meta_keyword`, `meta_description`, `slug`, `is_home`, `status`, `visionimage`, `missionimage`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Our Vision & Mission', 'Mission', 'Vision', '<p>An Atmanirbhar Bihar&mdash;A Glorious Bihar Asmita&mdash;A Prosperous, Proud, And Cohesive Bihari Community Leading Globally.</p>', '<p>To spearhead a revolution in sustainable development, drive transformative change across bihar and beyond, and create a lasting legacy of pride, progress, and enduring strength for future generations.</p>', 'Empowering Vision', 'vision,mission,goals,technology', 'Empowering future through sustainable mission and vision goals.', 'our-vision-mission', 1, 1, 'https://admin.mockup4clients.com/public/uploads/mission/1751358166_desktop.png', 'https://admin.mockup4clients.com/public/uploads/mission/1751358166_mobile.png', '2025-07-01 07:34:40', '2025-07-01 08:23:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `objective`
--

CREATE TABLE `objective` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `mubtitle` varchar(255) NOT NULL,
  `eubtitle` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_keyword` text,
  `meta_description` text,
  `slug` varchar(255) NOT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `simage` varchar(255) DEFAULT NULL,
  `mimage` varchar(255) DEFAULT NULL,
  `eimage` varchar(255) DEFAULT NULL,
  `timage` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `nubtitle` varchar(255) NOT NULL,
  `nimage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `objective`
--

INSERT INTO `objective` (`id`, `name`, `subtitle`, `mubtitle`, `eubtitle`, `title`, `description`, `meta_title`, `meta_keyword`, `meta_description`, `slug`, `is_home`, `status`, `simage`, `mimage`, `eimage`, `timage`, `created_at`, `updated_at`, `deleted_at`, `nubtitle`, `nimage`) VALUES
(1, 'Objectives', 'Economic Empowerment', 'Cultural Preservation & Promotion', 'Global Collaboration', 'Objectives', '<p>BITO operates with a clear set of objectives that guide its activities and initiatives. These objectives are designed to address the diverse needs of the Bihari community, from economic empowerment to cultural preservation</p>', 'Meta Title 1', 'objective,objectives', 'Meta description for Mission 1', 'objective-1', 1, 1, 'https://admin.mockup4clients.com/public/uploads/objective/1751524040_desktop.png', 'https://admin.mockup4clients.com/public/uploads/objective/1751524349_mobile.png', 'https://admin.mockup4clients.com/public/uploads/objective/1751362909_desktop.png', 'https://admin.mockup4clients.com/public/uploads/objective/1751524328_mobile.png', '2025-07-01 08:51:12', '2025-07-03 06:32:29', NULL, 'Inclusitivity & Sustainability', 'https://admin.mockup4clients.com/public/uploads/objective/1751524315_desktop.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `eimage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `partner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mahaveer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jharkhand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parivar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sydney` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`id`, `name`, `title`, `description`, `slug`, `is_home`, `status`, `eimage`, `created_at`, `updated_at`, `deleted_at`, `partner`, `mahaveer`, `jharkhand`, `parivar`, `sydney`) VALUES
(1, 'Organization', 'Memebership', '<p>Membership in BITO will be open to individuals, entrepreneurs, industrialists, professionals, and organizations having a connection to Bihar and sharing the vision and values of the organization.</p>', 'membership', 1, 1, 'https://admin.mockup4clients.com/public/uploads/organization/1751627042_desktop.png', '2025-07-04 10:47:18', '2025-07-04 11:18:31', NULL, 'Our Partners', 'Shri Mahaveer Shikshan Sansthanam', 'Bihar Jharkhand Sabha Members Australia', 'Sukhi Parivar Foundation', 'University of Sydney');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(250) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Table structure for table `preferred_languages`
--

CREATE TABLE `preferred_languages` (
  `id` bigint NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1' COMMENT '1=Active, 0=InActive',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `preferred_languages`
--

INSERT INTO `preferred_languages` (`id`, `name`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Hindi', 1, NULL, '2023-08-17 00:23:43', '2023-08-17 00:23:56'),
(2, 'English', 1, NULL, '2023-08-17 00:24:15', '2023-08-17 00:24:15');

-- --------------------------------------------------------

--
-- Table structure for table `roadmap`
--

CREATE TABLE `roadmap` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `road_subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `contant_dore` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `road_contant` text COLLATE utf8mb4_unicode_ci,
  `road_name_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keyword` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `slug` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_desktop` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roadmap`
--

INSERT INTO `roadmap` (`id`, `name`, `title`, `sub_title`, `road_subtitle`, `description`, `contant_dore`, `road_contant`, `road_name_title`, `meta_title`, `meta_keyword`, `meta_description`, `slug`, `is_home`, `status`, `image`, `image_desktop`, `image_mobile`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '5 Years Road Map', 'Years 1-2 | Foundation & Growth', 'Years 3-4 | Acceleration', 'Year 5 | Consolidation & Expansion', '<p><strong>Global Chapter Expansion</strong>&nbsp;Establish 25 new international chapters.</p>\r\n\r\n<p><strong>Startups Incubated&nbsp;</strong>Launch 108 new startups in agriculture and FMCG.</p>\r\n\r\n<p><strong>Launch BITO Mart</strong>&nbsp;Expand nationwide to feature Bihari startup products.</p>\r\n\r\n<p><strong>Finalize Bihar University</strong>&nbsp;Complete the blueprint and secure partnerships.</p>\r\n\r\n<p><strong>Hospital &amp; Medical College</strong>&nbsp;Begin construction to enhance healthcare infrastructure.</p>', '<p><strong>100,000 Jobs Created</strong>&nbsp;Through industrial growth, startups, and export initiatives.</p>\r\n\r\n<p><strong>Export Expansion</strong>&nbsp;Increase exports to 25 new countries.</p>\r\n\r\n<p><strong>Tourism Development</strong>&nbsp;Develop Nalanda and Vaishali as top global spiritual destinations.</p>', '<p><strong>Top 5 Tourism Destination</strong>&nbsp;Establish Bihar as a premier spiritual and cultural destination.</p>\r\n\r\n<p><strong>Global BITO Summit</strong>&nbsp;Host to showcase achievements and attract international investments.</p>\r\n\r\n<p><strong>Establish Export Hub</strong>&nbsp;Create a hub for managing international trade of Bihari products.</p>\r\n\r\n<p><strong>Complete Bihar University Construction</strong>&nbsp;Finalize and fully operationalize the university.</p>\r\n\r\n<p><strong>Hospital Construction</strong>&nbsp;Complete the new hospital to enhance regional healthcare services.</p>', NULL, 'Meta Title Sample', 'roadmap, strategy, goals', 'This roadmap is about achieving milestones across business and tech goals.', 'first-roadmap-entry', 1, 1, 'https://admin.mockup4clients.com/public/uploads/roadmap/1751351406.png', 'https://admin.mockup4clients.com/public/uploads/roadmap/1751351406_desktop.png', 'https://admin.mockup4clients.com/public/uploads/roadmap/1751351406_mobile.png', NULL, '2025-06-30 12:35:52', '2025-07-01 06:48:09');

-- --------------------------------------------------------

--
-- Table structure for table `roadmaps`
--

CREATE TABLE `roadmaps` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `road_subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `contant_dore` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `road_contant` text COLLATE utf8mb4_unicode_ci,
  `road_name_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keyword` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `slug` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_home` tinyint(1) DEFAULT '0',
  `status` tinyint(1) DEFAULT '1',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_desktop` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `submissions`
--

CREATE TABLE `submissions` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `work` varchar(255) DEFAULT NULL,
  `synopsis` varchar(255) DEFAULT NULL,
  `chapters` varchar(255) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `submissions`
--

INSERT INTO `submissions` (`id`, `name`, `phone`, `email`, `country`, `language`, `genre`, `work`, `synopsis`, `chapters`, `comments`, `deleted_at`, `created_at`, `updated_at`) VALUES
(3, 'Pragati Gupta Saxena', '8601929620', 'pragati.gupta5@gmail.com', 'India', 'English', '5 - 7 years', 'Treat for Pete', 'It is a story about a boy who wants sweets really bad, but doesn\'t know how to request to his mother. So he does what he knows best and wins her heart, and sweets at the end.', 'public/uploads/submission/1703329900_14.docx', 'Would like to know about the procedure for publishing this book. It is a children\'s book with illustrations and textual context.', NULL, '2023-12-23 11:11:40', '2023-12-23 11:11:40'),
(4, 'Pragati Gupta Saxena', '8601929620', 'pragati.gupta5@gmail.com', 'India', 'English', '5 - 7 years', 'Treat for Pete', 'It is a story about a boy who wants sweets really bad, but doesn\'t know how to request to his mother. So he does what he knows best and wins her heart, and sweets at the end.', 'public/uploads/submission/1704360548_59.docx', 'Would like to know about the procedure for publishing this book. It is a children\'s book with illustrations and textual context.', NULL, '2024-01-04 09:29:08', '2024-01-04 09:29:08'),
(5, 'Gaganendranath Bhattacharyya', '9845860764', 'GNB077722@gmail.com', 'India', 'Hindi', 'Bengali', 'The boy who shoot\'s a bow and a arrow', 'Check this book please', 'public/uploads/submission/1704600424_57.jpeg', 'This book is very nice.', NULL, '2024-01-07 04:07:04', '2024-01-07 04:07:04'),
(6, 'Gaganendranath Bhattacharyya', '9845860764', 'GNB077722@gmail.com', 'India', 'Hindi', 'Bengali', 'The boy who shoot\'s a bow and a arrow', 'Check this book please', 'public/uploads/submission/1704600439_75.jpeg', 'This book is very nice.', NULL, '2024-01-07 04:07:19', '2024-01-07 04:07:19'),
(7, 'Gaganendra', '9243760764', 'GNB077722@gmail.com', 'India', 'Hindi', 'First Illustrated Fairy Tales', 'Rudransh the king', 'Gagan here', 'public/uploads/submission/1704618738_11.docx', 'Hello check this book', NULL, '2024-01-07 09:12:18', '2024-01-07 09:12:18'),
(8, 'Ananthi Muthukrishnan', '9597777027', 'ananthivetham@gmail.com', 'India', 'English', 'Tamil', 'Tortoise and the crane', 'Kids story book based on Tamil famous poem Thirukkural and it\'s moral values', 'public/uploads/submission/1704620676_39.jpg', 'We would like to sell kids story books', NULL, '2024-01-07 09:44:36', '2024-01-07 09:44:36'),
(9, 'Geetanjali verma', '9057263901', 'cranb1186@gmail.com', 'India', 'English', '13 years+', 'Diabetic cookbook', 'I want to present a book on diabetic recipes that can give information about the daily diet and and help the readers', 'public/uploads/submission/1704922977_67.PDF', 'Go to book for readers', NULL, '2024-01-10 21:42:57', '2024-01-10 21:42:57'),
(10, 'Neha Tiwari', '7838327720', 'nehatiwari250989@gmail.com', 'India', 'English', '0 - 3 years', 'Affirmation ABCs', 'Embark on an enchanting ABC journey for ages 0-3! Our innovative book combines early learning with positive affirmations. Each letter opens a world of discovery and encouragement, celebrating uniqueness and fostering confidence.', 'public/uploads/submission/1705294071_52.pdf', 'Exciting news! We\'re crafting new books: toddler editions focus on unique needs, nurturing positivity. For school kids, a special edition fosters resilience and confidence in a competitive world.', NULL, '2024-01-15 04:47:51', '2024-01-15 04:47:51'),
(11, 'Neha Tiwari', '7838327720', 'nehatiwari250989@gmail.com', 'India', 'English', '0 - 3 years', 'Affirmation ABCs', 'Embark on an enchanting ABC journey for ages 0-3! Our innovative book combines early learning with positive affirmations. Each letter opens a world of discovery and encouragement, celebrating uniqueness and fostering confidence', 'public/uploads/submission/1705294184_57.pdf', 'Exciting news! We\'re crafting new books: toddler editions focus on unique needs, nurturing positivity. For school kids, a special edition fosters resilience and confidence in a competitive world.', NULL, '2024-01-15 04:49:44', '2024-01-15 04:49:44'),
(12, 'Krishna Desai', '7041797046', 'krshnds037@gmail.com', 'India', 'English', '7 - 11 years', 'Director', 'Explore a delightful and informative general knowledge book crafted especially for curious young minds aged seven to eleven. This engaging book is designed to spark the flames of curiosity and expand the horizons of budding intellects.', 'public/uploads/submission/1706207109_78.pdf', 'I am unable to attach my word/pdf file here. The site does not let me attach a file. Please let me know another way to submit my work.', NULL, '2024-01-25 18:25:09', '2024-01-25 18:25:09'),
(13, 'meghnMeghna Shirish Iyer', '9036698461', 'contact@meghnashirish.com', 'India', 'English', 'Storybooks', 'Coackroaches at Night', 'The book is for 0 to 3 years. Simple english and it can be a pop up book or an illustrated story book.', 'public/uploads/submission/1707197728_38.pdf', 'I am Meghna Shirish an Artist from Bangalore India. www.meghnashirish.com', NULL, '2024-02-06 05:35:28', '2024-02-06 05:35:28'),
(14, 'Tanay  Shah', '9323003263', 'tanay.shah2305@gmail.com', 'India', 'English', 'Illustrated Epics', 'The Epic adventures of rama', 'A 7 book series on the Ramayana', 'public/uploads/submission/1708067788_13.docx', 'You could please check this version and get back to me.', NULL, '2024-02-16 07:16:28', '2024-02-16 07:16:28'),
(15, 'vinita bhosle', '9136687156', 'radhakrishna.vinita@gmail.com', 'India', 'English', 'Let’s Talk Series', 'KAYLIE COMES FROM A DIFFERENT FAMILY', 'The main character,a young girl named Kaylie, talks about how it is to grow up in a family with two moms. The story aims to resonate with the changing family dynamics that are common in today’s changing times.', 'public/uploads/submission/1708678574_52.docx', 'LOOKING FORWARD TO HEARING FROM YOU', NULL, '2024-02-23 08:56:14', '2024-02-23 08:56:14'),
(16, 'Deepak', '8800549949', 'deepaksta@gmail.com', 'India', 'English', 'Novelty Books', 'The Ocean at the End of the Lane', 'This is testing from DX', 'public/uploads/submission/1711428989_27.png', 'This is testing from DX', NULL, '2024-03-26 04:56:29', '2024-03-26 04:56:29'),
(17, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '13 years+', 'Varistavit and Visitors from sea', 'Story of a boy named Varistavit who is discovered on lake shore by a man. The boy bears extraordinary powers and is unknown to the. In his journey he faces challenges from which he knows about him. At end he meets his first hurdle, Filaris the monster', 'public/uploads/submission/1711519378_54.pdf', 'Thanks for considering my work', NULL, '2024-03-27 06:02:58', '2024-03-27 06:02:58'),
(18, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'Varistavit and Visitors from sea', 'Varistavit is a novel series whose first part is Varistavit and Visitors from Sea. In this part a young man named Arjun finds an infant at lake shore and nurtures him. The boy is inherited with powers that is unknown to this world.', 'public/uploads/submission/1711521021_24.', 'Thanks for considering my work', NULL, '2024-03-27 06:30:21', '2024-03-27 06:30:21'),
(19, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'Varistavit and Visitors from sea', 'Varistavit is a novel series whose first part is Varistavit and Visitors from Sea. In this part a young man named Arjun finds an infant at lake shore and nurtures him. The boy is inherited with powers that is unknown to this world.', 'public/uploads/submission/1711521059_42.pdf', 'Thanks for considering my work', NULL, '2024-03-27 06:30:59', '2024-03-27 06:30:59'),
(20, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'Varistavit and Visitors from sea', 'This novel is first book of Varistavit series where a hero is discovered by a man at lake shore. The boy bears extraordinary powers', 'public/uploads/submission/1711547431_81.pdf', 'Thank you for considering my work', NULL, '2024-03-27 13:50:31', '2024-03-27 13:50:31'),
(21, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'Varistavit and Visitors from sea', 'This book is first part of VARISTAVIT series where a boy named Varistavit has supernatural powers with mysterious past', 'public/uploads/submission/1711547628_70.pdf', 'Thank you for considering my work', NULL, '2024-03-27 13:53:48', '2024-03-27 13:53:48'),
(22, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'Varistavit and Visitors from sea', 'This book is first part of VARISTAVIT series where a boy named Varistavit has supernatural powers with mysterious past', 'public/uploads/submission/1711547630_42.pdf', 'Thank you for considering my work', NULL, '2024-03-27 13:53:50', '2024-03-27 13:53:50'),
(23, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'Varistavit and Visitors from sea', 'Varistavit and Visitors from Sea is first book of Varistavit series where a boy named Varistavit who was found on the lake shore by a man. The boy bears extraordinary powers and is unknown to them. He discovers about himself fighting monsters', 'public/uploads/submission/1711679885_67.pdf', 'Thanks for considering my work', NULL, '2024-03-29 02:38:05', '2024-03-29 02:38:05'),
(31, 'Akshat Pandey', '7992052423', 'akshatp2609@gmail.com', 'India', 'English', '11 - 13 years', 'VARISTAVIT AND VISITORS FROM SEA', 'This book is first part of VARISTAVIT series. Varistavit is a boy who has extraordinary powers of which he is unknown. He fights villians and monsters on his way', 'public/uploads/submission/1712123429_89.pdf', 'Thank you', NULL, '2024-04-03 05:50:29', '2024-04-03 05:50:29'),
(32, 'test', '9873780649', 'surbhi.saxena@prakashbooks.com', 'India', 'English', 'Hindi', 'testing the test to test it', 'test ke do aage test, test ke do peeche test, upar test neeche test, test ki toh baat hai testo pe tika sansaar hai', 'public/uploads/submission/1712550778_21.jpg', 'please so testing me', NULL, '2024-04-08 04:32:58', '2024-04-08 04:32:58'),
(33, 'Attia Benkherif', '0773751325', 'attiabenkherif@outlook.com', 'United Kingdom', 'English', 'Picture Books', 'The Sultan\'s Star', 'A story about a sultan who is obsessed with a special star that is associated with his life.', 'public/uploads/submission/1712674406_75.docx', 'I am an international children\'s author, A H Benjamin, whose books have sold worldwide with more than 25 translations. Also some of my work has been adpated for radio, television and theatre. I live in the UK with my family.', NULL, '2024-04-09 14:53:26', '2024-04-09 14:53:26'),
(34, 'Dipasri Sardar', '9791753806', 'dipasrisardar@gmail.com', 'India', 'English', 'Let’s Talk Series', 'A short story Uma: The Inner Shakti', 'I am submitting a proposal for a small book of about 2-3 pp. It can be presented in a graphic book format. It\'s about a deaf teenager Uma who overcomes her period pain, inner fear and tackles an eve-teaser with her intelligence.', 'public/uploads/submission/1713245018_19.docx', '', NULL, '2024-04-16 05:23:38', '2024-04-16 05:23:38'),
(35, 'Dipasri Sardar', '9791753806', 'dipasrisardar@gmail.com', 'India', 'English', 'Let’s Talk Series', 'Some Unsaid Emotions', 'I am submitting a proposal for a graphic poem book with 6 therapeutic poems written by me for publishing under traditional publishing method. Page count less than 20 pp.', 'public/uploads/submission/1713245151_20.docx', '', NULL, '2024-04-16 05:25:51', '2024-04-16 05:25:51'),
(36, 'Dipasri Sardar', '9791753806', 'dipasrisardar@gmail.com', 'India', 'English', 'Let’s Talk Series', 'Uma: The Inner Shakthi', 'I am submitting a proposal for a small book of about 2-3 pp. It can be presented in a graphic book format. It\'s about a deaf teenager Uma who overcomes her period pain, inner fear and tackles an eve-teaser with her intelligence.', 'public/uploads/submission/1713248041_75.docx', '', NULL, '2024-04-16 06:14:01', '2024-04-16 06:14:01'),
(37, 'Halima Zakhir', '9789954620', 'halima.zakhir97@gmail.com', 'India', 'English', 'Picture Books', 'Seeking Happiness', 'A first-time young reader’s guide to discovering happiness, in the sweetest and simplest ways. Parents will find it a pleasant reminder to find good in all things around them as they read along with their little ones.', 'public/uploads/submission/1713361397_46.jpeg', 'This is my first attempt at illustrating a children’s book. I’ve always wanted to illustrate and create books to help little ones above the age of five foster their reading skills. Thank you for your time.', NULL, '2024-04-17 13:43:17', '2024-04-17 13:43:17'),
(38, 'Adarsh Shukla', '8780646165', 'superkid.adarsh@gmail.com', 'India', 'English', 'Festive Fun', 'FESTIVALS AND OCCASIONS', 'A festival / occasion is an event celebrated by a community and centering on some characteristic aspect or aspects of that community and its religion or cultures. It is celebrated to spread joy in the society.', 'public/uploads/submission/1714227627_25.docx', '', NULL, '2024-04-27 14:20:27', '2024-04-27 14:20:27'),
(39, 'Aqsa fathima', '8667747838', 'shaheenibrahim87@gmail.com', 'India', 'English', '11 - 13 years', 'The dying plant', 'The story revolves around a boy named Adam who\'s father is a physician and had invented time machine, however as the time goes he finds out a plant is dying, he and other characters helps it to grow well', 'public/uploads/submission/1714395666_88.docx', 'This is my first story for children, i hope you find it good and i\'ll look forward to work with wonder house', NULL, '2024-04-29 13:01:06', '2024-04-29 13:01:06'),
(40, 'Aqsa fathima', '8667747838', 'shaheenibrahim87@gmail.com', 'India', 'English', '11 - 13 years', 'The dying plant', 'The story revolves around a boy named Adam who\'s father is a physician and had invented time machine, however as the time goes he finds out a plant is dying, he and other characters helps it to grow well', 'public/uploads/submission/1714395667_90.docx', 'This is my first story for children, i hope you find it good and i\'ll look forward to work with wonder house', NULL, '2024-04-29 13:01:07', '2024-04-29 13:01:07'),
(41, 'Manvendra Singh', '8860470145', 'om.oddmonk@gmail.com', 'India', 'English', 'Coloring Books', 'Powerful Hanuman - The Coloring Journey to Inner Peace', 'I am thrilled to send you my adult coloring book, \"Powerful Hanuman,\" featuring breathtaking illustrations for every verse in the Hanuman Chalisa. There are a total of 42 hand-drawn demonstrations describing each shloka.', 'public/uploads/submission/1714819792_59.pdf', 'Teaser Link- https://youtube.com/shorts/VYHN7LoSlZ4?feature=share', NULL, '2024-05-04 10:49:53', '2024-05-04 10:49:53'),
(42, 'Debika Marwah', '8527484409', 'debikarc@outlook.com', 'India', 'English', 'Picture Books', 'the spoons and the plates and other poems from my childhood', 'Fun collection of poems for children...ranging from spoons to boots to parks to the moon', 'public/uploads/submission/1715078402_44.pdf', '', NULL, '2024-05-07 10:40:02', '2024-05-07 10:40:02'),
(43, 'Carla Jordan', '5403790096', 'cyj110177@gmail.com', 'United States', 'English', 'Coloring Books', 'Algonquin Adventures', 'Every time I type the synopsis, I receive an error message from this web page.  If you provide an email address, I could mail this to you.', 'public/uploads/submission/1715213773_23.pdf', 'Thank you for considering this unique children\'s coloring book for publication.  Again, this is only a sample of some pages.  If you\'d like to view the full document, please let me know.', NULL, '2024-05-09 00:16:13', '2024-05-09 00:16:13'),
(73, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Aruba', 'English', 'Always Happy Series', 'test', 'test', 'public/uploads/submission/1716184380_95.xlsx', '', NULL, '2024-05-20 05:53:00', '2024-05-20 05:53:00'),
(74, 'test', '9873780649', 'surbhi.saxena@prakashbooks.com', 'India', 'English', 'Novelty Books', 'testing the test to test it', 'test', 'public/uploads/submission/1716185290_61.jpg', 'mmm;', NULL, '2024-05-20 06:08:10', '2024-05-20 06:08:10'),
(84, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', 'public/uploads/submission/1716532514_73.xlsx', 'test', NULL, '2024-05-24 06:35:14', '2024-05-24 06:35:14'),
(88, 'Sateesh Raghuwanshi', '7894561230', 'aasra.sateesh@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'This is test', 'public/uploads/submission/1717566811_83.png', 'This is test', NULL, '2024-06-05 05:53:31', '2024-06-05 05:53:31'),
(89, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', 'public/uploads/submission/1717668188_49.docx', 'test', NULL, '2024-06-06 10:03:08', '2024-06-06 10:03:08'),
(90, 'Deepak', '9999999999', 'TEST@GMAIL.COM', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Synopsis Synopsis', 'public/uploads/submission/1717676324_44.pdf', '', NULL, '2024-06-06 12:18:44', '2024-06-06 12:18:44'),
(91, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', 'public/uploads/submission/1717733603_19.xlsx', '', NULL, '2024-06-07 04:13:23', '2024-06-07 04:13:23'),
(92, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', 'public/uploads/submission/1717737621_33.xls', 'test', NULL, '2024-06-07 05:20:21', '2024-06-07 05:20:21'),
(93, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', 'public/uploads/submission/1718078958_88.xls', 'test', NULL, '2024-06-11 04:09:18', '2024-06-11 04:09:18'),
(94, 'test', '9999999999', 'test@test.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'fsdfdfsd f dfdsf dsf dfdsfdsfewf dfdsfd', NULL, 's dfsd fsdf dfsdfsdfdsf', NULL, '2024-06-12 08:59:25', '2024-06-12 08:59:25'),
(95, 'Test', '9898989898', 'lockedsandbox@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Na', NULL, '', NULL, '2024-06-12 10:26:44', '2024-06-12 10:26:44'),
(96, 'testing', '9999999999', 'TEST@GMAIL.COM', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Synopsis  testing', NULL, '', NULL, '2024-06-12 10:34:08', '2024-06-12 10:34:08'),
(97, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', NULL, 'test', NULL, '2024-06-12 11:53:25', '2024-06-12 11:53:25'),
(98, 'test', '7087895679', 'mehakpreet.kaur@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'hfhfjhjhvjvjhjhjhjhhmn', 'public/uploads/submission/1718270766_63.pdf', 'kllk', NULL, '2024-06-13 09:26:06', '2024-06-13 09:26:06'),
(99, 'test', '9999999999', 'er.prakhar108@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'sdf sfs dfs dfs fdsf sdf\r\n sdfsdf sdfdsf\r\ns dfsdf sdf', NULL, '', NULL, '2024-06-18 12:59:01', '2024-06-18 12:59:01'),
(100, 'Priyan.P', '8610639800', 'priyanpandu55@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'It is a story of a failure boy \r\nWho. Get many problems \r\nAnd torture beating from his father. And in the because of one incident. The things will change', NULL, '', NULL, '2024-06-30 10:31:15', '2024-06-30 10:31:15'),
(101, 'Priyan.P', '8610639800', 'priyanpandu55@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'It is a story of a failure boy \r\nWho. Get many problems \r\nAnd torture beating from his father. And in the because of one incident. The things will change', NULL, '', NULL, '2024-06-30 10:31:50', '2024-06-30 10:31:50'),
(102, 'test', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'nxNKSN', NULL, '', NULL, '2024-07-02 07:18:33', '2024-07-02 07:18:33'),
(103, 'SURBHI', '9873780649', 'surbhi.saxena@prakashbooks.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', NULL, 'test', NULL, '2024-07-02 07:20:38', '2024-07-02 07:20:38'),
(104, 'Test', '4561237895', 'test@mailinator.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', NULL, 'test', NULL, '2024-07-02 13:29:48', '2024-07-02 13:29:48'),
(105, 'Test', '4561237895', 'test@mailinator.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', NULL, 'test', NULL, '2024-07-02 13:29:48', '2024-07-02 13:29:48'),
(106, 'test', '7845629541', 'testadmin@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'test', NULL, 'tes', NULL, '2024-07-02 13:58:31', '2024-07-02 13:58:31'),
(107, 'Vedant.R.J.Chourey', '6268403375', 'vedantchourey99@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'This story is moves around a great scientist of Bharat. Who has lost his family, he tries summoning the power of cosmos, but he never knew his quest will take drastic turn and not only his but all the parallel universe in the existence will be in danger.', 'public/uploads/submission/1720760637_24.pdf', 'My book is already available on amazon KDP. But I really want people to read this story and feel it and I don\'t think there is a more appropriate way of feeling a book than in its physical appearance.', NULL, '2024-07-12 05:03:57', '2024-07-12 05:03:57'),
(108, 'Suzy Shepherd', '8948590076', 'jobs.shuchita@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', '\"Polly the Pollinating Bee\" is a story about a friendly bee named Polly who helps flowers grow. \r\nThrough her adventures, children learn about the important role bees play in nature and how they help plants grow big and strong.', 'public/uploads/submission/1721093954_41.pdf', 'Please note suzy shepherd is my pen name and my real name is shuchita mehra. I have not included the front and back cover. Thanks.', NULL, '2024-07-16 01:39:14', '2024-07-16 01:39:14'),
(109, 'Deepak Arora', '8800549949', 'deepaksta@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'This is for testing purpose.', NULL, '', NULL, '2024-07-18 06:50:08', '2024-07-18 06:50:08'),
(110, 'Ashket Kaur', '9158556692', 'ashketjabinda06@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Kids coloring book, a fun way to learn and enjoy', 'public/uploads/submission/1722332567_92.PNG', '', NULL, '2024-07-30 09:42:47', '2024-07-30 09:42:47'),
(111, 'William Aksel Kuehl', '2698300044', 'williamaksel@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Sixteen pages of Impsters art, and the every day mischief they cause.  Thirty two pages.', NULL, 'I have an illustrated humor book in a pdf format.  The thirty two page book is set in a horizontal from, with an illustration on every other page.  It should be seen as a whole; the text alone cannot convey the gist of the pages.', NULL, '2024-08-06 21:24:06', '2024-08-06 21:24:06'),
(112, 'Prasha Sooful', '0488478947', 'psauthor80@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Ear We Go Again is a humourous and heartfelt picture book dealing with hearing loss.', 'public/uploads/submission/1723441157_95.pdf', '', NULL, '2024-08-12 05:39:17', '2024-08-12 05:39:17'),
(113, 'AVINASH KUMAR SRIVASTAVA', '9801350075', 'curiousbyytes@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'ABC Colouring book for kids , age 2-4 years of age with vibrant pictures, objects and summaries', 'public/uploads/submission/1725291025_18.jpg', '', NULL, '2024-09-02 15:30:25', '2024-09-02 15:30:25'),
(114, 'Vinita Rk', '9136687156', 'radhakrishna.vinita@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'A simple book on embracing your diversity.', 'public/uploads/submission/1726813067_22.pdf', '', NULL, '2024-09-20 06:17:47', '2024-09-20 06:17:47'),
(115, 'Nandhini sriram', '8220500210', 'mail2nannu@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Stress free Bold and easy coloring books for kids & adults', 'public/uploads/submission/1728217955_10.pdf', 'Stress free bold and easy coloring book for kids and adults ,every picture is meticulously hand drawn with immersive care and details', NULL, '2024-10-06 12:32:35', '2024-10-06 12:32:35'),
(116, 'Anda Hou', '0425806665', 'andahou@msn.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'On Boxing Day, a group of carolers were driven away from the palace by the King\'s servant. Can the servant make amends for his actions?', 'public/uploads/submission/1728807089_86.docx', 'Hello again,\r\nMy name is Anda Hou, and I have a new picture book submission for you.\r\n\r\nIn case you\'re wondering, I have not been submitting this manuscript to other agents and publishers. You are the first to have read this.', NULL, '2024-10-13 08:11:29', '2024-10-13 08:11:29'),
(117, 'Anda Hou', '0425806665', 'andahou@msn.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'On Boxing Day, a group of carolers were driven away from the palace by the King\'s servant. Can the servant make amends for his actions?', 'public/uploads/submission/1728807183_60.docx', 'Hello again,\r\nMy name is Anda Hou, and I have a new picture book submission for you.\r\n\r\nIn case you\'re wondering, I have not been submitting this manuscript to other agents and publishers. You are the first to have read this.', NULL, '2024-10-13 08:13:03', '2024-10-13 08:13:03'),
(118, 'pranamya pallavi nilesh purkar', '8380054891', 'nspurkar@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'I have written the famous story of hare and tortoise in two parts. in first part, both compete and tortoise wins. \r\nin second part, both collaborate and their friendship wins.', NULL, 'the story impregnates importance of friendship over competition in children\'s mind. \r\nI am 10 year old by the way and want to be an author. i would be honored if my book is entitled in your precious publication. \r\nWaiting for your positive reply!', NULL, '2024-10-14 16:12:01', '2024-10-14 16:12:01'),
(119, 'pranamya pallavi nilesh purkar', '8380054891', 'nspurkar@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'i have written a story of Hare and tortoise in different perspective. in first part, they compete and tortoise wins. In second part, they collaborate and their friendship wins.', 'public/uploads/submission/1728922738_81.jpg', 'The story will impregnate in minds of kids about friendship rather than competition. \r\nI am a 10 year old kid by the way and i want to be an author. i will be honored to entitle my book in youe esteemed publication. \r\nwaiting for your positive reply', NULL, '2024-10-14 16:18:58', '2024-10-14 16:18:58'),
(120, 'pranamya pallavi nilesh purkar', '8380054891', 'nspurkar@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'i have written a story of Hare and tortoise in different perspective. in first part, they compete and tortoise wins. In second part, they collaborate and their friendship wins.', 'public/uploads/submission/1728922797_72.jpg', 'The story will impregnate in minds of kids about friendship rather than competition. \r\nI am a 10 year old kid by the way and i want to be an author. i will be honored to entitle my book in youe esteemed publication. \r\nwaiting for your positive reply', NULL, '2024-10-14 16:19:57', '2024-10-14 16:19:57'),
(121, 'Saranya Suneesh', '9043839005', 'chenrayan.saranya@outlook.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'A-Z coloring book with illustrations and meanings provides kids a space to learn while coloring. Elders can easily explain the details without referring any additional resource or online.', 'public/uploads/submission/1728980950_12.pdf', '', NULL, '2024-10-15 08:29:10', '2024-10-15 08:29:10'),
(122, 'Swati Mishra', '9930493994', 'swatipmishra24@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'Test', 'public/uploads/submission/1729013020_16.pdf', 'Test', NULL, '2024-10-15 17:23:40', '2024-10-15 17:23:40'),
(123, 'Parkhi Batra', '9987379520', 'parkhi.batra@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'The story, focuses on how challenges should never stop us from pursuing our talents. It also subtly introduces the concept of emotional regulation, helping children understand and manage their emotions while navigating obstacles.', NULL, 'The manuscript is complete and I am currently in talks with an illustrator to bring the visual aspects of the story to life.', NULL, '2024-10-17 15:00:03', '2024-10-17 15:00:03'),
(124, 'Vinita', '9136687156', 'radhakrishna.vinita@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'Please find attached a story titled \'Maya\'s Lunch Box\'', 'public/uploads/submission/1729672647_26.pdf', '', NULL, '2024-10-23 08:37:27', '2024-10-23 08:37:27'),
(125, 'Vinita', '9136687156', 'radhakrishna.vinita@gmail.com', 'India', 'Select a language', 'Select a Category', 'Title of Work', 'Please find attached the story titled \'Maya\'s Lunch box\'', 'public/uploads/submission/1729672719_37.pdf', '', NULL, '2024-10-23 08:38:39', '2024-10-23 08:38:39'),
(126, 'Purvesh mohod', '7028970264', 'drawingrise098@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'I want publish book named Rynor vs malaroth fight in that book a boy who was powerful a demon named Malaroth attack on him but Rynor kill him after 39 years later malaroth came back but again Rynor kill him', NULL, 'Have to publish book named Rynor vs malaroth fight', NULL, '2024-10-24 08:31:04', '2024-10-24 08:31:04'),
(127, 'Chanelle Dwan Correia', '0849195806', 'ckotzeart@gmail.com', 'Select a country', 'Select a language', 'Select a Category', 'Title of Work', 'Adult colouring book illustrator.\r\n\r\nI have over 500 colouring book illustrations available for licensing.  Kindly contact me if you wish to view a wider range of my work.\r\n\r\nKind regards\r\n\r\nChanelle\r\nArtist\r\nSouth africa', 'public/uploads/submission/1730036927_71.png', '', NULL, '2024-10-27 13:48:47', '2024-10-27 13:48:47');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `sort_description` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL,
  `post_by` varchar(250) NOT NULL,
  `description` mediumtext CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `sort_order` int NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `long_description` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `slug`, `title`, `sort_description`, `image`, `post_by`, `description`, `sort_order`, `status`, `deleted_at`, `created_at`, `updated_at`, `long_description`) VALUES
(1, 'pravin-kumar', 'Pravin Kumar', 'Bihar International Trade Organization', 'public/uploads/testimonial/1731490348.jpg', 'President', '<p>Dear All,<br />\r\n<br />\r\nIt is with great pride and responsibility that I address you...</p>', 1, 1, NULL, '2023-07-06 23:30:10', '2024-11-13 12:20:31', '<p>Dear All,<br />\r\n<br />\r\nIt is with great pride and responsibility that I address you as the President of the Bihar International Trade Organisation (BITO). Under leadership of Shri Chirag Paswan , as we embark on a transformative journey, BITO is set to drive significant change in the social, economic, and cultural landscapes of Bihar.<br />\r\n<br />\r\nOur mission is deeply rooted in the abundant potential of Bihar&mdash;a state rich in resources, culture, and talent. Recognizing the untapped capabilities of our local industries and the creativity of our entrepreneurs, BITO is dedicated to creating an environment where these elements can flourish. Our strategic support and development initiatives are focused on strengthening local industries and igniting a startup revolution in our state. This commitment to nurturing local businesses and startups is at the heart of our strategy to enhance employment and economic growth in Bihar.<br />\r\n<br />\r\nAdditionally, BITO is committed to promoting Bihari culture globally. Our rich heritage, spanning centuries, is deserving of global recognition. By showcasing our traditions, arts, and festivals internationally, we aim to instill a sense of pride among Biharis worldwide and establish connections that go beyond borders. This initiative to champion our culture not only enhances Bihar&#39;s global image but also attracts tourism and international investments, benefiting our local economy.<br />\r\n<br />\r\nThe path ahead is filled with both opportunities and challenges. With the combined efforts of our members, partners, and the broader community, I am confident in BITO&#39;s role in shaping a brighter future for Bihar. Let us move forward with determination to transform Bihar into a hub of industry, innovation, and cultural pride.<br />\r\n<br />\r\nJoin us in celebrating &quot;Bihari Asmita,&quot; where we take pride in declaring, &quot;Yes, I am Bihari.&quot; This affirmation encapsulates the essence of Bihar&#39;s cultural richness and the significant contributions of its people on the global stage.<br />\r\n<br />\r\nTogether, let&#39;s embrace this journey of transformation and make a lasting impact.<br />\r\n<br />\r\nBest regards,<br />\r\nPravin Kumar</p>'),
(2, 'about-blog', 'About Blog', 'About Us Blog', 'public/uploads/blog/1690883420.png', 'The Big Writer', 'Wonder House Books is more than just a publishing programme, it is a philosophy.\r\n\r\nWe understand that a child\'s early years are the most important and this is when they learn the most about the world around them. Books play a vital role in building the foundations for learning, and exposure to quality books from an early age helps to develop an enquiring mind and a lifelong love of reading.\r\n\r\nWonder House Books an award-winning publisher has a history of creating innovative, for children from 0-7 years that promote learning through play. Books that fully reflect our diverse society in terms of heritage, disability, gender and family.\\\r\n\r\nWonder House Books are loved by parents, teachers and, most importantly, children all over the world.', 2, 0, '2023-11-16 06:16:04', '2023-07-19 04:33:03', '2023-11-16 06:16:04', '0'),
(3, 'amaresh-mishra', 'Amaresh Mishra', 'Bihar International Trade Organization', 'public/uploads/testimonial/1731493452.jpg', 'Secretary-General', '<p>Dear All,<br />\r\n<br />\r\nAs Secretary General of BITO, I am proud to lead an organization...</p>', 1, 1, NULL, '2024-01-30 09:20:41', '2024-11-13 12:20:58', '<p>Dear All,<br />\r\n<br />\r\nAs Secretary General of BITO, I am proud to lead an organization that drives innovation and collaboration in our industry. Our commitment to advancing technology and fostering global partnerships has never been stronger. Together, we will continue to overcome challenges and create opportunities for sustainable growth and development.</p>'),
(4, 'clr-jeff-whitton-faicd', 'Clr. Jeff Whitton FAICD', 'Bihar International Trade Organization', 'public/uploads/testimonial/1731498792.jpg', 'Honorary Global Advisor', '<p><b>Dear All,</b> <br> <br>Clr. Jeff Whitton FAICD, is an esteemed Australian businessman...</p>', 3, 1, NULL, '2024-11-13 11:53:12', '2024-11-13 12:21:24', '<p>Clr. Jeff Whitton FAICD, is an esteemed Australian businessman and entrepreneur with over three decades of industry leadership. With 20 years of dedicated service as a Local Government councillor, Jeff has been a driving force in public service and community development, leaving a lasting impact on the communities he serves. His exceptional career spans 40 years in Digital Technology, Cybersecurity, and Information Intelligence, making him a formidable expert in these critical domains.<br />\r\n<br />\r\nAs a seasoned CEO and Board Chairman, Jeff is celebrated for his visionary leadership and strategic acumen. He is a passionate advocate for Regional Australia, where he has been a relentless champion for initiatives that drive social, economic, and cultural transformation. Jeff&rsquo;s unwavering commitment to progress underscores his reputation as a trailblazer who is deeply invested in shaping the future of Australia&rsquo;s regional landscapes.<br />\r\n<br />\r\nIn his capacity as a Global Advisor, Jeff Whitton is set to lead and fortify the burgeoning partnership between Australia and India, with a special focus on the Bihar International Trade Organisation (BITO). At the core of BITO&rsquo;s mission is the powerful concept of Bihari Asmita, which champions the vibrant cultural identity and pride of Bihar. Jeff is poised to advance BITO&rsquo;s vision, propelling the revival and celebration of Bihar&rsquo;s rich traditions, arts, crafts, and heritage. He recognizes that this cultural renaissance is vital for cultivating a dynamic community of entrepreneurs and innovators who are rooted in their heritage while striving for global excellence.<br />\r\n<br />\r\nJeff&rsquo;s leadership will be a catalyst in forging strong collaborations that bridge the cultural and economic ties between Australia and India. His visionary approach will ensure that BITO continues to ignite a deep sense of pride and belonging among Biharis, empowering them to excel on the global stage. Under his stewardship, the relationship between these two great nations, particularly through BITO&rsquo;s initiatives, is destined to flourish, creating transformative opportunities that celebrate and elevate the rich cultural legacy of Bihar.</p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutnew`
--
ALTER TABLE `aboutnew`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `actionpoints`
--
ALTER TABLE `actionpoints`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `album_images`
--
ALTER TABLE `album_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bodies`
--
ALTER TABLE `bodies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cms`
--
ALTER TABLE `cms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cmsheader`
--
ALTER TABLE `cmsheader`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactuses`
--
ALTER TABLE `contactuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery_images`
--
ALTER TABLE `gallery_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gallery_id` (`gallery_id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `homepage`
--
ALTER TABLE `homepage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `initiatives`
--
ALTER TABLE `initiatives`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `objective`
--
ALTER TABLE `objective`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `preferred_languages`
--
ALTER TABLE `preferred_languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roadmap`
--
ALTER TABLE `roadmap`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roadmaps`
--
ALTER TABLE `roadmaps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submissions`
--
ALTER TABLE `submissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutnew`
--
ALTER TABLE `aboutnew`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `actionpoints`
--
ALTER TABLE `actionpoints`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `album_images`
--
ALTER TABLE `album_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bodies`
--
ALTER TABLE `bodies`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `chapter`
--
ALTER TABLE `chapter`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cms`
--
ALTER TABLE `cms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cmsheader`
--
ALTER TABLE `cmsheader`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contactuses`
--
ALTER TABLE `contactuses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=662;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `gallery_images`
--
ALTER TABLE `gallery_images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `homepage`
--
ALTER TABLE `homepage`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `initiatives`
--
ALTER TABLE `initiatives`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `objective`
--
ALTER TABLE `objective`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `preferred_languages`
--
ALTER TABLE `preferred_languages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roadmap`
--
ALTER TABLE `roadmap`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roadmaps`
--
ALTER TABLE `roadmaps`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `submissions`
--
ALTER TABLE `submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gallery_images`
--
ALTER TABLE `gallery_images`
  ADD CONSTRAINT `gallery_images_ibfk_1` FOREIGN KEY (`gallery_id`) REFERENCES `galleries` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
