import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";
import QR1 from "@/Images/LinkedInQR.png";
import QR2 from "@/Images/GithubQR.png";
import LinkedIn from "@/Icons/LinkedIn";
import Github from "@/Icons/Github";

const Contact = () => {
    return (
        <GuestLayout>
            <Head title="Contact" />
            <h1>Find me on:</h1>
            <div className="flex flex-col md:gap-20 gap-5">
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-3 gap-1">
                    <div className="flex flex-col items-center justify-center">
                        <Link href="https://www.linkedin.com/in/ruta-jurgelyte/">
                            <LinkedIn />
                        </Link>
                        <h3
                            style={{
                                color: "rgba(64, 157, 0, 1)",
                            }}
                        >
                            Rūta Jurgelytė
                        </h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={QR1}
                            alt="Linked In QR code"
                            className="md:w-full w-1/2"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Link href="https://github.com/ruta-is-coding">
                            <Github />
                        </Link>
                        <h3
                            style={{
                                color: "rgba(64, 157, 0, 1)",
                            }}
                        >
                            ruta-is-coding
                        </h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={QR2}
                            alt="Linked In QR code"
                            className="md:w-full w-1/2 my-auto"
                        />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Contact;
