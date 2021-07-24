CREATE TABLE tbl_instruments(
ins_id int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
ins_name varchar(50) NOT NULL,
ins_category varchar(50) NOT NULL,
ins_description varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


INSERT INTO `tbl_instruments` (`ins_id`, `ins_name`, `ins_category`, `ins_description`) VALUES ('1', 'Guitarra', 'Cuerdas', 'Electroacustica'), ('2', 'Bajo', 'Cuerdas', 'Baja Gama');

