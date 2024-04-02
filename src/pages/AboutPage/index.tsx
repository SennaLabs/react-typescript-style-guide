export function AboutPage() {
  return (
    <div className="mx-auto max-w-[1536px] min-h-[calc(100dvh-80px-104px)] p-[56px] mobile:p-[60px_40px]">
      <h1 className="text-[24px] font-semibold">เกี่ยวกับเว็บไซต์นี้</h1>

      <h2 className="text-[20px] font-semibold mt-[24px]">วัตถุประสงค์</h2>
      <p>
        เว็บไซต์นี้จัดทำขึ้นเพื่อรวบรวมและเผยแพร่แนวทางการเขียนโค้ด React และ
        TypeScript (Style Guide) ที่เป็นมาตรฐานของบริษัท
        เพื่อให้ทุกคนในทีมยึดถือเป็นหลักปฏิบัติเดียวกัน
        ซึ่งจะช่วยให้โค้ดของเรามีความสะอาด เป็นระเบียบ อ่านง่าย บำรุงรักษาสะดวก
        และเกิดข้อผิดพลาดน้อยลง
        ส่งผลให้การพัฒนาซอฟต์แวร์เป็นไปอย่างราบรื่นและมีประสิทธิภาพมากขึ้น
      </p>

      <h2 className="text-[20px] font-semibold mt-[24px]">
        ความสำคัญของ Style Guide
      </h2>
      <p>
        จากประสบการณ์การทำงานที่ผ่านมา
        เราพบว่าการขาดการกำหนดแนวทางการเขียนโค้ดที่ชัดเจนและเป็นมาตรฐานเดียวกัน
        ก่อให้เกิดปัญหามากมาย เช่น โค้ดอ่านยาก สับสน แก้ไขลำบาก ทำงานซ้ำซ้อน
        คุณภาพไม่สม่ำเสมอ และเสียเวลาโต้แย้งในรายละเอียดเล็กๆ น้อยๆ
        ทีมเราจึงได้ศึกษาแนวทางปฏิบัติที่ดีจากบริษัทชั้นนำอย่าง Airbnb, Google,
        Microsoft ฯลฯ นำมาปรับใช้ จนกลายมาเป็น Style Guide ฉบับนี้
        ซึ่งจะช่วยตอบคำถามว่าเราควรเขียนโค้ดแบบไหนในสถานการณ์ต่างๆ
        และทำให้ทุกคนในทีมอยู่บนมาตรฐานเดียวกัน ลดความเข้าใจที่คลาดเคลื่อน
        เพิ่มประสิทธิภาพการทำงานร่วมกัน
      </p>

      <h2 className="text-[20px] font-semibold mt-[24px]">เนื้อหาภายในเว็บ</h2>
      <p>
        Style Guide ของเราครอบคลุมหัวข้อสำคัญในการพัฒนาด้วย React และ TypeScript
        ดังนี้
      </p>

      <ul>
        <li>
          <strong>Types: </strong> กลุ่มเนื้อหาเกี่ยวกับการใช้ประเภทข้อมูลใน
          TypeScript เช่น Type Inference, Return Types, Type Guards & Narrowing,
          Template Literal Types, Type Definition, Array Types และ Generic Types
        </li>
        <li>
          <strong>Functions:</strong>&nbsp;แนวทางการเขียนฟังก์ชันใน TypeScript
        </li>
        <li>
          <strong>Variables:</strong> การประกาศและใช้งานตัวแปรอย่างมีประสิทธิภาพ
        </li>
        <li>
          <strong>Naming: </strong> กฎการตั้งชื่อตัวแปร ฟังก์ชัน คลาส
          ให้สื่อความหมายชัดเจน
        </li>
        <li>
          <strong>Source Organization:</strong>&nbsp;
          การจัดวางโครงสร้างไฟล์และโฟลเดอร์ของโปรเจกต์ให้เป็นระเบียบ
          ง่ายต่อการค้นหาและบำรุงรักษา
        </li>
        <li>
          <strong>React:</strong>&nbsp;
          หลักการและแนวปฏิบัติที่ดีในการเขียนแอปพลิเคชันด้วย React เช่น Props To
          State, Component Conventions, Component Types เป็นต้น
        </li>
        <li>
          <strong>Tests:</strong> วิธีการเขียน Unit Tests และ Automated Tests
          เพื่อทดสอบโค้ดของเราอย่างมีประสิทธิภาพ
        </li>
      </ul>

      <p className="mt-[16px]">
        โดยในแต่ละหัวข้อจะมีรายละเอียดและตัวอย่างโค้ดที่ช่วยให้เข้าใจและนำไปประยุกต์ใช้ได้จริง
        ครอบคลุมเนื้อหาตั้งแต่ระดับพื้นฐานไปจนถึงเทคนิคขั้นสูง
        พร้อมอธิบายข้อดีข้อเสีย และเหตุผลในการเลือกใช้แต่ละแบบอย่างละเอียด
      </p>

      <h2 className="text-[20px] font-semibold mt-[24px]">ทีมผู้จัดทำ</h2>
      <p>เว็บไซต์นี้พัฒนาและดูแลโดยทีม Developer Relation ประกอบด้วย</p>
      <div className="mt-[16px]">
        <div className="w-[200px]">
          <div className="border border-secondary p-[16px] bg-gray  rounded-[8px]">
            <img
              className="w-[80px] aspect-auto mx-auto"
              src="/images/tech-life-cat.png"
              alt="Tech life cat"
            />
          </div>
          <h4 className="font-medium mt-[8px]">Seera Kaenkaew</h4>
          <p className="text-[14px]">Senior Frontend Developer</p>
          <a className="text-[14px]" href="mailto:jay@sennalabs.com">
            jay@sennalabs.com
          </a>
        </div>
      </div>
    </div>
  );
}
