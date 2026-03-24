-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ManoAMano
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ManoAMano
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ManoAMano` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ManoAMano` ;

-- -----------------------------------------------------
-- Table `ManoAMano`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ManoAMano`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `tipo_usuario` VARCHAR(20) NULL DEFAULT 'comprador',
  `fecha_registro` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `activo` TINYINT(1) NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `correo` (`correo` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ManoAMano`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ManoAMano`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vendedor_id` INT NOT NULL,
  `nombre` VARCHAR(70) NOT NULL,
  `descripcion` VARCHAR(600) NULL DEFAULT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `cantidad_disponible` INT NOT NULL,
  `imagen_url` VARCHAR(500) NULL DEFAULT NULL,
  `marca` VARCHAR(100) NULL DEFAULT NULL,
  `peso` DECIMAL(8,2) NULL DEFAULT NULL,
  `volumen` DECIMAL(8,2) NULL DEFAULT NULL,
  `largo` DECIMAL(8,2) NULL DEFAULT NULL,
  `ancho` DECIMAL(8,2) NULL DEFAULT NULL,
  `alto` DECIMAL(8,2) NULL DEFAULT NULL,
  `tags` VARCHAR(500) NULL DEFAULT NULL,
  `colores` VARCHAR(200) NULL DEFAULT NULL,
  `talla` VARCHAR(100) NULL DEFAULT NULL,
  `fecha_creacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `activo` TINYINT(1) NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  INDEX `vendedor_id` (`vendedor_id` ASC) VISIBLE,
  CONSTRAINT `productos_ibfk_1`
    FOREIGN KEY (`vendedor_id`)
    REFERENCES `ManoAMano`.`usuarios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ManoAMano`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ManoAMano`.`carrito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `fecha_agregado` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `usuario_id` (`usuario_id` ASC, `producto_id` ASC) VISIBLE,
  INDEX `producto_id` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `carrito_ibfk_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `ManoAMano`.`usuarios` (`id`),
  CONSTRAINT `carrito_ibfk_2`
    FOREIGN KEY (`producto_id`)
    REFERENCES `ManoAMano`.`productos` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ManoAMano`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ManoAMano`.`ordenes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `estado` VARCHAR(20) NULL DEFAULT 'pendiente',
  `fecha_orden` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `usuario_id` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `ordenes_ibfk_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `ManoAMano`.`usuarios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ManoAMano`.`orden_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ManoAMano`.`orden_productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orden_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(10,2) NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `orden_id` (`orden_id` ASC) VISIBLE,
  INDEX `producto_id` (`producto_id` ASC) VISIBLE,
  CONSTRAINT `orden_productos_ibfk_1`
    FOREIGN KEY (`orden_id`)
    REFERENCES `ManoAMano`.`ordenes` (`id`),
  CONSTRAINT `orden_productos_ibfk_2`
    FOREIGN KEY (`producto_id`)
    REFERENCES `ManoAMano`.`productos` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
