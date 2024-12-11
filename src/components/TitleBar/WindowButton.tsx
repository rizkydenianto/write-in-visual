export default function WindowButton({
  children,
  name,
  onClick
}: {
  children: any;
  name: string;
  onClick: () => void;
}) {
  return (
    <button
      class={`${name === "x" ? "hover:bg-red-500" : "hover:bg-primary-hover"}
      px-3 text-sm duration-200`}
      onClick={() => onClick()}
    >{children}</button>
  )
}