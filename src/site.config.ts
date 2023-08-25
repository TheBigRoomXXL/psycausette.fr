interface Link {
    name: string;
    url: string
}

interface SiteConfig {
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    themeColor: string;
    menuLinks: Link[];
    socialLinks: Link[];
}

export const siteConfig: SiteConfig = {
    author: "Charlotte RAUSCHER",
    title: "PsyCausette",
    description: "Ici on cause psychologie du travail.",
    lang: "fr-FR",
    ogLocale: "fr_FR",
    themeColor: "#A32CC4",
    menuLinks: [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },

    ],
    socialLinks: [
        { name: "RSS", url: "/rss.xml" },
        // { name: "github", url: "https://github.com/TheBigRoomXXL" },
        // { name: "itch.io", url: "https://tehbigroomxxl.itch.io/" },
        // { name: "email", url: "mailto:seb.lovergne+site@gmail.com?Subject=Hello" },
    ],
};
