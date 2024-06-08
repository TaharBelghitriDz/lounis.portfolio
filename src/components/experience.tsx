import { LineTracker } from "../lib";

const EventComponent = () => (
  <div className="flex flex-col gap-10">
    <span className="text-4xl container font-black">.Experience </span>
    <span className="text-sm text-zinc-400 ">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
      exercitationem animi illo quam soluta, labore rerum dicta sapiente Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
      exercitationem animi illo quam soluta, labore rerum dicta sapiente
    </span>
  </div>
);

export default () => {
  return (
    <div className="flex flex-col gap-10 py-10 pb-96">
      <span className="text-4xl container font-black">.Experience </span>
      <span className="text-sm text-zinc-400 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
        exercitationem animi illo quam soluta, labore rerum dicta sapiente Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Corrupti cum
        exercitationem animi illo quam soluta, labore rerum dicta sapiente
      </span>
      <div className="flex flex-col space-y-10">
        <LineTracker component={<EventComponent />} />
        <LineTracker component={<EventComponent />} />
        <LineTracker component={<EventComponent />} />
        <LineTracker component={<EventComponent />} />
      </div>
    </div>
  );
};
