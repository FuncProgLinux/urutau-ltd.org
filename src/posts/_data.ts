import { PostMeta } from "$urutau/types";

const type: string = "post";
const layout: string = "layouts/post.tsx";
const openGraphLayout: string = "layouts/og.tsx";

const metas: Readonly<PostMeta> = {
    title: "=title || $h1 || Título por Defecto",
    description: "=description || Default Description",
    image: `=image || /posts/index.png`,
    lang: "es",
    site: "Urutaú Limited",
};

const jsonLd = {
    "@type": "BlogPosting",
    headline: "=title",
    description: "=description",
    image: "=image || /posts/index.png",
    datePublished: "=date",
    inLanguage: "es",
    author: {
        "@type": "Person",
        name: "=author",
    },
};

export { jsonLd, layout, metas, openGraphLayout, type };
