"use client";

import CoreValues from "../../_components/CoreValues";
import ExecutiveBio from "../../_components/ExecutiveBio";
import FieldOperations from "../../_components/FieldOperations";
import TeamHero from "../../_components/TeamHero";
import VideoGallery from "../../_components/VideoGallery";


export default function Team() {
  return (
      <main className="bg-white pt-15">
        <TeamHero />
        <CoreValues />
        <ExecutiveBio/>
        <VideoGallery/>
        <FieldOperations/>
      </main>
  );
}