// src/app/courses/[course]/page.tsx
import { NAVBAR_CONSTANT } from "@/components/ui/Navbar/constant";

export default function CoursePage({ params }: { params: { course: string } }) {
  const course = NAVBAR_CONSTANT.find(
    (group) => group.title === "Courses"
  )?.items.find((item) => item.href.endsWith(params.course));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
}
