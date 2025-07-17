import { FeaturedCard } from "@/components/FeaturedCard";
import Hero from "@/components/Hero";
import { Community } from "@/components/Community";
import { Success } from "@/components/Success";
import { Provide } from "@/components/Provide";


export default function Home() {
  return (
    <>
      <main className="bg-black/[.95] min-h-screen ">
        <Hero/>
        <FeaturedCard/>
        <Community/>
        <Success/>
        <Provide/>
        
      </main>
    </>
  );
}
