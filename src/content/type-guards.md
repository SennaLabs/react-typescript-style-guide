---
title: Type Guards & Narrowing
---

# Type Guards & Narrowing

ในฟังก์ชันหรือบล็อกโค้ดที่มีการรับ parameter หรือตัวแปรเข้ามา บางครั้งเราต้องการตรวจสอบชนิดของข้อมูลก่อนจะทำงานกับมัน เพื่อหลีกเลี่ยงข้อผิดพลาดที่อาจเกิดขึ้น ใน TypeScript เรามีเทคนิคที่เรียกว่า "Type Guards" และ "Narrowing" มาช่วยจัดการเรื่องนี้

Type Guards คือการตรวจสอบชนิดข้อมูลที่รันไทม์ โดยใช้คำสั่ง `typeof`, `instanceof` หรือฟังก์ชันที่เราสร้างขึ้นเอง เพื่อจำกัด (narrow) ชนิดข้อมูลที่เป็นไปได้ในบล็อกโค้ดนั้นๆ ตัวอย่างเช่น

```
// ✅ ใช้ typeof เพื่อตรวจสอบชนิดข้อมูล
function doSomething(value: string | number) {
  if (typeof value === "string") {
    // ในบล็อกนี้ TypeScript รู้ว่า value เป็น string
    return value.toUpperCase();
  } else {
    // ในบล็อกนี้ TypeScript รู้ว่า value เป็น number
    return value.toFixed(2);
  }
}

// ✅ ใช้ฟังก์ชัน type guard ที่เราสร้างเอง
function isString(value: any): value is string {
  return typeof value === "string";
}

function doSomething(value: string | number) {
  if (isString(value)) {
    // ในบล็อกนี้ TypeScript รู้ว่า value เป็น string
    return value.toUpperCase();
  } else {
    // ในบล็อกนี้ TypeScript รู้ว่า value เป็น number
    return value.toFixed(2);
  }
}
```

ด้วย Type Guards เราสามารถบอก TypeScript ได้ว่า ในแต่ละบล็อกของโค้ด ตัวแปรนั้นมีค่าเป็นชนิดใด ทำให้สามารถใช้ property หรือฟังก์ชันเฉพาะของชนิดข้อมูลนั้นๆ ได้อย่างปลอดภัย

ส่วน Narrowing เป็นกลไกที่ TypeScript ใช้ในการจำกัดชนิดข้อมูลที่เป็นไปได้ เมื่อผ่านเงื่อนไขบางอย่าง เช่น equality check, truthiness check เป็นต้น ตัวอย่างเช่น

```
function doSomething(value: string | null) {
  if (value !== null) {
    // ในบล็อกนี้ TypeScript รู้ว่า value เป็น string เท่านั้น
    console.log(value.toUpperCase());
  } else {
    // ในบล็อกนี้ TypeScript รู้ว่า value เป็น null
    console.log('Value is null');
  }
}
```

ในตัวอย่างนี้ เงื่อนไข value !== null ช่วย narrow ชนิดข้อมูลของ value ให้เหลือเพียง string เท่านั้นในบล็อก if ทำให้เราสามารถเรียกใช้ toUpperCase() ได้อย่างปลอดภัย เพราะ TypeScript มั่นใจว่าตอนนั้น value จะต้องไม่เป็น null แน่นอน
