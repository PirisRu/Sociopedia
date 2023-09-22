import { Box, useMediaQuery } from '@mui/material';
import NavBar from 'Scenes/NavBar/NavBar';
import Sidebar from 'Scenes/SideBar/SideBar';
import MyPostWidget from 'Scenes/Widgets/MyPostWidget';
import PostsWidget from 'Scenes/Widgets/PostsWidget';
import { useSelector } from 'react-redux';

function HomePage() {
  const isNonMobileScreen = useMediaQuery('(min-width:1000px');
  const { _id, picturePath } = useSelector((state) => state.user);

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
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
