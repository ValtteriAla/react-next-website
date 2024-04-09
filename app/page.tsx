

export default function Home() {

/* Fetch data before rendering - for client side fetching, watch: "@/components/ListData"
  const countries = await getCountries();
*/

  return (
    <div className="page-container">
     
      <main className="main-content items-center justify-between p-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          alias illum fuga, at eos voluptatum consectetur quasi quam, libero
          praesentium magni iusto nostrum porro placeat earum fugit vero quae
          exercitationem.
        </p>

        <ul className="h-32 w-72 overflow-y-auto border-black border-2 rounded">
       
        </ul>
      </main>

   
    </div>
  );
}
