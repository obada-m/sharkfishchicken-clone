const reviewsData = [
  {
    name: 'Sarah M.',
    review: "Best fried chicken in town! The crispy coating is perfect and the meat is so juicy. My family orders from here every Friday night. The lemon pepper seasoning is absolutely amazing!",
  },
  {
    name: 'Marcus D.',
    review: 'The fish is incredibly fresh and the portions are generous. I love their catfish dinner with seasoned fries. Staff is always friendly and the food comes out hot every time. Highly recommend!',
  },
  {
    name: 'Jennifer L.',
    review: 'Amazing wings and great customer service! The cajun seasoning has the perfect kick. Been coming here for years and they never disappoint. The combo meals are a great value too.',
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