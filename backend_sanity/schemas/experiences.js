export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    { name: "jobTitle", title: "Job Title", type: "string" },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "jobDescription",
      title: "Job Description",
      //   type: "block",
      type: "array",
      of: [{ type: "block" }],
    },
    // {
    //   name: "works",
    //   title: "Works",
    //   type: "array",
    //   of: [{ type: "workExperience" }],
    // },
  ],
};
