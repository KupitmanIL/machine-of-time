import { Container } from "@/components/layout/Container/Container";

export function About() {
    return (
        <section className="bg-neutral-50 py-16">
            <Container>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
                            О мастерской
                        </p>

                        <h2 className="text-3xl font-bold text-neutral-900">
                            Небольшой автосервис с прямым общением с мастером
                        </h2>

                        <p className="mt-5 text-neutral-600">
                            «Машина времени» — автомастерская в Магнитогорске, где клиент
                            может напрямую обсудить проблему автомобиля, получить понятное
                            объяснение и согласовать ремонт без лишних посредников.
                        </p>

                        <p className="mt-4 text-neutral-600">
                            Мы делаем упор на честную диагностику, аккуратную работу и
                            понятный подход: сначала определить причину неисправности, потом
                            предложить решение.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                        <h3 className="text-xl font-semibold text-neutral-900">
                            Что нужно уточнить у владельца
                        </h3>

                        <ul className="mt-4 space-y-3 text-neutral-600">
                            <li>Сколько лет опыта у мастера.</li>
                            <li>Какие марки автомобилей обслуживаются.</li>
                            <li>Есть ли гарантия на работы.</li>
                            <li>Можно ли устанавливать запчасти клиента.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}