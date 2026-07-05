import Link from "next/link";
import { Container } from "@/components/layout/Container/Container";

const services = [
    {
        title: "Диагностика автомобиля",
        description: "Поиск и определение причин неисправностей.",
        href: "/services/diagnostics",
    },
    {
        title: "Ремонт подвески",
        description: "Замена и ремонт элементов ходовой части.",
        href: "/services/suspension",
    },
    {
        title: "Ремонт двигателя",
        description: "Диагностика и ремонт бензиновых и дизельных двигателей.",
        href: "/services/engine",
    },
    {
        title: "Замена масла",
        description: "Замена масла и технических жидкостей.",
        href: "/services/oil-change",
    },
    {
        title: "Ремонт тормозной системы",
        description: "Обслуживание и ремонт тормозных механизмов.",
        href: "/services/brakes",
    },
    {
        title: "Ремонт рулевого управления",
        description: "Диагностика и устранение неисправностей рулевого управления.",
        href: "/services/steering",
    },
    {
        title: "Замена сцепления",
        description: "Замена сцепления и сопутствующих элементов.",
        href: "/services/clutch",
    },
    {
        title: "Автоэлектрика",
        description: "Поиск неисправностей и ремонт электрооборудования.",
        href: "/services/electrics",
    },
    {
        title: "Техническое обслуживание",
        description: "Плановое обслуживание автомобиля.",
        href: "/services/maintenance",
    },
];

export function Services() {
    return (
        <section className="py-16">
            <Container>
                <div className="mb-10 max-w-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900">
                        Наши услуги
                    </h2>

                    <p className="mt-3 text-neutral-900">
                        Выполняем диагностику, техническое обслуживание и ремонт автомобилей.
                        Если нужной услуги нет в списке — позвоните, мы подскажем, сможем ли помочь.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service.href}
                            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <h3 className="text-lg font-semibold text-neutral-900">
                                {service.title}
                            </h3>

                            <p className="mt-3 flex-1 text-neutral-900">
                                {service.description}
                            </p>

                            <Link
                                href={service.href}
                                className="mt-6 font-medium text-red-600 hover:underline"
                            >
                                Подробнее →
                            </Link>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}