import React, { FormEvent, useEffect, useState } from 'react'
import { IconMapPinFilled } from '@tabler/icons-react';
import { useDebouncedValue } from '@mantine/hooks';
import { Map, Draggable, Point } from "pigeon-maps";
import Geocode from "react-geocode";

import { API_KEY } from '../../../../config/api';
import { AddressFormWrapper, Button } from './styles';

Geocode.setApiKey(API_KEY);
Geocode.setLanguage("ru");
Geocode.setRegion("ru");

interface Props {
  setAddressData: (value: any) => void;
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
  }

  useEffect(() => {
    const getAddress = () => {
      Geocode.fromLatLng(String(debounced[0]), String(debounced[1])).then(
        (response) => {
          const address = response.results[0].formatted_address;
          setAddress(address);
        },
        (error) => {
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
      <Button disabled={!address}>Оплатить</Button>
    </AddressFormWrapper>
  )
}

export default AddressForm