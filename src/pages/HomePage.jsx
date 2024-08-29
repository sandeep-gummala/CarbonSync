import ChartsCard from "../components/ChartsCard";
import DataCard from "../components/dataCard";
import LeftNavBar from "../components/LeftNavBar";

function HomePage() {
    function monthlyChart() {
        document.addEventListener("DOMContentLoaded", () => {
            const ctx = document.getElementById("myChart").getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"],
                    datasets: [
                        {
                            label: "Carbon Emmision",
                            data: [
                                1200, 1100, 2000, 1800, 1700, 1500, 1300, 2000, 1700,
                                1300, 1500, 1900,
                            ],
                            backgroundColor: "#4a3aff",
                            borderWidth: 0,
                            borderRadius: 3,
                        },
                        {
                            label: "Carbon Sinks",
                            data: [
                                1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100,
                            ],
                            backgroundColor: "#c893fd",
                            borderWidth: 0,
                            borderRadius: 3,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        });
    }
    return (
        <div className="bg-gray-100 font-sans overflow-x-hidden">
            <div className="flex relative">
                <LeftNavBar />
                <main className="flex-1 p-8">
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Gevra Coal Mine</h1>
                        <p className="text-gray-600">Odisha, India</p>
                    </header>
                    <div className="flex space-x-4 items-center mb-8">
                        <div>
                            <p className="font-bold text-lg">Emissions</p>
                            <span className="text-gray-600">Data Wise</span>
                            <span className="text-gray-600 text-xs">(in kgs)</span>
                        </div>
                        <div className="relative ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input datepicker="true" id="default-datepicker" type="text" className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-white dark:border-gray-400 dark:placeholder-gray-600 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Select date" />
                        </div>
                    </div>
                    <div className="flex mb-8 space-x-5">
                        <DataCard name="Excavation" index={0} />
                        <DataCard name="Transportation" index={1} />
                        <DataCard name="Machinery" index={2} />
                        <DataCard name="Others" index={3} />
                    </div>
                    <section className="grid grid-cols-2 gap-4">
                        <ChartsCard />
                        <ChartsCard />
                    </section>
                    <div className="col-span-2 bg-white rounded-lg shadow-md p-6 mt-5">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Total Summary of Sales
                        </h3>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HomePage;