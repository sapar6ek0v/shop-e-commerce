import React, { FormEvent, useState } from 'react'
import { Map, Draggable, Point } from "pigeon-maps";

import { AddressFormWrapper, Button } from './styles';

interface Props {
  setAddressData: (value: any) => void;
  nextStep: () => void;
}

const AddressForm = ({ setAddressData, nextStep }: Props) => {
  const [anchor, setAnchor] = useState<Point>([50.879, 4.6997]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAddressData(anchor);
    nextStep();
  }

  return (
    <AddressFormWrapper onSubmit={handleSubmit}>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img src="pigeon.svg" width={100} height={95} alt="Pigeon!" />
        </Draggable>
      </Map>
      <Button>Оплатить</Button>
    </AddressFormWrapper>
  )
}

export default AddressForm