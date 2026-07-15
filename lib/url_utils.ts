const normalizeTaxonomyValue = (value: string): string => {
    return value
        .trim()
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]+/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export const createTagUrl = (tag: string): string => {
    return `/tags/${normalizeTaxonomyValue(tag)}/`;
};

/**
 * Normally used in the authors.page.ts generator. Not anywhere else.
 * It serves its purpose as a URL normalizer, removing spaces and
 * replacing them with hyphens (-)
 *
 * @param {string} author - The author name (e.g "FuncProgLinux")
 * @returns {string} The slug URL (e.g "/author/funcproglinux")
 */
export const createAuthorUrl = (author: string): string => {
    return `/author/${normalizeTaxonomyValue(author)}/`;
};

export const createWikiProjectUrl = (project: string): string => {
    return `/wiki/projects/${normalizeTaxonomyValue(project)}/`;
};

export const createPostsArchiveUrl = (page: number): string => {
    return page <= 1 ? "/posts/" : `/posts/page/${page}/`;
};
