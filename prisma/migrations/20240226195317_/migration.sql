-- CreateTable
CREATE TABLE `product` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `sub_title` VARCHAR(100) NOT NULL,
    `price` VARCHAR(100) NOT NULL,
    `image` VARCHAR(100) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_detils` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `image1` VARCHAR(100) NOT NULL,
    `image2` VARCHAR(100) NOT NULL,
    `image3` VARCHAR(100) NOT NULL,
    `doc` VARCHAR(100) NOT NULL,
    `color` VARCHAR(100) NOT NULL,
    `size` VARCHAR(100) NOT NULL,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `product_detils_product_id_key`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_detils` ADD CONSTRAINT `product_detils_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
