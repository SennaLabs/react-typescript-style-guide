const n={title:"Type Inference"},e=`# Type Inference

ในการประกาศตัวแปรใน TypeScript เราสามารถระบุชนิดข้อมูล (type) ได้อย่างชัดเจน หรือใช้การอนุมาน (inference) ชนิดข้อมูลจากค่าเริ่มต้นที่กำหนดให้ โดยหลักการแล้ว เราควรใช้การอนุมานเมื่อเป็นไปได้ เพื่อลดความซับซ้อนและทำให้โค้ดอ่านง่ายขึ้น แต่ถ้าชนิดข้อมูลไม่ชัดเจน เราควรระบุชนิดข้อมูลเอาไว้ เพื่อป้องกันข้อผิดพลาด ตัวอย่างเช่น

\`\`\`ts
// ✅ ดี - ใช้การอนุมานชนิดข้อมูล เมื่อสามารถทำได้
const name = "John"; // TypeScript จะอนุมานว่า name เป็น string
const age = 30; // TypeScript จะอนุมานว่า age เป็น number

// ✅ ดี - ระบุชนิดข้อมูลอย่างชัดเจน เมื่อค่าเริ่มต้นไม่ได้บ่งบอกชนิดข้อมูลที่ชัดเจน
let endDate: Date; // ระบุว่า endDate เป็น Date object
let items: string[]; // ระบุว่า items เป็น array ของ string

// ❌ ไม่ดี - ไม่จำเป็นต้องระบุชนิดข้อมูล เพราะสามารถอนุมานได้จากค่าเริ่มต้น
const firstName: string = "John"; // ไม่จำเป็น เพราะ "John" ชัดเจนอยู่แล้วว่าเป็น string
const total: number = 50; // ไม่จำเป็น เพราะ 50 เป็น number อยู่แล้ว
\`\`\`

ในตัวอย่างข้างต้น เราไม่จำเป็นต้องระบุชนิดข้อมูลให้กับตัวแปร \`name\` และ \`age\` เพราะ TypeScript สามารถอนุมานได้จากค่าเริ่มต้น ส่วนตัวแปร \`endDate\` และ \`items\` เราต้องระบุชนิดข้อมูลเพราะค่าเริ่มต้นไม่ได้บอกอะไรเกี่ยวกับชนิดข้อมูล

การใช้การอนุมานชนิดข้อมูล จะช่วยให้โค้ดของเรากระชับและเข้าใจง่ายขึ้น และยังช่วยหลีกเลี่ยงข้อผิดพลาดที่อาจเกิดขึ้นจากการระบุชนิดข้อมูลผิดพลาดได้ โดยเราสามารถเชื่อมั่นได้ว่า TypeScript จะอนุมานชนิดข้อมูลได้อย่างถูกต้อง
`;export{n as attributes,e as markdown};
