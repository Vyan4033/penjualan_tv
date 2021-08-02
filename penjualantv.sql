-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2021 at 06:40 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `penjualantv`
--

-- --------------------------------------------------------

--
-- Table structure for table `televisi`
--

CREATE TABLE `televisi` (
  `id` varchar(250) NOT NULL,
  `nama` varchar(5000) NOT NULL,
  `harga` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `televisi`
--

INSERT INTO `televisi` (`id`, `nama`, `harga`) VALUES
('01', 'Samsung LED Curved TV 49\"', 'Rp. 6.500.000'),
('02', 'Sony LED TV 32\"', 'Rp. 2.500.000'),
('03', 'Sony LED TV 48\"', 'Rp. 5.300.000'),
('04', 'LG LED TV 55\"', 'Rp. 8.250.000'),
('05', 'Panasonic LED TV 32\"', 'Rp. 1.700.000'),
('06', 'Sharp LED TV 32\"', 'Rp. 1.800.000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `televisi`
--
ALTER TABLE `televisi`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
