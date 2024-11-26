export default function MenuContainer({
  children,
  parentHeight
}: {
  children: any;
  parentHeight: Function;
}) {
  return (
    <div
      class="grid bg-primary-background border-2 absolute left-0 top-0"
      style={{ transform: `translateY(${parentHeight() + "px"})` }}
    >{children}</div>
  )
}