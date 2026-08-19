import { Link } from "react-router-dom";

const apps = [
  { name: "LightToggle", path: "/LightToggle" },
  { name: "To-Do List", path: "/TodoList" },
  { name: "Counter", path: "/Counter" },
  { name: "Password Validator", path: "/PasswordValidator"},
  { name: "Weather", path: "/Weather" },
  { name: "GitHub Users", path: "/GithubUsers" },
];

function Home() {
  const cardStyle =
    "w-64 rounded-lg border border-gray-300 bg-[#faf9f6] px-12 py-3 shadow-sm hover:bg-gray-100 hover:shadow-md flex items-center justify-center text-center transition duration-300 ease-in-out text-[#1b231e] font-medium  ";

  return (
    <div className="min-h-screen bg-[#faf9f6] p-8">
      <h1 className="mb-6 text-2xl font-bold text-[#1b231e]"> Web Apps </h1>

      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {apps.map((app) => (
          <li key={app.path} className={cardStyle}>
            <Link to={app.path} className="block">
              {app.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
