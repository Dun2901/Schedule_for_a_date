import { useParams } from "react-router-dom";

const eventDetails = {
  "pick-up": {
    title: "Qua đón bé Hăn nè",
    description:
      "Ig tui đã fl hong bit bé Hăn đã fl tui chưaaa, nếu chưa có thể ấn nút xanh bên dưới nhe hehe",
    url: "https://www.instagram.com/_lmchidung_/",
    location: "nhà bé Hăn",
    time: "17:30 - 18:00",
    imageUrl:
      "https://images.unsplash.com/photo-1643865744379-cae52845af3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  "have-dinner": {
    title: "Tokyo Soy Ramen",
    description: "nếu bạn nhỏ muốn biết thêm thông tin có thể ấn vào nút xanh bên dưới nhe",
    url: "https://www.facebook.com/tokyosoyramen/",
    location: "418 Đ. Phan Văn Trị, Phường 5, Gò Vấp",
    time: "18:30 - 19:30",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPiEdYgYc38aF-0npPRqWCq5Om5-9jPAjV51_ey=s1360-w1360-h1020",
  },
  "go-drink": {
    title: "Ticos Coffee",
    description: "nếu bạn nhỏ muốn biết thêm thông tin có thể ấn vào nút xanh bên dưới nhe",
    url: "https://noithatkendesign.vn/review-ticos-coffee.html",
    location: "527 Đ. Phan Văn Trị, Phường 5, Gò Vấp",
    time: "20:00 - 21:00",
    imageUrl:
      "https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/131072968_3543448312390417_6091593664508826249_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=yB77d3THHLsQ7kNvgE08vif&_nc_ht=scontent.fsgn7-1.fna&_nc_gid=AH39Kn4W_YHI2lsKtppzD1Z&oh=00_AYBsew3zIIpIvpsU5aYYmdByhW3i0OTHw_-sedUO11-PAw&oe=6727B491",
  },
  "go-home": {
    title: "Dìa nhà bé Hăn thoi",
    description:
      "Nếu bé cảm thấy hài lòng thì ấn vào nút xanh để gửi đánh giá 5 sao cho anh nhé :>",
    url: "https://www.instagram.com/_lmchidung_/",
    location: "Nhà bé Hăn",
    time: "21:00 - 21:30",
    imageUrl:
      "https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
