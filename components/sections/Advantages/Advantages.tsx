import { Container } from "@/components/layout/Container/Container";

const advantages = [
    {
        title: "Честная диагностика",
        description:
            "Сначала выясняем причину проблемы, а не предлагаем менять всё подряд.",
    },
    {
        title: "Без навязывания лишнего",
        description:
            "Объясняем, что действительно нужно ремонтировать сейчас, а что может подождать.",
    },
    {
        title: "Прямой контакт с мастером",
        description:
            "Клиент звонит напрямую в мастерскую и обсуждает ремонт без посредников.",
    },
];

export function Advantages() {
    return (
        <section className="bg-neutral-50 py-16">
            <Container>
                <div className="mb-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900">
                        Почему обращаются к нам
                    </h2>
                    <p className="mt-3 text-neutral-600">
                        Небольшая мастерская с понятным подходом: сначала разобраться в
                        проблеме, потом предложить решение.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {advantages.map((advantage) => (
                        <article
                            key={advantage.title}
                            className="rounded-2xl border border-neutral-200 bg-white p-6"
                        >
                            <h3 className="text-lg font-semibold text-neutral-900">
                                {advantage.title}
                            </h3>
                            <p className="mt-3 text-neutral-600">{advantage.description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}