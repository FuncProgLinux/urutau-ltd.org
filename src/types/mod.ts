/**
 * This interface defines the metadata structure used in all
 * markdown entries inside posts/ directory, ideally you
 * shouldn't use this definition outside the src/posts/_data.ts file.
 */
export interface PostMeta {
    /**
     * The title of the blog entry
     * This will be used in the SEO meta tags and the
     * OpenGraph image.
     * @type {string}
     */
    title: string;

    /**
     * A brief description or excerpt of the blog entry
     * This will be used in the SEO meta tags and the
     * OpenGraph image.
     * @type {string}
     */
    description: string;

    /**
     * The URL or path to the image used for OpenGraph
     * This will be used in the SEO meta tags and the
     * OpenGraph image.
     * @type {string}
     */
    image: string;

    /**
     * The language of the blog entry, e.g., "en", "es", "fr", "pt"
     *
     * You wouldn't want to change this unless you're
     * writing blog entries in other languages. But there's
     * the i18n plugin for that.
     * @type {string}
     */
    lang: string;

    /**
     * The name of the site or blog
     * @type {string}
     */
    site: string;
}

/**
 * Represents a debt comment left by the robot in the codebase. This is only
 * used in the debt_harvester.ts script. DO NOT USE ANYWHERE ELSE!
 */
export interface DebtEntry {
    /**
     * A given file with debt comments inside it
     * @type{string}
     */
    file: string;

    /**
     * The offending line inside a file (1-indexed)
     * @type{string}
     */
    line: number;

    /**
     * The reason/description of what was simplified or deferred according
     * to the robot.
     * @type{string}
     */
    reason: string;

    /**
     * Optional limit or threshold named in the comment before a refactor is
     * required according to the robot.
     *
     * @type{string|undefined}
     */
    ceiling?: string | undefined;

    /**
     * Optional trigger event or condition to revisit the debt marked by the
     * robot.
     *
     * @type{string|undefined}
     */
    upgrade?: string | undefined;

    /**
     * Whether an explicit 'upgrade:' trigger was provided by the robot in the
     * code. If 'false', flags rot.
     *
     * @type{string|undefined}
     */
    hasTrigger: boolean;
}
