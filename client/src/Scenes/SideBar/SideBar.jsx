import React from 'react';
import { useTheme } from '@emotion/react';
import FlexBetween from 'Components/FlexBetween';
import { Box, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserImage from 'Components/UserImage';
import WidgetWrapper from 'Components/WidgetWrapper';
import { ManageAccountsOutlined } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import FriendListWidget from 'Scenes/Widgets/FriendListWidget';
import "./SideBar.css"

const Sidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userId = user._id;
  const { palette } = useTheme();

  const theme = useTheme();
  const dark = theme.palette.neutral.dark;

  return (
    <>
      <WidgetWrapper className='sidebar'>
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <FlexBetween gap="1rem">
            <UserImage image={user.picturePath} />
            <Box>
              <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
                sx={{
                  '&:hover': {
                    color: palette.primary.light,
                    cursor: 'pointer',
                  },
                }}
              >
                {user.firstName} {user.lastName}
              </Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
        <Divider />
        <Box p="1rem 0">
          <FlexBetween gap="1rem">
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  cursor: 'pointer',
                },
              }}
            >
              <PeopleIcon /> Freinds
            </Typography>
          </FlexBetween>
        </Box>

        <Divider />
        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  cursor: 'pointer',
                },
              }}
            >
              <FeedIcon /> Feed
            </Typography>
          </FlexBetween>
        </Box>
      </WidgetWrapper>
      <WidgetWrapper className='friendslist'>
        <FriendListWidget userId={user._id} />
      </WidgetWrapper>
    </>
  );
};

export default Sidebar;
