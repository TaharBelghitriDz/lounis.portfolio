import {
  Briefcase,
  FileMinus,
  Home,
  Info,
  MessageCircle,
} from "@geist-ui/icons";
import { Button, Divider } from "@nextui-org/react";

export default () => {
  return (
    <div className="top-0 fixed max-w-3xl flex justify-center sm:justify-start items-start w-full py-10 z-50 p-5">
      <div className=" flex gap-2 left-0 top-10 bg-zinc-950/20 backdrop-blur-xl p-2  rounded-3xl items-center">
        <Button
          isIconOnly
          startContent={<Home size={20} />}
          radius="lg"
          variant="flat"
        />

        <Button
          isIconOnly
          startContent={<FileMinus size={20} />}
          radius="lg"
          variant="flat"
        />
        <Button
          isIconOnly
          startContent={<Briefcase size={20} />}
          radius="lg"
          variant="flat"
        />
        <Button
          isIconOnly
          startContent={<MessageCircle size={20} />}
          radius="lg"
          variant="flat"
        />
        <Divider className="w-[1px] mx-2 h-5 bg-zinc-300" />
        <Button
          isIconOnly
          startContent={<Info size={22} />}
          radius="lg"
          variant="flat"
        />
      </div>
    </div>
  );
};
