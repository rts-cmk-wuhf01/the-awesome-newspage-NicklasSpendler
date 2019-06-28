-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2019 at 08:21 AM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `theawesomenewspage`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `article_title` varchar(128) NOT NULL,
  `article_text` varchar(8000) NOT NULL,
  `article_summary` varchar(500) NOT NULL,
  `fk_img_id` int(11) NOT NULL,
  `article_postdate` datetime NOT NULL,
  `article_likes` int(11) NOT NULL,
  `fk_category_id` int(11) NOT NULL,
  `fk_author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`article_id`, `article_title`, `article_text`, `article_summary`, `fk_img_id`, `article_postdate`, `article_likes`, `fk_category_id`, `fk_author_id`) VALUES
(1, 'Mega fedt bibliotek mand!', 'Der var engang.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus. In posuere luctus sem, ac dapibus felis semper quis. Integer ex ante, semper at velit nec, ultrices aliquet diam. Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla, augue eget lacinia tincidunt, neque leo maximus sem, sed tristique enim orci id quam.\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor.\r\nRelated: Facebook announces changes to combat election meddling\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagi ttis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum pr imis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor. ', 'Omega fed bibliotek fik nye bøger!!!', 1, '2019-06-07 00:00:00', 5, 3, 8),
(2, 'Mega Flot Villahus Dude', 'Og så med vinduer og det hele! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus. In posuere luctus sem, ac dapibus felis semper quis. Integer ex ante, semper at velit nec, ultrices aliquet diam. Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla, augue eget lacinia tincidunt, neque leo maximus sem, sed tristique enim orci id quam.\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor.\r\nRelated: Facebook announces changes to combat election meddling\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagi ttis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum pr imis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor. ', 'Mega flot villahus med flotte vinduer', 2, '2019-06-08 00:00:00', 6, 1, 1),
(3, 'Voldsom flot mønt!', 'Den var mega flot og mere værd end din. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus. In posuere luctus sem, ac dapibus felis semper quis. Integer ex ante, semper at velit nec, ultrices aliquet diam. Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla, augue eget lacinia tincidunt, neque leo maximus sem, sed tristique enim orci id quam.\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor.\r\nRelated: Facebook announces changes to combat election meddling\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagi ttis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum pr imis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor. ', 'En mønt som er rund', 3, '2019-06-11 00:00:00', 100, 1, 2),
(4, 'arbejde der hjemme n shit', 'På bærbar og hele lortet... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus. In posuere luctus sem, ac dapibus felis semper quis. Integer ex ante, semper at velit nec, ultrices aliquet diam. Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla, augue eget lacinia tincidunt, neque leo maximus sem, sed tristique enim orci id quam.\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor.\r\nRelated: Facebook announces changes to combat election meddling\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagi ttis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum pr imis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor. ', 'Og så var bærbaren ikke engang en mac!', 4, '2019-06-04 00:00:00', 63, 3, 4),
(5, 'Mega ved ferie dude', 'Med sol n shit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, purus imperdiet volutpat tincidunt, eros sem mollis quam, ut placerat urna neque at massa. Proin vitae pulvinar justo. Donec vel placerat enim, at ultricies risus. In posuere luctus sem, ac dapibus felis semper quis. Integer ex ante, semper at velit nec, ultrices aliquet diam. Donec gravida non metus blandit facilisis. Cras tincidunt, lorem aliquam molestie eleifend, libero dui volutpat dui, nec sodales massa libero ut metus. Mauris pretium elit ut dapibus consequat. Nam ut lorem nec sem dignissim gravida. Duis fringilla, augue eget lacinia tincidunt, neque leo maximus sem, sed tristique enim orci id quam.\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accumsan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagittis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor.\r\nRelated: Facebook announces changes to combat election meddling\r\n\r\nDonec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellentesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien. Aliquam erat volutpat. Aliquam placerat, est quis sagi ttis tincidunt, ipsum eros posuere mi, ut finibus quam sem eget ex. Interdum et malesuada fames ac ante ipsum pr imis in faucibus. Donec commodo quis enim ac auctor. Ut et mollis felis, sit amet ultricies est. Suspendisse sed faucibus tortor. ', 'Soler sig n shit, i solen!', 6, '2019-06-20 00:00:00', 333, 4, 7),
(6, 'Pisse fed Politik', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore at voluptatem ad amet nobis quasi alias consequuntur totam nisi iusto, beatae, ullam commodi repellendus esse temporibus est a quis autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste magnam at quisquam ducimus sed, debitis, maxime repellat, odio cupiditate facilis? Et eveniet veniam qui a in eligendi, neque accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore deserunt nostrum, reiciendis libero reprehenderit rerum non tempore dicta qui temporibus, adipisci earum esse atque porro! Vitae modi molestias similique blanditiis?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 5, '2019-06-14 00:00:00', 36, 2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(32) NOT NULL,
  `fk_img_id` int(11) NOT NULL,
  `author_position` varchar(32) NOT NULL,
  `author_about` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`author_id`, `author_name`, `fk_img_id`, `author_position`, `author_about`) VALUES
(1, 'James  Williams', 7, '1', 'Lorem About Omegalul'),
(2, 'Christinne Smith', 8, '1', 'Lorem About Omegalul'),
(3, 'Alicia Dormund', 9, '1', ''),
(4, 'Steve Duncan', 10, '1', 'author about Omega lul'),
(5, 'Hemming Paulsen', 11, '1', 'Hemming er sej'),
(6, 'Ellen Hansen', 12, '1', 'Ellen er en flot dame'),
(7, 'Dorthe Jensen', 13, '1', 'Dorthe smiley fjæs'),
(8, 'Arne Lukøje', 14, '1', 'Arne han er for cool');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `img_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `img_src` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`img_id`, `name`, `img_src`) VALUES
(1, 'Bibliotek', '1.jpg'),
(2, 'Villahus', '2.jpg'),
(3, 'Mønt', '3.jpg'),
(4, 'ArbejdsComputer', '4.jpg'),
(5, 'mødeLokale', '5.jpg'),
(6, 'solerSigIStrand', '6.jpg'),
(7, 'ProfilbilledeJames', 't1.jpg'),
(8, 'PofilbilledeChistinne', 't2.jpg'),
(9, 'ProfilbilledeAlicia', 't3.jpg'),
(10, 'ProfilbilledeSteve', 't4.jpg'),
(11, 'ProfilbilledeHemming', 't5.jpg'),
(12, 'ProfilbilledeEllen', 't6.jpg'),
(13, 'ProfilbilledeDorthe', 't7.jpg'),
(14, 'ProfilbilledeArne', 't8.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL,
  `message_name` varchar(25) NOT NULL,
  `message_email` varchar(25) NOT NULL,
  `message_subject` varchar(25) NOT NULL,
  `message_text` varchar(1000) NOT NULL,
  `message_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `message_name`, `message_email`, `message_subject`, `message_text`, `message_date`) VALUES
(1, 'asdf', 'hemming@gmail.com', 'asdf', 'asdf', '2019-06-18 09:27:34'),
(2, 'asdf', 'hemming@gmail.com', 'asdf', 'asdf', '2019-06-18 09:30:19'),
(3, 'asdf', 'hemming@gmail.com', 'asdf', 'asdf', '2019-06-18 09:30:21'),
(4, 'asdf', 'hemming@gmail.com', 'asdf', 'asdf', '2019-06-18 09:30:24');

-- --------------------------------------------------------

--
-- Table structure for table `newscategories`
--

CREATE TABLE `newscategories` (
  `category_id` int(11) NOT NULL,
  `categoryName` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newscategories`
--

INSERT INTO `newscategories` (`category_id`, `categoryName`) VALUES
(1, 'Finance'),
(2, 'Politics'),
(3, 'Health'),
(4, 'Travel'),
(5, 'Breaking News'),
(6, 'Buisness'),
(7, 'Technology'),
(8, 'Sport'),
(9, 'asdf');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `position_id` int(11) NOT NULL,
  `positionName` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`position_id`, `positionName`) VALUES
(1, 'Senior Editor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`);

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `newscategories`
--
ALTER TABLE `newscategories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`position_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newscategories`
--
ALTER TABLE `newscategories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `position_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
