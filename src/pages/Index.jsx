import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the meow.",
  "The first cat in space was French. Her name was Felicette.",
  "Cats can jump up to six times their length.",
];

const Index = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cat Breeds</CardTitle>
            <CardDescription>Some popular cat breeds</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Siamese</li>
              <li>Persian</li>
              <li>Maine Coon</li>
              <li>Bengal</li>
              <li>Scottish Fold</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cat Care Tips</CardTitle>
            <CardDescription>How to keep your cat healthy and happy</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Provide a balanced diet</li>
              <li>Regular vet check-ups</li>
              <li>Keep the litter box clean</li>
              <li>Offer plenty of playtime</li>
              <li>Groom your cat regularly</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Cat Images</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-4">
            <img src="https://placekitten.com/300/200" alt="Cat 1" className="mx-auto object-cover w-full sm:w-1/2 md:w-1/3 rounded-lg" />
            <img src="https://placekitten.com/301/200" alt="Cat 2" className="mx-auto object-cover w-full sm:w-1/2 md:w-1/3 rounded-lg" />
            <img src="https://placekitten.com/302/200" alt="Cat 3" className="mx-auto object-cover w-full sm:w-1/2 md:w-1/3 rounded-lg" />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Fun Cat Fact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{catFacts[factIndex]}</p>
            <Button onClick={nextFact}>Next Fact</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
