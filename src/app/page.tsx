import NavBar from "@/components/layout/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NavBar */}
      <NavBar />

      {/* Hero */}
      <section
        className="relative w-full flex items-center justify-center h-screen bg-black text-gold"
        style={{
          backgroundImage: "url('/assets/Horse-Double-Black.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl font-bold">Hero</h1>
      </section>

      {/* Sections */}
      <section className="w-full py-section bg-gray-500 text-gold text-lg">
        <div className="container">Section1</div>
      </section>

      <section className="w-full py-section bg-gray-700 text-gold text-lg">
        <div className="container">Section2</div>
      </section>

      <section className="w-full py-section bg-gray-500 text-gold text-lg">
        <div className="container">Section3</div>
      </section>

      <section className="w-full py-section bg-gray-700 text-gold text-lg">
        <div className="container">Section4</div>
      </section>

      {/* CTA */}
      <section className="w-full py-section bg-gray-500 text-gold text-lg">
        <div className="container">CTA</div>
      </section>

      {/* Footer */}
      <footer className="w-full py-section bg-gray-700 text-gold text-lg text-center">
        Footer
      </footer>
    </div>
  );
}
