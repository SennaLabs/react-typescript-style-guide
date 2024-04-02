const t={title:"Automated Tests"},n=`# Automated Tests

Automated Test เป็นการทดสอบในระดับที่สูงขึ้น โดยจะจำลองการใช้งานแอปพลิเคชันเสมือนเป็นผู้ใช้จริงๆ ผ่าน user interface (UI) เพื่อเช็คว่าการทำงานหลักๆ เป็นไปตามที่คาดหวังหรือไม่

ข้อดีของ automated test คือสามารถเทสต์ workflow หลักของระบบแบบ end-to-end ได้ ครอบคลุมการทำงานร่วมกันของหลายๆ component และระบบย่อย ทำให้มั่นใจได้ว่าระบบใหญ่ทั้งหมดสามารถใช้งานได้จริง

เครื่องมือยอดนิยมสำหรับเขียน automated test ของ web app ได้แก่ [Cypress](https://www.cypress.io/), [Playwright](https://playwright.dev/) และ [Selenium](https://www.selenium.dev/) โดยมีแนวทางในการเขียนที่ดีดังนี้

- เลือกเฉพาะ \`happy path (Positive)\` สำคัญๆ ในการใช้งานระบบมาเขียน test ไม่จำเป็นต้องครอบคลุมทุกความเป็นไปได้

- หลีกเลี่ยงการเขียน test ที่มีขั้นตอนซับซ้อนเยอะเกินไป แต่ให้แบ่งเป็นหลายๆ test ที่เล็กและอิสระจากกันมากขึ้น

- ใช้ test data ที่แน่นอนและคงที่ เพื่อให้การทดสอบได้ผลลัพธ์ที่แน่นอน

- ใช้ selector ของ element อย่างระมัดระวัง ควรเลือกแบบที่ไม่ง่ายต่อการเปลี่ยนแปลงเวลา refactor UI

\`\`\`
// ตัวอย่าง automated test ด้วย Cypress
describe('Sign Up', () => {
  it('should allow user to sign up with valid email and password', () => {
    cy.visit('/signup');

    cy.get('input[name="email"]').type('test@mail.com');
    cy.get('input[name="password"]').type('Abc123456!');

    cy.get('button[type="submit"]').click();

    cy.get('.welcome-msg').should('contain', 'Welcome test@mail.com');
  });
});

describe('Product Search', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should display empty result when search term does not match', () => {
    cy.get('input[name="search"]').type('nosuchproduct');

    cy.get('button[type="submit"]').click();

    cy.get('.product-item').should('not.exist');
    cy.get('.no-result-msg').should('contain', 'No product found');
  });

  it('should show only products that match search term', () => {
    cy.get('input[name="search"]').type('running shoes');

    cy.get('button[type="submit"]').click();

    cy.get('.product-item').should('have.length', 2);
    cy.get('.product-name').should('contain', 'running shoes');
  });
});
\`\`\`

ในตัวอย่างนี้ เราใช้ Cypress ในการเขียน automated test โดยมีกลุ่ม test 2 ชุด คือ

​1. ทดสอบ workflow การลงทะเบียนผู้ใช้ใหม่ (sign up)

- เปิดหน้า sign up
- กรอกอีเมลและรหัสผ่าน
- กดปุ่ม submit
- เช็คว่ามีข้อความต้อนรับ "Welcome [email]" แสดงหลังลงทะเบียนสำเร็จ

2. ทดสอบการค้นหาสินค้า (product search)

- เปิดหน้า product list
  - ค้นหาด้วยคีย์เวิร์ดที่ไม่ตรงกับสินค้าใดๆ
- เช็คว่าไม่มี product item แสดงเลย และมีข้อความ "No product found"
  - ค้นหาด้วยคีย์เวิร์ดที่ตรงกับสินค้าบางชิ้น
- เช็คว่ามี product item แสดงถูกจำนวน และตรงกับคีย์เวิร์ดที่ค้นหา

กระบวนการทำงานหลักๆ เหล่านี้ เป็นสิ่งสำคัญที่ควร automate test ไว้ เพื่อให้มั่นใจว่าระบบจะ "ใช้งานได้จริง" และไม่มีอะไรพังระหว่างการ deploy version ใหม่ๆ

ในการทดสอบระบบ ควรมีทั้ง unit test และ automation test เพื่อให้ครอบคลุมทั้งในระดับ \`component\`, \`function\` ย่อย ไปจนถึง \`user flow\` หลัก ทั้งนี้ไม่จำเป็นต้องมี test ที่ cover ทุกอย่าง 100% แต่ควรโฟกัสไปที่ \`happy path\` หลักๆ เป็นอันดับแรก เพื่อให้ได้ประโยชน์สูงสุดจากทรัพยากรในการเขียน test ที่มีอยู่อย่างจำกัด

ควรใช้เทคนิคต่างๆ เช่น \`stub\`, \`mock\`, หรือ \`data generator\` เพื่อลดความซับซ้อนและแยก test แต่ละอันออกจากกันให้ได้มากที่สุด เพื่อทำให้ test มีความน่าเชื่อถือและบำรุงรักษาได้ง่ายในระยะยาว
`;export{t as attributes,n as markdown};
