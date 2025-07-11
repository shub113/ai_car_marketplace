"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getAdmins() {
    const user = await auth();
    if (!user) {
        throw new Error("Unauthorized");
    }

    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.userId,
        },
    });

    if (!loggedInUser || loggedInUser.role !== "ADMIN") {
        return { authorized: false, reason: "Not an admin" };
    }

    return {
        authorized: true,
        user: loggedInUser,
    };
}