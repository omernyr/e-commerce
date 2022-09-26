import {
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
    Chart as ChartJS
} from "chart.js";
import { Line, Bar } from "react-chartjs-2"
import Adminpage from "./admin-page";

import { useSelector } from "react-redux";

ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

const Dashboard = () => {
    const orders = useSelector(state => state.orderSlice.myorders)
    const data = {

        labels: [...orders.map((order,index) => index )],
        datasets: [{
            label: "Haftalık Kazanç",
            data: [...orders.map((order,index) => Number(order.price) )],
            backgroundColor: "transparent",
            borderColor: "rgb(134, 239, 172)"
        }]
    }

    const labels = [...orders.map((order,index) => index )];
    const data1 = {
        labels: labels,
        datasets: [{
            label: 'Aylık Satış',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    return (

        <div>
            <div className="flex">
                <Adminpage />
                <section className="ml-10" style={{ width: "80vh" }}>
                    <Line data={data}></Line>
                    <Bar data={data1}></Bar>
                </section>

            </div>
        </div>
    )
}

export default Dashboard