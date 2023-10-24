interface Props {
    text: string;
}

export default function Badge({text}: Props) {
    return (<div
        className="inline-block text-sm px-3 py-2 bg-accent text-white rounded-2xl mr-3 mb-3">{text}</div>)
}
