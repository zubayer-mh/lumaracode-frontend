import { NextResponse } from "next/server";

export const GET = async () => {
    console.log("hi")
    return NextResponse.json({ hello: "hi" })
}