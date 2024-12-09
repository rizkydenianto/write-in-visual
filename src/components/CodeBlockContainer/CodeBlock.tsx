export default function CodeBlock({
  children,
  onClick
}: {
  children: any;
  onClick: Function;
}) {
  return (
    <button
      class="bg-white duration-200 hover:bg-secondary-hover"
      onclick={() => onClick()}
    >{children}</button>
  )
}