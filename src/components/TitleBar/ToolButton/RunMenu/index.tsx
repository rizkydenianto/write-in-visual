import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function RunMenu({ parentHeight }: { parentHeight: Function; }) {
  return (
    <MenuContainer parentHeight={parentHeight}>
      <MenuButton
        name="Debug"
        onClick={() => { }}
      />
      <MenuButton
        name="No Debug"
        onClick={() => { }}
      />
    </MenuContainer>
  )
}