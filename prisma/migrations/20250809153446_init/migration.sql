-- CreateEnum
CREATE TYPE "CalendarProvider" AS ENUM ('GOOGLE', 'OUTLOOK');

-- CreateEnum
CREATE TYPE "CalendarItemType" AS ENUM ('EVENT', 'TASK');

-- CreateEnum
CREATE TYPE "SyncStatus" AS ENUM ('ACTIVE', 'PAUSED', 'ERROR');

-- CreateTable
CREATE TABLE "CalendarAccount" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "provider" "CalendarProvider" NOT NULL,
    "email" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "expiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "status" "SyncStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "webhookSecret" TEXT,
    "webhookResourceId" TEXT,

    CONSTRAINT "CalendarAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendarEvent" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "provider" "CalendarProvider" NOT NULL,
    "itemType" "CalendarItemType" NOT NULL DEFAULT 'EVENT',
    "externalId" TEXT,
    "crmId" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "allDay" BOOLEAN NOT NULL DEFAULT false,
    "timezone" TEXT,
    "etag" TEXT,
    "lastExternalAt" TIMESTAMP(3),
    "lastCrmAt" TIMESTAMP(3),
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalendarEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CalendarAccount_email_idx" ON "CalendarAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CalendarAccount_userId_provider_key" ON "CalendarAccount"("userId", "provider");

-- CreateIndex
CREATE INDEX "CalendarEvent_accountId_externalId_idx" ON "CalendarEvent"("accountId", "externalId");

-- CreateIndex
CREATE INDEX "CalendarEvent_crmId_idx" ON "CalendarEvent"("crmId");

-- CreateIndex
CREATE INDEX "CalendarEvent_provider_itemType_idx" ON "CalendarEvent"("provider", "itemType");

-- AddForeignKey
ALTER TABLE "CalendarEvent" ADD CONSTRAINT "CalendarEvent_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "CalendarAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
