import { Hero } from "@/components/sections/Hero/Hero";
import { Advantages } from "@/components/sections/Advantages/Advantages";
import { Services } from "@/components/sections/Services/Services";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { About } from "@/components/sections/About/About";
import { Contacts } from "@/components/sections/Contacts/Contacts";

export default function Home() {
    return (
        <main>
            <Hero />
            <Advantages />
            <Services />
            <About />
            <Gallery />
            <Contacts />
        </main>
    );
}