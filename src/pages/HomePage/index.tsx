import { Button } from "@/components/ui/Button";
import { getImagePath } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-[1536px] p-[56px] h-[calc(100dvh-80px-104px)] mobile:p-[60px_40px]">
      <div className="flex justify-center gap-[100px] mobile:flex-col mobile:gap-[50px] tablet:gap-[16px]">
        <img
          className="w-[500px] aspect-auto tablet:w-[60%]"
          src={getImagePath("/images/tech-life-virtual-reality.png")}
          alt="Tech life virtual reality"
        />
        <div className="mobile:order-first">
          <h1 className="text-[80px] font-semibold tablet-mobile:text-[40px] tablet:text-[60px]">
            <p>React</p>
            <p>TypeScript</p>
            <p>Style Guide</p>
          </h1>
          <Button
            className="mt-[16px]"
            size="lg"
            onClick={() => {
              navigate("/docs");
            }}>
            Start Learning Meow!
          </Button>
        </div>
      </div>
    </div>
  );
}
