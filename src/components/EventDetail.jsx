import { useParams } from "react-router-dom";

const eventDetails = {
  "Pick-up": {
    title: "Qua đón bé Nghi nè",
    description:
      "Lâu rồi tụi mình không đi date với nhau, lần này sẽ đi với nhau thật chỉnh chu ",
    url: "https://misa2912.netlify.app/",
    location: "nhà bé Nghi",
    time: "18:00 - 18:30",
    imageUrl:
      "https://images.unsplash.com/photo-1643865744379-cae52845af3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "Have-dinner": {
    title: "Chamie Steak House",
    description: "nếu Vợ muốn biết thêm thông tin có thể ấn vào nút xanh bên dưới nha",
    url: "https://www.facebook.com/ChamieSteak/",
    location: "23C Bắc Hải, Phường 15, Quận 10, Ho Chi Minh City, Vietnam",
    time: "19:00 - 20h30",
    imageUrl:
      "https://scontent-sin11-1.xx.fbcdn.net/v/t39.30808-6/294796499_541814544138353_1685175791220465704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=JSY6kbr3OPQQ7kNvgGkHqbX&_nc_oc=AdhUQYEWc_wA8ChI2Drj_JY3DHx5mewDUPJJat_nDsOQXZMLXomvF_FieEGgAD6cbnwuVCV28VA29IsIsLoK4gbO&_nc_zt=23&_nc_ht=scontent-sin11-1.xx&_nc_gid=At-dLDBQavDZqY_7Sdk74oJ&oh=00_AYAWJkmu6H5DHSSUIQIUPP0uUiXh8MKcc7rrfhlqWffQMQ&oe=677C515A",
  },
  "Picture": {
    title: "Photo By",
    description: "nếu muốn cưới nhanh thì chỉ có cách này hehe",
    url: "https://www.instagram.com/photoby_vietnam/?hl=en",
    location: "113 Nguyễn Bỉnh Khiêm, Phường Đa Kao, Quận 1, Ho Chi Minh City, Vietnam",
    time: "20:45 - 21:30",
    imageUrl:
      "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/306324529_110128811849363_2887529910499954834_n.png?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=h89u_uFrxUQQ7kNvgGM5CKt&_nc_oc=AdjWuaaDosE4WcvH7CvKq7lT6OacW4pSJ2X4tPebP3lYZtPwa_QXAqNSpvf0pmrcudrutB4NM19bJdpgqEL94jyD&_nc_zt=23&_nc_ht=scontent-sin6-4.xx&_nc_gid=AjJiF1AefURPaJHlKd4a2ry&oh=00_AYDGjpak4lsaEgF75Ia2kgoJWbUmjMw2dR4MuSLaOvh5CQ&oe=677C416E",
  },
  "Movie": {
    title: "Đi coi phim thoyyyy",
    description:
      "Nếu em cảm thấy buồn phiền thì đừng ngại call cho anh nhé :>",
    url: "https://www.facebook.com/nguyen.xuan.huy.174364",
    location: "Cinestar Hai Ba Trung",
    time: "22:00 - Go home",
    imageUrl:
      "https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F12-2024%2Fchi-dau.png&w=3840&q=75",
  },
  // Add more event details
};

function EventDetail() {
  const { eventId } = useParams();
  const event = eventDetails[eventId];

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {event.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{event.description}</p>

            {/* Location and Time */}
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Location:</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.location}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Time:</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.time}</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <a
                href={event.url}
                className="inline-block px-8 py-3 text-lg text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Click here!!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;
