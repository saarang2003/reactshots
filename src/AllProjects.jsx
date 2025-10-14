import React, { useState } from "react";
import Navbar from "./Navbar";
import { projectData } from "./data/project.js";
import ProjectCard from "./components/ui/ProjectCard.jsx";
import Footer from "./Footer.jsx";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

function AllProjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projectData.slice(indexOfFirstItem, indexOfLastItem);

  // find total number of pages
  const totalPages = Math.ceil(projectData.length / itemsPerPage);

  // function to handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 200, behavior: "smooth" }); // optional: bring user back to content
  };

  // page navigation handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  // build condensed page list (adds "..." when many pages)
  const getPageList = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);
    if (left > 2) pages.push("left-ellipsis");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("right-ellipsis");
    pages.push(totalPages);
    return pages;
  };

  const pageList = getPageList();

  const showingFrom = projectData.length === 0 ? 0 : indexOfFirstItem + 1;
  const showingTo = Math.min(indexOfLastItem, projectData.length);

  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
        }}
      />

      <div className="relative z-10 py-6 px-4 ">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-8 text-center px-2 ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#d9e0ff] to-[#232328] selection:bg-purple-300 selection:text-black bg-clip-text text-transparent leading-[1.2]">
          All Projects
        </h1>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6  text-center px-2 ">
        <h4 className=" selection:bg-purple-300 selection:text-black text-[#4a4e5e] leading-[1.5]">
          Explore a variety of projects built with React and enhance your skills.
        </h4>
      </div>

      <div className="relative z-10 max-w-[1280px] h-fit-content mx-auto mt-6 text-center px-2 ">
        <hr />
      </div>

      <div className="relative gap-4 max-w-[1280px] p-6 rounded-2xl shadow-2xl mx-auto mt-4 bg-white/4 border border-white/6">
        <h1 className="text-4xl text-[#d9e0ff] selection:bg-purple-300 selection:text-black font-bold mb-1 ">
          React Projects
        </h1>
        <p className="text-[#4a4e5e] mt-4 selection:bg-purple-300 selection:text-black ">
          Explore a variety of projects built with React and enhance your skills.
        </p>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#d9e0ff] text-center selection:bg-purple-300 selection:text-black ">
          All Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center items-stretch mt-8">
          {currentItems.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Pagination UI */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="text-sm text-gray-300">
            Showing {showingFrom} – {showingTo} of {projectData.length}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              aria-label="First page"
              className={`inline-flex items-center cursor-pointer justify-center gap-2 p-2 rounded-md transition-colors ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed bg-white/5"
                  : "bg-white/6 hover:bg-white/12"
              }`}
            >
              <ChevronsLeft className="w-4 h-4 text-white/90" />
            </button>

            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className={`inline-flex items-center cursor-pointer justify-center gap-2 p-2 rounded-md transition-colors ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed bg-white/5"
                  : "bg-white/6 hover:bg-white/12"
              }`}
            >
              <ChevronLeft className="w-4 h-4 text-white/90" />
            </button>

            <nav
              className="flex items-center gap-2 px-2 py-1 rounded-md"
              aria-label="Pagination"
            >
              {pageList.map((p, idx) =>
                typeof p === "number" ? (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`min-w-[38px] h-9 px-3  cursor-pointer rounded-md text-sm font-medium transition ${
                      p === currentPage
                        ? "bg-white text-black shadow-sm"
                        : "bg-white/5 text-white/90 hover:bg-white/12"
                    }`}
                    aria-current={p === currentPage ? "page" : undefined}
                  >
                    {p}
                  </button>
                ) : p === "left-ellipsis" || p === "right-ellipsis" ? (
                  <span
                    key={`ell-${idx}`}
                    className="min-w-[32px] h-9 flex items-center justify-center text-sm text-gray-300"
                  >
                    …
                  </span>
                ) : null
              )}
            </nav>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className={`inline-flex items-center cursor-pointer justify-center gap-2 p-2 rounded-md transition-colors ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed bg-white/5"
                  : "bg-white/6 hover:bg-white/12"
              }`}
            >
              <ChevronRight className="w-4 h-4 text-white/90" />
            </button>

            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Last page"
              className={`inline-flex items-center cursor-pointer justify-center gap-2 p-2 rounded-md transition-colors ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed bg-white/5"
                  : "bg-white/6 hover:bg-white/12"
              }`}
            >
              <ChevronsRight className="w-4 h-4 text-white/90" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default AllProjects;
