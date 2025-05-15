import AboutUs from "@/components/home/about-us/AboutUs";
import Banner from "@/components/home/banner/Banner";
import JobSearchField from "@/components/home/job-search-field/JobSearchField";

export default function Home() {

  return (
    <div className="min-h-screen">
      <Banner />
      <JobSearchField />
      <AboutUs />
   </div>
  );
}
