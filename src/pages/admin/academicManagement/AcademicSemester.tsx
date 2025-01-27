import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/AcaademicSemester.api"

export default function AcademicSemester() {
  const {data}= useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is Academic Semester componenst</h1>
    </div>
  )
}
