import { FormEvent, useEffect, useState } from 'react';
import { IconMapPinFilled } from '@tabler/icons-react';
import { useDebouncedValue } from '@mantine/hooks';
import { Center } from '@mantine/core';
import { Map, Draggable, Point } from 'pigeon-maps';
import Geocode from 'react-geocode';

import { API_KEY } from '../../../../config/api';
import { AddressFormWrapper, Button } from './styles';

Geocode.setApiKey(API_KEY);
Geocode.setLanguage('ru');
Geocode.setRegion('ru');

interface Props {
  setAddressData: (value: string) => void;
  nextStep: () => void;
}

const AddressForm = ({ setAddressData, nextStep }: Props) => {
  const [address, setAddress] = useState<string>('');
  const [anchor, setAnchor] = useState<Point>([55.755834, 37.617778]);
  const [debounced] = useDebouncedValue(anchor, 200);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAddressData(address);
    nextStep();
  };

  useEffect(() => {
    const getAddress = () => {
      Geocode.fromLatLng(String(debounced[0]), String(debounced[1])).then(
        (response) => {
          const addressByMap = response.results[0].formatted_address;
          setAddress(addressByMap);
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      );
    };

    getAddress();
  }, [debounced]);

  return (
    <AddressFormWrapper onSubmit={handleSubmit}>
      <Map height={300} defaultCenter={[55.755834, 37.617778]} defaultZoom={11}>
        <Draggable offset={[30, 34]} anchor={anchor} onDragEnd={setAnchor}>
          <IconMapPinFilled color="var(--white-blue)" size={40} />
        </Draggable>
      </Map>
      <p>{address}</p>
      <Center>
        <Button disabled={!address}>Оплатить</Button>
      </Center>
    </AddressFormWrapper>
  );
};

export default AddressForm;
