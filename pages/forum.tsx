// pages/index.js
import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Thread, ThreadList } from "../components/forum/Thread";
import { SearchBoxBanner } from "../components/forum/SearchBoxBanner";
import { Footer } from "../components/footer/footer";
import NavBar from "../components/header/Header";

interface ForumPageProps {
  threads: Thread[];
}

const ForumPage: NextPage<ForumPageProps> = ({ threads }) => {
  const handleCreateNewThread = () => {
    alert("not yet ready");
  };

  return (
    <>
      <Head>
        <title>Hana Studio</title>
        <meta name="description" content="Forum page" />
      </Head>

      <NavBar activeItemIndex={2} />

      <div className="bg-white font-['Quicksand', 'Verdana', 'sans-serif']">
        <div className="shadow-md w-full">
          <SearchBoxBanner />
        </div>
        <div className="w-11/12 mx-auto py-10">
          {/* Create a new thread section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Discussions</h1>
              <p className="mb-6">
                Welcome to the Hana Studio Forum! Here you can ask questions and
                discuss with other users.
              </p>
            </div>
            <button
              className="inline-block bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded"
              onClick={handleCreateNewThread}
            >
              Create a new thread{" "}
            </button>
          </div>

          {/* Forum threads */}
          <div className="flex">
            {/* Main Content */}
            <div className="flex-grow">
              <div className="items-center justify-between mt-6">
                <div className="w-full">
                  {/* Table Header */}
                  <div className="flex items-center text-slate-500 font-semibold border-slate-200 border-t border-b border-y-2">
                    <div className="w-1/12 "></div>
                    <div className="w-8/12">Topics</div>
                    <div className="w-1/12 text-center">Replies</div>
                    <div className="w-2/12 py-2 text-center">Last Updated</div>
                  </div>

                  <ThreadList threads={threads} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-1/4 h-screen text-black p-4 ml-6 border-l border-indigo-200">
              <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">Filter</h1>
                {/* Add your filter options here */}
                <select className="p-2 rounded">
                  <option>All</option>
                  <option>General</option>
                  <option>Bugs</option>
                  <option>Feature Requests</option>
                  <option>Help</option>
                </select>
              </div>

              <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">Recent Discussions</h1>
                {/* Add your recent discussions here */}
                <ul>
                  <li className="mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="indigo"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      />
                    </svg>
                    Discussion 1
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="indigo"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      />
                    </svg>
                    Discussion 2
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="indigo"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      />
                    </svg>
                    Discussion 3
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="text-xl font-bold mb-2">Trending Topics</h1>
                {/* Add your trending topics here */}
                <ul>
                  <li className="mb-2">Topic 1</li>
                  <li className="mb-2">Topic 2</li>
                  <li className="mb-2">Topic 3</li>
                </ul>
              </div>

              {/* Add other necessary information here */}
            </div>
          </div>

          {/* <div className="items-center justify-between mt-6">
            <div className="w-8/12">
              <div className="flex items-center text-slate-500 font-semibold border-slate-200 border-t border-b border-y-2">
                <div className="w-1/12 "></div>
                <div className="w-7/12">Topics</div>
                <div className="w-1/12 text-center">Replies</div>
                <div className="w-2/12 py-2 text-center">Last Updated</div>
              </div>

              <ThreadList threads={threads} />
            </div>
            <div className="w-4/12">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h1 className="text-xl font-bold mb-4">Categories</h1>
                <ul>
                  <li className="text-indigo-500 font-bold mb-2">
                    <a href="#">All</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">General</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Bugs</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Feature Requests</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

// Static data for demo
const staticThreads: Thread[] = [
  {
    id: 1,
    title: "Introduction to Forum",
    content: "This is the place to introduce yourself to the community.",
    replies: 20,
    lastUpdated: "1 day ago",
  },
  {
    id: 2,
    title: "Help with Coding",
    content: "Having trouble with a code snippet? Ask for help here.",
    replies: 15,
    lastUpdated: "3 hours ago",
  },
  {
    id: 3,
    title: "Feature Request: Dark Mode",
    content: "Share your thoughts on having a dark mode feature.",
    replies: 8,
    lastUpdated: "2 days ago",
  },
  {
    id: 4,
    title: "General Discussion",
    content: "Discuss anything related to the forum or technology in general.",
    replies: 30,
    lastUpdated: "5 days ago",
  },
  {
    id: 5,
    title: "New Bug Report: Login Issue",
    content:
      "Experiencing problems with the login functionality. Please report here.",
    replies: 12,
    lastUpdated: "1 week ago",
  },
  {
    id: 6,
    title: "Trending Tech Topics",
    content:
      "Stay updated on the latest trends and technologies in the industry.",
    replies: 18,
    lastUpdated: "4 hours ago",
  },
  {
    id: 7,
    title: "Discussion on Frameworks",
    content:
      "Share your experiences and thoughts on different programming frameworks.",
    replies: 25,
    lastUpdated: "2 weeks ago",
  },
  {
    id: 8,
    title: "Feature Request: Mobile App",
    content:
      "Suggest and discuss the possibility of a mobile app for the forum.",
    replies: 6,
    lastUpdated: "6 days ago",
  },
  {
    id: 9,
    title: "Community Announcements",
    content:
      "Important announcements and updates from the forum administration.",
    replies: 14,
    lastUpdated: "1 hour ago",
  },
  {
    id: 10,
    title: "Web Design Tips and Tricks",
    content: "Share and learn about the latest tips and tricks in web design.",
    replies: 22,
    lastUpdated: "3 days ago",
  },
];

ForumPage.getInitialProps = async () => {
  // Fetch threads from your API or any data source
  //   const response = await fetch("https://api.example.com/threads");

  //   const threads = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { threads: staticThreads };
};

export default ForumPage;
