import MenuButton from "../MenuButton";

export default function ToolButtonMenu({ parentHeight }: {
  parentHeight: Function;
}) {
  return (
    <div
      class="grid bg-primary-background border-2 absolute left-0 top-0"
      style={{ transform: `translateY(${parentHeight() + "px"})` }}
    >
      <MenuButton
        name="New"
        onClick={() => { }}
      />
      <MenuButton
        name="Open"
        onClick={() => { }}
      />
      <MenuButton
        name="Save"
        onClick={() => { }}
      />
      <MenuButton
        name="Exit"
        onClick={() => { }}
      />
    </div>
  )
}