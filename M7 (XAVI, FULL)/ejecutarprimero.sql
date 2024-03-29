-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)

--

-- Host: localhost    Database: SCAMPCSHOP_DB

-- ------------------------------------------------------

-- Server version	8.0.31-0ubuntu0.22.04.1



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!50503 SET NAMES utf8mb4 */;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;

/*!40103 SET TIME_ZONE='+00:00' */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;



--

-- Table structure for table `CATEGORIA`

--



DROP TABLE IF EXISTS `CATEGORIA`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `CATEGORIA` (

  `id_cat` int NOT NULL AUTO_INCREMENT,

  `nombre_cat` varchar(30) DEFAULT NULL,

  PRIMARY KEY (`id_cat`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;



--

-- Dumping data for table `CATEGORIA`

--



LOCK TABLES `CATEGORIA` WRITE;

/*!40000 ALTER TABLE `CATEGORIA` DISABLE KEYS */;

/*!40000 ALTER TABLE `CATEGORIA` ENABLE KEYS */;

UNLOCK TABLES;



--

-- Table structure for table `PRODUCTO`

--



DROP TABLE IF EXISTS `PRODUCTO`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `PRODUCTO` (

  `id_producto` int NOT NULL AUTO_INCREMENT,

  `nombre_producto` varchar(200) DEFAULT NULL,

  `desc_producto` varchar(500) DEFAULT NULL,

  PRIMARY KEY (`id_producto`)

) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;



--

-- Dumping data for table `PRODUCTO`

--



LOCK TABLES `PRODUCTO` WRITE;

/*!40000 ALTER TABLE `PRODUCTO` DISABLE KEYS */;

INSERT INTO `PRODUCTO` VALUES (17,'Casio Sports','Lo último en relojes, más barato que un Rollex');

/*!40000 ALTER TABLE `PRODUCTO` ENABLE KEYS */;

UNLOCK TABLES;



--

-- Table structure for table `SUB_CATEGORIA`

--



DROP TABLE IF EXISTS `SUB_CATEGORIA`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `SUB_CATEGORIA` (

  `id_sub_cat` int NOT NULL AUTO_INCREMENT,

  `nombre_sub_cat` varchar(30) DEFAULT NULL,

  `id_master_cat` int DEFAULT NULL,

  PRIMARY KEY (`id_sub_cat`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;



--

-- Dumping data for table `SUB_CATEGORIA`

--



LOCK TABLES `SUB_CATEGORIA` WRITE;

/*!40000 ALTER TABLE `SUB_CATEGORIA` DISABLE KEYS */;

/*!40000 ALTER TABLE `SUB_CATEGORIA` ENABLE KEYS */;

UNLOCK TABLES;



--

-- Table structure for table `USUARIO`

--



DROP TABLE IF EXISTS `USUARIO`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE `USUARIO` (

  `id_usuario` int NOT NULL AUTO_INCREMENT,

  `nombre_usuario` varchar(50) DEFAULT NULL,

  `mail_usuario` varchar(50) DEFAULT NULL,

  `password_usuario` varchar(200) DEFAULT NULL,

  PRIMARY KEY (`id_usuario`)

) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;



--

-- Dumping data for table `USUARIO`

--



LOCK TABLES `USUARIO` WRITE;

/*!40000 ALTER TABLE `USUARIO` DISABLE KEYS */;

/*!40000 ALTER TABLE `USUARIO` ENABLE KEYS */;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;



-- Dump completed on 2023-01-19 19:01:15

