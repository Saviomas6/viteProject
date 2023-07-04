import { CardHeading, CardHeadingWrapper, SeeAllButton } from "./style";
interface I_Props {
  cardHeading: string;
}
const MusicCardHeader = ({ cardHeading }: I_Props) => {
  return (
    <CardHeadingWrapper>
      <CardHeading>{cardHeading}</CardHeading>
      <SeeAllButton>See all</SeeAllButton>
    </CardHeadingWrapper>
  );
};

export default MusicCardHeader;
