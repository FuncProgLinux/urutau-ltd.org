interface Props {
    description?: string;
    href: string;
    name: string;
    pageCount: number;
    pageLinks: Array<{ title: string; url: string }>;
}

const WikiProjectCard = (
    { description, href, name, pageCount, pageLinks }: Props,
): JSX.Component => {
    return (
        <article class="box flex-grow:1">
            <h2>
                <a href={href}>{name}</a>
            </h2>
            <p>
                <strong>
                    {pageCount} {pageCount === 1 ? "página" : "páginas"}
                </strong>
            </p>
            {description && <p>{description}</p>}
            <ul>
                {pageLinks.map((page) => (
                    <li>
                        <a href={page.url}>{page.title}</a>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default WikiProjectCard;
