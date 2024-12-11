import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function EditMenu({ parentHeight }: { parentHeight: () => number }) {
  return (
    <MenuContainer parentHeight={parentHeight}>
      <MenuButton
        name="Undo"
        onClick={() => { }}
      />
      <MenuButton
        name="Redo"
        onClick={() => { }}
      />
      <MenuButton
        name="Cut"
        onClick={() => { }}
      />
      <MenuButton
        name="Copy"
        onClick={() => { }}
      />
      <MenuButton
        name="Paste"
        onClick={() => { }}
      />
    </MenuContainer>
  )
}