export default function MenuButton({
  name,
  onClick
}: {
  name: string;
  onClick: Function
}) {
  return (
    <button
      class="py-2 w-20 text-xs duration-200 hover:bg-primary-hover"
      onClick={() => onClick()}
    >{name}</button>
  )
}