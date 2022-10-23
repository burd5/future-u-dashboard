import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GavelIcon from '@mui/icons-material/Gavel';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


function Sidebar(){
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h4 className="sidebarTitle">Dashboard</h4>
                    <ul className="sidebarList">
                        <li className="sidebarItem active">
                            <HomeIcon className="sidebarIcon" fontSize="large"/>
                            Home
                        </li>
                        <li className="sidebarItem">
                            <GroupsIcon className="sidebarIcon" fontSize="large"/>
                            Team Members
                        </li>
                        <li className="sidebarItem">
                            <AccountBoxIcon className="sidebarIcon" fontSize="large"/>
                            Personal
                        </li>
                    </ul>

                    <h4 className="sidebarTitle">Account</h4>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <WorkIcon className="sidebarIcon" fontSize="large"/>
                            Caseload
                        </li>
                        <li className="sidebarItem">
                            <BuildIcon className="sidebarIcon" fontSize="large"/>
                            Trainings
                        </li>
                        <li className="sidebarItem">
                            <SchoolIcon className="sidebarIcon" fontSize="large"/>
                            GED
                        </li>
                        <li className="sidebarItem">
                            <AttachMoneyIcon className="sidebarIcon" fontSize="large"/>
                            Work Experiences
                        </li>
                    </ul>

                    <h4 className="sidebarTitle">Notifications</h4>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <GavelIcon className="sidebarIcon" fontSize="large"/>
                            Terms
                        </li>
                        <li className="sidebarItem">
                            <MessageIcon className="sidebarIcon" fontSize="large"/>
                            Messages
                        </li>
                        <li className="sidebarItem">
                            <CalendarTodayIcon className="sidebarIcon" fontSize="large"/>
                            Reminders
                        </li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
