const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

// findMany Data

// export async function GET(req, res) {
//   try {
//     const prisma = new PrismaClient();
//     let resBody = await req.json();

//     let result = await prisma.product.findMany({
//       where: resBody,
//       select: { title: true, sub_title: true },
//     });
//     return NextResponse.json({
//       status: "Successfull",
//       result: result,
//     });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ status: "error" });
//   }
// }

// search data in all data

// export async function GET(req, res) {
//   try {
//     const prisma = new PrismaClient();
//     // let resBody = await req.json();

//     let result = await prisma.product.findMany({
//       where: {
//         image: {
//           contains: "ap",
//         },
//       },
//     });
//     return NextResponse.json({
//       status: "Successfull",
//       result: result,
//     });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ status: "error" });
//   }
// }

// delete data on from full database

// export async function DELETE(req, res) {
//   try {
//     const prisma = new PrismaClient();
//     let resBody = await req.json();

//     let result = await prisma.product.delete({
//       where: resBody,
//     });
//     return NextResponse.json({
//       status: "Successfull",
//       result: result,
//     });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ status: "error" });
//   }
// }

// update data
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    let resBody = await req.json();

    let result = await prisma.product.update({
      where: resBody,
      data: {
        title: "samsung",
        sub_title: "mackbook",
        price: "symphony",
        image: "mackbook",
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

// find data using where

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.product.findMany({
      where: { id: "3" },
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

// createMany data

// export async function POST(req, res) {
// BigInt.prototype.toJSON = function () {
//   return this.toString();
// };

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
