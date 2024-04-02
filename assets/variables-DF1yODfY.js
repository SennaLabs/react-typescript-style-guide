const n={title:"Variables"},e=`# Variables

ในการประกาศตัวแปรใน TypeScript ควรปฏิบัติตามแนวทางเหล่านี้:

1. ใช้ const assertion (\`as const\`) เมื่อต้องการทำให้ค่าของตัวแปรเป็นค่าคงที่ (immutable) หรือเปลี่ยน object ให้มี readonly properties

\`\`\`
const colors = ['red', 'green', 'blue'] as const;
const user = {
  id: 1,
  name: 'John',
} as const;
\`\`\`

2. ใช้ตัวพิมพ์ใหญ่ (upper case) และ underscore สำหรับตัวแปรค่าคงที่

\`\`\`
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
\`\`\`

3. ใช้การตั้งชื่อตัวแปรแบบ camelCase เช่น \`userId\`, \`firstName\`
4. ใช้ Boolean prefix เช่น \`is\`, \`has\`, \`should\` สำหรับตัวแปร boolean เพื่อบ่งบอกถึงสถานะหรือคุณสมบัติ

\`\`\`
const isActive = true;
const hasPermission = false;
const shouldUpdate = true;
\`\`\`

การตั้งชื่อตัวแปรที่สื่อความหมาย และใช้งาน type assertion อย่างเหมาะสม จะทำให้โค้ดอ่านเข้าใจง่าย ลดข้อผิดพลาด และง่ายต่อการปรับเปลี่ยนในอนาคต

## Null & Undefined

ใน TypeScript null และ undefined มีความหมายคล้ายกัน แต่มีจุดประสงค์ในการใช้แตกต่างกันเล็กน้อย

- \`null\` ใช้เพื่อระบุว่าตัวแปรหรือค่านั้นไม่มีค่าอะไรเลย เหมาะสำหรับ:
  - กำหนดค่า null ให้ตัวแปรเพื่อบอกว่ายังไม่มีค่า
  - ส่งค่า \`null\` เป็น argument เพื่อบอกว่าไม่ได้ส่งข้อมูลอะไร
  - คืนค่า \`null\` จากฟังก์ชันเมื่อไม่มีค่าจะส่งกลับ
- \`undefined\` ใช้เพื่อระบุว่าตัวแปรนั้นยังไม่ได้กำหนดค่า เหมาะสำหรับ:
  - ไม่กำหนดค่าให้กับ property ของ object หากต้องการข้ามไป
  - ใช้เป็นค่า default ของ parameter ในฟังก์ชัน
  - แสดงผลเมื่อเรียกใช้ค่าที่ไม่มีการกำหนดไว้ เช่น ใน Prisma query

\`\`\`
let name = null; // กำหนดค่า null เพื่อบอกว่ายังไม่มีค่า
name = 'John';

function greet(name?: string) {
  console.log(name); // undefined ถ้าไม่ส่งค่ามา
  if (name) {
    console.log(\`Hello, \${name}!\`);
  } else {
    console.log('Hello, guest!');
  }
}

const user = {
  name: 'John',
  age: undefined, // ไม่กำหนดค่าให้ age
};

const data = await prisma.user.findUnique({
  where: { id: 1 },
  select: { name: true }, // ไม่เลือก age ทำให้ได้ค่าเป็น undefined
});
\`\`\`

สรุปคือ ใช้ \`null\` เมื่อต้องการกำหนดค่าว่างเปล่าให้ตัวแปรอย่างชัดเจน ส่วน \`undefined\` ใช้เมื่อต้องการข้ามการกำหนดค่าบางอย่างโดยตั้งใจ
`;export{n as attributes,e as markdown};
