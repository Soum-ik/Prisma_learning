const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let resBody = await req.json();

    let result = await prisma.product.findMany({
      where: resBody,
      select: { title: true, sub_title: true },
    });
    return NextResponse.json({
      status: "Successfull",
      result: result,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: "error" });
  }
}
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.product.findMany({
      take: 3,
      skip: 2,
      select: {
        id: true,
        image: true,
        createAt: true,
      },
    });
    return NextResponse.json({
      status: "Successfull",
      result: result,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: "error" });
  }
}

// export async function POST(req, res) {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };

//   try {
//     const prisma = new PrismaClient();
//     let resBody = await req.json();
//     let result = await prisma.product.createMany({ data: resBody });
//     return NextResponse.json({ status: "Successfull", result: result });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ status: "error" });
//   }
//   // try {
//   //   const prisma = new PrismaClient();
//   //   let resBody = await req.json();
//   //   let result = await prisma.product.create({ data: resBody });
//   //   return NextResponse.json({ status: "Successfull", result: result });
//   // } catch (err) {
//   //   console.log(err);
//   //   return NextResponse.json({ status: "error" });
//   // }
// }
