-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2024 at 03:28 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance_tbls`
--

CREATE TABLE `attendance_tbls` (
  `attendanceId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `date` date NOT NULL,
  `clockInTime` varchar(10) NOT NULL,
  `clockOutTime` varchar(10) NOT NULL,
  `hoursWorked` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employeeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance_tbls`
--

INSERT INTO `attendance_tbls` (`attendanceId`, `date`, `clockInTime`, `clockOutTime`, `hoursWorked`, `createdAt`, `updatedAt`, `employeeId`) VALUES
('211711201294109', '2024-03-22', '10:00', '17:00', '7.00', '2024-03-23 13:41:34', '2024-03-23 13:41:34', '101708726277768'),
('211711201747571', '2024-03-22', '10:00', '17:00', '7.00', '2024-03-23 13:49:07', '2024-03-23 13:49:07', '101708726792469'),
('211711277528269', '2024-03-24', '10:00', '17:00', '7.00', '2024-03-24 10:52:08', '2024-03-24 10:52:08', '101708726277768'),
('211711287073307', '2024-03-24', '10:00', '17:00', '7.00', '2024-03-24 13:31:13', '2024-03-24 13:31:13', '101708726792469'),
('211711470914285', '2024-03-25', '10:00', '17:00', '7.00', '2024-03-26 16:35:14', '2024-03-26 16:35:14', '101708726277768'),
('211711470919566', '2024-03-25', '10:00', '17:00', '7.00', '2024-03-26 16:35:19', '2024-03-26 16:35:19', '101708726792469'),
('211711470925632', '2024-03-25', '10:00', '17:00', '7.00', '2024-03-26 16:35:25', '2024-03-26 16:35:25', '101708727427325'),
('211711470935064', '2024-03-25', '10:00', '17:00', '7.00', '2024-03-26 16:35:35', '2024-03-26 16:35:35', '101708862300982'),
('211711470942389', '2024-03-25', '10:00', '17:00', '7.00', '2024-03-26 16:35:42', '2024-03-26 16:35:42', '101708948491660'),
('211711470994074', '2024-03-25', '10:00', '17:00', '7.00', '2024-03-26 16:36:34', '2024-03-26 16:36:34', '101708948665092'),
('211711471092879', '2024-03-26', '10:00', '17:00', '7.00', '2024-03-26 16:38:12', '2024-03-26 16:38:12', '101708726277768'),
('211711471095139', '2024-03-26', '10:00', '17:00', '7.00', '2024-03-26 16:38:15', '2024-03-26 16:38:15', '101708726792469'),
('211711471097592', '2024-03-26', '10:00', '17:00', '7.00', '2024-03-26 16:38:17', '2024-03-26 16:38:17', '101708727427325'),
('211711908324485', '2024-04-01', '10:00', '17:00', '7.00', '2024-03-31 18:05:24', '2024-03-31 18:05:24', '101708726277768'),
('211711908326817', '2024-04-01', '10:00', '17:00', '7.00', '2024-03-31 18:05:26', '2024-03-31 18:05:26', '101708726792469'),
('211711908329906', '2024-04-01', '10:00', '17:00', '7.00', '2024-03-31 18:05:29', '2024-03-31 18:05:29', '101708862300982'),
('211711908333457', '2024-04-01', '10:00', '17:00', '7.00', '2024-03-31 18:05:33', '2024-03-31 18:05:33', '101711908268002'),
('211711991149260', '2024-04-01', '10:00', '17:00', '7.00', '2024-04-01 17:05:49', '2024-04-01 17:05:49', '101708727427325'),
('211711991151402', '2024-04-01', '10:00', '17:00', '7.00', '2024-04-01 17:05:51', '2024-04-01 17:05:51', '101708948491660'),
('211711991153577', '2024-04-01', '10:00', '17:00', '7.00', '2024-04-01 17:05:53', '2024-04-01 17:05:53', '101708948665092'),
('211711991155995', '2024-04-01', '10:00', '17:00', '7.00', '2024-04-01 17:05:55', '2024-04-01 17:05:55', '101709123153348'),
('211711991160764', '2024-04-01', '10:00', '17:00', '7.00', '2024-04-01 17:06:00', '2024-04-01 17:06:00', '101710538276279'),
('211712333358703', '2024-04-05', '10:00', '17:00', '7.00', '2024-04-05 16:09:18', '2024-04-05 16:09:18', '101708726277768'),
('211714393281341', '2024-04-29', '10:00', '17:00', '7.00', '2024-04-29 12:21:21', '2024-04-29 12:21:21', '101708726277768'),
('211714393283628', '2024-04-29', '10:00', '17:00', '7.00', '2024-04-29 12:21:23', '2024-04-29 12:21:23', '101708726792469'),
('211714393285823', '2024-04-29', '10:00', '17:00', '7.00', '2024-04-29 12:21:25', '2024-04-29 12:21:25', '101708727427325'),
('211714394994696', '2024-03-13', '10:00', '17:00', '7.00', '2024-04-29 12:49:54', '2024-04-29 12:49:54', '101708726277768'),
('211714395004328', '2024-03-13', '10:00', '17:00', '7.00', '2024-04-29 12:50:04', '2024-04-29 12:50:04', '101708726792469'),
('211714395013034', '2024-03-15', '10:00', '17:00', '7.00', '2024-04-29 12:50:13', '2024-04-29 12:50:13', '101708727427325'),
('211714395019274', '2024-03-15', '10:00', '17:00', '7.00', '2024-04-29 12:50:19', '2024-04-29 12:50:19', '101708726792469'),
('211714395026404', '2024-03-15', '10:00', '17:00', '7.00', '2024-04-29 12:50:26', '2024-04-29 12:50:26', '101708726277768'),
('211714396595226', '2024-03-06', '10:00', '17:00', '7.00', '2024-04-29 13:16:35', '2024-04-29 13:16:35', '101708726277768'),
('211714396602617', '2024-03-08', '10:00', '17:00', '7.00', '2024-04-29 13:16:42', '2024-04-29 13:16:42', '101708726792469'),
('211714396610848', '2024-03-03', '10:00', '17:00', '7.00', '2024-04-29 13:16:50', '2024-04-29 13:16:50', '101708727427325'),
('211714396649379', '2024-03-01', '10:00', '17:00', '7.00', '2024-04-29 13:17:29', '2024-04-29 13:17:29', '101708726277768'),
('211714396655568', '2024-03-01', '10:00', '17:00', '7.00', '2024-04-29 13:17:35', '2024-04-29 13:17:35', '101708726792469'),
('211714396660635', '2024-03-01', '10:00', '17:00', '7.00', '2024-04-29 13:17:40', '2024-04-29 13:17:40', '101708727427325'),
('211714396667634', '2024-03-01', '10:00', '17:00', '7.00', '2024-04-29 13:17:47', '2024-04-29 13:17:47', '101708862300982'),
('211714396676659', '2024-03-02', '10:00', '17:00', '7.00', '2024-04-29 13:17:56', '2024-04-29 13:17:56', '101708726277768'),
('211714396681606', '2024-03-02', '10:00', '17:00', '7.00', '2024-04-29 13:18:01', '2024-04-29 13:18:01', '101708726792469'),
('211714397462995', '2024-04-28', '10:00', '17:00', '7.00', '2024-04-29 13:31:02', '2024-04-29 13:31:02', '101708726277768'),
('211714397468038', '2024-04-28', '10:00', '17:00', '7.00', '2024-04-29 13:31:08', '2024-04-29 13:31:08', '101708726792469'),
('211714397474112', '2024-04-28', '10:00', '17:00', '7.00', '2024-04-29 13:31:14', '2024-04-29 13:31:14', '101708727427325'),
('211714397479470', '2024-04-28', '10:00', '17:00', '7.00', '2024-04-29 13:31:19', '2024-04-29 13:31:19', '101708862300982'),
('211714397485961', '2024-04-28', '10:00', '17:00', '7.00', '2024-04-29 13:31:25', '2024-04-29 13:31:25', '101708948491660'),
('211714570852491', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:40:52', '2024-05-01 13:40:52', '101708726277768'),
('211714570867083', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:41:07', '2024-05-01 13:41:07', '101708726792469'),
('211714570873104', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:41:13', '2024-05-01 13:41:13', '101708727427325'),
('211714570878123', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:41:18', '2024-05-01 13:41:18', '101708862300982'),
('211714570884624', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:41:24', '2024-05-01 13:41:24', '101708948491660'),
('211714570889014', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:41:29', '2024-05-01 13:41:29', '101708948665092'),
('211714570893504', '2024-05-02', '10:00', '17:00', '7.00', '2024-05-01 13:41:33', '2024-05-01 13:41:33', '101709123153348'),
('211715027060597', '2024-05-07', '10:00', '17:00', '7.00', '2024-05-06 20:24:20', '2024-05-06 20:24:20', '101708726277768'),
('211715027064310', '2024-05-07', '10:00', '17:00', '7.00', '2024-05-06 20:24:24', '2024-05-06 20:24:24', '101708726792469'),
('211715027065877', '2024-05-07', '10:00', '17:00', '7.00', '2024-05-06 20:24:25', '2024-05-06 20:24:25', '101708727427325'),
('211715027067781', '2024-05-07', '10:00', '17:00', '7.00', '2024-05-06 20:24:27', '2024-05-06 20:24:27', '101708862300982'),
('211715027069506', '2024-05-07', '10:00', '17:00', '7.00', '2024-05-06 20:24:29', '2024-05-06 20:24:29', '101708948491660'),
('211715027073463', '2024-05-07', '10:00', '17:00', '7.00', '2024-05-06 20:24:33', '2024-05-06 20:24:33', '101708948665092'),
('211715027093701', '2024-05-06', '10:00', '17:00', '7.00', '2024-05-06 20:24:53', '2024-05-06 20:24:53', '101708726277768'),
('211715027098243', '2024-05-06', '10:00', '17:00', '7.00', '2024-05-06 20:24:58', '2024-05-06 20:24:58', '101708726792469'),
('211715027171421', '2024-05-06', '10:00', '17:00', '7.00', '2024-05-06 20:26:11', '2024-05-06 20:26:11', '101708727427325'),
('211715027176174', '2024-05-06', '10:00', '17:00', '7.00', '2024-05-06 20:26:16', '2024-05-06 20:26:16', '101708862300982'),
('211715027192687', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:26:32', '2024-05-06 20:26:32', '101708726277768'),
('211715027196903', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:26:36', '2024-05-06 20:26:36', '101708726792469'),
('211715027202273', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:26:42', '2024-05-06 20:26:42', '101708727427325'),
('211715027206597', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:26:46', '2024-05-06 20:26:46', '101708862300982'),
('211715027211433', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:26:51', '2024-05-06 20:26:51', '101708948491660'),
('211715027218017', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:26:58', '2024-05-06 20:26:58', '101708948665092'),
('211715027225772', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:27:05', '2024-05-06 20:27:05', '101709123153348'),
('211715027232161', '2024-05-05', '10:00', '17:00', '7.00', '2024-05-06 20:27:12', '2024-05-06 20:27:12', '101710538276279'),
('211715171797088', '2024-05-08', '10:00', '17:00', '7.00', '2024-05-08 12:36:37', '2024-05-08 12:36:37', '101708726277768'),
('211715171799641', '2024-05-08', '10:00', '17:00', '7.00', '2024-05-08 12:36:39', '2024-05-08 12:36:39', '101708726792469'),
('211715171801737', '2024-05-08', '10:00', '17:00', '7.00', '2024-05-08 12:36:41', '2024-05-08 12:36:41', '101708727427325'),
('211715171803849', '2024-05-08', '10:00', '17:00', '7.00', '2024-05-08 12:36:43', '2024-05-08 12:36:43', '101708862300982'),
('211715171824086', '2024-05-08', '10:00', '15:00', '5.00', '2024-05-08 12:37:04', '2024-05-08 12:37:04', '101708948491660'),
('211715262078443', '2024-05-09', '10:00', '17:00', '7.00', '2024-05-09 13:41:18', '2024-05-09 13:41:18', '101708726277768'),
('211715262090657', '2024-05-09', '10:00', '17:00', '7.00', '2024-05-09 13:41:30', '2024-05-09 13:41:30', '101708726792469'),
('211715262092544', '2024-05-09', '10:00', '17:00', '7.00', '2024-05-09 13:41:32', '2024-05-09 13:41:32', '101708727427325'),
('211715262094753', '2024-05-09', '10:00', '17:00', '7.00', '2024-05-09 13:41:34', '2024-05-09 13:41:34', '101708862300982'),
('211715262096539', '2024-05-09', '10:00', '17:00', '7.00', '2024-05-09 13:41:36', '2024-05-09 13:41:36', '101708948491660'),
('211715347449737', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:09', '2024-05-10 13:24:09', '101708726277768'),
('211715347451942', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:11', '2024-05-10 13:24:11', '101708726792469'),
('211715347453732', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:13', '2024-05-10 13:24:13', '101708727427325'),
('211715347455672', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:15', '2024-05-10 13:24:15', '101708862300982'),
('211715347457794', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:17', '2024-05-10 13:24:17', '101708948491660'),
('211715347461754', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:21', '2024-05-10 13:24:21', '101708948665092'),
('211715347463807', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:23', '2024-05-10 13:24:23', '101709123153348'),
('211715347465784', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:25', '2024-05-10 13:24:25', '101710538276279'),
('211715347467442', '2024-05-10', '10:00', '17:00', '7.00', '2024-05-10 13:24:27', '2024-05-10 13:24:27', '101711908268002');

-- --------------------------------------------------------

--
-- Table structure for table `department_tbls`
--

CREATE TABLE `department_tbls` (
  `departmentId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `departmentName` varchar(80) NOT NULL,
  `addedBy` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department_tbls`
--

INSERT INTO `department_tbls` (`departmentId`, `departmentName`, `addedBy`, `createdAt`, `updatedAt`) VALUES
('811708709738184', 'Accounting', 'Alvi Hossain', '2024-02-23 17:35:38', '2024-02-23 17:35:38'),
('811708709809040', 'Finance', 'Alvi Hossain', '2024-02-23 17:36:49', '2024-02-23 17:36:49'),
('811708709810862', 'IT', 'Alvi Hossain', '2024-02-23 17:36:50', '2024-02-23 17:36:50'),
('811708710123952', 'Operations Department', 'Alvi Hossain', '2024-02-23 17:42:03', '2024-02-23 17:42:03'),
('811708710130903', 'Sales', 'Alvi Hossain', '2024-02-23 17:42:10', '2024-02-23 17:42:10'),
('811708710142436', 'Purchasing', 'Alvi Hossain', '2024-02-23 17:42:22', '2024-02-23 17:42:22'),
('811708710156044', 'Research and Development', 'Alvi Hossain', '2024-02-23 17:42:36', '2024-02-23 17:42:36'),
('811708710168617', 'Customer Service', 'Alvi Hossain', '2024-02-23 17:42:48', '2024-02-23 17:42:48');

-- --------------------------------------------------------

--
-- Table structure for table `employee_tbls`
--

CREATE TABLE `employee_tbls` (
  `employeeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(50) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `contactNo` varchar(50) NOT NULL,
  `employeeStatus` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `stateName` varchar(20) NOT NULL,
  `departmentName` varchar(50) NOT NULL,
  `positionName` varchar(50) NOT NULL,
  `hiringDate` date NOT NULL,
  `terminationDate` date NOT NULL,
  `image_url` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee_tbls`
--

INSERT INTO `employee_tbls` (`employeeId`, `email`, `fname`, `lname`, `contactNo`, `employeeStatus`, `dob`, `gender`, `address`, `stateName`, `departmentName`, `positionName`, `hiringDate`, `terminationDate`, `image_url`, `createdAt`, `updatedAt`) VALUES
('101708726277768', 'fahmid@gmail.com', 'Fahmid', 'Kibria', '01785928463', 'Active', '1999-01-28', 'Male', 'Motijheel Dhaka, Bangladesh', 'Dhaka', 'Accounting', 'Supervisor', '2024-03-04', '2024-12-28', 'public/employeeProfile/101708726277768.jpeg', '2024-02-23 22:11:17', '2024-03-26 16:29:57'),
('101708726792469', 'newazbenalam@gmail.com', 'Newaz', 'Ben Alam', '01989248993', 'Active', '1999-02-13', 'Male', 'Bashundhara R/A, Dhaka, Bangladesh', 'Dhaka', 'Finance', 'Project Manager', '2024-02-27', '2024-03-26', 'public/employeeProfile/101708726792469.jpeg', '2024-02-23 22:19:52', '2024-03-25 14:24:58'),
('101708727427325', 'ray@yahoo.com', 'Ray', 'Almond', '01782946573', 'Active', '1995-02-13', 'Male', '11-A Dhanmondi, Dhaka Bangladesh', 'Dhaka', 'IT', 'Office Manager', '2024-02-20', '2024-01-28', 'public/employeeProfile/101708727427325.jpeg', '2024-02-23 22:30:27', '2024-03-15 22:08:34'),
('101708862300982', 'farhanferdous@gmail.com', 'Farhan', 'Ferdous', '01636687407', 'Active', '2002-02-12', 'Male', '5/A Kakrail, Dhaka, Bangladesh', 'Dhaka', 'IT', 'Supervisor', '2024-02-25', '2024-05-30', 'public/employeeProfile/101708862300982.jpeg', '2024-02-25 11:58:20', '2024-02-25 11:58:20'),
('101708948491660', 'daniel@gmail.com', 'Daniel', 'Burton', '01394759102', 'Active', '1993-02-20', 'Male', '5-C Gulshan, Dhaka, Bangladesh', 'Dhaka', 'Finance', 'Office Manager', '2024-02-22', '2024-08-20', 'public/employeeProfile/101708948491660.jpeg', '2024-02-26 11:54:51', '2024-03-17 18:19:52'),
('101708948665092', 'asif_anh@gmail.com', 'Asif', 'Noor Hossain', '01713401968', 'Active', '1992-02-12', 'Male', '5 SegunBagicha, Concord, Flat - 16B', 'Dhaka', 'IT', 'Finance Manager', '2024-02-26', '2024-02-26', 'public/employeeProfile/101708948665092.jpeg', '2024-02-26 11:57:45', '2024-02-26 11:57:45'),
('101709123153348', 'franklin@gmail.com', 'Franklin', 'Keith', '01948492798', 'Leave', '1993-01-28', 'Male', '2-C Banani, Dhaka, Bangladesh', 'Dhaka', 'Finance', 'Product Manager', '2024-02-14', '2024-02-11', 'public/employeeProfile/101709123153348.jpeg', '2024-02-28 12:25:53', '2024-03-24 13:37:52'),
('101710538276279', 'sasha@gmail.com', 'Sasha', 'Clay', '01464164789', 'Active', '2000-03-17', 'Female', '7-A Gulshan, Dhaka, Bangladesh', 'Dhaka', 'IT', 'Chief Executive Officer', '2024-03-19', '2024-03-28', 'public/employeeProfile/101710538276279.jpeg', '2024-03-15 21:31:16', '2024-03-15 22:08:03'),
('101711908268002', 'mehedi@gmail.com', 'Mehedi Noor', 'Khan', '01818475934', 'Active', '1999-01-02', 'Male', 'Bashundhara Block', 'Dhaka', 'IT', 'Project Manager', '2024-04-01', '2025-04-01', 'public/employeeProfile/101711908268002.jpeg', '2024-03-31 18:04:28', '2024-03-31 18:04:28');

-- --------------------------------------------------------

--
-- Table structure for table `hrmuser_tbls`
--

CREATE TABLE `hrmuser_tbls` (
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(30) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image_url` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hrmuser_tbls`
--

INSERT INTO `hrmuser_tbls` (`userId`, `email`, `fname`, `lname`, `password`, `image_url`, `createdAt`, `updatedAt`) VALUES
('911709125370160', 'alvinoorhossain@gmail.com', 'Alvi', 'Hossain', '$2a$12$kIlVezCNu5KBlH1iCzvFfe/Q77vrnyGdgY/89hpGY5R17CwVMzt7a', 'public/hrmProfile/911709125370160.jpeg', '2024-02-28 13:02:50', '2024-02-28 13:02:50'),
('911714987897361', 'marshall@gmail.com', 'Marshall', 'Gunnell', '$2a$12$hDVEDKV4t1q1fTM/GEgjbuqqEyjiVErQq3eWDlbJM7l60vIysHaOy', 'public/hrmProfile/911714987897361.jpeg', '2024-05-06 09:31:37', '2024-05-06 09:31:37');

-- --------------------------------------------------------

--
-- Table structure for table `leave_tbls`
--

CREATE TABLE `leave_tbls` (
  `leaveId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `leaveType` varchar(50) NOT NULL,
  `leaveReason` text NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employeeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hrmUserId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leave_tbls`
--

INSERT INTO `leave_tbls` (`leaveId`, `leaveType`, `leaveReason`, `startDate`, `endDate`, `createdAt`, `updatedAt`, `employeeId`, `hrmUserId`) VALUES
('231712067075766', 'Sickness', 'High fever and requires rest. Rest of the things to be mentioned here.', '2024-04-02', '2024-04-09', '2024-04-02 14:11:15', '2024-04-02 14:11:15', '101708726277768', '911709125370160');

-- --------------------------------------------------------

--
-- Table structure for table `moduleaccess_tbls`
--

CREATE TABLE `moduleaccess_tbls` (
  `moduleAccessId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `dept_pos` tinyint(1) DEFAULT 1,
  `viewEmployee` tinyint(1) DEFAULT 1,
  `addEmployee` tinyint(1) DEFAULT 1,
  `updateEmployee` tinyint(1) DEFAULT 1,
  `salary` tinyint(1) DEFAULT 1,
  `attendance` tinyint(1) DEFAULT 1,
  `tasks` tinyint(1) DEFAULT 1,
  `leave` tinyint(1) DEFAULT 1,
  `statistics` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `hrmUserId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `moduleaccess_tbls`
--

INSERT INTO `moduleaccess_tbls` (`moduleAccessId`, `dept_pos`, `viewEmployee`, `addEmployee`, `updateEmployee`, `salary`, `attendance`, `tasks`, `leave`, `statistics`, `createdAt`, `updatedAt`, `hrmUserId`) VALUES
('921709125370160', 1, 1, 1, 1, 1, 1, 1, 1, 1, '2024-05-09 13:37:55', '2024-05-09 13:37:55', '911709125370160'),
('921714987897361', 0, 1, 0, 0, 0, 1, 1, 0, 1, '2024-05-09 13:37:55', '2024-05-09 23:56:43', '911714987897361');

-- --------------------------------------------------------

--
-- Table structure for table `position_tbls`
--

CREATE TABLE `position_tbls` (
  `positionId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `positionName` varchar(80) NOT NULL,
  `addedBy` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `position_tbls`
