const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const data = await prisma.student.create({
      data: reqBody,
    });
    console.log(data);
    return NextResponse.json({
      status: "success",
      result: data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: " erro",
      result: error.toString(),
    });
  }
}

export async function GET() {
  const prisma = new PrismaClient();
  const result = await prisma.student.findMany({
    select: {
      first: true,
      email: true,
      company: true,
      number: true,
      last: true,
      message: true,
    },
  });
  return NextResponse.json({ statu: "successfull", data: result });
}
