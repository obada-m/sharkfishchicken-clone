const reviewsData = [
  {
    name: 'Krystal Murray',
    review: "Food is ALWAYS hot and fresh! I like going here because it reminds me of food back home in Chicago. I've only had the catfish fillets and wings and they both be FYE 🤤🔥 I usually call ahead and pick up in the drive thru never had an issue.",
  },
  {
    name: 'Kimberly Green',
    review: 'Our first time eating there. The food and service was great. We would eat there again.',
  },
  {
    name: 'Viveca Spivey',
    review: 'Great customer service, Chick wings were so good. It took me 2 days to eat them. Very fulfilling',
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
              <div className="mt-6">
                <p className="font-semibold text-foreground">{review.name}</p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                  <span className="text-muted-foreground text-sm ml-2">5/5 stars</span>
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