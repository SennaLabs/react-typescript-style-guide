const n={title:"Return Types"},e=`# Return Types

การระบุชนิดข้อมูลที่ฟังก์ชันส่งคืน (return type) เป็นสิ่งสำคัญ แม้ว่า TypeScript จะไม่ได้บังคับ แต่ก็ถือเป็น best practice ที่ควรทำ ตามกฎของ ([ESLint](https://typescript-eslint.io/rules/explicit-function-return-type/))

การระบุ return type ชัดเจน มีประโยชน์หลายอย่าง เช่น:

- ทำให้ทราบได้ทันทีว่าฟังก์ชันนี้คืนค่าอะไรกลับมา
- ช่วยให้เห็นข้อผิดพลาดได้เร็วขึ้น เมื่อมีการแก้ไขโค้ดภายหลัง
- ทำให้ refactor ง่ายขึ้น เพราะมั่นใจว่าค่าที่คืนไปนั้นมีชนิดที่ถูกต้อง
- ช่วยลดภาระการทำงานของ TypeScript compiler

\`\`\`
// ✅ ดี - ระบุ return type
function getUserName(userId: string): string {
  // ... implementation ...
  return userName;
}

// ❌ ไม่ดี - ไม่ระบุ return type
function getUserAge(userId: string) {
  // ... implementation ...
  return age;
}
\`\`\`

ในตัวอย่างแรก เราระบุชัดเจนว่าฟังก์ชัน \`getUserName\` รับ parameter \`userId\` ที่เป็น string และคืนค่าเป็น string เช่นกัน ทำให้เวลาเรียกใช้ฟังก์ชันนี้ เรารู้เลยว่าจะได้อะไรกลับมา

ในทางตรงข้าม ตัวอย่างที่สอง ฟังก์ชัน \`getUserAge\` ไม่ได้ระบุ return type ทำให้เราไม่รู้ว่ามันจะคืนอะไรกลับมา อาจเป็น number, string หรืออย่างอื่นก็ได้ เวลาไปใช้ต่อจะทำให้สับสน และอาจเกิดข้อผิดพลาดได้ง่าย

ดังนั้น การระบุ return type จึงเป็นสิ่งที่ควรทำเสมอ เพื่อให้โค้ดของเรามีคุณภาพ อ่านเข้าใจง่าย และ maintainable ในระยะยาว
`;export{n as attributes,e as markdown};
