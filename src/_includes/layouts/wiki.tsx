import { Data } from "lume/core/file.ts";
import HtmlDocument from "$urutau/components/HtmlDocument.tsx";
import SiteFooter from "$urutau/components/siteFooter.tsx";
import SiteNavbar from "$urutau/components/siteNavbar.tsx";
import { createWikiProjectUrl } from "$urutau/lib/url_utils.ts";

const WikiLayout = (
    {
        children,
        description,
        lang,
        pagefind,
        search,
        title,
        url,
        wiki_project,
    }: Lume.Data,
): JSX.Component => {
    const projectName: string | undefined = typeof wiki_project === "string"
        ? wiki_project
        : undefined;
    const relatedPages: Data[] = projectName
        ? search.pages(`type=wiki wiki_project=${projectName}`, "title=asc")
        : [];
    const projectUrl: string | undefined = projectName
        ? createWikiProjectUrl(projectName)
        : undefined;
    const childPages: Data[] = projectUrl
        ? relatedPages.filter((page: Data) => page.url !== projectUrl)
        : [];
    const showBreadcrumbs: boolean = url !== "/wiki/" && url !== projectUrl;

    return (
        <HtmlDocument title={title} lang={lang} pagefind={pagefind}>
            <div class="sidebar-layout">
                <SiteNavbar url={url} />
                <div>
                    <main style="--line-length: 60rem">
                        <div class="margin:auto">
                            <div id="search"></div>
                        </div>
                        {showBreadcrumbs && (
                            <nav aria-label="Breadcrumb">
                                <p>
                                    <a href="/wiki/">Wiki</a>
                                    {projectName && (
                                        <>
                                            {" / "}
                                            <a href={projectUrl}>
                                                {projectName}
                                            </a>
                                        </>
                                    )}
                                    {title && (
                                        <>
                                            {" / "}
                                            <span>{title}</span>
                                        </>
                                    )}
                                </p>
                            </nav>
                        )}
                        <section
                            class="flex-switch"
                            style="--f-switch-threshold: 72ch"
                        >
                            <article>
                                {title && <h1>{title}</h1>}
                                {description && <p>{description}</p>}
                                {children}
                            </article>
                            {projectName && (
                                <aside class="flex-grow:1">
                                    <div class="box">
                                        <h2>{projectName}</h2>
                                        <p>Navegación interna del proyecto.</p>
                                        {childPages.length > 0
                                            ? (
                                                <ul>
                                                    {childPages.map((
                                                        page: Data,
                                                    ) => (
                                                        <li>
                                                            {page.url === url
                                                                ? (
                                                                    <strong>
                                                                        <a
                                                                            href={page
                                                                                .url}
                                                                        >
                                                                            {page
                                                                                .title}
                                                                        </a>
                                                                    </strong>
                                                                )
                                                                : (
                                                                    <a
                                                                        href={page
                                                                            .url}
                                                                    >
                                                                        {page
                                                                            .title}
                                                                    </a>
                                                                )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                            : (
                                                <p>
                                                    Este proyecto solo tiene su
                                                    página índice por ahora.
                                                </p>
                                            )}
                                    </div>
                                </aside>
                            )}
                        </section>
                    </main>
                    <SiteFooter />
                </div>
            </div>
        </HtmlDocument>
    );
};

export default WikiLayout;
