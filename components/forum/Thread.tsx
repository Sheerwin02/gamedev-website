interface ThreadListProps {
  threads: Array<{
    id: number;
    title: string;
    content: string;
    replies: number;
    lastUpdated: string;
  }>;
}

interface ThreadProps {
  title: string;
  content: string;
  replies: number;
  lastUpdated: string;
}

export interface Thread {
  id: number;
  title: string;
  content: string;
  replies: number;
  lastUpdated: string;
}

export const Thread: React.FC<ThreadProps> = ({
  title,
  content,
  replies,
  lastUpdated,
}) => {
  return (
    <>
      <div className="flex items-center border-b py-6">
        <div className="w-1/12 text-center flex items-center align-center">
          <div className="bg-indigo-100 h-8 w-8 rounded-lg flex items-center align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              style={{
                margin: "auto",
                border: "none",
              }}
              stroke="indigo"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
        </div>
        <div className="w-8/12">
          <h1
            className="mb-1 text-lg font-bold"
            style={{
              fontFamily: "'Quicksand', Verdana, sans-serif;",
            }}
          >
            {title}
          </h1>
          <p
            className="text-sm"
            style={{
              fontFamily: "'Nunito Sans', Arial, sans-serif",
              fontWeight: 400,
              color: "#4a5568",
            }}
          >
            {content}
          </p>
        </div>
        <div className="w-1/12 text-center text-slate-400">{replies}</div>
        <div className="w-2/12 text-center text-slate-400">{lastUpdated}</div>
      </div>
    </>
  );
};

export const ThreadList: React.FC<ThreadListProps> = ({ threads }) => {
  return (
    <div>
      {threads.map((thread) => (
        <Thread
          key={thread.id}
          title={thread.title}
          content={thread.content}
          lastUpdated={thread.lastUpdated}
          replies={thread.replies}
        />
      ))}
    </div>
  );
};
