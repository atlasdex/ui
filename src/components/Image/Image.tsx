
interface ImagePropsInterface {
    onClick?: () => void;
    width?: string;
    height?: string;
    src?: any;
    classes?: string
}


const Image: React.FC<ImagePropsInterface> = (props) => {
    const { width, height, src, classes } = props
    return (
        <img
            src={src}
            width={width ? width : "100%"}
            height={height ? height : "100%"}
            className={classes}
            alt = ""
        />

    )
}
export default Image