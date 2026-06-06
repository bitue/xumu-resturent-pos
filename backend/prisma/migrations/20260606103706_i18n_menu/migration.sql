/*
  Warnings:

  - You are about to drop the column `name` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `menu_items` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `menu_items` table. All the data in the column will be lost.
  - Added the required column `name_en` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_nl` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `menu_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_nl` to the `menu_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "name",
ADD COLUMN     "name_en" VARCHAR(80) NOT NULL,
ADD COLUMN     "name_nl" VARCHAR(80) NOT NULL;

-- AlterTable
ALTER TABLE "menu_items" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "description_en" TEXT,
ADD COLUMN     "description_nl" TEXT,
ADD COLUMN     "name_en" VARCHAR(120) NOT NULL,
ADD COLUMN     "name_nl" VARCHAR(120) NOT NULL;
