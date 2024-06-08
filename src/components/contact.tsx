import { ArrowUpRight, Github } from "@geist-ui/icons";
import { Button } from "@nextui-org/react";

export default () => {
  return (
    <div className=" w-full flex flex-col items-start justify-start gap-2 ">
      <div className="flex flex-col w-full gap-10 py-10 ">
        <span className="text-4xl container font-black">.Contact me </span>
        <span className="text-sm text-zinc-400 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
          exercitationem animi illo quam soluta, labore rerum dicta sapiente
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
          exercitationem animi illo quam soluta, labore rerum dicta sapiente
        </span>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
        <Button
          isIconOnly
          startContent={<Github />}
          size="lg"
          radius="lg"
          variant="flat"
          color="warning"
        />
      </div>
    </div>
  );
};
