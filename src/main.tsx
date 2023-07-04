import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ArtistProfile from "./artistProfile/ArtistProfile";
import ConfirmTransaction from "./confirmTransaction/ConfirmTransaction";
import CreateMusic from "./createMusic/CreateMusic";
import CreateMusicPlaylist from "./createMusicPlaylist/CreateMusicPlaylist";
import DeleteModal from "./deleteModal/DeleteModal";
import DragDrop from "./DragDrop";
import ExploreAllMusic from "./ExploreAllMusic";
import ExploreMusic from "./ExploreMusic";
import GridLayout from "./GridLayout";
import "./index.css";
import InputPinField from "./inputPinField/InputPinField";
import ListMarketPlace from "./listMarketplace/ListMarketPlace";
import ListPublicToggle from "./listPublicToggle/ListPublicToggle";
import MobileSideBar from "./mobileSideBar/MobileSideBar";
import MusicAboutSection from "./musicAboutSection/MusicAboutSection";
import MusicLibrary from "./musicLibrary/MusicLibrary";
import MusicSearch from "./musicSearch/MusicSearch";
import PlayListOption from "./playlistOption/PlayListOption";
import Pratice from "./Pratice";
import SongActivity from "./songActivity/SongActivity";
import SongDetail from "./songDetail/SongDetail";
import SuccessTransaction from "./successTransaction/SuccessTransaction";
import Testing from "./Testing";
import ConfirmPin from "./ConfirmPin";
import ImageCrop from "./ImageCrop";
import ColorFinder from "./ColorFinder";
import InputField from "./Pratice";
import ImageColorExtractor from "./ImageColorExtractor";
import BorderGradient from "./BorderGradient";
import MainComponent from "./hoc/MainComponent";
import GoogleLoginButton from "./GoogleLoginButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import FireBaseUpload from "./firebaseUpload/FireBaseUpload";

const clientId =
  "747569371304-h2n7v9ft2v2unhaa7jtl23ro4f14k5s0.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
      {/* <ExploreMusic /> */}
      {/* <ExploreAllMusic />
    <SongDetail />  
    {/* <ConfirmTransaction /> 
    {/* <SuccessTransaction /> 
    {/* <ConfirmPin /> 
    {/* <DeleteModal /> */}
      {/* <SongActivity /> */}
      {/* <SongActivity /> */}
      {/* <MusicSearch /> */}
      {/* <ListMarketPlace /> */}
      {/* <MusicAboutSection /> */}
      {/* <ArtistProfile /> */}
      {/* <MusicLibrary /> */}
      {/* <ExploreAllMusic /> */}
      {/* <ArtistProfile /> */}
      {/* <ListPublicToggle /> */}
      {/* <GridLayout /> */}
      {/* <ConfirmPin /> */}
      <FireBaseUpload />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
