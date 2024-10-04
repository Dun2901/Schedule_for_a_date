import { Link } from "react-router-dom";
import "./App.css";
import { RiEBike2Fill, RiDrinks2Fill } from "react-icons/ri";
import { FaCarrot, FaHome, FaArrowDown } from "react-icons/fa";
import { PiBellRingingFill } from "react-icons/pi";

const timeLine = [
  {
    time: "17:30 - 18:00",
    title: "Qua đón bé Hăn đi chơi nè",
    path: "pick-up",
    icon: <RiEBike2Fill />,
  },
  {
    time: "18:30 - 19:30",
    title: "mốc thời gian này sẽ làm căng bụng nhe để có sức nói chuyện nà",
    path: "have-dinner",
    icon: <FaCarrot />,
  },
  {
    time: "20:00 - 21:00",
    title: "Ăn xong thì mình sẽ đi uống nước nè",
    path: "go-drink",
    icon: <RiDrinks2Fill />,
  },
  {
    time: "21:00 - 21:30",
    title: "Ở thời gian nì sẽ là đưa bé Hăn về nghỉ ngơi nà",
    path: "go-home",
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
              chedule for a date
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Bạn nhỏ của tui nhớ giữ lịch này nhe để tiện theo dõi nè, hẹn bạn nhỏ
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                17:30 Wednesday, 9 October, 2024
              </span>
              <span className="text-xl text-blue-600 dark:text-blue-500 inline-flex align-middle ml-1">
                <PiBellRingingFill />
              </span>
              nheeee!
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
