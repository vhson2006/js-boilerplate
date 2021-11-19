import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UpdateProfileTitle, TableStyle } from './styles';
import { InputType } from '../../commons/styles/share';
import { useForm } from 'react-hook-form';
import { callPrivateJsonApi } from '../../helpers/api';
import { common } from '../../commons/config';
import { FormattedMessage, useIntl } from 'react-intl';

const ProfilePage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [ message, setMessage ] = useState('');
  const intl = useIntl();
  const updateProfile =  async(data: any) => {
    const response = await callPrivateJsonApi('PATCH', '/api/account', data);
    if (response.status === common.INCORRECT) {
      setMessage(intl.formatMessage({ id: 'profileFailMessage' }));
    } else {
      setMessage(intl.formatMessage({ id: 'profileSuccessMessage' }));
    };
  }

  useEffect(() => {
    const initial = async () => {
      const response = await callPrivateJsonApi('GET', '/api/account', {});
      if (response.status === common.INCORRECT) {
        setMessage(intl.formatMessage({ id: 'profileInitFailMessage' }));
      } else {
        const { data } = response;
        reset({
          name: data.name,
          email: data.email,
          address: data.address,
          phone: data.phone,
        });
      };
    };
    initial();
  }, [])
  
  return (
    <section className="mt-5">
      <UpdateProfileTitle src="/img/profile.png" width="100%" alt=""/>
      <form onSubmit={handleSubmit(updateProfile)}>
        <Table className="mt-5" role="presentation" cellPadding="0" cellSpacing="0" width="100%" 
          bordered={false} borderless={true}
          style={TableStyle}
        >
          <tbody>
            <tr>
              <td align="center" height={50}>
                <p className="text-warning">{message}</p>
              </td>
            </tr>          
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="namePlaceholder">
                  {(msg) => <InputType type="text" {...register("name")} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="emailPlaceholder">
                  {(msg) => <InputType type="email" {...register("email")} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="addressPlaceholder">
                  {(msg) => <InputType type="text" {...register("address")} placeholder={msg.toString()} />}
                </FormattedMessage>
              </td>
            </tr>
            <tr>
              <td align="center" height={50}>
                <FormattedMessage id="phonePlaceholder">
                  {(msg) => <InputType type="text" {...register("phone")} placeholder={msg.toString()} />}
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

export default ProfilePage;
