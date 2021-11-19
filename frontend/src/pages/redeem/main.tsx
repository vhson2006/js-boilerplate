import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { RedeemCustomerCode, TableStyle } from './styles';
import { InputType } from '../../commons/styles/share';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { callPrivateJsonApi } from '../../helpers/api';
import { codeStatus, common } from '../../commons/config';
import SwitchLanguage from './components/switch-language';
import RedeemData from './components/redeem-data';

const RedeemPage = () => {
  const history = useHistory();
  const intl = useIntl();
  const { register, handleSubmit } = useForm();
  const [ message, setMessage ] = useState('');
  const onLogout = async () => {
    const response = await callPrivateJsonApi('PATCH', '/api/auth/logout', {});
    if (response.status === common.INCORRECT ) {
      setMessage(intl.formatMessage({ id: 'logoutFailMessage' }));
    } else {
      localStorage.removeItem('token');
      setTimeout(() => {
        history.push('/');
      }, 200);
    }
    return false;
  }
  
  const onRedeem = async (data: any) => {
    const response = await callPrivateJsonApi('PATCH', '/api/redeem/claim', data);
    if (response.status === common.INCORRECT) {
      setMessage(intl.formatMessage({ id: 'claimFailMessage' }))
    } else {
      switch (response.status) {
        case codeStatus.PROCESS_STATUS:
          setMessage(intl.formatMessage({ id: 'claimSuccessMessage' }));
          break;
        case codeStatus.LIMIT_STATUS:
          setTimeout(() => {
            history.push('/handed-out');
          }, 200);
          break;
        default:
          break;
      }
    }
  }
  
  return (
    <section className="mt-5">
      <RedeemCustomerCode src="/img/insertcustomercodehere.png" width="100%" alt=""/>
      <form onSubmit={handleSubmit(onRedeem)}>
        <Table className="mt-5" role="presentation" cellPadding="0" cellSpacing="0" width="100%" 
          bordered={false} borderless={true}
          style={TableStyle}>
          <tbody>
            <tr>
              <td>
                <p className="text-success">{message}</p>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="claimPlaceholder">
                  {(msg) => <InputType type="text" {...register("redeemCode")} placeholder={msg.toString()}/>}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50} className="pt-4">
                <a href="/profile">
                  <p className="text-white">
                    <FormattedMessage id="profileMenu"/>
                  </p>
                </a>
                <SwitchLanguage/>
                <RedeemData/>
                <a href="#" onClick={onLogout}> 
                  <p className="text-white">
                    <FormattedMessage id="logoutMenu"/>
                  </p>
                </a>
                <input type="image" src="/img/sendbutton.jpg" width="120" alt="Submit"/>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </section>
  )
}

export default RedeemPage;
