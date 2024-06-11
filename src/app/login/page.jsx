import MainFooter from '@/components/Footer'
import MobileGrid from '@/components/Auth/MobileGrid';
import TabGrid from '@/components/Auth/TabGrid';
import LaptopGrid from '@/components/Auth/LaptopGrid';
import LoginForm from '@/components/Auth/LoginForm';
import Navbar from '@/components/Navbar';

const LoginPage = () => {
    return (
        <div className='overflow-hidden'>
            <title>Coderships - Login</title>
            <Navbar />
            <div className='relative '>
                <div className='absolute top-0 left-0 right-0 w-full sm:hidden'>
                    <MobileGrid />
                </div>
                <div className='absolute top-0 left-0 right-0 w-full hidden sm:block lg:hidden'>
                    <TabGrid />
                </div>
                <div className="max-w-[1550px] flex mx-auto pt-56 lg:pt-0 relative">
                    <LoginForm />

                    <div className='hidden lg:flex w-full h-full  max-w-[750px] absolute top-0 right-0'>
                        <LaptopGrid />
                    </div>
                </div>
            </div>

            <MainFooter />
        </div>
    )
}

export default LoginPage
