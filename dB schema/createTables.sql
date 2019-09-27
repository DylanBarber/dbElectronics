-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbelectronics_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbelectronics_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbelectronics_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbelectronics_db` ;

-- -----------------------------------------------------
-- Table `dbelectronics_db`.`contacts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbelectronics_db`.`contacts` (
  `contact_id` INT(11) NOT NULL AUTO_INCREMENT,
  `contact_name` VARCHAR(255) NOT NULL,
  `contact_email` VARCHAR(255) NULL DEFAULT NULL,
  `subject` VARCHAR(255) NULL DEFAULT NULL,
  `message` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  UNIQUE INDEX `contact_id` (`contact_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbelectronics_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbelectronics_db`.`products` (
  `product_id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `product_price` INT(11) NOT NULL,
  `product_type` VARCHAR(100) NOT NULL,
  `product_description` VARCHAR(255) NOT NULL,
  `product_image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE INDEX `product_id` (`product_id` ASC) VISIBLE,
  UNIQUE INDEX `product_price` (`product_price` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbelectronics_db`.`pricing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbelectronics_db`.`pricing` (
  `product_id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_price` INT(11) NOT NULL,
  `state_code` VARCHAR(4) NULL DEFAULT NULL,
  INDEX `product_id` (`product_id` ASC) VISIBLE,
  CONSTRAINT `pricing_ibfk_1`
    FOREIGN KEY (`product_id`)
    REFERENCES `dbelectronics_db`.`products` (`product_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbelectronics_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbelectronics_db`.`users` (
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(32) NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
