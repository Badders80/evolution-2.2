import { Section } from "@/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Section className="bg-gray-200">
        <h1 className="text-2xl font-bold">Test Section 1</h1>
      </Section>
      <Section className="bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Test Section 2</h1>
      </Section>
    </>
  );
}
