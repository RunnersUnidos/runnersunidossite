import SubmitMilesForm from "../../components/Submitmiles";
import LiveFeed from "../../components/livefeed";


export default function RunnersDayPage() {
  return (
  

    <main className="p-6 bg-gradient-to-r from-[#f05e16] to-gray h-auto ">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6">International Runners Day 🏃‍♀️</h1>
        
        <LiveFeed />
        
        {/* <SubmitMilesForm /> */}
      </div>
    </main>
  
  );
}
