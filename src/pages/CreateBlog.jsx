import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CreateBlogComponent from "../components/Blogs/CreateBlogComponent";

const CreateBlog = () => {
  return (
    <DashboardLayout>
     <CreateBlogComponent/>
    </DashboardLayout>
  );
};

export default CreateBlog;
