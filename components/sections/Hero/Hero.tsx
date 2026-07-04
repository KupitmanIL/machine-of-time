import { Container } from "@/components/layout/Container/Container";

const hero = {
    badge: "Автосервис",
    title: "Машина времени",
    description:
        "Ремонт и обслуживание автомобилей в Магнитогорске. Честная диагностика, качественный ремонт и прямой контакт с мастером.",
    phone: "+79028954232",
};

export function Hero() {
    return (
        <section className="py-20">
            <Container>
                <div className="max-w-3xl">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
                        {hero.badge}
                    </p>

                    <h1 className="text-5xl font-bold leading-tight">
                        {hero.title}
                    </h1>

                    <p className="mt-6 text-xl text-neutral-600">
                        {hero.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href={`tel:${hero.phone}`}
                            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                        >
                            Позвонить
                        </a>

                        <a
                            href="/contacts"
                            className="rounded-lg border border-neutral-300 px-6 py-3 font-semibold transition hover:bg-neutral-100"
                        >
                            Как добраться
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}