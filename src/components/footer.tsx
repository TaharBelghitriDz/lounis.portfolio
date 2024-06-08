import { Github } from "@geist-ui/icons";
import { Button } from "@nextui-org/react";

export default () => (
  <div className="w-full py-20 bg-black z-50 flex flex-col justify-center items-center gap-2 p-5">
    <div className="flex sm:flex-row flex-col justify-center items-center gap-1 sm:gap-5">
      <span> designer and developer by tahar belghitri </span>
      <Button
        endContent={<Github size={18} />}
        variant="light"
        className=" underline"
      >
        check github profile
      </Button>
    </div>
    <div className="flex sm:flex-row flex-col justify-center items-center gap-1 sm:gap-5">
      <span> all right recieved 2024 </span>
      <Button
        endContent={<Github size={18} />}
        variant="light"
        className=" underline"
      >
        source code
      </Button>
    </div>
  </div>
);
