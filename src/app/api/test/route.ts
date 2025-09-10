import { NextRequest, NextResponse } from "next/server";

// กำหนดให้ API นี้ทำงานแบบ get method ที่มี query parameter
// ตัวอย่างการเรียกใช้งาน: /api/test?name=YourName
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "World";
  const tel = searchParams.get("tel") || "000-000-0000";

  return NextResponse.json({ message: `Hello, ${name}! and tel ${tel}` });
}

// กำหนดให้ API นี้ทำงานแบบ post method ที่มี body เป็น JSON
// ตัวอย่างการเรียกใช้งาน: POST /api/test กับ body { "name": "YourName", "tel": "123-456-7890" }
export async function POST(request: NextRequest) {
  const { name, tel } = await request.json();
  return NextResponse.json({ message: `Hello, ${name}! and tel ${tel}` });
}

// กำหนดให้ API นี้ทำงานแบบ put method ที่มี body เป็น JSON
// ตัวอย่างการเรียกใช้งาน: PUT /api/test กับ body { "name": "YourName", "tel": "123-456-7890" }
export async function PUT(request: NextRequest) {
  const { name, tel } = await request.json();
  return NextResponse.json({ message: `Updated: ${name}! and tel ${tel}` });
}

// กำหนดให้ API นี้ทำงานแบบ delete method ที่มี body เป็น JSON
// ตัวอย่างการเรียกใช้งาน: DELETE /api/test กับ body { "name": "YourName" }
export async function DELETE(request: NextRequest) {
  const { name } = await request.json();
  return NextResponse.json({ message: `Deleted: ${name}!` });
}