/*
Navicat MySQL Data Transfer

Source Server         : smoothwater
Source Server Version : 50557
Source Host           : 127.0.0.1:3306
Source Database       : maodou

Target Server Type    : MYSQL
Target Server Version : 50557
File Encoding         : 65001

Date: 2019-04-10 14:12:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `cName` varchar(100) NOT NULL,
  `price` double(10,2) NOT NULL,
  `msg` varchar(1000) NOT NULL,
  `pic` varchar(100) DEFAULT NULL,
  `typeId` int(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_TYPEID` (`typeId`),
  CONSTRAINT `FK_TYPEID` FOREIGN KEY (`typeId`) REFERENCES `car_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('1', '别克-君威 ', '20.80', '别克君威GS是上海通用于2011年8月份发布的一款汽车，整车设计延续了欧宝Insignia OPC的主要设计元素，但是更低、更紧凑，也更运动。前脸头灯下两侧进气口的设计具有攻击性，边缘加入镀铬装饰。\r\n\r\n尾部变加入GS标示，标配19寸合金轮毂，同时可以选装20寸合金轮毂，高级Brembos刹车系统配以四轮碟刹和浅灰色的高性能制动卡钳。华丽,俭约而不简单。其同胞兄弟欧宝Insignia OPC更是早于2009年便亮相欧洲市场，并赢得了市场好评，为别克君威GS进一步进军北美和中国市场开创了有利局面。', null, '1');
INSERT INTO `car` VALUES ('2', '红旗L5', '60.40', '红旗L5凭借其超过500万的售价，顶着\"自主劳斯莱斯\"的名头一直备受关注，该车已经作为中国外交礼宾用车，出现在许多重大外交场合。', null, '3');
INSERT INTO `car` VALUES ('3', '吉利全新帝豪', '10.50', '吉利帝豪(简称帝豪)是吉利母品牌之下构建的一个子品牌。2014年7月26日吉利新帝豪上市，吉利新帝豪全新配备1.3T GeTec DVVT涡轮增压发动机，最大功率98kw，1800转涡轮介入，2000转输出峰值扭矩185NM，升功率和升扭矩比同级1.5T的都要高，动力表现接近于2.0升自然吸气发动机。', null, '3');
INSERT INTO `car` VALUES ('4', '大众甲壳虫', '16.50', '大众甲壳虫(Volkswagen Beetle)正式名称为大众1型(Volkswagen Type 1)，是由大众汽车(香港译福士车厂)在1938年至2003年间生产的一款紧凑型轿车。1998年，在最初的甲壳虫下线许多年以后，大众汽车正式推出了外形与原先非常相似的新甲壳虫(以大众高尔夫(Golf)为平台)，而甲壳虫则在墨西哥和其他少数一些国家一直生产到2003年。在评选最具世界影响力的\"20世纪汽车\"的国际投票中，甲壳虫排名第四，仅次于福特T型车、迷你和雪铁龙DS。', null, '5');
INSERT INTO `car` VALUES ('5', '奇瑞qq', '3.44', '奇瑞QQ是国内第一款为年轻人打造的轿车，定位于\"年轻人的第一辆车\"\r\n\r\n，其设计原则就是\"快乐\"。看QQ的第一眼，迎面而来的就是一双圆圆的含笑眼睛，前格栅就是一张含笑的小嘴巴，憨厚的笑意溢于唇边，再配以小巧玲珑的标志，一张快乐的笑脸迎面而来，一种快乐的感觉扑面而至。前保险杠以大包围方式设计，前雾灯、转向灯上下分布在两侧，与设计成半圆的扰流板和前标共同构成一种小小的憨厚表情，方圆相济的防撞条、后视镜、门把手一切都那么个性十足，动感快乐。其2.66万-5万的价格也是相当具有潜力的。', null, '3');
INSERT INTO `car` VALUES ('6', '雪铁龙c6', '6.39', '在雪铁龙型谱中，C6称得上一款地地道道的豪华车典范，真正的创造在于成功地将品牌风格的传统与高档车的准则结合起来。从外型尺寸、车顶线条到弧形轮罩，一眼就能看出雪铁龙独特的造型特色。C6的前悬较长，后悬较短，线条流畅，结合了遒劲的Coupe和功能齐备的高档5门轿车的优势。C6的前脸上有宽大的隔栅以及一直延伸到垂直大灯的内置镀铬雪铁龙标识。前大灯向翼子板和带肋的机罩上侧蔓延，外型显得活力十足。 C6的轴距较长，其修长、流线型的造型，给人以稳重、强劲、宽敞的感觉。', null, '5');
INSERT INTO `car` VALUES ('7', '奥迪Q7', '5.24', '奥迪官方宣布，2013款奥迪Q7已正式上市，其售价为82.1-133.3万元。2013款Q7属于年度小改款车型，新增了车体颜色和一些多媒体配置。　\r\n\r\n三年前，奥迪全新Q7正式在国内上市，代表着奥迪品牌开始在国内SUV市场上发力，首先要抢占的就是顶级豪华SUV市场。奥迪Q7凭借自身不凡的魅力，在国内也受到很多消费者的关注。近日，奥迪宣称，奥迪Q7这款大型SUV将推出2010新款，新车将配备新的LED照明灯和人机界面的设计。\r\n\r\n奥迪从去年起已经在各大国际车展上展示Q7。这是奥迪的第一款运动型多功能车，将运动性、功能性、高科技和豪华品质融为一体，为豪华SUV市场设立新标', null, '5');
INSERT INTO `car` VALUES ('8', '沃尔沃xc60', '4.56', '沃尔沃(Volvo)汽车公司在2008北京国际汽车工业展览会上充满自信地向公众展示了全新沃尔沃XC60。这款运动型多功能车兼备越野车的性能和跑车的个性，专为追求运动特性的年轻精英打造。在承袭了沃尔沃家族传统设计基因的同时，设计师在汽车外观上大胆创新，内饰设计标新立异;同时配备全球首创的城市安全系统，安全性高。全新沃尔沃XC60的发布更加凸显了沃尔沃汽车豪华汽车品牌的实力和不凡品味。', null, '5');
INSERT INTO `car` VALUES ('9', '宝马X7', '50.90', '本次对比我们选择了售价85.88万元的Q7 55 TFSI S line 运动型，以及售价为77.99万元的X5 xDrive40i M运动套装，不过虽然Q7的指导价比X5贵，但由于上市已有段时间，所以现阶段在终端市场会有一定幅度的优惠，部分地区最终成交价甚至比77.99万元的X5还要低', null, '2');
INSERT INTO `car` VALUES ('10', '雷克萨斯', '15.00', '新一代雷克萨斯ES，采用轿跑车般的低重心+宽轮距的黄金比例搭配，营造出更宽大流畅的车身线条，全新ES在外观上采用全新的家族式设计，整体显得更加年轻，其前脸整体的轮廓与大哥LS非常接近，家族式的纺锤形进气格栅在全新ex上得到进一步的延续，格栅首次采用纵向的设计，更为独特霸气。', null, '4');

-- ----------------------------
-- Table structure for car_type
-- ----------------------------
DROP TABLE IF EXISTS `car_type`;
CREATE TABLE `car_type` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car_type
-- ----------------------------
INSERT INTO `car_type` VALUES ('1', '美系');
INSERT INTO `car_type` VALUES ('2', '德系');
INSERT INTO `car_type` VALUES ('3', '国产');
INSERT INTO `car_type` VALUES ('4', '日系');
INSERT INTO `car_type` VALUES ('5', '欧系');

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `carId` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `status` int(10) NOT NULL DEFAULT '0',
  `send` int(10) NOT NULL DEFAULT '0',
  `orderTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('000001', '1', '4', '1', '1', '2019-04-09 14:56:42');
INSERT INTO `item` VALUES ('000002', '2', '4', '1', '1', '2019-04-19 14:56:45');
INSERT INTO `item` VALUES ('000003', '3', '4', '0', '0', '2019-04-12 14:56:49');
INSERT INTO `item` VALUES ('000004', '4', '4', '0', '0', '2019-03-28 14:56:52');
INSERT INTO `item` VALUES ('000005', '5', '4', '0', '0', '2019-04-24 14:56:57');
INSERT INTO `item` VALUES ('000006', '1', '5', '0', '0', '2019-04-25 11:57:02');
INSERT INTO `item` VALUES ('000007', '6', '5', '0', '0', '2019-02-27 13:57:10');
INSERT INTO `item` VALUES ('000008', '7', '5', '0', '0', '2019-04-18 14:57:20');
INSERT INTO `item` VALUES ('000009', '8', '5', '0', '0', '2019-04-20 14:57:24');
INSERT INTO `item` VALUES ('000010', '3', '5', '0', '0', '2019-01-15 14:57:28');
INSERT INTO `item` VALUES ('000011', '7', '19', '0', '0', '2019-02-28 14:57:33');
INSERT INTO `item` VALUES ('000012', '5', '19', '0', '0', '2019-02-28 14:57:40');
INSERT INTO `item` VALUES ('000013', '8', '19', '0', '0', '2019-04-19 14:57:46');
INSERT INTO `item` VALUES ('000014', '3', '19', '0', '0', '2019-02-01 14:57:51');
INSERT INTO `item` VALUES ('000015', '6', '19', '0', '0', '2019-04-20 14:57:57');
INSERT INTO `item` VALUES ('000016', '2', '19', '0', '0', '2019-04-12 14:58:01');
INSERT INTO `item` VALUES ('000018', '7', '4', '0', '0', '2019-04-19 14:56:45');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `uName` varchar(100) NOT NULL,
  `pwd` varchar(100) NOT NULL,
  `tel` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `power` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', 'admin', 'admin', '17718155977', '安徽省合肥', '0');
INSERT INTO `user` VALUES ('4', 'user', 'user', '13515519465', '安徽省合肥', '0');
INSERT INTO `user` VALUES ('5', 'smoothwater', 'z12345', '17718155977', '安徽省合肥', '1');
INSERT INTO `user` VALUES ('6', '王学松', '1234', '16717711897', '安徽省合肥', '0');
INSERT INTO `user` VALUES ('17', '张昭', '1234', '17718155977', '安徽省合肥', '0');
INSERT INTO `user` VALUES ('18', '王', '1234', '18888888888', '江苏省昆山', '0');
INSERT INTO `user` VALUES ('19', '陈松翔', '1234', '17775209790', '江苏省南京', '1');
INSERT INTO `user` VALUES ('20', 'www', '1234', '17718155977', '安徽省合肥市肥东县城关中学', '0');
