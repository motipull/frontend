import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const BottomNavigation = () => {
  const { dimensions } = useTheme();
  return (
    <div
      css={css`
        height: ${dimensions.bottomNavigationHeight};
      `}
    >
      BottonNav
    </div>
  );
};

export default BottomNavigation;
