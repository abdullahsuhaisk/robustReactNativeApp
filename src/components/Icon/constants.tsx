import React from 'react';
import {type SvgProps} from 'react-native-svg';

import GoogleIcon from '../../assets/svg/google2.svg';
import FacebookIcon from '../../assets/svg/facebook.svg';
import PasswordIcon from '../../assets/svg/pass.svg';
import MailIcon from '../../assets/svg/mail.svg';
import UserIcon from '../../assets/svg/user.svg';


const ICON = {
  USER: 'user' as 'user',
  GOOGLE: 'google' as 'google',
  FACEBOOK: 'facebook' as 'facebook',
  PASSWORD: 'password' as 'password',
  MAIL: 'mail' as 'mail',
};

const ICON_COMPONENT = {
  USER: {
    ID: ICON.USER,
    COMPONENT: (props: SvgProps) => <UserIcon {...props} testID={ICON.USER} />,
  },
  GOOGLE: {
    ID: ICON.GOOGLE,
    COMPONENT: (props: SvgProps) => (
      <GoogleIcon {...props} testID={ICON.GOOGLE + 'Icon'} />
    ),
  },
  FACEBOOK: {
    ID: ICON.FACEBOOK,
    COMPONENT: (props: SvgProps) => (
      <FacebookIcon {...props} testID={ICON.FACEBOOK + 'Icon'} />
    ),
  },
  PASSWORD: {
    ID: ICON.PASSWORD,
    COMPONENT: (props: SvgProps) => (
      <PasswordIcon {...props} testID={ICON.PASSWORD + 'Icon'} />
    ),
  },
  MAIL: {
    ID: ICON.MAIL,
    COMPONENT: (props: SvgProps) => (
      <MailIcon {...props} testID={ICON.MAIL + 'Icon'} />
    ),
  },
};

function findIconById(
  id: (typeof ICON)[keyof typeof ICON] | undefined,
  props: SvgProps,
): JSX.Element | undefined {
  const ICONS = Object.values(ICON_COMPONENT);
  const CURR_ICON = ICONS.find(obj => obj.ID === id);
  return CURR_ICON?.COMPONENT(props);
}

export {ICON, findIconById};
