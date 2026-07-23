-- CreateTable
CREATE TABLE "Volume" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Volume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "affiliation" TEXT,
    "email" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paper" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "abstract" TEXT NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "supplementaryUrl" TEXT,
    "pages" TEXT,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "keywords" TEXT[],
    "volumeId" INTEGER NOT NULL,

    CONSTRAINT "Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaperAuthor" (
    "paperId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PaperAuthor_pkey" PRIMARY KEY ("paperId","authorId")
);

-- CreateTable
CREATE TABLE "BoardMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "affiliation" TEXT,
    "url" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BoardMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Volume_number_key" ON "Volume"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Paper_slug_key" ON "Paper"("slug");

-- CreateIndex
CREATE INDEX "Paper_volumeId_idx" ON "Paper"("volumeId");

-- CreateIndex
CREATE INDEX "PaperAuthor_authorId_idx" ON "PaperAuthor"("authorId");

-- AddForeignKey
ALTER TABLE "Paper" ADD CONSTRAINT "Paper_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaperAuthor" ADD CONSTRAINT "PaperAuthor_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "Paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaperAuthor" ADD CONSTRAINT "PaperAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
