import { useState } from "react";
import * as Styled from "./style";

const MusicAboutSection = () => {
  const [isDescriptionOpen, setDescriptionOpen] = useState<boolean>(false);
  const description =
    "Taylor Alison Swift is an American singer-songwriter. Her discographyspans multiple genres, and her songwriting—often inspired by her personal life—has received critical praise and wide media coverage. Bornin West Reading, Pennsylvania, Swift moved to Nashville at age 14 tobecome a country artist.Taylor Alison Swift is an American singer-songwriter. Her discographyspans multiple genres, and her songwriting—often inspired by her personal life—has received critical praise and wide media coverage. Bornin West Reading, Pennsylvania, Swift moved to Nashville at age 14 tobecome a country artist.";
  return (
    <Styled.MusicAboutSectionLayout>
      <Styled.MusicAboutSectionHeading>About</Styled.MusicAboutSectionHeading>
      <Styled.MusicAboutSectionDescription>
        {description && description?.length > 350 ? (
          <>
            {isDescriptionOpen
              ? description
              : description.slice(0, 350) + "..."}
            &nbsp;
            <span onClick={() => setDescriptionOpen(!isDescriptionOpen)}>
              {isDescriptionOpen ? "Show Less" : "Show More"}
            </span>
          </>
        ) : (
          description
        )}
      </Styled.MusicAboutSectionDescription>
    </Styled.MusicAboutSectionLayout>
  );
};

export default MusicAboutSection;
