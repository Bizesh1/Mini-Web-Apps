import axios from "axios";
import { useState, type FormEvent } from "react";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}
function GithubUsers() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please Enter GitHub username");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setUser(null);
      const response = await axios.get<GitHubUser>(
        `https://api.github.com/users/${username.trim()}`,
      );
      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError("GitHub user not found");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#faf9f6] p-8">
      <div className="max-w-md mx-auto mt-10 p-4 border rounded-3xl shadow border-gray-300 bg-[#fffffd]">
        <h1 className=" flex justify-center text-2xl font-bold mb-4">
          GitHub User Search
        </h1>
        <form
          onSubmit={searchUser}
          className="flex justify-center items-center mb-4"
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="px-4 py-2 border rounded w-full"
          />
          <button
            type="submit"
            disabled={loading}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>
        {error && <p className="text-red-500 px-1">{error}</p>}
        {user && (
          <div className="mt-4 flex w-full items-start">
            {/* User data */}
            <div className="py-4 flex-1 min-w-0">
              <h2 className="text-xl font-semibold">
                {user.name ?? user.login}
              </h2>

              <p className="wrap-break-words">
                {user.bio ?? "No bio available"}
              </p>

              <p className="text-gray-600">
                {user.followers} followers · {user.following} following ·{" "}
                {user.public_repos} repos
              </p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View profile
              </a>
            </div>

            {/* Fixed image area */}
            <div className="ml-6 w-46 h-46 shrink-0">
              <img
                src={user.avatar_url ?? undefined}
                alt={user.login}
                className="w-46 h-46 rounded-full border border-gray-200 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubUsers;
