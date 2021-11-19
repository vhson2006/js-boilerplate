export const menu = {
  profileMenu: 'Update Profile',
  logoutMenu: 'Logout',
  changeLanguageMenu: 'Switch Language',
  redeemMenu: 'Redeem Data',
}
export const placeholder = {
  namePlaceholder: 'Name',
  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Password',
  addressPlaceholder: 'Address',
  phonePlaceholder: 'Phone Number',
  claimPlaceholder: 'Unique Code',
  firstNamePlaceholder: 'First Name',
  lastNamePlacholder: 'Last Name',
  newPasswordPlaceholder: 'New Password',
  confirmPasswordPlaceholder: 'Confirm Password',
  searchPlaceholder: 'Keyword',
}
export const label = {
  forgotPasswordLabel: 'Forgot Password?',
}
export const button = {
  searchButton: 'Search',
  saveButton: 'Save Changes',
  closeButton: 'Close',
}
export const forgotPasswordPage = {
  forgotPasswordTitle: 'Provide Your Email',
  forgotPasswordFailMessage: 'Your email is not valid',
}
export const loginPage = {
  loginFailMessage: 'Something went wrong',
}
export const profilePage = {
  profileFailMessage: 'Update fail',
  profileSuccessMessage: 'Update sucess',
  profileInitFailMessage: 'Something went wrong',
}
export const redeemPage = {
  claimFailMessage: 'Claim fail',
  claimSuccessMessage: 'Claim sucess',
  logoutFailMessage: 'Something went wrong',
}
export const refereePage = {
  inviteFailMessage: 'Invite fail',
  reachOutMessage: 'This campaign is over',
  fromSectionTitle: 'FROM (YOU)',
  toSectionTitle: 'TO (YOUR MATE)',
}
export const resetPasswordPage = {
  resetPasswordTitle: 'Set new password',
  resetPasswordFailMessage: 'Something went wrong',
  passwordNotMatch: 'Confirm Password and Password must match together',
}
export const reportPage = {
  reportTitle: 'Redeem List',
  fromFirstNameHeader: 'From First Name',
  fromLastNameHeader: 'From Last Name',
  toFirstNameHeader: 'To First Name',
  toLastNameHeader: 'To Last Name',
  toPhoneNumberHeader: 'To Phone Number',
  statusHeader: 'Status',
  inviteTimeHeader: 'Invite Time',
  activeTimeHeader: 'Active Time',
  actionsHeader: 'Action',
  activeStatus: 'Active',
  waitingStatus: 'Waiting',
  editRedeemTitle: 'Edit Redeem',
}

export default {
  ...menu,
  ...placeholder,
  ...label,
  ...button,
  ...forgotPasswordPage,
  ...loginPage,
  ...profilePage,
  ...redeemPage,
  ...refereePage,
  ...resetPasswordPage,
  ...reportPage,
};
