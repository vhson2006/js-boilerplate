import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { LoginTitle, TableStyle } from './styles';
import { InputType } from '../../commons/styles/share';
import { callJsonApi } from '../../helpers/api';
import { common } from '../../commons/config';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const intl = useIntl();
  const [ message, setMessage ] = useState('');
  const onLogin = async (data: any) => {
    const response = await callJsonApi('PATCH', '/api/auth/login', data);
    if (response.status === common.INCORRECT) {
      setMessage(intl.formatMessage({ id: 'loginFailMessage' }));
    } else {
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken);
      setTimeout(() => {
        history.push('/redeem');
      }, 200);
    }
  }
  return (
    <section className="mt-5">
      <LoginTitle src="/img/login.png" width="100%" alt=""/>
      <form onSubmit={handleSubmit(onLogin)}>
        <Table className="mt-5" role="presentation" cellPadding="0" cellSpacing="0" width="100%" 
          bordered={false} borderless={true}
          style={TableStyle}
        >
          <tbody>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="emailPlaceholder">
                  {(msg) => <InputType type="email" {...register("email")} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
              <td align="center" height={50}>
                <FormattedMessage id="passwordPlaceholder">
                  {(msg) => <InputType type="password" {...register("password")} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="left" >
                <p className="text-danger">{message}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center" height={50} >
                <a href="/forgot-password">
                  <p className="text-white"> <FormattedMessage id="forgotPasswordLabel"/></p>
                </a>
                <input type="image" src="/img/loginbutton.png" width="120" alt="Submit"/>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </section>
  )
}

export default LoginPage;
