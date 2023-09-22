import { Box, useMediaQuery } from '@mui/material';
import NavBar from 'Scenes/NavBar/NavBar';
import Sidebar from 'Scenes/SideBar/SideBar';
import FriendListWidget from 'Scenes/Widgets/FriendListWidget';

function FriendsPage({ userId }) {
  const isNonMobileScreen = useMediaQuery('(min-width:1000px');

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? '25%' : undefined}>
          <Sidebar />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? '75%' : undefined}
          mt={isNonMobileScreen ? undefined : '2rem'}
        >
          <FriendListWidget userId={userId} />
        </Box>
      </Box>
    </Box>
  );
}

export default FriendsPage;
