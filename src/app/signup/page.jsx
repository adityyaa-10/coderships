import MainFooter from '@/components/Footer'
import TabGrid from '@/components/Auth/TabGrid';
import LaptopGrid from '@/components/Auth/LaptopGrid';
import MobileGrid from '@/components/Auth/MobileGrid';
import SignupForm from '@/components/Auth/SignupForm';
import Navbar from '@/components/Navbar';

const LoginPage = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <title>Welcome to coderships!</title>
                <Navbar />
                <div className='relative '>
                    <div className='absolute top-0 left-0 right-0 w-full sm:hidden'>
                        <MobileGrid />
                    </div>
                    <div className='absolute top-0 left-0 right-0 w-full hidden sm:block lg:hidden'>
                        <TabGrid />
                    </div>
                    <div className="max-w-[1550px] mx-auto pt-56 lg:pt-0">
                        <SignupForm />

                        <div className='hidden lg:block w-full absolute top-0 right-0 max-w-[750px]'>
                            <LaptopGrid />
                        </div>
                    </div>
                </div>

                <MainFooter />
            </div>
        </>
    )
}

export default LoginPage
