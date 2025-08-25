import Image from 'next/image';

const reviewsData = [
  {
    name: 'Tony P.',
    review: "Really great Sharks and Tony's. They offer more options when you go inside than if you order online. If the order isn't right, they will make you a fresh order.",
    imageUrl: 'https://static-content.owner.com/brands/funnel/reviews-section-images/rYSPbAUtjkwGvMLIAx0Rf8aAHB1nEcxZ/khXoR6Z3I8hC3gZ3NXFgWWH7.png?v=4761751329&w=64&q=80&auto=format',
    link: '#',
  },
  {
    name: 'Keisha X.',
    review: 'The only restaurant open Thanksgiving night. So happy I found them. The food was fresh and made to order. He put as much lemon pepper on my chicken as I wanted. Reasonably priced, stays open late. Would go back.',
    imageUrl: 'https://static-content.owner.com/brands/funnel/reviews-section-images/tJIBWf8quS9QVWq25MOpEQinBBfTOdDr/khXoR6Z3I8hC3gZ3NXFgWWH7.png?v=8591941645&w=64&q=80&auto=format',
    link: '#',
  },
  {
    name: 'Thom C.',
    review: 'Every time I order from there the food is great',
    imageUrl: 'https://static-content.owner.com/brands/funnel/reviews-section-images/YECnB450nmOE7J1oBLKB9twcx13jaiSO/khXoR6Z3I8hC3gZ3NXFgWWH7.png?v=3697994388&w=64&q=80&auto=format',
    link: '#',
  },
];

const CustomerReviewsSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-12">
          What our guests are saying
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex-grow">
                <p className="text-muted-foreground">"{review.review}"</p>
              </div>
              <div className="flex items-center mt-6">
                <Image
                  src={review.imageUrl}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <a href={review.link} className="text-primary text-sm hover:underline">
                    View more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;