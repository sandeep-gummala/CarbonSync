
export default function ChartsCard() {
    return (
        <div className="bg-white rounded-lg shadow-md px-6 py-4 h-96">
            <div className="w-full flex justify-between items-center">
                <div>
                    <h3 className="text-sm font-medium text-[#8b8b8b]">Statistics</h3>
                    <h1 className="font-semibold text-lg">
                        Demographic<span className="text-sm text-[#8b8b8b]">
                            (Montly)</span>
                    </h1>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-[#4a3aff]"></div>
                        <h1 className="text-sm font-medium text-[#2c2c2c]">
                            Carbon footprints
                        </h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-[#c893fd]"></div>
                        <h1 className="text-sm font-medium text-[#2c2c2c]">
                            Carbon sinks
                        </h1>
                    </div>
                </div>
            </div>
            <canvas id="myChart" width="380" height="220"></canvas>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script src="Bar.js"></script>
        </div>
    )
}