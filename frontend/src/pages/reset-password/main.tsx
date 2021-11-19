import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { ResetPasswordTitle, TableStyle } from './styles';
import { InputType } from '../../commons/styles/share';
import { callJsonApi } from '../../helpers/api';
import { common } from '../../commons/config';

const ResetPasswordPage = () => {
  const { token }: any = useParams();
  const intl = useIntl();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [ resetToken, setResetToken ] = useState('');
  const [ message, setMessage ] = useState('');
  
  const resetPassword = async (data: any) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword ) {
      setMessage(intl.formatMessage({ id: 'passwordNotMatch' }));
    } else {
      const response = await callJsonApi(
        'PATCH', 
        '/api/auth/reset-password/',
        {
          password: password,
          resetToken: resetToken
        }
      );
      if (response.status === common.INCORRECT) {
        setMessage(intl.formatMessage({ id: 'resetPasswordFailMessage' }));
      } else {
        setTimeout(() => {
          history.push('/');
        }, 200);
      };
    }
  };

  useEffect(() => {
    const initial = async () => {
      const response = await callJsonApi('GET', `/api/auth/validate-reset-password-request/${token}`, {});
      if (response.status === common.INCORRECT) {
        setTimeout(() => {
          history.push('/error');
        }, 200);
      } else {
        const { data } = response;
        setResetToken(data);
      };
    };
    initial();
  }, []);
  
  return (
    <section className="mt-5">
      <ResetPasswordTitle src="/img/resetpassword.png" width="100%" alt=""/>
      <form onSubmit={handleSubmit(resetPassword)}>
        <Table className="mt-5" role="presentation" cellPadding="0" cellSpacing="0" width="100%" 
          bordered={false} borderless={true}
          style={TableStyle}
        >
          <tbody>
            <tr>
              <td align="left" height={50} className="text-white">
                <strong><FormattedMessage id="resetPasswordTitle"/></strong>
              </td>
            </tr>
            <tr>
              <td align="left" height={50} className="text-danger">
                <strong>{message}</strong>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="newPasswordPlaceholder">
                  {(msg) => <InputType type="password" {...register("password")} placeholder={msg.toString()}/>}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="confirmPasswordPlaceholder">
                  {(msg) => <InputType type="password" {...register("confirmPassword")} placeholder={msg.toString()}/>}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50} className="pt-4">
                <input type="image" src="/img/updatebutton.png" width="120" alt="Submit"/>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </section>
  )
}

export default ResetPasswordPage;
