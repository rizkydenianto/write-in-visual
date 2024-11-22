export default function ToolButton({
  children,
  name,
  onClick
}: {
  children: any;
  name: string;
  onClick: Function;
}) {
  return (
    <div class="relative">
      <button
        class="px-3 h-full text-xs duration-200 hover:bg-primary-hover"
        onClick={() => onClick()}
      >{name}</button>
      {children}
    </div>
  )
}