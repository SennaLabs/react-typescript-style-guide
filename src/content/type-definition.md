---
title: Type Definition
---

# Type Definition

ใน TypeScript มีวิธีหลักๆ 2 แบบในการประกาศ custom type นั่นคือใช้ `type` หรือ `interface` ซึ่งทั้ง 2 แบบนี้มีความสามารถที่คล้ายกันมาก และสามารถใช้แทนกันได้ในเกือบทุกกรณี

ความแตกต่างระหว่าง type กับ interface
`type` กับ `interface` มีความแตกต่างกันเล็กน้อย ได้แก่

`type` สามารถใช้กับ primitive types, unions และ tuples ได้ แต่ `interface` ไม่ได้

```
// ✅ ใช้ type กับ primitive, union, tuple
type Age = number;
type Text = string;
type Enabled = boolean;
type Direction = 'left' | 'right' | 'top' | 'bottom';
type NameInfo = [string, string];

// ❌ ใช้ interface กับ primitive, union, tuple ไม่ได้
interface Age extends number {} // error
```

`interface` สามารถ extend หรือ merge กันได้ แต่ `type` ไม่ได้

```
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// ✅ extend หรือ merge เพิ่มเติมได้
interface Animal {
  age: number;
}

const bear: Bear = {
  name: 'Winnie',
  honey: true,
  age: 10,
};

// ❌ ไม่สามารถ extend หรือ merge type ได้
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

type Animal = {
  age: number;
};
```

ถึงแม้ `type` กับ `interface` จะมีความแตกต่างกันบ้าง แต่ในทางปฏิบัติแล้ว เราสามารถเลือกใช้อันไหนก็ได้ตามใจชอบ โดยปกติแล้ว จะนิยมใช้ `interface` สำหรับการประกาศโครงสร้างของ object เพราะมันสามารถ extend ได้ง่าย ส่วน `type` จะเหมาะกับการประกาศ type อื่นๆ เช่น primitives, unions, tuples มากกว่า

แต่เพื่อความสม่ำเสมอภายในโปรเจคเดียวกัน เราควรเลือกใช้แบบใดแบบหนึ่งเป็นหลัก และใช้ตลอดทั้งโปรเจค ซึ่งทีม TypeScript เองแนะนำให้ใช้ `interface` เป็นตัวเลือกแรก แล้วค่อยใช้ `type` เมื่อมี feature ที่จำเป็น เช่น union types เป็นต้น
