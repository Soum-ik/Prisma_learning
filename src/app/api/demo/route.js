import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  // BigInt.prototype.toJSON = function () {
  //   return this.toString();
  // };
  try {
    const prisma = new PrismaClient();
    let result = await req.json();
    const d = await prisma.product.create({ data: result });
    console.log(data);
    return NextResponse.json({ status: "Successfull", data: d });
  } catch (error) {
    console.log(error);
  }
}
