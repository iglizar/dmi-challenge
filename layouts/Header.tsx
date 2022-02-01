import Link from "next/link";

const HeaderChallenge = () => {
  return (
    <div className="flex flex-row z-10 items-center bg-blue-custom-200 text-white w-full border-b-2 justify-start border-white pl-4 md:pl-10">
      <Link href="/">
        <button className="flex items-center h-10 my-2 text-base link-underline link-underline-black">
          <div className="flex gap-x-4 md:px-4 flex-shrink-0 font-bold rounded-full justify-center">
            DMI Movies
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-movie ml-0.5"
              width="30"
              height="30"
              viewBox="0 2 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="8" y1="4" x2="8" y2="20"></line>
              <line x1="16" y1="4" x2="16" y2="20"></line>
              <line x1="4" y1="8" x2="8" y2="8"></line>
              <line x1="4" y1="16" x2="8" y2="16"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="16" y1="8" x2="20" y2="8"></line>
              <line x1="16" y1="16" x2="20" y2="16"></line>
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default HeaderChallenge;
