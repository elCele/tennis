-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 05, 2022 alle 22:29
-- Versione del server: 10.4.24-MariaDB
-- Versione PHP: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `db_match`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `tbl_match`
--

CREATE TABLE `tbl_match` (
  `id` int(10) NOT NULL,
  `playerBattuta` varchar(10) NOT NULL,
  `battutaN` varchar(10) NOT NULL,
  `battutaDir` varchar(10) NOT NULL,
  `rispostaDir` varchar(10) NOT NULL,
  `terzoToccoDir` varchar(10) NOT NULL,
  `fg` varchar(10) NOT NULL,
  `durataSel` varchar(10) NOT NULL,
  `vincitore` varchar(10) NOT NULL