--

INSERT INTO `position_tbls` (`positionId`, `positionName`, `addedBy`, `createdAt`, `updatedAt`) VALUES
('821708709976382', 'Human Resources Manager', 'Alvi Hossain', '2024-02-23 17:39:36', '2024-02-23 17:39:36'),
('821708709983534', 'Project Manager', 'Alvi Hossain', '2024-02-23 17:39:43', '2024-02-23 17:39:43'),
('821708709990487', 'Manager', 'Alvi Hossain', '2024-02-23 17:39:50', '2024-02-23 17:39:50'),
('821708709995999', 'Chief Executive Officer', 'Alvi Hossain', '2024-02-23 17:39:55', '2024-02-23 17:39:55'),
('821708710000678', 'Accountant', 'Alvi Hossain', '2024-02-23 17:40:00', '2024-02-23 17:40:00'),
('821708710006703', 'Supervisor', 'Alvi Hossain', '2024-02-23 17:40:06', '2024-02-23 17:40:06'),
('821708710011022', 'Executive', 'Alvi Hossain', '2024-02-23 17:40:11', '2024-02-23 17:40:11'),
('821708710015383', 'Business Analyst', 'Alvi Hossain', '2024-02-23 17:40:15', '2024-02-23 17:40:15'),
('821708710030926', 'Assistant Manager', 'Alvi Hossain', '2024-02-23 17:40:30', '2024-02-23 17:40:30'),
('821708710037303', 'Marketing Manager', 'Alvi Hossain', '2024-02-23 17:40:37', '2024-02-23 17:40:37'),
('821708710052495', 'Product Manager', 'Alvi Hossain', '2024-02-23 17:40:52', '2024-02-23 17:40:52'),
('821708710059703', 'Finance Manager', 'Alvi Hossain', '2024-02-23 17:40:59', '2024-02-23 17:40:59'),
('821708710063901', 'Office Manager', 'Alvi Hossain', '2024-02-23 17:41:03', '2024-02-23 17:41:03');

