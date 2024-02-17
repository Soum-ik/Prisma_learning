import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  //   await prisma.brands.createMany({
  //     data: [
  //       {
  //         brandImg: "abc.jpg",
  //         brandName: "apple",
  //       },

  //       {
  //         brandImg: "abc1.jpg",
  //         brandName: "apple",
  //       },

  //       {
  //         brandImg: "abc2.jpg",

  6; //         brandName: "apple",
  //       },
  //     ],
  //   });
  let list = await prisma.brands.findMany();
  return NextResponse.json({ status: list });
}
