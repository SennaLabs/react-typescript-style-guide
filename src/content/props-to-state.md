---
title: Props to state
---

# Props to state

ในบางกรณี เราอาจต้องใช้ค่า prop เป็นค่าเริ่มต้นให้กับ state ใน component ซึ่งถ้าจำเป็นต้องทำแบบนั้นจริงๆ ก็ควรทำตามแนวทางดังนี้

ใช้ชื่อ prop ขึ้นต้นด้วย "initial"

เพื่อให้ชัดเจนว่า prop นั้นไม่ได้ใช้โดยตรง แต่เป็นแค่ค่าเริ่มต้นของ state ให้เติมคำนำหน้าว่า "initial" ไว้ในชื่อ prop เช่น

- `initialValues`
- `initialPage`
- `initialSelectedTab`

```
// ❌ ไม่ดี - ชื่อ prop ไม่ชัดเจน
interface MyFormProps {
  values: Record<string, string>;
}

function MyForm({ values }: MyFormProps) {
  const [formValues, setFormValues] = useState(values);
  // ...
};

// ✅ ดี - ชื่อ prop แสดงชัดเจนว่าเป็นค่าเริ่มต้น
interface MyFormProps {
  initialValues: Record<string, string>;
}

function MyForm({ initialValues }: MyFormProps) {
  const [formValues, setFormValues] = useState(initialValues);
  // ...
};
```
