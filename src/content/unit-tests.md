---
title: Unit Tests
---

# Unit Tests

Unit Test เป็นการทดสอบในระดับย่อยที่สุด โดยทดสอบแต่ละ component หรือฟังก์ชันแยกจากส่วนอื่นๆ ของระบบ เพื่อให้มั่นใจว่าแต่ละหน่วยทำงานถูกต้องตามที่ออกแบบไว้

ในการเขียน Unit Test ที่ดี ควรคำนึงถึงสิ่งต่อไปนี้

- ทดสอบเฉพาะพฤติกรรมที่สำคัญของ component เท่านั้น ไม่จำเป็นต้องครอบคลุมทุกกรณี

- อย่าทดสอบรายละเอียดปลีกย่อยภายใน (implementation details) เพราะอาจเปลี่ยนแปลงบ่อย ให้ทดสอบแค่ public interface เท่านั้น

- ควรแยก test แต่ละอันให้อิสระจากกัน ไม่ควรขึ้นแก่กัน เพื่อป้องกันไม่ให้ test พังเป็นทอดๆ

- test ควรอ่านเข้าใจง่ายและบอกชัดว่าเช็คอะไร โดยการตั้งชื่อเทสเป็นประโยคว่า "ควรทำอะไร เมื่ออะไรเกิดขึ้น"

- กรณีที่ต้องเช็คหลายอย่างในฟังก์ชันเดียวกัน ให้แยกเป็นหลายๆ test
  test ไม่ควรขึ้นกับสิ่งแวดล้อมภายนอก เช่น `network`, `database` หรือ `third-party service` ต่างๆ ควรจำลองสิ่งเหล่านั้นด้วย `stub/mock`

```
// ตัวอย่าง unit test ของ component ง่ายๆ
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Greeting } from './Greeting';

test('should render greeting message', () => {
  render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});

test('should render sign in button when user is signed out', () => {
  render(<Greeting isSignedIn={false} />);
  expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
});

test('should call callback handler when sign out button is clicked', async () => {
  const handleSignOut = jest.fn();
  render(<Greeting isSignedIn={true} onSignOut={handleSignOut} />);

  await userEvent.click(screen.getByRole('button', { name: 'Sign Out' }));

  expect(handleSignOut).toHaveBeenCalledTimes(1);
});
```

ในตัวอย่างนี้ เรามีการเขียน test สำหรับ component `<Greeting>` โดยแยกเป็น 3 กรณี คือ

1. เช็คว่ามีการแสดงข้อความทักทายตามชื่อที่ส่งเข้ามาใน prop `name` หรือไม่

2. เช็คว่ามีปุ่ม Sign In เมื่อส่ง prop `isSignedIn={false}` เข้ามา

3. เช็คว่าฟังก์ชัน callback `onSignOut` ถูกเรียกเมื่อกดปุ่ม Sign Out

ใช้ [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) ร่วมกับ `userEvent` ในการจำลองการ render component และการกระทำของผู้ใช้ เพื่อเทียบกับผลลัพธ์ที่คาดหวัง

นอกจากนี้ ควรเขียน unit test ในส่วนของ `custom hook`, `helper` และ `utility function` เพื่อให้ครอบคลุมการทำงานที่สำคัญด้วยของแอปพลิเคชันด้วย
