import { css, useTheme } from '@emotion/react'

const TopNavigation = () => {
  const { dimensions } = useTheme()
  return (
    <div
      css={css`
        height: ${dimensions.topNavigationHeight};
      `}
    >
      TopNav
    </div>
  )
}

export default TopNavigation
