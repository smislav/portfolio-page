interface BadgeProps {
    text: string;
}

export default function Badge({text}: BadgeProps) {
    return (<div className="inline-block text-base font-bold pl-2 pr-2 pt-1 pb-1 bg-teal-500 text-teal-900 rounded-2xl m-1">{text}</div>)
}
