import { companies } from "../data/companies";

function CompanyScroller() {
  return (
    <section className="py-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-center text-lg font-semibold mb-4 text-gray-700 dark:text-white">
        Production Companies
      </h3>
      <div className="flex overflow-x-auto gap-6 px-4 scrollbar-hide">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white dark:bg-gray-700 rounded shadow"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyScroller;
