export default function ToolButton({
  name,
  onClick
}: {
  name: string;
  onClick: Function
}) {
  return (
    <button
      class="px-2 text-xs duration-200 hover:bg-primary-hover"
      onClick={() => onClick()}
    >{name}</button>
  )
}