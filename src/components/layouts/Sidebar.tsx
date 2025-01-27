import {Layout, Menu} from "antd";
const {Sider} = Layout;
import { sidebarGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrectUser } from "../../redux/features/auth/authSlice";

const UserRole = {
  ADMIN:'admin',
  FACULTY:'faculty',
  STUDENT:'student',
}
export default function Sidebar() {

  const user = useAppSelector(selectCurrectUser)
  let sidebarItems;
  switch (user!.role) {
    case UserRole.ADMIN:
      sidebarItems=sidebarGenerator(adminPaths,UserRole.ADMIN)
      break;
    case UserRole.FACULTY:
      sidebarItems=sidebarGenerator(facultyPaths,UserRole.FACULTY)
      break;
    case UserRole.STUDENT:
      sidebarItems=sidebarGenerator(studentPaths,UserRole.STUDENT)
      break;
  
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div style={{color:'white', height:'4rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1>PH Uni</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
    </Sider>
  )
}
