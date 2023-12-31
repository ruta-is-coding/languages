import myImage from "@/Images/me.jpg";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";

const About = ({ auth }) => {
    return (
        <GuestLayout user={auth.user}>
            <Head title="About me" />
            <h1 className="animate__animated animate__fadeIn animate__slower">
                About me
            </h1>
            <div className="grid md:grid-cols-2 md:gap-14 gap-3 md:items-center">
                <img src={myImage} alt="My photo" className="w-100 my-3" />
                <div>
                    <p className="md:mb-5 mb-3">
                        My name is Rūta. I am an aspiring web developer with
                        knowledge of front-end and back-end technologies. From
                        my previous job experiences in Life Sciences, medicine,
                        and client service, I bring orientation to detail,
                        analytical, organizational, and communication skills.
                        I'm eager to work in the Tech industry and learn more
                        about web and software development.
                    </p>
                    <Link
                        href="/contact"
                        className="text-rose-500 lg:text-xl text-base font-normal hover:text-rose-700 hover:scale-110"
                    >
                        Checkout my contact info here
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
};

export default About;
