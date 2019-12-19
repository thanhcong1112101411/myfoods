-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 11, 2019 lúc 01:59 PM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `myfoods`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accountadmin`
--

CREATE TABLE `accountadmin` (
  `IdAdmin` int(11) NOT NULL,
  `userName` varchar(50) COLLATE utf16_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf16_unicode_ci NOT NULL,
  `idEmployeeFK` int(11) NOT NULL,
  `IdGrouptDt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `accountadmin`
--

INSERT INTO `accountadmin` (`IdAdmin`, `userName`, `password`, `idEmployeeFK`, `IdGrouptDt`) VALUES
(1, 'admin', '123', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `IdBrand` int(11) NOT NULL,
  `brandName` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`IdBrand`, `brandName`) VALUES
(1, 'Lâm Đồng'),
(2, 'Đà Lạt');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `catagory`
--

CREATE TABLE `catagory` (
  `IdCatagory` int(11) NOT NULL,
  `catagoryName` varchar(100) COLLATE utf16_unicode_ci DEFAULT NULL,
  `Images` varchar(100) COLLATE utf16_unicode_ci NOT NULL,
  `AddedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `AddedByid` int(11) DEFAULT NULL,
  `ModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ModifiedByid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `catagory`
--

INSERT INTO `catagory` (`IdCatagory`, `catagoryName`, `Images`, `AddedDate`, `AddedByid`, `ModifiedDate`, `ModifiedByid`) VALUES
(1, 'Trái Cây', '1.png', '2019-11-23 17:00:00', 1, '2019-11-23 17:00:00', 1),
(2, 'Rau Củ', '2.png', '2019-11-24 08:02:36', 1, '2019-11-24 08:02:36', 1),
(3, 'Thảo Dược', '1.png', '2019-12-06 06:41:02', 1, '2019-12-06 06:41:02', 1),
(4, 'Sản Phẩm Từ Gỗ', '1.png', '2019-12-10 14:35:08', 1, '2019-12-10 14:35:08', NULL),
(5, 'Lúa Gạo', '1.png', '2019-12-10 14:35:08', 1, '2019-12-10 14:35:08', NULL),
(6, 'Thịt và Trứng Gia Cầm', '1.pnng', '2019-12-10 14:36:23', 1, '2019-12-10 14:36:23', NULL),
(7, 'Sản Phẩm Khác', '1.png', '2019-12-10 14:36:23', 1, '2019-12-10 14:36:23', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `company`
--

CREATE TABLE `company` (
  `Id` int(11) NOT NULL,
  `companyName` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL,
  `companyLink` varchar(50) COLLATE utf16_unicode_ci NOT NULL,
  `companyEmail` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL,
  `companyTel` varchar(10) COLLATE utf16_unicode_ci DEFAULT NULL,
  `companyBanner` varchar(100) COLLATE utf16_unicode_ci NOT NULL DEFAULT 'bannercompany.jpg',
  `companyLogo` varchar(100) COLLATE utf16_unicode_ci NOT NULL DEFAULT 'logo-web.png',
  `companyAddress` varchar(100) COLLATE utf16_unicode_ci DEFAULT NULL,
  `companyWardId` int(11) DEFAULT NULL,
  `companyDistrictId` int(11) DEFAULT NULL,
  `companyCityId` int(11) DEFAULT NULL,
  `usernameCompany` varchar(50) COLLATE utf16_unicode_ci NOT NULL,
  `passwordCompany` varchar(50) COLLATE utf16_unicode_ci NOT NULL,
  `statusCompany` int(11) NOT NULL DEFAULT '1',
  `confirmId` int(11) DEFAULT NULL,
  `blockId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `company`
--

INSERT INTO `company` (`Id`, `companyName`, `companyLink`, `companyEmail`, `companyTel`, `companyBanner`, `companyLogo`, `companyAddress`, `companyWardId`, `companyDistrictId`, `companyCityId`, `usernameCompany`, `passwordCompany`, `statusCompany`, `confirmId`, `blockId`) VALUES
(1, 'Công Ty Thực Phẩm Sạch', 'ThucPhamSach', 'thucphamsach@gmail.com', '097482921', 'bannercompany.jpg', 'logo-web.png', '35 Nguyễn Huệ', 0, 0, 0, 'thucphamsach', '12345', 0, 1, NULL),
(2, 'Công Ty Thực Phẩm', 'thucpham', 'thucpham@gmail.com', '094838828', 'bannercompany.jpg', 'logo-web.png', 'Tp Hồ Chí Minh', 0, 0, 0, 'thucpham', '12345', 0, 1, NULL),
(6, 'thucphamsach', 'thucpham2', 't@gmail.com', '1234594930', 'bannercompany.jpg', 'logo-web.png', NULL, NULL, NULL, NULL, 'thucpham2', '12345', 1, NULL, NULL),
(7, 'thucphambc', 'thucphamabc', 't@gmail.com', '2345674444', 'bannercompany.jpg', 'logo-web.png', NULL, NULL, NULL, NULL, 'thucphamabc', '12345', 0, 1, NULL),
(8, 'Thực Phẩm Z-FOODS', 'thucphamzfoods', 'zfood@gmail.com', '0947848332', 'bannercompany.jpg', 'logo-web.png', NULL, NULL, NULL, NULL, 'zfood', '12345', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `decentralization`
--

CREATE TABLE `decentralization` (
  `IdDecen` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `decentralization`
--

INSERT INTO `decentralization` (`IdDecen`, `Name`) VALUES
(1, 'Quản Lý Công Ty'),
(2, 'Thống Kê');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detaildencentralization`
--

CREATE TABLE `detaildencentralization` (
  `IdDt` int(11) NOT NULL,
  `IdDecen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `detaildencentralization`
--

INSERT INTO `detaildencentralization` (`IdDt`, `IdDecen`) VALUES
(1, 1),
(1, 2),
(2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detaildiscount`
--

CREATE TABLE `detaildiscount` (
  `IdDiscount` int(11) NOT NULL,
  `IdProduct` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `detaildiscount`
--

INSERT INTO `detaildiscount` (`IdDiscount`, `IdProduct`) VALUES
(1, 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `IdDiscount` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL,
  `Quantum` int(11) DEFAULT NULL,
  `Datefrom` datetime DEFAULT NULL,
  `Dateto` datetime DEFAULT NULL,
  `Hidden` int(11) DEFAULT NULL,
  `AddedById` int(11) DEFAULT NULL,
  `AddedDate` datetime DEFAULT NULL,
  `ModifiedById` int(11) DEFAULT NULL,
  `ModifiedDate` datetime DEFAULT NULL,
  `IdCompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discount`
--

INSERT INTO `discount` (`IdDiscount`, `Name`, `Quantum`, `Datefrom`, `Dateto`, `Hidden`, `AddedById`, `AddedDate`, `ModifiedById`, `ModifiedDate`, `IdCompany`) VALUES
(1, 'test', 20, '2019-11-23 00:00:00', '2019-11-26 00:00:00', 0, 1, '2019-11-24 18:29:33', 1, '2019-11-24 18:29:33', 1);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `discountapply`
-- (See below for the actual view)
--
CREATE TABLE `discountapply` (
`IdDiscount` int(11)
,`Name` varchar(50)
,`Quantum` int(11)
,`Datefrom` datetime
,`Dateto` datetime
,`Hidden` int(11)
,`AddedById` int(11)
,`AddedDate` datetime
,`ModifiedById` int(11)
,`ModifiedDate` datetime
,`IdCompany` int(11)
);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `employee`
--

CREATE TABLE `employee` (
  `IdEmployee` int(11) NOT NULL,
  `employeeName` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL,
  `employeeAddress` varchar(100) COLLATE utf16_unicode_ci DEFAULT NULL,
  `Tel` varchar(10) COLLATE utf16_unicode_ci DEFAULT NULL,
  `avatar` varchar(100) COLLATE utf16_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `employee`
--

INSERT INTO `employee` (`IdEmployee`, `employeeName`, `employeeAddress`, `Tel`, `avatar`) VALUES
(1, 'Nguyễn Hữu An', 'Lê Trọng Tấn, Tp Hồ chí Minh', '094837737', '1.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `groupdecentralization`
--

CREATE TABLE `groupdecentralization` (
  `IdGroup` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `groupdecentralization`
--

INSERT INTO `groupdecentralization` (`IdGroup`, `Name`) VALUES
(1, 'Admin'),
(2, 'Nhân Viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `IdNew` int(11) NOT NULL,
  `newsImages` varchar(100) COLLATE utf16_unicode_ci DEFAULT NULL,
  `newsTitle` text COLLATE utf16_unicode_ci,
  `newsContent` text COLLATE utf16_unicode_ci,
  `quantumClick` int(11) NOT NULL DEFAULT '0',
  `IdCompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`IdNew`, `newsImages`, `newsTitle`, `newsContent`, `quantumClick`, `IdCompany`) VALUES
(1, 'News1', 'Bạn đang tìm kiếm cho những sản phẩm chất lượng', 'chúng tôi cung cấp những loại mặt hàng nông sản với giá thành rẻ, an tòan cho người sử dụng', 0, 1),
(2, 'News2', 'thực phẩm giảm cân', 'bạn đang lo lắng về cân nặng, hãy đến cửa hàng chúng tôi và chọn cho mình những sản phẩm an toàn, chất lượng lại đảm bảo cân nặng của bạn', 0, 1),
(7, '7', 'Sai lầm khi bảo quản thức ăn thừa, gây hại cho cả nhà', 'Hầu hết sau mỗi bữa cơm, mỗi gia đình đều thừa lại một chút thức ăn, trong đó phổ biến nhất là món thịt. Lúc này, chị em nội trợ sẽ bảo quản chúng bằng cách bọc màng thực phẩm và cất vào tủ lạnh. Sau đó yên tâm rằng thịt sẽ được bảo quản an toàn, ngày hôm sau lấy ra làm nóng lại là ăn được.\n\nTuy nhiên, nếu cứ cất thịt đã chế biến trong màng bọc thực phẩm và tủ lạnh từ ngày này sang ngày khác, bỏ ra làm nóng rồi lại bảo quản lạnh, việc này sẽ gây ra một số vấn đề sức khỏe mà bạn không ngờ đến.', 0, 8),
(9, '9', 'Những thực phẩm không nên kết hợp với mật ong để tránh gây hại sức khỏe', 'Nhiều nghiên cứu đã chỉ ra, mật ong giúp ngăn ngừa sự phát triển của vi khuẩn HP (Helicobacter pylori) gây viêm loét dạ dày, làm giảm viêm dạ dày do uống quá nhiều rượu và giảm khả năng gây ung thư của một số tác nhân độc hại. Thậm chí, theo một nghiên cứu của các nhà khoa học Nga đã chỉ ra, mật ong giúp sáng mắt, phục hồi thị lực ở những người già bắt đầu bị đục thuỷ tinh thể.\n\nTuy nhiên, mật ong có thể gây ngộ độc với trẻ dưới 12 tháng tuổi, độc tố của vi khuẩn clostridium botulinum có trong mật ong nếu nặng sẽ ảnh hưởng đến hệ thần kinh và có thể gây tử vong cho trẻ. Hơn thế, nếu kết hợp với những loại thực phẩm sau sẽ là “đại kỵ”, ảnh hưởng xấu đến sức khỏe.', 0, 8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `IdProduct` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL,
  `Description` text COLLATE utf16_unicode_ci,
  `Description2` text COLLATE utf16_unicode_ci,
  `Price` float DEFAULT NULL,
  `Images` varchar(100) COLLATE utf16_unicode_ci DEFAULT NULL,
  `rrp` int(11) DEFAULT '0',
  `quantityProduct` int(11) NOT NULL,
  `Hidden` int(11) DEFAULT '0',
  `AddedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `ModifiedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `IdCatagory` int(11) NOT NULL,
  `IdUnit` int(11) NOT NULL,
  `IdBrand` int(11) NOT NULL,
  `IdCompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`IdProduct`, `Name`, `Description`, `Description2`, `Price`, `Images`, `rrp`, `quantityProduct`, `Hidden`, `AddedDate`, `ModifiedDate`, `IdCatagory`, `IdUnit`, `IdBrand`, `IdCompany`) VALUES
(2, 'Dâu Tây', NULL, '', 430000, '4.png', 0, 0, 0, '2019-11-24 00:00:00', '2019-11-24 00:00:00', 1, 1, 1, 1),
(3, 'Cua Thịt', NULL, NULL, 230000, '6.png', 0, 0, 0, '2019-11-24 15:15:39', '2019-11-24 15:15:39', 7, 1, 2, 1),
(4, 'cherry', NULL, NULL, 340000, 'cherry.png', 0, 0, 0, '2019-11-24 15:16:20', '2019-11-24 15:16:20', 1, 1, 2, 1),
(5, 'Lựu', NULL, NULL, 240000, '3.png', 0, 0, 0, '2019-11-24 15:17:39', '2019-11-24 15:17:39', 1, 2, 1, 1),
(6, 'Nước ép dâu', NULL, NULL, 130000, '1.png', 150000, 0, 0, '2019-11-24 15:17:39', '2019-11-24 15:17:39', 2, 1, 2, 1),
(7, 'Xoài Thái', NULL, NULL, 250000, '3.png', 0, 0, 1, '2019-11-24 15:18:08', '2019-11-24 15:18:08', 2, 2, 1, 1),
(9, 'Tôm Sú', NULL, NULL, 540000, 'tomsu_03.png', 0, 0, 1, '2019-11-24 15:18:53', '2019-11-24 15:18:53', 2, 2, 1, 1),
(10, 'Nước ép dâu', NULL, NULL, 250000, '1.png', 150000, 0, 1, '2019-11-24 15:18:53', '2019-11-24 15:18:53', 2, 1, 2, 1),
(12, 'Đùi Gà', NULL, NULL, 230000, 'ga_03.png', 240000, 100, 0, '2019-12-06 13:34:25', '2019-12-06 13:34:25', 6, 1, 1, 2),
(13, 'Trứng Gà', NULL, NULL, 23000, '7.png', 24000, 100, 0, '2019-12-06 13:34:58', '2019-12-06 13:34:58', 6, 1, 1, 2),
(14, 'Cam', NULL, NULL, 230000, '8.png', 240000, 99, 0, '2019-12-10 21:46:22', '2019-12-10 21:46:22', 1, 1, 2, 8),
(16, 'Mật Ong', NULL, NULL, 500000, 'mat-ong-nguyen-chat.png', 520000, 12, 1, '2019-12-10 23:01:42', '2019-12-10 23:01:42', 7, 3, 1, 8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `unit`
--

CREATE TABLE `unit` (
  `IdUnit` int(11) NOT NULL,
  `unitName` varchar(50) COLLATE utf16_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `unit`
--

INSERT INTO `unit` (`IdUnit`, `unitName`) VALUES
(1, 'Kg'),
(2, 'Quả'),
(3, 'Lít');

-- --------------------------------------------------------

--
-- Cấu trúc cho view `discountapply`
--
DROP TABLE IF EXISTS `discountapply`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `discountapply`  AS  select `discount`.`IdDiscount` AS `IdDiscount`,`discount`.`Name` AS `Name`,`discount`.`Quantum` AS `Quantum`,`discount`.`Datefrom` AS `Datefrom`,`discount`.`Dateto` AS `Dateto`,`discount`.`Hidden` AS `Hidden`,`discount`.`AddedById` AS `AddedById`,`discount`.`AddedDate` AS `AddedDate`,`discount`.`ModifiedById` AS `ModifiedById`,`discount`.`ModifiedDate` AS `ModifiedDate`,`discount`.`IdCompany` AS `IdCompany` from `discount` where ((`discount`.`Datefrom` <= curdate()) and (`discount`.`Dateto` >= curdate()) and (`discount`.`Hidden` = 0)) ;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accountadmin`
--
ALTER TABLE `accountadmin`
  ADD PRIMARY KEY (`IdAdmin`),
  ADD KEY `FK_Admin_GroupDt` (`IdGrouptDt`),
  ADD KEY `idEmployeeFK` (`idEmployeeFK`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`IdBrand`);

--
-- Chỉ mục cho bảng `catagory`
--
ALTER TABLE `catagory`
  ADD PRIMARY KEY (`IdCatagory`);

--
-- Chỉ mục cho bảng `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `confirmId` (`confirmId`),
  ADD KEY `blockId` (`blockId`);

--
-- Chỉ mục cho bảng `decentralization`
--
ALTER TABLE `decentralization`
  ADD PRIMARY KEY (`IdDecen`);

--
-- Chỉ mục cho bảng `detaildencentralization`
--
ALTER TABLE `detaildencentralization`
  ADD KEY `FK_DetailDencen_GroupD` (`IdDt`),
  ADD KEY `Fk_DetailDecen_Dencen` (`IdDecen`);

--
-- Chỉ mục cho bảng `detaildiscount`
--
ALTER TABLE `detaildiscount`
  ADD KEY `FK_Detaildiscount_Products` (`IdProduct`),
  ADD KEY `FK_Detaildiscount_Discount` (`IdDiscount`);

--
-- Chỉ mục cho bảng `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`IdDiscount`),
  ADD KEY `FK_Discount_Company` (`IdCompany`);

--
-- Chỉ mục cho bảng `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`IdEmployee`);

--
-- Chỉ mục cho bảng `groupdecentralization`
--
ALTER TABLE `groupdecentralization`
  ADD PRIMARY KEY (`IdGroup`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`IdNew`),
  ADD KEY `Fk_News_Company` (`IdCompany`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`IdProduct`),
  ADD KEY `FK_Products_Cata` (`IdCatagory`),
  ADD KEY `Fk_Products_Unit` (`IdUnit`),
  ADD KEY `Fk_Products_Brand` (`IdBrand`),
  ADD KEY `FK_Prodcuts_Company` (`IdCompany`);

--
-- Chỉ mục cho bảng `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`IdUnit`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accountadmin`
--
ALTER TABLE `accountadmin`
  MODIFY `IdAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `IdBrand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `catagory`
--
ALTER TABLE `catagory`
  MODIFY `IdCatagory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `company`
--
ALTER TABLE `company`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `decentralization`
--
ALTER TABLE `decentralization`
  MODIFY `IdDecen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `discount`
--
ALTER TABLE `discount`
  MODIFY `IdDiscount` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `employee`
--
ALTER TABLE `employee`
  MODIFY `IdEmployee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `groupdecentralization`
--
ALTER TABLE `groupdecentralization`
  MODIFY `IdGroup` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `IdNew` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `IdProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `unit`
--
ALTER TABLE `unit`
  MODIFY `IdUnit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `accountadmin`
--
ALTER TABLE `accountadmin`
  ADD CONSTRAINT `FK_Admin_GroupDt` FOREIGN KEY (`IdGrouptDt`) REFERENCES `groupdecentralization` (`IdGroup`),
  ADD CONSTRAINT `accountadmin_ibfk_1` FOREIGN KEY (`idEmployeeFK`) REFERENCES `employee` (`IdEmployee`);

--
-- Các ràng buộc cho bảng `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`confirmId`) REFERENCES `accountadmin` (`IdAdmin`),
  ADD CONSTRAINT `company_ibfk_2` FOREIGN KEY (`blockId`) REFERENCES `accountadmin` (`IdAdmin`);

--
-- Các ràng buộc cho bảng `detaildencentralization`
--
ALTER TABLE `detaildencentralization`
  ADD CONSTRAINT `FK_DetailDencen_GroupD` FOREIGN KEY (`IdDt`) REFERENCES `groupdecentralization` (`IdGroup`),
  ADD CONSTRAINT `Fk_DetailDecen_Dencen` FOREIGN KEY (`IdDecen`) REFERENCES `decentralization` (`IdDecen`);

--
-- Các ràng buộc cho bảng `detaildiscount`
--
ALTER TABLE `detaildiscount`
  ADD CONSTRAINT `FK_Detaildiscount_Discount` FOREIGN KEY (`IdDiscount`) REFERENCES `discount` (`IdDiscount`),
  ADD CONSTRAINT `FK_Detaildiscount_Products` FOREIGN KEY (`IdProduct`) REFERENCES `products` (`IdProduct`);

--
-- Các ràng buộc cho bảng `discount`
--
ALTER TABLE `discount`
  ADD CONSTRAINT `FK_Discount_Company` FOREIGN KEY (`IdCompany`) REFERENCES `company` (`Id`);

--
-- Các ràng buộc cho bảng `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `Fk_News_Company` FOREIGN KEY (`IdCompany`) REFERENCES `company` (`Id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_Prodcuts_Company` FOREIGN KEY (`IdCompany`) REFERENCES `company` (`Id`),
  ADD CONSTRAINT `FK_Products_Cata` FOREIGN KEY (`IdCatagory`) REFERENCES `catagory` (`IdCatagory`),
  ADD CONSTRAINT `Fk_Products_Brand` FOREIGN KEY (`IdBrand`) REFERENCES `brand` (`IdBrand`),
  ADD CONSTRAINT `Fk_Products_Unit` FOREIGN KEY (`IdUnit`) REFERENCES `unit` (`IdUnit`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
