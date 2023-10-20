import Container from "@/Components/Container";
import Header from "@/Components/Header";

export default function Guest({ children }) {
    return (
        <>
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
        </>
    );
}
