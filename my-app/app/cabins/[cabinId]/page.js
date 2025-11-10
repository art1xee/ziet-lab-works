import { getCabin, getCabins } from "@/app/_lib/data-service";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function CabinPage({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={cabin.image}
            fill
            className="object-cover"
            alt={`Cabin ${cabin.name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {cabin.name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            For up to <span className="font-bold">{cabin.maxCapacity}</span>{" "}
            guests
          </p>

          <p className="flex gap-3 justify-end items-baseline">
            {cabin.discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${cabin.regularPrice - cabin.discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${cabin.regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${cabin.regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve Cabin {cabin.name} today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}