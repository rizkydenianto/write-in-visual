import MenuButton from "../MenuButton";
import MenuContainer from "../MenuContainer";

export default function HelpMenu({ parentHeight }: { parentHeight: () => number }) {
  return (
    <MenuContainer parentHeight={parentHeight}>
      <MenuButton
        name="About"
        onClick={() => { }}
      />
    </MenuContainer>
  )
}