import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="h-[calc(100dvh-70px)] w-full font-gilroyRegular select-none max-lg:px-10">
      <div className="h-full w-full flex flex-col items-center justify-center gap-4">
        <div className="text-6xl font-bold tracking-wider">Online Web Editor</div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="max-w-[815px] text-justify select-none font-gilroyRegular tracking-normal text-3xl">
            Experience the ultimate online code editor, packed with powerful
            features to streamline your development workflow.
          </div>
          <div>
            <Link to="/compiler">
              <Button className="font-semibold text-lg tracking-wide p-6">Try Editor for free</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
