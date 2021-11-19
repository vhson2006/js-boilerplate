import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { InputType } from '../../commons/styles/share';
import { ForgotPasswordTitle, TableStyle } from './styles';
import { callPrivateJsonApi } from '../../helpers/api';
import { common } from '../../commons/config';

const ForgotPasswordPage = () => {
  const history = useHistory();
  const intl = useIntl();
  const { register, handleSubmit } = useForm();
  const [ message, setMessage ] = useState('');

  const requestResetPassword = async (data: any) => {
    const response = await callPrivateJsonApi('POST', '/api/auth/request-reset-password', data);
    if (response.status === common.INCORRECT) {
      setMessage(intl.formatMessage({ id: 'forgotPasswordFailMessage' }));
    } else {
      setTimeout(() => {
        history.push('/');
      }, 200)
    }
  }

  return (
    <section className="mt-5">
      <ForgotPasswordTitle src="/img/forgotpassword.png" width="100%" alt=""/>
      <form onSubmit={handleSubmit(requestResetPassword)}>
        <Table className="mt-5" role="presentation" cellPadding="0" cellSpacing="0" width="100%" 
          bordered={false} borderless={true}
          style={TableStyle}
        >
          <tbody>
            <tr>
              <td align="left" className="text-white">
                <strong>
                  <FormattedMessage id="forgotPasswordTitle"/>
                </strong>
              </td>
            </tr>
            <tr>
              <td align="left" className="text-danger">
                <strong>{message}</strong>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="emailPlaceholder">
                  {(msg) => <InputType type="email" {...register("email")} placeholder={msg.toString()}/>}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50} className="pt-4">
                <input type="image" src="/img/sendbutton.jpg" width="120" alt="Submit"/>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </section>
  )
}

export default ForgotPasswordPage;
