import Image from 'next/image';
import Link from 'next/link';

type MenuItem = {
  name: string;
  imageSrc: string;
  href: string;
};

const menuItems: MenuItem[] = [
  {
    name: "10 Wings & Fries",
    imageSrc: "https://static-content.owner.com/funnel/images/6ed0cb7d-cc10-46d1-9d3b-97a80403d97e?v=6442301501&w=3840&q=80&auto=format",
    href: "/menu?item=10-wings-fries-BrZV",
  },
  {
    name: "15 Pcs Boneless Wings with Fries",
    imageSrc: "https://static-content.owner.com/funnel/images/0963047f-1822-4010-b563-93e20ba2ed12?v=5877672445&w=3840&q=80&auto=format",
    href: "/menu?item=15-pcs-boneless-wings-with-fries-kzZm",
  },
  {
    name: "6 Buffalo/Honey BBQ 1/2 Wings",
    imageSrc: "https://static-content.owner.com/funnel/images/357d9564-8643-4055-809f-6e0aeefb55c8.jpg?v=6518221906&w=3840&q=80&auto=format",
    href: "/menu?item=6-buffalohoney-bbq-12-wings-ygJE",
  },
  {
    name: "Large Catfish Tails (5 Pcs)",
    imageSrc: "https://static-content.owner.com/funnel/images/aa452834-2855-439e-8199-47e600053ca7.jpg?v=4576282683&w=3840&q=80&auto=format",
    href: "/menu?item=large-catfish-tails-5-pcs-sMaj",
  },
  {
    name: "Large Catfish Fillet (3 Pcs)",
    imageSrc: "https://static-content.owner.com/funnel/images/07dff817-e2ba-4eb6-8756-a1b8f0ab3fe2?v=8390352292&w=3840&q=80&auto=format",
    href: "/menu?item=large-catfish-fillet-3-pcs-gxT7",
  },
  {
    name: "Medium Catfish Nuggets",
    imageSrc: "https://static-content.owner.com/funnel/images/99a96597-81b2-45c2-b050-35b24bdafbbc?v=8585416234&w=3840&q=80&auto=format",
    href: "/menu?item=medium-catfish-nuggets-shIv",
  },
  {
    name: "Small Catfish Nuggets",
    imageSrc: "https://static-content.owner.com/funnel/images/77d58e54-952b-4506-80cb-0e42da885820?v=5383875533&w=3840&q=80&auto=format",
    href: "/menu?item=small-catfish-nuggets-WNF4",
  },
  {
    name: "Small Tilapia Fillet (2 Pcs)",
    imageSrc: "https://static-content.owner.com/funnel/images/1d70af5c-efb0-4d04-acf5-b4a2c6db0dfd?v=1517938561&w=3840&q=80&auto=format",
    href: "/menu?item=small-tilapia-fillet-2-pcs-Fzms",
  },
  {
    name: "Small Chicken Tenders (4 Pcs)",
    imageSrc: "https://static-content.owner.com/funnel/images/1bb13ec1-7d2e-4843-b1aa-61678ddc63d5?v=7315262987&w=3840&q=80&auto=format",
    href: "/menu?item=small-chicken-tenders-4-pcs-CuNl",
  },
  {
    name: "Large Chicken Gizzards",
    imageSrc: "https://static-content.owner.com/funnel/images/7126566d-cabd-4fac-b56c-325b4e47f292?v=4056296481&w=3840&q=80&auto=format",
    href: "/menu?item=large-chicken-gizzards-GL0m",
  },
];


export default function FeaturedMenuSection() {
  return (
    <section className="bg-background py-[60px]">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <Link href="/menu">
            <h2 className="text-2xl font-semibold text-foreground">Featured</h2>
          </Link>
          <Link href="/menu" className="text-base font-semibold text-primary hover:underline">
            View menu
          </Link>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex flex-nowrap gap-6">
            {menuItems.map((item, index) => (
              <Link href={item.href} key={index} className="block flex-shrink-0 w-[260px] group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="aspect-square object-cover w-full transition-transform duration-200 ease-in-out group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-center text-base font-semibold text-foreground">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}