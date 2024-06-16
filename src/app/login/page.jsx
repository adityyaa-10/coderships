import MainFooter from "@/components/Footer";
import MobileGrid from "@/components/Auth/MobileGrid";
import TabGrid from "@/components/Auth/TabGrid";
import LaptopGrid from "@/components/Auth/LaptopGrid";
import LoginForm from "@/components/Auth/LoginForm";
import Navbar from "@/components/Navbar";

const LoginPage = () => {
  return (
    <div className="overflow-hidden">
      <title>Coderships - Login</title>
      <Navbar />
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 w-full sm:hidden">
          <MobileGrid />
        </div>
        <div className="absolute left-0 right-0 top-0 hidden w-full sm:block lg:hidden">
          <TabGrid />
        </div>
        <div className="relative mx-auto flex max-w-[1550px] pt-56 lg:pt-0">
          <LoginForm />

          <div className="absolute right-0 top-0 hidden w-full max-w-[750px] lg:flex">
            <LaptopGrid />
          </div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
};

export default LoginPage;
