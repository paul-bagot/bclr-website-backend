/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theaters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "theaters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_release" INTEGER,
    "imdb_id" TEXT,
    "runtime" TEXT,
    "overview" TEXT,
    "genre" TEXT,
    "director" TEXT,
    "poster" TEXT,
    "backdrop" TEXT,
    "metascore_rating" TEXT,
    "imdb_rating" TEXT,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screenings" (
    "id" SERIAL NOT NULL,
    "id_movie" INTEGER NOT NULL,
    "id_theater" INTEGER NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "hour" TIMESTAMP(3) NOT NULL,
    "lang" TEXT,

    CONSTRAINT "screenings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "screenings" ADD CONSTRAINT "screenings_id_theater_fkey" FOREIGN KEY ("id_theater") REFERENCES "theaters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "screenings" ADD CONSTRAINT "screenings_id_movie_fkey" FOREIGN KEY ("id_movie") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
