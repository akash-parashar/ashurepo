import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us at ICMI 2024</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Be part of the premier international conference on multimodal interaction and share your research with experts from around the world.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent text-white hover:bg-white hover:text-blue-900"
        >
          Submit Your Paper
        </Button>
      </div>
    </section>
  );
}