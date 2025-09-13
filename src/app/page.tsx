import Section from '@/components/Section';
import Button from '@/components/Button';

/**
 * The home page displays a hero section with a welcome message and call to action.
 */
export default function Home() {
  return (
    <Section className="flex flex-col items-center text-center mt-16 space-y-8">
      <h1 className="text-4xl md:text-6xl font-bw-gradual">
        Welcome to Evolution Stables
      </h1>
      <p className="text-lg text-gray max-w-2xl">
        The leading platform for fractional horse ownership and investment.
      </p>
      <Button variant="primary">Learn More</Button>
    </Section>
  );
}