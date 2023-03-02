import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DemoClassComponent } from "../components/DemoClassComponent";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Mongoliin amidral",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Tsalin",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Hereglee",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Or",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      backgroundColor: "rgba(53, 162, 35, 0.5)",
    },
  ],
};

export default function Home() {
  return (
    <div className="container-sm body-container">
      <div className="row">
        <div className="col-12">
          <Bar options={options} data={data} />;
        </div>
        <div className="col-12">
          {/* <Pie data={pieData} /> */}
          <DemoClassComponent />
        </div>
      </div>
    </div>
  );
}
