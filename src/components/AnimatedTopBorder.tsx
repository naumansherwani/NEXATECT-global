import { forwardRef } from "react";

const AnimatedTopBorder = forwardRef<HTMLDivElement>(function AnimatedTopBorder(_, ref) {
  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-[9999] h-[3px]">
      <div
        className="h-full w-full animate-[borderFlow_8s_linear_infinite]"
        style={{
          backgroundSize: "300% 100%",
          backgroundImage:
            "linear-gradient(90deg, #1F385C, #CBB393, #E4D3B6, #CBB393, #1F385C)",
          boxShadow:
            "0 0 10px rgba(203,179,147,0.45), 0 0 20px rgba(31,56,92,0.5)",
        }}
      />
    </div>
  );
});

export default AnimatedTopBorder;
