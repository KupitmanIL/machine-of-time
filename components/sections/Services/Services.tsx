import { Container } from "@/components/layout/Container/Container";

const services = [
    "Диагностика автомобиля",
    "Ремонт подвески",
    "Ремонт двигателя",
    "Замена масла",
    "Ремонт тормозной системы",
    "Ремонт рулевого управления",
    "Замена сцепления",
    "Автоэлектрика",
    "Техническое обслуживание",
];

export function Services() {
    return (
        <section className="py-16">
            <Container>
                <div className="mb-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900">Услуги</h2>
                    <p className="mt-3 text-neutral-600">
                        Основные виды ремонта и обслуживания автомобилей. Точный список
                        работ лучше уточнить по телефону.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service}
                            className="rounded-2xl border border-neutral-200 bg-white p-5"
                        >
                            <h3 className="font-semibold text-neutral-900">{service}</h3>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}