DROP DATABASE IF EXISTS `db_securedwebshop`;
CREATE DATABASE IF NOT EXISTS `db_securedwebshop` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `db_securedwebshop`;

CREATE TABLE t_user(
   useId INT,
   useName VARCHAR(50),
   usePassword VARCHAR(50),
   isAdmin BOOLEAN,
   PRIMARY KEY(useId)
);

CREATE TABLE t_product(
   proId INT,
   proName VARCHAR(50),
   proPrice DECIMAL(15,2),
   PRIMARY KEY(proId)
);

CREATE TABLE t_cart(
   carId INT,
   car_UserLink INT,
   carProductLink INT,
   PRIMARY KEY(carId)
);

INSERT INTO `t_user` (`useId`, `useName`, `usePassword`, `isAdmin`) VALUES ('1', 'Nima', 'mdptopsecret', '1'), ('2', 'Sarah', 'mdpaussisecret', '0');
