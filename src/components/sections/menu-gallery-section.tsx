import Image from 'next/image';

const galleryImages = [
  "/Grid1.JPG",
  "/Grid2.JPG",
  "/Grid3.JPG",
  "https://static-content.owner.com/funnel/images/14f4957a-b99c-40c4-a259-02a482b1dc4f?v=7652870070&w=3840&q=80&auto=format",
  "https://static-content.owner.com/funnel/images/2449e4f4-ba39-4bde-84a7-123274da0999?v=9105943787&w=3840&q=80&auto=format",
  "https://static-content.owner.com/funnel/images/08a81a86-b3ad-4bd2-8dcd-bcd316a5abcd?v=7163223556&w=3840&q=80&auto=format",
  "https://static-content.owner.com/funnel/images/320e56d0-3062-4a66-9e2a-d3d33f5cd74d?v=7468351913&w=3840&q=80&auto=format",
  "https://static-content.owner.com/funnel/images/d8ef56c6-616c-4ebd-b0e7-ea9590a393ad?v=2344467889&w=3840&q=80&auto=format",
  "https://static-content.owner.com/funnel/images/61728727-b0d6-4d8b-9ddd-0dd951f27cb3?v=3978152857&w=3840&q=80&auto=format"
];

const MenuGallerySection = () => {
  return (
    <section className="bg-background py-[60px]">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Explore Our Delicious Menu! 🍽️
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
          Take a look at some of our mouthwatering menu items! From crispy fried chicken to fresh seafood, each dish is made to satisfy. Whether you&apos;re in the mood for wings, shrimp, or a hearty fish combo, we’ve got something to please every appetite. Browse our gallery and see what’s cooking at Sharks Fish & Chicken – your next meal is just a click away!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <Image
                src={src}
                alt={`Menu gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
                className="object-cover transition-transform duration-200 ease-in-out group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGallerySection;