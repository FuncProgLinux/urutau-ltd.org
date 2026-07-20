interface Props {
    url: string;
}

interface LinkItemProps {
    currentUrl: string;
    href: string;
    text: string;
}

const LinkItem = (
    { currentUrl, href, text }: LinkItemProps,
): JSX.Component => {
    const isLinkActive = (current: string, target: string): boolean => {
        if (target === "/") {
            return current === "/";
        }

        const startsWithTarget = current.startsWith(target);
        if (!startsWithTarget) {
            return false;
        }

        if (current === target) {
            return true;
        }

        const charAfterTarget = current.charAt(target.length);
        return charAfterTarget === "/";
    };

    const isActive: boolean = isLinkActive(currentUrl, href);

    const className: string = isActive ? "<button>" : "";
    const linkElement: JSX.Component = (
        <a href={href} class={className}>
            {text}
        </a>
    );

    return (
        <li>
            {isActive ? <strong>{linkElement}</strong> : linkElement}
        </li>
    );
};

const SiteNavbar = ({ url }: Props): JSX.Component => {
    return (
        <header>
            <img
                class="urutau-logo"
                alt="Logitipo de Urutaú Limited mostrando una caricatura de un ave Nyctibius"
                src="/img/urutau.png"
                fetchpriority="high"
            />
            <p class="<h2>">
                <strong>Urutaú Limited</strong>
            </p>
            <nav>
                <ul role="list">
                    <li>
                        <LinkItem currentUrl={url} href="/" text="Inicio" />
                    </li>
                    <li>
                        <LinkItem currentUrl={url} href="/posts" text="Blog" />
                    </li>
                    <li>
                        <p>
                            <b>Organización</b>
                        </p>
                        <ul role="list" class="margin">
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/about"
                                    text="Nosotros"
                                />
                            </li>
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/contact"
                                    text="Contacto"
                                />
                            </li>
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/recommends"
                                    text="Recomendados"
                                />
                            </li>
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/wiki"
                                    text="Wiki"
                                />
                            </li>
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/software"
                                    text="Software"
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            <b>Legal</b>
                        </p>
                        <ul role="list" class="margin">
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/privacy-policy"
                                    text="Política de Privacidad"
                                />
                            </li>
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/libre-licenses"
                                    text="Licencias de código libre"
                                />
                            </li>
                            <li>
                                <LinkItem
                                    currentUrl={url}
                                    href="/llm-policy"
                                    text="Política de uso de LLM's"
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>
                            <a
                                href="https://forge.urutau-ltd.org/"
                                class="&lt;button&gt; inline-size:100%"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                IT-Tools ↗︎
                            </a>
                        </strong>
                    </li>
                    <li>
                        <strong>
                            <a
                                href="https://tool.urutau-ltd.org/"
                                class="&lt;button&gt; inline-size:100%"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CyberChef ↗︎
                            </a>
                        </strong>
                    </li>
                    <li>
                        <strong>
                            <a
                                href="https://siren.urutau-ltd.org/"
                                class="&lt;button&gt; inline-size:100%"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mermaid Editor ↗︎
                            </a>
                        </strong>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default SiteNavbar;
