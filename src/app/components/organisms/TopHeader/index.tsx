import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  Container,
  JordanIconStyled,
  LeftIcons,
  RightIcons,
  SnkrsIconStyled,
  TopHeaderNavLink,
  VerticalLineSeparator,
} from './styles';

export const TopHeader = memo(() => {
  const { t } = useTranslation();

  return (
    <Container data-testid="topHeader">
      <LeftIcons>
        <JordanIconStyled />
        <SnkrsIconStyled />
      </LeftIcons>
      <RightIcons>
        <TopHeaderNavLink to="/">
          {t(messages.i18nHelpPageLink())}
        </TopHeaderNavLink>
        <VerticalLineSeparator />
        <TopHeaderNavLink to="/">
          {t(messages.i18nFollowYourOrderPageLink())}
        </TopHeaderNavLink>
        <VerticalLineSeparator />
        <TopHeaderNavLink to="/">
          {t(messages.i18nJoinUsPageLink())}
        </TopHeaderNavLink>
        <VerticalLineSeparator />
        <TopHeaderNavLink to="/">
          {t(messages.i18nLoginLink())}
        </TopHeaderNavLink>
      </RightIcons>
    </Container>
  );
});
