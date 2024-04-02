const t={title:"Template Literal Types"},e=`# Template Literal Types

Template Literal Types เป็นฟีเจอร์ใหม่ใน TypeScript 4.1 ที่ช่วยให้เราสามารถสร้าง string literal types ที่มีความยืดหยุ่นและซับซ้อนมากขึ้น โดยอาศัยการใช้ template strings และ type parameters เข้ามาช่วย

การใช้ Template Literal Types มีประโยชน์หลายอย่าง เช่น:

- ช่วยให้ type safe มากขึ้น เพราะสามารถกำหนดรูปแบบของ string ได้อย่างละเอียด
- เขียนโค้ดสั้นลง เพราะไม่ต้องกำหนด union type ของ string ทีละตัว
- ง่ายต่อการ refactor และ maintain เพราะเปลี่ยนค่าได้ในที่เดียว
  ตัวอย่างการใช้งาน Template Literal Types:

\`\`\`
// ✅ ดี - ใช้ Template Literal Types กำหนดรูปแบบของ API endpoints
type APIEndpoint = \`/api/\${"users" | "products" | "orders"}/\${string}\`;

function fetchData(url: APIEndpoint) {
  // ...
}

fetchData("/api/users/123"); // ✅ ผ่าน
fetchData("/api/products/abc"); // ✅ ผ่าน
fetchData("/api/categories/xyz"); // ❌ Error: Type '"/api/categories/xyz"' is not assignable to type 'APIEndpoint'

// ✅ ดี - ใช้ Template Literal Types กับ key ของ object
type Attributes = "name" | "age" | "email";
type InputEvent = \`update:\${Attributes}\`;

function dispatchInputEvent(event: InputEvent, value: string) {
  // ...
}

dispatchInputEvent("update:name", "John"); // ✅ ผ่าน
dispatchInputEvent("update:age", "30"); // ✅ ผ่าน
dispatchInputEvent("update:address", "123 Main St"); // ❌ ไม่ผ่าน

// ✅ ดี - ใช้ Template Literal Types กำหนดรูปแบบของ alignment ใน CSS
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// รับค่าเป็น
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"
declare function setAlignment(
  value: \`\${VerticalAlignment}-\${HorizontalAlignment}\`
): void;

setAlignment("top-left"); // ✅ ผ่าน
setAlignment("top-middel"); // ❌ ไม่ผ่าน
setAlignment("top-pot"); // ❌ ไม่ผ่าน
\`\`\`

ในตัวอย่างนี้ เราสร้าง type \`APIEndpoint\` ขึ้นมา โดยใช้ Template Literal Types ในการกำหนดว่า URL ต้องเริ่มต้นด้วย \`/api/\` ตามด้วย \`users\`, \`products\` หรือ \`orders\` เท่านั้น และลงท้ายด้วย string อะไรก็ได้ ทำให้เวลาเรียกใช้ฟังก์ชัน \`fetchData\` เราไม่สามารถส่ง URL ที่ไม่ตรงกับรูปแบบที่กำหนดไว้ได้
`;export{t as attributes,e as markdown};
