---
title: Naming
---

# Naming

การตั้งชื่อตัวแปร ฟังก์ชัน และคลาสที่ดี ควรสื่อความหมายชัดเจน เพื่อให้โค้ดอ่านเข้าใจง่าย โดยมีแนวทางดังนี้

## ตัวแปร (Variables)

- ใช้รูปแบบ camelCase เช่น `userName`, `totalCount`
- ตัวแปร boolean ขึ้นต้นด้วย `is`, `has`, `should` เช่น `isActive`, `hasData`, `shouldUpdate`
- ค่าคงที่ (constant) ใช้ตัวอักษรใหญ่ทั้งหมด เช่น `MAX_COUNT`, `API_URL`
- อาร์เรย์ของค่าคงที่ กำหนดเป็น `as const` เช่น `const ROLES = ['admin', 'user'] as const`

## ฟังก์ชัน (Functions)

- ใช้รูปแบบ camelCase เช่น `getUserName`, `calculateTotal`
- หลีกเลี่ยงการใช้คำย่อ ยกเว้นคำที่ใช้กันทั่วไป เช่น `getMax` แทน `getMaximum`
- ฟังก์ชันที่ return ค่าเป็น boolean ควรขึ้นต้นด้วย `is`, `has`, `should` เช่น `isValid`, `hasPermission`, `shouldDelete`

## React Component

- ใช้รูปแบบ PascalCase เช่น `UserProfile`, `ProductList`
- Prop Types ใช้ชื่อคอมโพเนนต์ตามด้วย Props เช่น `UserProfileProps`, `ProductListProps`
- Callback Props หรือ Event Handler ขึ้นต้นด้วย `on` เช่น `onButtonClick`, `onSubmit`, `onSearchChange`
- ฟังก์ชัน handler ขึ้นต้นด้วย handle เช่น `handleฺButtonClick`, `handleSubmit`, `handleSearchChange`

## React Hooks

- ใช้รูปแบบ camelCase และขึ้นต้นด้วย use เช่น `useState`, `useEffect`, `useCustomHook`
- ตัวแปร state และฟังก์ชันตั้งค่า state ควรเป็นคู่กัน เช่น `[count, setCount]`, `[items, setItems]`
- Custom hook ควรส่งค่ากลับเป็น object เพื่อเข้าถึง state และฟังก์ชันได้ชัดเจน
