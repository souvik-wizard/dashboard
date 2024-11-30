import Image from "next/image";
import axios from "axios";

const Navbar = () => {
  const downloadReportHandler = async () => {
    try {
      const response = await axios.post("/api/proxy");

      if (response.status === 200 && response.data) {
        console.log(response.data);
        const base64Image = response.data.base64_string;

        const link = document.createElement("a");
        link.href = `data:image/png;base64,${base64Image}`;
        link.download = response.data.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log("Report downloaded successfully.");
      } else {
        console.error("Failed to download the report.", response);
      }
    } catch (error) {
      console.error("An error occurred while downloading the report:", error);
    }
  };

  return (
    <div className="flex justify-between items-center py-8 px-4 md:px-0 border-b">
      <h1 className="text-lg lg:text-2xl font-bold ">Reports</h1>
      <button
        onClick={downloadReportHandler}
        className="flex justify-center items-center gap-1 font-semibold text-[#4d4d4d] "
      >
        <Image
          src="/icons/download.svg"
          alt="Download"
          width={20}
          height={20}
        />
        Download
      </button>
    </div>
  );
};

export default Navbar;
