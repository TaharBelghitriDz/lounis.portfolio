import { Divider } from "@nextui-org/react";
import Avatar from "./components/avatar";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Study from "./components/study";

function App() {
  return (
    <main className="dark text-foreground bg-background h-full min-h-screen w-full flex flex-col justify-center items-center overflow-hidden overflow-y-auto">
      <img
        src="/grainy.png"
        alt="grainy"
        className=" fixed w-screen h-screen object-cover z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative flex flex-col items-center justify-center gap-4 z-10 w-full max-w-3xl py-52 overflow-hidden p-5">
        <Navbar />
        <Avatar />
        <Divider className=" h-[1px] mt-10 bg-zinc-400" />
        <Study />
        <Divider className=" h-[1px] mt-10 bg-zinc-400" />
        <Experience />
        <Divider className=" h-[1px] mt-10 bg-zinc-400" />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

export default App;