-- --------------------------------------------------------

--
-- Table structure for table `salary_tbls`
--

CREATE TABLE `salary_tbls` (
  `salaryId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `baseSalary` varchar(50) NOT NULL,
  `bonus` varchar(50) NOT NULL,
  `allowance` varchar(50) NOT NULL,
  `benefits` varchar(50) NOT NULL,
  `total` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employeeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salary_tbls`
--

INSERT INTO `salary_tbls` (`salaryId`, `baseSalary`, `bonus`, `allowance`, `benefits`, `total`, `createdAt`, `updatedAt`, `employeeId`) VALUES
('201710598306257', '200', '20', '20', '0', '240', '2024-03-16 14:11:46', '2024-03-17 13:02:45', '101708726277768'),
('201710680380551', '150', '30', '10', '10', '200', '2024-03-17 12:59:40', '2024-03-17 13:03:37', '101708726792469'),
('201710699511761', '100', '50', '0', '0', '150', '2024-03-17 18:18:31', '2024-03-17 18:18:31', '101710538276279'),
('201711114178080', '200', '20', '10', '10', '240', '2024-03-22 13:29:38', '2024-03-22 13:29:38', '101708727427325');

-- --------------------------------------------------------

--
-- Table structure for table `task_tbls`
--

CREATE TABLE `task_tbls` (
  `taskId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `taskName` varchar(50) NOT NULL,
  `taskDetails` text NOT NULL,
  `dueDate` date NOT NULL,
  `taskCompleted` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employeeId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hrmUserId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task_tbls`
--

INSERT INTO `task_tbls` (`taskId`, `taskName`, `taskDetails`, `dueDate`, `taskCompleted`, `createdAt`, `updatedAt`, `employeeId`, `hrmUserId`) VALUES
('221711906310377', 'Reporting', 'Sales report check, work to be mentioned here.', '2024-04-02', 1, '2024-03-31 17:31:50', '2024-04-07 17:32:07', '101708726277768', '911709125370160'),
('221711906339574', 'Reviewing', 'Reports shall be reviewed within the due date.', '2024-04-04', 0, '2024-03-31 17:32:19', '2024-04-07 17:32:39', '101708726277768', '911709125370160'),
('221711906395858', 'UI Development', 'Primary UI of the application shall be completed within the due date.', '2024-04-03', 1, '2024-03-31 17:33:15', '2024-04-07 17:32:42', '101708726792469', '911709125370160');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_tbls`
--
ALTER TABLE `attendance_tbls`
  ADD PRIMARY KEY (`attendanceId`),
  ADD UNIQUE KEY `attendanceId` (`attendanceId`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `department_tbls`
--
ALTER TABLE `department_tbls`
  ADD PRIMARY KEY (`departmentId`),
  ADD UNIQUE KEY `departmentId` (`departmentId`);

--
-- Indexes for table `employee_tbls`
--
ALTER TABLE `employee_tbls`
  ADD PRIMARY KEY (`employeeId`,`email`),
  ADD UNIQUE KEY `employeeId` (`employeeId`);

--
-- Indexes for table `hrmuser_tbls`
--
ALTER TABLE `hrmuser_tbls`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId` (`userId`);

--
-- Indexes for table `leave_tbls`
--
ALTER TABLE `leave_tbls`
  ADD PRIMARY KEY (`leaveId`),
  ADD UNIQUE KEY `leaveId` (`leaveId`),
  ADD KEY `hrmUserId` (`hrmUserId`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `moduleaccess_tbls`
--
ALTER TABLE `moduleaccess_tbls`
  ADD PRIMARY KEY (`moduleAccessId`),
  ADD UNIQUE KEY `moduleAccessId` (`moduleAccessId`),
  ADD KEY `hrmUserId` (`hrmUserId`);

--
-- Indexes for table `position_tbls`
--
ALTER TABLE `position_tbls`
  ADD PRIMARY KEY (`positionId`),
  ADD UNIQUE KEY `positionId` (`positionId`);

--
-- Indexes for table `salary_tbls`
--
ALTER TABLE `salary_tbls`
  ADD PRIMARY KEY (`salaryId`),
  ADD UNIQUE KEY `salaryId` (`salaryId`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `task_tbls`
--
ALTER TABLE `task_tbls`
  ADD PRIMARY KEY (`taskId`),
  ADD UNIQUE KEY `taskId` (`taskId`),
  ADD KEY `hrmUserId` (`hrmUserId`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance_tbls`
--
ALTER TABLE `attendance_tbls`
  ADD CONSTRAINT `attendance_tbls_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee_tbls` (`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `leave_tbls`
--
ALTER TABLE `leave_tbls`
  ADD CONSTRAINT `leave_tbls_ibfk_1` FOREIGN KEY (`hrmUserId`) REFERENCES `hrmuser_tbls` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `leave_tbls_ibfk_2` FOREIGN KEY (`employeeId`) REFERENCES `employee_tbls` (`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `moduleaccess_tbls`
--
ALTER TABLE `moduleaccess_tbls`
  ADD CONSTRAINT `moduleaccess_tbls_ibfk_1` FOREIGN KEY (`hrmUserId`) REFERENCES `hrmuser_tbls` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `salary_tbls`
--
ALTER TABLE `salary_tbls`
  ADD CONSTRAINT `salary_tbls_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee_tbls` (`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `task_tbls`
--
ALTER TABLE `task_tbls`
  ADD CONSTRAINT `task_tbls_ibfk_1` FOREIGN KEY (`hrmUserId`) REFERENCES `hrmuser_tbls` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_tbls_ibfk_2` FOREIGN KEY (`employeeId`) REFERENCES `employee_tbls` (`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
