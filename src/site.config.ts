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
    description: `La PsyCausette c’est l’endroit où on cause simplement de 
    recherche en psychologie du travail : adieu    charabia jargonneux, ici on 
    va au plus simple !`,
    lang: "fr-FR",
    ogLocale: "fr_FR",
    themeColor: "#A32CC4",
    menuLinks: [
        { name: "Blog", url: "/blog" },
        { name: "Ressources", url: "/ressources" },
        { name: "Glossaire", url: "/glossaire" },

    ],
    socialLinks: [
        { name: "RSS", url: "/rss.xml" },
        // { name: "github", url: "https://github.com/TheBigRoomXXL" },
        // { name: "itch.io", url: "https://tehbigroomxxl.itch.io/" },
        // { name: "email", url: "mailto:seb.lovergne+site@gmail.com?Subject=Hello" },
    ],
};
