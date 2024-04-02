const n={title:"Component Types"},t=`# Component Types

## Functional Components

สำหรับ Functional Component ให้สร้างไฟล์แยกเป็น \`index.tsx\` กับ \`interface.ts\` โดยไฟล์หลักจะเป็นตัว component ส่วนไฟล์ interface จะเป็นที่ประกาศ props type เหมาะกับ component ที่มีขนาดเล็ก มีหน้าที่ไม่ซับซ้อน ใช้สำหรับ presentational component ที่รับ props มาแสดงผล โดยไม่มี state หรือ logic ภายใน

Structure:

\`\`\`
TextInput/
├─ index.tsx
└─ interface.ts
\`\`\`

interface.ts

\`\`\`
export interface AppProps {
    message: string;
}
\`\`\`

index.tsx

\`\`\`
export function App({ message }: AppProps){
    return <div>{message}</div>
}
\`\`\`

## Higher-Order Components (HOC)

HOC จะมีลักษณะเป็นฟังก์ชันที่รับ component เป็น argument และ return component ใหม่ออกมา โดยสามารถเพิ่ม/แก้ไข props ได้ผ่านทาง \`WithXXXProps\` ที่ประกาศไว้ ใช้สำหรับการ reuse component logic ข้าม component หลายๆ ตัว และต้องการ "inject" props, state หรือ logic เพิ่มเติมเข้าไปใน component ที่มีอยู่

Structure:

\`\`\`
TextInput/
├─ index.ts
├─ interface.ts
├─ TextInput.tsx
└─ withTextInput.tsx
\`\`\`

interface.ts

\`\`\`
export interface WithTextInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
\`\`\`

TextInput.tsx

\`\`\`
export function TextInput({value, onChange}: TextInputProps){
    return <input value={value} onChange={onChange} />;
}
\`\`\`

withTextInput.tsx

\`\`\`
export function withTextInput(Component: React.FC<TextInputProps>){
    function WithTextInput(props: WithTextInputProps){
        // เขียน logic เพื่อจัดการ state บางอย่าง
        const newProps = {
            ...props,
        };
        return <Component {...newProps}>;
    }
    return WithTextInput;
}
\`\`\`

index.ts

\`\`\`
import { TextInput } from './TextInput';
import { withTextInput } from './TextInput';

const ConnectedTextInput = withTextInput(TextInput);
export { ConnectedTextInput as TextInput };
\`\`\`

## Forward ref

ถ้าต้องการใช้ ref กับ functional component สามารถใช้ forwardRef ซึ่งจะช่วยให้ส่ง ref จาก parent component เข้ามาใช้ใน child component ได้

\`\`\`
const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ type, children }, ref) => {
    return (
      <button ref={ref} type={type}>
        {children}
      </button>
    )
  }
)

PrimaryButton.displayName = 'PrimaryButton'

export { PrimaryButton }
\`\`\`

## Forward ref with Higher-Order Component

HOC ก็สามารถใช้ร่วมกับ \`forwardRef\` ได้เช่นกัน โดยประกาศ Props type เป็น \`React.ForwardRefRenderFunction\` ซึ่งจะมี type parameter เป็น \`<RefType, PropsType>\`
เวลาสร้าง HOC ที่ใช้ \`forwardRef\` แนะนำให้กำหนด \`displayName\` ให้กับ component ที่สร้างขึ้นใหม่ด้วย เพื่อให้ debug ได้ง่ายขึ้น

\`\`\`
export function withPrimaryButton(Component: React.FC<PrimaryButtonProps>) {
  const ForwardedPrimaryButton = forwardRef<
    HTMLButtonElement,
    PrimaryButtonProps
  >(({ type, children }, ref) => {
    return (
      <button ref={ref} type={type}>
        {children}
      </button>
    )
  })

  ForwardedPrimaryButton.displayName =
    Component.displayName || Component.name || 'Component'

  return ForwardedPrimaryButton
}
\`\`\`
`;export{n as attributes,t as markdown};
