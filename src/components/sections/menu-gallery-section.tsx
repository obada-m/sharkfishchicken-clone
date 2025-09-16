import Image from 'next/image';

const galleryImages = [
  "/images/img_3.jpeg",
  "/images/img_4.jpeg",
  "/images/img_5.jpeg",
  "/images/img_6.jpeg",
  "/images/img_7.jpeg",
  "/images/img_8.jpeg",
  "/images/img_9.jpeg",
  "/images/img_10.jpeg",
  "/images/img_11.jpeg"
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