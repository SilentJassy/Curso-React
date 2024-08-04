import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import './TodoIcon.css'
const iconTypes = {
    'check': (color) => <AiOutlineCheck className="Icon-svg" fill={color} />,
    'delete': (color) => <AiOutlineClose className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container
                Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }