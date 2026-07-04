import { Container } from "@/components/layout/Container/Container";

export function Contacts() {
    return (
        <section className="py-16">
            <Container>
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900">
                        Контакты
                    </h2>

                    <p className="mt-3 text-neutral-900">
                        Позвоните нам или приезжайте в мастерскую.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900">
                        <div>
                            <h3 className="font-semibold">Телефон</h3>

                            <a
                                href="tel:+79028954232"
                                className="text-red-600 transition hover:underline"
                            >
                                +7 (902) 895-42-32
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold">Адрес</h3>

                            <p>Россия, Магнитогорск</p>
                            <p>ул. Магнитная, 105</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">ВКонтакте</h3>

                            <a
                                href="https://vk.com/mashinavremeni174?w=club178461085"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 transition hover:underline"
                            >
                                Перейти в группу
                            </a>
                        </div>

                        <div>
                            <h3 className="font-semibold">Режим работы</h3>

                            <p>Уточняется</p>
                        </div>
                    </div>

                    <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-100 p-6 text-center text-neutral-900">
                        Здесь будет Яндекс.Карта
                    </div>
                </div>
            </Container>
        </section>
    );
}