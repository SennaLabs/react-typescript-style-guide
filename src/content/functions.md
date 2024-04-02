---
title: Functions
---

# Functions

ฟังก์ชันเป็นส่วนสำคัญในการเขียนโปรแกรม และใน TypeScript เราสามารถประกาศฟังก์ชันพร้อมกับ type ของ parameter และ return value ได้ เพื่อให้มั่นใจว่าฟังก์ชันจะถูกเรียกใช้และคืนค่าอย่างถูกต้อง

ในการเขียนฟังก์ชันที่ดีใน TypeScript ควรคำนึงถึงสิ่งต่อไปนี้:

- Single Responsibility - ฟังก์ชันควรทำหน้าที่เดียว และทำหน้าที่นั้นให้ดีที่สุด
- ระบุชนิดข้อมูลของ parameter และ return value ให้ชัดเจน
- เขียนเป็น Pure Function - ให้ผลลัพธ์เดิมเสมอสำหรับ input เดียวกัน ไม่พึ่งพาปัจจัยภายนอก
- รับ parameter แค่ที่จำเป็น และคืนค่ากลับเสมอ
- รวม parameter ที่เกี่ยวข้องกันไว้ใน object เดียว
- ใช้ default parameter เพื่อให้ฟังก์ชันยืดหยุ่นขึ้น

```
// ✅ ตัวอย่างฟังก์ชันที่ดี
interface User {
  firstName: string;
  lastName: string;
  age?: number;
}

// ระบุชนิดข้อมูลชัดเจน, pure function
function getFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

// มีเพียง 1 หน้าที่
function canDrinkAlcohol(user: User): boolean {
  const legalAge = 18;
  return user.age >= legalAge;
}

// ใช้ default parameter
function greet(user: User, greeting = 'Hello'): string {
  return `${greeting}, ${getFullName(user)}!`;
}
```

ในตัวอย่างนี้ ฟังก์ชันต่างๆ มีหน้าที่ชัดเจน ระบุชนิดข้อมูลทั้ง input และ output มีลักษณะเป็น pure function ไม่พึ่งพาปัจจัยภายนอก และใช้ default parameter เพื่อเพิ่มความยืดหยุ่น

การเขียนฟังก์ชันตามแนวทางเหล่านี้ จะช่วยให้โค้ดอ่านง่าย เข้าใจง่าย ลดข้อผิดพลาด และง่ายต่อการ maintain ในระยะยาว
