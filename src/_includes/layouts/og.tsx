interface Props {
    title: string;
    description: string;
    author: string;
    date?: Date | string;
    url?: string;
}

const formatOgDate = (date: Date | string | undefined): string | undefined => {
    if (date instanceof Date) {
        return date.toISOString().slice(0, 10);
    }

    if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}/.test(date)) {
        return date.slice(0, 10);
    }

    return undefined;
};

export default function (
    { title, description, author, date, url }: Props,
): JSX.Component {
    const publishedAt: string | undefined = formatOgDate(date);
    const reference: string = publishedAt ?? url ?? "https://urutau-ltd.org";

    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#121210",
                color: "#F8FAFB",
                fontSize: 32,
                fontWeight: 600,
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                viewBox="0 0 265 265"
            >
                <path
                    fill="#e3aa19"
                    d="M123 263c-13-2-18-3-25-6-9-3-20-9-25-15-3-3-11-17-14-23-5-11-9-29-11-43a385 385 0 0 1 4-76c1-9 6-29 8-34q3-8 12-10 7-1 20 8c7 5 9 7 9 16l-1 11a280 280 0 0 0-7 47 80 80 0 0 0 13 48q8 11 16 15 3 2 9 2 10 1 16-6 14-12 18-36v-37l-5-40q0-7 2-10 4-7 11-12c8-4 19-6 24-3q6 3 8 10a326 326 0 0 1 5 126q-7 33-16 44-11 14-32 21l-13 2zm0-190q-8-3 5-31c10-22 11-23 16-28q8-8 16-8 7 0 13 5 4 4 6 11v10l-13 12-13 11a97 97 0 0 1-27 19z"
                />
            </svg>{" "}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    marginTop: 0,
                }}
            >
                <h1 style={{ fontSize: "42px" }}>
                    {title}
                </h1>
            </div>
            <div style={{ display: "flex" }}>
                <p
                    style={{
                        fontSize: "32px",
                        fontWeight: "400",
                        lineHeight: "1.5",
                        margin: "0",
                        color: "#8FBADC",
                    }}
                >
                    {description}
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "60px",
                    paddingTop: "30px",
                    borderTop: "2px solid #374151",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "24px", fontWeight: "600" }}>
                        Escrito por: {author}
                    </span>
                    <span style={{ fontSize: "20px", color: "#6b7280" }}>
                        https://urutau-ltd.org{url}
                    </span>
                </div>

                {/* Fecha de Publicación */}
                <span
                    style={{
                        fontSize: "24px",
                        fontWeight: "400",
                        color: "#9ca3af",
                    }}
                >
                    {publishedAt ? "Publicado" : "Ruta"}: {reference}
                </span>
            </div>
        </div>
    );
}
