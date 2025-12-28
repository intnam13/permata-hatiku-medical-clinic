import Hero from "../components/Hero";

interface HomeProps {
    setPage: (page: "home" | "services" | "appointment" | "success") => void;
}

function Home({ setPage }: HomeProps) {
    return <Hero setPage={setPage} />;
}

export default Home;
