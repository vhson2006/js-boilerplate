import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { FormattedMessage, useIntl } from 'react-intl';
import { InviteFriend, TableStyle } from './styles';
import { InputType } from '../../commons/styles/share';
import { callJsonApi } from '../../helpers/api';
import { codeStatus, common } from '../../commons/config';

const RefereePage = () => {
  const { register, handleSubmit } = useForm();
  const { code }: any = useParams();
  const intl = useIntl();
  const history = useHistory();
  const [ message, setMessage ] = useState('');
  const onReferee = async (data: any) => {
    const response = await callJsonApi(
      'POST',
      '/api/redeem/invite',
      {...data, code: code }
    );
    if (response.status === common.INCORRECT) {
      setMessage(intl.formatMessage({ id: 'inviteFailMessage' }));
    } else {
      setTimeout(() => {
        history.push(`/referee-success`);
      }, 200);
    }
  }

  useEffect(() => {
    const initial = async () => {
      const response = await callJsonApi('GET', `/api/account/${code}`, {});
      if (response.status === common.INCORRECT) {
        setTimeout(() => {
          history.push('/error');
        }, 200)
      } else {
        switch(response.status) {
          case codeStatus.LIMIT_STATUS:
            setMessage(intl.formatMessage({ id: 'reachOutMessage' }));
            break;
          case codeStatus.PROCESS_STATUS:
          default:
            break;
        }
      }
    }
    initial();
  }, []);

  return (
    <>
      <InviteFriend src="/img/invite.png" width="100%" alt=""/>
      <form onSubmit={handleSubmit(onReferee)}>
        <Table className="mt-5" role="presentation" cellPadding="0" cellSpacing="0" width="100%" 
          bordered={false} borderless={true}
          style={TableStyle}
        >
          <tbody>
            <tr>
              <td align="left" className="text-danger">
                <strong>{message}</strong>
              </td>
            </tr>
            <tr>
              <td align="left" height={50} className="text-white">
                <strong><FormattedMessage id="fromSectionTitle"/></strong>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="firstNamePlaceholder">
                  {(msg) => <InputType type="text" {...register('fromFirstName')} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="lastNamePlacholder">
                  {(msg) => <InputType type="text" {...register('fromLastName')} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="left" height={50} className="text-white">
                <strong><FormattedMessage id="toSectionTitle"/></strong>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="firstNamePlaceholder">
                  {(msg) => <InputType type="text" {...register('toFirstName')} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="lastNamePlacholder">
                  {(msg) => <InputType type="text" {...register('toLastName')} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="phonePlaceholder">
                  {(msg) => <InputType type="text" {...register('toPhone')} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50} className="pt-4">
                <input type="image" src="/img/invitebutton.png" width="100%" alt="Submit" disabled={ message === '' ? false : false }/>
              </td>
            </tr>
          </tbody>
        </Table>
      </form>
    </>
  )
}

export default RefereePage;
