const topics = [
  "Multimodal Signal Processing",
  "Human-Robot Interaction",
  "Affective Computing",
  "Computer Vision",
  "Natural Language Processing",
  "Speech Processing",
  "Virtual and Augmented Reality",
  "Gesture Recognition",
  "Multimodal Datasets"
];

export function Topics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Conference Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{topic}</h3>
              <p className="text-gray-600">Latest research and developments in {topic.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}