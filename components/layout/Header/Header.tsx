import Link from "next/link";
import { Container } from "../Container/Container";

const navigation = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "О нас", href: "/about" },
    { label: "Как добраться", href: "/how-to-find-us" },
    { label: "Контакты", href: "/contacts" },
];

export function Header() {
    return (
        <header className="border-b border-neutral-200 bg-white">
            <Container>
                <div className="flex min-h-20 items-center justify-between gap-6">
                    <Link href="/" className="text-xl font-bold text-neutral-900">
                        Машина времени
                    </Link>

                    <nav aria-label="Основная навигация">
                        <ul className="flex items-center gap-6 text-sm font-medium text-neutral-700">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="hover:text-neutral-950">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <a
                        href="tel:+79028954232"
                        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700"
                    >
                        Позвонить
                    </a>
                </div>
            </Container>
        </header>
    );
}