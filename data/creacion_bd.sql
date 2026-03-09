-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT(600) NOT NULL,
  `img` VARCHAR(100) NOT NULL,
  `imgSecundaria1` VARCHAR(100) NULL,
  `imgSecundaria2` VARCHAR(100) NULL,
  `imgSecundaria3` VARCHAR(100) NULL,
  `imgSecundaria4` VARCHAR(100) NULL,
  `price` DOUBLE NOT NULL,
  `tags` VARCHAR(250) NOT NULL,
  `seller` VARCHAR(46) NOT NULL,
  `color1` VARCHAR(7) NULL,
  `color2` VARCHAR(7) NULL,
  `color3` VARCHAR(7) NULL,
  `brand` VARCHAR(45) NULL,
  `size` CHAR(1) NULL,
  `model` VARCHAR(45) NULL,
  `dimensions` INT NULL,
  `dimensionsLarge` DOUBLE NULL,
  `dimensionsHeight` DOUBLE NULL,
  `dimensionsWidith` DOUBLE NULL,
  `weight` DOUBLE NULL,
  `volume` DOUBLE NULL,
  `isMen` INT NULL,
  `isWomen` INT NULL,
  `isClothes` INT NULL,
  `isAccessories` INT NULL,
  `isDecoration` INT NULL,
  `isFood` INT NULL,
  PRIMARY KEY (`id_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id_pedido` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  `estado` VARCHAR(20) NOT NULL,
  `fecha` VARCHAR(45) NOT NULL,
  `total` DOUBLE NOT NULL,
  `direccion` VARCHAR(100) NOT NULL,
  `metodo_pago` VARCHAR(30) NOT NULL,
  `numero_guia` VARCHAR(45) NOT NULL,
  `paqueteria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_pedidos_usuarios1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `mydb`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`detalles_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`detalles_pedido` (
  `id_detalles_pedido` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `id_pedido` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DOUBLE NOT NULL,
  `subtotal` DOUBLE NOT NULL,
  PRIMARY KEY (`id_detalles_pedido`),
  INDEX `fk_detalles_pedido_pedidos1_idx` (`id_pedido` ASC) VISIBLE,
  INDEX `fk_detalles_pedido_Producto1_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_detalles_pedido_pedidos1`
    FOREIGN KEY (`id_pedido`)
    REFERENCES `mydb`.`pedidos` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalles_pedido_Producto1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `mydb`.`Producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
