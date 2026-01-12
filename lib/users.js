import { prisma } from "@/utils/db"

export const createUser = async () => prisma.users.create({
    data: {
        email: "k1@gmail.com",
        password: "123",
        name: "Moshe",
        phone: "05277309809",
    },
})

export const getUserByEmail = async (email) =>
    prisma.users.findUnique({
        where: { email: email }
    })