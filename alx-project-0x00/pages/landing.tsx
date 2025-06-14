import Card from "@/components/Card";

export default function Landing() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Landing Page</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
}


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    </div>
  )
}
export default Landing

