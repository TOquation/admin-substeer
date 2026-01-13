import { redirect } from "next/navigation";

const Homepage = () => {
  redirect("/login");

  return null;
};

export default Homepage;
