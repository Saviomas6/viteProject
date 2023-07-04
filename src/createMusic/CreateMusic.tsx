import { useState, useEffect } from "react";
import CheckBox from "../musicCheckbox/CheckBox";
import RadioButton from "../musicRadioButton/RadioButton";
import SharedButton from "../sharedButton/SharedButton";
import UploadFile from "../uploadFile/UploadFile";
import * as Styled from "./style";
import blueArrow from "../assets/blueArrow.svg";
import smallClose from "../assets/smallClose.svg";

const CreateMusic = () => {
  const [isSupplyDropDownOpen, setSupplyDropDownOpen] =
    useState<boolean>(false);
  const [isGenreDropDownOpen, setGenreDropDownOpen] = useState<boolean>(false);
  const [supplyLabel, setSupplyLabel] = useState<string>("multiple");
  const [genres, setGenres] = useState<any>([]);
  const [selectedGenres, setSelectedGenres] = useState<any>([]);

  const arrayData = [
    {
      id: 1,
      title: "Thriller",
      value: "thriller",
    },
    {
      id: 2,
      title: "Country",
      value: "country",
    },
    { id: 3, title: "Hip Hop", value: "hiphop" },
    {
      id: 4,
      title: "Rap",
      value: "rap",
    },
  ];

  useEffect(() => {
    setGenres(arrayData);
  }, []);

  const handleAddGenre = (genre: any) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres?.filter((g: any) => g?.id !== genre?.id));
  };

  const handleRemoveGenre = (genre: any) => {
    setSelectedGenres(
      selectedGenres.filter((selected: any) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
  };

  return (
    <Styled.CreateMusicLayout>
      <Styled.CreateMusicContainer>
        <Styled.CreateMusicMainHeading>
          Create New Collectible
        </Styled.CreateMusicMainHeading>
        <Styled.CreateMusicSubHeading>
          Choose “Single” for one of a kind
        </Styled.CreateMusicSubHeading>

        {/* title */}
        <Styled.CreateMusicInputFieldWrapper>
          <Styled.Label>Title</Styled.Label>
          <Styled.CreateMusicInputField
            type="text"
            placeholder="The adventurer's soul lost ark"
            autoComplete="new-password"
          />
        </Styled.CreateMusicInputFieldWrapper>

        {/* description */}
        <Styled.CreateMusicInputFieldWrapper>
          <Styled.Label>Description</Styled.Label>
          <Styled.CreateMusicInputTextArea
            autoComplete="new-password"
            placeholder="Write a description of your favorite collectible..."
          />
        </Styled.CreateMusicInputFieldWrapper>

        {/* genre */}
        <Styled.CreateMusicBorderBottomWrapper>
          <Styled.Label>Genre</Styled.Label>
          <Styled.CreateMusicDropDownMainContainer>
            <Styled.CreateMusicDropDownLabelWrapper
              onClick={() =>
                genres?.length > 0 && setGenreDropDownOpen(!isGenreDropDownOpen)
              }
            >
              <Styled.CreateMusicDropDownLabel>
                <Styled.GenreBadgeMainWrapper>
                  {selectedGenres.length > 0 ? (
                    selectedGenres.map((selectedGenreValue: any, i: number) => (
                      <Styled.GenreBadgeWrapper key={i}>
                        <Styled.GenreBadgeText>
                          {selectedGenreValue?.title}
                        </Styled.GenreBadgeText>
                        <Styled.GenreBadgeIcon
                          onClick={(e: any) => {
                            e.stopPropagation();
                            handleRemoveGenre(selectedGenreValue);
                          }}
                        >
                          <img src={smallClose} alt="close" />
                        </Styled.GenreBadgeIcon>
                      </Styled.GenreBadgeWrapper>
                    ))
                  ) : (
                    <span>Please Select your genre</span>
                  )}
                </Styled.GenreBadgeMainWrapper>
              </Styled.CreateMusicDropDownLabel>
              <Styled.CreateMusicIcon>
                <img src={blueArrow} alt="back" />
              </Styled.CreateMusicIcon>
            </Styled.CreateMusicDropDownLabelWrapper>
            {isGenreDropDownOpen && (
              <Styled.CreateMusicDropDownContentWrapper>
                {genres.map((genre: any, i: number) => (
                  <Styled.CreateMusicDropDownContent
                    key={i}
                    onClick={() => handleAddGenre(genre)}
                  >
                    {genre?.title}
                  </Styled.CreateMusicDropDownContent>
                ))}
              </Styled.CreateMusicDropDownContentWrapper>
            )}
          </Styled.CreateMusicDropDownMainContainer>
          <Styled.Description>Genre max: 4</Styled.Description>
        </Styled.CreateMusicBorderBottomWrapper>

        {/* supply */}
        <Styled.CreateMusicBorderBottomWrapper>
          <Styled.Label>Music Supply</Styled.Label>
          <Styled.CreateMusicDropDownMainContainer>
            <Styled.CreateMusicDropDownLabelWrapper
              onClick={() => setSupplyDropDownOpen(!isSupplyDropDownOpen)}
            >
              <Styled.CreateMusicDropDownLabel>
                {supplyLabel === "multiple" ? "Multiple Copies" : "Single Copy"}
              </Styled.CreateMusicDropDownLabel>
              <Styled.CreateMusicIcon>
                <img src={blueArrow} alt="back" />
              </Styled.CreateMusicIcon>
            </Styled.CreateMusicDropDownLabelWrapper>
            {isSupplyDropDownOpen && (
              <Styled.CreateMusicDropDownContentWrapper>
                <Styled.CreateMusicDropDownContent
                  onClick={() => {
                    setSupplyLabel(
                      supplyLabel === "multiple" ? "single" : "multiple"
                    );
                    setSupplyDropDownOpen(!isSupplyDropDownOpen);
                  }}
                >
                  {supplyLabel === "multiple"
                    ? "Single Copy"
                    : "Multiple Copies"}
                </Styled.CreateMusicDropDownContent>
              </Styled.CreateMusicDropDownContentWrapper>
            )}
          </Styled.CreateMusicDropDownMainContainer>
          <Styled.MusicSupplyQuantityWrapper>
            {supplyLabel === "multiple" && (
              <>
                <Styled.MusicSupplyQuantityWrapper>
                  <Styled.MusicSupplyLabel>
                    How many copies will be available?
                  </Styled.MusicSupplyLabel>
                  <Styled.MusicSupplyMaxCount>
                    (Max: 100,000)
                  </Styled.MusicSupplyMaxCount>
                  <Styled.CreateMusicInputField
                    type="text"
                    placeholder="Enter Quantity"
                    autoComplete="new-password"
                  />
                </Styled.MusicSupplyQuantityWrapper>
                <Styled.MusicSupplyQuantityWrapper>
                  <Styled.MusicSupplyLabel>
                    Price of each copy? <span>(must b/w: 0.1 - 1.0 LNQ )</span>
                  </Styled.MusicSupplyLabel>
                  <Styled.MusicSupplyMaxCount>
                    (Max: 100,000)
                  </Styled.MusicSupplyMaxCount>
                  <Styled.CreateMusicInputField
                    type="text"
                    placeholder="Enter LNQ Price"
                    autoComplete="new-password"
                  />
                </Styled.MusicSupplyQuantityWrapper>
              </>
            )}
            {supplyLabel === "single" && (
              <Styled.CreateMusicInputFieldWrapper>
                <Styled.Label>Price</Styled.Label>
                <Styled.CreateMusicInputField
                  type="text"
                  placeholder="Enter LNQ Price"
                  autoComplete="new-password"
                />
              </Styled.CreateMusicInputFieldWrapper>
            )}
          </Styled.MusicSupplyQuantityWrapper>
        </Styled.CreateMusicBorderBottomWrapper>

        {/* property */}
        <Styled.CreateMusicBorderBottomWrapper>
          <Styled.Label>Properties</Styled.Label>
          <Styled.CreateMusicPropertiesLayout>
            <Styled.CreateMusicPropertiesMainContainer>
              <Styled.CreateMusicPropertiesContainer>
                <Styled.Label>Type</Styled.Label>
                <Styled.CreateMusicInputField
                  type="text"
                  placeholder="Director"
                />
              </Styled.CreateMusicPropertiesContainer>
              <Styled.CreateMusicPropertiesContainer>
                <Styled.Label>Name</Styled.Label>
                <Styled.CreateMusicInputField
                  type="text"
                  placeholder="Dwayne Johnson"
                />
              </Styled.CreateMusicPropertiesContainer>
            </Styled.CreateMusicPropertiesMainContainer>
            {Array.from({ length: 2 }, (x, v) => (
              <Styled.CreateMusicPropertiesMainContainer>
                <Styled.CreateMusicPropertiesContainer>
                  <Styled.Label>Type</Styled.Label>
                  <Styled.CreateMusicInputField
                    type="text"
                    placeholder="Director"
                  />
                </Styled.CreateMusicPropertiesContainer>
                <Styled.CreateMusicPropertiesContainer>
                  <Styled.RemoveButtonWrapper>
                    <Styled.Label>Name</Styled.Label>
                    <Styled.RemoveButton>Remove</Styled.RemoveButton>
                  </Styled.RemoveButtonWrapper>
                  <Styled.CreateMusicInputField
                    type="text"
                    placeholder="Dwayne Johnson"
                  />
                </Styled.CreateMusicPropertiesContainer>
              </Styled.CreateMusicPropertiesMainContainer>
            ))}
          </Styled.CreateMusicPropertiesLayout>
          <Styled.Description fontWeight="600" color="#0552FB">
            + Add More Property
          </Styled.Description>
          <Styled.Description>
            Properties show up underneath your collectibles, are clickable, and
            can be filtered in your collectibles
          </Styled.Description>
        </Styled.CreateMusicBorderBottomWrapper>

        {/* tentative */}
        <Styled.CreateMusicInputFieldWrapper>
          <Styled.Label>Tentative date</Styled.Label>
          <Styled.CreateMusicInputField type="date" placeholder="Date" />
          <Styled.Description>
            Selected this date & time for listing of music NFT in marketplace.
          </Styled.Description>
        </Styled.CreateMusicInputFieldWrapper>

        {/* explicit */}
        <Styled.ExplicitContentMainWrapper>
          <div>
            <Styled.ExplicitContentLabel>
              Is Explicit or NSFW
            </Styled.ExplicitContentLabel>
            <Styled.Description>
              Please toggle the on if your collectible contains any profanity or
              NSFW content
            </Styled.Description>
          </div>
          <RadioButton />
        </Styled.ExplicitContentMainWrapper>

        {/* royalty */}
        <Styled.CreateMusicBorderBottomWrapper>
          <Styled.Label>Add Royalty (%)</Styled.Label>
          <Styled.Description>
            You are allowed to add different mates and their respective royalty.
          </Styled.Description>
          <Styled.Description>Max royalty : 10%</Styled.Description>
          <Styled.AddRoyaltyMainContainer>
            <Styled.AddRoyaltyContainer>
              <Styled.Label>Author</Styled.Label>
              <Styled.AddRoyaltyInputWrapper>
                <Styled.CreateMusicInputField />
                <Styled.CreateMusicInputField />
              </Styled.AddRoyaltyInputWrapper>
            </Styled.AddRoyaltyContainer>
          </Styled.AddRoyaltyMainContainer>
          {Array.from({ length: 2 }, (x, v) => (
            <Styled.AddRoyaltyMainContainer>
              <Styled.AddRoyaltyContainer>
                <Styled.Label>Co-author</Styled.Label>
                <Styled.AddRoyaltyInputWrapper>
                  <Styled.CreateMusicInputField />
                  <Styled.CreateMusicInputField />
                </Styled.AddRoyaltyInputWrapper>
              </Styled.AddRoyaltyContainer>
            </Styled.AddRoyaltyMainContainer>
          ))}
          <Styled.Description color="#0552FB" fontWeight="600">
            + Add Co-auhtor
          </Styled.Description>
        </Styled.CreateMusicBorderBottomWrapper>

        {/* upload file */}
        <Styled.UploadFileWrapper>
          <UploadFile
            heading="Upload Music File"
            description="Mp3 must be less than 100MB in size."
          />
          <UploadFile
            heading="Upload Music Preview File"
            description="Mp3, Max (15sec ~ 20mb)"
          />
          <UploadFile
            heading="Upload Music Cover Image"
            description="Png, Jpg. Max size is100MB"
          />
          <UploadFile
            heading="Upload Clearance Document"
            description="Pdf, Jpg. Max size is100MB"
          />
        </Styled.UploadFileWrapper>

        {/* accept policy */}
        <Styled.CheckboxMainWrapper>
          <CheckBox />
          <Styled.CheckboxLabel>
            I certify that i am the sole original and individual owner of the
            file, I am uploading to the LNQ platform. I understand that failure
            to comply with the <span>Ownership Terms</span> can result in
            penalties, loss of my account, or legal actions.
          </Styled.CheckboxLabel>
        </Styled.CheckboxMainWrapper>

        {/* button */}
        <Styled.CreateMusicButtonWrapper>
          <SharedButton text="Cancel" fontColor="#fff" bgColor="#171B1E" />
          <SharedButton text="Submit" fontColor="#171B1E" bgColor="#fff" />
        </Styled.CreateMusicButtonWrapper>
      </Styled.CreateMusicContainer>
    </Styled.CreateMusicLayout>
  );
};

export default CreateMusic;
