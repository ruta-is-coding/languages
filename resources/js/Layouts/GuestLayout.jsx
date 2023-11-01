import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer/Footer";

export default function Guest({ children }) {
    return (
        <>
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    );
}
