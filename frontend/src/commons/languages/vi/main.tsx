export const menu = {
  profileMenu: 'Tài Khoản',
  logoutMenu: 'Đăng Xuất',
  changeLanguageMenu: 'Chuyển Ngôn Ngữ',
  redeemMenu: 'Truy Xuất Kết Quả',
}
export const placeholder = {
  namePlaceholder: 'Tiêu Đề',
  emailPlaceholder: 'Thư Điện Tử',
  passwordPlaceholder: 'Mật Khẩu',
  addressPlaceholder: 'Địa Chỉ',
  phonePlaceholder: 'Điện Thoại',
  claimPlaceholder: 'Nhập code',
  firstNamePlaceholder: 'Tên',
  lastNamePlacholder: 'Họ',
  newPasswordPlaceholder: 'Mật Khẩu Mới',
  confirmPasswordPlaceholder: 'Xác Nhận Mật Khẩu',
  searchPlaceholder: 'Từ Khóa',
}
export const label = {
  forgotPasswordLabel: 'Quên Mật Khẩu?',
}
export const button = {
  searchButton: 'Tìm Kiếm',
  saveButton: 'Lưu Thay Đổi',
  closeButton: 'Đóng',
}
export const forgotPasswordPage = {
  forgotPasswordTitle: 'Nhập Địa Chỉ Email',
  forgotPasswordFailMessage: 'Địa Chỉ Email Không Hợp Lệ',
}
export const loginPage = {
  loginFailMessage: 'Thực Hiện Thất Bại',
}
export const profilePage = {
  profileFailMessage: 'Cập Nhật Lỗi',
  profileSuccessMessage: 'Cập Nhật Thành Công',
  profileInitFailMessage: 'Thực Hiện Thất Bại',
}
export const redeemPage = {
  claimFailMessage: 'Nhận Code Lỗi',
  claimSuccessMessage: 'Nhận Code Thành Công',
  logoutFailMessage: 'Thực Hiện Thất Bại',
}
export const refereePage = {
  inviteFailMessage: 'Mời Thất Bại',
  reachOutMessage: 'Chương Trình Hết Hạn',
  fromSectionTitle: 'Thông Tin Của Bạn',
  toSectionTitle: 'Thông Tin Người Được Mời',
}
export const resetPasswordPage = {
  resetPasswordTitle: 'Đặt Mật Khẩu Mới',
  resetPasswordFailMessage: 'Thực Hiện Thất Bại',
  passwordNotMatch: 'Mật Khẩu và Xác Nhận Mật Khẩu Không Khớp',
}
export const reportPage = {
  reportTitle: 'Danh Sách Nhận Code',
  fromFirstNameHeader: 'Tên Người Gửi',
  fromLastNameHeader: 'Họ Người Gửi',
  toFirstNameHeader: 'Tên Người Nhận',
  toLastNameHeader: 'Họ Người Nhận',
  toPhoneNumberHeader: 'Điện Thoại Người Nhận',
  statusHeader: 'Trạng Thái',
  inviteTimeHeader: 'Thời Gian Mời',
  activeTimeHeader: 'Thời Gian Dùng',
  actionsHeader: 'Thao Tác',
  activeStatus: 'Kích Hoạt',
  waitingStatus: 'Đang Chờ',
  editRedeemTitle: 'Sửa Nhật Ký',
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
