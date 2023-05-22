// 'require' here instead of 'import', see:
// https://github.com/FortAwesome/Font-Awesome/issues/19348
//
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { library } = require('@fortawesome/fontawesome-svg-core');

import {
  faUsers,
  faTableColumns,
  faExclamationCircle,
  faChevronDown,
  faHouse,
  faBars,
  faUser,
  faArrowRightFromBracket,
  faXmark,
  faDownload,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUsers,
  faTableColumns,
  faExclamationCircle,
  faChevronDown,
  faHouse,
  faBars,
  faUser,
  faArrowRightFromBracket,
  faXmark,
  faDownload,
  faEnvelope
);
