import Link from "components/Link";


interface TabPropsInterface {
    onClick?: () => void;
    classes?: string;
    text?: string;
    size?: string;
    weight?: number;
}

const Tab: React.FC<TabPropsInterface> = (props) => {
    const { onClick, text, size, weight, classes } = props
    return (
        <Link
            onClick={onClick}
            classes = {classes}
            text={text}
            size={size}
            weight={weight}
        />


    )
}
export default Tab