
interface NavigationTab {
    name: string;
    route: string;
    disabled : boolean;
    diffColor ?: boolean
}
const NavigationTabArray: NavigationTab[] = [
    {
        name: "Exchange",
        route: "/",
        disabled : false
    },
    {
        name: "DOA",
        route: "/w1",
        disabled : true
    }, {
        name: "API",
        route: "/w2",
        disabled : true
    }, {
        name: "Blog",
        route: "/w",
        disabled : true
    }, {
        name: "Help",
        route: "/w",
        disabled : true
    }, {
        name: "Forum",
        route: "/w",
        disabled : true
    }, {
        name: "Buy SOL",
        route: "/w",
        disabled : true,
        diffColor :true
    },
]

export default NavigationTabArray