import { cn } from "@nextui-org/react";
import { useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";

export const LineTracker = (props: {
  component: JSX.Element;
  className?: string;
}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "center"],
  });

  scrollYProgress.on("change", (e) => {
    setHeight(() => e * 300);
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-0 rounded-full relative w-full  justify-start items-start",
        props.className
      )}
    >
      <motion.div
        className="h-96 bg-zinc-300 w-[1px] rounded-full absolute top-0 left-[9.5px]"
        ref={ref}
        style={{ height: height + "px" }}
      />

      <div className="flex flex-row p-0 w-full space-x-10 justify-end items-end">
        <div className="h-[300px]" />

        <motion.span
          animate={{ opacity: height >= 250 ? 1 : 0 }}
          className="flex container text-xl font- text-zinc-200"
        >
          2014
        </motion.span>
      </div>
      <motion.div
        className="w-full pt-28"
        animate={{
          opacity: height == 300 ? 1 : 0,
        }}
      >
        {props.component}
      </motion.div>
    </div>
  );
};
