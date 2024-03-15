import toast from "react-hot-toast";

export const allUsers = "https://dummyjson.com/users";
export const singleUser = (id) => `https://dummyjson.com/users/${id}`;

export const copyToClipBoard = async (copy) => {
  try {
    await navigator.clipboard.writeText(copy);
    toast.success("Copied to Clipboard!");
  } catch (error) {
    toast.error("Error in copying !");
  }
};

export const shortcutTitle = [
  {
    name: "physical",
  },
  {
    name: "location",
  },
  {
    name: "education",
  },
  {
    name: "accessory",
  },
  {
    name: "company",
  },
  {
    name: "contact",
  },
  {
    name: "bank",
  },
];
