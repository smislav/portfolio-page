import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const Page = ({children, className}: Props) => {
    return <div className={className} style={{"animation": "fadeIn 0.5s forwards"}}>{children}</div>
}

export {Page}
