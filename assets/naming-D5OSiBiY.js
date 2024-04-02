const n={title:"Naming"},e="# Naming\n\nการตั้งชื่อตัวแปร ฟังก์ชัน และคลาสที่ดี ควรสื่อความหมายชัดเจน เพื่อให้โค้ดอ่านเข้าใจง่าย โดยมีแนวทางดังนี้\n\n## ตัวแปร (Variables)\n\n- ใช้รูปแบบ camelCase เช่น `userName`, `totalCount`\n- ตัวแปร boolean ขึ้นต้นด้วย `is`, `has`, `should` เช่น `isActive`, `hasData`, `shouldUpdate`\n- ค่าคงที่ (constant) ใช้ตัวอักษรใหญ่ทั้งหมด เช่น `MAX_COUNT`, `API_URL`\n- อาร์เรย์ของค่าคงที่ กำหนดเป็น `as const` เช่น `const ROLES = ['admin', 'user'] as const`\n\n## ฟังก์ชัน (Functions)\n\n- ใช้รูปแบบ camelCase เช่น `getUserName`, `calculateTotal`\n- หลีกเลี่ยงการใช้คำย่อ ยกเว้นคำที่ใช้กันทั่วไป เช่น `getMax` แทน `getMaximum`\n- ฟังก์ชันที่ return ค่าเป็น boolean ควรขึ้นต้นด้วย `is`, `has`, `should` เช่น `isValid`, `hasPermission`, `shouldDelete`\n\n## React Component\n\n- ใช้รูปแบบ PascalCase เช่น `UserProfile`, `ProductList`\n- Prop Types ใช้ชื่อคอมโพเนนต์ตามด้วย Props เช่น `UserProfileProps`, `ProductListProps`\n- Callback Props หรือ Event Handler ขึ้นต้นด้วย `on` เช่น `onButtonClick`, `onSubmit`, `onSearchChange`\n- ฟังก์ชัน handler ขึ้นต้นด้วย handle เช่น `handleฺButtonClick`, `handleSubmit`, `handleSearchChange`\n\n## React Hooks\n\n- ใช้รูปแบบ camelCase และขึ้นต้นด้วย use เช่น `useState`, `useEffect`, `useCustomHook`\n- ตัวแปร state และฟังก์ชันตั้งค่า state ควรเป็นคู่กัน เช่น `[count, setCount]`, `[items, setItems]`\n- Custom hook ควรส่งค่ากลับเป็น object เพื่อเข้าถึง state และฟังก์ชันได้ชัดเจน\n";export{n as attributes,e as markdown};