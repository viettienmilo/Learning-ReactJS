export default function Languages(props) {
    const { name, backgroundColor, color } = props.language;
    const classname = props.classname;
    return (
        <span style={{ backgroundColor: backgroundColor, color: color, }} className={classname}>
            {name}
        </span>
    );
}