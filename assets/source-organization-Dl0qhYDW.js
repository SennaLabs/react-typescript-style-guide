const n={title:"Source Organization"},t=`# Source Organization

## Project Structure

Frontend project structure:

\`\`\`
src/
├─ assets/
│  ├─ icons/
│  │  ├─ search.svg
│  │  └─ ...
├─ client/
│  ├─ Client.ts
│  └─ ...
├─ components/
│  ├─ Button/
│  ├─ forms/
│  │  ├─ TextInputField/
│  │  │  ├─ index.ts
│  │  │  ├─ interface.ts
│  │  │  ├─ TextInputField.tsx
│  │  │  └─ withTextInputField.tsx
│  ├─ layouts/
│  │  │  ├─ Header/
│  │  │  ├─ Footer/
│  │  │  └─ AppLayout/
│  ├─ TextInput/
│  └─ ...
├─ contexts/
│  ├─ ClientContext.ts
├─ features/
│  ├─ auth/
│  │  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ LoginPage/
│  │  │  │  ├─ components/
│  │  │  │  │  ├─ LoginForm/
│  │  │  │  │  └─ ...
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ interface.ts
│  │  │  │  ├─ LoginPage.tsx
│  │  │  │  └─ withLoginPage.tsx
│  │  │  └─ ...
│  │  └─ authRoutes.tsx
│  ├─ userManagement/
│  │  ├─ components/
│  │  ├─ pages/
│  │  └─ userManagementRoutes.tsx
├─ hooks/
│  ├─ user/
│  │  ├─ useUserAction.ts
│  │  └─ ...
│  ├─ useAuthentication.tsx
│  └─ ...
├─ interfaces/
├─ enums/
├─ lib/
│  ├─ hoc/
│  │  ├─ withAuthenGuard.tsx
│  │  └─ ...
│  ├─ utils.ts
│  └─ ...
├─ models/
│  ├─ category/
│  ├─ user/
│  │  ├─ UserType.ts
│  │  ├─ UserFormType.ts
│  │  └─ ...
│  └─ ...
├─ styles/
│  ├─ toastify.css
│  ├─ date-picker.css
│  └─ ...
├─ index.css
├─ App.tsx
├─ main.tsx
└─ ...
\`\`\`

- \`assets\` เก็บไฟล์ที่ใช้ในแอปพลิเคชัน เช่น \`icons\`, \`images\`, หรือไฟล์อื่นๆ
- \`client\` จัดการการเชื่อมต่อกับฝั่ง Backend และการส่งข้อมูลไปยังเซิร์ฟเวอร์
- \`components\` เก็บ components ที่ใช้ซ้ำในแอปพลิเคชันแยกเป็นโฟลเดอร์ย่อยตามลักษณะและการทำงาน เช่น \`Button\`, \`forms\`, \`layouts\`
- \`contexts\` เก็บ Context API ที่ใช้ในการจัดการสถานะของแอปพลิเคชัน เช่น \`ClientContext\`
- \`features\` เก็บโฟลเดอร์และไฟล์แยกเป็น feature ต่าง ๆ ของแอปพลิเคชัน เช่น \`auth\`, \`userManagement\`
- \`hooks\` เก็บ custom hooks ที่ใช้ในการจัดการสถานะหรือฟังก์ชันอื่น ๆ ที่ใช้ซ้ำในแอปพลิเคชัน เช่น \`useAuthentication\`
- \`interfaces\` กำหนดรูปแบบข้อมูลที่ใช้ในแอปพลิเคชัน เช่น \`OptionType\`, \`ImageType\`, \`FunctionComponentType\`
- \`enums\` ใช้เก็บไฟล์ที่มีค่าคงที่ (constants) โดยทั่วไปจะใช้สำหรับการเก็บค่าที่ไม่เปลี่ยนแปลง เช่น \`UserRole\`, \`UserStatus\`
- \`lib\` เก็บไลบรารีหรือฟังก์ชันที่ใช้ในโปรเจค เช่น ฟังก์ชันสำหรับการทำ Higher-Order Components (\`hoc\`), ฟังก์ชันช่วยเหลือทั่วไป (\`utils\`)
- \`models\` ใช้เก็บโมเดลข้อมูลที่ใช้ในแอปพลิเคชัน เช่น \`category\`, \`user\`
- \`styles\` เก็บไฟล์ CSS หรือสไตล์ที่ใช้ในแอปพลิเคชัน เช่น \`toastify.css\`, \`date-picker.css\`
`;export{n as attributes,t as markdown};
