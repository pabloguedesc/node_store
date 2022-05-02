import { PrismaClient } from "@prisma/client";

// criação de constante para utilização do PrismaClient nas implementações

const prismaAgent = new PrismaClient();

export { prismaAgent };
