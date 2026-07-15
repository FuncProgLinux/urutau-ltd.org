import { Data } from "lume/core/file.ts";
import WikiProjectCard from "$urutau/components/wiki/WikiProjectCard.tsx";
import { createWikiProjectUrl } from "$urutau/lib/url_utils.ts";

export const title: string = "Wiki";
export const description: string = "Bienvenid@ a la wiki de Urutaú Limited.";
export const layout: string = "layouts/wiki.tsx";
export const pagefind: boolean = true;

export default (data: Lume.Data): JSX.Component => {
    const pages: Data[] = data.search.pages("type=wiki", "title=asc");
    const projects: string[] = data.search.values(
        "wiki_project",
        "type=wiki",
    ) as string[];
    const uniqueProjects: string[] = Array.from(new Set(projects)).sort(
        (left: string, right: string) => left.localeCompare(right),
    );
    const projectRootUrls: Set<string> = new Set(
        uniqueProjects.map((project: string) => createWikiProjectUrl(project)),
    );
    const projectCards = uniqueProjects.map((project: string) => {
        const rootUrl: string = createWikiProjectUrl(project);
        const projectPages: Data[] = data.search.pages(
            `type=wiki wiki_project=${project}`,
            "title=asc",
        );
        const rootPage: Data | undefined = projectPages.find((page: Data) =>
            page.url === rootUrl
        );
        const childPages: Data[] = projectPages.filter((page: Data) =>
            page.url !== rootUrl
        );

        return {
            description: rootPage?.description as string | undefined,
            href: rootUrl,
            name: project,
            pageCount: projectPages.length,
            pageLinks: childPages.map((page: Data) => ({
                title: String(page.title),
                url: String(page.url),
            })),
        };
    });
    const standalonePages: Data[] = pages.filter((page: Data) => {
        const pageUrl: string = String(page.url);
        return pageUrl !== "/wiki/" && !projectRootUrls.has(pageUrl);
    });

    return (
        <>
            <p>
                En esta página se encuentra toda la documentación de nuestros
                proyectos en formato wiki. Aquí actualizaremos los instructivos
                o guías de uso del software que hemos publicado.
            </p>

            <div class="flex-switch">
                <section class="box">
                    <h2>Proyectos</h2>
                    <div class="flex-column">
                        {projectCards.map((project): JSX.Component => (
                            <WikiProjectCard
                                description={project.description}
                                href={project.href}
                                name={project.name}
                                pageCount={project.pageCount}
                                pageLinks={project.pageLinks}
                            />
                        ))}
                    </div>
                </section>

                <section class="box">
                    <h2>Páginas</h2>
                    {standalonePages.length > 0
                        ? (
                            <ul>
                                {standalonePages.map((
                                    page: Data,
                                ): JSX.Component => (
                                    <li>
                                        <a href={page.url}>{page.title}</a>
                                    </li>
                                ))}
                            </ul>
                        )
                        : (
                            <p>
                                No hay páginas internas aparte de los índices
                                por proyecto.
                            </p>
                        )}
                </section>
            </div>
        </>
    );
};
