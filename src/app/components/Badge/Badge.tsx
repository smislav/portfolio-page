interface Props {
    text: string;
}

export default function Badge({text}: Props) {
    return (<div className="inline-block text-md pl-3 pr-3 pt-1 pb-1 bg-accent text-white rounded-2xl mr-3 mb-3">{text}</div>)
}
