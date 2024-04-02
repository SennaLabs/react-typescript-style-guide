const n={title:"Generics"},e=`# Generics

Generics เป็นฟีเจอร์ที่ทรงพลังของ TypeScript ที่ช่วยให้เราสามารถเขียนโค้ดที่รองรับหลากหลายชนิดข้อมูลได้อย่างยืดหยุ่น โดยใช้พารามิเตอร์ที่เป็น type (type parameters) ในการระบุชนิดข้อมูลที่สามารถเปลี่ยนแปลงได้ตามการเรียกใช้งาน

ข้อดีของ Generics คือ:

- ช่วยให้โค้ดของเรามีความยืดหยุ่น สามารถทำงานกับข้อมูลได้หลากหลายชนิด
- มีความปลอดภัยมากขึ้น เพราะยังคงมีการตรวจสอบชนิดข้อมูลเหมือนเดิม
- ลดการเขียนโค้ดซ้ำซ้อน ที่ต้องสร้างหลายเวอร์ชันสำหรับแต่ละชนิดข้อมูล

ตัวอย่างการประกาศฟังก์ชันแบบ Generics:

\`\`\`
// ✅ ฟังก์ชัน identity ที่รับและส่งคืนค่าชนิดเดียวกันเสมอ
function identity<T>(arg: T): T {
  return arg;
}

// เรียกใช้โดยระบุชนิดข้อมูลที่ต้องการ
let output1 = identity<string>("hello");
//       ^ = let output1: string

// หรือให้ TypeScript infer เอาจากชนิดข้อมูลที่ส่งเข้าไป
let output2 = identity(123);
//       ^ = let output2: number

// ✅ ฟังก์ชัน getProperty ที่รับ object กับชื่อ key แล้วส่งค่าสำหรับ key นั้นออกมา
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: 'John', age: 30 };

let name = getProperty(person, 'name');
//    ^ = let name: string

let age = getProperty(person, 'age');
//   ^ = let age: number

let weight = getProperty(person, 'weight'); // ❌ error เพราะ person ไม่มี key ชื่อ weight

// ✅ ฟังก์ชัน merge ที่รวม object สองตัวเข้าด้วยกัน
function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

let result = merge({ name: 'John' }, { age: 30 });
// result จะมี type เป็น { name: string; } & { age: number; }
\`\`\`

Generics ยังนำมาประยุกต์ใช้ได้หลากหลาย เช่น:

1. สร้าง type-safe collection หรือ data structure ที่รองรับหลายชนิดข้อมูล

\`\`\`
// ✅ Stack ที่รองรับการเก็บข้อมูลหลายชนิด
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// สร้าง stack สำหรับเก็บตัวเลข
let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
let num = numberStack.pop(); // num เป็น number

// สร้าง stack สำหรับเก็บ string
let stringStack = new Stack<string>();
stringStack.push("hello");
let str = stringStack.pop(); // str เป็น string | undefined
\`\`\`

2. เขียน utility types ที่รับ type อื่นมาเป็นพารามิเตอร์

\`\`\`
// ✅ Readonly<T> ใช้สำหรับสร้าง type ที่มี property ทั้งหมดเป็น readonly จาก type ที่รับเข้ามา
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

const todo: Readonly<Todo> = {
  title: "Watch TypeScript course",
  description: "Learn advanced types",
};

todo.title = "Read a book"; // ❌ error เพราะ title เป็น readonly

// ✅ Partial<T> ใช้สร้าง type ที่มี property ทั้งหมดเป็น optional จาก type ที่ส่งเข้ามา
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// ประกาศ updateTodo โดยรับ partialTodo ที่เป็น Partial<Todo>
function updateTodo(partialTodo: Partial<Todo>) {
  // ...
}

// เรียกใช้ได้โดยไม่ต้องส่งทุก property เหมือน Todo ปกติ
updateTodo({ title: "Updated title" });
\`\`\`

นอกจากนี้ เรายังสามารถใช้ Generics ร่วมกับ \`interface\`, \`type alias \`และ \`class\` ได้ด้วย เพื่อสร้างโค้ดที่มีความยืดหยุ่นและนำกลับมาใช้ได้หลายครั้ง

การออกแบบ \`component\`, \`service\` หรือ \`library\` ของเราให้เป็นแบบ generic จะช่วยให้มันสามารถรองรับความต้องการที่หลากหลายมากขึ้น โดยไม่ต้องเขียนซ้ำหลายรอบ และยังคงความปลอดภัยจากการตรวจสอบชนิดข้อมูลอีกด้วย
`;export{n as attributes,e as markdown};
