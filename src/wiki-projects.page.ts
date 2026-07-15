import { buildTaxonomyPages } from "$urutau/lib/taxonomy_utils.ts";
import { createWikiProjectUrl } from "$urutau/lib/url_utils.ts";

export const layout: string = "layouts/wiki.tsx";

export default function* ({ search }: Lume.Data) {
    yield* buildTaxonomyPages(search, {
        field: "wiki_project",
        kind: "proyectos wiki",
        includeHeading: false,
        scopeQuery: "type=wiki",
        createHeading: (label: string): string => `Páginas wiki para ${label}`,
        createQuery: (project: string): string =>
            `type=wiki wiki_project=${project}`,
        createTitle: (label: string): string => `Wiki del proyecto: ${label}`,
        createUrl: createWikiProjectUrl,
        extendPageData: (
            group: { label: string },
        ): Record<string, unknown> => ({
            description:
                `Índice de páginas wiki disponibles para ${group.label}.`,
            wiki_project: group.label,
        }),
    });
}
