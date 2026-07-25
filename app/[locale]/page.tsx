import Hero from "../_components/Hero";
import Mission from "../_components/Mission";
import Commodities from "../_components/Commodities";
import Footprint from "../_components/Footprint";
import News from "../_components/News";
import CTA from "../_components/CTA";
import RecentActivitiesTimeline from "../_components/RecentActivitiesTimeline";
import VideoGallery from "../_components/VideoGallery";

export default function Home() {
  return (
      <main className="">
        <Hero/>
        <Mission/>
        <VideoGallery/>
        <Commodities/>
        <Footprint/>
        <RecentActivitiesTimeline/>
        <News/>
        <CTA/>
      </main>
  );
}
