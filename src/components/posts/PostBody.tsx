import { PostTags } from "$urutau/components/shared/PostTags.tsx";
import { ReadingInfo } from "lume/plugins/reading_info.ts";
import { PostAuthor } from "../shared/PostAuthor.tsx";

interface Props {
    title?: string | undefined;
    description?: string | undefined;
    date: Date;
    author: string;
    tags?: string | string[] | undefined;
    children?: JSX.Children | undefined;
    readingInfo: ReadingInfo;
}

/**
 * This component represents the "readable" portion of a blog post inside the
 * website. It's meant to be used only in the src/_includes/layouts/post.tsx
 * layout component.
 *
 * @returns {JSX.Component} a JSX component representing the post reading section
 */
const PostBody = (
    { title, description, author, tags, children, date, readingInfo }: Readonly<
        Props
    >,
): JSX.Component => {
    if (typeof title === "undefined") {
        title = "Got 'undefined' value for this component.";
    }

    if (typeof description === "undefined") {
        description = "Got 'undefined' value for this component.";
    }

    const dateOpts: Readonly<Intl.DateTimeFormatOptions> = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    return (
        <main style="--line-length: 50rem">
            <h1>{title}</h1>
            <p>
                {description}
                <br />
                <strong>Escrito por</strong>: &nbsp;
                <PostAuthor author={author} />
                &nbsp; el: &nbsp; {date.toLocaleDateString("es-MX", dateOpts)}
                <br />
                <strong>
                    Tiempo de lectura: {readingInfo.minutes} minutos |{" "}
                    {readingInfo.words} palabras.
                </strong>
            </p>
            <div class="container">
                Etiquetas:&nbsp;
                <PostTags tags={tags} />
            </div>
            <article>
                {children}
            </article>
        </main>
    );
};

export default PostBody;
