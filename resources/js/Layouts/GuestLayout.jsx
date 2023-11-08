import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer/Footer";

export default function Guest({ user, children }) {
    return (
        <>
            <Header user={user} />
            <main className="bg-rose-50">
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    );
}
