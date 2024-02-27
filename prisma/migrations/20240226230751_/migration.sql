-- CreateTable
CREATE TABLE `student` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `first` VARCHAR(100) NOT NULL,
    `last` VARCHAR(100) NOT NULL,
    `company` VARCHAR(100) NOT NULL,
    `email` VARCHAR(1100) NOT NULL,
    `number` VARCHAR(100) NOT NULL,
    `message` VARCHAR(10000) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `student_email_key`(`email`),
    UNIQUE INDEX `student_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
