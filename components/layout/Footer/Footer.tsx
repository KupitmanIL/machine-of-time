import Link from "next/link";
import { Container } from "../Container/Container";

export function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
            <Container>
                <div className="grid gap-6 py-8 md:grid-cols-3">
                    <div>
                        <p className="text-lg font-bold">Машина времени</p>
                        <p className="mt-2 text-sm text-neutral-300">
                            Ремонт и обслуживание автомобилей в Магнитогорске.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">Контакты</p>
                        <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                            <li>
                                <a href="tel:+79028954232" className="hover:text-white">
                                    8 902 895-42-32
                                </a>
                            </li>
                            <li>Магнитогорск, Магнитная 105</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold">Навигация</p>
                        <ul className="mt-2 space-y-1 text-sm text-neutral-300">
                            <li>
                                <Link href="/services" className="hover:text-white">
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacts" className="hover:text-white">
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://vk.com/mashinavremeni174?w=club178461085"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    Группа ВК
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
}