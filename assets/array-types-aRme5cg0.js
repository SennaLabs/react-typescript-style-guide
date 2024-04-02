const n={title:"Array Types"},r=`# Array Types

ในการประกาศตัวแปร Array ใน TypeScript เรามีทางเลือกในการเขียนอยู่ 2 แบบ คือแบบ \`T[]\` หรือแบบ \`Array<T>\` ซึ่ง \`T\` คือชนิดข้อมูลของสมาชิกใน Array นั้น

ทั้ง 2 แบบให้ผลลัพธ์เหมือนกันทุกประการ จึงเป็นเรื่องของรสนิยมและความคุ้นเคยส่วนตัวมากกว่าว่าจะเลือกใช้แบบไหน แต่เพื่อความเป็นมาตรฐานเดียวกัน เราควรตกลงกันภายในทีมว่าจะใช้แบบไหน และใช้แบบนั้นทั่วทั้งโปรเจค

ตัวอย่างการประกาศตัวแปร Array:

\`\`\`
// ✅ ใช้แบบ T[]
const numbers: number[] = [1, 2, 3];
const strings: string[] = ['a', 'b', 'c'];
const booleans: boolean[] = [true, false, true];

// ✅ ใช้แบบ Array<T>
const numbers: Array<number> = [1, 2, 3];
const strings: Array<string> = ['a', 'b', 'c'];
const booleans: Array<boolean> = [true, false, true];

// ใช้กับ interface หรือ type อื่นๆ ได้
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
];

// หรือเขียนแบบ Array<T>
const people: Array<Person> = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
];
\`\`\`

เราสามารถประกาศ Array แบบ อ่านอย่างเดียว (readonly) ได้ด้วย โดยใช้ \`readonly\` modifier หรือเป็น \`ReadonlyArray<T>\` ซึ่งจะทำให้เราไม่สามารถเปลี่ยนแปลงค่าของ Array นั้นได้ หลังจากสร้างมันขึ้นมาแล้ว

\`\`\`
// ✅ ใช้ readonly กับ T[]
const numbers: readonly number[] = [1, 2, 3];
numbers.push(4); // ❌ error เพราะไม่สามารถแก้ไขค่าได้

// ✅ ใช้ ReadonlyArray<T>
const strings: ReadonlyArray<string> = ['a', 'b', 'c'];
strings[0] = 'd'; // ❌ error เพราะไม่สามารถแก้ไขค่าได้

// readonly ใช้กับ tuple ได้ด้วย
const point: readonly [number, number] = [10, 20];
\`\`\`

การประกาศ Array เป็น readonly มีประโยชน์เมื่อเราต้องการป้องกันไม่ให้มีการแก้ไขค่าของ Array โดยไม่ได้ตั้งใจ ซึ่งจะช่วยหลีกเลี่ยง bug ที่อาจเกิดขึ้นได้ยาก และทำให้โค้ดของเรามีความปลอดภัยมากขึ้น
`;export{n as attributes,r as markdown};
