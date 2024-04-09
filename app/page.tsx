import TopNavigation from "@/components/TopNav";
import Footer from "@/components/Footer";
import ListCountryData from "@/components/ListData";


export default function Home() {

/* Fetch data before rendering
  const countries = await getCountries();
*/



  return (
    <div className="page-container">
      <TopNavigation />
      <main className="main-content items-center justify-between p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          alias illum fuga, at eos voluptatum consectetur quasi quam, libero
          praesentium magni iusto nostrum porro placeat earum fugit vero quae
          exercitationem.
        </p>

        <ul className="max-h-32 overflow-y-auto max-w-72 border-black border-2 rounded">
          <ListCountryData/>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
