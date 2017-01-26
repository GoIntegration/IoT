CREATE TABLE `AppMasterDB`.`device_location_logs` (
  `device_id` VARCHAR(40) NULL,
  `log_timestamp` DATETIME NULL,
  `latitude` DECIMAL(10,7) NULL,
  `longitude` DECIMAL(10,7) NULL,
  INDEX `index01` (`device_id` ASC, `log_timestamp` ASC))
COMMENT = 'This table store device location'; 