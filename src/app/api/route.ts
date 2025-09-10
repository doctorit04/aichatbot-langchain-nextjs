import { NextResponse } from "next/server";

// กำหนดให้ API นี้ทำงานแบบ GET เพื่อประสิทธิภาพที่ดีกว่า
export async function GET() {
  return NextResponse.json({
    code: 200,
    status: "API is running in GET method",
    data: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]
  });
}


// กำหนดให้ API นี้ทำงานแบบ POST เพื่อประสิทธิภาพที่ดีกว่า
export async function POST() {
  return NextResponse.json({
    code: 200,
    status: "API is running in POST method",
    data: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]
  });
}


// กำหนดให้ API นี้ทำงานแบบ PUT เพื่อประสิทธิภาพที่ดีกว่า
export async function PUT() {
  return NextResponse.json({
    code: 200,
    status: "API is running in PUT method",
  });
}

// กำหนดให้ API นี้ทำงานแบบ PATCH เพื่อประสิทธิภาพที่ดีกว่า
export async function PATCH() {
  return NextResponse.json({
    code: 200,
    status: "API is running in PATCH method",
  });
}

// กำหนดให้ API นี้ทำงานแบบ DELETE เพื่อประสิทธิภาพที่ดีกว่า
export async function DELETE() {
  return NextResponse.json({
    code: 200,
    status: "API is running in DELETE method",
  });
}