export default function WindowButton({
  name,
  onClick
}: {
  name: string;
  onClick: Function
}) {
  return (
    <button
      class={`${name === "x" ? "hover:bg-red-500" : "hover:bg-primary-hover"}
      grid px-4 text-lg duration-200`}
      onClick={() => onClick()}
    >{name}</button>
  )
}