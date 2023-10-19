const Container = ({ children }) => {
    return (
        <main className="md:pt-10">
            <div className="container">{children}</div>
        </main>
    );
};

export default Container;
