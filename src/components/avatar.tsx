import { MessageCircle } from "@geist-ui/icons";
import { Avatar, Button } from "@nextui-org/react";

export default () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-10 py-10 pb-52">
      <Avatar size="lg" className="z-40" />
      <span className="text-7xl container font-black"> Tahar Belghitri </span>
      <span className="text-sm text-zinc-400 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
        exercitationem animi illo quam soluta, labore rerum dicta sapiente ut
        tempora numquam qui ab quis praesentium at perspiciatis adipisci magnam.
      </span>
      <span className="text-sm text-zinc-400 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
        exercitationem animi illo quam soluta, labore rerum dicta sapiente
      </span>
      <Button
        variant="flat"
        radius="lg"
        color="warning"
        className="w-  "
        endContent={<MessageCircle />}
      >
        contact me
      </Button>
    </div>
  );
};
