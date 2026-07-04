import { Container } from "@/components/layout/Container/Container";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder/PhotoPlaceholder";

const photos = [
    {
        title: "Фото фасада мастерской",
        description: "Снаружи здания, чтобы клиенту было проще найти вход.",
    },
    {
        title: "Фото въезда",
        description: "Ориентир для заезда на территорию.",
    },
    {
        title: "Фото ремонтного бокса",
        description: "Рабочая зона, подъёмник, инструменты.",
    },
    {
        title: "Фото процесса ремонта",
        description: "Реальная работа с автомобилем клиента.",
    },
];

export function Gallery() {
    return (
        <section className="py-16">
            <Container>
                <div className="mb-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-neutral-900">
                        Фото мастерской
                    </h2>
                    <p className="mt-3 text-neutral-600">
                        Здесь будут реальные фотографии фасада, въезда, бокса и процесса
                        ремонта.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {photos.map((photo) => (
                        <PhotoPlaceholder
                            key={photo.title}
                            title={photo.title}
                            description={photo.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}