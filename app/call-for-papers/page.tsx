export default function CallForPapersPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Call for Papers</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Topics of Interest</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                ICMI 2024 invites submissions on all aspects of multimodal interaction. Topics include, but are not limited to:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
                <li>Multimodal Signal Processing</li>
                <li>Human-Robot Interaction</li>
                <li>Affective Computing</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
                <li>Speech Processing</li>
                <li>Virtual and Augmented Reality</li>
                <li>Gesture Recognition</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Submission Guidelines</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4">
                <li>
                  <strong>Paper Length:</strong>
                  <p className="text-gray-600">Full papers: up to 8 pages + references</p>
                </li>
                <li>
                  <strong>Format:</strong>
                  <p className="text-gray-600">ACM Conference Proceedings format</p>
                </li>
                <li>
                  <strong>Submission Deadline:</strong>
                  <p className="text-gray-600">June 15, 2024</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}