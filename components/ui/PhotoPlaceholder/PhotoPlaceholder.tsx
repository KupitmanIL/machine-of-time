type PhotoPlaceholderProps = {
    title: string;
    description?: string;
};

export function PhotoPlaceholder({
                                     title,
                                     description,
                                 }: PhotoPlaceholderProps) {
    return (
        <div className="flex aspect-[4/3] min-h-48 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-100 p-6 text-center">
            <div>
                <p className="text-sm font-semibold text-neutral-800">{title}</p>

                {description && (
                    <p className="mt-2 text-sm text-neutral-500">{description}</p>
                )}
            </div>
        </div>
    );
}