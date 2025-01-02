import { Link } from "react-router-dom";
import "./App.css";
import { RiEBike2Fill, RiDrinks2Fill } from "react-icons/ri";
import { FaCarrot, FaHome, FaArrowDown } from "react-icons/fa";
import { PiBellRingingFill } from "react-icons/pi";

const timeLine = [
  {
    time: "18:00 - 18:30",
    title: "Qua đón Misa đi chơi nè",
    path: "Pick-up",
    icon: <RiEBike2Fill />,
  },
  {
    time: "19:00 - 20h30",
    title: "Thời gian này sẽ làm căng bụng nhe để có sức để deeptalk healing",
    path: "Have-dinner",
    icon: <FaCarrot />,
  },
  {
    time: "20:45 - 21:30",
    title: "Ăn xong thì mình sẽ đi chụp hình photo by nhe bbi ",
    path: "Picture",
    icon: <RiDrinks2Fill />,
  },
  {
    time: "22:00 - Go home",
    title: "Tụi mình sẽ cùng đi coi phim Chị Dâu bộ phim em thích nhaaa",
    path: "Movie",
    icon: <FaHome />,
  },
];

function App() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Chedule for a date
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Vợ iu của tui nhớ giữ lịch này nhe để tiện theo dõi nè, hẹn Vợ iu&nbsp;
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                18:30 Thursday, 2 January, 2025
              </span>
              <span className="text-xl text-blue-600 dark:text-blue-500 inline-flex align-middle ml-1">
                <PiBellRingingFill />
              </span>
              nhé!
            </p>

            <div className="mt-4">
              <p className="inline-flex items-center text-lg font-medium text-blue-600 dark:text-blue-500">
                Ở mỗi tiêu đề từng mốc thời gian có thể ấn vào coi thêm được nhee
                <FaArrowDown className="w-5 h-5 ml-2 transition-transform transform hover:translate-y-1" />
              </p>
            </div>
          </div>

          <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              {timeLine.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 py-6 sm:gap-8 sm:flex-row sm:items-center"
                >
                  <p className="w-40 text-lg font-medium text-gray-600 dark:text-gray-400 text-left sm:text-right shrink-0">
                    {item.time}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left sm:text-right">
                    <Link to={`/event/${item.path}`} className="hover:underline flex items-center">
                      <span className="mr-2">{item.title}</span>
                      {item.icon}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
