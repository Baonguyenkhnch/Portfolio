
const ResizeButton = (props) => {
    const { btnText, btnIcons, btnStyle,onClick } = props;

    return (
        <button className="resize-button" style={btnStyle} onClick={onClick}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;