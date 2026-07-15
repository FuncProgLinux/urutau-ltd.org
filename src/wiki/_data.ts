const type: string = "wiki";
const layout: string = "layouts/wiki.tsx";
const pagefind: boolean = true;

const metas = {
    title: "=title || $h1 || Wiki",
    description: "=description || Wiki del sitio",
    image: "=image || /img/urutau-ltd-og.png",
    lang: "es",
    site: "Urutaú Limited",
};

export { layout, metas, pagefind, type };
