import Image from 'next/image';

const RewardsProgramSection = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative w-full aspect-[2/1] overflow-hidden rounded-lg">
            <Image
              src="/images/img_2.jpeg"
              alt="Sharks Fish & Chicken Rewards program promotional image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 64rem"
            />
          </div>
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sharks Fish & Chicken Rewards
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Join our rewards program, earn points every time you order online and redeem your points for free food!
          </p>
          <div className="mt-6 inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground shadow-sm">
            Loyalty
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsProgramSection;