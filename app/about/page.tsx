export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About ICMI 2024</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About the Conference</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                The International Conference on Multimodal Interaction (ICMI) is the premier international forum for multidisciplinary research on multimodal human-human and human-computer interaction, interfaces, and system development.
              </p>
              <p className="text-gray-600">
                The conference focuses on theoretical and empirical foundations, component technologies, and combined multimodal processing techniques that define the field of multimodal interaction analysis, interface design, and system development.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Organizing Committee</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">General Chairs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Prof. John Doe - University A</li>
                  <li>Prof. Jane Smith - University B</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Program Chairs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Prof. Alice Johnson - University C</li>
                  <li>Prof. Bob Wilson - University D</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}